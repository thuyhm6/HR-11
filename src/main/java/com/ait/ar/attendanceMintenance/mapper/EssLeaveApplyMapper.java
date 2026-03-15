package com.ait.ar.attendanceMintenance.mapper;

import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface EssLeaveApplyMapper {

    List<EssLeaveApplyDto> selectList(EssLeaveApplyDto dto);
    /**
     * Lấy giá trị tiếp theo của sequence ESS_APPLY_SEQ
     */
    Long getNextApplySeq();

    void insertLeaveApply(Map<String, Object> params);

    void updateLeaveApply(Map<String, Object> params);

    // Call Delete Confirm Procedure
    void callDeleteLeaveConfirm(Map<String, Object> params);

    void deleteArApplyResult(@Param("applyNo") String applyNo);
}
