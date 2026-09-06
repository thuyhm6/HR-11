import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';

export type { AuthDeptNode, CodeItem, EmployeeSearchDto };

/** Tương ứng với PaEmpAccountDto.java (bảng PA_EMP_ACCOUNT, join HR_EMPLOYEE/HR_DEPARTMENT hiển thị).
 *  Các mốc ngày (dateStarted/createDate/updateDate) đều trả về 'YYYY-MM-DD' (xem PaEmpAccountMapper.xml -
 *  TO_CHAR(..., 'YYYY-MM-DD')), thống nhất giữa API danh sách và API chi tiết. */
export interface PaEmpAccountDto {
  paEmpAccountNo: number;
  personId: string | null;
  empId: string | null;
  localName: string | null;
  deptName: string | null;
  postGradeName: string | null;
  dateStarted: string | null;
  accountType: number | null;
  accountTypeName: string | null;
  accountAddress: string | null;
  accountNo: string | null;
  accountName: string | null;
  securityNo: string | null;
  fundNo: string | null;
  securityPayDate: string | null;
  fundPayDate: string | null;
  taxNo: string | null;
  activity: number | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
}

/** Tham số GET /pa/workManagement/api/empAccount/list - DataTablesRequest kiểu cũ (draw/start/length). */
export interface PaEmpAccountSearchParams {
  empSearch: string;
  deptNos: string;
  empOfficeSearch: string | null;
  bankSearch: string | null;
  fromDateStarted: string | null;
  toDateStarted: string | null;
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

/** Payload gửi lên POST /pa/workManagement/api/empAccount/save - paEmpAccountNo null nghĩa là thêm mới. */
export interface PaEmpAccountSavePayload {
  paEmpAccountNo: number | null;
  personId: string;
  accountType: number | null;
  accountNo: string | null;
  accountAddress: string | null;
  accountName: string | null;
  securityNo: string | null;
  securityPayDate: string | null;
  fundNo: string | null;
  fundPayDate: string | null;
  taxNo: string | null;
  activity: number;
}
