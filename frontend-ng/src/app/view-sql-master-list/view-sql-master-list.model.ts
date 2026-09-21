/** Tương ứng với response GET /sys/api/sqlMaster/list (SySqlMaster.java). */
export interface SqlMasterRow {
  sqlSeq?: string;
  pgmNm: string | null;
  sqlNm: string;
  sqlDesc: string | null;
  useYn: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
}

/** Một dòng tham số truy vấn (SySqlParam.java) - dùng chung cho modal Thêm/Sửa và modal xuất Excel. */
export interface SqlParamRow {
  sqlSeq?: string;
  sqlParamNo?: string;
  param: string;
  paramDesc: string | null;
  sqlParamTp: string | null;
  defaultVal: string | null;
  sortCd?: number | null;
  useYn: string | null;
}

/** Tương ứng với response GET /sys/api/sqlMaster/detail (SySqlMasterDetailDto.java). */
export interface SqlMasterDetail extends SqlMasterRow {
  sqlStmt: string;
  params: SqlParamRow[];
}

/** Payload gửi lên POST /sys/api/sqlMaster/save. */
export interface SqlMasterSavePayload {
  sqlSeq?: string;
  pgmNm: string | null;
  sqlNm: string;
  sqlDesc: string | null;
  sqlStmt: string;
  useYn: string;
  params: SqlParamRow[];
}

/** Response chung của save/delete (SySqlMasterController trả Map<String,Object> success/message). */
export interface SqlMasterActionResult {
  success: boolean;
  message: string;
  sqlSeq?: string;
}

/** Danh sách mã chương trình/module cố định (theo cấu trúc menu hiện có của hệ thống - xem "DB Modify.md"). */
export const SQL_MASTER_PGM_OPTIONS: { value: string; label: string }[] = [
  { value: 'ESS', label: 'ESS - Tự phục vụ nhân viên' },
  { value: 'AR', label: 'AR - Chấm công' },
  { value: 'HR', label: 'HR - Nhân sự' },
  { value: 'ORG', label: 'ORG - Tổ chức' },
  { value: 'PA', label: 'PA - Lương' },
  { value: 'EDU', label: 'EDU - Đào tạo' },
  { value: 'EVS', label: 'EVS - Đánh giá' },
  { value: 'RPT', label: 'RPT - Báo cáo' },
  { value: 'SY', label: 'SY - Hệ thống' },
];

export const SQL_PARAM_TYPE_OPTIONS = ['VARCHAR2', 'NUMBER', 'DATE'];
