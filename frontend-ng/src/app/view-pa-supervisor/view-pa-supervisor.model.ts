import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';

export type { AuthDeptNode, CodeItem, EmployeeSearchDto };

/** Tương ứng với PaSupervisorDto.java (bảng PA_SUPERVISOR, join HR_EMPLOYEE/HR_DEPARTMENT hiển thị).
 *  createDate trả về 'YYYY-MM-DD' ở cả API list và API chi tiết (xem PaSupervisorMapper.xml -
 *  TO_CHAR(..., 'YYYY-MM-DD')). */
export interface PaSupervisorDto {
  personId: string;
  empId: string | null;
  localName: string | null;
  deptName: string | null;
  empOffice: string | null;
  createDate: string | null;
  createdBy: string | null;
  activity: number | null;
  orderNo: number | null;
}

/** Tham số GET /pa/wagebase/api/supervisor/list - DataTablesRequest kiểu cũ (draw/start/length). */
export interface PaSupervisorSearchParams {
  empSearch: string;
  deptNos: string;
  empOfficeSearch: string | null;
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

/** Payload gửi lên POST /pa/wagebase/api/supervisor/save - personId không đổi khi sửa. */
export interface PaSupervisorSavePayload {
  personId: string;
  activity: number;
  orderNo: number;
}

/** Tương ứng với 1 dòng trả về của GET .../api/supervisor/departments (toàn bộ cây HR_DEPARTMENT -
 *  khác endpoint authorized-departments vốn chỉ trả phòng ban ĐÃ được phân quyền cho admin đang đăng
 *  nhập, xem PaSupervisorMapper.xml#getDepartmentTree so với #getAuthorizedDepartments). */
export interface DeptTreeNode {
  id: string;
  parent: string;
  text: string;
}

/** Response chung của API save/delete/saveDepartments (PaSupervisorController trả success/message hoặc error). */
export interface PaSupervisorActionResponse {
  success: boolean;
  message?: string;
  error?: string;
}
