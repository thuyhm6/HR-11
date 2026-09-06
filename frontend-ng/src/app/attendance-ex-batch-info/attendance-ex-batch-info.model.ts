/** Tương ứng với EssAttendanceExForBatchDto.java (danh sách chấm công bất thường chờ xin phép). */
export interface AttendanceExApiRow {
  arDateStr: string;
  dateStr: string;
  applyNo: string | null;
  personId: string;
  fromDateTime: string;
  toDateTime: string;
  workHour: string;
  itemNo: string;
  itemNoName: string;
  createDate: string;
  createdName: string;
  updateDate: string;
  updatedName: string;
  inDoorTime: string;
  outDoorTime: string;
  shiftStartTime: string;
  shiftEndTime: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  postGradeName: string;
  postFamily: string;
  postFamilyName: string;
  createdBy: string;
  updatedBy: string;
  lockYn: string;
  shiftNo: string;
  shiftName: string;
  remark: string;
}

/** Dòng hiển thị trên nz-table - bổ sung state chọn dòng + Date object cho 2 ô giờ vào/ra sửa được
 *  (mặc định lấy từ shiftStartTime/shiftEndTime, đúng hành vi exInitTable() bản gốc). */
export interface AttendanceExRow extends AttendanceExApiRow {
  selected: boolean;
  fromDate: Date | null;
  toDate: Date | null;
}

export interface AttendanceExSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  postFamily: string;
  shiftNo: string;
  itemNo: string;
}

/** Payload gửi lên POST /api/attendanceEx/apply - đúng field exApplySelected() bản gốc thu thập. */
export interface ApplyPayloadRow {
  applyNo: string;
  personId: string;
  empId: string;
  localName: string;
  itemNo: string;
  arDateStr: string;
  fromDateTime: string;
  toDateTime: string;
  workHour: string;
  remark: string;
}

export interface ApplyResult {
  success: boolean;
  count?: number;
  message?: string;
  error?: string;
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
