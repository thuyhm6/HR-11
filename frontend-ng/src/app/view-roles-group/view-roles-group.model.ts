/** Tương ứng với SyRoleRelation.java (bảng SY_ROLE_RELATION - liên kết role với menu và 4 quyền
 *  CRUD). Trang gốc luôn gửi cả 4 quyền = '1' khi tick chọn menu (không có UI tách riêng từng quyền). */
export interface SyRoleRelation {
  menuNo: string;
  selectr: string;
  insertr: string;
  updater: string;
  deleter: string;
}

/** Tương ứng với response GET /sys/api/role/list|detail (SyRoleDto.java - SyRole + tên đa ngôn ngữ +
 *  danh sách quyền menu). sysType là String ('0' = Hub, '1' = Partner) theo đúng kiểu field kế thừa từ
 *  SyRole.java (khác với JS gốc dùng parseInt/so sánh số - xem giải thích ở ViewRolesGroupComponent). */
export interface SyRoleDto {
  roleNo: string;
  roleId: string;
  cpnyId: string | null;
  orderNo: number | null;
  activity: number | null;
  sysType: string | null;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  roleRelations?: SyRoleRelation[];
}

/** Payload gửi lên POST /sys/api/role/save - roleNo rỗng nghĩa là thêm mới (roleId cũng tự sinh trùng
 *  roleNo ở backend, xem SyRoleServiceImpl.save). */
export interface RoleSavePayload {
  roleNo: string | null;
  cpnyId: string | null;
  nameVi: string;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  sysType: string;
  orderNo: number;
  activity: number;
}

export interface RoleRelationsPayload {
  roleNo: string;
  roleRelations: SyRoleRelation[];
}

export interface RoleActionResult {
  success: boolean;
  message: string;
}
