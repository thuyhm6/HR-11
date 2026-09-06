/** Dòng danh sách nhân viên - tái sử dụng nguyên endpoint /ess/viewDept/api/manageEmpPositionInfo/list
 *  (giống bản Thymeleaf gốc), chỉ khai báo các field thực sự dùng ở trang này. */
export interface HrCardListRowDto {
  empId: string;
  localName: string;
  deptName: string;
  postFamilyName: string;
  empTypeName: string;
  empOfficeName: string;
  dateStarted: string;
}

export interface HrCardSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  postFamily: string;
  empTypeCode: string;
  empOffice: string;
}

/** Tương ứng các field dùng tới của HrEmployee.java (model gốc, response trả nguyên object nên chỉ
 *  khai báo subset field cần hiển thị trên thẻ). */
export interface HrCardEmployeeDto {
  empId: string;
  localName: string;
  deptNo: string;
  postGradeNo: string;
  mainBusiness: string;
  empOffice: string;
  /** LocalDateTime -> chuỗi ISO (vd "2017-07-03T00:00:00"), format lại bằng formatDdMmYyyy() khi hiển thị. */
  dateStarted: string | null;
}

/** Tương ứng các field dùng tới của HrPersonalInfo.java. */
export interface HrCardPersonalInfoDto {
  regPlace: string;
  politicalStatus: string;
  finalDegreeName: string;
  /** LocalDate -> chuỗi ISO (vd "1990-05-20"). */
  dob: string | null;
  sexName: string;
  homePhone: string;
  nationalityName: string;
  maritalStatusName: string;
  email: string;
  weddingDate: string | null;
  homeAddress: string;
}

/** Tương ứng các field dùng tới của HrEducation.java. */
export interface HrCardEducationDto {
  startDate: string;
  endDate: string;
  degreeName: string;
  institutionName: string;
  subject: string;
}

/** Tương ứng các field dùng tới của HrFamily.java. */
export interface HrCardFamilyDto {
  famTypeName: string;
  famName: string;
  famBorndate: string | null;
  famEducation: string;
  famPhone: string;
}

/** Tương ứng các field dùng tới của HrWorkExperience.java. */
export interface HrCardExperienceDto {
  startDate: string;
  endDate: string;
  cpnyName: string;
  deptName: string;
  remark: string;
}

/** Tương ứng các field dùng tới của HrQualification.java. */
export interface HrCardQualificationDto {
  qualName: string;
  qualGrade: string;
  qualInstitute: string;
  qualCardNo: string;
  validityDate: string | null;
}

/** Tương ứng response GET /hrm/empinfo/api/hrCard/detail?empId=... (Map<String,Object> ở backend). */
export interface HrCardDetailDto {
  employee: HrCardEmployeeDto;
  personalInfo: HrCardPersonalInfoDto;
  educations: HrCardEducationDto[];
  families: HrCardFamilyDto[];
  experiences: HrCardExperienceDto[];
  qualifications: HrCardQualificationDto[];
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
