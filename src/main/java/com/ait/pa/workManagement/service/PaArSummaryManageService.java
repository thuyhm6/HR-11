package com.ait.pa.workManagement.service;

import com.ait.exception.BusinessException;
import com.ait.pa.workManagement.dto.PaArSummaryManageDto;
import com.ait.pa.workManagement.dto.PaArSummaryManageSaveDto;
import com.ait.pa.workManagement.dto.PaArSummaryManageSearchDto;
import com.ait.pa.workManagement.dto.PaArSummaryOptionDto;

import java.util.List;

/** Quản lý tổng hợp chấm công - chuyển từ PaArSummaryManageSerImp (Hanwha_HTSV). */
public interface PaArSummaryManageService {

    List<PaArSummaryOptionDto> getPayScheduleList();

    List<PaArSummaryOptionDto> getSummaryItemList();

    List<PaArSummaryManageDto> getList(PaArSummaryManageSearchDto params) throws BusinessException;

    /** @return số dòng đã cập nhật */
    int save(PaArSummaryManageSaveDto dto) throws BusinessException;

    /** File .xlsx: Mã NV / Họ tên / Phòng ban + 1 cột cho mỗi hạng mục tổng hợp chấm công. */
    byte[] exportExcel(PaArSummaryManageSearchDto params) throws BusinessException;
}
