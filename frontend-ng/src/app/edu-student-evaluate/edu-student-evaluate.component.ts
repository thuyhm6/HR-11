import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EduBasicHeaderComponent } from '../edu-common/edu-basic-header.component';
import { EduCourseListComponent } from '../edu-common/edu-course-list.component';
import { EduImportErrorsComponent } from '../edu-common/edu-import-errors.component';
import { cellText, readExcelRows, takeFile, writeExcel } from '../edu-common/edu-excel.util';
import { EduStudentScore, EduTrainBasic, EduTrainBasicSearch } from '../edu-common/edu-train.model';
import { EduTrainService } from '../edu-common/edu-train.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.studentEvaluate.*). */
const I18N_KEYS = [
  'edu.studentEvaluate.KAOPING.a', 'edu.studentEvaluate.QINGXIANTIANJIAKAOSHICHENGJI.a', 'edu.studentEvaluate.KAOSHICHENGJI.a',
  'edu.systemManager.PEIXUNLEIXING.a', 'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'edu.trainArchives.KECHENGMINGCHENGQICI.a',
  'edu.trainArchives.PEIXUNNEIRONG.a', 'edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a', 'edu.planManager.PEIXUNKESHI.a',
  'edu.planManager.QI.a', 'ar.alert.message.excelimport.title.di', 'inct.salesman.eval.result', 'button.sys.view',
  'pa.salary.title.fullInfo', 'alert.pa.pasalarycanshu.shehao', 'alert.pa.pasalarycanshu.xingming',
  'ar.attendanceView.viewNoSwipingCard.deptName', 'ess.trans.title.postGradeName', 'empsubject.subjectNm',
  'hrm.recruitManage.START_DATE1', 'hrm.recruitManage.END_DATE1', 'edu.trainAgreement.importErrorTitle',
  'edu.evaluate.msg.invalidScore', 'ar.viewsummaryparameteritem.title.hour', 'display.mutual.month',
  'ar.viewsummaryparameteritem.title.day', 'common.search', 'common.save', 'common.close', 'common.stt', 'common.noData',
  'common.totalRows', 'common.loadFail', 'common.quickFilter', 'common.importExcel', 'common.exportExcel',
  'common.downloadTemplate', 'alert.message.update_fail',
];

/** Cột file Excel import/mẫu - giữ nguyên file mẫu bản gốc (getStudentEvaList / importStudentEvaluate). */
const TEMPLATE_HEADERS = ['ID(Not null)', 'Name', 'Examination results'];
const SCORE_PATTERN = /^(100|[1-9]?\d)(\.\d+)?$/;

/**
 * Bản Angular của /edu/traineducation/studentEvaluate (JSP + DWZ, dự án Hanwha_HTSV) - giảng viên chấm điểm học viên
 * (EDU_FREE_EMPLOYEE.EVA_RESULT). Danh sách: khóa có yêu cầu đánh giá học viên; người không phải quản lý đào tạo chỉ thấy
 * khóa mình là giảng viên đánh giá. "Đánh giá": nhập điểm 0-100 / import Excel theo file mẫu cũ / xuất Excel.
 * "Xem" (khóa đã có điểm): xem điểm chỉ đọc. Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-student-evaluate',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzModalModule, NzTableModule, NzInputModule, TranslatePipe,
    EduCourseListComponent, EduBasicHeaderComponent, EduImportErrorsComponent],
  templateUrl: './edu-student-evaluate.component.html',
  styleUrl: './edu-student-evaluate.component.css',
})
export class EduStudentEvaluateComponent implements OnInit {
  readonly rows = signal<EduTrainBasic[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly selected = signal<EduTrainBasic | null>(null);
  private lastSearch: EduTrainBasicSearch = { courseName: '', startDate: '', endDate: '' };

  readonly modalVisible = signal(false);
  readonly readonly = signal(false);
  readonly saving = signal(false);
  readonly basic = signal<EduTrainBasic | null>(null);
  readonly students = signal<EduStudentScore[]>([]);
  readonly importErrors = signal<string[]>([]);
  readonly importErrorVisible = signal(false);
  /** Điểm đang nhập theo FREE_NO. */
  scores: Record<string, string> = {};

  readonly highlight = (row: EduTrainBasic) => (row.studentEvalCount ?? 0) > 0;

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
    this.api.getEvaluateList('student', criteria).subscribe({
      next: (res) => {
        this.rows.set(res.rows ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
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
    this.loadStudents(row.basicNo, () => this.modalVisible.set(true));
    this.api.getBasic(row.basicNo).subscribe({ next: (b) => this.basic.set(b) });
  }

  private loadStudents(basicNo: string, done?: () => void): void {
    this.api.getStudents(basicNo).subscribe({
      next: (list) => {
        this.students.set(list ?? []);
        this.scores = {};
        (list ?? []).forEach((s) => (this.scores[s.freeNo] = s.evaResult ?? ''));
        done?.();
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  save(): void {
    const basicNo = this.basic()?.basicNo;
    if (!basicNo) return;
    const rows = this.students().map((s) => ({ freeNo: s.freeNo, evaResult: String(this.scores[s.freeNo] ?? '').trim() }));
    if (rows.every((r) => !r.evaResult)) {
      this.message.warning(this.i18n.t('edu.studentEvaluate.QINGXIANTIANJIAKAOSHICHENGJI.a', 'Thêm điểm số sau đó lưu!'));
      return;
    }
    if (rows.some((r) => r.evaResult && !SCORE_PATTERN.test(r.evaResult))) {
      this.message.warning(this.i18n.t('edu.evaluate.msg.invalidScore', 'Điểm số phải từ 0 đến 100!'));
      return;
    }
    const failText = this.i18n.t('alert.message.update_fail', 'Sửa thất bại!');
    this.saving.set(true);
    this.api.saveStudentScores(basicNo, rows).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message);
          this.modalVisible.set(false);
          this.search(this.lastSearch);
        } else {
          this.message.error(res.message || failText);
        }
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || failText);
      },
    });
  }

  // ==================== Excel ====================

  downloadTemplate(): void {
    writeExcel('studentEva_demo', TEMPLATE_HEADERS, [['20000013', 'Name', '90']]);
  }

  /** Bản gốc: autoExcel SQL 157 - danh sách học viên + điểm của khóa. */
  exportExcel(): void {
    writeExcel(`studentEvaluate_${this.basic()?.basicNo ?? ''}`, [
      this.i18n.t('alert.pa.pasalarycanshu.shehao', 'Mã nhân viên'),
      this.i18n.t('alert.pa.pasalarycanshu.xingming', 'Họ tên'),
      this.i18n.t('ar.attendanceView.viewNoSwipingCard.deptName', 'Phòng ban'),
      this.i18n.t('ess.trans.title.postGradeName', 'Chức vụ'),
      this.i18n.t('edu.studentEvaluate.KAOSHICHENGJI.a', 'Điểm số'),
    ], this.students().map((s) => [s.empId, s.localName, s.deptName ?? '', s.postGradeName ?? '', this.scores[s.freeNo] ?? '']));
  }

  async onImportFile(event: Event): Promise<void> {
    const file = takeFile(event);
    const basicNo = this.basic()?.basicNo;
    if (!file || !basicNo) return;
    try {
      const rows = (await readExcelRows(file)).map((c) => ({ empId: cellText(c[0]), name: cellText(c[1]), score: cellText(c[2]) }));
      if (rows.length === 0) {
        this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
        return;
      }
      this.api.importStudentScores(basicNo, rows).subscribe({
        next: (res) => {
          if (res.success) {
            this.message.success(res.message);
            this.loadStudents(basicNo);
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
