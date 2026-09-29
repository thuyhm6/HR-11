package com.ait.sy.syAffirm.service;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.ArAffirmPostDto;

import java.util.List;

public interface ArAffirmPostService {

    /** Toàn bộ vai trò người duyệt của công ty đang đăng nhập, sắp theo cấp duyệt. */
    List<ArAffirmPostDto> getList() throws BusinessException;

    /** Thêm mới - báo lỗi nếu vai trò đã được cấu hình. */
    void add(ArAffirmPostDto dto) throws BusinessException;

    /** Cập nhật cấp duyệt của 1 vai trò đã có. */
    void update(ArAffirmPostDto dto) throws BusinessException;

    void delete(String duty) throws BusinessException;
}
