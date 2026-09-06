/** Tương ứng với ArItemDto.java (bảng AR_ITEM + tên đa ngôn ngữ join từ SY_GLOBAL_NAME). */
export interface ArItemDto {
  itemNo: string;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  itemId: string | null;
  shortName: string | null;
  description: string | null;
  unit: string | null;
  itemGroupCode: string | null;
  itemIdMapping: string | null;
  orderno: number | null;
  ordernoSst: number | null;
  activity: number | null;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/arItem/save - itemNo null/rỗng nghĩa là thêm mới
 *  (BE tự sinh itemNo mới qua SyGlobalNameMapper.getNextNoSeq, xem ArItemServiceImpl). */
export interface ArItemSavePayload {
  itemNo: string | null;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  itemId: string | null;
  shortName: string | null;
  description: string | null;
  unit: string | null;
  itemGroupCode: string | null;
  itemIdMapping: string | null;
  orderno: number | null;
  ordernoSst: number | null;
  activity: number;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... - dùng cho combo Mã nhóm hạng mục
 *  (parentCodeNo=1429, xem viewArItem.html gốc). */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
