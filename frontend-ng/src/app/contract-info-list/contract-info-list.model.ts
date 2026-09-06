/** Tương ứng với HrContract.java (com.ait.hrm.contract.model) - danh sách + payload thêm/sửa. */
export interface HrContractDto {
  contractNo: string;
  personId: string;
  contractTypeCode: string | null;
  contractTypeName: string | null;
  startContractDate: string | null;
  endContractDate: string | null;
  remark: string | null;
  workTime: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  activity: string | null;
  workPosition: string | null;
  workContent: string | null;
  salary: number | null;
  deptNo: string | null;
  positionNo: string | null;
  postGradeNo: string | null;
  workHourType: string | null;
  totalPeriod: string | null;
  contractName: string | null;
  changeDate: string | null;
  contractType: string | null;
  totalPeriod08: string | null;
  empId: string;
  localName: string | null;
  position: string | null;
}

export interface ContractSearchParams {
  contractNo: string;
  empId: string;
  contractType: string;
  department: string;
  startDateFrom: string;
  startDateTo: string;
  endDateFrom: string;
  endDateTo: string;
  activity: string;
  workPosition: string;
  salaryFrom: string;
  salaryTo: string;
}

/** Payload gửi lên POST api/contract/add và api/contract/update - đúng shape HrContract.java.
 *  personId bắt buộc phải có (HrContractServiceImpl.validateContract() kiểm tra), nhưng bản Thymeleaf
 *  gốc chỉ gửi empId (id hiển thị, không phải PK) và KHÔNG có trường nào chọn/gửi personId - nút "Tìm"
 *  nhân viên trong modal Thêm mới gọi hàm contractOpenEmployeeSearchModal() không tồn tại (chỉ định
 *  nghĩa openEmployeeSearchModal()), nên tính năng Thêm mới/Cập nhật ở bản gốc chưa từng chạy được.
 *  Bản Angular này dùng modal chọn nhân viên (giống ViewTempEmpInfoListComponent) để lấy đúng personId
 *  khi Thêm mới; khi Sửa thì giữ nguyên personId đã tải về (không đổi nhân viên đứng tên hợp đồng). */
export interface ContractSavePayload {
  contractNo: string;
  personId: string;
  empId?: string;
  contractTypeCode: string;
  contractType: string;
  startContractDate: string;
  endContractDate: string;
  changeDate: string;
  deptNo: string;
  workPosition: string;
  positionNo: string;
  postGradeNo: string;
  salary: number | null;
  workTime: string;
  workHourType: string;
  totalPeriod: string;
  totalPeriod08: string;
  activity: string;
  workContent: string;
  remark: string;
}

/** Tương ứng với DataTablesRequest phía backend (com.ait.sy.sys.dto) - chỉ set draw/start/length/
 *  searchParams; order/columns bỏ trống để dùng đúng thứ tự mặc định "createDate desc" của backend. */
export interface DataTablesRequestPayload {
  draw: number;
  start: number;
  length: number;
  searchParams: Record<string, string>;
}

/** Tương ứng với DataTablesResponse<T> phía backend. */
export interface DataTablesResponse<T> {
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: T[];
  error?: string;
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
