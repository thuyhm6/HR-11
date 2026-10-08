import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  PaCodeOption,
  PaScheduleOption,
  SALARY_DISTIN_PARENT_CODE,
  displayDate,
  payDatesOf,
} from './pa-salary-check.model';
import { PaSalaryCheckService } from './pa-salary-check.service';

const I18N_KEYS = [
  'pa.monthPersonCountInfoList.GONGZIQUFEN.b', 'display.pa.ecc.paydate', 'pa.viewResultConfirmList.ZHIFURIQIQIANDANGYU.b',
  'common.loadFail',
];

/**
 * Bộ chọn kỳ lương dùng chung: Phân loại lương + Ngày phát (tháng trước ~ tháng này) - bản Angular của cụm
 * ait:SelectSyCodeByCpnyID + 2 select PAY_DATE_PRO / PAY_DATE + hàm pa10xx_Linkage() lặp lại ở các JSP
 * monthPersonCountInfoList, viewPaMonthChain, viewResultConfirmList, detailItemDifCountInfo.
 * Đổi phân loại lương -> danh sách ngày phát lọc theo phân loại đó, mặc định tháng này = kỳ mới nhất, tháng trước = kỳ kế tiếp.
 * Phần tử của component này luôn đặt id theo tiền tố idPrefix truyền vào để không trùng id giữa các trang.
 */
@Component({
  selector: 'app-pa-pay-period',
  standalone: true,
  imports: [CommonModule, FormsModule, NzSelectModule, TranslatePipe],
  template: `
    <div class="row g-3">
      <div class="col-md-4">
        <label class="form-label" [attr.for]="idPrefix + 'SalaryDistin'">
          {{ 'pa.monthPersonCountInfoList.GONGZIQUFEN.b' | translate:'Phân loại lương' }} <span class="text-danger">*</span>
        </label>
        <nz-select class="w-100" [nzId]="idPrefix + 'SalaryDistin'" nzShowSearch
                   [ngModel]="salaryDistinNo()" (ngModelChange)="onDistinChange($event)">
          <nz-option *ngFor="let c of distinOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div [class]="withPro ? 'col-md-8' : 'col-md-4'">
        <label class="form-label" [attr.for]="idPrefix + 'PayDate'">
          <ng-container *ngIf="withPro; else ppSingle">{{ 'pa.viewResultConfirmList.ZHIFURIQIQIANDANGYU.b' | translate:'Ngày phát (tháng trước—tháng này)' }}</ng-container>
          <ng-template #ppSingle>{{ 'display.pa.ecc.paydate' | translate:'Ngày phát' }}</ng-template>
          <span class="text-danger">*</span>
        </label>
        <div class="d-flex gap-2 align-items-center">
          <nz-select *ngIf="withPro" class="flex-fill" [nzId]="idPrefix + 'PayDatePro'" nzShowSearch
                     [ngModel]="payDatePro()" (ngModelChange)="payDatePro.set($event)">
            <nz-option *ngFor="let s of dates()" [nzValue]="s.payDate" [nzLabel]="label(s)"></nz-option>
          </nz-select>
          <span *ngIf="withPro">~</span>
          <nz-select class="flex-fill" [nzId]="idPrefix + 'PayDate'" nzShowSearch
                     [ngModel]="payDate()" (ngModelChange)="payDate.set($event)">
            <nz-option *ngFor="let s of dates()" [nzValue]="s.payDate" [nzLabel]="label(s)"></nz-option>
          </nz-select>
        </div>
      </div>
    </div>
  `,
})
export class PaPayPeriodComponent implements OnInit {
  /** Tiền tố id của các phần tử (theo tên viết tắt của trang cha). */
  @Input({ required: true }) idPrefix = '';
  /** true = có ô ngày phát tháng trước. */
  @Input() withPro = true;

  readonly salaryDistinNo = model<string | null>(null);
  readonly payDate = model<string | null>(null);
  readonly payDatePro = model<string | null>(null);

  readonly distinOptions = signal<PaCodeOption[]>([]);
  readonly dates = signal<PaScheduleOption[]>([]);
  private schedules: PaScheduleOption[] = [];

  constructor(
    private readonly api: PaSalaryCheckService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(SALARY_DISTIN_PARENT_CODE).subscribe({
      next: (list) => {
        this.distinOptions.set(list ?? []);
        if (!this.salaryDistinNo() && list?.length) this.salaryDistinNo.set(list[0].codeNo);
        this.refreshDates(false);
      },
      error: () => this.distinOptions.set([]),
    });
    this.api.getSchedules().subscribe({
      next: (list) => {
        this.schedules = list ?? [];
        this.refreshDates(false);
      },
      error: () => (this.schedules = []),
    });
  }

  onDistinChange(value: string | null): void {
    this.salaryDistinNo.set(value);
    this.refreshDates(true);
  }

  label(s: PaScheduleOption): string {
    return displayDate(s.payDate);
  }

  /** Bản gốc pa10xx_Linkage(): lọc ngày phát theo phân loại lương. reset = chọn lại mặc định. */
  private refreshDates(reset: boolean): void {
    const list = payDatesOf(this.schedules, this.salaryDistinNo());
    this.dates.set(list);
    const has = (d: string | null) => !!d && list.some((s) => s.payDate === d);
    if (reset || !has(this.payDate())) this.payDate.set(list[0]?.payDate ?? null);
    if (reset || !has(this.payDatePro())) this.payDatePro.set(list[1]?.payDate ?? list[0]?.payDate ?? null);
  }
}
