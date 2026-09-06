/** Tương ứng với EvsFormulaDto.java (com.ait.evs.manage.dto) - 1 dòng công thức đánh giá (bảng
 *  EVS_FORMULA). */
export interface EvsFormulaDto {
  seq: string;
  codeNo: string | null;
  codeName: string | null;
  formula: string | null;
  remark: string | null;
  activity: string | null;
  orderNo: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
}

/** Payload gửi lên POST /evs/manage/api/evsFormula/save - seq rỗng nghĩa là thêm mới. codeNo không đổi
 *  được khi sửa (BE không cập nhật CODE_NO ở UPDATE, xem EvsFormulaMapper.xml) - giữ nguyên hành vi
 *  readonly-khi-sửa của bản gốc. */
export interface EvsFormulaSavePayload {
  seq: string | null;
  codeNo: string;
  codeName: string;
  formula: string;
  remark: string;
  orderNo: string | null;
  activity: string;
}
