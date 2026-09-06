export interface LoginRequest {
  username: string;
  password: string;
  lang?: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  redirectUrl?: string;
  requirePasswordChange?: boolean;
  remainingAttempts?: number;
  timeUntilReset?: number;
}

export interface CurrentUser {
  authenticated: boolean;
  username?: string;
  personId?: string;
  employeeName?: string;
  deptName?: string;
  photoUrl?: string;
  requirePasswordChange?: boolean;
  /** User có menu thuộc bộ SYS_TYPE=0 (HR Management System) không - dùng để hiện/ẩn link tương ứng trên topbar. */
  hasSysTypeZeroMenus?: boolean;
}

/** Tương ứng với MenuDTO.java (menu phân cấp theo quyền user). */
export interface MenuItem {
  menuNo: string;
  menuParentNo: string;
  menuCode: string;
  menuName: string;
  menuImg: string | null;
  menuUrl: string | null;
  children: MenuItem[] | null;
}
