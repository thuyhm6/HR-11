/** Tương ứng với MonthDetailDateDto.java - 1 ngày trong kỳ công (25 tháng trước -> 24 tháng chọn). */
export interface MonthDetailDate {
  ddateStr: string;
  iweek: number;
  /** 1440 = ngày làm việc, khác 1440 = ngày nghỉ/lễ (tô xám). */
  typeId: string;
  iday: string;
  dateKey: string;
  dayOtKey: string;
  nightOtKey: string;
  weekTitle: string;
}

/** 1 dòng nhân viên - giữ nguyên tên cột SQL (selectSalaryReport / getMonthDetailRealTimeList bản gốc). */
export type MonthDetailRow = Record<string, string | number | null>;

/** Tương ứng với MonthDetailViewDto.java (response GET /ess/tempEmp/api/monthDetailList/detail). */
export interface MonthDetailView {
  dates: MonthDetailDate[];
  rows: MonthDetailRow[];
}

export interface MonthDetailSearchParams {
  month: string;
  year: string;
  keyword: string;
  deptNos: string;
  nationalityCode: string;
  empOffice: string;
}

export interface MonthDetailExportParams extends MonthDetailSearchParams {
  reportType: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments. */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}

/** Tương ứng với response GET /sys/api/getCode/list. */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  codeId: string;
}
