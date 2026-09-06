package com.ait.ess.viewDept.service;

import com.ait.ess.viewDept.dto.ManageCountInfoEmpDto;
import com.ait.ess.viewDept.dto.ManageCountInfoSummaryDto;

import java.util.List;

public interface ManageCountInfoService {

    ManageCountInfoSummaryDto getSummary(ManageCountInfoEmpDto params);

    List<ManageCountInfoEmpDto> getList(ManageCountInfoEmpDto params);
}
