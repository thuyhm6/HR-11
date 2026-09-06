package com.ait.config;

import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

/**
 * Phục vụ Angular SPA (frontend-ng, build ra src/main/resources/static/ng-app/) làm frontend chính.
 *
 * Build ra thư mục CON "ng-app" riêng (không phải static/ root) để không đụng tới các file tĩnh cũ
 * đang có sẵn trong static/ (css/, js/, sw.js - thuộc hệ thống frontend-optimization cũ) vì Angular
 * CLI sẽ XÓA SẠCH thư mục output trước mỗi lần build.
 *
 * Bất kỳ request GET nào KHÔNG khớp với @Controller nào (vd: /login, /dashboard,
 * /dept-ot-apply-info - các route Angular Router xử lý phía client) và cũng KHÔNG phải file tĩnh
 * có thật trong static/ng-app/ sẽ fallback về index.html, để Angular Router tự nhận diện URL và
 * render đúng component. Handler này có priority THẤP NHẤT nên mọi @Controller/@RequestMapping
 * hiện có (các trang Thymeleaf, API JSON...) vẫn được ưu tiên khớp trước như cũ - không ảnh hưởng
 * trang nào chưa migrate sang Angular.
 */
@Configuration
public class AngularSpaConfig implements WebMvcConfigurer {

    private static final String NG_APP_LOCATION = "classpath:/static/ng-app/";
    private static final Logger logger = LoggerFactory.getLogger(AngularSpaConfig.class);

    @Override
    public void addResourceHandlers(@NonNull ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations(NG_APP_LOCATION)
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(@NonNull String resourcePath, @NonNull Resource location) throws IOException {
                        Resource requestedResource = location.createRelative(resourcePath);
                        if (requestedResource.exists() && requestedResource.isReadable()) {
                            return requestedResource;
                        }
                        Resource indexHtml = new ClassPathResource("/static/ng-app/index.html");
                        if (indexHtml.exists() && indexHtml.isReadable()) {
                            return indexHtml;
                        }
                        logger.warn("Angular SPA chưa được build: thiếu " + indexHtml.getDescription()
                                + " - hãy chạy 'npm run build' ở frontend-ng/ rồi rebuild lại backend");
                        return null;
                    }
                });
    }
}
