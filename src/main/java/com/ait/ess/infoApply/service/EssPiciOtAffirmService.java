package com.ait.ess.infoApply.service;

import com.ait.ess.infoApply.dto.EssPiciOtAffirmDto;

import java.util.List;

/** Xin phép tăng ca hàng loạt cho cấp dưới - bản gốc Hanwha_HTSV viewPiciOtAffirmLBatchList. */
public interface EssPiciOtAffirmService {

    /** deleteYN = "Y": xóa các dòng trống do người đăng nhập tạo trước khi lấy danh sách. */
    List<EssPiciOtAffirmDto> getList(EssPiciOtAffirmDto search);

    /** Thêm 1 dòng trống (addOtApplyAffirm) và trả về dòng vừa tạo. */
    EssPiciOtAffirmDto addEmptyRow();

    /** Tính loại tăng ca/số giờ/giờ ca (getValidateInfo). */
    EssPiciOtAffirmDto getValidateInfo(EssPiciOtAffirmDto dto);

    /** Ca làm + lũy kế tăng ca của NV tại ngày tăng ca (getOt_Totail). */
    EssPiciOtAffirmDto getEmpOtInfo(String personId, String applyOtDate);

    /** Giờ mặc định theo ca của người đăng nhập (getDefaultOtTimeSST). */
    EssPiciOtAffirmDto getDefaultTime(String applyOtDate);

    /** Danh sách người duyệt dự kiến dạng "1 [EMPID]Tên<br>..." (getAffirmor_ess3403). */
    String getAffirmorPreview(String personId, String otTypeCode, String applyLength);

    /**
     * Lưu & gửi duyệt các dòng đã chọn (saveOtApplyAffirmForBatch).
     * hrMode = true: trang HR viewArOvertimeManagent_fast - chỉ chặn trùng giờ / đã khóa / vượt giới hạn.
     */
    void saveBatch(List<EssPiciOtAffirmDto> rows, String adminPersonId, boolean hrMode);

    /** Hủy các đơn đã chọn (delOtApplyAffirmForBatch). hrMode = true: không kiểm tra chốt công như bản gốc. */
    int cancelBatch(List<EssPiciOtAffirmDto> rows, boolean hrMode);
}
