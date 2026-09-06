/** Tương ứng với 1 dòng đăng ký (HR_RECRUIT_REGISTER_INFO) trong HrExpInsideBatchDto.java. */
export interface ExpBatchRegister {
  registerSeq: string;
  registerDate?: string | null;
  registerRemark?: string | null;
  registerActivity?: string | null;
}

/** Tương ứng với 1 dòng dữ liệu (HR_EXPERIENCE_INSIDE_BATCH) trong HrExpInsideBatchDto.java. */
export interface ExpBatchItem {
  seq: string;
  registerSeq?: string | null;
  empId?: string | null;
  localName?: string | null;
  startDate?: string | null;
  transCode?: string | null;
  transCodeName?: string | null;
  transReason?: string | null;
  transReasonName?: string | null;
  deptno?: string | null;
  deptName?: string | null;
  postFamily?: string | null;
  postFamilyName?: string | null;
  newPostGradeNo?: string | null;
  postGradeName?: string | null;
  positionNo?: string | null;
  positionNoName?: string | null;
  empTypeCode?: string | null;
  empTypeName?: string | null;
  mainBusiness?: string | null;
  mainBusinessName?: string | null;
  costCenter?: string | null;
  remarks?: string | null;
  activity?: string | null;
}

export interface ExpBatchListParams {
  draw: number;
  start: number;
  length: number;
  registerSeq: string;
}

/** Tương ứng với DataTablesResponse.java (có thêm allProcessed cho trang này). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  allProcessed?: boolean;
}

export interface ExpBatchActionResult {
  success: boolean;
  message?: string;
  registerSeq?: string;
  registerDate?: string;
}

export interface ExpBatchImportResult {
  success: boolean;
  message?: string;
  successCount?: number;
  errorCount?: number;
  errors?: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description?: string;
  codeId?: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
