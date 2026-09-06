/** Tương ứng với EvsResumeDto.java (chỉ dùng seq/resumeName cho dropdown "Tên đánh giá"). */
export interface EvsResumeOption {
  seq: string;
  resumeName: string;
}

/** Tương ứng với EvsConfirmTarget1Dto.java (1 dòng trong danh sách nhân viên cần xác nhận lần 2). */
export interface EvsConfirmTarget1Row {
  seq: string;
  empid: string;
  localName: string;
  deptname: string;
  postGradeName: string;
  objectTypeName: string;
  activity: string;
  activityName: string;
}

/** Tương ứng với DataTablesResponse<T>.java (GET .../confirmTarget2/objectList - phân trang server-side). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

/** Tương ứng với EvsPersonalTargetDto.java (thông tin cá nhân của đối tượng đang xác nhận). */
export interface EvsPersonalTargetInfo {
  seq: string;
  evsYear: string;
  localName: string;
  postGradeName: string;
  deptname: string;
  dateStarted: string;
  evsStartDate: string;
  evsEndDate: string;
  localName1: string;
  localName2: string;
  affirmComment1: string;
  affirmComment2: string;
}

/** Tương ứng với EvsItemSstDto.java (1 dòng mục tiêu đánh giá - chỉ đọc trong màn xác nhận). */
export interface EvsPersonalTargetItem {
  seq: string;
  itemName: string;
  itemContent: string;
  itemScore: string;
}

/** Payload gửi lên POST .../confirmTarget2/confirm - flag: '1'=Xác nhận, '0'=Từ chối. affirmLevel
 *  luôn cố định '2' ở backend (EvsManageController.confirmTarget2 tự set), không cần gửi lên. */
export interface ConfirmPayload {
  evsObjectSeq: string;
  affirmComment: string;
  flag: string;
}

export interface ApiResult {
  success: boolean;
  message?: string;
}
