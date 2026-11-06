package com.ait.mobile.security;

import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileMessages;
import com.ait.mobile.common.MobileResponse;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.PermissionService;
import com.ait.util.IpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

/**
 * Filter xác thực JWT cho /mobile/api/** (chỉ đăng ký trong MobileSecurityConfig, không phải @Component
 * để tránh Spring Boot tự gắn vào toàn bộ servlet filter chain).
 *
 * Khi token hợp lệ: dựng {@link MobileHttpSession} với đúng các attribute mà luồng đăng nhập web
 * (AuthController.applySuccessfulLogin) đặt vào session, rồi bọc request => Controller/Service cũ và
 * LanguageParameterInterceptor (#{cpnyId}, #{adminID}, #{adminIP}, #{lang}) dùng lại được nguyên vẹn.
 */
public class MobileJwtAuthenticationFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(MobileJwtAuthenticationFilter.class);

    /** API vẫn được gọi khi user bắt buộc phải đổi mật khẩu. */
    private static final Set<String> PASSWORD_CHANGE_ALLOWED = Set.of(
            "/mobile/api/auth/me",
            "/mobile/api/auth/change-password",
            "/mobile/api/auth/logout");

    private final JwtService jwtService;
    private final MobileUserContextService userContextService;
    private final PermissionService permissionService;
    private final ObjectMapper objectMapper;

    public MobileJwtAuthenticationFilter(JwtService jwtService, MobileUserContextService userContextService,
            PermissionService permissionService, ObjectMapper objectMapper) {
        this.jwtService = jwtService;
        this.userContextService = userContextService;
        this.permissionService = permissionService;
        this.objectMapper = objectMapper;
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {

        String header = request.getHeader("Authorization");
        if (header == null || !header.startsWith("Bearer ")) {
            // Không có token: để rule authorize của chain quyết định (API public vẫn chạy, còn lại => 401)
            filterChain.doFilter(request, response);
            return;
        }

        Claims claims;
        try {
            claims = jwtService.parseAccessToken(header.substring(7).trim());
        } catch (ExpiredJwtException e) {
            writeError(request, response, MobileErrorCode.TOKEN_EXPIRED);
            return;
        } catch (JwtException | IllegalArgumentException e) {
            log.warn("JWT không hợp lệ uri={} ip={}: {}", request.getRequestURI(), IpUtil.getClientIpAddr(request),
                    e.getMessage());
            writeError(request, response, MobileErrorCode.TOKEN_INVALID);
            return;
        }

        HrUserInfo user = userContextService.loadActiveUser(claims.getSubject());
        if (user == null) {
            writeError(request, response, MobileErrorCode.USER_INACTIVE);
            return;
        }

        boolean requirePasswordChange = Boolean.TRUE.equals(claims.get(JwtService.CLAIM_PASSWORD_CHANGE, Boolean.class));
        if (requirePasswordChange && !PASSWORD_CHANGE_ALLOWED.contains(request.getRequestURI())) {
            writeError(request, response, MobileErrorCode.PASSWORD_CHANGE_REQUIRED);
            return;
        }

        MobileHttpSession session = buildSession(request, user, claims, requirePasswordChange);
        MobileSessionRequestWrapper wrapped = new MobileSessionRequestWrapper(request, session);

        List<GrantedAuthority> authorities = new ArrayList<>();
        String userType = user.getSyUser().getUserType();
        if (userType != null && !userType.isBlank()) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + userType.toUpperCase()));
        }
        UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(user.getUsername(), null, authorities);
        authentication.setDetails(claims.get(JwtService.CLAIM_DEVICE_ID, String.class));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        try {
            filterChain.doFilter(wrapped, response);
        } finally {
            SecurityContextHolder.clearContext();
        }
    }

    private MobileHttpSession buildSession(HttpServletRequest request, HrUserInfo user, Claims claims,
            boolean requirePasswordChange) {
        MobileHttpSession session = new MobileHttpSession(request.getServletContext());
        session.setAttribute("currentHrUser", user);
        session.setAttribute("isLoggedIn", true);
        session.setAttribute("adminID", user.getPersonId());
        session.setAttribute("cpnyId", user.getSyUser().getCpnyId());
        session.setAttribute("adminIP", IpUtil.getClientIpAddr(request));
        session.setAttribute("language", MobileMessages.resolveLang(request));
        // SessionLocaleResolver (MultilingualConfig) đọc locale từ session => I18nUtil.getMessage() trong
        // service cũ trả message đúng ngôn ngữ app
        session.setAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME, MobileMessages.resolveLocale(request));
        session.setAttribute(MobileSessionKeys.DEVICE_ID, claims.get(JwtService.CLAIM_DEVICE_ID, String.class));
        if (requirePasswordChange) {
            session.setAttribute("requirePasswordChange", true);
        }
        String userNo = user.getSyUser().getUserNo();
        session.putLazy("currentPermissionInfo", () -> permissionService.getUserPermissionInfo(userNo));
        session.putLazy("hasSysTypeZeroMenus", () -> permissionService.hasRoleGroupWithSysType(userNo, 0));
        return session;
    }

    private void writeError(HttpServletRequest request, HttpServletResponse response, MobileErrorCode code)
            throws IOException {
        response.setStatus(code.getStatus().value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        objectMapper.writeValue(response.getWriter(),
                MobileResponse.fail(code.name(), MobileMessages.get(code, request)));
    }
}
