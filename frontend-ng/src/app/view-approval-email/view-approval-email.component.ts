import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
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
import {
  AffirmContext,
  ApplyDetailKind,
  ApplyDetailResponse,
  ApprovalEmailRow,
  ExecuteItem,
} from './view-approval-email.model';
import { ViewApprovalEmailService } from './view-approval-email.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key bên dưới đã tồn tại sẵn (namespace vae, arOtf, applyAtt, ess.infoApply) - không cần
 *  thêm key mới trong message properties. */
const I18N_KEYS = [
  'vae.search.title', 'vae.search.applyType', 'vae.search.applyType.all', 'vae.search.applyType.ot',
  'vae.search.applyType.leave', 'vae.search.applyType.anomaly', 'vae.btn.search', 'vae.btn.approve',
  'vae.btn.reject', 'vae.col.no', 'vae.col.title', 'vae.col.applyPerson', 'vae.col.updateDate',
  'vae.col.affirmStatus', 'vae.modal.approve.title', 'vae.modal.reject.title', 'vae.modal.remarkLabel',
  'vae.modal.remarkPlaceholder', 'vae.msg.noSelect', 'vae.msg.approveSuccess', 'vae.msg.rejectSuccess',
  'vae.msg.executeFail', 'vae.msg.noData', 'vae.msg.loadError', 'common.close', 'common.confirm',
  'common.totalRows', 'arOtf.applyOt', 'arOtf.loadingData', 'arOtf.loadFailed', 'arOtf.msg.noApplyNo',
  'applyAtt.applyTitleFallback', 'common.print', 'ess.infoApply.check_error_attendance',
];

const APPLY_TYPE_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '31', labelKey: 'vae.search.applyType.ot', fallback: 'Tăng ca' },
  { value: '21', labelKey: 'vae.search.applyType.leave', fallback: 'Nghỉ phép' },
  { value: '218197', labelKey: 'vae.search.applyType.anomaly', fallback: 'Nghỉ bất thường' },
];

/**
 * Bản Angular của ess/infoApply/viewApprovalEmail.html (Thymeleaf + jQuery, render bảng thủ công bằng
 * HTML string) - Danh sách đơn (tăng ca/nghỉ phép/nghỉ bất thường) đang chờ người dùng hiện tại phê
 * duyệt. Gọi lại nguyên các API JSON đã có sẵn (xem ViewApprovalEmailService) - không đổi backend.
 * Dùng nz-table (phân trang client-side) thay cho bảng HTML thủ công.
 *
 * 3 modal chi tiết đơn (viewApprovaledOt/viewApprovaledLeave/viewAttendanceEx - Thymeleaf fragment)
 * được gộp thành 1 nz-modal chung điều khiển bởi detailKind, vì cả 3 modal gốc giống hệt nhau về cấu
 * trúc (chỉ khác API gọi + tên field otInfo/leaveInfo) - KHÔNG xóa 3 file fragment gốc vì chúng còn
 * được dùng chung bởi nhiều trang Thymeleaf khác chưa migrate (viewNoticeedEmail, viewApprovaledEmail,
 * viewApplyAttenanceManagentInfoList_new, viewAttendanceExConfirm, viewLeaveConfirmList).
 */
@Component({
  selector: 'app-view-approval-email',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzTagModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
    OtApplyDetailComponent,
    LeaveApplyDetailComponent,
    AttendanceExApplyDetailComponent,
  ],
  templateUrl: './view-approval-email.component.html',
  styleUrl: './view-approval-email.component.css',
})
export class ViewApprovalEmailComponent implements OnInit {
  readonly applyTypeOptions = APPLY_TYPE_OPTIONS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly displayRows = signal<ApprovalEmailRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  titleFilter = '';
  applyTypeFilter: string | null = null;

  readonly actionModalVisible = signal(false);
  actionFlag: 1 | 2 = 1;
  actionRemark = '';

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<ApplyDetailResponse | null>(null);
  @ViewChild(OtApplyDetailComponent) private otdDetail?: OtApplyDetailComponent;
  @ViewChild(LeaveApplyDetailComponent) private ladDetail?: LeaveApplyDetailComponent;
  @ViewChild(AttendanceExApplyDetailComponent) private aedDetail?: AttendanceExApplyDetailComponent;
  /** Dòng duyệt của chính người đang duyệt (chưa duyệt) hiển thị ô nhập ý kiến trong popup đơn tăng ca /
   *  nghỉ phép (dùng chung cho OtApplyDetailComponent và LeaveApplyDetailComponent). */
  readonly approvalOpinionEditable = (item: Pick<OtApprovalItem, 'affirmPersonId' | 'affirmFlag'>): boolean =>
    this.isPendingApprovalRow(item.affirmPersonId ?? '', item.affirmFlag);
  detailKind: ApplyDetailKind | null = null;
  pendingOpinion = '';

