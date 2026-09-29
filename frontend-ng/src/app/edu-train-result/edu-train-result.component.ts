import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EduBasicHeaderComponent } from '../edu-common/edu-basic-header.component';
import { EduFile } from '../edu-common/edu-common.model';
import { EduCommonService } from '../edu-common/edu-common.service';
import { EduCourseListComponent } from '../edu-common/edu-course-list.component';
import { cellText, readExcelRows, takeFile, writeExcel } from '../edu-common/edu-excel.util';
import { EduFileAttachComponent } from '../edu-common/edu-file-attach.component';
import { EduImportErrorsComponent } from '../edu-common/edu-import-errors.component';
import {
  EduScoreDistribution,
  EduTrainBasic,
  EduTrainBasicSearch,
  EduTrainResult,
  RESULT_CRITERIA,
  SCORE_LEVELS,
} from '../edu-common/edu-train.model';
import { EduTrainService } from '../edu-common/edu-train.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.trainResult.*). */
const I18N_KEYS = [
  'edu.teacherEvaluate.WEIKAOPING.a', 'edu.teacherEvaluate.YIKAOPING.a', 'edu.trainResult.KAOPINGRENYUAN.a',
  'edu.trainResult.PINGJIAZHE.a', 'edu.trainResult.PEIXUNBAOGAO.a', 'edu.trainResult.PINGJIAJIEGUO.a',
  ...Object.values(RESULT_CRITERIA).map((c) => c.key), ...SCORE_LEVELS.map((l) => l.key),
  'hrm.contract.distinguish', 'hr.viewSuggestion.title.Suggestion', 'ess.viewpersonalpainfo.heji',
  'edu.systemManager.PEIXUNLEIXING.a', 'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'edu.trainArchives.KECHENGMINGCHENGQICI.a',
  'edu.trainArchives.PEIXUNNEIRONG.a', 'edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a', 'edu.planManager.PEIXUNKESHI.a',
  'edu.planManager.QI.a', 'ar.alert.message.excelimport.title.di', 'inct.salesman.eval.result', 'button.sys.view',
  'pa.salary.title.fullInfo', 'alert.pa.pasalarycanshu.shehao', 'alert.pa.pasalarycanshu.xingming', 'empsubject.subjectNm',
  'hrm.recruitManage.START_DATE1', 'hrm.recruitManage.END_DATE1', 'edu.trainAgreement.importErrorTitle', 'hrm.empinfo.upload',
  'ar.viewsummaryparameteritem.title.hour', 'display.mutual.month', 'ar.viewsummaryparameteritem.title.day',
  'common.search', 'common.save', 'common.close', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail',
  'common.quickFilter', 'common.importExcel', 'common.exportExcel', 'common.downloadTemplate', 'common.saveSuccess',
  'alert.message.update_fail',
];

/** Cột file mẫu - giữ nguyên bản gốc (gettrainResultImportDemoLoad / importTrainResultEV). */
const TEMPLATE_HEADERS = ['Evaluator ID (Not null)', 'Evaluator name', 'Course overall satisfaction',
  'Courses are easy to grasp', 'Course length', 'Practical training'];

