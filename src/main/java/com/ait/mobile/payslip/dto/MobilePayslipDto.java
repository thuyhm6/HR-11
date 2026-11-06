package com.ait.mobile.payslip.dto;

import com.ait.pa.workManagement.dto.PaPayStubDto;
import com.ait.pa.workManagement.dto.PaPayStubItemDto;
import com.ait.pa.workManagement.dto.PaPayStubOtherDto;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Phiếu lương 1 kỳ của chính người đăng nhập (từ PaPayStubService.loadSelfPayStub - giống màn "Lương tháng" web).
 * Thực lĩnh = tổng thu nhập - tổng khấu trừ (giống pa-month-person-info.component.ts#netSalary).
 * Số tài khoản ngân hàng / số sổ BHXH chỉ trả 4 số cuối.
 */
@Data
@NoArgsConstructor
public class MobilePayslipDto {

    private String payScheduleNo;
    private String payDate;
    private String periodFrom;
    private String periodTo;

    private String empId;
    private String localName;
    private String deptName;
    private String positionName;
    private String postGrade;
    private String empTypeName;
    private Integer dependentCount;
    private String bankName;
    private String bankAccountMasked;
    private String socialInsuranceMasked;

    private List<Item> attendanceItems;
    private List<Item> salaryItems;
    private List<Item> deductionItems;
    private List<Item> standardItems;
    private List<Item> otherItems;

    private BigDecimal totalSalary;
    private BigDecimal totalDeduction;
    private BigDecimal netSalary;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Item {
        private String name;
        private BigDecimal value;
    }

    public static MobilePayslipDto from(PaPayStubDto src) {
        MobilePayslipDto dto = new MobilePayslipDto();
        dto.setPayScheduleNo(src.getPayScheduleNo());
        dto.setPayDate(src.getPayDate());
        dto.setPeriodFrom(src.getHrStartDate());
        dto.setPeriodTo(src.getHrEndDate());
        dto.setEmpId(src.getEmpId());
        dto.setLocalName(src.getLocalName());
        dto.setDeptName(src.getDeptName());
        dto.setPositionName(src.getPositionName());
        dto.setPostGrade(src.getPostGrade());
        dto.setEmpTypeName(src.getEmpTypeName());
        dto.setDependentCount(src.getDependentCount());
        dto.setBankName(src.getBankName());
        dto.setBankAccountMasked(mask(src.getBankAccountNo() != null ? src.getBankAccountNo() : src.getAccountNo()));
        dto.setSocialInsuranceMasked(mask(src.getSocialInsuranceNo()));
        dto.setAttendanceItems(items(src.getAttendanceItems()));
        dto.setSalaryItems(items(src.getSalaryItems()));
        dto.setDeductionItems(items(src.getDeductionItems()));
        dto.setStandardItems(items(src.getStandardItems()));
        dto.setOtherItems(src.getOtherItems() == null ? List.of() : src.getOtherItems().stream()
                .filter(Objects::nonNull)
                .map((PaPayStubOtherDto o) -> new Item(o.getRemark(), num(o.getReturnValue())))
                .toList());
        dto.setTotalSalary(sum(dto.getSalaryItems()));
        dto.setTotalDeduction(sum(dto.getDeductionItems()));
        dto.setNetSalary(dto.getTotalSalary().subtract(dto.getTotalDeduction()));
        return dto;
    }

    private static List<Item> items(List<PaPayStubItemDto> list) {
        return list == null ? List.of() : list.stream().filter(Objects::nonNull)
                .map(i -> new Item(i.getItemName(), num(i.getItemValue()))).toList();
    }

    private static BigDecimal num(Double value) {
        return value == null ? BigDecimal.ZERO : BigDecimal.valueOf(value).stripTrailingZeros();
    }

    private static BigDecimal sum(List<Item> items) {
        return items.stream().map(Item::getValue).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    /** "0123456789" -> "******6789" */
    static String mask(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        String v = value.trim();
        return v.length() <= 4 ? "****" : "*".repeat(Math.min(v.length() - 4, 8)) + v.substring(v.length() - 4);
    }
}
