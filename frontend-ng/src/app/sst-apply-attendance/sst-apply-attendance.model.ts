/** Tương ứng với các field của EssPersonalInfoDto.java dùng cho card "Thông tin nhân viên"
 *  (fragments/essEmpInfoCard.html gốc) + personId (cần để gọi API duyệt/tính thời lượng). */
export interface EssBasicInfoDto {
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  headDepartment: string;
  postFamilyName: string;
  postGradeName: string;
  positionNoName: string;
  dateStarted: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Map thô trả về từ GET /ess/infoApplyAttendance/api/vacationInfo (resultType="map" - giữ nguyên
 *  tên cột hoa như SQL, đúng bản gốc saFormatVacInfo()). */
export interface VacationInfoMap {
  TOT_VAC_CNT?: string | number;
  YEAR_VAC_CNT?: string | number;
  LAST_YEAR_VAC?: string | number;
  ADD_VAC?: string | number;
  USE_VAC?: string | number;
  REMAIN_VAC?: string | number;
}

/** Map thô trả về từ GET /ess/infoApplyAttendance/api/leaveLength. */
export interface LeaveLengthMap {
  LEAVE_LENGTH?: string | number;
  DAY_HOUR?: string | number;
}

/** Tương ứng với các field của SyAffirmEmailDto.java mà trang này dùng (danh sách người phê duyệt). */
export interface ApproverInfo {
  affirmLevel: string;
  localName: string;
  empId: string;
  deptName: string;
  positionName: string;
  postionName: string;
}

export interface SaveResult {
  success: boolean;
  message?: string;
  error?: string;
}
