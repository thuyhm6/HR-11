import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ApplyDetailKind, ApplyDetailResponse, SyAffirmEmailDto } from './view-noticeed-email.model';
import { ViewNoticeedEmailService } from './view-noticeed-email.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key bên dưới đã tồn tại sẵn (namespace vne, arOtf, applyAtt, ck.modal.title) - không cần
 *  thêm key mới trong message properties. */
const I18N_KEYS = [
  'vne.search.title', 'vne.search.applyType', 'vne.search.applyType.all', 'vne.search.applyType.ot',
  'vne.search.applyType.leave', 'vne.search.applyType.anomaly', 'vne.btn.search', 'vne.col.no',
  'vne.col.title', 'vne.col.applyPerson', 'vne.col.updateDate', 'vne.col.affirmStatus',
  'vne.msg.noData', 'vne.msg.loadError', 'common.close', 'common.stt', 'common.empName', 'common.empId',
  'common.deptName', 'common.hours', 'common.reason', 'common.startTime', 'common.endTime',
  'common.position', 'common.totalRows',
  'arOtf.applyOt', 'arOtf.applyTitle', 'arOtf.applicant', 'arOtf.approvalSeq', 'arOtf.approvalStatus',
  'arOtf.opinion', 'arOtf.actionTime', 'arOtf.empInfo', 'arOtf.otInfo', 'arOtf.otType', 'arOtf.otDate',
  'arOtf.otBegin', 'arOtf.otEnd', 'arOtf.loadingData', 'arOtf.noApprovalData', 'arOtf.loadFailed',
  'arOtf.msg.noApplyNo',
  'applyAtt.subject', 'applyAtt.applicant', 'applyAtt.approvalSeq', 'applyAtt.approvalStatus',
  'applyAtt.opinion', 'applyAtt.actionTime', 'applyAtt.empInfo', 'applyAtt.leaveInfo',
  'applyAtt.leaveTypeFull', 'applyAtt.leaveDuration', 'applyAtt.loadingData', 'applyAtt.noApprovalData',
  'applyAtt.loadFailed', 'applyAtt.applyTitleFallback', 'applyAtt.msg.noApplyNo',
  'ck.modal.title',
];

const APPLY_TYPE_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '31', labelKey: 'vne.search.applyType.ot', fallback: 'Tăng ca' },
  { value: '21', labelKey: 'vne.search.applyType.leave', fallback: 'Nghỉ phép' },
  { value: '218197', labelKey: 'vne.search.applyType.anomaly', fallback: 'Nghỉ bất thường' },
];

/** Mã AFFIRM_FLAG (SyAffirmEmailDto) -> màu nz-tag - đúng vneStatusBadge() bản gốc (bảng mã riêng
 *  của module thông báo phê duyệt, KHÔNG trùng ý nghĩa với AFFIRM_FLAG ở ot-apply-batch-info dù có
 *  giá trị số giống nhau). */
const STATUS_COLOR: Record<string, string> = {
  '14014309': 'green',
  '14014310': 'red',
  '14014308': 'gold',
};

/**
 * Bản Angular của ess/infoApply/viewNoticeedEmail.html (Thymeleaf + jQuery, render bảng thủ công) -
 * Danh sách đơn (tăng ca/nghỉ phép/nghỉ bất thường) đã duyệt xong, được gửi thông báo cho người xin
 * phép. Gọi lại nguyên API JSON có sẵn (xem ViewNoticeedEmailService) - không đổi backend. Dùng
 * nz-table (phân trang client-side) thay bảng HTML thủ công.
 *
 * Kiến trúc + hành vi giống hệt ViewApprovaledEmailComponent (trang "Đã duyệt" cùng nhóm - chỉ khác
 * API endpoint và namespace message.properties) - modal chi tiết chỉ đọc (ctx=null, không có phần
 * Duyệt/Từ chối), gộp 3 modal Thymeleaf gốc dùng chung. KHÔNG xóa 3 file fragment gốc vì chúng còn
 * dùng chung bởi nhiều trang Thymeleaf khác chưa migrate.
 */
@Component({
  selector: 'app-view-noticeed-email',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTagModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-noticeed-email.component.html',
  styleUrl: './view-noticeed-email.component.css',
})
export class ViewNoticeedEmailComponent implements OnInit {
  readonly applyTypeOptions = APPLY_TYPE_OPTIONS;
  readonly pageSizeOptions = [25, 50, 100, 200];

  readonly displayRows = signal<SyAffirmEmailDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  titleFilter = '';
  applyTypeFilter: string | null = null;

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<ApplyDetailResponse | null>(null);
  detailKind: ApplyDetailKind | null = null;

  private allRows: SyAffirmEmailDto[] = [];

  constructor(
    private readonly api: ViewNoticeedEmailService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    // Tự lọc theo applyTypeCode từ query string khi mở từ thông báo - đúng hành vi bản gốc.
    const typeCode = this.route.snapshot.queryParamMap.get('applyTypeCode');
    if (typeCode) this.applyTypeFilter = typeCode;
    this.loadList();
  }

