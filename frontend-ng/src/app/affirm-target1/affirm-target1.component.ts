import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  EvsAffirmTarget1DetailInfo,
  EvsAffirmTarget1Row,
  EvsGradeInfo,
  EvsResumeOption,
} from './affirm-target1.model';
import { AffirmTarget1Service } from './affirm-target1.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key evs.viewAffirmTarget1.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới). */
const I18N_KEYS = [
  'evs.viewAffirmTarget1.evalName', 'evs.viewAffirmTarget1.btnSearch', 'evs.viewAffirmTarget1.btnSaveDraft',
  'evs.viewAffirmTarget1.btnExecute', 'evs.viewAffirmTarget1.gradeDistribution', 'evs.viewAffirmTarget1.stdRate',
  'evs.viewAffirmTarget1.currentEmp', 'evs.viewAffirmTarget1.totalEmp', 'evs.viewAffirmTarget1.gradeLevel',
  'evs.viewAffirmTarget1.quickFilter', 'evs.viewAffirmTarget1.col.total', 'evs.viewAffirmTarget1.col.notEntered',
  'evs.viewAffirmTarget1.col.numPeople', 'evs.viewAffirmTarget1.col.rate', 'evs.viewAffirmTarget1.col.maxScore',
  'evs.viewAffirmTarget1.col.minScore', 'evs.viewAffirmTarget1.col.no', 'evs.viewAffirmTarget1.col.fullName',
  'evs.viewAffirmTarget1.col.empid', 'evs.viewAffirmTarget1.col.dept', 'evs.viewAffirmTarget1.col.position',
  'evs.viewAffirmTarget1.col.objectType', 'evs.viewAffirmTarget1.col.hireDate', 'evs.viewAffirmTarget1.col.self',
  'evs.viewAffirmTarget1.col.affirm1', 'evs.viewAffirmTarget1.col.score', 'evs.viewAffirmTarget1.col.grade',
  'evs.viewAffirmTarget1.col.opinion', 'evs.viewAffirmTarget1.col.status', 'evs.viewAffirmTarget1.btnClose',
  'evs.viewAffirmTarget1.msg.selectEvalFirst', 'evs.viewAffirmTarget1.msg.confirmSave',
  'evs.viewAffirmTarget1.msg.saveSuccess', 'evs.viewAffirmTarget1.msg.actionFail',
  'evs.viewAffirmTarget1.msg.confirmExecute', 'evs.viewAffirmTarget1.msg.executeSuccess',
  'evs.viewAffirmTarget1.modal.personalInfo', 'evs.viewAffirmTarget1.modal.basicInfo',
  'evs.viewAffirmTarget1.modal.evalCategory', 'evs.viewAffirmTarget1.modal.fullName',
  'evs.viewAffirmTarget1.modal.position', 'evs.viewAffirmTarget1.modal.dept', 'evs.viewAffirmTarget1.modal.hireDate',
  'evs.viewAffirmTarget1.modal.evalYear', 'evs.viewAffirmTarget1.modal.period', 'evs.viewAffirmTarget1.modal.appraiser1',
  'evs.viewAffirmTarget1.modal.appraiser2', 'evs.viewAffirmTarget1.modal.objectiveTitle',
  'evs.viewAffirmTarget1.modal.col.evalItem', 'evs.viewAffirmTarget1.modal.col.target',
  'evs.viewAffirmTarget1.modal.col.targetScore', 'evs.viewAffirmTarget1.modal.col.selfScore',
  'evs.viewAffirmTarget1.modal.col.affirm1Score', 'evs.viewAffirmTarget1.modal.col.totalScore',
  'evs.viewAffirmTarget1.modal.selfOpinion', 'evs.viewAffirmTarget1.modal.affirm1Opinion',
  'evs.viewAffirmTarget1.modal.btnConfirm', 'evs.viewAffirmTarget1.modal.btnReject',
  'evs.viewAffirmTarget1.msg.confirmConfirm', 'evs.viewAffirmTarget1.msg.confirmSuccess',
  'evs.viewAffirmTarget1.msg.confirmReject', 'evs.viewAffirmTarget1.msg.rejectSuccess',
  'evs.viewConfirmTarget1.msg.notInEvalPeriod', 'common.confirm', 'common.cancel', 'common.select', 'common.loadFail',
];

