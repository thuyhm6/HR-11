/** Tương ứng với response GET /ar/attendanceMintenance/api/overtime/list (ArOvertimeManagentDto). */
export interface OtBatchApiRow {
  applyNo: string | null;
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  otTypeNo: string;
  otTypeCode: string;
  otTypeName: string;
  applyOtDate: string; // 'yyyy-MM-dd'
  otFromTime: string; // 'yyyy-MM-dd HH:mm'
  otToTime: string;
  otApplyHour: string;
  applyOtRemark: string;
  deductYn: string;
  indoorTime: string;
  outdoorTime: string;
  otTotalMonth: string;
  otTotalYear: string;
  affirmFlag: string;
  affirmStr: string;
  createdBy: string;
  createDate: string;
  updatedBy: string;
  updateDate: string;
}

/**
 * 1 dòng trong bảng - bọc thêm state riêng cho UI (chỉnh sửa inline, tìm nhân viên, chọn dòng...)
 * ngoài các field trả về từ backend. Dòng mới (isNew=true) chưa có applyNo, được thêm ở client qua
 * addEmptyRow() và chỉ tồn tại tới khi lưu thành công hoặc bị loại bỏ.
 */
export interface OtBatchRow extends OtBatchApiRow {
  isNew: boolean;
  applyOtDateObj: Date | null;
  otFromTimeObj: Date | null;
  otToTimeObj: Date | null;
  /** Chọn dòng đã lưu (trạng thái Gửi/Đang duyệt/Đã duyệt) để Hủy đơn HOẶC để Lưu lại chung khi bấm
   *  nút Lưu - xem saveAll()/cancelSelected(), đúng hành vi checkbox 2 mục đích ở bản gốc. */
  selected: boolean;
  empKeyword: string;
  empOptions: EmployeeOption[];
  empSearching: boolean;
  resubmitting: boolean;
}

export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  position: string;
}

export interface OtBatchSearchParams {
  empId: string;
  localName: string;
  fromDate: string;
  toDate: string;
  affirmFlag: string;
  confirmFlag: string;
}

export interface SaveResult {
  success: boolean;
  message?: string;
  error?: string;
}

export interface CancelBatchResult extends SaveResult {
  count?: number;
}

export interface OtDetailResponse {
  otInfo: Record<string, any> | null;
  employeeInfo: Record<string, any> | null;
  approvalList: ApprovalInfo[];
}

export interface ApprovalInfo {
  affirmLevel: string;
  affirmTypeName: string;
  affirmFlagName: string;
  affirmName: string;
  deptName: string;
  updateDate: string;
  affirmContent: string;
}
