import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ContractSavePayload,
  DataTablesRequestPayload,
  HrContractDto,
} from '../contract-info-list/contract-info-list.model';
import { ContractInfoListService } from '../contract-info-list/contract-info-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'hrm.viewContract.title.contractNo', 'hrm.viewContract.title.contractNoPlaceholder',
  'hrm.viewContract.title.empId', 'hrm.viewContract.title.empIdPlaceholder',
  'hrm.viewContract.title.contractType', 'hrm.viewContract.title.dept', 'hrm.viewContract.title.deptPlaceholder',
  'hrm.viewContract.title.startDateFrom', 'hrm.viewContract.title.startDateTo',
  'hrm.viewContract.title.endDateFrom', 'hrm.viewContract.title.endDateTo',
  'hrm.viewContract.title.activity', 'hrm.viewContract.title.workPosition', 'hrm.viewContract.title.workPositionPlaceholder',
  'hrm.viewContract.title.salaryFrom', 'hrm.viewContract.title.salaryFromPlaceholder',
  'hrm.viewContract.title.salaryTo', 'hrm.viewContract.title.salaryToPlaceholder',
  'hrm.viewContract.title.search', 'hrm.viewContract.title.clearFilter',
  'hrm.viewContract.title.contractName', 'hrm.viewContract.title.startDate', 'hrm.viewContract.title.endDate',
  'hrm.viewContract.title.position', 'hrm.viewContract.title.salary', 'hrm.viewContract.title.createDate',
  'hrm.editContract.title.editTitle', 'hrm.editContract.title.basicInfo', 'hrm.editContract.title.workInfo',
  'hrm.editContract.title.contentAndRemark',
  'hrm.editContract.title.contractNo', 'hrm.editContract.title.empId', 'hrm.editContract.title.contractName',
  'hrm.editContract.title.contractType', 'hrm.editContract.title.contractTypeCode',
  'hrm.editContract.title.startContractDate', 'hrm.editContract.title.endContractDate', 'hrm.editContract.title.changeDate',
  'hrm.editContract.title.dept', 'hrm.editContract.title.workPosition', 'hrm.editContract.title.positionNo',
  'hrm.editContract.title.postGradeNo', 'hrm.editContract.title.salary', 'hrm.editContract.title.workTime',
  'hrm.editContract.title.workHourType', 'hrm.editContract.title.selectWorkHourType',
  'hrm.editContract.title.totalPeriod', 'hrm.editContract.title.totalPeriod08', 'hrm.editContract.title.activity',
  'hrm.editContract.title.workContent', 'hrm.editContract.title.workContentPlaceholder',
  'hrm.editContract.title.remark', 'hrm.editContract.title.remarkPlaceholder',
  'hrm.editContract.title.fullTime', 'hrm.editContract.title.partTime', 'hrm.editContract.title.intern',
  'hrm.editContract.title.consultant', 'hrm.editContract.title.overtime', 'hrm.editContract.title.flexible',
  'hrm.editContract.title.active', 'hrm.editContract.title.inactive', 'hrm.editContract.title.cancel',
  'hrm.editContract.title.saveChanges',
  'hrm.viewContract.title.validateContractName',
  'common.selectAll', 'common.stt', 'common.action', 'common.export', 'common.loadFail', 'common.saveFail',
  'common.noData', 'common.totalRows', 'common.empName',
  'alert.message.update_success',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

interface ContractEditForm {
  contractNo: string;
  personId: string;
  empId: string;
  localName: string;
  contractName: string;
  contractType: string;
  contractTypeCode: string;
  startContractDate: Date | null;
  endContractDate: Date | null;
  changeDate: Date | null;
  deptNo: string;
  workPosition: string;
  positionNo: string;
  postGradeNo: string;
  salary: number | null;
  workTime: string;
  workHourType: string;
  totalPeriod: string;
  totalPeriod08: string;
  activity: string;
  workContent: string;
  remark: string;
}

