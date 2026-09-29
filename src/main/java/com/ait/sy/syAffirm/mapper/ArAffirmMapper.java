package com.ait.sy.syAffirm.mapper;

import com.ait.sy.syAffirm.dto.AffirmSpecialTypeDto;
import com.ait.sy.syAffirm.dto.ArAffirmDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Quy trình phê duyệt chấm công - ESS_LEAVE_APPLY_PARAM với TYPE = 'ar' (cpnyId/lang/adminID do LanguageParameterInterceptor inject). */
@Mapper
public interface ArAffirmMapper {

    /** Loại đơn chấm công: mã con của các nhóm thuộc 16413 (giống sys.arAffirm.getApplyList bản gốc). */
    List<AffirmSpecialTypeDto> selectApplyTypeList();

    List<ArAffirmDto> selectList(@Param("applyType") String applyType);

    int insert(ArAffirmDto dto);

    int update(ArAffirmDto dto);

    int delete(@Param("applyParamNo") Long applyParamNo);
}