/** Cấp độ đăng ký đánh giá (evsLevel) khi lấy danh sách "Tên đánh giá" - đúng giá trị hardcode ở bản
 *  Thymeleaf gốc (14015070 = Đánh giá lần 1). */
const EVS_LEVEL_AFFIRM1 = '14015070';

/** ACTIVITY duy nhất cho phép nhập điểm đánh giá lần 1 - đúng giá trị hardcode ở bản Thymeleaf gốc. */
const EDITABLE_ACTIVITY = '14015357';

const GRADE_NAMES = ['EX', 'VG', 'GD', 'NI', 'UN'] as const;

const PAGE_SIZE_OPTIONS = [50, 100, 200];

interface RowVm {
  seq: string;
  localName: string;
  empid: string;
  deptname: string;
  postGradeName: string;
  objectTypeName: string;
  dateStarted: string;
  activity: string;
  activityName: string;
  evsPoint0: string;
  evsGrade0: string;
  canInput: boolean;
  evsPoint1: string;
  gradeCode: string;
  gradeName: string;
  searchText: string;
}

interface DetailItemVm {
  seq: string;
  itemName: string;
  itemContent: string;
  itemScore: number;
  evsScore: string;
  evsScore1: string;
}

/**
 * Bản Angular của evs/manage/viewAffirmTarget1.html (Thymeleaf + jQuery) - Đánh giá lần 1. Gọi lại
 * nguyên API JSON đã có sẵn ở EvsManageController (xem AffirmTarget1Service) - không đổi backend.
 * Danh sách nhân viên dùng nz-table phân trang server-side (giống ConfirmTarget1Component), có thêm
 * lọc nhanh client-side trên trang hiện tại (đúng vat1ApplyQuickFilter bản gốc - chỉ ẩn/hiện dòng,
 * KHÔNG gọi lại API, không ảnh hưởng số liệu phân trang).
 *
 * 2 điểm cố ý KHÔNG giữ nguyên hành vi bản gốc vì đó là lỗi/race-condition trong code jQuery, không
 * phải nghiệp vụ cố ý:
 * 1. Bản gốc gọi song song loadStandardRate/loadGradeList/loadObjectList trong vat1Search() - nếu
 *    objectList trả về trước gradeList thì cấp ĐG tính từ điểm số ban đầu bị bỏ trống (dùng gradeMap
 *    rỗng) và không bao giờ tính lại. Ở đây sắp xếp lại trình tự: tải gradeList xong mới tải
 *    objectList (rồi mới standardRate/gradeSummary - phụ thuộc recordsTotal từ objectList) để luôn có
 *    dữ liệu đúng.
 * 2. Nút "Lưu tạm thời" ở bản gốc bị ẩn vĩnh viễn (one-way hide, không có nhánh show lại) nếu 1 trang
 *    nào đó không có dòng ACTIVITY=EDITABLE_ACTIVITY - kể cả khi chuyển sang trang khác có dòng biên
 *    tập được. Ở đây tính lại bằng computed() từ rows() hiện tại mỗi lần đổi trang nên nút luôn phản
 *    ánh đúng trạng thái trang đang xem (không bị "kẹt ẩn").
 *
 * Bug KHÁC được giữ nguyên (không sửa vì đây có thể là chủ đích nghiệp vụ chưa rõ): nút "Lưu tạm thời"/
 * "Thực hiện" ở toolbar trên cùng luôn gửi affirmContent rỗng cho từng dòng - bản gốc đọc từ thuộc tính
 * data-content của nút "Ý kiến" nhưng nút đó không hề set data-content khi render, nên selector luôn
 * không khớp. Giữ nguyên hành vi (không tự thêm data-content) vì sửa lại là thay đổi nghiệp vụ ngoài
 * phạm vi chuyển giao diện.
 */
