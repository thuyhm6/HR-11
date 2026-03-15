package com.ait.ar.attendanceMintenance.service;

import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
import java.util.List;
import java.util.Map;

public interface EssLeaveApplyService {
    List<EssLeaveApplyDto> getList(EssLeaveApplyDto dto);
    void saveLeaveApply(Map<String, Object> params);
}
