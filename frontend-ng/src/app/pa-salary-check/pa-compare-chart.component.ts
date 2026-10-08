import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

export interface PaChartSeries {
  name: string;
  data: (number | null)[];
}

interface PlotSeries {
  name: string;
  color: string;
  points: { x: number; y: number; value: number }[];
  path: string;
}

const COLORS = ['#1677ff', '#fa8c16', '#52c41a', '#eb2f96'];
const W = 480;
const H = 260;
const PAD = { left: 70, right: 20, top: 20, bottom: 50 };

/**
 * Biểu đồ đường đơn giản bằng SVG (dự án không có thư viện chart) - thay 2 biểu đồ highcharts của bản gốc
 * viewResultConfirmSonList.jsp tab 0 (số người / số tiền tháng trước - tháng này).
 */
@Component({
  selector: 'app-pa-compare-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pcc-title">{{ title }}</div>
    <svg [attr.viewBox]="'0 0 ' + width + ' ' + height" class="pcc-svg" role="img" [attr.aria-label]="title">
      <g *ngFor="let t of ticks">
        <line [attr.x1]="pad.left" [attr.x2]="width - pad.right" [attr.y1]="t.y" [attr.y2]="t.y" class="pcc-grid"></line>
        <text [attr.x]="pad.left - 6" [attr.y]="t.y + 4" text-anchor="end" class="pcc-axis">{{ t.value | number:'1.0-0' }}</text>
      </g>
      <text *ngFor="let c of categories; let i = index" [attr.x]="xOf(i)" [attr.y]="height - pad.bottom + 18"
            text-anchor="middle" class="pcc-axis">{{ c }}</text>
      <text *ngIf="unit" x="12" [attr.y]="pad.top + 4" class="pcc-axis">{{ unit }}</text>
      <g *ngFor="let s of plot">
        <path [attr.d]="s.path" fill="none" [attr.stroke]="s.color" stroke-width="2"></path>
        <g *ngFor="let p of s.points">
          <circle [attr.cx]="p.x" [attr.cy]="p.y" r="4" [attr.fill]="s.color"></circle>
          <text [attr.x]="p.x" [attr.y]="p.y - 8" text-anchor="middle" class="pcc-value">{{ p.value | number:'1.0-0' }}</text>
        </g>
      </g>
    </svg>
    <div class="pcc-legend">
      <span *ngFor="let s of plot"><i [style.background]="s.color"></i>{{ s.name }}</span>
    </div>
  `,
  styles: [`
    .pcc-title { text-align: center; font-weight: 600; margin-bottom: 4px; }
    .pcc-svg { width: 100%; height: auto; }
    .pcc-grid { stroke: #f0f0f0; }
    .pcc-axis { font-size: 11px; fill: #8c8c8c; }
    .pcc-value { font-size: 11px; fill: #595959; }
    .pcc-legend { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; font-size: 12px; }
    .pcc-legend i { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 4px; }
  `],
})
export class PaCompareChartComponent implements OnChanges {
  @Input() title = '';
  @Input() unit = '';
  @Input() categories: string[] = [];
  @Input() series: PaChartSeries[] = [];

  readonly width = W;
  readonly height = H;
  readonly pad = PAD;
  plot: PlotSeries[] = [];
  ticks: { y: number; value: number }[] = [];

  ngOnChanges(): void {
    const values = this.series.flatMap((s) => s.data.map((v) => Number(v) || 0));
    const max = Math.max(1, ...values);
    const min = Math.min(0, ...values);
    const range = max - min || 1;
    const yOf = (v: number) => PAD.top + (H - PAD.top - PAD.bottom) * (1 - (v - min) / range);

    this.ticks = [0, 0.25, 0.5, 0.75, 1].map((r) => {
      const value = min + range * r;
      return { y: yOf(value), value };
    });
    this.plot = this.series.map((s, si) => {
      const points = s.data.map((v, i) => ({ x: this.xOf(i), y: yOf(Number(v) || 0), value: Number(v) || 0 }));
      return {
        name: s.name,
        color: COLORS[si % COLORS.length],
        points,
        path: points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' '),
      };
    });
  }

  xOf(i: number): number {
    const n = Math.max(1, this.categories.length - 1);
    const inner = W - PAD.left - PAD.right;
    return this.categories.length <= 1 ? PAD.left + inner / 2 : PAD.left + inner * 0.1 + (inner * 0.8 * i) / n;
  }
}
