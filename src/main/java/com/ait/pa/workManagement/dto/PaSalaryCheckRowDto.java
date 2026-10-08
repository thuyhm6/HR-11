package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * 1 dòng "nhân viên + giá trị" dùng chung cho các danh sách của nhóm kiểm tra lương. Mỗi câu SQL chỉ trả về 1 phần các
 * cột (thông tin nhân viên luôn có), các trường còn lại null:
 * - Danh sách NV tăng/giảm (monthPersonCountInfoSonList), Kiểm tra quyết định nhân sự (viewVerificationList).
 * - Thông tin NV của Chi tiết lương (getPaDetailEmpInfoByPersonId).
 * - Lương theo hạng mục (detailItemCountInfoList): payNumber, formularValue, remark.
 * - Chênh lệch hạng mục (viewResultConfirmList3Right): itemNo, itemName, monthPro, monthNow, formularValue.
 * - Thống kê tăng ca (viewResultConfirmSonList2): itemName, calValue, formularValue, arStartDate, arEndDate.
 * - Chi tiết tăng ca (viewResultConfirmList2Bottom): arDate, shiftName, itemName, fromTime, toTime, quantity.
 * - Bảo hiểm (viewResultConfirmSonList6), Thuế (viewResultConfirmSonList5).
 */
@Data
@NoArgsConstructor
public class PaSalaryCheckRowDto {
    // ── Thông tin nhân viên ───────────────────────────────────────────────
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String postFamilyName;
    private String postGradeName;
    private String positionName;
    private String dutyName;
    private String mainBusiness;
    private String empTypeName;
    private String empOfficeName;
    /** DD/MM/YYYY. */
    private String dateStarted;
    /** DD/MM/YYYY. */
    private String dateLeft;
    /** DD/MM/YYYY. */
    private String endProbationDate;

    // ── Quyết định nhân sự ────────────────────────────────────────────────
    /** Ngày quyết định - DD/MM/YYYY. */
    private String transDate;
    private String transCodeName;

    // ── Giá trị lương / hạng mục ──────────────────────────────────────────
    private String itemNo;
    private String itemName;
    private BigDecimal payNumber;
    private BigDecimal monthPro;
    private BigDecimal monthNow;
    private BigDecimal calValue;
    private String formularValue;
    private String remark;

    // ── Tăng ca ───────────────────────────────────────────────────────────
    /** YYYY/MM/DD - gửi lại cho API chi tiết tăng ca. */
    private String arStartDate;
    /** YYYY/MM/DD. */
    private String arEndDate;
    /** DD/MM/YYYY. */
    private String arDate;
    private String shiftName;
    /** DD/MM/YYYY HH24:MI. */
    private String fromTime;
    /** DD/MM/YYYY HH24:MI. */
    private String toTime;
    private BigDecimal quantity;

    // ── Bảo hiểm / thuế ───────────────────────────────────────────────────
    private BigDecimal socialInsPersonal;
    private BigDecimal medicalInsPersonal;
    private BigDecimal unemploymentInsPersonal;
    private BigDecimal personalInsTotal;
    private BigDecimal incomeBeforeTax;
    private BigDecimal attDeductTotal;
    private BigDecimal taxDeductStd;
    private BigDecimal taxFamilyDeductStd;
    private BigDecimal taxFamilyDeductCount;
    private BigDecimal taxableIncome;
    private BigDecimal ptTaxRate;
    private BigDecimal quickDeductionTax;
    private BigDecimal personalTax;
    private BigDecimal realWages;
}
