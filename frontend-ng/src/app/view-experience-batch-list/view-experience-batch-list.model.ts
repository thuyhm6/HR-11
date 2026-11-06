/** 1 đợt đăng ký (HR_RECRUIT_REGISTER_INFO, REGISTER_TYPE=80000057) trong HrExpInsideBatchDto.java. */
export interface ExpBatchRegister {
  registerSeq: string;
  registerDate?: string | null;
  registerRemark?: string | null;
  /** '1' = đợt đã xác nhận -> chỉ xem. */
  registerActivity?: string | null;
}

/** 1 dòng dữ liệu (HR_EXPERIENCE_INSIDE_BATCH) trong HrExpInsideBatchDto.java. */
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
  costCenterName?: string | null;
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
  /** Message key (messages*.properties) để frontend tự dịch thông báo. */
  messageKey?: string;
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
