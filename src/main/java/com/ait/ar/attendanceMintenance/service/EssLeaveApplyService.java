package com.ait.ar.attendanceMintenance.service;

import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyImportTempDto;
import java.util.List;
import java.util.Map;

public interface EssLeaveApplyService {
    List<EssLeaveApplyDto> getList(EssLeaveApplyDto dto);
    void saveLeaveApply(Map<String, Object> params);
    Map<String, Object> getLeaveApplyDetail(String applyNo, String applyType);
    List<EssLeaveApplyImportTempDto> getImportTempList(String errorOnly);
    String importTempToOfficial();
}
