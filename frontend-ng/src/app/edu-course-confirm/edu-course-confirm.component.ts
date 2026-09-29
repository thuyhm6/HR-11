import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { EduApplyFilterComponent } from '../edu-common/edu-apply-filter.component';
import { CONFIRM_FLAGS, EduApplyRow, EduApplySearch } from '../edu-common/edu-apply.model';
import { EduApplyService } from '../edu-common/edu-apply.service';
import {
  APPLY_TABLE_I18N_KEYS,
  applyClassHour,
  applyCourseTitle,
  applyFlagColor,
  applyFlagLabel,
  currentMonthSearch,
  matchApplyRow,
} from '../edu-common/edu-apply.util';
import { EduSyllabusViewComponent } from '../edu-common/edu-syllabus-view.component';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

const I18N_KEYS = [
  ...APPLY_TABLE_I18N_KEYS, 'ess.humanConfirm.title.confirmStatus', 'hr.viewPersonalInfo.title.AFFIRM',
  'edu.courseConfirm.confirmSelected', 'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'alert.message.update_fail',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500];

/**
 * Bản Angular của /edu/traineducation/courseConfirm (JSP + DWZ, dự án Hanwha_HTSV) - quản lý đào tạo xác nhận các đơn đăng
 * ký đã được phê duyệt: xác nhận -> nhân viên trở thành học viên của khóa (kèm phiếu kết quả / đánh giá giảng viên);
 * chờ / từ chối -> bỏ học viên đã thêm từ đơn. Thời gian mặc định = tháng hiện tại (bản gốc).
 */
@Component({
  selector: 'app-edu-course-confirm',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzInputModule, NzButtonModule, NzSelectModule, NzTagModule,
    NzAlertModule, NzModalModule, TranslatePipe, EduApplyFilterComponent, EduSyllabusViewComponent],
  templateUrl: './edu-course-confirm.component.html',
  styleUrl: './edu-course-confirm.component.css',
})
export class EduCourseConfirmComponent implements OnInit {
  @ViewChild('eccfSyllabus') private syllabusView?: EduSyllabusViewComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly confirmOptions = CONFIRM_FLAGS;
  readonly rows = signal<EduApplyRow[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly checked = signal<Set<string>>(new Set());
  readonly filteredRows = computed(() => this.rows().filter((r) => matchApplyRow(r, this.quickFilter())));
  readonly checkableRows = computed(() => this.filteredRows().filter((r) => this.checkable(r)));
  readonly allChecked = computed(() => this.checkableRows().length > 0 && this.checkableRows().every((r) => this.checked().has(r.applyNo)));
  readonly someChecked = computed(() => !this.allChecked() && this.checkableRows().some((r) => this.checked().has(r.applyNo)));

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
    this.api.getConfirmRows(search).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.checked.set(new Set());
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

  /** Bản gốc: chọn để xác nhận hàng loạt khi đã phê duyệt và đang chờ xác nhận. */
  checkable(r: EduApplyRow): boolean {
    return r.applyFlag === '2' && (r.confirmFlag ?? '1') === '1';
  }

  /** Bản gốc: đổi trạng thái xác nhận khi đơn đã được phê duyệt. */
  approved(r: EduApplyRow): boolean {
    return r.applyFlag === '2';
  }

  toggle(r: EduApplyRow, value: boolean): void {
    const next = new Set(this.checked());
    if (value) next.add(r.applyNo);
    else next.delete(r.applyNo);
    this.checked.set(next);
  }

  toggleAll(value: boolean): void {
    const next = new Set(this.checked());
    this.checkableRows().forEach((r) => (value ? next.add(r.applyNo) : next.delete(r.applyNo)));
    this.checked.set(next);
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

  showSyllabus(r: EduApplyRow): void {
    this.syllabusView?.open(r.planNo);
  }

  /** Bản gốc confirmtongguoFIM(): xác nhận các đơn đã chọn. */
  confirmSelected(): void {
    const applyNos = [...this.checked()];
    if (applyNos.length === 0) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.courseConfirm.confirmSelected', 'Xác nhận các đơn đã chọn?')} (${applyNos.length})`,
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzMaskClosable: true,
      nzOnOk: () => this.save(applyNos, '2'),
    });
  }

  /** Bản gốc changeConfirm(): đổi trạng thái xác nhận 1 đơn ngay khi chọn. */
  changeFlag(r: EduApplyRow, flag: string): void {
    if (flag === r.confirmFlag) return;
    this.save([r.applyNo], flag);
  }

  private save(applyNos: string[], flag: string): void {
    this.saving.set(true);
    this.api.updateConfirmFlag(applyNos, flag).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) this.message.success(res.message);
        else this.message.error(res.message);
        this.search(this.lastSearch);
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || this.i18n.t('alert.message.update_fail', 'Sửa thất bại!'));
        this.search(this.lastSearch);
      },
    });
  }
}
