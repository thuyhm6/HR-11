/** Tương ứng với response GET /sys/api/code/tree|list (SyCodeDto.java - SyCode + tên đa ngôn ngữ). */
export interface SyCodeDto {
  codeNo: string;
  parentCodeNo: string | null;
  depth: number | null;
  description: string | null;
  orderNo: number | null;
  activity: string | null;
  remark: string | null;
  groupCode: string | null;
  codeId: string | null;
  codeName: string | null;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
}

/** Payload gửi lên POST /sys/api/code/save - codeNo rỗng nghĩa là thêm mới (xem SyCodeServiceImpl.saveCode). */
export interface CodeSavePayload {
  codeNo: string | null;
  parentCodeNo: string | null;
  nameVi: string;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  orderNo: number | null;
  description: string | null;
  activity: string;
}

export interface CodeActionResult {
  success: boolean;
  message: string;
}
