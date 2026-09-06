/** Tương ứng với ArCardRecordDayDto.java (1 dòng dữ liệu quẹt thẻ - ca làm theo ngày). */
export interface ArCardRecordDayDto {
  localName: string;
  empId: string;
  deptName: string;
  deptTeam: string;
  postGradeNoName: string;
  empTypeCode: string;
  empTypeName: string;
  remax: string;
  shiftNo: string;
  shiftName: string;
  shiftTime: string;
  changeShiftPerson: string;
  eatTimes: string;
  leaveContent: string;
  arDateStr: string;
  ddateStr: string;
  inDay: string;
  inTime: string;
  outDay: string;
  outTime: string;
}

/** Tương ứng với response DataTablesResponse<T> (backend vẫn phân trang server-side, xem service). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

export interface ArCardRecordDaySearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  shiftNoFilter: string;
  missingCard: string;
  draw: number;
  start: number;
  length: number;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments. */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}

/** Tương ứng với ArShift010Dto.java (dùng cho combo lọc Ca làm việc). */
export interface ShiftOption {
  shiftNo: string;
  nameVi: string;
  shiftShortname: string;
}
