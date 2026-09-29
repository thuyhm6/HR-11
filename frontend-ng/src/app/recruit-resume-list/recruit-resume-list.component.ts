import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { HIS_CODE_PARENTS } from '../hrm-info-search/hrm-info-search.config';
import { ApiResponse, CodeItem } from '../hrm-info-search/hrm-info-search.model';
import { HrmInfoSearchService } from '../hrm-info-search/hrm-info-search.service';
import {
  RRL_ACTIVITY_COMPLETED,
  RRL_ACTIVITY_IN_PROGRESS,
  RecruitResumeCriteria,
  RecruitResumeItem,
} from './recruit-resume-list.model';
import { RecruitResumeListService } from './recruit-resume-list.service';

const I18N_KEYS = [
  'rrl.registerCode', 'rrl.registerInfo', 'rrl.registerType', 'rrl.registerDate', 'rrl.outline',
  'rrl.status.inProgress', 'rrl.status.completed', 'rrl.modalAddTitle', 'rrl.modalEditTitle',
  'rrl.confirmSave', 'rrl.confirmDelete', 'rrl.msg.completedCannotUpdate', 'rrl.msg.completedCannotDelete',
  'rrl.msg.requireType', 'rrl.msg.requireDate',
  'common.stt', 'common.status', 'common.action', 'common.search', 'common.addNew', 'common.edit', 'common.delete',
  'common.save', 'common.cancel', 'common.confirm', 'common.exportExcel', 'common.totalRows', 'common.noData',
  'common.selectAll', 'common.fromDate', 'common.toDate', 'common.loadFail', 'common.saveFail', 'common.deleteFail',
  'common.addSuccess', 'common.updateSuccess', 'common.deleteSuccess', 'common.placeholder.select',
];

interface ResumeForm {
  seq: string | null;
  registerCode: string;
  registerInfo: string;
  registerType: string | null;
  registerDate: Date | null;
  activity: string;
  remark: string;
}

function emptyForm(): ResumeForm {
  return {
    seq: null, registerCode: '', registerInfo: formatDate(new Date(), 'dd/MM/yyyy', 'en-US'),
    registerType: null, registerDate: null, activity: RRL_ACTIVITY_IN_PROGRESS, remark: '',
  };
}

/**
 * Bản Angular của hrm/recruitManage/viewResumeList.jsp + viewAddResumeInfo.jsp (Hanwha_HTSV) - Quản lý
 * khái quát phát lệnh (bảng HR_RECRUIT_REGISTER_INFO). Bản gốc hiển thị danh sách bên trái + form chi tiết
 * bên phải; ở đây dùng nz-table + nz-modal thêm/sửa (giống ViewResumeListComponent của org/orgManage).
 * Phát lệnh đã hoàn tất (ACTIVITY = 1) không được sửa/xóa - backend kiểm tra lại lần nữa.
 * Tên component có tiền tố "recruit-" vì route /view-resume-list đã dùng cho org/orgManage/viewResumeList.
 * Tiền tố id phần tử: "rrl".
 */
@Component({
  selector: 'app-recruit-resume-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzModalModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './recruit-resume-list.component.html',
  styleUrl: './recruit-resume-list.component.css',
})
export class RecruitResumeListComponent implements OnInit {
  readonly ACTIVITY_IN_PROGRESS = RRL_ACTIVITY_IN_PROGRESS;
  readonly ACTIVITY_COMPLETED = RRL_ACTIVITY_COMPLETED;

  // ── Tìm kiếm ──
  searchStartDate: Date | null = null;
  searchEndDate: Date | null = null;
  searchRegisterType: string | null = null;
  searchActivity: string | null = null;

  readonly rows = signal<RecruitResumeItem[]>([]);
  readonly loading = signal(false);
  pageIndex = 1;
  pageSize = 20;

  readonly registerTypeOptions = signal<CodeItem[]>([]);

  // ── Modal thêm/sửa ──
  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  form: ResumeForm = emptyForm();

