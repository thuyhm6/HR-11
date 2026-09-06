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
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  CodeItem,
  EmployeeOption,
  FamilySavePayload,
  HrFamilyDto,
} from './family-info.model';
import { FamilyInfoService } from './family-info.service';

/** Các key message.properties dùng trong trang này - đều đã có sẵn (hrm.empinfo.family.* dành riêng
 *  cho trang này, cộng các key chung), tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.empId', 'common.empName', 'common.action', 'common.addNew', 'common.edit',
  'common.delete', 'common.save', 'common.close', 'common.confirm', 'common.cancel', 'common.yes', 'common.no',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.loadFail', 'common.noData', 'common.totalRows', 'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName',
  'common.selectAll', 'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel',
  'hrm.empinfo.workexp.selectEmp',
  'hrm.empinfo.family.addTitle', 'hrm.empinfo.family.editTitle', 'hrm.empinfo.family.employee',
  'hrm.empinfo.family.famName', 'hrm.empinfo.family.famType', 'hrm.empinfo.family.famBorndate',
  'hrm.empinfo.family.famIdcard', 'hrm.empinfo.family.gender', 'hrm.empinfo.family.famPhone',
  'hrm.empinfo.family.famEmail', 'hrm.empinfo.family.ocupation', 'hrm.empinfo.family.famCompanyName',
  'hrm.empinfo.family.famAddress', 'hrm.empinfo.family.liveYn', 'hrm.empinfo.family.emergencyContactYn',
  'hrm.empinfo.family.taxYn', 'hrm.empinfo.family.remarks', 'hrm.empinfo.family.male', 'hrm.empinfo.family.female',
  'hrm.empinfo.family.searchFamName', 'hrm.empinfo.family.colFamName', 'hrm.empinfo.family.colRelation',
  'hrm.empinfo.family.colPhone', 'hrm.empinfo.family.colOcupation', 'hrm.empinfo.family.colDependent',
  'hrm.empinfo.family.famTypePlaceholder', 'hrm.empinfo.family.pleaseSelect', 'hrm.empinfo.family.confirmDelete',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** parentCodeNo của bảng SY_CODE cho quan hệ người thân - dùng chung với PersonalInfoComponent (famTypeOptions). */
const FAM_TYPE_PARENT_CODE = '950';

interface FamilyForm {
  familyNo: number | null;
  personId: string;
  empId: string;
  localName: string;
  famName: string;
  famTypeCode: string | null;
  famBorndate: Date | null;
  famIdcard: string;
  gender: string | null;
  famPhone: string;
  famEmail: string;
  ocupation: string;
  famCompanyName: string;
  famAddress: string;
  liveYn: string;
  emergencyContactYn: string;
  taxYn: string;
  remarks: string;
}

const EMPTY_FORM: FamilyForm = {
  familyNo: null, personId: '', empId: '', localName: '', famName: '', famTypeCode: null,
  famBorndate: null, famIdcard: '', gender: null, famPhone: '', famEmail: '', ocupation: '',
  famCompanyName: '', famAddress: '', liveYn: 'N', emergencyContactYn: 'N', taxYn: 'N', remarks: '',
};

/**
 * Bản Angular của hrm/empinfo/familySearch.html (Thymeleaf + jQuery DataTables) - quản lý người thân
 * của nhân viên (bảng hr_family). Gọi lại nguyên API JSON đã có sẵn ở HrEmpinfoController (xem
 * FamilyInfoService) - không đổi backend. Dùng nz-table (phân trang client-side, đúng hành vi
 * DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang server, tham khảo
 * ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal thay modal Bootstrap;
 * nz-autocomplete thay cho EmployeeSearchModal jQuery toàn cục (giống các trang empinfo khác đã
 * migrate) - mapper update() có cập nhật PERSON_ID nên form cho đổi nhân viên cả khi sửa. nz-select
 * cho Quan hệ (famTypeCode, parentCodeNo '950') dùng chung code list mà PersonalInfoComponent (mục
 * người thân ESS) đang dùng - BE có resolve tên qua GET_GLOBAL_NAME. Riêng Giới tính (gender) giữ
 * nguyên 2 giá trị tĩnh Male/Female như bản gốc (không đổi sang code list) vì mapper insert/update ghi
 * thẳng giá trị này, không có codeList tương ứng nào trong PersonalInfoComponent ánh xạ đúng 2 giá trị
 * "Male"/"Female". Không có field "Quốc tịch" dù model có - mapper insert()/update() không ghi cột
 * NATIONALITY (xem HrFamilyMapper.xml) nên bản gốc cũng không có field này. Xuất excel làm client-side
 * (không có endpoint export riêng ở backend - bản gốc cũng xuất client-side qua DataTables Buttons).
 */
