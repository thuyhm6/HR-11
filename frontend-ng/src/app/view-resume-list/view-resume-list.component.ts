import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { DataTablesRequestPayload, OrgResumeInfoDto, OrgResumeSavePayload } from './view-resume-list.model';
import { ViewResumeListService } from './view-resume-list.service';

/** Các key message.properties dùng trong trang này - namespace "orgResume" dành riêng cho trang này,
 *  "common"/"alert.message" dùng chung với các trang khác - tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'orgResume.no', 'orgResume.noPlaceholder', 'orgResume.resumeName', 'orgResume.resumeNamePlaceholder',
  'orgResume.changeDateFrom', 'orgResume.changeDateTo', 'orgResume.changeDate', 'orgResume.changeReason',
  'orgResume.modalAddTitle', 'orgResume.modalEditTitle', 'orgResume.confirmDelete',
  'orgResume.msg.pleaseEnterResumeName', 'orgResume.msg.pleaseEnterChangeDate',
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.noData', 'common.totalRows',
  'common.status', 'common.active', 'common.inactive', 'common.remark', 'common.createdBy', 'common.createDate',
  'common.loadFail', 'common.saveFail', 'common.deleteFail', 'common.exportExcel', 'common.selectAll',
  'alert.message.add_success', 'alert.message.update_success', 'alert.message.delete_success',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** Đúng 2 giá trị hardcode ở select bản gốc (viewResumeList.html Thymeleaf) - "14013948" là code SY_CODE
 *  cho trạng thái Hoạt động, còn "INACTIVE" là chuỗi literal (không phải code hợp lệ trong SY_CODE) nên
 *  lọc theo Không hoạt động ở bản gốc thực chất không khớp được dòng nào; giữ nguyên đúng 2 giá trị này
 *  để không đổi hành vi/dữ liệu ACTIVITY đã lưu trong DB (ngoài phạm vi soát xét khi chỉ chuyển giao diện). */
const ACTIVE_CODE = '14013948';
const INACTIVE_CODE = 'INACTIVE';

interface ResumeForm {
  no: string;
  resumeName: string;
  changeDate: Date | null;
  changeReason: string;
  remark: string;
  activity: string;
}

const EMPTY_FORM: ResumeForm = {
  no: '', resumeName: '', changeDate: null, changeReason: '', remark: '', activity: ACTIVE_CODE,
};

/**
 * Bản Angular của org/orgManage/viewResumeList.html (Thymeleaf + jQuery DataTables) - danh sách yêu cầu
 * thay đổi tổ chức (bảng ORG_RESUME_INFO). Gọi lại nguyên API JSON đã có sẵn ở OrgResumeInfoController
 * (xem ViewResumeListService) - không đổi backend. Kiến trúc bám theo ContractInfoListComponent (nz-table
 * phân trang server-side qua nzFrontPagination=false + DataTablesResponse<T>, nz-modal thay modal
 * Bootstrap, xuất Excel client-side bằng thư viện xlsx trên toàn bộ kết quả đang lọc - gọi lại POST
 * /api/resumes với length = recordsFiltered thay vì GET /resume/export vốn xuất .csv, không đúng định
 * dạng .xlsx yêu cầu ở CLAUDE.md).
 */
