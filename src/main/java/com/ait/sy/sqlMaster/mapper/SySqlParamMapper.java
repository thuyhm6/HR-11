package com.ait.sy.sqlMaster.mapper;

import com.ait.sy.sqlMaster.model.SySqlParam;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Mapper cho bảng SY_SQL_PARAM.
 */
@Mapper
public interface SySqlParamMapper {

    List<SySqlParam> findBySqlSeq(@Param("sqlSeq") String sqlSeq);

    void insert(SySqlParam sqlParam);

    void deleteBySqlSeq(@Param("sqlSeq") String sqlSeq);
}