/**
 * Giao diện Angular "Chỉnh sửa hợp đồng" - danh sách hợp đồng cho phép sửa trực tiếp thông tin (không
 * có Thêm mới/Xóa, đúng phạm vi được yêu cầu). Không có view Thymeleaf gốc tương ứng
 * (viewContractChangeList.html không tồn tại trong repo) - trang này dùng lại nguyên
 * ContractInfoListService/model đã có ở /contract-info-list, /expired-contract-list,
 * /contract-info-search (cùng backend HrContractController, không đổi gì). Dùng nz-table (phân trang
 * server-side qua nzFrontPagination=false, gọi lại đúng POST /hrm/contractInfo/contracts DataTables
 * server-side cũ) + nz-modal cho form sửa (POST /api/contract/update).
 *
 * Khác với modal Sửa ở /contract-info-list (personId giữ nguyên, không đổi nhân viên đứng tên hợp
 * đồng) - trang này cũng giữ nguyên quy tắc đó vì mục đích chỉ là chỉnh sửa thông tin hợp đồng, không
 * phải đổi nhân viên.
 */
@Component({
  selector: 'app-contract-change-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './contract-change-list.component.html',
  styleUrl: './contract-change-list.component.css',
})
export class ContractChangeListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrContractDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsFiltered = signal(0);
  readonly exporting = signal(false);

  pageIndex = 1;
  pageSize = 25;

  contractNo = '';
  empId = '';
  contractType: string | null = null;
  department = '';
  startDateFrom: Date | null = null;
  startDateTo: Date | null = null;
  endDateFrom: Date | null = null;
  endDateTo: Date | null = null;
  activity: string | null = null;
  workPosition = '';
  salaryFrom: number | null = null;
  salaryTo: number | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  form: ContractEditForm | null = null;

  constructor(
    private readonly api: ContractInfoListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  clearSearch(): void {
    this.contractNo = '';
    this.empId = '';
    this.contractType = null;
    this.department = '';
    this.startDateFrom = null;
    this.startDateTo = null;
    this.endDateFrom = null;
    this.endDateTo = null;
    this.activity = null;
    this.workPosition = '';
    this.salaryFrom = null;
    this.salaryTo = null;
    this.search();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }

  formatDisplayDate(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, 'dd/MM/yyyy', 'vi');
  }

  formatDisplayDateTime(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, 'dd/MM/yyyy HH:mm', 'vi');
  }

  formatSalary(salary: number | null): string {
    return salary != null ? new Intl.NumberFormat('vi-VN').format(salary) + ' VNĐ' : '';
  }

  // ==================== Modal Chỉnh sửa ====================

  openEdit(row: HrContractDto): void {
    this.form = {
      contractNo: row.contractNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      contractName: row.contractName || '',
      contractType: row.contractType || 'FULL_TIME',
      contractTypeCode: row.contractTypeCode || '',
      startContractDate: this.toDate(row.startContractDate),
      endContractDate: this.toDate(row.endContractDate),
      changeDate: this.toDate(row.changeDate),
      deptNo: row.deptNo || '',
      workPosition: row.workPosition || '',
      positionNo: row.positionNo || '',
      postGradeNo: row.postGradeNo || '',
      salary: row.salary,
      workTime: row.workTime || '',
      workHourType: row.workHourType || '',
      totalPeriod: row.totalPeriod || '',
      totalPeriod08: row.totalPeriod08 || '',
      activity: row.activity || 'ACTIVE',
      workContent: row.workContent || '',
      remark: row.remark || '',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form) return;
    if (!this.form.contractName.trim()) {
      this.message.error(this.i18n.t('hrm.viewContract.title.validateContractName', 'Vui lòng nhập tên hợp đồng!'));
      return;
    }

    const f = this.form;
    const payload: ContractSavePayload = {
      contractNo: f.contractNo,
      personId: f.personId,
      contractTypeCode: f.contractTypeCode,
      contractType: f.contractType,
      startContractDate: this.formatYmd(f.startContractDate),
      endContractDate: this.formatYmd(f.endContractDate),
      changeDate: this.formatYmd(f.changeDate),
      deptNo: f.deptNo,
      workPosition: f.workPosition,
      positionNo: f.positionNo,
      postGradeNo: f.postGradeNo,
      salary: f.salary,
      workTime: f.workTime,
      workHourType: f.workHourType,
      totalPeriod: f.totalPeriod,
      totalPeriod08: f.totalPeriod08,
      activity: f.activity,
      workContent: f.workContent,
      remark: f.remark,
    };

    this.saving.set(true);
    this.api.updateContract(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t('alert.message.update_success', 'Cập nhật thành công!'));
        this.loadPage();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    this.exporting.set(true);
    const payload = this.buildRequestPayload(0, Math.max(this.recordsFiltered(), 1));
    this.api.getPageList(payload).subscribe({
      next: (res) => {
        this.exporting.set(false);
        this.downloadXlsx(res.data ?? []);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private downloadXlsx(list: HrContractDto[]): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('hrm.viewContract.title.contractNo', 'Số hợp đồng'),
      this.i18n.t('hrm.viewContract.title.empId', 'Mã nhân viên'),
      this.i18n.t('hrm.viewContract.title.contractName', 'Tên hợp đồng'),
      this.i18n.t('hrm.viewContract.title.contractType', 'Loại hợp đồng'),
      this.i18n.t('hrm.viewContract.title.startDate', 'Ngày bắt đầu'),
      this.i18n.t('hrm.viewContract.title.endDate', 'Ngày kết thúc'),
      this.i18n.t('hrm.viewContract.title.dept', 'Phòng ban'),
      this.i18n.t('hrm.viewContract.title.position', 'Vị trí'),
      this.i18n.t('hrm.viewContract.title.salary', 'Lương'),
      this.i18n.t('hrm.viewContract.title.activity', 'Hoạt động'),
      this.i18n.t('hrm.viewContract.title.createDate', 'Ngày tạo'),
    ];
    const dataRows = list.map((r, i) => [
      i + 1, r.contractNo, r.empId, r.contractName, r.contractTypeName,
      this.formatDisplayDate(r.startContractDate), this.formatDisplayDate(r.endContractDate),
      r.deptNo, r.workPosition, r.salary,
      r.activity === 'ACTIVE'
        ? this.i18n.t('hrm.editContract.title.active', 'Hoạt động')
        : this.i18n.t('hrm.editContract.title.inactive', 'Không hoạt động'),
      this.formatDisplayDateTime(r.createDate),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'ChinhSuaHopDong');
    XLSX.writeFile(workbook, 'danh_sach_chinh_sua_hop_dong.xlsx');
  }

  // ==================== Helpers ====================

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    const payload = this.buildRequestPayload((this.pageIndex - 1) * this.pageSize, this.pageSize);
    this.api.getPageList(payload).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsFiltered.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsFiltered.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.recordsFiltered.set(0);
        this.loading.set(false);
      },
    });
  }

  private buildRequestPayload(start: number, length: number): DataTablesRequestPayload {
    return {
      draw: this.pageIndex,
      start,
      length,
      searchParams: {
        contractNo: this.contractNo,
        empId: this.empId,
        contractType: this.contractType ?? '',
        department: this.department,
        startDateFrom: this.formatYmd(this.startDateFrom),
        startDateTo: this.formatYmd(this.startDateTo),
        endDateFrom: this.formatYmd(this.endDateFrom),
        endDateTo: this.formatYmd(this.endDateTo),
        activity: this.activity ?? '',
        workPosition: this.workPosition,
        salaryFrom: this.salaryFrom != null ? String(this.salaryFrom) : '',
        salaryTo: this.salaryTo != null ? String(this.salaryTo) : '',
      },
    };
  }

  private toDate(dateStr: string | null): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