  constructor(
    private readonly api: RecruitResumeListService,
    private readonly common: HrmInfoSearchService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.common.getCodeList(HIS_CODE_PARENTS.transCode).subscribe({
      next: (list) => this.registerTypeOptions.set(list ?? []),
      error: () => this.registerTypeOptions.set([]),
    });
    this.search();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  statusLabel(activity: string | null | undefined): string {
    return activity === RRL_ACTIVITY_COMPLETED
      ? this.t('rrl.status.completed', 'Đã hoàn tất')
      : this.t('rrl.status.inProgress', 'Đang xử lý');
  }

  isCompleted(row: RecruitResumeItem | ResumeForm): boolean {
    return row.activity === RRL_ACTIVITY_COMPLETED;
  }

  // ==================== Danh sách ====================

  search(): void {
    const criteria: RecruitResumeCriteria = {
      searchStartDate: this.fmt(this.searchStartDate),
      searchEndDate: this.fmt(this.searchEndDate),
      searchRegisterType: this.searchRegisterType,
      searchActivity: this.searchActivity,
    };
    this.loading.set(true);
    this.api.getList(criteria).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success) {
          this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          return;
        }
        this.rows.set(res.data ?? []);
        this.pageIndex = 1;
      },
      error: () => {
        this.loading.set(false);
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  // ==================== Thêm / sửa ====================

  openAdd(): void {
    this.form = emptyForm();
    this.modalVisible.set(true);
  }

  openEdit(row: RecruitResumeItem): void {
    this.form = {
      seq: row.seq ?? null,
      registerCode: row.registerCode ?? '',
      registerInfo: row.registerInfo ?? '',
      registerType: row.registerType ?? null,
      registerDate: this.parseDate(row.registerDate),
      activity: row.activity ?? RRL_ACTIVITY_IN_PROGRESS,
      remark: row.remark ?? '',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  save(): void {
    if (this.isCompleted(this.form)) {
      this.message.warning(this.t('rrl.msg.completedCannotUpdate', 'Phát lệnh đã được xác nhận, không thể sửa.'));
      return;
    }
    if (!this.form.registerType) {
      this.message.warning(this.t('rrl.msg.requireType', 'Vui lòng chọn loại phát lệnh!'));
      return;
    }
    if (!this.form.registerDate) {
      this.message.warning(this.t('rrl.msg.requireDate', 'Vui lòng chọn ngày hiệu lực!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('common.confirm', 'Xác nhận'),
      nzContent: this.t('rrl.confirmSave', 'Bạn có chắc chắn muốn lưu?'),
      nzOkText: this.t('common.confirm', 'Xác nhận'),
      nzCancelText: this.t('common.cancel', 'Hủy'),
      nzOnOk: () => this.doSave(),
    });
  }

  private doSave(): void {
    const isNew = !this.form.seq;
    const dto: RecruitResumeItem = {
      seq: this.form.seq,
      registerType: this.form.registerType,
      registerDate: this.fmt(this.form.registerDate),
      remark: this.form.remark,
    };
    this.saving.set(true);
    this.api.save(dto).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (!res.success) {
          this.message.error(this.errorText(res, 'rrl.msg.completedCannotUpdate', 'common.saveFail', 'Lưu thất bại!'));
          return;
        }
        this.message.success(isNew
          ? this.t('common.addSuccess', 'Thêm mới thành công!')
          : this.t('common.updateSuccess', 'Cập nhật thành công!'));
        this.modalVisible.set(false);
        this.search();
      },
      error: (err: HttpErrorResponse) => {
        this.saving.set(false);
        this.message.error(this.validationText(err) ?? this.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa ====================

  confirmDelete(row: RecruitResumeItem): void {
    if (!row.seq) return;
    if (this.isCompleted(row)) {
      this.message.warning(this.t('rrl.msg.completedCannotDelete', 'Phát lệnh đã được xác nhận, không thể xóa.'));
      return;
    }
    const seq = row.seq;
    this.modal.confirm({
      nzTitle: this.t('common.confirm', 'Xác nhận'),
      nzContent: this.t('rrl.confirmDelete', 'Bạn có chắc chắn muốn xóa phát lệnh này?'),
      nzOkText: this.t('common.delete', 'Xóa'),
      nzOkDanger: true,
      nzCancelText: this.t('common.cancel', 'Hủy'),
      nzOnOk: () => this.doDelete(seq),
    });
  }

  private doDelete(seq: string): void {
    this.api.delete(seq).subscribe({
      next: (res) => {
        if (!res.success) {
          this.message.error(this.errorText(res, 'rrl.msg.completedCannotDelete', 'common.deleteFail', 'Xóa thất bại!'));
          return;
        }
        this.message.success(this.t('common.deleteSuccess', 'Xóa thành công!'));
        if (this.form.seq === seq) this.modalVisible.set(false);
        this.search();
      },
      error: () => this.message.error(this.t('common.deleteFail', 'Xóa thất bại!')),
    });
  }

  /** Dịch mã lỗi backend (ORDER_COMPLETED) sang text; các lỗi khác dùng thông báo chung. */
  private errorText(res: ApiResponse<unknown>, completedKey: string, failKey: string, failFallback: string): string {
    if (res.errorCode === 'ORDER_COMPLETED') {
      return this.t(completedKey, 'Phát lệnh đã được xác nhận.');
    }
    return this.t(failKey, failFallback);
  }

  /** Lỗi 400 từ @Valid (HrRecruitResumeController.handleValidation) → thông báo tương ứng. */
  private validationText(err: HttpErrorResponse): string | null {
    const msg: string = err.status === 400 ? err.error?.message ?? '' : '';
    if (msg.includes('REGISTER_TYPE_REQUIRED')) return this.t('rrl.msg.requireType', 'Vui lòng chọn loại phát lệnh!');
    if (msg.includes('REGISTER_DATE_REQUIRED')) return this.t('rrl.msg.requireDate', 'Vui lòng chọn ngày hiệu lực!');
    return null;
  }

  // ==================== Xuất Excel (.xlsx) ====================

  exportExcel(): void {
    const header = [
      this.t('common.stt', 'STT'),
      this.t('rrl.registerCode', 'Mã xử lý tự động'),
      this.t('rrl.registerInfo', 'Ngày đăng ký'),
      this.t('rrl.registerType', 'Loại phát lệnh'),
      this.t('rrl.registerDate', 'Ngày hiệu lực'),
      this.t('common.status', 'Trạng thái'),
      this.t('rrl.outline', 'Khái quát phát lệnh'),
    ];
    const body = this.rows().map((r, i) => [
      i + 1, r.registerCode ?? '', r.registerInfo ?? '', r.registerTypeName ?? '', r.registerDate ?? '',
      this.statusLabel(r.activity), r.remark ?? '',
    ]);
    const sheet = XLSX.utils.aoa_to_sheet([header, ...body]);
    sheet['!cols'] = [{ wch: 6 }, { wch: 18 }, { wch: 14 }, { wch: 24 }, { wch: 14 }, { wch: 16 }, { wch: 50 }];
    const book = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, sheet, 'Resume');
    XLSX.writeFile(book, `khai_quat_phat_lenh_${formatDate(new Date(), 'yyyyMMdd', 'en-US')}.xlsx`);
  }

  // ==================== Helpers ngày tháng (dd/MM/yyyy) ====================

  private fmt(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'en-US') : '';
  }

  /** Chuỗi dd/MM/yyyy (hoặc dd.MM.yyyy ở dữ liệu cũ) → Date. */
  private parseDate(s: string | null | undefined): Date | null {
    const m = /^(\d{1,2})[/.\-](\d{1,2})[/.\-](\d{4})$/.exec((s ?? '').trim());
    if (!m) return null;
    const d = new Date(+m[3], +m[2] - 1, +m[1]);
    return isNaN(d.getTime()) ? null : d;
  }
}
