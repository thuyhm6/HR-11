/** Tương ứng với PaFormulaDto.java (dùng chung cho cả item bên trái lẫn dòng công thức bên phải -
 *  xem PaFormulaMapper.xml). */
export interface PaFormulaDto {
  formularNo: number | null;
  itemNo: string;
  condition: string | null;
  formular: string;
  conditionSeq: number | null;
  description: string | null;
  cpnyId?: string | null;
  /** Chỉ có ở dòng trả về từ itemList (danh sách hạng mục bên trái). */
  itemName?: string | null;
  /** CONDITION_SEQ nhỏ nhất/lớn nhất trong cùng ITEM_NO - dùng ẩn nút lên/xuống ở đầu/cuối danh sách. */
  minSeq?: number | null;
  maxSeq?: number | null;
}

/** 1 hạng mục tính ở panel trái - chỉ dùng itemNo/itemName trong PaFormulaDto trả về từ /itemList. */
export interface PaFormulaItem {
  itemNo: string;
  itemName: string;
}

/** Công cụ chèn nhanh mã hạng mục vào ô điều kiện/công thức - xem PaFormulaToolItemDto.java. */
export interface PaFormulaToolItem {
  itemId: string;
  itemName: string;
}

/** Response của GET .../formula/api/toolItems - 4 danh sách công cụ. */
export interface PaFormulaToolItems {
  paramItems: PaFormulaToolItem[];
  salaryItems: PaFormulaToolItem[];
  attendanceItems: PaFormulaToolItem[];
  fixedParams: PaFormulaToolItem[];
}

/** Response chung dạng DataTablesResponse<PaFormulaDto> của GET .../formula/api/list. */
export interface PaFormulaListResponse {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: PaFormulaDto[];
  error?: string;
}

/** Payload gửi lên insert/update - chỉ gồm các field form cho phép chỉnh sửa. */
export interface PaFormulaSavePayload {
  formularNo: number | null;
  itemNo: string;
  condition: string;
  formular: string;
  description: string;
}

/** Response chung của API insert/update/delete/swapSeq (PaFormulaController trả success/message hoặc error). */
export interface PaFormulaActionResponse {
  success?: boolean;
  message?: string;
  error?: string;
}
