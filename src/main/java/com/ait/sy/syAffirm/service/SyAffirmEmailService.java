package com.ait.sy.syAffirm.service;

import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;

import java.util.List;
import java.util.Map;

public interface SyAffirmEmailService {
    List<SyAffirmEmailDto> getList(SyAffirmEmailDto dto);

    SyAffirmEmailDto getById(String seq);

    void save(SyAffirmEmailDto dto);

    void delete(String seq);

    List<SyAffirmEmailDto> findAffirmorList(String applyTypeNo, String personId, String applyTypeCode, String applyLength);

    List<SyAffirmEmailDto> getApprovalEmailList(SyAffirmEmailDto dto);

    List<SyAffirmEmailDto> getApprovaledEmailList(SyAffirmEmailDto dto);

    String executeAffirm(List<Map<String, Object>> items);

    /**
     * Duyệt / từ chối theo yêu cầu từ client (màn "Phê duyệt" web): chỉ nhận applyNo, applyType, flag (1 duyệt / 2 từ chối),
     * affirmContent; APPLY_FLAG / AFFIRM_LEVEL lấy từ dòng đang chờ chính người đăng nhập duyệt. Đơn không còn chờ
     * người này duyệt => báo lỗi, không gọi procedure.
     * @return chuỗi lỗi (rỗng = tất cả thành công)
     */
    String executeAffirmForCurrentUser(List<Map<String, Object>> items);

    Map<String, Integer> getPendingApprovalCounts();

    Map<String, Integer> getHrmPendingCounts();

    List<SyAffirmEmailDto> getNoticeedEmailList(SyAffirmEmailDto dto);
}
