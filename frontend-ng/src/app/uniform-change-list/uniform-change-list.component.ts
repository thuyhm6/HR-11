import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { UniformChangeListService } from './uniform-change-list.service';
import {
  UniformChange,
  UniformChangeDetail,
  UniformEmpInfo,
  UniformImportResult,
  UniformImportRow,
  UniformItem,
} from './uniform-change-list.model';

const I18N_KEYS = [
  'common.search.empIdOrName', 'common.search', 'common.clearFilter', 'common.exportExcel', 'common.importExcel',
  'common.downloadTemplate', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.cancel',
  'common.close', 'common.confirmDelete', 'common.yes', 'common.no', 'common.stt', 'common.empId', 'common.empName',
  'common.deptName', 'common.position', 'common.reason', 'common.remark', 'common.month', 'common.action',
  'common.status', 'common.loadFail', 'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess',
  'common.deleteFail', 'common.totalRows', 'common.noData', 'common.pleaseEnter', 'common.name',
  'hrm.uniform.month', 'hrm.uniform.hint', 'hrm.uniform.prevMonths', 'hrm.uniform.history.title',
  'hrm.uniform.history.empty', 'hrm.uniform.history.total', 'hrm.uniform.gender', 'hrm.uniform.hireDate',
  'hrm.uniform.changeDate', 'hrm.uniform.nextEligibleDate', 'hrm.uniform.size', 'hrm.uniform.quantity',
  'hrm.uniform.keywordPlaceholder', 'hrm.uniform.form.addTitle', 'hrm.uniform.form.editTitle',
  'hrm.uniform.form.items', 'hrm.uniform.form.lastChange', 'hrm.uniform.form.neverChanged',
  'hrm.uniform.form.notEligible', 'hrm.uniform.form.check', 'hrm.uniform.msg.empIdRequired',
  'hrm.uniform.msg.changeDateRequired', 'hrm.uniform.msg.noItem',
  'hrm.uniform.import.title', 'hrm.uniform.import.row', 'hrm.uniform.import.items', 'hrm.uniform.import.ok',
  'hrm.uniform.import.summary', 'hrm.uniform.import.saveValid', 'hrm.uniform.import.saved',
  'hrm.uniform.import.hasError', 'hrm.uniform.msg.noValidRow', 'hrm.uniform.sheetName', 'hrm.uniform.fileName',
  'hrm.uniform.templateFileName',
];

/** Phải khớp HrUniformServiceImpl.CHANGE_INTERVAL_MONTHS (mỗi nhân viên chỉ được đổi 6 tháng / 1 lần). */
const CHANGE_INTERVAL_MONTHS = 6;
/** Giới hạn số dòng khi xuất Excel toàn bộ khoảng tra cứu. */
const EXPORT_MAX_ROWS = 10000;

interface UniformChangeView extends UniformChange {
  byItem: Record<number, UniformChangeDetail>;
}

interface PrevMonth {
  /** YYYY-MM - khóa trong UniformChange.prevMonthQty */
  key: string;
  /** MM/YYYY */
  label: string;
}

/** 1 dòng trong popup chi tiết (mỗi loại đồng phục của 1 lần đổi = 1 dòng; first/span để gộp ô ngày đổi). */
interface HistoryRow {
  change: UniformChange;
  first: boolean;
  span: number;
  itemName: string;
  itemSize: string;
  quantity: number | null;
}

interface FormDetail {
  size: string;
  quantity: number | null;
}

/**
 * Đổi đồng phục nhân viên (menu /hrm/uniform/viewUniformChangeList).
 * Chọn 1 tháng -> hiển thị các lần đổi trong tháng đó; 6 cột cuối = tổng số lượng nhân viên đã đổi trong từng tháng
 * của 6 tháng trước (bấm vào để xem chi tiết),
 * cột đồng phục sinh động theo danh mục (uniform-item-list). Upload Excel 2 bước: xem trước/kiểm tra -> lưu.
 */
