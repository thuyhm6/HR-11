/** Tương ứng với ArAttendanceSearchDto.java (1 dòng chấm công). */
export interface AttendanceSearchRow {
  arDateStr: string;
  empId: string;
  localName: string;
  deptName: string;
  postGradeName: string;
  shiftName: string;
  itemName: string;
  fromTime: string;
  toTime: string;
  quantity: string;
  unit: string;
}

export interface AttendanceSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  postFamily: string;
  shiftNo: string;
  itemNo: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/shift (chỉ khai field cần dùng). */
export interface ShiftOption {
  shiftNo: string;
  nameVi: string;
  shiftName?: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arItemParam/options?type=attendance. */
export interface ItemOption {
  itemNo: string;
  itemName: string;
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

/** Payload gửi lên POST /ar/attendanceMintenance/api/syncCleverse/test (tool test DEV, xem asSendSyncCleverse ở bản gốc). */
export interface SyncCleversePayload {
  enterCd: string;
  sabun: string;
  gntCd: string;
  sYmd: string;
  eYmd: string;
  orgCd: string;
  instanceId: string;
  cancelYn: string;
  ifId: string;
  status: string;
  reason: string;
}

export interface SyncCleverseResult {
  success: boolean;
  result?: string;
  message?: string;
}
