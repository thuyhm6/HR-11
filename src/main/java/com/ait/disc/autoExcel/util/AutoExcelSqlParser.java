package com.ait.disc.autoExcel.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Xử lý cú pháp tham số #PARAM# (hoặc #PARAM:TYPE# kiểu iBatis) trong SYS_SQL_MASTER.SQL_STMT.
 *
 * Bản gốc (SqlParamSerImpl.writeExcel) nối thẳng giá trị người dùng nhập vào câu SQL ('#X#' -> 'giá trị') - dính SQL
 * injection. Ở đây mọi tham số thường được đổi thành dấu ? và bind qua PreparedStatement. Riêng các tham số "chèn nguyên
 * văn" (report.parameter.type.yuanyangcanshu bản gốc - vd AR_DETAIL_#CPNY#_APPLY là 1 phần tên bảng) không bind được
 * nên vẫn chèn thẳng nhưng chỉ chấp nhận ký tự an toàn.
 */
public final class AutoExcelSqlParser {

    /** #NAME# hoặc #NAME:TYPE# - giống InlineParameterMapParser của iBatis 2 mà bản gốc dùng để tách tham số. */
    private static final Pattern TOKEN = Pattern.compile("#([A-Za-z_][A-Za-z0-9_]*)(?::[A-Za-z_]+)?#");

    /** Chỉ chấp nhận SELECT/WITH (mọi báo cáo hiện có trong DB đều thỏa) - chặn DML/DDL qua tính năng xuất Excel. */
    private static final Pattern SELECT_ONLY = Pattern.compile("^[\\s(]*(SELECT|WITH)\\b", Pattern.CASE_INSENSITIVE);

    /** Ký tự hợp lệ cho tham số chèn nguyên văn: mã, danh sách mã có/không có nháy đơn, dấu phẩy. */
    private static final Pattern SAFE_RAW_VALUE = Pattern.compile("^[A-Za-z0-9_,' -]*$");

    /** Tham số chèn nguyên văn (typecode.properties: report.parameter.type.yuanyangcanshu). */
    public static final Set<String> RAW_PARAMS = Set.of("CPNY", "PAY_CD", "EMPLOYEE_OWNED", "POST_FAMILY_Multi");

    /**
     * Tham số hệ thống: bản gốc do ObjectBindUtil.getRequestParamData tự thêm từ AdminBean (interLanguage,
     * interCpnyID, adminID, supervisorPersonId, CREATED_BY...) hoặc là "tham số cố định" hiển thị readonly
     * (report.parameter.type.gudingcanshu: CPNY_ID, PERSON_ID, CPNY). Luôn lấy từ phiên đăng nhập, không nhận từ client.
     */
    public static final Set<String> SYSTEM_PARAMS = Set.of(
            "interLanguage", "interCpnyID", "CPNY_ID", "CPNY", "PERSON_ID",
            "adminID", "adminId", "supervisorPersonId", "adminIP",
            "CREATED_BY", "UPDATED_BY", "CREATED_IP", "UPDATED_IP");

    /** Tham số cố định (gudingcanshu) - khi tự thêm vào SYS_PARAM_BY_SQL thì ghi sẵn mô tả/loại/thứ tự như bản gốc. */
    public static final Set<String> FIXED_PARAMS = Set.of("CPNY_ID", "PERSON_ID", "CPNY");

    private AutoExcelSqlParser() {
    }

    /** Tên các tham số xuất hiện trong câu SQL, không trùng, giữ thứ tự xuất hiện. */
    public static List<String> extractParams(String sql) {
        if (sql == null) {
            return Collections.emptyList();
        }
        Set<String> names = new LinkedHashSet<>();
        Matcher m = TOKEN.matcher(sql);
        while (m.find()) {
            names.add(m.group(1));
        }
        return new ArrayList<>(names);
    }

    public static boolean isSelectStatement(String sql) {
        return sql != null && SELECT_ONLY.matcher(sql).find();
    }

    public static boolean isSystemParam(String name) {
        return SYSTEM_PARAMS.contains(name);
    }

    /**
     * Đổi #PARAM# thành ? (hoặc giá trị chèn nguyên văn đã kiểm tra) và trả về danh sách giá trị bind theo đúng thứ tự.
     * Giá trị rỗng bind thành NULL (Oracle vốn coi '' là NULL - cùng kết quả với bản gốc).
     *
     * @throws IllegalArgumentException nếu giá trị của tham số chèn nguyên văn chứa ký tự không an toàn
     */
    public static PreparedSql prepare(String sql, Map<String, String> values) {
        List<Object> args = new ArrayList<>();
        StringBuilder sb = new StringBuilder();
        Matcher m = TOKEN.matcher(sql);
        while (m.find()) {
            String name = m.group(1);
            String value = values.get(name);
            String replacement;
            if (RAW_PARAMS.contains(name)) {
                String raw = value == null ? "" : value.trim();
                if (!SAFE_RAW_VALUE.matcher(raw).matches()) {
                    throw new IllegalArgumentException(name);
                }
                replacement = raw;
            } else {
                args.add(value == null || value.isEmpty() ? null : value);
                replacement = "?";
            }
            m.appendReplacement(sb, Matcher.quoteReplacement(replacement));
        }
        m.appendTail(sb);
        return new PreparedSql(stripTrailingSemicolon(sb.toString()), args);
    }

    private static String stripTrailingSemicolon(String sql) {
        String s = sql.trim();
        while (s.endsWith(";")) {
            s = s.substring(0, s.length() - 1).trim();
        }
        return s;
    }

    /** Câu SQL đã đổi tham số thành ? và các giá trị bind tương ứng. */
    public record PreparedSql(String sql, List<Object> args) {
    }
}
