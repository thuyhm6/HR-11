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

/** Tương ứng với ManageEmpPositionInsideDto.java (Quyết định nhân sự). */
export interface InsideExperienceDto {
  personId: string;
  startDate: string;
  deptName: string;
  mainBusiness: string;
  postGrade: string;
  transCode: string;
}

/** Tương ứng với HrWorkExperience.java (bảng HR_WORK_EXPERIENCE, các field trang này dùng). */
export interface HrWorkExperience {
  workExpNo: number;
  personId: string;
  cpnyName: string;
  deptName: string;
  position: string;
  resignReason: string;
  witness: string;
  remark: string;
  startMonth: string;
  endMonth: string;
  startDate: string;
  endDate: string;
}

/** Payload gửi lên POST saveWorkExperienceApply (form fields, tương ứng HrWorkExperienceApplyDto.java). */
export interface WorkExperienceApplyPayload {
  cpnyName: string;
  deptName?: string;
  startMonth?: string;
  endMonth?: string;
  position?: string;
  resignReason?: string;
  witness?: string;
  remark?: string;
  updateWorkExperNo?: number;
}
