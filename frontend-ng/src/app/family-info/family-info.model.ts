/** Tương ứng với HrFamily.java (danh sách chính, đầy đủ field cho form thêm/sửa) - đã có đủ field cần
 *  cho form sửa, không cần gọi thêm GET /api/family/{familyNo} như bản gốc. Không có field nationality
 *  dù model/SELECT có - mapper insert()/update() không ghi cột này (xem HrFamilyMapper.xml) nên bản
 *  gốc cũng không có field này trên form. */
export interface HrFamilyDto {
  familyNo: number;
  personId: string;
  famTypeCode: string;
  famTypeName: string;
  famName: string;
  famBorndate: string | null;
  famIdcard: string;
  famPhone: string;
  famCompanyName: string;
  liveYn: string;
  emergencyContactYn: string;
  famAddress: string;
  taxYn: string;
  gender: string;
  genderName: string;
  famEmail: string;
  ocupation: string;
  remarks: string;
  empId: string;
  localName: string;
  deptName: string;
}

/** Payload gửi lên POST /api/family/save - familyNo null nghĩa là thêm mới (xem
 *  HrEmpinfoController.saveFamily). Mapper update() có cập nhật PERSON_ID (xem HrFamilyMapper.xml)
 *  nên form cho đổi nhân viên cả khi sửa. */
export interface FamilySavePayload {
  familyNo: number | null;
  personId: string;
  famTypeCode: string;
  famName: string;
  famBorndate: string | null;
  famIdcard: string;
  famPhone: string;
  famCompanyName: string;
  liveYn: string;
  emergencyContactYn: string;
  famAddress: string;
  taxYn: string;
  gender: string | null;
  famEmail: string;
  ocupation: string;
  remarks: string;
}

export interface FamilySearchParams {
  empId: string;
  localName: string;
  famName: string;
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
