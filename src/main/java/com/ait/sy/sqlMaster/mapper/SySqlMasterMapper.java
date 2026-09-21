package com.ait.sy.sqlMaster.mapper;

import com.ait.sy.sqlMaster.model.SySqlMaster;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Mapper cho bảng SY_SQL_MASTER.
 */
@Mapper
public interface SySqlMasterMapper {

    List<SySqlMaster> findAll(@Param("keyword") String keyword, @Param("pgmNm") String pgmNm);

    SySqlMaster findBySqlSeq(@Param("sqlSeq") String sqlSeq);

    /** Sinh SQL_SEQ tiếp theo từ SY_SQL_MASTER_SEQ. */
    String getNextSqlSeq();

    void insert(SySqlMaster sqlMaster);

    void update(SySqlMaster sqlMaster);

    void deleteBySqlSeq(@Param("sqlSeq") String sqlSeq);
}
