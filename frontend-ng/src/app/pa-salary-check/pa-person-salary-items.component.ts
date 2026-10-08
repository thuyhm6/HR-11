import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, signal } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaSalaryCheckItem, apiError } from './pa-salary-check.model';
import { PaSalaryCheckService } from './pa-salary-check.service';

/** 3 nhóm hạng mục procedure PA_FOR_SALARY_DETAIL_PAGE_P sinh ra (bản gốc detailPersonCountInfo.jsp). */
const GROUPS = [
  { type: '1', key: 'pa.detailPersonCountInfo.JIYUXIANGMU.b', fallback: 'Chi trả' },
  { type: '2', key: 'pa.detailPersonCountInfo.KOUCHUXIANGMU.b', fallback: 'Khấu trừ' },
  { type: '3', key: 'pa.detailPersonCountInfo.GONGSIBAOXIAN.b', fallback: 'BH công ty' },
];

const I18N_KEYS = [
  ...GROUPS.map((g) => g.key),
  'ess.empInfo.project', 'ess.empInfo.amount_of_money', 'pa.insurance.title.formula',
  'pa.detailPersonCountInfoRight.SHIYONGSHI.b', 'pa.salaryDetail.clickRowHint', 'common.noData', 'common.loadFail',
];

/**
 * Hạng mục lương + công thức của 1 NV trong 1 kỳ lương (API /person/items):
 * - grouped = true: 3 bảng Chi trả / Khấu trừ / BH công ty (bản gốc detailPersonCountInfo.jsp).
 * - grouped = false: 1 bảng tất cả hạng mục (bản gốc detailPersonCountInfoRight.jsp).
 */
@Component({
  selector: 'app-pa-person-salary-items',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzAlertModule, NzTooltipModule, TranslatePipe],
  template: `
    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-2"></nz-alert>
    <div *ngIf="!personId || !payScheduleNo" class="text-muted small py-3 text-center">
      {{ 'pa.salaryDetail.clickRowHint' | translate:'Nhấn vào 1 dòng để xem chi tiết lương' }}
    </div>

    <ng-container *ngIf="personId && payScheduleNo">
      <div *ngIf="grouped; else ppsiFlat" class="row g-3">
        <div class="col-lg-4" *ngFor="let g of groups">
          <div class="fw-semibold mb-1">{{ g.key | translate:g.fallback }}</div>
          <ng-container *ngTemplateOutlet="ppsiTable; context: { $implicit: byType()[g.type] ?? [], id: idPrefix + 'Table' + g.type }"></ng-container>
        </div>
      </div>
      <ng-template #ppsiFlat>
        <ng-container *ngTemplateOutlet="ppsiTable; context: { $implicit: items(), id: idPrefix + 'Table' }"></ng-container>
      </ng-template>
    </ng-container>

    <ng-template #ppsiTable let-data let-id="id">
      <nz-table #ppsiT [attr.id]="id" [nzData]="data" [nzLoading]="loading()" [nzFrontPagination]="false"
                [nzShowPagination]="false" nzSize="small" nzBordered [nzScroll]="{ y: scrollY }">
        <thead>
          <tr>
            <th nzWidth="50px" class="text-center">No.</th>
            <th>{{ 'ess.empInfo.project' | translate:'Hạng mục' }}</th>
            <th nzWidth="28%" class="text-end">{{ 'ess.empInfo.amount_of_money' | translate:'Số tiền' }}</th>
            <th nzWidth="32%">
              <ng-container *ngIf="grouped; else ppsiStd">{{ 'pa.insurance.title.formula' | translate:'Công thức' }}</ng-container>
              <ng-template #ppsiStd>{{ 'pa.detailPersonCountInfoRight.SHIYONGSHI.b' | translate:'Hình thức chuẩn' }}</ng-template>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of ppsiT.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td>{{ item.itemName || item.itemNo }}</td>
            <td class="text-end">{{ item.itemValue | number:'1.0-0' }}</td>
            <td><span class="ppsi-formula" nz-tooltip [nzTooltipTitle]="item.itemFormular">{{ item.itemFormular }}</span></td>
          </tr>
        </tbody>
      </nz-table>
    </ng-template>
  `,
  styles: [`.ppsi-formula { display: inline-block; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: bottom; }`],
})
export class PaPersonSalaryItemsComponent implements OnChanges {
  @Input() personId: string | null = null;
  @Input() payScheduleNo: string | null = null;
  @Input() grouped = true;
  @Input({ required: true }) idPrefix = '';
  @Input() scrollY = 'calc(100vh - 460px)';

  readonly groups = GROUPS;
  readonly items = signal<PaSalaryCheckItem[]>([]);
  readonly byType = signal<Record<string, PaSalaryCheckItem[]>>({});
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  constructor(
    private readonly api: PaSalaryCheckService,
    private readonly i18n: I18nService,
  ) {
    this.i18n.loadKeys(I18N_KEYS);
  }

  ngOnChanges(): void {
    this.items.set([]);
    this.byType.set({});
    this.errorMessage.set(null);
    if (!this.personId || !this.payScheduleNo) return;

    this.loading.set(true);
    this.api.getPersonItems({ personId: this.personId, payScheduleNo: this.payScheduleNo }).subscribe({
      next: (items) => {
        const list = items ?? [];
        const map: Record<string, PaSalaryCheckItem[]> = {};
        GROUPS.forEach((g) => (map[g.type] = list.filter((i) => String(i.itemType) === g.type)));
        this.items.set(list);
        this.byType.set(map);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiError(err) || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }
}
