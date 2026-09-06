/** Tương ứng với response GET /ess/infoApply/api/approvaledEmail/list (SyAffirmEmailDto). */
export interface SyAffirmEmailDto {
  applyNo: string;
  applyType: string;
  title: string;
  affirmUrl: string;
  affirmFlag: string;
  applyTypeCode: string;
  applyPersonInfo: string;
  applyAffirmFlag: string;
  updateDate: string;
}

/** Loại đơn suy ra từ affirmUrl - đúng vaedOpenDetailModal() bản gốc (so khớp chuỗi con trong URL). */
export type ApplyDetailKind = 'ot' | 'leave' | 'attendanceEx';

/** 1 dòng trong bảng trình tự duyệt (approvalList) trả về từ các API chi tiết. */
export interface ApprovalItem {
  affirmLevel: string;
  affirmTypeName: string;
  affirmFlagName: string;
  affirmName: string;
  deptName: string;
  updateDate: string;
  affirmContent: string;
}

/** Response chung của 3 API chi tiết đơn (overtime/detail, leaveApply/detail, checkAttendanceEx/detail) -
 *  otInfo dùng cho đơn tăng ca, leaveInfo dùng chung cho đơn nghỉ phép và điều chỉnh chấm công. */
export interface ApplyDetailResponse {
  otInfo?: Record<string, any>;
  leaveInfo?: Record<string, any>;
  employeeInfo?: Record<string, any>;
  approvalList: ApprovalItem[];
}
