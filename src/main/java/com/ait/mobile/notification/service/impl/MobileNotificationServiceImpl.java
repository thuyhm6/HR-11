package com.ait.mobile.notification.service.impl;

import com.ait.mobile.common.MobileApplyStatus;
import com.ait.mobile.common.MobileMessages;
import com.ait.mobile.notification.dto.MobileNotiTargetDto;
import com.ait.mobile.notification.dto.MobileNotificationDto;
import com.ait.mobile.notification.dto.MobilePushTokenDto;
import com.ait.mobile.notification.mapper.MobileNotificationMapper;
import com.ait.mobile.notification.push.FcmPushClient;
import com.ait.mobile.notification.service.MobileNotificationService;
import com.ait.util.I18nUtil;
import jakarta.annotation.PreDestroy;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.locks.ReentrantLock;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
public class MobileNotificationServiceImpl implements MobileNotificationService {

    private static final Logger log = LoggerFactory.getLogger(MobileNotificationServiceImpl.class);
    private static final int MAX_LIMIT = 100;

    @Value("${mobile.notification.lookback-days:30}")
    private int lookbackDays;

    @Autowired
    private MobileNotificationMapper mapper;

    @Autowired
    private FcmPushClient pushClient;

    private final ReentrantLock scanLock = new ReentrantLock();
    private final AtomicBoolean rescanRequested = new AtomicBoolean(false);
    private final ExecutorService executor = Executors.newSingleThreadExecutor(r -> {
        Thread t = new Thread(r, "mobile-noti-scan");
        t.setDaemon(true);
        return t;
    });

    @PreDestroy
    void shutdown() {
        executor.shutdownNow();
    }

