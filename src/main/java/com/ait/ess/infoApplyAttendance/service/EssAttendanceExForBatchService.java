package com.ait.ess.infoApplyAttendance.service;

import com.ait.ess.infoApplyAttendance.dto.EssAttendanceExForBatchDto;

import java.util.List;
import java.util.Map;

public interface EssAttendanceExForBatchService {
    List<EssAttendanceExForBatchDto> getAttendanceExForBatchList(EssAttendanceExForBatchDto params);

    List<EssAttendanceExForBatchDto> getCheckAttendanceExForBatchList(EssAttendanceExForBatchDto params);

    Map<String, Object> getCardApplyDetail(String applyNo, String applyType);

    /** adminPersonId: người đăng nhập - người lập đơn (duyệt mức 0) và kiểm tra quyền bỏ qua chốt công như bản gốc. */
    int applyAttendanceExForBatch(List<EssAttendanceExForBatchDto> selectedRows, String adminPersonId);

    /** Tuyến duyệt dự kiến (loại 218197) theo từng NV: personId -> "1[EMPID]Tên  2[EMPID]Tên<br>..." (getAffirmor_ess3434 bản gốc). */
    Map<String, String> getAffirmorPreview(List<String> personIds);
}
