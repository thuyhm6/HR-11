import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
import { CodeItem, EvsResumeDto, EvsResumeSavePayload } from './evs-resume-list.model';
import { EvsResumeListService } from './evs-resume-list.service';

/** Chu kỳ đánh giá (parentCodeNo=14015038) và Số lần đánh giá (parentCodeNo=14015060) - đúng giá trị
 *  hardcode data-parent-code ở bản Thymeleaf gốc (viewResumeList.html). */
const EVS_CYCLE_PARENT_CODE = '14015038';
const EVS_LEVEL_PARENT_CODE = '14015060';

/** Các key message.properties dùng trong trang này - toàn bộ key evs.manage.viewResumeList.* và
 *  alert.message.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới - xem CLAUDE.md mục 3).
 *  Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'evs.manage.viewResumeList.label.evsYear', 'evs.manage.viewResumeList.label.evsCycle',
  'evs.manage.viewResumeList.label.allOption', 'evs.manage.viewResumeList.btn.search',
  'evs.manage.viewResumeList.btn.clearFilter', 'evs.manage.viewResumeList.btn.addNew',
  'evs.manage.viewResumeList.btn.close', 'evs.manage.viewResumeList.btn.save',
  'evs.manage.viewResumeList.btn.cancel', 'evs.manage.viewResumeList.btn.delete',
  'evs.manage.viewResumeList.col.no', 'evs.manage.viewResumeList.col.resumeName',
  'evs.manage.viewResumeList.col.evsCycle', 'evs.manage.viewResumeList.col.evsYear',
  'evs.manage.viewResumeList.col.evsMonth', 'evs.manage.viewResumeList.col.standardDate',
  'evs.manage.viewResumeList.col.startDate', 'evs.manage.viewResumeList.col.endDate',
  'evs.manage.viewResumeList.col.status', 'evs.manage.viewResumeList.col.action',
  'evs.manage.viewResumeList.modal.titleAdd', 'evs.manage.viewResumeList.modal.titleEdit',
  'evs.manage.viewResumeList.modal.deleteTitle', 'evs.manage.viewResumeList.modal.deleteConfirm',
  'evs.manage.viewResumeList.field.resumeName', 'evs.manage.viewResumeList.field.remark',
  'evs.manage.viewResumeList.field.evsCycle', 'evs.manage.viewResumeList.field.evsYear',
  'evs.manage.viewResumeList.field.evsMonth', 'evs.manage.viewResumeList.field.standardDate',
  'evs.manage.viewResumeList.field.duration', 'evs.manage.viewResumeList.field.activityStatus',
  'evs.manage.viewResumeList.field.evsLevel', 'evs.manage.viewResumeList.field.copyObject',
  'evs.manage.viewResumeList.option.selectDefault', 'evs.manage.viewResumeList.option.noCopy',
  'evs.manage.viewResumeList.msg.requiredResumeName', 'evs.manage.viewResumeList.msg.requiredStandardDate',
  'evs.manage.viewResumeList.msg.loadError', 'evs.manage.viewResumeList.msg.saveError',
  'evs.manage.viewResumeList.msg.deleteError',
  'alert.message.add_success', 'alert.message.update_success', 'alert.message.delete_success',
  'common.stt', 'common.action', 'common.edit', 'common.delete', 'common.confirm', 'common.cancel',
  'common.exportExcel', 'common.noData', 'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface ResumeForm {
  seq: string;
  resumeName: string;
  remark: string;
  evsCycle: string | null;
  evsYear: number | null;
  evsMonth: string | null;
  standardDate: Date | null;
  evsStartDate: Date | null;
  evsEndDate: Date | null;
  evsLevel: string | null;
  copyObject: string | null;
  activityName: string | null;
}

const EMPTY_FORM: ResumeForm = {
  seq: '', resumeName: '', remark: '', evsCycle: null, evsYear: new Date().getFullYear(), evsMonth: null,
  standardDate: null, evsStartDate: null, evsEndDate: null, evsLevel: null, copyObject: null, activityName: null,
};

/** Màu nz-tag theo ACTIVITY - đúng bảng màu vrlActivityBadge() ở bản Thymeleaf gốc
 *  (2=Chuẩn bị/warning, 3=Tiến hành/primary, 4=Hoàn thành/success, 1=Hoàn thành/info). */
const ACTIVITY_TAG_COLOR: Record<string, string> = { '2': 'warning', '3': 'processing', '4': 'success', '1': 'cyan' };

