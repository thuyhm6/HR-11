import { AuthDeptNode, PaPayScheduleDto } from '../view-pa-pay-stub/view-pa-pay-stub.model';

export type { AuthDeptNode, PaPayScheduleDto };

/**
 * Tương ứng PaResultSummaryDto.java - 1 dòng tổng lương (PA_SUMMARY_HTSV). Bảng theo cá nhân có các cột thông tin nhân
 * viên; bảng theo phòng ban chỉ có deptNo/deptName/empNums + các cột số (SUM).
 */
export interface PaResultSummaryDto {
  personId?: string | null;
  empId?: string | null;
  localName?: string | null;
  deptNo?: string | null;
  deptName?: string | null;
  postFamilyName?: string | null;
  postGradeName?: string | null;
  positionName?: string | null;
  dateStarted?: string | null;
  dateLeft?: string | null;
  empNums?: number | null;
  [field: string]: string | number | null | undefined;
}

export interface PaResultColumn {
  field: string;
  key: string;
  fallback: string;
}

/** Cột thông tin nhân viên (cố định bên trái) - bản gốc viewPaResultList.jsp (fixedColumns leftColumns: 9). */
export const PA_RESULT_EMP_COLUMNS: PaResultColumn[] = [
  { field: 'empId', key: 'ess.infoApply.EMP_ID', fallback: 'Mã nhân viên' },
  { field: 'localName', key: 'ess.infoApply.NAME', fallback: 'Họ tên' },
  { field: 'deptName', key: 'ess.infoApply.DEPT', fallback: 'Phòng ban' },
  { field: 'postFamilyName', key: 'hrm.empinfo.POST_FAMILY', fallback: 'Nhóm nhân viên' },
  { field: 'postGradeName', key: 'hrm.contract.Rank', fallback: 'Chức vụ' },
  { field: 'positionName', key: 'ess.trans.title.dutyName', fallback: 'Chức danh' },
  { field: 'dateStarted', key: 'ess.empInfo.date_of_agency', fallback: 'Ngày vào làm' },
  { field: 'dateLeft', key: 'ess.trans.title.resignDate', fallback: 'Ngày thôi việc' },
];

/**
 * Các cột số (chấm công / lương / khấu trừ / bảo hiểm) theo đúng thứ tự bảng HTSV của bản gốc viewPaResultList.jsp và
 * viewDeptPaResultList.jsp - dùng chung cho 2 trang. Tất cả key đã có sẵn trong messages*.properties.
 */
