package com.ait.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.CacheControl;

import java.io.File;
import java.time.Duration;

/**
 * FrontendConfig - Configuration cho frontend optimization
 */
@Configuration
public class FrontendConfig implements WebMvcConfigurer {

        @Value("${cors.allowed-origins:http://localhost:8080,http://localhost:3000}")
        private String[] allowedOrigins;

        @Value("${app.photo.upload.path:./assets/images/users}")
        private String photoUploadPath;

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
                // Serve ảnh đại diện nhân viên từ thư mục upload ngoài classpath
                // Đăng ký trước /assets/** để Spring ưu tiên path cụ thể hơn (pattern cụ thể hơn luôn
                // thắng bất kể thứ tự đăng ký) - nên handler /assets/** bên dưới KHÔNG được dùng làm
                // fallback cho các request vào /assets/images/users/** dù cùng phục vụ từ webapp root.
                // Vì vậy phải khai báo thêm location "/assets/images/users/" (webapp) ngay tại đây: ảnh
                // đại diện thật (đã upload) ưu tiên lấy trước, không thấy mới rơi xuống ảnh mặc định
                // dummy-avatar.jpg nằm sẵn trong webapp - tránh 404 NoResourceFoundException liên tục.
                File uploadDir = new File(photoUploadPath);
                String uploadDirPath = uploadDir.getAbsolutePath().replace("\\", "/");
                if (!uploadDirPath.endsWith("/")) uploadDirPath += "/";
                registry.addResourceHandler("/assets/images/users/**")
                                .addResourceLocations("file:" + uploadDirPath, "/assets/images/users/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofHours(1)));

                // Alias cho font Font Awesome - /assets/css/all.min.css tham chiếu font tương đối
                // dạng url(../webfonts/fa-solid-900.woff2) (tức /assets/webfonts/...), nhưng file thật
                // nằm ở /assets/plugins/fontawesome-free/webfonts/. Đăng ký trước /assets/** để ưu tiên
                // path cụ thể hơn (giống cách /assets/images/users/** đã làm ở trên).
                registry.addResourceHandler("/assets/webfonts/**")
                                .addResourceLocations("/assets/plugins/fontawesome-free/webfonts/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(365)));

                // Assets nằm trong webapp root (src/main/webapp/assets/)
                // Dùng "/" prefix để Spring MVC resolve từ ServletContext (webapp root)
                registry.addResourceHandler("/assets/**")
                                .addResourceLocations("/assets/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(365)));

                // CSS/JS từ classpath (src/main/resources/static/)
                registry.addResourceHandler("/css/**")
                                .addResourceLocations("classpath:/static/css/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(30)));

                registry.addResourceHandler("/js/**")
                                .addResourceLocations("classpath:/static/js/")
                                .setCacheControl(CacheControl.maxAge(Duration.ofDays(7)));
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
