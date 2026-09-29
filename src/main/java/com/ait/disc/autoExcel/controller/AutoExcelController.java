package com.ait.disc.autoExcel.controller;

import com.ait.disc.autoExcel.dto.AutoExcelExportResult;
import com.ait.disc.autoExcel.dto.AutoExcelMasterDto;
import com.ait.disc.autoExcel.dto.AutoExcelParamUpdateDto;
import com.ait.disc.autoExcel.dto.AutoExcelRunDto;
import com.ait.disc.autoExcel.dto.AutoExcelSessionContext;
import com.ait.disc.autoExcel.service.AutoExcelExportService;
import com.ait.disc.autoExcel.service.AutoExcelService;
import com.ait.exception.BusinessException;
import com.ait.util.I18nUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

/**
 * Báo cáo SQL tự xuất Excel - API JSON cho trang Angular /view-retrieve-sql-master-list (thay các trang JSP
 * /disc/autoExcel/viewRetrieveSqlMasterList, createSqlMaster, updateSqlMaster, updateSqlParamList, runSql của dự án
 * Hanwha_HTSV). Chia 2 nhóm URL theo quyền:
 * - /disc/autoExcel/api/**: xem danh sách + chạy báo cáo đã lưu - mọi người dùng đã đăng nhập (menu cũ có cả bản chỉ
 *   cho chạy báo cáo - tham số POWER_FOR).
 * - /sys/api/autoExcel/**: thêm/sửa/xóa câu SQL và tham số - SecurityConfig giới hạn ADMIN/SYS vì cho phép lưu câu
 *   SQL tùy ý.
 */
@RestController
public class AutoExcelController {
    private static final Logger log = LoggerFactory.getLogger(AutoExcelController.class);

    private static final MediaType XLSX =
            MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

    @Autowired
    private AutoExcelService service;

    @Autowired
    private AutoExcelExportService exportService;

    /** Frontend dùng để ẩn/hiện các nút Thêm/Sửa/Xóa/Tham số. */
    @GetMapping("/disc/autoExcel/api/permission")
    public ResponseEntity<Map<String, Object>> getPermission(HttpServletRequest request) {
        Map<String, Object> map = new HashMap<>();
        map.put("canEdit", canEdit(request));
        return ResponseEntity.ok(map);
    }

    @GetMapping("/disc/autoExcel/api/list")
    public ResponseEntity<?> getList(@RequestParam(required = false) String pgmNm,
                                     @RequestParam(required = false) String sqlSeq,
                                     @RequestParam(required = false) String sqlNm) {
        try {
            return ResponseEntity.ok(service.getList(pgmNm, sqlSeq, sqlNm));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    /** Câu SQL chỉ trả về cho người có quyền chỉnh sửa. */
    @GetMapping("/disc/autoExcel/api/detail")
    public ResponseEntity<?> getDetail(@RequestParam String sqlSeq, HttpServletRequest request) {
        try {
            return ResponseEntity.ok(service.getDetail(sqlSeq, canEdit(request)));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    /** 200 + file .xlsx; 204 nếu không có dữ liệu; 400 + {success:false, message} nếu lỗi. */
    @PostMapping("/disc/autoExcel/api/export")
    public ResponseEntity<?> export(@Valid @RequestBody AutoExcelRunDto dto, HttpSession session) {
        try {
            AutoExcelExportResult file = exportService.export(dto, sessionContext(session));
            if (file == null) {
                return ResponseEntity.noContent().build();
            }
            ContentDisposition disposition = ContentDisposition.attachment()
                    .filename(file.fileName(), StandardCharsets.UTF_8)
                    .build();
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, disposition.toString())
                    .contentType(XLSX)
                    .body(file.content());
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/sys/api/autoExcel/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody AutoExcelMasterDto dto, HttpSession session) {
        try {
            String sqlSeq = service.save(dto, sessionContext(session).cpnyId());
            Map<String, Object> map = result(true, "common.saveSuccess");
            map.put("sqlSeq", sqlSeq);
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/sys/api/autoExcel/delete")
    public ResponseEntity<Map<String, Object>> delete(@RequestParam String sqlSeq) {
        try {
            service.delete(sqlSeq);
            return ResponseEntity.ok(result(true, "common.deleteSuccess"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/sys/api/autoExcel/params")
    public ResponseEntity<Map<String, Object>> updateParams(@Valid @RequestBody AutoExcelParamUpdateDto dto) {
        try {
            service.updateParams(dto);
            return ResponseEntity.ok(result(true, "common.saveSuccess"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    /** Lỗi @Valid trả về cùng định dạng {success, message} để frontend hiển thị trực tiếp. */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {
        FieldError error = ex.getBindingResult().getFieldError();
        String key = error != null ? error.getDefaultMessage() : "autoExcel.msg.saveFail";
        log.warn("AutoExcel validation failed: field={}, key={}", error != null ? error.getField() : null, key);
        return ResponseEntity.badRequest().body(result(false, key));
    }

    private boolean canEdit(HttpServletRequest request) {
        return request.isUserInRole("ADMIN") || request.isUserInRole("SYS");
    }

    /** Cùng nguồn giá trị với LanguageParameterInterceptor (session attribute cpnyId/language/adminID/adminIP). */
    private AutoExcelSessionContext sessionContext(HttpSession session) {
        return new AutoExcelSessionContext(
                attr(session, "cpnyId", ""),
                attr(session, "language", "vi"),
                attr(session, "adminID", ""),
                attr(session, "adminIP", "127.0.0.1"));
    }

    private String attr(HttpSession session, String name, String fallback) {
        Object v = session.getAttribute(name);
        return v != null ? v.toString() : fallback;
    }

    /** message là key trong messages.properties - dịch theo ngôn ngữ hiện tại của session. */
    private Map<String, Object> result(boolean success, String messageKey) {
        Map<String, Object> map = new HashMap<>();
        map.put("success", success);
        map.put("message", I18nUtil.getMessage(messageKey));
        return map;
    }
}
