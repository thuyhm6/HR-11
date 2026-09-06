import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTreeModule, NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CodeSavePayload, SyCodeDto } from './view-code-manage.model';
import { ViewCodeManageService } from './view-code-manage.service';

/** Các key message.properties dùng trong trang này - riêng cho trang này dùng namespace
 *  sys.basic.viewCodeManage.* (tạo mới, xem CLAUDE.md); các label tên đa ngôn ngữ/thứ tự/hoạt động
 *  dùng lại đúng key sys.basic.viewMenuList.* đã có sẵn (cùng ý nghĩa "Tên Tiếng Việt", "Thứ tự",
 *  "Hoạt động"...) và ô tìm kiếm cây dùng lại key treeSearchPlaceholder của
 *  ViewMenuParamListComponent thay vì tạo trùng. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.exportExcel', 'common.save', 'common.close',
  'common.edit', 'common.delete', 'common.confirm', 'common.cancel', 'common.noData', 'common.totalRows',
  'common.loadFail', 'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'sys.basic.viewMenuList.label.nameVi', 'sys.basic.viewMenuList.label.nameEn',
  'sys.basic.viewMenuList.label.nameZh', 'sys.basic.viewMenuList.label.nameKo',
  'sys.basic.viewMenuList.label.orderNo', 'sys.basic.viewMenuList.label.activity',
  'sys.basic.viewMenuList.col.nameVi', 'sys.basic.viewMenuList.col.nameEn',
  'sys.basic.viewMenuParamList.treeSearchPlaceholder',
  'sys.basic.viewCodeManage.treeTitle', 'sys.basic.viewCodeManage.rightPaneTitle',
  'sys.basic.viewCodeManage.selectedParentPrefix', 'sys.basic.viewCodeManage.modal.addTitle',
  'sys.basic.viewCodeManage.modal.editTitle', 'sys.basic.viewCodeManage.label.codeNo',
  'sys.basic.viewCodeManage.label.codeNo.placeholder', 'sys.basic.viewCodeManage.label.parentCodeNo',
  'sys.basic.viewCodeManage.label.description', 'sys.basic.viewCodeManage.msg.confirmDelete',
  'sys.basic.viewCodeManage.col.codeNo', 'sys.basic.viewCodeManage.col.nameZh',
  'sys.basic.viewCodeManage.col.nameKo',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface CodeForm {
  codeNo: string | null;
  parentCodeNo: string;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  orderNo: number;
  description: string;
  activity: boolean;
}

const EMPTY_FORM: CodeForm = {
  codeNo: null, parentCodeNo: '', nameVi: '', nameEn: '', nameZh: '', nameKo: '', orderNo: 0,
  description: '', activity: true,
};

/**
 * Bản Angular của sys/basicMaintenance/viewCodeManage.html (Thymeleaf + jQuery DataTables + jsTree) -
 * quản lý bảng mã danh mục phân cấp cha/con dùng chung toàn hệ thống (SY_CODE). Gọi lại nguyên API JSON
 * đã có sẵn ở SyCodeController (xem ViewCodeManageService) - không đổi backend. jsTree được thay bằng
 * nz-tree dựng cây phân cấp thật (tham khảo ViewMenuParamListComponent - cùng kiểu dữ liệu cây cha/con
 * thật, khác ViewItemParameterComponent là cây phẳng); điểm khác biệt so với ViewMenuParamListComponent
 * là node gốc ở đây có PARENT_CODE_NO = '0' (không phải null/rỗng) theo đúng quy ước BE (CONNECT BY
 * START WITH PARENT_CODE_NO = '0'), và trang tự tải sẵn danh sách mã gốc lúc mở trang (đúng hành vi
 * loadTable('') ở bản gốc) thay vì phải chọn node mới hiển thị được. Bảng mã con bên phải dùng nz-table
 * (thay DataTables) với modal thêm/sửa (nz-modal thay modal Bootstrap) - mã cha của bản ghi mới luôn là
 * node đang chọn trên cây (readonly, giống bản gốc). Endpoint export cũ (GET /sys/api/code/export) thực
 * chất xuất file .csv nên không dùng lại - xuất excel làm client-side bằng thư viện xlsx (SheetJS) để
 * đúng định dạng .xlsx thật (xem CLAUDE.md), giống ViewMenuListComponent.
 */
