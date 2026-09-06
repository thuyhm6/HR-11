/** Tương ứng với EssPersonalInfoDto.java (thông tin cơ bản + cá nhân của nhân viên đang đăng nhập). */
export interface EssPersonalInfoDto {
  empId: string;
  personId: string;
  localName: string;
  deptName: string;
  dutyName: string;
  positionNoName: string;
  postFamilyName: string;
  postGradeName: string;
  headDepartment: string;
  dateStarted: string;
  englishName: string;
  dob: string;
  sexCode: string;
  sexName: string;
  maritalStatusCode: string;
  maritalStatusName: string;
  weddingDate: string;
  nationCode: string;
  nationName: string;
  nationalityCode: string;
  nationalityName: string;
  houseTp: string;
  homePhone: string;
  companyPhone: string;
  cellphone: string;
  residentialDistinction: string;
  existSingle: string;
  email: string;
  emailSecond: string;
  singId: string;
  idcardNo: string;
  idcardStartDate: string;
  issuingAuthority: string;
  regPlace: string;
  finalDegreeCode: string;
  finalDegreeName: string;
  religion: string;
  politicalStatus: string;
  cvUpdateStatus: string;
  armyOrNot: string;
  obstacleOrNot: string;
}

/** Tương ứng với HrAddressMatters.java (bảng HR_ADDRESS_MATTERS, các field trang này dùng). */
export interface HrAddressMatters {
  addressNo: number;
  personId: string;
  addressType: string;
  addressTypeName: string;
  effectiveStartDate: string;
  addressContent: string;
}

/** Tương ứng với HrFamily.java (bảng HR_FAMILY, các field trang này dùng). */
export interface HrFamily {
  familyNo: number;
  personId: string;
  famTypeCode: string;
  famTypeName: string;
  famName: string;
  famBorndate: string;
  famPhone: string;
  gender: string;
  genderName: string;
}

/** Tương ứng với HrEmergencyAddress.java (bảng HR_EMERGENCY_ADDRESS, các field trang này dùng). */
export interface HrEmergencyAddress {
  emergencyNo: number;
  personId: string;
  emerName: string;
  emerPhone: string;
  emerEmail: string;
  emerAddress: string;
  emerTypeCode: string;
  emerTypeName: string;
  isEmergencyAddress: string;
}

/** Payload gửi lên POST savePersonal (form fields, tương ứng HrPersonalInfoApplyDto.java - chỉ các field trang này chỉnh sửa). */
export interface PersonalApplyPayload {
  dob?: string;
  sexCode?: string;
  maritalStatusCode?: string;
  weddingDate?: string;
  nationCode?: string;
  nationalityCode?: string;
  finalDegreeCode?: string;
  religion?: string;
  politicalOutlook?: string;
  armyOrNot?: string;
  obstacleOrNot?: string;
  idcardNo?: string;
  idcardStartDate?: string;
  issuingAuthority?: string;
  cvUpdateStatus?: string;
  regPlace?: string;
  houseTp?: string;
  homePhone?: string;
  companyPhone?: string;
  cellphone?: string;
  email?: string;
  emailSecond?: string;
  residentialDistinction?: string;
  existSingle?: string;
  singId?: string;
}

/** Payload gửi lên POST saveAddress (JSON, tương ứng HrAddressMattersApplyDto.java - endpoint này không hỗ trợ file đính kèm). */
export interface AddressApplyPayload {
  updateAddressNo: number | null;
  addressType: string | null;
  effectiveStartDate: string | null;
  addressContent: string | null;
}

/** Payload gửi lên POST saveFamily (form fields, tương ứng HrFamilyApplyDto.java). */
export interface FamilyApplyPayload {
  famTypeCode: string;
  famName: string;
  gender?: string;
  famBorndate?: string;
  famPhone?: string;
  updateFamilyNo?: number;
}

/** Payload gửi lên POST saveEmergency (form fields, tương ứng HrEmergencyAddressApplyDto.java). */
export interface EmergencyApplyPayload {
  emerName: string;
  emerTypeCode?: string;
  emerPhone?: string;
  emerEmail?: string;
  emerAddress?: string;
  isEmergencyAddress: string;
  updateEmergencyNo?: number;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
