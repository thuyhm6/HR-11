package com.ait.disc.autoExcel.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * 1 báo cáo SQL tự xuất Excel - bảng SYS_SQL_MASTER (dữ liệu dùng chung với /disc/autoExcel bản JSP cũ).
 * Dùng cho danh sách, chi tiết và payload Thêm/Sửa. Độ dài validate theo độ dài cột thật trong DB.
 */
@Data
@NoArgsConstructor
public class AutoExcelMasterDto {
    /** Khóa chính (VARCHAR2(10)) - null khi thêm mới, backend tự sinh MAX + 1 như bản gốc. */
    private String sqlSeq;
    private String cpnyId;

    @NotBlank(message = "autoExcel.msg.chooseModule")
    @Size(max = 100, message = "autoExcel.msg.tooLong")
    private String pgmNm;

    @NotBlank(message = "autoExcel.msg.enterName")
    @Size(max = 100, message = "autoExcel.msg.tooLong")
    private String sqlNm;

    /** Nguồn SQL (bản gốc mặc định "手动生成" - tạo thủ công). */
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String sqlFromStmt;

    @NotBlank(message = "autoExcel.msg.enterOrder")
    @Pattern(regexp = "\\d{1,10}", message = "autoExcel.msg.invalidOrder")
    private String sqlOrderById;

    @Size(max = 500, message = "autoExcel.msg.tooLong")
    private String sqlDesc;

    /** Y = đang dùng, N = ngừng dùng. */
    @Pattern(regexp = "[YN]", message = "autoExcel.msg.saveFail")
    private String sqlStat;

    /** Y = báo cáo xuất theo template Excel riêng ở bản gốc (bản Angular xuất dạng bảng chung). */
    @Pattern(regexp = "[YN]", message = "autoExcel.msg.saveFail")
    private String isSpecial;

    /** Câu SQL (CLOB) - chỉ trả về cho người có quyền chỉnh sửa. */
    @NotBlank(message = "autoExcel.msg.enterSql")
    private String sqlStmt;

    /** DD/MM/YYYY HH24:MI */
    private String rgstDtime;
    private String updtDtime;
    private String updtUser;

    /** Chỉ có ở API chi tiết: tham số đang dùng (USE_YN = 'Y'), sắp theo SORT_CD. */
    private List<AutoExcelParamDto> params = new ArrayList<>();
}
