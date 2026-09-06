/** Tương ứng với PaInputItemParamDto.java (bảng PA_PARAM_ITEM_PARAM, join PA_PARAM_ITEM/SY_GLOBAL_NAME/PA_DISTINCT_LIST). */
export interface PaInputItemParamDto {
  paramNo: string;
  distinctField: string | null;
  distinctField2nd: string | null;
  defaultVal: string | null;
  paramItemId: string | null;
  aliasName: string | null;
  cpnyId: string | null;
  cpnyName: string | null;
  distinctFieldName: string | null;
  distinctField2ndName: string | null;
  itemType: number;
  activity: number;
}

/** Tham số tìm kiếm GET /pa/salary/inputitemparam/api/list - giữ nguyên kiểu phân trang server-side
 *  (draw/start/length) đúng như DataTables gốc, xem PaInputItemParamController. */
export interface PaInputItemParamListParams {
  aliasNameSearch: string;
  itemTypeSearch: number | null;
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

/** Item trả về từ GET /pa/salary/inputitemparam/api/distinctList - đổ combo Hạng mục phân biệt 1/2. */
export interface PaDistinctListItem {
  distinctField: string;
  distinctFieldName: string | null;
}

/** Payload gửi lên PUT /pa/salary/inputitemparam/api/update - chỉ cập nhật 4 trường cho phép sửa
 *  (DISTINCT_FIELD, DISTINCT_FIELD_2ND, DEFAULT_VAL, ACTIVITY), xem PaInputItemParamMapper.xml#updateOne. */
export interface PaInputItemParamUpdatePayload {
  paramNo: string;
  distinctField: string | null;
  distinctField2nd: string | null;
  defaultVal: string | null;
  activity: number;
}
