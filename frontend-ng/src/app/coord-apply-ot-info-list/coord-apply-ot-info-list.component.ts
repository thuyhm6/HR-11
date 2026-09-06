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
import { CoordApplyOtInfoListService } from './coord-apply-ot-info-list.service';
import {
  AuthDeptNode,
  CodeItem,
  CoordApplyOtInfoRow,
  OtItemOption,
  ShiftOption,
} from './coord-apply-ot-info-list.model';

/** Toàn bộ key bên dưới đã có sẵn trong message.properties (namespace "caoi" dùng riêng cho trang này,
 *  "cai"/"ex"/"common" dùng chung với các trang khác) - không cần thêm key mới. */
const I18N_KEYS = [
  'ex.field.empIdOrName', 'ex.placeholder.empIdOrName', 'ex.field.dept', 'ex.placeholder.dept',
  'ex.field.fromDate', 'ex.field.toDate', 'ex.field.postFamily', 'ex.field.shiftNo', 'caoi.field.otType',
  'ex.opt.all', 'ex.btn.search', 'ex.btn.export',
  'ex.col.no', 'ex.col.empId', 'ex.col.fullName', 'ex.col.dept', 'ex.col.position',
  'cai.col.shift', 'caoi.col.otType', 'cai.col.workDate', 'caoi.col.checkIn', 'caoi.col.checkOut',
  'cai.col.fromTime', 'cai.col.toTime', 'cai.col.duration', 'caoi.col.remark', 'cai.col.status',
  'common.loadFail', 'common.totalRows', 'mep.msg.loadDeptFailed',
];

/** Mã cha nhóm nhân viên (POST_FAMILY) dùng cho bộ lọc "Nhóm nhân viên" - đúng data-parent-code="14015812" bản gốc. */
const POST_FAMILY_PARENT_CODE = '14015812';

/**
 * Bản Angular của ess/infoApply/viewCoordApplyOtInfoList.html (Thymeleaf + DataTables serverSide) -
 * Tra cứu đăng ký tăng ca của nhân viên cấp dưới cho quản lý (coordinator). Gọi lại nguyên các API JSON
 * đã có sẵn ở EssInfoApplyController (xem CoordApplyOtInfoListService) - không đổi backend. Kiến trúc
 * bám theo CoordApplyAttendanceInfoComponent (nz-table phân trang server-side qua nzFrontPagination=false
 * + DataTablesResponse<T>, nz-tree-select + expandDeptSelection cho bộ lọc phòng ban).
 *
 * Xuất excel làm client-side trên đúng trang dữ liệu đang tải (rows() hiện tại) - giống hệt hành vi bản
 * gốc: nút Excel của DataTables Buttons không cấu hình exportOptions.modifier.page='all' nên mặc định
 * chỉ xuất trang đang hiển thị (dữ liệu ajax serverSide chỉ giữ 1 trang tại 1 thời điểm).
 */
@Component({
  selector: 'app-coord-apply-ot-info-list',
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
  templateUrl: './coord-apply-ot-info-list.component.html',
  styleUrl: './coord-apply-ot-info-list.component.css',
})
export class CoordApplyOtInfoListComponent implements OnInit {
  readonly pageSizeOptions = [25, 50, 100, 200, 500];

  readonly rows = signal<CoordApplyOtInfoRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);
  readonly itemOptions = signal<OtItemOption[]>([]);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  postFamily: string | null = null;
  shiftNo: string | null = null;
  itemNoSearch: string | null = null;

  pageIndex = 1;
  pageSize = 25;

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: CoordApplyOtInfoListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.api.getCodeList(POST_FAMILY_PARENT_CODE).subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getShiftOptions().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.api.getOtItemList().subscribe((list) => this.itemOptions.set(list ?? []));
    this.search();
  }

  /** Mặc định Từ ngày = hôm qua, Đến ngày = hôm nay - đúng caoiInitDefaultDateRange() bản gốc. */
  private initDefaultDateRange(): void {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    this.fromDate = yesterday;
    this.toDate = today;
  }

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
        startDate: this.formatYmdSlash(this.fromDate),
        endDate: this.formatYmdSlash(this.toDate),
        shiftNo: this.shiftNo ?? '',
        itemNoSearch: this.itemNoSearch ?? '',
        postFamily: this.postFamily ?? '',
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

  // ==================== Xuất excel (client-side, đúng trang dữ liệu đang tải - xem docblock class) ====================

  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('ex.col.no', 'No.'), t('ex.col.empId', 'Mã nhân viên'), t('ex.col.fullName', 'Họ tên'),
      t('ex.col.dept', 'Phòng ban'), t('ex.col.position', 'Chức vụ'), t('cai.col.shift', 'Ca'),
      t('caoi.col.otType', 'Loại tăng ca'), t('cai.col.workDate', 'Ngày công'),
      t('caoi.col.checkIn', 'Vào'), t('caoi.col.checkOut', 'Ra'),
      t('cai.col.fromTime', 'Thời gian bắt đầu'), t('cai.col.toTime', 'Thời gian kết thúc'),
      t('cai.col.duration', 'Thời lượng'), t('caoi.col.remark', 'Ghi chú'), t('cai.col.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postGradeName, r.shiftName, r.itemName, r.arDateStr,
      r.indoorTime, r.outdoorTime, r.fromDate, r.toTime,
      `${r.quantity || ''} ${r.unit || ''}`.trim(), r.remark, r.statusName,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'coord_apply_ot_export.xlsx');
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
   *  phòng ban con trước khi gửi deptNos lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
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

  /** Gửi lên BE giữ nguyên dạng có dấu "/" (yyyy/MM/dd) đúng như bản gốc caoiFormatDate(). */
  private formatYmdSlash(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : '';
  }
}
