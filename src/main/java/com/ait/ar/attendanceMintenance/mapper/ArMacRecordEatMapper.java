package com.ait.ar.attendanceMintenance.mapper;

import com.ait.ar.attendanceMintenance.dto.ArMacRecordEatDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ArMacRecordEatMapper {

    int countList(ArMacRecordEatDto dto);

    List<ArMacRecordEatDto> selectListPage(ArMacRecordEatDto dto);

    List<ArMacRecordEatDto> selectListAll(ArMacRecordEatDto dto);

    int countDuplicateEat(ArMacRecordEatDto dto);

    int insertFromDevice(ArMacRecordEatDto dto);

    /** Suất ăn của nhân viên trong ngày tăng ca của đơn OT (ca đêm lấy ngày hôm sau). */
    List<ArMacRecordEatDto> selectListByOtApplyNo(@Param("applyNo") String applyNo);
}
