import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { forkJoin } from 'rxjs';
import { classHourText } from '../edu-common/edu-basic-header.component';
import { courseWithPeriod } from '../edu-common/edu-train.model';
import { EduPlan, EduSyllabus } from '../edu-plan-manager/edu-plan-manager.model';
import { EduPlanManagerService } from '../edu-plan-manager/edu-plan-manager.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EduCalendarCell, EduCalendarItem } from './edu-train-calendar.model';
import { EduTrainCalendarService } from './edu-train-calendar.service';

const MONTH_KEYS = Array.from({ length: 12 }, (_, i) => `common.month.${String(i + 1).padStart(2, '0')}`);
const WEEK_DAYS = [
  { key: 'common.day.sun', fallback: 'CN' }, { key: 'common.day.mon', fallback: 'T2' },
  { key: 'common.day.tue', fallback: 'T3' }, { key: 'common.day.wed', fallback: 'T4' },
  { key: 'common.day.thu', fallback: 'T5' }, { key: 'common.day.fri', fallback: 'T6' },
  { key: 'common.day.sat', fallback: 'T7' },
];

/** Key message.properties dùng trong trang - dùng lại key sẵn có của bản JSP gốc (trainCalendarDetail.jsp, syllabusInfo.jsp). */
const I18N_KEYS = [
  ...MONTH_KEYS, ...WEEK_DAYS.map((d) => d.key), 'cccal.btn.prevMonth', 'cccal.btn.nextMonth',
  'edu.trainResult.KECHENGFENLEI.a', 'ar.viewarcardrecord.title.beizhu','empsubject.subjectNm', 'empsubject.eduRm',
  'edu.planManager.ZHUGUANBUMEN.a', 'edu.planManager.PEIXUNRENSHU.a', 'edu.trainBasicInformation.PEIXUNFANGSHI.a',
  'edu.planManager.PEIXUNKESHI.a', 'edu.planManager.JIANGSHI.a', 'edu.planManager.SHIFOUXUYAOKAOSHI.a',
  'edu.planManager.YUSUANFEIYONG.a', 'edu.trainResult.SHIFOUXUYAOXUEYUANPINGJIA.a',
  'edu.trainResult.SHIFOUXUYAOJIANGSHIPINGJIA.a', 'edu.planManager.SHIFOUXUYAOPEIXUNPINGJIA.a',
  'edu.planManager.JIHUAKAISHISHIJIAN.a', 'edu.planManager.JIHUAJIESHUSHIJIAN.a', 'edu.planManager.SHIFOUXUYAOPEIXUNBAOGAO.a',
  'edu.planManager.SHIFOUYUNXUSHENQING.a', 'edu.planManager.KECHENGBIAO.a', 'edu.planManager.KECHENGRIQI.a',
  'ess.infoApply.title.startTime', 'ess.infoApply.title.endTime', 'edu.planManager.XIANGXIDIDIAN.a',
  'ar.viewcycle.content.yes', 'ar.viewcycle.content.no', 'edu.planManager.QI.a', 'ar.alert.message.excelimport.title.di',
  'ar.viewsummaryparameteritem.title.hour', 'display.mutual.month', 'ar.viewsummaryparameteritem.title.day',
  'edu.trainCalendar.detailTitle','edu.trainCalendar.selectedDay',
  'common.search', 'common.stt', 'common.noData', 'common.loadFail', 'common.close',
];

/**
 * Bản Angular của /edu/trainfile/trainCalendar (JSP + DWZ, dự án Hanwha_HTSV) - lịch đào tạo theo tháng: mỗi ngày liệt kê
 * các khóa học có buổi học (EDU_TRAIN_SYLLABUS). Bấm vào khóa học mở chi tiết kế hoạch (trainCalendarDetail) kèm lịch học
 * (syllabusInfo / queryCourseSyllabus3 - các buổi của ngày đang xem được tô đậm). Modal đóng khi bấm ra ngoài.
 */
@Component({
  selector: 'app-edu-train-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzSelectModule, NzAlertModule, NzModalModule, NzDescriptionsModule,
    NzTableModule, NzSpinModule, TranslatePipe],
  templateUrl: './edu-train-calendar.component.html',
  styleUrl: './edu-train-calendar.component.css',
})
export class EduTrainCalendarComponent implements OnInit {
  readonly monthKeys = MONTH_KEYS;
  readonly weekDays = WEEK_DAYS;
  readonly monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  readonly yearOptions: number[];

  selectedYear: number;
  selectedMonth: number;

