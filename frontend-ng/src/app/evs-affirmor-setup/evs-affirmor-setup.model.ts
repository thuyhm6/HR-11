/** Tương ứng với EvsAffirmorSetupDto.java (com.ait.evs.manage.dto) - 1 dòng đối tượng đánh giá
 *  (EVS_OBJECT) kèm thông tin người đánh giá lần 1-4 (EVS_AFFIRM, đọc qua PKG_EVS_PROCESS.
 *  GET_EVS_AFFIRM_INFO). Trang này chỉ hiển thị/sửa lần 1 và lần 2 (đúng bản Thymeleaf gốc - lần 3/4
 *  tồn tại trong DTO nhưng không có ô nhập trên giao diện). */
export interface EvsAffirmorSetupDto {
  seq: string;
  resumeSeq: string | null;
  personId: string | null;
  empid: string | null;
  localName: string | null;
  deptno: string | null;
  deptname: string | null;
  postGradeNo: string | null;
  postGradeName: string | null;
  dateStarted: string | null;
  listTypeName: string | null;
  evsGroupName: string | null;
  evsOccGroup: string | null;
  evsOccGroupName: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  localName1: string | null;
  postGradeName1: string | null;
  personId1: string | null;
  localName2: string | null;
  postGradeName2: string | null;
  personId2: string | null;
  localName3: string | null;
  postGradeName3: string | null;
  personId3: string | null;
  localName4: string | null;
  postGradeName4: string | null;
  personId4: string | null;
}

/** Tương ứng với response GET .../affirmorSetup/searchEmployee (EmployeeSearchResultMap trong
 *  EvsAffirmorSetupMapper.xml) - chỉ có 5 field, không đầy đủ như HrEmployeeDto. */
export interface EmployeeSearchResult {
  personId: string;
  empid: string;
  localName: string;
  deptname: string;
  postGradeName: string;
}

/** Payload gửi lên POST .../affirmorSetup/save (List) - chỉ gồm seq + personId lần 1/2 (lần 3/4 luôn
 *  null vì giao diện không có ô nhập, giữ đúng hành vi bản gốc). */
export interface AffirmorSavePayload {
  seq: string;
  personId1: string | null;
  personId2: string | null;
  personId3: string | null;
  personId4: string | null;
}

/** Payload gửi lên POST .../affirmorSetup/addObject. */
export interface AddObjectPayload {
  resumeSeq: string;
  personId: string;
  personId1: string | null;
  personId2: string | null;
  personId3: string | null;
  personId4: string | null;
}

export interface ApiResult {
  success: boolean;
  message?: string;
}

/** Tương ứng với response GET /evs/manage/api/resume/evsResumeList - dùng cho combo "Tên đánh giá". */
export interface EvsResumeOption {
  seq: string;
  resumeName: string | null;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách
 *  phẳng) - dùng chung endpoint mặc định của widget DeptTree.js ở bản Thymeleaf gốc (không override
 *  `api`, xem deptTree.js). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
