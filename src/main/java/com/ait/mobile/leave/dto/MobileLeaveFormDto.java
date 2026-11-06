package com.ait.mobile.leave.dto;

import com.ait.mobile.common.dto.MobileCodeDto;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Dữ liệu khởi tạo màn hình xin nghỉ: danh sách loại nghỉ + phép năm. */
@Data
@NoArgsConstructor
public class MobileLeaveFormDto {

    private List<MobileCodeDto> leaveTypes;
    private MobileVacationDto vacation;
    /** Mã loại "phép năm" - app hiện số phép còn lại khi chọn loại này. */
    private String annualLeaveCode;
}
