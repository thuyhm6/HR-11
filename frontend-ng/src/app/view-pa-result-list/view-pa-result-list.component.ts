import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { writeExcel } from '../edu-common/edu-excel.util';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree, expandDeptSelection } from '../manage-emp-position-info/dept-tree.util';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { ViewPaPayStubService } from '../view-pa-pay-stub/view-pa-pay-stub.service';
import {
  PA_RESULT_EMP_COLUMNS,
  PA_RESULT_NUMBER_COLUMNS,
  PaPayScheduleDto,
  PaResultColumn,
  PaResultSummaryDto,
  sumColumns,
} from './view-pa-result-list.model';
import { PaResultListService } from './view-pa-result-list.service';

const I18N_KEYS = [
  ...PA_RESULT_EMP_COLUMNS.map((c) => c.key), ...PA_RESULT_NUMBER_COLUMNS.map((c) => c.key),
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'ess.empInfo.pay_plan', 'ess.infoApply.DEPT',
  'pa.result.deptPlaceholder', 'pa.result.msgSelectPaySchedule', 'mep.msg.loadDeptFailed',
  'ess.viewpersonalpainfo.heji', 'hrm.empinfo.EXPORT', 'public.title.search', 'pa.workFlow.step.report.totalEmp',
  'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/** Độ rộng cột thông tin nhân viên (cố định trái) - cần nzWidth để nzLeft tính được vị trí. */
const EMP_COLUMN_WIDTHS: Record<string, string> = {
  empId: '100px', localName: '160px', deptName: '160px', postFamilyName: '120px', postGradeName: '110px',
  positionName: '120px', dateStarted: '100px', dateLeft: '100px',
};
const NUMBER_COLUMN_WIDTH = 120;

/**
 * Tổng lương (cá nhân) - bản Angular của /pa/workManagement/viewPaResultList (JSP + DataTables, dự án Hanwha_HTSV),
 * giữ bảng của công ty HTSV (PA_SUMMARY_HTSV). Bản gốc: DataTables cố định 9 cột trái + dòng tổng (viewPaResultListSum)
 * + nút xuất Excel qua autoExcel SQL_SEQMEAN=245; bản mới: nz-table cố định cột trái (nzLeft), dòng tổng cộng dồn danh
 * sách đang lọc (tfoot nzSummary) và xuất .xlsx ở frontend với đúng các cột đang hiển thị.
 */
@Component({
  selector: 'app-view-pa-result-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzInputModule, NzSelectModule, NzTreeSelectModule, NzButtonModule,
    NzTableModule, TranslatePipe],
  templateUrl: './view-pa-result-list.component.html',
  styleUrl: './view-pa-result-list.component.css',
})
export class ViewPaResultListComponent implements OnInit {
  readonly empColumns = PA_RESULT_EMP_COLUMNS;
  readonly numberColumns = PA_RESULT_NUMBER_COLUMNS;
  readonly empColumnWidths = EMP_COLUMN_WIDTHS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly scrollX = `${60 + Object.values(EMP_COLUMN_WIDTHS).reduce((a, w) => a + parseInt(w, 10), 0)
    + PA_RESULT_NUMBER_COLUMNS.length * NUMBER_COLUMN_WIDTH}px`;
  readonly numberColumnWidth = `${NUMBER_COLUMN_WIDTH}px`;

  readonly schedules = signal<PaPayScheduleDto[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptErrorMessage = signal<string | null>(null);
  readonly rows = signal<PaResultSummaryDto[]>([]);
  readonly loading = signal(false);
  readonly totals = computed(() => sumColumns(this.rows(), PA_RESULT_NUMBER_COLUMNS.map((c) => c.field)));

  empSearch = '';
  payScheduleNo: string | null = null;
  deptNos: string[] = [];
  pageIndex = 1;
  pageSize = 50;

  private deptChildrenMap = new Map<string, string[]>();
  /** Kỳ lương của lần tra cứu gần nhất - đặt tên file Excel. */
  private searchedScheduleNo: string | null = null;

  constructor(
    private readonly api: PaResultListService,
    private readonly payStubApi: ViewPaPayStubService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.payStubApi.getPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list?.length) this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
    this.payStubApi.getAuthorizedDepartments().subscribe({
      next: (list) => {
        const tree = buildDeptTree(list ?? []);
        this.deptChildrenMap = tree.childrenMap;
        this.deptNodes.set(tree.nodes);
      },
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
    const payScheduleNo = this.payScheduleNo;
    this.loading.set(true);
    this.api.getEmpList(payScheduleNo, expandDeptSelection(this.deptNos, this.deptChildrenMap), this.empSearch).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.searchedScheduleNo = payScheduleNo;
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

  title(c: PaResultColumn): string {
    return this.i18n.t(c.key, c.fallback);
  }

  /** Xuất .xlsx đúng các cột + dòng tổng như trên màn hình (thay autoExcel SQL_SEQMEAN=245 của bản gốc). */
  exportExcel(): void {
    const rows = this.rows();
    if (rows.length === 0) {
      this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
      return;
    }
    const headers = [this.i18n.t('common.stt', 'STT'), ...this.empColumns.map((c) => this.title(c)),
      ...this.numberColumns.map((c) => this.title(c))];
    const data: unknown[][] = rows.map((r, i) => [i + 1, ...this.empColumns.map((c) => r[c.field] ?? ''),
      ...this.numberColumns.map((c) => r[c.field] ?? '')]);
    const totals = this.totals();
    data.push([this.i18n.t('ess.viewpersonalpainfo.heji', 'Tổng'), ...this.empColumns.map(() => ''),
      ...this.numberColumns.map((c) => totals[c.field])]);
    const name = this.i18n.t('pa.workFlow.step.report.totalEmp', 'Tổng lương (cá nhân)');
    writeExcel(`${name}_${this.searchedScheduleNo ?? ''}.xlsx`, headers, data);
  }
}
