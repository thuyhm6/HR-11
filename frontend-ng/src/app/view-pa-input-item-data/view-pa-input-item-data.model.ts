/** Item hạng mục tiêu chuẩn ở panel trái - tương ứng PaInputItemDataDto.java (nhóm PA_PARAM_ITEM_PARAM). */
export interface PaInputItemListItem {
  paramNo: string;
  paramName: string;
  /** PERSON_ID -> dữ liệu theo nhân viên (PA_PARAM_DATA); khác -> theo giá trị phân biệt (PA_PARAM_DATA_OTHER). */
  distinctField: string | null;
  distinctField2nd: string | null;
  distinctFieldName: string | null;
  distinctField2ndName: string | null;
}

/** 1 giá trị chọn cho hạng mục phân biệt (PA_PARAM_DATA_LIST). */
export interface PaDistinctValueOption {
  value: string;
  label: string;
}

/** GET .../distinctValues - giá trị chọn cho hạng mục phân biệt 1/2. */
export interface PaDistinctValuesResponse {
  field1: PaDistinctValueOption[];
  field2: PaDistinctValueOption[];
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
  /** Ngày hiệu lực 'YYYY-MM-DD' - tính lương theo ngày (thay cho startMonth/endMonth). */
  startDate: string | null;
  endDate: string | null;
  /** PA_PARAM_DATA_OTHER: giá trị (mã) + tên hiển thị của hạng mục phân biệt 1/2. */
  field1Value?: string | null;
  field2Value?: string | null;
  field1Name?: string | null;
  field2Name?: string | null;
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
  field1Search: string;
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
  personId: string | null;
  field1Value: string | null;
  field2Value: string | null;
  returnValue: string;
  startDate: string;
  endDate: string | null;
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
