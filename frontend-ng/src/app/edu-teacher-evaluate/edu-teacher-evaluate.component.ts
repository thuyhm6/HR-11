import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EduBasicHeaderComponent } from '../edu-common/edu-basic-header.component';
import { EduCourseListComponent } from '../edu-common/edu-course-list.component';
import { cellText, readExcelRows, takeFile, writeExcel } from '../edu-common/edu-excel.util';
import { EduImportErrorsComponent } from '../edu-common/edu-import-errors.component';
import {
  EduScoreDistribution,
  EduTeacherCheck,
  EduTrainBasic,
  EduTrainBasicSearch,
  SCORE_LEVELS,
} from '../edu-common/edu-train.model';
import { EduTrainService } from '../edu-common/edu-train.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.teacherEvaluate.*). */
const I18N_KEYS = [
  'edu.studentEvaluate.KAOPING.a', 'edu.teacherEvaluate.KAOPINGXUEYUAN.a', 'edu.teacherEvaluate.DAORU.a',
  'edu.teacherEvaluate.JIANGSHISHEHAO.a', 'edu.teacherEvaluate.JIANGSHIXINGMING.a', 'edu.teacherEvaluate.PINGJUNFEN.a',
  'edu.teacherEvaluate.PINGJIAZHESHEHAO.a', 'edu.teacherEvaluate.PINGJIAZHEXINGMING.a', 'hr.viewCompetence.title.MARK',
  ...SCORE_LEVELS.map((l) => l.key), 'edu.systemManager.PEIXUNLEIXING.a', 'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a',
  'edu.trainArchives.KECHENGMINGCHENGQICI.a', 'edu.trainArchives.PEIXUNNEIRONG.a', 'edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a',
  'edu.planManager.PEIXUNKESHI.a', 'edu.planManager.QI.a', 'ar.alert.message.excelimport.title.di', 'inct.salesman.eval.result',
  'button.sys.view', 'pa.salary.title.fullInfo', 'alert.pa.pasalarycanshu.shehao', 'alert.pa.pasalarycanshu.xingming',
  'ess.trans.title.postGradeName', 'hr.viewPersonalInfo.title.DEPTNAME', 'empsubject.subjectNm', 'hrm.recruitManage.START_DATE1',
  'hrm.recruitManage.END_DATE1', 'edu.trainAgreement.importErrorTitle', 'ar.viewsummaryparameteritem.title.hour',
  'display.mutual.month', 'ar.viewsummaryparameteritem.title.day', 'common.search', 'common.close', 'common.stt',
  'common.noData', 'common.totalRows', 'common.loadFail', 'common.quickFilter', 'common.exportExcel', 'common.downloadTemplate',
  'alert.message.update_fail',
];

/** Cột file mẫu - giữ nguyên bản gốc (getTeacherEvaluateInfo / teacherEvaluateImport). */
const TEMPLATE_HEADERS = ['Evaluator ID (Not null)', 'Evaluator name', 'Result (from 1 to 5)'];

