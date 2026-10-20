package com.ait.pa.salary.service;

import com.ait.exception.BusinessException;
import com.ait.pa.salary.dto.PaInputItemDataDto;
import com.ait.pa.salary.dto.PaParamDataTempDto;
import com.ait.sy.sys.dto.DataTablesResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface PaInputItemDataService {

    List<PaInputItemDataDto> getParamItemList(PaInputItemDataDto dto);

    DataTablesResponse<PaInputItemDataDto> getPagedParamDataList(PaInputItemDataDto dto);

    PaInputItemDataDto getParamDataOne(Long paramDataNo, String paramNo);

    void insertParamData(PaInputItemDataDto dto) throws BusinessException;

    void updateParamData(PaInputItemDataDto dto) throws BusinessException;

    void deleteParamData(Long paramDataNo, String paramNo);

    /** Giá trị chọn cho hạng mục phân biệt 1/2 (PA_PARAM_DATA_OTHER): {field1: [{value,label}], field2: [...]}. */
    Map<String, List<Map<String, String>>> getDistinctValues(String paramNo);

    List<String> importParamDataExcel(String paramNo, MultipartFile file);

    List<PaParamDataTempDto> getParamDataTempList(PaParamDataTempDto dto);

    String saveParamDataTemp(String paramNo);
}
