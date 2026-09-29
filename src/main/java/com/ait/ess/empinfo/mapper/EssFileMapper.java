package com.ait.ess.empinfo.mapper;

import com.ait.ess.empinfo.dto.EssFileDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface EssFileMapper {

    int insertEssFile(EssFileDto dto);

    List<EssFileDto> selectFilesByApplyNo(@Param("applyNo") String applyNo);

    EssFileDto selectByFileNo(@Param("fileNo") String fileNo);

    /** File đính kèm theo đúng cặp (APPLY_TYPE, APPLY_NO) - APPLY_NO giữa các loại có thể trùng số. */
    List<EssFileDto> selectFilesByApply(@Param("applyType") String applyType, @Param("applyNo") String applyNo);

    /** Toàn bộ file đang hoạt động của 1 APPLY_TYPE - dùng để gắn file cho cả danh sách bằng 1 câu SQL. */
    List<EssFileDto> selectFilesByApplyType(@Param("applyType") String applyType);

    /** Vô hiệu hóa (ACTIVITY = 0) các file thuộc (APPLY_TYPE, APPLY_NO); fileNos rỗng = toàn bộ file. */
    int deactivateFiles(@Param("applyType") String applyType, @Param("applyNo") String applyNo,
                        @Param("fileNos") List<String> fileNos);
}
