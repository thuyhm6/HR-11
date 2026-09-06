/** Tương ứng với ArShift010Dto.java (bảng AR_SHIFT010 - "Ca làm việc" cha, + tên đa ngôn ngữ join từ
 *  SY_GLOBAL_NAME). cpnyId không hiển thị/không cho chọn trên UI vì luôn bị interceptor
 *  (LanguageParameterInterceptor) tự gán theo company của session đăng nhập. */
export interface ArShift010Dto {
  shiftNo: string;
  shiftId: string | null;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  shiftShortname: string | null;
  datatype: number | null;
  deptDistinguishNo: string | null;
  deductTime: number | null;
  otTimeStart: string | null;
  otAllowance: number | null;
  shiftLength: number | null;
  orderno: number | null;
  activity: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/shift/save - shiftNo null/rỗng nghĩa là thêm mới
 *  (BE tự sinh shiftNo mới qua SyGlobalNameMapper.getNextNoSeq, xem ArShiftServiceImpl). Bản gốc bắt
 *  buộc nhập đủ cả 4 tên (nameVi/En/Zh/Ko), khác các trang chị em chỉ bắt buộc nameVi. */
export interface ArShift010SavePayload {
  shiftNo: string | null;
  shiftId: string | null;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  shiftShortname: string | null;
  datatype: number | null;
  deptDistinguishNo: string | null;
  deductTime: number | null;
  otTimeStart: string | null;
  otAllowance: number | null;
  shiftLength: number | null;
  orderno: number | null;
  activity: number;
}

/** Tương ứng với ArShift020Dto.java (bảng AR_SHIFT020 - chi tiết tham số của 1 ca làm việc).
 *  fromTimeStr/toTimeStr là string 'HH:mm' (BE trả về qua TO_CHAR, xem ArShift020Mapper.xml). */
export interface ArShift020Dto {
  pkNo: number;
  shiftNo: string;
  itemNo: string;
  itemName: string | null;
  beginDayOffset: number | null;
  fromTimeStr: string | null;
  endDayOffset: number | null;
  toTimeStr: string | null;
  orderno: number | null;
  activity: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/shiftDetail/save - pkNo null nghĩa là thêm mới (BE
 *  tự sinh qua ArShift020Mapper.getNextPkNoSeq). */
export interface ArShift020SavePayload {
  pkNo: number | null;
  shiftNo: string;
  itemNo: string;
  beginDayOffset: number | null;
  fromTimeStr: string | null;
  endDayOffset: number | null;
  toTimeStr: string | null;
  orderno: number | null;
  activity: number;
}
