import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { LeaveApplyDetail, LeaveApplyFile, LeaveApprovalItem } from './leave-apply-detail.model';

/** Toàn bộ key đều dùng lại từ viewApprovaledLeaveInfo.jsp bản gốc - đã có đủ trong 5 file messages*.properties. */
const I18N_KEYS = [
  'ess.infoApply.attendance_application', 'ess.title.Title', 'public.title.qianzhe', 'ess.infoApply.in_order',
  'ess.infoApply.approval_distinction', 'ess.infoApply.approval_status', 'org.title.LOCAL_NAME',
  'ess.infoApply.comment', 'ess.infoApply.dealing_with_transactions', 'ess.infoApply.DEPT_NAME',
  'ess.infoApply.applicant_information', 'ess.infoApply.EMP_ID', 'ess.infoApply.DEPT', 'ess.infoApply.Rank',
  'ess.infoApply.year_leave_information', 'ess.infoApply.sum_year_leave_days', 'ess.infoApply.already_used',
  'ess.infoApply.Remainder', 'ess.infoApply.application_information', 'ess.infoApply.attendance_type',
  'ess.infoApply.attendance_start_time', 'ess.infoApply.attendance_end_time', 'ess.infoApply.attendance_time',
  'ess.infoApply.Reason', 'ar.viewsummaryparameteritem.title.day', 'ar.viewsummaryparameteritem.title.hour',
  'hr.viewBadArchives.title.FILE', 'ess.viewAttendanceEx.SHENHE.b', 'ess.viewAttendanceEx.XIEYI.b',
  'ess.viewAttendanceEx.TONGGAO.b', 'ess.viewAttendanceEx.QIAN.b', 'ess.viewAttendanceEx.WEITONGGAO.b',
  'ess.viewAttendanceEx.YITONGGAO.b', 'ess.affirmApply.title.remark.weishenpi',
  'ess.affirmApply.title.remark.yitongguo', 'ess.affirmApply.title.remark.yifoujue',
  'ess.affirmApply.title.remark.yitijiao', 'ess.affirmApply.title.remark.yiquxiao', 'ess.trans.title.reject',
  'ess.viewApply.title.notAffirmed', 'arOtf.noApprovalData', 'common.noData', 'common.print', 'common.close',
];

/** Mã loại nghỉ phép năm - hiển thị thêm bảng thông tin phép năm (đúng c:if LEAVE_TYPE_CODE eq '26' bản gốc). */
const ANNUAL_LEAVE_TYPE_CODE = '26';

/** Phân loại duyệt theo SY_AFFIRM_EMAIL.AFFIRM_TYPE. */
const AFFIRM_TYPE_LABELS: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'ess.viewAttendanceEx.SHENHE.b', fallback: 'Duyệt' },
  '2': { key: 'ess.viewAttendanceEx.XIEYI.b', fallback: 'Hợp đồng' },
  '3': { key: 'ess.viewAttendanceEx.TONGGAO.b', fallback: 'Thông báo' },
  '4': { key: 'ess.viewAttendanceEx.QIAN.b', fallback: 'Xin phép' },
};

/** Trạng thái xác nhận HR (ESS_LEAVE_APPLY_TB.CONFIRM_FLAG) của dòng affirmLevel=100 - đúng viewAffirmList2 bản gốc. */
const CONFIRM_FLAG_LABELS: Record<string, { key: string; fallback: string; color: string }> = {
  '0': { key: 'ess.viewApply.title.notAffirmed', fallback: 'Chưa duyệt', color: 'default' },
  '1': { key: 'ess.viewAttendanceEx.SHENHE.b', fallback: 'Duyệt', color: 'green' },
  '2': { key: 'ess.trans.title.reject', fallback: 'Từ chối', color: 'red' },
};

/** URL tải file đính kèm ESS_FILE (EssEmpInfoController.downloadFile). */
const FILE_DOWNLOAD_URL = '/ess/empinfo/api/files/download/';

/** CSS cho bản in (iframe ẩn - không kế thừa style NG-ZORRO/Bootstrap). */
const LAD_PRINT_CSS = `
  body { font-family: Arial, sans-serif; font-size: 12px; margin: 16px; color: #000; }
  .lad-print-title { text-align: center; font-weight: bold; font-size: 15px; margin: 8px 0 16px; }
  .lad-section-title { font-weight: bold; margin: 14px 0 6px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
  th, td { border: 1px solid #999; padding: 4px 6px; }
  th, .lad-label { background: #f0f0f0; font-weight: bold; }
  .text-center { text-align: center; }
  .lad-tag { border: none !important; padding: 0 !important; background: none !important; color: #000 !important; }
  a { color: #000; text-decoration: none; }
  input { border: none; font: inherit; }
`;

/**
 * Nội dung chi tiết đơn nghỉ phép - bản Angular của /ess/infoApply/viewApprovaledLeaveInfo (dự án Hanwha_HTSV):
 * Tiêu đề/Người xin phép → Trình tự duyệt (+ dòng HR xác nhận) → Thông tin nhân viên → Thông tin phép năm
 * (chỉ phép năm) → Thông tin xin phép → File đính kèm.
 * Chỉ là phần thân - trang dùng tự bọc trong nz-modal và tự đặt nút (In/Đóng/Duyệt/Từ chối), dùng chung ở
 * apply-attendance-batch-info, apply-attendance-info-list, leave-confirm, view-approval-email,
 * view-approvaled-email, view-noticeed-email (cùng mẫu với OtApplyDetailComponent cho đơn tăng ca).
 */
