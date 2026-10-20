import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { OtApplyDetail, OtApprovalItem } from './ot-apply-detail.model';

/** Toàn bộ key đều dùng lại từ viewApprovaledOtInfo.jsp bản gốc - đã có đủ trong 5 file messages*.properties. */
const I18N_KEYS = [
  'ess.infoApply.title.overtimeApply', 'ess.title.Title', 'public.title.qianzhe', 'ess.infoApply.in_order',
  'ess.infoApply.approval_distinction', 'ess.infoApply.approval_status', 'org.title.LOCAL_NAME',
  'ess.infoApply.comment', 'ess.infoApply.dealing_with_transactions', 'ess.infoApply.DEPT_NAME',
  'ess.infoApply.applicant_information', 'ess.infoApply.EMP_ID', 'ess.infoApply.DEPT', 'ess.infoApply.Rank',
  'ess.infoApply.application_information', 'ar.viewardetail.title.date', 'ess.infoApply.week',
  'ess.infoApply.overtime_type', 'ess.infoApply.overtime_start_time', 'ess.infoApply.end_time',
  'ess.infoApply.overtime_hours', 'ess.viewSSTOtApplyInfo.BENNIANLEIJIJIABAN.b',
  'ess.viewSSTOtApplyInfo.BENYUELEIJIJIABAN.b', 'ess.infoApply.Reason', 'ar.viewsummaryparameteritem.title.hour',
  'ess.viewSSTOtApplyInfo.DEDUCT_MEAL_TIME_YN.b', 'ar.viewArCardRecord.DAKARIQI.b', 'ess.infoApply.card_clock_time',
  'inct.salesman.eval.detail', 'inct.salesman.classify', 'ess.viewApplyAttendanceBatchInfoDetail.SHULIANG.b',
  'ess.viewAttendanceEx.SHENHE.b', 'ess.viewAttendanceEx.XIEYI.b', 'ess.viewAttendanceEx.TONGGAO.b',
  'ess.viewAttendanceEx.QIAN.b', 'ess.viewAttendanceEx.WEITONGGAO.b', 'ess.viewAttendanceEx.YITONGGAO.b',
  'ess.affirmApply.title.remark.weishenpi', 'ess.affirmApply.title.remark.yitongguo',
  'ess.affirmApply.title.remark.yifoujue', 'ess.affirmApply.title.remark.yitijiao',
  'ess.affirmApply.title.remark.yiquxiao', 'arOtf.confirmFlag.notConfirmed', 'arOtf.confirmFlag.confirmed',
  'arOtf.confirmFlag.rejected', 'arOtf.noApprovalData', 'common.noData', 'common.print', 'common.close',
  'ar.week.XINGQIRI.b', 'ar.week.XINGQIYI.b', 'ar.week.XINGQIER.b', 'ar.week.XINGQISAN.b',
  'ar.week.XINGQISI.b', 'ar.week.XINGQIWU.b', 'ar.week.XINGQILIU.b',
];

/** Thứ trong tuần theo Date.getDay() (0 = Chủ nhật) - đúng nhãn IWEEK của bản gốc. */
const WEEKDAY_LABELS: { key: string; fallback: string }[] = [
  { key: 'ar.week.XINGQIRI.b', fallback: 'Chủ Nhật' },
  { key: 'ar.week.XINGQIYI.b', fallback: 'Thứ 2' },
  { key: 'ar.week.XINGQIER.b', fallback: 'Thứ 3' },
  { key: 'ar.week.XINGQISAN.b', fallback: 'Thứ 4' },
  { key: 'ar.week.XINGQISI.b', fallback: 'Thứ 5' },
  { key: 'ar.week.XINGQIWU.b', fallback: 'Thứ 6' },
  { key: 'ar.week.XINGQILIU.b', fallback: 'Thứ 7' },
];

/** Phân loại duyệt theo SY_AFFIRM_EMAIL.AFFIRM_TYPE. */
const AFFIRM_TYPE_LABELS: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'ess.viewAttendanceEx.SHENHE.b', fallback: 'Duyệt' },
  '2': { key: 'ess.viewAttendanceEx.XIEYI.b', fallback: 'Hợp đồng' },
  '3': { key: 'ess.viewAttendanceEx.TONGGAO.b', fallback: 'Thông báo' },
  '4': { key: 'ess.viewAttendanceEx.QIAN.b', fallback: 'Xin phép' },
};

/** Trạng thái xác nhận HR (ESS_APPLY_OT.CONFIRM_FLAG) của dòng affirmLevel=100. */
const CONFIRM_FLAG_LABELS: Record<string, { key: string; fallback: string; color: string }> = {
  '0': { key: 'arOtf.confirmFlag.notConfirmed', fallback: 'Chưa xác nhận', color: 'default' },
  '1': { key: 'arOtf.confirmFlag.confirmed', fallback: 'Đã xác nhận', color: 'green' },
  '2': { key: 'arOtf.confirmFlag.rejected', fallback: 'Từ chối', color: 'red' },
};

/** CSS cho bản in (iframe ẩn - không kế thừa style NG-ZORRO/Bootstrap). */
const OTD_PRINT_CSS = `
  body { font-family: Arial, sans-serif; font-size: 12px; margin: 16px; color: #000; }
  .otd-print-title { text-align: center; font-weight: bold; font-size: 15px; margin: 8px 0 16px; }
  .otd-section-title { font-weight: bold; margin: 14px 0 6px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
  th, td { border: 1px solid #999; padding: 4px 6px; }
  th, .otd-label { background: #f0f0f0; font-weight: bold; }
  .text-center { text-align: center; }
  .otd-tag { border: none !important; padding: 0 !important; background: none !important; color: #000 !important; }
  input { border: none; font: inherit; }
`;

