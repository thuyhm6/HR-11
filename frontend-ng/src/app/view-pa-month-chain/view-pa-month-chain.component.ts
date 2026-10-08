import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { writeExcel } from '../edu-common/edu-excel.util';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaMonthDifDetailComponent } from '../pa-salary-check/pa-month-dif-detail.component';
import { PaPayPeriodComponent } from '../pa-salary-check/pa-pay-period.component';
import { PaMonthDifItem, PaSalaryCheckQuery, apiError, displayDate } from '../pa-salary-check/pa-salary-check.model';
import { PaSalaryCheckService } from '../pa-salary-check/pa-salary-check.service';

/** Cột số có thể bấm để xem danh sách NV - giá trị = SELECT_TYPE của bản gốc. */
type ChainSelectType = 'PERSON_NUM_PRO' | 'PERSON_NUM' | 'COUNT_UP' | 'COUNT_LOW' | 'PERSON_UP' | 'PERSON_LOW';

const I18N_KEYS = [
  'ess.empInfo.project', 'pa.viewPaMonthChain.YUANGONGRENSHU.b', 'ess.empInfo.amount_of_money', 'pa.viewPaMonthChain.PINGJUN.b',
  'pa.viewPaMonthChain.JINEZENGJIA.b', 'pa.viewPaMonthChain.JINEJIANSHAO.b', 'pa.viewPaMonthChain.RENYUANZENGJIA.b',
  'pa.viewPaMonthChain.RENYUANJIANSHAO.b', 'display.emp.ben.or.benhs68', 'pa.monthPersonCountInfoList.DANGYUE.b',
  'org.title.ADDORDELETTE', 'pa.salaryCheck.msgSelectPayDate', 'ess.infoApply.export_to_Excel',
  'public.title.search', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows', 'common.close',
];

/**
 * So sánh lương theo tháng - bản Angular của /pa/paView/viewPaMonthChain (JSP + DWZ, dự án Hanwha_HTSV).
 * Tra cứu gọi procedure PA_MONTH_DIF_ITEM_VIEW2 (PAGE_TYPE 3) rồi tổng hợp theo hạng mục: số NV / số tiền / bình quân
 * tháng trước - tháng này, số NV tăng giảm tiền, NV mới / mất hạng mục. Bấm 1 con số -> popup danh sách NV
 * (bản gốc dialog viewResultConfirmList3Right?currentIndex=2&PAGE_TYPE=3&SELECT_TYPE=...).
 */
@Component({
  selector: 'app-view-pa-month-chain',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzButtonModule, NzTableModule, NzModalModule, TranslatePipe,
    PaPayPeriodComponent, PaMonthDifDetailComponent],
  templateUrl: './view-pa-month-chain.component.html',
  styleUrl: './view-pa-month-chain.component.css',
})
export class ViewPaMonthChainComponent implements OnInit {
  readonly rows = signal<PaMonthDifItem[]>([]);
  readonly loading = signal(false);
  readonly detailQuery = signal<PaSalaryCheckQuery | null>(null);
  readonly detailTitle = signal('');

  salaryDistinNo: string | null = null;
  payDate: string | null = null;
  payDatePro: string | null = null;
  /** Ngày phát của lần tra cứu gần nhất - gửi kèm khi xem chi tiết (bản gốc đọc lại #pa1012_PAY_DATE). */
  private searched: { payDate: string; salaryDistinNo: string } | null = null;

  constructor(
    private readonly api: PaSalaryCheckService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
  }

  search(): void {
    if (!this.salaryDistinNo || !this.payDate || !this.payDatePro) {
      this.message.warning(this.i18n.t('pa.salaryCheck.msgSelectPayDate', 'Vui lòng chọn phân loại lương và ngày phát!'));
      return;
    }
    const query = { salaryDistinNo: this.salaryDistinNo, payDate: this.payDate, payDatePro: this.payDatePro };
    this.loading.set(true);
    this.api.getMonthChain(query).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.searched = { payDate: query.payDate, salaryDistinNo: query.salaryDistinNo };
        this.loading.set(false);
      },
      error: (err) => {
        this.rows.set([]);
        this.loading.set(false);
        this.message.error(apiError(err) || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** Bản gốc changeSearcha(obj): ITEM_ID / ITEM_TYPE / SELECT_TYPE của ô được bấm. */
  openDetail(row: PaMonthDifItem, selectType: ChainSelectType): void {
    if (!this.searched) return;
    this.detailTitle.set(`${row.itemName ?? ''} - ${displayDate(this.searched.payDate)}`);
    this.detailQuery.set({
      payDate: this.searched.payDate,
      salaryDistinNo: this.searched.salaryDistinNo,
      itemType: Number(row.itemType),
      itemId: row.itemId,
      pageType: '3',
      selectType,
    });
  }

  closeDetail(): void {
    this.detailQuery.set(null);
  }

  exportExcel(): void {
    const rows = this.rows();
    if (rows.length === 0) {
      this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
      return;
    }
    const t = (k: string, f: string) => this.i18n.t(k, f);
    const pro = t('display.emp.ben.or.benhs68', 'Tháng trước');
    const cur = t('pa.monthPersonCountInfoList.DANGYUE.b', 'Tháng này');
    const dif = t('org.title.ADDORDELETTE', 'Tăng giảm');
    const emp = t('pa.viewPaMonthChain.YUANGONGRENSHU.b', 'Tổng nhân viên');
    const amt = t('ess.empInfo.amount_of_money', 'Số tiền');
    const avg = t('pa.viewPaMonthChain.PINGJUN.b', 'Bình quân');
    const headers = [t('common.stt', 'STT'), t('ess.empInfo.project', 'Hạng mục'),
      `${emp} - ${pro}`, `${emp} - ${cur}`, `${emp} - ${dif}`, `${amt} - ${pro}`, `${amt} - ${cur}`, `${amt} - ${dif}`,
      `${avg} - ${pro}`, `${avg} - ${cur}`, `${avg} - ${dif}`,
      t('pa.viewPaMonthChain.JINEZENGJIA.b', 'Số tiền tăng'), t('pa.viewPaMonthChain.JINEJIANSHAO.b', 'Số tiền giảm'),
      t('pa.viewPaMonthChain.RENYUANZENGJIA.b', 'Tăng NV'), t('pa.viewPaMonthChain.RENYUANJIANSHAO.b', 'Giảm NV')];
    const data = rows.map((r, i) => [i + 1, r.itemName, r.personNumPro, r.personNum, r.personNumDif, r.countNumPro,
      r.countNum, r.countNumDif, r.personNumAvgPro, r.personNumAvg, r.personNumAvgDif, r.countUp, r.countLow, r.personUp,
      r.personLow].map((v) => v ?? ''));
    writeExcel(`MonthChain_${this.searched?.payDate ?? ''}.xlsx`, headers, data);
  }
}