@Component({
  selector: 'app-leave-apply-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTableModule, NzTagModule, NzInputModule, TranslatePipe],
  templateUrl: './leave-apply-detail.component.html',
  styleUrl: './leave-apply-detail.component.css',
})
export class LeaveApplyDetailComponent implements OnInit {
  readonly data = input<LeaveApplyDetail | null>(null);
  /** Dòng duyệt nào hiển thị ô nhập ý kiến (người đang duyệt ở trang Duyệt email) - mặc định chỉ xem. */
  readonly opinionEditable = input<(item: LeaveApprovalItem) => boolean>(() => false);
  readonly opinion = model<string>('');

  /** Tiêu đề đơn + người xin phép - lấy từ dòng phê duyệt đầu tiên có TITLE (viewAffirmList[0] bản gốc). */
  readonly header = computed(() => {
    const first = (this.data()?.approvalList ?? []).find((a) => a.title || a.applyPersonInfo);
    return { title: first?.title ?? '', applyPersonInfo: first?.applyPersonInfo ?? '' };
  });

  /** Thông tin nhân viên - API trả employeeInfo, dự phòng leaveInfo (cùng 1 DTO). */
  readonly emp = computed<Record<string, any>>(() => this.data()?.employeeInfo || this.data()?.leaveInfo || {});

  readonly isAnnualLeave = computed(
    () => String(this.data()?.leaveInfo?.['leaveTypeCode'] ?? '') === ANNUAL_LEAVE_TYPE_CODE,
  );

  @ViewChild('ladPrintArea') private printArea?: ElementRef<HTMLElement>;

  constructor(private readonly i18n: I18nService) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
  }

  isHrRow(item: LeaveApprovalItem): boolean {
    return String(item.affirmLevel) === '100';
  }

  /** STT dòng duyệt - dòng HR xác nhận (affirmLevel=100) hiển thị 'HR'. */
  stt(item: LeaveApprovalItem, index: number): string {
    return this.isHrRow(item) ? 'HR' : String(index + 1);
  }

  /** Phân loại duyệt - dòng HR để trống như bản gốc. */
  typeLabel(item: LeaveApprovalItem): string {
    if (this.isHrRow(item)) return '';
    const label = AFFIRM_TYPE_LABELS[item.affirmType ?? ''] ?? AFFIRM_TYPE_LABELS['1'];
    return this.i18n.t(label.key, label.fallback);
  }

  /** Trạng thái duyệt theo AFFIRM_TYPE + AFFIRM_FLAG - đúng nhánh c:choose ở viewApprovaledLeaveInfo.jsp bản gốc;
   *  dòng HR (affirmLevel=100) mang CONFIRM_FLAG của đơn nên hiển thị theo trạng thái xác nhận. */
  status(item: LeaveApprovalItem): { label: string; color: string } {
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

  /** Thời lượng nghỉ quy ra "x Ngày y Tiếng" theo số giờ/ngày (DAY_HOURS) - đúng công thức bản gốc:
   *  chỉ hiện phần Ngày khi LEAVE_LENGTH >= DAY_HOURS, phần giờ = LEAVE_LENGTH % DAY_HOURS. */
  duration(): string {
    const info = this.data()?.leaveInfo;
    if (!info) return '';
    const len = parseFloat(info['applyLength']);
    const dh = parseFloat(info['dayHours']);
    if (isNaN(len)) return info['applyLength'] ?? '';
    const dayLabel = this.i18n.t('ar.viewsummaryparameteritem.title.day', 'Ngày');
    const hourLabel = this.i18n.t('ar.viewsummaryparameteritem.title.hour', 'Tiếng');
    if (isNaN(dh) || dh <= 0) return `${len} ${hourLabel}`;
    const hours = Math.round((len % dh) * 100) / 100;
    const days = Math.floor(len / dh);
    return len >= dh ? `${days} ${dayLabel} ${hours} ${hourLabel}` : `${hours} ${hourLabel}`;
  }

  /** Số phép năm - giữ tối đa 2 chữ số thập phân. */
  num(value: unknown): string {
    if (value === null || value === undefined || value === '') return '0';
    const n = Number(value);
    return isNaN(n) ? String(value) : String(Math.round(n * 100) / 100);
  }

  fileUrl(file: LeaveApplyFile): string {
    return FILE_DOWNLOAD_URL + encodeURIComponent(file.fileNo);
  }

  /** In nội dung chi tiết - ghi HTML vào iframe ẩn rồi gọi print() (printDialog() bản gốc, cùng cách làm với
   *  OtApplyDetailComponent.print()). */
  print(): void {
    const html = this.printArea?.nativeElement.innerHTML;
    if (!html) return;
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;width:0;height:0;border:none;visibility:hidden;';
    document.body.appendChild(iframe);
    const doc = iframe.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${LAD_PRINT_CSS}</style></head><body>${html}</body></html>`);
    doc.close();
    iframe.contentWindow!.onafterprint = () => document.body.removeChild(iframe);
    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }, 300);
  }
}
