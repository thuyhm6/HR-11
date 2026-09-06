import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CwaAbnormalApplyService } from './cwa-abnormal-apply.service';
import {
  ApproverInfo,
  AttendanceExApplyItem,
  CwaAbnormalDisplayRow,
  EssBasicInfoDto,
  EssCwaAbnormalDto,
} from './cwa-abnormal-apply.model';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'essCwa.startDate', 'essCwa.endDate', 'essCwa.search', 'essCwa.batchIn', 'essCwa.batchOut',
  'essCwa.applyAll', 'essCwa.submit', 'essCwa.category', 'essCwa.workDate', 'essCwa.cardSwipe',
  'essCwa.timeInput', 'essCwa.reason', 'essCwa.approver', 'essCwa.quickFilter', 'essCwa.noData',
  'essCwa.loadError', 'essCwa.selectRowAlert', 'essCwa.fillTimeAlert', 'essCwa.applySuccess',
  'essCwa.applyFail', 'essCwa.connectError', 'essCwa.inLabel', 'essCwa.outLabel',
  'common.stt', 'common.empId', 'common.totalRows',
];

/**
 * Bản Angular của ess/infoApply/viewShowCwaAbnormalApply.html (Thymeleaf + jQuery, tự build bảng +
 * phân trang bằng tay - KHÔNG dùng DataTables) - Xin phép bổ sung/điều chỉnh giờ vào/ra cho các ngày
 * chấm công bất thường (thiếu giờ quẹt thẻ) của chính nhân viên đang đăng nhập. Gọi lại nguyên các API
 * JSON đã có sẵn (không đổi backend) - xem CwaAbnormalApplyService. Dùng nz-table (phân trang
 * client-side, BE trả toàn bộ danh sách theo bộ lọc) thay bảng HTML tự build chuỗi jQuery - giống
 * manage-emp-position-info. Cặp input giờ/phút tự viết (scaClampHour/scaFmtHour...) -> 1 nz-date-picker
 * có nzShowTime cho mỗi ô Vào/Ra. Cột "Người duyệt" lặp lại y hệt trên từng dòng ở bản gốc (do JS gốc
 * gán chung 1 chuỗi text vào mọi dòng) được tách thành 1 bảng phê duyệt riêng hiển thị 1 lần duy nhất -
 * giống cách sst-apply-attendance.component.html đã làm cho cùng loại dữ liệu (SyAffirmEmailDto).
 * "Thực hiện tất cả" chỉ áp dụng cho các dòng đang hiển thị ở trang hiện tại (cwaTable.data) - giữ đúng
 * giới hạn kỹ thuật của scaApplyAll() bản gốc (chỉ với tới input đang render trong DOM). Chọn tất cả
 * (checkbox header) thì có phần khác bản gốc: áp dụng cho TOÀN BỘ danh sách đã lọc (mọi trang), không
 * chỉ trang hiện tại như scaToggleAll() gốc - đây là giới hạn kỹ thuật của cách dựng DOM thủ công cũ,
 * không phải hành vi nghiệp vụ cần giữ nguyên.
 */
