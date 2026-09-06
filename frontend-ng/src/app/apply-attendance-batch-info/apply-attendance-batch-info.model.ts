/** Tương ứng với response GET /ar/attendanceMintenance/api/leaveApply/list (EssLeaveApplyDto). */
export interface LeaveApplyApiRow {
  applyNo: number | string | null;
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  annualLeaveCount: string;
  shiftName: string;
  leaveTypeCode: string;
  leaveFromTime: string; // 'yyyy-MM-dd HH:mm'
  leaveToTime: string;
  applyLength: string;
  dayHours: string;
  leaveReason: string;
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
export interface LeaveApplyRow extends LeaveApplyApiRow {
  isNew: boolean;
  fromDate: Date | null;
  toDate: Date | null;
  /** Dùng chung cho 2 mục đích (đúng hành vi bản gốc): chọn dòng đã duyệt để Hủy đơn, HOẶC để Lưu
   *  lại (resubmit) khi bấm nút Lưu chung - xem saveAll()/cancelSelected(). */
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

export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
}

export interface LeaveApplySearchParams {
  empId: string;
  localName: string;
  fromDate: string;
  toDate: string;
  affirmFlag: string;
  confirmFlag: string;
  leaveTypeCode: string;
}

export interface SaveResult {
  success: boolean;
  message?: string;
  error?: string;
}

/** Map thô trả về từ selectEmpDefaultInfo (resultType="map" - giữ nguyên tên cột hoa như SQL). */
export interface EmpDefaultInfoMap {
  START_TIME?: string;
  END_TIME?: string;
  VAC_COUNT?: string;
  SHIFT_NAME?: string;
  DEPT_NAME?: string;
}

export interface LeaveApplyDetailResponse {
  leaveInfo: Record<string, any> | null;
  employeeInfo: Record<string, any> | null;
  approvalList: ApprovalInfo[];
}

export interface ApprovalInfo {
  affirmLevel: string;
  /** Loại dòng duyệt (Approval/Agreement/Announcement/Proposal) - cột "Trình tự duyệt" trong bảng,
   *  trả nguyên text tiếng Anh từ backend (DECODE cứng trong SQL, không qua GET_GLOBAL_NAME). */
  affirmTypeName: string;
  /** Trạng thái duyệt (Pending/Approved/Rejected...) - cột "Trạng thái duyệt". */
  affirmFlagName: string;
  affirmName: string;
  deptName: string;
  applyAffirmFlag: string;
  updateDate: string;
  affirmContent: string;
}
