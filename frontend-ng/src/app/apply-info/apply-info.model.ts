/** Tương ứng với EssApplyInfoDto.java (1 dòng trong danh sách thay đổi). */
export interface EssApplyInfoDto {
  applyNo: string;
  applyTableType: string; // PERSONAL, ADDRESS, FAMILY, EMERGENCY, WORK_EXP, EDUCATION, QUALIFICATION
  personId: string;
  createDate: string;
  activity: number; // 1=Gửi, 2=Duyệt, 3=Từ chối
  applyType: number; // 1=Thêm mới, 2=Sửa
  managerInfo: string;
  callback: string;
  earror: string;
}

/** Tương ứng với EssFileDto.java (file đính kèm của 1 apply). */
export interface EssFileDto {
  fileNo: string;
  applyNo: string;
  applyType: string;
  fileUrl: string;
  fileName: string;
}

/** Chi tiết apply - khác nhau tùy applyTableType (HrPersonalInfoApplyDto/HrAddressMattersApplyDto/...
 *  ở backend) nên nhận dạng loose object, đọc field theo tên giống hệt jQuery bản gốc (veaiBuildRows). */
export type ApplyDetail = Record<string, string | number | null | undefined>;

export interface ApplyDetailResponse {
  detail: ApplyDetail;
  files: EssFileDto[];
}

export interface ApplyListParams {
  fromDate: string;
  toDate: string;
  activitySearch: string;
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

/** 1 dòng trong bảng chi tiết bên phải (nhãn + giá trị). */
export interface DetailRow {
  label: string;
  value: string | number | null | undefined;
}
