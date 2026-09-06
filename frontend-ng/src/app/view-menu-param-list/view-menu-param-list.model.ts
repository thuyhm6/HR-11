import { SyMenuDto } from '../view-menu-list/view-menu-list.model';

/** Tương ứng với response GET /sys/api/company/list (HrCompanyDto.java - chỉ lấy field cần cho combo). */
export interface CompanyOption {
  cpnyId: string;
  nameVi: string | null;
}

/** Tương ứng với response GET /sys/api/menu_param/list (SyMenuParamDto.java - SyMenuDto + trạng thái
 *  gán cho 1 công ty cụ thể). Kế thừa SyMenuDto (đã có ở ViewMenuListComponent) thay vì khai báo lại
 *  toàn bộ field menu. */
export interface SyMenuParamDto extends SyMenuDto {
  paramNo: string | null;
  cpnyId: string | null;
  isCanBeBuild: string | null;
  paramOrderNo: number | null;
  paramActivity: number | null;
  assigned: boolean;
}

/** Payload chung cho POST /sys/api/menu_param/save và /delete (SyMenuParamController chỉ đọc cpnyId +
 *  menuNo khi xóa, đọc thêm paramOrderNo/paramActivity/isCanBeBuild khi lưu). */
export interface MenuParamPayload {
  cpnyId: string;
  menuNo: string;
  paramActivity: number;
  paramOrderNo: number;
  isCanBeBuild?: string;
}

export interface MenuParamActionResult {
  success: boolean;
  message: string;
}
