/** Tương ứng với ArCalenderDto.java (bảng AR_CALENDER - lịch làm việc công ty, 1 dòng/ngày, khác
 *  AR_CALENDER_GROUP dùng cho viewClassCalendar là 1 dòng/ngày/nhóm ca). ddateStr là string dạng
 *  'YYYY/MM/DD'. cpnyId không hiển thị trên UI vì luôn bị interceptor (LanguageParameterInterceptor)
 *  tự gán theo company của session đăng nhập. */
export interface ArCalenderDto {
  ddateStr: string;
  iyear: number | null;
  imonth: number | null;
  iday: number | null;
  workdayflag: number | null;
  shiftNo: string | null;
  shiftName: string | null;
  typeid: string | null;
  typeidName: string | null;
  overtypeid: string | null;
  overtypeidName: string | null;
  typeidDefault: string | null;
  typeidDefaultName: string | null;
  operationId: string | null;
  orderno: number | null;
  activity: number | null;
  statutoryFlag: number | null;
  remark: string | null;
  companyName: string | null;
}

/** 1 ô ngày trên lưới lịch (mỗi ngày chỉ có tối đa 1 dòng AR_CALENDER, khác ô lịch nhóm ca có thể
 *  nhiều dòng). */
export interface CompanyCalendarDayCell {
  item: ArCalenderDto | null;
  dateKey: string;
  day: number;
  isEmpty: boolean;
  isToday: boolean;
  isSunday: boolean;
  isSaturday: boolean;
  isWeekend: boolean;
  hasWork: boolean;
  isStatutory: boolean;
}

/** Form dữ liệu modal Thêm mới/Cập nhật 1 ngày (dùng chung 1 modal như bản gốc). */
export interface CompanyCalendarEditForm {
  ddateStr: string;
  workdayflag: number;
  shiftNo: string | null;
  typeid: string | null;
  overtypeid: string | null;
  typeidDefault: string | null;
  statutoryFlag: number;
  operationId: string | null;
  orderno: number;
  remark: string | null;
  activity: number;
}
