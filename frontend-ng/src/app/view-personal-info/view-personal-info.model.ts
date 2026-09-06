/** Tương ứng với EmployeeSearchResponse.java - dùng cho modal chọn nhân viên. */
export interface EmployeeSearchDto {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  position: string;
  email: string;
  phone: string;
}

/** Tương ứng với HrPersonalInfo.java (bảng HR_PERSONAL_INFO) - chỉ khai báo các field trang này hiển thị. */
export interface HrPersonalInfoDto {
  personId: string;
  dob: string | null;
  sexName: string;
  maritalStatusName: string;
  weddingDate: string | null;
  nationName: string;
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
  finalDegreeName: string;
  religion: string;
  politicalStatus: string;
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
