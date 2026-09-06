/** Tương ứng với EvsResumeDto.java (chỉ dùng seq/resumeName cho dropdown "Tên đánh giá"). */
export interface EvsResumeOption {
  seq: string;
  resumeName: string;
}

/** Tương ứng với EvsAffirmTarget2Dto.java (1 dòng trong danh sách nhân viên cần đánh giá lần 2). */
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

/** Tương ứng với EvsGradeDto.java (chỉ lấy các field cần cho bảng phân bổ + tính cấp ĐG từ điểm). */
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

/** Tương ứng với EvsPersonalTargetDto.java (thông tin cá nhân + điểm/cấp bản thân, lần 1, lần 2 trong
 *  modal chi tiết). Riêng ý kiến lần 1 hiển thị readonly lấy từ affirmComment1 (không phải
 *  affirmContent1) - đúng field bản gốc dùng ở vat2dmRenderPersonalInfo. */
export interface EvsAffirmTarget2DetailInfo {
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
  evsPoint1: string | null;
  evsGrade1: string | null;
  affirmContent2: string;
  evsPoint2: string | null;
  evsGrade2: string | null;
}

/** Tương ứng với EvsItemSstDto.java (1 dòng mục tiêu trong modal chi tiết). */
export interface EvsAffirmTarget2Item {
  seq: string;
  itemName: string;
  itemContent: string;
  itemScore: string;
  evsScore: string | null;
  evsScore1: string | null;
  evsScore2: string | null;
}

/** 1 dòng trong payload lưu hàng loạt (POST .../affirmTarget2/save|execute) - tương ứng phần tử của
 *  EvsAffirmTarget2Dto.items. KHÔNG gửi affirmContent (bản gốc vat2SaveDraft/vat2Execute không set
 *  field này khi push item, khác vat1 - giữ đúng hành vi). */
export interface SaveBatchItem {
  seq: string;
  evsPoint: string;
  evsGrade: string;
}

export interface SaveBatchPayload {
  resumeSeq: string;
  items: SaveBatchItem[];
}

/** Payload gửi lên POST .../affirmTarget2/saveDetail|confirmDetail. */
export interface SaveDetailPayload {
  seq: string;
  evsPoint: string;
  evsGrade: string;
  affirmContent: string;
  itemScores: { seq: string; evsScore2: string }[];
}

export interface ApiResult {
  success: boolean;
  message?: string;
}
