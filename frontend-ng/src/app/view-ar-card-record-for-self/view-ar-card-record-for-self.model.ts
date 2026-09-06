/** Tương ứng với ArCardRecordForSelfDto.java (1 dòng lịch sử ra vào - SST). */
export interface ArCardRecordForSelfDto {
  cardNo: string;
  personId: string;
  doorType: string;
  insertBy: string;
  dataSourceName: string;
  remark: string;
  arDateStr: string;
  swipeDate: string;
  swipeTime: string;
  employeeName: string;
  deviceName: string;
  swipeDatetime: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}

/** Tương ứng với response DataTablesResponse<T> (backend vẫn phân trang server-side, xem service). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

export interface ArCardRecordForSelfSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
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
