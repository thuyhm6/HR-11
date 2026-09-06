/** Tương ứng với HrEducation.java (danh sách chính, đầy đủ field cho form thêm/sửa) - đã có đủ field
 *  cần cho form sửa, không cần gọi thêm GET /api/education/{educNo} như bản gốc. startDate/endDate là
 *  String (định dạng YYYYMMDD) chứ không phải LocalDate - giữ nguyên input text như bản gốc. */
export interface HrEducationDto {
  educNo: number;
  personId: string;
  degreeCode: string;
  degreeName: string;
  finalDegreeWhether: string;
  degreesCode: string;
  institutionName: string;
  subject: string;
  startDate: string;
  endDate: string;
  schoolLength: string;
  thesisNameLocal: string;
  thesisNameEng: string;
  subjectSecond: string;
  eduDegNum: string;
  siteCountry: string;
  siteCountryName: string;
  remark: string;
  place: string;
  studyExperience: string;
  empId: string;
  localName: string;
  deptName: string;
}

/** Payload gửi lên POST /api/education/save - educNo null nghĩa là thêm mới (xem
 *  HrEmpinfoController.saveEducation). Mapper update() có cập nhật PERSON_ID (xem
 *  HrEducationMapper.xml) nên form cho đổi nhân viên cả khi sửa. */
export interface EducationSavePayload {
  educNo: number | null;
  personId: string;
  degreeCode: string;
  finalDegreeWhether: string;
  degreesCode: string;
  institutionName: string;
  subject: string;
  startDate: string;
  endDate: string;
  schoolLength: string;
  thesisNameLocal: string;
  thesisNameEng: string;
  subjectSecond: string;
  eduDegNum: string;
  siteCountry: string;
  remark: string;
  place: string;
  studyExperience: string;
}

export interface EducationSearchParams {
  empId: string;
  localName: string;
  institutionName: string;
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
