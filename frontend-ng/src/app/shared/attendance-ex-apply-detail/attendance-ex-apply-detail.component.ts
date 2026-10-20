import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { AttendanceExApplyDetail, AttendanceExApprovalItem, AttendanceExInfo } from './attendance-ex-apply-detail.model';

/** Toàn bộ key đều dùng lại từ viewAttendanceEx.jsp bản gốc - đã có đủ trong 5 file messages*.properties. */
const I18N_KEYS = [
  'ess.infoApply.check_error_attendance', 'ess.title.Title', 'public.title.qianzhe', 'ess.infoApply.in_order',
  'ess.infoApply.approval_distinction', 'ess.infoApply.approval_status', 'ess.infoApply.NAME',
  'ess.infoApply.comment', 'ess.infoApply.dealing_with_transactions', 'ess.infoApply.DEPT_NAME',
  'ess.infoApply.applicant_information', 'ess.infoApply.EMP_ID', 'ess.infoApply.DEPT', 'ess.infoApply.Rank',
  'ess.infoApply.application_information', 'ess.infoApply.attendance_date', 'ess.infoApply.attendance_type',
  'ess.infoApply.card_clock_time', 'ess.infoApply.time_quantum', 'ess.message.work_shift',
  'ess.infoApply.working_hours', 'ess.infoApply.Reason', 'ess.infoApply.in_door_card', 'ess.infoApply.out_door_card',
  'ess.viewAttendanceEx.SHENHE.b', 'ess.viewAttendanceEx.XIEYI.b', 'ess.viewAttendanceEx.TONGGAO.b',
  'ess.viewAttendanceEx.QIAN.b', 'ess.viewAttendanceEx.WEITONGGAO.b', 'ess.viewAttendanceEx.YITONGGAO.b',
  'ess.affirmApply.title.remark.weishenpi', 'ess.affirmApply.title.remark.yitongguo',
  'ess.affirmApply.title.remark.yifoujue', 'ess.affirmApply.title.remark.yitijiao',
  'ess.affirmApply.title.remark.yiquxiao', 'ess.trans.title.reject', 'ess.viewApply.title.notAffirmed',
  'arOtf.noApprovalData',
];

/** Phân loại duyệt theo SY_AFFIRM_EMAIL.AFFIRM_TYPE. */
const AFFIRM_TYPE_LABELS: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'ess.viewAttendanceEx.SHENHE.b', fallback: 'Duyệt' },
  '2': { key: 'ess.viewAttendanceEx.XIEYI.b', fallback: 'Hợp đồng' },
  '3': { key: 'ess.viewAttendanceEx.TONGGAO.b', fallback: 'Thông báo' },
  '4': { key: 'ess.viewAttendanceEx.QIAN.b', fallback: 'Xin phép' },
};

/** Trạng thái xác nhận HR (ESS_CARD_APPLY_TB.CONFIRM_FLAG) của dòng affirmLevel=100. */
const CONFIRM_FLAG_LABELS: Record<string, { key: string; fallback: string; color: string }> = {
  '0': { key: 'ess.viewApply.title.notAffirmed', fallback: 'Chưa duyệt', color: 'default' },
  '1': { key: 'ess.viewAttendanceEx.SHENHE.b', fallback: 'Duyệt', color: 'green' },
  '2': { key: 'ess.trans.title.reject', fallback: 'Từ chối', color: 'red' },
};

/** CSS cho bản in (iframe ẩn - không kế thừa style NG-ZORRO/Bootstrap). */
const AED_PRINT_CSS = `
  body { font-family: Arial, sans-serif; font-size: 12px; margin: 16px; color: #000; }
  .aed-print-title { text-align: center; font-weight: bold; font-size: 15px; margin: 8px 0 16px; }
  .aed-section-title { font-weight: bold; margin: 14px 0 6px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
  th, td { border: 1px solid #999; padding: 4px 6px; }
  th, .aed-label { background: #f0f0f0; font-weight: bold; }
  .text-center { text-align: center; }
  .aed-tag { border: none !important; padding: 0 !important; background: none !important; color: #000 !important; }
  input { border: none; font: inherit; }
`;

/**
 * Nội dung chi tiết đơn xác nhận chấm công - bản Angular của /ess/infoApply/viewAttendanceEx (dự án Hanwha_HTSV):
 * Tiêu đề/Người xin phép → Trình tự duyệt (+ dòng HR xác nhận) → Thông tin nhân viên → Thông tin xin phép
 * (ngày công, loại, giờ quẹt thẻ, giờ xin xác nhận, ca, giờ làm việc, lý do).
 * Chỉ là phần thân - trang dùng tự bọc trong nz-modal và tự đặt nút (In/Đóng/Duyệt/Từ chối), dùng chung ở
 * check-attendance-ex-for-batch, attendance-ex-confirm, apply-leave-info-list, view-approval-email,
 * view-approvaled-email, view-noticeed-email (cùng mẫu với LeaveApplyDetailComponent/OtApplyDetailComponent).
 */
