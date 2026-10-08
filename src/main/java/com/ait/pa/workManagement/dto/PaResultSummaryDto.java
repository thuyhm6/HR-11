package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * 1 dòng tổng lương (PA_SUMMARY_HTSV) - dùng chung cho 2 trang Angular /view-pa-result-list (theo cá nhân) và
 * /view-dept-pa-result-list (cộng theo phòng ban, chỉ có deptNo/deptName/empNums + các cột số).
 * Bản gốc: pa/workManagement/viewPaResultList.jsp, viewDeptPaResultList.jsp (phần HTSV) của dự án Hanwha_HTSV.
 */
@Data
@NoArgsConstructor
public class PaResultSummaryDto {

    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String postFamilyName;
    private String postGradeName;
    private String positionName;
    private String dateStarted;
    private String dateLeft;
    /** Số nhân viên của phòng ban - chỉ có ở bảng tổng lương theo phòng ban. */
    private Integer empNums;
    private BigDecimal probationDays;
    private BigDecimal regularDays;
    private BigDecimal workScheduleDays;
    private BigDecimal probNightShiftCount;
    private BigDecimal nightShiftCount;
    private BigDecimal probWorkdayot150Hours;
    private BigDecimal workdayot150Hours;
    private BigDecimal probWorkdayot200Hours;
    private BigDecimal workdayot200Hours;
    private BigDecimal probWorkdayot210Hours;
    private BigDecimal workdayot210Hours;
    private BigDecimal probSaturdayot200Hours;
    private BigDecimal saturdayot200Hours;
    private BigDecimal probSaturdayot270Hours;
    private BigDecimal saturdayot270Hours;
    private BigDecimal probWeeklyot200Hours;
    private BigDecimal weeklyot200Hours;
    private BigDecimal probWeeklyot270Hours;
    private BigDecimal weeklyot270Hours;
    private BigDecimal probHolidayot300Hours;
    private BigDecimal holidayot300Hours;
    private BigDecimal probHolidayot390Hours;
    private BigDecimal holidayot390Hours;
    private BigDecimal resignAnnualleavePayDays;
    private BigDecimal probPersonalleaveDays;
    private BigDecimal personalleaveDays;
    private BigDecimal probSickleaveDays;
    private BigDecimal sickleaveDays;
    private BigDecimal probChildSickleaveDays;
    private BigDecimal childSickleaveDays;
    private BigDecimal probLongSickleaveDays;
    private BigDecimal longSickleaveDays;
    private BigDecimal maternityleaveDays;
    private BigDecimal probAbsenteeismDays;
    private BigDecimal absenteeismDays;
    private BigDecimal probLateArriveMinutes;
    private BigDecimal lateArriveMinutes;
    private BigDecimal probEarlyLeaveMinutes;
    private BigDecimal earlyLeaveMinutes;
    private BigDecimal unpaidleaveDays;
    private BigDecimal basicSalary;
    private BigDecimal positionAllowance;
    private BigDecimal transportationAllowance;
    private BigDecimal longAttendance;
    private BigDecimal fullAttendanceBonus;
    private BigDecimal nightshiftAllowance;
    private BigDecimal evaluationBonus;
    private BigDecimal probOtHourSalary;
    private BigDecimal otHourSalary;
    private BigDecimal probWorkdayot150Fee;
    private BigDecimal workdayot150Fee;
    private BigDecimal probWorkdayot200Fee;
    private BigDecimal workdayot200Fee;
    private BigDecimal probWorkdayot210Fee;
    private BigDecimal workdayot210Fee;
    private BigDecimal workdayotFeeTotal;
    private BigDecimal probSaturdayot200Fee;
    private BigDecimal saturdayot200Fee;
    private BigDecimal probSaturdayot270Fee;
    private BigDecimal saturdayot270Fee;
    private BigDecimal saturdayotFeeTotal;
    private BigDecimal probWeeklyot200Fee;
    private BigDecimal weeklyot200Fee;
    private BigDecimal probWeeklyot270Fee;
    private BigDecimal weeklyot270Fee;
    private BigDecimal weeklyotFeeTotal;
    private BigDecimal probHolidayot300Fee;
    private BigDecimal holidayot300Fee;
    private BigDecimal probHolidayot390Fee;
    private BigDecimal holidayot390Fee;
    private BigDecimal holidayotFeeTotal;
    private BigDecimal otFeeTotal;
    private BigDecimal annualleaveClearPay;
    private BigDecimal resignAnnualleavePay;
    private BigDecimal probPersonalleaveDeduct;
    private BigDecimal personalleaveDeduct;
    private BigDecimal probSickleaveDeduct;
    private BigDecimal sickleaveDeduct;
    private BigDecimal maternityleaveDeduct;
    private BigDecimal probAbsentDeduct;
    private BigDecimal absentDeduct;
    private BigDecimal probLateearlyDeduct;
    private BigDecimal lateearlyDeduct;
    private BigDecimal attDeductTotal;
    private BigDecimal incomeBeforeTax;
    private BigDecimal ptTaxRate;
    private BigDecimal quickDeductionTax;
    private BigDecimal otSalaryNotPit;
    private BigDecimal taxableIncome;
    private BigDecimal personalTax;
    private BigDecimal pitSettlement;
    private BigDecimal severanceAllowance;
    private BigDecimal realWages;
    private BigDecimal tradeUnion;
    private BigDecimal tradeUnionCorp;
    private BigDecimal insuranceBase;
    private BigDecimal socialInsPersonal;
    private BigDecimal medicalInsPersonal;
    private BigDecimal unemploymentInsPersonal;
    private BigDecimal personalInsTotal;
    private BigDecimal socialInsCompany;
    private BigDecimal medicalInsCompany;
    private BigDecimal unemploymentInsCompany;
    private BigDecimal companyInsTotal;
    private BigDecimal socialSickInsCompany;
}
