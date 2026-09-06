/** Tương ứng với EssOtReportDto phía backend (Java). */
export interface EssOtReportDto {
  empId: string;
  localName: string;
  deptName: string;
  totalOtMonth: number;
  preMonthlyTotalQty: number;
  totalOtYear: number;
  otRegular150Month: number;
  otRegular200Month: number;
  otRegular210Month: number;
  otSaturday200Month: number;
  otSaturday270Month: number;
  otWeekend200Month: number;
  otWeekend270Month: number;
  otHoliday300Month: number;
  otHoliday390Month: number;
  otRegular150ExcessOfficial: number;
  otRegular200ExcessOfficial: number;
  otRegular210ExcessOfficial: number;
  otSaturday200ExcessOfficial: number;
  otSaturday270ExcessOfficial: number;
  otWeekend200ExcessOfficial: number;
  otWeekend270ExcessOfficial: number;
  otHoliday300ExcessOfficial: number;
  otHoliday390ExcessOfficial: number;
  otRegular150ExcessProbation: number;
  otRegular200ExcessProbation: number;
  otRegular210ExcessProbation: number;
  otSaturday200ExcessProbation: number;
  otSaturday270ExcessProbation: number;
  otWeekend200ExcessProbation: number;
  otWeekend270ExcessProbation: number;
  otHoliday300ExcessProbation: number;
  otHoliday390ExcessProbation: number;
}

/** Tương ứng với DataTablesResponse<T> phía backend. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

export interface ViewOtReportSearchParams {
  month: string;
  year: string;
  keyword: string;
  deptNos: string;
  draw: number;
  start: number;
  length: number;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
