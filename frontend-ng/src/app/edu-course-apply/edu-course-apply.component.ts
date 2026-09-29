import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EduApplyCourse } from '../edu-common/edu-apply.model';
import { EduApplyService } from '../edu-common/edu-apply.service';
import { classHourText } from '../edu-common/edu-basic-header.component';
import { EduEmployee } from '../edu-common/edu-common.model';
import { formatDmy } from '../edu-common/edu-date.util';
import { EduEmployeePickerComponent } from '../edu-common/edu-employee-picker.component';
import { EduSyllabusViewComponent } from '../edu-common/edu-syllabus-view.component';
import { courseWithPeriod } from '../edu-common/edu-train.model';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (courseApply.jsp, queryMaker.jsp). */
const I18N_KEYS = [
  'empsubject.subjectNm', 'hrm.recruitManage.START_DATE1', 'hrm.recruitManage.END_DATE1', 'edu.courseApply.XINZENGJUECAIZHE.a',
  'ess.infoApply.title.affirmor', 'edu.courseApply.JIJUECAIZHE.a', 'hr.enpinfo.title.EMP.EMPNUMBER',
  'alert.pa.pasalarycanshu.xingming', 'edu.teacherManager.BUMEN.a', 'org.title.POST_GRADE_NAME',
  'edu.courseApply.QUEDINGSHIFOUSHENQING.a', 'ess.infoApply.title.apply', 'edu.systemManager.PEIXUNLEIXING.a',
  'edu.trainArchives.KECHENGMINGCHENGQICI.a', 'edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a', 'edu.planManager.PEIXUNKESHI.a',
  'edu.planManager.KECHENGBIAO.a', 'edu.planManager.CHAKANKECHENGBIAO.a', 'pa.salarycode.affirm.reason',
  'edu.courseApply.SHENQINGZHUANGTAI.a', 'edu.planManager.QI.a', 'ar.alert.message.excelimport.title.di',
  'ar.viewsummaryparameteritem.title.hour', 'display.mutual.month', 'ar.viewsummaryparameteritem.title.day',
  'edu.courseApply.applyEndDate', 'edu.courseApply.msg.selectCourse', 'edu.courseApply.msg.selectMaker',
  'edu.courseApply.msg.makerExists', 'edu.courseApply.msg.noDefaultMaker', 'edu.courseApply.lastMaker',
  'common.search', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.confirm', 'common.cancel',
  'common.delete', 'common.quickFilter', 'alert.message.add_fail',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500];

/**
 * Bản Angular của /edu/traineducation/courseApply (JSP + DWZ, dự án Hanwha_HTSV) - nhân viên đăng ký khóa đào tạo:
 * danh sách khóa được đăng ký (kế hoạch cho phép đăng ký, còn hạn, nhân viên thuộc danh sách chỉ định, chưa đăng ký),
 * chọn khóa + nhập lý do, danh sách người phê duyệt (mặc định trưởng phòng ban, thêm người phê duyệt các cấp), gửi đơn.
 */
