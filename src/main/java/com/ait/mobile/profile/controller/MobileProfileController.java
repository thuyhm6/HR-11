package com.ait.mobile.profile.controller;

import com.ait.ess.empinfo.dto.EssPersonalInfoDto;
import com.ait.ess.empinfo.service.EssPersonalInfoService;
import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.common.MobileResponse;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Hồ sơ cá nhân trên app - dùng lại EssPersonalInfoService của màn ESS web.
 * personId luôn lấy từ token (session ảo), không nhận từ client để tránh xem hồ sơ người khác.
 */
@RestController
@RequestMapping("/mobile/api/profile")
public class MobileProfileController {

    private static final Logger log = LoggerFactory.getLogger(MobileProfileController.class);

    @Autowired
    private EssPersonalInfoService essPersonalInfoService;

    @GetMapping
    public MobileResponse<EssPersonalInfoDto> myProfile(HttpSession session) {
        String personId = (String) session.getAttribute("adminID");
        try {
            EssPersonalInfoDto info = essPersonalInfoService.getMyInfo(personId);
            if (info == null) {
                throw new MobileException(MobileErrorCode.NOT_FOUND);
            }
            return MobileResponse.ok(info);
        } catch (MobileException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi lấy hồ sơ cá nhân mobile personId={}: {}", personId, e.getMessage(), e);
            throw e;
        }
    }
}
