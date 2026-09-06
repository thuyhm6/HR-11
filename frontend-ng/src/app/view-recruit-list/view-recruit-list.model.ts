/** Tương ứng với HrEmployeeRecruitDto.java (chỉ các field thực sự dùng ở UI). */
export interface RecruitEmployee {
  personId: string;
  deptNo?: string | null;
  empId?: string | null;
  localName?: string | null;
  englishName?: string | null;
  koreanName?: string | null;
  sexcode?: string | null;
  dob?: string | null;
  nationalityCode?: string | null;
  nationCode?: string | null;
  maritalStatusCode?: string | null;
  postFamily?: string | null;
  postGradeNo?: string | null;
  positionNo?: string | null;
  empTypeCode?: string | null;
  joinType?: string | null;
  joinDetailType?: string | null;
  dateStarted?: string | null;
  isProbation?: string | null;
  endProbationDate?: string | null;
  contractStartDate?: string | null;
  costCenter?: string | null;
  homePhone?: string | null;
  companyPhone?: string | null;
  officePhone?: string | null;
  email?: string | null;
  idcardNo?: string | null;
  documentType?: string | null;
  idcardStartDate?: string | null;
  issuingAuthority?: string | null;
  addressContent?: string | null;
  hujiaddressContent?: string | null;
  nationality?: string | null;
  accountNo?: string | null;
  oldPay?: string | null;
  experience?: string | null;
  recruitType?: string | null;
  recommend?: string | null;
  remark?: string | null;
  deptName?: string | null;
}

export interface RecruitEmployeeListParams {
  draw: number;
  start: number;
  length: number;
  activity: string;
  searchName: string;
  searchEmpId: string;
}

/** Tương ứng với DataTablesResponse.java. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
}

/** Tương ứng với HrEducationRecruitDto.java. */
export interface RecruitEducation {
  seq: number | null;
  personId: string;
  degreeCode?: string | null;
  degreeName?: string | null;
  degreesCode?: string | null;
  degreesName?: string | null;
  institutionName?: string | null;
  subject?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  finalDegreeWhether?: string | null;
  experienceStudyAbroad?: string | null;
  remark?: string | null;
}

/** Tương ứng với HrWorkExperienceRecruitDto.java. */
export interface RecruitWorkExp {
  seq: number | null;
  personId: string;
  cpnyName?: string | null;
  deptName?: string | null;
  position?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  payroll?: string | null;
  leftReason?: string | null;
  remark?: string | null;
}

/** Tương ứng với HrFamilyRecruitDto.java. */
export interface RecruitFamily {
  seq: number | null;
  personId: string;
  famName?: string | null;
  famTypeCode?: string | null;
  famTypeName?: string | null;
  gender?: string | null;
  genderName?: string | null;
  famBorndate?: string | null;
  famPhone?: string | null;
  emergencyContactYn?: string | null;
  occupation?: string | null;
  remark?: string | null;
}

/** Response chung success/message (+personId khi tạo mới nhân viên) của các API save/delete/execute. */
export interface RecruitActionResult {
  success: boolean;
  message?: string;
  personId?: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description?: string;
  codeId?: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
