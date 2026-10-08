import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import { PaSalaryDetailItemsComponent } from '../pa-salary-detail-items/pa-salary-detail-items.component';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { ViewPaPayStubService } from '../view-pa-pay-stub/view-pa-pay-stub.service';
import {
  PaPayScheduleDto,
  PaSalaryDetailColumn,
  PaSalaryDetailDto,
  PaSalaryDetailItemsQuery,
  SALARY_DETAIL_COLUMNS,
  compareSalaryDetail,
} from './detail-month-count-info.model';
import { PaSalaryDetailService } from './detail-month-count-info.service';

const I18N_KEYS = [
  ...SALARY_DETAIL_COLUMNS.map((c) => c.key),
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'ess.empInfo.pay_plan', 'ess.infoApply.DEPT',
  'pa.result.deptPlaceholder', 'pa.result.msgSelectPaySchedule', 'mep.msg.loadDeptFailed',
  'public.title.search', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/**
 * Lương tháng chi tiết - bản Angular của /pa/workManagement/detailmonthCountInfoLeft (JSP + DWZ, dự án Hanwha_HTSV).
 * Bên trái: danh sách nhân viên của 1 kỳ lương (lọc mã NV/họ tên, phòng ban gồm cả phòng ban con); bấm 1 dòng -> bên
 * phải hiển thị chi tiết hạng mục lương (bản gốc detailYearCountInfoRight?pFrom=month).
 * Bản gốc ô Mã NV/Họ tên mở popup chọn nhân viên nhưng chỉ dùng giá trị text để lọc (LIKE) nên bản mới dùng ô nhập thường.
 * Cây phòng ban + kế hoạch trả lương dùng lại API của ViewPaPayStubService.
 */
@Component({
  selector: 'app-detail-month-count-info',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzInputModule, NzSelectModule, NzTreeSelectModule, NzButtonModule,
    NzTableModule, NzAlertModule, TranslatePipe, PaSalaryDetailItemsComponent],
  templateUrl: './detail-month-count-info.component.html',
  styleUrl: './detail-month-count-info.component.css',
})
export class DetailMonthCountInfoComponent implements OnInit {
  readonly columns = SALARY_DETAIL_COLUMNS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly sortFns = new Map(SALARY_DETAIL_COLUMNS.map((c) => [c.field, compareSalaryDetail(c.field)]));

  readonly schedules = signal<PaPayScheduleDto[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptErrorMessage = signal<string | null>(null);
  readonly rows = signal<PaSalaryDetailDto[]>([]);
  readonly loading = signal(false);
  readonly selected = signal<PaSalaryDetailDto | null>(null);
  readonly detailQuery = signal<PaSalaryDetailItemsQuery | null>(null);

  empSearch = '';
  payScheduleNo: string | null = null;
  deptNo: string | null = null;
  pageIndex = 1;
  pageSize = 50;

  constructor(
    private readonly api: PaSalaryDetailService,
    private readonly payStubApi: ViewPaPayStubService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.payStubApi.getPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        // Bản gốc: <select> không có option rỗng -> mặc định kỳ lương đầu tiên, nhưng chỉ tra cứu khi bấm nút.
        if (list?.length) this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
    this.payStubApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  scheduleLabel(s: PaPayScheduleDto): string {
    return `${s.payDate ?? ''} ${s.salaryDistinName ?? ''}`.trim();
  }

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.result.msgSelectPaySchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    this.loading.set(true);
    this.selected.set(null);
    this.detailQuery.set(null);
    this.api.getMonthList(this.payScheduleNo, this.empSearch, this.deptNo).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
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

  /** Bản gốc changeUrlDetail(PAY_SCHEDULE_NO, PERSON_ID) -> detailYearCountInfoRight?pFrom=month. */
  selectRow(row: PaSalaryDetailDto): void {
    this.selected.set(row);
    this.detailQuery.set({ from: 'month', personId: row.personId, payScheduleNo: row.payScheduleNo });
  }

  isSelected(row: PaSalaryDetailDto): boolean {
    const cur = this.selected();
    return !!cur && cur.personId === row.personId && cur.payScheduleNo === row.payScheduleNo;
  }

  title(c: PaSalaryDetailColumn): string {
    return this.i18n.t(c.key, c.fallback);
  }
}
