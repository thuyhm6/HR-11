/** Response GET /ar/attendanceMintenance/api/overtime/detail (ArOvertimeManagentServiceImpl.getDetail) -
 *  tương ứng dữ liệu của /ess/infoApply/viewApprovaledOtInfo bản gốc
 *  (otApplyInfo / viewAffirmList1 / getArCardRecordMealList). */
export interface OtApplyDetail {
  otInfo: Record<string, any> | null;
  employeeInfo: Record<string, any> | null;
  approvalList: OtApprovalItem[];
  mealList?: OtMealItem[];
}

/** 1 dòng trình tự duyệt (SyAffirmEmailDto). */
export interface OtApprovalItem {
  affirmLevel: string;
  /** 1 = Duyệt, 2 = Hợp đồng, 3 = Thông báo, 4 = Xin phép (người đề xuất); rỗng = dòng HR xác nhận (affirmLevel=100). */
  affirmType: string;
  affirmTypeName: string;
  affirmFlag: string;
  affirmFlagName: string;
  affirmName: string;
  affirmPersonId?: string;
  deptName: string;
  updateDate: string;
  affirmContent: string;
  title: string;
  applyPersonInfo: string;
}

/** 1 lượt quẹt thẻ suất ăn trong ngày tăng ca (ArMacRecordEatDto). */
export interface OtMealItem {
  seq: string;
  rDate: string;
  rTime: string;
  eatName: string;
  eatDate: string;
  amount: number | null;
}
