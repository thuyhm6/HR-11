package com.ait.mobile.leave.service;

import com.ait.mobile.common.dto.MobileApproverDto;
import com.ait.mobile.leave.dto.MobileLeaveApplyRequest;
import com.ait.mobile.leave.dto.MobileLeaveDetailDto;
import com.ait.mobile.leave.dto.MobileLeaveFormDto;
import com.ait.mobile.leave.dto.MobileLeaveItemDto;
import com.ait.mobile.leave.dto.MobileLeaveLengthDto;
import com.ait.mobile.leave.dto.MobileVacationDto;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

/**
 * Nghỉ phép trên app - bọc lại nghiệp vụ của màn "Xin nghỉ phép cá nhân" (sst-apply-attendance) và
 * "Danh sách đơn nghỉ của tôi" (apply-attendance-info-list) ở web. personId luôn lấy từ token.
 */
public interface MobileLeaveService {

    MobileLeaveFormDto getFormInfo(String personId);

    MobileVacationDto getVacation(String personId);

    MobileLeaveLengthDto calcLength(String fromTime, String toTime, String leaveTypeCode);

    /** Ném MobileException nếu loại nghỉ không áp dụng cho giới tính của nhân viên. */
    void checkLeaveType(String personId, String leaveTypeCode);

    List<MobileApproverDto> getApprovers(String personId, String leaveTypeCode, String applyLength);

    /** @return applyNo của đơn vừa tạo */
    String apply(String personId, MobileLeaveApplyRequest req, List<MultipartFile> files);

    List<MobileLeaveItemDto> getMyList(String fromDate, String toDate, String affirmFlag);

    MobileLeaveDetailDto getDetail(String personId, String applyNo);

    /** @return số đơn đã hủy */
    int cancel(List<String> applyNos);
}
