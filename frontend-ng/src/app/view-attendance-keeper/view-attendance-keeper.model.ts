/** Tương ứng với ArSupervisorDto.java (1 dòng trong danh sách nhân viên phân quyền chấm công bên trái). */
export interface ArSupervisorDto {
  personId: string;
  empId: string | null;
  empName: string | null;
  deptName: string | null;
  activity: number;
  orderno: number | null;
  modifyYn: number;
}

/** Payload gửi lên POST .../api/arSupervisor/save. */
export interface ArSupervisorSavePayload {
  personId: string;
  orderno: number | null;
  modifyYn: number;
  activity: number;
}

/** Tương ứng với 1 dòng trả về của GET .../api/arSupervisor/departments (toàn bộ phòng ban - khác
 *  endpoint authorized-departments vốn chỉ trả phòng ban ĐÃ được phân quyền cho admin đang đăng nhập,
 *  xem ArSupervisorMapper.xml#getDepartmentTree so với #getAuthorizedDepartments). */
export interface DeptTreeNode {
  id: string;
  parent: string;
  text: string;
}

/** Response chung của API save/delete/saveDepartments (ArSupervisorController trả success/message hoặc error). */
export interface ArSupervisorActionResponse {
  success: boolean;
  message?: string;
  error?: string;
}
