import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree, expandDeptSelection } from '../manage-emp-position-info/dept-tree.util';
import { AffirmSpecialCell, AffirmSpecialType, EmployeeOption } from './view-affirm-special-list.model';
import { ViewAffirmSpecialListService } from './view-affirm-special-list.service';

export type AffirmSpecialModalMode = 'add' | 'edit';

/** Người trong bảng người duyệt / nhân viên được duyệt của modal. */
interface PersonItem {
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
}

/**
 * Modal Thiết lập (addAffirmSpecialView.jsp) và Cập nhật (updateAffirmSpecialView.jsp) phê duyệt đặc biệt:
 * - add: chọn nhiều loại phê duyệt + nhiều nhân viên/phòng ban được duyệt, áp cùng 1 danh sách người duyệt.
 * - edit: đúng 1 ô (đối tượng x loại) đang chọn trên bảng - chỉ sửa danh sách người duyệt.
 * Thứ tự dòng trong bảng người duyệt = cấp duyệt (nút lên/xuống thay upper()/moveDown() của bản JSP).
 * Tìm nhân viên bằng nz-autocomplete (thay ô nhập mã + Enter gọi getPersonCntByEmpid của bản gốc).
 */
@Component({
  selector: 'app-affirm-special-edit-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzModalModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzAutocompleteModule,
    NzTreeSelectModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './affirm-special-edit-modal.component.html',
})
export class AffirmSpecialEditModalComponent implements OnChanges, OnDestroy {
  @Input() visible = false;
  @Input() mode: AffirmSpecialModalMode = 'add';
  @Input() types: AffirmSpecialType[] = [];
  /** Ô đang sửa - chỉ dùng khi mode = 'edit'. */
  @Input() cell: AffirmSpecialCell | null = null;
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly saved = new EventEmitter<void>();

  readonly saving = signal(false);
  readonly loadingAffirmors = signal(false);
  readonly affirmors = signal<PersonItem[]>([]);
  readonly objectPersons = signal<PersonItem[]>([]);
  readonly affirmorOptions = signal<EmployeeOption[]>([]);
  readonly objectOptions = signal<EmployeeOption[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);

  selectedTypes = new Set<string>();
  deptNos: string[] = [];
  affirmorKeyword = '';
  objectKeyword = '';

  private deptChildrenMap = new Map<string, string[]>();
  private deptTreeLoaded = false;
  private affirmorTimer: ReturnType<typeof setTimeout> | null = null;
  private objectTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private readonly api: ViewAffirmSpecialListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  get isEdit(): boolean {
    return this.mode === 'edit';
  }

  get allTypesChecked(): boolean {
    return this.types.length > 0 && this.selectedTypes.size === this.types.length;
  }

