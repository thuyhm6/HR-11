package com.ait.sy.syAffirm.mapper;

import com.ait.sy.syAffirm.dto.HrmAffirmDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Quy trình phê duyệt khác - ESS_LEAVE_APPLY_PARAM với TYPE = 'pa' (cpnyId/lang/adminID do LanguageParameterInterceptor inject). */
@Mapper
public interface HrmAffirmMapper {

    List<HrmAffirmDto> selectList(@Param("applyType") String applyType);

    /** Số dòng trùng (loại đơn + loại nhân viên + vai trò), bỏ qua chính dòng đang sửa. */
    int countDuplicate(@Param("applyType") String applyType,
                       @Param("empType") String empType,
                       @Param("dutyNo") String dutyNo,
                       @Param("excludeApplyParamNo") Long excludeApplyParamNo);

    int insert(HrmAffirmDto dto);

    int update(HrmAffirmDto dto);

    int delete(@Param("applyParamNo") Long applyParamNo);
}