/**
 * Bản Angular của /edu/traineducation/teacherEvaluate (JSP + DWZ, dự án Hanwha_HTSV, luồng TSTO đang dùng) - học viên đánh
 * giá giảng viên (EDU_TEACHER_CHECK.GROOMING, điểm 1-5). Danh sách: khóa có yêu cầu đánh giá giảng viên; người không phải
 * quản lý đào tạo chỉ thấy khóa mình là học viên. "Đánh giá": tỷ lệ các mức điểm theo từng giảng viên, xem điểm từng học
 * viên, import phiếu đánh giá của từng giảng viên từ Excel (quản lý đào tạo). "Xem": như trên nhưng chỉ đọc.
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-teacher-evaluate',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzModalModule, NzTableModule, TranslatePipe, EduCourseListComponent,
    EduBasicHeaderComponent, EduImportErrorsComponent],
  templateUrl: './edu-teacher-evaluate.component.html',
  styleUrl: './edu-teacher-evaluate.component.css',
})
export class EduTeacherEvaluateComponent implements OnInit {
  readonly levels = SCORE_LEVELS;
  readonly rows = signal<EduTrainBasic[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly selected = signal<EduTrainBasic | null>(null);
  readonly manager = signal(false);
  private lastSearch: EduTrainBasicSearch = { courseName: '', startDate: '', endDate: '' };

  readonly modalVisible = signal(false);
  readonly readonly = signal(false);
  readonly basic = signal<EduTrainBasic | null>(null);
  readonly summary = signal<EduScoreDistribution[]>([]);
  readonly importErrors = signal<string[]>([]);
  readonly importErrorVisible = signal(false);
  private importTeacher: string | null = null;

  readonly scoresVisible = signal(false);
  readonly scoresTeacher = signal<EduScoreDistribution | null>(null);
  readonly scores = signal<EduTeacherCheck[]>([]);
  /** Bản gốc teacherChakan: điểm trung bình các phiếu đã chấm. */
  readonly average = computed(() => {
    const list = this.scores().map((s) => s.grooming).filter((v): v is number => v !== null && v !== undefined);
    return list.length ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2) : '';
  });

  readonly highlight = (row: EduTrainBasic) => (row.teacherEvalCount ?? 0) > 0;

  constructor(
    private readonly api: EduTrainService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search(this.lastSearch);
  }

  search(criteria: EduTrainBasicSearch): void {
    this.lastSearch = criteria;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getEvaluateList('teacher', criteria).subscribe({
      next: (res) => {
        this.rows.set(res.rows ?? []);
        this.manager.set(!!res.manager);
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  percent(d: EduScoreDistribution, field: string): string {
    const v = (d as unknown as Record<string, number>)[field];
    return d.count > 0 ? `${v}%` : '';
  }

  // ==================== Modal đánh giá / xem ====================

  openEvaluate(row?: EduTrainBasic): void {
    this.open(row ?? this.selected(), false);
  }

  openView(row: EduTrainBasic): void {
    this.open(row, true);
  }

  private open(row: EduTrainBasic | null, readonly: boolean): void {
    if (!row?.basicNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(row);
    this.readonly.set(readonly);
    this.basic.set(row);
    this.loadSummary(row.basicNo, () => this.modalVisible.set(true));
    this.api.getBasic(row.basicNo).subscribe({ next: (b) => this.basic.set(b) });
  }

  private loadSummary(basicNo: string, done?: () => void): void {
    this.api.getTeacherSummary(basicNo).subscribe({
      next: (list) => {
        this.summary.set(list ?? []);
        done?.();
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  /** Bản gốc teacherTSTOChakan: điểm từng học viên cho 1 giảng viên. */
  openScores(d: EduScoreDistribution): void {
    const basicNo = this.basic()?.basicNo;
    if (!basicNo) return;
    this.scoresTeacher.set(d);
    this.api.getTeacherScores(basicNo, d.key).subscribe({
      next: (list) => {
        this.scores.set(list ?? []);
        this.scoresVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  // ==================== Excel ====================

  downloadTemplate(): void {
    writeExcel('TeacherEvaluate_demo', TEMPLATE_HEADERS, [['20000013', 'Name', '5']]);
  }

  /** Bản gốc: autoExcel SQL 160/198 - tỷ lệ các mức điểm theo giảng viên. */
  exportExcel(): void {
    writeExcel(`teacherEvaluate_${this.basic()?.basicNo ?? ''}`, [
      this.i18n.t('alert.pa.pasalarycanshu.shehao', 'Mã nhân viên'),
      this.i18n.t('alert.pa.pasalarycanshu.xingming', 'Họ tên'),
      this.i18n.t('ess.trans.title.postGradeName', 'Chức vụ'),
      this.i18n.t('hr.viewPersonalInfo.title.DEPTNAME', 'Phòng ban'),
      ...SCORE_LEVELS.map((l) => this.i18n.t(l.key, l.fallback)),
    ], this.summary().map((d) => [d.key, d.name ?? '', d.postGradeName ?? '', d.deptName ?? '',
      ...SCORE_LEVELS.map((l) => this.percent(d, l.field))]));
  }

  startImport(teaEmpId: string, input: HTMLInputElement): void {
    this.importTeacher = teaEmpId;
    input.click();
  }

  async onImportFile(event: Event): Promise<void> {
    const file = takeFile(event);
    const basicNo = this.basic()?.basicNo;
    const teaEmpId = this.importTeacher;
    if (!file || !basicNo || !teaEmpId) return;
    try {
      const rows = (await readExcelRows(file)).map((c) => ({ empId: cellText(c[0]), name: cellText(c[1]), score: cellText(c[2]) }));
      if (rows.length === 0) {
        this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
        return;
      }
      this.api.importTeacherScores(basicNo, teaEmpId, rows).subscribe({
        next: (res) => {
          if (res.success) {
            this.message.success(res.message);
            this.loadSummary(basicNo);
            this.search(this.lastSearch);
          } else if (res.errors?.length) {
            this.importErrors.set(res.errors);
            this.importErrorVisible.set(true);
          } else {
            this.message.error(res.message);
          }
        },
        error: (err) => this.message.error(err?.error?.message || this.i18n.t('alert.message.update_fail', 'Sửa thất bại!')),
      });
    } catch {
      this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
    }
  }
}