/**
 * Bản Angular của evs/manage/viewResumeList.html (Thymeleaf + jQuery DataTables) - Danh sách đợt đánh
 * giá (bảng EVS_RESUME_INFO). Gọi lại nguyên API JSON đã có sẵn ở EvsManageController (xem
 * EvsResumeListService) - không đổi backend. Dùng nz-table phân trang client-side (đúng hành vi
 * DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc yearSearch/cycleSearch, không phân trang server -
 * tham khảo ViewArItemComponent) thay cho jQuery DataTables; nz-modal thay modal Bootstrap.
 *
 * evsType lấy từ query param trên URL menu (bắt buộc phải có - EvsResumeMapper.selectList so khớp
 * EVS_TYPE khi có giá trị) - đăng ký lắng nghe queryParamMap thay vì chỉ đọc snapshot 1 lần, vì
 * TabRouteReuseStrategy giữ nguyên instance component giữa các tab cùng route nên ngOnInit không chạy
 * lại nếu có tab khác cùng path nhưng khác evsType (xem RegPersonalTargetComponent).
 *
 * Combo "Chu kỳ" (evsCycle) và "Số lần đánh giá" (evsLevel) load qua API code hệ thống dùng chung GET
 * /sys/api/getCode/list?parentCodeNo=... (14015038, 14015060 - đúng giá trị hardcode ở bản Thymeleaf
 * gốc). Combo "Tháng đánh giá" (evsMonth) cascading theo giá trị evsCycle đang chọn - mã evsCycle chính
 * là parentCodeNo để lấy danh sách tháng con (đúng hành vi reloadCodeSelect(parentCode=cycle) ở bản
 * gốc), nên phải load lại mỗi khi evsCycle đổi và luôn reset evsMonth về rỗng khi người dùng tự đổi Chu kỳ.
 *
 * standardDate/evsStartDate/evsEndDate đều lưu dạng chuỗi DD/MM/YYYY ở BE (STANDARD_DATE convert qua
 * TO_DATE/TO_CHAR 'DD/MM/YYYY' trong mapper, còn EVS_START_DATE/EVS_END_DATE là cột VARCHAR lưu nguyên
 * chuỗi không convert - xem EvsResumeMapper.xml) nên dùng nz-date-picker hiển thị dd/MM/yyyy rồi convert
 * 2 chiều thủ công (không dùng formatDate 'yyyy-MM-dd' như ViewCycleComponent vì BE 2 trang lưu khác
 * định dạng ngày).
 */
