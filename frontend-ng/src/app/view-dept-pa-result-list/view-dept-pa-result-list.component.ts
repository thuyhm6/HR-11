import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
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
  PA_RESULT_NUMBER_COLUMNS,
  PaPayScheduleDto,
  PaResultColumn,
  PaResultSummaryDto,
  sumColumns,
} from '../view-pa-result-list/view-pa-result-list.model';
import { PaResultListService } from '../view-pa-result-list/view-pa-result-list.service';

/** Cột Số lượng (COUNT nhân viên) đứng trước các cột số - bản gốc viewDeptPaResultList.jsp. */
const EMP_NUMS_COLUMN: PaResultColumn = { field: 'empNums', key: 'hrm.empinfo.PERSON_NUMBER', fallback: 'Số lượng' };
const NUMBER_COLUMNS: PaResultColumn[] = [EMP_NUMS_COLUMN, ...PA_RESULT_NUMBER_COLUMNS];
const NUMBER_COLUMN_WIDTH = 120;

const I18N_KEYS = [
  ...NUMBER_COLUMNS.map((c) => c.key),
  'ess.empInfo.pay_plan', 'ess.infoApply.DEPT', 'pa.result.deptPlaceholder', 'pa.result.msgSelectPaySchedule',
  'mep.msg.loadDeptFailed', 'ess.viewpersonalpainfo.heji', 'hrm.empinfo.EXPORT', 'public.title.search',
  'pa.workFlow.step.report.totalDept', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/**
 * Tổng lương (phòng ban) - bản Angular của /pa/workManagement/viewDeptPaResultList (JSP + DataTables, dự án Hanwha_HTSV),
 * giữ bảng của công ty HTSV. Dữ liệu cộng theo phòng ban (GROUP BY DEPTNO) ở backend; dòng tổng cuối bảng cộng dồn các
 * phòng ban đang hiển thị (bản gốc viewDeptPaResultListSum). Xuất .xlsx ở frontend thay autoExcel SQL_SEQMEAN=246.
 */
@Component({
  selector: 'app-view-dept-pa-result-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzSelectModule, NzTreeSelectModule, NzButtonModule, NzTableModule,
    TranslatePipe],
  templateUrl: './view-dept-pa-result-list.component.html',
  styleUrl: './view-dept-pa-result-list.component.css',
})
export class ViewDeptPaResultListComponent implements OnInit {
  readonly numberColumns = NUMBER_COLUMNS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly scrollX = `${60 + 200 + NUMBER_COLUMNS.length * NUMBER_COLUMN_WIDTH}px`;
  readonly numberColumnWidth = `${NUMBER_COLUMN_WIDTH}px`;

  readonly schedules = signal<PaPayScheduleDto[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptErrorMessage = signal<string | null>(null);
  readonly rows = signal<PaResultSummaryDto[]>([]);
  readonly loading = signal(false);
  readonly totals = computed(() => sumColumns(this.rows(), NUMBER_COLUMNS.map((c) => c.field)));

  payScheduleNo: string | null = null;
  deptNos: string[] = [];
  pageIndex = 1;
  pageSize = 50;

  private deptChildrenMap = new Map<string, string[]>();
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
    this.api.getDeptList(payScheduleNo, expandDeptSelection(this.deptNos, this.deptChildrenMap)).subscribe({
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

  exportExcel(): void {
    const rows = this.rows();
    if (rows.length === 0) {
      this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
      return;
    }
    const headers = [this.i18n.t('common.stt', 'STT'), this.i18n.t('ess.infoApply.DEPT', 'Phòng ban'),
      ...this.numberColumns.map((c) => this.title(c))];
    const data: unknown[][] = rows.map((r, i) => [i + 1, r.deptName ?? '', ...this.numberColumns.map((c) => r[c.field] ?? '')]);
    const totals = this.totals();
    data.push([this.i18n.t('ess.viewpersonalpainfo.heji', 'Tổng'), '', ...this.numberColumns.map((c) => totals[c.field])]);
    const name = this.i18n.t('pa.workFlow.step.report.totalDept', 'Tổng lương (phòng ban)');
    writeExcel(`${name}_${this.searchedScheduleNo ?? ''}.xlsx`, headers, data);
  }
}
