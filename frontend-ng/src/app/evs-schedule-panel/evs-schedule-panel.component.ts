import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CodeItem, EvsResumeOption, EvsScheduleDto, EvsScheduleSavePayload } from './evs-schedule-panel.model';
import { EvsSchedulePanelService } from './evs-schedule-panel.service';

/** 3 loại quy trình đánh giá (scheduleType) - đúng bản Thymeleaf gốc (3 tab Công ty/Phòng ban/Cá nhân). */
type ScheduleType = 'CPNY' | 'DEPT' | 'EMP';

/** Giai đoạn thực hiện (parentCodeNo=14015065) - đúng giá trị hardcode data-parent-code ở bản gốc. */
const EVS_STEP_PARENT_CODE = '14015065';

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

/** Các key message.properties dùng trong trang này - toàn bộ key evs.manage.viewEvsSchedulePanel.* và
 *  evs.viewEvsSchedulePanel.* (nhãn 3 tab) đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới -
 *  xem CLAUDE.md mục 3). Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'evs.manage.viewEvsSchedulePanel.search.evaluationName', 'evs.manage.viewEvsSchedulePanel.search.selectOption',
  'evs.manage.viewEvsSchedulePanel.btn.search', 'evs.manage.viewEvsSchedulePanel.btn.addNew',
  'evs.manage.viewEvsSchedulePanel.filter.quickFilter', 'evs.manage.viewEvsSchedulePanel.pagination.perPage',
  'evs.manage.viewEvsSchedulePanel.pagination.records', 'evs.manage.viewEvsSchedulePanel.col.evsStep',
  'evs.manage.viewEvsSchedulePanel.col.startDate', 'evs.manage.viewEvsSchedulePanel.col.endDate',
  'evs.manage.viewEvsSchedulePanel.col.active', 'evs.manage.viewEvsSchedulePanel.col.updatedBy',
  'evs.manage.viewEvsSchedulePanel.col.updateDate', 'evs.manage.viewEvsSchedulePanel.col.deptNo',
  'evs.manage.viewEvsSchedulePanel.col.deptName', 'evs.manage.viewEvsSchedulePanel.col.deptType',
  'evs.manage.viewEvsSchedulePanel.col.postGradeNo', 'evs.manage.viewEvsSchedulePanel.col.postGradeName',
  'evs.manage.viewEvsSchedulePanel.col.personId', 'evs.manage.viewEvsSchedulePanel.modal.deleteTitle',
  'evs.manage.viewEvsSchedulePanel.modal.deletePrefix', 'evs.manage.viewEvsSchedulePanel.modal.deleteSuffix',
  'evs.manage.viewEvsSchedulePanel.msg.selectEvaluationFirst', 'evs.manage.viewEvsSchedulePanel.msg.noDataToSave',
  'evs.manage.viewEvsSchedulePanel.msg.selectEvsStep', 'evs.manage.viewEvsSchedulePanel.msg.saveError',
  'evs.manage.viewEvsSchedulePanel.msg.selectRowToDelete', 'evs.manage.viewEvsSchedulePanel.msg.deleteError',
  'evs.viewEvsSchedulePanel.GONGSIRICHENG.a', 'evs.viewEvsSchedulePanel.BUMENRICHENG.a',
  'evs.viewEvsSchedulePanel.GERENRICHENG.a',
  'alert.message.update_success',
  'common.select', 'common.action', 'common.save', 'common.delete', 'common.cancel', 'common.confirm',
  'common.noData', 'common.totalRows',
];

interface EvsScheduleRow extends EvsScheduleDto {
  rowId: string;
  isNew: boolean;
  editing: boolean;
  modified: boolean;
  startDateObj: Date | null;
  endDateObj: Date | null;
}

/** State riêng cho từng tab (CPNY/DEPT/EMP) - tách khỏi component để tránh lặp lại 3 bộ signal riêng
 *  biệt cho từng loại (rows/filter/checked/loading/saving đều theo tab). */
class ScheduleTabState {
  readonly rows = signal<EvsScheduleRow[]>([]);
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
        (r.evsStepName || r.evsStep || '').toLowerCase().includes(kw) ||
        (r.deptName || '').toLowerCase().includes(kw) ||
        (r.deptNo || '').toLowerCase().includes(kw) ||
        (r.personId || '').toLowerCase().includes(kw),
    );
  });
}

