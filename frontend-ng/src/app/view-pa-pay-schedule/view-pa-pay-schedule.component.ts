import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CodeItem, PaPayScheduleDto, PaPayScheduleSavePayload } from './view-pa-pay-schedule.model';
import { ViewPaPayScheduleService } from './view-pa-pay-schedule.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.paySchedule.*
 *  (dùng chung cho cả bản Thymeleaf gốc) và common.*. Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail', 'common.loadFail', 'common.noData', 'common.totalRows',
  'common.selectAll',
  'pa.paySchedule.title', 'pa.paySchedule.timeRange', 'pa.paySchedule.salaryDistinNo', 'pa.paySchedule.search',
  'pa.paySchedule.addNew', 'pa.paySchedule.edit', 'pa.paySchedule.delete', 'pa.paySchedule.no',
  'pa.paySchedule.payDate', 'pa.paySchedule.hrStartDate', 'pa.paySchedule.hrEndDate', 'pa.paySchedule.arStartDate',
  'pa.paySchedule.arEndDate', 'pa.paySchedule.paOpenDate', 'pa.paySchedule.paTransDate', 'pa.paySchedule.empOpinion',
  'pa.paySchedule.updatedBy', 'pa.paySchedule.updateDate', 'pa.paySchedule.addTitle', 'pa.paySchedule.editTitle',
  'pa.paySchedule.confirmDelete', 'pa.paySchedule.validateRequired',
  'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** Mã cha (SY_CODE) dùng chung cho dropdown Phân loại lương - đúng bản Thymeleaf gốc
 *  (data-parent-code="14013797" trong viewPaPaySchedule.html). */
const SALARY_DISTIN_PARENT_CODE = '14013797';

interface PayScheduleForm {
  payScheduleNo: string | null;
  payDate: Date | null;
  salaryDistinNo: string | null;
  hrStartDate: Date | null;
  hrEndDate: Date | null;
  arStartDate: Date | null;
  arEndDate: Date | null;
  paOpenDate: Date | null;
  paTransDate: Date | null;
  empOpinion: string;
}

const EMPTY_FORM: PayScheduleForm = {
  payScheduleNo: null, payDate: null, salaryDistinNo: null,
  hrStartDate: null, hrEndDate: null, arStartDate: null, arEndDate: null,
  paOpenDate: null, paTransDate: null, empOpinion: '',
};

/**
 * Bản Angular của pa/workManagement/viewPaPaySchedule.html (Thymeleaf + jQuery DataTables) - quản lý
 * kế hoạch trả lương (bảng PA_PAY_SCHEDULE). Gọi lại nguyên API JSON đã có sẵn ở
 * PaWorkManagementController (xem ViewPaPayScheduleService) - không đổi backend. Dùng nz-table (phân
 * trang client-side, đúng hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân
 * trang server, tham khảo ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal cho
 * CRUD add/edit/delete (tham khảo ViewCycleComponent).
 * BE format ngày lẫn lộn giữa 2 API (xem PaPayScheduleMapper.xml): selectList trả 'DD-MM-YYYY' (chỉ
 * cần đổi dấu '-' thành '/' để hiển thị dd/MM/yyyy theo CLAUDE.md), selectOne trả 'YYYY-MM-DD' (dùng
 * để parse ra Date cho nz-date-picker khi mở modal sửa); khi lưu luôn gửi lại 'yyyy-MM-dd'.
 * Khi thêm mới, payScheduleNo để null - BE tự sinh qua sequence và tạo kèm 1 bản ghi PA_WORK_FLOW
 * (xem PaPayScheduleServiceImpl), không cần xử lý gì thêm ở FE. Xóa là xóa mềm (ACTIVITY=0).
 * Bản gốc chưa có export Excel riêng - nay làm client-side bằng xlsx (SheetJS) theo đúng quy ước xuất
 * .xlsx của các trang khác.
 */
