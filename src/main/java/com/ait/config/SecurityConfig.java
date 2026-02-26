package com.ait.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * SecurityConfig - Cấu hình bảo mật và interceptor
 * Đã được tối ưu hóa với BCrypt password encoder và session security
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {

    /**
     * Bean để mã hóa mật khẩu với BCrypt
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12); // Strength 12 cho bảo mật cao
    }

    /**
     * SecurityFilterChain - Disable Spring Security completely
     * Sử dụng custom authentication interceptor thay thế
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authz -> authz
                        .anyRequest().permitAll()) // Allow all requests, let interceptor handle auth
                .httpBasic(AbstractHttpConfigurer::disable) // Disable HTTP Basic Auth
                .formLogin(AbstractHttpConfigurer::disable) // Disable default form login
                .logout(AbstractHttpConfigurer::disable); // Disable default logout

        return http.build();
    }

    /**
     * Thêm interceptor để kiểm tra đăng nhập
     */
    @Override
    public void addInterceptors(@NonNull InterceptorRegistry registry) {
        registry.addInterceptor(new AuthenticationInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns(
                        "/", "/login", "/auth/login", "/logout",
                        "/assets/**", "/static/**", "/webjars/**",
                        "/error/**", "/favicon.ico", "/actuator/**",
                        "/api/health", "/api/csrf-token", "/password/update");
    }

    /**
     * AuthenticationInterceptor - Kiểm tra user đã đăng nhập chưa với session
     * security
     */
    public static class AuthenticationInterceptor implements HandlerInterceptor {

        @Override
        public boolean preHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
                @NonNull Object handler)
                throws Exception {
            HttpSession session = request.getSession(false);

            // Kiểm tra các URL không cần đăng nhập
            String requestURI = request.getRequestURI();
            if (isPublicUrl(requestURI)) {
                return true;
            }

            // Kiểm tra session và user
            if (session == null || session.getAttribute("currentHrUser") == null) {
                // Redirect đến trang login
                response.sendRedirect("/login");
                return false;
            }

            // Kiểm tra session timeout (30 phút)
            long lastAccessedTime = session.getLastAccessedTime();
            long currentTime = System.currentTimeMillis();
            long sessionTimeout = 30 * 60 * 1000; // 30 phút

            if (currentTime - lastAccessedTime > sessionTimeout) {
                session.invalidate();
                response.sendRedirect("/login?timeout=true");
                return false;
            }

            return true;
        }

        /**
         * Kiểm tra URL có phải là public không
         */
        private boolean isPublicUrl(String uri) {
            return uri.equals("/") ||
                    uri.equals("/login") ||
                    uri.equals("/logout") ||
                    uri.equals("/password/update") ||
                    uri.startsWith("/assets/") ||
                    uri.startsWith("/static/") ||
                    uri.startsWith("/webjars/") ||
                    uri.startsWith("/error/") ||
                    uri.startsWith("/actuator/") ||
                    uri.equals("/favicon.ico") ||
                    uri.equals("/api/health") ||
                    uri.equals("/api/csrf-token");
        }
    }
}