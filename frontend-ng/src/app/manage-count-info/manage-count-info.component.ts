import { CommonModule, formatDate } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, ManageCountInfoEmpDto, ManageCountInfoSummaryDto } from './manage-count-info.model';
import { ManageCountInfoService } from './manage-count-info.service';

declare var ApexCharts: any;

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'essDept.dept', 'vdp.search.dept.placeholder',
  'common.empGroup', 'common.empType', 'common.status', 'mci.field.asOfDate',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel', 'essDept.weeklyReport', 'common.selectAll',
  'common.stt', 'common.empId', 'common.empName', 'common.deptName',
  'mci.col.postGrade', 'mci.col.dob', 'mci.col.gender', 'common.dateJoined',
  'mci.detail.title', 'mci.stats.total', 'mci.stats.byGender', 'mci.stats.byEmpType', 'mci.stats.byDept',
  'mci.stats.byPostFamily', 'mci.stats.byPostGrade', 'mci.stats.byAge',
  'mci.msg.noData', 'mci.msg.loadFailed', 'mci.msg.chartNoData',
  'mep.msg.loadDeptFailed', 'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];

const DEFAULT_EMP_OFFICE = '15119';

/** Định dạng ngày dùng bởi ManageCountInfoMapper.xml (TO_DATE(#{asOfDate}, 'YYYY/MM/DD')) - khác với
 *  ManageEmpPositionInfoMapper vốn dùng 'YYYY-MM-DD'. */
const AS_OF_DATE_FORMAT = 'yyyy/MM/dd';

/**
 * Bản Angular của ess/viewDept/ManageCountInfoList.html (Thymeleaf + DataTables + ApexCharts), gọi lại
 * nguyên các API JSON đã có sẵn (xem ManageCountInfoService), chỉ đổi endpoint /list từ DataTables
 * server-side sang trả toàn bộ danh sách theo bộ lọc (giống ManageEmpPositionInfoComponent). Dùng
 * nz-table (phân trang client-side) thay cho DataTables; nz-tree-select thay widget cây phòng ban tự
 * viết (DeptTree.js); vẫn giữ ApexCharts cho 6 biểu đồ thống kê (đã nạp global ở index.html, không có
 * lựa chọn NG-ZORRO tương đương - xem DashboardComponent). Xuất excel làm client-side (không có
 * endpoint export riêng ở backend - bản gốc cũng xuất client-side qua DataTables Buttons). Nút "Báo
 * cáo nhân sự theo tuần" giữ nguyên hành vi điều hướng tải file trực tiếp.
 */
