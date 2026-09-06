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
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ViewArCardRecordDayService } from './view-ar-card-record-day.service';
import { ArCardRecordDayDto, AuthDeptNode, ShiftOption } from './view-ar-card-record-day.model';

/** Toàn bộ key bên dưới đã có sẵn trong messages.properties/messages_vi_VN.properties (namespace "acrd"
 *  dùng riêng cho trang này, "common"/"attSearch"/"acr" dùng chung với các trang khác) - không cần
 *  bổ sung key mới. */
const I18N_KEYS = [
  'acrd.title', 'common.search.empIdOrName', 'common.placeholder.enterEmpId', 'common.fromDate',
  'common.toDate', 'common.deptName', 'common.select', 'attSearch.shiftType', 'attSearch.all',
  'acrd.col.missingCard', 'acrd.missingCard.all', 'acrd.missingCard.yes', 'acrd.missingCard.no',
  'common.search', 'common.clearFilter', 'common.exportExcel', 'common.stt', 'common.empId',
  'common.empName', 'acrd.col.team', 'common.position', 'attSearch.workDate', 'acrd.col.inDay',
  'acrd.col.inTime', 'acrd.col.outDay', 'acrd.col.outTime', 'acr.col.remark', 'acrd.col.shiftName',
  'acrd.col.changeShiftPerson', 'acrd.col.eatTime', 'common.loadFail', 'common.totalRows',
  'mep.msg.loadDeptFailed',
];

/**
 * Bản Angular của ar/attendanceMintenance/viewArCardRecordDay.html (Thymeleaf + DataTables serverSide) -
 * Tra cứu dữ liệu quẹt thẻ theo ca làm (chỉ xem, không có thêm/sửa/xóa - đúng hành vi bản gốc). Gọi lại
 * nguyên API JSON đã có sẵn ở ArAttendanceSearchController (xem ViewArCardRecordDayService) - không đổi
 * backend. Kiến trúc bám theo ViewArCardRecordComponent (trang chị em cùng controller): nz-table phân
 * trang server-side qua nzFrontPagination=false + DataTablesResponse<T>, nz-tree-select + cascade chọn
 * phòng ban con (expandDeptSelection) thay cho widget DeptTree.js, exportExcel client-side chỉ trên
 * trang dữ liệu đang tải - đúng hành vi DataTables Buttons gốc (không cấu hình
 * exportOptions.modifier.page='all').
 */
@Component({
  selector: 'app-view-ar-card-record-day',
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
    TranslatePipe,
  ],
  templateUrl: './view-ar-card-record-day.component.html',
  styleUrl: './view-ar-card-record-day.component.css',
})
export class ViewArCardRecordDayComponent implements OnInit {
  readonly pageSizeOptions = [25, 50, 100, 200];

  readonly rows = signal<ArCardRecordDayDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  shiftNoFilter: string | null = null;
  missingCard: string | null = null;

  pageIndex = 1;
  pageSize = 50;

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewArCardRecordDayService,
    private readonly i18n: I18nService,
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
    this.shiftNoFilter = null;
    this.missingCard = null;
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
        shiftNoFilter: this.shiftNoFilter ?? '',
        missingCard: this.missingCard ?? '',
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

  /** Ghép tên ca + khung giờ giống render cột "acrd.col.shiftName" ở bản DataTables gốc. */
  shiftDisplay(row: ArCardRecordDayDto): string {
    const name = row.shiftName || '';
    const time = row.shiftTime || '';
    return name + (time ? ` (${time})` : '');
  }

  // ==================== Xuất excel (client-side, đúng trang dữ liệu đang tải - xem docblock class) ====================

  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('common.stt', 'STT'), t('common.empId', 'Mã nhân viên'), t('common.empName', 'Họ tên'),
      t('acrd.col.team', 'TEAM'), t('common.deptName', 'Phòng ban'), t('common.position', 'Chức vụ'),
      t('attSearch.workDate', 'Ngày công'), t('acrd.col.inDay', 'Ngày vào'), t('acrd.col.inTime', 'Thời gian vào'),
      t('acrd.col.outDay', 'Ngày ra'), t('acrd.col.outTime', 'Thời gian ra'), t('acr.col.remark', 'Ghi chú'),
      t('acrd.col.shiftName', 'Ca làm'), t('acrd.col.changeShiftPerson', 'Người thay đổi Ca làm'),
      t('acrd.col.eatTime', 'Eat time'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptTeam, r.deptName, r.postGradeNoName, r.arDateStr,
      r.inDay, r.inTime, r.outDay, r.outTime, r.leaveContent, this.shiftDisplay(r), r.changeShiftPerson, r.eatTimes,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DuLieuQuetThe');
    XLSX.writeFile(workbook, 'du_lieu_quet_the_ca_lam.xlsx');
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
