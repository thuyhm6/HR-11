package com.ait.pa.workManagement.mapper;

import com.ait.pa.workManagement.dto.PaArSummaryManageDto;
import com.ait.pa.workManagement.dto.PaArSummaryManageSaveDto;
import com.ait.pa.workManagement.dto.PaArSummaryManageSearchDto;
import com.ait.pa.workManagement.dto.PaArSummaryOptionDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Quản lý tổng hợp chấm công (AR_SUMMARY_MANAGE_HTSV) - chuyển từ PaArSummaryManageDaoImpl (Hanwha_HTSV). */
@Mapper
public interface PaArSummaryManageMapper {

    /** Kế hoạch trả lương đã có PA_WORK_FLOW, kèm cờ chốt lương (getPayScheduleAllWithPaConfirmList). */
    List<PaArSummaryOptionDto> selectPayScheduleList();

    /** Hạng mục tổng hợp chấm công được quản lý (MANAGE_FLAG = 1) - getSelectCodeMultiArSummaryList. */
    List<PaArSummaryOptionDto> selectSummaryItemList();

    /** Cờ chốt lương (PA_WORK_FLOW.PA_CONFIRM_FLAG) của kế hoạch trả lương. */
    Integer selectPaConfirmFlag(@Param("payScheduleNo") String payScheduleNo);

    List<PaArSummaryManageDto> selectList(PaArSummaryManageSearchDto params);

    /** Dữ liệu xuất Excel dạng dọc (1 dòng / NV / hạng mục) - pivot sang cột ở service. */
    List<PaArSummaryManageDto> selectExportList(PaArSummaryManageSearchDto params);

    int update(@Param("payScheduleNo") String payScheduleNo,
               @Param("item") PaArSummaryManageSaveDto.Item item);
}
