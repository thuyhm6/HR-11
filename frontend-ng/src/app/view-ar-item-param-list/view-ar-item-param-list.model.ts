/** Tương ứng với ArItemParamDto.java (bảng AR_ITEM_PARAM + tên hạng mục join từ SY_GLOBAL_NAME).
 *  cpnyId không hiển thị/không cho chọn trên UI vì luôn bị interceptor (LanguageParameterInterceptor)
 *  ghi đè bằng company của session đăng nhập, bất kể giá trị client gửi lên - xem
 *  ViewArItemParamListComponent để biết chi tiết. */
export interface ArItemParamDto {
  arParamNo: string;
  itemNo: string;
  itemNameVi: string | null;
  groupNo: string | null;
  unit: string | null;
  unitValue: number | null;
  minValue: number | null;
  maxValue: number | null;
  dependItem: string | null;
  replaceItem: string | null;
  cardFlag: number | null;
  cardFromFlag: number | null;
  cardFromOffset: number | null;
  cardFromRelation: string | null;
  cardToFlag: number | null;
  cardToOffset: number | null;
  cardToRelation: string | null;
  applyFlag: number | null;
  applyType: string | null;
  applyFulldayValue: number | null;
  applyCardPriority: number | null;
  dateType: string | null;
  detailContent: string | null;
  orderno: number | null;
  activity: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/arItemParam/save - arParamNo null/rỗng nghĩa là
 *  thêm mới (BE tự sinh arParamNo mới qua ArItemParamMapper.getNextParamNoSeq). Không gửi cpnyId vì BE
 *  luôn tự gán theo session (xem ghi chú ở ArItemParamDto). */
export interface ArItemParamSavePayload {
  arParamNo: string | null;
  itemNo: string;
  groupNo: string | null;
  unit: string | null;
  unitValue: number | null;
  minValue: number | null;
  maxValue: number | null;
  dependItem: string | null;
  replaceItem: string | null;
  cardFlag: number;
  cardFromFlag: number;
  cardFromOffset: number | null;
  cardFromRelation: string | null;
  cardToFlag: number;
  cardToOffset: number | null;
  cardToRelation: string | null;
  applyFlag: number;
  applyType: string | null;
  applyFulldayValue: number | null;
  applyCardPriority: number;
  dateType: string | null;
  detailContent: string | null;
  orderno: number | null;
  activity: number;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arItem - dùng để đổ combo chọn hạng mục (xem
 *  ViewArItemService/ArItemDto, dùng lại nguyên API đã build ở trang viewArItem). activity dùng ở
 *  ViewItemParameterComponent để lọc hạng mục còn hoạt động khi build cây bên trái (tham khảo
 *  loadTree() trong viewItemParameter.html gốc). */
export interface ArItemOption {
  itemNo: string;
  nameVi: string | null;
  shortName: string | null;
  activity: number | null;
}
