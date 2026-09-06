/** Tương ứng với các field của EssPersonalInfoDto.java dùng cho card "Thông tin nhân viên" (fragments/essEmpInfoCard.html gốc). */
export interface EssBasicInfoDto {
  empId: string;
  localName: string;
  deptName: string;
  headDepartment: string;
  postFamilyName: string;
  postGradeName: string;
  positionNoName: string;
  dateStarted: string;
}

/** Tương ứng với HrEducation.java (bảng HR_EDUCATION, các field trang này dùng). Ngày nhập học/tốt
 *  nghiệp là chuỗi MM/YYYY tự do (không phải LocalDate) - giữ nguyên như bản gốc. */
export interface HrEducation {
  educNo: number;
  degreeCode: string;
  degreeName: string;
  institutionName: string;
  subject: string;
  startDate: string;
  endDate: string;
  degreesCode: string;
  eduDegNum: string;
  remark: string;
}

/** Tương ứng với HrQualification.java (bảng HR_QUALIFICATION, các field trang này dùng). */
export interface HrQualification {
  qualNo: number;
  qualName: string;
  qualLevel: string;
  dateObtained: string;
  validityDate: string;
  qualCardNo: string;
  qualInstitute: string;
  qualGrade: string;
  qualRemark: string;
}

/** Tương ứng với HrReward.java (bảng HR_REWARD, chỉ đọc). */
export interface HrReward {
  rewardType: string;
  rewardDate: string;
  rewardCnpy: string;
  reward: string;
}

/** Payload gửi lên POST saveEducationApply (form fields, tương ứng HrEducationApplyDto.java). */
export interface EducationApplyPayload {
  degreeCode: string;
  institutionName?: string;
  startDate?: string;
  endDate?: string;
  subject?: string;
  degreesCode?: string;
  eduDegNum?: string;
  remark?: string;
  updateEducNo?: number;
}

/** Payload gửi lên POST saveQualificationApply (form fields, tương ứng HrQualificationApplyDto.java). */
export interface QualificationApplyPayload {
  qualName: string;
  qualLevel?: string;
  dateObtained?: string;
  validityDate?: string;
  qualCardNo?: string;
  qualInstitute?: string;
  qualGrade?: string;
  qualRemark?: string;
  updateQualNo?: number;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
