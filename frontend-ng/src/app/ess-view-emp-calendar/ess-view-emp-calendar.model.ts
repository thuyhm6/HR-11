/** Tương ứng với ArEmpCalenderDto.java (1 ngày trong lịch làm việc của 1 nhân viên). */
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

/** Tương ứng với response GET /ess/empinfo/api/personalInfo/myInfo (chỉ dùng field personId ở trang này). */
export interface EssMyInfoDto {
  personId: string;
}

/** 1 ô ngày trên lưới lịch - bọc thêm state hiển thị (rỗng đầu/cuối tháng, hôm nay, cuối tuần...). */
export interface EssCalendarDayCell {
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
