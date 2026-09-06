/** Tương ứng với ArCalenderGroupDto.java (1 dòng cấu hình lịch của 1 nhóm ca trong 1 ngày). */
export interface ArCalenderGroupDto {
  ddate: string;
  iyear: number;
  imonth: number;
  iday: number;
  iweek: number;
  workdayflag: number;
  typeid: string | null;
  overtypeid: string | null;
  typeidDefault: string | null;
  groupId: string;
  shiftNo: string | null;
  arDateStr: string;
  cpnyId: string;
  activity: number;
  orderno: number;
  operationId: string | null;
  companyName: string;
  ddateFormatted: string;
  shiftName: string;
  typeidName: string;
  overtypeidName: string;
  typeidDefaultName: string;
  groupName: string;
}

/** Tương ứng với ArShift010Dto.java (dùng cho các combo chọn ca làm việc/ca nghỉ). */
export interface ArShift010Dto {
  shiftNo: string;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  shiftShortname: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** 1 ô ngày trên lưới lịch - có thể chứa nhiều dòng cấu hình (nhiều ca) trong cùng 1 ngày. */
export interface ClassCalendarDayCell {
  items: ArCalenderGroupDto[];
  dateKey: string;
  day: number;
  isEmpty: boolean;
  isToday: boolean;
  isSunday: boolean;
  isSaturday: boolean;
  isWeekend: boolean;
  hasWork: boolean;
}

/** Form dữ liệu modal "Thêm mới lịch nhóm ca" (theo khoảng ngày). */
export interface ClassCalendarAddForm {
  dateRange: Date[] | null;
  groupId: string | null;
  workShift: string | null;
  restShift: string | null;
}

/** Form dữ liệu modal "Cập nhật 1 ngày" của 1 nhóm ca. */
export interface ClassCalendarEditForm {
  arDateStr: string;
  groupId: string;
  workdayflag: number;
  shiftNo: string | null;
  typeid: string | null;
  overtypeid: string | null;
  typeidDefault: string | null;
  operationId: string | null;
  orderno: number;
  activity: number;
}
