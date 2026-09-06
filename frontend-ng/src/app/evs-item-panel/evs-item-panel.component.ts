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
import { CodeItem, EvsItemPanelRow, EvsResumeOption } from './evs-item-panel.model';
import { EvsItemPanelService } from './evs-item-panel.service';

/** 2 tab của trang - mỗi tab ứng với 1 namespace API riêng (đúng bản Thymeleaf gốc). */
type TabKey = 'item' | 'param';

const TAB_META: Record<TabKey, { api: string }> = {
  item: { api: 'evsItem' },
  param: { api: 'evsItemParam' },
};

/** parentCodeNo của combo "Nhóm chỉ tiêu" (tab Chỉ tiêu đánh giá) - đúng giá trị hardcode ở bản gốc. */
const GROUP_NO_PARENT_CODE = '14015376';

/** Các key message.properties dùng trong trang này. Phần label/cột dùng evs.manage.viewEvsItemPanel.*
 *  (đã có sẵn); phần nút bấm/thông báo lưu/xóa dùng lại nguyên evsParam.* (đã tạo cho EvsParamPanelComponent
 *  - trang chị em cùng module, text trùng khớp hoàn toàn với chuỗi hardcode ở bản gốc trang này) - không
 *  tạo mới, đúng CLAUDE.md mục 3. */
const I18N_KEYS = [
  'evs.manage.viewEvsItemPanel.search.evaluationName', 'evs.manage.viewEvsItemPanel.search.criteriaGroup',
  'evs.manage.viewEvsItemPanel.search.evalGroup', 'evs.manage.viewEvsItemPanel.search.occGroup',
  'evs.manage.viewEvsItemPanel.search.select', 'evs.manage.viewEvsItemPanel.tab.item',
  'evs.manage.viewEvsItemPanel.tab.param', 'evs.manage.viewEvsItemPanel.col.no',
  'evs.manage.viewEvsItemPanel.col.criteriaGroup', 'evs.manage.viewEvsItemPanel.col.itemCode',
  'evs.manage.viewEvsItemPanel.col.itemName', 'evs.manage.viewEvsItemPanel.col.itemNameKo',
  'evs.manage.viewEvsItemPanel.col.remark', 'evs.manage.viewEvsItemPanel.col.remarkKo',
  'evs.manage.viewEvsItemPanel.col.evalGroup', 'evs.manage.viewEvsItemPanel.col.occGroup',
  'evs.manage.viewEvsItemPanel.col.score', 'evs.manage.viewEvsItemPanel.col.updatedBy',
  'evs.manage.viewEvsItemPanel.col.updateDate',
  'evsParam.label.quickFilter', 'evsParam.btn.addNew', 'evsParam.btn.delete', 'evsParam.btn.save',
  'evsParam.btn.cancel', 'evsParam.label.perPage', 'evsParam.label.records', 'evsParam.modal.deleteTitle',
  'evsParam.modal.deleteBodyPrefix', 'evsParam.modal.deleteBodySuffix', 'evsParam.js.selectFirst',
  'evsParam.js.noChanges', 'evsParam.js.saveError', 'evsParam.js.selectRow', 'evsParam.js.deleteError',
  'evsParam.js.defaultSelect',
  'common.select', 'common.search', 'common.stt', 'common.noData', 'common.totalRows', 'common.selectAll',
];

interface EvsItemPanelRowState extends EvsItemPanelRow {
  rowId: string;
  isNew: boolean;
  editing: boolean;
  modified: boolean;
}

/** Options combo "Tên chỉ tiêu" ở tab Hạng mục chỉ tiêu chỉ định - tải riêng, KHÔNG lọc theo groupNo
 *  (khác với danh sách đang hiển thị ở tab Chỉ tiêu đánh giá vốn có thể đang lọc) - đúng veitpLoadItemOptions
 *  ở bản gốc (gọi API riêng không kèm groupNo). */
interface ItemOption {
  itemCode: string;
  itemName: string;
  groupNo: string;
  groupName: string;
  remark: string;
}

/** State riêng cho từng tab - tách khỏi component để tránh lặp lại 2 bộ signal riêng biệt, tham khảo
 *  EvsParamTabState ở EvsParamPanelComponent (trang chị em cùng module). */
