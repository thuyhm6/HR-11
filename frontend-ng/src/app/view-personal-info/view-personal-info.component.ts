import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EmployeeSearchDto, HrAddressMatters, HrEmergencyAddress, HrFamily, HrPersonalInfoDto } from './view-personal-info.model';
import { ViewPersonalInfoService } from './view-personal-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essCommon.empInfo', 'common.empId', 'common.empName', 'common.deptName', 'epi.field.position',
  'common.close', 'common.search', 'common.loadFail', 'tempEmp.pickEmp',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.col.no',
  'epi.section.personal', 'epi.section.address', 'epi.section.family', 'epi.section.emergency',
  'epi.field.dob', 'epi.field.gender', 'epi.field.maritalStatus', 'epi.field.weddingDate',
  'epi.field.ethnicity', 'epi.field.houseTp', 'epi.field.homePhone', 'epi.field.companyPhone',
  'epi.field.phone', 'epi.field.residence', 'epi.field.existSingle', 'epi.field.email',
  'epi.field.companyEmail', 'epi.field.nationality', 'epi.field.idcardNo', 'epi.field.idcardDate',
  'epi.field.issuingAuthority', 'epi.field.education', 'epi.field.religion', 'epi.field.politicalStatus',
  'epi.field.militaryService', 'epi.field.disability', 'epi.field.addressType', 'epi.field.effectiveDate',
  'epi.field.address', 'epi.field.relationship', 'epi.field.familyPhone', 'epi.field.fullName',
  'epi.field.primaryContact', 'epi.msg.noData',
  'common.yes', 'common.no', 'vpi.msg.selectEmployeeHint',
];

/**
 * Bản Angular của hrm/empinfo/viewPersonalInfo.html - trang gốc thực chất chỉ là template demo giao
 * diện Larkon (nội dung hardcode, không dùng DataTables, không bind dữ liệu thật dù controller đã
 * chuẩn bị sẵn HrPersonalInfo). Trang mới cho admin/HRM tra cứu 1 nhân viên bất kỳ (modal chọn nhân
 * viên - copy nguyên pattern từ ViewTempEmpInfoListComponent) rồi xem thông tin cá nhân/địa chỉ/gia
 * đình/khẩn cấp, layout và i18n key tham khảo PersonalInfoComponent (bản ESS) nhưng chỉ đọc (read-only,
 * không có modal chỉnh sửa/gửi yêu cầu vì đây là màn hình admin xem, không phải nhân viên tự khai báo).
 * Dùng nz-table cho các danh sách con thay vì dataTables. Gọi lại nguyên API GET /api/address,
 * /api/family, /api/emergency-address theo personId đã có sẵn ở HrEmpinfoController (dùng chung với
 * addressSearch/familySearch/emergencyAddressSearch) - chỉ thêm API /api/personalInfo mới để lấy
 * HrPersonalInfo theo personId (xem ViewPersonalInfoService).
 */
@Component({
  selector: 'app-view-personal-info',
  standalone: true,
  imports: [CommonModule, FormsModule, NzTableModule, NzInputModule, NzButtonModule, NzModalModule, NzAlertModule, TranslatePipe],
  templateUrl: './view-personal-info.component.html',
  styleUrl: './view-personal-info.component.css',
})
export class ViewPersonalInfoComponent implements OnInit {
  readonly selectedEmployee = signal<EmployeeSearchDto | null>(null);

  readonly personalInfo = signal<HrPersonalInfoDto | null>(null);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly addressList = signal<HrAddressMatters[]>([]);
  readonly familyList = signal<HrFamily[]>([]);
  readonly emergencyList = signal<HrEmergencyAddress[]>([]);

  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  pickerKeyword = '';

  constructor(
    private readonly api: ViewPersonalInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
  }

  /** ISO date ("yyyy-MM-dd..." từ LocalDate khi Jackson serialize) -> dd/MM/yyyy (xem CLAUDE.md). */
  formatDisplayDate(iso: string | null | undefined): string {
    if (!iso || iso.length < 10) return '';
    const [y, m, d] = iso.substring(0, 10).split('-');
    return `${d}/${m}/${y}`;
  }

  // ==================== Modal chọn nhân viên ====================

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
    this.pickerVisible.set(false);
    this.selectedEmployee.set(emp);
    this.loadAll(emp.personId);
  }

  // ==================== Load dữ liệu ====================

  private loadAll(personId: string): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.personalInfo.set(null);
    this.addressList.set([]);
    this.familyList.set([]);
    this.emergencyList.set([]);

    forkJoin({
      personalInfo: this.api.getPersonalInfo(personId),
      addresses: this.api.getAddresses(personId),
      families: this.api.getFamilies(personId),
      emergencies: this.api.getEmergencies(personId),
    }).subscribe({
      next: ({ personalInfo, addresses, families, emergencies }) => {
        this.personalInfo.set(personalInfo);
        this.addressList.set(addresses ?? []);
        this.familyList.set(families ?? []);
        this.emergencyList.set(emergencies ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.loading.set(false);
      },
    });
  }
}
