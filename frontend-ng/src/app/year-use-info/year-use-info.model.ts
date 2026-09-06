/** Tương ứng với các field của EssPersonalInfoDto.java dùng cho card "Thông tin nhân viên"
 *  (fragments/essEmpInfoCard.html gốc) - giống hệt EssBasicInfoDto ở apply-attendance-info-list.model.ts. */
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

/** Tương ứng với các field của YearUseVacationDto.java mà GET /api/yearUseInfo/vacationRows trả về.
 *  Lưu ý: cột "Tổng phép năm" hiển thị field `total` (KHÔNG phải `totVacCnt`) - đúng yuifRenderVacTable() bản gốc. */
export interface YearUseVacationDto {
  strtDate: string;
  endDate: string;
  totVacCnt: string;
  addVac: string;
  lastYearVac: string;
  total: string;
  useVac: string;
  affirmUseVac: string;
  remainVac: string;
}

/** Tương ứng với các field của YearUseLeaveUsageDto.java mà GET /api/yearUseInfo/leaveUsage trả về. */
export interface YearUseLeaveUsageDto {
  applyNo: string;
  leaveFromDate: string;
  leaveFromTime: string;
  leaveToDate: string;
  leaveToTime: string;
  applyLength: string;
  affirmFlag: string;
  affirmFlagName: string;
  confirmFlag: string;
  confirmFlagName: string;
}
