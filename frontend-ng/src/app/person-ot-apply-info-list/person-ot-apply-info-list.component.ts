import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PersonOtApplyInfoListService } from './person-ot-apply-info-list.service';
import { EssBasicInfoDto, EssPersonOtInfoDto } from './person-ot-apply-info-list.model';

/** Các key message.properties dùng trong trang này (toàn bộ tái sử dụng namespace poai.* đã có sẵn -
 *  không thêm key mới) - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'poai.field.otCategory', 'poai.opt.all', 'poai.field.durationGte', 'poai.field.dateRange',
  'poai.btn.search', 'poai.label.quickFilter', 'poai.col.dayOfWeek', 'poai.col.ot', 'poai.col.workTime',
  'poai.col.checkIn', 'poai.col.checkOut', 'poai.col.otStartTime', 'poai.col.otEndTime',
  'poai.col.otDuration', 'poai.msg.loadError', 'poai.weekdays',
  'common.no.serial', 'common.date', 'common.shift', 'common.totalRows',
];

const DEFAULT_WEEKDAYS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

/**
 * Bản Angular của ess/infoApply/viewPersonOtApplyInfoList.html (Thymeleaf + jQuery, tự build bảng +
 * phân trang bằng tay - KHÔNG dùng DataTables) - Danh sách tăng ca cá nhân của chính nhân viên đang
 * đăng nhập trong khoảng thời gian tra cứu. Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) -
 * xem PersonOtApplyInfoListService. Endpoint /api/personOt/list dùng CHUNG với biểu đồ tăng ca ở
 * Dashboard (DashboardService.getPersonOtList()) nên KHÔNG được đổi field/tham số. Dùng nz-table (BE
 * trả toàn bộ danh sách theo bộ lọc, phân trang client-side) thay bảng HTML tự build chuỗi jQuery -
 * giống manage-emp-position-info. Lọc nhanh (quick filter) làm client-side qua computed filteredRows()
 * - đúng hành vi poaiQuickFilter() bản gốc. Cột "Thứ" tính từ arDateStr y hệt poaiDayOfWeek() bản gốc
 * (tách theo dấu '/', LẤY THEO THỨ TỰ year/month/day - đúng định dạng AR_DATE_STR mà mapper trang này
 * trả về, khác định dạng DD/MM/YYYY dùng ở vài trang ESS khác). Trang gốc chỉ xem, không có thao tác
 * ghi/hủy/xuất excel.
 */
@Component({
  selector: 'app-person-ot-apply-info-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './person-ot-apply-info-list.component.html',
  styleUrl: './person-ot-apply-info-list.component.css',
})
export class PersonOtApplyInfoListComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly itemOptions = signal<EssPersonOtInfoDto[]>([]);

  readonly rows = signal<EssPersonOtInfoDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  quickFilterKeyword = '';
  readonly filteredRows = computed(() => {
    const kw = this.quickFilterKeyword.trim().toLowerCase();
    const rows = this.rows();
    if (!kw) return rows;
    return rows.filter((r) =>
      [r.arDateStr, r.itemName, r.shiftName, r.workTime, r.otStartTime, r.otEndTime, r.workHour]
        .some((v) => v && String(v).toLowerCase().includes(kw)),
    );
  });

  itemNoSearch: string | null = null;
  minQuantity: number | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(
    private readonly api: PersonOtApplyInfoListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getItemList().subscribe((list) => this.itemOptions.set(list ?? []));
    this.initDefaultDateRange();
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        startDate: this.formatDmy(this.startDate),
        endDate: this.formatDmy(this.endDate),
        itemNoSearch: this.itemNoSearch ?? '',
        minQuantity: this.minQuantity != null ? String(this.minQuantity) : '',
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('poai.msg.loadError', 'Lỗi tải dữ liệu'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Tính thứ từ arDateStr - đúng poaiDayOfWeek() bản gốc (tách theo '/', year/month/day). */
  dayOfWeek(arDateStr: string | null | undefined): string {
    if (!arDateStr) return '';
    const p = arDateStr.split('/');
    if (p.length !== 3) return '';
    const d = new Date(+p[0], +p[1] - 1, +p[2]);
    if (isNaN(d.getTime())) return '';
    const weekdays = this.i18n.t('poai.weekdays', DEFAULT_WEEKDAYS.join(',')).split(',');
    return weekdays[d.getDay()] ?? DEFAULT_WEEKDAYS[d.getDay()];
  }

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi poaiGetDefaultDateRange() bản gốc. */
  private initDefaultDateRange(): void {
    const now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  private loadBasicInfo(): void {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data),
    });
  }

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }
}
