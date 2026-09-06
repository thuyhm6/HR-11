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
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
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
  'hrm.viewExpiredContract.title.contractNo', 'hrm.viewExpiredContract.title.empId',
  'hrm.viewExpiredContract.title.contractType', 'hrm.viewExpiredContract.title.dept',
  'hrm.viewExpiredContract.title.activity', 'hrm.viewExpiredContract.title.workPosition',
  'hrm.viewContract.title.contractNoPlaceholder', 'hrm.viewContract.title.empIdPlaceholder',
  'hrm.viewContract.title.deptPlaceholder', 'hrm.viewContract.title.workPositionPlaceholder',
  'hrm.viewContract.title.startDateFrom', 'hrm.viewContract.title.startDateTo',
  'hrm.viewContract.title.endDateFrom', 'hrm.viewContract.title.endDateTo',
  'hrm.viewContract.title.salaryFrom', 'hrm.viewContract.title.salaryFromPlaceholder',
  'hrm.viewContract.title.salaryTo', 'hrm.viewContract.title.salaryToPlaceholder',
  'hrm.viewContract.title.search', 'hrm.viewContract.title.clearFilter',
  'hrm.viewContract.title.contractName', 'hrm.viewContract.title.startDate', 'hrm.viewContract.title.endDate',
  'hrm.viewContract.title.position', 'hrm.viewContract.title.salary', 'hrm.viewContract.title.createDate',
  'hrm.viewContract.title.detailTitle',
  'hrm.editContract.title.basicInfo', 'hrm.editContract.title.workInfo', 'hrm.editContract.title.contentAndRemark',
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
  'expiredContract.action.extend', 'expiredContract.js.extendSuccess', 'expiredContract.js.extendPrefix',
  'common.selectAll', 'common.stt', 'common.action', 'common.export', 'common.loadFail', 'common.saveFail',
  'common.noData', 'common.totalRows', 'common.empName',
  'hrm.viewContract.title.validateContractNo', 'hrm.viewContract.title.validateContractName',
  'tempEmp.validateEmp',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

/** Mã CONTRACT_TYPE_CODE (bảng code global) dùng để tính loại hợp đồng kế tiếp khi gia hạn - giữ
 *  nguyên đúng quy tắc đã có ở viewExpiredContract.html gốc (hàm extendContract()). */
const CODE_PROBATION_TRAINING = '14014302';
const CODE_PROBATION = '123204';
const CODE_ONE_YEAR = '14014303';
const CODE_TWO_YEAR = '123203';
const CODE_INDEFINITE = '14014305';

interface ExtendForm {
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
 * Bản Angular của hrm/contract/viewExpiredContract.html (Thymeleaf + jQuery DataTables) - danh sách
 * hợp đồng sắp/đã hết hạn (mặc định lọc Ngày kết thúc từ hôm nay đến hôm nay + 7 ngày, giống bản
 * gốc). Gọi lại nguyên API JSON đã có sẵn ở HrContractController - dùng chung
 * ContractInfoListService/model với trang /contract-info-list (cùng backend, không đổi gì). Dùng
 * nz-table (phân trang server-side qua nzFrontPagination=false, gọi lại đúng POST
 * /hrm/contractInfo/contracts DataTables server-side cũ) thay cho jQuery DataTables.
 *
 * Trang này KHÔNG có Sửa/Xóa (đúng như bản gốc) - chỉ Xem chi tiết và "Gia hạn". "Gia hạn" mở modal
 * Thêm mới hợp đồng (POST /api/contract/add) với dữ liệu điền sẵn từ hợp đồng đang xem (đã có đủ
 * field cần thiết ngay trong dòng danh sách - không cần gọi thêm GET /api/contract/{no} như bản gốc):
 * loại hợp đồng kế tiếp + ngày bắt đầu/kết thúc được tính theo đúng quy tắc cũ (thử việc/1 năm -> 1
 * năm -> 2 năm -> không xác định thời hạn). Khác với bản gốc (form Gia hạn chỉ có empId, không có
 * personId nên có thể không lưu được), personId được mang thẳng từ dòng hợp đồng cũ sang - không cần
 * modal chọn nhân viên vì đã biết chắc nhân viên nào đang được gia hạn.
 */
@Component({
  selector: 'app-expired-contract-list',
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
  templateUrl: './expired-contract-list.component.html',
  styleUrl: './expired-contract-list.component.css',
})
export class ExpiredContractListComponent implements OnInit {
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
  endDateFrom: Date | null = this.today();
  endDateTo: Date | null = this.plusDays(this.today(), 7);
  activity: string | null = null;
  workPosition = '';
  salaryFrom: number | null = null;
  salaryTo: number | null = null;

  readonly detailVisible = signal(false);
  readonly detailRow = signal<HrContractDto | null>(null);

  readonly extendVisible = signal(false);
  readonly extending = signal(false);
  form: ExtendForm | null = null;

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
    this.endDateFrom = this.today();
    this.endDateTo = this.plusDays(this.today(), 7);
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

