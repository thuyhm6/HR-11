/** Thông tin nhân viên (kết quả tìm kiếm + header) - GET /hrm/empinfo/api/startpoint/employee/search|info. */
export interface StartPointEmployee {
  personId: string;
  empId?: string | null;
  localName?: string | null;
  deptno?: string | null;
  deptName?: string | null;
  postGradeName?: string | null;
  empOfficeName?: string | null;
}

/** Tương ứng với HrExpInsideDto.java (1 quyết định nhân sự - HR_EXPERIENCE_INSIDE). */
export interface StartPointDecision {
  seq?: number | null;
  personId?: string | null;
  transCode?: string | null;
  transCodeName?: string | null;
  transResource?: string | null;
  transResourceName?: string | null;
  startDate?: string | null;
  deptno?: string | null;
  deptName?: string | null;
  empTypeCode?: string | null;
  empTypeName?: string | null;
  empOffice?: string | null;
  empOfficeName?: string | null;
  postGradeNo?: string | null;
  postGradeName?: string | null;
  postFamily?: string | null;
  postFamilyName?: string | null;
  remark?: string | null;
  position?: string | null;
  positionName?: string | null;
  positionNo?: string | null;
  positionNoName?: string | null;
  mainBusiness?: string | null;
  mainBusinessName?: string | null;
  costCenter?: string | null;
  costCenterName?: string | null;
  payStepNo?: string | null;
  dateLeft?: string | null;
  activity?: string | null;
  activityName?: string | null;
  updateDate?: string | null;
  updatedBy?: string | null;
}

export interface StartPointActionResult {
  success: boolean;
  seq?: number;
  /** Message key (messages*.properties) để frontend tự dịch thông báo lỗi. */
  messageKey?: string;
  message?: string;
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
