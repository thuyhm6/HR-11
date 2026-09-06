import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EssBasicInfoDto, PersonShiftDto } from './person-shift-list.model';
import { PersonShiftListService } from './person-shift-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'ps.label.fromDate', 'ps.label.toDate', 'ps.btn.search', 'ps.btn.clearFilter',
  'common.stt', 'ps.col.date', 'ps.col.dateName', 'ps.col.workStatus', 'ps.col.startTime',
  'ps.col.endTime', 'ps.col.indoorTime', 'ps.col.outdoorTime', 'ps.col.workHours',
  'common.loadFail', 'common.totalRows',
];

/**
 * Bản Angular của ess/workgroup/viewPersonShiftList.html (Thymeleaf + DataTables) - Lịch làm việc
 * theo ca của chính nhân viên đang đăng nhập. Gọi lại nguyên API JSON đã có sẵn ở
 * EssWorkGroupController (xem PersonShiftListService) - không đổi backend. Dùng nz-table (phân trang
 * client-side, BE trả toàn bộ danh sách theo bộ lọc - xem PersonShiftMapper.xml) thay cho DataTables,
 * tương tự manage-emp-position-info. Card "Thông tin nhân viên" gộp thẳng vào đây (xem giải thích
 * tương tự ở qualification-info.component.ts / workgroup-exper-list.component.ts). Mặc định lọc theo
 * tháng hiện tại (từ ngày 01 đến ngày cuối tháng) - giữ đúng hành vi psDefaultDates() của bản gốc.
 */
@Component({
  selector: 'app-person-shift-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzButtonModule,
    NzDatePickerModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './person-shift-list.component.html',
  styleUrl: './person-shift-list.component.css',
})
export class PersonShiftListComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);

  readonly rows = signal<PersonShiftDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  fromDate: Date | null = null;
  toDate: Date | null = null;

  constructor(
    private readonly api: PersonShiftListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.setDefaultDates();
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        startDate: this.formatYmd(this.fromDate),
        endDate: this.formatYmd(this.toDate),
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  clearSearch(): void {
    this.setDefaultDates();
    this.search();
  }

  private loadBasicInfo(): void {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data),
    });
  }

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi psDefaultDates() bản gốc. */
  private setDefaultDates(): void {
    const now = new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
