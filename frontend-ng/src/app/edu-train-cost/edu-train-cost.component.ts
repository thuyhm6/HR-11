import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EduFile } from '../edu-common/edu-common.model';
import { formatDmy } from '../edu-common/edu-date.util';
import { writeExcel } from '../edu-common/edu-excel.util';
import { EduFileAttachComponent } from '../edu-common/edu-file-attach.component';
import { courseWithPeriod } from '../edu-common/edu-train.model';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { COST_FIELDS, CostField, EduTrainCost } from './edu-train-cost.model';
import { EduTrainCostService } from './edu-train-cost.service';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.trainCostMANAGER.*). */
const I18N_KEYS = [
  'edu.trainCostMANAGER.PEIXUNMINGCHENGQICI.a', 'edu.trainCostMANAGER.YUJIFEIYONG.a', 'edu.trainCostMANAGER.FEIYONGHEJI.a',
  'edu.trainCostMANAGER.RENJUNFEIYONG.a', 'edu.trainCostMANAGER.FEIYONGHEJIRENJUN.a', 'edu.trainCostMANAGER.ZHIJIEJINGFEI.a',
  'edu.trainCostMANAGER.JIANJIEJINGFEI.a', 'edu.trainCostMANAGER.QITAFEIYONG.a', ...COST_FIELDS.map((c) => c.key),
  'edu.systemManager.PEIXUNLEIXING.a', 'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a',
  'edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a', 'edu.planManager.QI.a', 'ar.alert.message.excelimport.title.di',
  'edu.trainCost.editTitle', 'empsubject.subjectNm', 'hrm.recruitManage.START_DATE1', 'hrm.recruitManage.END_DATE1',
  'ar.viewarcardrecord.title.beizhu', 'hr.viewBadArchives.title.FILE', 'hrm.empinfo.upload', 'edu.common.msg.invalidNumber',
  'common.search', 'common.edit', 'common.save', 'common.close', 'common.stt', 'common.noData', 'common.totalRows',
  'common.loadFail', 'common.quickFilter', 'common.exportExcel', 'alert.message.update_fail',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];
const NUMBER_PATTERN = /^\d+(\.\d+)?$/;

