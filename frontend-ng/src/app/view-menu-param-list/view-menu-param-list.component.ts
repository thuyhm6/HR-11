import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeModule, NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';
import { forkJoin } from 'rxjs';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { SyMenuDto } from '../view-menu-list/view-menu-list.model';
import { CompanyOption, MenuParamPayload, SyMenuParamDto } from './view-menu-param-list.model';
import { ViewMenuParamListService } from './view-menu-param-list.service';

/** Các key message.properties dùng trong trang này - riêng cho trang này dùng namespace
 *  sys.basic.viewMenuParamList.* (tạo mới, xem CLAUDE.md), các cột/label trùng với ViewMenuListComponent
 *  (mã menu, tên TV/TA, thứ tự, trạng thái) dùng lại đúng key sys.basic.viewMenuList.* đã có sẵn thay vì
 *  tạo lại. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.status', 'common.active', 'common.inactive', 'common.save',
  'common.close', 'common.edit', 'common.yes', 'common.no', 'common.noData', 'common.loadFail',
  'common.exportExcel', 'common.totalRows',
  'sys.basic.viewMenuList.col.menuCode', 'sys.basic.viewMenuList.col.nameVi', 'sys.basic.viewMenuList.col.nameEn',
  'sys.basic.viewMenuList.label.orderNo', 'sys.basic.viewMenuList.label.activity',
  'sys.basic.viewMenuParamList.company', 'sys.basic.viewMenuParamList.company.placeholder',
  'sys.basic.viewMenuParamList.treeTitle', 'sys.basic.viewMenuParamList.treeSearchPlaceholder',
  'sys.basic.viewMenuParamList.rightPaneTitle', 'sys.basic.viewMenuParamList.selectedParentPrefix',
  'sys.basic.viewMenuParamList.msg.selectNodeHint', 'sys.basic.viewMenuParamList.col.paramOrderNo',
  'sys.basic.viewMenuParamList.msg.selectCompanyFirst', 'sys.basic.viewMenuParamList.msg.noChanges',
  'sys.basic.viewMenuParamList.msg.updatedPrefix', 'sys.basic.viewMenuParamList.msg.updatedSuffix',
  'sys.basic.viewMenuParamList.msg.saveListError', 'sys.basic.viewMenuParamList.msg.selectCompanyExport',
  'sys.basic.viewMenuParamList.modal.editTitle', 'sys.basic.viewMenuParamList.label.isCanBeBuild',
  'sys.basic.viewMenuParamList.export.colAssigned',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** SyMenuParamDto + trạng thái checkbox đang chỉnh trên UI (khởi tạo = assigned, đổi độc lập với
 *  assigned gốc để phát hiện dòng nào cần lưu/xóa khi bấm "Lưu" hàng loạt - xem saveList()). */
interface MenuParamRow extends SyMenuParamDto {
  checked: boolean;
}

interface ParamEditForm {
  menuNo: string;
  orderNo: number;
  activity: boolean;
  isCanBeBuild: boolean;
}

const EMPTY_EDIT_FORM: ParamEditForm = { menuNo: '', orderNo: 0, activity: true, isCanBeBuild: false };

/**
 * Bản Angular của sys/basicMaintenance/viewMenuParamList.html (Thymeleaf + jQuery DataTables + jsTree)
 * - cấu hình menu nào được gán (SY_MENU_PARAM) cho từng công ty (HR_COMPANY). Gọi lại nguyên API JSON
 * đã có sẵn ở SyMenuParamController/SyMenuController/HrCompanyController (xem
 * ViewMenuParamListService) - không đổi backend. jsTree (jQuery) được thay bằng nz-tree - khác
 * ViewItemParameterComponent (cây phẳng, chỉ tìm kiếm) ở chỗ menu có quan hệ cha/con thật nên dựng cây
 * phân cấp thật sự (tham khảo buildDeptTree của ViewAttendanceKeeperComponent), dùng onTreeClick +
 * nzSearchValue giống ViewItemParameterComponent/ViewShiftComponent (pattern chuẩn đã dùng nhiều nơi
 * trong dự án cho jsTree -> nz-tree) thay vì nz-tree nzCheckable của ViewAttendanceKeeperComponent (cây
 * ở đây dùng để CHỌN 1 menu cha, không phải tick nhiều dòng). Bảng menu con bên phải dùng nz-table (thay
 * DataTables) với 1 cột checkbox client-side (tương đương input.param-check gốc) để đánh dấu gán/bỏ gán
 * hàng loạt trước khi bấm "Lưu" (batch save/delete qua Promise.all ở bản gốc -> forkJoin ở đây); nút
 * sửa (bx-edit) trên từng dòng đã gán mở modal chỉnh paramOrderNo/paramActivity/isCanBeBuild giống hệt
 * modal #menuParam_modal gốc. Endpoint export cũ (GET /sys/api/menu_param/export) thực chất xuất file
 * .csv nên không dùng lại - xuất excel làm client-side bằng thư viện xlsx (SheetJS) để đúng định dạng
 * .xlsx thật (xem CLAUDE.md), giống ViewMenuListComponent.
 */
