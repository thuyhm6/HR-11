/** Tương ứng với EvsResumeDto.java (chỉ dùng seq/resumeName cho dropdown "Tên đánh giá"). */
export interface EvsResumeOption {
  seq: string;
  resumeName: string;
}

/** Tương ứng với EvsPersonalTargetDto.java (thông tin cá nhân + Section 2 - nhận xét bản thân AFFIRM_LEVEL=0). */
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
  affirmContent0: string;
}

/** Tương ứng với EvsParamDto.java (chỉ dùng làm tùy chọn điểm tự đánh giá - paramType=ITEM). */
export interface EvsScoreOption {
  evsScore: string;
  codeName: string;
}

/** Tương ứng với EvsItemAbilityDto.java (1 dòng hạng mục năng lực - EVS_ITEM + EVS_ITEM_PARAM). */
export interface EvsItemAbility {
  itemSeq: string;
  groupName: string;
  itemName: string;
  remark: string;
  itemScore: string;
  evsScore0: string | null;
}

/** 1 dòng điểm gửi lên trong payload lưu - tương ứng phần tử của EvsEvsBySelfSSTAbilityDto.items. */
export interface SaveItemScore {
  itemSeq: string;
  evsScore0: string | null;
}

/** Payload gửi lên POST .../evsBySelfSSTAbility/save - flag: '0'=Lưu tạm thời, '1'=Thực hiện. */
export interface SavePayload {
  evsObjectSeq: string;
  resumeSeq: string;
  flag: string;
  affirmContent: string;
  items: SaveItemScore[];
}

export interface ApiResult {
  success: boolean;
  message?: string;
}
