import { CommonModule, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AddressApplyPayload,
  CodeItem,
  EmergencyApplyPayload,
  EssPersonalInfoDto,
  FamilyApplyPayload,
  HrAddressMatters,
  HrEmergencyAddress,
  HrFamily,
  PersonalApplyPayload,
} from './personal-info.model';
import { PersonalInfoService } from './personal-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'epi.section.personal', 'epi.section.address', 'epi.section.family', 'epi.section.emergency',
  'epi.field.fullName', 'epi.field.engName', 'epi.field.empId', 'epi.field.department', 'epi.field.position',
  'epi.field.dob', 'epi.field.age', 'epi.field.birthPlace', 'epi.field.gender', 'epi.field.maritalStatus',
  'epi.field.weddingDate', 'epi.field.ethnicity', 'epi.field.houseTp', 'epi.field.homePhone',
  'epi.field.companyPhone', 'epi.field.phone', 'epi.field.residence', 'epi.field.existSingle',
  'epi.field.email', 'epi.field.companyEmail', 'epi.field.nationality', 'epi.field.idcardNo',
  'epi.field.idcardDate', 'epi.field.issuingAuthority', 'epi.field.cvUpdateStatus', 'epi.field.education',
  'epi.field.religion', 'epi.field.politicalStatus', 'epi.field.militaryService', 'epi.field.disability',
  'epi.field.addressType', 'epi.field.effectiveDate', 'epi.field.address', 'epi.field.relationship',
  'epi.field.familyPhone', 'epi.field.primaryContact', 'epi.field.isPrimaryContact', 'epi.field.attachFiles',
  'epi.btn.addNew', 'epi.btn.edit', 'epi.btn.submitRequest',
  'epi.modal.editPersonal', 'epi.modal.address', 'epi.modal.addAddress', 'epi.modal.editAddress',
  'epi.modal.addFamily', 'epi.modal.editFamily', 'epi.modal.addEmergency', 'epi.modal.editEmergency',
  'epi.msg.noData', 'epi.msg.loadError.address', 'epi.msg.loadError.family', 'epi.msg.loadError.emergency',
  'epi.msg.saveSuccess', 'epi.msg.addSuccess', 'epi.msg.saveError.personal', 'epi.msg.saveError.address',
  'epi.msg.saveError.family', 'epi.msg.saveError.emergency', 'epi.msg.validate.addressType',
  'epi.msg.validate.familyRequired', 'epi.msg.validate.emergencyName', 'epi.select.choose',
  'epi.select.chooseAddressType', 'epi.select.chooseRelationship', 'epi.msg.uploadHint',
  'epi.msg.applyNote', 'epi.msg.applySuccess',
  'common.yes', 'common.no', 'common.close', 'common.loadFail',
];

interface PersonalForm {
  localName: string;
  engName: string;
  armyOrNot: boolean;
  obstacleOrNot: boolean;
  idcardNo: string;
  idcardStartDate: Date | null;
  issuingAuthority: string;
  cvUpdateStatus: string | null;
  dob: Date | null;
  age: string;
  regPlace: string;
  sexCode: string | null;
  finalDegreeCode: string | null;
  nationalityCode: string | null;
  nationCode: string | null;
  religion: string;
  maritalStatusCode: string | null;
  weddingDate: Date | null;
  politicalStatus: string;
  existSingle: string | null;
  homePhone: string;
  companyPhone: string;
  residentialDistinction: string | null;
  singId: string;
  houseTp: string;
  email: string;
  emailSecond: string;
  cellphone: string;
}

interface AddressForm {
  updateAddressNo: number | null;
  addressType: string | null;
  effectiveStartDate: Date | null;
  addressContent: string;
}

interface FamilyForm {
  familyNo: number | null;
  famTypeCode: string | null;
  famName: string;
  gender: string | null;
  famBorndate: Date | null;
  famPhone: string;
}

