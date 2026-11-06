package com.ait.config;

import java.util.concurrent.TimeUnit;

/**
 * Chuyển cửa sổ console Windows sang code page UTF-8 (65001) khi ứng dụng khởi động.
 * <p>
 * Logback ghi log console bằng UTF-8, nhưng cửa sổ Tomcat (startup.bat mở bằng "start") mặc định
 * dùng code page OEM 437 -> tiếng Việt hiển thị sai (vd. "Bắt" -> "Bß╗»t"). Tiến trình con dùng chung
 * console với JVM nên chạy "chcp 65001" sẽ đổi code page của chính cửa sổ đó.
 * <p>
 * Chỉ chạy trên Windows và khi JVM gắn với 1 console (Tomcat chạy dạng service / không có console thì bỏ qua).
 * Tắt bằng -Dhr.console.utf8=false.
 */
public final class WindowsConsoleUtf8 {

    private static volatile boolean done;

    private WindowsConsoleUtf8() {
    }

    public static synchronized void enable() {
        if (done) {
            return;
        }
        done = true;
        if (!"true".equalsIgnoreCase(System.getProperty("hr.console.utf8", "true"))
                || !System.getProperty("os.name", "").toLowerCase().contains("windows")
                || System.console() == null) {
            return;
        }
        try {
            Process p = new ProcessBuilder("cmd", "/c", "chcp 65001 >nul").inheritIO().start();
            if (!p.waitFor(5, TimeUnit.SECONDS)) {
                p.destroyForcibly();
            }
        } catch (Throwable ignore) {
            // Không đổi được code page (môi trường hạn chế tạo process...) thì giữ nguyên, không ảnh hưởng ứng dụng
        }
    }
}
