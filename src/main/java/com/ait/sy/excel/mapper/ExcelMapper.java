package com.ait.sy.excel.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

@Mapper
public interface ExcelMapper {
    String getPersonIdByEmpId(@Param("empId") String empId);
    void insertScheduleHtsv(Map<String, Object> row);
}
