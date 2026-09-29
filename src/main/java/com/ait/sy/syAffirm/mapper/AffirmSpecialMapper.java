package com.ait.sy.syAffirm.mapper;

import com.ait.sy.syAffirm.dto.AffirmSpecialDetailDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialTypeDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Phê duyệt đặc biệt - bảng SY_AFFIRM_RELATION_SPECIAL (cpnyId/lang/adminID do LanguageParameterInterceptor inject). */
@Mapper
public interface AffirmSpecialMapper {

    List<AffirmSpecialTypeDto> selectTypeList(@Param("parentCodeNo") String parentCodeNo);

    List<AffirmSpecialDto> selectObjectList(@Param("keyword") String keyword);

    List<AffirmSpecialDetailDto> selectDetailList(@Param("affirmObject") String affirmObject,
                                                  @Param("affirmTypeNo") String affirmTypeNo);

    int deleteByObjectAndType(@Param("affirmObject") String affirmObject,
                              @Param("affirmTypeNo") String affirmTypeNo);

    int insertAffirmor(@Param("affirmObject") String affirmObject,
                       @Param("affirmTypeNo") String affirmTypeNo,
                       @Param("affirmorId") String affirmorId,
                       @Param("affirmLevel") Integer affirmLevel);
}
