/** Tương ứng với ArEmpCalenderDto.java (1 ngày trong lịch làm việc của 1 nhân viên - AR_CALENDER +
 *  override cá nhân từ AR_SCHEDULE_HTSV qua GET_AR_SHIFTNO/GET_AR_DATETYPE_DETAIL). Giống hệt model
 *  dùng ở EssViewEmpCalendarComponent (cùng 1 DTO backend, xem view-emp-calendar.service.ts). */
export interface ArEmpCalenderDto {
  arDateStr: string;
  ddateStr: string;
  ddateFormatted: string;
  iyear: number;
  imonth: number;
  iday: number;
  iweek: number;
  workdayflag: number;
  statutoryFlag: number;
  cpnyId: string;
  overtypeid: string;
  typeidDefault: string;
  remark: string;
  shiftNo: string;
  typeid: string;
  shiftName: string;
  typeidName: string;
  overtypeidName: string;
  typeidDefaultName: string;
  personId: string;
  empId: string;
  localName: string;
}

/** 1 ô ngày trên lưới lịch - bọc thêm state hiển thị (rỗng đầu/cuối tháng, hôm nay, cuối tuần...). */
export interface EmpCalendarDayCell {
  record: ArEmpCalenderDto | null;
  dateKey: string;
  day: number;
  isEmpty: boolean;
  isToday: boolean;
  isSunday: boolean;
  isSaturday: boolean;
  isWeekend: boolean;
  isRest: boolean;
  isHoliday: boolean;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/calender/emp/save. BE (ArCalenderServiceImpl.
 *  saveEmpCalendarDay) đọc dto.getArDateStr(), KHÔNG phải dto.getDdateStr() - bản Thymeleaf gốc
 *  (ecalSave()) lại gửi field "ddateStr" nên arDateStr trên BE luôn null và bị return sớm, khiến nút
 *  Lưu không thực sự lưu gì dù vẫn báo "Cập nhật lịch cá nhân thành công!" (lỗi có sẵn ở bản gốc). Bản
 *  Angular này gửi đúng field "arDateStr" theo đúng property BE thực sự đọc để sửa lỗi đó. */
export interface EmpCalendarSavePayload {
  arDateStr: string;
  personId: string;
  shiftNo: string | null;
  typeid: string | null;
  remark: string | null;
}

/** Tương ứng với ArShift010Dto.java (combo Ca làm việc, xem GET /ar/attendanceSettings/api/shift). */
export interface ShiftOption {
  shiftNo: string;
  nameVi: string;
  shiftShortname?: string;
}
