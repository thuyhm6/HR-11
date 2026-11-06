package com.ait.hrm.empinfo.mapper;

import com.ait.hrm.empinfo.dto.HrExpInsideDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

@Mapper
public interface HrExpInsideMapper {

    /** Tìm nhân viên theo mã/tên (popup chọn nhân viên - bản gốc viewEmpInfoListTanchu). */
    List<HrExpInsideDto> selectEmployeeList(@Param("keyword") String keyword);

    /** Thông tin nhân viên hiển thị trên đầu trang (Tên / Mã NV / Chức vụ / Trạng thái). */
    HrExpInsideDto selectEmployeeInfo(@Param("personId") String personId);

    /** Toàn bộ quyết định của nhân viên (bản gốc getStartPointList - không phân trang). */
    List<HrExpInsideDto> selectDecisionList(@Param("personId") String personId);

    HrExpInsideDto selectDecisionBySeq(@Param("seq") Long seq);

    /** Thông tin hiện tại ở HR_EMPLOYEE - giá trị mặc định khi thêm quyết định mới (bản gốc viewCurrentHrInfo). */
    HrExpInsideDto selectCurrentHrInfo(@Param("personId") String personId);

    Long selectNextSeq();

    void insertDecision(HrExpInsideDto dto);

    void updateDecision(HrExpInsideDto dto);

    /** Hủy quyết định "Chính thức" phát sinh sau quyết định nghỉ việc (bản gốc updatePositivePointActivity). */
    void updatePositivePointActivity(@Param("personId") String personId);

    void deleteDecision(@Param("seq") Long seq);

    /** Sau khi xóa: đưa các quyết định có hiệu lực từ ngày của quyết định bị xóa về chưa hiệu lực (bản gốc updateActivity). */
    void updateActivityAfterDelete(@Param("personId") String personId, @Param("startDate") String startDate);

    void callExperienceExecuteSingle();
}
