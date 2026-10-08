import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaPayPeriodComponent } from '../pa-salary-check/pa-pay-period.component';
import {
  EMP_COLUMNS,
  PaCheckColumn,
  PaMonthPersonChangeRow,
  PaMonthPersonCountRow,
  PaSalaryCheckRow,
  apiError,
  compareBy,
} from '../pa-salary-check/pa-salary-check.model';
import { PaSalaryCheckService } from '../pa-salary-check/pa-salary-check.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Cột danh sách NV tăng/giảm (bản gốc monthPersonCountInfoSonList.jsp currentIndex = 0). */
const EMP_LIST_COLUMNS: PaCheckColumn<PaSalaryCheckRow>[] = [
  ...EMP_COLUMNS.slice(0, 4),
  { field: 'postGradeName', key: 'hrm.contract.Rank', fallback: 'Chức vụ', width: '120px' },
  { field: 'positionName', key: 'ess.trans.title.dutyName', fallback: 'Chức danh', width: '130px' },
  { field: 'mainBusiness', key: 'org.title.MAIN_BUSINESS', fallback: 'Công việc', width: '130px' },
];
const DATE_STARTED_COLUMN: PaCheckColumn<PaSalaryCheckRow> =
  { field: 'dateStarted', key: 'ess.empInfo.date_of_agency', fallback: 'Ngày vào làm', width: '110px' };
const DATE_LEFT_COLUMN: PaCheckColumn<PaSalaryCheckRow> =
  { field: 'dateLeft', key: 'pa.monthPersonCountInfoSonList.TUISHERIQI.b', fallback: 'Ngày thôi việc', width: '110px' };

/** Mã nhóm backend trả về -> key messages.properties (bản gốc hardcode tiếng Việt trong SQL). */
const CATEGORY_KEYS: Record<string, { key: string; fallback: string }> = {
  RECRUIT: { key: 'hrm.contract.recruit', fallback: 'Tuyển dụng' },
  RESIGN: { key: 'hrm.empinfo.RESIGN', fallback: 'Thôi việc' },
  OTHER: { key: 'ess.infoApply.other', fallback: 'Khác' },
};

