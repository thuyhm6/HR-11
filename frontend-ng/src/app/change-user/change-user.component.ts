import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from './change-user.model';
import { ChangeUserService } from './change-user.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'ess.changeUser.empSearch', 'ess.changeUser.changeBtn', 'ess.changeUser.noEmpSelected',
  'ess.changeUser.confirm', 'ess.changeUser.success', 'ess.changeUser.error',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword',
  'empSearch.field.dept', 'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no',
  'epi.field.position', 'common.search', 'common.cancel', 'common.confirm', 'common.selectAll',
  'common.empId', 'common.empName', 'common.deptName', 'common.loadFail',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const EMP_OFFICE_PARENT_CODE = '15118';

/**
 * Bản Angular của ess/change/changeUser.html (Thymeleaf) - đổi người đăng nhập hiện tại sang
 * personId của nhân viên được chọn (dùng để hỗ trợ/kiểm tra thay mặt người dùng khác). Gọi lại
 * nguyên API JSON đã có sẵn ở EssChangeUserController (không đổi backend). Modal chọn nhân viên tự
 * xây trong component này (không dùng chung EmployeeSearchModal jQuery + DataTables - trang gốc dùng
 * fragment employeeSearchModal.html) - dùng nz-table thay DataTables, nz-tree-select thay DeptTree.js
 * cho bộ lọc phòng ban (gọi lại đúng endpoint authorized-departments mà DeptTree.js đang dùng mặc
 * định). Sau khi đổi thành công, reload toàn trang (giống bản gốc) vì AuthService/menu của cả SPA
 * đang cache theo người dùng hiện tại trong session.
 */
@Component({
  selector: 'app-change-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTreeSelectModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './change-user.component.html',
  styleUrl: './change-user.component.css',
})
export class ChangeUserComponent implements OnInit {
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  selectedEmpDisplay = '';
  selectedPersonId: string | null = null;

  readonly changing = signal(false);
  readonly warningMessage = signal<string | null>(null);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;

  readonly confirmVisible = signal(false);
  readonly confirmErrorMessage = signal<string | null>(null);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tìm kiếm (xem
   *  giải thích ở expandDeptSelection, tương tự manage-emp-position-info.component.ts). */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ChangeUserService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.api.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }

  /** Người dùng gõ lại nội dung ô Mã nhân viên/Họ tên -> bỏ personId đã chọn trước đó vì text
   *  hiển thị không còn khớp với lựa chọn cũ (chỉ được set lại khi search ra đúng nhân viên). */
  onEmpInputChange(): void {
    this.selectedPersonId = null;
  }

  openPicker(): void {
    this.warningMessage.set(null);
    this.pickerKeyword = this.selectedEmpDisplay;
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerVisible.set(true);
    this.pickerSearch();
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.api
      .searchEmployees({
        keyword: this.pickerKeyword.trim(),
        deptCodes: this.expandDeptSelection(this.pickerDeptNos),
        empOffice: this.pickerEmpOffice ?? '',
      })
      .subscribe({
        next: (rows) => {
          this.pickerLoading.set(false);
          // Tự động chọn ngay nếu chỉ có đúng 1 kết quả (giống hành vi EmployeeSearchModal gốc).
          if (rows && rows.length === 1) {
            this.selectEmployee(rows[0]);
            return;
          }
          this.pickerRows.set(rows ?? []);
        },
        error: () => {
          this.pickerErrorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.pickerRows.set([]);
          this.pickerLoading.set(false);
        },
      });
  }

  pickerClear(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }

  selectEmployee(row: EmployeeSearchDto): void {
    this.selectedPersonId = row.personId;
    this.selectedEmpDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
  }

  onChangeClick(): void {
    this.errorMessage.set(null);
    this.successMessage.set(null);
    if (!this.selectedPersonId) {
      this.warningMessage.set(this.i18n.t('ess.changeUser.noEmpSelected', 'Vui lòng chọn nhân viên!'));
      return;
    }
    this.warningMessage.set(null);
    this.confirmErrorMessage.set(null);
    this.confirmVisible.set(true);
  }

  closeConfirm(): void {
    this.confirmVisible.set(false);
  }

  confirmChange(): void {
    if (!this.selectedPersonId) return;
    this.changing.set(true);
    this.confirmErrorMessage.set(null);
    this.api.changeUser(this.selectedPersonId).subscribe({
      next: () => {
        this.changing.set(false);
        this.confirmVisible.set(false);
        this.successMessage.set(this.i18n.t('ess.changeUser.success', 'Thay đổi người dùng thành công!'));
        setTimeout(() => window.location.reload(), 800);
      },
      error: (err) => {
        this.changing.set(false);
        this.confirmErrorMessage.set(
          err?.error?.error || this.i18n.t('ess.changeUser.error', 'Thay đổi người dùng thất bại!'),
        );
      },
    });
  }

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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con
   *  để backend lọc IN (...) đúng, giống cascade của DeptTree.js gốc (xem giải thích chi tiết ở
   *  manage-emp-position-info.component.ts). */
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
}
