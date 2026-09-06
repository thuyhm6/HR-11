/** View-model gộp chung field của 4 DTO backend dùng cho 7 tab của trang này (EvsGradeDto, EvsParamDto,
 *  EvsParamObjectDto, EvsAffirmRuleDto - com.ait.evs.manage.dto) - JSON trả về/gửi lên qua HTTP nên gộp
 *  chung 1 interface superset là an toàn (field không dùng ở tab nào thì cứ bỏ trống), tránh phải khai
 *  báo lặp lại 4 interface gần như trùng nhau. Xem TAB_META trong evs-param-panel.component.ts để biết
 *  tab nào ứng với DTO/API nào. */
export interface EvsParamRow {
  seq: string;
  resumeSeq: string | null;
  paramType: string | null;
  evsType: string | null;
  evsTypeName: string | null;
  evsGrade: string | null;
  evsGradeName: string | null;
  isInclude: string | null;
  startScore: string | null;
  endScore: string | null;
  score: string | null;
  remark: string | null;
  codeNo: string | null;
  codeName: string | null;
  formula: string | null;
  formulaName: string | null;
  startStep: string | null;
  startStepName: string | null;
  evsScore: string | null;
  evsStep: string | null;
  evsStepName: string | null;
  evsGroup: string | null;
  evsGroupName: string | null;
  ruleId: string | null;
  ruleName: string | null;
  activity: string | null;
  orderNo: string | null;
  createDate: string | null;
  createdBy: string | null;
  updateDate: string | null;
  updatedBy: string | null;
}

/** Tương ứng với response GET /evs/manage/api/resume/evsResumeList - dùng cho combo "Tên đánh giá". */
export interface EvsResumeOption {
  seq: string;
  resumeName: string | null;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=..., GET .../evsFormula/formulaOptions
 *  và GET .../evsParam/groupOptions - đều cùng shape {codeNo, codeName} (xem selectFormulaOptions/
 *  selectGroupOptions alias SEQ AS CODE_NO trong mapper). `description` chỉ có ở combo mã hệ thống
 *  (không có ở formulaOptions/groupOptions) - dùng riêng cho combo "Cấp ĐG" (parentCodeNo=14015161, xem
 *  data-text-show="description" ở bản Thymeleaf gốc). */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description?: string;
  codeId?: string;
}
