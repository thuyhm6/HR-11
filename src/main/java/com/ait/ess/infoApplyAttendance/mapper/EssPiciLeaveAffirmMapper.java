package com.ait.ess.infoApplyAttendance.mapper;

import com.ait.ess.infoApplyAttendance.dto.EssPiciLeaveAffirmDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Xin nghỉ phép hàng loạt (viewApplyAttenanceBatchInfoList / viewApplyAttenanceManagentInfoList_new) - xem EssPiciLeaveAffirmMapper.xml. */
@Mapper
public interface EssPiciLeaveAffirmMapper {

    /** Danh sách đơn nghỉ của cấp dưới + dòng trống do chính người đăng nhập tạo (getNullBatchLeaveAffirmInfoList). */
    List<EssPiciLeaveAffirmDto> selectList(EssPiciLeaveAffirmDto dto);

    EssPiciLeaveAffirmDto selectByApplyNo(@Param("applyNo") String applyNo);

    /** Xóa các dòng trống (PERSON_ID rỗng) của người đăng nhập khi mở trang (delAttendanceExForBatchInfoList). */
    int deleteEmptyApply();

    Long getNextApplySeq();

    /** Tạo dòng trống - đúng ess.infoApplyLeave.addAttendanceApplyInfoForBatch. */
    int insertEmptyApply(@Param("applyNo") String applyNo);

    /** AR_GET_DAY_HOURS + GET_AR_LEAVE_LENGTH theo NV/thời gian/loại nghỉ (callength() bản gốc). */
    EssPiciLeaveAffirmDto selectLeaveLength(EssPiciLeaveAffirmDto dto);

    /** Tổng phép năm / còn lại / ca làm của NV tại ngày nghỉ (getAttendanceInformation). */
    EssPiciLeaveAffirmDto selectEmpLeaveInfo(@Param("personId") String personId, @Param("applyDate") String applyDate);

    /** AR_GET_LEAVE_CLASH: >0 trùng, -1 đã chốt công, -2 đã khóa, -3 không đủ phép năm. */
    int checkLeaveClash(EssPiciLeaveAffirmDto dto);

    /** Cập nhật đơn và chuyển trạng thái "Gửi" - đúng ess.infoApplyLeave.updateLeaveApplyInfoForBatch. */
    int updateLeaveApply(EssPiciLeaveAffirmDto dto);

    String selectNextMisDocId();

    /** Ghi nhận thay đổi ca khi hủy đơn - đúng ess.infoApplyLeave.insertArShiftChange. */
    int insertArShiftChange(@Param("applyNo") String applyNo);
}
