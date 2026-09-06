import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ArCalenderHolidayDto, ArCalenderHolidaySavePayload } from './view-statutory-holidays.model';
import { ViewStatutoryHolidaysService } from './view-statutory-holidays.service';

/** Shift ca hành chính mặc định dùng khi tạo ngày lễ - bản gốc hardcode y hệt (xem
 *  shlSaveData() trong viewStatutoryHolidays.html gốc), không có ô cho người dùng chọn. */
const DEFAULT_SHIFT_NO = '14015838';

/** 2 loại ngày cố định của trang này (mã CODE nghiệp vụ, không phải danh mục chung nên giữ hardcode
 *  đúng như bản gốc) - nhãn hiển thị dùng key shl.typeHoliday/typeWeekend. */
const TYPE_OPTIONS = [
  { value: '1442', key: 'shl.typeHoliday', fallback: 'Ngày lễ' },
  { value: '1441', key: 'shl.typeWeekend', fallback: 'Cuối tuần' },
];

/** Các key message.properties dùng trong trang này - dùng lại nguyên namespace shl.* đã chuẩn bị sẵn
 *  cho đúng trang này (trước đó chỉ có ở bản tiếng Việt, đã bổ sung đủ en/ko/zh/mặc định - xem
 *  messages_vi_VN.properties), kết hợp common.* dùng chung. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.loadFail', 'common.noData',
  'common.totalRows', 'common.status', 'common.active', 'common.inactive', 'common.sortOrder', 'common.no',
  'shl.year', 'shl.holidayDate', 'shl.dayType', 'shl.workday', 'shl.dayOff', 'shl.statutory', 'shl.description',
  'shl.modalAddTitle', 'shl.modalEditTitle', 'shl.confirmDelete', 'shl.saveSuccess', 'shl.saveFail',
  'shl.deleteSuccess', 'shl.deleteFail', 'shl.colMonth', 'shl.colDay', 'shl.colCompany', 'shl.colShift',
  'shl.colWorkdayFlag', 'shl.colStatutoryFlag', 'shl.placeholderYear', 'shl.dateHint', 'shl.saveNote',
  'shl.typeHoliday', 'shl.typeWeekend', 'shl.msg.pleaseEnterDate',
  'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface HolidayForm {
  ddateStr: string | null;
  ddate: Date | null;
  typeid: string;
  remark: string;
}

const EMPTY_FORM: HolidayForm = { ddateStr: null, ddate: null, typeid: '1442', remark: '' };

/**
 * Bản Angular của ar/attendanceSettings/viewStatutoryHolidays.html (Thymeleaf + jQuery DataTables) -
 * quản lý ngày lễ pháp định (bảng AR_CALENDER, lọc TYPEID='1442' OR STATUTORY_FLAG=1). Gọi lại nguyên
 * API JSON đã có sẵn ở ArCalenderController (xem ViewStatutoryHolidaysService) - không đổi backend.
 * Dùng nz-table (phân trang client-side, tham khảo ManageEmpPositionInfoComponent) thay DataTables,
 * nz-modal thay modal Bootstrap.
 *
 * Sửa 1 chỗ hiển thị so với bản gốc (không đổi backend): khi mở modal sửa, bản gốc lấy ngày hiển thị
 * từ field `ddateFormatted` của response GET .../holidays/detail, nhưng ArCalenderServiceImpl#getHolidayByPk
 * chỉ BeanUtils.copyProperties từ entity (không có field này) nên `ddateFormatted` luôn null - ô ngày
 * trong modal sửa của bản gốc thực chất luôn hiển thị rỗng dù input đã bị disabled. Ở đây parse trực
 * tiếp từ `ddateStr` ('YYYY/MM/DD', luôn có giá trị) để ô ngày hiển thị đúng.
 */
