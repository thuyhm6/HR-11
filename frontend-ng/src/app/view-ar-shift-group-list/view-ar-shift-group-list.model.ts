/** Tương ứng với ArShiftGroupManagementDto.java (1 dòng lịch sử thay đổi ca của 1 nhân viên - bảng
 *  AR_SHIFTGROUP_MANAGEMENT join HR_EMPLOYEE). Tên bảng có chữ "GROUP" nhưng thực chất không phải nhóm
 *  nhiều nhân viên - mỗi dòng là 1 lần đổi ca của riêng 1 người (personId + shiftNo + startDate). */
export interface ArShiftGroupManagementDto {
  pkNo: number;
  personId: string;
  empId: string;
  localName: string;
  beforShiftNo: string | null;
  beforShiftName: string | null;
  shiftNo: string | null;
  shiftName: string | null;
  startDate: string | null;
  remark: string | null;
}

/** Payload gửi lên POST /ess/deptEmpAtt/api/shiftGroup/save - giữ nguyên tên field VIẾT HOA như bản
 *  Thymeleaf gốc vì backend đọc trực tiếp từ Map<String,Object> theo đúng tên tham số của procedure
 *  AR_SHIFTGROUP_CHANGE_P (xem callChangeProcedure trong ArShiftGroupManagementMapper.xml -
 *  #{PERSON_ID}, #{SHIFT_NO}...), không map qua DTO camelCase như các API khác. */
export interface ArShiftGroupSavePayload {
  PERSON_ID: string;
  BEFOR_SHIFT_NO: string;
  SHIFT_NO: string;
  START_DATE: string;
  REMARK: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=400223 (danh sách Ca làm việc). */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** 1 dòng trong bảng - bọc thêm state chỉnh sửa inline (thay cho việc render trực tiếp &lt;select&gt;/
 *  &lt;input&gt; bằng jQuery như bản gốc). editShiftNo/editStartDate/editRemark là giá trị đang chỉnh sửa
 *  trên dòng, KHÔNG tự đồng bộ lại từ server sau khi lưu (giữ đúng hành vi "không reload bảng sau khi
 *  lưu 1 dòng để tránh mất chỉnh sửa dở của các dòng khác" ở bản gốc - xem shgSaveLine()). */
export interface ShiftGroupEditRow extends ArShiftGroupManagementDto {
  editShiftNo: string | null;
  editStartDate: Date | null;
  editRemark: string;
  saving: boolean;
}
