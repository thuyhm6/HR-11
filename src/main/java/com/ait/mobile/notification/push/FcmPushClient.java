package com.ait.mobile.notification.push;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.auth.oauth2.GoogleCredentials;
import jakarta.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Gửi push qua Firebase Cloud Messaging HTTP v1 (không dùng Firebase Admin SDK cho nhẹ).
 * Cấu hình: mobile.fcm.enabled / project-id / credentials-path (file JSON service account).
 */
@Component
public class FcmPushClient {

    private static final Logger log = LoggerFactory.getLogger(FcmPushClient.class);
    private static final String SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
    /** Kênh thông báo Android - app tạo kênh cùng id (push.service.ts). */
    public static final String ANDROID_CHANNEL_ID = "hr_default";

    public enum Result { SENT, INVALID_TOKEN, FAILED, DISABLED }

    @Value("${mobile.fcm.enabled:false}")
    private boolean enabled;

    @Value("${mobile.fcm.project-id:}")
    private String projectId;

    @Value("${mobile.fcm.credentials-path:}")
    private String credentialsPath;

    @Autowired
    private ObjectMapper objectMapper;

    private GoogleCredentials credentials;
    private final HttpClient http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();

    @PostConstruct
    void init() {
        if (!enabled) {
            log.info("[FCM] Push notification đang tắt (mobile.fcm.enabled=false) - chỉ lưu thông báo trong app");
            return;
        }
        if (projectId.isBlank() || credentialsPath.isBlank()) {
            log.warn("[FCM] Thiếu mobile.fcm.project-id hoặc mobile.fcm.credentials-path - tắt push");
            enabled = false;
            return;
        }
        try (InputStream in = new FileInputStream(credentialsPath)) {
            credentials = GoogleCredentials.fromStream(in).createScoped(List.of(SCOPE));
            log.info("[FCM] Đã nạp service account, project={}", projectId);
        } catch (Exception e) {
            log.error("[FCM] Không đọc được service account {}: {} - tắt push", credentialsPath, e.getMessage(), e);
            enabled = false;
        }
    }

    public boolean isEnabled() {
        return enabled;
    }

    /**
     * @param data dữ liệu kèm theo để app mở đúng màn hình khi bấm thông báo (chỉ chuỗi)
     */
    public Result send(String token, String title, String body, Map<String, String> data) {
        if (!enabled) {
            return Result.DISABLED;
        }
        try {
            credentials.refreshIfExpired();
            String accessToken = credentials.getAccessToken().getTokenValue();
            Map<String, Object> message = Map.of("message", Map.of(
                    "token", token,
                    "notification", Map.of("title", title, "body", body == null ? "" : body),
                    "data", data,
                    "android", Map.of(
                            "priority", "high",
                            "notification", Map.of("channel_id", ANDROID_CHANNEL_ID))));
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://fcm.googleapis.com/v1/projects/" + projectId + "/messages:send"))
                    .timeout(Duration.ofSeconds(15))
                    .header("Authorization", "Bearer " + accessToken)
                    .header("Content-Type", "application/json; charset=UTF-8")
                    .POST(HttpRequest.BodyPublishers.ofString(objectMapper.writeValueAsString(message),
                            StandardCharsets.UTF_8))
                    .build();
            HttpResponse<String> response = http.send(request, HttpResponse.BodyHandlers.ofString());
            int status = response.statusCode();
            if (status == 200) {
                return Result.SENT;
            }
            String respBody = response.body() == null ? "" : response.body();
            if (status == 404 || respBody.contains("UNREGISTERED")
                    || (status == 400 && respBody.contains("registration token"))) {
                return Result.INVALID_TOKEN;
            }
            log.warn("[FCM] Gửi thất bại status={} body={}", status, respBody);
            return Result.FAILED;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return Result.FAILED;
        } catch (Exception e) {
            log.error("[FCM] Lỗi gửi push: {}", e.getMessage(), e);
            return Result.FAILED;
        }
    }
}
