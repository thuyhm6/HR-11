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
import { SyCodeDto } from '../view-code-manage/view-code-manage.model';
import { CodeParamPayload, CompanyOption, SyCodeParamDto } from './view-code-param-list.model';
import { ViewCodeParamListService } from './view-code-param-list.service';

/** Các key message.properties dùng trong trang này - riêng cho trang này dùng namespace
 *  sys.basic.viewCodeParamList.* (chỉ 3 key thực sự mới, xem CLAUDE.md), phần lớn tái dùng nguyên key
 *  đã có ở ViewMenuParamListComponent (company/company.placeholder/treeSearchPlaceholder/
 *  col.paramOrderNo/các msg.*) vì cùng ý nghĩa, và ViewCodeManageComponent (rightPaneTitle/
 *  selectedParentPrefix/col.codeNo) vì cùng là trang Code. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.status', 'common.active', 'common.inactive', 'common.save',
  'common.close', 'common.edit', 'common.noData', 'common.loadFail', 'common.exportExcel', 'common.totalRows',
  'sys.basic.viewMenuList.col.nameVi', 'sys.basic.viewMenuList.col.nameEn',
  'sys.basic.viewMenuList.label.orderNo', 'sys.basic.viewMenuList.label.activity',
  'sys.basic.viewMenuParamList.company', 'sys.basic.viewMenuParamList.company.placeholder',
  'sys.basic.viewMenuParamList.treeSearchPlaceholder', 'sys.basic.viewMenuParamList.col.paramOrderNo',
  'sys.basic.viewMenuParamList.msg.selectCompanyFirst', 'sys.basic.viewMenuParamList.msg.noChanges',
  'sys.basic.viewMenuParamList.msg.updatedPrefix', 'sys.basic.viewMenuParamList.msg.updatedSuffix',
  'sys.basic.viewMenuParamList.msg.saveListError', 'sys.basic.viewMenuParamList.msg.selectCompanyExport',
  'sys.basic.viewMenuParamList.export.colAssigned',
  'sys.basic.viewCodeManage.rightPaneTitle', 'sys.basic.viewCodeManage.selectedParentPrefix',
  'sys.basic.viewCodeManage.col.codeNo',
  'sys.basic.viewCodeParamList.treeTitle', 'sys.basic.viewCodeParamList.modal.editTitle',
  'sys.basic.viewCodeParamList.msg.selectNodeHint',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** SyCodeParamDto + trạng thái checkbox đang chỉnh trên UI (khởi tạo = assigned) - xem giải thích ở
 *  ViewMenuParamListComponent (cùng cơ chế MenuParamRow/saveList). */
interface CodeParamRow extends SyCodeParamDto {
  checked: boolean;
}

interface ParamEditForm {
  codeNo: string;
  orderNo: number;
  activity: boolean;
}

const EMPTY_EDIT_FORM: ParamEditForm = { codeNo: '', orderNo: 0, activity: true };

/**
 * Bản Angular của sys/basicMaintenance/viewCodePamers.html (Thymeleaf + jQuery DataTables + jsTree) -
 * cấu hình mã code nào được gán (SY_CODE_PARAM) cho từng công ty (HR_COMPANY). Gọi lại nguyên API JSON
 * đã có sẵn ở SyCodeParamController/SyCodeController/HrCompanyController (xem
 * ViewCodeParamListService) - không đổi backend. Cấu trúc gần như giống hệt
 * ViewMenuParamListComponent (cùng kiểu trang: chọn công ty + cây bên trái + bảng checkbox gán hàng
 * loạt bên phải + modal sửa từng dòng), chỉ khác đối tượng quản lý là SY_CODE thay vì SY_MENU: cây dùng
 * lại đúng logic dựng cây của ViewCodeManageComponent (node gốc có PARENT_CODE_NO = '0'); nút "Lưu" sửa
 * 1 dòng gọi API riêng /code_param/update (không phải /save như bên Menu) vì backend SyCodeParamDto có
 * field paramOrderNo/paramActivity tách biệt khỏi orderNo/activity kế thừa từ SyCode - xem giải thích ở
 * CodeParamPayload. Endpoint export cũ (GET /sys/api/code_param/export) hiện là no-op (chưa cài đặt gì,
 * không trả về file) nên bắt buộc phải xuất client-side bằng thư viện xlsx (SheetJS) để đúng định dạng
 * .xlsx thật (xem CLAUDE.md), giống ViewMenuParamListComponent.
 */
