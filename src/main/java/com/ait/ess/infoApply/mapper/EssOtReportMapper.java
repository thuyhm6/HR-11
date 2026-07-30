package com.ait.ess.infoApply.mapper;

import com.ait.ess.infoApply.dto.EssOtReportDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface EssOtReportMapper {

    int countList(EssOtReportDto params);

    List<EssOtReportDto> selectListPage(EssOtReportDto params);

    /** Danh sách đầy đủ (không phân trang), trả về Map với key là tên cột SQL - dùng để điền file mẫu Excel {@code jx:forEach}. */
    List<Map<String, Object>> selectExportReport(EssOtReportDto params);
}
