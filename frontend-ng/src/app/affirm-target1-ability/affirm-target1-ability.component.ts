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
  EvsAffirmTarget1AbilityDetailInfo,
  EvsAffirmTarget1Row,
  EvsGradeInfo,
  EvsResumeOption,
  EvsScoreOption,
} from './affirm-target1-ability.model';
import { AffirmTarget1AbilityService } from './affirm-target1-ability.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key evs.viewAffirmTarget1Ability.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới). */
const I18N_KEYS = [
  'evs.viewAffirmTarget1Ability.evalName', 'evs.viewAffirmTarget1Ability.btnSearch',
  'evs.viewAffirmTarget1Ability.btnSaveDraft', 'evs.viewAffirmTarget1Ability.gradeDistribution',
  'evs.viewAffirmTarget1Ability.stdRate', 'evs.viewAffirmTarget1Ability.currentEmp',
  'evs.viewAffirmTarget1Ability.totalEmp', 'evs.viewAffirmTarget1Ability.gradeLevel',
  'evs.viewAffirmTarget1Ability.quickFilter', 'evs.viewAffirmTarget1Ability.col.total',
  'evs.viewAffirmTarget1Ability.col.notEntered', 'evs.viewAffirmTarget1Ability.col.numPeople',
  'evs.viewAffirmTarget1Ability.col.rate', 'evs.viewAffirmTarget1Ability.col.maxScore',
  'evs.viewAffirmTarget1Ability.col.minScore', 'evs.viewAffirmTarget1Ability.col.no',
  'evs.viewAffirmTarget1Ability.col.fullName', 'evs.viewAffirmTarget1Ability.col.empid',
  'evs.viewAffirmTarget1Ability.col.dept', 'evs.viewAffirmTarget1Ability.col.position',
  'evs.viewAffirmTarget1Ability.col.objectType', 'evs.viewAffirmTarget1Ability.col.hireDate',
  'evs.viewAffirmTarget1Ability.col.self', 'evs.viewAffirmTarget1Ability.col.affirm1',
  'evs.viewAffirmTarget1Ability.col.score', 'evs.viewAffirmTarget1Ability.col.grade',
  'evs.viewAffirmTarget1Ability.col.status', 'evs.viewAffirmTarget1Ability.btnClose',
  'evs.viewAffirmTarget1Ability.modal.personalInfo', 'evs.viewAffirmTarget1Ability.modal.basicInfo',
  'evs.viewAffirmTarget1Ability.modal.evalCategory', 'evs.viewAffirmTarget1Ability.modal.fullName',
  'evs.viewAffirmTarget1Ability.modal.position', 'evs.viewAffirmTarget1Ability.modal.dept',
  'evs.viewAffirmTarget1Ability.modal.hireDate', 'evs.viewAffirmTarget1Ability.modal.evalYear',
  'evs.viewAffirmTarget1Ability.modal.period', 'evs.viewAffirmTarget1Ability.modal.appraiser1',
  'evs.viewAffirmTarget1Ability.modal.appraiser2', 'evs.viewAffirmTarget1Ability.modal.abilityTitle',
  'evs.viewAffirmTarget1Ability.modal.col.no', 'evs.viewAffirmTarget1Ability.modal.col.distinction',
  'evs.viewAffirmTarget1Ability.modal.col.evalItem', 'evs.viewAffirmTarget1Ability.modal.col.criterion',
  'evs.viewAffirmTarget1Ability.modal.col.itemScore', 'evs.viewAffirmTarget1Ability.modal.col.selfScore',
  'evs.viewAffirmTarget1Ability.modal.col.affirm1Score', 'evs.viewAffirmTarget1Ability.modal.col.totalScore',
  'evs.viewAffirmTarget1Ability.modal.selfOpinion', 'evs.viewAffirmTarget1Ability.modal.affirm1Opinion',
  'evs.viewAffirmTarget1Ability.modal.btnConfirm', 'evs.viewAffirmTarget1Ability.modal.btnReject',
  'evs.viewAffirmTarget1Ability.msg.selectEvalFirst', 'evs.viewAffirmTarget1Ability.msg.confirmSave',
  'evs.viewAffirmTarget1Ability.msg.saveSuccess', 'evs.viewAffirmTarget1Ability.msg.actionFail',
  'evs.viewAffirmTarget1Ability.msg.confirmConfirm', 'evs.viewAffirmTarget1Ability.msg.confirmSuccess',
  'evs.viewAffirmTarget1Ability.msg.confirmReject', 'evs.viewAffirmTarget1Ability.msg.rejectSuccess',
  'evs.viewConfirmTarget1.msg.notInEvalPeriod', 'common.confirm', 'common.cancel', 'common.select', 'common.loadFail',
];

/** Cấp độ đăng ký đánh giá (evsLevel) khi lấy danh sách "Tên đánh giá" - đúng giá trị hardcode ở bản
 *  Thymeleaf gốc (14015070 = Đánh giá lần 1, dùng chung mức với AffirmTarget1Component). */
