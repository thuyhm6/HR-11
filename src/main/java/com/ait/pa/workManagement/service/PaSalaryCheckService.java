package com.ait.pa.workManagement.service;

import com.ait.exception.BusinessException;
import com.ait.pa.workManagement.dto.PaMonthDifItemDto;
import com.ait.pa.workManagement.dto.PaMonthPersonSummaryDto;
import com.ait.pa.workManagement.dto.PaResultConfirmSummaryDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckItemDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckRowDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckSearchDto;

import java.util.List;

/**
 * Nhóm màn hình kiểm tra / đối chiếu lương: Hiện trạng lương theo tháng, So sánh lương theo tháng, Kiểm tra quyết định
 * nhân sự, Chi tiết lương cá nhân, Kiểm tra cá nhân, Lương theo hạng mục, Chênh lệch hạng mục, Xác nhận kết quả.
 */
public interface PaSalaryCheckService {

    PaMonthPersonSummaryDto getMonthPersonSummary(PaSalaryCheckSearchDto search) throws BusinessException;

    List<PaSalaryCheckRowDto> getEmployeesByPersonIds(List<String> personIds) throws BusinessException;

    List<PaMonthDifItemDto> getMonthChainList(PaSalaryCheckSearchDto search) throws BusinessException;

    List<PaSalaryCheckRowDto> getVerificationList(PaSalaryCheckSearchDto search) throws BusinessException;

    PaSalaryCheckRowDto getPersonEmpInfo(PaSalaryCheckSearchDto search) throws BusinessException;

    List<PaSalaryCheckItemDto> getPersonSalaryItems(PaSalaryCheckSearchDto search) throws BusinessException;

    List<PaSalaryCheckItemDto> getItemOptions() throws BusinessException;

    List<PaSalaryCheckRowDto> getItemCountList(PaSalaryCheckSearchDto search) throws BusinessException;

    /** Gọi procedure PA_MONTH_DIF_ITEM_VIEW rồi trả về tổng hợp theo hạng mục + loại thay đổi. */
    List<PaMonthDifItemDto> getMonthDifGroups(PaSalaryCheckSearchDto search) throws BusinessException;

    /** refresh = true: gọi lại procedure PA_MONTH_DIF_ITEM_VIEW trước khi đọc (trang Chênh lệch hạng mục). */
    List<PaSalaryCheckRowDto> getMonthDifDetails(PaSalaryCheckSearchDto search, boolean refresh) throws BusinessException;

    PaResultConfirmSummaryDto getResultConfirmSummary(PaSalaryCheckSearchDto search) throws BusinessException;

    List<PaSalaryCheckRowDto> getResultConfirmOtList(PaSalaryCheckSearchDto search) throws BusinessException;

    List<PaSalaryCheckRowDto> getResultConfirmOtDetails(PaSalaryCheckSearchDto search) throws BusinessException;

    List<PaSalaryCheckRowDto> getResultConfirmInsuranceList(PaSalaryCheckSearchDto search) throws BusinessException;

    List<PaSalaryCheckRowDto> getResultConfirmTaxList(PaSalaryCheckSearchDto search) throws BusinessException;
}
