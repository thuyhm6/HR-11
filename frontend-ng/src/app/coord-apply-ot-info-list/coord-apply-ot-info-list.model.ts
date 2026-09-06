/** Tương ứng với EssCoordApplyOtInfoDto.java (1 dòng đăng ký tăng ca của nhân viên cấp dưới). */
export interface CoordApplyOtInfoRow {
  empId: string;
  localName: string;
  itemNoCode: string;
  deptName: string;
  shiftName: string;
  postGradeNo: string;
  postGradeName: string;
  itemName: string;
  arDateStr: string;
  fromDate: string;
  toTime: string;
  quantity: string;
  unit: string;
  remark: string;
  statusName: string;
  indoorTime: string;
  outdoorTime: string;
}

export interface CoordApplyOtInfoSearchParams {
  keyword: string;
  deptNos: string;
  startDate: string;
  endDate: string;
  shiftNo: string;
  itemNoSearch: string;
  postFamily: string;
  draw: number;
  start: number;
  length: number;
}

/** Tương ứng với DataTablesResponse<T> phía backend. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

/** Tương ứng với response GET /ess/infoApply/api/coordOt/items (danh sách loại tăng ca). */
export interface OtItemOption {
  itemNoCode: string;
  itemName: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/shift (chỉ khai field cần dùng). */
export interface ShiftOption {
  shiftNo: string;
  nameVi: string;
  shiftName?: string;
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
