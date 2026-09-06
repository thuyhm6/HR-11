/** Tương ứng với response GET /sys/api/menu/list (SyMenuDto.java - SyMenu + tên đa ngôn ngữ). */
export interface SyMenuDto {
  menuNo: string;
  menuParentNo: string | null;
  menuCode: string;
  menuImg: string | null;
  depth: number | null;
  menuUrl: string | null;
  orderNo: number | null;
  activity: number | null;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  parentMenuName: string | null;
}

/** Payload gửi lên POST /sys/api/menu/save - menuNo rỗng nghĩa là thêm mới (xem SyMenuServiceImpl.save). */
export interface MenuSavePayload {
  menuNo: string | null;
  menuParentNo: string | null;
  menuCode: string;
  menuImg: string | null;
  depth: number | null;
  menuUrl: string | null;
  orderNo: number | null;
  activity: number;
  nameVi: string;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
}

/** Response chung của save/delete (SyMenuController trả Map<String,Object> success/message). */
export interface MenuActionResult {
  success: boolean;
  message: string;
}