  // ==================== Gia hạn (mở modal Thêm mới, điền sẵn từ hợp đồng cũ) ====================

  openExtend(row: HrContractDto): void {
    const { nextTypeCode, startDate, endDate } = this.computeExtension(row);
    this.form = {
      contractNo: '',
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      contractName: this.i18n.t('expiredContract.js.extendPrefix', 'Gia hạn - ') + (row.contractName || ''),
      contractType: 'FULL_TIME',
      contractTypeCode: nextTypeCode,
      startContractDate: startDate,
      endContractDate: endDate,
      changeDate: null,
      deptNo: row.deptNo || '',
      workPosition: row.workPosition || '',
      positionNo: row.positionNo || '',
      postGradeNo: row.postGradeNo || '',
      salary: row.salary,
      workTime: row.workTime || '',
      workHourType: row.workHourType || '',
      totalPeriod: row.totalPeriod || '',
      totalPeriod08: row.totalPeriod08 || '',
      activity: 'ACTIVE',
      workContent: '',
      remark: '',
    };
    this.extendVisible.set(true);
  }

  closeExtend(): void {
    this.extendVisible.set(false);
  }

  saveExtend(): void {
    if (!this.form) return;
    if (!this.form.contractNo.trim()) {
      this.message.error(this.i18n.t('hrm.viewContract.title.validateContractNo', 'Vui lòng nhập số hợp đồng!'));
      return;
    }
    if (!this.form.personId) {
      this.message.error(this.i18n.t('tempEmp.validateEmp', 'Vui lòng chọn nhân viên!'));
      return;
    }

    const f = this.form;
    const payload: ContractSavePayload = {
      contractNo: f.contractNo.trim(),
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

    this.extending.set(true);
    this.api.addContract(payload).subscribe({
      next: () => {
        this.extending.set(false);
        this.extendVisible.set(false);
        this.message.success(this.i18n.t('expiredContract.js.extendSuccess', 'Gia hạn hợp đồng thành công!'));
        this.loadPage();
      },
      error: () => {
        this.extending.set(false);
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
      this.i18n.t('hrm.viewExpiredContract.title.contractNo', 'Số hợp đồng'),
      this.i18n.t('hrm.viewExpiredContract.title.empId', 'Mã nhân viên'),
      this.i18n.t('hrm.viewContract.title.contractName', 'Tên hợp đồng'),
      this.i18n.t('hrm.viewExpiredContract.title.contractType', 'Loại hợp đồng'),
      this.i18n.t('hrm.viewContract.title.startDate', 'Ngày bắt đầu'),
      this.i18n.t('hrm.viewContract.title.endDate', 'Ngày kết thúc'),
      this.i18n.t('hrm.viewExpiredContract.title.dept', 'Phòng ban'),
      this.i18n.t('hrm.viewContract.title.position', 'Vị trí'),
      this.i18n.t('hrm.viewContract.title.salary', 'Lương'),
      this.i18n.t('hrm.viewExpiredContract.title.activity', 'Hoạt động'),
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
    XLSX.utils.book_append_sheet(workbook, worksheet, 'HopDongSapHetHan');
    XLSX.writeFile(workbook, 'danh_sach_hop_dong_sap_het_han.xlsx');
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

  /** Tính loại hợp đồng kế tiếp + khoảng ngày khi gia hạn - đúng quy tắc ở hàm extendContract() bản gốc:
   *  thử việc/1 năm -> 1 năm (12 tháng) -> 2 năm (24 tháng) -> không xác định thời hạn (không có ngày kết thúc). */
  private computeExtension(row: HrContractDto): { nextTypeCode: string; startDate: Date; endDate: Date | null } {
    const currentCode = row.contractTypeCode;
    let nextTypeCode = CODE_ONE_YEAR;
    let durationMonths = 12;
    let indefinite = false;

    if (currentCode === CODE_PROBATION_TRAINING || currentCode === CODE_PROBATION) {
      nextTypeCode = CODE_ONE_YEAR;
      durationMonths = 12;
    } else if (currentCode === CODE_ONE_YEAR) {
      nextTypeCode = CODE_TWO_YEAR;
      durationMonths = 24;
    } else if (currentCode === CODE_TWO_YEAR) {
      nextTypeCode = CODE_INDEFINITE;
      indefinite = true;
    }

    const oldEnd = row.endContractDate ? new Date(row.endContractDate) : null;
    const startDate = oldEnd && !isNaN(oldEnd.getTime()) ? this.plusDays(oldEnd, 1) : this.today();

    if (indefinite) {
      return { nextTypeCode, startDate, endDate: null };
    }
    const endDate = this.plusDays(this.plusMonths(startDate, durationMonths), -1);
    return { nextTypeCode, startDate, endDate };
  }

  private today(): Date {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  private plusDays(d: Date, days: number): Date {
    const result = new Date(d);
    result.setDate(result.getDate() + days);
    return result;
  }

  private plusMonths(d: Date, months: number): Date {
    const result = new Date(d);
    result.setMonth(result.getMonth() + months);
    return result;
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
