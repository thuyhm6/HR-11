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
import { EduApplyFilterComponent } from '../edu-common/edu-apply-filter.component';
import { APPLY_FLAGS, EduApplyRow, EduApplySearch } from '../edu-common/edu-apply.model';
import { EduApplyService } from '../edu-common/edu-apply.service';
import { APPLY_TABLE_I18N_KEYS, applyClassHour, applyCourseTitle, matchApplyRow } from '../edu-common/edu-apply.util';
import { EduSyllabusViewComponent } from '../edu-common/edu-syllabus-view.component';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

/** Lựa chọn khi phê duyệt (bản gốc courseMaker.jsp: Chưa duyệt / Duyệt / Từ chối). */
const MAKER_OPTIONS = [
  { value: '1', key: 'ess.trans.title.notAffirmed', fallback: 'Chưa duyệt' },
  { value: '2', key: 'ess.trans.title.pass', fallback: 'Duyệt' },
  { value: '0', key: 'ess.trans.title.reject', fallback: 'Từ chối' },
];

const I18N_KEYS = [
  ...APPLY_TABLE_I18N_KEYS, ...MAKER_OPTIONS.map((o) => o.key), 'ess.trans.title.affirmStatus', 'hrm.contractInfo.ADOPT',
  'edu.courseMaker.confirmPass', 'edu.courseMaker.confirmReject', 'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a',
  'pa.salary.canShu.caozuo_fail',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500];

/**
 * Bản Angular của /edu/traineducation/courseMaker (JSP + DWZ, dự án Hanwha_HTSV) - người phê duyệt xem các đơn đăng ký
 * khóa đào tạo mình được chọn làm người duyệt; duyệt nhiều đơn cùng lúc hoặc đổi trạng thái từng đơn. Chỉ đơn chưa được
 * quản lý đào tạo xác nhận mới sửa được (bản gốc CONFIRM_FLAG = 1).
 */
@Component({
  selector: 'app-edu-course-maker',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzInputModule, NzButtonModule, NzSelectModule,
    NzAlertModule, NzModalModule, TranslatePipe, EduApplyFilterComponent, EduSyllabusViewComponent],
  templateUrl: './edu-course-maker.component.html',
  styleUrl: './edu-course-maker.component.css',
})
export class EduCourseMakerComponent implements OnInit {
  @ViewChild('ecmkSyllabus') private syllabusView?: EduSyllabusViewComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly filterOptions = APPLY_FLAGS;
  readonly makerOptions = MAKER_OPTIONS;
  readonly rows = signal<EduApplyRow[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly checked = signal<Set<string>>(new Set());
  readonly filteredRows = computed(() => this.rows().filter((r) => matchApplyRow(r, this.quickFilter())));
  readonly editableRows = computed(() => this.filteredRows().filter((r) => this.editable(r)));
  readonly allChecked = computed(() => this.editableRows().length > 0 && this.editableRows().every((r) => this.checked().has(r.applyNo)));
  readonly someChecked = computed(() => !this.allChecked() && this.editableRows().some((r) => this.checked().has(r.applyNo)));

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  private lastSearch: EduApplySearch = {};

  constructor(
    private readonly api: EduApplyService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search({});
  }

  search(search: EduApplySearch): void {
    this.lastSearch = search;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getMakerRows(search).subscribe({
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

  /** Chỉ sửa được khi quản lý đào tạo chưa xác nhận (bản gốc CONFIRM_FLAG = 1). */
  editable(r: EduApplyRow): boolean {
    return (r.confirmFlag ?? '1') === '1';
  }

  toggle(r: EduApplyRow, value: boolean): void {
    const next = new Set(this.checked());
    if (value) next.add(r.applyNo);
    else next.delete(r.applyNo);
    this.checked.set(next);
  }

  toggleAll(value: boolean): void {
    const next = new Set(this.checked());
    this.editableRows().forEach((r) => (value ? next.add(r.applyNo) : next.delete(r.applyNo)));
    this.checked.set(next);
  }

  courseTitle(r: EduApplyRow): string {
    return applyCourseTitle(this.i18n, r);
  }

  classHour(r: EduApplyRow): string {
    return applyClassHour(this.i18n, r);
  }

  showSyllabus(r: EduApplyRow): void {
    this.syllabusView?.open(r.planNo);
  }

  /** Bản gốc makertongguo(): duyệt các đơn đã chọn; thêm "Từ chối" hàng loạt. */
  updateSelected(flag: '2' | '0'): void {
    const applyNos = [...this.checked()];
    if (applyNos.length === 0) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    const content = flag === '2'
      ? this.i18n.t('edu.courseMaker.confirmPass', 'Duyệt các đơn đã chọn?')
      : this.i18n.t('edu.courseMaker.confirmReject', 'Từ chối các đơn đã chọn?');
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${content} (${applyNos.length})`,
      nzOkDanger: flag === '0',
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzMaskClosable: true,
      nzOnOk: () => this.save(applyNos, flag),
    });
  }

  /** Bản gốc changeMaker(): đổi trạng thái 1 đơn ngay khi chọn. */
  changeFlag(r: EduApplyRow, flag: string): void {
    if (flag === r.applyFlag) return;
    this.save([r.applyNo], flag);
  }

  private save(applyNos: string[], flag: string): void {
    this.saving.set(true);
    this.api.updateApplyFlag(applyNos, flag).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) this.message.success(res.message);
        else this.message.error(res.message);
        this.search(this.lastSearch);
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || this.i18n.t('pa.salary.canShu.caozuo_fail', 'Thao tác thất bại!'));
        this.search(this.lastSearch);
      },
    });
  }
}
