/**
 * Loại quy trình trong ESS_LEAVE_APPLY_PARAM.TYPE:
 * - 'pa': Quy trình phê duyệt khác (/sys/hrmAffirm/viewHrmAffirmList)
 * - 'ar': Quy trình phê duyệt chấm công (/sys/arAffirm/viewArAffirmList) - có thêm khoảng độ dài đơn.
 */
export type AffirmKind = 'pa' | 'ar';

/** Q = tất cả, G = quản lý, O = khác (giá trị cột EMP_TYPE bản gốc). */
export type HrmAffirmEmpType = 'Q' | 'G' | 'O';

/** Tương ứng HrmAffirmDto.java / ArAffirmDto.java - 1 dòng ESS_LEAVE_APPLY_PARAM. */
export interface HrmAffirmRow {
  applyParamNo: number;
  applyType: string;
  applyName: string;
  empType: HrmAffirmEmpType;
  /** Mã vai trò hoặc 'Q' = tất cả. */
  dutyNo: string;
  dutyName: string | null;
  affirmLevel: number;
  lowLevel: number;
  lowLevelName: string | null;
  highLevel: number;
  highLevelName: string | null;
  /** Chỉ có ở 'ar': khoảng độ dài (fromOffset, toOffset]. */
  fromOffset?: number;
  toOffset?: number;
}

export interface HrmAffirmPayload {
  applyParamNo: number | null;
  applyType: string;
  empType: HrmAffirmEmpType;
  dutyNo: string;
  affirmLevel: number;
  lowLevel: number;
  highLevel: number;
  fromOffset?: number;
  toOffset?: number;
}

export interface HrmAffirmActionResult {
  success: boolean;
  message: string;
}

/** 1 lựa chọn cấp duyệt (gộp các vai trò cùng cấp trong SY_AFFIRM_LEVEL_SETUP). */
export interface HrmAffirmLevelOption {
  level: number;
  label: string;
}
