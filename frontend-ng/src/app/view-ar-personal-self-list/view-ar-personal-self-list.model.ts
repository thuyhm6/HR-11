/** Tương ứng với response GET /api/arPersonalSelf/items - định nghĩa cột động của bảng pivot. */
export interface ArPersonalSelfItem {
  itemNo: string;
  itemName: string;
}

/** Tương ứng với các field của ArPersonalSelfDto.java mà GET /api/arPersonalSelf/summary trả về (dữ
 *  liệu thô, CHƯA pivot - mỗi dòng là 1 cặp personId/itemNo, phải tự pivot ở client giống hệt
 *  apslPivot() bản gốc, xem buildPivot() trong component). */
export interface ArPersonalSelfDto {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  itemNo: string;
  itemName: string;
  totalQuantity: string | number;
}

/** Tương ứng với các field của ArPersonalSelfDetailDto.java mà GET /api/arPersonalSelf/detail trả về. */
export interface ArPersonalSelfDetailDto {
  pkNo: string;
  personId: string;
  empId: string;
  localName: string;
  shiftNo: string;
  shiftName: string;
  arDateStr: string;
  itemNo: string;
  itemName: string;
  fromTimeStr: string;
  toTimeStr: string;
  quantity: string | number;
}

export interface ArPersonalSelfSearchParams {
  startDate: string;
  endDate: string;
}

/** 1 dòng đã pivot theo personId - dựng client-side từ ArPersonalSelfDto[] (giống apslPivot() bản
 *  gốc). Do backend luôn lọc PERSON_ID = adminID (xem ArPersonalSelfMapper.xml), thực tế chỉ có đúng 1
 *  dòng (chính nhân viên đang đăng nhập), nhưng vẫn giữ logic pivot tổng quát theo nhiều personId để
 *  đúng hành vi hàm gốc. */
export interface ArPersonalSelfPivotRow {
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  total: number;
  items: Record<string, number>;
}