@Component({
  selector: 'app-view-statutory-holidays',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './view-statutory-holidays.component.html',
  styleUrl: './view-statutory-holidays.component.css',
})
export class ViewStatutoryHolidaysComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly typeOptions = TYPE_OPTIONS;

  readonly rows = signal<ArCalenderHolidayDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchYear: number | null = new Date().getFullYear();

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('shl.modalAddTitle', 'Thêm mới Ngày lễ pháp định')
      : `${this.i18n.t('shl.modalEditTitle', 'Cập nhật ngày lễ')}: ${this.form.ddateStr ?? ''}`,
  );
  form: HolidayForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArCalenderHolidayDto | null = null;

  constructor(
    private readonly api: ViewStatutoryHolidaysService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchYear != null ? String(this.searchYear) : '').subscribe({
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
    this.searchYear = null;
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: ArCalenderHolidayDto): void {
    this.isNew.set(false);
    this.form = {
      ddateStr: row.ddateStr,
      ddate: this.parseYmdSlash(row.ddateStr),
      typeid: row.typeid || '1442',
      remark: row.remark || '',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    const ddateStr = this.isNew() ? this.formatYmdSlash(this.form.ddate) : this.form.ddateStr;
    if (!ddateStr) {
      this.message.warning(this.i18n.t('shl.msg.pleaseEnterDate', 'Vui lòng nhập Ngày!'));
      return;
    }
    const payload: ArCalenderHolidaySavePayload = {
      ddateStr,
      shiftNo: DEFAULT_SHIFT_NO,
      typeid: this.form.typeid,
      overtypeid: this.form.typeid,
      typeidDefault: this.form.typeid,
      workdayflag: 0,
      operationId: null,
      remark: this.form.remark || null,
      orderno: 0,
      activity: 1,
      statutoryFlag: 1,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t('shl.saveSuccess', 'Lưu ngày lễ thành công!'));
          this.search();
        } else {
          this.message.error(res.error || this.i18n.t('shl.saveFail', 'Lưu ngày lễ thất bại!'));
        }
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('shl.saveFail', 'Lưu ngày lễ thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArCalenderHolidayDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.ddateStr} - ${this.deleteTarget.remark ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.ddateStr) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.ddateStr).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('shl.deleteSuccess', 'Xóa ngày lễ thành công!'));
          this.search();
        } else {
          this.message.error(res.error || this.i18n.t('shl.deleteFail', 'Xóa ngày lễ thất bại!'));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('shl.deleteFail', 'Xóa ngày lễ thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('shl.holidayDate', 'Ngày'),
      this.i18n.t('shl.year', 'Năm'),
      this.i18n.t('shl.colMonth', 'Tháng'),
      this.i18n.t('shl.colDay', 'Ngày trong tháng'),
      this.i18n.t('shl.colCompany', 'Công ty'),
      this.i18n.t('shl.colShift', 'Ca làm việc'),
      this.i18n.t('shl.dayType', 'Loại ngày'),
      this.i18n.t('shl.colWorkdayFlag', 'Cờ làm việc'),
      this.i18n.t('shl.colStatutoryFlag', 'Cờ ngày lễ PĐ'),
      this.i18n.t('shl.description', 'Ghi chú'),
      this.i18n.t('common.sortOrder', 'Sắp xếp'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, this.toDmySlash(r.ddateStr), r.iyear, r.imonth, r.iday, r.companyName, r.shiftName, r.typeidName,
      r.workdayflag === 1 ? this.i18n.t('shl.workday', 'Làm việc') : this.i18n.t('shl.dayOff', 'Nghỉ'),
      r.statutoryFlag === 1 ? this.i18n.t('shl.statutory', 'Lễ pháp định') : this.i18n.t('common.no', 'Không'),
      r.remark, r.orderno,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'statutory_holidays.xlsx');
  }

  /** Chuyển 'YYYY/MM/DD' (khóa chính DDATE_STR, xem CLAUDE.md quy tắc gọi hạn) sang 'DD/MM/YYYY' để
   *  hiển thị trong bảng. */
  toDmySlash(ymd: string | null): string {
    if (!ymd) return '';
    const [y, m, d] = ymd.split('/');
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }

  private parseYmdSlash(ymd: string | null): Date | null {
    if (!ymd) return null;
    const [y, m, d] = ymd.split('/').map((v) => parseInt(v, 10));
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
  }

  private formatYmdSlash(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : null;
  }
}
