/** Điều kiện tìm kiếm (bản gốc seach_OBJECT / seach_START_DATE / seach_END_DATE / seach_DATA_SOURCES). */
export interface RecruitSearchParams {
  /** '0' = Quyết định nhận việc, '1' = Đã hoàn thành. */
  searchObject: string;
  /** dd/MM/yyyy */
  searchStartDate: string;
  searchEndDate: string;
  /** '1' = Nhập thủ công, '0' = Tuyển dụng, '' = tất cả. */
  searchDataSources: string;
}

/** Tương ứng với HrEmployeeRecruitDto.java (HR_EMPLOYEE_RECRUIT - ngày dạng DD/MM/YYYY). */
export interface RecruitEmployee {
  personId: string;
  // Thông tin cơ bản
  localName?: string | null;
  empId?: string | null;
  englishName?: string | null;
  isProbation?: string | null;
  joinType?: string | null;
  joinDetailType?: string | null;
  deptNo?: string | null;
  empTypeCode?: string | null;
  dateStarted?: string | null;
  endProbationDate?: string | null;
  timeStarted?: string | null;
  positionConfirmationDate?: string | null;
  mainBusiness?: string | null;
  costCenter?: string | null;
  postFamily?: string | null;
  postGradeNo?: string | null;
  positionNo?: string | null;
  detainLength?: string | null;
  shiftNo?: string | null;
  payStepNo?: string | null;
  personSupplierCompany?: string | null;
  // Thông tin bổ sung
  idcardNo?: string | null;
  idcardStartDate?: string | null;
  issuingAuthority?: string | null;
  dob?: string | null;
  sexcode?: string | null;
  maritalStatusCode?: string | null;
  nationalityCode?: string | null;
  nationCode?: string | null;
  homePhone?: string | null;
  companyPhone?: string | null;
  existSingle?: string | null;
  singId?: string | null;
  email?: string | null;
  cvUpdateStatus?: string | null;
  religion?: string | null;
  experience?: string | null;
  regPlace?: string | null;
  origin?: string | null;
  addressType?: string | null;
  effectiveStartDate?: string | null;
  nationality?: string | null;
  addressContent?: string | null;
  hujiaddressType?: string | null;
  hujiyouxiaoStartDate?: string | null;
  hujiguoji?: string | null;
  hujiaddressContent?: string | null;
  photoPath?: string | null;
  dataSources?: string | null;
  /** '1' = đã xác nhận nhận việc -> chỉ xem. */
  activity?: string | null;
  // Tên hiển thị
  deptName?: string | null;
  joinTypeName?: string | null;
  joinDetailName?: string | null;
  empTypeName?: string | null;
  sexName?: string | null;
  nationalityName?: string | null;
}

/** HR_EDUCATION_RECRUIT - ngày dạng MM/YYYY. */
export interface RecruitEducation {
  seq?: number | null;
  personId: string;
  degreeCode?: string | null;
  degreeName?: string | null;
  finalDegreeWhether?: string | null;
  institutionName?: string | null;
  subject?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  subjectSecond?: string | null;
  eduDegNum?: string | null;
  siteCountry?: string | null;
  remark?: string | null;
  updatedBy?: string | null;
  updateDate?: string | null;
}

/** HR_WORK_EXPERIENCE_RECRUIT - ngày dạng MM/YYYY. */
export interface RecruitWorkExp {
  seq?: number | null;
  personId: string;
  cpnyName?: string | null;
  deptName?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  payroll?: string | null;
  leftReason?: string | null;
  remark?: string | null;
  updatedBy?: string | null;
  updateDate?: string | null;
}

/** HR_FAMILY_RECRUIT - FAM_BORNDATE dạng DD/MM/YYYY. */
export interface RecruitFamily {
  seq?: number | null;
  personId: string;
  famName?: string | null;
  famTypeCode?: string | null;
  famTypeName?: string | null;
  gender?: string | null;
  genderName?: string | null;
  famBorndate?: string | null;
  emergencyContactYn?: string | null;
  famAddress?: string | null;
  famPhone?: string | null;
  famEmail?: string | null;
  famFamilyPhone?: string | null;
  workPhone?: string | null;
  remark?: string | null;
  updatedBy?: string | null;
  updateDate?: string | null;
}

export interface RecruitActionResult {
  success: boolean;
  /** Message key (messages*.properties) để frontend tự dịch thông báo. */
  messageKey?: string;
  message?: string;
  personId?: string;
  photoPath?: string;
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
