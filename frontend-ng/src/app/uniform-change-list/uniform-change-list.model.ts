/** Tương ứng HrUniformItemDto.java - danh mục đồng phục (mỗi item = 1 nhóm cột Size / Số lượng). */
export interface UniformItem {
  itemNo: number | null;
  itemName: string;
  /** Y/N */
  hasSize: string;
  /** Y/N */
  hasQuantity: string;
  orderNo: number | null;
  remark: string | null;
  /** 1 = đang dùng, 0 = ngừng dùng */
  activity: number;
}

/** Tương ứng HrUniformChangeDetailDto.java */
export interface UniformChangeDetail {
  changeNo?: number | null;
  itemNo: number;
  itemSize: string | null;
  quantity: number | null;
}

/** Tương ứng HrUniformChangeDto.java - 1 lần đổi đồng phục. */
export interface UniformChange {
  changeNo: number;
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  postGradeName: string;
  sexName: string;
  /** DD/MM/YYYY */
  dateStarted: string;
  /** DD/MM/YYYY */
  changeDate: string;
  /** MM/YYYY */
  changeMonth: string;
  reason: string | null;
  remark: string | null;
  /** DD/MM/YYYY */
  nextEligibleDate: string;
  details: UniformChangeDetail[];
  /** Tổng số lượng đã đổi theo từng tháng trong 6 tháng trước tháng tra cứu (key YYYY-MM). */
  prevMonthQty?: Record<string, number>;
}

export interface UniformChangeSearchParams {
  keyword: string;
  /** YYYY-MM */
  month: string;
  draw: number;
  start: number;
  length: number;
}

/** Tương ứng HrUniformEmpInfoDto.java */
export interface UniformEmpInfo {
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  postGradeName: string;
  sexName: string;
  dateStarted: string;
  lastChangeDate: string | null;
  nextEligibleDate: string | null;
  error?: string;
}

/** Tương ứng HrUniformImportRowDto.java - 1 dòng upload / 1 bản ghi nhập tay. */
export interface UniformImportRow {
  rowNum?: number | null;
  changeNo?: number | null;
  empId: string;
  fileLocalName?: string | null;
  personId?: string | null;
  localName?: string | null;
  deptName?: string | null;
  /** DD/MM/YYYY */
  changeDate: string;
  reason: string | null;
  remark: string | null;
  details: UniformChangeDetail[];
  errors?: string[];
}

/** Tương ứng HrUniformImportResultDto.java */
export interface UniformImportResult {
  rows: UniformImportRow[];
  warnings: string[];
  validCount: number;
  errorCount: number;
}

export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

export interface ApiResult {
  success?: boolean;
  message?: string;
  error?: string;
}
