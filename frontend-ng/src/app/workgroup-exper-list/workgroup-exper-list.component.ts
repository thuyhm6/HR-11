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
import { CodeItem, EssBasicInfoDto, WorkGroupHistoryDto } from './workgroup-exper-list.model';
import { WorkgroupExperListService } from './workgroup-exper-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'wg.label.shiftNo', 'wg.label.fromDate', 'wg.label.toDate', 'wg.btn.search', 'wg.btn.clearFilter',
  'wg.col.seq', 'wg.col.startDate', 'wg.col.shift', 'wg.col.reason',
  'common.selectAll', 'common.loadFail', 'common.totalRows',
];

/** parentCode của danh sách "Ca làm" (400223) - giữ nguyên như data-parent-code trong bản Thymeleaf gốc. */
const SHIFT_PARENT_CODE = '400223';

/**
 * Bản Angular của ess/workgroup/viewWorkGroupExperList.html (Thymeleaf + DataTables) - Lịch sử thay
 * đổi ca làm của chính nhân viên đang đăng nhập. Gọi lại nguyên API JSON đã có sẵn ở
 * EssWorkGroupController (xem WorkgroupExperListService) - không đổi backend. Dùng nz-table (phân
 * trang client-side, BE trả toàn bộ danh sách theo bộ lọc - xem selectByPersonId trong
 * ArShiftGroupManagementMapper.xml) thay cho DataTables, tương tự manage-emp-position-info. Card
 * "Thông tin nhân viên" gộp thẳng vào đây (xem giải thích tương tự ở qualification-info.component.ts).
 * Query ESS không resolve SHIFT_NAME nên phải tự map SHIFT_NO -> tên hiển thị từ danh sách ca làm đã
 * tải (xem shiftName()), giữ đúng hành vi _wg_shiftMap của bản gốc.
 */
@Component({
  selector: 'app-workgroup-exper-list',
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
  templateUrl: './workgroup-exper-list.component.html',
  styleUrl: './workgroup-exper-list.component.css',
})
export class WorkgroupExperListComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);

  readonly rows = signal<WorkGroupHistoryDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly shiftOptions = signal<CodeItem[]>([]);
  private readonly shiftNameMap = computed(() => {
    const map = new Map<string, string>();
    this.shiftOptions().forEach((c) => map.set(c.codeNo, c.codeName));
    return map;
  });

  shiftNo: string | null = null;
  fromDate: Date | null = null;
  toDate: Date | null = null;

  constructor(
    private readonly api: WorkgroupExperListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getCodeList(SHIFT_PARENT_CODE).subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        shiftNo: this.shiftNo ?? '',
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
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
    this.shiftNo = null;
    this.fromDate = null;
    this.toDate = null;
    this.search();
  }

  /** SHIFT_NAME không được BE trả về ở query ESS (xem giải thích ở đầu file) - tự map từ danh sách ca làm. */
  shiftName(row: WorkGroupHistoryDto): string {
    return row.shiftName || this.shiftNameMap().get(row.shiftNo) || row.shiftNo || '';
  }

  private loadBasicInfo(): void {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data),
    });
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
