package com.ait.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.CacheControl;

import java.time.Duration;

/**
 * FrontendConfig - Configuration cho frontend optimization
 */
@Configuration
public class FrontendConfig implements WebMvcConfigurer {

        // Cấu hình CORS từ properties — đặt trong application.properties:
        // cors.allowed-origins=https://yourdomain.com,https://www.yourdomain.com
        @Value("${cors.allowed-origins:http://localhost:8080,http://localhost:3000}")
        private String[] allowedOrigins;

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
                // Static resources với cache optimization
                registry.addResourceHandler("/assets/**")
                                .addResourceLocations("classpath:/static/assets/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(365))); // 1 year cache

                registry.addResourceHandler("/css/**")
                                .addResourceLocations("classpath:/static/css/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(30))); // 30 days cache

                registry.addResourceHandler("/js/**")
                                .addResourceLocations("classpath:/static/js/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(7))); // 7 days cache

                registry.addResourceHandler("/images/**")
                                .addResourceLocations("classpath:/static/images/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(90))); // 90 days cache

                registry.addResourceHandler("/fonts/**")
                                .addResourceLocations("classpath:/static/fonts/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(365))); // 1 year cache

                // WebApp resources
                registry.addResourceHandler("/webapp/**")
                                .addResourceLocations("classpath:/webapp/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(7))); // 7 days cache
        }

        @Override
        public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                                .allowedOrigins(allowedOrigins)
                                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                                .allowedHeaders("*")
                                .allowCredentials(true)
                                .maxAge(3600);
        }
}
