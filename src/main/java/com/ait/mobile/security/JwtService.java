package com.ait.mobile.security;

import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Date;
import java.util.HexFormat;
import javax.crypto.SecretKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Phát hành / kiểm tra access token (JWT HS256) và sinh refresh token ngẫu nhiên cho Mobile API.
 * Access token ngắn hạn, không lưu DB; refresh token dài hạn, chỉ lưu SHA-256 hash ở MB_REFRESH_TOKEN.
 */
@Component
public class JwtService {

    private static final Logger log = LoggerFactory.getLogger(JwtService.class);

    public static final String CLAIM_PERSON_ID = "pid";
    public static final String CLAIM_CPNY_ID = "cpny";
    public static final String CLAIM_DEVICE_ID = "did";
    public static final String CLAIM_PASSWORD_CHANGE = "pwc";
    public static final String CLAIM_SCOPE = "scope";

    private static final SecureRandom RANDOM = new SecureRandom();

    @Value("${mobile.jwt.secret:}")
    private String secret;

    @Value("${mobile.jwt.issuer:HR-11}")
    private String issuer;

    @Value("${mobile.jwt.access-token-minutes:30}")
    private long accessTokenMinutes;

    @Value("${mobile.jwt.refresh-token-days:30}")
    private long refreshTokenDays;

    private SecretKey key;

    @PostConstruct
    void init() {
        byte[] keyBytes;
        if (secret == null || secret.getBytes(StandardCharsets.UTF_8).length < 32) {
            keyBytes = new byte[32];
            RANDOM.nextBytes(keyBytes);
            log.warn("mobile.jwt.secret chưa cấu hình hoặc ngắn hơn 32 ký tự - dùng key ngẫu nhiên, "
                    + "toàn bộ token mobile sẽ mất hiệu lực khi restart. Hãy đặt biến môi trường MOBILE_JWT_SECRET.");
        } else {
            keyBytes = secret.getBytes(StandardCharsets.UTF_8);
        }
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public String createAccessToken(HrUserInfo user, String deviceId, boolean requirePasswordChange) {
        long now = System.currentTimeMillis();
        return Jwts.builder()
                .issuer(issuer)
                .subject(user.getUsername())
                .claim(CLAIM_PERSON_ID, user.getPersonId())
                .claim(CLAIM_CPNY_ID, user.getCpnyId())
                .claim(CLAIM_DEVICE_ID, deviceId)
                .claim(CLAIM_PASSWORD_CHANGE, requirePasswordChange)
                .issuedAt(new Date(now))
                .expiration(new Date(now + getAccessTokenSeconds() * 1000L))
                .signWith(key)
                .compact();
    }

    /**
     * Kiểm tra chữ ký, issuer, hạn dùng. Ném {@link io.jsonwebtoken.ExpiredJwtException} khi hết hạn,
     * {@link io.jsonwebtoken.JwtException} khi token không hợp lệ.
     */
    public Claims parseAccessToken(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(key)
                .requireIssuer(issuer)
                .build()
                .parseSignedClaims(token)
                .getPayload();
        // Token có phạm vi riêng (vd. mở phiếu lương) không được dùng thay access token
        if (claims.get(CLAIM_SCOPE) != null) {
            throw new io.jsonwebtoken.MalformedJwtException("Scoped token is not an access token");
        }
        return claims;
    }

    /**
     * Token ngắn hạn cho 1 phạm vi (vd. "payslip") - cấp sau khi người dùng xác thực lại, gắn với user + thiết bị.
     */
    public String createScopedToken(String username, String deviceId, String scope, long seconds) {
        long now = System.currentTimeMillis();
        return Jwts.builder()
                .issuer(issuer)
                .subject(username)
                .claim(CLAIM_DEVICE_ID, deviceId)
                .claim(CLAIM_SCOPE, scope)
                .issuedAt(new Date(now))
                .expiration(new Date(now + seconds * 1000L))
                .signWith(key)
                .compact();
    }

    /** @return true nếu token hợp lệ, đúng phạm vi, đúng user và thiết bị. */
    public boolean verifyScopedToken(String token, String scope, String username, String deviceId) {
        if (token == null || token.isBlank()) {
            return false;
        }
        try {
            Claims c = Jwts.parser().verifyWith(key).requireIssuer(issuer).build()
                    .parseSignedClaims(token.trim()).getPayload();
            return scope.equals(c.get(CLAIM_SCOPE, String.class))
                    && username != null && username.equals(c.getSubject())
                    && java.util.Objects.equals(deviceId, c.get(CLAIM_DEVICE_ID, String.class));
        } catch (io.jsonwebtoken.JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    /** Refresh token: 48 byte ngẫu nhiên, base64url (không chứa thông tin người dùng). */
    public String generateRefreshToken() {
        byte[] bytes = new byte[48];
        RANDOM.nextBytes(bytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
    }

    public String hashToken(String token) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            return HexFormat.of().formatHex(digest.digest(token.getBytes(StandardCharsets.UTF_8)));
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("SHA-256 không khả dụng", e);
        }
    }

    public long getAccessTokenSeconds() {
        return accessTokenMinutes * 60L;
    }

    public long getRefreshTokenDays() {
        return refreshTokenDays;
    }
}
