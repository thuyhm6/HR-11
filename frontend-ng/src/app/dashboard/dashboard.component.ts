import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { TabService } from '../shell/tab.service';
import { AttendanceOtRow, DashboardService } from './dashboard.service';

declare var ApexCharts: any;

interface AttendanceOtDetail {
  name: string;
  hours: number;
  absent?: boolean;
}

// Item nghỉ (không tính giờ chấm công) - giống _DBC_ABSENT_ITEMS trong dashboard.html gốc.
const ABSENT_ITEMS = ['141443', '14015448'];

/**
 * Bản Angular của login/dashboard.html (Thymeleaf): bảng thống kê nghỉ phép/tăng ca/nghỉ bất
 * thường tháng hiện tại + biểu đồ chấm công & tăng ca theo khoảng ngày. Gọi lại nguyên 5 API JSON
 * đã có sẵn (xem DashboardService) - không đổi backend. Dùng nz-table/nz-card/nz-tag/nz-range-picker
 * (NG-ZORRO) thay cho Bootstrap + jQuery daterangepicker trước đây; vẫn giữ ApexCharts (đã nạp
 * global ở index.html, không có lựa chọn NG-ZORRO tương đương).
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTableModule, NzCardModule, NzAlertModule, NzTagModule, NzButtonModule, NzDatePickerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartEl') chartEl!: ElementRef<HTMLDivElement>;

  readonly leaveCount = signal<number | 'error' | null>(null);
  readonly otCount = signal<number | 'error' | null>(null);
  readonly abnormalCount = signal<number | 'error' | null>(null);
  readonly dateRange = signal<Date[]>(this.buildDefaultRange());

  isPositive(count: number | 'error' | null): boolean {
    return typeof count === 'number' && count > 0;
  }

  private chart: any = null;
  private attDetailMap: Record<string, AttendanceOtDetail[]> = {};
  private otDetailMap: Record<string, AttendanceOtDetail[]> = {};

  constructor(private readonly api: DashboardService, private readonly tabs: TabService) {}

  openOtTab(): void {
    this.tabs.openTab('/dept-ot-apply-info', 'Tổng hợp OT theo bộ phận', 'route');
  }

  /** 3 link thống kê bên dưới trỏ tới route Angular qua TabService (giống openOtTab()) thay vì
   *  href tới URL Thymeleaf gốc - các trang này đã migrate nên controller view mapping cũ đã bị xóa. */
  openApplyAttendanceInfoListTab(): void {
    this.tabs.openTab('/apply-attendance-info-list', 'Đơn nghỉ phép của tôi', 'route');
  }

  openOtApplyInfoListTab(): void {
    this.tabs.openTab('/ot-apply-info-list', 'Đơn tăng ca của tôi', 'route');
  }

  openCwaAbnormalApplyTab(): void {
    this.tabs.openTab('/cwa-abnormal-apply', 'Xin phép chấm công bất thường', 'route');
  }

  onDateRangeChange(range: Date[]): void {
    if (!range || range.length !== 2) return;
    this.dateRange.set(range);
    this.loadStats();
    this.loadChart();
  }

  ngAfterViewInit(): void {
    this.loadStats();
    this.loadChart();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  /** Mặc định: từ 25 tháng trước đến 24 tháng này - giống dashboard.html gốc. */
  private buildDefaultRange(): Date[] {
    const now = new Date();
    const year = now.getFullYear();
    const mon = now.getMonth(); // 0-based
    const to = new Date(year, mon, 24);
    const from = new Date(year, mon - 1, 25);
    return [from, to];
  }

  private dateToDmy(d: Date): string {
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  }

  private dateToYmd(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  private loadStats(): void {
    const [from, to] = this.dateRange();
    if (!from || !to) return;
    const fDmy = this.dateToDmy(from);
    const tDmy = this.dateToDmy(to);
    const fYmd = this.dateToYmd(from);
    const tYmd = this.dateToYmd(to);

    this.api.getMyLeaveApplyList(fYmd, tYmd).subscribe({
      next: (rows) => this.leaveCount.set((rows ?? []).length),
      error: () => this.leaveCount.set('error'),
    });
    this.api.getMyOtApplyList(fYmd, tYmd).subscribe({
      next: (rows) => this.otCount.set((rows ?? []).length),
      error: () => this.otCount.set('error'),
    });
    this.api.getMyCwaAbnormalList(fDmy, tDmy).subscribe({
      next: (rows) => this.abnormalCount.set((rows ?? []).length),
      error: () => this.abnormalCount.set('error'),
    });
  }

  private loadChart(): void {
    const [from, to] = this.dateRange();
    if (!from || !to) return;
    const fromDmy = this.dateToDmy(from);
    const toDmy = this.dateToDmy(to);
    const labels = this.buildLabels(from, to);

    let attRows: AttendanceOtRow[] | null = null;
    let otRows: AttendanceOtRow[] | null = null;
    const tryRender = () => {
      if (attRows === null || otRows === null) return;
      this.renderChart(
        labels,
        this.groupAttendanceHours(attRows, labels),
        this.groupHours(otRows, labels)
      );
    };

    this.api.getAttendancePersonalList(fromDmy, toDmy).subscribe({
      next: (rows) => {
        attRows = rows ?? [];
        tryRender();
      },
      error: () => {
        attRows = [];
        tryRender();
      },
    });
    this.api.getPersonOtList(fromDmy, toDmy).subscribe({
      next: (rows) => {
        otRows = rows ?? [];
        tryRender();
      },
      error: () => {
        otRows = [];
        tryRender();
      },
    });
  }

  private buildLabels(from: Date, to: Date): string[] {
    const labels: string[] = [];
    for (const d = new Date(from); d <= to; d.setDate(d.getDate() + 1)) {
      labels.push(`${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`);
    }
    return labels;
  }

  /** Chấm công: nếu ngày có ITEM_NO thuộc danh sách nghỉ thì giờ = 0. Đồng thời build detail map cho tooltip. */
  private groupAttendanceHours(rows: AttendanceOtRow[], labels: string[]): number[] {
    const hoursMap: Record<string, number> = {};
    const absentMap: Record<string, boolean> = {};
    this.attDetailMap = {};
    for (const r of rows ?? []) {
      const key = (r.arDateStr || '').replace(/-/g, '/');
      const hours = parseFloat(r.workHour) || 0;
      if (!this.attDetailMap[key]) this.attDetailMap[key] = [];
      if (ABSENT_ITEMS.indexOf(r.itemNo) !== -1) {
        absentMap[key] = true;
        this.attDetailMap[key].push({ name: r.itemName || r.itemNo, hours, absent: true });
      } else {
        hoursMap[key] = (hoursMap[key] || 0) + hours;
        this.attDetailMap[key].push({ name: r.itemName || r.itemNo, hours, absent: false });
      }
    }
    return labels.map((l) => (absentMap[l] ? 0 : parseFloat((hoursMap[l] || 0).toFixed(2))));
  }

  /** Tăng ca: cộng toàn bộ giờ, build detail map cho tooltip. */
  private groupHours(rows: AttendanceOtRow[], labels: string[]): number[] {
    const map: Record<string, number> = {};
    this.otDetailMap = {};
    for (const r of rows ?? []) {
      const key = (r.arDateStr || '').replace(/-/g, '/');
      const hours = parseFloat(r.workHour) || 0;
      map[key] = (map[key] || 0) + hours;
      if (!this.otDetailMap[key]) this.otDetailMap[key] = [];
      this.otDetailMap[key].push({ name: r.itemName || r.itemNo, hours });
    }
    return labels.map((l) => parseFloat((map[l] || 0).toFixed(2)));
  }

  private renderChart(labels: string[], attData: number[], otData: number[]): void {
    const chartElement = this.chartEl?.nativeElement;
    if (!chartElement) return;

    const displayLabels = labels.map((l) => {
      const p = l.split('/');
      return `${p[2]}/${p[1]}`;
    });

    const attDetailMap = this.attDetailMap;
    const otDetailMap = this.otDetailMap;

    const options = {
      series: [
        { name: 'Chấm công (giờ)', data: attData, type: 'bar' },
        { name: 'Xu hướng chấm công', data: attData, type: 'line' },
        { name: 'Tăng ca (giờ)', data: otData, type: 'bar' },
        { name: 'Xu hướng tăng ca', data: otData, type: 'line' },
      ],
      chart: { type: 'line', height: 255, toolbar: { show: false }, animations: { enabled: false } },
      plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 2 } },
      stroke: { width: [0, 2, 0, 2], curve: 'smooth' },
      fill: { opacity: [0.65, 1, 0.65, 1] },
      markers: { size: [0, 3, 0, 3] },
      dataLabels: { enabled: false },
      xaxis: {
        categories: displayLabels,
        labels: { rotate: -45, rotateAlways: true, style: { fontSize: '10px' } },
        tickPlacement: 'on',
      },
      yaxis: {
        title: { text: 'giờ', style: { fontSize: '11px' } },
        min: 0,
        tickAmount: 4,
        labels: { formatter: (v: number) => (v % 1 === 0 ? v : v.toFixed(1)) },
      },
      colors: ['#4e73df', '#1a3fa0', '#f6a623', '#b87200'],
      legend: { position: 'top', horizontalAlign: 'right', fontSize: '12px' },
      tooltip: {
        custom: (opts: any) => {
          const idx = opts.dataPointIndex;
          const dateKey = labels[idx];
          const dispDate = displayLabels[idx];
          const attList = attDetailMap[dateKey] || [];
          const otList = otDetailMap[dateKey] || [];

          let h = '<div style="padding:8px 12px;min-width:160px;font-size:12px;">';
          h += `<div style="font-weight:600;margin-bottom:6px;">${dispDate}</div>`;

          h += '<div style="color:#4e73df;font-weight:500;margin-bottom:2px;">Chấm công (giờ)</div>';
          if (attList.length) {
            attList.forEach((it) => {
              const style = it.absent ? 'color:#e74a3b;' : '';
              h += `<div style="${style}padding-left:8px;">${it.name}: <b>${it.hours}</b> giờ</div>`;
            });
          } else {
            h += '<div style="padding-left:8px;color:#aaa;">0 giờ</div>';
          }

          h += '<div style="color:#f6a623;font-weight:500;margin-top:6px;margin-bottom:2px;">Tăng ca (giờ)</div>';
          if (otList.length) {
            otList.forEach((it) => {
              h += `<div style="padding-left:8px;">${it.name}: <b>${it.hours}</b> giờ</div>`;
            });
          } else {
            h += '<div style="padding-left:8px;color:#aaa;">0 giờ</div>';
          }

          h += '</div>';
          return h;
        },
      },
      noData: { text: 'Không có dữ liệu', align: 'center', verticalAlign: 'middle', style: { fontSize: '13px', color: '#aaa' } },
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