@Component({
  selector: 'app-view-pa-pay-schedule',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-pay-schedule.component.html',
  styleUrl: './view-pa-pay-schedule.component.css',
})
export class ViewPaPayScheduleComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<PaPayScheduleDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly salaryDistinOptions = signal<CodeItem[]>([]);

  searchFromDate: Date | null = null;
  searchToDate: Date | null = null;
  searchSalaryDistinNo: string | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('pa.paySchedule.addTitle', 'Thêm mới kế hoạch trả lương')
      : this.i18n.t('pa.paySchedule.editTitle', 'Cập nhật kế hoạch trả lương'),
  );
  form: PayScheduleForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: PaPayScheduleDto | null = null;

  constructor(
    private readonly api: ViewPaPayScheduleService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSalaryDistinOptions();
    this.search();
  }

  private loadSalaryDistinOptions(): void {
    this.api.getCodeList(SALARY_DISTIN_PARENT_CODE).subscribe((list) => this.salaryDistinOptions.set(list ?? []));
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search({
      fromDate: this.formatYmd(this.searchFromDate),
      toDate: this.formatYmd(this.searchToDate),
      salaryDistinNo: this.searchSalaryDistinNo,
    }).subscribe({
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
    this.searchFromDate = null;
    this.searchToDate = null;
    this.searchSalaryDistinNo = null;
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: PaPayScheduleDto): void {
    this.isNew.set(false);
    this.api.getOne(row.payScheduleNo).subscribe({
      next: (detail) => {
        this.form = {
          payScheduleNo: detail.payScheduleNo,
          payDate: this.parseYmd(detail.payDate),
          salaryDistinNo: detail.salaryDistinNo,
          hrStartDate: this.parseYmd(detail.hrStartDate),
          hrEndDate: this.parseYmd(detail.hrEndDate),
          arStartDate: this.parseYmd(detail.arStartDate),
          arEndDate: this.parseYmd(detail.arEndDate),
          paOpenDate: this.parseYmd(detail.paOpenDate),
          paTransDate: this.parseYmd(detail.paTransDate),
          empOpinion: detail.empOpinion || '',
        };
        this.modalVisible.set(true);
      },
      error: (err) => {
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.payDate || !this.form.salaryDistinNo) {
      this.message.warning(this.i18n.t('pa.paySchedule.validateRequired', 'Vui lòng nhập đầy đủ thông tin bắt buộc!'));
      return;
    }
    const payload: PaPayScheduleSavePayload = {
      payScheduleNo: this.form.payScheduleNo,
      payDate: this.formatYmd(this.form.payDate),
      salaryDistinNo: this.form.salaryDistinNo,
      hrStartDate: this.formatYmd(this.form.hrStartDate),
      hrEndDate: this.formatYmd(this.form.hrEndDate),
      arStartDate: this.formatYmd(this.form.arStartDate),
      arEndDate: this.formatYmd(this.form.arEndDate),
      paOpenDate: this.formatYmd(this.form.paOpenDate),
      paTransDate: this.formatYmd(this.form.paTransDate),
      empOpinion: this.form.empOpinion || null,
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

  openDeleteConfirm(row: PaPayScheduleDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.payDate ?? ''} - ${this.deleteTarget.salaryDistinName ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.payScheduleNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.payScheduleNo).subscribe({
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

  /** Xuất excel client-side (bản gốc không có export) - dùng thư viện xlsx (SheetJS) để tạo đúng file
   *  .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('pa.paySchedule.payDate', 'Ngày phát'),
      this.i18n.t('pa.paySchedule.salaryDistinNo', 'Phân loại lương'),
      this.i18n.t('pa.paySchedule.hrStartDate', 'Ngày bắt đầu quyết định'),
      this.i18n.t('pa.paySchedule.hrEndDate', 'Ngày kết thúc quyết định'),
      this.i18n.t('pa.paySchedule.arStartDate', 'Ngày bắt đầu chấm công'),
      this.i18n.t('pa.paySchedule.arEndDate', 'Ngày kết thúc chấm công'),
      this.i18n.t('pa.paySchedule.paOpenDate', 'Ngày mở lương'),
      this.i18n.t('pa.paySchedule.paTransDate', 'Ngày chuyển hóa đơn'),
      this.i18n.t('pa.paySchedule.empOpinion', 'Ý kiến'),
      this.i18n.t('pa.paySchedule.updatedBy', 'Người thay đổi'),
      this.i18n.t('pa.paySchedule.updateDate', 'Thời gian thay đổi'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, this.toDmy(r.payDate), r.salaryDistinName, this.toDmy(r.hrStartDate), this.toDmy(r.hrEndDate),
      this.toDmy(r.arStartDate), this.toDmy(r.arEndDate), this.toDmy(r.paOpenDate), this.toDmy(r.paTransDate),
      r.empOpinion, r.updatedBy, r.updateDate,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'KeHoachTraLuong');
    XLSX.writeFile(workbook, 'pa_pay_schedule_list.xlsx');
  }

  /** Chuyển 'DD-MM-YYYY' (BE trả về ở API list) sang 'dd/MM/yyyy' để hiển thị theo CLAUDE.md. */
  toDmy(dmy: string | null): string {
    if (!dmy) return '';
    return dmy.replace(/-/g, '/');
  }

  /** Parse 'YYYY-MM-DD' (BE trả về ở API chi tiết) sang Date cho nz-date-picker. */
  private parseYmd(ymd: string | null): Date | null {
    if (!ymd) return null;
    const [y, m, d] = ymd.split('-').map((v) => parseInt(v, 10));
    return y && m && d ? new Date(y, m - 1, d) : null;
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