class EvsItemTabState {
  readonly rows = signal<EvsItemPanelRowState[]>([]);
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
        (r.groupName || r.groupNo || '').toLowerCase().includes(kw) ||
        (r.itemCode || r.itemCodeItem || '').toLowerCase().includes(kw) ||
        (r.itemName || '').toLowerCase().includes(kw) ||
        (r.remark || r.itemRemark || '').toLowerCase().includes(kw),
    );
  });
}

/**
 * Bản Angular của evs/manage/viewEvsItemPanel.html (Thymeleaf + jQuery, bảng tự vẽ tay không dùng
 * DataTables) - Chỉ tiêu đánh giá (EVS_ITEM) và Hạng mục chỉ tiêu chỉ định (EVS_ITEM_PARAM, tham chiếu
 * EVS_ITEM qua ITEM_CODE). Gọi lại nguyên API JSON đã có sẵn ở EvsManageController (xem
 * EvsItemPanelService) - không đổi backend. Kiến trúc lặp lại đúng pattern EvsParamPanelComponent (trang
 * chị em cùng module): 2 tab đổi từ Bootstrap nav-tabs sang nz-tabs/nz-tab, mỗi tab dùng nz-table phân
 * trang client-side, sửa dòng kiểu click-to-edit inline, nút Lưu gom toàn bộ dòng isNew/modified trong
 * tab đó gửi 1 lần lên POST .../save (batch) rồi tải lại tab.
 *
 * Hoàn thiện 2 ô lọc "Nhóm đánh giá"/"Nhóm chức vụ" trong thanh tìm kiếm: ở bản gốc đây là 2 nút bấm mở
 * "popup tìm kiếm" nhưng popup đó chưa từng được cài đặt (chỉ alert "chưa được triển khai", input ẩn
 * đằng sau không có cách nào set giá trị - lọc theo evsGroup/evsOccGroup ở tab Hạng mục chỉ tiêu chỉ định
 * vì vậy không thể dùng được dù BE đã hỗ trợ sẵn tham số này). Dữ liệu combo (EVS_PARAM paramType=GROUP/
 * FAMILY) vốn đã phải tải sẵn cho ô sửa dòng của tab 2 nên đổi 2 ô này thành nz-select dùng lại đúng
 * combo đó - hoàn thiện tính năng lọc đã có sẵn ở BE thay vì để nút chết.
 *
 * Ở tab "Hạng mục chỉ tiêu chỉ định", 3 cột Mã chỉ tiêu/Nhóm chỉ tiêu/Giải thích là dữ liệu join từ
 * EVS_ITEM theo ITEM_CODE đang chọn (chỉ đọc, không lưu trực tiếp - xem EvsItemParamMapper.xml). Bản gốc
 * không cập nhật lại 3 cột này khi đổi lựa chọn "Tên chỉ tiêu" trong dòng đang sửa (chỉ đúng lại sau khi
 * Lưu + tải lại) - bản Angular cập nhật ngay khi chọn (onItemCodeChange tra cứu lại từ itemOptions đã
 * tải) cho nhất quán, tham khảo cách đồng bộ *Name cục bộ đã dùng ở EvsSchedulePanelComponent.
 */
@Component({
  selector: 'app-evs-item-panel',
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
  templateUrl: './evs-item-panel.component.html',
  styleUrl: './evs-item-panel.component.css',
})
export class EvsItemPanelComponent implements OnInit {
  private evsType = '';
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  resumeSeq: string | null = null;

  readonly groupNoCodeOptions = signal<CodeItem[]>([]);
  readonly evsGroupOptions = signal<CodeItem[]>([]);
  readonly evsOccGroupOptions = signal<CodeItem[]>([]);
  readonly itemOptions = signal<ItemOption[]>([]);

  searchGroupNo: string | null = null;
  searchEvsGroup: string | null = null;
  searchEvsOccGroup: string | null = null;

  /** Combo "Nhóm chỉ tiêu" trong thanh tìm kiếm - tính từ chính dữ liệu tab "item" đang tải (đúng
   *  veitpUpdateCriteriaGroupDropdown ở bản gốc, không phải danh sách mã hệ thống đầy đủ). */
  readonly criteriaGroupOptions = computed(() => {
    const seen = new Map<string, string>();
    this.item.rows().forEach((r) => {
      if (r.groupNo && !seen.has(r.groupNo)) seen.set(r.groupNo, r.groupName || r.groupNo);
    });
    return Array.from(seen.entries()).map(([codeNo, codeName]) => ({ codeNo, codeName }));
  });