/**
 * Bản Angular của /edu/traineducation/trainResult (JSP + DWZ, dự án Hanwha_HTSV) - học viên đánh giá khóa học
 * (EDU_TRAIN_RESULT, 4 tiêu chí điểm 1-5). Danh sách: khóa có yêu cầu đánh giá khóa học; người không phải quản lý đào tạo
 * chỉ thấy khóa mình là học viên.
 * - "Chưa/Đã đánh giá" (bản gốc trainResultTSTOInfo): tỷ lệ các mức điểm theo tiêu chí, xem phiếu từng học viên,
 *   import phiếu từ Excel + báo cáo đào tạo (file, APPLY_TYPE eduTrainResult) - thao tác sửa dành cho quản lý đào tạo.
 * - "Xem" (bản gốc alreadyTrainResultInfoSingle): phiếu từng học viên + điểm trung bình + báo cáo + xuất Excel.
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-train-result',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzModalModule, NzTableModule, TranslatePipe, EduCourseListComponent,
    EduBasicHeaderComponent, EduFileAttachComponent, EduImportErrorsComponent],
  templateUrl: './edu-train-result.component.html',
  styleUrl: './edu-train-result.component.css',
})
export class EduTrainResultComponent implements OnInit {
  @ViewChild('etrFiles') private fileAttach?: EduFileAttachComponent;

  readonly levels = SCORE_LEVELS;
  readonly rows = signal<EduTrainBasic[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly selected = signal<EduTrainBasic | null>(null);
  readonly manager = signal(false);
  private lastSearch: EduTrainBasicSearch = { courseName: '', startDate: '', endDate: '' };

  readonly basic = signal<EduTrainBasic | null>(null);
  readonly files = signal<EduFile[]>([]);
  readonly evaluateVisible = signal(false);
  readonly summary = signal<EduScoreDistribution[]>([]);
  readonly savingFiles = signal(false);
  readonly importErrors = signal<string[]>([]);
  readonly importErrorVisible = signal(false);

  readonly detailsVisible = signal(false);
  readonly viewVisible = signal(false);
  readonly details = signal<EduTrainResult[]>([]);
  /** Phiếu đã chấm ít nhất 1 tiêu chí. */
  readonly scoredDetails = computed(() => this.details().filter((d) =>
    d.difficulty !== null || d.contentRich !== null || d.practicability !== null || d.timeModerate !== null));
  /** Bản gốc alreadyTrainResultInfoSingle: trung bình ALLSCORE các phiếu. */
  readonly average = computed(() => {
    const list = this.scoredDetails().map((d) => parseFloat(d.allscore ?? '')).filter((v) => !isNaN(v));
    return list.length ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(0) : '';
  });

  readonly highlight = (row: EduTrainBasic) => (row.resultCount ?? 0) > 0;

  constructor(
    private readonly api: EduTrainService,
    private readonly commonApi: EduCommonService,
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
    this.api.getEvaluateList('result', criteria).subscribe({
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

  criterionLabel(key: string): string {
    const c = RESULT_CRITERIA[key];
    return c ? this.i18n.t(c.key, c.fallback) : key;
  }

  percent(d: EduScoreDistribution, field: string): string {
    const v = (d as unknown as Record<string, number>)[field];
    return d.count > 0 ? `${v}%` : '';
  }

  downloadUrl(f: EduFile): string {
    return this.commonApi.downloadUrl(f.fileNo);
  }

  private prepare(row: EduTrainBasic, done: () => void): void {
    this.selected.set(row);
    this.basic.set(row);
    this.api.getBasic(row.basicNo!).subscribe({ next: (b) => this.basic.set(b) });
    this.loadFiles(row.basicNo!);
    done();
  }

  private loadFiles(basicNo: string): void {
    this.commonApi.getFiles('eduTrainResult', basicNo).subscribe({
      next: (list) => this.files.set(list ?? []),
      error: () => this.files.set([]),
    });
  }

  // ==================== Đánh giá (bản gốc trainResultTSTOInfo) ====================

  openEvaluate(row?: EduTrainBasic): void {
    const target = row ?? this.selected();
    if (!target?.basicNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.prepare(target, () => this.loadSummary(target.basicNo!, () => this.evaluateVisible.set(true)));
  }

  private loadSummary(basicNo: string, done?: () => void): void {
    this.api.getResultSummary(basicNo).subscribe({
      next: (list) => {
        this.summary.set(list ?? []);
        done?.();
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  /** Bản gốc checkTrainResultTSTOInfoPer: điểm từng học viên theo 4 tiêu chí. */
  openDetails(): void {
    this.loadDetails(() => this.detailsVisible.set(true));
  }

  private loadDetails(done: () => void): void {
    const basicNo = this.basic()?.basicNo;
    if (!basicNo) return;
    this.api.getResultDetails(basicNo).subscribe({
      next: (list) => {
        this.details.set(list ?? []);
        done();
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  saveFiles(): void {
    const basicNo = this.basic()?.basicNo;
    if (!basicNo || !this.fileAttach) return;
    this.savingFiles.set(true);
    this.fileAttach.commit(basicNo).subscribe({
      next: () => {
        this.savingFiles.set(false);
        this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.loadFiles(basicNo);
      },
      error: (err) => {
        this.savingFiles.set(false);
        this.message.error(err?.error?.message || this.i18n.t('alert.message.update_fail', 'Sửa thất bại!'));
      },
    });
  }

  // ==================== Xem (bản gốc alreadyTrainResultInfoSingle) ====================

  openView(row: EduTrainBasic): void {
    if (!row.basicNo) return;
    this.prepare(row, () => this.loadDetails(() => this.viewVisible.set(true)));
  }

  // ==================== Excel ====================

  downloadTemplate(): void {
    writeExcel('trainResult_demo_ev', TEMPLATE_HEADERS, [['20000013', 'Name', '5', '5', '5', '5']]);
  }

  /** Bản gốc: autoExcel SQL 161 - phiếu từng học viên. */
  exportDetails(): void {
    writeExcel(`trainResult_${this.basic()?.basicNo ?? ''}`, [
      this.i18n.t('alert.pa.pasalarycanshu.shehao', 'Mã nhân viên'),
      this.i18n.t('edu.trainResult.PINGJIAZHE.a', 'Người đánh giá'),
      this.criterionLabel('DIFFICULTY'), this.criterionLabel('CONTENT_RICH'),
      this.criterionLabel('TIME_MODERATE'), this.criterionLabel('PRACTICABILITY'),
      this.i18n.t('ess.viewpersonalpainfo.heji', 'Tổng'),
      this.i18n.t('hr.viewSuggestion.title.Suggestion', 'Ý kiến'),
    ], this.scoredDetails().map((d) => [d.stuEmpId, d.stuLocalName ?? '', d.difficulty ?? '', d.contentRich ?? '',
      d.timeModerate ?? '', d.practicability ?? '', d.allscore ?? '', d.otherAdvise ?? '']));
  }

  async onImportFile(event: Event): Promise<void> {
    const file = takeFile(event);
    const basicNo = this.basic()?.basicNo;
    if (!file || !basicNo) return;
    try {
      const rows = (await readExcelRows(file)).map((c) => ({
        empId: cellText(c[0]), name: cellText(c[1]), difficulty: cellText(c[2]), contentRich: cellText(c[3]),
        timeModerate: cellText(c[4]), practicability: cellText(c[5]),
      }));
      if (rows.length === 0) {
        this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
        return;
      }
      this.api.importResults(basicNo, rows).subscribe({
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
