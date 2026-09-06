import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CodeItem, EvsParamRow, EvsResumeOption } from './evs-param-panel.model';
import { EvsParamPanelService } from './evs-param-panel.service';

/** 7 tab của trang - mỗi tab ứng với 1 namespace API + paramType riêng (đúng bản Thymeleaf gốc
 *  _vepp_meta). 4 tab item/list/group/family cùng dùng chung API "evsParam" nhưng khác paramType. */
type TabKey = 'grade' | 'item' | 'object' | 'list' | 'group' | 'family' | 'affirm';

const TAB_META: Record<TabKey, { api: string; paramType: string | null }> = {
  grade: { api: 'evsGrade', paramType: null },
  item: { api: 'evsParam', paramType: 'ITEM' },
  object: { api: 'evsParamObject', paramType: null },
  list: { api: 'evsParam', paramType: 'LIST' },
  group: { api: 'evsParam', paramType: 'GROUP' },
  family: { api: 'evsParam', paramType: 'FAMILY' },
  affirm: { api: 'evsAffirmRule', paramType: null },
};

/** parentCodeNo của các combo mã hệ thống dùng trong trang - đúng giá trị hardcode data-parent-code ở
 *  bản Thymeleaf gốc. */
const EVAL_TYPE_PARENT_CODE = '14015137'; // Loại ĐG (tab Cấp đánh giá)
const EVAL_GRADE_PARENT_CODE = '14015161'; // Cấp ĐG (tab Cấp đánh giá + Đối tượng đánh giá)
const START_STEP_PARENT_CODE = '14015351'; // Bước bắt đầu (tab Bảng đánh giá)
const EVS_STEP_PARENT_CODE = '14015060'; // Giai đoạn (tab Người đánh giá)
const RULE_ID_PARENT_CODE = '14015172'; // ID quy tắc (tab Người đánh giá)

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

/** Các key message.properties dùng trong trang này - toàn bộ key evsParam.* đã có sẵn (dùng chung với
 *  bản Thymeleaf cũ, không tạo mới - xem CLAUDE.md mục 3). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'evsParam.label.evalName', 'evsParam.btn.search', 'evsParam.tab.grade', 'evsParam.tab.item',
  'evsParam.tab.object', 'evsParam.tab.list', 'evsParam.tab.group', 'evsParam.tab.family',
  'evsParam.tab.affirm', 'evsParam.label.quickFilter', 'evsParam.btn.addNew', 'evsParam.btn.delete',
  'evsParam.btn.save', 'evsParam.col.evalType', 'evsParam.col.evalGrade', 'evsParam.col.include',
  'evsParam.col.startScore', 'evsParam.col.endScore', 'evsParam.col.score', 'evsParam.col.remark',
  'evsParam.col.updatedBy', 'evsParam.col.updateTime', 'evsParam.col.code', 'evsParam.col.name',
  'evsParam.col.defaultGrade', 'evsParam.col.formula', 'evsParam.col.initialStatus',
  'evsParam.col.evaluator', 'evsParam.col.evalGroup', 'evsParam.col.ruleId', 'evsParam.modal.deleteTitle',
  'evsParam.modal.deleteBodyPrefix', 'evsParam.modal.deleteBodySuffix', 'evsParam.btn.cancel',
  'evsParam.js.selectFirst', 'evsParam.js.noChanges', 'evsParam.js.saveError', 'evsParam.js.selectRow',
  'evsParam.js.deleteError', 'evsParam.js.defaultSelect',
  'alert.message.update_success', 'common.select', 'common.stt', 'common.noData', 'common.totalRows',
];

interface EvsParamRowState extends EvsParamRow {
  rowId: string;
  isNew: boolean;
  editing: boolean;
  modified: boolean;
}

/** State riêng cho từng tab - tách khỏi component để tránh lặp lại 7 bộ signal riêng biệt
 *  (rows/filter/checked/loading/saving đều theo tab), tham khảo ScheduleTabState ở EvsSchedulePanelComponent. */
class EvsParamTabState {
  readonly rows = signal<EvsParamRowState[]>([]);
  readonly filterText = signal('');
  readonly checked = signal<Set<string>>(new Set());
  readonly loading = signal(false);
  readonly saving = signal(false);

  readonly filteredRows = computed(() => {
    const kw = this.filterText().trim().toLowerCase();
    const list = this.rows();
    if (!kw) return list;
    return list.filter(
      (r) =>
        (r.codeName || r.evsGrade || r.evsGroup || '').toLowerCase().includes(kw) ||
        (r.codeNo || r.evsStep || '').toLowerCase().includes(kw) ||
        (r.remark || '').toLowerCase().includes(kw),
    );
  });
}