  readonly weeks = signal<EduCalendarCell[][]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailPlan = signal<EduPlan | null>(null);
  readonly detailSyllabus = signal<EduSyllabus[]>([]);
  /** Ngày đang xem (DD/MM/YYYY) - tô đậm các buổi học của ngày này trong lịch học. */
  detailDate = '';

  constructor(
    private readonly api: EduTrainCalendarService,
    private readonly planApi: EduPlanManagerService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {
    const now = new Date();
    this.selectedYear = now.getFullYear();
    this.selectedMonth = now.getMonth() + 1;
    // Bản gốc <ait:date yearMinus="10" yearPlus="10">
    this.yearOptions = Array.from({ length: 21 }, (_, i) => this.selectedYear - 10 + i);
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    const year = this.selectedYear;
    const month = this.selectedMonth;
    this.api.getMonth(year, month).subscribe({
      next: (items) => {
        this.weeks.set(this.buildWeeks(year, month, items ?? []));
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.weeks.set(this.buildWeeks(year, month, []));
        this.loading.set(false);
      },
    });
  }

  prevMonth(): void {
    this.shiftMonth(-1);
  }

  nextMonth(): void {
    this.shiftMonth(1);
  }

  private shiftMonth(delta: number): void {
    const d = new Date(this.selectedYear, this.selectedMonth - 1 + delta, 1);
    this.selectedYear = d.getFullYear();
    this.selectedMonth = d.getMonth() + 1;
    if (!this.yearOptions.includes(this.selectedYear)) {
      this.yearOptions.push(this.selectedYear);
      this.yearOptions.sort((a, b) => a - b);
    }
    this.search();
  }

  /** Lưới tháng bắt đầu từ Chủ nhật (giống bản gốc - cột đầu là IWEEK = 0). */
  private buildWeeks(year: number, month: number, items: EduCalendarItem[]): EduCalendarCell[][] {
    const byDate = new Map<string, EduCalendarItem[]>();
    items.forEach((it) => {
      const list = byDate.get(it.dateKey) ?? [];
      list.push(it);
      byDate.set(it.dateKey, list);
    });
    const now = new Date();
    const todayKey = dateKey(now.getFullYear(), now.getMonth() + 1, now.getDate());
    const firstDow = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const cells: EduCalendarCell[] = [];
    for (let i = 0; i < firstDow; i++) cells.push(emptyCell());
    for (let day = 1; day <= daysInMonth; day++) {
      const key = dateKey(year, month, day);
      const dow = (firstDow + day - 1) % 7;
      cells.push({ day, dateKey: key, isToday: key === todayKey, isSunday: dow === 0, isSaturday: dow === 6, items: byDate.get(key) ?? [] });
    }
    while (cells.length % 7 !== 0) cells.push(emptyCell());
    const weeks: EduCalendarCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  }

  courseTitle(name: string | null | undefined, period: string | null | undefined): string {
    return courseWithPeriod((k, f) => this.i18n.t(k, f), name, period);
  }

  // ==================== Chi tiết ====================

  openDetail(item: EduCalendarItem): void {
    this.detailDate = item.courseDate;
    this.detailPlan.set(null);
    this.detailSyllabus.set([]);
    this.detailLoading.set(true);
    this.detailVisible.set(true);
    forkJoin({ plan: this.planApi.getOne(item.planNo), syllabus: this.planApi.getSyllabus(item.planNo) }).subscribe({
      next: ({ plan, syllabus }) => {
        this.detailPlan.set(plan);
        this.detailSyllabus.set(syllabus ?? []);
        this.detailLoading.set(false);
      },
      error: (err) => {
        this.detailLoading.set(false);
        this.detailVisible.set(false);
        this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  yesNo(value: boolean): string {
    return value ? this.i18n.t('ar.viewcycle.content.yes', 'Có') : this.i18n.t('ar.viewcycle.content.no', 'Không');
  }

  /** ISNOT_EVALUATE dạng "1,2,3": 1 = học viên, 2 = giảng viên, 3 = khóa học (bản gốc trainCalendarDetail.jsp). */
  hasEvaluate(plan: EduPlan, type: string): boolean {
    return (plan.isnotEvaluate ?? '').split(',').map((s) => s.trim()).includes(type);
  }

  classHour(plan: EduPlan): string {
    return classHourText(this.i18n, plan.classHour, plan.classUnit);
  }
}

function dateKey(year: number, month: number, day: number): string {
  return `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`;
}

function emptyCell(): EduCalendarCell {
  return { day: 0, dateKey: '', isToday: false, isSunday: false, isSaturday: false, items: [] };
}