interface EmergencyForm {
  emergencyNo: number | null;
  emerName: string;
  emerTypeCode: string | null;
  emerPhone: string;
  emerEmail: string;
  emerAddress: string;
  isEmergencyAddress: boolean;
}

const EMPTY_PERSONAL_FORM: PersonalForm = {
  localName: '', engName: '', armyOrNot: false, obstacleOrNot: false, idcardNo: '', idcardStartDate: null,
  issuingAuthority: '', cvUpdateStatus: null, dob: null, age: '', regPlace: '', sexCode: null,
  finalDegreeCode: null, nationalityCode: null, nationCode: null, religion: '', maritalStatusCode: null,
  weddingDate: null, politicalStatus: '', existSingle: null, homePhone: '', companyPhone: '',
  residentialDistinction: null, singId: '', houseTp: '', email: '', emailSecond: '', cellphone: '',
};

const EMPTY_ADDRESS_FORM: AddressForm = { updateAddressNo: null, addressType: null, effectiveStartDate: null, addressContent: '' };

const EMPTY_FAMILY_FORM: FamilyForm = { familyNo: null, famTypeCode: null, famName: '', gender: null, famBorndate: null, famPhone: '' };

const EMPTY_EMERGENCY_FORM: EmergencyForm = {
  emergencyNo: null, emerName: '', emerTypeCode: null, emerPhone: '', emerEmail: '', emerAddress: '', isEmergencyAddress: false,
};

/**
 * Bản Angular của ess/empinfo/viewPersonalInfoForEss.html (Thymeleaf + jQuery + DataTables) - Hồ sơ cá
 * nhân của chính nhân viên đang đăng nhập (xem cá nhân/địa chỉ/gia đình/khẩn cấp, gửi yêu cầu chỉnh
 * sửa qua workflow duyệt). Gọi lại nguyên API JSON đã có sẵn ở EssEmpInfoController (xem
 * PersonalInfoService) - không đổi backend. Dùng nz-table thay bảng HTML tự build chuỗi jQuery, nz-modal
 * thay modal Bootstrap. Card "Thông tin nhân viên" (fragments/essEmpInfoCard.html gốc) được gộp thẳng
 * vào đây, dùng lại data đã tải từ myInfo thay vì gọi thêm 1 API riêng như bản gốc. Trường tuổi trong
 * modal Cá nhân chỉ hiển thị số năm tròn (bản gốc có thêm số tháng, hardcode text tiếng Việt "Tuổi"/
 * "Tháng" không qua i18n) - bỏ bớt phần tháng để tránh phải thêm key dịch mới cho 1 label phụ.
 */
@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
})
export class PersonalInfoComponent implements OnInit {
  @ViewChild('personalFileInput') personalFileInputRef?: ElementRef<HTMLInputElement>;
  @ViewChild('familyFileInput') familyFileInputRef?: ElementRef<HTMLInputElement>;
  @ViewChild('emergencyFileInput') emergencyFileInputRef?: ElementRef<HTMLInputElement>;

  readonly basicInfo = signal<EssPersonalInfoDto | null>(null);

  readonly addressList = signal<HrAddressMatters[]>([]);
  readonly addressLoading = signal(false);
  readonly addressError = signal<string | null>(null);

  readonly familyList = signal<HrFamily[]>([]);
  readonly familyLoading = signal(false);
  readonly familyError = signal<string | null>(null);

  readonly emergencyList = signal<HrEmergencyAddress[]>([]);
  readonly emergencyLoading = signal(false);
  readonly emergencyError = signal<string | null>(null);

  readonly maritalStatusOptions = signal<CodeItem[]>([]);
  readonly nationOptions = signal<CodeItem[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);
  readonly sexOptions = signal<CodeItem[]>([]);
  readonly finalDegreeOptions = signal<CodeItem[]>([]);
  readonly cvUpdateStatusOptions = signal<CodeItem[]>([]);
  readonly residentialDistinctionOptions = signal<CodeItem[]>([]);
  readonly addressTypeOptions = signal<CodeItem[]>([]);
  readonly famTypeOptions = signal<CodeItem[]>([]);
  readonly emerTypeOptions = signal<CodeItem[]>([]);