@Component({
  selector: 'app-view-code-param-list',
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
  templateUrl: './view-code-param-list.component.html',
  styleUrl: './view-code-param-list.component.css',
})
export class ViewCodeParamListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly companies = signal<CompanyOption[]>([]);
  selectedCompanyId: string | null = null;

  readonly treeNodes = signal<NzTreeNodeOptions[]>([]);
  treeSearchValue = '';
  selectedParentCodeNo: string | null = null;
  readonly selectedParentLabel = signal<string | null>(null);

  readonly rows = signal<CodeParamRow[]>([]);
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
    private readonly api: ViewCodeParamListService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCompanies().subscribe({
      next: (list) => this.companies.set(list ?? []),
      error: () => this.companies.set([]),
    });
    this.api.getCodeTree().subscribe({
      next: (list) => this.treeNodes.set(this.buildCodeTree(list ?? [])),
      error: () => this.treeNodes.set([]),
    });
  }

  companyLabel(c: CompanyOption): string {
    return c.nameVi ? `${c.nameVi} (${c.cpnyId})` : c.cpnyId;
  }

  onCompanyChange(): void {
    if (this.selectedParentCodeNo) this.loadTable();
  }

  onTreeClick(event: NzFormatEmitEvent): void {
    const node = event.node;
    if (!node) return;
    this.selectedParentCodeNo = String(node.key);
    this.selectedParentLabel.set(node.title ?? null);
    this.loadTable();
  }

  private loadTable(): void {
    if (!this.selectedParentCodeNo) {
      this.rows.set([]);
      return;
    }
    this.loadingRows.set(true);
    this.errorMessage.set(null);
    this.api.list(this.selectedParentCodeNo, this.selectedCompanyId ?? '').subscribe({
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

  onRowCheckChange(row: CodeParamRow, checked: boolean): void {
    this.rows.update((rows) => rows.map((r) => (r.codeNo === row.codeNo ? { ...r, checked } : r)));
  }

  toggleSelectAll(checked: boolean): void {
    this.rows.update((rows) => rows.map((r) => ({ ...r, checked })));
  }

  /** Lưu hàng loạt các dòng đã đổi trạng thái checkbox so với assigned gốc - tương đương vòng lặp
   *  Promise.all ở #codeParam_btnSaveList bản gốc. Payload activity/orderNo cố định '1'/0 giống hệt bản
   *  gốc (xem giải thích ở CodeParamPayload) - muốn chỉnh thứ tự thật phải dùng nút sửa từng dòng. */
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
      const payload: CodeParamPayload = {
        cpnyId: this.selectedCompanyId!,
        codeNo: r.codeNo,
        activity: '1',
        orderNo: 0,
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

  openEditModal(row: CodeParamRow): void {
    if (!row.assigned) return;
    this.editForm = {
      codeNo: row.codeNo,
      orderNo: row.paramOrderNo ?? 0,
      activity: row.paramActivity !== '0',
    };
    this.editModalVisible.set(true);
  }

  closeEditModal(): void {
    this.editModalVisible.set(false);
  }

  saveEditForm(): void {
    if (!this.selectedCompanyId) return;
    const payload: CodeParamPayload = {
      cpnyId: this.selectedCompanyId,
      codeNo: this.editForm.codeNo,
      activity: this.editForm.activity ? '1' : '0',
      orderNo: this.editForm.orderNo,
    };
    this.editSaving.set(true);
    this.api.update(payload).subscribe({
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

  /** Xuất excel client-side (endpoint /sys/api/code_param/export cũ hiện là no-op, không trả về gì) -
   *  dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    if (!this.selectedCompanyId) {
      this.message.warning(this.i18n.t('sys.basic.viewMenuParamList.msg.selectCompanyExport', 'Chọn công ty để xuất excel'));
      return;
    }
    const yesNo = (v: boolean) => (v ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Không hoạt động'));
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('sys.basic.viewMenuParamList.export.colAssigned', 'Đã gán'),
      this.i18n.t('sys.basic.viewCodeManage.col.codeNo', 'Mã Code'),
      this.i18n.t('sys.basic.viewMenuList.col.nameVi', 'Tên TV'),
      this.i18n.t('sys.basic.viewMenuList.col.nameEn', 'Tên TA'),
      this.i18n.t('sys.basic.viewMenuParamList.col.paramOrderNo', 'Thứ tự (Param)'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, yesNo(r.checked), r.codeNo, r.nameVi, r.nameEn, r.paramOrderNo,
      r.paramActivity === '1' ? this.i18n.t('common.active', 'Hoạt động')
        : r.paramActivity === '0' ? this.i18n.t('common.inactive', 'Không hoạt động') : '',
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'code_param_list.xlsx');
  }

  // ==================== Dựng cây code ====================

  /** Dựng cây phân cấp thật từ danh sách phẳng SY_CODE - giống hệt logic buildCodeTree của
   *  ViewCodeManageComponent (node gốc có PARENT_CODE_NO = '0'). */
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
