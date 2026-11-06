package com.ait.mobile.config;

import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileMessages;
import com.ait.mobile.common.MobileResponse;
import com.ait.mobile.security.JwtService;
import com.ait.mobile.security.MobileJwtAuthenticationFilter;
import com.ait.mobile.security.MobileUserContextService;
import com.ait.sy.sys.service.PermissionService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 * SecurityFilterChain riêng cho Mobile API (/mobile/api/**), chạy TRƯỚC chain web trong SecurityConfig.
 * - Stateless, xác thực bằng JWT (Authorization: Bearer ...), không dùng session/cookie
 * - Tắt CSRF (không dùng cookie nên không bị CSRF)
 * - Chưa đăng nhập / không đủ quyền => trả JSON 401/403 (không redirect /login như web)
 * Chain web hiện tại giữ nguyên, không bị ảnh hưởng.
 */
@Configuration
public class MobileSecurityConfig {

    public static final String[] PUBLIC_ENDPOINTS = {
            "/mobile/api/auth/login",
            "/mobile/api/auth/refresh",
            "/mobile/api/app/version",
            "/mobile/api/i18n/messages"
    };

    @Value("${mobile.cors.allowed-origins:https://localhost,http://localhost,capacitor://localhost}")
    private String allowedOrigins;

    @Bean
    @Order(1)
    public SecurityFilterChain mobileFilterChain(HttpSecurity http, JwtService jwtService,
            MobileUserContextService userContextService, PermissionService permissionService,
            ObjectMapper objectMapper) throws Exception {

        MobileJwtAuthenticationFilter jwtFilter =
                new MobileJwtAuthenticationFilter(jwtService, userContextService, permissionService, objectMapper);

        http
                .securityMatcher("/mobile/api/**")
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers(HttpMethod.OPTIONS, "/mobile/api/**").permitAll()
                        .requestMatchers(PUBLIC_ENDPOINTS).permitAll()
                        .anyRequest().authenticated())
                .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .csrf(AbstractHttpConfigurer::disable)
                .httpBasic(AbstractHttpConfigurer::disable)
                .formLogin(AbstractHttpConfigurer::disable)
                .logout(AbstractHttpConfigurer::disable)
                .requestCache(AbstractHttpConfigurer::disable)
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .exceptionHandling(ex -> ex
                        .authenticationEntryPoint((request, response, e) ->
                                writeError(objectMapper, request, response, MobileErrorCode.UNAUTHORIZED))
                        .accessDeniedHandler((request, response, e) ->
                                writeError(objectMapper, request, response, MobileErrorCode.FORBIDDEN)))
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    private UrlBasedCorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        List<String> origins = Arrays.stream(allowedOrigins.split(","))
                .map(String::trim).filter(s -> !s.isEmpty()).toList();
        config.setAllowedOrigins(origins);
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type", "Accept", MobileMessages.LANG_HEADER,
                "X-Device-Id", "X-App-Version", "X-Payslip-Token"));
        config.setAllowCredentials(false);
        config.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/mobile/api/**", config);
        return source;
    }

    private static void writeError(ObjectMapper objectMapper, HttpServletRequest request,
            HttpServletResponse response, MobileErrorCode code) throws IOException {
        response.setStatus(code.getStatus().value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        objectMapper.writeValue(response.getWriter(),
                MobileResponse.fail(code.name(), MobileMessages.get(code, request)));
    }
}
