/** Tương ứng với ArCalenderDto.java (bảng AR_CALENDER, lọc TYPEID='1442' OR STATUTORY_FLAG=1 - xem
 *  ArCalenderMapper.xml#findAll). ddateStr là string dạng 'YYYY/MM/DD' (khóa chính cùng cpnyId).
 *  cpnyId không hiển thị trên UI vì luôn bị interceptor (LanguageParameterInterceptor) tự gán theo
 *  company của session đăng nhập. */
export interface ArCalenderHolidayDto {
  ddateStr: string;
  iyear: number | null;
  imonth: number | null;
  iday: number | null;
  companyName: string | null;
  shiftName: string | null;
  typeid: string | null;
  typeidName: string | null;
  workdayflag: number | null;
  statutoryFlag: number | null;
  remark: string | null;
  orderno: number | null;
  activity: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/calender/holidays/save. Giữ đúng các giá trị mặc
 *  định cố định như bản gốc (shiftNo ca hành chính mặc định '14015838', workdayflag=0 - ngày nghỉ,
 *  overtypeid/typeidDefault lấy theo typeid, orderno=0, activity=1, statutoryFlag=1) vì bản gốc không
 *  cho người dùng chỉnh các giá trị này, chỉ cho nhập Ngày/Loại ngày/Ghi chú. */
export interface ArCalenderHolidaySavePayload {
  ddateStr: string;
  shiftNo: string;
  typeid: string;
  overtypeid: string;
  typeidDefault: string;
  workdayflag: number;
  operationId: null;
  remark: string | null;
  orderno: number;
  activity: number;
  statutoryFlag: number;
}
