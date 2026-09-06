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
import { ArStatisticDateParamDto, CycleParameterSavePayload } from './view-cycle-parameter.model';
import { ViewCycleParameterService } from './view-cycle-parameter.service';

/** Các key message.properties dùng trong trang này - phần lớn đã có sẵn (dùng chung common.* và
 *  ar.viewcycleparameter.* đã tồn tại cho trang gốc), chỉ bổ sung thêm placeholder/addTitle/editTitle
 *  còn thiếu (xem messages_vi_VN.properties). Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail', 'common.loadFail', 'common.noData', 'common.totalRows',
  'common.status', 'common.active', 'common.inactive', 'common.sortOrder',
  'ar.viewcycleparameter.title.gongsi', 'ar.viewcycleparameter.title.qujian',
  'ar.viewcycleparameter.title.kaishiriqi', 'ar.viewcycleparameter.title.jieshuriqi',
  'ar.viewcycleparameter.placeholder.cpnyId', 'ar.viewcycleparameter.placeholder.statNo',
  'ar.viewcycleparameter.title.addTitle', 'ar.viewcycleparameter.title.editTitle',
  'ar.viewcycleparameter.msg.pleaseEnterRequired',
  'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface CycleParameterForm {
  paramNo: string | null;
  cpnyId: string;
  statNo: string;
  startDate: Date | null;
  endDate: Date | null;
  orderno: number | null;
  activity: number;
}

const EMPTY_FORM: CycleParameterForm = {
  paramNo: null, cpnyId: '', statNo: '', startDate: null, endDate: null, orderno: null, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewCycleParameter.html (Thymeleaf + jQuery DataTables) - quản
 * lý thông số chu kỳ chấm công (bảng AR_STATISTIC_DATE_PARAM). Gọi lại nguyên API JSON đã có sẵn ở
 * ArStatisticDateParamController (xem ViewCycleParameterService) - không đổi backend. Dùng nz-table
 * (phân trang client-side, đúng hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không
 * phân trang server, tham khảo ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal
 * thay modal Bootstrap (tham khảo PunishmentInfoComponent cho pattern CRUD đầy đủ add/edit/delete).
 * startDate/endDate là string 'yyyy-MM-dd' ở BE (TO_DATE/TO_CHAR trong mapper) nên dùng nz-date-picker
 * hiển thị dd/MM/yyyy (theo CLAUDE.md) rồi convert sang yyyy-MM-dd khi gửi payload. Bản gốc chưa có
 * export Excel riêng (chỉ dùng nút Buttons của DataTables) - nay làm client-side bằng xlsx (SheetJS)
 * theo đúng quy ước xuất .xlsx của các trang khác, giống PunishmentInfoComponent.
 */
@Component({
  selector: 'app-view-cycle-parameter',
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
  templateUrl: './view-cycle-parameter.component.html',
  styleUrl: './view-cycle-parameter.component.css',
})
export class ViewCycleParameterComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ArStatisticDateParamDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchCpnyId = '';
  searchStatNo = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('ar.viewcycleparameter.title.addTitle', 'Thêm mới thông số chu kỳ')
      : this.i18n.t('ar.viewcycleparameter.title.editTitle', 'Cập nhật thông số chu kỳ'),
  );
  form: CycleParameterForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArStatisticDateParamDto | null = null;

  constructor(
    private readonly api: ViewCycleParameterService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search({ cpnyId: this.searchCpnyId, statNo: this.searchStatNo }).subscribe({
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
    this.searchCpnyId = '';
    this.searchStatNo = '';
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: ArStatisticDateParamDto): void {
    this.isNew.set(false);
    this.form = {
      paramNo: row.paramNo,
      cpnyId: row.cpnyId || '',
      statNo: row.statNo || '',
      startDate: row.startDate ? new Date(row.startDate) : null,
      endDate: row.endDate ? new Date(row.endDate) : null,
      orderno: row.orderno,
      activity: row.activity ?? 1,
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.cpnyId || !this.form.statNo) {
      this.message.warning(this.i18n.t('ar.viewcycleparameter.msg.pleaseEnterRequired', 'Vui lòng nhập Mã công ty và Khoảng mã'));
      return;
    }
    const payload: CycleParameterSavePayload = {
      paramNo: this.form.paramNo,
      cpnyId: this.form.cpnyId,
      statNo: this.form.statNo,
      startDate: this.formatYmd(this.form.startDate),
      endDate: this.formatYmd(this.form.endDate),
      orderno: this.form.orderno,
      activity: this.form.activity,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArStatisticDateParamDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.cpnyId} - ${this.deleteTarget.statNo}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.paramNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.paramNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('ar.viewcycleparameter.title.gongsi', 'Mã công ty'),
      this.i18n.t('ar.viewcycleparameter.title.qujian', 'Khoảng mã'),
      this.i18n.t('ar.viewcycleparameter.title.kaishiriqi', 'Từ ngày'),
      this.i18n.t('ar.viewcycleparameter.title.jieshuriqi', 'Đến ngày'),
      this.i18n.t('common.sortOrder', 'Sắp xếp'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.cpnyId, r.statNo, this.toDmy(r.startDate), this.toDmy(r.endDate), r.orderno,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'cycle_parameter_list.xlsx');
  }

  /** Chuyển 'yyyy-MM-dd' (BE) sang 'dd/MM/yyyy' để hiển thị trong bảng (theo CLAUDE.md). */
  toDmy(ymd: string | null): string {
    if (!ymd) return '';
    const [y, m, d] = ymd.split('-');
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