  private allRows: ApprovalEmailRow[] = [];
  private affirmCtx: AffirmContext | null = null;

  constructor(
    private readonly api: ViewApprovalEmailService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly route: ActivatedRoute,
  ) {}

  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

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
        this.allRows = (list ?? []).map((r) => ({ ...r, selected: false }));
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('vae.msg.loadError', 'Lỗi tải dữ liệu'));
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

  // ==================== Chọn dòng (checkbox) ====================

  get allSelected(): boolean {
    const rows = this.displayRows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }

  get someSelected(): boolean {
    return this.displayRows().some((r) => r.selected) && !this.allSelected;
  }

  toggleSelectAll(checked: boolean): void {
    this.displayRows().forEach((r) => (r.selected = checked));
  }

  // ==================== Duyệt / Từ chối hàng loạt ====================

  openAction(flag: 1 | 2): void {
    const selected = this.displayRows().filter((r) => r.selected);
    if (!selected.length) {
      this.message.warning(this.i18n.t('vae.msg.noSelect', 'Vui lòng chọn ít nhất một đơn.'));
      return;
    }
    this.actionFlag = flag;
    this.actionRemark = flag === 1 ? 'Ok' : 'Reject';
    this.actionModalVisible.set(true);
  }

  cancelAction(): void {
    this.actionModalVisible.set(false);
  }

  confirmAction(): void {
    const selected = this.displayRows().filter((r) => r.selected);
    const content = this.actionRemark.trim() || (this.actionFlag === 1 ? 'Ok' : 'Reject');
    const items: ExecuteItem[] = selected.map((r) => ({
      applyNo: r.applyNo,
      applyType: r.applyType,
      applyFlag: r.applyFlag,
      affirmLevel: r.affirmLevel,
      flag: this.actionFlag,
      affirmContent: content,
    }));
    this.actionModalVisible.set(false);
    this.runExecute(items, this.actionFlag);
  }

  private runExecute(items: ExecuteItem[], flag: 1 | 2): void {
    this.api.execute(items).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(
            flag === 1
              ? this.i18n.t('vae.msg.approveSuccess', 'Phê duyệt thành công!')
              : this.i18n.t('vae.msg.rejectSuccess', 'Từ chối thành công!'),
          );
        } else {
          this.showError(res.message || this.i18n.t('vae.msg.executeFail', 'Có lỗi xảy ra trong quá trình xử lý.'));
        }
        this.loadList();
      },
      error: () => {
        this.showError(this.i18n.t('vae.msg.executeFail', 'Có lỗi xảy ra trong quá trình xử lý.'));
        this.loadList();
      },
    });
  }

  // ==================== Modal chi tiết đơn (gộp OT/Nghỉ phép/Điều chỉnh chấm công) ====================

  openDetail(row: ApprovalEmailRow): void {
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
    this.affirmCtx = {
      applyNo: row.applyNo,
      applyType: row.applyType,
      applyFlag: row.applyFlag,
      affirmLevel: row.affirmLevel,
      affirmPersonId: row.affirmPersonId,
      affirmFlag: row.affirmFlag,
    };
    this.pendingOpinion = '';
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

  /** Người dùng hiện tại có đúng là người đang chờ duyệt ở mức hiện tại của đơn đang xem không - đúng
   *  điều kiện canAffirm ở cả 3 script gốc (fromApprovalEmail luôn true vì trang này chỉ mở modal từ
   *  danh sách chờ duyệt). */
  get detailCanAffirm(): boolean {
    return !!(this.affirmCtx && this.affirmCtx.affirmPersonId && String(this.affirmCtx.affirmFlag) === '0');
  }

  isPendingApprovalRow(affirmPersonId: string, affirmFlag: string): boolean {
    return this.detailCanAffirm && affirmPersonId === this.affirmCtx!.affirmPersonId && String(affirmFlag) === '0';
  }

  doDetailAffirm(flag: 1 | 2): void {
    if (!this.affirmCtx) return;
    const content = this.pendingOpinion.trim() || (flag === 1 ? 'Ok' : 'Reject');
    const items: ExecuteItem[] = [
      {
        applyNo: this.affirmCtx.applyNo,
        applyType: this.affirmCtx.applyType,
        applyFlag: this.affirmCtx.applyFlag,
        affirmLevel: this.affirmCtx.affirmLevel,
        flag,
        affirmContent: content,
      },
    ];
    this.detailVisible.set(false);
    this.runExecute(items, flag);
  }
}
