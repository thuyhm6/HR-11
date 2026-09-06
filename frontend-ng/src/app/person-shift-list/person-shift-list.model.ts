/** Tương ứng với các field của EssPersonalInfoDto.java dùng cho card "Thông tin nhân viên"
 *  (fragments/essEmpInfoCard.html gốc) - giống hệt EssBasicInfoDto ở qualification-info.model.ts. */
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

/** Tương ứng với PersonShiftDto.java mà GET /ess/workgroup/api/personShift/myList trả về. */
export interface PersonShiftDto {
  ddateStr: string;
  overTypeIdName: string;
  shiftName: string;
  dateType: string;
  dateName: string;
  shiftStartTime: string;
  shiftEndTime: string;
  indoorTime: string;
  outdoorTime: string;
  workHours: string;
}

export interface PersonShiftSearchParams {
  startDate: string;
  endDate: string;
}
