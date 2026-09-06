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
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  DataTablesRequestPayload,
  EmployeeSearchDto,
  HrSpecialMatterDto,
  HrSpecialMatterSavePayload,
} from './view-temp-emp-info-list.model';
import { ViewTempEmpInfoListService } from './view-temp-emp-info-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'alert.pa.pasalarycanshu.xingming', 'hr.enpinfo.title.EMP.EMPNUMBER', 'ar.addempshift.title.bydept',
  'ess.trans.title.postGradeName', 'ess.empInfo.start_date', 'ess.empInfo.end_date',
  'common.status', 'common.active', 'common.inactive', 'common.selectAll',
  'common.create', 'common.search', 'common.clear', 'common.export', 'common.action',
  'ar.viewcycle.title.xuhao', 'ar.excelexport.title.createdate', 'common.loading', 'common.loadFail',
  'common.saveFail', 'common.deleteFail', 'common.confirm', 'common.cancel', 'common.close',
  'common.empId', 'common.empName', 'common.deptName', 'common.totalRows', 'common.noData',
  'alert.message.add_success', 'alert.message.update_success', 'alert.message.delete_success',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword',
  'empSearch.col.no', 'epi.field.position',
  'tempEmp.otStatus', 'tempEmp.hasOt', 'tempEmp.noOt', 'tempEmp.specialNo', 'tempEmp.specialContent',
  'tempEmp.addTitle', 'tempEmp.editTitle', 'tempEmp.pickEmp', 'tempEmp.validateEmp',
  'tempEmp.deleteConfirmContent',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

interface SpecialMatterForm {
  personId: string;
  specialNo: string;
  empId: string;
  localName: string;
  deptNo: string;
  position: string;
  activity: number;
  otFlag: number;
  specialContent: string;
  startDate: Date | null;
  endDate: Date | null;
}

const EMPTY_FORM: SpecialMatterForm = {
  personId: '', specialNo: '', empId: '', localName: '', deptNo: '', position: '',
  activity: 1, otFlag: 0, specialContent: '', startDate: null, endDate: null,
};

/**
 * Bản Angular của hrm/empinfo/viewTempEmpInfoList.html (Thymeleaf + jQuery DataTables) - danh sách
 * nhân viên nữ (bảng HR_SPECIAL_MATTER). Gọi lại nguyên API JSON đã có sẵn ở HrEmpinfoController/
 * HrSpecialMatterService (xem ViewTempEmpInfoListService) - không đổi backend. Dùng nz-table (phân
 * trang server-side qua nzFrontPagination=false, gọi lại đúng POST /hrm/empinfo/female-employees
 * DataTables server-side cũ) thay cho jQuery DataTables; nz-modal thay modal Bootstrap cho
 * thêm/sửa/xóa; modal chọn nhân viên tự xây (giống ChangeUserComponent) thay cho EmployeeSearchModal
 * jQuery toàn cục.
 *
 * Lưu ý khi soát lại backend (HrSpecialMatterServiceImpl/HrSpecialMatterMapper.xml): form thêm/sửa
 * bản gốc có cả empId/localName/deptNo/position/specialNo, nhưng addSpecialMatter/updateSpecialMatter
 * chỉ thực sự ghi ACTIVITY/START_DATE/END_DATE/OT_FLAG/SPECIAL_CONTENT xuống HR_SPECIAL_MATTER -
 * EMPID/LOCAL_NAME/DEPTNO/POSITION đến từ JOIN hr_employee theo PERSON_ID nên sửa trực tiếp trên form
 * không có tác dụng, và SPECIAL_NO luôn do sequence sinh (insert không nhận giá trị form gửi lên). Vì
 * vậy modal ở đây chỉ cho sửa đúng những field có tác dụng thật; empId/localName/deptNo/position hiển
 * thị readonly (chỉ chọn được nhân viên khi THÊM MỚI, để backend resolve PERSON_ID qua GET_PERSON_ID).
 *
 * Nút "Xuất Excel" gọi lại POST female-employees với length = recordsFiltered để lấy toàn bộ kết quả
 * đang lọc rồi xuất .xlsx client-side (thư viện xlsx, xem CLAUDE.md) - nút "Xuất kết quả" bản gốc trỏ
 * tới GET /hrm/empinfo/export vốn đã hỏng từ trước (view Thymeleaf hrm/empinfo/exportFemaleEmployees
 * không tồn tại trong repo) nên không có gì để giữ lại tương thích.
 */
