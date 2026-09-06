/** Tương ứng với PaSalaryCodeDto.java (bảng PA_PARAM_ITEM cho itemType 1-5, PA_ITEM cho itemType=6). */
export interface PaSalaryCodeDto {
  itemType: number;
  itemNo: string;
  itemId: string;
  mapCode: string | null;
  itemName: string | null;
  nameEn: string | null;
  nameKo: string | null;
  nameVi: string | null;
  nameZh: string | null;
  dataType: string | null;
  descr: string | null;
  createdBy: string | null;
  createDate: string | null;
  activity: number | null;
  companyUsage: string[] | null;
  companyUsageStr: string | null;
}

/** Tham số tìm kiếm GET /pa/salarycode/api/list - giữ nguyên kiểu phân trang server-side (draw/start/length)
 *  đúng như DataTables gốc, xem PaSalaryCodeController. */
export interface PaSalaryCodeListParams {
  itemNameSearch: string;
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

/** Payload gửi lên POST /pa/salarycode/api/save - itemNo null/rỗng nghĩa là thêm mới (BE tự sinh qua sequence). */
export interface PaSalaryCodeSavePayload {
  itemNo: string | null;
  itemType: number;
  itemId: string;
  nameEn: string;
  nameKo: string;
  nameVi: string;
  nameZh: string;
  dataType: string;
  descr: string;
  companyUsage: string[];
}

/** Khóa dùng cho DELETE /pa/salarycode/api/deleteList. */
export interface PaSalaryCodeDeleteKey {
  itemNo: string;
  itemType: number;
}