@Component({
  selector: 'app-edu-course-apply',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzInputModule, NzButtonModule, NzCheckboxModule,
    NzDatePickerModule, NzAlertModule, NzModalModule, TranslatePipe, EduEmployeePickerComponent, EduSyllabusViewComponent],
  templateUrl: './edu-course-apply.component.html',
  styleUrl: './edu-course-apply.component.css',
})
export class EduCourseApplyComponent implements OnInit {
  @ViewChild('ecapPicker') private picker?: EduEmployeePickerComponent;
  @ViewChild('ecapSyllabus') private syllabusView?: EduSyllabusViewComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly rows = signal<EduApplyCourse[]>([]);
  readonly loading = signal(false);
  readonly submitting = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly checked = signal<Set<string>>(new Set());
  readonly makers = signal<EduEmployee[]>([]);
  /** Số người phê duyệt mặc định (trưởng phòng ban) - không cho xóa (bản gốc). */
  readonly defaultMakerCount = signal(0);
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) => [r.trainTypeCodeName, r.courseNameCode, r.impleStartDate, r.impleEndDate]
      .some((v) => (v ?? '').toLowerCase().includes(kw)));
  });
  readonly allChecked = computed(() => this.filteredRows().length > 0 && this.filteredRows().every((r) => this.checked().has(r.basicNo)));
  readonly someChecked = computed(() => !this.allChecked() && this.filteredRows().some((r) => this.checked().has(r.basicNo)));

  /** Lý do đăng ký theo từng khóa (bản gốc ô APPLY_TASK trên mỗi dòng). */
  tasks: Record<string, string> = {};
  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  searchCourseName = '';
  searchStart: Date | null = null;
  searchEnd: Date | null = null;
  pickerVisible = false;

  constructor(
    private readonly api: EduApplyService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDefaultMakers();
    this.search();
  }

  private loadDefaultMakers(): void {
    this.api.getDefaultMakers().subscribe({
      next: (list) => {
        this.makers.set(list ?? []);
        this.defaultMakerCount.set((list ?? []).length);
      },
      error: () => {
        this.makers.set([]);
        this.defaultMakerCount.set(0);
      },
    });
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getApplyCourses({
      courseName: this.searchCourseName.trim(),
      startDate: formatDmy(this.searchStart),
      endDate: formatDmy(this.searchEnd),
    }).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.checked.set(new Set());
        this.tasks = {};
        this.pageIndex = 1;
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  onQuickFilterChange(value: string): void {
    this.quickFilter.set(value);
    this.pageIndex = 1;
  }

  isChecked(r: EduApplyCourse): boolean {
    return this.checked().has(r.basicNo);
  }

  toggle(r: EduApplyCourse, value?: boolean): void {
    const next = new Set(this.checked());
    const on = value ?? !next.has(r.basicNo);
    if (on) next.add(r.basicNo);
    else next.delete(r.basicNo);
    this.checked.set(next);
  }

  toggleAll(value: boolean): void {
    const next = new Set(this.checked());
    this.filteredRows().forEach((r) => (value ? next.add(r.basicNo) : next.delete(r.basicNo)));
    this.checked.set(next);
  }

  courseTitle(r: EduApplyCourse): string {
    return courseWithPeriod((k, f) => this.i18n.t(k, f), r.courseNameCode, r.periodTime);
  }

  classHour(r: EduApplyCourse): string {
    return classHourText(this.i18n, r.impleClassHour, r.impleClassUnit);
  }

  showSyllabus(r: EduApplyCourse): void {
    this.syllabusView?.open(r.planNo);
  }

  // ==================== Người phê duyệt ====================

  /** Nhãn cấp phê duyệt - bản gốc "Cấp N" (vi) / "N级决裁者". */
  levelText(index: number): string {
    return `${this.i18n.t('edu.courseApply.JIJUECAIZHE.a', 'Cấp')} ${index + 1}`;
  }

  openPicker(): void {
    this.picker?.open('');
  }

  onPicked(list: EduEmployee[]): void {
    const current = this.makers();
    const next = [...current];
    list.forEach((e) => {
      if (next.some((m) => m.personId === e.personId)) {
        this.message.warning(this.i18n.t('edu.courseApply.msg.makerExists', 'Người phê duyệt này đã có trong danh sách!'));
      } else {
        next.push(e);
      }
    });
    this.makers.set(next);
  }

  removeMaker(index: number): void {
    this.makers.set(this.makers().filter((_, i) => i !== index));
  }

  // ==================== Gửi đơn ====================

  submit(): void {
    const selected = this.rows().filter((r) => this.checked().has(r.basicNo));
    if (selected.length === 0) {
      this.message.warning(this.i18n.t('edu.courseApply.msg.selectCourse', 'Vui lòng chọn khóa đào tạo cần đăng ký!'));
      return;
    }
    if (this.makers().length === 0) {
      this.message.warning(this.i18n.t('edu.courseApply.msg.selectMaker', 'Vui lòng chọn người phê duyệt!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: this.i18n.t('edu.courseApply.QUEDINGSHIFOUSHENQING.a', 'Đồng ý đăng ký?'),
      nzOkText: this.i18n.t('ess.infoApply.title.apply', 'Đăng ký'),
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzMaskClosable: true,
      nzOnOk: () => this.doSubmit(selected),
    });
  }

  private doSubmit(selected: EduApplyCourse[]): void {
    this.submitting.set(true);
    const courses = selected.map((r) => ({ basicNo: r.basicNo, applyTask: (this.tasks[r.basicNo] ?? '').trim() }));
    this.api.submit(courses, this.makers().map((m) => m.personId)).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (res.success) {
          this.message.success(res.message);
          this.search();
        } else {
          this.message.error(res.message);
        }
      },
      error: (err) => {
        this.submitting.set(false);
        this.message.error(err?.error?.message || this.i18n.t('alert.message.add_fail', 'Thêm thất bại!'));
      },
    });
  }
}
