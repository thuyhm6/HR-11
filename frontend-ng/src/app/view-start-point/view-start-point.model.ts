/** Tương ứng với response GET /hrm/empinfo/api/startpoint/employee/search. */
export interface StartPointEmployee {
  personId: string;
  empId?: string | null;
  localName?: string | null;
  deptName?: string | null;
}

/** Tương ứng với HrExpInsideDto.java (chỉ các field dùng ở UI). */
export interface StartPointDecision {
  seq: number;
  personId?: string | null;
  transCode?: string | null;
  transCodeName?: string | null;
  startDate?: string | null;
  deptno?: string | null;
  deptName?: string | null;
  empTypeCode?: string | null;
  employeeBelong?: string | null;
  empOffice?: string | null;
  endProbationDate?: string | null;
  postGradeNo?: string | null;
  postFamily?: string | null;
  jobType?: string | null;
  dutyNo?: string | null;
  workHourType?: string | null;
  wageType?: string | null;
  remark?: string | null;
  positionNo?: string | null;
  mainBusiness?: string | null;
  transResource?: string | null;
  costCenter?: string | null;
  payStepNo?: string | null;
  position?: string | null;
}

export interface StartPointListParams {
  draw: number;
  start: number;
  length: number;
  personId: string;
}

/** Tương ứng với DataTablesResponse.java. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
}

export interface StartPointActionResult {
  success: boolean;
  message?: string;
  seq?: number;
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