@Component({
  selector: 'app-cwa-abnormal-apply',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './cwa-abnormal-apply.component.html',
  styleUrl: './cwa-abnormal-apply.component.css',
})
export class CwaAbnormalApplyComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly rows = signal<CwaAbnormalDisplayRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly approvers = signal<ApproverInfo[]>([]);
  readonly approversLoading = signal(false);
  readonly submitting = signal(false);

  /** Dùng signal (không phải field thường như các trang lọc nhanh khác) để filteredRows là computed
   *  đúng nghĩa: nhớ lại kết quả cũ khi không đổi (tránh nz-table nhận mảng mới mỗi vòng change
   *  detection rồi tự reset về trang 1), đồng thời vẫn lọc lại ngay khi gõ. */
  readonly quickFilterKeyword = signal('');
  readonly filteredRows = computed(() => {
    const kw = this.quickFilterKeyword().trim().toLowerCase();
    const rows = this.rows();
    if (!kw) return rows;
    return rows.filter((r) =>
      [r.itemName, r.itemNo, r.arDateStr, r.indoorTime, r.outdoorTime].some(
        (v) => v && String(v).toLowerCase().includes(kw),
      ),
    );
  });

  startDate: Date | null = null;
  endDate: Date | null = null;
  globalInTime: Date | null = null;
  globalOutTime: Date | null = null;

  private personId = '';
  private localName = '';

  constructor(
    private readonly api: CwaAbnormalApplyService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.setDefaultGlobalTimes();
    this.api.getBasicInfo().subscribe((data) => {
      this.basicInfo.set(data);
      this.personId = data?.personId || '';
      this.localName = data?.localName || '';
      this.loadApprovers();
      this.search();
    });
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({ startDate: this.formatDmy(this.startDate), endDate: this.formatDmy(this.endDate) })
      .subscribe({
        next: (list) => {
          this.rows.set((list ?? []).map((dto) => this.buildDisplayRow(dto)));
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('essCwa.loadError', 'Lỗi tải dữ liệu'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  isAllSelected(): boolean {
    const rows = this.rows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }

  isSomeSelected(): boolean {
    return this.rows().some((r) => r.selected) && !this.isAllSelected();
  }

  toggleSelectAll(checked: boolean): void {
    this.rows().forEach((r) => (r.selected = checked));
  }

  /** Copy giờ vào/ra hàng loạt vào các dòng truyền vào (gọi với cwaTable.data từ template - tức trang
   *  hiện tại) - giữ đúng hành vi scaApplyAll() bản gốc, chỉ ghi đè khi có nhập giờ hàng loạt. */
  applyAllToPage(pageRows: readonly CwaAbnormalDisplayRow[]): void {
    pageRows.forEach((r) => {
      if (this.globalInTime) r.inTime = new Date(this.globalInTime.getTime());
      if (this.globalOutTime) r.outTime = new Date(this.globalOutTime.getTime());
    });
  }

  submit(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.message.warning(t('essCwa.selectRowAlert', 'Vui lòng chọn ít nhất một dòng để xin phép.'));
      return;
    }
    if (selected.some((r) => !r.inTime || !r.outTime)) {
      this.message.warning(t('essCwa.fillTimeAlert', 'Vui lòng nhập đầy đủ thời gian vào/ra cho tất cả dòng được chọn.'));
      return;
    }
    this.modal.confirm({
      nzTitle: t('essCwa.submit', 'Xin phép'),
      nzContent: t('essCwa.submit', 'Xin phép'),
      nzOnOk: () => this.doSubmit(selected),
    });
  }

  private doSubmit(selected: CwaAbnormalDisplayRow[]): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const payload: AttendanceExApplyItem[] = selected.map((r) => ({
      applyNo: r.pkNo,
      personId: this.personId,
      localName: this.localName,
      itemNo: r.itemNo,
      arDateStr: r.arDateStr,
      fromDateTime: this.formatDmyHm(r.inTime),
      toDateTime: this.formatDmyHm(r.outTime),
      workHour: this.calcWorkHour(r.inTime, r.outTime),
      remark: r.remark,
    }));
    this.submitting.set(true);
    this.api.submit(payload).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (res?.success) {
          this.message.success(res.message || t('essCwa.applySuccess', 'Xin phép thành công!'));
          this.search();
        } else {
          this.message.error(res?.error || t('essCwa.applyFail', 'Xin phép thất bại!'));
        }
      },
      error: () => {
        this.submitting.set(false);
        this.message.error(t('essCwa.connectError', 'Lỗi kết nối khi xin phép!'));
      },
    });
  }

  private loadApprovers(): void {
    if (!this.personId) return;
    this.approversLoading.set(true);
    this.api.getApprovers(this.personId).subscribe({
      next: (list) => {
        this.approvers.set((list ?? []).filter((a) => String(a.affirmLevel) !== '0'));
        this.approversLoading.set(false);
      },
      error: () => {
        this.approvers.set([]);
        this.approversLoading.set(false);
      },
    });
  }

  private buildDisplayRow(dto: EssCwaAbnormalDto): CwaAbnormalDisplayRow {
    const inDateStr = dto.shiftStartYyyy || dto.arDateStr;
    const outDateStr = dto.shiftEndYyyy || dto.arDateStr;
    return {
      ...dto,
      selected: false,
      inTime: this.parseDmyHm(inDateStr, dto.shiftStartHh || '08', dto.shiftStartMi || '00'),
      outTime: this.parseDmyHm(outDateStr, dto.shiftEndHh || '17', dto.shiftEndMi || '00'),
      remark: '',
    };
  }

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi scaGetDefaultDateRange() bản gốc. */
  private initDefaultDateRange(): void {
    const now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  /** Mặc định 08:00 - 17:00 hôm nay cho khối "Thiết lập thời gian hàng loạt" - giữ đúng bản gốc
   *  (value="08"/value="17" của sca_globalInHh/sca_globalOutHh). */
  private setDefaultGlobalTimes(): void {
    const now = new Date();
    this.globalInTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0);
    this.globalOutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0);
  }

  /** dmy dạng DD/MM/YYYY (đúng định dạng AR_DATE_STR/SHIFT_START_YYYY/SHIFT_END_YYYY trả về từ backend). */
  private parseDmyHm(dmy: string, hh: string, mi: string): Date | null {
    if (!dmy) return null;
    const p = dmy.split('/');
    if (p.length !== 3) return null;
    const d = new Date(+p[2], +p[1] - 1, +p[0], parseInt(hh, 10) || 0, parseInt(mi, 10) || 0);
    return isNaN(d.getTime()) ? null : d;
  }

  private calcWorkHour(from: Date | null, to: Date | null): string {
    if (!from || !to || to <= from) return '0';
    return ((to.getTime() - from.getTime()) / 3600000).toFixed(2);
  }

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }

  private formatDmyHm(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy HH:mm', 'vi') : '';
  }
}