export const PA_RESULT_NUMBER_COLUMNS: PaResultColumn[] = [
  { field: 'probationDays', key: 'ess.viewArPersonalYearList.PROBATION_DAYS.b', fallback: 'Thử việc' },
  { field: 'regularDays', key: 'ess.viewArPersonalYearList.REGULAR_DAYS.b', fallback: 'Chính thức' },
  { field: 'workScheduleDays', key: 'ess.infoApply.yingchuqintianshu', fallback: 'Ngày công chuẩn' },
  { field: 'probNightShiftCount', key: 'ess.viewArPersonalYearList.PROB_NIGHT_SHIFT_COUNT.b', fallback: 'Làm đêm kỳ thử việc' },
  { field: 'nightShiftCount', key: 'ess.viewArPersonalYearList.NIGHT_SHIFT_COUNT.b', fallback: 'Làm đêm chính thức' },
  { field: 'probWorkdayot150Hours', key: 'ess.viewArPersonalYearList.PROB_WORKDAYOT150_HOURS.b', fallback: 'Tăng ca ngày thường 150% kỳ thử việc' },
  { field: 'workdayot150Hours', key: 'ess.viewArPersonalYearList.WORKDAYOT150_HOURS.b', fallback: 'Tăng ca ngày thường 150%' },
  { field: 'probWorkdayot200Hours', key: 'ess.viewArPersonalYearList.PROB_WORKDAYOT200_HOURS.b', fallback: 'Tăng ca ngày thường 200% kỳ thử việc' },
  { field: 'workdayot200Hours', key: 'ess.viewArPersonalYearList.WORKDAYOT200_HOURS.b', fallback: 'Tăng ca ngày thường 200%' },
  { field: 'probWorkdayot210Hours', key: 'ess.viewArPersonalYearList.PROB_WORKDAYOT210_HOURS.b', fallback: 'Tăng ca ngày thường 210% kỳ thử việc' },
  { field: 'workdayot210Hours', key: 'ess.viewArPersonalYearList.WORKDAYOT210_HOURS.b', fallback: 'Tăng ca ngày thường 210%' },
  { field: 'probSaturdayot200Hours', key: 'ess.viewArPersonalYearList.PROB_SATURDAYOT200_HOURS.b', fallback: 'Tăng ca ngày hưởng lương 200% thử việc' },
  { field: 'saturdayot200Hours', key: 'ess.viewArPersonalYearList.SATURDAYOT200_HOURS.b', fallback: 'Tăng ca ngày hưởng lương 200%' },
  { field: 'probSaturdayot270Hours', key: 'ess.viewArPersonalYearList.PROB_SATURDAYOT270_HOURS.b', fallback: 'Tăng ca ngày hưởng lương 270% thử việc' },
  { field: 'saturdayot270Hours', key: 'ess.viewArPersonalYearList.SATURDAYOT270_HOURS.b', fallback: 'Tăng ca ngày hưởng lương 270%' },
  { field: 'probWeeklyot200Hours', key: 'ess.viewArPersonalYearList.PROB_WEEKLYOT200_HOURS.b', fallback: 'Tăng ca cuối tuần 200% kỳ thử việc' },
  { field: 'weeklyot200Hours', key: 'ess.viewArPersonalYearList.WEEKLYOT200_HOURS.b', fallback: 'Tăng ca cuối tuần 200%' },
  { field: 'probWeeklyot270Hours', key: 'ess.viewArPersonalYearList.PROB_WEEKLYOT270_HOURS.b', fallback: 'Tăng ca cuối tuần 270% kỳ thử việc' },
  { field: 'weeklyot270Hours', key: 'ess.viewArPersonalYearList.WEEKLYOT270_HOURS.b', fallback: 'Tăng ca cuối tuần 270%' },
  { field: 'probHolidayot300Hours', key: 'ess.viewArPersonalYearList.PROB_HOLIDAYOT300_HOURS.b', fallback: 'Tăng ca ngày lễ 300% kỳ thử việc' },
  { field: 'holidayot300Hours', key: 'ess.viewArPersonalYearList.HOLIDAYOT300_HOURS.b', fallback: 'Tăng ca ngày lễ 300%' },
  { field: 'probHolidayot390Hours', key: 'ess.viewArPersonalYearList.PROB_HOLIDAYOT390_HOURS.b', fallback: 'Tăng ca ngày lễ 390% kỳ thử việc' },
  { field: 'holidayot390Hours', key: 'ess.viewArPersonalYearList.HOLIDAYOT390_HOURS.b', fallback: 'Tăng ca ngày lễ 390%' },
  { field: 'resignAnnualleavePayDays', key: 'ess.viewArPersonalYearList.RESIGN_ANNUALLEAVE_PAY_DAYS.b', fallback: 'Số ngày trả lương nghỉ phép năm' },
  { field: 'probPersonalleaveDays', key: 'ess.viewArPersonalYearList.PROB_PERSONALLEAVE_DAYS.b', fallback: 'Nghỉ việc riêng kỳ thử việc' },
  { field: 'personalleaveDays', key: 'ess.viewArPersonalYearList.PERSONALLEAVE_DAYS.b', fallback: 'Nghỉ việc riêng' },
  { field: 'probSickleaveDays', key: 'ess.viewArPersonalYearList.PROB_SICKLEAVE_DAYS.b', fallback: 'Nghỉ ốm thường kỳ thử việc' },
  { field: 'sickleaveDays', key: 'ess.viewArPersonalYearList.SICKLEAVE_DAYS.b', fallback: 'Nghỉ ốm thường' },
  { field: 'probChildSickleaveDays', key: 'ess.viewArPersonalYearList.PROB_CHILD_SICKLEAVE_DAYS.b', fallback: 'Nghỉ con ốm kỳ thử việc' },
  { field: 'childSickleaveDays', key: 'ess.viewArPersonalYearList.CHILD_SICKLEAVE_DAYS.b', fallback: 'Nghỉ con ốm' },
  { field: 'probLongSickleaveDays', key: 'ess.viewArPersonalYearList.PROB_LONG_SICKLEAVE_DAYS.b', fallback: 'Nghỉ ốm dài ngày kỳ thử việc' },
  { field: 'longSickleaveDays', key: 'ess.viewArPersonalYearList.LONG_SICKLEAVE_DAYS.b', fallback: 'Nghỉ ốm dài ngày' },
  { field: 'maternityleaveDays', key: 'ess.viewArPersonalYearList.MATERNITYLEAVE_DAYS.b', fallback: 'Nghỉ thai sản' },
  { field: 'probAbsenteeismDays', key: 'ess.viewArPersonalYearList.PROB_ABSENTEEISM_DAYS.b', fallback: 'Nghỉ không phép kỳ thử việc' },
  { field: 'absenteeismDays', key: 'ess.viewArPersonalYearList.ABSENTEEISM_DAYS.b', fallback: 'Nghỉ không phép' },
  { field: 'probLateArriveMinutes', key: 'ess.viewArPersonalYearList.PROB_LATE_ARRIVE_MINUTES.b', fallback: 'Số phút đến muộn kỳ thử việc' },
  { field: 'lateArriveMinutes', key: 'ess.viewArPersonalYearList.LATE_ARRIVE_MINUTES.b', fallback: 'Đến muộn' },
  { field: 'probEarlyLeaveMinutes', key: 'ess.viewArPersonalYearList.PROB_EARLY_LEAVE_MINUTES.b', fallback: 'Về sớm kỳ thử việc' },
  { field: 'earlyLeaveMinutes', key: 'ess.viewArPersonalYearList.EARLY_LEAVE_MINUTES.b', fallback: 'Về sớm' },
  { field: 'unpaidleaveDays', key: 'ess.viewArPersonalYearList.UNPAIDLEAVE_DAYS.b', fallback: 'Nghỉ không lương' },
  { field: 'basicSalary', key: 'pa.salary.canShu.jibengongzi', fallback: 'Lương cơ bản' },
  { field: 'positionAllowance', key: 'pa.insurance.title.zhizejintie', fallback: 'Phụ cấp chức vụ' },
  { field: 'transportationAllowance', key: 'pa.viewPaResultList.JIAOTONGBUZHU.C', fallback: 'Trợ cấp đi lại' },
  { field: 'longAttendance', key: 'pa.paSummary.LONG_ATTENDANCE.b', fallback: 'Phụ cấp thâm niên' },
  { field: 'fullAttendanceBonus', key: 'pa.viewPaResultList.MANQINJIANG.C', fallback: 'Phụ cấp chuyên cần' },
  { field: 'nightshiftAllowance', key: 'pa.paSummary.NIGHTSHIFT_ALLOWANCE.b', fallback: 'Phụ cấp làm đêm' },
  { field: 'evaluationBonus', key: 'pa.paSummary.EVALUATION_BONUS.b', fallback: 'Tiền thưởng' },
  { field: 'probOtHourSalary', key: 'pa.paSummary.PROB_OT_HOUR_SALARY.b', fallback: 'Lương OT thử việc' },
  { field: 'otHourSalary', key: 'pa.paSummary.OT_HOUR_SALARY.b', fallback: 'Lương OT' },
  { field: 'probWorkdayot150Fee', key: 'pa.paSummary.PROB_WORKDAYOT150_FEE.b', fallback: 'Lương OT ngày thưởng 150% thử việc' },
  { field: 'workdayot150Fee', key: 'pa.paSummary.WORKDAYOT150_FEE.b', fallback: 'Lương OT ngày thường 150%' },
  { field: 'probWorkdayot200Fee', key: 'pa.paSummary.PROB_WORKDAYOT200_FEE.b', fallback: 'Lương OT ngày thường 200% thử việc' },
  { field: 'workdayot200Fee', key: 'pa.paSummary.WORKDAYOT200_FEE.b', fallback: 'Lương OT ngày thường 200%' },
  { field: 'probWorkdayot210Fee', key: 'pa.paSummary.PROB_WORKDAYOT210_FEE.b', fallback: 'Lương OT ngày thường 210% thử việc' },
  { field: 'workdayot210Fee', key: 'pa.paSummary.WORKDAYOT210_FEE.b', fallback: 'Lương OT ngày thường 210%' },
  { field: 'workdayotFeeTotal', key: 'pa.paSummary.WORKDAYOT_FEE_TOTAL.b', fallback: 'Tổng lương OT ngày thường' },
  { field: 'probSaturdayot200Fee', key: 'pa.paSummary.PROB_SATURDAYOT200_FEE.b', fallback: 'Lương OT ngày hưởng lương 200% thử việc' },
  { field: 'saturdayot200Fee', key: 'pa.paSummary.SATURDAYOT200_FEE.b', fallback: 'Lương OT ngày hưởng lương 200%' },
  { field: 'probSaturdayot270Fee', key: 'pa.paSummary.PROB_SATURDAYOT270_FEE.b', fallback: 'Lương OT ngày hưởng lương 270% thử việc' },
  { field: 'saturdayot270Fee', key: 'pa.paSummary.SATURDAYOT270_FEE.b', fallback: 'Lương OT ngày hưởng lương 270%' },
  { field: 'saturdayotFeeTotal', key: 'pa.paSummary.SATURDAYOT_FEE_TOTAL.b', fallback: 'Tổng lương tăng ca ngày hưởng lương' },
  { field: 'probWeeklyot200Fee', key: 'pa.paSummary.PROB_WEEKLYOT200_FEE.b', fallback: 'Lương OT tăng ca cuối tuần 200% thử việc' },
  { field: 'weeklyot200Fee', key: 'pa.paSummary.WEEKLYOT200_FEE.b', fallback: 'Lương OT cuối tuần 200%' },
  { field: 'probWeeklyot270Fee', key: 'pa.paSummary.PROB_WEEKLYOT270_FEE.b', fallback: 'Lương OT tăng ca cuối tuần 270% thử việc' },
  { field: 'weeklyot270Fee', key: 'pa.paSummary.WEEKLYOT270_FEE.b', fallback: 'Lương OT cuối tuần 270%' },
  { field: 'weeklyotFeeTotal', key: 'pa.paSummary.WEEKLYOT_FEE_TOTAL.b', fallback: 'Tổng lương OT cuối tuần' },
  { field: 'probHolidayot300Fee', key: 'pa.paSummary.PROB_HOLIDAYOT300_FEE.b', fallback: 'Lương OT tăng ca ngày lễ 300% thử việc' },
  { field: 'holidayot300Fee', key: 'pa.paSummary.HOLIDAYOT300_FEE.b', fallback: 'Lương OT ngày lễ 300%' },
  { field: 'probHolidayot390Fee', key: 'pa.paSummary.PROB_HOLIDAYOT390_FEE.b', fallback: 'Lương OT tăng ca ngày lễ 390% thử việc' },
  { field: 'holidayot390Fee', key: 'pa.paSummary.HOLIDAYOT390_FEE.b', fallback: 'Lương OT ngày lễ 390%' },
  { field: 'holidayotFeeTotal', key: 'pa.paSummary.HOLIDAYOT_FEE_TOTAL.b', fallback: 'Tổng lương OT ngày lễ' },
  { field: 'otFeeTotal', key: 'pa.paSummary.OT_FEE_TOTAL.b', fallback: 'Tổng lương OT' },
  { field: 'annualleaveClearPay', key: 'pa.paSummary.ANNUALLEAVE_CLEAR_PAY.b', fallback: 'Lương nghỉ phép năm' },
  { field: 'resignAnnualleavePay', key: 'pa.paSummary.RESIGN_ANNUALLEAVE_PAY.b', fallback: 'Lương nghỉ nghép năm khi thôi việc' },
  { field: 'probPersonalleaveDeduct', key: 'pa.paSummary.PROB_PERSONALLEAVE_DEDUCT.b', fallback: 'Khoản trừ nghỉ việc riêng kỳ thử việc' },
  { field: 'personalleaveDeduct', key: 'pa.viewPaResultList.SHIJIAKOUCHU.C', fallback: 'Khoản trừ nghỉ việc riêng' },
  { field: 'probSickleaveDeduct', key: 'pa.paSummary.PROB_SICKLEAVE_DEDUCT.b', fallback: 'Khoản trừ nghỉ ốm kỳ thử việc' },
  { field: 'sickleaveDeduct', key: 'pa.viewPaResultList.BINGJIAKOUCHU.C', fallback: 'Khoản trừ nghỉ ốm' },
  { field: 'maternityleaveDeduct', key: 'pa.viewPaResultList.CHANJIAKOUCHU.C', fallback: 'Khoản trừ nghỉ thai sản' },
  { field: 'probAbsentDeduct', key: 'pa.paSummary.PROB_ABSENT_DEDUCT.b', fallback: 'Khoản trừ nghỉ không phép kỳ thử việc' },
  { field: 'absentDeduct', key: 'pa.viewPaResultList.KUANGGONGKOUCHU.C', fallback: 'Khoản trừ nghỉ không phép' },
  { field: 'probLateearlyDeduct', key: 'pa.paSummary.PROB_LATEEARLY_DEDUCT.b', fallback: 'Khoản trừ đến muộn về sớm kỳ thử việc' },
  { field: 'lateearlyDeduct', key: 'pa.viewPaResultList.CHIDAOZAOTUIKOUCHU.C', fallback: 'Khoản trừ đến muộn về sớm' },
  { field: 'attDeductTotal', key: 'pa.viewPaResultList.KAOQINKOUCHUHEJI.C', fallback: 'Tổng khoản trừ' },
  { field: 'incomeBeforeTax', key: 'pa.viewPaResultList.SHUIQIANGONGZI.C', fallback: 'Thu nhập trước thuế' },
  { field: 'ptTaxRate', key: 'pa.paSummary.PT_TAX_RATE.b', fallback: 'Thuế suất cá nhân' },
  { field: 'quickDeductionTax', key: 'pa.viewResultConfirmSonList.SUSUANKOUCHUSHU.b', fallback: 'Số tiền trừ nhanh' },
  { field: 'otSalaryNotPit', key: 'pa.paSummary.OT_SALARY_NOT_PIT.b', fallback: 'Lương OT miễn thuế' },
  { field: 'taxableIncome', key: 'pa.viewResultConfirmSonList.YINGNASHUISUODEE.b', fallback: 'Thu nhập tính thuế' },
  { field: 'personalTax', key: 'ess.viewpersonalpainfo.gerensuodeshui', fallback: 'Thuế TNCN' },
  { field: 'pitSettlement', key: 'pa.paSummary.PIT_SETTLEMENT.b', fallback: 'Quyết toán thuế' },
  { field: 'severanceAllowance', key: 'pa.paSummary.SEVERANCE_ALLOWANCE.b', fallback: 'Trợ cấp thôi việc' },
  { field: 'realWages', key: 'pa.viewPaResultList.SHIDEGONGZI.C', fallback: 'Lương thực lĩnh' },
  { field: 'tradeUnion', key: 'pa.paSummary.TRADE_UNION.b', fallback: 'Phí công đoàn' },
  { field: 'tradeUnionCorp', key: 'pa.paSummary.TRADE_UNION_CORP.b', fallback: 'Phí công đoàn(công ty)' },
  { field: 'insuranceBase', key: 'pa.paSummary.INSURANCE_BASE.b', fallback: 'Lương tính BH' },
  { field: 'socialInsPersonal', key: 'pa.viewResultConfirmSonList.SHEHUIBAOXIANGEREN.b', fallback: 'BHXH (cá nhân)' },
  { field: 'medicalInsPersonal', key: 'pa.viewResultConfirmSonList.YILIAOBAOXIANGEREN.b', fallback: 'BHYT (cá nhân)' },
  { field: 'unemploymentInsPersonal', key: 'pa.viewResultConfirmSonList.SHIYEBAOXIANGEREN.b', fallback: 'BHTN (cá nhân)' },
  { field: 'personalInsTotal', key: 'pa.viewResultConfirmSonList.GERENSHEBAOHEJI.b', fallback: 'Tổng BHXH cá nhân' },
  { field: 'socialInsCompany', key: 'pa.paSummary.SOCIAL_INS_COMPANY.b', fallback: 'BHXH (công ty)' },
  { field: 'medicalInsCompany', key: 'pa.paSummary.MEDICAL_INS_COMPANY.b', fallback: 'BHYT (công ty)' },
  { field: 'unemploymentInsCompany', key: 'pa.paSummary.UNEMPLOYMENT_INS_COMPANY.b', fallback: 'BHTN (công ty)' },
  { field: 'companyInsTotal', key: 'pa.paSummary.COMPANY_INS_TOTAL.b', fallback: 'Tổng BH' },
  { field: 'socialSickInsCompany', key: 'pa.paSummary.SOCIAL_SICK_INS_COMPANY.b', fallback: 'BHTNLĐ-BNN (công ty)' },
];

/** Cộng dồn các cột số của danh sách đang hiển thị - dòng "Tổng" ở cuối bảng (bản gốc viewPaResultListSum). */
export function sumColumns(rows: PaResultSummaryDto[], fields: string[]): Record<string, number> {
  const total: Record<string, number> = {};
  fields.forEach((f) => (total[f] = rows.reduce((acc, r) => acc + (Number(r[f]) || 0), 0)));
  return total;
}
