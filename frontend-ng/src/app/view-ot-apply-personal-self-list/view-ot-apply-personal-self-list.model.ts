/** Tương ứng với response GET /api/otApplyPersonalSelf/items - định nghĩa cột động của bảng pivot. */
export interface OtApplyPersonalSelfItem {
  itemNo: string;
  itemName: string;
}

/** Tương ứng với các field của OtApplyPersonalSelfDto.java mà GET /api/otApplyPersonalSelf/summary
 *  trả về (dữ liệu thô, CHƯA pivot - mỗi dòng là 1 cặp personId/itemNo, phải tự pivot ở client giống
 *  hệt otslPivot() bản gốc, xem buildPivot() trong component). */
export interface OtApplyPersonalSelfDto {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  itemNo: string;
  itemName: string;
  totalQuantity: string | number;
}

/** Tương ứng với các field của OtApplyPersonalSelfDetailDto.java mà GET /api/otApplyPersonalSelf/detail
 *  trả về - có thêm workTime (Thời gian làm việc) so với ArPersonalSelfDetailDto. */
export interface OtApplyPersonalSelfDetailDto {
  pkNo: string;
  personId: string;
  empId: string;
  localName: string;
  shiftNo: string;
  shiftName: string;
  workTime: string;
  arDateStr: string;
  itemNo: string;
  itemName: string;
  fromTimeStr: string;
  toTimeStr: string;
  quantity: string | number;
}

export interface OtApplyPersonalSelfSearchParams {
  startDate: string;
  endDate: string;
}

/** 1 dòng đã pivot theo personId - dựng client-side từ OtApplyPersonalSelfDto[] (giống otslPivot() bản
 *  gốc). Backend luôn lọc PERSON_ID = adminID nên thực tế chỉ có đúng 1 dòng (chính nhân viên đang
 *  đăng nhập), nhưng vẫn giữ logic pivot tổng quát theo nhiều personId để đúng hành vi hàm gốc. */
export interface OtApplyPersonalSelfPivotRow {
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  total: number;
  items: Record<string, number>;
}
