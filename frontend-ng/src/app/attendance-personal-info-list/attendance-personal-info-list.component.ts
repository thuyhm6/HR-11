import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AttendancePersonalInfoListService } from './attendance-personal-info-list.service';
import { EssAttendancePersonalInfoDto, EssBasicInfoDto } from './attendance-personal-info-list.model';

/** Các key message.properties dùng trong trang này (toàn bộ tái sử dụng namespace atpi.* đã có sẵn -
 *  không thêm key mới) - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'atpi.label.category', 'atpi.select.allOption', 'atpi.label.time', 'atpi.btn.search',
  'atpi.placeholder.quickFilter', 'atpi.col.fullName', 'atpi.col.empId', 'atpi.col.deptName',
  'atpi.col.category', 'atpi.col.duration', 'atpi.col.time', 'atpi.col.startTime', 'atpi.col.endTime',
  'atpi.js.loadError',
  'common.stt', 'common.totalRows',
];

/**
 * Bản Angular của ess/infoApplyAttendance/viewAttendancePersonalInfoList.html (Thymeleaf + jQuery, tự
 * build bảng + phân trang bằng tay - KHÔNG dùng DataTables) - Danh sách chấm công cá nhân (không tính
 * tăng ca) của chính nhân viên đang đăng nhập trong khoảng thời gian tra cứu. Gọi lại nguyên các API
 * JSON đã có sẵn (không đổi backend) - xem AttendancePersonalInfoListService. Endpoint
 * /api/attendancePersonal/list dùng CHUNG với biểu đồ chấm công ở Dashboard
 * (DashboardService.getAttendancePersonalList()) nên KHÔNG được đổi field/tham số. Dùng nz-table (BE
 * trả toàn bộ danh sách theo bộ lọc, phân trang client-side) thay bảng HTML tự build chuỗi jQuery -
 * giống manage-emp-position-info. Lọc nhanh (quick filter) làm client-side qua computed filteredRows()
 * - đúng hành vi atpiQuickFilter() bản gốc. Trang gốc chỉ xem, không có thao tác ghi/hủy/xuất excel.
 */
@Component({
  selector: 'app-attendance-personal-info-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './attendance-personal-info-list.component.html',
  styleUrl: './attendance-personal-info-list.component.css',
})
export class AttendancePersonalInfoListComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly itemOptions = signal<EssAttendancePersonalInfoDto[]>([]);

  readonly rows = signal<EssAttendancePersonalInfoDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  quickFilterKeyword = '';
  readonly filteredRows = computed(() => {
    const kw = this.quickFilterKeyword.trim().toLowerCase();
    const rows = this.rows();
    if (!kw) return rows;
    return rows.filter((r) =>
      [r.localName, r.empId, r.deptName, r.itemName, r.arDateStr, r.indoorTime, r.outdoorTime]
        .some((v) => v && String(v).toLowerCase().includes(kw)),
    );
  });

  itemNoSearch: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(
    private readonly api: AttendancePersonalInfoListService,
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
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('atpi.js.loadError', 'Lỗi tải dữ liệu'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi atpiGetDefaultDateRange() bản gốc. */
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
