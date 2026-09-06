/** Tương ứng với các field của EssPersonalInfoDto.java dùng cho card "Thông tin nhân viên"
 *  (fragments/essEmpInfoCard.html gốc) - giống hệt EssBasicInfoDto ở qualification-info.model.ts. */
export interface EssBasicInfoDto {
  empId: string;
  localName: string;
  deptName: string;
  headDepartment: string;
  postFamilyName: string;
  postGradeName: string;
  positionNoName: string;
  dateStarted: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Tương ứng với các field của EssLeaveApplyDto.java mà GET /api/myLeaveApply/list trả về (chỉ các
 *  field trang danh sách này dùng). */
export interface MyLeaveApplyRow {
  applyNo: number | string;
  leaveTypeCode: string;
  leaveTypeName: string;
  applyDate: string;
  leaveFromDate: string;
  leaveFromTimeOnly: string;
  leaveToDate: string;
  leaveToTimeOnly: string;
  applyLength: string;
  dayHours: string;
  leaveReason: string;
  affirmFlag: string;
  affirmFlagName: string;
  hrComment: string;
  confirmFlagName: string;
  createdBy: string;
  createdIp: string;
}

/** 1 dòng trong bảng - bọc thêm state chọn dòng (để hủy đơn) ngoài field trả về từ backend. */
export interface MyLeaveApplyDisplayRow extends MyLeaveApplyRow {
  selected: boolean;
}

export interface MyLeaveApplySearchParams {
  leaveTypeCode: string;
  affirmFlag: string;
  fromDate: string;
  toDate: string;
}

export interface CancelResult {
  success: boolean;
  message?: string;
  error?: string;
  count?: number;
}

/** Tương ứng với response GET /ar/attendanceMintenance/api/leaveApply/detail (giống hệt
 *  LeaveApplyDetailResponse ở apply-attendance-batch-info.model.ts - cùng 1 API). */
export interface LeaveApplyDetailResponse {
  leaveInfo: Record<string, any> | null;
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
