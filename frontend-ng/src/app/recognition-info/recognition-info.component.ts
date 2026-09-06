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
import { EmployeeOption, HrRewardDto, RewardSavePayload } from './recognition-info.model';
import { RecognitionInfoService } from './recognition-info.service';

/** Các key message.properties dùng trong trang này - đều đã có sẵn (hrm.empinfo.reward.* dành riêng
 *  cho trang này, cộng các key chung), tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.empId', 'common.empName', 'common.deptName', 'common.action', 'common.addNew', 'common.edit',
  'common.delete', 'common.save', 'common.close', 'common.confirm', 'common.cancel', 'common.yes', 'common.no',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.loadFail', 'common.noData', 'common.totalRows', 'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel', 'hrm.empinfo.workexp.selectEmp',
  'hrm.empinfo.reward.addTitle', 'hrm.empinfo.reward.editTitle', 'hrm.empinfo.reward.employee',
  'hrm.empinfo.reward.rewardType', 'hrm.empinfo.reward.rewardDate', 'hrm.empinfo.reward.rewardCnpy',
  'hrm.empinfo.reward.reward', 'hrm.empinfo.reward.rewardTypeCode', 'hrm.empinfo.reward.rewardPayDate',
  'hrm.empinfo.reward.personnelCardInquiry', 'hrm.empinfo.reward.payAppearIsnot', 'hrm.empinfo.reward.lineId',
  'hrm.empinfo.reward.otherType', 'hrm.empinfo.reward.remarks', 'hrm.empinfo.reward.searchType',
  'hrm.empinfo.reward.colDate', 'hrm.empinfo.reward.colCnpy', 'hrm.empinfo.reward.colReward',
  'hrm.empinfo.reward.confirmDelete', 'hrm.empinfo.reward.pleaseSelectEmp',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface RewardForm {
  rewardNo: number | null;
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  rewardType: string;
  rewardDate: Date | null;
  rewardCnpy: string;
  reward: string;
  rewardTypeCode: string;
  rewardPayDate: Date | null;
  personnelCardInquiry: string;
  payAppearIsnot: string;
  lineId: string;
  otherType: string;
  remarks: string;
}

const EMPTY_FORM: RewardForm = {
  rewardNo: null, personId: '', empId: '', localName: '', deptName: '', rewardType: '',
  rewardDate: null, rewardCnpy: '', reward: '', rewardTypeCode: '', rewardPayDate: null,
  personnelCardInquiry: 'N', payAppearIsnot: 'N', lineId: '', otherType: '', remarks: '',
};

/**
 * Bản Angular của hrm/empinfo/recognitionSearch.html (Thymeleaf + jQuery DataTables) - quản lý khen
 * thưởng của nhân viên (bảng hr_reward). Gọi lại nguyên API JSON đã có sẵn ở HrEmpinfoController (xem
 * RecognitionInfoService) - không đổi backend. Dùng nz-table (phân trang client-side, đúng hành vi
 * DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang server, tham khảo
 * ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal thay modal Bootstrap;
 * nz-autocomplete thay cho EmployeeSearchModal jQuery toàn cục (giống các trang empinfo khác đã
 * migrate) - mapper update() có cập nhật PERSON_ID nên form cho đổi nhân viên cả khi sửa. Không có
 * field nào được BE resolve tên qua GET_GLOBAL_NAME (xem HrRewardMapper.xml) nên giữ nguyên text input
 * như bản gốc, không đổi sang nz-select (khác các trang address/family/education). rewardDate/
 * rewardPayDate là LocalDate nên dùng nz-date-picker (khác educationSearch: startDate/endDate ở đó là
 * String "YYYYMMDD"). Bản gốc chưa làm xuất Excel (nút "Xuất Excel" chỉ alert "đang phát triển") - nay
 * làm luôn client-side bằng xlsx (SheetJS) theo đúng quy ước xuất .xlsx của các trang khác (xem
 * CLAUDE.md), không giữ placeholder cũ.
 */
@Component({
  selector: 'app-recognition-info',
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
  templateUrl: './recognition-info.component.html',
  styleUrl: './recognition-info.component.css',
})
export class RecognitionInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrRewardDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchEmpId = '';
  searchLocalName = '';
  searchRewardType = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.empinfo.reward.addTitle', 'Thêm mới khen thưởng')
      : this.i18n.t('hrm.empinfo.reward.editTitle', 'Cập nhật khen thưởng'),
  );
  form: RewardForm = { ...EMPTY_FORM };

  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrRewardDto | null = null;

  constructor(
    private readonly api: RecognitionInfoService,
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
    this.api
      .search({ empId: this.searchEmpId, localName: this.searchLocalName, rewardType: this.searchRewardType })
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
    this.searchRewardType = '';
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

  openEditModal(row: HrRewardDto): void {
    this.isNew.set(false);
    this.form = {
      rewardNo: row.rewardNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      deptName: row.deptName || '',
      rewardType: row.rewardType || '',
      rewardDate: row.rewardDate ? new Date(row.rewardDate) : null,
      rewardCnpy: row.rewardCnpy || '',
      reward: row.reward || '',
      rewardTypeCode: row.rewardTypeCode || '',
      rewardPayDate: row.rewardPayDate ? new Date(row.rewardPayDate) : null,
      personnelCardInquiry: row.personnelCardInquiry || 'N',
      payAppearIsnot: row.payAppearIsnot || 'N',
      lineId: row.lineId || '',
      otherType: row.otherType || '',
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
    this.form.deptName = option.deptName;
    this.empKeyword = `${option.empId} - ${option.localName}`;
    this.empOptions.set([]);
  }

  saveForm(): void {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t('hrm.empinfo.reward.pleaseSelectEmp', 'Vui lòng chọn nhân viên'));
      return;
    }
    const payload: RewardSavePayload = {
      rewardNo: this.form.rewardNo,
      personId: this.form.personId,
      rewardType: this.form.rewardType,
      rewardDate: this.formatYmd(this.form.rewardDate),
      rewardCnpy: this.form.rewardCnpy,
      reward: this.form.reward,
      rewardTypeCode: this.form.rewardTypeCode,
      rewardPayDate: this.formatYmd(this.form.rewardPayDate),
      personnelCardInquiry: this.form.personnelCardInquiry,
      payAppearIsnot: this.form.payAppearIsnot,
      lineId: this.form.lineId,
      otherType: this.form.otherType,
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

  openDeleteConfirm(row: HrRewardDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.rewardType})` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.rewardNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.rewardNo).subscribe({
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

  /** Xuất excel client-side (bản gốc chưa làm - nút chỉ alert "đang phát triển") - dùng thư viện xlsx
   *  (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã NV'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('hrm.empinfo.reward.rewardType', 'Loại hình'),
      this.i18n.t('hrm.empinfo.reward.colDate', 'Ngày KT'),
      this.i18n.t('hrm.empinfo.reward.colCnpy', 'Cơ quan KT'),
      this.i18n.t('hrm.empinfo.reward.colReward', 'Phần thưởng'),
      this.i18n.t('hrm.empinfo.reward.remarks', 'Ghi chú'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.rewardType, r.rewardDate, r.rewardCnpy, r.reward, r.remarks,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'recognition_info_list.xlsx');
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
