import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ViewArCardRecordForSelfService } from './view-ar-card-record-for-self.service';
import { ArCardRecordForSelfDto, AuthDeptNode, ImportDeviceResult } from './view-ar-card-record-for-self.model';

/** Toàn bộ key bên dưới đã có sẵn trong messages.properties/messages_vi_VN.properties (namespace "acr"
 *  dùng chung với ViewArCardRecordComponent vì cùng nội dung cột/label, "common" dùng chung) - không cần
 *  bổ sung key mới. */
const I18N_KEYS = [
  'common.search.empIdOrName', 'common.placeholder.enterEmpId', 'common.fromDate', 'common.toDate',
  'common.deptName', 'common.select', 'acr.btn.importFromDevice', 'common.search', 'common.exportExcel',
  'common.stt', 'common.empId', 'common.empName', 'acr.col.swipeDate', 'acr.col.swipeTime',
  'acr.col.doorType', 'acr.col.dataSource', 'common.loadFail', 'common.totalRows',
  'mep.msg.loadDeptFailed', 'acr.imp.title', 'acr.imp.btnRun', 'common.close', 'acr.imp.processing',
  'acr.imp.msg.selectDate', 'acr.imp.result.total', 'acr.imp.result.imported',
  'acr.imp.result.skipped', 'acr.imp.result.notFound',
];

/**
 * Bản Angular của ar/attendanceMintenance/viewArCardRecordForSelf.html (Thymeleaf + DataTables serverSide,
 * "SST" - tra cứu lịch sử ra vào phục vụ tự tra cứu tại quầy) - chỉ xem, không có thêm/sửa/xóa, không có
 * nút "Xóa lọc" - đúng hành vi bản gốc (khác ViewArCardRecordDayComponent/ViewArCardRecordMealComponent).
 * Gọi lại nguyên API JSON/servlet đã có sẵn ở ArAttendanceSearchController (xem
 * ViewArCardRecordForSelfService) - không đổi backend. Kiến trúc bám theo ViewArCardRecordMealComponent
 * (trang chị em cùng controller): nz-table phân trang server-side qua nzFrontPagination=false +
 * DataTablesResponse<T>, nz-tree-select + cascade chọn phòng ban con (expandDeptSelection) thay cho widget
 * DeptTree.js, exportExcel điều hướng thẳng tới URL backend (server sinh file .xlsx trên toàn bộ dữ liệu
 * lọc được), modal "Đọc dữ liệu quẹt thẻ từ máy chủ" giống hệt luồng importFromDevice ở
 * ViewArCardRecordComponent.
 */
@Component({
  selector: 'app-view-ar-card-record-for-self',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzAlertModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-ar-card-record-for-self.component.html',
  styleUrl: './view-ar-card-record-for-self.component.css',
})
export class ViewArCardRecordForSelfComponent implements OnInit {
  readonly pageSizeOptions = [25, 50, 100, 200];

  readonly rows = signal<ArCardRecordForSelfDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;

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
    private readonly api: ViewArCardRecordForSelfService,
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
    });
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
      this.impResult.set({ success: false, message: t('acr.imp.msg.selectDate', 'Vui lòng chọn khoảng thời gian cần đọc dữ liệu') });
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
