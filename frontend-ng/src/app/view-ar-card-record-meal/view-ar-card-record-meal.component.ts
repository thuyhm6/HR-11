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
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ViewArCardRecordMealService } from './view-ar-card-record-meal.service';
import { ArMacRecordEatDto, AuthDeptNode, ImportDeviceResult } from './view-ar-card-record-meal.model';

/** Toàn bộ key bên dưới đã có sẵn trong messages.properties/messages_vi_VN.properties (namespace "acrm"
 *  dùng riêng cho trang này, "acr.imp.result.*" tái sử dụng từ trang chị em ViewArCardRecordComponent vì
 *  cùng nội dung kết quả đọc dữ liệu từ máy chủ, "common"/"mep" dùng chung) - không cần bổ sung key mới. */
const I18N_KEYS = [
  'acrm.title', 'common.search.empIdOrName', 'common.placeholder.enterEmpId', 'common.deptName',
  'common.select', 'common.fromDate', 'common.toDate', 'acrm.filter.eatDate', 'acrm.eatDate.all',
  'acrm.eatDate.breakfast', 'acrm.eatDate.lunch', 'acrm.eatDate.dinner', 'acrm.eatDate.night',
  'common.search', 'common.clearFilter', 'common.exportExcel', 'acrm.imp.title', 'common.stt',
  'common.empId', 'common.empName', 'common.position', 'acrm.col.attendanceDate', 'acrm.col.rDate',
  'acrm.col.rTime', 'acrm.col.eatName', 'acrm.col.eatDate', 'acrm.col.amount', 'acrm.col.outdoorTime',
  'acrm.col.remark', 'common.loadFail', 'common.totalRows', 'mep.msg.loadDeptFailed', 'acrm.imp.btnRun',
  'common.close', 'acrm.imp.processing', 'acrm.imp.msg.selectDate', 'acr.imp.result.total',
  'acr.imp.result.imported', 'acr.imp.result.skipped', 'acr.imp.result.notFound',
];

/**
 * Bản Angular của ar/attendanceMintenance/viewArCardRecordMeal.html (Thymeleaf + DataTables serverSide) -
 * Tra cứu dữ liệu suất ăn theo lượt quẹt thẻ (chỉ xem, không có thêm/sửa/xóa - đúng hành vi bản gốc). Gọi
 * lại nguyên API JSON/servlet đã có sẵn ở ArAttendanceSearchController (xem ViewArCardRecordMealService) -
 * không đổi backend. Kiến trúc bám theo ViewArCardRecordDayComponent (trang chị em cùng controller):
 * nz-table phân trang server-side qua nzFrontPagination=false + DataTablesResponse<T>, nz-tree-select +
 * cascade chọn phòng ban con (expandDeptSelection) thay cho widget DeptTree.js. Khác với
 * ViewArCardRecordDayComponent ở 2 điểm: exportExcel điều hướng thẳng tới URL backend (server sinh file
 * .xlsx trên TOÀN BỘ dữ liệu lọc được, không phải chỉ trang đang tải) và có thêm modal "Đọc dữ liệu suất
 * ăn từ máy chủ" (giống hệt luồng importFromDevice ở ViewArCardRecordComponent).
 */
@Component({
  selector: 'app-view-ar-card-record-meal',
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
    NzAlertModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-ar-card-record-meal.component.html',
  styleUrl: './view-ar-card-record-meal.component.css',
})
export class ViewArCardRecordMealComponent implements OnInit {
  readonly pageSizeOptions = [25, 50, 100, 200];

  readonly rows = signal<ArMacRecordEatDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  eatDate: string | null = null;

  pageIndex = 1;
  pageSize = 25;

  readonly impModalVisible = signal(false);
  readonly impRunning = signal(false);
  readonly impResult = signal<ImportDeviceResult | null>(null);
  impFromDate: Date | null = null;
  impToDate: Date | null = null;

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewArCardRecordMealService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
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
    this.eatDate = null;
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
        eatDate: this.eatDate ?? '',
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

  // ==================== Xuất excel (server-side, toàn bộ dữ liệu theo điều kiện lọc - xem docblock class) ====================

  exportExcel(): void {
    window.location.href = this.api.exportExcelUrl({
      keyword: this.keyword.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate),
      eatDate: this.eatDate ?? '',
    });
  }

  // ==================== Đọc dữ liệu suất ăn từ máy chủ ====================

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
      this.impResult.set({ success: false, message: t('acrm.imp.msg.selectDate', 'Vui lòng chọn khoảng thời gian cần đọc dữ liệu') });
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
        this.impResult.set({ success: false, message: 'Lỗi kết nối máy chủ, vui lòng thử lại.' });
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

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
