package com.ait.mobile.home.service;

import com.ait.mobile.home.dto.MobileHomeSummaryDto;

public interface MobileHomeService {

    MobileHomeSummaryDto getSummary(String personId);
}
