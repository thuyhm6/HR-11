/** Tương ứng với EvsResultDto.java (com.ait.evs.manage.dto) - 1 dòng kết quả đánh giá (EVS_OBJECT),
 *  chỉ lấy các field trang này thực sự hiển thị (Bản thân/lần 1/lần 2 - trang không hiển thị lần 3/4). */
export interface EvsResultDto {
  seq: string;
  resumeSeq: string | null;
  personId: string | null;
  empid: string | null;
  localName: string | null;
  deptno: string | null;
  deptname: string | null;
  postGradeName: string | null;
  dateStarted: string | null;
  activity: string | null;
  activityName: string | null;
  /** Cấp đánh giá cuối dạng rút gọn đã DECODE sẵn ở BE (EX/VG/GD/NI/UN) - chỉ dùng để hiển thị badge
   *  ban đầu, KHÔNG dùng làm value cho combo sửa (xem finalGradeOr). */
  finalGrade: string | null;
  /** Cấp đánh giá cuối dạng chữ cái gốc lưu trong cột FINAL_GRADE (A/B/C/D/E) - khớp đúng value của
   *  option trong combo mã hệ thống 14015161, dùng làm current value khi mở sửa và giá trị gửi lên khi
   *  lưu (xem EvsResultMapper.xml updateFinalResult: FINAL_GRADE = #{finalGrade} nhận thẳng chữ cái). */
  finalGradeOr: string | null;
  finalAffirmContent: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  affirmFlagName0: string | null;
  affirmFlagName1: string | null;
  affirmFlagName2: string | null;
  localName1: string | null;
  localName2: string | null;
  postGradeName1: string | null;
  postGradeName2: string | null;
  evsPoint0: string | null;
  evsPoint1: string | null;
  evsPoint2: string | null;
  evsGrade0: string | null;
  evsGrade1: string | null;
  evsGrade2: string | null;
}

/** Payload gửi lên POST /evs/manage/api/evsResult/save (List). */
export interface EvsResultSavePayload {
  seq: string;
  finalGrade: string;
  finalAffirmContent: string;
}

export interface ApiResult {
  success: boolean;
  message?: string;
}

/** Tương ứng với response GET /evs/manage/api/evsResult/stdRate (EX_PCT/VG_PCT/GD_PCT/NI_PCT/UN_PCT). */
export interface StandardRateResponse {
  EX_PCT?: number | string;
  VG_PCT?: number | string;
  GD_PCT?: number | string;
  NI_PCT?: number | string;
  UN_PCT?: number | string;
}

/** Tương ứng với response GET /evs/manage/api/resume/evsResumeList - dùng cho combo "Tên đánh giá". */
export interface EvsResumeOption {
  seq: string;
  resumeName: string | null;
}