  readonly item = new EvsItemTabState();
  readonly param = new EvsItemTabState();

  private readonly tabStates: Record<TabKey, EvsItemTabState> = { item: this.item, param: this.param };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private pendingDeleteTab: TabKey | null = null;
  private pendingDeleteRowIds: string[] = [];

  private rowIdCounter = 0;

  constructor(
    private readonly api: EvsItemPanelService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(GROUP_NO_PARENT_CODE).subscribe({ next: (list) => this.groupNoCodeOptions.set(list ?? []), error: () => this.groupNoCodeOptions.set([]) });
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
    this.loadEvsGroupOptions(resumeSeq);
    this.loadTab('item');
    this.loadTab('param');
  }

  tabState(tab: TabKey): EvsItemTabState {
    return this.tabStates[tab];
  }

  private loadEvsGroupOptions(resumeSeq: string): void {
    this.api.getEvsParamOptions(resumeSeq, 'GROUP').subscribe({ next: (list) => this.evsGroupOptions.set(list ?? []), error: () => this.evsGroupOptions.set([]) });
    this.api.getEvsParamOptions(resumeSeq, 'FAMILY').subscribe({ next: (list) => this.evsOccGroupOptions.set(list ?? []), error: () => this.evsOccGroupOptions.set([]) });
  }

  private loadItemOptions(resumeSeq: string): void {
    this.api.getList(TAB_META.item.api, resumeSeq, '', '', '').subscribe({
      next: (rows) =>
        this.itemOptions.set(
          (rows ?? []).map((r) => ({
            itemCode: r.itemCode || '', itemName: r.itemName || '', groupNo: r.groupNo || '',
            groupName: r.groupName || '', remark: r.remark || '',
          })),
        ),
      error: () => this.itemOptions.set([]),
    });
  }

