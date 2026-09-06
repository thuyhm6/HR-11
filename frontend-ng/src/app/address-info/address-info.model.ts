/** Tương ứng với HrAddressMatters.java (danh sách chính, đầy đủ field cho form thêm/sửa) - đã có đủ
 *  field cần cho form sửa, không cần gọi thêm GET /api/address/{addressNo} như bản gốc. */
export interface HrAddressMattersDto {
  addressNo: number;
  personId: string;
  addressType: string;
  addressTypeName: string;
  effectiveStartDate: string | null;
  addressContent: string;
  nationality: string;
  nationalityName: string;
  empId: string;
  localName: string;
  deptName: string;
}

/** Payload gửi lên POST /api/address/save - addressNo null nghĩa là thêm mới (xem
 *  HrEmpinfoController.saveAddress). Mapper update() có cập nhật PERSON_ID (xem
 *  HrAddressMattersMapper.xml) nên form cho đổi nhân viên cả khi sửa. */
export interface AddressSavePayload {
  addressNo: number | null;
  personId: string;
  addressType: string;
  effectiveStartDate: string | null;
  addressContent: string;
  nationality: string;
}

export interface AddressSearchParams {
  empId: string;
  localName: string;
  addressContent: string;
}

/** Tương ứng với response GET /hrm/empinfo/api/employee/search (EmployeeSearchResponse.java). */
export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
