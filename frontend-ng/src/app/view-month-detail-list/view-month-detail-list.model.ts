/** Tương ứng với MonthDetailListDto.java (1 dòng chi tiết chấm công tháng của 1 nhân viên). */
export interface MonthDetailListDto {
  empId: string;
  localName: string;
  deptName: string;
  dob: string;
  dutyName: string;
  dateStarted: string;
  endProbationDate: string;
  hcDayOt: number;
  hcNightOt: number;
  hcNightOt210: number;
  restDayOt: number;
  restNightOt: number;
  holDayOt: number;
  holNightOt: number;
  adminShiftDays: number;
  nightShiftDays: number;
  standardWorkDays: number;
}

/** Tương ứng với response DataTablesResponse<T> (backend vẫn phân trang server-side, xem service). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

export interface MonthDetailListSearchParams {
  month: string;
  year: string;
  keyword: string;
  quickFilter: string;
  deptNos: string;
  empTypeCode: string;
  draw: number;
  start: number;
  length: number;
}

export interface MonthDetailListExportParams {
  month: string;
  year: string;
  keyword: string;
  quickFilter: string;
  deptNos: string;
  empTypeCode: string;
  reportType: string;
  reportYear: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments. */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
