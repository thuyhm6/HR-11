package com.ait.mobile.home.controller;

import com.ait.mobile.common.MobileCurrentUser;
import com.ait.mobile.common.MobileResponse;
import com.ait.mobile.home.dto.MobileHomeSummaryDto;
import com.ait.mobile.home.service.MobileHomeService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mobile/api/home")
public class MobileHomeController {

    @Autowired
    private MobileHomeService mobileHomeService;

    @GetMapping("/summary")
    public MobileResponse<MobileHomeSummaryDto> summary(HttpSession session) {
        return MobileResponse.ok(mobileHomeService.getSummary(MobileCurrentUser.personId(session)));
    }
}
