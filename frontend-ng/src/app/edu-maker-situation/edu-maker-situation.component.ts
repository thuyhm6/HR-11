import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { EduApplyFilterComponent } from '../edu-common/edu-apply-filter.component';
import { APPLY_FLAGS, EduApplyRow, EduApplySearch } from '../edu-common/edu-apply.model';
import { EduApplyService } from '../edu-common/edu-apply.service';
import {
  APPLY_TABLE_I18N_KEYS,
  applyClassHour,
  applyCourseTitle,
  applyFlagColor,
  applyFlagLabel,
  confirmFlagColor,
  confirmFlagLabel,
  currentMonthSearch,
  matchApplyRow,
} from '../edu-common/edu-apply.util';
import { EduSyllabusViewComponent } from '../edu-common/edu-syllabus-view.component';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

const I18N_KEYS = [
  ...APPLY_TABLE_I18N_KEYS, 'ess.infoApply.confirm_status', 'hrm.empinfo.PERSON_NUMBER', 'ess.affirmApply.title.quxiaoshenqing',
  'edu.makerSituationHUB.QUEDINGQUXIAO.a', 'inct.salesman.button.cancelImport', 'alert.message.delete_fail',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500];

/**
 * Bản Angular của /edu/traineducation/makerSituation (JSP + DWZ, dự án Hanwha_HTSV) - tình hình đơn đăng ký khóa đào tạo:
 * nhân viên xem đơn của mình, quản lý đào tạo xem đơn của mọi người (thay mã PERSON_ID hard-code của bản gốc, có thêm
 * điều kiện phòng ban / nhân viên); trạng thái phê duyệt, xác nhận; hủy đơn chưa được phê duyệt. Thời gian mặc định = tháng
 * hiện tại (bản gốc).
 */
@Component({
  selector: 'app-edu-maker-situation',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzInputModule, NzButtonModule, NzTagModule, NzAlertModule,
    NzModalModule, TranslatePipe, EduApplyFilterComponent, EduSyllabusViewComponent],
  templateUrl: './edu-maker-situation.component.html',
  styleUrl: './edu-maker-situation.component.css',
})
export class EduMakerSituationComponent implements OnInit {
  @ViewChild('emstSyllabus') private syllabusView?: EduSyllabusViewComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly filterOptions = APPLY_FLAGS;
  readonly rows = signal<EduApplyRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  /** Quản lý đào tạo (xem đơn của mọi người) - biết sau lần tải đầu tiên; bộ lọc hiển thị sau đó. */
  readonly manager = signal(false);
  readonly initialized = signal(false);
  readonly filteredRows = computed(() => this.rows().filter((r) => matchApplyRow(r, this.quickFilter())));

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  private lastSearch: EduApplySearch = currentMonthSearch();

  constructor(
    private readonly api: EduApplyService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search(this.lastSearch);
  }

  search(search: EduApplySearch): void {
    this.lastSearch = search;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getSituation(search).subscribe({
      next: (res) => {
        this.manager.set(!!res?.manager);
        this.rows.set(res?.rows ?? []);
        this.pageIndex = 1;
        this.loading.set(false);
        this.initialized.set(true);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
        this.initialized.set(true);
      },
    });
  }

  onQuickFilterChange(value: string): void {
    this.quickFilter.set(value);
    this.pageIndex = 1;
  }

  courseTitle(r: EduApplyRow): string {
    return applyCourseTitle(this.i18n, r);
  }

  classHour(r: EduApplyRow): string {
    return applyClassHour(this.i18n, r);
  }

  makerStatus(r: EduApplyRow): string {
    return applyFlagLabel(this.i18n, r.applyFlag);
  }

  makerColor(r: EduApplyRow): string {
    return applyFlagColor(r.applyFlag);
  }

  confirmStatus(r: EduApplyRow): string {
    return confirmFlagLabel(this.i18n, r.confirmFlag);
  }

  confirmColor(r: EduApplyRow): string {
    return confirmFlagColor(r.confirmFlag);
  }

  showSyllabus(r: EduApplyRow): void {
    this.syllabusView?.open(r.planNo);
  }

  /** Bản gốc: hủy được khi đơn chưa phê duyệt (APPLY_FLAG = 1); chỉ người đăng ký hoặc quản lý đào tạo. */
  cancelable(r: EduApplyRow): boolean {
    return r.applyFlag === '1' && (r.confirmFlag ?? '1') === '1' && (r.mine || this.manager());
  }

  cancel(r: EduApplyRow): void {
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.makerSituationHUB.QUEDINGQUXIAO.a', 'Đồng ý hủy bỏ không?')} ${this.courseTitle(r)}`,
      nzOkDanger: true,
      nzOkText: this.i18n.t('inct.salesman.button.cancelImport', 'Hủy bỏ'),
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzMaskClosable: true,
      nzOnOk: () => this.doCancel(r),
    });
  }

  private doCancel(r: EduApplyRow): void {
    this.api.cancel(r.applyNo).subscribe({
      next: (res) => {
        if (res.success) this.message.success(res.message);
        else this.message.error(res.message);
        this.search(this.lastSearch);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('alert.message.delete_fail', 'Xóa thất bại!')),
    });
  }
}
