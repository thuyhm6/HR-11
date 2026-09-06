/** Tương ứng với ArMacRecordEatDto.java (1 dòng dữ liệu suất ăn theo lượt quẹt thẻ). */
export interface ArMacRecordEatDto {
  seq: string;
  empId: string;
  eatDate: string;
  eatName: string;
  localName: string;
  rDate: string;
  rTime: string;
  amount: number;
  attendanceDate: string;
  outdoorTime: string;
  deptName: string;
  remark: string;
  postGradeName: string;
  insertBy: string;
}

/** Tương ứng với response DataTablesResponse<T> (backend vẫn phân trang server-side, xem service). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

export interface ArMacRecordEatSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  eatDate: string;
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

export interface ImportDeviceResult {
  success: boolean;
  message?: string;
  total?: number;
  imported?: number;
  skipped?: number;
  notFound?: number;
}
