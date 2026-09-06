/** Tương ứng với OrgInfo.java (com.ait.org.orgManage.model) - 1 phòng ban trong cây tổ chức của 1 phiên
 *  bản thay đổi (ORG_RESUME_INFO). Chỉ khai báo các field được hiển thị/chỉnh sửa ở trang này (form
 *  thông tin tổ chức + cây tổ chức) - các field còn lại của OrgInfo.java (dateEnded, orgLevel, useYn,
 *  changeType, feeStandard, deptDistinguishStandard, orgNameKo, orgNameVi, ...) không dùng ở UI nên
 *  không khai báo, tránh field thừa không ai đọc. */
export interface OrgInfoDto {
  resumeNo: string | null;
  deptNo: string;
  parentDeptNo: string | null;
  orgNameEng: string | null;
  orgNameLocal: string | null;
  deptType: string | null;
  deptLevel: number | null;
  managerEmpId: string | null;
  dateCreated: string | null;
  isPartTime: string | null;
  costCenter: string | null;
  activity: number | null;
}

/** Tương ứng với OrgEmployee.java - chỉ khai báo đúng các field được render ở bảng danh sách nhân viên
 *  trang này (đúng các cột đã có ở DataTables bản gốc: localName/empId/dutyNo/postNo/empTypeCode/
 *  statusCode), OrgEmployee.java còn rất nhiều field khác (idCardNo, insuranceType, wageType, ...)
 *  không hiển thị ở trang này. */
export interface OrgEmployeeDto {
  empId: string;
  deptNo: string | null;
  localName: string | null;
  dutyNo: string | null;
  postNo: string | null;
  empTypeCode: string | null;
  statusCode: string | null;
}

/** Payload gửi lên POST /org/api/compose/transfer - đúng field mà
 *  OrgComposeController#transferEmployees đọc. */
export interface TransferEmployeesPayload {
  resumeNo: string;
  targetDeptNo: string;
  empIds: string[];
}

/** 1 dòng trong OrgCostCenter.java - chỉ dùng codeNo/codeName để đổ vào dropdown "Mã chi phí". */
export interface OrgCostCenterOption {
  codeNo: string;
  codeName: string | null;
}