@Component({
  selector: 'app-affirm-target1',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzDescriptionsModule,
    TranslatePipe,
  ],
  templateUrl: './affirm-target1.component.html',
  styleUrl: './affirm-target1.component.css',
})
export class AffirmTarget1Component implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly gradeNames = GRADE_NAMES;

  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  readonly noticeVisible = signal(false);

  readonly gradeList = signal<EvsGradeInfo[]>([]);
  readonly distributionVisible = signal(false);
  readonly stdRate = signal<Record<string, unknown>>({});
  readonly gradeSummary = signal<Record<string, unknown>[]>([]);

  readonly pageRows = signal<RowVm[]>([]);
  readonly loading = signal(false);
  readonly recordsTotal = signal(0);
  pageIndex = 1;
  pageSize = 50;

  readonly filterText = signal('');
  readonly filteredRows = computed(() => {
    const kw = this.filterText().trim().toLowerCase();
    return kw ? this.pageRows().filter((r) => r.searchText.includes(kw)) : this.pageRows();
  });

  /** Chỉ tính từ pageRows() (KHÔNG theo lọc nhanh) - đúng vat1CheckExecuteButton bản gốc dùng
   *  selector jQuery quét toàn bộ tbody bất kể dòng đang ẩn/hiện. */
  readonly editableRows = computed(() => this.pageRows().filter((r) => r.canInput));
  readonly showActionButtons = computed(() => this.editableRows().length > 0);
  readonly showExecuteButton = computed(
    () => this.showActionButtons() && this.editableRows().every((r) => r.evsPoint1 !== '' && !!r.gradeCode),
  );

  readonly stdTotal = computed(() => this.recordsTotal());
  readonly stdRows = computed(() => {
    const std = this.stdRate();
    const total = this.recordsTotal();
    return GRADE_NAMES.map((gn) => {
      const pct = Number(std[`${gn}_PCT`]) || 0;
      const cnt = total > 0 ? Math.round((total * pct) / 100) : 0;
      return { name: gn, cnt, pct };
    });
  });
  readonly curNotEntered = signal(0);
  readonly curRows = computed(() => {
    const summary = this.gradeSummary();
    const total = this.recordsTotal();
    const summaryMap = new Map<string, number>();
    summary.forEach((s) => {
      const gn = String(s['EVS_GRADE_NAME'] ?? s['evs_grade_name'] ?? '');
      const cnt = Number(s['CNT'] ?? s['cnt'] ?? 0) || 0;
      summaryMap.set(gn, cnt);
    });
    return GRADE_NAMES.map((gn) => {
      const cnt = summaryMap.get(gn) ?? 0;
      const pct = total > 0 ? Math.round((cnt / total) * 1000) / 10 : 0;
      return { name: gn, cnt, pct };
    });
  });
  readonly gradeRangeRows = computed(() => {
    const map = new Map(this.gradeList().map((g) => [g.evsGradeName, g]));
    return GRADE_NAMES.map((gn) => ({ name: gn, max: map.get(gn)?.endScore || '-', min: map.get(gn)?.startScore || '-' }));
  });

  resumeSeq: string | null = null;
  private evsType = '';
  private gradeMapByCode = new Map<string, EvsGradeInfo>();

  // ==================== Modal chi tiết ====================
  readonly modalVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailInfo = signal<EvsAffirmTarget1DetailInfo | null>(null);
  readonly detailItems = signal<DetailItemVm[]>([]);
  readonly selfTotal = signal<number | null>(null);
  readonly affirm1Total = signal<number | null>(null);
  readonly affirm1ScoreDisplay = signal('0');
  readonly affirm1GradeCode = signal('');
  readonly affirm1GradeName = signal('-');
  readonly selfGradeName = signal('-');
  affirmContent = '';
  private currentDetailSeq: string | null = null;

  constructor(
    private readonly api: AffirmTarget1Service,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get('evsType') ?? '';
      this.loadResumeList();
    });
  }

  onQuickFilterChange(value: string): void {
    this.filterText.set(value);
  }

  private loadResumeList(): void {
    this.api.getResumeList(this.evsType, EVS_LEVEL_AFFIRM1).subscribe({
      next: (rows) => {
        if (!rows || rows.length === 0) {
          this.noticeVisible.set(true);
          this.resumeOptions.set([]);
          return;
        }
        this.noticeVisible.set(false);
        this.resumeOptions.set(rows);
        this.resumeSeq = rows[0].seq;
        this.search();
      },
      error: () => this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  search(): void {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evs.viewAffirmTarget1.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.pageIndex = 1;
    this.filterText.set('');
    this.loadGradeList();
  }

  private loadGradeList(): void {
    if (!this.resumeSeq) return;
    this.api.getGradeList(this.resumeSeq, this.evsType).subscribe({
      next: (grades) => {
        this.gradeList.set(grades ?? []);
        this.gradeMapByCode = new Map((grades ?? []).map((g) => [g.evsGrade, g]));
        this.distributionVisible.set(true);
        this.loadPage();
      },
      error: () => this.loadPage(),
    });
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
    if (!this.resumeSeq) return;
    this.loading.set(true);
    this.api
      .getObjectList({
        resumeSeq: this.resumeSeq,
        evsType: this.evsType,
        draw: this.pageIndex,
        start: (this.pageIndex - 1) * this.pageSize,
        length: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          this.recordsTotal.set(res.recordsTotal ?? 0);
          this.pageRows.set((res.data ?? []).map((r) => this.toRowVm(r)));
          this.loading.set(false);
          this.loadStandardRate();
          this.loadGradeSummary();
        },
        error: () => {
          this.pageRows.set([]);
          this.recordsTotal.set(0);
          this.loading.set(false);
        },
      });
  }

  private loadStandardRate(): void {
    if (!this.resumeSeq) return;
    this.api.getStandardRate(this.resumeSeq).subscribe((raw) => this.stdRate.set(raw ?? {}));
  }

  private loadGradeSummary(): void {
    if (!this.resumeSeq) return;
    this.api.getGradeSummary(this.resumeSeq).subscribe((rows) => this.gradeSummary.set(rows ?? []));
  }

  private toRowVm(r: EvsAffirmTarget1Row): RowVm {
    const canInput = r.activity === EDITABLE_ACTIVITY;
    const evsPoint1 = r.evsPoint1 ?? '';
    const gradeObj = (r.evsGrade1 ? this.gradeMapByCode.get(r.evsGrade1) : null) ?? this.calcGradeFromScore(evsPoint1);
    const searchText = [
      r.localName, r.empid, r.deptname, r.postGradeName, r.objectTypeName, r.dateStarted,
      r.evsPoint0, r.evsGrade0, gradeObj?.evsGradeName, r.activityName,
    ].filter(Boolean).join(' ').toLowerCase();
    return {
      seq: r.seq,
      localName: r.localName,
      empid: r.empid,
      deptname: r.deptname,
      postGradeName: r.postGradeName,
      objectTypeName: r.objectTypeName,
      dateStarted: r.dateStarted,
      activity: r.activity,
      activityName: r.activityName,
      evsPoint0: r.evsPoint0 ?? '',
      evsGrade0: r.evsGrade0 ?? '',
      canInput,
      evsPoint1,
      gradeCode: gradeObj?.evsGrade ?? '',
      gradeName: gradeObj?.evsGradeName ?? '',
      searchText,
    };
  }

  private calcGradeFromScore(score: string | null | undefined): EvsGradeInfo | null {
    if (score === '' || score == null) return null;
    const s = parseFloat(score);
    if (isNaN(s)) return null;
    let found: EvsGradeInfo | null = null;
    for (const g of this.gradeList()) {
      const max = parseFloat(g.endScore);
      const min = parseFloat(g.startScore);
      if (!isNaN(max) && !isNaN(min) && s >= min && s <= max) found = g;
    }
    return found;
  }

  onRowScoreInput(row: RowVm): void {
    const gradeObj = this.calcGradeFromScore(row.evsPoint1);
    row.gradeCode = gradeObj?.evsGrade ?? '';
    row.gradeName = gradeObj?.evsGradeName ?? '';
    // buộc computed đọc lại pageRows() để cập nhật showExecuteButton
    this.pageRows.set([...this.pageRows()]);
  }

  // ==================== Lưu tạm thời / Thực hiện (toàn trang) ====================

  saveDraft(): void {
    if (!this.resumeSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: t('evs.viewAffirmTarget1.msg.confirmSave', 'Bạn có chắc muốn lưu tạm thời?'),
      nzOnOk: () => this.doSaveDraft(),
    });
  }

  private doSaveDraft(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api
      .saveBatch({ resumeSeq: this.resumeSeq!, items: this.buildBatchItems() })
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.message.success(t('evs.viewAffirmTarget1.msg.saveSuccess', 'Lưu tạm thời thành công!'));
            this.loadPage();
          } else {
            this.message.error(res.message || t('evs.viewAffirmTarget1.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.'));
          }
        },
        error: () => this.message.error(t('evs.viewAffirmTarget1.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
      });
  }

  execute(): void {
    if (!this.resumeSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: t('evs.viewAffirmTarget1.msg.confirmExecute', 'Bạn có chắc muốn thực hiện?'),
      nzOnOk: () => this.doExecute(),
    });
  }

  private doExecute(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api
      .execute({ resumeSeq: this.resumeSeq!, items: this.buildBatchItems() })
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.message.success(t('evs.viewAffirmTarget1.msg.executeSuccess', 'Thực hiện thành công!'));
            this.loadPage();
          } else {
            this.message.error(res.message || t('evs.viewAffirmTarget1.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.'));
          }
        },
        error: () => this.message.error(t('evs.viewAffirmTarget1.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
      });
  }

  /** affirmContent luôn rỗng - xem giải thích ở docblock class (bug giữ nguyên từ bản gốc). */
  private buildBatchItems() {
    return this.filteredRows().map((r) => ({ seq: r.seq, evsPoint: r.evsPoint1, evsGrade: r.gradeCode, affirmContent: '' }));
  }

  // ==================== Modal chi tiết ====================

  openDetail(objectSeq: string): void {
    this.currentDetailSeq = objectSeq;
    this.detailInfo.set(null);
    this.detailItems.set([]);
    this.selfTotal.set(null);
    this.affirm1Total.set(null);
    this.affirm1ScoreDisplay.set('0');
    this.affirm1GradeCode.set('');
    this.affirm1GradeName.set('-');
    this.selfGradeName.set('-');
    this.affirmContent = '';
    this.detailLoading.set(true);
    this.modalVisible.set(true);

    this.api.getObjectInfo(objectSeq).subscribe({
      next: (info) => {
        this.detailInfo.set(info);
        const selfGradeObj = info.evsGrade0 ? this.gradeMapByCode.get(info.evsGrade0) : null;
        this.selfGradeName.set(selfGradeObj?.evsGradeName ?? info.evsGrade0 ?? '-');
        this.affirm1ScoreDisplay.set(info.evsPoint1 ?? '0');
        const affirm1GradeObj = info.evsGrade1 ? this.gradeMapByCode.get(info.evsGrade1) : null;
        this.affirm1GradeName.set(affirm1GradeObj?.evsGradeName ?? info.evsGrade1 ?? '');
        this.affirm1GradeCode.set(info.evsGrade1 ?? '');
        this.affirmContent = info.affirmContent1 || '';
        this.loadDetailItems(objectSeq);
      },
      error: () => {
        this.detailLoading.set(false);
      },
    });
  }

  private loadDetailItems(evsObjectSeq: string): void {
    this.api.getItemList(evsObjectSeq).subscribe({
      next: (items) => {
        this.detailItems.set(
          (items ?? []).map((i) => ({
            seq: i.seq,
            itemName: i.itemName,
            itemContent: i.itemContent || '',
            itemScore: Number(i.itemScore) || 0,
            evsScore: i.evsScore ?? '0',
            evsScore1: i.evsScore1 ?? '',
          })),
        );
        this.detailLoading.set(false);
        this.updateDetailTotals();
      },
      error: () => {
        this.detailItems.set([]);
        this.detailLoading.set(false);
      },
    });
  }

  get canInputDetail(): boolean {
    return this.detailInfo()?.activity === EDITABLE_ACTIVITY;
  }

  updateDetailTotals(): void {
    let selfTotal = 0;
    let affirm1Total = 0;
    let hasAffirm1Input = false;
    for (const item of this.detailItems()) {
      selfTotal += ((Number(item.evsScore) || 0) * item.itemScore) / 100;
      const score1 = parseFloat(item.evsScore1);
      if (!isNaN(score1)) {
        hasAffirm1Input = true;
        affirm1Total += (score1 * item.itemScore) / 100;
      }
    }
    selfTotal = Math.round(selfTotal * 100) / 100;
    affirm1Total = Math.round(affirm1Total * 100) / 100;
    this.selfTotal.set(selfTotal > 0 ? selfTotal : null);
    this.affirm1Total.set(hasAffirm1Input ? affirm1Total : null);
    if (hasAffirm1Input) {
      this.affirm1ScoreDisplay.set(String(affirm1Total));
      if (this.canInputDetail) {
        const gradeObj = this.calcGradeFromScore(String(affirm1Total));
        if (gradeObj) {
          this.affirm1GradeName.set(gradeObj.evsGradeName);
          this.affirm1GradeCode.set(gradeObj.evsGrade);
        }
      }
    }
  }

  saveDetail(mode: 'draft' | 'confirm'): void {
    const objectSeq = this.currentDetailSeq;
    if (!objectSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const content = mode === 'confirm'
      ? t('evs.viewAffirmTarget1.msg.confirmConfirm', 'Bạn có chắc muốn xác nhận?')
      : t('evs.viewAffirmTarget1.msg.confirmSave', 'Bạn có chắc muốn lưu tạm thời?');
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: content,
      nzOnOk: () => this.doSaveDetail(objectSeq, mode),
    });
  }

  private doSaveDetail(objectSeq: string, mode: 'draft' | 'confirm'): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const payload = {
      seq: objectSeq,
      evsPoint: this.affirm1ScoreDisplay(),
      evsGrade: this.affirm1GradeCode(),
      affirmContent: this.affirmContent,
      itemScores: this.detailItems().map((i) => ({ seq: i.seq, evsScore1: i.evsScore1 })),
    };
    const call = mode === 'confirm' ? this.api.confirmDetail(payload) : this.api.saveDetail(payload);
    call.subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(
            mode === 'confirm'
              ? t('evs.viewAffirmTarget1.msg.confirmSuccess', 'Xác nhận thành công!')
              : t('evs.viewAffirmTarget1.msg.saveSuccess', 'Lưu tạm thời thành công!'),
          );
          this.closeModal();
          this.loadPage();
        } else {
          this.message.error(res.message || t('evs.viewAffirmTarget1.msg.actionFail', 'Lỗi khi thực hiện.'));
        }
      },
      error: () => this.message.error(t('evs.viewAffirmTarget1.msg.actionFail', 'Lỗi khi thực hiện.')),
    });
  }

  rejectDetail(): void {
    const objectSeq = this.currentDetailSeq;
    if (!objectSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: t('evs.viewAffirmTarget1.msg.confirmReject', 'Bạn có chắc muốn từ chối?'),
      nzOnOk: () => {
        this.api.rejectDetail(objectSeq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(t('evs.viewAffirmTarget1.msg.rejectSuccess', 'Từ chối thành công!'));
              this.closeModal();
              this.loadPage();
            } else {
              this.message.error(res.message || t('evs.viewAffirmTarget1.msg.actionFail', 'Lỗi khi thực hiện.'));
            }
          },
          error: () => this.message.error(t('evs.viewAffirmTarget1.msg.actionFail', 'Lỗi khi thực hiện.')),
        });
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
    this.currentDetailSeq = null;
  }
}
