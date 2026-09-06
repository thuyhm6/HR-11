/** Tương ứng với response GET /ess/infoApply/api/approvalEmail/list (SyAffirmEmailDto). */
export interface SyAffirmEmailDto {
  applyNo: string;
  applyType: string;
  applyFlag: string;
  affirmLevel: string;
  affirmPersonId: string;
  affirmFlag: string;
  title: string;
  affirmUrl: string;
  applyTypeCode: string;
  applyPersonInfo: string;
  applyAffirmFlag: string;
  updateDate: string;
}

/** 1 dòng trong bảng - bọc thêm state chọn dòng ở client (giống OtBatchRow ở ot-apply-batch-info). */
export interface ApprovalEmailRow extends SyAffirmEmailDto {
  selected: boolean;
}

/** Loại đơn suy ra từ affirmUrl - đúng vaeOpenDetailModal() bản gốc (so khớp chuỗi con trong URL). */
export type ApplyDetailKind = 'ot' | 'leave' | 'attendanceEx';

/** Bối cảnh phê duyệt của dòng vừa mở modal chi tiết - dùng để hiện ô nhập ý kiến + nút Duyệt/Từ chối
 *  ngay trong modal khi người dùng hiện tại đúng là người đang chờ duyệt ở mức hiện tại (affirmFlag='0'). */
export interface AffirmContext {
  applyNo: string;
  applyType: string;
  applyFlag: string;
  affirmLevel: string;
  affirmPersonId: string;
  affirmFlag: string;
}

/** 1 dòng trong bảng trình tự duyệt (approvalList) trả về từ các API chi tiết. */
export interface ApprovalItem {
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

/** Response chung của 3 API chi tiết đơn (overtime/detail, leaveApply/detail, checkAttendanceEx/detail) -
 *  otInfo dùng cho đơn tăng ca, leaveInfo dùng chung cho đơn nghỉ phép và điều chỉnh chấm công. */
export interface ApplyDetailResponse {
  otInfo?: Record<string, any>;
  leaveInfo?: Record<string, any>;
  employeeInfo?: Record<string, any>;
  approvalList: ApprovalItem[];
}

export interface ExecuteItem {
  applyNo: string;
  applyType: string;
  applyFlag: string;
  affirmLevel: string;
  flag: number;
  affirmContent: string;
}

export interface ExecuteResult {
  success: boolean;
  message?: string;
}
