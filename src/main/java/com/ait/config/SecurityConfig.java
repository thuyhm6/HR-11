package com.ait.config;

import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers(
                                "/", "/login", "/auth/login", "/logout",
                                "/auth/api/csrf-token", "/auth/api/login",
                                "/assets/**", "/static/**", "/webjars/**",
                                "/error/**", "/favicon.ico",
                                "/actuator/health", "/api/health", "/api/csrf-token",
                                "/change-language", "/api/current-language", "/api/supported-languages",
                                // Bundle tĩnh của Angular (main-*.js, styles-*.css...) build ra thư mục
                                // static root - phải public vì trình duyệt cần tải được các file này
                                // TRƯỚC KHI có session (vd: đang ở trang /login chưa đăng nhập).
                                "/*.js", "/*.css", "/*.ico", "/*.png", "/*.jpg", "/*.svg",
                                "/*.woff", "/*.woff2", "/*.map", "/*.webmanifest")
                        .permitAll()
                        .requestMatchers(HttpMethod.GET, "/sys/api/code/list", "/sys/api/getCode/list", "/sys/api/menu/list")
                        .authenticated()
                        .requestMatchers("/sy/excel/api/**")
                        .authenticated()
                        .requestMatchers("/sys/api/user/**")
                        .hasAnyRole("ADMIN", "SYS", "HRM")
                        .requestMatchers(
                                "/api/admin/**",
                                "/api/monitoring/**",
                                "/api/performance/**",
                                "/api/database/**",
                                "/multilingual/**",
                                "/sys/api/**")
                        .hasAnyRole("ADMIN", "SYS")
                        .requestMatchers(HttpMethod.POST, "/api/multilingual/content", "/api/multilingual/code-param/link")
                        .hasAnyRole("ADMIN", "SYS")
                        .requestMatchers(HttpMethod.PUT, "/api/multilingual/content")
                        .hasAnyRole("ADMIN", "SYS")
                        .requestMatchers(HttpMethod.DELETE, "/api/multilingual/code-param/unlink")
                        .hasAnyRole("ADMIN", "SYS")
                        .requestMatchers(HttpMethod.POST, "/org/api/process/execute", "/org/api/resume/add", "/org/api/resume/update")
                        .hasAnyRole("ADMIN", "SYS")
                        .requestMatchers(HttpMethod.DELETE, "/org/api/resume/delete/**")
                        .hasAnyRole("ADMIN", "SYS")
                        .anyRequest().authenticated())
                .httpBasic(AbstractHttpConfigurer::disable)
                .formLogin(AbstractHttpConfigurer::disable)
                .logout(AbstractHttpConfigurer::disable)
                .csrf(csrf -> csrf
                        // Angular SPA không có trang Thymeleaf để đọc token CSRF từ thẻ <meta> như các
                        // trang jQuery cũ (xem setupCsrfForAjaxAndForms() trong layout/master.html) -
                        // chuyển sang lưu token vào cookie "XSRF-TOKEN" đọc được bằng JS (mặc định của
                        // CookieCsrfTokenRepository, đúng quy ước Angular HttpClient mong đợi), và dùng
                        // CsrfTokenRequestAttributeHandler (thay vì Xor mặc định) để token được resolve
                        // ngay từ request đầu tiên, đảm bảo cookie đã có trước khi Angular gọi API ghi
                        // dữ liệu đầu tiên. Trang Thymeleaf cũ vẫn hoạt động bình thường vì đọc
                        // token/tên header động qua ${_csrf.token}/${_csrf.headerName}, không hardcode.
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                        .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())
                        .ignoringRequestMatchers(
                                "/auth/login", "/logout",
                                "/auth/api/csrf-token", "/auth/api/login",
                                "/api/change-first-password",
                                "/api/csrf-token",
                                "/password/api/verify-old-password",
                                "/password/api/change-password",
                                "/ess/change/api/changeUser"))
                .exceptionHandling(exception -> exception
                        .authenticationEntryPoint((request, response, authException) -> response.sendRedirect("/login")))
                .addFilterBefore(new SessionAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Override
    public void addInterceptors(@NonNull InterceptorRegistry registry) {
        registry.addInterceptor(new AuthenticationInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns(
                        "/", "/login", "/auth/login", "/logout",
                        "/auth/api/csrf-token", "/auth/api/login",
                        "/assets/**", "/static/**", "/webjars/**",
                        "/error/**", "/favicon.ico", "/actuator/**",
                        "/api/health", "/api/csrf-token");
    }

    public static class AuthenticationInterceptor implements HandlerInterceptor {

        @Override
        public boolean preHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
                @NonNull Object handler) throws Exception {
            HttpSession session = request.getSession(false);
            String requestUri = request.getRequestURI();
            if (isPublicUrl(requestUri)) {
                return true;
            }

            if (session == null || session.getAttribute("currentHrUser") == null) {
                response.sendRedirect("/login");
                return false;
            }

            // Bắt buộc đổi mật khẩu nếu password chưa mã hóa
            if (Boolean.TRUE.equals(session.getAttribute("requirePasswordChange"))) {
                if (!requestUri.equals("/dashboard") && !requestUri.equals("/api/change-first-password")) {
                    response.sendRedirect("/dashboard");
                    return false;
                }
            }

            long lastAccessedTime = session.getLastAccessedTime();
            long currentTime = System.currentTimeMillis();
            long sessionTimeout = 30L * 60L * 1000L;

            if (currentTime - lastAccessedTime > sessionTimeout) {
                session.invalidate();
                response.sendRedirect("/login?timeout=true");
                return false;
            }

            return true;
        }

        private boolean isPublicUrl(String uri) {
            return uri.equals("/") ||
                    uri.equals("/login") ||
                    uri.equals("/logout") ||
                    uri.equals("/auth/api/csrf-token") ||
                    uri.equals("/auth/api/login") ||
                    uri.startsWith("/assets/") ||
                    uri.startsWith("/static/") ||
                    uri.startsWith("/webjars/") ||
                    uri.startsWith("/error/") ||
                    uri.startsWith("/actuator/") ||
                    uri.equals("/favicon.ico") ||
                    uri.equals("/api/health") ||
                    uri.equals("/api/csrf-token") ||
                    uri.equals("/change-language") ||
                    uri.equals("/api/current-language") ||
                    uri.equals("/api/supported-languages") ||
                    isAngularStaticAsset(uri);
        }

        /** Bundle tĩnh của Angular ở static root (main-*.js, styles-*.css...) - xem giải thích ở SecurityConfig. */
        private boolean isAngularStaticAsset(String uri) {
            return uri.endsWith(".js") || uri.endsWith(".css") || uri.endsWith(".ico")
                    || uri.endsWith(".png") || uri.endsWith(".jpg") || uri.endsWith(".svg")
                    || uri.endsWith(".woff") || uri.endsWith(".woff2") || uri.endsWith(".map")
                    || uri.endsWith(".webmanifest");
        }
    }

    public static class SessionAuthenticationFilter extends OncePerRequestFilter {
        @Override
        protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
                @NonNull FilterChain filterChain) throws ServletException, IOException {

            if (SecurityContextHolder.getContext().getAuthentication() == null) {
                HttpSession session = request.getSession(false);
                if (session != null) {
                    HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
                    if (currentHrUser != null && currentHrUser.getSyUser() != null) {
                        String username = currentHrUser.getSyUser().getUserName();
                        List<GrantedAuthority> authorities = new ArrayList<>();

                        String userType = currentHrUser.getSyUser().getUserType();
                        if (userType != null && !userType.isBlank()) {
                            authorities.add(new SimpleGrantedAuthority("ROLE_" + userType.toUpperCase()));
                        }

                        UsernamePasswordAuthenticationToken authentication =
                                new UsernamePasswordAuthenticationToken(username, null, authorities);
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }
            }

            filterChain.doFilter(request, response);
        }
    }
}
