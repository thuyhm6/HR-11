/** Tương ứng với PaPayScheduleDto.java (bảng PA_PAY_SCHEDULE). Các mốc ngày là string - BE trả về
 *  'DD-MM-YYYY' ở API list (selectList) nhưng 'YYYY-MM-DD' ở API chi tiết (selectOne), xem
 *  PaPayScheduleMapper.xml. */
export interface PaPayScheduleDto {
  payScheduleNo: string;
  payDate: string | null;
  salaryDistinNo: string | null;
  salaryDistinName: string | null;
  hrStartDate: string | null;
  hrEndDate: string | null;
  arStartDate: string | null;
  arEndDate: string | null;
  paOpenDate: string | null;
  paTransDate: string | null;
  empOpinion: string | null;
  activity: string | null;
  updatedBy: string | null;
  updateDate: string | null;
}

/** Tham số tìm kiếm GET /pa/workManagement/api/paySchedule - fromDate/toDate dạng 'yyyy-MM-dd'. */
export interface PaPayScheduleSearchParams {
  fromDate: string | null;
  toDate: string | null;
  salaryDistinNo: string | null;
}

/** Payload gửi lên POST /pa/workManagement/api/paySchedule/save - payScheduleNo null/rỗng nghĩa là
 *  thêm mới (BE tự sinh payScheduleNo mới qua sequence, đồng thời tạo kèm 1 bản ghi PA_WORK_FLOW, xem
 *  PaPayScheduleServiceImpl). Các mốc ngày gửi lên dạng 'yyyy-MM-dd'. */
export interface PaPayScheduleSavePayload {
  payScheduleNo: string | null;
  payDate: string | null;
  salaryDistinNo: string | null;
  hrStartDate: string | null;
  hrEndDate: string | null;
  arStartDate: string | null;
  arEndDate: string | null;
  paOpenDate: string | null;
  paTransDate: string | null;
  empOpinion: string | null;
}

/** Item trả về từ /sys/api/getCode/list (endpoint chung toàn hệ thống). */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
