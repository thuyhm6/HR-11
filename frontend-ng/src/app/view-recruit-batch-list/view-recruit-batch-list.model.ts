/** Tương ứng với 1 dòng đăng ký (HR_RECRUIT_REGISTER_INFO) trong HrRecruitBatchDto.java. */
export interface RecruitBatchRegister {
  registerSeq: string;
  registerDate?: string | null;
  registerRemark?: string | null;
  registerActivity?: string | null;
}

/** Tương ứng với 1 dòng dữ liệu (HR_EMPLOYEE_RECRUIT_BATCH) trong HrRecruitBatchDto.java. */
export interface RecruitBatchItem {
  seq: string;
  registerSeq?: string | null;
  empId?: string | null;
  vietnamName?: string | null;
  englishName?: string | null;
  dob?: string | null;
  dateStarted?: string | null;
  endProbationDate?: string | null;
  joinType?: string | null;
  joinTypeName?: string | null;
  joinDetailType?: string | null;
  joinDetailTypeName?: string | null;
  deptno?: string | null;
  deptName?: string | null;
  postGradeNo?: string | null;
  postGradeName?: string | null;
  mainBusiness?: string | null;
  mainBusinessName?: string | null;
  postFamily?: string | null;
  postFamilyName?: string | null;
  empTypeCode?: string | null;
  empTypeName?: string | null;
  positionNo?: string | null;
  positionNoName?: string | null;
  costCenter?: string | null;
  finalDegreeCode?: string | null;
  finalDegreeName?: string | null;
  endDate?: string | null;
  institutionName?: string | null;
  subjectName?: string | null;
  idcardNo?: string | null;
  idcardSDate?: string | null;
  issuingAuthority?: string | null;
  sexcode?: string | null;
  sexName?: string | null;
  nationalityCode?: string | null;
  nationalityName?: string | null;
  nationCode?: string | null;
  nationName?: string | null;
  maritalStatusCode?: string | null;
  maritalStatusName?: string | null;
  emailSecond?: string | null;
  homePhone?: string | null;
  telephone?: string | null;
  addressContent?: string | null;
  regPlace?: string | null;
  activity?: string | null;
}

export interface RecruitBatchListParams {
  draw: number;
  start: number;
  length: number;
  registerSeq: string;
}

/** Tương ứng với DataTablesResponse.java (có thêm allProcessed cho trang này). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  allProcessed?: boolean;
}

export interface RecruitBatchActionResult {
  success: boolean;
  message?: string;
  registerSeq?: string;
  registerDate?: string;
}

export interface RecruitBatchImportResult {
  success: boolean;
  message?: string;
  successCount?: number;
  errorCount?: number;
  errors?: string;
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
