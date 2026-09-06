/** Tương ứng với EssAttendanceExConfirmDto.java (1 dòng đơn điều chỉnh chấm công chờ HR xác nhận). */
export interface AttendanceExConfirmRow {
  seq: string;
  applyNo: string;
  personId: string;
  applyReason: string;
  affirmFlag: string;
  applyTime: string;
  affirmFlagName: string;
  shiftName: string;
  itemNo: string;
  itemName: string;
  arDateStr: string;
  inTime: string;
  outTime: string;
  fromTime: string;
  toTime: string;
  confirmFlag: string;
  hrComment: string;
  localName: string;
  empId: string;
  deptNo: string;
  deptName: string;
  postGradeNo: string;
  postGradeName: string;
  postFamily: string;
  postFamilyName: string;
  activity: string;
  confirmBy: string;
  indoorTime: string;
  outdoorTime: string;
}

/** 1 dòng trong bảng - bọc thêm state chọn dòng ở client (giống ApprovalEmailRow ở view-approval-email). */
export interface AttendanceExConfirmUiRow extends AttendanceExConfirmRow {
  selected: boolean;
}

export interface AttendanceExConfirmSearchParams {
  searchEmpId: string;
  fromDate: string;
  toDate: string;
  confirmFlag: string;
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

export interface ConfirmResult {
  success: boolean;
  error?: string;
}

/** 1 dòng trong bảng trình tự duyệt (approvalList) trả về từ API chi tiết. */
export interface AttendanceExApprovalItem {
  affirmLevel: string;
  affirmPersonId: string;
  affirmFlag: string;
  affirmTypeName: string;
  affirmFlagName: string;
  affirmName: string;
  deptName: string;
  updateDate: string;
  affirmContent: string;
}

/** Response của API GET checkAttendanceEx/detail - dùng chung field leaveInfo với modal chi tiết đơn
 *  nghỉ phép (xem ApplyDetailResponse ở view-approval-email.model.ts). */
export interface AttendanceExDetailResponse {
  leaveInfo?: Record<string, any>;
  employeeInfo?: Record<string, any>;
  approvalList: AttendanceExApprovalItem[];
}
