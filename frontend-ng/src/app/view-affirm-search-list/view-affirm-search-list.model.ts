/** Tương ứng các field của SyAffirmEmailDto.java trả về từ PKG_AFFIRM_EMAIL.GET_AFFIRMOR_LIST_IMPROVE
 *  (endpoint POST /ar/attendanceMintenance/api/leaveApply/approvers) mà trang này hiển thị. */
export interface AffirmLineItem {
  affirmLevel: string;
  affirmorId: string;
  empId: string;
  localName: string;
  deptName: string;
  positionNo: string;
  positionName: string;
  postionName: string;
}

export interface AffirmLineQuery {
  applyTypeNo: string;
  personId: string;
  applyTypeCode: string;
  applyLength: string;
}
