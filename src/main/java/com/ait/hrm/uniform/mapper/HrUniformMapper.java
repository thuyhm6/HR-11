package com.ait.hrm.uniform.mapper;

import com.ait.hrm.uniform.dto.HrUniformChangeDetailDto;
import com.ait.hrm.uniform.dto.HrUniformChangeDto;
import com.ait.hrm.uniform.dto.HrUniformChangeSearchDto;
import com.ait.hrm.uniform.dto.HrUniformEmpInfoDto;
import com.ait.hrm.uniform.dto.HrUniformItemDto;
import com.ait.hrm.uniform.dto.HrUniformMonthQtyDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface HrUniformMapper {

    // ==================== Danh mục đồng phục ====================

    List<HrUniformItemDto> selectItemList(@Param("activeOnly") boolean activeOnly);

    Long selectNextItemNo();

    int insertItem(HrUniformItemDto dto);

    int updateItem(HrUniformItemDto dto);

    int deleteItem(@Param("itemNo") Long itemNo);

    /** Đếm item đang hoạt động khác itemNo có cùng tên (so khớp không dấu, không phân biệt hoa thường). */
    int countItemByName(@Param("itemName") String itemName, @Param("excludeItemNo") Long excludeItemNo);

    // ==================== Đổi đồng phục ====================

    int countChangeList(HrUniformChangeSearchDto params);

    List<HrUniformChangeDto> selectChangeListPage(HrUniformChangeSearchDto params);

    List<HrUniformChangeDetailDto> selectChangeDetailList(@Param("changeNos") List<Long> changeNos);

    /** Tổng số lượng đã đổi theo tháng trong intervalMonths tháng trước tháng month (YYYY-MM). */
    List<HrUniformMonthQtyDto> selectPrevMonthQty(@Param("personIds") List<String> personIds,
                                                  @Param("month") String month,
                                                  @Param("intervalMonths") int intervalMonths);

    /** Các lần đổi của 1 nhân viên trong tháng month (YYYY-MM). */
    List<HrUniformChangeDto> selectPersonMonthChanges(@Param("personId") String personId,
                                                      @Param("month") String month,
                                                      @Param("intervalMonths") int intervalMonths);

    HrUniformEmpInfoDto selectEmpInfo(@Param("empId") String empId,
                                      @Param("intervalMonths") int intervalMonths);

    /**
     * Ngày đổi (DD/MM/YYYY) gần nhất của nhân viên nằm trong khoảng ±intervalMonths so với changeDate
     * (vi phạm quy tắc 6 tháng/1 lần). Null nếu không vi phạm.
     */
    String selectConflictChangeDate(@Param("personId") String personId,
                                    @Param("changeDate") String changeDate,
                                    @Param("intervalMonths") int intervalMonths,
                                    @Param("excludeChangeNo") Long excludeChangeNo);

    Long selectNextChangeNo();

    int insertChange(@Param("changeNo") Long changeNo,
                     @Param("personId") String personId,
                     @Param("changeDate") String changeDate,
                     @Param("reason") String reason,
                     @Param("remark") String remark);

    int updateChange(@Param("changeNo") Long changeNo,
                     @Param("changeDate") String changeDate,
                     @Param("reason") String reason,
                     @Param("remark") String remark);

    int deleteChange(@Param("changeNo") Long changeNo);

    int deleteChangeDetail(@Param("changeNo") Long changeNo);

    int insertChangeDetail(HrUniformChangeDetailDto detail);
}
