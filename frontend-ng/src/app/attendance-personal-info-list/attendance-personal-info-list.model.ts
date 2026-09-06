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

/** Tương ứng với các field của EssAttendancePersonalInfoDto.java. Endpoint
 *  /api/attendancePersonal/items chỉ trả về itemNo/itemName (dùng cho dropdown "Phân loại"), endpoint
 *  /api/attendancePersonal/list trả về đầy đủ field. */
export interface EssAttendancePersonalInfoDto {
  pkNo: string;
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  itemNo: string;
  itemName: string;
  shiftNo: string;
  shiftName: string;
  arDateStr: string;
  indoorTime: string;
  outdoorTime: string;
  workHour: string;
}

export interface AttendancePersonalSearchParams {
  startDate: string;
  endDate: string;
  itemNoSearch: string;
}
