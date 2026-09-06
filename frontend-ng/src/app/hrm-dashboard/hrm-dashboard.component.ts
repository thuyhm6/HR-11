import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AuthService } from '../auth/auth.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { EmpMonthlyStatsRow, HrmDashboardService } from './hrm-dashboard.service';

declare var ApexCharts: any;

const I18N_KEYS = [
  'hrm.welcome.title',
  'hrm.alerts.title',
  'dashboard.contract.expiring',
  'dashboard.contract.expiringDetail',
  'hrm.alert.noContract',
  'hrm.quickLinks.noContract',
  'dashboard.status.needAction',
  'dashboard.status.stable',
  'dashboard.col.quantity',
  'common.name',
  'common.status',
  'hrm.chart.personnel.title',
  'hrm.chart.export',
  'hrm.chart.personnel.totalEmp',
  'hrm.chart.personnel.newJoiner',
  'hrm.chart.personnel.leaver',
];

/**
 * Bản Angular của login/hrm.html (Thymeleaf, đã xoá) - trang chào mừng "chế độ" HR Management System
 * (menu SYS_TYPE=0). Mở như 1 tab 'route' từ menu user dropdown trên topbar (xem
 * AppShellComponent.openHrmTab) thay vì mở tab trình duyệt mới trỏ /sys/hrm như bản gốc - nhờ
 * TabService.switchTab dùng skipLocationChange nên URL trên thanh địa chỉ KHÔNG đổi, đúng yêu cầu.
 * Dùng lại nguyên ApexCharts (đã nạp global ở index.html, giống DashboardComponent) thay cho
 * Chart.js của bản gốc - Chart.js chưa được nạp cho Angular và không cần thêm 1 thư viện chart khác.
 */
@Component({
  selector: 'app-hrm-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzTagModule, NzSelectModule, NzButtonModule, TranslatePipe],
  templateUrl: './hrm-dashboard.component.html',
  styleUrl: './hrm-dashboard.component.css',
})
export class HrmDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartEl') chartEl!: ElementRef<HTMLDivElement>;

  readonly expiringContractsCount = signal<number | 'error' | null>(null);
  readonly noContractCount = signal<number | 'error' | null>(null);
  readonly selectedYear = signal<number>(new Date().getFullYear());
  readonly years: number[];

  private chart: any = null;

  constructor(
    readonly auth: AuthService,
    readonly i18n: I18nService,
    private readonly tabs: TabService,
    private readonly api: HrmDashboardService
  ) {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);

    this.api.getExpiringContractsCount().subscribe({
      next: (v) => this.expiringContractsCount.set(v ?? 0),
      error: () => this.expiringContractsCount.set('error'),
    });
    this.api.getNoContractCount().subscribe({
      next: (v) => this.noContractCount.set(v ?? 0),
      error: () => this.noContractCount.set('error'),
    });
  }

  ngAfterViewInit(): void {
    this.loadChart(this.selectedYear());
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  isPositive(count: number | 'error' | null): boolean {
    return typeof count === 'number' && count > 0;
  }

  /** Trang hợp đồng sắp hết hạn đã migrate sang Angular /expired-contract-list - mở dạng tab 'route'. */
  openExpiredContractTab(): void {
    this.tabs.openTab('/expired-contract-list', this.i18n.t('dashboard.contract.expiring', 'Hợp đồng sắp hết hạn'), 'route');
  }

  /** Trang chưa có hợp đồng đã migrate sang Angular /contract-info-list - mở dạng tab 'route'. */
  openNoContractTab(): void {
    this.tabs.openTab('/contract-info-list', this.i18n.t('hrm.quickLinks.noContract', 'Chưa có hợp đồng'), 'route');
  }

  onYearChange(year: number): void {
    this.selectedYear.set(year);
    this.loadChart(year);
  }

  exportUrl(): string {
    return '/hrm/api/empMonthlyStats/export?year=' + this.selectedYear();
  }

  private loadChart(year: number): void {
    this.api.getEmpMonthlyStats(year).subscribe({
      next: (rows) => this.renderChart(rows ?? []),
      error: () => this.renderChart([]),
    });
  }

  private renderChart(rows: EmpMonthlyStatsRow[]): void {
    const chartElement = this.chartEl?.nativeElement;
    if (!chartElement) return;

    const labels = Array.from({ length: 12 }, (_, i) => 'T' + (i + 1));
    const empCounts = new Array(12).fill(0);
    const joinerCounts = new Array(12).fill(0);
    const leaverCounts = new Array(12).fill(0);
    rows.forEach((r) => {
      const idx = r.monthNum - 1;
      if (idx < 0 || idx > 11) return;
      empCounts[idx] = r.empCount;
      joinerCounts[idx] = r.newJoinerCount;
      leaverCounts[idx] = r.leaverCount;
    });

    const options = {
      series: [
        { name: this.i18n.t('hrm.chart.personnel.totalEmp', 'Tổng nhân viên'), data: empCounts },
        { name: this.i18n.t('hrm.chart.personnel.newJoiner', 'Nhân viên mới'), data: joinerCounts },
        { name: this.i18n.t('hrm.chart.personnel.leaver', 'Nhân viên nghỉ việc'), data: leaverCounts },
      ],
      chart: { type: 'bar', height: 280, toolbar: { show: false }, animations: { enabled: false } },
      plotOptions: { bar: { horizontal: false, columnWidth: '60%', borderRadius: 2 } },
      dataLabels: { enabled: false },
      xaxis: { categories: labels },
      yaxis: { min: 0, labels: { formatter: (v: number) => (Number.isInteger(v) ? v : '') } },
      colors: ['#4e73df', '#28a745', '#dc3545'],
      legend: { position: 'top', horizontalAlign: 'right', fontSize: '12px' },
      noData: { text: 'Không có dữ liệu', align: 'center', verticalAlign: 'middle' },
      grid: { borderColor: '#f1f1f1' },
    };

    if (this.chart) {
      this.chart.updateOptions(options, true, false);
    } else {
      this.chart = new ApexCharts(chartElement, options);
      this.chart.render();
    }
  }
}