  private loadTab(tab: TabKey): void {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq) return;
    const state = this.tabState(tab);
    const meta = TAB_META[tab];
    const evsGroup = tab === 'param' ? this.searchEvsGroup ?? '' : '';
    const evsOccGroup = tab === 'param' ? this.searchEvsOccGroup ?? '' : '';
    state.loading.set(true);
    this.api.getList(meta.api, resumeSeq, this.searchGroupNo ?? '', evsGroup, evsOccGroup).subscribe({
      next: (rows) => {
        state.rows.set((rows ?? []).map((r) => this.toRow(r, false)));
        state.filterText.set('');
        state.checked.set(new Set());
        state.loading.set(false);
        if (tab === 'item') this.loadItemOptions(resumeSeq);
      },
      error: () => {
        state.rows.set([]);
        state.loading.set(false);
      },
    });
  }

  private toRow(dto: EvsItemPanelRow, isNew: boolean): EvsItemPanelRowState {
    return { ...dto, rowId: dto.seq || this.newRowId(), isNew, editing: isNew, modified: isNew };
  }

  private newRowId(): string {
    return 'NEW_' + ++this.rowIdCounter;
  }

  groupCodeLabel(code: string | null | undefined): string {
    const opt = this.groupNoCodeOptions().find((o) => o.codeNo === code);
    return opt ? opt.codeName : '';
  }

  onGroupNoChange(row: EvsItemPanelRowState, code: string | null): void {
    row.groupNo = code;
    row.groupName = this.groupCodeLabel(code);
  }

  private labelOf(options: CodeItem[], code: string | null | undefined): string {
    const opt = options.find((o) => o.codeNo === code);
    return opt ? opt.codeName : '';
  }

  onEvsGroupChange(row: EvsItemPanelRowState, code: string | null): void {
    row.evsGroup = code;
    row.evsGroupName = this.labelOf(this.evsGroupOptions(), code);
  }

  onEvsOccGroupChange(row: EvsItemPanelRowState, code: string | null): void {
    row.evsOccGroup = code;
    row.evsOccGroupName = this.labelOf(this.evsOccGroupOptions(), code);
  }

  onItemCodeChange(row: EvsItemPanelRowState, code: string | null): void {
    row.itemCode = code;
    const opt = this.itemOptions().find((o) => o.itemCode === code);
    row.itemCodeItem = opt ? opt.itemCode : '';
    row.itemName = opt ? opt.itemName : '';
    row.groupName = opt ? opt.groupName : '';
    row.itemRemark = opt ? opt.remark : '';
  }

  // ==================== Lọc nhanh ====================

  onFilterChange(tab: TabKey, value: string): void {
    this.tabState(tab).filterText.set(value);
  }

  // ==================== Click dòng để sửa inline ====================

  rowClick(tab: TabKey, row: EvsItemPanelRowState): void {
    if (row.editing) return;
    const state = this.tabState(tab);
    state.rows().forEach((r) => {
      if (r.editing) this.commitEdit(r);
    });
    row.editing = true;
  }

  private commitEdit(row: EvsItemPanelRowState): void {
    row.editing = false;
    row.modified = true;
  }

  // ==================== Thêm dòng ====================

  private emptyRowFields(tab: TabKey): Partial<EvsItemPanelRow> {
    if (tab === 'item') {
      return { groupNo: '', groupName: '', itemCode: '', itemName: '', itemNameKo: '', remark: '', remarkKo: '' };
    }
    return {
      itemCode: '', itemCodeItem: '', itemName: '', itemRemark: '', groupName: '',
      evsGroup: '', evsGroupName: '', evsOccGroup: '', evsOccGroupName: '', itemScore: '',
    };
  }

  addRow(tab: TabKey): void {
    const state = this.tabState(tab);
    state.rows().forEach((r) => {
      if (r.editing) this.commitEdit(r);
    });
    const newRow: EvsItemPanelRowState = {
      seq: '', resumeSeq: this.resumeSeq, rowId: this.newRowId(), isNew: true, editing: true, modified: true,
      groupNo: null, groupName: null, itemCode: null, itemCodeItem: null, itemName: null, itemNameKo: null,
      itemRemark: null, remark: null, remarkKo: null, evsGroup: null, evsGroupName: null, evsOccGroup: null,
      evsOccGroupName: null, itemScore: null, activity: null, orderNo: null, updateDate: null, updatedBy: null,
      ...this.emptyRowFields(tab),
    };
    state.rows.update((rows) => [...rows, newRow]);
  }

  // ==================== Lưu ====================

  private buildPayload(tab: TabKey, r: EvsItemPanelRowState): Record<string, unknown> {
    const base = { seq: r.isNew ? null : r.seq, resumeSeq: this.resumeSeq };
    if (tab === 'item') {
      return {
        ...base, groupNo: r.groupNo || '', itemCode: r.itemCode || '', itemName: r.itemName || '',
        itemNameKo: r.itemNameKo || '', remark: r.remark || '', remarkKo: r.remarkKo || '',
      };
    }
    return {
      ...base, itemCode: r.itemCode || '', evsGroup: r.evsGroup || '',
      evsOccGroup: r.evsOccGroup || '', itemScore: r.itemScore || '',
    };
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
        this.loadTab(tab);
      },
      error: () => {
        state.saving.set(false);
        this.message.error(this.i18n.t('evsParam.js.saveError', 'Lỗi khi lưu dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Chọn nhiều dòng (checkbox) - phạm vi trang hiện tại ====================

  isChecked(tab: TabKey, row: EvsItemPanelRowState): boolean {
    return this.tabState(tab).checked().has(row.rowId);
  }

  toggleChecked(tab: TabKey, row: EvsItemPanelRowState, checked: boolean): void {
    const state = this.tabState(tab);
    const next = new Set(state.checked());
    if (checked) next.add(row.rowId);
    else next.delete(row.rowId);
    state.checked.set(next);
  }

  allCheckedOnPage(tab: TabKey, pageRows: readonly EvsItemPanelRowState[]): boolean {
    return pageRows.length > 0 && pageRows.every((r) => this.isChecked(tab, r));
  }

  someCheckedOnPage(tab: TabKey, pageRows: readonly EvsItemPanelRowState[]): boolean {
    return pageRows.some((r) => this.isChecked(tab, r)) && !this.allCheckedOnPage(tab, pageRows);
  }

  toggleAllOnPage(tab: TabKey, pageRows: readonly EvsItemPanelRowState[], checked: boolean): void {
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
      .filter((r): r is EvsItemPanelRowState => !!r && !r.isNew)
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

  /** BE đã trả sẵn dd/MM/yyyy HH:mm (đúng CLAUDE.md, khác 2 trang chị em dùng yyyy-MM-dd) - chỉ cần bỏ
   *  phần giờ để hiển thị ở bảng, đúng phạm vi veitpFmtDate ở bản gốc. */
  dateOnly(s: string | null): string {
    if (!s) return '';
    return s.substring(0, 10);
  }
}
