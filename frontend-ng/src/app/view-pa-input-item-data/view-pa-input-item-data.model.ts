/** Item hạng mục tiêu chuẩn ở panel trái - tương ứng PaInputItemDataDto.java (nhóm PA_PARAM_ITEM_PARAM). */
export interface PaInputItemListItem {
  paramNo: string;
  paramName: string;
}

/** 1 dòng dữ liệu tiêu chuẩn (PA_PARAM_DATA) ở bảng bên phải - tương ứng PaInputItemDataDto.java. */
export interface PaInputItemDataDto {
  paramDataNo: number;
  paramNo: string;
  personId: string;
  returnValue: string;
  empId: string | null;
  localName: string | null;
  deptName: string | null;
  postGradeName: string | null;
  empOffice: string | null;
  startMonth: string;
  endMonth: string | null;
  remark: string | null;
}

/** Tham số tìm kiếm GET /pa/salary/inputItemData/api/list - giữ nguyên kiểu phân trang server-side
 *  (draw/start/length) đúng như DataTables gốc, xem PaInputItemDataController. */
export interface PaInputItemDataListParams {
  paramNo: string;
  payMonth: string;
  empOfficeSearch: string;
  deptNos: string;
  empSearch: string;
  draw: number;
  start: number;
  length: number;
}

/** Tương ứng với DataTablesResponse.java. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

/** Payload gửi lên POST insert / PUT update. */
export interface PaInputItemDataSavePayload {
  paramDataNo: number | null;
  paramNo: string;
  personId: string;
  returnValue: string;
  startMonth: string;
  endMonth: string | null;
  remark: string | null;
}

export interface PaInputItemDataActionResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaInputItemDataImportResponse {
  success: boolean;
  message?: string;
  errors?: string[];
}
