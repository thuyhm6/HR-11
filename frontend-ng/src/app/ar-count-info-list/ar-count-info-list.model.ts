/** Tab "Nghỉ phép" - tái sử dụng nguyên response của ArPersonalListService (xem view-ar-personal-list.model.ts). */
export interface ArCountInfoLeaveItem {
  itemId: string;
  itemName: string;
}

/** Tương ứng response GET .../arPersonalList/summary - List<Map<String,Object>> phẳng. */
export type ArCountInfoLeaveSummaryRow = Record<string, string | number | null>;

export interface ArCountInfoLeaveDetailRow {
  pkNo: string;
  personId: string;
  empId: string;
  localName: string;
  shiftNo: string;
  shiftName: string;
  arDateStr: string;
  itemNo: string;
  itemName: string;
  fromTimeStr: string;
  toTimeStr: string;
  quantity: string;
}

/** Tương ứng với ArCountInfoOtMonthDto.java - chi tiết tăng ca 1 tháng của 1 nhân viên. */
export interface ArCountInfoOtMonth {
  total: number | null;
  normalWork: number | null;
  saturday: number | null;
  weeklyHoliday: number | null;
  publicHoliday: number | null;
  mealOtIncen: number | null;
  nightIncen: number | null;
  saturdayIncen: number | null;
}

/** Tương ứng với ArCountInfoOtDto.java - tổng hợp tăng ca năm của 1 nhân viên, dữ liệu tab "Tăng ca". */
export interface ArCountInfoOtRow {
  empId: string;
  localName: string;
  personId: string;
  deptName: string;
  teamName: string;
  postGradeName: string;
  empTypeName: string;
  shiftName: string;
  year: string;
  otTotal: number | null;
  january: ArCountInfoOtMonth;
  february: ArCountInfoOtMonth;
  march: ArCountInfoOtMonth;
  april: ArCountInfoOtMonth;
  may: ArCountInfoOtMonth;
  june: ArCountInfoOtMonth;
  july: ArCountInfoOtMonth;
  august: ArCountInfoOtMonth;
  september: ArCountInfoOtMonth;
  october: ArCountInfoOtMonth;
  november: ArCountInfoOtMonth;
  december: ArCountInfoOtMonth;
}

/** Khai báo 1 cột tháng trên bảng tab "Tăng ca" - dùng để lặp *ngFor thay vì viết tay 12 lần. */
export interface OtMonthColumn {
  key: keyof ArCountInfoOtRow;
  labelKey: string;
}

/** Bộ lọc chung cho cả 2 tab (Phòng ban / Mã NV-Họ tên / Loại nhân viên / Ca / Ngày bắt đầu / Ngày kết thúc). */
export interface ArCountInfoSearchParams {
  keyword: string;
  deptNos: string;
  empTypeCode: string;
  shiftNo: string;
  startDate: string;
  endDate: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments. */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/shift (chỉ khai field cần dùng). */
export interface ShiftOption {
  shiftNo: string;
  nameVi?: string;
  shiftName?: string;
}