/**
 * Bản Angular của evs/manage/viewEvsParamPanel.html (Thymeleaf + jQuery, bảng tự vẽ tay không dùng
 * DataTables) - Tiêu chuẩn đánh giá gồm 7 tab: Cấp đánh giá (EVS_GRADE), Cấp hạng mục đánh giá/Bảng đánh
 * giá/Nhóm nhân viên/Nhóm chức vụ (EVS_PARAM, phân biệt bởi PARAM_TYPE=ITEM/LIST/GROUP/FAMILY), Đối
 * tượng đánh giá (EVS_PARAM_OBJECT), Người đánh giá (EVS_AFFIRM_RULE). Gọi lại nguyên API JSON đã có sẵn
 * ở EvsManageController (xem EvsParamPanelService, 4 namespace API evsGrade/evsParam/evsParamObject/
 * evsAffirmRule đều cùng chung khuôn .../list, .../save, .../delete) - không đổi backend.
 *
 * Cấu trúc lặp lại gần như nguyên xi EvsSchedulePanelComponent (trang chị em cùng module): 7 tab đổi từ
 * Bootstrap nav-tabs sang nz-tabs/nz-tab, mỗi tab dùng nz-table phân trang client-side (BE trả toàn bộ
 * danh sách theo resumeSeq (+paramType), không phân trang server), sửa dòng kiểu click-to-edit inline
 * (row.editing mutate trực tiếp trên object trong mảng - không cần signal.set() để re-render, tham khảo
 * RegPersonalTargetComponent), nút Lưu gom toàn bộ dòng isNew/modified trong tab đó gửi 1 lần lên
 * POST .../save (batch) rồi tải lại tab. Khác EvsSchedulePanelComponent ở chỗ trang này không có field
 * ngày tháng nên commitEdit không cần convert Date - đơn giản hơn.
 *
 * Các dòng của 7 tab gộp chung 1 EvsParamRowState (superset field của 4 DTO backend, xem model) để dùng
 * chung 1 bộ state/hàm generic theo `tab: TabKey` thay vì viết lặp lại 7 lần (tham khảo TAB_META).
 * Combo "Cấp ĐG" (parentCodeNo=14015161) hiển thị theo `description` thay vì `codeName` - đúng
 * data-text-show="description" ở bản gốc (khác mọi combo mã hệ thống khác trong trang này và các trang
 * evs-* trước đó). Combo "Hình thức tiêu chuẩn" (formula) và tên hiển thị sau khi chọn lấy từ
 * formulaOptions load 1 lần lúc vào trang (không phụ thuộc resumeSeq); combo "Nhóm nhân viên" (evsGroup,
 * tab Người đánh giá) phụ thuộc resumeSeq - tải lại mỗi khi bấm Tra cứu (đúng veppLoadGroupOptions ở bản
 * gốc). Mỗi select trong dòng đang sửa đều có handler onXxxChange ghi lại luôn *Name tương ứng để hiển
 * thị đúng ngay sau khi chọn (không cần đợi Lưu + tải lại), tham khảo onEvsStepChange ở
 * EvsSchedulePanelComponent.
 */
