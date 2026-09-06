/** View-model gộp chung field của 2 DTO backend dùng cho 2 tab của trang này (EvsItemDto, EvsItemParamDto
 *  - com.ait.evs.manage.dto) - JSON trả về/gửi lên qua HTTP nên gộp chung 1 interface superset là an
 *  toàn (field không dùng ở tab nào thì cứ bỏ trống). Xem TAB_META trong evs-item-panel.component.ts. */
export interface EvsItemPanelRow {
  seq: string;
  resumeSeq: string | null;
  groupNo: string | null;
  groupName: string | null;
  itemCode: string | null;
  /** Tab "param" - mã chỉ tiêu join từ EVS_ITEM (đúng bằng itemCode khi join thành công, chỉ để hiển
   *  thị vì itemCode đã là FK) - xem selectList trong EvsItemParamMapper.xml. */
  itemCodeItem: string | null;
  itemName: string | null;
  itemNameKo: string | null;
  /** Tab "param" - REMARK join từ EVS_ITEM (chỉ đọc, không phải REMARK của chính EVS_ITEM_PARAM). */
  itemRemark: string | null;
  remark: string | null;
  remarkKo: string | null;
  evsGroup: string | null;
  evsGroupName: string | null;
  evsOccGroup: string | null;
  evsOccGroupName: string | null;
  itemScore: string | null;
  activity: string | null;
  orderNo: string | null;
  updateDate: string | null;
  updatedBy: string | null;
}

/** Tương ứng với response GET /evs/manage/api/resume/evsResumeList - dùng cho combo "Tên đánh giá". */
export interface EvsResumeOption {
  seq: string;
  resumeName: string | null;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... và GET .../evsParam/list -
 *  {codeNo, codeName} - dùng cho combo "Nhóm chỉ tiêu" (mã hệ thống) và "Nhóm nhân viên"/"Nhóm chức vụ"
 *  (EVS_PARAM paramType=GROUP/FAMILY, xem EvsParamPanelComponent - trang chị em cùng module). */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description?: string;
  codeId?: string;
}
