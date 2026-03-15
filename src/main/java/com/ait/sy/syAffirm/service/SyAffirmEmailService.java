package com.ait.sy.syAffirm.service;

import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;

import java.util.List;

public interface SyAffirmEmailService {
    List<SyAffirmEmailDto> getList(SyAffirmEmailDto dto);
    
    SyAffirmEmailDto getById(String seq);
    
    void save(SyAffirmEmailDto dto);
    
    void delete(String seq);

    /**
     * Lấy danh sách người phê duyệt dựa trên các tham số cấu hình hệ thống
     */
    List<SyAffirmEmailDto> findAffirmorList(String applyTypeNo, String personId, String applyTypeCode, String applyLength);
}
