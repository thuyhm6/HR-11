/** Tương ứng với EmpWorkingTimefoDto.java (1 chuỗi ngày OUT liên tiếp của 1 nhân viên). */
export interface EmpWorkingTimefoDto {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  postGradeName: string;
  /** DD/MM/YYYY */
  streakFrom: string;
  /** DD/MM/YYYY */
  streakTo: string;
  dayCount: number;
  detailDayCount: number;
}

/** Tương ứng với EmpWorkingTimefoDayDto.java (chi tiết quẹt thẻ 1 ngày trong chuỗi). */
export interface EmpWorkingTimefoDayDto {
  arDate: string;
  shiftName: string;
  inTime: string;
  outTime: string;
  swipeCount: number;
  hasDetail: 'Y' | 'N';
}

export interface EmpWorkingTimefoSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  minDays: number;
  draw: number;
  start: number;
  length: number;
}

export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments. */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