@Component({
  selector: 'app-uniform-change-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzButtonModule,
    NzDatePickerModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    NzPopconfirmModule,
    TranslatePipe,
  ],
  templateUrl: './uniform-change-list.component.html',
  styleUrl: './uniform-change-list.component.css',
})
export class UniformChangeListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly intervalMonths = CHANGE_INTERVAL_MONTHS;

  readonly items = signal<UniformItem[]>([]);
  readonly rows = signal<UniformChange[]>([]);
  readonly loading = signal(false);
  readonly exporting = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);

  /** Cột đồng phục hiển thị: item đang dùng + item đã ngừng nhưng có dữ liệu trong trang hiện tại. */
  readonly displayItems = computed(() => {
    const used = new Set<number>();
    this.rows().forEach((r) => r.details.forEach((d) => used.add(d.itemNo)));
    return this.items().filter((i) => i.activity === 1 || (i.itemNo != null && used.has(i.itemNo)));
  });
  readonly activeItems = computed(() => this.items().filter((i) => i.activity === 1));
  readonly viewRows = computed<UniformChangeView[]>(() =>
    this.rows().map((r) => {
      const byItem: Record<number, UniformChangeDetail> = {};
      r.details.forEach((d) => (byItem[d.itemNo] = d));
      return { ...r, byItem };
    }),
  );
  /** 6 tháng trước tháng tra cứu - cố định theo lần tra cứu gần nhất để header khớp dữ liệu. */
  readonly prevMonths = signal<PrevMonth[]>([]);
  readonly tableScrollX = computed(
    () => `${1250 + this.displayItems().length * 150 + (this.prevMonths().length + 1) * 85}px`,
  );

  // Popup chi tiết 1 tháng trước đó
  readonly historyVisible = signal(false);
  readonly historyLoading = signal(false);
  readonly historyTitle = signal('');
  readonly historyRows = signal<HistoryRow[]>([]);

  // Bộ lọc
  keyword = '';
  month: Date = new Date();
  pageIndex = 1;
  pageSize = 25;

  // Form thêm / sửa
  readonly formVisible = signal(false);
  readonly formSaving = signal(false);
  readonly formEmp = signal<UniformEmpInfo | null>(null);
  readonly formEmpLoading = signal(false);
  formChangeNo: number | null = null;
  formEmpId = '';
  formDate: Date | null = null;
  formReason = '';
  formRemark = '';
  formDetails: Record<number, FormDetail> = {};

  // Upload
  readonly importVisible = signal(false);
  readonly importLoading = signal(false);
  readonly importSaving = signal(false);
  readonly importResult = signal<UniformImportResult | null>(null);
  readonly importFileName = signal('');

  constructor(
    private readonly api: UniformChangeListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadItems();
    this.search();
  }

  private loadItems(): void {
    this.api.getItemList(false).subscribe({
      next: (list) => this.items.set(list ?? []),
      error: () => this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  // ==================== Tìm kiếm + phân trang server-side ====================

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  clearSearch(): void {
    this.keyword = '';
    this.month = new Date();
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

  private searchParams(start: number, length: number) {
    return {
      keyword: this.keyword.trim(),
      month: formatDate(this.month ?? new Date(), 'yyyy-MM', 'vi'),
      draw: this.pageIndex,
      start,
      length,
    };
  }

  private loadPage(): void {
    this.prevMonths.set(this.buildPrevMonths(this.month ?? new Date()));
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getChangeList(this.searchParams((this.pageIndex - 1) * this.pageSize, this.pageSize)).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsTotal.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsTotal.set(res.recordsTotal ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.recordsTotal.set(0);
        this.loading.set(false);
      },
    });
  }

  /** 6 tháng trước tháng tra cứu (cũ -> mới), vd tháng 10/2026 -> 04/2026 ... 09/2026. */
  private buildPrevMonths(month: Date): PrevMonth[] {
    const list: PrevMonth[] = [];
    for (let i = CHANGE_INTERVAL_MONTHS; i >= 1; i--) {
      const d = new Date(month.getFullYear(), month.getMonth() - i, 1);
      list.push({ key: formatDate(d, 'yyyy-MM', 'vi'), label: formatDate(d, 'MM/yyyy', 'vi') });
    }
    return list;
  }

  prevQty(row: UniformChange, m: PrevMonth): number {
    return row.prevMonthQty?.[m.key] ?? 0;
  }

  /** Tổng 6 tháng trước của 1 dòng. */
  prevTotal(row: UniformChange): number {
    return this.prevMonths().reduce((sum, m) => sum + this.prevQty(row, m), 0);
  }

  // ==================== Popup chi tiết 1 tháng trước đó ====================

  openHistory(row: UniformChange, m: PrevMonth): void {
    this.historyTitle.set(`${row.empId} - ${row.localName} (${m.label})`);
    this.historyRows.set([]);
    this.historyVisible.set(true);
    this.historyLoading.set(true);
    this.api.getPersonMonthChanges(row.personId, m.key).subscribe({
      next: (list) => {
        const names = new Map(this.items().map((i) => [i.itemNo, i.itemName]));
        const flat: HistoryRow[] = [];
        (list ?? []).forEach((c) => {
          const details = c.details.length ? c.details : [null];
          details.forEach((d, idx) =>
            flat.push({
              change: c,
              first: idx === 0,
              span: details.length,
              itemName: d ? names.get(d.itemNo) ?? String(d.itemNo) : '',
              itemSize: d?.itemSize ?? '',
              quantity: d?.quantity ?? null,
            }),
          );
        });
        this.historyRows.set(flat);
        this.historyLoading.set(false);
      },
      error: () => {
        this.historyLoading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeHistory(): void {
    this.historyVisible.set(false);
  }

  historyTotal(): number {
    return this.historyRows().reduce((sum, r) => sum + (r.quantity ?? 0), 0);
  }

  // ==================== Thêm / sửa / xóa ====================

  openAdd(): void {
    this.formChangeNo = null;
    this.formEmpId = '';
    this.formEmp.set(null);
    this.formDate = new Date();
    this.formReason = '';
    this.formRemark = '';
    this.formDetails = this.emptyFormDetails();
    this.formVisible.set(true);
  }

  openEdit(row: UniformChange): void {
    this.formChangeNo = row.changeNo;
    this.formEmpId = row.empId;
    this.formEmp.set(null);
    this.formDate = this.parseDmy(row.changeDate);
    this.formReason = row.reason ?? '';
    this.formRemark = row.remark ?? '';
    this.formDetails = this.emptyFormDetails();
    row.details.forEach((d) => {
      this.formDetails[d.itemNo] = { size: d.itemSize ?? '', quantity: d.quantity };
    });
    this.formVisible.set(true);
    this.lookupEmp();
  }

  closeForm(): void {
    this.formVisible.set(false);
  }

  /** Các item hiển thị trong form: item đang dùng + item cũ đã có dữ liệu ở bản ghi đang sửa. */
  formItems(): UniformItem[] {
    return this.items().filter(
      (i) => i.activity === 1 || (i.itemNo != null && !!(this.formDetails[i.itemNo]?.size || this.formDetails[i.itemNo]?.quantity)),
    );
  }

  private emptyFormDetails(): Record<number, FormDetail> {
    const map: Record<number, FormDetail> = {};
    this.items().forEach((i) => {
      if (i.itemNo != null) map[i.itemNo] = { size: '', quantity: null };
    });
    return map;
  }

  lookupEmp(): void {
    const empId = this.formEmpId.trim();
    if (!empId) {
      this.formEmp.set(null);
      return;
    }
    this.formEmpLoading.set(true);
    this.api.getEmpInfo(empId).subscribe({
      next: (emp) => {
        this.formEmpLoading.set(false);
        if (emp.error) {
          this.formEmp.set(null);
          this.message.warning(emp.error);
        } else {
          this.formEmp.set(emp);
        }
      },
      error: () => {
        this.formEmpLoading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** Cảnh báo sớm ở form thêm mới khi ngày đổi < ngày được đổi tiếp (backend vẫn kiểm tra chính thức). */
  formNotEligible(): boolean {
    const emp = this.formEmp();
    if (this.formChangeNo != null || !emp?.nextEligibleDate || !this.formDate) return false;
    const next = this.parseDmy(emp.nextEligibleDate);
    return !!next && this.startOfDay(this.formDate) < next;
  }

  saveForm(): void {
    if (!this.formEmpId.trim()) {
      this.message.warning(this.i18n.t('hrm.uniform.msg.empIdRequired', 'Vui lòng nhập mã nhân viên'));
      return;
    }
    if (!this.formDate) {
      this.message.warning(this.i18n.t('hrm.uniform.msg.changeDateRequired', 'Vui lòng nhập ngày đổi'));
      return;
    }
    const details: UniformChangeDetail[] = Object.entries(this.formDetails)
      .map(([itemNo, d]) => ({ itemNo: Number(itemNo), itemSize: d.size?.trim() || null, quantity: d.quantity }))
      .filter((d) => d.itemSize || d.quantity);
    if (details.length === 0) {
      this.message.warning(this.i18n.t('hrm.uniform.msg.noItem', 'Chưa nhập size / số lượng đồng phục nào'));
      return;
    }
    const payload: UniformImportRow = {
      changeNo: this.formChangeNo,
      empId: this.formEmpId.trim(),
      changeDate: formatDate(this.formDate, 'dd/MM/yyyy', 'vi'),
      reason: this.formReason.trim() || null,
      remark: this.formRemark.trim() || null,
      details,
    };
    this.formSaving.set(true);
    const req = this.formChangeNo == null ? this.api.insertChange(payload) : this.api.updateChange(payload);
    req.subscribe({
      next: (res) => {
        this.formSaving.set(false);
        this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.formVisible.set(false);
        this.loadPage();
      },
      error: (err) => {
        this.formSaving.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'), { nzDuration: 6000 });
      },
    });
  }

  deleteRow(row: UniformChange): void {
    this.api.deleteChange(row.changeNo).subscribe({
      next: (res) => {
        this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        if (this.rows().length === 1 && this.pageIndex > 1) this.pageIndex--;
        this.loadPage();
      },
      error: (err) => this.message.error(err?.error?.error || this.i18n.t('common.deleteFail', 'Xóa thất bại!')),
    });
  }

  // ==================== Upload Excel ====================

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;

    this.importFileName.set(file.name);
    this.importResult.set(null);
    this.importVisible.set(true);
    this.importLoading.set(true);
    this.api.previewImport(file).subscribe({
      next: (res) => {
        this.importLoading.set(false);
        this.importResult.set(res);
      },
      error: (err) => {
        this.importLoading.set(false);
        this.importVisible.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'), { nzDuration: 6000 });
      },
    });
  }

  closeImport(): void {
    this.importVisible.set(false);
  }

  saveImport(): void {
    const result = this.importResult();
    const validRows = (result?.rows ?? []).filter((r) => !r.errors?.length);
    if (validRows.length === 0) {
      this.message.warning(this.i18n.t('hrm.uniform.msg.noValidRow', 'Không có dòng hợp lệ để lưu'));
      return;
    }
    this.importSaving.set(true);
    this.api.saveImport(validRows).subscribe({
      next: (res) => {
        this.importSaving.set(false);
        if (res.errorCount > 0) {
          // Dữ liệu thay đổi giữa 2 bước (vd. người khác vừa nhập) - hiển thị lại lỗi, chưa lưu dòng nào
          this.importResult.set(res);
          this.message.warning(this.i18n.t('hrm.uniform.import.hasError', 'Có dòng không hợp lệ, chưa lưu dữ liệu. Vui lòng kiểm tra lại.'));
          return;
        }
        this.message.success(
          this.i18n.t('hrm.uniform.import.saved', 'Đã lưu {0} dòng').replace('{0}', String(res.validCount)),
        );
        this.importVisible.set(false);
        this.search();
      },
      error: (err) => {
        this.importSaving.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  importSummary(): string {
    const r = this.importResult();
    if (!r) return '';
    return this.i18n
      .t('hrm.uniform.import.summary', 'Tổng {0} dòng: {1} hợp lệ, {2} lỗi')
      .replace('{0}', String(r.rows.length))
      .replace('{1}', String(r.validCount))
      .replace('{2}', String(r.errorCount));
  }

  /** "Quần đen: L x1; Áo xanh: L x1" */
  detailSummary(details: UniformChangeDetail[]): string {
    const names = new Map(this.items().map((i) => [i.itemNo, i.itemName]));
    return details
      .map((d) => `${names.get(d.itemNo) ?? d.itemNo}: ${d.itemSize ?? ''}${d.quantity != null ? ' x' + d.quantity : ''}`.trim())
      .join('; ');
  }

  // ==================== Xuất Excel / file mẫu (cùng bố cục header 2 dòng với file upload) ====================

  /** File mẫu không có Phòng ban / Chức vụ / Giới tính / Ngày vào - backend tự lấy từ HR_EMPLOYEE, HR_PERSONAL_INFO. */
  downloadTemplate(): void {
    const sample = [this.buildExcelRow(null, false)];
    this.writeWorkbook(sample, this.i18n.t('hrm.uniform.templateFileName', 'mau_doi_dong_phuc') + '.xlsx', false);
  }

  exportExcel(): void {
    this.exporting.set(true);
    this.api.getChangeList(this.searchParams(0, EXPORT_MAX_ROWS)).subscribe({
      next: (res) => {
        this.exporting.set(false);
        if (res.error) {
          this.message.error(res.error);
          return;
        }
        const dataRows = (res.data ?? []).map((r) => this.buildExcelRow(r, true));
        const fileName = `${this.i18n.t('hrm.uniform.fileName', 'doi_dong_phuc')}_${formatDate(this.month ?? new Date(), 'yyyyMM', 'vi')}.xlsx`;
        this.writeWorkbook(dataRows, fileName, true);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /**
   * Cột cố định trước nhóm đồng phục: Mã, Họ tên, [Phòng ban, Chức vụ, Giới tính, Ngày vào - chỉ khi xuất Excel],
   * Ngày đổi, Lí do.
   */
  private fixedHeaders(withEmpInfo: boolean): string[] {
    const t = (k: string, f: string) => this.i18n.t(k, f);
    const empInfo = withEmpInfo
      ? [t('common.deptName', 'Phòng ban'), t('common.position', 'Chức vụ'), t('hrm.uniform.gender', 'Giới tính'),
         t('hrm.uniform.hireDate', 'Ngày vào')]
      : [];
    return [
      t('common.empId', 'Mã nhân viên'), t('common.empName', 'Họ tên'), ...empInfo,
      t('hrm.uniform.changeDate', 'Ngày đổi'), t('common.reason', 'Lý do'),
    ];
  }

  private excelItems(): UniformItem[] {
    return this.activeItems();
  }

  private buildExcelRow(r: UniformChange | null, withEmpInfo: boolean): (string | number)[] {
    const empInfo: string[] = withEmpInfo
      ? [r?.deptName ?? '', r?.postGradeName ?? '', r?.sexName ?? '', r?.dateStarted ?? '']
      : [];
    const fixed: (string | number)[] = r
      ? [r.empId, r.localName, ...empInfo, r.changeDate, r.reason ?? '']
      : ['', '', ...empInfo, formatDate(new Date(), 'dd/MM/yyyy', 'vi'), ''];
    const cells: (string | number)[] = [...fixed];
    this.excelItems().forEach((item) => {
      const d = r?.details.find((x) => x.itemNo === item.itemNo);
      if (item.hasSize === 'Y') cells.push(d?.itemSize ?? '');
      if (item.hasQuantity === 'Y') cells.push(d?.quantity ?? '');
    });
    cells.push(r?.remark ?? '');
    return cells;
  }

  private writeWorkbook(dataRows: (string | number)[][], fileName: string, withEmpInfo: boolean): void {
    const t = (k: string, f: string) => this.i18n.t(k, f);
    const fixed = this.fixedHeaders(withEmpInfo);
    const header1: string[] = [...fixed];
    const header2: string[] = fixed.map(() => '');
    const merges: XLSX.Range[] = fixed.map((_, c) => ({ s: { r: 0, c }, e: { r: 1, c } }));

    this.excelItems().forEach((item) => {
      const start = header1.length;
      const subCols: string[] = [];
      if (item.hasSize === 'Y') subCols.push(t('hrm.uniform.size', 'Size'));
      if (item.hasQuantity === 'Y') subCols.push(t('hrm.uniform.quantity', 'Số lượng'));
      subCols.forEach((label, i) => {
        header1.push(i === 0 ? item.itemName : '');
        header2.push(label);
      });
      if (subCols.length > 1) merges.push({ s: { r: 0, c: start }, e: { r: 0, c: start + subCols.length - 1 } });
    });
    const remarkCol = header1.length;
    header1.push(t('common.remark', 'Ghi chú'));
    header2.push('');
    merges.push({ s: { r: 0, c: remarkCol }, e: { r: 1, c: remarkCol } });

    const worksheet = XLSX.utils.aoa_to_sheet([header1, header2, ...dataRows]);
    worksheet['!merges'] = merges;
    worksheet['!cols'] = header1.map((_, c) => ({ wch: c < fixed.length || c === remarkCol ? 16 : 10 }));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, t('hrm.uniform.sheetName', 'DoiDongPhuc').substring(0, 31));
    XLSX.writeFile(workbook, fileName);
  }

  // ==================== Tiện ích ngày ====================

  private parseDmy(text: string | null | undefined): Date | null {
    if (!text) return null;
    const [d, m, y] = text.split('/').map(Number);
    return d && m && y ? new Date(y, m - 1, d) : null;
  }

  private startOfDay(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
}
