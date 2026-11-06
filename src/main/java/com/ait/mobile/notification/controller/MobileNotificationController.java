package com.ait.mobile.notification.controller;

import com.ait.mobile.common.MobileCurrentUser;
import com.ait.mobile.common.MobileResponse;
import com.ait.mobile.notification.dto.MobileNotificationDto;
import com.ait.mobile.notification.service.MobileNotificationService;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/** Thông báo của người đăng nhập. */
@RestController
@RequestMapping("/mobile/api/notifications")
public class MobileNotificationController {

    @Autowired
    private MobileNotificationService notificationService;

    @GetMapping
    public MobileResponse<List<MobileNotificationDto>> list(@RequestParam(defaultValue = "0") int offset,
            @RequestParam(defaultValue = "30") int limit, HttpSession session) {
        return MobileResponse.ok(
                notificationService.getMyNotifications(MobileCurrentUser.personId(session), offset, limit));
    }

    @GetMapping("/unread-count")
    public MobileResponse<Map<String, Integer>> unreadCount(HttpSession session) {
        return MobileResponse.ok(Map.of("count", notificationService.countUnread(MobileCurrentUser.personId(session))));
    }

    @PostMapping("/{notiNo}/read")
    public MobileResponse<Void> markRead(@PathVariable Long notiNo, HttpSession session) {
        notificationService.markRead(MobileCurrentUser.personId(session), notiNo);
        return MobileResponse.ok(null);
    }

    @PostMapping("/read-all")
    public MobileResponse<Void> markAllRead(HttpSession session) {
        notificationService.markAllRead(MobileCurrentUser.personId(session));
        return MobileResponse.ok(null);
    }
}