  loadList(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList().subscribe({
      next: (list) => {
        this.allRows = list ?? [];
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('vne.msg.loadError', 'Lỗi tải dữ liệu'));
        this.allRows = [];
        this.displayRows.set([]);
        this.loading.set(false);
      },
    });
  }

  search(): void {
    this.applyFilter();
  }

  private applyFilter(): void {
    const title = this.titleFilter.trim().toLowerCase();
    const type = this.applyTypeFilter || '';
    this.displayRows.set(
      this.allRows.filter((r) => {
        const matchType = !type || r.applyTypeCode === type;
        const matchTitle = !title || (r.title || '').toLowerCase().includes(title);
        return matchType && matchTitle;
      }),
    );
  }

  statusColor(affirmFlag: string): string {
    return STATUS_COLOR[String(affirmFlag || '')] ?? 'default';
  }

  // ==================== Modal chi tiết đơn (gộp OT/Nghỉ phép/Điều chỉnh chấm công, chỉ đọc) ====================

  openDetail(row: SyAffirmEmailDto): void {
    const url = row.affirmUrl || '';
    const kind: ApplyDetailKind | null =
      url.indexOf('viewApprovaledOt') !== -1
        ? 'ot'
        : url.indexOf('viewApprovaledLeave') !== -1
          ? 'leave'
          : url.indexOf('viewAttendanceEx') !== -1
            ? 'attendanceEx'
            : null;
    if (!kind || !row.applyNo) {
      this.message.warning(this.i18n.t('arOtf.msg.noApplyNo', 'Không tìm thấy số đơn để xem chi tiết'));
      return;
    }

    this.detailKind = kind;
    this.detailData.set(null);
    this.detailErrorMessage.set(null);
    this.detailVisible.set(true);
    this.detailLoading.set(true);

    const req$ =
      kind === 'ot'
        ? this.api.getOtDetail(row.applyNo, row.applyType)
        : kind === 'leave'
          ? this.api.getLeaveDetail(row.applyNo, row.applyType)
          : this.api.getAttendanceExDetail(row.applyNo, row.applyType);

    req$.subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t('arOtf.loadFailed', 'Tải dữ liệu thất bại'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  /** Thông tin nghiệp vụ của đơn (otInfo cho tăng ca, leaveInfo cho nghỉ phép/điều chỉnh chấm công). */
  detailInfo(d: ApplyDetailResponse): Record<string, any> {
    return (this.detailKind === 'ot' ? d.otInfo : d.leaveInfo) || {};
  }

  detailEmployeeInfo(d: ApplyDetailResponse): Record<string, any> {
    return d.employeeInfo || this.detailInfo(d);
  }

  detailModalTitle(d: ApplyDetailResponse | null): string {
    if (!d) return '';
    const info = this.detailInfo(d);
    if (this.detailKind === 'ot') {
      return `[${info['otTypeName'] || this.i18n.t('arOtf.applyOt', 'Xin tăng ca')}]`;
    }
    const fallback =
      this.detailKind === 'leave'
        ? this.i18n.t('applyAtt.applyTitleFallback', 'Xin nghỉ phép')
        : this.i18n.t('ck.modal.title', 'Thông tin phê duyệt');
    return `[${info['leaveTypeName'] || fallback}]`;
  }

  /** Dòng "Tiêu đề" trong modal - đúng vaotBuildApplyTitle()/valBuildApplyTitle() bản gốc. */
  detailApplyTitle(d: ApplyDetailResponse): string {
    const info = this.detailInfo(d);
    const typeName = this.detailKind === 'ot' ? info['otTypeName'] : info['leaveTypeName'];
    const fromTime = this.detailKind === 'ot' ? info['detailFromDateTime'] : info['leaveFromTime'];
    const toTime = this.detailKind === 'ot' ? info['detailToDateTime'] : info['leaveToTime'];
    const localName = info['localName'] || '';
    if (!typeName && !localName && !fromTime && !toTime) return '';
    return `${typeName || ''}/Apply(${localName})[Date: ${fromTime || ''} ~ ${toTime || ''}]`;
  }

  detailApplicant(d: ApplyDetailResponse): string {
    const emp = this.detailEmployeeInfo(d);
    return `${emp['localName'] || ''}/${emp['postGradeName'] || ''}/${emp['deptName'] || ''}`;
  }

  /** Thời lượng nghỉ phép - đúng valFormatDuration() bản gốc (quy đổi ra Ngày/Giờ theo dayHours). Chỉ
   *  áp dụng cho đơn nghỉ phép; đơn điều chỉnh chấm công (attendanceEx) hiển thị applyLength thô, đúng
   *  atexRenderData() bản gốc (không có hàm quy đổi). */
  detailDuration(d: ApplyDetailResponse): string {
    const info = this.detailInfo(d);
    if (this.detailKind !== 'leave') return info['applyLength'] || '';
    const len = parseFloat(info['applyLength']);
    const dh = parseFloat(info['dayHours']);
    if (isNaN(len) || isNaN(dh) || dh === 0) return info['applyLength'] || '';
    const days = Math.floor(len / dh);
    const hours = len - days * dh;
    let text = '';
    if (days > 0) text += `${days} Ngày`;
    if (hours > 0) text += (text ? ' ' : '') + `${hours} Giờ`;
    return text || String(len);
  }

  /** STT hàng phê duyệt - dòng tổng hợp xác nhận của HR có affirmLevel='100' hiển thị là 'HR' thay vì
   *  số thứ tự thô, đúng vaotRenderApprovalRows() bản gốc. */
  approvalStt(affirmLevel: string, index: number): string {
    const stt = affirmLevel || String(index + 1);
    return stt === '100' ? 'HR' : stt;
  }
}