  get someTypesChecked(): boolean {
    return this.selectedTypes.size > 0 && !this.allTypesChecked;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && this.visible) this.reset();
  }

  ngOnDestroy(): void {
    if (this.affirmorTimer) clearTimeout(this.affirmorTimer);
    if (this.objectTimer) clearTimeout(this.objectTimer);
  }

  toggleAllTypes(checked: boolean): void {
    this.selectedTypes = new Set(checked ? this.types.map((t) => t.codeNo) : []);
  }

  toggleType(codeNo: string, checked: boolean): void {
    const next = new Set(this.selectedTypes);
    if (checked) next.add(codeNo);
    else next.delete(codeNo);
    this.selectedTypes = next;
  }

  // ==================== Tìm nhân viên (autocomplete) ====================

  onAffirmorKeywordChange(value: string): void {
    this.affirmorKeyword = value;
    this.affirmorTimer = this.debounceSearch(value, this.affirmorTimer, (list) => this.affirmorOptions.set(list));
  }

  onObjectKeywordChange(value: string): void {
    this.objectKeyword = value;
    this.objectTimer = this.debounceSearch(value, this.objectTimer, (list) => this.objectOptions.set(list));
  }

  addAffirmor(opt: EmployeeOption): void {
    this.affirmors.set(this.appendPerson(this.affirmors(), opt));
    this.affirmorOptions.set([]);
    // nz-autocomplete ghi nhãn option vào ô nhập sau khi chọn - xóa ở tick kế tiếp để sẵn sàng tìm người tiếp theo
    setTimeout(() => (this.affirmorKeyword = ''));
  }

  addObjectPerson(opt: EmployeeOption): void {
    this.objectPersons.set(this.appendPerson(this.objectPersons(), opt));
    this.objectOptions.set([]);
    setTimeout(() => (this.objectKeyword = ''));
  }

  // ==================== Sắp xếp cấp duyệt ====================

  moveAffirmor(index: number, offset: -1 | 1): void {
    const list = [...this.affirmors()];
    const target = index + offset;
    if (target < 0 || target >= list.length) return;
    [list[index], list[target]] = [list[target], list[index]];
    this.affirmors.set(list);
  }

  removeAffirmor(index: number): void {
    this.affirmors.set(this.affirmors().filter((_, i) => i !== index));
  }

  removeObjectPerson(index: number): void {
    this.objectPersons.set(this.objectPersons().filter((_, i) => i !== index));
  }

  // ==================== Lưu ====================

  close(): void {
    this.closed.emit();
  }

  submit(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const payload = this.buildPayload();
    if (!payload) return;

    if (payload.affirmTypeNos.length === 0) {
      this.message.warning(t('alert.message.sys.affirm.pleaseChooseAffirmType', 'Xin chọn loại phê duyệt!'));
      return;
    }
    if (payload.deptNos.length === 0 && payload.personIds.length === 0) {
      this.message.warning(t('vasl.msg.chooseObject', 'Vui lòng chọn nhân viên hoặc phòng ban được duyệt!'));
      return;
    }
    // Thêm mới bắt buộc có người duyệt; khi cập nhật, danh sách rỗng nghĩa là xóa thiết lập của ô này
    if (!this.isEdit && payload.affirmorIds.length === 0) {
      this.message.warning(t('vasl.msg.chooseAffirmor', 'Vui lòng chọn ít nhất 1 người duyệt!'));
      return;
    }

    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message || t('common.saveSuccess', 'Lưu thành công!'));
          this.saved.emit();
        } else {
          this.message.error(res.message || t('vasl.msg.saveFail', 'Lưu thất bại!'));
        }
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || t('vasl.msg.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  private buildPayload() {
    const affirmorIds = this.affirmors().map((a) => a.personId);
    if (this.isEdit) {
      if (!this.cell) return null;
      const { row, type } = this.cell;
      return {
        affirmTypeNos: [type.codeNo],
        affirmorIds,
        deptNos: row.objectType === 'D' ? [row.affirmObject] : [],
        personIds: row.objectType === 'E' ? [row.affirmObject] : [],
      };
    }
    return {
      // Giữ thứ tự loại theo cột trên bảng
      affirmTypeNos: this.types.map((t) => t.codeNo).filter((c) => this.selectedTypes.has(c)),
      affirmorIds,
      // Giống zTree gốc (chkboxType Y:"s"): chọn phòng ban cha = chọn luôn toàn bộ phòng ban con
      deptNos: expandDeptSelection(this.deptNos, this.deptChildrenMap),
      personIds: this.objectPersons().map((p) => p.personId),
    };
  }

  // ==================== Khởi tạo ====================

  private reset(): void {
    this.saving.set(false);
    this.affirmors.set([]);
    this.objectPersons.set([]);
    this.affirmorOptions.set([]);
    this.objectOptions.set([]);
    this.affirmorKeyword = '';
    this.objectKeyword = '';
    this.selectedTypes = new Set();
    this.deptNos = [];

    if (this.isEdit) {
      this.loadAffirmors();
    } else {
      this.loadDeptTree();
    }
  }

  private loadAffirmors(): void {
    if (!this.cell) return;
    this.loadingAffirmors.set(true);
    this.api.getAffirmors(this.cell.row.affirmObject, this.cell.type.codeNo).subscribe({
      next: (list) => {
        this.affirmors.set(
          (list ?? []).map((d) => ({
            personId: d.affirmorId,
            empId: d.empId,
            localName: d.localName,
            deptName: d.deptName,
          })),
        );
        this.loadingAffirmors.set(false);
      },
      error: () => {
        this.loadingAffirmors.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private loadDeptTree(): void {
    if (this.deptTreeLoaded) return;
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => {
        const tree = buildDeptTree(list ?? []);
        this.deptChildrenMap = tree.childrenMap;
        this.deptNodes.set(tree.nodes);
        this.deptTreeLoaded = true;
      },
      error: () => this.message.error(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private debounceSearch(
    value: string,
    timer: ReturnType<typeof setTimeout> | null,
    apply: (list: EmployeeOption[]) => void,
  ): ReturnType<typeof setTimeout> | null {
    if (timer) clearTimeout(timer);
    const keyword = (value ?? '').trim();
    if (!keyword) {
      apply([]);
      return null;
    }
    return setTimeout(() => {
      this.api.searchEmployees(keyword).subscribe({
        next: (list) => apply(list ?? []),
        error: () => apply([]),
      });
    }, 300);
  }

  private appendPerson(list: PersonItem[], opt: EmployeeOption): PersonItem[] {
    if (list.some((p) => p.personId === opt.personId)) {
      this.message.warning(this.i18n.t('vasl.msg.duplicatePerson', 'Nhân viên này đã có trong danh sách!'));
      return list;
    }
    return [...list, { personId: opt.personId, empId: opt.empId, localName: opt.localName, deptName: opt.deptName }];
  }
}