/**
 * Bản Angular của evs/manage/viewEvsSchedulePanel.html (Thymeleaf + jQuery, bảng tự vẽ tay không dùng
 * DataTables) - Quy trình đánh giá theo 3 cấp: Công ty/Phòng ban/Cá nhân (bảng EVS_SCHEDULE, phân biệt
 * bởi SCHEDULE_TYPE). Gọi lại nguyên API JSON đã có sẵn ở EvsManageController (xem
 * EvsSchedulePanelService) - không đổi backend.
 *
 * 3 tab đổi từ Bootstrap nav-tabs sang nz-tabs/nz-tab; mỗi tab dùng nz-table phân trang client-side
 * (BE trả toàn bộ danh sách theo resumeSeq+scheduleType, không phân trang server - tham khảo
 * ViewArItemComponent) thay cho vòng lặp render tay + phân trang thủ công ở bản gốc; STT hiển thị theo
 * từng trang (i+1, đúng quy ước ViewArItemComponent) thay vì đánh số liên tục qua các trang như bản gốc.
 *
 * Sửa dòng theo kiểu click-to-edit inline (tham khảo RegPersonalTargetComponent: row.editing mutate trực
 * tiếp trên object trong mảng, không cần signal.set() để re-render) - click 1 dòng để mở sửa, tự động
 * "commit" (ghi nhận thay đổi, đánh dấu modified=true) dòng đang sửa dở khi click sang dòng khác hoặc
 * bấm Thêm mới/Lưu, đúng hành vi vespClickRow/vespCommitCurrentEditing ở bản gốc (không có nút "Hủy sửa"
 * riêng từng dòng vì bản gốc cũng không có). Nút "Lưu" gom toàn bộ dòng isNew/modified trong tab đó gửi
 * 1 lần lên POST .../schedule/save (batch), rồi tải lại tab để lấy đúng dữ liệu đã lưu (kể cả NAME do BE
 * tự tính lại ở UPDATE - xem EvsScheduleMapper.xml).
 *
 * Combo "Giai đoạn thực hiện" (evsStep) dùng chung 1 danh sách cho cả 3 tab, load 1 lần qua GET
 * /sys/api/getCode/list?parentCodeNo=14015065 (không cascading như evs-resume-list). Do cột NAME ở BE
 * lưu tên hiển thị của evsStep (không phải tên dòng) - xem UPDATE ...NAME=DECODE(SCHEDULE_TYPE,'CPNY',
 * cpnyId, name) trong EvsScheduleMapper.xml, và bản gốc gán r.name = r.evsStepName trước khi lưu - nên
 * payload gửi lên vẫn set name = evsStepName/evsStep đúng hành vi cũ dù có vẻ không trực quan.
 *
 * startDate/endDate lưu dạng chuỗi YYYY-MM-DD ở BE (TO_DATE/TO_CHAR 'YYYY-MM-DD' trong mapper, khác
 * định dạng DD/MM/YYYY của EvsResumeMapper) nên dùng nz-date-picker hiển thị dd/MM/yyyy rồi convert 2
 * chiều thủ công qua parseYmd/formatYmd; cột hiển thị (startDate/endDate/updateDate ở chế độ xem) format
 * lại dd/MM/yyyy theo CLAUDE.md thay vì hiển thị nguyên chuỗi ISO như bản gốc.
 *
 * Chọn nhiều dòng để xóa hàng loạt: checkbox "chọn tất cả" chỉ áp dụng cho các dòng đang hiển thị ở
 * trang hiện tại (đúng phạm vi vespToggleAll ở bản gốc, vốn chỉ select DOM checkbox đang render).
 */
