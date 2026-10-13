package com.ait.cleverse.mapper;

import com.ait.cleverse.dto.CleverseApprovalApplyDto;
import com.ait.cleverse.dto.CleverseApprovalSignerDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * Port từ sqlMap sys.endEmail (Hanwha_HAE - sqlSendEmail.xml), phần gửi đơn sang Cleverse.
 */
@Mapper
public interface CleverseApprovalMapper {

    /** Các đơn (nghỉ phép, tăng ca, OT over, quẹt thẻ, đào tạo) đang chờ duyệt và chưa gửi sang Cleverse. */
    List<CleverseApprovalApplyDto> selectWaitSendApplyList(Map<String, Object> params);

    /** Danh sách người duyệt (AFFIRM_TYPE khác 3, AFFIRM_FLAG = 0) của đơn - params: applyNo */
    List<CleverseApprovalSignerDto> selectAffirmListByApplyNo(Map<String, Object> params);

    /** Danh sách người nhận thông báo (AFFIRM_TYPE IN (3,4)) của đơn - params: applyNo */
    List<CleverseApprovalSignerDto> selectReceiverListByApplyNo(Map<String, Object> params);

    /** Các đơn đã gửi Cleverse và chưa kết thúc, cần đồng bộ trạng thái duyệt - params: cpnyId */
    List<CleverseApprovalApplyDto> selectSyncApprovalList(Map<String, Object> params);

    /** Thông tin đơn nghỉ chưa báo bảo vệ (ATTENDACE_FLAG IS NULL) - params: applyNo */
    List<CleverseApprovalApplyDto> selectApplyLeaveData(Map<String, Object> params);

    /** Đánh dấu đơn nghỉ đã báo bảo vệ - params: applyNo */
    int updateAttendanceFlag(Map<String, Object> params);

    int updateAttApplySendFlag(Map<String, Object> params);

    int updateOtApplySendFlag(Map<String, Object> params);

    int updateOtOverApplySendFlag(Map<String, Object> params);

    int updateCardApplySendFlag(Map<String, Object> params);

    int updateTrainApplySendFlag(Map<String, Object> params);
}