@Component({
  selector: 'app-view-temp-emp-info-list',
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
    TranslatePipe,
  ],
  templateUrl: './view-temp-emp-info-list.component.html',
  styleUrl: './view-temp-emp-info-list.component.css',
})
export class ViewTempEmpInfoListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrSpecialMatterDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsFiltered = signal(0);
  readonly exporting = signal(false);

  pageIndex = 1;
  pageSize = 25;

  localName = '';
  empId = '';
  deptNo = '';
  position = '';
  createDateFrom: Date | null = null;
  createDateTo: Date | null = null;
  activity: number | null = null;
  otFlag: number | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew() ? this.i18n.t('tempEmp.addTitle', 'Thêm mới nhân viên') : this.i18n.t('tempEmp.editTitle', 'Chỉnh sửa thông tin nhân viên'),
  );
  form: SpecialMatterForm = { ...EMPTY_FORM };

  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  pickerKeyword = '';

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrSpecialMatterDto | null = null;

  constructor(
    private readonly api: ViewTempEmpInfoListService,
    private readonly i18n: I18nService,
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
    this.localName = '';
    this.empId = '';
    this.deptNo = '';
    this.position = '';
    this.createDateFrom = null;
    this.createDateTo = null;
    this.activity = null;
    this.otFlag = null;
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

  // ==================== Modal Thêm mới / Chỉnh sửa ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: HrSpecialMatterDto): void {
    this.isNew.set(false);
    this.form = {
      personId: row.personId,
      specialNo: row.specialNo,
      empId: row.empId || '',
      localName: row.localName || '',
      deptNo: row.deptNo || '',
      position: row.position || '',
      activity: row.activity ?? 1,
      otFlag: row.otFlag ?? 0,
      specialContent: row.specialContent || '',
      startDate: this.toDate(row.startDate),
      endDate: this.toDate(row.endDate),
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (this.isNew() && !this.form.empId) {
      this.message.error(this.i18n.t('tempEmp.validateEmp', 'Vui lòng chọn nhân viên!'));
      return;
    }
    const payload: HrSpecialMatterSavePayload = {
      activity: this.form.activity,
      otFlag: this.form.otFlag,
      specialContent: this.form.specialContent,
      startDate: this.formatYmd(this.form.startDate),
      endDate: this.formatYmd(this.form.endDate),
    };
    this.saving.set(true);
    if (this.isNew()) {
      payload.empId = this.form.empId;
      this.api.addEmployee(payload).subscribe({
        next: () => this.onSaveSuccess(this.i18n.t('alert.message.add_success', 'Thêm mới thành công!')),
        error: () => this.onSaveError(),
      });
    } else {
      payload.personId = this.form.personId;
      payload.specialNo = this.form.specialNo;
      this.api.updateEmployee(payload).subscribe({
        next: () => this.onSaveSuccess(this.i18n.t('alert.message.update_success', 'Cập nhật thành công!')),
        error: () => this.onSaveError(),
      });
    }
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

  // ==================== Modal chọn nhân viên (chỉ dùng khi thêm mới) ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.api.searchEmployees(this.pickerKeyword.trim()).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  selectPickedEmployee(emp: EmployeeSearchDto): void {
    this.form.empId = emp.empId;
    this.form.localName = emp.localName;
    this.form.deptNo = emp.deptName || emp.deptNo;
    this.form.position = emp.position;
    this.pickerVisible.set(false);
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: HrSpecialMatterDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget) return;
    this.deleting.set(true);
    this.api.deleteEmployee(this.deleteTarget.specialNo).subscribe({
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

  private downloadXlsx(list: HrSpecialMatterDto[]): void {
    const headers = [
      this.i18n.t('ar.viewcycle.title.xuhao', 'STT'),
      this.i18n.t('hr.enpinfo.title.EMP.EMPNUMBER', 'Mã nhân viên'),
      this.i18n.t('alert.pa.pasalarycanshu.xingming', 'Họ tên'),
      this.i18n.t('ar.addempshift.title.bydept', 'Phòng ban'),
      this.i18n.t('ess.trans.title.postGradeName', 'Chức vụ'),
      this.i18n.t('common.status', 'Trạng thái'),
      this.i18n.t('ar.excelexport.title.createdate', 'Ngày tạo'),
      this.i18n.t('ess.empInfo.start_date', 'Ngày bắt đầu'),
      this.i18n.t('ess.empInfo.end_date', 'Ngày kết thúc'),
      this.i18n.t('tempEmp.otStatus', 'Trạng thái OT'),
    ];
    const dataRows = list.map((r, i) => [
      i + 1, r.empId, r.localName, r.deptNo, r.position,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Không hoạt động'),
      this.formatDisplayDateTime(r.createDate), this.formatDisplayDate(r.startDate), this.formatDisplayDate(r.endDate),
      r.otFlag === 1 ? this.i18n.t('tempEmp.hasOt', 'Có OT') : this.i18n.t('tempEmp.noOt', 'Không OT'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'danh_sach_nhan_vien_nu.xlsx');
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
        localName: this.localName,
        empId: this.empId,
        deptNo: this.deptNo,
        position: this.position,
        createDateFrom: this.formatYmd(this.createDateFrom),
        createDateTo: this.formatYmd(this.createDateTo),
        activity: this.activity != null ? String(this.activity) : '',
        otFlag: this.otFlag != null ? String(this.otFlag) : '',
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