/**
 * Nội dung chi tiết đơn tăng ca - bản Angular của /ess/infoApply/viewApprovaledOtInfo (dự án Hanwha_HTSV):
 * Tiêu đề/Người xin phép → Trình tự duyệt → Thông tin nhân viên → Thông tin xin phép → Báo cơm.
 * Chỉ là phần thân - trang dùng tự bọc trong nz-modal và tự đặt nút (In/Đóng/Duyệt/Từ chối), dùng chung ở
 * ot-apply-batch-info, ot-apply-info-list, view-approval-email, view-approvaled-email, view-noticeed-email.
 */
@Component({
  selector: 'app-ot-apply-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTableModule, NzTagModule, NzInputModule, TranslatePipe],
  templateUrl: './ot-apply-detail.component.html',
  styleUrl: './ot-apply-detail.component.css',
})
export class OtApplyDetailComponent implements OnInit {
  readonly data = input<OtApplyDetail | null>(null);
  /** Dòng duyệt nào hiển thị ô nhập ý kiến (người đang duyệt ở trang Duyệt email) - mặc định chỉ xem. */
  readonly opinionEditable = input<(item: OtApprovalItem) => boolean>(() => false);
  readonly opinion = model<string>('');

  /** Tiêu đề đơn + người xin phép - lấy từ dòng phê duyệt đầu tiên có TITLE (viewAffirmList[0] bản gốc). */
  readonly header = computed(() => {
    const first = (this.data()?.approvalList ?? []).find((a) => a.title || a.applyPersonInfo);
    return { title: first?.title ?? '', applyPersonInfo: first?.applyPersonInfo ?? '' };
  });

  @ViewChild('otdPrintArea') private printArea?: ElementRef<HTMLElement>;

  constructor(private readonly i18n: I18nService) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
  }

  /** STT dòng duyệt - dòng HR xác nhận (affirmLevel=100) hiển thị 'HR'. */
  stt(item: OtApprovalItem, index: number): string {
    const stt = item.affirmLevel ? String(item.affirmLevel) : String(index + 1);
    return stt === '100' ? 'HR' : stt;
  }

  typeLabel(item: OtApprovalItem): string {
    if (String(item.affirmLevel) === '100') return 'HR';
    const label = AFFIRM_TYPE_LABELS[item.affirmType ?? ''] ?? AFFIRM_TYPE_LABELS['1'];
    return this.i18n.t(label.key, label.fallback);
  }

  /** Trạng thái duyệt theo AFFIRM_TYPE + AFFIRM_FLAG - đúng nhánh c:choose ở viewApprovaledOtInfo.jsp bản gốc;
   *  dòng HR (affirmLevel=100) mang CONFIRM_FLAG của đơn nên hiển thị theo trạng thái xác nhận. */
  status(item: OtApprovalItem): { label: string; color: string } {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const flag = String(item.affirmFlag ?? '');
    if (String(item.affirmLevel) === '100') {
      const c = CONFIRM_FLAG_LABELS[flag] ?? CONFIRM_FLAG_LABELS['0'];
      return { label: t(c.key, c.fallback), color: c.color };
    }
    switch (String(item.affirmType ?? '')) {
      case '3':
        return flag === '0'
          ? { label: t('ess.viewAttendanceEx.WEITONGGAO.b', 'Chưa thông báo'), color: 'default' }
          : { label: t('ess.viewAttendanceEx.YITONGGAO.b', 'Đã thông báo'), color: 'blue' };
      case '4':
        return flag === '2'
          ? { label: t('ess.affirmApply.title.remark.yiquxiao', 'Đã hủy'), color: 'default' }
          : { label: t('ess.affirmApply.title.remark.yitijiao', 'Đã nộp'), color: 'blue' };
      default:
        if (flag === '0') return { label: t('ess.affirmApply.title.remark.weishenpi', 'Chưa duyệt'), color: 'gold' };
        if (flag === '1') return { label: t('ess.affirmApply.title.remark.yitongguo', 'Duyệt'), color: 'green' };
        return { label: t('ess.affirmApply.title.remark.yifoujue', 'Từ chối'), color: 'red' };
    }
  }

  /** 'yyyy-MM-dd[ HH:mm]' -> 'dd/MM/yyyy[ HH:mm]'. */
  fmtDate(value: string | null | undefined): string {
    if (!value || value.length < 10 || value.charAt(4) !== '-') return value ?? '';
    const [y, m, d] = value.substring(0, 10).split('-');
    return `${d}/${m}/${y}${value.substring(10)}`;
  }

  /** Thứ trong tuần của ngày tăng ca ('yyyy-MM-dd'). */
  weekday(value: string | null | undefined): string {
    if (!value || value.length < 10 || value.charAt(4) !== '-') return '';
    const [y, m, d] = value.substring(0, 10).split('-').map(Number);
    const label = WEEKDAY_LABELS[new Date(y, m - 1, d).getDay()];
    return label ? this.i18n.t(label.key, label.fallback) : '';
  }

  /** In nội dung chi tiết - ghi HTML vào iframe ẩn rồi gọi print() (printDialog() bản gốc, cùng cách làm với
   *  HrCardInfoComponent.executePrint()). */
  print(): void {
    const html = this.printArea?.nativeElement.innerHTML;
    if (!html) return;
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;width:0;height:0;border:none;visibility:hidden;';
    document.body.appendChild(iframe);
    const doc = iframe.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${OTD_PRINT_CSS}</style></head><body>${html}</body></html>`);
    doc.close();
    iframe.contentWindow!.onafterprint = () => document.body.removeChild(iframe);
    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }, 300);
  }
}
