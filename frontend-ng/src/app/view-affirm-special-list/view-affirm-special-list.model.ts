/** Tương ứng AffirmSpecialTypeDto.java - 1 loại phê duyệt = 1 cột động trên bảng. */
export interface AffirmSpecialType {
  codeNo: string;
  content: string;
}

/** Tương ứng AffirmSpecialDetailDto.java - 1 người duyệt ở 1 cấp của 1 ô (đối tượng x loại). */
export interface AffirmSpecialDetail {
  affirmObject: string;
  affirmTypeId: string;
  affirmLevel: number;
  affirmorId: string;
  empId: string;
  localName: string;
  deptName: string;
}

/** Tương ứng AffirmSpecialDto.java - objectType: E = nhân viên, D = phòng ban. */
export interface AffirmSpecialRow {
  affirmObject: string;
  objectCode: string;
  objectName: string;
  objectType: 'E' | 'D';
  details: AffirmSpecialDetail[];
}

/** Tương ứng AffirmSpecialSaveDto.java - thứ tự affirmorIds = cấp duyệt 1, 2, 3... */
export interface AffirmSpecialSavePayload {
  affirmTypeNos: string[];
  affirmorIds: string[];
  deptNos: string[];
  personIds: string[];
}

export interface AffirmSpecialActionResult {
  success: boolean;
  message: string;
}

/** Tương ứng response GET /hrm/empinfo/api/employee/search (EmployeeSearchResponse.java). */
export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}

/** Ô đang chọn trên bảng - đích của nút Sửa/Xóa. */
export interface AffirmSpecialCell {
  row: AffirmSpecialRow;
  type: AffirmSpecialType;
}
