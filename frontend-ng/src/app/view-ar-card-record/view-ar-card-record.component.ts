import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { firstValueFrom } from 'rxjs';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { ViewArCardRecordService } from './view-ar-card-record.service';
import {
  ArCardRecordDto,
  ArCardRecordForm,
  AuthDeptNode,
  EmployeeOption,
  ImportDeviceResult,
  ShiftOption,
} from './view-ar-card-record.model';

/** Toàn bộ key bên dưới đã có sẵn trong message.properties (namespace "acr" dùng riêng cho trang này,
 *  "common"/"attSearch"/"empSearch" dùng chung với các trang khác) - chỉ bổ sung 5 key còn thiếu
 *  (acr.imp.result.*, acr.msg.selectWorkDate) vào messages.properties/messages_vi_VN.properties. */
const I18N_KEYS = [
  'common.search.empIdOrName', 'common.placeholder.enterEmpId', 'common.fromDate', 'common.toDate',
  'common.deptName', 'attSearch.shiftType', 'attSearch.all', 'common.search', 'common.clearFilter',
  'common.exportExcel', 'common.downloadTemplate', 'common.importExcel', 'common.select',
  'common.stt', 'common.empId', 'common.empName', 'common.position', 'common.action',
  'common.close', 'common.cancel', 'common.save', 'common.loadFail', 'common.totalRows',
  'attSearch.workDate', 'empSearch.placeholder.empId',
  'acr.col.swipeTime', 'acr.col.doorType', 'acr.col.dataSource', 'acr.col.employee', 'acr.col.remark',
  'acr.modal.addTitle', 'acr.modal.editTitle', 'acr.btn.addRecord', 'acr.btn.deleteSelected',
  'acr.confirm.deleteRecord', 'acr.confirm.deleteSelected', 'acr.doorType.in', 'acr.doorType.out',
  'acr.msg.selectEmployee', 'acr.msg.selectWorkDate', 'acr.msg.selectDatetime', 'acr.msg.selectToDelete',
  'acr.btn.importFromDevice', 'acr.imp.title', 'acr.imp.btnRun', 'acr.imp.processing',
  'acr.imp.msg.selectDate', 'acr.imp.result.total', 'acr.imp.result.imported', 'acr.imp.result.skipped',
  'acr.imp.result.notFound', 'mep.msg.loadDeptFailed', 'applyAtt.importResult', 'applyAtt.saveError',
  'applyAtt.sendError',
];

/** INSERT_BY của bản ghi tự động (Máy quẹt thẻ='M', Import Excel='A') - không cho tick chọn/xóa,
 *  đúng hành vi acrToggleAll()/render cột checkbox+action ở bản gốc. */
const AUTO_INSERT_BY = new Set(['M', 'A']);

const EMPTY_FORM: ArCardRecordForm = {
  recordNo: null, personId: '', empId: '', empKeyword: '', empOptions: [], empSearching: false,
  arDateStr: null, swipeDateTime: '', doorType: null, remark: '',
};

/**
 * Bản Angular của ar/attendanceMintenance/viewArCardRecord.html (Thymeleaf + DataTables serverSide) -
 * Quản lý lịch sử ra vào (quẹt thẻ). Gọi lại nguyên các API JSON đã có sẵn ở ArAttendanceSearchController
 * (xem ViewArCardRecordService) - không đổi backend. Kiến trúc bám theo CoordApplyAttendanceInfoComponent
 * (nz-table phân trang server-side qua nzFrontPagination=false + DataTablesResponse<T>, nz-tree-select +
 * expandDeptSelection cho bộ lọc phòng ban, exportExcel client-side chỉ trên trang dữ liệu đang tải -
 * đúng hành vi DataTables Buttons gốc không cấu hình exportOptions.modifier.page='all'), widget tìm nhân
 * viên trong modal Thêm/Sửa dùng nz-autocomplete (giống ApplyAttendanceBatchInfoComponent) thay cho
 * EmployeeSearchModal.js, Import Excel dùng input file ẩn + upload trực tiếp (giống
 * ApplyAttendanceBatchInfoComponent.onImportFileSelected) thay cho modal ExcelImport.js riêng.
 *
 * Trang chỉ tồn tại ở phía HRM (attendanceMintenance là khu vực quản trị chấm công của HR, có bản ESS tự
 * xem riêng là ArCardRecordForSelf/viewArCardRecordForSelf.html) - coi hrmMode luôn = true, không cần đọc
 * lại session sysMode như bản gốc (giống cách EssViewEmpCalendarComponent coi hrmMode luôn = false). Nếu
 * lỡ truy cập từ phiên ESS, các API insert/update/delete/importFromDevice ở backend đã tự chặn 403
 * (isEssMode(session)) nên vẫn an toàn.
 */
