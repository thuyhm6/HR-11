package com.ait.mobile.approval.mapper;

import com.ait.mobile.approval.dto.MobileAffirmRowDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface MobileApprovalMapper {

    /** Dòng duyệt đang chờ {@code approverId} (cùng điều kiện với hộp duyệt web selectApprovalEmailList). */
    MobileAffirmRowDto selectPendingRow(@Param("applyNo") String applyNo, @Param("applyType") String applyType,
            @Param("approverId") String approverId);

    /** Người này có nằm trong tuyến duyệt của đơn không (để được xem chi tiết đơn). */
    int countAffirmRows(@Param("applyNo") String applyNo, @Param("approverId") String approverId);

    /** Dòng duyệt mới nhất của người này cho đơn (bất kể trạng thái) - lấy tiêu đề / người gửi. */
    MobileAffirmRowDto selectLatestRow(@Param("applyNo") String applyNo, @Param("approverId") String approverId);
}
