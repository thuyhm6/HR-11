package com.ait.ess.infoApply.dto;

import lombok.Data;

/**
 * Xin phép tăng ca hàng loạt cho cấp dưới (bản gốc Hanwha_HTSV ess/infoApply/viewPiciOtAffirmLBatchList.jsp).
 * Dùng chung cho: 1 dòng danh sách (getNullBatchOTTSTOAffirmInfoList), tham số tìm kiếm, dữ liệu
 * gửi lên khi Lưu (saveOtApplyAffirmForBatch) và kết quả tính giờ (getValidateInfo).
 * Ngày dạng 'DD/MM/YYYY', giờ dạng 'HH:MI' - đúng định dạng bản gốc.
 */
@Data
public class EssPiciOtAffirmDto {
    // ===== Dữ liệu dòng =====
    private String applyNo;
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String shiftName;
    /** POST_FAMILY - 14015813 (khối gián tiếp) bắt buộc tăng ca tối thiểu 1 tiếng. */
    private String postFamily;
    private String dutyNo;
    private String otLimit;
    private String applyOtDate;
    private String otFromTime;
    private String otToTime;
    private String otApplyHour;
    private String otTypeCode;
    private String otTypeName;
    private String applyOtRemark;
    private String deductYn;
    private String offsetYn;
    private String affirmFlag;
    private String affirmFlagName;
    private String shiftStartTime;
    private String shiftEndTime;
    private String indoorTime;
    private String outdoorTime;
    private String weekdayOtTotal;
    private String weekendOtTotal;
    private String holidayOtTotal;
    /** Lũy kế năm (GET_AR_OT_TOTAIL ... '200'). */
    private String otTotal;
    /** Lũy kế tháng (GET_AR_OT_TOTAIL ... '30'). */
    private String otTotalMonth;
    /** Danh sách người duyệt dạng "1 [EMPID]Tên<br>..." - đúng getAgoAffirmor_ess3403() bản gốc. */
    private String affirmStr;
    private String createdBy;
    private String createDate;
    private String updatedBy;
    private String updateDate;
    /** Khóa tài liệu Cleverse - chỉ dùng nội bộ khi Lưu. */
    private String misDocId;

    // ===== Kết quả tính giờ (getValidateInfo) =====
    /** GET_AR_DATETYPE: 1440 ngày thường, 1441 cuối tuần, khác: ngày lễ. */
    private String dateType;
    /** Giờ hết ca + 2 tiếng (SHIFT_END_TIME_2) - giờ kết thúc mặc định khi tăng ca ngày thường. */
    private String shiftEndTime2;
    /** Số giờ tăng ca nếu làm trọn ca (dùng cho ngày nghỉ/lễ). */
    private String otShiftLength;

    // ===== Tham số tìm kiếm =====
    private String keyword;
    /** Danh sách mã phòng ban, phân tách bởi dấu phẩy. */
    private String deptNos;
    private String startDate;
    private String endDate;
    private String shiftNo;
    private String searchOtTypeCode;
    private String searchAffirmFlag;
    /** "1" = ẩn đơn đã hủy (checkbox CANCEL_FLAG bản gốc). */
    private String cancelFlag;
    /** "Y" = xóa các dòng trống (PERSON_ID rỗng) do người đăng nhập tạo trước khi lấy danh sách (tham số deleteYN trên URL menu). */
    private String deleteYN;
}