    @Override
    public List<MobileNotificationDto> getMyNotifications(String personId, int offset, int limit) {
        try {
            return mapper.selectMyNotifications(personId, Math.max(0, offset), Math.min(Math.max(1, limit), MAX_LIMIT));
        } catch (Exception e) {
            log.error("Lỗi lấy thông báo personId={}: {}", personId, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public int countUnread(String personId) {
        return mapper.countUnread(personId);
    }

    @Override
    public void markRead(String personId, Long notiNo) {
        mapper.markRead(personId, notiNo);
    }

    @Override
    public void markAllRead(String personId) {
        mapper.markAllRead(personId);
    }

    @Override
    public void scanAsync() {
        executor.execute(this::scan);
    }

    @Override
    public int scan() {
        if (!scanLock.tryLock()) {
            // Đang quét: đánh dấu quét lại 1 lần sau khi xong để không bỏ sót thay đổi mới
            rescanRequested.set(true);
            return 0;
        }
        int created = 0;
        try {
            do {
                rescanRequested.set(false);
                created += scanApprovalRequests();
                created += scanApplyResults();
            } while (rescanRequested.get());
            if (created > 0) {
                log.info("[MobileNoti] Đã tạo {} thông báo", created);
            }
        } catch (Exception e) {
            log.error("[MobileNoti] Lỗi quét thông báo: {}", e.getMessage(), e);
        } finally {
            scanLock.unlock();
        }
        return created;
    }

    /** Có đơn mới / đến lượt duyệt => báo người duyệt. */
    private int scanApprovalRequests() {
        int created = 0;
        for (MobileNotiTargetDto t : mapper.selectApprovalRequestTargets(lookbackDays)) {
            Locale locale = I18nUtil.createLocale(MobileMessages.normalizeLang(t.getDeviceLang()));
            String typeName = categoryName(t.getCategory(), locale);
            MobileNotificationDto n = new MobileNotificationDto();
            n.setRecipientId(t.getRecipientId());
            n.setCompanyId(t.getCompanyId());
            n.setNotiType(MobileNotificationDto.TYPE_APPROVAL_REQUEST);
            n.setTitle(MobileMessages.get("mobile.noti.approvalRequest.title", "Có đơn cần bạn duyệt", locale));
            n.setBody(MobileMessages.get("mobile.noti.approvalRequest.body", "{0} gửi đơn {1} {2}", locale,
                    nvl(t.getApplicantName()), typeName, nvl(t.getPeriod())).trim());
            n.setRefType(categoryRef(t.getCategory()));
            n.setRefId(t.getApplyNo());
            n.setRefExtra(t.getApplyType());
            n.setDedupKey(MobileNotificationDto.TYPE_APPROVAL_REQUEST + ":" + t.getApplyNo() + ":" + t.getAffirmLevel());
            if (createAndPush(n)) {
                created++;
            }
        }
        return created;
    }

    /** Đơn của tôi đã được duyệt xong / bị từ chối => báo người gửi. */
    private int scanApplyResults() {
        int created = 0;
        for (MobileNotiTargetDto t : mapper.selectApplyResultTargets(lookbackDays)) {
            Locale locale = I18nUtil.createLocale(MobileMessages.normalizeLang(t.getDeviceLang()));
            boolean approved = MobileApplyStatus.APPROVED.equals(t.getAffirmFlag());
            MobileNotificationDto n = new MobileNotificationDto();
            n.setRecipientId(t.getRecipientId());
            n.setCompanyId(t.getCompanyId());
            n.setNotiType(MobileNotificationDto.TYPE_APPLY_RESULT);
            n.setTitle(approved
                    ? MobileMessages.get("mobile.noti.applyApproved.title", "Đơn của bạn đã được duyệt", locale)
                    : MobileMessages.get("mobile.noti.applyRejected.title", "Đơn của bạn bị từ chối", locale));
            String typeName = t.getTypeName() != null ? t.getTypeName() : categoryName(t.getCategory(), locale);
            n.setBody(MobileMessages.get("mobile.noti.applyResult.body", "{0} - {1}", locale,
                    nvl(typeName), nvl(t.getPeriod())));
            n.setRefType(t.getCategory());
            n.setRefId(t.getApplyNo());
            // Mã trạng thái cuối (duyệt / từ chối) để app hiển thị icon tương ứng
            n.setRefExtra(t.getAffirmFlag());
            n.setDedupKey(MobileNotificationDto.TYPE_APPLY_RESULT + ":" + t.getCategory() + ":" + t.getApplyNo());
            if (createAndPush(n)) {
                created++;
            }
        }
        return created;
    }

    /** Lưu thông báo (bỏ qua nếu trùng DEDUP_KEY) rồi đẩy tới mọi thiết bị của người nhận. */
    private boolean createAndPush(MobileNotificationDto n) {
        try {
            n.setNotiNo(mapper.selectNextNotiNo());
            mapper.insertNotification(n);
        } catch (DuplicateKeyException e) {
            return false;
        } catch (Exception e) {
            log.error("[MobileNoti] Lỗi lưu thông báo dedup={}: {}", n.getDedupKey(), e.getMessage(), e);
            return false;
        }
        if (!pushClient.isEnabled()) {
            return true;
        }
        Map<String, String> data = Map.of(
                "notiNo", String.valueOf(n.getNotiNo()),
                "notiType", n.getNotiType(),
                "refType", nvl(n.getRefType()),
                "refId", nvl(n.getRefId()),
                "refExtra", nvl(n.getRefExtra()));
        boolean anySent = false;
        for (MobilePushTokenDto device : mapper.selectPushTokens(n.getRecipientId())) {
            FcmPushClient.Result r = pushClient.send(device.getFcmToken(), n.getTitle(), n.getBody(), data);
            if (r == FcmPushClient.Result.SENT) {
                anySent = true;
            } else if (r == FcmPushClient.Result.INVALID_TOKEN) {
                mapper.clearFcmToken(device.getDeviceId(), device.getFcmToken());
            }
        }
        if (anySent) {
            mapper.markPushed(n.getNotiNo());
        }
        return true;
    }

    private static String categoryRef(String applyTypeCode) {
        return switch (nvl(applyTypeCode)) {
            case "21" -> "LEAVE";
            case "31" -> "OT";
            case "218197" -> "ANOMALY";
            default -> nvl(applyTypeCode);
        };
    }

    private static String categoryName(String category, Locale locale) {
        return switch (categoryRef(category)) {
            case "LEAVE" -> MobileMessages.get("mobile.noti.category.leave", "nghỉ phép", locale);
            case "OT" -> MobileMessages.get("mobile.noti.category.ot", "tăng ca", locale);
            case "ANOMALY" -> MobileMessages.get("mobile.noti.category.anomaly", "công bất thường", locale);
            default -> "";
        };
    }

    private static String nvl(String s) {
        return s == null ? "" : s;
    }
}
