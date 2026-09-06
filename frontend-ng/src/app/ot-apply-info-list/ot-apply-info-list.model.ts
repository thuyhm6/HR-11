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

/** Tương ứng với các field của EssOtApplyListDto.java mà GET /api/myOtApply/list trả về (chỉ các
 *  field trang danh sách này dùng). */
export interface OtApplyRow {
  applyNo: number | string;
  otTypeCode: string;
  otTypeName: string;
  applyOtDate: string;
  otFromTime: string;
  otToTime: string;
  otApplyHour: string;
  deductYn: string;
  applyOtRemark: string;
  affirmFlag: string;
  affirmFlagName: string;
  confirmFlagName: string;
}

/** 1 dòng trong bảng - bọc thêm state chọn dòng (để hủy đơn) ngoài field trả về từ backend. */
export interface OtApplyDisplayRow extends OtApplyRow {
  selected: boolean;
}

export interface OtApplySearchParams {
  otTypeCode: string;
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

/** Tương ứng với response GET /ar/attendanceMintenance/api/overtime/detail. */
export interface OtApplyDetailResponse {
  otInfo: Record<string, any> | null;
  employeeInfo: Record<string, any> | null;
  approvalList: ApprovalInfo[];
}

/** Giống hệt ApprovalInfo ở apply-attendance-info-list.model.ts (cùng luồng phê duyệt chung). */
export interface ApprovalInfo {
  affirmLevel: string;
  affirmTypeName: string;
  affirmFlagName: string;
  affirmName: string;
  deptName: string;
  updateDate: string;
  affirmContent: string;
}
