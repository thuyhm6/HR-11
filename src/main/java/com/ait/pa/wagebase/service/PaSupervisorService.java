package com.ait.pa.wagebase.service;

import com.ait.pa.wagebase.dto.PaSupervisorDto;
import com.ait.sy.sys.dto.DataTablesResponse;

import java.util.List;

public interface PaSupervisorService {

    DataTablesResponse<PaSupervisorDto> getPagedList(PaSupervisorDto params);

    PaSupervisorDto getOne(String personId);

    void save(PaSupervisorDto dto);

    void deleteList(List<String> personIds);
}