  readonly personalModalVisible = signal(false);
  readonly personalSaving = signal(false);
  personalForm: PersonalForm = { ...EMPTY_PERSONAL_FORM };
  personalFiles: File[] = [];

  readonly addressModalVisible = signal(false);
  readonly addressSaving = signal(false);
  readonly addressIsNew = signal(true);
  readonly addressModalTitle = computed(() =>
    this.addressIsNew()
      ? this.i18n.t('epi.modal.addAddress', 'Thêm mới địa chỉ')
      : this.i18n.t('epi.modal.editAddress', 'Cập nhật địa chỉ'),
  );
  addressForm: AddressForm = { ...EMPTY_ADDRESS_FORM };

  readonly familyModalVisible = signal(false);
  readonly familySaving = signal(false);
  readonly familyIsNew = signal(true);
  readonly familyModalTitle = computed(() =>
    this.familyIsNew()
      ? this.i18n.t('epi.modal.addFamily', 'Thêm mới thành viên gia đình')
      : this.i18n.t('epi.modal.editFamily', 'Cập nhật thành viên gia đình'),
  );
  familyForm: FamilyForm = { ...EMPTY_FAMILY_FORM };
  familyFiles: File[] = [];

  readonly emergencyModalVisible = signal(false);
  readonly emergencySaving = signal(false);
  readonly emergencyIsNew = signal(true);
  readonly emergencyModalTitle = computed(() =>
    this.emergencyIsNew()
      ? this.i18n.t('epi.modal.addEmergency', 'Thêm mới liên hệ khẩn cấp')
      : this.i18n.t('epi.modal.editEmergency', 'Cập nhật liên hệ khẩn cấp'),
  );
  emergencyForm: EmergencyForm = { ...EMPTY_EMERGENCY_FORM };
  emergencyFiles: File[] = [];

  constructor(
    private readonly api: PersonalInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadCodeOptions();
    this.loadBasicInfo();
    this.loadAddress();
    this.loadFamily();
    this.loadEmergency();
  }

  /** Định dạng ngày hiển thị theo DD/MM/YYYY (xem CLAUDE.md) - dữ liệu từ API là chuỗi yyyy-MM-dd. */
  formatDisplayDate(dateStr: string | null | undefined): string {
    const d = this.toDate(dateStr);
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }

  // ==================== Load dữ liệu ====================

  private loadBasicInfo(): void {
    this.api.getMyInfo().subscribe({
      next: (data) => this.basicInfo.set(data),
    });
  }

  private loadAddress(): void {
    this.addressLoading.set(true);
    this.addressError.set(null);
    this.api.getMyAddresses().subscribe({
      next: (list) => {
        this.addressList.set(list ?? []);
        this.addressLoading.set(false);
      },
      error: () => {
        this.addressError.set(this.i18n.t('epi.msg.loadError.address', 'Lỗi tải dữ liệu địa chỉ'));
        this.addressList.set([]);
        this.addressLoading.set(false);
      },
    });
  }

  private loadFamily(): void {
    this.familyLoading.set(true);
    this.familyError.set(null);
    this.api.getMyFamilies().subscribe({
      next: (list) => {
        this.familyList.set(list ?? []);
        this.familyLoading.set(false);
      },
      error: () => {
        this.familyError.set(this.i18n.t('epi.msg.loadError.family', 'Lỗi tải dữ liệu gia đình'));
        this.familyList.set([]);
        this.familyLoading.set(false);
      },
    });
  }

