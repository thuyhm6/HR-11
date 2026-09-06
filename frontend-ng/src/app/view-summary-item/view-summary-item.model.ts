/** Tương ứng với ArStaItemDto.java (bảng AR_STA_ITEM - hạng mục chỉ tiêu tổng hợp, + tên đa ngôn ngữ
 *  join từ SY_GLOBAL_NAME). Không có cpnyId (bảng dùng chung cho mọi công ty, không cần interceptor
 *  scoping như các bảng AR_ITEM/AR_ITEM_PARAM khác trong module này). */
export interface ArStaItemDto {
  itemNo: string;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  unit: string | null;
  staItemId: string | null;
  orderno: number | null;
  showYn: string | null;
  showOrder: number | null;
  activity: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/arStaItem/save - itemNo null/rỗng nghĩa là thêm
 *  mới (BE tự sinh itemNo qua SyGlobalNameMapper.getNextNoSeq, xem ArStaItemServiceImpl). Không gửi
 *  datatype vì BE luôn tự gán cố định '1492' (không cho sửa qua UI, giống bản gốc). */
export interface ArStaItemSavePayload {
  itemNo: string | null;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  unit: string | null;
  staItemId: string | null;
  orderno: number | null;
  showYn: string;
  showOrder: number | null;
  activity: number;
}
