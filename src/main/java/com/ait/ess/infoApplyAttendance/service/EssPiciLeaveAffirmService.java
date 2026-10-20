package com.ait.ess.infoApplyAttendance.service;

import com.ait.ess.infoApplyAttendance.dto.EssPiciLeaveAffirmDto;

import java.util.List;

/**
 * Xin nghỉ phép hàng loạt - bản gốc Hanwha_HTSV viewApplyAttenanceBatchInfoList (quản lý)
 * và viewApplyAttenanceManagentInfoList_new (HR, hrMode = true).
 */
public interface EssPiciLeaveAffirmService {

    /** firstLoad = true (mở trang): xóa các dòng trống còn sót của người đăng nhập trước khi tải - đúng bản gốc. */
    List<EssPiciLeaveAffirmDto> getList(EssPiciLeaveAffirmDto search, boolean firstLoad);

    /** Thêm 1 dòng trống (addAttendanceApplyInfoForBatch) và trả về dòng vừa tạo. */
    EssPiciLeaveAffirmDto addEmptyRow();

    /** Số giờ 1 ngày công + số giờ nghỉ (callength). */
    EssPiciLeaveAffirmDto getLeaveLength(EssPiciLeaveAffirmDto dto);

    /** Ca làm, tổng phép năm / còn lại của NV (getAttendanceInformation). */
    EssPiciLeaveAffirmDto getEmpLeaveInfo(String personId, String applyDate);

    /** Danh sách người duyệt dự kiến dạng "1 [EMPID]Tên<br>..." (getAffirmor_ess3401). */
    String getAffirmorPreview(String personId, String leaveTypeCode, String applyLength);

    /** Lưu & gửi duyệt các dòng đã chọn (saveAttendanceApplyInfoForBatch). */
    void saveBatch(List<EssPiciLeaveAffirmDto> rows, String adminPersonId, boolean hrMode);

    /** Hủy các đơn đã chọn (delAttendanceApplyInfoForBatch). */
    int cancelBatch(List<EssPiciLeaveAffirmDto> rows, boolean hrMode);
}
