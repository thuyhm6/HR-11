package com.ait.ess.infoApplyAttendance.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/** Xin nghỉ phép cá nhân - bản gốc Hanwha_HTSV ess/infoApplyAttendance/viewSSTApplyAttendance.jsp. */
public interface EssSstApplyAttendanceService {

    /**
     * Kiểm tra loại nghỉ chỉ dành cho nữ (nuôi con bú, khám thai, thai sản) / nam (vợ sinh) - đúng getLeaveDateSST bản gốc.
     *
     * @return thông báo lỗi, hoặc null nếu hợp lệ
     */
    String checkLeaveType(String personId, String applyType);

    /**
     * Lưu đơn (dùng lại EssLeaveApplyService.saveLeaveApply) + file đính kèm (ESS_FILE, APPLY_TYPE = LEAVE_APPLY).
     *
     * @return số đơn (APPLY_NO) vừa tạo
     */
    String save(Map<String, Object> params, List<MultipartFile> files) throws Exception;
}