@Component({
  selector: 'app-evs-schedule-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzTabsModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzCheckboxModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './evs-schedule-panel.component.html',
  styleUrl: './evs-schedule-panel.component.css',
})
export class EvsSchedulePanelComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  private evsType = '';
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  resumeSeq: string | null = null;

  readonly evsStepOptions = signal<CodeItem[]>([]);

  readonly cpny = new ScheduleTabState();
  readonly dept = new ScheduleTabState();
  readonly emp = new ScheduleTabState();

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private pendingDeleteType: ScheduleType | null = null;
  private pendingDeleteRowIds: string[] = [];

  private rowIdCounter = 0;

  constructor(
    private readonly api: EvsSchedulePanelService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(EVS_STEP_PARENT_CODE).subscribe({
      next: (list) => this.evsStepOptions.set(list ?? []),
      error: () => this.evsStepOptions.set([]),
    });
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
    if (!this.resumeSeq) return;
    this.loadTab('CPNY');
    this.loadTab('DEPT');
    this.loadTab('EMP');
  }

  tabState(type: ScheduleType): ScheduleTabState {
    return type === 'CPNY' ? this.cpny : type === 'DEPT' ? this.dept : this.emp;
  }

  private loadTab(type: ScheduleType): void {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq) return;
    const state = this.tabState(type);
    state.loading.set(true);
    this.api.getScheduleList(resumeSeq, type, this.evsType).subscribe({
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

  private toRow(dto: EvsScheduleDto, isNew: boolean): EvsScheduleRow {
    return {
      ...dto,
      rowId: dto.seq || this.newRowId(),
      isNew,
      editing: isNew,
      modified: isNew,
      startDateObj: this.parseYmd(dto.startDate),
      endDateObj: this.parseYmd(dto.endDate),
    };
  }

  private newRowId(): string {
    return 'NEW_' + ++this.rowIdCounter;
  }

  evsStepLabel(row: EvsScheduleRow): string {
    return row.evsStepName || row.evsStep || '';
  }

  onEvsStepChange(row: EvsScheduleRow, code: string | null): void {
    const opt = this.evsStepOptions().find((o) => o.codeNo === code);
    row.evsStepName = opt ? opt.codeName : '';
  }

  isActive(row: EvsScheduleRow): boolean {
    return row.activity === '1' || row.activity === 'Y';
  }

  setActive(row: EvsScheduleRow, checked: boolean): void {
    row.activity = checked ? '1' : '0';
  }

  // ==================== Lọc nhanh ====================

  onFilterChange(type: ScheduleType, value: string): void {
    this.tabState(type).filterText.set(value);
  }

  // ==================== Click dòng để sửa inline ====================

  rowClick(type: ScheduleType, row: EvsScheduleRow): void {
    if (row.editing) return;
    const state = this.tabState(type);
    state.rows().forEach((r) => {
      if (r.editing) this.commitEdit(r);
    });
    row.editing = true;
  }

  private commitEdit(row: EvsScheduleRow): void {
    row.startDate = this.formatYmd(row.startDateObj);
    row.endDate = this.formatYmd(row.endDateObj);
    row.editing = false;
    row.modified = true;
  }

  // ==================== Thêm dòng ====================

  addRow(type: ScheduleType): void {
    const state = this.tabState(type);
    state.rows().forEach((r) => {
      if (r.editing) this.commitEdit(r);
    });
    const newRow = this.toRow(
      {
        seq: '', resumeSeq: this.resumeSeq, scheduleType: type, no: '', name: '',
        deptNo: '', deptName: '', postGradeNo: '', postGradeName: '', evsObject: '',
        evsStep: '', evsStepName: '', activity: '1', deptType: '', orderNo: '',
        personId: '', startDate: '', endDate: '',
        createDate: null, createdBy: null, updateDate: null, updatedBy: null,
      },
      true,
    );
    state.rows.update((rows) => [...rows, newRow]);
  }

  // ==================== Lưu ====================

  saveTab(type: ScheduleType): void {
    const state = this.tabState(type);
    state.rows().forEach((r) => {
      if (r.editing) this.commitEdit(r);
    });
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evs.manage.viewEvsSchedulePanel.msg.selectEvaluationFirst', 'Vui lòng chọn Tên đánh giá trước khi lưu.'));
      return;
    }
    const toSave = state.rows().filter((r) => r.isNew || r.modified);
    if (!toSave.length) {
      this.message.warning(this.i18n.t('evs.manage.viewEvsSchedulePanel.msg.noDataToSave', 'Không có dữ liệu nào thay đổi để lưu.'));
      return;
    }
    if (toSave.some((r) => !r.evsStep || !r.evsStep.trim())) {
      this.message.warning(this.i18n.t('evs.manage.viewEvsSchedulePanel.msg.selectEvsStep', 'Vui lòng chọn Giai đoạn thực hiện cho tất cả các dòng.'));
      return;
    }

    const resumeSeq = this.resumeSeq;
    const payload: EvsScheduleSavePayload[] = toSave.map((r) => ({
      seq: r.isNew ? null : r.seq,
      resumeSeq,
      scheduleType: type,
      no: r.no || '',
      name: r.evsStepName || r.evsStep || '',
      deptNo: r.deptNo || '',
      deptName: r.deptName || '',
      postGradeNo: r.postGradeNo || '',
      postGradeName: r.postGradeName || '',
      evsObject: r.evsObject || '',
      evsStep: r.evsStep || '',
      activity: r.activity || '1',
      deptType: r.deptType || '',
      orderNo: r.orderNo || '',
      personId: r.personId || '',
      startDate: r.startDate || '',
      endDate: r.endDate || '',
      evsType: this.evsType,
    }));

    state.saving.set(true);
    this.api.saveBatch(payload).subscribe({
      next: () => {
        state.saving.set(false);
        this.message.success(this.i18n.t('alert.message.update_success', 'Sửa thành công!'));
        this.loadTab(type);
      },
      error: () => {
        state.saving.set(false);
        this.message.error(this.i18n.t('evs.manage.viewEvsSchedulePanel.msg.saveError', 'Lỗi khi lưu dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Chọn nhiều dòng (checkbox) - phạm vi trang hiện tại ====================

  isChecked(type: ScheduleType, row: EvsScheduleRow): boolean {
    return this.tabState(type).checked().has(row.rowId);
  }

  toggleChecked(type: ScheduleType, row: EvsScheduleRow, checked: boolean): void {
    const state = this.tabState(type);
    const next = new Set(state.checked());
    if (checked) next.add(row.rowId);
    else next.delete(row.rowId);
    state.checked.set(next);
  }

  allCheckedOnPage(type: ScheduleType, pageRows: readonly EvsScheduleRow[]): boolean {
    return pageRows.length > 0 && pageRows.every((r) => this.isChecked(type, r));
  }

  someCheckedOnPage(type: ScheduleType, pageRows: readonly EvsScheduleRow[]): boolean {
    return pageRows.some((r) => this.isChecked(type, r)) && !this.allCheckedOnPage(type, pageRows);
  }

  toggleAllOnPage(type: ScheduleType, pageRows: readonly EvsScheduleRow[], checked: boolean): void {
    const state = this.tabState(type);
    const next = new Set(state.checked());
    pageRows.forEach((r) => (checked ? next.add(r.rowId) : next.delete(r.rowId)));
    state.checked.set(next);
  }

  // ==================== Xóa ====================

  openDeleteConfirm(type: ScheduleType): void {
    const ids = Array.from(this.tabState(type).checked());
    if (!ids.length) {
      this.message.warning(this.i18n.t('evs.manage.viewEvsSchedulePanel.msg.selectRowToDelete', 'Vui lòng chọn ít nhất một dòng để xóa.'));
      return;
    }
    this.pendingDeleteType = type;
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
    const type = this.pendingDeleteType;
    if (!type) return;
    const state = this.tabState(type);
    const ids = this.pendingDeleteRowIds;

    const existingSeqs = ids
      .map((id) => state.rows().find((r) => r.rowId === id))
      .filter((r): r is EvsScheduleRow => !!r && !r.isNew)
      .map((r) => r.seq);

    state.rows.update((rows) => rows.filter((r) => !ids.includes(r.rowId)));
    const nextChecked = new Set(state.checked());
    ids.forEach((id) => nextChecked.delete(id));
    state.checked.set(nextChecked);
    this.deleteVisible.set(false);

    if (!existingSeqs.length) return;
    this.deleting.set(true);
    this.api.deleteBatch(existingSeqs).subscribe({
      next: () => this.deleting.set(false),
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('evs.manage.viewEvsSchedulePanel.msg.deleteError', 'Lỗi khi xóa dữ liệu. Vui lòng thử lại.'));
        this.loadTab(type);
      },
    });
  }

  // ==================== Helpers ngày tháng ====================

  private parseYmd(s: string | null): Date | null {
    if (!s) return null;
    const [y, m, d] = s.substring(0, 10).split('-');
    if (!y || !m || !d) return null;
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return isNaN(date.getTime()) ? null : date;
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }

  /** Hiển thị dd/MM/yyyy cho startDate/endDate/updateDate (theo CLAUDE.md) - chỉ lấy phần ngày, bỏ giờ
   *  nếu có (đúng phạm vi hiển thị vespFmtDate ở bản gốc). */
  toDmy(s: string | null): string {
    if (!s) return '';
    const [y, m, d] = s.substring(0, 10).split('-');
    return y && m && d ? `${d}/${m}/${y}` : s;
  }
}
