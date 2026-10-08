import { CommonModule } from '@angular/common';
import { Component, OnChanges, Input, signal } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTableModule } from 'ng-zorro-antd/table';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaSalaryDetailItemDto, PaSalaryDetailItemsQuery } from '../detail-month-count-info/detail-month-count-info.model';
import { PaSalaryDetailService } from '../detail-month-count-info/detail-month-count-info.service';

const I18N_KEYS = [
  'ess.empInfo.salary_detail', 'ess.empInfo.project', 'ess.empInfo.amount_of_money',
  'pa.detailmonthCountInfoRight.NIANJIALEIJIAE.b', 'pa.salaryDetail.clickRowHint', 'common.noData', 'common.loadFail',
];

/** 3 nhóm hạng mục (ITEM_TYPE) procedure PA_FOR_MY_SALARY_DETAIL_PAGE_P sinh ra = 3 bảng của bản gốc. */
const ITEM_TYPES = [1, 2, 3];

/**
 * Panel chi tiết hạng mục lương bên phải - bản Angular của pa/workManagement/detailYearCountInfoRight.jsp (dự án
 * Hanwha_HTSV), dùng chung cho trang Lương tháng chi tiết (from = month) và Lương năm chi tiết (from = year).
 * Mỗi lần query đổi (bấm 1 dòng bên trái) sẽ gọi lại API detailItems.
 */
@Component({
  selector: 'app-pa-salary-detail-items',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzAlertModule, TranslatePipe],
  templateUrl: './pa-salary-detail-items.component.html',
  styleUrl: './pa-salary-detail-items.component.css',
})
export class PaSalaryDetailItemsComponent implements OnChanges {
  /** null = chưa chọn dòng nào. */
  @Input() query: PaSalaryDetailItemsQuery | null = null;

  readonly itemTypes = ITEM_TYPES;
  readonly groups = signal<Record<number, PaSalaryDetailItemDto[]>>({});
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  constructor(
    private readonly api: PaSalaryDetailService,
    private readonly i18n: I18nService,
  ) {
    this.i18n.loadKeys(I18N_KEYS);
  }

  ngOnChanges(): void {
    this.load();
  }

  private load(): void {
    this.groups.set({});
    this.errorMessage.set(null);
    if (!this.query) return;

    this.loading.set(true);
    this.api.getDetailItems(this.query).subscribe({
      next: (items) => {
        const groups: Record<number, PaSalaryDetailItemDto[]> = {};
        ITEM_TYPES.forEach((t) => (groups[t] = (items ?? []).filter((i) => Number(i.itemType) === t)));
        this.groups.set(groups);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }
}