/**
 * Bản Angular của /edu/traineducation/trainCostManager (JSP + DWZ, dự án Hanwha_HTSV) - chi phí của từng khóa đào tạo
 * (EDU_COST_MANAGER, tạo tự động khi thêm thông tin cơ bản). Tìm theo tên khóa học / thời gian; Sửa: nhập 8 khoản chi phí
 * + ghi chú + file, tự tính tổng / bình quân mỗi người / chi phí trực tiếp - gián tiếp; xuất Excel danh sách và từng khóa.
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-train-cost',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzInputModule, NzButtonModule, NzModalModule,
    NzAlertModule, NzDatePickerModule, TranslatePipe, EduFileAttachComponent],
  templateUrl: './edu-train-cost.component.html',
  styleUrl: './edu-train-cost.component.css',
})
export class EduTrainCostComponent implements OnInit {
  @ViewChild('etcFiles') private fileAttach?: EduFileAttachComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly costFields = COST_FIELDS;
  readonly rows = signal<EduTrainCost[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly selected = signal<EduTrainCost | null>(null);
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) => [r.trainTypeCodeName, r.courseNameCode, r.impleStartDate, r.impleEndDate]
      .some((v) => (v ?? '').toLowerCase().includes(kw)));
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  searchCourseName = '';
  searchStart: Date | null = null;
  searchEnd: Date | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  form: EduTrainCost | null = null;
  formFiles: EduFile[] = [];

  constructor(
    private readonly api: EduTrainCostService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getList({
      courseName: this.searchCourseName.trim(),
      startDate: formatDmy(this.searchStart),
      endDate: formatDmy(this.searchEnd),
    }).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
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

  courseTitle(r: EduTrainCost): string {
    return courseWithPeriod((k, f) => this.i18n.t(k, f), r.courseNameCode, r.periodTime);
  }

  // ==================== Sửa ====================

  openEditModal(row?: EduTrainCost): void {
    const target = row ?? this.selected();
    if (!target?.costNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(target);
    this.api.getOne(target.costNo).subscribe({
      next: (dto) => {
        this.form = { ...dto };
        this.formFiles = dto.files ?? [];
        this.modalVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  private sum(fields: CostField[]): number {
    const f = this.form;
    if (!f) return 0;
    return fields.reduce((s, k) => {
      const n = parseFloat(String(f[k] ?? ''));
      return s + (isNaN(n) ? 0 : n);
    }, 0);
  }

  /** Bản gốc changeCost(): tổng 8 khoản / số học viên (làm tròn). */
  get total(): number {
    return this.sum(COST_FIELDS.map((c) => c.field));
  }

  get perPerson(): number {
    return Math.round(this.total / Math.max(this.form?.totalCount ?? 1, 1));
  }

  get direct(): number {
    return this.sum(COST_FIELDS.filter((c) => c.direct).map((c) => c.field));
  }

  saveForm(): void {
    const f = this.form;
    if (!f) return;
    const invalid = COST_FIELDS.some((c) => {
      const v = String(f[c.field] ?? '').trim();
      return v !== '' && !NUMBER_PATTERN.test(v);
    });
    if (invalid) {
      this.message.warning(this.i18n.t('edu.common.msg.invalidNumber', 'Giá trị số không hợp lệ!'));
      return;
    }
    const payload: EduTrainCost = { ...f, remark: (f.remark ?? '').trim() };
    COST_FIELDS.forEach((c) => (payload[c.field] = String(f[c.field] ?? '').trim()));
    delete payload.files;
    const failText = this.i18n.t('alert.message.update_fail', 'Sửa thất bại!');
    this.saving.set(true);
    let okMessage = '';
    this.api.save(payload).pipe(
      switchMap((res) => {
        if (!res.success) return throwError(() => ({ error: res }));
        okMessage = res.message;
        return this.fileAttach ? this.fileAttach.commit(f.costNo) : of(res);
      }),
    ).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(okMessage);
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || failText);
        if (okMessage) this.search();
      },
    });
  }

  // ==================== Excel ====================

  private costHeaders(): string[] {
    return [
      this.i18n.t('edu.systemManager.PEIXUNLEIXING.a', 'Loại hình'),
      this.i18n.t('edu.trainCostMANAGER.PEIXUNMINGCHENGQICI.a', 'Tên đào tạo (lần)'),
      this.i18n.t('edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a', 'Thời gian'),
      this.i18n.t('edu.trainCostMANAGER.YUJIFEIYONG.a', 'Dự tính chi phí'),
      ...COST_FIELDS.map((c) => this.i18n.t(c.key, c.fallback)),
      this.i18n.t('edu.trainCostMANAGER.FEIYONGHEJI.a', 'Tổng chi phí'),
      this.i18n.t('edu.trainCostMANAGER.RENJUNFEIYONG.a', 'Bình quân mỗi người'),
      this.i18n.t('ar.viewarcardrecord.title.beizhu', 'Ghi chú'),
    ];
  }

  private costRow(r: EduTrainCost): unknown[] {
    return [r.trainTypeCodeName ?? '', this.courseTitle(r), `${r.impleStartDate ?? ''} ~ ${r.impleEndDate ?? ''}`, r.budget ?? '',
      ...COST_FIELDS.map((c) => r[c.field] ?? ''), r.allCost ?? '', r.avgCost ?? '', r.remark ?? ''];
  }

  /** Bản gốc: autoExcel SQL 162 - danh sách chi phí theo điều kiện tìm kiếm. */
  exportList(): void {
    writeExcel('trainCostManager', this.costHeaders(), this.filteredRows().map((r) => this.costRow(r)));
  }

  /** Bản gốc: autoExcel SQL 163 - chi phí của 1 khóa. */
  exportOne(): void {
    if (this.form) writeExcel(`trainCost_${this.form.costNo}`, this.costHeaders(), [this.costRow(this.form)]);
  }
}
