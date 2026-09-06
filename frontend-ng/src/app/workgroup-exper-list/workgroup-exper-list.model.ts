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

/** Tương ứng với các field ArShiftGroupManagementDto.java mà GET /ess/workgroup/api/workGroup/myList
 *  trả về. Chú ý: query ESS (selectByPersonId trong ArShiftGroupManagementMapper.xml) KHÔNG resolve
 *  SHIFT_NAME nên shiftName luôn null - phải tự map SHIFT_NO -> tên hiển thị từ danh sách ca làm
 *  (xem shiftName() trong component), giữ đúng hành vi bản gốc (_wg_shiftMap trong DataTables). */
export interface WorkGroupHistoryDto {
  pkNo: number;
  startDate: string;
  shiftNo: string;
  shiftName: string | null;
  remark: string;
}

export interface WorkGroupSearchParams {
  shiftNo: string;
  fromDate: string;
  toDate: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
