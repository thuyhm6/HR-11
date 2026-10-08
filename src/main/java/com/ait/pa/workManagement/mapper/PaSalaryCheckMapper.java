package com.ait.pa.workManagement.mapper;

import com.ait.pa.workManagement.dto.PaMonthDifItemDto;
import com.ait.pa.workManagement.dto.PaMonthPersonSummaryDto;
import com.ait.pa.workManagement.dto.PaResultConfirmSummaryDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckItemDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckRowDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckSearchDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Nhóm màn hình kiểm tra / đối chiếu lương - port từ sqlViewPaParam.xml (dự án Hanwha_HTSV), chỉ giữ nhánh HTSV
 * (PA_SUMMARY_HTSV) giống PaSalaryResultMapper.
 */
@Mapper
public interface PaSalaryCheckMapper {

    // ── Hiện trạng lương theo tháng (monthPersonCountInfoList) ───────────
    List<PaMonthPersonSummaryDto.CountRow> selectMonthPersonCounts(PaSalaryCheckSearchDto params);

    List<PaMonthPersonSummaryDto.ChangeRow> selectMonthPersonIncreases(PaSalaryCheckSearchDto params);

    List<PaMonthPersonSummaryDto.ChangeRow> selectMonthPersonDecreases(PaSalaryCheckSearchDto params);

    List<PaSalaryCheckRowDto> selectEmployeesByPersonIds(@Param("personIds") List<String> personIds);

    // ── Kiểm tra quyết định nhân sự (viewVerificationList) ───────────────
    List<PaSalaryCheckRowDto> selectVerificationList(PaSalaryCheckSearchDto params);

    // ── Chi tiết lương cá nhân (detailPersonCountInfo / detailPersonCountInfoRight) ──
    PaSalaryCheckRowDto selectPersonEmpInfo(PaSalaryCheckSearchDto params);

    void callSalaryDetailPage(PaSalaryCheckSearchDto params);

    List<PaSalaryCheckItemDto> selectPersonSalaryItems(PaSalaryCheckSearchDto params);

    // ── Hạng mục (itemValueInfo / detailItemCountInfo) ────────────────────
    List<PaSalaryCheckItemDto> selectItemOptions();

    /** itemColumn đã được service kiểm tra whitelist (ITEM_ID của PA_ITEM_INPUT) - dùng ${} để chọn cột động. */
    List<PaSalaryCheckRowDto> selectItemCountList(@Param("payScheduleNo") String payScheduleNo,
                                                  @Param("itemId") String itemId,
                                                  @Param("itemColumn") String itemColumn);

    // ── Chênh lệch hạng mục giữa 2 kỳ (PA_MONTH_DIF_ITEM_TEMP) ──────────
    void callMonthDifItem(PaSalaryCheckSearchDto params);

    void callMonthDifItemCompare(PaSalaryCheckSearchDto params);

    List<PaMonthDifItemDto> selectMonthDifGroups(PaSalaryCheckSearchDto params);

    List<PaSalaryCheckRowDto> selectMonthDifDetails(PaSalaryCheckSearchDto params);

    List<PaMonthDifItemDto> selectMonthChainList();

    // ── Xác nhận kết quả (viewResultConfirmSonList 0/2/5/6, List2Bottom) ──
    PaResultConfirmSummaryDto selectResultConfirmSummary(PaSalaryCheckSearchDto params);

    List<PaSalaryCheckRowDto> selectResultConfirmOtList(PaSalaryCheckSearchDto params);

    List<PaSalaryCheckRowDto> selectResultConfirmOtDetails(PaSalaryCheckSearchDto params);

    List<PaSalaryCheckRowDto> selectResultConfirmInsuranceList(PaSalaryCheckSearchDto params);

    List<PaSalaryCheckRowDto> selectResultConfirmTaxList(PaSalaryCheckSearchDto params);
}
