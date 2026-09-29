package com.ait.disc.autoExcel.dto;

/**
 * Thông tin phiên đăng nhập dùng để điền tham số hệ thống khi chạy báo cáo (engine chạy bằng JDBC trực tiếp nên không
 * đi qua LanguageParameterInterceptor của MyBatis) - controller đọc từ HttpSession theo đúng các attribute interceptor dùng.
 */
public record AutoExcelSessionContext(String cpnyId, String lang, String personId, String adminIp) {
}