@Component({
  selector: 'app-view-menu-param-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzCheckboxModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-menu-param-list.component.html',
  styleUrl: './view-menu-param-list.component.css',
})
export class ViewMenuParamListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly companies = signal<CompanyOption[]>([]);
  selectedCompanyId: string | null = null;

  readonly treeNodes = signal<NzTreeNodeOptions[]>([]);
  treeSearchValue = '';
  selectedParentMenuNo: string | null = null;
  readonly selectedParentLabel = signal<string | null>(null);

  readonly rows = signal<MenuParamRow[]>([]);
  readonly loadingRows = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly savingList = signal(false);

  readonly allChecked = computed(() => {
    const rows = this.rows();
    return rows.length > 0 && rows.every((r) => r.checked);
  });
  readonly someChecked = computed(() => this.rows().some((r) => r.checked) && !this.allChecked());

  readonly editModalVisible = signal(false);
  readonly editSaving = signal(false);
  editForm: ParamEditForm = { ...EMPTY_EDIT_FORM };

  constructor(
    private readonly api: ViewMenuParamListService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCompanies().subscribe({
      next: (list) => this.companies.set(list ?? []),
      error: () => this.companies.set([]),
    });
    this.api.getMenuTree().subscribe({
      next: (list) => this.treeNodes.set(this.buildMenuTree(list ?? [])),
      error: () => this.treeNodes.set([]),
    });
  }

  companyLabel(c: CompanyOption): string {
    return c.nameVi ? `${c.nameVi} (${c.cpnyId})` : c.cpnyId;
  }

  onCompanyChange(): void {
    if (this.selectedParentMenuNo) this.loadTable();
  }

  onTreeClick(event: NzFormatEmitEvent): void {
    const node = event.node;
    if (!node) return;
    this.selectedParentMenuNo = String(node.key);
    this.selectedParentLabel.set(node.title ?? null);
    this.loadTable();
  }

  private loadTable(): void {
    if (!this.selectedParentMenuNo) {
      this.rows.set([]);
      return;
    }
    this.loadingRows.set(true);
    this.errorMessage.set(null);
    this.api.list(this.selectedParentMenuNo, this.selectedCompanyId ?? '').subscribe({
      next: (list) => {
        this.rows.set((list ?? []).map((r) => ({ ...r, checked: r.assigned })));
        this.loadingRows.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loadingRows.set(false);
      },
    });
  }

  onRowCheckChange(row: MenuParamRow, checked: boolean): void {
    this.rows.update((rows) => rows.map((r) => (r.menuNo === row.menuNo ? { ...r, checked } : r)));
  }

  toggleSelectAll(checked: boolean): void {
    this.rows.update((rows) => rows.map((r) => ({ ...r, checked })));
  }

  /** Lưu hàng loạt các dòng đã đổi trạng thái checkbox so với assigned gốc (thêm mới gọi save, bỏ gán
   *  gọi delete) - tương đương vòng lặp Promise.all ở #menuParam_btnSaveList bản gốc. */
  saveList(): void {
    if (!this.selectedCompanyId) {
      this.message.warning(this.i18n.t('sys.basic.viewMenuParamList.msg.selectCompanyFirst', 'Vui lòng chọn công ty trước'));
      return;
    }
    const changed = this.rows().filter((r) => r.checked !== r.assigned);
    if (changed.length === 0) {
      this.message.info(this.i18n.t('sys.basic.viewMenuParamList.msg.noChanges', 'Không có thay đổi nào cần lưu'));
      return;
    }
    this.savingList.set(true);
    const requests = changed.map((r) => {
      const payload: MenuParamPayload = {
        cpnyId: this.selectedCompanyId!,
        menuNo: r.menuNo,
        paramActivity: 1,
        paramOrderNo: 0,
      };
      return r.checked ? this.api.save(payload) : this.api.delete(payload);
    });
    forkJoin(requests).subscribe({
      next: () => {
        this.savingList.set(false);
        const prefix = this.i18n.t('sys.basic.viewMenuParamList.msg.updatedPrefix', 'Cập nhật thành công');
        const suffix = this.i18n.t('sys.basic.viewMenuParamList.msg.updatedSuffix', 'mục');
        this.message.success(`${prefix} ${changed.length} ${suffix}`);
        this.loadTable();
      },
      error: () => {
        this.savingList.set(false);
        this.message.error(this.i18n.t('sys.basic.viewMenuParamList.msg.saveListError', 'Có lỗi xảy ra khi lưu dữ liệu'));
        this.loadTable();
      },
    });
  }

  // ==================== Modal sửa tham số 1 dòng ====================

  openEditModal(row: MenuParamRow): void {
    if (!row.assigned) return;
    this.editForm = {
      menuNo: row.menuNo,
      orderNo: row.paramOrderNo ?? 0,
      activity: row.paramActivity !== 0,
      isCanBeBuild: row.isCanBeBuild === '1',
    };
    this.editModalVisible.set(true);
  }

  closeEditModal(): void {
    this.editModalVisible.set(false);
  }

  saveEditForm(): void {
    if (!this.selectedCompanyId) return;
    const payload: MenuParamPayload = {
      cpnyId: this.selectedCompanyId,
      menuNo: this.editForm.menuNo,
      paramActivity: this.editForm.activity ? 1 : 0,
      paramOrderNo: this.editForm.orderNo,
      isCanBeBuild: this.editForm.isCanBeBuild ? '1' : '0',
    };
    this.editSaving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.editSaving.set(false);
        if (res.success) {
          this.editModalVisible.set(false);
          this.message.success(res.message || this.i18n.t('common.save', 'Lưu'));
          this.loadTable();
        } else {
          this.message.error(res.message);
        }
      },
      error: () => {
        this.editSaving.set(false);
        this.message.error(this.i18n.t('sys.basic.viewMenuParamList.msg.saveListError', 'Có lỗi xảy ra khi lưu dữ liệu'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (endpoint /sys/api/menu_param/export cũ thực chất trả .csv nên không dùng
   *  lại - xem giải thích ở đầu file) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    if (!this.selectedCompanyId) {
      this.message.warning(this.i18n.t('sys.basic.viewMenuParamList.msg.selectCompanyExport', 'Chọn công ty để xuất excel'));
      return;
    }
    const yesNo = (v: boolean) => (v ? this.i18n.t('common.yes', 'Có') : this.i18n.t('common.no', 'Không'));
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('sys.basic.viewMenuParamList.export.colAssigned', 'Đã gán'),
      this.i18n.t('sys.basic.viewMenuList.col.menuCode', 'Menu Code'),
      this.i18n.t('sys.basic.viewMenuList.col.nameVi', 'Tên TV'),
      this.i18n.t('sys.basic.viewMenuList.col.nameEn', 'Tên TA'),
      this.i18n.t('sys.basic.viewMenuParamList.col.paramOrderNo', 'Thứ tự (Param)'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const activeText = this.i18n.t('common.active', 'Hoạt động');
    const inactiveText = this.i18n.t('common.inactive', 'Không hoạt động');
    const dataRows = this.rows().map((r, i) => [
      i + 1, yesNo(r.checked), r.menuCode, r.nameVi, r.nameEn, r.paramOrderNo,
      r.paramActivity === 1 ? activeText : r.paramActivity === 0 ? inactiveText : '',
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'menu_param_list.xlsx');
  }

  // ==================== Dựng cây menu ====================

  /** Dựng cây phân cấp thật từ danh sách phẳng SY_MENU - giữ đúng logic xử lý node mồ côi của bản gốc
   *  (parent null/rỗng/'ROOT'/không tồn tại trong danh sách -> coi là gốc), chỉ mở rộng sẵn các node
   *  gốc (giống state.opened: parentId === '#' của jstree gốc). */
  private buildMenuTree(list: SyMenuDto[]): NzTreeNodeOptions[] {
    const idSet = new Set(list.map((m) => m.menuNo));
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((item) => {
      let parent = item.menuParentNo;
      if (!parent || parent === 'ROOT' || !idSet.has(parent)) parent = '#';
      const label = item.nameVi || item.menuCode;
      map.set(item.menuNo, {
        title: item.menuCode ? `${label} (${item.menuCode})` : label,
        key: item.menuNo,
        parent,
        children: [],
      });
    });
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent !== '#' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes: NzTreeNodeOptions[], expand: boolean) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        n.expanded = expand;
        if (n.children?.length) markLeaf(n.children, false);
      });
    };
    markLeaf(roots, true);
    return roots;
  }
}