const EVS_LEVEL_AFFIRM1 = '14015070';

/** ACTIVITY duy nhất cho phép nhập điểm đánh giá năng lực lần 1 - đúng giá trị hardcode ở bản gốc. */
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
  evsGrade0Name: string;
  evsPoint1: string;
  evsGrade1Name: string;
  searchText: string;
}

interface DetailItemVm {
  itemSeq: string;
  groupName: string;
  itemName: string;
  remark: string;
  itemScore: number;
  evsScore0: string;
  evsScore1: string;
}

/**
 * Bản Angular của evs/manage/viewAffirmTarget1Ability.html (Thymeleaf + jQuery) - Đánh giá năng lực
 * lần 1. Danh sách nhân viên/phân bổ cấp/tỷ lệ tiêu chuẩn dùng lại đúng kiến trúc + endpoint với
 * AffirmTarget1Component (cùng sửa trình tự tải gradeList → objectList → standardRate/gradeSummary để
 * tránh race-condition của bản gốc - xem docblock AffirmTarget1Component), nhưng khác: danh sách ở đây
 * KHÔNG có ô nhập điểm/nút Lưu tạm thời/Thực hiện ở toolbar trên cùng - hoàn toàn readonly, chỉ bấm
 * vào tên để mở modal chi tiết. Modal chi tiết cũng khác AffirmTarget1Component: điểm "Đánh giá lần 1"
 * chọn qua dropdown (nz-select, danh sách lấy từ EVS_PARAM paramType=ITEM - giống
 * EvsBySelfSSTAbilityComponent) thay vì nhập số, và công thức tổng dùng maxScore từ chính danh sách
 * dropdown đó (không phải điểm chỉ tiêu 100 cố định).
 */
