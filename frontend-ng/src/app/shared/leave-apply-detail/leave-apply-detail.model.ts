/** Response GET /ar/attendanceMintenance/api/leaveApply/detail (EssLeaveApplyServiceImpl.getLeaveApplyDetail) -
 *  tương ứng dữ liệu của /ess/infoApply/viewApprovaledLeaveInfo bản gốc
 *  (leaveApplyInfo / viewAffirmList + viewAffirmList2 / empVacInfo / fileList). */
export interface LeaveApplyDetail {
  leaveInfo: Record<string, any> | null;
  employeeInfo: Record<string, any> | null;
  /** Trình tự duyệt (SY_AFFIRM_EMAIL) + dòng HR xác nhận ở cuối (affirmLevel = 100). */
  approvalList: LeaveApprovalItem[];
  /** Thông tin phép năm (selectMyVacationInfo - key hoa như SQL) - chỉ có khi loại nghỉ là phép năm ('26'). */
  vacInfo?: LeaveVacInfo | null;
  fileList?: LeaveApplyFile[];
}

/** 1 dòng trình tự duyệt (SyAffirmEmailDto). */
export interface LeaveApprovalItem {
  affirmLevel: string;
  /** 1 = Duyệt, 2 = Hợp đồng, 3 = Thông báo, 4 = Xin phép (người đề xuất); rỗng = dòng HR xác nhận (affirmLevel=100). */
  affirmType: string;
  affirmTypeName?: string;
  affirmFlag: string;
  affirmFlagName?: string;
  affirmName: string;
  affirmPersonId?: string;
  deptName: string;
  updateDate: string;
  affirmContent: string;
  title?: string;
  applyPersonInfo?: string;
}

export interface LeaveVacInfo {
  TOT_VAC_CNT?: number | string | null;
  USE_VAC?: number | string | null;
  REMAIN_VAC?: number | string | null;
}

/** File đính kèm đơn (EssFileDto - ESS_FILE.APPLY_TYPE = 'LEAVE_APPLY'). */
export interface LeaveApplyFile {
  fileNo: string;
  fileName: string;
  fileUrl?: string;
}
