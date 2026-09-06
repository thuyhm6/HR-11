/** Tương ứng với ArStatisticDateDto.java (bảng AR_STATISTIC_DATE + tên đa ngôn ngữ join từ
 *  SY_GLOBAL_NAME). validDateFrom/validDateTo là string dạng 'yyyy-MM-dd' (BE trả về qua TO_CHAR, xem
 *  ArStatisticDateMapper.xml). */
export interface ArStatisticDateDto {
  statNo: string;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  beginMonthOffset: number | null;
  endMonthOffset: number | null;
  validDateFrom: string | null;
  validDateTo: string | null;
  startDay: number | null;
  endDay: number | null;
  activity: number | null;
  orderno: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/cycle/save - statNo null/rỗng nghĩa là thêm mới
 *  (BE tự sinh statNo mới qua SyGlobalNameMapper.getNextNoSeq, xem ArStatisticDateServiceImpl). */
export interface CycleSavePayload {
  statNo: string | null;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  beginMonthOffset: number | null;
  endMonthOffset: number | null;
  validDateFrom: string | null;
  validDateTo: string | null;
  startDay: number | null;
  endDay: number | null;
  activity: number;
  orderno: number | null;
}
