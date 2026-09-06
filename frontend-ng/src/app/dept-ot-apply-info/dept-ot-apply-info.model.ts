/** Tương ứng với EssDeptOtApplyInfoDto phía backend (Java). */
export interface EssDeptOtApplyInfoDto {
  empId: string;
  localName: string;
  deptName: string;
  m01Approved: number; m01Apply: number;
  m02Approved: number; m02Apply: number;
  m03Approved: number; m03Apply: number;
  m04Approved: number; m04Apply: number;
  m05Approved: number; m05Apply: number;
  m06Approved: number; m06Apply: number;
  m07Approved: number; m07Apply: number;
  m08Approved: number; m08Apply: number;
  m09Approved: number; m09Apply: number;
  m10Approved: number; m10Apply: number;
  m11Approved: number; m11Apply: number;
  m12Approved: number; m12Apply: number;
}

/** Tương ứng với DataTablesResponse<T> phía backend. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

export interface DeptOtApplyInfoSearchParams {
  year: string;
  keyword: string;
  deptNos: string;
  draw: number;
  start: number;
  length: number;
}
