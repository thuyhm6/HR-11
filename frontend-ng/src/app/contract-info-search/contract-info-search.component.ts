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
import { DataTablesRequestPayload, HrContractDto } from '../contract-info-list/contract-info-list.model';
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
  'hrm.viewContract.title.detailTitle',
  'hrm.editContract.title.contractTypeCode', 'hrm.editContract.title.fullTime', 'hrm.editContract.title.partTime',
  'hrm.editContract.title.intern', 'hrm.editContract.title.consultant', 'hrm.editContract.title.active',
  'hrm.editContract.title.inactive', 'hrm.editContract.title.workTime', 'hrm.editContract.title.workHourType',
  'hrm.editContract.title.workContent', 'hrm.editContract.title.remark',
  'common.selectAll', 'common.stt', 'common.action', 'common.export', 'common.loadFail', 'common.noData',
  'common.totalRows', 'common.empName',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

/**
 * Bản Angular của hrm/contract/viewContractInfoForSearch.html (Thymeleaf + jQuery DataTables) - trang
 * tra cứu hợp đồng, chỉ xem (không Thêm/Sửa/Xóa/Gia hạn). Dùng chung ContractInfoListService/model với
 * /contract-info-list và /expired-contract-list (cùng backend HrContractController, không đổi gì).
 * Dùng nz-table (phân trang server-side qua nzFrontPagination=false, gọi lại đúng POST
 * /hrm/contractInfo/contracts DataTables server-side cũ) thay cho jQuery DataTables; nz-modal thay
 * modal Bootstrap cho xem chi tiết.
 *
 * Nút "Xuất Excel" gọi lại POST /contracts với length = recordsFiltered để lấy toàn bộ kết quả đang
 * lọc rồi xuất .xlsx client-side (thư viện xlsx, xem CLAUDE.md) - nút "Xuất kết quả" bản gốc trỏ tới
 * GET /export vốn xuất .csv (không đúng định dạng .xlsx yêu cầu) nên không giữ lại cách cũ.
 */
@Component({
  selector: 'app-contract-info-search',
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
  templateUrl: './contract-info-search.component.html',
  styleUrl: './contract-info-search.component.css',
})
export class ContractInfoSearchComponent implements OnInit {
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

  openDetail(row: HrContractDto): void {
    this.detailRow.set(row);
    this.detailVisible.set(true);
  }

  closeDetail(): void {
    this.detailVisible.set(false);
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
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TraCuuHopDong');
    XLSX.writeFile(workbook, 'tra_cuu_hop_dong.xlsx');
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

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
