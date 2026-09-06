import { SyCodeDto } from '../view-code-manage/view-code-manage.model';

export type { CompanyOption } from '../view-menu-param-list/view-menu-param-list.model';

/** Tương ứng với response GET /sys/api/code_param/list (SyCodeParamDto.java - SyCodeDto + trạng thái
 *  gán cho 1 công ty cụ thể). Kế thừa SyCodeDto (đã có ở ViewCodeManageComponent) thay vì khai báo lại
 *  toàn bộ field code. Lưu ý paramActivity là String ('1'/'0', khác paramActivity kiểu Integer của
 *  SyMenuParamDto) vì kế thừa trực tiếp kiểu ACTIVITY của SY_CODE. */
export interface SyCodeParamDto extends SyCodeDto {
  assigned: boolean;
  paramNo: string | null;
  paramOrderNo: number | null;
  paramActivity: string | null;
}

/** Payload chung cho POST /sys/api/code_param/save, /update và /delete - SyCodeParamController nhận
 *  @RequestBody SyCodeParamDto nhưng field "activity"/"orderNo" ở đây map vào field kế thừa từ SyCode
 *  (không phải paramActivity/paramOrderNo) - đúng theo cách bản gốc gửi lên (xem SyCodeParamServiceImpl:
 *  save() đọc dto.getActivity() cho trạng thái nhưng đọc dto.getParamOrderNo() cho thứ tự nên "Lưu"
 *  hàng loạt luôn ghi orderNo=0 - giữ nguyên hành vi gốc; chỉ update() đọc đúng dto.getOrderNo() nên
 *  modal sửa từng dòng mới chỉnh được thứ tự thật). */
export interface CodeParamPayload {
  cpnyId: string;
  codeNo: string;
  activity: string;
  orderNo: number;
}

export interface CodeParamActionResult {
  success: boolean;
  message: string;
}