@Component({
  selector: 'app-evs-param-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzTabsModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './evs-param-panel.component.html',
  styleUrl: './evs-param-panel.component.css',
})
export class EvsParamPanelComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  private evsType = '';
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  resumeSeq: string | null = null;

  readonly evalTypeOptions = signal<CodeItem[]>([]);
  readonly evalGradeOptions = signal<CodeItem[]>([]);
  readonly startStepOptions = signal<CodeItem[]>([]);
  readonly evsStepOptions = signal<CodeItem[]>([]);
  readonly ruleIdOptions = signal<CodeItem[]>([]);
  readonly formulaOptions = signal<CodeItem[]>([]);
  readonly groupOptions = signal<CodeItem[]>([]);

  readonly grade = new EvsParamTabState();
  readonly item = new EvsParamTabState();
  readonly object = new EvsParamTabState();
  readonly list = new EvsParamTabState();
  readonly group = new EvsParamTabState();
  readonly family = new EvsParamTabState();
  readonly affirm = new EvsParamTabState();

  private readonly tabStates: Record<TabKey, EvsParamTabState> = {
    grade: this.grade, item: this.item, object: this.object, list: this.list,
    group: this.group, family: this.family, affirm: this.affirm,
  };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private pendingDeleteTab: TabKey | null = null;
  private pendingDeleteRowIds: string[] = [];

  private rowIdCounter = 0;

  constructor(
    private readonly api: EvsParamPanelService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getFormulaOptions().subscribe({ next: (list) => this.formulaOptions.set(list ?? []), error: () => this.formulaOptions.set([]) });
    this.api.getCodeList(EVAL_TYPE_PARENT_CODE).subscribe({ next: (list) => this.evalTypeOptions.set(list ?? []), error: () => this.evalTypeOptions.set([]) });
    this.api.getCodeList(EVAL_GRADE_PARENT_CODE).subscribe({ next: (list) => this.evalGradeOptions.set(list ?? []), error: () => this.evalGradeOptions.set([]) });
    this.api.getCodeList(START_STEP_PARENT_CODE).subscribe({ next: (list) => this.startStepOptions.set(list ?? []), error: () => this.startStepOptions.set([]) });
    this.api.getCodeList(EVS_STEP_PARENT_CODE).subscribe({ next: (list) => this.evsStepOptions.set(list ?? []), error: () => this.evsStepOptions.set([]) });
    this.api.getCodeList(RULE_ID_PARENT_CODE).subscribe({ next: (list) => this.ruleIdOptions.set(list ?? []), error: () => this.ruleIdOptions.set([]) });
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

  search(): void {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq) return;
    this.api.getGroupOptions(resumeSeq).subscribe({ next: (list) => this.groupOptions.set(list ?? []), error: () => this.groupOptions.set([]) });
    (Object.keys(TAB_META) as TabKey[]).forEach((tab) => this.loadTab(tab));
  }

  tabState(tab: TabKey): EvsParamTabState {
    return this.tabStates[tab];
  }

  private loadTab(tab: TabKey): void {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq) return;
    const state = this.tabState(tab);
    const meta = TAB_META[tab];
    state.loading.set(true);
    this.api.getList(meta.api, resumeSeq, this.evsType, meta.paramType).subscribe({
      next: (rows) => {
        state.rows.set((rows ?? []).map((r) => this.toRow(r, false)));
        state.filterText.set('');
        state.checked.set(new Set());
        state.loading.set(false);
      },
      error: () => {
        state.rows.set([]);
        state.loading.set(false);
      },
    });
  }

  private toRow(dto: EvsParamRow, isNew: boolean): EvsParamRowState {
    return { ...dto, rowId: dto.seq || this.newRowId(), isNew, editing: isNew, modified: isNew };
  }

  private newRowId(): string {
    return 'NEW_' + ++this.rowIdCounter;
  }

  private labelOf(options: CodeItem[], code: string | null | undefined): string {
    const opt = options.find((o) => o.codeNo === code);
    return opt ? opt.codeName : '';
  }

  gradeLabel(code: string | null | undefined): string {
    const opt = this.evalGradeOptions().find((o) => o.codeNo === code);
    return opt ? opt.description || opt.codeName : '';
  }

  onEvsTypeChange(row: EvsParamRowState, code: string | null): void {
    row.evsType = code;
    row.evsTypeName = this.labelOf(this.evalTypeOptions(), code);
  }

  onEvsGradeChange(row: EvsParamRowState, code: string | null): void {
    row.evsGrade = code;
    row.evsGradeName = this.gradeLabel(code);
  }

  onFormulaChange(row: EvsParamRowState, code: string | null): void {
    row.formula = code;
    row.formulaName = this.labelOf(this.formulaOptions(), code);
  }

  /** Hiển thị tên "Hình thức tiêu chuẩn" luôn tra cứu trực tiếp theo formulaOptions đang tải (đúng
   *  veppFormulaName ở bản gốc - không dùng formulaName trả về từ BE để hiển thị, kể cả khi mới tải
   *  trang xong chưa qua chỉnh sửa dòng nào). */
  formulaLabel(code: string | null | undefined): string {
    return this.labelOf(this.formulaOptions(), code);
  }

  onStartStepChange(row: EvsParamRowState, code: string | null): void {
    row.startStep = code;
    row.startStepName = this.labelOf(this.startStepOptions(), code);
  }

  onEvsStepChange(row: EvsParamRowState, code: string | null): void {
    row.evsStep = code;
    row.evsStepName = this.labelOf(this.evsStepOptions(), code);
  }

  onEvsGroupChange(row: EvsParamRowState, code: string | null): void {
    row.evsGroup = code;
    row.evsGroupName = this.labelOf(this.groupOptions(), code);
  }

  onRuleIdChange(row: EvsParamRowState, code: string | null): void {
    row.ruleId = code;
    row.ruleName = this.labelOf(this.ruleIdOptions(), code);
  }

  isIncludeOn(row: EvsParamRowState): boolean {
    return row.isInclude === '1' || row.isInclude === 'Y';
  }

  setIncludeOn(row: EvsParamRowState, checked: boolean): void {
    row.isInclude = checked ? '1' : '0';
  }

  // ==================== Lọc nhanh ====================

  onFilterChange(tab: TabKey, value: string): void {
    this.tabState(tab).filterText.set(value);
  }

  // ==================== Click dòng để sửa inline ====================

  rowClick(tab: TabKey, row: EvsParamRowState): void {
    if (row.editing) return;
    const state = this.tabState(tab);
    state.rows().forEach((r) => {
      if (r.editing) this.commitEdit(r);
    });
    row.editing = true;
  }

  private commitEdit(row: EvsParamRowState): void {
    row.editing = false;
    row.modified = true;
  }

  // ==================== Thêm dòng ====================

  private emptyRowFields(tab: TabKey): Partial<EvsParamRow> {
    switch (tab) {
      case 'grade':
        return { evsType: '', evsGrade: '', isInclude: '0', startScore: '', endScore: '', score: '', remark: '' };
      case 'item':
        return { paramType: 'ITEM', codeNo: '', codeName: '', evsScore: '' };
      case 'list':
        return { paramType: 'LIST', codeNo: '', codeName: '', formula: '', startStep: '' };
      case 'group':
        return { paramType: 'GROUP', codeNo: '', codeName: '', formula: '' };
      case 'family':
        return { paramType: 'FAMILY', codeNo: '', codeName: '', formula: '' };
      case 'object':
        return { codeNo: '', codeName: '', isInclude: '0', evsGrade: '', formula: '' };
      case 'affirm':
        return { evsStep: '', evsGroup: '', ruleId: '' };
    }
  }

  addRow(tab: TabKey): void {
    const state = this.tabState(tab);
    state.rows().forEach((r) => {
      if (r.editing) this.commitEdit(r);
    });
    const newRow: EvsParamRowState = {
      seq: '', resumeSeq: this.resumeSeq, rowId: this.newRowId(), isNew: true, editing: true, modified: true,
      paramType: null, evsType: null, evsTypeName: null, evsGrade: null, evsGradeName: null, isInclude: null,
      startScore: null, endScore: null, score: null, remark: null, codeNo: null, codeName: null, formula: null,
      formulaName: null, startStep: null, startStepName: null, evsScore: null, evsStep: null, evsStepName: null,
      evsGroup: null, evsGroupName: null, ruleId: null, ruleName: null, activity: null, orderNo: null,
      createDate: null, createdBy: null, updateDate: null, updatedBy: null,
      ...this.emptyRowFields(tab),
    };
    state.rows.update((rows) => [...rows, newRow]);
  }

  // ==================== Lưu ====================

  private buildPayload(tab: TabKey, r: EvsParamRowState): Record<string, unknown> {
    const base = { seq: r.isNew ? null : r.seq, resumeSeq: this.resumeSeq, evsType: this.evsType };
    switch (tab) {
      case 'grade':
        return {
          ...base, evsType: r.evsType || '', evsGrade: r.evsGrade || '', isInclude: r.isInclude || '0',
          startScore: r.startScore || '', endScore: r.endScore || '', score: r.score || '', remark: r.remark || '',
        };
      case 'item':
        return { ...base, paramType: 'ITEM', codeNo: r.codeNo || '', codeName: r.codeName || '', evsScore: r.evsScore || '' };
      case 'list':
        return {
          ...base, paramType: 'LIST', codeNo: r.codeNo || '', codeName: r.codeName || '',
          formula: r.formula || '', startStep: r.startStep || '',
        };
      case 'group':
        return { ...base, paramType: 'GROUP', codeNo: r.codeNo || '', codeName: r.codeName || '', formula: r.formula || '' };
      case 'family':
        return { ...base, paramType: 'FAMILY', codeNo: r.codeNo || '', codeName: r.codeName || '', formula: r.formula || '' };
      case 'object':
        return {
          ...base, codeNo: r.codeNo || '', codeName: r.codeName || '', formula: r.formula || '',
          isInclude: r.isInclude || '0', evsGrade: r.evsGrade || '',
        };
      case 'affirm':
        return { ...base, evsStep: r.evsStep || '', evsGroup: r.evsGroup || '', ruleId: r.ruleId || '' };
    }
  }

  saveTab(tab: TabKey): void {
    const state = this.tabState(tab);
    state.rows().forEach((r) => {
      if (r.editing) this.commitEdit(r);
    });
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evsParam.js.selectFirst', 'Vui lòng chọn Tên đánh giá trước khi lưu.'));
      return;
    }
    const toSave = state.rows().filter((r) => r.isNew || r.modified);
    if (!toSave.length) {
      this.message.warning(this.i18n.t('evsParam.js.noChanges', 'Không có dữ liệu nào thay đổi để lưu.'));
      return;
    }

    const meta = TAB_META[tab];
    const payload = toSave.map((r) => this.buildPayload(tab, r));

    state.saving.set(true);
    this.api.saveBatch(meta.api, payload).subscribe({
      next: () => {
        state.saving.set(false);
        this.message.success(this.i18n.t('alert.message.update_success', 'Sửa thành công!'));
        this.loadTab(tab);
      },
      error: () => {
        state.saving.set(false);
        this.message.error(this.i18n.t('evsParam.js.saveError', 'Lỗi khi lưu dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Chọn nhiều dòng (checkbox) - phạm vi trang hiện tại ====================

  isChecked(tab: TabKey, row: EvsParamRowState): boolean {
    return this.tabState(tab).checked().has(row.rowId);
  }

  toggleChecked(tab: TabKey, row: EvsParamRowState, checked: boolean): void {
    const state = this.tabState(tab);
    const next = new Set(state.checked());
    if (checked) next.add(row.rowId);
    else next.delete(row.rowId);
    state.checked.set(next);
  }

  allCheckedOnPage(tab: TabKey, pageRows: readonly EvsParamRowState[]): boolean {
    return pageRows.length > 0 && pageRows.every((r) => this.isChecked(tab, r));
  }

  someCheckedOnPage(tab: TabKey, pageRows: readonly EvsParamRowState[]): boolean {
    return pageRows.some((r) => this.isChecked(tab, r)) && !this.allCheckedOnPage(tab, pageRows);
  }

  toggleAllOnPage(tab: TabKey, pageRows: readonly EvsParamRowState[], checked: boolean): void {
    const state = this.tabState(tab);
    const next = new Set(state.checked());
    pageRows.forEach((r) => (checked ? next.add(r.rowId) : next.delete(r.rowId)));
    state.checked.set(next);
  }

  // ==================== Xóa ====================

  openDeleteConfirm(tab: TabKey): void {
    const ids = Array.from(this.tabState(tab).checked());
    if (!ids.length) {
      this.message.warning(this.i18n.t('evsParam.js.selectRow', 'Vui lòng chọn ít nhất một dòng để xóa.'));
      return;
    }
    this.pendingDeleteTab = tab;
    this.pendingDeleteRowIds = ids;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get pendingDeleteCount(): number {
    return this.pendingDeleteRowIds.length;
  }

  confirmDelete(): void {
    const tab = this.pendingDeleteTab;
    if (!tab) return;
    const state = this.tabState(tab);
    const ids = this.pendingDeleteRowIds;

    const existingSeqs = ids
      .map((id) => state.rows().find((r) => r.rowId === id))
      .filter((r): r is EvsParamRowState => !!r && !r.isNew)
      .map((r) => r.seq);

    state.rows.update((rows) => rows.filter((r) => !ids.includes(r.rowId)));
    const nextChecked = new Set(state.checked());
    ids.forEach((id) => nextChecked.delete(id));
    state.checked.set(nextChecked);
    this.deleteVisible.set(false);

    if (!existingSeqs.length) return;
    this.deleting.set(true);
    this.api.deleteBatch(TAB_META[tab].api, existingSeqs).subscribe({
      next: () => this.deleting.set(false),
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('evsParam.js.deleteError', 'Lỗi khi xóa dữ liệu.'));
        this.loadTab(tab);
      },
    });
  }

  // ==================== Hiển thị ====================

  /** Hiển thị ngày phần "Thời gian TĐ" - chỉ lấy phần ngày dd/MM/yyyy, bỏ giờ nếu có (đúng phạm vi hiển
   *  thị veppFmtDate ở bản gốc - chuỗi trả về từ BE là 'YYYY-MM-DD HH24:MI'). */
  toDmy(s: string | null): string {
    if (!s) return '';
    const [y, m, d] = s.substring(0, 10).split('-');
    return y && m && d ? `${d}/${m}/${y}` : s;
  }
}
