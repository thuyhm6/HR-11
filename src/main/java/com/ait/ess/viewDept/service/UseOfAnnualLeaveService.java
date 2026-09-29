package com.ait.ess.viewDept.service;

import com.ait.ess.viewDept.dto.UseOfAnnualLeaveDto;

import java.util.List;

public interface UseOfAnnualLeaveService {

    List<UseOfAnnualLeaveDto> getList(UseOfAnnualLeaveDto params);
}