  private loadEmergency(): void {
    this.emergencyLoading.set(true);
    this.emergencyError.set(null);
    this.api.getMyEmergencies().subscribe({
      next: (list) => {
        this.emergencyList.set(list ?? []);
        this.emergencyLoading.set(false);
      },
      error: () => {
        this.emergencyError.set(this.i18n.t('epi.msg.loadError.emergency', 'Lỗi tải dữ liệu khẩn cấp'));
        this.emergencyList.set([]);
        this.emergencyLoading.set(false);
      },
    });
  }

  private loadCodeOptions(): void {
    this.api.getCodeList('1709').subscribe((list) => this.maritalStatusOptions.set(list ?? []));
    this.api.getCodeList('210942').subscribe((list) => this.nationOptions.set(list ?? []));
    this.api.getCodeList('870').subscribe((list) => this.nationalityOptions.set(list ?? []));
    this.api.getCodeList('1324').subscribe((list) => this.sexOptions.set(list ?? []));
    this.api.getCodeList('13769').subscribe((list) => this.finalDegreeOptions.set(list ?? []));
    this.api.getCodeList('90000302').subscribe((list) => this.cvUpdateStatusOptions.set(list ?? []));
    this.api.getCodeList('14013865').subscribe((list) => this.residentialDistinctionOptions.set(list ?? []));
    this.api.getCodeList('14013840').subscribe((list) => this.addressTypeOptions.set(list ?? []));
    this.api.getCodeList('950').subscribe((list) => this.famTypeOptions.set(list ?? []));
    this.api.getCodeList('1693').subscribe((list) => this.emerTypeOptions.set(list ?? []));
  }

  // ==================== Modal: Cá nhân ====================

  openPersonalModal(): void {
    const d = this.basicInfo();
    if (!d) return;
    this.personalForm = {
      localName: d.localName || '',
      engName: d.englishName || '',
      armyOrNot: this.toBool(d.armyOrNot),
      obstacleOrNot: this.toBool(d.obstacleOrNot),
      idcardNo: d.idcardNo || '',
      idcardStartDate: this.toDate(d.idcardStartDate),
      issuingAuthority: d.issuingAuthority || '',
      cvUpdateStatus: d.cvUpdateStatus || null,
      dob: this.toDate(d.dob),
      age: '',
      regPlace: d.regPlace || '',
      sexCode: d.sexCode || null,
      finalDegreeCode: d.finalDegreeCode || null,
      nationalityCode: d.nationalityCode || null,
      nationCode: d.nationCode || null,
      religion: d.religion || '',
      maritalStatusCode: d.maritalStatusCode || null,
      weddingDate: this.toDate(d.weddingDate),
      politicalStatus: d.politicalStatus || '',
      existSingle: d.existSingle || null,
      homePhone: d.homePhone || '',
      companyPhone: d.companyPhone || '',
      residentialDistinction: d.residentialDistinction || null,
      singId: d.singId || '',
      houseTp: d.houseTp || '',
      email: d.email || '',
      emailSecond: d.emailSecond || '',
      cellphone: d.cellphone || '',
    };
    this.personalFiles = [];
    if (this.personalFileInputRef) this.personalFileInputRef.nativeElement.value = '';
    this.calcAge();
    this.personalModalVisible.set(true);
  }

  closePersonalModal(): void {
    this.personalModalVisible.set(false);
  }

