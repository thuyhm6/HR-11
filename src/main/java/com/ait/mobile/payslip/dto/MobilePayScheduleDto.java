package com.ait.mobile.payslip.dto;

import com.ait.pa.workManagement.dto.PaPayScheduleDto;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Kỳ lương HR đã mở cho nhân viên xem (PA_OPEN_FLAG = 1). */
@Data
@NoArgsConstructor
public class MobilePayScheduleDto {

    private String payScheduleNo;
    private String payDate;
    private String name;
    private String periodFrom;
    private String periodTo;

    public static MobilePayScheduleDto from(PaPayScheduleDto src) {
        MobilePayScheduleDto dto = new MobilePayScheduleDto();
        dto.setPayScheduleNo(src.getPayScheduleNo());
        dto.setPayDate(src.getPayDate());
        dto.setName(src.getSalaryDistinName());
        dto.setPeriodFrom(src.getHrStartDate());
        dto.setPeriodTo(src.getHrEndDate());
        return dto;
    }
}
