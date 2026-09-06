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
  EvsAffirmTarget2DetailInfo,
  EvsAffirmTarget2Row,
  EvsGradeInfo,
  EvsResumeOption,
} from './affirm-target2.model';
import { AffirmTarget2Service } from './affirm-target2.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key evs.viewAffirmTarget2.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới). */
const I18N_KEYS = [
  'evs.viewAffirmTarget2.evalName', 'evs.viewAffirmTarget2.btnSearch', 'evs.viewAffirmTarget2.btnSaveDraft',
  'evs.viewAffirmTarget2.btnExecute', 'evs.viewAffirmTarget2.gradeDistribution', 'evs.viewAffirmTarget2.stdRate',
  'evs.viewAffirmTarget2.currentEmp', 'evs.viewAffirmTarget2.totalEmp', 'evs.viewAffirmTarget2.gradeLevel',
  'evs.viewAffirmTarget2.quickFilter', 'evs.viewAffirmTarget2.col.total', 'evs.viewAffirmTarget2.col.notEntered',
  'evs.viewAffirmTarget2.col.numPeople', 'evs.viewAffirmTarget2.col.rate', 'evs.viewAffirmTarget2.col.maxScore',
  'evs.viewAffirmTarget2.col.minScore', 'evs.viewAffirmTarget2.col.no', 'evs.viewAffirmTarget2.col.fullName',
  'evs.viewAffirmTarget2.col.empid', 'evs.viewAffirmTarget2.col.dept', 'evs.viewAffirmTarget2.col.position',
  'evs.viewAffirmTarget2.col.objectType', 'evs.viewAffirmTarget2.col.hireDate', 'evs.viewAffirmTarget2.col.self',
  'evs.viewAffirmTarget2.col.affirm1', 'evs.viewAffirmTarget2.col.affirm2', 'evs.viewAffirmTarget2.col.score',
  'evs.viewAffirmTarget2.col.grade', 'evs.viewAffirmTarget2.col.opinion', 'evs.viewAffirmTarget2.col.status',
  'evs.viewAffirmTarget2.btnClose', 'evs.viewAffirmTarget2.msg.selectEvalFirst', 'evs.viewAffirmTarget2.msg.confirmSave',
  'evs.viewAffirmTarget2.msg.saveSuccess', 'evs.viewAffirmTarget2.msg.actionFail',
  'evs.viewAffirmTarget2.msg.confirmExecute', 'evs.viewAffirmTarget2.msg.executeSuccess',
  'evs.viewAffirmTarget2.modal.personalInfo', 'evs.viewAffirmTarget2.modal.basicInfo',
  'evs.viewAffirmTarget2.modal.evalCategory', 'evs.viewAffirmTarget2.modal.fullName',
  'evs.viewAffirmTarget2.modal.position', 'evs.viewAffirmTarget2.modal.dept', 'evs.viewAffirmTarget2.modal.hireDate',
  'evs.viewAffirmTarget2.modal.evalYear', 'evs.viewAffirmTarget2.modal.period', 'evs.viewAffirmTarget2.modal.appraiser1',
  'evs.viewAffirmTarget2.modal.appraiser2', 'evs.viewAffirmTarget2.modal.objectiveTitle',
  'evs.viewAffirmTarget2.modal.col.evalItem', 'evs.viewAffirmTarget2.modal.col.target',
  'evs.viewAffirmTarget2.modal.col.targetScore', 'evs.viewAffirmTarget2.modal.col.selfScore',
  'evs.viewAffirmTarget2.modal.col.affirm1Score', 'evs.viewAffirmTarget2.modal.col.affirm2Score',
  'evs.viewAffirmTarget2.modal.col.totalScore', 'evs.viewAffirmTarget2.modal.selfOpinion',
  'evs.viewAffirmTarget2.modal.affirm1Opinion', 'evs.viewAffirmTarget2.modal.affirm2Opinion',
  'evs.viewAffirmTarget2.modal.btnConfirm', 'evs.viewAffirmTarget2.modal.btnReject',
  'evs.viewAffirmTarget2.msg.confirmConfirm', 'evs.viewAffirmTarget2.msg.confirmSuccess',
  'evs.viewAffirmTarget2.msg.confirmReject', 'evs.viewAffirmTarget2.msg.rejectSuccess',
  'evs.viewConfirmTarget1.msg.notInEvalPeriod', 'common.confirm', 'common.cancel', 'common.select', 'common.loadFail',
];

