/** Tương ứng với ArCardRecordDto.java (1 dòng lịch sử ra vào). */
export interface ArCardRecordDto {
  recordNo: number;
  cardNo: string;
  personId: string;
  doorType: string;
  insertBy: string;
  dataSourceName: string;
  remark: string;
  arDateStr: string;
  swipeDate: string;
  swipeTime: string;
  activity: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  postGradeNo: string;
  postGradeName: string;
  shiftNo: string;
  shiftName: string;
  swipeDatetime: string;
}

/** Tương ứng với response DataTablesResponse<T> (backend vẫn phân trang server-side, xem service). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

export interface ArCardRecordSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  shiftNo: string;
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

/** Tương ứng với response GET /hrm/empinfo/api/employee/search. */
export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  position: string;
}

export interface SaveResult {
  success: boolean;
  message?: string;
}

export interface ImportDeviceResult extends SaveResult {
  total?: number;
  imported?: number;
  skipped?: number;
  notFound?: number;
}

export interface UploadExcelResult extends SaveResult {
  errors?: string[];
}

/** Form dữ liệu modal Thêm/Sửa bản ghi quẹt thẻ. */
export interface ArCardRecordForm {
  recordNo: number | null;
  personId: string;
  empId: string;
  empKeyword: string;
  empOptions: EmployeeOption[];
  empSearching: boolean;
  arDateStr: Date | null;
  swipeDateTime: string;
  doorType: string | null;
  remark: string;
}