const I18N_KEYS = [
  ...EMP_LIST_COLUMNS.map((c) => c.key), DATE_STARTED_COLUMN.key, DATE_LEFT_COLUMN.key,
  ...Object.values(CATEGORY_KEYS).map((c) => c.key),
  'pa.monthPersonCountInfoList.GONGZIQUFEN.b', 'display.emp.ben.or.benhs68', 'pa.monthPersonCountInfoList.DANGYUE.b',
  'pa.monthPersonCountInfoList.ZENGJIANRENYUAN.b', 'pa.monthPersonCountInfoList.ZENGJIANRENYUANQUFEN.b',
  'pa.monthPersonCountInfoList.ZENGJIARENYUAN.b', 'pa.monthPersonCountInfoList.JIANSHAORENYUANQUFEN.b',
  'pa.monthPersonCountInfoList.JIANSHAORENYUAN.b', 'pa.monthPersonCountInfoList.XIANGXIRENYUANLIEBIAO.b',
  'pa.salaryCheck.msgSelectPayDate', 'pa.salaryCheck.clickCountHint',
  'public.title.search', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/**
 * Hiện trạng lương theo tháng - bản Angular của /pa/workManagement/monthPersonCountInfoList (JSP + DWZ, dự án Hanwha_HTSV).
 * Chọn phân loại lương + 2 ngày phát -> số NV 2 kỳ theo phân loại lương, nhóm NV tăng / giảm; bấm số lượng của 1 nhóm
 * -> danh sách NV bên dưới (bản gốc tab monthPersonCountInfoSonList?currentIndex=0).
 */
@Component({
  selector: 'app-month-person-count-info-list',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzButtonModule, NzTableModule, TranslatePipe, PaPayPeriodComponent],
  templateUrl: './month-person-count-info-list.component.html',
  styleUrl: './month-person-count-info-list.component.css',
})
export class MonthPersonCountInfoListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly counts = signal<PaMonthPersonCountRow[]>([]);
  readonly increases = signal<PaMonthPersonChangeRow[]>([]);
  readonly decreases = signal<PaMonthPersonChangeRow[]>([]);
  readonly loading = signal(false);
  readonly searched = signal(false);

  readonly empRows = signal<PaSalaryCheckRow[]>([]);
  readonly empLoading = signal(false);
  /** add = NV tăng (cột Ngày vào làm) | delete = NV giảm (cột Ngày thôi việc) - bản gốc strFlag. */
  readonly empFlag = signal<'add' | 'delete' | null>(null);
  empColumns: PaCheckColumn<PaSalaryCheckRow>[] = [...EMP_LIST_COLUMNS, DATE_STARTED_COLUMN];
  empSortFns = this.buildSortFns();

  salaryDistinNo: string | null = null;
  payDate: string | null = null;
  payDatePro: string | null = null;
  pageIndex = 1;
  pageSize = 50;

  constructor(
    private readonly api: PaSalaryCheckService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
  }

  search(): void {
    if (!this.salaryDistinNo || !this.payDate || !this.payDatePro) {
      this.message.warning(this.i18n.t('pa.salaryCheck.msgSelectPayDate', 'Vui lòng chọn phân loại lương và ngày phát!'));
      return;
    }
    this.loading.set(true);
    this.clearEmployees();
    this.api.getMonthPerson({ salaryDistinNo: this.salaryDistinNo, payDate: this.payDate, payDatePro: this.payDatePro }).subscribe({
      next: (res) => {
        this.counts.set(res?.counts ?? []);
        this.increases.set(res?.increases ?? []);
        this.decreases.set(res?.decreases ?? []);
        this.searched.set(true);
        this.loading.set(false);
      },
      error: (err) => {
        this.counts.set([]);
        this.increases.set([]);
        this.decreases.set([]);
        this.loading.set(false);
        this.message.error(apiError(err) || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** Bản gốc: số NV tăng giảm = |tháng này - tháng trước|. */
  changeCount(row: PaMonthPersonCountRow): number {
    return Math.abs((Number(row.curCount) || 0) - (Number(row.prevCount) || 0));
  }

  categoryLabel(category: string): string {
    const c = CATEGORY_KEYS[category] ?? CATEGORY_KEYS['OTHER'];
    return this.i18n.t(c.key, c.fallback);
  }

  /** Bản gốc changeSearcha(obj, strFlag) -> monthPersonCountInfoSonList?PERSON_ID_ID=...&strFlag=... */
  showEmployees(row: PaMonthPersonChangeRow, flag: 'add' | 'delete'): void {
    this.empFlag.set(flag);
    this.empColumns = [...EMP_LIST_COLUMNS, flag === 'add' ? DATE_STARTED_COLUMN : DATE_LEFT_COLUMN];
    this.empSortFns = this.buildSortFns();
    this.empRows.set([]);
    if (!row.personIds?.length) return;
    this.empLoading.set(true);
    this.api.getEmployeesByPersonIds(row.personIds).subscribe({
      next: (rows) => {
        this.empRows.set(rows ?? []);
        this.pageIndex = 1;
        this.empLoading.set(false);
      },
      error: (err) => {
        this.empLoading.set(false);
        this.message.error(apiError(err) || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  title(c: PaCheckColumn<PaSalaryCheckRow>): string {
    return this.i18n.t(c.key, c.fallback);
  }

  private clearEmployees(): void {
    this.empRows.set([]);
    this.empFlag.set(null);
  }

  private buildSortFns(): Map<keyof PaSalaryCheckRow, (a: PaSalaryCheckRow, b: PaSalaryCheckRow) => number> {
    return new Map(this.empColumns.map((c) => [c.field, compareBy<PaSalaryCheckRow>(c.field)]));
  }
}
