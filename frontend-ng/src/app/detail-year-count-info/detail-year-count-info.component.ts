import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ChangeUserService } from '../change-user/change-user.service';
import { EmployeeSearchDto } from '../change-user/change-user.model';
import {
  PAY_DATE_COLUMN,
  PaSalaryDetailColumn,
  PaSalaryDetailDto,
  PaSalaryDetailItemsQuery,
  SALARY_DETAIL_COLUMNS,
  compareSalaryDetail,
} from '../detail-month-count-info/detail-month-count-info.model';
import { PaSalaryDetailService } from '../detail-month-count-info/detail-month-count-info.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaSalaryDetailItemsComponent } from '../pa-salary-detail-items/pa-salary-detail-items.component';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

const COLUMNS: PaSalaryDetailColumn[] = [PAY_DATE_COLUMN, ...SALARY_DETAIL_COLUMNS];

const I18N_KEYS = [
  ...COLUMNS.map((c) => c.key),
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'hrm.empinfo.workexp.selectEmp', 'hrm.empinfo.pleaseSelectEmp',
  'pa.detailYearCountInfoLeft.GONGZIQIJIAN.b', 'pa.salaryDetail.msgSelectPeriod',
  'public.title.search', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/** Date -> 'MM/YYYY' (định dạng tham số của bản gốc, WdatePicker dateFmt 'MM/yyyy'). */
function toMonthText(d: Date): string {
  return `${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

/**
 * Lương năm chi tiết - bản Angular của /pa/workManagement/detailYearCountInfoLeft (JSP + DWZ, dự án Hanwha_HTSV).
 * Chọn 1 nhân viên + khoảng tháng -> bên trái là các kỳ lương của nhân viên đó; bấm 1 dòng -> bên phải hiển thị chi tiết
 * hạng mục lương luỹ kế (bản gốc detailYearCountInfoRight?pFrom=year).
 * Popup chọn nhân viên (viewEmpForPopList) của bản gốc thay bằng nz-autocomplete, gọi lại API tìm nhân viên sẵn có
 * của ChangeUserService (/hrm/empinfo/api/employee/search).
 */
@Component({
  selector: 'app-detail-year-count-info',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzInputModule, NzAutocompleteModule, NzDatePickerModule,
    NzButtonModule, NzTableModule, TranslatePipe, PaSalaryDetailItemsComponent],
  templateUrl: './detail-year-count-info.component.html',
  styleUrl: './detail-year-count-info.component.css',
})
export class DetailYearCountInfoComponent implements OnInit, OnDestroy {
  readonly columns = COLUMNS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly sortFns = new Map(COLUMNS.map((c) => [c.field, compareSalaryDetail(c.field)]));

  readonly empOptions = signal<EmployeeSearchDto[]>([]);
  readonly rows = signal<PaSalaryDetailDto[]>([]);
  readonly loading = signal(false);
  readonly selected = signal<PaSalaryDetailDto | null>(null);
  readonly detailQuery = signal<PaSalaryDetailItemsQuery | null>(null);

  empKeyword = '';
  personId: string | null = null;
  startMonth: Date | null = new Date(new Date().getFullYear(), 0, 1);
  endMonth: Date | null = new Date();
  pageIndex = 1;
  pageSize = 50;

  /** Khoảng tháng của lần tra cứu gần nhất - gửi kèm khi xem chi tiết (bản gốc đọc lại từ ô nhập). */
  private searchedPeriod: { start: string; end: string } | null = null;
  private selectedEmpLabel = '';
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private readonly api: PaSalaryDetailService,
    private readonly empApi: ChangeUserService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
  }

  ngOnDestroy(): void {
    clearTimeout(this.empSearchTimer);
  }

  onEmpKeywordChange(keyword: string): void {
    this.empKeyword = keyword;
    // Chọn 1 option -> nz-autocomplete ghi nhãn của option vào ô nhập: giữ nguyên nhân viên đã chọn.
    if (this.personId && keyword === this.selectedEmpLabel) return;
    this.personId = null;
    clearTimeout(this.empSearchTimer);
    if (!keyword.trim()) {
      this.empOptions.set([]);
      return;
    }
    this.empSearchTimer = setTimeout(() => {
      this.empApi.searchEmployees({ keyword: keyword.trim(), deptCodes: [], empOffice: '' }).subscribe({
        next: (list) => this.empOptions.set(list ?? []),
        error: () => this.empOptions.set([]),
      });
    }, 300);
  }

  onEmpSelected(emp: EmployeeSearchDto): void {
    this.personId = emp.personId;
    this.selectedEmpLabel = this.empLabel(emp);
    this.empKeyword = this.selectedEmpLabel;
  }

  empLabel(emp: EmployeeSearchDto): string {
    return `${emp.empId} - ${emp.localName}`;
  }

  search(): void {
    if (!this.personId) {
      this.message.warning(this.i18n.t('hrm.empinfo.pleaseSelectEmp', 'Vui lòng chọn nhân viên'));
      return;
    }
    if (!this.startMonth || !this.endMonth) {
      this.message.warning(this.i18n.t('pa.salaryDetail.msgSelectPeriod', 'Vui lòng chọn thời gian!'));
      return;
    }
    const period = { start: toMonthText(this.startMonth), end: toMonthText(this.endMonth) };
    this.loading.set(true);
    this.selected.set(null);
    this.detailQuery.set(null);
    this.api.getYearList(this.personId, period.start, period.end).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.searchedPeriod = period;
        this.pageIndex = 1;
        this.loading.set(false);
      },
      error: (err) => {
        this.rows.set([]);
        this.loading.set(false);
        this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** Bản gốc changeUrlDetail(PAY_DATE, PERSON_ID) -> detailYearCountInfoRight?pFrom=year&START_MONTH&END_MONTH. */
  selectRow(row: PaSalaryDetailDto): void {
    if (!this.searchedPeriod || !row.payDate) return;
    this.selected.set(row);
    this.detailQuery.set({
      from: 'year',
      personId: row.personId,
      payDate: row.payDate,
      startMonth: this.searchedPeriod.start,
      endMonth: this.searchedPeriod.end,
    });
  }

  isSelected(row: PaSalaryDetailDto): boolean {
    const cur = this.selected();
    return !!cur && cur.personId === row.personId && cur.payScheduleNo === row.payScheduleNo;
  }

  title(c: PaSalaryDetailColumn): string {
    return this.i18n.t(c.key, c.fallback);
  }
}
