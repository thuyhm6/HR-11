/** Tương ứng với EvsResumeDto.java (chỉ dùng seq/resumeName cho dropdown "Tên đánh giá"). */
export interface EvsResumeOption {
  seq: string;
  resumeName: string;
}

/** Tương ứng với EvsPersonalTargetDto.java (thông tin cá nhân + Phần 2 Thành tích/Hạn chế 3 cấp). */
export interface EvsPersonalTargetInfo {
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
  affirmC1L0: string;
  affirmC2L0: string;
  affirmC1L1: string;
  affirmC2L1: string;
  affirmC1L2: string;
  affirmC2L2: string;
}

/** Tương ứng với EvsItemSstDto.java - itemScore là tỷ lệ(%) cố định, evsScore là điểm tự đánh giá
 *  bản thân (chỉnh sửa được khi activity cho phép). */
export interface EvsPersonalTargetItem {
  seq: string;
  itemName: string;
  itemContent: string;
  itemScore: string;
  evsScore: string | null;
}

/** 1 dòng điểm gửi lên trong payload lưu - tương ứng phần tử của EvsEvsBySelfHtsvDto.items. */
export interface SaveItemScore {
  seq: string;
  evsScore: string;
}

/** Payload gửi lên POST .../evsBySelfHTSV/save - flag: '0'=Lưu tạm thời, '1'=Thực hiện. */
export interface SavePayload {
  evsObjectSeq: string;
  flag: string;
  affirmContent1: string;
  affirmContent2: string;
  items: SaveItemScore[];
}

export interface ApiResult {
  success: boolean;
  message?: string;
}
