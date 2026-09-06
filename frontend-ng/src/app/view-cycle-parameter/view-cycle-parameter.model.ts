/** Tương ứng với ArStatisticDateParam.java (bảng AR_STATISTIC_DATE_PARAM) - startDate/endDate là
 *  string dạng 'yyyy-MM-dd' (BE trả về qua TO_CHAR, xem ArStatisticDateParamMapper.xml). */
export interface ArStatisticDateParamDto {
  paramNo: string;
  statNo: string;
  cpnyId: string;
  startDate: string | null;
  endDate: string | null;
  activity: number | null;
  orderno: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/cycleParameter/save - paramNo null nghĩa là thêm mới. */
export interface CycleParameterSavePayload {
  paramNo: string | null;
  statNo: string;
  cpnyId: string;
  startDate: string | null;
  endDate: string | null;
  activity: number;
  orderno: number | null;
}

export interface CycleParameterSearchParams {
  cpnyId: string;
  statNo: string;
}
