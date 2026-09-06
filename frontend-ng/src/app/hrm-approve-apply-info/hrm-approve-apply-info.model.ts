/** Tương ứng với HrmApproveApplyDto.java (1 dòng trong danh sách yêu cầu thay đổi chờ quản lý duyệt). */
export interface HrmApproveApplyDto {
  applyNo: string;
  applyTableType: string; // PERSONAL, ADDRESS, FAMILY, EMERGENCY, WORK_EXP, EDUCATION, QUALIFICATION
  personId: string;
  createDate: string;
  activity: number; // 1=Chờ duyệt, 2=Đã duyệt, 3=Đã từ chối
  applyType: number; // 1=Thêm mới, 2=Cập nhật
  managerInfo: string;
  callback: string;
  earror: string;
  empName: string;
  empCode: string;
  deptName: string;
}

/** Dữ liệu chi tiết apply (mới) hoặc dữ liệu gốc - khác nhau tùy applyTableType, nhận dạng loose object
 *  giống hệt jQuery bản gốc (hmaiBuildRows/hmaiOrigBuildRows). */
export type ApplyDetail = Record<string, string | number | null | undefined>;

/** Tương ứng với EssFileDto.java (file đính kèm của 1 apply). */
export interface EssFileDto {
  fileNo: string;
  applyNo: string;
  applyType: string;
  fileUrl: string;
  fileName: string;
}

export interface ApplyDetailResponse {
  success: boolean;
  applyData?: ApplyDetail;
  originalData?: ApplyDetail | null;
  files?: EssFileDto[];
  message?: string;
}

export interface ApplyActionResponse {
  success: boolean;
  message?: string;
}

export interface ApplyListParams {
  fromDate: string;
  toDate: string;
  activitySearch: string;
  keyword: string;
  draw: number;
  start: number;
  length: number;
}

/** Tương ứng với DataTablesResponse<T> phía backend. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}

/** 1 dòng trong bảng so sánh chi tiết bên phải (nhãn + giá trị mới + giá trị gốc). */
export interface CompareRow {
  label: string;
  newVal: string | number | null | undefined;
  origVal: string | number | null | undefined;
  changed: boolean;
}