  calcAge(): void {
    if (!this.personalForm.dob) {
      this.personalForm.age = '';
      return;
    }
    const dob = this.personalForm.dob;
    const now = new Date();
    let years = now.getFullYear() - dob.getFullYear();
    const beforeBirthday =
      now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate());
    if (beforeBirthday) years--;
    this.personalForm.age = String(Math.max(years, 0));
  }

  onPersonalFilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.personalFiles = input.files ? Array.from(input.files) : [];
  }

  savePersonal(): void {
    const f = this.personalForm;
    const payload: PersonalApplyPayload = {
      dob: this.formatYmd(f.dob),
      sexCode: f.sexCode ?? undefined,
      maritalStatusCode: f.maritalStatusCode ?? undefined,
      weddingDate: this.formatYmd(f.weddingDate),
      nationCode: f.nationCode ?? undefined,
      nationalityCode: f.nationalityCode ?? undefined,
      finalDegreeCode: f.finalDegreeCode ?? undefined,
      religion: f.religion,
      politicalOutlook: f.politicalStatus,
      armyOrNot: f.armyOrNot ? '1' : '0',
      obstacleOrNot: f.obstacleOrNot ? '1' : '0',
      idcardNo: f.idcardNo,
      idcardStartDate: this.formatYmd(f.idcardStartDate),
      issuingAuthority: f.issuingAuthority,
      cvUpdateStatus: f.cvUpdateStatus ?? undefined,
      regPlace: f.regPlace,
      houseTp: f.houseTp,
      homePhone: f.homePhone,
      companyPhone: f.companyPhone,
      cellphone: f.cellphone,
      email: f.email,
      emailSecond: f.emailSecond,
      residentialDistinction: f.residentialDistinction ?? undefined,
      existSingle: f.existSingle ?? undefined,
      singId: f.singId,
    };
    this.personalSaving.set(true);
    this.api.savePersonal(payload, this.personalFiles).subscribe({
      next: () => {
        this.personalSaving.set(false);
        this.personalModalVisible.set(false);
        this.message.success(this.i18n.t('epi.msg.applySuccess', 'Gửi yêu cầu thành công! Chờ người quản lý xét duyệt.'));
        this.loadBasicInfo();
      },
      error: () => {
        this.personalSaving.set(false);
        this.message.error(this.i18n.t('epi.msg.saveError.personal', 'Lỗi khi lưu thông tin cá nhân!'));
      },
    });
  }

  // ==================== Modal: Địa chỉ ====================

  openAddressModal(row: HrAddressMatters | null): void {
    this.addressIsNew.set(!row);
    this.addressForm = row
      ? {
          updateAddressNo: row.addressNo,
          addressType: row.addressType || null,
          effectiveStartDate: this.toDate(row.effectiveStartDate),
          addressContent: row.addressContent || '',
        }
      : { ...EMPTY_ADDRESS_FORM };
    this.addressModalVisible.set(true);
  }

  closeAddressModal(): void {
    this.addressModalVisible.set(false);
  }

  saveAddress(): void {
    const f = this.addressForm;
    if (!f.addressType) {
      this.message.error(this.i18n.t('epi.msg.validate.addressType', 'Vui lòng chọn Loại địa chỉ!'));
      return;
    }
    const payload: AddressApplyPayload = {
      updateAddressNo: f.updateAddressNo,
      addressType: f.addressType,
      effectiveStartDate: this.formatYmd(f.effectiveStartDate) || null,
      addressContent: f.addressContent || null,
    };
    this.addressSaving.set(true);
    this.api.saveAddress(payload).subscribe({
      next: () => {
        this.addressSaving.set(false);
        this.addressModalVisible.set(false);
        this.message.success(
          f.updateAddressNo
            ? this.i18n.t('epi.msg.saveSuccess', 'Cập nhật thành công!')
            : this.i18n.t('epi.msg.addSuccess', 'Thêm mới thành công!'),
        );
        this.loadAddress();
      },
      error: () => {
        this.addressSaving.set(false);
        this.message.error(this.i18n.t('epi.msg.saveError.address', 'Lỗi khi lưu địa chỉ!'));
      },
    });
  }

  // ==================== Modal: Gia đình ====================

  openFamilyModal(row: HrFamily | null): void {
    this.familyIsNew.set(!row);
    this.familyForm = row
      ? {
          familyNo: row.familyNo,
          famTypeCode: row.famTypeCode || null,
          famName: row.famName || '',
          gender: row.gender || null,
          famBorndate: this.toDate(row.famBorndate),
          famPhone: row.famPhone || '',
        }
      : { ...EMPTY_FAMILY_FORM };
    this.familyFiles = [];
    if (this.familyFileInputRef) this.familyFileInputRef.nativeElement.value = '';
    this.familyModalVisible.set(true);
  }

  closeFamilyModal(): void {
    this.familyModalVisible.set(false);
  }

  onFamilyFilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.familyFiles = input.files ? Array.from(input.files) : [];
  }

  saveFamily(): void {
    const f = this.familyForm;
    if (!f.famTypeCode || !f.famName) {
      this.message.error(this.i18n.t('epi.msg.validate.familyRequired', 'Vui lòng chọn Quan hệ và nhập Họ tên!'));
      return;
    }
    const payload: FamilyApplyPayload = {
      famTypeCode: f.famTypeCode,
      famName: f.famName,
      gender: f.gender ?? undefined,
      famBorndate: this.formatYmd(f.famBorndate),
      famPhone: f.famPhone,
      updateFamilyNo: f.familyNo ?? undefined,
    };
    this.familySaving.set(true);
    this.api.saveFamily(payload, this.familyFiles).subscribe({
      next: () => {
        this.familySaving.set(false);
        this.familyModalVisible.set(false);
        this.message.success(this.i18n.t('epi.msg.applySuccess', 'Gửi yêu cầu thành công! Chờ người quản lý xét duyệt.'));
        this.loadFamily();
      },
      error: () => {
        this.familySaving.set(false);
        this.message.error(this.i18n.t('epi.msg.saveError.family', 'Lỗi khi lưu thông tin gia đình!'));
      },
    });
  }

  // ==================== Modal: Liên hệ khẩn cấp ====================

  openEmergencyModal(row: HrEmergencyAddress | null): void {
    this.emergencyIsNew.set(!row);
    this.emergencyForm = row
      ? {
          emergencyNo: row.emergencyNo,
          emerName: row.emerName || '',
          emerTypeCode: row.emerTypeCode || null,
          emerPhone: row.emerPhone || '',
          emerEmail: row.emerEmail || '',
          emerAddress: row.emerAddress || '',
          isEmergencyAddress: this.toBool(row.isEmergencyAddress),
        }
      : { ...EMPTY_EMERGENCY_FORM };
    this.emergencyFiles = [];
    if (this.emergencyFileInputRef) this.emergencyFileInputRef.nativeElement.value = '';
    this.emergencyModalVisible.set(true);
  }

  closeEmergencyModal(): void {
    this.emergencyModalVisible.set(false);
  }

  onEmergencyFilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.emergencyFiles = input.files ? Array.from(input.files) : [];
  }

  saveEmergency(): void {
    const f = this.emergencyForm;
    if (!f.emerName) {
      this.message.error(this.i18n.t('epi.msg.validate.emergencyName', 'Vui lòng nhập Họ tên!'));
      return;
    }
    const payload: EmergencyApplyPayload = {
      emerName: f.emerName,
      emerTypeCode: f.emerTypeCode ?? undefined,
      emerPhone: f.emerPhone,
      emerEmail: f.emerEmail,
      emerAddress: f.emerAddress,
      isEmergencyAddress: f.isEmergencyAddress ? '1' : '0',
      updateEmergencyNo: f.emergencyNo ?? undefined,
    };
    this.emergencySaving.set(true);
    this.api.saveEmergency(payload, this.emergencyFiles).subscribe({
      next: () => {
        this.emergencySaving.set(false);
        this.emergencyModalVisible.set(false);
        this.message.success(this.i18n.t('epi.msg.applySuccess', 'Gửi yêu cầu thành công! Chờ người quản lý xét duyệt.'));
        this.loadEmergency();
      },
      error: () => {
        this.emergencySaving.set(false);
        this.message.error(this.i18n.t('epi.msg.saveError.emergency', 'Lỗi khi lưu liên hệ khẩn cấp!'));
      },
    });
  }

  // ==================== Helpers ====================

  private toBool(v: string | null | undefined): boolean {
    return v === '1' || v === 'Y';
  }

  private toDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