@Component({
  selector: 'app-manage-count-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './manage-count-info.component.html',
  styleUrl: './manage-count-info.component.css',
})
export class ManageCountInfoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('genderChartEl') genderChartEl!: ElementRef<HTMLDivElement>;
  @ViewChild('empTypeChartEl') empTypeChartEl!: ElementRef<HTMLDivElement>;
  @ViewChild('deptChartEl') deptChartEl!: ElementRef<HTMLDivElement>;
  @ViewChild('postFamilyChartEl') postFamilyChartEl!: ElementRef<HTMLDivElement>;
  @ViewChild('postGradeChartEl') postGradeChartEl!: ElementRef<HTMLDivElement>;
  @ViewChild('ageChartEl') ageChartEl!: ElementRef<HTMLDivElement>;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ManageCountInfoEmpDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly totalCount = signal(0);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  private readonly charts: Record<string, any> = {};

  keyword = '';
  deptNos: string[] = [];
  postFamily: string | null = null;
  empTypeCode: string | null = null;
  empOffice: string | null = DEFAULT_EMP_OFFICE;
  asOfDate: Date | null = new Date();

  constructor(
    private readonly api: ManageCountInfoService,
    private readonly i18n: I18nService,
  ) {}

  ngAfterViewInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }

  ngOnDestroy(): void {
    this.destroyCharts();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    const params = {
      keyword: this.keyword,
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      postFamily: this.postFamily ?? '',
      empTypeCode: this.empTypeCode ?? '',
      empOffice: this.empOffice ?? '',
      asOfDate: this.formatAsOfDate(this.asOfDate),
    };

    this.api.getSummary(params).subscribe({
      next: (summary) => this.renderCharts(summary),
      error: () => this.errorMessage.set(this.i18n.t('mci.msg.loadFailed', 'Tải dữ liệu thất bại')),
    });

    this.api.getList(params).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('mci.msg.loadFailed', 'Tải dữ liệu thất bại'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.keyword = '';
    this.deptNos = [];
    this.postFamily = null;
    this.empTypeCode = null;
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.asOfDate = new Date();
    this.search();
  }

  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở backend). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã NV'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('common.empGroup', 'Nhóm NV'),
      this.i18n.t('mci.col.postGrade', 'Chức danh'),
      this.i18n.t('common.empType', 'Loại NV'),
      this.i18n.t('mci.col.dob', 'Ngày sinh'),
      this.i18n.t('mci.col.gender', 'Giới tính'),
      this.i18n.t('common.dateJoined', 'Ngày vào làm'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postFamilyName, r.postGradeNo,
      r.empTypeName, r.dob, r.sexName, r.dateStarted, r.empOfficeName,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'manage_count_info_list.xlsx');
  }

  /** Điều hướng tải file .xlsx báo cáo nhân sự theo tuần - endpoint ghi trực tiếp vào response, không
   *  trả JSON nên không gọi qua HttpClient (giống hành vi window.location.href ở bản gốc). */
  exportWeeklyReport(): void {
    const asOfDate = this.formatAsOfDate(this.asOfDate);
    window.location.href = `/ess/viewDept/api/manageCountInfo/weeklyReport?asOfDate=${encodeURIComponent(asOfDate)}`;
  }

  private formatAsOfDate(d: Date | null): string {
    return d ? formatDate(d, AS_OF_DATE_FORMAT, 'vi') : '';
  }

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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban con
   *  (xem giải thích chi tiết ở ManageEmpPositionInfoComponent.expandDeptSelection). */
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

  private loadCodeOptions(): void {
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('15118').subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }

  private destroyCharts(): void {
    Object.keys(this.charts).forEach((key) => {
      this.charts[key]?.destroy?.();
      delete this.charts[key];
    });
  }

  private renderCharts(summary: ManageCountInfoSummaryDto): void {
    this.destroyCharts();
    this.totalCount.set(summary.totalCount || 0);
    this.createDonutChart('gender', this.genderChartEl, summary.byGender, 200);
    this.createDonutChart('empType', this.empTypeChartEl, summary.byEmpType, 200);
    this.createBarChart('dept', this.deptChartEl, summary.byDept, 250);
    this.createDonutChart('postFamily', this.postFamilyChartEl, summary.byPostFamily, 200);
    this.createBarChart('postGrade', this.postGradeChartEl, summary.byPostGrade, 200);
    this.createBarChart('age', this.ageChartEl, summary.byAge, 220);
  }

  private createDonutChart(key: string, elRef: ElementRef<HTMLDivElement>, items: { label: string; code: string; count: number }[] | undefined, height: number): void {
    const el = elRef?.nativeElement;
    if (!el) return;
    el.innerHTML = '';
    if (!items || !items.length) {
      el.innerHTML = `<p class="text-center text-muted small py-3">${this.i18n.t('mci.msg.chartNoData', 'Không có dữ liệu thống kê')}</p>`;
      return;
    }
    const labels = items.map((i) => i.label || i.code || '?');
    const values = items.map((i) => i.count || 0);
    const options = {
      chart: { type: 'donut', height, toolbar: { show: false } },
      series: values,
      labels,
      legend: { position: 'bottom', fontSize: '11px' },
      dataLabels: { enabled: true, formatter: (_val: number, opts: any) => opts.w.globals.series[opts.seriesIndex] },
      tooltip: { y: { formatter: (val: number) => val + ' NV' } },
      plotOptions: { pie: { donut: { size: '55%' } } },
    };
    this.charts[key] = new ApexCharts(el, options);
    this.charts[key].render();
  }

  private createBarChart(key: string, elRef: ElementRef<HTMLDivElement>, items: { label: string; code: string; count: number }[] | undefined, height: number): void {
    const el = elRef?.nativeElement;
    if (!el) return;
    el.innerHTML = '';
    if (!items || !items.length) {
      el.innerHTML = `<p class="text-center text-muted small py-3">${this.i18n.t('mci.msg.chartNoData', 'Không có dữ liệu thống kê')}</p>`;
      return;
    }
    const labels = items.map((i) => i.label || i.code || '?');
    const values = items.map((i) => i.count || 0);
    const autoHeight = Math.max(height, labels.length * 28 + 60);
    const options = {
      chart: { type: 'bar', height: autoHeight, toolbar: { show: false } },
      series: [{ name: 'Số NV', data: values }],
      xaxis: { categories: labels, labels: { style: { fontSize: '11px' } } },
      yaxis: { labels: { style: { fontSize: '11px' } } },
      plotOptions: { bar: { horizontal: true, borderRadius: 3, dataLabels: { position: 'top' } } },
      dataLabels: { enabled: true, offsetX: 20, style: { fontSize: '11px', colors: ['#333'] } },
      tooltip: { y: { formatter: (val: number) => val + ' NV' } },
      colors: ['#4e73df'],
    };
    this.charts[key] = new ApexCharts(el, options);
    this.charts[key].render();
  }
}
