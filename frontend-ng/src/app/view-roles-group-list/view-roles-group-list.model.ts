/** Tương ứng với response GET /sys/api/role_group/list|detail (SyRoleGroupDto.java - SyRoleGroup + tên
 *  đa ngôn ngữ + danh sách roleNo đã gán). Khác với SyRoleDto (module view-roles-group): sysType và
 *  joinDefault ở đây là number (0/1) đúng theo kiểu Integer của SyRoleGroup.java, không phải String. */
export interface SyRoleGroupDto {
  roleGroupNo: string;
  roleGroupId: string;
  cpnyId: string | null;
  joinDefault: number | null;
  orderNo: number | null;
  activity: number | null;
  sysType: number | null;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  roleNos?: string[];
}

/** Payload gửi lên POST /sys/api/role_group/save - roleGroupNo rỗng nghĩa là thêm mới (roleGroupId cũng
 *  tự sinh trùng roleGroupNo ở backend, xem SyRoleGroupServiceImpl.save). */
export interface RoleGroupSavePayload {
  roleGroupNo: string | null;
  cpnyId: string | null;
  nameVi: string;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  sysType: number;
  orderNo: number;
  joinDefault: number;
  activity: number;
}

/** Payload gửi lên POST /sys/api/role_group/saveRelations - backend nhận trực tiếp SyRoleGroupDto nên
 *  chỉ cần 2 field roleGroupNo/roleNos (khác RoleRelationsPayload của module view-roles-group). */
export interface RoleGroupRelationsPayload {
  roleGroupNo: string;
  roleNos: string[];
}

export interface RoleGroupActionResult {
  success: boolean;
  message: string;
}
