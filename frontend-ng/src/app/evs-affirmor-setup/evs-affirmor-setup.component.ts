import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AddObjectPayload,
  AffirmorSavePayload,
  AuthDeptNode,
  EmployeeSearchResult,
  EvsAffirmorSetupDto,
  EvsResumeOption,
} from './evs-affirmor-setup.model';
import { EvsAffirmorSetupService } from './evs-affirmor-setup.service';

/** Ô người đánh giá đang được sửa (chỉ hỗ trợ lần 1/2 - đúng phạm vi UI bản gốc). */
type AffirmLevel = 1 | 2;

/** Đích áp dụng khi chọn 1 nhân viên trong popup tìm kiếm - popup dùng chung cho 3 ngữ cảnh: sửa 1 ô
 *  người đánh giá trong bảng, áp dụng hàng loạt, và modal Thêm mới đối tượng đánh giá (đúng
 *  EmployeeSearchModal dùng chung ở bản Thymeleaf gốc). */
type PickerTarget =
  | { kind: 'row'; row: EvsAffirmorSetupDto; level: AffirmLevel }
  | { kind: 'bulk' }
  | { kind: 'addField'; field: 'object' | 'affirm1' | 'affirm2' };

/** Các key message.properties dùng trong trang này - toàn bộ key evs.viewEvsAffirmorSetup.* đã có sẵn
 *  (dùng chung với bản Thymeleaf cũ, không tạo mới - xem CLAUDE.md mục 3). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'evs.viewEvsAffirmorSetup.evalName', 'evs.viewEvsAffirmorSetup.department', 'evs.viewEvsAffirmorSetup.btnSearch',
  'evs.viewEvsAffirmorSetup.btnClearFilter', 'evs.viewEvsAffirmorSetup.btnAddNew', 'evs.viewEvsAffirmorSetup.btnSaveAll',
  'evs.viewEvsAffirmorSetup.btnDoAll', 'evs.viewEvsAffirmorSetup.btnClear', 'evs.viewEvsAffirmorSetup.selectOption',
  'evs.viewEvsAffirmorSetup.evalStage1', 'evs.viewEvsAffirmorSetup.evalStage2', 'evs.viewEvsAffirmorSetup.selectAll',
  'evs.viewEvsAffirmorSetup.empCode', 'evs.viewEvsAffirmorSetup.evalSheet', 'evs.viewEvsAffirmorSetup.dg1Name',
  'evs.viewEvsAffirmorSetup.dg1Position', 'evs.viewEvsAffirmorSetup.dg2Name', 'evs.viewEvsAffirmorSetup.dg2Position',
  'evs.viewEvsAffirmorSetup.changeBy', 'evs.viewEvsAffirmorSetup.loadingTitle', 'evs.viewEvsAffirmorSetup.loadingMessage',
  'evs.viewEvsAffirmorSetup.addModalTitle', 'evs.viewEvsAffirmorSetup.evalObject', 'evs.viewEvsAffirmorSetup.clickToEdit',
  'evs.viewEvsAffirmorSetup.PINGJIAREN.a', 'evs.viewEvsAffirmorSetup.PINGJIAQUN.a',
  'evs.viewEvsAffirmorSetup.PINGJIAJIEDUAN.a', 'evs.viewEvsAffirmorSetup.YICIPINGJIAREN.a',
  'evs.viewEvsAffirmorSetup.LAINGCIPINGJIAREN.a', 'evs.viewEvsAffirmorSetup.CreateTarget.a',
  'evs.viewEvsAffirmorSetup.StartEvaluation.a', 'evs.viewEvsAffirmorSetup.btnDelete',
  'evs.viewEvsAffirmorSetup.placeholder.selectDept', 'evs.viewEvsAffirmorSetup.placeholder.selectKeyword',
  'evs.viewEvsAffirmorSetup.placeholder.selectEmployee', 'evs.viewEvsAffirmorSetup.placeholder.enterName',
  'evs.viewEvsAffirmorSetup.msg.selectEvalFirst', 'evs.viewEvsAffirmorSetup.msg.selectStage',
  'evs.viewEvsAffirmorSetup.msg.selectAffirmor', 'evs.viewEvsAffirmorSetup.msg.noTickedRows',
  'evs.viewEvsAffirmorSetup.msg.confirmCreateTarget', 'evs.viewEvsAffirmorSetup.msg.createTargetSuccess',
  'evs.viewEvsAffirmorSetup.msg.createTargetError', 'evs.viewEvsAffirmorSetup.msg.createTargetTimeout',
  'evs.viewEvsAffirmorSetup.msg.createTargetFail', 'evs.viewEvsAffirmorSetup.msg.confirmEvsStart',
  'evs.viewEvsAffirmorSetup.msg.evsStartSuccess', 'evs.viewEvsAffirmorSetup.msg.evsStartError',
  'evs.viewEvsAffirmorSetup.msg.evsStartFail', 'evs.viewEvsAffirmorSetup.msg.noTickedSave',
  'evs.viewEvsAffirmorSetup.msg.saveSuccess', 'evs.viewEvsAffirmorSetup.msg.saveFail',
  'evs.viewEvsAffirmorSetup.msg.addSuccess', 'evs.viewEvsAffirmorSetup.msg.addError',
  'evs.viewEvsAffirmorSetup.msg.addFail', 'evs.viewEvsAffirmorSetup.msg.selectEvalObject',
  'evs.viewEvsAffirmorSetup.msg.confirmDelete', 'evs.viewEvsAffirmorSetup.msg.deleteSuccess',
  'evs.viewEvsAffirmorSetup.msg.deleteError', 'evs.viewEvsAffirmorSetup.msg.deleteFail',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.col.no',
  'common.empName', 'common.empId', 'common.deptName', 'common.position', 'common.joinDate',
  'common.confirm', 'common.cancel', 'common.close', 'common.save', 'common.search', 'common.clearFilter',
  'common.selectAll', 'common.noData', 'common.totalRows', 'common.loadFail',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface AddObjectForm {
  objectDisplay: string;
  objectPersonId: string | null;
  affirm1Display: string;
  affirm1PersonId: string | null;
  affirm2Display: string;
  affirm2PersonId: string | null;
}

const EMPTY_ADD_FORM: AddObjectForm = {
  objectDisplay: '', objectPersonId: null, affirm1Display: '', affirm1PersonId: null, affirm2Display: '', affirm2PersonId: null,
};

/**
 * Bản Angular của evs/manage/viewEvsAffirmorSetup.html (Thymeleaf + jQuery DataTables) - Thiết lập
 * người đánh giá cho từng đối tượng (EVS_OBJECT + EVS_AFFIRM). Gọi lại nguyên API JSON đã có sẵn ở
 * EvsManageController (xem EvsAffirmorSetupService) - không đổi backend. Dùng nz-table phân trang
 * client-side (BE trả toàn bộ danh sách theo bộ lọc resumeSeq/deptNos/affirmorKeyword, không phân trang
 * server) thay cho DataTables; nz-tree-select thay widget DeptTree.js (tham khảo
 * ManageEvsResultEmpComponent, cùng dùng chung endpoint /ar/attendanceSettings/api/arSupervisor/
 * authorized-departments).
 *
 * Đơn giản hoá quan trọng so với bản gốc: ô "ĐG1/ĐG2 - Họ tên" ở bản gốc là kiểu click-to-edit (click →
 * hiện input text → gõ rồi Enter mới mở popup, hoặc bấm nút kính lúp) - do EmployeeSearchModal (jQuery)
 * không thể mở trực tiếp mà cần input trung gian. Ở bản Angular, click thẳng vào tên mở ngay modal tìm
 * kiếm nhân viên (nz-modal, cùng 1 modal dùng chung cho sửa từng ô/áp dụng hàng loạt/modal Thêm mới -
 * qua PickerTarget) - bỏ bước input trung gian vì không còn ràng buộc kỹ thuật đó, đúng UX quen thuộc
 * của các trang Angular khác trong dự án (tham khảo picker ở ViewPaInputItemDataComponent). Cũng vì vậy
 * không cần state "inst.changes" tách riêng như bản gốc (DataTables re-render mất state inline) - object
 * dòng được mutate trực tiếp trong mảng `rows` signal (tham khảo RegPersonalTargetComponent), Angular tự
 * re-render vì mọi thao tác đều nằm trong NgZone.
 *
 * Nhân viên đã sửa 1 ô đánh giá tự động được tick (đúng hành vi bản gốc) để: (1) xác định dòng nào gửi
 * lên khi bấm "Lưu tất cả" (chỉ gửi dòng đã tick, giữ nguyên personId1-4 hiện có trong object dòng đó -
 * không cần map "changes" riêng vì đã mutate trực tiếp), (2) là phạm vi tác động của "Thực hiện tất cả"
 * (áp giá trị Giai đoạn+Người đánh giá đang chọn cho mọi dòng đang tick). Checkbox "chọn tất cả" chỉ áp
 * dụng cho các dòng đang hiển thị ở trang hiện tại (đúng phạm vi DataTables client-side ở bản gốc, tham
 * khảo EvsSchedulePanelComponent).
 *
 * "Tạo mục tiêu" (PR_CREATE_EVS_TARGET) có thể chạy lâu - giữ timeout 300s + modal loading không cho
 * đóng khi đang chạy, đúng bản gốc.
 */
