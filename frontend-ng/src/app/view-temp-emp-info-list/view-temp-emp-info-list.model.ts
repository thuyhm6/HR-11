/** Tương ứng với HrSpecialMatter.java (danh sách chính + payload thêm/sửa). */
export interface HrSpecialMatterDto {
  specialNo: string;
  personId: string;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  activity: number | null;
  specialContent: string | null;
  startDate: string | null;
  endDate: string | null;
  otFlag: number | null;
  empId: string;
  localName: string;
  deptNo: string;
  position: string;
}

/** Payload gửi lên POST specialMatter/add và specialMatter/update - chỉ ACTIVITY/START_DATE/END_DATE/
 *  OT_FLAG/SPECIAL_CONTENT thực sự được backend ghi nhận (xem giải thích ở component). empId chỉ dùng
 *  để backend resolve PERSON_ID qua hàm GET_PERSON_ID khi thêm mới. */
export interface HrSpecialMatterSavePayload {
  personId?: string;
  empId?: string;
  specialNo?: string;
  activity: number;
  otFlag: number;
  specialContent: string;
  startDate: string;
  endDate: string;
}

export interface TempEmpSearchParams {
  localName: string;
  empId: string;
  deptNo: string;
  position: string;
  createDateFrom: string;
  createDateTo: string;
  activity: string;
  otFlag: string;
}

/** Tương ứng với DataTablesRequest phía backend (com.ait.sy.sys.dto) - chỉ set các field thực sự
 *  được HrSpecialMatterServiceImpl sử dụng (draw/start/length/searchParams); order/columns bỏ trống
 *  để dùng đúng thứ tự mặc định "createDate desc" của backend. */
export interface DataTablesRequestPayload {
  draw: number;
  start: number;
  length: number;
  searchParams: Record<string, string>;
}

/** Tương ứng với DataTablesResponse<T> phía backend. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

/** Tương ứng với EmployeeSearchResponse.java (modal chọn nhân viên khi thêm mới). */
export interface EmployeeSearchDto {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  position: string;
  email: string;
  phone: string;
}
