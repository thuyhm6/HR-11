import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { OrgResumeInfoDto } from '../view-resume-list/view-resume-list.model';
import { DeptManagerCheckRow, EmployeeOption } from './view-dept-manager-check.model';
import { ViewDeptManagerCheckService } from './view-dept-manager-check.service';

/** Các key message.properties dùng trong trang này - namespace "orgDeptMgr" dành riêng cho trang này,
 *  còn lại tái sử dụng nguyên key đã có ở "common", "orgResumeProcess" (dropdown phiên bản), "org.title.*"
 *  /"org.orgManage.*" (đúng nhãn đã dùng ở các trang org khác: Trưởng phòng/Chức vụ/Chức danh/Phòng ban),
 *  "orgCompose.isPartTime" (đúng nhãn "Kiêm nhiệm" đã có ở trang view-compose-org) và
 *  "hrm.empinfo.workexp.selectEmp" (placeholder ô tìm nhân viên, đã dùng ở AddressInfoComponent) - tải
 *  trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'org.orgManage.viewDeptManagerCheck.title', 'orgResumeProcess.versionName', 'orgResumeProcess.selectPlaceholder',
  'orgDeptMgr.deptColumn', 'orgDeptMgr.noManager', 'orgDeptMgr.vacancyColumn', 'orgDeptMgr.vacant',
  'orgDeptMgr.appointed', 'orgDeptMgr.modalTitle',
  'org.orgManage.DEPARTMENT_INFORMATION.Z', 'org.title.BUSINESS_NAME', 'org.title.POSITION_NO',
  'org.orgManage.title.deptName', 'orgCompose.isPartTime', 'hrm.empinfo.workexp.selectEmp',
  'common.stt', 'common.edit', 'common.save', 'common.cancel', 'common.close', 'common.noData',
  'common.exportExcel', 'common.loadFail', 'common.saveFail',
];

interface EditManagerForm {
  deptNo: string;
  deptLabel: string;
  managerEmpId: string;
  isPartTime: boolean;
}

const EMPTY_FORM: EditManagerForm = { deptNo: '', deptLabel: '', managerEmpId: '', isPartTime: false };

/**
 * Bản Angular của org/orgManage/viewDeptManagerCheck.html (Thymeleaf + jQuery + DataTables) - kiểm tra
 * trưởng bộ phận của toàn bộ phòng ban trong 1 phiên bản thay đổi tổ chức, cho phép cập nhật nhanh
 * trưởng bộ phận + trạng thái kiêm nhiệm ngay tại chỗ. Gọi lại nguyên API JSON đã có sẵn ở
 * OrgComposeController (xem ViewDeptManagerCheckService) - không đổi backend. DataTables (không phân
 * trang, cuộn dọc) được thay bằng nz-table cuộn dọc tương đương, EmployeeSearchModal (jQuery, mở modal
 * DataTables riêng để tìm nhân viên) được thay bằng nz-autocomplete gõ-tìm ngay trong modal sửa - đúng
 * pattern đã dùng ở AddressInfoComponent/WorkExperienceInfoComponent/... (cùng gọi 1 API
 * /hrm/empinfo/api/employee/search có sẵn của hệ thống). Nút Excel/PDF/Print (DataTables buttons) chỉ
 * còn lại Excel (xuất .xlsx bằng thư viện xlsx phía client, đúng pattern ViewResumeListComponent) - PDF/
 * Print là tính năng phụ của thư viện DataTables cũ, không phải nghiệp vụ cốt lõi của màn hình này.
 */
@Component({
  selector: 'app-view-dept-manager-check',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzModalModule,
    NzSelectModule,
    NzTableModule,
    TranslatePipe,
  ],
  templateUrl: './view-dept-manager-check.component.html',
})
export class ViewDeptManagerCheckComponent implements OnInit {
  readonly resumeOptions = signal<OrgResumeInfoDto[]>([]);
  readonly loadingResume = signal(false);
  selectedResumeNo: string | null = null;

  readonly rows = signal<DeptManagerCheckRow[]>([]);
  readonly loadingRows = signal(false);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  form: EditManagerForm = { ...EMPTY_FORM };
  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer: ReturnType<typeof setTimeout> | undefined;

  constructor(
    private readonly api: ViewDeptManagerCheckService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadResumeDropdown();
  }

  resumeLabel(r: OrgResumeInfoDto): string {
    return r.no ? `${r.no} ${r.resumeName ?? ''}` : (r.resumeName ?? '');
  }

