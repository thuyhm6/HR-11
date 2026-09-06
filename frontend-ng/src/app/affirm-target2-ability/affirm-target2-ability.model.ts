/** Tương ứng với EvsResumeDto.java (chỉ dùng seq/resumeName cho dropdown "Tên đánh giá"). */
export interface EvsResumeOption {
  seq: string;
  resumeName: string;
}

/** Tương ứng với EvsAffirmTarget2Dto.java (1 dòng trong danh sách nhân viên - dùng chung endpoint
 *  /affirmTarget2/objectList với AffirmTarget2Component). */
export interface EvsAffirmTarget2Row {
  seq: string;
  empid: string;
  localName: string;
  deptname: string;
  postGradeName: string;
  objectTypeName: string;
  dateStarted: string;
  activity: string;
  activityName: string;
  evsPoint0: string | null;
  evsGrade0: string | null;
  evsPoint1: string | null;
  evsGrade1: string | null;
  evsPoint2: string | null;
  evsGrade2: string | null;
}

/** Tương ứng với DataTablesResponse<T>.java (GET .../affirmTarget2/objectList - phân trang server-side). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

/** Tương ứng với EvsGradeDto.java (chỉ lấy các field cần cho bảng phân bổ + tra cứu tên cấp theo mã). */
export interface EvsGradeInfo {
  evsGrade: string;
  evsGradeName: string;
  startScore: string;
  endScore: string;
}

/** Map thô trả về từ mapper.selectStandardRate (key nguyên alias cột SQL, vd EX_PCT/VG_PCT/...). */
export type StandardRateRaw = Record<string, unknown>;

/** Map thô trả về từ mapper.selectGradeSummary (key EVS_GRADE_NAME/CNT). */
export type GradeSummaryRow = Record<string, unknown>;

/** Tương ứng với EvsParamDto.java (chỉ dùng làm tùy chọn điểm đánh giá lần 2 - paramType=ITEM). */
export interface EvsScoreOption {
  evsScore: string;
  codeName: string;
}

/** Tương ứng với EvsPersonalTargetDto.java (thông tin cá nhân + điểm/cấp bản thân, lần 1, lần 2 trong
 *  modal chi tiết). Ý kiến lần 1 hiển thị readonly ưu tiên affirmComment1, nếu không có thì lấy
 *  affirmContent1 - đúng fallback bản gốc dùng ở vat2aDmRenderInfo. */
export interface EvsAffirmTarget2AbilityDetailInfo {
  seq: string;
  evsYear: string;
  localName: string;
  postGradeName: string;
  deptname: string;
  dateStarted: string;
  activity: string;
  evsStartDate: string;
  evsEndDate: string;
  localName1: string;
  localName2: string;
  affirmContent0: string;
  evsPoint0: string | null;
  evsGrade0: string | null;
  affirmComment1: string;
  affirmContent1: string;
  evsPoint1: string | null;
  evsGrade1: string | null;
  affirmContent2: string;
  evsPoint2: string | null;
  evsGrade2: string | null;
}

/** Tương ứng với EvsItemAbilityDto.java (1 dòng hạng mục năng lực trong modal chi tiết). */
export interface EvsItemAbility {
  itemSeq: string;
  groupName: string;
  itemName: string;
  remark: string;
  itemScore: string;
  evsScore0: string | null;
  evsScore1: string | null;
  evsScore2: string | null;
}

/** Payload gửi lên POST .../affirmTarget2Ability/saveDetail|confirmDetail. */
export interface SaveDetailPayload {
  seq: string;
  resumeSeq: string;
  affirmContent: string;
  items: { itemSeq: string; evsScore2: string | null }[];
}

export interface ApiResult {
  success: boolean;
  message?: string;
}
