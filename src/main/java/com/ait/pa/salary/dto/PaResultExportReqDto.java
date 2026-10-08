package com.ait.pa.salary.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Body POST /pa/salary/result/api/exportExcel - danh sách hạng mục được tick (theo đúng thứ tự cột
 * cần xuất) kèm tên hiển thị để làm header Excel, giống aliasName của exportResult bản gốc.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaResultExportReqDto {
    private String               payScheduleNo;
    private List<String>         deptNos;
    private List<PaItemInputDto> items;
}
