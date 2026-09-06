package com.ait.ess.infoApply.mapper;

import com.ait.ess.infoApply.dto.EssDeptOtApplyInfoDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface EssDeptOtApplyInfoMapper {

    int countList(EssDeptOtApplyInfoDto params);

    List<EssDeptOtApplyInfoDto> selectListPage(EssDeptOtApplyInfoDto params);

    /** Danh sách đầy đủ (không phân trang) dùng để xuất báo cáo Excel. */
    List<EssDeptOtApplyInfoDto> selectExportList(EssDeptOtApplyInfoDto params);
}