@Component({
  selector: 'app-attendance-ex-apply-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTableModule, NzTagModule, NzInputModule, TranslatePipe],
  templateUrl: './attendance-ex-apply-detail.component.html',
  styleUrl: './attendance-ex-apply-detail.component.css',
})
export class AttendanceExApplyDetailComponent implements OnInit {
  readonly data = input<AttendanceExApplyDetail | null>(null);
  /** Dòng duyệt nào hiển thị ô nhập ý kiến (người đang duyệt ở trang Duyệt email) - mặc định chỉ xem. */
  readonly opinionEditable = input<(item: AttendanceExApprovalItem) => boolean>(() => false);
  readonly opinion = model<string>('');

  /** Tiêu đề đơn + người xin phép - lấy từ dòng phê duyệt đầu tiên có TITLE (viewAffirmList[0] bản gốc). */
  readonly header = computed(() => {
    const first = (this.data()?.approvalList ?? []).find((a) => a.title || a.applyPersonInfo);
    return { title: first?.title ?? '', applyPersonInfo: first?.applyPersonInfo ?? '' };
  });

  /** Thông tin đơn - ưu tiên attendanceExInfo; dự phòng map từ leaveInfo (EssLeaveApplyDto) nếu BE chưa trả. */
  readonly info = computed<Partial<AttendanceExInfo>>(() => {
    const d = this.data();
    if (d?.attendanceExInfo) return d.attendanceExInfo;
    const lv = d?.employeeInfo || d?.leaveInfo;
    if (!lv) return {};
    return {
      localName: lv['localName'], empId: lv['empId'], deptName: lv['deptName'], postGradeName: lv['postGradeName'],
      itemName: lv['leaveTypeName'], applyReason: lv['leaveReason'], workHour: lv['applyLength'],
    };
  });

  @ViewChild('aedPrintArea') private printArea?: ElementRef<HTMLElement>;

  constructor(private readonly i18n: I18nService) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
  }

  isHrRow(item: AttendanceExApprovalItem): boolean {
    return String(item.affirmLevel) === '100';
  }

  /** STT dòng duyệt - dòng HR xác nhận (affirmLevel=100) hiển thị 'HR'. */
  stt(item: AttendanceExApprovalItem, index: number): string {
    return this.isHrRow(item) ? 'HR' : String(index + 1);
  }

  /** Phân loại duyệt - dòng HR để trống. */
  typeLabel(item: AttendanceExApprovalItem): string {
    if (this.isHrRow(item)) return '';
    const label = AFFIRM_TYPE_LABELS[item.affirmType ?? ''] ?? AFFIRM_TYPE_LABELS['1'];
    return this.i18n.t(label.key, label.fallback);
  }

  /** Trạng thái duyệt theo AFFIRM_TYPE + AFFIRM_FLAG - đúng nhánh c:choose ở viewAttendanceEx.jsp bản gốc;
   *  dòng HR (affirmLevel=100) mang CONFIRM_FLAG của đơn nên hiển thị theo trạng thái xác nhận. */
  status(item: AttendanceExApprovalItem): { label: string; color: string } {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const flag = String(item.affirmFlag ?? '');
    if (this.isHrRow(item)) {
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

  /** Giờ làm việc của ca "bắt đầu-kết thúc" (SHIFT_START_TIME-SHIFT_END_TIME bản gốc). */
  shiftTime(): string {
    const { shiftStartTime = '', shiftEndTime = '' } = this.info();
    return shiftStartTime || shiftEndTime ? `${shiftStartTime || ''}-${shiftEndTime || ''}` : '';
  }

  /** In nội dung chi tiết - ghi HTML vào iframe ẩn rồi gọi print() (cùng cách làm với LeaveApplyDetailComponent). */
  print(): void {
    const html = this.printArea?.nativeElement.innerHTML;
    if (!html) return;
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;width:0;height:0;border:none;visibility:hidden;';
    document.body.appendChild(iframe);
    const doc = iframe.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${AED_PRINT_CSS}</style></head><body>${html}</body></html>`);
    doc.close();
    iframe.contentWindow!.onafterprint = () => document.body.removeChild(iframe);
    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }, 300);
  }
}
