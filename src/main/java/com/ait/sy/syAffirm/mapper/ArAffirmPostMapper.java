package com.ait.sy.syAffirm.mapper;

import com.ait.sy.syAffirm.dto.ArAffirmPostDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Cấu hình vai trò người duyệt - bảng SY_AFFIRM_LEVEL_SETUP (cpnyId/lang/adminID do LanguageParameterInterceptor inject). */
@Mapper
public interface ArAffirmPostMapper {

    List<ArAffirmPostDto> selectList();

    int countByDuty(@Param("duty") String duty);

    int insert(@Param("duty") String duty, @Param("affirmLevel") Integer affirmLevel);

    int update(@Param("duty") String duty, @Param("affirmLevel") Integer affirmLevel);

    int delete(@Param("duty") String duty);
}
