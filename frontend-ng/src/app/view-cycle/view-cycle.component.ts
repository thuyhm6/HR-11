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
import { ArStatisticDateDto, CycleSavePayload } from './view-cycle.model';
import { ViewCycleService } from './view-cycle.service';

/** Các key message.properties dùng trong trang này - phần lớn đã có sẵn (dùng chung common.* và
 *  ar.viewcycle.* đã tồn tại cho trang gốc), chỉ bổ sung thêm vài key còn thiếu (xem
 *  messages_vi_VN.properties). Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail', 'common.loadFail', 'common.noData', 'common.totalRows',
  'common.status', 'common.active', 'common.inactive', 'common.sortOrder', 'common.multilingualInfo',
  'common.nameVi', 'common.nameEn', 'common.nameZh', 'common.nameKo',
  'ar.viewcycle.title.chinhanh', 'ar.viewcycle.placeholder.search',
  'ar.viewcycle.title.kaishiri', 'ar.viewcycle.title.jieshuri',
  'ar.viewcycle.title.tungay', 'ar.viewcycle.title.denngay',
  'ar.viewcycle.title.beginMonthOffset', 'ar.viewcycle.title.endMonthOffset', 'ar.viewcycle.title.dateRange',
  'ar.viewcycle.title.addTitle', 'ar.viewcycle.title.editTitle',
  'ar.viewcycle.msg.pleaseEnterNameVi', 'ar.viewcycle.msg.confirmDelete',
  'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface CycleForm {
  statNo: string | null;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  startDay: number | null;
  endDay: number | null;
  validDateFrom: Date | null;
  validDateTo: Date | null;
  beginMonthOffset: number | null;
  endMonthOffset: number | null;
  orderno: number | null;
  activity: number;
}

const EMPTY_FORM: CycleForm = {
  statNo: null, nameVi: '', nameEn: '', nameZh: '', nameKo: '',
  startDay: null, endDay: null, validDateFrom: null, validDateTo: null,
  beginMonthOffset: 0, endMonthOffset: 0, orderno: null, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewCycle.html (Thymeleaf + jQuery DataTables) - quản lý danh
 * sách chi nhánh/khoảng mã chu kỳ chấm công (bảng AR_STATISTIC_DATE + tên đa ngôn ngữ ở SY_GLOBAL_NAME).
 * Gọi lại nguyên API JSON đã có sẵn ở ArStatisticDateController (xem ViewCycleService) - không đổi
 * backend. Dùng nz-table (phân trang client-side, đúng hành vi DataTables gốc: BE trả toàn bộ danh
 * sách theo bộ lọc, không phân trang server, tham khảo ManageEmpPositionInfoComponent) thay cho jQuery
 * DataTables; nz-modal thay modal Bootstrap (tham khảo PunishmentInfoComponent cho pattern CRUD đầy đủ
 * add/edit/delete, và ViewCycleParameterComponent cho trang chị em cùng module attendanceSettings).
 * statNo do BE tự sinh khi thêm mới (SyGlobalNameMapper.getNextNoSeq, xem ArStatisticDateServiceImpl)
 * nên form không cho nhập statNo, giống bản gốc (input ẩn). validDateFrom/validDateTo là string
 * 'yyyy-MM-dd' ở BE nên dùng nz-date-picker hiển thị dd/MM/yyyy (theo CLAUDE.md) rồi convert sang
 * yyyy-MM-dd khi gửi payload; startDay/endDay là số ngày lệch trong chu kỳ (không phải ngày thực) nên
 * giữ nz-input-number như bản gốc. Bản gốc chưa có export Excel riêng (chỉ dùng nút Buttons của
 * DataTables) - nay làm client-side bằng xlsx (SheetJS) theo đúng quy ước xuất .xlsx của các trang khác.
 */
@Component({
  selector: 'app-view-cycle',
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
  templateUrl: './view-cycle.component.html',
  styleUrl: './view-cycle.component.css',
})
export class ViewCycleComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ArStatisticDateDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchStatNo = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('ar.viewcycle.title.addTitle', 'Thêm mới chi nhánh')
      : this.i18n.t('ar.viewcycle.title.editTitle', 'Cập nhật chi nhánh'),
  );
  form: CycleForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArStatisticDateDto | null = null;

  constructor(
    private readonly api: ViewCycleService,
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
    this.api.search(this.searchStatNo).subscribe({
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
    this.searchStatNo = '';
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: ArStatisticDateDto): void {
    this.isNew.set(false);
    this.form = {
      statNo: row.statNo,
      nameVi: row.nameVi || '',
      nameEn: row.nameEn || '',
      nameZh: row.nameZh || '',
      nameKo: row.nameKo || '',
      startDay: row.startDay,
      endDay: row.endDay,
      validDateFrom: row.validDateFrom ? new Date(row.validDateFrom) : null,
      validDateTo: row.validDateTo ? new Date(row.validDateTo) : null,
      beginMonthOffset: row.beginMonthOffset ?? 0,
      endMonthOffset: row.endMonthOffset ?? 0,
      orderno: row.orderno,
      activity: row.activity ?? 1,
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t('ar.viewcycle.msg.pleaseEnterNameVi', 'Vui lòng nhập Tên tiếng Việt'));
      return;
    }
    const payload: CycleSavePayload = {
      statNo: this.form.statNo,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn,
      nameZh: this.form.nameZh,
      nameKo: this.form.nameKo,
      startDay: this.form.startDay,
      endDay: this.form.endDay,
      validDateFrom: this.formatYmd(this.form.validDateFrom),
      validDateTo: this.formatYmd(this.form.validDateTo),
      beginMonthOffset: this.form.beginMonthOffset,
      endMonthOffset: this.form.endMonthOffset,
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

  openDeleteConfirm(row: ArStatisticDateDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.statNo} - ${this.deleteTarget.nameVi ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.statNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.statNo).subscribe({
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
      this.i18n.t('ar.viewcycle.title.chinhanh', 'Chi nhánh'),
      this.i18n.t('common.nameVi', 'Tên Việt'),
      this.i18n.t('common.nameEn', 'Tên Anh'),
      this.i18n.t('common.nameZh', 'Tên Trung'),
      this.i18n.t('common.nameKo', 'Tên Hàn'),
      this.i18n.t('ar.viewcycle.title.kaishiri', 'Ngày bắt đầu'),
      this.i18n.t('ar.viewcycle.title.jieshuri', 'Ngày kết thúc'),
      this.i18n.t('ar.viewcycle.title.tungay', 'Từ ngày'),
      this.i18n.t('ar.viewcycle.title.denngay', 'Đến ngày'),
      this.i18n.t('ar.viewcycle.title.beginMonthOffset', 'Bắt đầu lệch tháng'),
      this.i18n.t('ar.viewcycle.title.endMonthOffset', 'Kết thúc lệch tháng'),
      this.i18n.t('common.sortOrder', 'Sắp xếp'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.statNo, r.nameVi, r.nameEn, r.nameZh, r.nameKo, r.startDay, r.endDay,
      this.toDmy(r.validDateFrom), this.toDmy(r.validDateTo), r.beginMonthOffset, r.endMonthOffset, r.orderno,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'cycle_branch_list.xlsx');
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