@Component({
  selector: 'app-evs-affirmor-setup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzTreeSelectModule,
    NzModalModule,
    NzAlertModule,
    NzSpinModule,
    TranslatePipe,
  ],
  templateUrl: './evs-affirmor-setup.component.html',
  styleUrl: './evs-affirmor-setup.component.css',
})
export class EvsAffirmorSetupComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  private evsType = '';
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  resumeSeq: string | null = null;

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  private deptChildrenMap = new Map<string, string[]>();
  deptNos: string[] = [];
  affirmorKeyword = '';

  readonly rows = signal<EvsAffirmorSetupDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly ticked = signal<Set<string>>(new Set());

  // ==================== Thanh áp dụng hàng loạt ====================
  bulkStage: string | null = null;
  bulkPersonId: string | null = null;
  bulkLocalName = '';
  bulkPostGradeName = '';
  bulkDisplay = '';

  // ==================== Popup tìm kiếm nhân viên (dùng chung 3 ngữ cảnh) ====================
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchResult[]>([]);
  readonly pickerLoading = signal(false);
  pickerKeyword = '';
  private pickerTarget: PickerTarget | null = null;

  // ==================== Modal Thêm mới đối tượng đánh giá ====================
  readonly addModalVisible = signal(false);
  readonly adding = signal(false);
  addForm: AddObjectForm = { ...EMPTY_ADD_FORM };

  // ==================== Tạo mục tiêu / Bắt đầu đánh giá ====================
  readonly creatingTarget = signal(false);
  readonly startingEvs = signal(false);

  // ==================== Xóa ====================
  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);

  readonly saving = signal(false);

  constructor(
    private readonly api: EvsAffirmorSetupService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get('evsType') ?? '';
      this.loadResumeOptions();
    });
  }

  private loadResumeOptions(): void {
    this.api.getResumeList(this.evsType).subscribe({
      next: (rows) => {
        this.resumeOptions.set(rows ?? []);
        if (rows && rows.length) {
          this.resumeSeq = rows[0].seq;
          this.search();
        }
      },
      error: () => this.resumeOptions.set([]),
    });
  }

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
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

  // ==================== Search ====================

  search(): void {
    if (!this.resumeSeq) return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.ticked.set(new Set());
    this.api.getList(this.resumeSeq, this.expandDeptSelection(this.deptNos).join(','), this.affirmorKeyword.trim(), this.evsType).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.deptNos = [];
    this.affirmorKeyword = '';
    this.search();
  }

  // ==================== Chọn nhiều dòng (checkbox) - phạm vi trang hiện tại ====================

  isTicked(row: EvsAffirmorSetupDto): boolean {
    return this.ticked().has(row.seq);
  }

  toggleTicked(row: EvsAffirmorSetupDto, checked: boolean): void {
    const next = new Set(this.ticked());
    if (checked) next.add(row.seq);
    else next.delete(row.seq);
    this.ticked.set(next);
  }

  allTickedOnPage(pageRows: readonly EvsAffirmorSetupDto[]): boolean {
    return pageRows.length > 0 && pageRows.every((r) => this.isTicked(r));
  }

  someTickedOnPage(pageRows: readonly EvsAffirmorSetupDto[]): boolean {
    return pageRows.some((r) => this.isTicked(r)) && !this.allTickedOnPage(pageRows);
  }

  toggleAllOnPage(pageRows: readonly EvsAffirmorSetupDto[], checked: boolean): void {
    const next = new Set(this.ticked());
    pageRows.forEach((r) => (checked ? next.add(r.seq) : next.delete(r.seq)));
    this.ticked.set(next);
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  openPicker(target: PickerTarget): void {
    this.pickerTarget = target;
    this.pickerKeyword = '';
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
    this.pickerSearch();
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.api.searchEmployee(this.pickerKeyword.trim(), this.resumeSeq ?? '').subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      },
    });
  }

  selectEmployee(emp: EmployeeSearchResult): void {
    const target = this.pickerTarget;
    if (!target) return;
    if (target.kind === 'row') {
      const row = target.row as unknown as Record<string, unknown>;
      row['personId' + target.level] = emp.personId;
      row['localName' + target.level] = emp.localName;
      row['postGradeName' + target.level] = emp.postGradeName;
      this.toggleTicked(target.row, true);
    } else if (target.kind === 'bulk') {
      this.bulkPersonId = emp.personId;
      this.bulkLocalName = emp.localName;
      this.bulkPostGradeName = emp.postGradeName;
      this.bulkDisplay = `${emp.empid} - ${emp.localName}`;
    } else {
      const display = `${emp.empid} - ${emp.localName}`;
      if (target.field === 'object') {
        this.addForm.objectDisplay = display;
        this.addForm.objectPersonId = emp.personId;
      } else if (target.field === 'affirm1') {
        this.addForm.affirm1Display = display;
        this.addForm.affirm1PersonId = emp.personId;
      } else {
        this.addForm.affirm2Display = display;
        this.addForm.affirm2PersonId = emp.personId;
      }
    }
    this.pickerVisible.set(false);
  }

  // ==================== Áp dụng hàng loạt ====================

  bulkClear(): void {
    this.bulkStage = null;
    this.bulkPersonId = null;
    this.bulkLocalName = '';
    this.bulkPostGradeName = '';
    this.bulkDisplay = '';
  }

  bulkApply(): void {
    if (!this.bulkStage) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.selectStage', 'Vui lòng chọn Giai đoạn (1 hoặc 2).'));
      return;
    }
    if (!this.bulkPersonId) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.selectAffirmor', 'Vui lòng chọn Người đánh giá.'));
      return;
    }
    const tickedSeqs = this.ticked();
    if (tickedSeqs.size === 0) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.noTickedRows', 'Chưa có dòng nào được tick. Vui lòng tick các dòng cần áp dụng.'));
      return;
    }
    const level = this.bulkStage;
    this.rows().forEach((row) => {
      if (!tickedSeqs.has(row.seq)) return;
      const r = row as unknown as Record<string, unknown>;
      r['personId' + level] = this.bulkPersonId;
      r['localName' + level] = this.bulkLocalName;
      r['postGradeName' + level] = this.bulkPostGradeName;
    });
  }

  // ==================== Lưu tất cả (chỉ lưu dòng được tick) ====================

  saveAll(): void {
    const tickedSeqs = this.ticked();
    if (tickedSeqs.size === 0) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.noTickedSave', 'Chưa có dòng nào được chọn để lưu. Hãy chọn người đánh giá hoặc tick vào dòng cần lưu.'));
      return;
    }
    const payload: AffirmorSavePayload[] = this.rows()
      .filter((r) => tickedSeqs.has(r.seq))
      .map((r) => ({ seq: r.seq, personId1: r.personId1 || null, personId2: r.personId2 || null, personId3: r.personId3 || null, personId4: r.personId4 || null }));

    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.ticked.set(new Set());
        this.message.success(this.i18n.t('evs.viewEvsAffirmorSetup.msg.saveSuccess', 'Lưu thành công!'));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('evs.viewEvsAffirmorSetup.msg.saveFail', 'Lỗi khi lưu dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Xóa các dòng đã tick ====================

  openDeleteConfirm(): void {
    if (this.ticked().size === 0) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.noTickedRows', 'Chưa có dòng nào được tick. Vui lòng tick các dòng cần áp dụng.'));
      return;
    }
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get tickedCount(): number {
    return this.ticked().size;
  }

  confirmDelete(): void {
    const seqList = Array.from(this.ticked());
    this.deleting.set(true);
    this.api.delete(seqList).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.ticked.set(new Set());
          this.message.success(this.i18n.t('evs.viewEvsAffirmorSetup.msg.deleteSuccess', 'Xóa thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('evs.viewEvsAffirmorSetup.msg.deleteError', 'Không thể xóa dữ liệu.'));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t('evs.viewEvsAffirmorSetup.msg.deleteFail', 'Lỗi khi xóa dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Thêm mới đối tượng đánh giá ====================

  openAddModal(): void {
    this.addForm = { ...EMPTY_ADD_FORM };
    this.addModalVisible.set(true);
  }

  closeAddModal(): void {
    this.addModalVisible.set(false);
  }

  clearAddField(field: 'object' | 'affirm1' | 'affirm2'): void {
    if (field === 'object') {
      this.addForm.objectDisplay = '';
      this.addForm.objectPersonId = null;
    } else if (field === 'affirm1') {
      this.addForm.affirm1Display = '';
      this.addForm.affirm1PersonId = null;
    } else {
      this.addForm.affirm2Display = '';
      this.addForm.affirm2PersonId = null;
    }
  }

  saveNewObject(): void {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    if (!this.addForm.objectPersonId) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.selectEvalObject', 'Vui lòng chọn đối tượng đánh giá.'));
      return;
    }
    const payload: AddObjectPayload = {
      resumeSeq: this.resumeSeq,
      personId: this.addForm.objectPersonId,
      personId1: this.addForm.affirm1PersonId || null,
      personId2: this.addForm.affirm2PersonId || null,
      personId3: null,
      personId4: null,
    };
    this.adding.set(true);
    this.api.addObject(payload).subscribe({
      next: (res) => {
        this.adding.set(false);
        if (res.success) {
          this.addModalVisible.set(false);
          this.message.success(this.i18n.t('evs.viewEvsAffirmorSetup.msg.addSuccess', 'Thêm mới thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('evs.viewEvsAffirmorSetup.msg.addError', 'Không thể thêm mới.'));
        }
      },
      error: () => {
        this.adding.set(false);
        this.message.error(this.i18n.t('evs.viewEvsAffirmorSetup.msg.addFail', 'Lỗi khi thêm mới. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Tạo mục tiêu ====================

  createTarget(): void {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: this.i18n.t('evs.viewEvsAffirmorSetup.msg.confirmCreateTarget', 'Bạn có chắc muốn tạo mục tiêu cho đợt đánh giá này không?'),
      nzOnOk: () => this.doCreateTarget(),
    });
  }

  private doCreateTarget(): void {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq) return;
    this.creatingTarget.set(true);
    this.api.createTarget(resumeSeq).subscribe({
      next: (res) => {
        this.creatingTarget.set(false);
        if (res.success) {
          this.message.success(this.i18n.t('evs.viewEvsAffirmorSetup.msg.createTargetSuccess', 'Tạo mục tiêu thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('evs.viewEvsAffirmorSetup.msg.createTargetError', 'Không thể tạo mục tiêu.'));
        }
      },
      error: (err) => {
        this.creatingTarget.set(false);
        const msg = err?.name === 'TimeoutError'
          ? this.i18n.t('evs.viewEvsAffirmorSetup.msg.createTargetTimeout', 'Quá thời gian chờ. Stored procedure đang chạy lâu, vui lòng kiểm tra lại sau.')
          : this.i18n.t('evs.viewEvsAffirmorSetup.msg.createTargetFail', 'Lỗi khi gọi tạo mục tiêu. Vui lòng thử lại.');
        this.message.error(msg);
      },
    });
  }

  // ==================== Bắt đầu đánh giá ====================

  evsStart(): void {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: this.i18n.t('evs.viewEvsAffirmorSetup.msg.confirmEvsStart', 'Bạn có chắc muốn bắt đầu đánh giá cho đợt này không?'),
      nzOnOk: () => this.doEvsStart(),
    });
  }

  private doEvsStart(): void {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq) return;
    this.startingEvs.set(true);
    this.api.evsStart(resumeSeq).subscribe({
      next: (res) => {
        this.startingEvs.set(false);
        if (res.success) {
          this.message.success(this.i18n.t('evs.viewEvsAffirmorSetup.msg.evsStartSuccess', 'Bắt đầu đánh giá thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('evs.viewEvsAffirmorSetup.msg.evsStartError', 'Không thể bắt đầu đánh giá.'));
        }
      },
      error: () => {
        this.startingEvs.set(false);
        this.message.error(this.i18n.t('evs.viewEvsAffirmorSetup.msg.evsStartFail', 'Lỗi khi gọi bắt đầu đánh giá. Vui lòng thử lại.'));
      },
    });
  }
}
