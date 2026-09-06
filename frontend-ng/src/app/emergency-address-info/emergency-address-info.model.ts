/** Tương ứng với HrEmergencyAddress.java (danh sách chính, đầy đủ field cho form thêm/sửa) - đã có đủ
 *  field cần cho form sửa, không cần gọi thêm GET /api/emergency-address/{emergencyNo} như bản gốc. */
export interface HrEmergencyAddressDto {
  emergencyNo: number;
  personId: string;
  emerName: string;
  emerTypeCode: string;
  emerTypeName: string;
  emerPhone: string;
  emerCellphone: string;
  emerWorkPhone: string;
  emerPhoneSecond: string;
  emerEmail: string;
  emerAddress: string;
  nationality: string;
  mainContactAddress: string;
  mainLiaisonOffice: string;
  isEmergencyAddress: string;
  empId: string;
  localName: string;
  deptName: string;
}

/** Payload gửi lên POST /api/emergency-address/save - emergencyNo null nghĩa là thêm mới (xem
 *  HrEmpinfoController.saveEmergencyAddress). Khác WorkExperienceInfo: mapper update() ở đây có cập
 *  nhật PERSON_ID (xem HrEmergencyAddressMapper.xml) nên form cho đổi nhân viên cả khi sửa. */
export interface EmergencyAddressSavePayload {
  emergencyNo: number | null;
  personId: string;
  emerName: string;
  emerTypeCode: string;
  emerPhone: string;
  emerCellphone: string;
  emerWorkPhone: string;
  emerPhoneSecond: string;
  emerEmail: string;
  emerAddress: string;
  nationality: string;
  mainContactAddress: string;
  mainLiaisonOffice: string;
  isEmergencyAddress: string;
}

export interface EmergencyAddressSearchParams {
  empId: string;
  localName: string;
  emerName: string;
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
