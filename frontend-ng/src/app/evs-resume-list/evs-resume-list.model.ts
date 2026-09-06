/** Tương ứng với EvsResumeDto.java (com.ait.evs.manage.dto) - 1 dòng đợt đánh giá (bảng EVS_RESUME_INFO). */
export interface EvsResumeDto {
  seq: string;
  evsType: string | null;
  resumeName: string | null;
  remark: string | null;
  evsCycle: string | null;
  evsCycleName: string | null;
  evsYear: string | null;
  evsMonth: string | null;
  evsMonthName: string | null;
  standardDate: string | null;
  evsStartDate: string | null;
  evsEndDate: string | null;
  activity: string | null;
  activityName: string | null;
  evsLevel: string | null;
  evsLevelName: string | null;
  copyObject: string | null;
  copyObjectName: string | null;
  targetLevel: string | null;
  orderNo: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
}

/** Payload gửi lên POST /evs/manage/api/resume/save - seq rỗng nghĩa là thêm mới (BE tự sinh seq mới
 *  từ EVS_RESUME_INFO_SEQ, xem EvsResumeServiceImpl). Các field ngày dùng chuỗi DD/MM/YYYY (theo CLAUDE.md). */
export interface EvsResumeSavePayload {
  seq: string;
  resumeName: string;
  remark: string;
  evsCycle: string;
  evsYear: string;
  evsMonth: string;
  standardDate: string;
  evsStartDate: string;
  evsEndDate: string;
  evsLevel: string;
  copyObject: string;
  evsType: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... - dùng cho các combo mã hệ thống
 *  (Chu kỳ, Tháng đánh giá, Số lần đánh giá). */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
