/** Tương ứng với OrgResumeInfo.java (com.ait.org.orgManage.model) - 1 dòng yêu cầu thay đổi tổ chức. */
export interface OrgResumeInfoDto {
  seq: string | null;
  no: string;
  changeDate: string | null;
  resumeName: string | null;
  isCurrentOrg: string | null;
  changeReason: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  activity: string | null;
  fromNo: string | null;
  remark: string | null;
  experienceType: string | null;
}

/** Payload gửi lên POST /org/api/resume/add và /org/api/resume/update - đúng field OrgResumeInfo.java
 *  mà OrgResumeInfoController đọc (no chỉ dùng khi update, add luôn tự sinh NO ở BE). */
export interface OrgResumeSavePayload {
  no: string;
  changeDate: string;
  resumeName: string;
  changeReason: string;
  remark: string;
  activity: string;
}

/** Tương ứng với DataTablesRequest phía backend (com.ait.sy.sys.dto) - chỉ set draw/start/length/
 *  searchParams; order/columns bỏ trống để dùng đúng thứ tự mặc định "CHANGE_DATE desc, NO desc" của
 *  backend (xem OrgResumeInfoServiceImpl.applySafeSorting). */
export interface DataTablesRequestPayload {
  draw: number;
  start: number;
  length: number;
  searchParams: Record<string, string>;
}

/** Tương ứng với response DataTablesResponse<T> (backend vẫn phân trang server-side, xem service). */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
}
