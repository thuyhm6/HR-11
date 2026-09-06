/** Tương ứng với 1 dòng trả về của GET .../api/departmentManage/list (ArDepartmentManageDto.java) -
 *  các flag LOCK_*_FLAG là chuỗi '0'/'1' (giữ nguyên định dạng gốc để gửi thẳng lại khi lưu). */
export interface ArDepartmentManageDto {
  deptNo: string;
  dispDeptName: string;
  parentDeptNo: string;
  deptLevel: number;
  manageNo: number | null;
  lockDate: string;
  lockAttenAnnualFlag: string;
  lockAttenAnnualNightFlag: string;
  lockAttenFlag: string;
  lockAttenNightFlag: string;
  lockOtFlag: string;
  lockOtNightFlag: string;
  lockAttenExFlag: string;
  lockAttenExNightFlag: string;
  updatedBy: string | null;
  updateDate: string | null;
}

/** 8 cột khóa xin phép - dùng chung cho header cây bảng, toolbar mass-toggle và payload lưu. */
export type LockColumnKey =
  | 'lockAttenAnnualFlag'
  | 'lockAttenAnnualNightFlag'
  | 'lockAttenFlag'
  | 'lockAttenNightFlag'
  | 'lockOtFlag'
  | 'lockOtNightFlag'
  | 'lockAttenExFlag'
  | 'lockAttenExNightFlag';

/** 1 dòng phòng ban hiển thị trên bảng dạng cây (đã chuyển flag string '0'/'1' sang boolean cho
 *  checkbox, cộng thêm state hiển thị cây: level/hasChildren/modified). */
export interface DeptManageRow {
  deptNo: string;
  parentDeptNo: string;
  dispDeptName: string;
  level: number;
  hasChildren: boolean;
  lockAttenAnnualFlag: boolean;
  lockAttenAnnualNightFlag: boolean;
  lockAttenFlag: boolean;
  lockAttenNightFlag: boolean;
  lockOtFlag: boolean;
  lockOtNightFlag: boolean;
  lockAttenExFlag: boolean;
  lockAttenExNightFlag: boolean;
  updatedBy: string | null;
  updateDate: string | null;
  modified: boolean;
}

/** Payload gửi lên POST .../api/departmentManage/save - khớp ArDepartmentManage.java, chỉ gửi
 *  các dòng đã chỉnh sửa (isModified) để tiết kiệm, giống hệt hành vi bản gốc. */
export interface ArDepartmentManageSaveItem {
  deptNo: string;
  lockDate: string;
  lockAttenAnnualFlag: string;
  lockAttenAnnualNightFlag: string;
  lockAttenFlag: string;
  lockAttenNightFlag: string;
  lockOtFlag: string;
  lockOtNightFlag: string;
  lockAttenExFlag: string;
  lockAttenExNightFlag: string;
}

export interface ArDepartmentManageActionResponse {
  success: boolean;
  message?: string;
  error?: string;
}
