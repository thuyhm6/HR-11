import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ContractSavePayload,
  DataTablesRequestPayload,
  EmployeeSearchDto,
  HrContractDto,
} from './contract-info-list.model';
import { ContractInfoListService } from './contract-info-list.service';

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
  'hrm.viewContract.title.deleteConfirmContent',
  'hrm.viewContract.title.validateContractNo', 'hrm.viewContract.title.validateContractName',
  'hrm.viewContract.title.detailTitle',
  'hrm.editContract.title.editTitle', 'hrm.editContract.title.addTitle', 'hrm.editContract.title.basicInfo',
  'hrm.editContract.title.workInfo', 'hrm.editContract.title.contentAndRemark',
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
  'hrm.editContract.title.saveChanges', 'hrm.editContract.title.addNew', 'hrm.editContract.title.search',
  'common.selectAll', 'common.stt', 'common.action', 'common.confirm', 'common.cancel', 'common.close',
  'common.export', 'common.loadFail', 'common.saveFail', 'common.deleteFail', 'common.noData', 'common.totalRows',
  'common.empId', 'common.empName', 'common.deptName',
  'alert.message.add_success', 'alert.message.update_success', 'alert.message.delete_success',
  'tempEmp.validateEmp', 'tempEmp.pickEmp',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.col.no', 'epi.field.position',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

interface ContractForm {
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

const EMPTY_FORM: ContractForm = {
  contractNo: '', personId: '', empId: '', localName: '', contractName: '',
  contractType: 'FULL_TIME', contractTypeCode: '', startContractDate: null, endContractDate: null, changeDate: null,
  deptNo: '', workPosition: '', positionNo: '', postGradeNo: '', salary: null, workTime: '', workHourType: '',
  totalPeriod: '', totalPeriod08: '', activity: 'ACTIVE', workContent: '', remark: '',
};

/**
 * Bản Angular của hrm/contract/viewNOContractInfo.html (Thymeleaf + jQuery DataTables) - danh sách hợp
 * đồng. Gọi lại nguyên API JSON đã có sẵn ở HrContractController/HrContractServiceImpl (xem
 * ContractInfoListService) - không đổi backend. Dùng nz-table (phân trang server-side qua
 * nzFrontPagination=false, gọi lại đúng POST /hrm/contractInfo/contracts DataTables server-side cũ)
 * thay cho jQuery DataTables; nz-modal thay modal Bootstrap cho xem/thêm/sửa/xóa; modal chọn nhân
 * viên tự xây (giống ViewTempEmpInfoListComponent) thay cho nút "Tìm" nhân viên vốn đã hỏng ở bản gốc.
 *
 * Lưu ý khi soát lại backend: HrContractServiceImpl.validateContract() bắt buộc personId khác rỗng,
 * nhưng bản Thymeleaf gốc (contractAddForm/contractEditForm) chỉ có field empId (mã hiển thị, không
 * phải PK) và nút "Tìm" nhân viên gọi hàm contractOpenEmployeeSearchModal() không tồn tại (script chỉ
 * định nghĩa openEmployeeSearchModal()) - nên Thêm mới/Cập nhật hợp đồng chưa từng chạy được ở bản gốc.
 * Bản Angular này thêm modal chọn nhân viên thật (trả về personId) để tính năng Thêm mới hoạt động;
 * khi Sửa thì giữ nguyên personId đã tải về (không cho đổi nhân viên đứng tên hợp đồng qua form sửa).
 *
 * Nút "Xuất Excel" gọi lại POST /contracts với length = recordsFiltered để lấy toàn bộ kết quả đang
 * lọc rồi xuất .xlsx client-side (thư viện xlsx, xem CLAUDE.md) - nút "Xuất kết quả" bản gốc trỏ tới
 * GET /export vốn xuất .csv (không đúng định dạng .xlsx yêu cầu) nên không giữ lại cách cũ; endpoint
 * GET /export vẫn được giữ nguyên ở backend dù không còn view Thymeleaf nào dùng - không có gì đảm bảo
 * chưa có nơi khác trỏ tới, giữ lại để tránh phá vỡ tích hợp ngoài phạm vi soát xét này.
 */
@Component({
  selector: 'app-contract-info-list',
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
    NzDescriptionsModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './contract-info-list.component.html',
  styleUrl: './contract-info-list.component.css',
})
export class ContractInfoListComponent implements OnInit {
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

