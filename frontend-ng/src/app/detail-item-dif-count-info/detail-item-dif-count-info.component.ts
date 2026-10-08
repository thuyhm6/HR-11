import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaMonthDifDetailComponent } from '../pa-salary-check/pa-month-dif-detail.component';
import { PaPayPeriodComponent } from '../pa-salary-check/pa-pay-period.component';
import { ITEM_TYPE_OPTIONS, PaSalaryCheckItem, PaSalaryCheckQuery } from '../pa-salary-check/pa-salary-check.model';
import { PaSalaryCheckService } from '../pa-salary-check/pa-salary-check.service';

/** 3 hạng mục tiền tăng ca bị loại khỏi danh sách chọn (bản gốc so khớp theo tên hiển thị). */
const EXCLUDED_ITEM_KEYS = [
  { key: 'pa.viewPaResultList.PINGRIJIABANFEI.C', fallback: 'Lương OT ngày thường' },
  { key: 'pa.viewPaResultList.ZHOUMOJIABANFEI.C', fallback: 'Lương OT cuối tuần' },
  { key: 'pa.viewPaResultList.JIERIJIABANFEI.C', fallback: 'Lương OT ngày lễ' },
];

const I18N_KEYS = [
  ...ITEM_TYPE_OPTIONS.map((o) => o.key), ...EXCLUDED_ITEM_KEYS.map((o) => o.key),
  'liang.public.title.ItemDistinguish', 'pa.detailItemCountInfo.XIANGXIQUFEN.b', 'sys.affirm.title.choose',
  'pa.salaryCheck.msgSelectPayDate', 'public.title.search',
];

/**
 * Chênh lệch hạng mục - bản Angular của /pa/workManagement/detailItemDifCountInfo (JSP + DWZ, dự án Hanwha_HTSV).
 * Chọn phân loại lương + ngày phát + loại hạng mục (+ hạng mục chi tiết) -> gọi procedure PA_MONTH_DIF_ITEM_VIEW
 * (PAGE_TYPE 1) rồi liệt kê NV có hạng mục thay đổi so với kỳ trước (tháng trước / tháng này), xuất Excel .xlsx.
 * Bản gốc để ô Ngày phát liệt kê mọi kỳ (đã tắt pa1018_Linkage) - bản mới lọc theo phân loại lương cho đồng nhất.
 */
@Component({
  selector: 'app-detail-item-dif-count-info',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzSelectModule, NzButtonModule, TranslatePipe,
    PaPayPeriodComponent, PaMonthDifDetailComponent],
  templateUrl: './detail-item-dif-count-info.component.html',
})
export class DetailItemDifCountInfoComponent implements OnInit {
  readonly itemTypeOptions = ITEM_TYPE_OPTIONS;
  readonly items = signal<PaSalaryCheckItem[]>([]);
  readonly itemType = signal<number>(1);
  /** Bản gốc detailItemDifCountInfo_changeSelect(): lọc theo loại, bỏ 3 hạng mục tiền tăng ca. */
  readonly itemsOfType = computed(() => {
    const excluded = EXCLUDED_ITEM_KEYS.map((k) => this.i18n.t(k.key, k.fallback));
    return this.items().filter((i) => String(i.itemType) === String(this.itemType()) && !excluded.includes(i.itemName));
  });
  readonly query = signal<PaSalaryCheckQuery | null>(null);

  salaryDistinNo: string | null = null;
  payDate: string | null = null;
  itemId: string | null = null;

  constructor(
    private readonly api: PaSalaryCheckService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getItemOptions().subscribe({
      next: (list) => this.items.set(list ?? []),
      error: () => this.items.set([]),
    });
  }

  onItemTypeChange(value: number): void {
    this.itemType.set(value);
    this.itemId = null;
  }

  /** Mỗi lần tra cứu tạo object query mới để bảng chi tiết luôn gọi lại procedure. */
  search(): void {
    if (!this.salaryDistinNo || !this.payDate) {
      this.message.warning(this.i18n.t('pa.salaryCheck.msgSelectPayDate', 'Vui lòng chọn phân loại lương và ngày phát!'));
      return;
    }
    this.query.set({
      salaryDistinNo: this.salaryDistinNo,
      payDate: this.payDate,
      itemType: this.itemType(),
      itemId: this.itemId,
      pageType: '1',
    });
  }
}