@Component({
  selector: 'app-view-code-manage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-code-manage.component.html',
  styleUrl: './view-code-manage.component.css',
})
export class ViewCodeManageComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly treeNodes = signal<NzTreeNodeOptions[]>([]);
  treeSearchValue = '';
  selectedParentCodeNo = '';
  readonly selectedParentLabel = signal<string | null>(null);

  readonly rows = signal<SyCodeDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('sys.basic.viewCodeManage.modal.addTitle', 'Thêm mới Code')
      : this.i18n.t('sys.basic.viewCodeManage.modal.editTitle', 'Cập nhật Code'),
  );
  form: CodeForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: SyCodeDto | null = null;

  constructor(
    private readonly api: ViewCodeManageService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getTree().subscribe({
      next: (list) => this.treeNodes.set(this.buildCodeTree(list ?? [])),
      error: () => this.treeNodes.set([]),
    });
    this.loadTable();
  }

  onTreeClick(event: NzFormatEmitEvent): void {
    const node = event.node;
    if (!node) return;
    this.selectedParentCodeNo = String(node.key);
    this.selectedParentLabel.set(node.title ?? null);
    this.loadTable();
  }

  private loadTable(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.selectedParentCodeNo).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM, parentCodeNo: this.selectedParentCodeNo };
    this.modalVisible.set(true);
  }

  openEditModal(row: SyCodeDto): void {
    this.isNew.set(false);
    this.form = {
      codeNo: row.codeNo,
      parentCodeNo: row.parentCodeNo || '',
      nameVi: row.nameVi || '',
      nameEn: row.nameEn || '',
      nameZh: row.nameZh || '',
      nameKo: row.nameKo || '',
      orderNo: row.orderNo ?? 0,
      description: row.description || '',
      activity: row.activity !== '0',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      return;
    }
    const payload: CodeSavePayload = {
      codeNo: this.form.codeNo,
      parentCodeNo: this.form.parentCodeNo || null,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
      orderNo: this.form.orderNo,
      description: this.form.description || null,
      activity: this.form.activity ? '1' : '0',
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
          this.loadTable();
          if (this.isNew()) {
            this.api.getTree().subscribe((list) => this.treeNodes.set(this.buildCodeTree(list ?? [])));
          }
        } else {
          this.message.error(res.message || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: SyCodeDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.codeNo} - ${this.deleteTarget.nameVi ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.codeNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.codeNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
          this.loadTable();
          this.api.getTree().subscribe((list) => this.treeNodes.set(this.buildCodeTree(list ?? [])));
        } else {
          this.message.error(res.message || this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (endpoint /sys/api/code/export cũ thực chất trả .csv nên không dùng lại -
   *  xem giải thích ở đầu file) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('sys.basic.viewCodeManage.col.codeNo', 'Mã Code'),
      this.i18n.t('sys.basic.viewMenuList.col.nameVi', 'Tên TV'),
      this.i18n.t('sys.basic.viewMenuList.col.nameEn', 'Tên TA'),
      this.i18n.t('sys.basic.viewCodeManage.col.nameZh', 'Tên TT'),
      this.i18n.t('sys.basic.viewCodeManage.col.nameKo', 'Tên TH'),
      this.i18n.t('sys.basic.viewMenuList.label.orderNo', 'Thứ tự'),
    ];
    const dataRows = this.rows().map((r, i) => [i + 1, r.codeNo, r.nameVi, r.nameEn, r.nameZh, r.nameKo, r.orderNo]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'code_list.xlsx');
  }

  // ==================== Dựng cây code ====================

  /** Dựng cây phân cấp thật từ danh sách phẳng SY_CODE - node gốc có PARENT_CODE_NO = '0' theo đúng
   *  quy ước BE (khác node mồ côi null/rỗng của ViewMenuParamListComponent), giữ đúng logic bản gốc chỉ
   *  mở sẵn cây ở trạng thái đóng hết (state.opened: false) - không tự mở node nào. */
  private buildCodeTree(list: SyCodeDto[]): NzTreeNodeOptions[] {
    const idSet = new Set(list.map((c) => c.codeNo));
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((item) => {
      let parent = item.parentCodeNo;
      if (!parent || parent === '0' || parent === 'ROOT' || !idSet.has(parent)) parent = '#';
      map.set(item.codeNo, {
        title: item.nameVi || item.codeNo,
        key: item.codeNo,
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
    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }
}
