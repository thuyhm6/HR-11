/** Tương ứng với PaPayObjDto.java (bảng PA_PAY_OBJECT + join HR_EMPLOYEE/HR_DEPARTMENT hiển thị). */
export interface PaPayObjDto {
  payScheduleNo: string;
  empId: string;
  personId: string | null;
  deptNo: string | null;
  includeType: number;
  createType: number | null;
  activity: number | null;
  wageType: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  empName: string | null;
  deptName: string | null;
  empOffice: string | null;
}

/** Tương ứng với DataTablesRequest phía backend - GET /pa/workManagement/api/payObj (query params). */
export interface PaPayObjSearchParams {
  empSearch: string;
  payScheduleNo: string | null;
  includeType: string;
  empOffice: string | null;
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

/** Payload gửi lên POST /pa/workManagement/api/payObj/save khi thêm mới 1 bản ghi. */
export interface PaPayObjAddPayload {
  payScheduleNo: string;
  empId: string;
  includeType: number;
}

/** Payload cho POST .../saveList (cập nhật includeType hàng loạt) - chỉ cần key + includeType mới. */
export interface PaPayObjUpdatePayload {
  payScheduleNo: string;
  empId: string;
  includeType: number;
}

/** Payload cho DELETE .../deleteList - chỉ cần key composite. */
export interface PaPayObjDeleteKey {
  payScheduleNo: string;
  empId: string;
}

/** Item trong dropdown Kế hoạch trả lương - lấy lại từ GET /pa/workManagement/api/paySchedule. */
export interface PaPayScheduleOption {
  payScheduleNo: string;
  payDate: string | null;
  salaryDistinName: string | null;
}

/** Item trả về từ /sys/api/getCode/list (endpoint chung toàn hệ thống). */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Tương ứng với EmployeeSearchResponse.java (modal chọn nhân viên khi thêm mới). */
export interface EmployeeSearchDto {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  position: string;
  email: string;
  phone: string;
}
