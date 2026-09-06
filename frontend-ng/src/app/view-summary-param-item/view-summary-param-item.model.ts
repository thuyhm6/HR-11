/** Tương ứng với ArStaItemParamDto.java (bảng AR_STA_ITEM_PARAM - thông số hạng mục chỉ tiêu tổng
 *  hợp, + tên hạng mục join từ SY_GLOBAL_NAME). cpnyId không hiển thị/không cho chọn trên UI vì luôn
 *  bị interceptor (LanguageParameterInterceptor) tự gán theo company của session đăng nhập - xem
 *  ViewSummaryParamItemComponent để biết chi tiết (cùng lý do đã áp dụng ở ViewArItemParamListComponent). */
export interface ArStaItemParamDto {
  paramNo: string;
  itemNo: string;
  itemNameVi: string | null;
  itemNameEn: string | null;
  itemNameZh: string | null;
  itemNameKo: string | null;
  unit: string | null;
  minUnit: number | null;
  calOrder: number | null;
  manageFlag: number | null;
  orderno: number | null;
  activity: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/arStaItemParam/save - paramNo null nghĩa là thêm
 *  mới (BE tự sinh paramNo qua ArStaItemParamMapper.getNextParamNoSeq và tự tính calOrder =
 *  MAX(CAL_ORDER)+1, xem ArStaItemParamServiceImpl - vì vậy calOrder chỉ gửi lên khi sửa, giống bản
 *  gốc: field readonly, chỉ hiển thị ở chế độ sửa). */
export interface ArStaItemParamSavePayload {
  paramNo: string | null;
  itemNo: string;
  unit: string | null;
  minUnit: number | null;
  manageFlag: number | null;
  orderno: number | null;
  activity: number;
  calOrder?: number | null;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arStaItemParam/availableItems (danh sách
 *  hạng mục AR_STA_ITEM chưa có thông số, dùng cho combo "Chọn Hạng mục" khi thêm mới). */
export interface AvailableItemOption {
  itemNo: string;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
}
