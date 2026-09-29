/** Tương ứng AutoExcelParamDto.java - 1 tham số #PARAM# (SYS_PARAM_BY_SQL). */
export interface AutoExcelParam {
  sqlSeq?: string;
  sqlParamNo?: string;
  param: string;
  enSqlParamDesc: string | null;
  /** Bản gốc đặt tên "CN" nhưng lưu mô tả tiếng Việt. */
  cnSqlParamDesc: string | null;
  /** SY_CODE.DESCRIPTION thuộc danh mục 211026: text, date, org, code... */
  sqlParamTp: string | null;
  defaultVal: string | null;
  sortCd: string | null;
  useYn?: string;
  /** Tham số hệ thống (công ty, ngôn ngữ, người dùng) - backend tự điền, không hiển thị ở form chạy báo cáo. */
  system: boolean;
}

/** Tương ứng AutoExcelMasterDto.java - 1 báo cáo SQL (SYS_SQL_MASTER). */
export interface AutoExcelMaster {
  sqlSeq: string;
  cpnyId: string | null;
  pgmNm: string;
  sqlNm: string;
  sqlFromStmt: string | null;
  sqlOrderById: string | null;
  sqlDesc: string | null;
  sqlStat: 'Y' | 'N';
  isSpecial: 'Y' | 'N';
  /** Chỉ có khi người dùng có quyền chỉnh sửa. */
  sqlStmt: string | null;
  rgstDtime: string | null;
  updtDtime: string | null;
  updtUser: string | null;
  params: AutoExcelParam[];
}

export interface AutoExcelSavePayload {
  sqlSeq: string | null;
  pgmNm: string;
  sqlNm: string;
  sqlFromStmt: string | null;
  sqlOrderById: string;
  sqlDesc: string | null;
  sqlStat: 'Y' | 'N';
  isSpecial: 'Y' | 'N';
  sqlStmt: string;
}

export interface AutoExcelActionResult {
  success: boolean;
  message: string;
  sqlSeq?: string;
}

export interface AutoExcelSearchParams {
  pgmNm: string | null;
  sqlSeq: string | null;
  sqlNm: string | null;
}

/** Kết quả chạy báo cáo: file tải về, hoặc không có dữ liệu, hoặc lỗi (message từ backend). */
export type AutoExcelExportOutcome =
  | { kind: 'file'; blob: Blob; fileName: string }
  | { kind: 'empty' }
  | { kind: 'error'; message: string | null };

/** Module báo cáo (PGM_NM) - các giá trị bản gốc dùng ở createSqlMaster.jsp và query string của menu. */
export const AUTO_EXCEL_MODULES = ['EMP', 'PAY', 'ATT', 'WEL', 'PAGEOUT', 'TMP', 'INC', 'EDU'] as const;

/** Module được chọn khi thêm mới lúc menu mở với PGM_NMurl=ALL (giống createSqlMaster.jsp). */
export const AUTO_EXCEL_EDITABLE_MODULES = ['EMP', 'PAY', 'ATT', 'WEL', 'PAGEOUT'];
