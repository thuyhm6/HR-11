/** Tương ứng với response GET /sys/api/user/list|detail (SyUserDto.java - SyUser + tên NV/phòng ban +
 *  danh sách roleGroupNo đã gán). Không có field password (không trả về từ backend). */
export interface SyUserDto {
  userNo: string;
  personId: string | null;
  cpnyId: string | null;
  userName: string;
  userType: string | null;
  activity: number | null;
  empName: string | null;
  deptName: string | null;
  roleGroupNos?: string[];
}

/** Payload gửi lên POST /sys/api/user/saveRelations - backend nhận trực tiếp SyUserDto nên chỉ cần 2
 *  field userNo/roleGroupNos. */
export interface UserRelationsPayload {
  userNo: string;
  roleGroupNos: string[];
}

export interface UserActionResult {
  success: boolean;
  message: string;
}
