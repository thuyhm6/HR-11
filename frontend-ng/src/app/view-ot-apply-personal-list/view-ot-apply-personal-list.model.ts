/** Tương ứng với OtApplyPersonalListDto.java (phần kết quả). */
export interface OtApplyPersonalListRow {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  postGradeNo: string;
  postName: string;
  shiftName: string;
  otTotal: number | null;
  weekdayOtTotal: number | null;
  weekendOtTotal: number | null;
  holidayOtTotal: number | null;
  mealOtIncen: number | null;
  nightIncen: number | null;
  saturdayIncen: number | null;
}

/** Tham số GET .../otApplyPersonalList/summary - ngày dạng DD/MM/YYYY (giống JSP cũ). */
export interface OtApplyPersonalListSearchParams {
  keyword: string;
  deptNos: string;
  empTypeCode: string;
  shiftNo: string;
  startDate: string;
  endDate: string;
}

/** Nhóm cột có link xem chi tiết - backend map sang danh sách ITEM_NO (OtApplyPersonalListServiceImpl). */
export type OtType = 'WEEKDAY' | 'WEEKEND' | 'HOLIDAY' | 'MEAL' | 'NIGHT' | 'SATURDAY';

/** Tương ứng với OtApplyPersonalListDetailDto.java (phần kết quả). */
export interface OtApplyPersonalListDetailRow {
  personId: string;
  empId: string;
  localName: string;
  shiftNo: string;
  shiftName: string;
  shiftStartTime: string;
  shiftEndTime: string;
  arDateStr: string;
  itemNo: string;
  itemName: string;
  indoorTime: string;
  outdoorTime: string;
  fromTime: string;
  toTime: string;
  applyLength: number | null;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
