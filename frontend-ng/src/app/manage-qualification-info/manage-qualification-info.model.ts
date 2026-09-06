/** Tương ứng với HrQualification.java (danh sách chính, đầy đủ field cho form thêm/sửa) - đã có đủ
 *  field cần cho form sửa, không cần gọi thêm GET /api/qualification/{qualNo} như bản gốc. */
export interface HrQualificationDto {
  qualNo: number;
  personId: string;
  qualName: string;
  dateObtained: string | null;
  qualCardNo: string;
  qualInstitute: string;
  validityDate: string | null;
  acquisitionModes: string;
  qualLevel: string;
  paymentAllowanceYN: string;
  qualRemark: string;
  qualGrade: string;
  /** QUAL_SUBMIT_DATE là cột VARCHAR (không phải LocalDate) - lưu nguyên chuỗi dạng YYYYMMDD như bản
   *  gốc, không parse/định dạng lại (xem HrQualification.java và HrQualificationMapper.xml). */
  qualSubmitDate: string;
  empId: string;
  localName: string;
  deptName: string;
}

/** Payload gửi lên POST /api/qualification/save - qualNo null nghĩa là thêm mới (xem
 *  HrEmpinfoController.saveQualification). */
export interface QualificationSavePayload {
  qualNo: number | null;
  personId: string;
  qualName: string;
  dateObtained: string | null;
  qualCardNo: string;
  qualInstitute: string;
  validityDate: string | null;
  acquisitionModes: string;
  qualLevel: string;
  paymentAllowanceYN: string;
  qualRemark: string;
  qualGrade: string;
  qualSubmitDate: string;
}

export interface QualificationSearchParams {
  empId: string;
  localName: string;
  qualName: string;
}

/** Tương ứng với response GET /hrm/empinfo/api/employee/search (EmployeeSearchResponse.java). */
export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}
