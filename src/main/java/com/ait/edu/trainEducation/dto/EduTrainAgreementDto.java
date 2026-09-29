package com.ait.edu.trainEducation.dto;

import com.ait.ess.empinfo.dto.EssFileDto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Hợp đồng đào tạo - bảng EDU_TRAIN_AGREEMENT. Dùng cho danh sách, payload lưu (agreeNo rỗng = thêm mới) và dòng import Excel.
 * Ngày dạng DD/MM/YYYY; các khoản phí giữ dạng chuỗi số giống bản gốc (bind VARCHAR, Oracle tự chuyển kiểu).
 */
@Data
@NoArgsConstructor
public class EduTrainAgreementDto {
    private static final String DATE = "^$|^\\d{2}/\\d{2}/\\d{4}$";
    private static final String NUMBER = "^$|^-?\\d+(\\.\\d+)?$";

    private String agreeNo;
    private String agreeId;
    @NotBlank(message = "edu.trainAgreement.msg.nameRequired")
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String agreeName;
    private String personId;
    @NotBlank(message = "edu.teacherManager.QINGXIANXUANZEYIGEREN.a")
    private String empId;
    private String localName;
    private String deptName;

    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String conStartDate;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String conEndDate;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String studyStartDate;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String studyEndDate;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String studyDay;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String serviceYear;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String serStartDate;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String serEndDate;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String exchangeRate;

    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String hqFree;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String cgfyFree;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String jpFree;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String zfbzFree;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String cgbzFree;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String cgbzFreeFact;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String sybxFree;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String yxPay;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String jtFree;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String txFree;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String totalFee;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String factPay;

    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String agreeStartDate;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String agreeEndDate;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String leftDate;
    @Size(max = 1000, message = "autoExcel.msg.tooLong")
    private String remark;

    /** File đính kèm (ESS_FILE, APPLY_TYPE = eduTrainAgreement) - chỉ dùng khi trả về. */
    private List<EssFileDto> files;
}
