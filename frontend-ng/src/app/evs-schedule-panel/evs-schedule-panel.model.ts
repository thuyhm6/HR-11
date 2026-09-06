/** Tương ứng với EvsScheduleDto.java (com.ait.evs.manage.dto) - 1 dòng quy trình đánh giá
 *  (bảng EVS_SCHEDULE), dùng chung cho 3 loại (scheduleType): CPNY/DEPT/EMP. */
export interface EvsScheduleDto {
  seq: string;
  resumeSeq: string | null;
  scheduleType: string | null;
  no: string | null;
  name: string | null;
  deptNo: string | null;
  deptName: string | null;
  postGradeNo: string | null;
  postGradeName: string | null;
  evsObject: string | null;
  evsStep: string | null;
  evsStepName: string | null;
  activity: string | null;
  deptType: string | null;
  orderNo: string | null;
  personId: string | null;
  startDate: string | null;
  endDate: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
}

/** Payload gửi lên POST /evs/manage/api/schedule/save (List) - seq null nghĩa là thêm mới (BE tự sinh
 *  seq mới từ EVS_SCHEDULE_SEQ, xem EvsScheduleServiceImpl). Ngày dùng chuỗi YYYY-MM-DD (đúng định dạng
 *  TO_DATE trong EvsScheduleMapper.xml, khác định dạng DD/MM/YYYY của EvsResumeMapper). */
export interface EvsScheduleSavePayload {
  seq: string | null;
  resumeSeq: string;
  scheduleType: string;
  no: string;
  name: string;
  deptNo: string;
  deptName: string;
  postGradeNo: string;
  postGradeName: string;
  evsObject: string;
  evsStep: string;
  activity: string;
  deptType: string;
  orderNo: string;
  personId: string;
  startDate: string;
  endDate: string;
  evsType: string;
}

/** Tương ứng với response GET /evs/manage/api/resume/evsResumeList - dùng cho combo "Tên đánh giá". */
export interface EvsResumeOption {
  seq: string;
  resumeName: string | null;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... - dùng cho combo "Giai đoạn thực hiện". */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
