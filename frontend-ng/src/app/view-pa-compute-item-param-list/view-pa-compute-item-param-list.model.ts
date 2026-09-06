/** Tương ứng với PaComputeItemParamDto.java (bảng PA_ITEM_PARAM, join PA_ITEM/SY_GLOBAL_NAME/HR_COMPANY). */
export interface PaComputeItemParamDto {
  paramNo: string;
  itemNo: string;
  itemId: string | null;
  aliasName: string | null;
  calcuOrder: number | null;
  pricision: number | null;
  carryBit: number | null;
  cpnyId: string | null;
  cpnyName: string | null;
  applyType: string | null;
  applyTypeName: string | null;
}

/** Tham số tìm kiếm GET /pa/salary/computeitemparam/api/list - giữ nguyên kiểu phân trang server-side
 *  (draw/start/length) đúng như DataTables gốc, xem PaComputeItemParamController. */
export interface PaComputeItemParamListParams {
  aliasNameSearch: string;
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

/** Payload gửi lên POST /pa/salary/computeitemparam/api/insert - itemNo là hạng mục PA_ITEM chưa có
 *  thông số tính toán (xem getItemOptions), BE tự sinh paramNo (SYS_GUID) và calcuOrder (MAX + 1). */
export interface PaComputeItemParamInsertPayload {
  itemNo: string;
  pricision: number | null;
  carryBit: number | null;
  applyType: string | null;
}

/** Payload gửi lên PUT /pa/salary/computeitemparam/api/update - chỉ cập nhật PRICISION, CARRY_BIT,
 *  APPLY_TYPE, xem PaComputeItemParamMapper.xml#updateOne. */
export interface PaComputeItemParamUpdatePayload {
  paramNo: string;
  pricision: number | null;
  carryBit: number | null;
  applyType: string | null;
}

/** Item trả về từ GET /pa/salary/computeitemparam/api/itemList - đổ combo "Tên hạng mục" ở modal thêm
 *  mới (chỉ liệt kê hạng mục PA_ITEM chưa có PA_ITEM_PARAM tương ứng). */
export interface PaItemOption {
  itemNo: string;
  itemName: string | null;
  itemId: string | null;
}

/** Item trả về từ GET /pa/salary/computeitemparam/api/applyTypeList - đổ combo "Loại áp dụng". */
export interface PaApplyTypeOption {
  applyType: string;
  applyTypeName: string | null;
}
