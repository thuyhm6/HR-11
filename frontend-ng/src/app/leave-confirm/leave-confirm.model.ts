/** Tương ứng với EssLeaveConfirmDto.java (1 dòng đơn nghỉ phép chờ HR xác nhận - đã duyệt xong quy
 *  trình phê duyệt, xem điều kiện SQL cố định AFFIRM_FLAG='14014308' ở EssLeaveConfirmMapper.xml). */
export interface LeaveConfirmRow {
  applyNo: string;
  applyTime: string;
  personId: string;
  dayHours: string;
  leaveFromTime: string;
  leaveToTime: string;
  overDay: string;
  overHour: string;
  leaveReason: string;
  leaveTypeCode: string;
  leaveTypeCodeName: string;
  hrComment: string;
  applyLength: string;
  confirmFlag: string;
  activity: string;
  createdBy: string;
  createdName: string;
  localName: string;
  deptNo: string;
  empId: string;
  deptName: string;
  postGradeNo: string;
  postGradeName: string;
  postFamily: string;
  postFamilyName: string;
  confirmBy: string;
}

/** 1 dòng trong bảng - bọc thêm state chọn dòng ở client (giống ApprovalEmailRow ở view-approval-email). */
export interface LeaveConfirmUiRow extends LeaveConfirmRow {
  selected: boolean;
}

export interface LeaveConfirmSearchParams {
  searchEmpId: string;
  fromDate: string;
  toDate: string;
  searchLeaveTypeCode: string;
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

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=21 (danh sách loại nghỉ phép). */
export interface LeaveTypeOption {
  codeNo: string;
  codeName: string;
}

/** 1 dòng trong bảng trình tự duyệt (approvalList) trả về từ API chi tiết. */
export interface LeaveApprovalItem {
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

/** Response của API GET leaveApply/detail. */
export interface LeaveDetailResponse {
  leaveInfo?: Record<string, any>;
  employeeInfo?: Record<string, any>;
  approvalList: LeaveApprovalItem[];
}