@Component({
  selector: 'app-view-resume-list',
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
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './view-resume-list.component.html',
  styleUrl: './view-resume-list.component.css',
})
export class ViewResumeListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly activeCode = ACTIVE_CODE;
  readonly inactiveCode = INACTIVE_CODE;

  readonly rows = signal<OrgResumeInfoDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsFiltered = signal(0);
  readonly exporting = signal(false);

  pageIndex = 1;
  pageSize = 25;

  searchNo = '';
  searchResumeName = '';
  searchChangeDateFrom: Date | null = null;
  searchChangeDateTo: Date | null = null;
  searchActivity: string | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('orgResume.modalAddTitle', 'Thêm mới thay đổi tổ chức')
      : `${this.i18n.t('orgResume.modalEditTitle', 'Cập nhật thay đổi tổ chức')}: ${this.form.no}`,
  );
  form: ResumeForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: OrgResumeInfoDto | null = null;

  constructor(
    private readonly api: ViewResumeListService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  clearSearch(): void {
    this.searchNo = '';
    this.searchResumeName = '';
    this.searchChangeDateFrom = null;
    this.searchChangeDateTo = null;
    this.searchActivity = null;
    this.search();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }

  formatDisplayDate(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, 'dd/MM/yyyy', 'vi');
  }

  formatDisplayDateTime(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, 'dd/MM/yyyy HH:mm', 'vi');
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: OrgResumeInfoDto): void {
    this.api.getByNo(row.no).subscribe({
      next: (data) => {
        this.isNew.set(false);
        this.form = {
          no: data.no,
          resumeName: data.resumeName || '',
          changeDate: this.toDate(data.changeDate),
          changeReason: data.changeReason || '',
          remark: data.remark || '',
          activity: data.activity || ACTIVE_CODE,
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.resumeName.trim()) {
      this.message.warning(this.i18n.t('orgResume.msg.pleaseEnterResumeName', 'Vui lòng nhập Tên thay đổi'));
      return;
    }
    if (!this.form.changeDate) {
      this.message.warning(this.i18n.t('orgResume.msg.pleaseEnterChangeDate', 'Vui lòng nhập Ngày hiệu lực'));
      return;
    }

    const payload: OrgResumeSavePayload = {
      no: this.form.no,
      changeDate: this.formatYmd(this.form.changeDate),
      resumeName: this.form.resumeName.trim(),
      changeReason: this.form.changeReason,
      remark: this.form.remark,
      activity: this.form.activity,
    };

    this.saving.set(true);
    const request$ = this.isNew() ? this.api.add(payload) : this.api.update(payload);
    request$.subscribe({
      next: () =>
        this.onSaveSuccess(
          this.isNew()
            ? this.i18n.t('alert.message.add_success', 'Thêm thành công!')
            : this.i18n.t('alert.message.update_success', 'Sửa thành công!'),
        ),
      error: () => this.onSaveError(),
    });
  }

  private onSaveSuccess(msg: string): void {
    this.saving.set(false);
    this.modalVisible.set(false);
    this.message.success(msg);
    this.loadPage();
  }

  private onSaveError(): void {
    this.saving.set(false);
    this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: OrgResumeInfoDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.no} - ${this.deleteTarget.resumeName ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.no).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('alert.message.delete_success', 'Xóa thành công!'));
        this.loadPage();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    this.exporting.set(true);
    const payload = this.buildRequestPayload(0, Math.max(this.recordsFiltered(), 1));
    this.api.getPageList(payload).subscribe({
      next: (res) => {
        this.exporting.set(false);
        this.downloadXlsx(res.data ?? []);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private downloadXlsx(list: OrgResumeInfoDto[]): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('orgResume.no', 'Mã thay đổi'),
      this.i18n.t('orgResume.resumeName', 'Tên thay đổi'),
      this.i18n.t('orgResume.changeDate', 'Ngày hiệu lực'),
      this.i18n.t('orgResume.changeReason', 'Nguyên nhân'),
      this.i18n.t('common.status', 'Trạng thái'),
      this.i18n.t('common.createdBy', 'Người tạo'),
      this.i18n.t('common.createDate', 'Ngày tạo'),
    ];
    const dataRows = list.map((r, i) => [
      i + 1, r.no, r.resumeName, this.formatDisplayDate(r.changeDate), r.changeReason,
      r.activity === ACTIVE_CODE
        ? this.i18n.t('common.active', 'Hoạt động')
        : this.i18n.t('common.inactive', 'Không hoạt động'),
      r.createdBy, this.formatDisplayDateTime(r.createDate),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSachThayDoiToChuc');
    XLSX.writeFile(workbook, 'danh_sach_thay_doi_to_chuc.xlsx');
  }

  // ==================== Helpers ====================

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    const payload = this.buildRequestPayload((this.pageIndex - 1) * this.pageSize, this.pageSize);
    this.api.getPageList(payload).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsFiltered.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsFiltered.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.recordsFiltered.set(0);
        this.loading.set(false);
      },
    });
  }

  private buildRequestPayload(start: number, length: number): DataTablesRequestPayload {
    return {
      draw: this.pageIndex,
      start,
      length,
      searchParams: {
        no: this.searchNo,
        resumeName: this.searchResumeName,
        changeDateFrom: this.formatYmd(this.searchChangeDateFrom),
        changeDateTo: this.formatYmd(this.searchChangeDateTo),
        activity: this.searchActivity ?? '',
      },
    };
  }

  private toDate(dateStr: string | null): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