@Component({
  selector: 'app-affirm-target1-ability',
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
  templateUrl: './affirm-target1-ability.component.html',
  styleUrl: './affirm-target1-ability.component.css',
})
export class AffirmTarget1AbilityComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly gradeNames = GRADE_NAMES;

  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  readonly noticeVisible = signal(false);

  readonly gradeList = signal<EvsGradeInfo[]>([]);
  readonly distributionVisible = signal(false);
  readonly stdRate = signal<Record<string, unknown>>({});
  readonly gradeSummary = signal<Record<string, unknown>[]>([]);
  readonly scoreOptions = signal<EvsScoreOption[]>([]);

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
  readonly detailInfo = signal<EvsAffirmTarget1AbilityDetailInfo | null>(null);
  readonly detailItems = signal<DetailItemVm[]>([]);
  readonly totalItemScore = signal(0);
  readonly selfTotal = signal<number | null>(null);
  readonly affirm1Total = signal<number | null>(null);
  readonly affirm1ScoreDisplay = signal('-');
  readonly affirm1GradeCode = signal('');
  readonly affirm1GradeName = signal('-');
  readonly selfGradeName = signal('-');
  affirmContent = '';
  private currentDetailSeq: string | null = null;

  constructor(
    private readonly api: AffirmTarget1AbilityService,
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
      this.message.warning(this.i18n.t('evs.viewAffirmTarget1Ability.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.pageIndex = 1;
    this.filterText.set('');
    this.api.getScoreOptions(this.resumeSeq).subscribe((rows) => this.scoreOptions.set(rows ?? []));
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
    const selfGradeObj = r.evsGrade0 ? this.gradeMapByCode.get(r.evsGrade0) : null;
    const affirm1GradeObj = r.evsGrade1 ? this.gradeMapByCode.get(r.evsGrade1) : null;
    const evsGrade0Name = selfGradeObj?.evsGradeName ?? r.evsGrade0 ?? '';
    const evsGrade1Name = affirm1GradeObj?.evsGradeName ?? r.evsGrade1 ?? '';
    const searchText = [
      r.localName, r.empid, r.deptname, r.postGradeName, r.objectTypeName, r.dateStarted,
      r.evsPoint0, evsGrade0Name, r.evsPoint1, evsGrade1Name, r.activityName,
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
      evsGrade0Name,
      evsPoint1: r.evsPoint1 ?? '',
      evsGrade1Name,
      searchText,
    };
  }

  private calcGradeFromScore(score: string | number | null | undefined): EvsGradeInfo | null {
    if (score === '' || score == null) return null;
    const s = typeof score === 'number' ? score : parseFloat(score);
    if (isNaN(s)) return null;
    let found: EvsGradeInfo | null = null;
    for (const g of this.gradeList()) {
      const max = parseFloat(g.endScore);
      const min = parseFloat(g.startScore);
      if (!isNaN(max) && !isNaN(min) && s >= min && s <= max) found = g;
    }
    return found;
  }

  private get maxScore(): number {
    return this.scoreOptions().reduce((max, opt) => {
      const v = parseFloat(opt.evsScore);
      return !isNaN(v) && v > max ? v : max;
    }, 0);
  }

  // ==================== Modal chi tiết ====================

  openDetail(objectSeq: string): void {
    this.currentDetailSeq = objectSeq;
    this.detailInfo.set(null);
    this.detailItems.set([]);
    this.totalItemScore.set(0);
    this.selfTotal.set(null);
    this.affirm1Total.set(null);
    this.affirm1ScoreDisplay.set('-');
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
        this.affirm1ScoreDisplay.set(info.evsPoint1 ?? '-');
        const affirm1GradeObj = info.evsGrade1 ? this.gradeMapByCode.get(info.evsGrade1) : null;
        this.affirm1GradeName.set(affirm1GradeObj?.evsGradeName ?? info.evsGrade1 ?? '-');
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
            itemSeq: i.itemSeq,
            groupName: i.groupName,
            itemName: i.itemName,
            remark: i.remark,
            itemScore: Number(i.itemScore) || 0,
            evsScore0: i.evsScore0 ?? '',
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
    const maxScore = this.maxScore;
    let totalItem = 0;
    let selfTotal = 0;
    let affirm1Total = 0;
    let hasAffirm1Input = false;
    for (const item of this.detailItems()) {
      totalItem += item.itemScore;
      const selfVal = parseFloat(item.evsScore0);
      if (!isNaN(selfVal) && maxScore > 0) {
        selfTotal += Math.round(((selfVal * item.itemScore) / maxScore) * 100) / 100;
      }
      if (item.evsScore1 !== '') {
        const score1 = parseFloat(item.evsScore1);
        if (!isNaN(score1) && maxScore > 0) {
          hasAffirm1Input = true;
          affirm1Total += Math.round(((score1 * item.itemScore) / maxScore) * 100) / 100;
        }
      }
    }
    totalItem = Math.round(totalItem * 100) / 100;
    selfTotal = Math.round(selfTotal * 100) / 100;
    affirm1Total = Math.round(affirm1Total * 100) / 100;
    this.totalItemScore.set(totalItem);
    this.selfTotal.set(selfTotal > 0 ? selfTotal : null);
    this.affirm1Total.set(hasAffirm1Input ? affirm1Total : null);
    if (hasAffirm1Input) {
      this.affirm1ScoreDisplay.set(String(affirm1Total));
      if (this.canInputDetail) {
        const gradeObj = this.calcGradeFromScore(affirm1Total);
        if (gradeObj) {
          this.affirm1GradeName.set(gradeObj.evsGradeName);
          this.affirm1GradeCode.set(gradeObj.evsGrade);
        }
      }
    }
  }

  saveDetail(mode: 'draft' | 'confirm'): void {
    const objectSeq = this.currentDetailSeq;
    if (!objectSeq || !this.resumeSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const content = mode === 'confirm'
      ? t('evs.viewAffirmTarget1Ability.msg.confirmConfirm', 'Bạn có chắc muốn xác nhận?')
      : t('evs.viewAffirmTarget1Ability.msg.confirmSave', 'Bạn có chắc muốn lưu tạm thời?');
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
      resumeSeq: this.resumeSeq!,
      affirmContent: this.affirmContent,
      items: this.detailItems().map((i) => ({ itemSeq: i.itemSeq, evsScore1: i.evsScore1 || null })),
    };
    const call = mode === 'confirm' ? this.api.confirmDetail(payload) : this.api.saveDetail(payload);
    call.subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(
            mode === 'confirm'
              ? t('evs.viewAffirmTarget1Ability.msg.confirmSuccess', 'Xác nhận thành công!')
              : t('evs.viewAffirmTarget1Ability.msg.saveSuccess', 'Lưu tạm thời thành công!'),
          );
          this.closeModal();
          this.loadPage();
        } else {
          this.message.error(res.message || t('evs.viewAffirmTarget1Ability.msg.actionFail', 'Lỗi khi thực hiện.'));
        }
      },
      error: () => this.message.error(t('evs.viewAffirmTarget1Ability.msg.actionFail', 'Lỗi khi thực hiện.')),
    });
  }

  rejectDetail(): void {
    const objectSeq = this.currentDetailSeq;
    if (!objectSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: t('evs.viewAffirmTarget1Ability.msg.confirmReject', 'Bạn có chắc muốn từ chối?'),
      nzOnOk: () => {
        this.api.rejectDetail(objectSeq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(t('evs.viewAffirmTarget1Ability.msg.rejectSuccess', 'Từ chối thành công!'));
              this.closeModal();
              this.loadPage();
            } else {
              this.message.error(res.message || t('evs.viewAffirmTarget1Ability.msg.actionFail', 'Lỗi khi thực hiện.'));
            }
          },
          error: () => this.message.error(t('evs.viewAffirmTarget1Ability.msg.actionFail', 'Lỗi khi thực hiện.')),
        });
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
    this.currentDetailSeq = null;
  }
}
