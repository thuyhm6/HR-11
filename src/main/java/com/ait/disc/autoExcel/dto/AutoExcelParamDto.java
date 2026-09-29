package com.ait.disc.autoExcel.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

/** 1 tham số #PARAM# của báo cáo - bảng SYS_PARAM_BY_SQL. */
@Data
@NoArgsConstructor
public class AutoExcelParamDto {
    private String sqlSeq;
    private String sqlParamNo;

    @NotBlank(message = "autoExcel.msg.saveFail")
    private String param;

    @Size(max = 500, message = "autoExcel.msg.tooLong")
    private String enSqlParamDesc;

    /** Bản gốc đặt tên cột là "CN" nhưng thực tế lưu mô tả tiếng Việt (tiêu đề cột ở trang chạy báo cáo cũ). */
    @Size(max = 500, message = "autoExcel.msg.tooLong")
    private String cnSqlParamDesc;

    /** Loại tham số = SY_CODE.DESCRIPTION thuộc danh mục 211026 (text, date, org, code...). */
    @Size(max = 20, message = "autoExcel.msg.tooLong")
    private String sqlParamTp;

    private String defaultVal;

    @Pattern(regexp = "\\d{0,10}", message = "autoExcel.msg.invalidOrder")
    private String sortCd;

    private String useYn;

    /**
     * true = tham số hệ thống tự điền từ phiên đăng nhập (interCpnyID, interLanguage, CPNY_ID, PERSON_ID, adminID...) -
     * trang chạy báo cáo ẩn đi và backend luôn ghi đè giá trị (không tính từ DB).
     */
    private boolean system;
}
