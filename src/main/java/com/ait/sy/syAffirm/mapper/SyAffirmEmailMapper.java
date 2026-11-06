package com.ait.sy.syAffirm.mapper;

import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface SyAffirmEmailMapper {
    List<SyAffirmEmailDto> selectList(SyAffirmEmailDto dto);

    List<SyAffirmEmailDto> selectApprovalEmailList(SyAffirmEmailDto dto);

    List<SyAffirmEmailDto> selectApprovaledEmailList(SyAffirmEmailDto dto);

    void callAffirmExecute(Map<String, Object> params);

    /**
     * Các dòng duyệt của đơn đang chờ chính người đăng nhập (#{adminID}) - cùng điều kiện với hộp duyệt
     * selectApprovalEmailList. Dùng để lấy APPLY_FLAG / AFFIRM_LEVEL từ DB khi duyệt, không tin dữ liệu client.
     */
    List<SyAffirmEmailDto> selectMyPendingAffirmRows(@Param("applyNo") String applyNo,
            @Param("applyType") String applyType);

    SyAffirmEmailDto selectById(@Param("seq") String seq);

    int insert(SyAffirmEmailDto dto);

    int update(SyAffirmEmailDto dto);

    int delete(@Param("applyNo") String applyNo);

    /**
     * Gọi Oracle Function GET_AFFIRMOR_LIST_IMPROVE
     *
     * @param params chứa các tham số đầu vào và key "resultList" để nhận dữ liệu
     *               đầu ra
     */
    void getAffirmorList(Map<String, Object> params);

    int countPendingApprovals(SyAffirmEmailDto dto);

    int countHrmPendingLeave();

    int countHrmPendingAnomalous();

    List<SyAffirmEmailDto> selectNoticeedEmailList(SyAffirmEmailDto dto);
}
