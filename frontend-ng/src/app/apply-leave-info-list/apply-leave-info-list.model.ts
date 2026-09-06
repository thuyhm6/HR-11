/** Tương ứng với các field của EssPersonalInfoDto.java dùng cho card "Thông tin nhân viên"
 *  (fragments/essEmpInfoCard.html gốc) - giống hệt EssBasicInfoDto ở apply-attendance-info-list.model.ts. */
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

/** Tương ứng với các field của EssCardApplyListDto.java mà GET /api/myCardApply/list trả về. */
export interface EssCardApplyListDto {
  applyNo: string;
  personId: string;
  arDateStr: string;
  itemNo: string;
  itemName: string;
  indoorTime: string;
  outdoorTime: string;
  fromTime: string;
  toTime: string;
  shiftName: string;
  workTime: string;
  applyReason: string;
  affirmFlag: string;
  affirmFlagName: string;
  hrComment: string;
  workHour: string;
}

/** 1 dòng trong bảng - bọc thêm state chọn dòng (để hủy đơn) ngoài field trả về từ backend. */
export interface CardApplyDisplayRow extends EssCardApplyListDto {
  selected: boolean;
}

export interface CardApplySearchParams {
  affirmFlag: string;
  startDate: string;
  endDate: string;
}

export interface CancelResult {
  success: boolean;
  message?: string;
  error?: string;
  count?: number;
}

/** Tương ứng với response GET /ess/infoApplyAttendance/api/checkAttendanceEx/detail - leaveInfo và
 *  employeeInfo cùng trỏ về 1 object EssLeaveApplyDto (xem getCardApplyDetail() ở
 *  EssAttendanceExForBatchServiceImpl.java) - giống cấu trúc LeaveApplyDetailResponse ở
 *  apply-attendance-info-list.model.ts (khác API backend). */
export interface CardApplyDetailResponse {
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
