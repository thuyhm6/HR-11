/** Tương ứng với EduSystemManagerDto.java (bảng EDU_SYSTEM_MANAGER). */
export interface EduSystemManagerRow {
  sysmanaNo: string;
  trainDiffCode: string | null;
  trainDiffCodeName: string | null;
  trainTypeCode: string | null;
  trainTypeCodeName: string | null;
  trainTypeNo: string | null;
  remark: string | null;
}

/** Payload POST /edu/traineducation/api/systemManager/save - sysmanaNo null = thêm mới. */
export interface EduSystemManagerSavePayload {
  sysmanaNo: string | null;
  trainDiffCode: string | null;
  trainTypeCode: string | null;
  remark: string;
}

export interface EduSystemManagerActionResult {
  success: boolean;
  message: string;
}

/** Mã từ API dùng chung /sys/api/getCode/list (SyCodeDto). */
export interface EduCodeItem {
  codeNo: string;
  codeName: string;
}