@Component({
  selector: 'app-evs-resume-list',
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
  templateUrl: './evs-resume-list.component.html',
  styleUrl: './evs-resume-list.component.css',
})
export class EvsResumeListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<EvsResumeDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly cycleOptions = signal<CodeItem[]>([]);
  readonly evsLevelOptions = signal<CodeItem[]>([]);
  readonly monthOptions = signal<CodeItem[]>([]);
  readonly copyOptions = signal<EvsResumeDto[]>([]);

  private evsType = '';
  searchYear: number | null = new Date().getFullYear();
  searchCycle: string | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('evs.manage.viewResumeList.modal.titleAdd', 'Thêm mới đánh giá')
      : this.i18n.t('evs.manage.viewResumeList.modal.titleEdit', 'Chỉnh sửa đánh giá'),
  );
  form: ResumeForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: EvsResumeDto | null = null;

  constructor(
    private readonly api: EvsResumeListService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(EVS_CYCLE_PARENT_CODE).subscribe({
      next: (list) => this.cycleOptions.set(list ?? []),
      error: () => this.cycleOptions.set([]),
    });
    this.api.getCodeList(EVS_LEVEL_PARENT_CODE).subscribe({
      next: (list) => this.evsLevelOptions.set(list ?? []),
      error: () => this.evsLevelOptions.set([]),
    });
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get('evsType') ?? '';
      this.search();
    });
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList(this.evsType, this.searchYear ? String(this.searchYear) : '', this.searchCycle ?? '').subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('evs.manage.viewResumeList.msg.loadError', 'Lỗi khi tải thông tin đánh giá.'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.searchYear = new Date().getFullYear();
    this.searchCycle = null;
    this.search();
  }

  activityTagColor(activity: string | null): string {
    return ACTIVITY_TAG_COLOR[activity ?? ''] ?? 'default';
  }

  // ==================== Combo Tháng đánh giá (cascading theo Chu kỳ) ====================

  private loadMonthOptions(cycleCode: string | null): void {
    if (!cycleCode) {
      this.monthOptions.set([]);
      return;
    }
    this.api.getCodeList(cycleCode).subscribe({
      next: (list) => this.monthOptions.set(list ?? []),
      error: () => this.monthOptions.set([]),
    });
  }

  onCycleChange(): void {
    this.form.evsMonth = null;
    this.loadMonthOptions(this.form.evsCycle);
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.monthOptions.set([]);
    this.loadCopyOptions();
    this.modalVisible.set(true);
  }

  openEditModal(row: EvsResumeDto): void {
    this.api.getOne(row.seq).subscribe({
      next: (r) => {
        if (!r) return;
        this.isNew.set(false);
        this.form = {
          seq: r.seq,
          resumeName: r.resumeName || '',
          remark: r.remark || '',
          evsCycle: r.evsCycle || null,
          evsYear: r.evsYear ? Number(r.evsYear) : null,
          evsMonth: r.evsMonth || null,
          standardDate: this.parseDmy(r.standardDate),
          evsStartDate: this.parseDmy(r.evsStartDate),
          evsEndDate: this.parseDmy(r.evsEndDate),
          evsLevel: r.evsLevel || null,
          copyObject: r.copyObject || null,
          activityName: r.activityName || null,
        };
        this.loadMonthOptions(r.evsCycle);
        this.loadCopyOptions();
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('evs.manage.viewResumeList.msg.loadError', 'Lỗi khi tải thông tin đánh giá.')),
    });
  }

  private loadCopyOptions(): void {
    this.api.getCopyOptions(this.evsType).subscribe({
      next: (list) => this.copyOptions.set(list ?? []),
      error: () => this.copyOptions.set([]),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    const resumeName = this.form.resumeName.trim();
    if (!resumeName) {
      this.message.warning(this.i18n.t('evs.manage.viewResumeList.msg.requiredResumeName', 'Vui lòng nhập Tên đánh giá.'));
      return;
    }
    if (!this.form.standardDate) {
      this.message.warning(this.i18n.t('evs.manage.viewResumeList.msg.requiredStandardDate', 'Vui lòng nhập Ngày tiêu chuẩn.'));
      return;
    }

    const payload: EvsResumeSavePayload = {
      seq: this.form.seq,
      resumeName,
      remark: this.form.remark,
      evsCycle: this.form.evsCycle ?? '',
      evsYear: this.form.evsYear != null ? String(this.form.evsYear) : '',
      evsMonth: this.form.evsMonth ?? '',
      standardDate: this.formatDmy(this.form.standardDate),
      evsStartDate: this.formatDmy(this.form.evsStartDate),
      evsEndDate: this.formatDmy(this.form.evsEndDate),
      evsLevel: this.form.evsLevel ?? '',
      copyObject: this.form.copyObject ?? '',
      evsType: this.evsType,
    };

    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(
          this.isNew()
            ? this.i18n.t('alert.message.add_success', 'Thêm thành công!')
            : this.i18n.t('alert.message.update_success', 'Sửa thành công!'),
        );
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('evs.manage.viewResumeList.msg.saveError', 'Lỗi khi lưu dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: EvsResumeDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget?.resumeName ?? '';
  }

  get deleteConfirmMessage(): string {
    const template = this.i18n.t('evs.manage.viewResumeList.modal.deleteConfirm', 'Bạn có chắc muốn xóa đánh giá "{0}"?');
    return template.replace('{0}', this.deleteTargetName);
  }

  confirmDelete(): void {
    if (!this.deleteTarget) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.seq, this.evsType).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('alert.message.delete_success', 'Xóa thành công!'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('evs.manage.viewResumeList.msg.deleteError', 'Lỗi khi xóa dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('evs.manage.viewResumeList.col.resumeName', 'Tên đánh giá'),
      this.i18n.t('evs.manage.viewResumeList.col.evsCycle', 'Chu kỳ'),
      this.i18n.t('evs.manage.viewResumeList.col.evsYear', 'Năm đánh giá'),
      this.i18n.t('evs.manage.viewResumeList.col.evsMonth', 'Tháng đánh giá'),
      this.i18n.t('evs.manage.viewResumeList.col.standardDate', 'Ngày tiêu chuẩn'),
      this.i18n.t('evs.manage.viewResumeList.col.startDate', 'Thời gian bắt đầu'),
      this.i18n.t('evs.manage.viewResumeList.col.endDate', 'Thời gian kết thúc'),
      this.i18n.t('evs.manage.viewResumeList.col.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.resumeName, r.evsCycleName || r.evsCycle, r.evsYear, r.evsMonthName || r.evsMonth,
      r.standardDate, r.evsStartDate, r.evsEndDate, r.activityName || r.activity,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSachDanhGia');
    XLSX.writeFile(workbook, 'evs_resume_list.xlsx');
  }

  // ==================== Helpers ====================

  private parseDmy(s: string | null): Date | null {
    if (!s) return null;
    const [d, m, y] = s.split('/');
    if (!d || !m || !y) return null;
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return isNaN(date.getTime()) ? null : date;
  }

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }
}
