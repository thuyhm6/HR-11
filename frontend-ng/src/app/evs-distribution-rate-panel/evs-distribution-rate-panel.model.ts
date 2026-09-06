/** Tương ứng với EvsScoreDto.java (com.ait.evs.manage.dto) - 1 dòng tỷ lệ phân bổ (bảng EVS_SCORE).
 *  N/O/S không dùng ở trang này (trang chỉ có 5 cột A-E, giống bản Thymeleaf gốc) - SUM ở BE tính từ
 *  A+B+C+D+E+N+O+S nhưng N/O/S luôn null/0 với dữ liệu tạo từ trang này. */
export interface EvsScoreDto {
  seq: string;
  resumeSeq: string | null;
  scoreType: string | null;
  no: string | null;
  name: string | null;
  deptNo: string | null;
  deptName: string | null;
  postGradeNo: string | null;
  postGradeName: string | null;
  a: string | null;
  b: string | null;
  c: string | null;
  d: string | null;
  e: string | null;
  sum: string | null;
  activity: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
}

/** Payload gửi lên POST /evs/manage/api/evsScore/save - seq null nghĩa là thêm mới (BE tự sinh seq mới
 *  từ EVS_SCORE_SEQ, xem EvsScoreServiceImpl). SUM không gửi lên vì BE tự tính lại từ A-E, bỏ qua giá
 *  trị client gửi (xem EvsScoreMapper.xml). */
export interface EvsScoreSavePayload {
  seq: string | null;
  resumeSeq: string;
  scoreType: string;
  no: string;
  name: string;
  deptNo: string;
  deptName: string;
  postGradeNo: string;
  postGradeName: string;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  activity: string;
}

/** Tương ứng với response GET /evs/manage/api/resume/evsResumeList - dùng cho combo "Tên đánh giá". */
export interface EvsResumeOption {
  seq: string;
  resumeName: string | null;
}
