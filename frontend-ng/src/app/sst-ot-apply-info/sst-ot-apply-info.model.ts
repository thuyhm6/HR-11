/** Tương ứng với các field của EssPersonalInfoDto.java dùng cho card "Thông tin nhân viên"
 *  (fragments/essEmpInfoCard.html gốc) + personId/empId (cần để gọi API duyệt/lưu đơn). */
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

/** Map thô trả về từ GET /ess/infoApply/api/otDateInfo (resultType="map" - giữ nguyên tên cột hoa
 *  như SQL, đúng bản gốc). */
export interface OtDateInfoMap {
  SHIFT_NAME?: string;
  SHIFT_START_TIME?: string;
  SHIFT_END_TIME?: string;
  INDOOR_TIME?: string;
  OUTDOOR_TIME?: string;
  OT_TYPE_CODE?: string | number;
  OT_TYPE_NAME?: string;
  OT_TOTAIL_MONTH?: string | number;
  OT_TOTAIL?: string | number;
  WEEKDAY_OT_TOTAIL?: string | number;
  OT_LIMIT?: string | number;
  OT_LIMIT_100?: string | number;
}

/** Map thô trả về từ GET /ess/infoApply/api/otDuration. */
export interface OtDurationMap {
  OT_LENGTH?: string | number;
}

/** Tương ứng với các field của SyAffirmEmailDto.java mà trang này dùng (danh sách người phê duyệt) -
 *  giống hệt ApproverInfo ở sst-apply-attendance.model.ts (cùng API /leaveApply/approvers). */
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
