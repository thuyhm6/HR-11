package com.ait.pa.wagebase.mapper;

import com.ait.pa.wagebase.dto.PaSupervisorDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PaSupervisorMapper {

    long countList(PaSupervisorDto params);

    List<PaSupervisorDto> selectListPage(PaSupervisorDto params);

    PaSupervisorDto selectOne(@Param("personId") String personId);

    int insert(PaSupervisorDto dto);

    int update(PaSupervisorDto dto);

    int deleteByPersonId(@Param("personId") String personId);

    int existsByPersonId(@Param("personId") String personId);
}
