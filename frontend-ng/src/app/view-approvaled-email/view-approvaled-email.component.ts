import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, signal } from '@angular/core';
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
import { OtApplyDetailComponent } from '../shared/ot-apply-detail/ot-apply-detail.component';
import { OtApplyDetail, OtApprovalItem } from '../shared/ot-apply-detail/ot-apply-detail.model';
import { LeaveApplyDetailComponent } from '../shared/leave-apply-detail/leave-apply-detail.component';
import { LeaveApplyDetail } from '../shared/leave-apply-detail/leave-apply-detail.model';
import { AttendanceExApplyDetailComponent } from '../shared/attendance-ex-apply-detail/attendance-ex-apply-detail.component';
import { AttendanceExApplyDetail } from '../shared/attendance-ex-apply-detail/attendance-ex-apply-detail.model';
import { ApplyDetailKind, ApplyDetailResponse, SyAffirmEmailDto } from './view-approvaled-email.model';
import { ViewApprovaledEmailService } from './view-approvaled-email.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key bên dưới đã tồn tại sẵn (namespace vaed, arOtf, applyAtt, ck.modal.title) - không cần
 *  thêm key mới trong message properties. */
const I18N_KEYS = [
  'vaed.search.title', 'vaed.search.applyType', 'vaed.search.applyType.all', 'vaed.search.applyType.ot',
  'vaed.search.applyType.leave', 'vaed.search.applyType.anomaly', 'vaed.btn.search', 'vaed.col.no',
  'vaed.col.title', 'vaed.col.applyPerson', 'vaed.col.updateDate', 'vaed.col.affirmStatus', 'vaed.msg.noData',
  'vaed.msg.loadError', 'common.close', 'common.totalRows', 'arOtf.applyOt', 'arOtf.loadingData',
  'arOtf.loadFailed', 'arOtf.msg.noApplyNo', 'applyAtt.applyTitleFallback', 'common.print',
  'ess.infoApply.check_error_attendance',
];

const APPLY_TYPE_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '31', labelKey: 'vaed.search.applyType.ot', fallback: 'Tăng ca' },
  { value: '21', labelKey: 'vaed.search.applyType.leave', fallback: 'Nghỉ phép' },
  { value: '218197', labelKey: 'vaed.search.applyType.anomaly', fallback: 'Nghỉ bất thường' },
];

/** Mã AFFIRM_FLAG (SyAffirmEmailDto) -> màu nz-tag - đúng vaedStatusBadge() bản gốc (bảng mã riêng
 *  của module thông báo phê duyệt, KHÔNG trùng ý nghĩa với AFFIRM_FLAG ở ot-apply-batch-info dù có
 *  giá trị số giống nhau). */
const STATUS_COLOR: Record<string, string> = {
  '14014309': 'green',
  '14014310': 'red',
  '14014308': 'gold',
};

/**
 * Bản Angular của ess/infoApply/viewApprovaledEmail.html (Thymeleaf + jQuery, render bảng thủ công) -
 * Lịch sử toàn bộ đơn (tăng ca/nghỉ phép/nghỉ bất thường) đã qua xử lý (đã duyệt/từ chối/...) liên quan
 * đến người dùng hiện tại. Gọi lại nguyên API JSON có sẵn (xem ViewApprovaledEmailService) - không đổi
 * backend. Dùng nz-table (phân trang client-side) thay bảng HTML thủ công.
 *
 * Kiến trúc bám sát ViewApprovalEmailComponent (trang "Chưa duyệt" cùng nhóm) - dùng chung 3 API chi
 * tiết đơn và cùng gộp 3 modal Thymeleaf gốc (viewApprovaledOt/viewApprovaledLeave/viewAttendanceEx)
 * thành 1 nz-modal, nhưng bỏ toàn bộ phần chọn dòng + Duyệt/Từ chối vì trang này chỉ xem lại lịch sử
 * (modal luôn mở ở chế độ chỉ đọc - đúng ctx=null truyền vào vaotOpenApplyDetail/valOpenApplyDetail/
 * atexOpenApplyDetail() ở vaedOpenDetailModal() bản gốc). KHÔNG xóa 3 file fragment gốc vì chúng còn
 * dùng chung bởi nhiều trang Thymeleaf khác chưa migrate.
 */
@Component({
  selector: 'app-view-approvaled-email',
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
    OtApplyDetailComponent,
    LeaveApplyDetailComponent,
    AttendanceExApplyDetailComponent,
  ],
  templateUrl: './view-approvaled-email.component.html',
  styleUrl: './view-approvaled-email.component.css',
})
export class ViewApprovaledEmailComponent implements OnInit {
  readonly applyTypeOptions = APPLY_TYPE_OPTIONS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly displayRows = signal<SyAffirmEmailDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  titleFilter = '';
  applyTypeFilter: string | null = null;

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<ApplyDetailResponse | null>(null);
  @ViewChild(OtApplyDetailComponent) private otdDetail?: OtApplyDetailComponent;
  @ViewChild(LeaveApplyDetailComponent) private ladDetail?: LeaveApplyDetailComponent;
  @ViewChild(AttendanceExApplyDetailComponent) private aedDetail?: AttendanceExApplyDetailComponent;
  detailKind: ApplyDetailKind | null = null;

  private allRows: SyAffirmEmailDto[] = [];

  constructor(
    private readonly api: ViewApprovaledEmailService,
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
        this.errorMessage.set(this.i18n.t('vaed.msg.loadError', 'Lỗi tải dữ liệu'));
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

  /** Dữ liệu chi tiết đơn tăng ca cho OtApplyDetailComponent (cùng API /overtime/detail). */
  otDetail(d: ApplyDetailResponse): OtApplyDetail {
    return d as unknown as OtApplyDetail;
  }

  /** Dữ liệu chi tiết đơn nghỉ phép cho LeaveApplyDetailComponent (cùng API /leaveApply/detail). */
  leaveDetail(d: ApplyDetailResponse): LeaveApplyDetail {
    return d as unknown as LeaveApplyDetail;
  }

  /** Dữ liệu chi tiết đơn xác nhận chấm công cho AttendanceExApplyDetailComponent (API /checkAttendanceEx/detail). */
  attendanceExDetail(d: ApplyDetailResponse): AttendanceExApplyDetail {
    return d as unknown as AttendanceExApplyDetail;
  }

  /** In popup chi tiết đơn tăng ca / nghỉ phép / xác nhận chấm công (printDialog() bản gốc). */
  printDetail(): void {
    if (this.detailKind === 'ot') this.otdDetail?.print();
    else if (this.detailKind === 'leave') this.ladDetail?.print();
    else if (this.detailKind === 'attendanceEx') this.aedDetail?.print();
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  /** Thông tin nghiệp vụ của đơn (otInfo cho tăng ca, leaveInfo cho nghỉ phép/điều chỉnh chấm công). */
  detailInfo(d: ApplyDetailResponse): Record<string, any> {
    return (this.detailKind === 'ot' ? d.otInfo : d.leaveInfo) || {};
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
        : this.i18n.t('ess.infoApply.check_error_attendance', 'Xác nhận chấm công');
    if (this.detailKind === 'attendanceEx') return `【${fallback}】`;
    return `[${info['leaveTypeName'] || fallback}]`;
  }
}
