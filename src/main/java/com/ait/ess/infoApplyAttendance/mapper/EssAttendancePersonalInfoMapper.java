package com.ait.ess.infoApplyAttendance.mapper;

import com.ait.ess.infoApplyAttendance.dto.EssAttendancePersonalInfoDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface EssAttendancePersonalInfoMapper {
    List<EssAttendancePersonalInfoDto> selectPersonalAttendanceList(EssAttendancePersonalInfoDto dto);
    List<EssAttendancePersonalInfoDto> selectAttendanceItemList(EssAttendancePersonalInfoDto dto);

    /** Mã giới tính (HR_PERSONAL_INFO.SEXCODE) - kiểm tra loại nghỉ chỉ dành cho nam/nữ (getSex bản gốc). */
    String selectSexCode(@Param("personId") String personId);
}
