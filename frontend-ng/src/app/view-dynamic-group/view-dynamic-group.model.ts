/** Tương ứng với ArEmpGroupDto.java (bảng AR_EMP_GROUP join HR_EMPLOYEE, GROUP_NO cố định
 *  '80000084' - nhóm nhân viên đặc biệt). */
export interface ArEmpGroupDto {
  personId: string;
  groupNo: string;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  activity: number | null;
  orderno: number | null;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}

/** Payload gửi lên POST /ar/attendanceSettings/api/dynamicGroup/save - BE tự ép GROUP_NO =
 *  '80000084' (xem ArEmpGroupServiceImpl.save). */
export interface ArEmpGroupSavePayload {
  personId: string;
  groupNo: string;
  orderno: number | null;
  activity: number;
}