  readonly detailVisible = signal(false);
  readonly detailRow = signal<HrContractDto | null>(null);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.editContract.title.addTitle', 'Thêm mới hợp đồng')
      : this.i18n.t('hrm.editContract.title.editTitle', 'Chỉnh sửa thông tin hợp đồng'),
  );
  form: ContractForm = { ...EMPTY_FORM };

  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  pickerKeyword = '';

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrContractDto | null = null;

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

  // ==================== Xem chi tiết ====================

  openDetail(row: HrContractDto): void {
    this.detailRow.set(row);
    this.detailVisible.set(true);
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  // ==================== Modal Thêm mới / Chỉnh sửa ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: HrContractDto): void {
    this.isNew.set(false);
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
    if (!this.form.contractNo.trim()) {
      this.message.error(this.i18n.t('hrm.viewContract.title.validateContractNo', 'Vui lòng nhập số hợp đồng!'));
      return;
    }
    if (!this.form.contractName.trim()) {
      this.message.error(this.i18n.t('hrm.viewContract.title.validateContractName', 'Vui lòng nhập tên hợp đồng!'));
      return;
    }
    if (this.isNew() && !this.form.personId) {
      this.message.error(this.i18n.t('tempEmp.validateEmp', 'Vui lòng chọn nhân viên!'));
      return;
    }

    const payload: ContractSavePayload = {
      contractNo: this.form.contractNo.trim(),
      personId: this.form.personId,
      contractTypeCode: this.form.contractTypeCode,
      contractType: this.form.contractType,
      startContractDate: this.formatYmd(this.form.startContractDate),
      endContractDate: this.formatYmd(this.form.endContractDate),
      changeDate: this.formatYmd(this.form.changeDate),
      deptNo: this.form.deptNo,
      workPosition: this.form.workPosition,
      positionNo: this.form.positionNo,
      postGradeNo: this.form.postGradeNo,
      salary: this.form.salary,
      workTime: this.form.workTime,
      workHourType: this.form.workHourType,
      totalPeriod: this.form.totalPeriod,
      totalPeriod08: this.form.totalPeriod08,
      activity: this.form.activity,
      workContent: this.form.workContent,
      remark: this.form.remark,
    };

    this.saving.set(true);
    const request$ = this.isNew() ? this.api.addContract(payload) : this.api.updateContract(payload);
    request$.subscribe({
      next: () =>
        this.onSaveSuccess(
          this.isNew()
            ? this.i18n.t('alert.message.add_success', 'Thêm mới thành công!')
            : this.i18n.t('alert.message.update_success', 'Cập nhật thành công!'),
        ),
      error: () => this.onSaveError(),
    });
  }

  private onSaveSuccess(msg: string): void {
    this.saving.set(false);
    this.modalVisible.set(false);
    this.message.success(msg);
    this.loadPage();
  }

  private onSaveError(): void {
    this.saving.set(false);
    this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
  }

  // ==================== Modal chọn nhân viên (chỉ dùng khi thêm mới) ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.api.searchEmployees(this.pickerKeyword.trim()).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  selectPickedEmployee(emp: EmployeeSearchDto): void {
    this.form.personId = emp.personId;
    this.form.empId = emp.empId;
    this.form.localName = emp.localName;
    if (!this.form.deptNo) this.form.deptNo = emp.deptNo;
    if (!this.form.workPosition) this.form.workPosition = emp.position;
    this.pickerVisible.set(false);
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: HrContractDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.contractNo} - ${this.deleteTarget.contractName || ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget) return;
    this.deleting.set(true);
    this.api.deleteContract(this.deleteTarget.contractNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('alert.message.delete_success', 'Xóa thành công!'));
        this.loadPage();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
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
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSachHopDong');
    XLSX.writeFile(workbook, 'danh_sach_hop_dong.xlsx');
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
