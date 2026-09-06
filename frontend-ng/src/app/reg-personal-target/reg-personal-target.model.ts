/** Tương ứng với EvsResumeDto.java (chỉ dùng seq/resumeName/evsYear cho dropdown "Tên đánh giá"). */
export interface EvsResumeOption {
  seq: string;
  resumeName: string;
  evsYear: string;
}

/** Tương ứng với EvsPersonalTargetDto.java (thông tin cá nhân + hạng mục đánh giá của đối tượng). */
export interface EvsPersonalTargetInfo {
  seq: string;
  evsYear: string;
  resumeSeq: string;
  localName: string;
  postGradeName: string;
  deptname: string;
  dateStarted: string;
  activity: string;
  evsStartDate: string;
  evsEndDate: string;
  localName1: string;
  localName2: string;
  affirmComment1: string;
  affirmComment2: string;
}

/** Tương ứng với EvsItemSstDto.java (1 dòng mục tiêu đánh giá cá nhân - bảng EVS_ITEM_SST). */
export interface EvsPersonalTargetItem {
  seq: string;
  resumeSeq: string;
  evsObjectSeq: string;
  itemName: string;
  itemContent: string;
  itemScore: string;
}

/** Payload gửi lên POST .../personalTarget/saveItem - flag: '0'=Lưu tạm thời, '1'=Thực hiện. */
export interface SaveItemPayload {
  seq?: string;
  evsObjectSeq: string;
  resumeSeq?: string;
  itemName?: string;
  itemContent?: string;
  itemScore?: string;
  flag: string;
}

export interface ApiResult {
  success: boolean;
  message?: string;
}

/** Dòng làm việc trên bảng Objective Confirm - gộp chung dòng đã lưu (isNew=false, seq có giá trị) và
 *  dòng thêm mới chưa lưu (isNew=true, seq=null), giống cách newRows/serverRows gộp lại ở
 *  ApplyAttendanceBatchInfoComponent. editing=true khi đang hiển thị ở chế độ nhập inline. */
export interface ItemRowVm {
  seq: string | null;
  itemName: string;
  itemContent: string;
  itemScore: number;
  isNew: boolean;
  editing: boolean;
}