/** Cấp độ đăng ký đánh giá (evsLevel) khi lấy danh sách "Tên đánh giá" - đúng giá trị hardcode ở bản
 *  Thymeleaf gốc (14015071 = Đánh giá lần 2). */
const EVS_LEVEL_AFFIRM2 = '14015071';

/** ACTIVITY duy nhất cho phép nhập điểm đánh giá lần 2 - đúng giá trị hardcode ở bản Thymeleaf gốc. */
const EDITABLE_ACTIVITY = '14015358';

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
  evsPoint1: string;
  evsGrade1: string;
  canInput: boolean;
  evsPoint2: string;
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
  evsScore2: string;
}

/**
 * Bản Angular của evs/manage/viewAffirmTarget2.html (Thymeleaf + jQuery) - Đánh giá lần 2. Kiến trúc
 * gần như giống hệt AffirmTarget1Component (cùng chuyển đổi trình tự tải gradeList → objectList →
 * standardRate/gradeSummary để tránh race-condition trong bản gốc - xem docblock class đó) - chỉ khác:
 *
 * 1. Danh sách có thêm 2 cột readonly "Lần 1" (evsPoint1/evsGrade1) giữa cột "Bản thân" và "Lần 2".
 * 2. Nút "Lưu tạm thời" ở bản gốc LUÔN hiển thị (dòng vat2$('#vat2_btnSaveDraft').hide() bị comment
 *    out trong vat2CheckExecuteButton) - khác vat1 (ẩn khi trang không có dòng biên tập được). Giữ
 *    đúng khác biệt này: nút Lưu tạm thời không có điều kiện ẩn/hiện ở trang lần 2.
 * 3. Điều kiện hiện nút "Thực hiện" nghiêm ngặt hơn vat1: KHÔNG chỉ các dòng ACTIVITY=EDITABLE_ACTIVITY
 *    mà TẤT CẢ dòng trên trang (kể cả dòng readonly) đều phải có điểm + cấp ĐG mới hiện nút - đúng
 *    $allRows = tr[data-seq] (không lọc theo activity) ở vat2CheckExecuteButton bản gốc.
 * 4. Payload lưu hàng loạt (Lưu tạm thời/Thực hiện toàn trang) KHÔNG có field affirmContent (bản gốc
 *    không push field này, khác vat1 - vat1 push affirmContent rỗng do đọc nhầm thuộc tính không tồn
 *    tại, còn vat2 đơn giản là không gửi field này).
 * 5. Modal chi tiết có thêm khối readonly "Ý kiến đánh giá lần 1" (lấy từ affirmComment1, không phải
 *    affirmContent1 - đúng field bản gốc dùng) và cột "Đánh giá lần 1" readonly trong bảng mục tiêu;
 *    chỉ cột/khối "Lần 2" mới sửa được.
 */
@Component({
  selector: 'app-affirm-target2',
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
  templateUrl: './affirm-target2.component.html',
  styleUrl: './affirm-target2.component.css',
})
export class AffirmTarget2Component implements OnInit {
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

