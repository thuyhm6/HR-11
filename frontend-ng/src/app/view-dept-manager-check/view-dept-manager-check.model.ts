/** 1 dòng trả về từ GET /org/api/compose/manager-check (OrgComposeController#getDeptManagerCheckList) -
 *  backend trả thẳng Map<String,Object> (resultType="map" trong OrgInfoMapper.xml) nên giữ nguyên đúng
 *  các key viết hoa như SQL alias, không đổi thành camelCase để khỏi lệch dữ liệu thực tế trả về. */
export interface DeptManagerCheckRow {
  DEPTNO: string;
  ORG_NAME_LOCAL: string | null;
  DEPT_LEVEL: number | null;
  MANAGER_EMP_ID: string | null;
  MANAGER_NAME: string | null;
  IS_PART_TIME: string | null;
  POSITION_NO: string | null;
  POSITION_NAME: string | null;
  POST_GRADE_NO: string | null;
  POST_GRADE_NAME: string | null;
  VACANCY: number | string | null;
}

/** Payload gửi lên POST /org/api/compose/updateManager - đúng field mà
 *  OrgComposeController#updateOrgManager đọc. */
export interface UpdateManagerPayload {
  resumeNo: string;
  deptNo: string;
  managerEmpId: string;
  isPartTime: string;
}

/** Tương ứng với response GET /hrm/empinfo/api/employee/search - dùng chung 1 API tìm nhân viên có sẵn
 *  của toàn hệ thống (giống AddressInfoService/WorkExperienceInfoService/... đã khai báo interface này
 *  riêng ở từng trang theo đúng convention hiện có, không có module dùng chung). */
export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}
