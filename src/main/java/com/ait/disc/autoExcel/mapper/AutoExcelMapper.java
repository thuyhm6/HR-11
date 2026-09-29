package com.ait.disc.autoExcel.mapper;

import com.ait.disc.autoExcel.dto.AutoExcelMasterDto;
import com.ait.disc.autoExcel.dto.AutoExcelParamDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Báo cáo SQL tự xuất Excel - SYS_SQL_MASTER / SYS_PARAM_BY_SQL (chuyển từ sqlAutoExcel.xml - iBatis, dự án
 * Hanwha_HTSV). cpnyId/lang/adminID do LanguageParameterInterceptor inject.
 */
@Mapper
public interface AutoExcelMapper {

    /** Báo cáo của công ty đăng nhập (CPNY_ID chứa mã công ty) + báo cáo dùng chung CPNY_ID = 'SPC'. */
    List<AutoExcelMasterDto> selectList(@Param("pgmNm") String pgmNm,
                                        @Param("sqlSeq") String sqlSeq,
                                        @Param("sqlNm") String sqlNm);

    /** Chi tiết 1 báo cáo - chỉ trả về nếu công ty đăng nhập được xem (cùng điều kiện với selectList). */
    AutoExcelMasterDto selectDetail(@Param("sqlSeq") String sqlSeq);

    String selectNextSqlSeq();

    int insertMaster(AutoExcelMasterDto dto);

    int updateMaster(AutoExcelMasterDto dto);

    int deleteMaster(@Param("sqlSeq") String sqlSeq);

    /** onlyUsed = true: chỉ tham số USE_YN = 'Y' (tham số còn xuất hiện trong câu SQL). */
    List<AutoExcelParamDto> selectParamList(@Param("sqlSeq") String sqlSeq, @Param("onlyUsed") boolean onlyUsed);

    int disableParams(@Param("sqlSeq") String sqlSeq);

    /** Bật lại tham số đã có (USE_YN = 'Y'); tham số cố định được ghi đè mô tả/loại/thứ tự - trả về số dòng cập nhật. */
    int enableParam(AutoExcelParamDto dto);

    int insertParam(AutoExcelParamDto dto);

    int updateParam(AutoExcelParamDto dto);

    int deleteParams(@Param("sqlSeq") String sqlSeq);
}
