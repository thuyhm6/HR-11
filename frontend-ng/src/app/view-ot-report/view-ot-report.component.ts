import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ViewOtReportService } from './view-ot-report.service';
import { AuthDeptNode, EssOtReportDto } from './view-ot-report.model';

interface OtMetricColumn {
  labelKey: string;
  fallback: string;
  monthField: keyof EssOtReportDto;
  officialField: keyof EssOtReportDto;
  probationField: keyof EssOtReportDto;
}

/** 9 hạng mục giờ tăng ca (150%/200%/210% ngày thường, 200%/270% ngày hưởng lương (thứ 7),
 *  200%/270% cuối tuần, 300%/390% ngày lễ) - dùng chung cho cả cột "trong tháng" và 2 nhóm
 *  "tăng ca vượt" (Chính thức/Thử việc). */
const OT_METRIC_COLUMNS: OtMetricColumn[] = [
  { labelKey: 'ess.viewArPersonalYearList.WORKDAYOT150_HOURS.b', fallback: 'Tăng ca ngày thường 150%', monthField: 'otRegular150Month', officialField: 'otRegular150ExcessOfficial', probationField: 'otRegular150ExcessProbation' },
  { labelKey: 'ess.viewArPersonalYearList.WORKDAYOT200_HOURS.b', fallback: 'Tăng ca ngày thường 200%', monthField: 'otRegular200Month', officialField: 'otRegular200ExcessOfficial', probationField: 'otRegular200ExcessProbation' },
  { labelKey: 'ess.viewArPersonalYearList.WORKDAYOT210_HOURS.b', fallback: 'Tăng ca ngày thường 210%', monthField: 'otRegular210Month', officialField: 'otRegular210ExcessOfficial', probationField: 'otRegular210ExcessProbation' },
  { labelKey: 'ess.viewArPersonalYearList.SATURDAYOT200_HOURS.b', fallback: 'Tăng ca ngày hưởng lương 200%', monthField: 'otSaturday200Month', officialField: 'otSaturday200ExcessOfficial', probationField: 'otSaturday200ExcessProbation' },
  { labelKey: 'ess.viewArPersonalYearList.SATURDAYOT270_HOURS.b', fallback: 'Tăng ca ngày hưởng lương 270%', monthField: 'otSaturday270Month', officialField: 'otSaturday270ExcessOfficial', probationField: 'otSaturday270ExcessProbation' },
  { labelKey: 'ess.viewArPersonalYearList.WEEKLYOT200_HOURS.b', fallback: 'Tăng ca cuối tuần 200%', monthField: 'otWeekend200Month', officialField: 'otWeekend200ExcessOfficial', probationField: 'otWeekend200ExcessProbation' },
  { labelKey: 'ess.viewArPersonalYearList.WEEKLYOT270_HOURS.b', fallback: 'Tăng ca cuối tuần 270%', monthField: 'otWeekend270Month', officialField: 'otWeekend270ExcessOfficial', probationField: 'otWeekend270ExcessProbation' },
  { labelKey: 'ess.viewArPersonalYearList.HOLIDAYOT300_HOURS.b', fallback: 'Tăng ca ngày Lễ 300%', monthField: 'otHoliday300Month', officialField: 'otHoliday300ExcessOfficial', probationField: 'otHoliday300ExcessProbation' },
  { labelKey: 'ess.viewArPersonalYearList.HOLIDAYOT390_HOURS.b', fallback: 'Tăng ca ngày Lễ 390%', monthField: 'otHoliday390Month', officialField: 'otHoliday390ExcessOfficial', probationField: 'otHoliday390ExcessProbation' },
];

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.month', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'common.deptName', 'ex.placeholder.dept',
  'essDept.search', 'ess.viewMonthDetailList.btnExport',
  'common.stt', 'common.empId', 'common.empName',
  'ess.viewOtReport.totalOtMonth.b', 'ess.viewOtReport.preMonthlyTotalQty.b',
  'ess.viewOtReport.totalOtYear.b', 'ess.viewOtReport.excessOt.b',
  'ess.viewArPersonalYearList.REGULAR_DAYS.b', 'ess.viewArPersonalYearList.PROBATION_DAYS.b',
  'common.total', 'common.noData', 'common.loadFail', 'mep.msg.loadDeptFailed',
  ...OT_METRIC_COLUMNS.map((m) => m.labelKey),
];

/**
 * Bản Angular của ess/infoApply/viewOtReport.html (Thymeleaf + DataTables), gọi cùng REST API
 * JSON đã có sẵn ở backend (không đổi backend). Dùng nz-table (phân trang server-side qua
 * nzFrontPagination=false) thay cho DataTables; header 3 hàng rowspan/colspan giữ nguyên như bản gốc
 * (xem .table-scroll-wrapper trong dept-ot-apply-info.component.html để biết lý do không dùng
 * nzScroll). Bộ chọn phòng ban dùng nz-tree-select (nzCheckable + expandDeptSelection) thay cho
 * widget cây jsTree gốc, giống attendance-ex-batch-info.
 */
@Component({
  selector: 'app-view-ot-report',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NzTableModule, NzDatePickerModule, NzInputModule,
    NzButtonModule, NzCardModule, NzAlertModule, NzTreeSelectModule, TranslatePipe,
  ],
  templateUrl: './view-ot-report.component.html',
  styleUrl: './view-ot-report.component.css',
})
export class ViewOtReportComponent implements OnInit {
  readonly otMetricColumns = OT_METRIC_COLUMNS;
  readonly pageSizeOptions = [10, 25, 50, 100];

  readonly rows = signal<EssOtReportDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  monthValue: Date = new Date();
  keyword = '';
  deptNos: string[] = [];
  pageIndex = 1;
  pageSize = 25;

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewOtReportService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
  }

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }

  exportReport(): void {
    const { month, year } = this.monthYear();
    const deptNos = this.expandDeptSelection(this.deptNos).join(',');
    const url = this.api.buildExportUrl({ month, year, keyword: this.keyword, deptNos });
    window.location.href = url;
  }

  private loadPage(): void {
    const { month, year } = this.monthYear();
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getPageList({
        month, year,
        keyword: this.keyword,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        draw: this.pageIndex,
        start: (this.pageIndex - 1) * this.pageSize,
        length: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          if (res.error) {
            this.errorMessage.set(res.error);
            this.rows.set([]);
            this.recordsTotal.set(0);
          } else {
            this.rows.set(res.data ?? []);
            this.recordsTotal.set(res.recordsTotal ?? 0);
          }
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.loading.set(false);
        },
      });
  }

  private monthYear(): { month: string; year: string } {
    const d = this.monthValue;
    return { month: String(d.getMonth() + 1).padStart(2, '0'), year: String(d.getFullYear()) };
  }

  // ==================== Cây phòng ban ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    this.deptChildrenMap = new Map<string, string[]>();
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });

    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - phải tự mở rộng xuống các phòng ban
   *  con trước khi gửi deptNos lên, giống ManageEmpPositionInfoComponent/AttendanceExBatchInfoComponent. */
  private expandDeptSelection(selected: string[]): string[] {
    const result = new Set<string>();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop()!;
      if (result.has(id)) continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children) stack.push(...children);
    }
    return Array.from(result);
  }
}
