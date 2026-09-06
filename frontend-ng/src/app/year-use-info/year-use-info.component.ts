import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { YearUseInfoService } from './year-use-info.service';
import { EssBasicInfoDto, YearUseLeaveUsageDto, YearUseVacationDto } from './year-use-info.model';

/** Các key message.properties dùng trong trang này (toàn bộ tái sử dụng namespace yuif, essEmpCard,
 *  common đã có sẵn - không thêm key mới) - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'yuif.btn.search', 'yuif.section.vacInfo', 'yuif.section.leaveUsage',
  'yuif.col.startDate', 'yuif.col.endDate', 'yuif.col.startTime', 'yuif.col.endTime',
  'yuif.col.totalVac', 'yuif.col.lastYearVac', 'yuif.col.addVac', 'yuif.col.useVac',
  'yuif.col.pendingVac', 'yuif.col.remainVac', 'yuif.col.duration', 'yuif.col.approvalStatus',
  'yuif.msg.noData', 'yuif.msg.loadError',
  'common.stt', 'common.totalRows',
];

/**
 * Bản Angular của ess/viewDept/yearUseInfo.html (Thymeleaf + jQuery, tự build bảng + phân trang bằng
 * tay - KHÔNG dùng DataTables) - 2 phần: (1) Thông tin nghỉ phép năm theo từng đợt cấp phép trong năm
 * tra cứu, (2) Tình trạng sử dụng phép năm (danh sách đơn xin nghỉ) trong năm đó. Gọi lại nguyên các
 * API JSON đã có sẵn (không đổi backend) - xem YearUseInfoService. Dùng nz-table (BE trả toàn bộ danh
 * sách theo bộ lọc, phân trang client-side cho bảng 2 - giữ đúng bảng 1 không phân trang như bản gốc)
 * thay bảng HTML tự build chuỗi jQuery - giống manage-emp-position-info.
 */
@Component({
  selector: 'app-year-use-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputNumberModule,
    NzButtonModule,
    NzCardModule,
    TranslatePipe,
  ],
  templateUrl: './year-use-info.component.html',
  styleUrl: './year-use-info.component.css',
})
export class YearUseInfoComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);

  readonly vacRows = signal<YearUseVacationDto[]>([]);
  readonly vacLoading = signal(false);
  readonly vacErrorMessage = signal<string | null>(null);

  readonly leaveRows = signal<YearUseLeaveUsageDto[]>([]);
  readonly leaveLoading = signal(false);
  readonly leaveErrorMessage = signal<string | null>(null);

  year: number | null = new Date().getFullYear();

  constructor(
    private readonly api: YearUseInfoService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.search();
  }

  search(): void {
    const year = this.year != null ? String(this.year) : '';

    this.vacLoading.set(true);
    this.vacErrorMessage.set(null);
    this.api.getVacationRows(year).subscribe({
      next: (rows) => {
        this.vacRows.set(rows ?? []);
        this.vacLoading.set(false);
      },
      error: () => {
        this.vacErrorMessage.set(this.i18n.t('yuif.msg.loadError', 'Lỗi tải dữ liệu'));
        this.vacRows.set([]);
        this.vacLoading.set(false);
      },
    });

    this.leaveLoading.set(true);
    this.leaveErrorMessage.set(null);
    this.api.getLeaveUsage(year).subscribe({
      next: (rows) => {
        this.leaveRows.set(rows ?? []);
        this.leaveLoading.set(false);
      },
      error: () => {
        this.leaveErrorMessage.set(this.i18n.t('yuif.msg.loadError', 'Lỗi tải dữ liệu'));
        this.leaveRows.set([]);
        this.leaveLoading.set(false);
      },
    });
  }

  private loadBasicInfo(): void {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data),
    });
  }
}
