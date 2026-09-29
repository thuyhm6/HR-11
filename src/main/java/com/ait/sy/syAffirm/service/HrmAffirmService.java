package com.ait.sy.syAffirm.service;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.HrmAffirmDto;

import java.util.List;

public interface HrmAffirmService {

    /** Quy trình phê duyệt khác (TYPE = 'pa') của công ty đang đăng nhập, lọc theo loại đơn nếu có. */
    List<HrmAffirmDto> getList(String applyType) throws BusinessException;

    /** Thêm mới - báo lỗi nếu (loại đơn + loại nhân viên + vai trò) đã tồn tại. */
    void add(HrmAffirmDto dto) throws BusinessException;

    void update(HrmAffirmDto dto) throws BusinessException;

    void delete(Long applyParamNo) throws BusinessException;
}
