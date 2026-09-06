/** Tương ứng với HrPunishment.java (danh sách chính, đầy đủ field cho form thêm/sửa) - đã có đủ field
 *  cần cho form sửa, không cần gọi thêm GET /api/punishment/{punishNo} như bản gốc. Không có field nào
 *  được BE resolve tên qua GET_GLOBAL_NAME (xem HrPunishmentMapper.xml) nên giữ nguyên text input như
 *  bản gốc, không đổi sang nz-select. */
export interface HrPunishmentDto {
  punishNo: number;
  personId: string;
  punishDate: string | null;
  punishCode: string;
  punishReason: string;
  releaseDate: string | null;
  punishDepartment: string;
  punishScore: string;
  paycutStartDate: string | null;
  paycutEndDate: string | null;
  personnelCardInquiry: string;
  faultTypeCode: string;
  remarks: string;
  empId: string;
  localName: string;
  deptName: string;
}

/** Payload gửi lên POST /api/punishment/save - punishNo null nghĩa là thêm mới (xem
 *  HrEmpinfoController.savePunishment). Mapper update() có cập nhật PERSON_ID (xem
 *  HrPunishmentMapper.xml) nên form cho đổi nhân viên cả khi sửa. */
export interface PunishmentSavePayload {
  punishNo: number | null;
  personId: string;
  punishDate: string | null;
  punishCode: string;
  punishReason: string;
  releaseDate: string | null;
  punishDepartment: string;
  punishScore: string;
  paycutStartDate: string | null;
  paycutEndDate: string | null;
  personnelCardInquiry: string;
  faultTypeCode: string;
  remarks: string;
}

export interface PunishmentSearchParams {
  empId: string;
  localName: string;
  punishCode: string;
}

/** Tương ứng với response GET /hrm/empinfo/api/employee/search (EmployeeSearchResponse.java). */
export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}