  /** Chỉ dùng để quyết định có ẩn hẳn nút Thực hiện hay không (trang không có dòng nào biên tập
   *  được) - đúng nhánh $rows.length===0 trong vat2CheckExecuteButton bản gốc. */
  readonly editableRows = computed(() => this.pageRows().filter((r) => r.canInput));
  /** allFilled quét TOÀN BỘ pageRows() (không lọc theo canInput) - xem điểm khác biệt #3 ở docblock class. */
  readonly showExecuteButton = computed(
    () => this.editableRows().length > 0 && this.pageRows().every((r) => r.evsPoint2 !== '' && !!r.gradeCode),
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
  readonly detailInfo = signal<EvsAffirmTarget2DetailInfo | null>(null);
  readonly detailItems = signal<DetailItemVm[]>([]);
  readonly selfTotal = signal<number | null>(null);
  readonly affirm1Total = signal<number | null>(null);
  readonly affirm2Total = signal<number | null>(null);
  readonly affirm2ScoreDisplay = signal('0');
  readonly affirm2GradeCode = signal('');
  readonly affirm2GradeName = signal('-');
  readonly selfGradeName = signal('-');
  readonly affirm1ScoreDisplay = signal('-');
  readonly affirm1GradeName = signal('-');
  affirmContent = '';
  private currentDetailSeq: string | null = null;

  constructor(
    private readonly api: AffirmTarget2Service,
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
    this.api.getResumeList(this.evsType, EVS_LEVEL_AFFIRM2).subscribe({
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
      this.message.warning(this.i18n.t('evs.viewAffirmTarget2.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
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

  private toRowVm(r: EvsAffirmTarget2Row): RowVm {
    const canInput = r.activity === EDITABLE_ACTIVITY;
    const evsPoint2 = r.evsPoint2 ?? '';
    const gradeObj = (r.evsGrade2 ? this.gradeMapByCode.get(r.evsGrade2) : null) ?? this.calcGradeFromScore(evsPoint2);
    const searchText = [
      r.localName, r.empid, r.deptname, r.postGradeName, r.objectTypeName, r.dateStarted,
      r.evsPoint0, r.evsGrade0, r.evsPoint1, r.evsGrade1, gradeObj?.evsGradeName, r.activityName,
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
      evsPoint1: r.evsPoint1 ?? '',
      evsGrade1: r.evsGrade1 ?? '',
      canInput,
      evsPoint2,
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
    const gradeObj = this.calcGradeFromScore(row.evsPoint2);
    row.gradeCode = gradeObj?.evsGrade ?? '';
    row.gradeName = gradeObj?.evsGradeName ?? '';
    this.pageRows.set([...this.pageRows()]);
  }

  // ==================== Lưu tạm thời / Thực hiện (toàn trang) ====================

  saveDraft(): void {
    if (!this.resumeSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: t('evs.viewAffirmTarget2.msg.confirmSave', 'Bạn có chắc muốn lưu tạm thời?'),
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
            this.message.success(t('evs.viewAffirmTarget2.msg.saveSuccess', 'Lưu tạm thời thành công!'));
            this.loadPage();
          } else {
            this.message.error(res.message || t('evs.viewAffirmTarget2.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.'));
          }
        },
        error: () => this.message.error(t('evs.viewAffirmTarget2.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
      });
  }

  execute(): void {
    if (!this.resumeSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: t('evs.viewAffirmTarget2.msg.confirmExecute', 'Bạn có chắc muốn thực hiện?'),
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
            this.message.success(t('evs.viewAffirmTarget2.msg.executeSuccess', 'Thực hiện thành công!'));
            this.loadPage();
          } else {
            this.message.error(res.message || t('evs.viewAffirmTarget2.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.'));
          }
        },
        error: () => this.message.error(t('evs.viewAffirmTarget2.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
      });
  }

  private buildBatchItems() {
    return this.filteredRows().map((r) => ({ seq: r.seq, evsPoint: r.evsPoint2, evsGrade: r.gradeCode }));
  }

  // ==================== Modal chi tiết ====================

  openDetail(objectSeq: string): void {
    this.currentDetailSeq = objectSeq;
    this.detailInfo.set(null);
    this.detailItems.set([]);
    this.selfTotal.set(null);
    this.affirm1Total.set(null);
    this.affirm2Total.set(null);
    this.affirm2ScoreDisplay.set('0');
    this.affirm2GradeCode.set('');
    this.affirm2GradeName.set('-');
    this.selfGradeName.set('-');
    this.affirm1ScoreDisplay.set('-');
    this.affirm1GradeName.set('-');
    this.affirmContent = '';
    this.detailLoading.set(true);
    this.modalVisible.set(true);

    this.api.getObjectInfo(objectSeq).subscribe({
      next: (info) => {
        this.detailInfo.set(info);
        const selfGradeObj = info.evsGrade0 ? this.gradeMapByCode.get(info.evsGrade0) : null;
        this.selfGradeName.set(selfGradeObj?.evsGradeName ?? info.evsGrade0 ?? '-');
        const affirm1GradeObj = info.evsGrade1 ? this.gradeMapByCode.get(info.evsGrade1) : null;
        this.affirm1ScoreDisplay.set(info.evsPoint1 ?? '-');
        this.affirm1GradeName.set(affirm1GradeObj?.evsGradeName ?? info.evsGrade1 ?? '-');
        this.affirm2ScoreDisplay.set(info.evsPoint2 ?? '0');
        const affirm2GradeObj = info.evsGrade2 ? this.gradeMapByCode.get(info.evsGrade2) : null;
        this.affirm2GradeName.set(affirm2GradeObj?.evsGradeName ?? info.evsGrade2 ?? '');
        this.affirm2GradeCode.set(info.evsGrade2 ?? '');
        this.affirmContent = info.affirmContent2 || '';
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
            evsScore1: i.evsScore1 ?? '0',
            evsScore2: i.evsScore2 ?? '',
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
    let affirm2Total = 0;
    let hasAffirm2Input = false;
    for (const item of this.detailItems()) {
      selfTotal += ((Number(item.evsScore) || 0) * item.itemScore) / 100;
      affirm1Total += ((Number(item.evsScore1) || 0) * item.itemScore) / 100;
      const score2 = parseFloat(item.evsScore2);
      if (!isNaN(score2)) {
        hasAffirm2Input = true;
        affirm2Total += (score2 * item.itemScore) / 100;
      }
    }
    selfTotal = Math.round(selfTotal * 100) / 100;
    affirm1Total = Math.round(affirm1Total * 100) / 100;
    affirm2Total = Math.round(affirm2Total * 100) / 100;
    this.selfTotal.set(selfTotal > 0 ? selfTotal : null);
    this.affirm1Total.set(affirm1Total > 0 ? affirm1Total : null);
    this.affirm2Total.set(hasAffirm2Input ? affirm2Total : null);
    if (hasAffirm2Input) {
      this.affirm2ScoreDisplay.set(String(affirm2Total));
      if (this.canInputDetail) {
        const gradeObj = this.calcGradeFromScore(String(affirm2Total));
        if (gradeObj) {
          this.affirm2GradeName.set(gradeObj.evsGradeName);
          this.affirm2GradeCode.set(gradeObj.evsGrade);
        }
      }
    }
  }

  saveDetail(mode: 'draft' | 'confirm'): void {
    const objectSeq = this.currentDetailSeq;
    if (!objectSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const content = mode === 'confirm'
      ? t('evs.viewAffirmTarget2.msg.confirmConfirm', 'Bạn có chắc muốn xác nhận?')
      : t('evs.viewAffirmTarget2.msg.confirmSave', 'Bạn có chắc muốn lưu tạm thời?');
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
      evsPoint: this.affirm2ScoreDisplay(),
      evsGrade: this.affirm2GradeCode(),
      affirmContent: this.affirmContent,
      itemScores: this.detailItems().map((i) => ({ seq: i.seq, evsScore2: i.evsScore2 })),
    };
    const call = mode === 'confirm' ? this.api.confirmDetail(payload) : this.api.saveDetail(payload);
    call.subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(
            mode === 'confirm'
              ? t('evs.viewAffirmTarget2.msg.confirmSuccess', 'Xác nhận thành công!')
              : t('evs.viewAffirmTarget2.msg.saveSuccess', 'Lưu tạm thời thành công!'),
          );
          this.closeModal();
          this.loadPage();
        } else {
          this.message.error(res.message || t('evs.viewAffirmTarget2.msg.actionFail', 'Lỗi khi thực hiện.'));
        }
      },
      error: () => this.message.error(t('evs.viewAffirmTarget2.msg.actionFail', 'Lỗi khi thực hiện.')),
    });
  }

  rejectDetail(): void {
    const objectSeq = this.currentDetailSeq;
    if (!objectSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: t('evs.viewAffirmTarget2.msg.confirmReject', 'Bạn có chắc muốn từ chối?'),
      nzOnOk: () => {
        this.api.rejectDetail(objectSeq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(t('evs.viewAffirmTarget2.msg.rejectSuccess', 'Từ chối thành công!'));
              this.closeModal();
              this.loadPage();
            } else {
              this.message.error(res.message || t('evs.viewAffirmTarget2.msg.actionFail', 'Lỗi khi thực hiện.'));
            }
          },
          error: () => this.message.error(t('evs.viewAffirmTarget2.msg.actionFail', 'Lỗi khi thực hiện.')),
        });
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
    this.currentDetailSeq = null;
  }
}
