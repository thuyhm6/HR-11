/** Tương ứng 1 dòng trả về của GET /ar/attendanceSettings/api/arStaFormula/treeItems (cây hạng mục
 *  bên trái - dữ liệu từ AR_STA_ITEM_PARAM, xem ArStaFormulaMapper.xml#getParamItemsForLeftTree). */
export interface ArStaFormulaTreeItem {
  id: string;
  itemNo: string;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  calOrder: number;
}

/** Tương ứng với ArStaFormulaDto.java. */
export interface ArStaFormulaDto {
  formularNo: number;
  itemNo: string;
  condition: string | null;
  formular: string;
  cpnyId: string;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  activity: number;
  orderno: number | null;
  itemNameVi: string | null;
  itemNameEn: string | null;
  itemNameZh: string | null;
  itemNameKo: string | null;
}

/** Payload gửi lên POST .../api/arStaFormula/save - chỉ gồm các field form cho phép chỉnh sửa. */
export interface ArStaFormulaSavePayload {
  formularNo: number | null;
  itemNo: string;
  condition: string;
  formular: string;
  orderno: number | null;
  activity: number;
}

/** Công cụ 1: Danh sách hạng mục chấm công (AR_ITEM) - xem ArStaFormulaMapper.xml#getAttItems. */
export interface ArStaFormulaAttItem {
  itemId: string;
  itemName: string;
  itemGroupName: string;
}

/** Công cụ 2: Bảng tổng hợp chấm công (AR_STA_ITEM) - xem ArStaFormulaMapper.xml#getStaItems. */
export interface ArStaFormulaStaItem {
  itemNo: string;
  itemName: string;
  calOrder: number;
  staItemId: string;
  dataType: string;
  dataTypeName: string;
}

/** Công cụ 3: Thông tin cơ bản (PA_DISTINCT_LIST) - xem ArStaFormulaMapper.xml#getBasicInfos. */
export interface ArStaFormulaBasicInfo {
  distinctField: string;
  fieldName: string;
}

/** Response chung của API save/delete (ArStaFormulaController trả success/message hoặc error). */
export interface ArStaFormulaActionResponse {
  success: boolean;
  message?: string;
  error?: string;
}
