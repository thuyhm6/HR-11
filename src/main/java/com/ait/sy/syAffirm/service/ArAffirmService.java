package com.ait.sy.syAffirm.service;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.AffirmSpecialTypeDto;
import com.ait.sy.syAffirm.dto.ArAffirmDto;

import java.util.List;

public interface ArAffirmService {

    /** Loại đơn chấm công (lọc tìm kiếm + chọn khi thêm/sửa). */
    List<AffirmSpecialTypeDto> getApplyTypeList() throws BusinessException;

    /** Quy trình phê duyệt chấm công (TYPE = 'ar') của công ty đang đăng nhập, lọc theo loại đơn nếu có. */
    List<ArAffirmDto> getList(String applyType) throws BusinessException;

    void add(ArAffirmDto dto) throws BusinessException;

    void update(ArAffirmDto dto) throws BusinessException;

    void delete(Long applyParamNo) throws BusinessException;
}
