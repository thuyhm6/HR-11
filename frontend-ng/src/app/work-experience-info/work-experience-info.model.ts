/** Tương ứng với HrWorkExperience.java (danh sách chính + payload thêm/sửa) - wx.* nên đã có đủ field
 *  cần cho form sửa, không cần gọi thêm GET /api/work-experience/{workExpNo} như bản gốc. */
export interface HrWorkExperienceDto {
  workExpNo: number;
  personId: string;
  empId: string;
  localName: string;
  cpnyName: string;
  deptName: string;
  position: string;
  startDate: string;
  endDate: string;
  duty: string;
  payYear: string;
  resignReason: string;
  remark: string;
}

/** Payload gửi lên POST /api/work-experience/save - workExpNo null nghĩa là thêm mới (xem
 *  HrEmpinfoController.saveWorkExperience). personId chỉ được backend ghi nhận khi thêm mới - mapper
 *  update() không cập nhật PERSON_ID (xem HrWorkExperienceMapper.xml), nên UI chỉ cho đổi nhân viên
 *  khi thêm mới. */
export interface WorkExperienceSavePayload {
  workExpNo: number | null;
  personId: string;
  cpnyName: string;
  deptName: string;
  position: string;
  startDate: string;
  endDate: string;
  duty: string;
  payYear: string;
  resignReason: string;
  remark: string;
}

export interface WorkExperienceSearchParams {
  empId: string;
  localName: string;
  companyName: string;
}

/** Tương ứng với response GET /hrm/empinfo/api/employee/search (EmployeeSearchResponse.java). */
export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}