  private loadResumeDropdown(): void {
    this.loadingResume.set(true);
    this.api.getResumeDropdown().subscribe({
      next: (list) => {
        this.resumeOptions.set(list ?? []);
        this.loadingResume.set(false);
        if (list?.length) {
          this.selectedResumeNo = list[0].no;
          this.loadRows();
        }
      },
      error: () => {
        this.resumeOptions.set([]);
        this.loadingResume.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  onResumeChange(resumeNo: string | null): void {
    this.selectedResumeNo = resumeNo;
    if (resumeNo) this.loadRows();
    else this.rows.set([]);
  }

  private loadRows(): void {
    if (!this.selectedResumeNo) return;
    this.loadingRows.set(true);
    this.api.getManagerCheckList(this.selectedResumeNo).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loadingRows.set(false);
      },
      error: () => {
        this.rows.set([]);
        this.loadingRows.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  deptIndentPx(row: DeptManagerCheckRow): string {
    return `${(row.DEPT_LEVEL || 0) * 20}px`;
  }

  isVacant(row: DeptManagerCheckRow): boolean {
    return String(row.VACANCY) === '1';
  }

  isPartTimeRow(row: DeptManagerCheckRow): boolean {
    return row.IS_PART_TIME === '1';
  }

  // ==================== Modal cập nhật trưởng bộ phận ====================

  openEditModal(row: DeptManagerCheckRow): void {
    this.form = {
      deptNo: row.DEPTNO,
      deptLabel: `${row.DEPTNO} - ${row.ORG_NAME_LOCAL ?? ''}`,
      managerEmpId: row.MANAGER_EMP_ID ?? '',
      isPartTime: row.IS_PART_TIME === '1',
    };
    this.empKeyword = row.MANAGER_EMP_ID ? `${row.MANAGER_EMP_ID} - ${row.MANAGER_NAME ?? ''}` : '';
    this.empOptions.set([]);
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  onEmpKeywordChange(value: string): void {
    this.empKeyword = value;
    this.form.managerEmpId = '';
    if (this.empSearchTimer) clearTimeout(this.empSearchTimer);
    const keyword = value.trim();
    if (!keyword) {
      this.empOptions.set([]);
      return;
    }
    this.empSearchTimer = setTimeout(() => {
      this.api.searchEmployees(keyword).subscribe({
        next: (list) => this.empOptions.set(list ?? []),
        error: () => this.empOptions.set([]),
      });
    }, 300);
  }

  onEmpSelected(option: EmployeeOption): void {
    this.form.managerEmpId = option.personId;
    this.empKeyword = `${option.empId} - ${option.localName}`;
    this.empOptions.set([]);
  }

  clearSelectedManager(): void {
    this.form.managerEmpId = '';
    this.empKeyword = '';
    this.empOptions.set([]);
  }

  saveManager(): void {
    if (!this.selectedResumeNo) return;
    this.saving.set(true);
    this.api
      .updateManager({
        resumeNo: this.selectedResumeNo,
        deptNo: this.form.deptNo,
        managerEmpId: this.form.managerEmpId,
        isPartTime: this.form.isPartTime ? '1' : '0',
      })
      .subscribe({
        next: (res) => {
          this.saving.set(false);
          this.modalVisible.set(false);
          this.message.success(res.message);
          this.loadRows();
        },
        error: (err) => {
          this.saving.set(false);
          const msg = err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!');
          this.message.error(msg);
        },
      });
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    const headers = [
      this.i18n.t('orgDeptMgr.deptColumn', 'Mã bộ phận - Tên bộ phận'),
      this.i18n.t('org.orgManage.DEPARTMENT_INFORMATION.Z', 'Trưởng phòng'),
      this.i18n.t('org.title.BUSINESS_NAME', 'Chức vụ'),
      this.i18n.t('org.title.POSITION_NO', 'Chức danh'),
      this.i18n.t('orgCompose.isPartTime', 'Kiêm nhiệm'),
      this.i18n.t('orgDeptMgr.vacancyColumn', 'Trống (Vacancy)'),
    ];
    const dataRows = this.rows().map((r) => [
      `${r.DEPTNO} - ${r.ORG_NAME_LOCAL ?? ''}`,
      r.MANAGER_NAME || this.i18n.t('orgDeptMgr.noManager', 'Chưa có'),
      r.POST_GRADE_NAME ?? '',
      r.POSITION_NAME ?? '',
      this.isPartTimeRow(r) ? 'X' : '',
      this.isVacant(r) ? this.i18n.t('orgDeptMgr.vacant', 'Trống') : this.i18n.t('orgDeptMgr.appointed', 'Đã bổ nhiệm'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'KiemTraTruongBoPhan');
    XLSX.writeFile(workbook, 'kiem_tra_truong_bo_phan.xlsx');
  }
}