@Component({
  selector: 'app-family-info',
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
    NzAutocompleteModule,
    TranslatePipe,
  ],
  templateUrl: './family-info.component.html',
  styleUrl: './family-info.component.css',
})
export class FamilyInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrFamilyDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly famTypeOptions = signal<CodeItem[]>([]);

  searchEmpId = '';
  searchLocalName = '';
  searchFamName = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.empinfo.family.addTitle', 'Thêm mới Người thân')
      : this.i18n.t('hrm.empinfo.family.editTitle', 'Cập nhật Người thân'),
  );
  form: FamilyForm = { ...EMPTY_FORM };

  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrFamilyDto | null = null;

  constructor(
    private readonly api: FamilyInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(FAM_TYPE_PARENT_CODE).subscribe((list) => this.famTypeOptions.set(list ?? []));
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .search({ empId: this.searchEmpId, localName: this.searchLocalName, famName: this.searchFamName })
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
    this.searchEmpId = '';
    this.searchLocalName = '';
    this.searchFamName = '';
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.empKeyword = '';
    this.empOptions.set([]);
    this.modalVisible.set(true);
  }

  openEditModal(row: HrFamilyDto): void {
    this.isNew.set(false);
    this.form = {
      familyNo: row.familyNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      famName: row.famName || '',
      famTypeCode: row.famTypeCode || null,
      famBorndate: row.famBorndate ? new Date(row.famBorndate) : null,
      famIdcard: row.famIdcard || '',
      gender: row.gender || null,
      famPhone: row.famPhone || '',
      famEmail: row.famEmail || '',
      ocupation: row.ocupation || '',
      famCompanyName: row.famCompanyName || '',
      famAddress: row.famAddress || '',
      liveYn: row.liveYn || 'N',
      emergencyContactYn: row.emergencyContactYn || 'N',
      taxYn: row.taxYn || 'N',
      remarks: row.remarks || '',
    };
    this.empKeyword = `${this.form.empId} - ${this.form.localName}`;
    this.empOptions.set([]);
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  onEmpKeywordChange(value: string): void {
    this.empKeyword = value;
    this.form.personId = '';
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
    this.form.personId = option.personId;
    this.form.empId = option.empId;
    this.form.localName = option.localName;
    this.empKeyword = `${option.empId} - ${option.localName}`;
    this.empOptions.set([]);
  }

  saveForm(): void {
    if (!this.form.personId || !this.form.famName || !this.form.famTypeCode) {
      this.message.warning(this.i18n.t('hrm.empinfo.family.pleaseSelect', 'Vui lòng điền đủ: Nhân viên, Tên người thân, Quan hệ'));
      return;
    }
    const payload: FamilySavePayload = {
      familyNo: this.form.familyNo,
      personId: this.form.personId,
      famTypeCode: this.form.famTypeCode,
      famName: this.form.famName,
      famBorndate: this.formatYmd(this.form.famBorndate),
      famIdcard: this.form.famIdcard,
      famPhone: this.form.famPhone,
      famCompanyName: this.form.famCompanyName,
      liveYn: this.form.liveYn,
      emergencyContactYn: this.form.emergencyContactYn,
      famAddress: this.form.famAddress,
      taxYn: this.form.taxYn,
      gender: this.form.gender,
      famEmail: this.form.famEmail,
      ocupation: this.form.ocupation,
      remarks: this.form.remarks,
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

  openDeleteConfirm(row: HrFamilyDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.famName})` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.familyNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.familyNo).subscribe({
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

  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã NV'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('hrm.empinfo.family.colFamName', 'Tên người thân'),
      this.i18n.t('hrm.empinfo.family.colRelation', 'Quan hệ'),
      this.i18n.t('hrm.empinfo.family.famBorndate', 'Ngày sinh'),
      this.i18n.t('hrm.empinfo.family.colPhone', 'SĐT'),
      this.i18n.t('hrm.empinfo.family.colOcupation', 'Nghề nghiệp'),
      this.i18n.t('hrm.empinfo.family.colDependent', 'Người phụ thuộc'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.famName, r.famTypeName, r.famBorndate, r.famPhone, r.ocupation,
      r.taxYn === 'Y' ? 'x' : '',
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'family_info_list.xlsx');
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
