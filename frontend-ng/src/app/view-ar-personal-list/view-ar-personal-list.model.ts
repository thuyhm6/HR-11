/** Tương ứng với ArPersonalListDto.java (chỉ phần dùng cho items API - header cột động). */
export interface ArPersonalListItem {
  itemId: string;
  itemName: string;
}

/** Tương ứng với response GET .../summary - List<Map<String,Object>> phẳng, key là tên cột Oracle
 *  uppercase. Cột cố định: PERSON_ID, EMPID, LOCAL_NAME, DEPT_NAME, POSITION_NAME, EMP_TYPE_CODE,
 *  NORMAL_WORK, LATE_EARLY_GO_TOTAL. Cột động: key = ArPersonalListItem.itemId. */
export type ArPersonalListSummaryRow = Record<string, string | number | null>;

/** Tương ứng với ArPersonalListDetailDto.java (chỉ phần dữ liệu trả về của detail API). */
export interface ArPersonalListDetailRow {
  pkNo: string;
  personId: string;
  empId: string;
  localName: string;
  shiftNo: string;
  shiftName: string;
  arDateStr: string;
  itemNo: string;
  itemName: string;
  fromTimeStr: string;
  toTimeStr: string;
  quantity: string;
}

export interface ArPersonalListSearchParams {
  keyword: string;
  deptNos: string;
  empTypeCode: string;
  startDate: string;
  endDate: string;
  itemGroup: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
