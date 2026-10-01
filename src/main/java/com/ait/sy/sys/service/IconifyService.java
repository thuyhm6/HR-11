package com.ait.sy.sys.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.regex.Pattern;

/**
 * IconifyService - tự phục vụ (self-host) dữ liệu icon cho custom element <iconify-icon>, thay cho
 * API online api.iconify.design. Nhờ đó icon menu/sidebar/topbar hiển thị được cả khi server/máy
 * client không có Internet.
 *
 * Bộ icon đầy đủ lưu tại classpath:/iconify/{prefix}.json (định dạng IconifyJSON, lấy từ npm
 * package @iconify-json/{prefix}). Hiện có bộ "solar" (toàn bộ ~8.8k icon, license CC BY 4.0) -
 * muốn dùng thêm bộ khác (vd "mdi") chỉ cần thả file mdi.json vào thư mục resources/iconify/.
 *
 * Mỗi bộ icon chỉ đọc từ file 1 lần rồi cache trong bộ nhớ; mỗi request chỉ trả về những icon
 * được yêu cầu (vài KB) thay vì cả file ~11MB.
 */
@Service
public class IconifyService {

    private static final Logger log = LoggerFactory.getLogger(IconifyService.class);

    /** Chỉ chấp nhận tên bộ icon/tên icon hợp lệ - chặn path traversal khi ghép đường dẫn classpath */
    private static final Pattern NAME_PATTERN = Pattern.compile("^[a-z0-9]+(-[a-z0-9]+)*$");

    /** Giới hạn độ sâu khi resolve alias lồng nhau (alias -> alias -> icon) để tránh vòng lặp vô hạn */
    private static final int MAX_ALIAS_DEPTH = 8;

    /** Cache bộ icon đã nạp: prefix -> IconifyJSON. Bộ icon không tồn tại được đánh dấu bằng MissingNode */
    private final Map<String, JsonNode> iconSetCache = new ConcurrentHashMap<>();

    @Autowired
    private ObjectMapper objectMapper;

    /**
     * Lấy dữ liệu các icon được yêu cầu theo đúng định dạng response của Iconify API:
     * { prefix, icons: {...}, aliases: {...}, width, height, not_found: [...] }
     *
     * @return null nếu prefix không hợp lệ hoặc không có bộ icon tương ứng trên server
     */
    public ObjectNode getIcons(String prefix, List<String> iconNames) {
        log.debug("IconifyService.getIcons - prefix={}, icons={}", prefix, iconNames);
        try {
            if (prefix == null || !NAME_PATTERN.matcher(prefix).matches()) {
                log.warn("IconifyService.getIcons - prefix không hợp lệ: {}", prefix);
                return null;
            }
            JsonNode iconSet = loadIconSet(prefix);
            if (iconSet == null || iconSet.isMissingNode()) {
                log.warn("IconifyService.getIcons - không tìm thấy bộ icon: {}", prefix);
                return null;
            }

            JsonNode allIcons = iconSet.path("icons");
            JsonNode allAliases = iconSet.path("aliases");

            ObjectNode result = objectMapper.createObjectNode();
            result.put("prefix", prefix);
            ObjectNode icons = result.putObject("icons");
            ObjectNode aliases = objectMapper.createObjectNode();
            ArrayNode notFound = objectMapper.createArrayNode();

            Set<String> uniqueNames = new LinkedHashSet<>(iconNames);
            for (String name : uniqueNames) {
                if (!copyIcon(name, allIcons, allAliases, icons, aliases, 0)) {
                    notFound.add(name);
                }
            }

            if (!aliases.isEmpty()) {
                result.set("aliases", aliases);
            }
            // Kích thước mặc định của bộ icon (icon nào không khai báo width/height riêng sẽ dùng giá trị này)
            for (String key : new String[] { "width", "height", "left", "top" }) {
                if (iconSet.has(key)) {
                    result.set(key, iconSet.get(key));
                }
            }
            if (!notFound.isEmpty()) {
                result.set("not_found", notFound);
            }
            return result;
        } catch (Exception e) {
            log.error("IconifyService.getIcons - lỗi khi lấy icon prefix={}, icons={}: {}", prefix, iconNames,
                    e.getMessage(), e);
            return null;
        }
    }

    /**
     * Copy 1 icon (hoặc alias kèm icon gốc của nó) vào response.
     *
     * @return false nếu tên icon không tồn tại trong bộ icon
     */
    private boolean copyIcon(String name, JsonNode allIcons, JsonNode allAliases, ObjectNode icons,
            ObjectNode aliases, int depth) {
        if (name == null || depth > MAX_ALIAS_DEPTH || !NAME_PATTERN.matcher(name).matches()) {
            return false;
        }
        if (icons.has(name) || aliases.has(name)) {
            return true;
        }
        if (allIcons.has(name)) {
            icons.set(name, allIcons.get(name));
            return true;
        }
        JsonNode alias = allAliases.get(name);
        if (alias != null && copyIcon(alias.path("parent").asText(null), allIcons, allAliases, icons, aliases,
                depth + 1)) {
            aliases.set(name, alias);
            return true;
        }
        return false;
    }

    /** Đọc bộ icon từ classpath (chỉ 1 lần cho mỗi prefix) */
    private JsonNode loadIconSet(String prefix) {
        return iconSetCache.computeIfAbsent(prefix, p -> {
            ClassPathResource resource = new ClassPathResource("iconify/" + p + ".json");
            if (!resource.exists()) {
                return objectMapper.missingNode();
            }
            long start = System.currentTimeMillis();
            try (InputStream in = resource.getInputStream()) {
                JsonNode node = objectMapper.readTree(in);
                log.info("IconifyService.loadIconSet - đã nạp bộ icon '{}' ({} icon) trong {} ms", p,
                        node.path("icons").size(), System.currentTimeMillis() - start);
                return node;
            } catch (Exception e) {
                log.error("IconifyService.loadIconSet - lỗi đọc file iconify/{}.json: {}", p, e.getMessage(), e);
                // Không cache lỗi đọc file để lần sau có thể thử lại
                return null;
            }
        });
    }
}