@Component({
  selector: 'app-view-ar-card-record',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzCheckboxModule,
    NzAutocompleteModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-ar-card-record.component.html',
  styleUrl: './view-ar-card-record.component.css',
})
export class ViewArCardRecordComponent implements OnInit {
  readonly pageSizeOptions = [25, 50, 100, 200];
  readonly hrmMode = true;

  readonly rows = signal<ArCardRecordDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);

  readonly selectedRecordNos = signal<Set<number>>(new Set());

  readonly modalVisible = signal(false);
  readonly isEdit = signal(false);
  readonly saving = signal(false);
  form: ArCardRecordForm = { ...EMPTY_FORM };

  readonly impModalVisible = signal(false);
  readonly impRunning = signal(false);
  readonly impResult = signal<ImportDeviceResult | null>(null);
  impFromDate: Date | null = null;
  impToDate: Date | null = null;

  readonly importingExcel = signal(false);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  shiftNo: string | null = null;

  pageIndex = 1;
  pageSize = 25;

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();
  private empSearchTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private readonly api: ViewArCardRecordService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly tabs: TabService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }

  private initDefaultDateRange(): void {
    const today = new Date();
    this.fromDate = today;
    this.toDate = today;
  }

  // ==================== Tìm kiếm + phân trang server-side ====================

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  clearSearch(): void {
    this.keyword = '';
    this.deptNos = [];
    this.shiftNo = null;
    this.initDefaultDateRange();
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

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getPageList({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
        shiftNo: this.shiftNo ?? '',
        draw: this.pageIndex,
        start: (this.pageIndex - 1) * this.pageSize,
        length: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          if (res.error) {
            this.errorMessage.set(res.error);
            this.rows.set([]);
            this.recordsTotal.set(0);
          } else {
            this.rows.set(res.data ?? []);
            this.recordsTotal.set(res.recordsTotal ?? 0);
          }
          this.selectedRecordNos.set(new Set());
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

  // ==================== Chọn dòng (checkbox) - chỉ dòng nhập tay mới được chọn/xóa ====================

  isRowSelectable(row: ArCardRecordDto): boolean {
    return !AUTO_INSERT_BY.has((row.insertBy || '').toUpperCase());
  }

  isRowSelected(recordNo: number): boolean {
    return this.selectedRecordNos().has(recordNo);
  }

  toggleRow(recordNo: number, checked: boolean): void {
    const next = new Set(this.selectedRecordNos());
    if (checked) next.add(recordNo);
    else next.delete(recordNo);
    this.selectedRecordNos.set(next);
  }

  get allSelectableChecked(): boolean {
    const selectable = this.rows().filter((r) => this.isRowSelectable(r));
    return selectable.length > 0 && selectable.every((r) => this.isRowSelected(r.recordNo));
  }

  toggleAll(checked: boolean): void {
    const next = new Set(this.selectedRecordNos());
    this.rows().filter((r) => this.isRowSelectable(r)).forEach((r) => {
      if (checked) next.add(r.recordNo);
      else next.delete(r.recordNo);
    });
    this.selectedRecordNos.set(next);
  }

  // ==================== Xuất excel (client-side, đúng trang dữ liệu đang tải - xem docblock class) ====================

  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('common.stt', 'STT'), t('common.empId', 'Mã nhân viên'), t('common.empName', 'Họ tên'),
      t('common.deptName', 'Phòng ban'), t('common.position', 'Chức vụ'), t('attSearch.shiftType', 'Ca'),
      t('attSearch.workDate', 'Ngày công'), t('acr.col.swipeTime', 'Thời gian quẹt thẻ'),
      t('acr.col.doorType', 'Loại'), t('acr.col.dataSource', 'Nguồn dữ liệu'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postGradeName, r.shiftName,
      r.arDateStr, r.swipeTime, r.doorType, r.dataSourceName,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'LichSuRaVao');
    XLSX.writeFile(workbook, 'lich_su_ra_vao.xlsx');
  }

  // ==================== Modal Thêm/Sửa bản ghi ====================

  openAddModal(): void {
    this.form = { ...EMPTY_FORM };
    this.isEdit.set(false);
    this.modalVisible.set(true);
  }

  openEditModal(row: ArCardRecordDto): void {
    this.api.getDetail(row.recordNo).subscribe({
      next: (res) => {
        if (!res.success || !res.data) {
          this.message.warning(res.message || this.i18n.t('common.loadFail', 'Không thể tải dữ liệu bản ghi.'));
          return;
        }
        const d = res.data;
        this.form = {
          recordNo: d.recordNo,
          personId: d.personId,
          empId: d.empId || '',
          empKeyword: (d.empId || '') + (d.localName ? ' - ' + d.localName : ''),
          empOptions: [],
          empSearching: false,
          arDateStr: this.parseArDateStr(d.arDateStr),
          swipeDateTime: d.swipeDatetime || '',
          doorType: d.doorType || null,
          remark: d.remark || '',
        };
        this.isEdit.set(true);
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('common.loadFail', 'Lỗi khi tải thông tin bản ghi.')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  onEmpKeywordChange(value: string): void {
    this.form.empKeyword = value;
    this.form.personId = '';
    if (this.empSearchTimer) clearTimeout(this.empSearchTimer);
    const keyword = value.trim();
    if (!keyword) {
      this.form.empOptions = [];
      return;
    }
    this.empSearchTimer = setTimeout(() => {
      this.form.empSearching = true;
      this.api.searchEmployees(keyword).subscribe({
        next: (list) => {
          this.form.empOptions = list ?? [];
          this.form.empSearching = false;
        },
        error: () => {
          this.form.empOptions = [];
          this.form.empSearching = false;
        },
      });
    }, 300);
  }

  onEmpSelected(option: EmployeeOption): void {
    this.form.personId = option.personId;
    this.form.empId = option.empId;
    this.form.empKeyword = `${option.empId} - ${option.localName}`;
    this.form.empOptions = [];
  }

  /** Auto-format YYYY/MM/DD HH:MM khi nhập - đúng logic bản gốc (chỉ giữ số, tự chèn dấu / và :). */
  onSwipeDateTimeInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value.replace(/[^0-9]/g, '');
    let r = '';
    if (raw.length > 0) r += raw.substring(0, Math.min(4, raw.length));
    if (raw.length > 4) r += '/' + raw.substring(4, Math.min(6, raw.length));
    if (raw.length > 6) r += '/' + raw.substring(6, Math.min(8, raw.length));
    if (raw.length > 8) r += ' ' + raw.substring(8, Math.min(10, raw.length));
    if (raw.length > 10) r += ':' + raw.substring(10, Math.min(12, raw.length));
    this.form.swipeDateTime = r;
    input.value = r;
  }

  saveRecord(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const f = this.form;
    if (!f.personId) {
      this.message.warning(t('acr.msg.selectEmployee', 'Vui lòng chọn nhân viên'));
      return;
    }
    if (!f.arDateStr) {
      this.message.warning(t('acr.msg.selectWorkDate', 'Vui lòng nhập ngày công'));
      return;
    }
    if (!f.swipeDateTime || f.swipeDateTime.length < 16) {
      this.message.warning(t('acr.msg.selectDatetime', 'Vui lòng nhập thời gian quẹt thẻ đúng định dạng YYYY/MM/DD HH:MM'));
      return;
    }

    const payload: Partial<ArCardRecordDto> = {
      recordNo: f.recordNo ?? undefined,
      personId: f.personId,
      cardNo: f.empId || undefined,
      arDateStr: formatDate(f.arDateStr, 'yyyy/MM/dd', 'vi'),
      doorType: f.doorType || undefined,
      remark: f.remark || undefined,
      swipeDatetime: f.swipeDateTime,
    };

    this.saving.set(true);
    const save$ = this.isEdit() ? this.api.update(payload) : this.api.insert(payload);
    save$.subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.loadPage();
        } else {
          this.message.error(res.message || t('applyAtt.saveError', 'Lỗi lưu dữ liệu'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
      },
    });
  }

  // ==================== Xóa ====================

  deleteOne(row: ArCardRecordDto): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.action', 'Thao tác'),
      nzContent: t('acr.confirm.deleteRecord', 'Bạn có chắc muốn xóa bản ghi này không?'),
      nzOnOk: () => this.runDelete([row.recordNo]),
    });
  }

  deleteSelected(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const recordNos = Array.from(this.selectedRecordNos());
    if (recordNos.length === 0) {
      this.message.warning(t('acr.msg.selectToDelete', 'Vui lòng chọn ít nhất một bản ghi để xóa'));
      return;
    }
    this.modal.confirm({
      nzTitle: t('common.action', 'Thao tác'),
      nzContent: t('acr.confirm.deleteSelected', 'Bạn có chắc muốn xóa các bản ghi đã chọn không?'),
      nzOnOk: () => this.runDelete(recordNos),
    });
  }

  private async runDelete(recordNos: number[]): Promise<void> {
    for (const recordNo of recordNos) {
      try {
        await firstValueFrom(this.api.delete(recordNo));
      } catch {
        // Bỏ qua lỗi từng dòng - vẫn tiếp tục xóa các dòng còn lại rồi reload để phản ánh trạng thái thực tế.
      }
    }
    this.loadPage();
  }

  // ==================== Đọc dữ liệu quẹt thẻ từ máy chủ ====================

  openImportModal(): void {
    this.impFromDate = this.fromDate;
    this.impToDate = this.toDate;
    this.impResult.set(null);
    this.impModalVisible.set(true);
  }

  closeImportModal(): void {
    this.impModalVisible.set(false);
  }

  runImport(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (!this.impFromDate || !this.impToDate) {
      this.message.warning(t('acr.imp.msg.selectDate', 'Vui lòng chọn khoảng thời gian cần đọc dữ liệu'));
      return;
    }
    this.impRunning.set(true);
    this.impResult.set(null);
    this.api.importFromDevice(this.formatYmd(this.impFromDate), this.formatYmd(this.impToDate)).subscribe({
      next: (res) => {
        this.impRunning.set(false);
        this.impResult.set(res);
        if (res.success) this.loadPage();
      },
      error: () => {
        this.impRunning.set(false);
        this.impResult.set({ success: false, message: t('applyAtt.sendError', 'Lỗi kết nối máy chủ, vui lòng thử lại.') });
      },
    });
  }

  // ==================== Import Excel / tải file mẫu ====================

  downloadTemplate(): void {
    window.location.href = this.api.downloadTemplateUrl();
  }

  onExcelFileSelected(event: Event): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.importingExcel.set(true);
    this.api.uploadExcel(file).subscribe({
      next: (res) => {
        this.importingExcel.set(false);
        if (res.success) this.message.success(res.message || t('common.save', 'Lưu'));
        else this.message.warning(res.message || t('applyAtt.saveError', 'Lỗi lưu dữ liệu'));
        this.loadPage();
        this.tabs.openTab(
          '/ar/attendanceMintenance/viewImportExcelTempMacRecordsList',
          t('applyAtt.importResult', 'Kết quả nhập'),
          'external',
        );
      },
      error: () => {
        this.importingExcel.set(false);
        this.message.error(t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
      },
    });
  }

  // ==================== Cây phòng ban ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    this.deptChildrenMap = new Map<string, string[]>();
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });

    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban con
   *  như widget DeptTree.js gốc. Backend lọc theo deptNos đúng từng mã, nên phải tự mở rộng xuống các
   *  phòng ban con trước khi gửi lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
  private expandDeptSelection(selected: string[]): string[] {
    const result = new Set<string>();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop()!;
      if (result.has(id)) continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children) stack.push(...children);
    }
    return Array.from(result);
  }

  // ==================== Helpers ngày giờ ====================

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }

  /** arDateStr backend trả dạng YYYY/MM/DD - parse thủ công thay vì `new Date(str)` vì Date không hiểu
   *  chuẩn có dấu "/" nhất quán trên mọi trình duyệt. */
  private parseArDateStr(arDateStr: string | null | undefined): Date | null {
    if (!arDateStr) return null;
    const parts = arDateStr.split('/').map(Number);
    if (parts.length !== 3 || parts.some((p) => Number.isNaN(p))) return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
}
