package com.ait.hrm.uniform.controller;

import com.ait.exception.BusinessException;
import com.ait.hrm.uniform.dto.HrUniformChangeDto;
import com.ait.hrm.uniform.dto.HrUniformChangeSearchDto;
import com.ait.hrm.uniform.dto.HrUniformEmpInfoDto;
import com.ait.hrm.uniform.dto.HrUniformImportResultDto;
import com.ait.hrm.uniform.dto.HrUniformImportRowDto;
import com.ait.hrm.uniform.dto.HrUniformItemDto;
import com.ait.hrm.uniform.service.HrUniformService;
import com.ait.sy.sys.dto.DataTablesResponse;
import com.ait.util.I18nUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * Quản lý đổi đồng phục nhân viên - backend cho các trang Angular:
 * /uniform-change-list (menu /hrm/uniform/viewUniformChangeList) và /uniform-item-list (menu /hrm/uniform/viewUniformItemList).
 * Quy định: mỗi nhân viên chỉ được đổi đồng phục 6 tháng / 1 lần.
 */
@Controller
@RequestMapping("/hrm/uniform")
public class HrUniformController {

    private static final Logger log = LoggerFactory.getLogger(HrUniformController.class);

    @Autowired
    private HrUniformService hrUniformService;

    // ==================== Danh mục đồng phục ====================

    @GetMapping("/api/item/list")
    @ResponseBody
    public ResponseEntity<?> getItemList(@RequestParam(defaultValue = "false") boolean activeOnly) {
        try {
            return ResponseEntity.ok(hrUniformService.getItemList(activeOnly));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.loadFail")));
        }
    }

    @PostMapping("/api/item/insert")
    @ResponseBody
    public ResponseEntity<?> insertItem(@RequestBody HrUniformItemDto dto) {
        dto.setItemNo(null);
        return saveItem(dto);
    }

    @PutMapping("/api/item/update")
    @ResponseBody
    public ResponseEntity<?> updateItem(@RequestBody HrUniformItemDto dto) {
        if (dto.getItemNo() == null) {
            return ResponseEntity.badRequest().body(Map.of("error", I18nUtil.getMessage("common.saveFail")));
        }
        return saveItem(dto);
    }

    private ResponseEntity<?> saveItem(HrUniformItemDto dto) {
        try {
            hrUniformService.saveItem(dto);
            return ResponseEntity.ok(Map.of("success", true, "message", I18nUtil.getMessage("common.saveSuccess")));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getUserMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.saveFail")));
        }
    }

    @DeleteMapping("/api/item/delete/{itemNo}")
    @ResponseBody
    public ResponseEntity<?> deleteItem(@PathVariable Long itemNo) {
        try {
            hrUniformService.deleteItem(itemNo);
            return ResponseEntity.ok(Map.of("success", true, "message", I18nUtil.getMessage("common.deleteSuccess")));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.deleteFail")));
        }
    }

    // ==================== Đổi đồng phục ====================

    @GetMapping("/api/change/list")
    @ResponseBody
    public ResponseEntity<DataTablesResponse<HrUniformChangeDto>> getChangeList(@ModelAttribute HrUniformChangeSearchDto params) {
        log.info("Tra cứu đổi đồng phục: month={}, keyword={}", params.getMonth(), params.getKeyword());
        return ResponseEntity.ok(hrUniformService.getChangePageList(params));
    }

    /** Các lần đổi của 1 nhân viên trong 1 tháng trước đó (popup khi bấm ô số lượng tháng). month = YYYY-MM. */
    @GetMapping("/api/change/history")
    @ResponseBody
    public ResponseEntity<?> getPersonMonthChanges(@RequestParam String personId, @RequestParam String month) {
        try {
            return ResponseEntity.ok(hrUniformService.getPersonMonthChanges(personId, month));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.loadFail")));
        }
    }

    /** Thông tin nhân viên + lần đổi gần nhất / ngày được đổi tiếp (dùng ở form thêm mới). */
    @GetMapping("/api/change/employee")
    @ResponseBody
    public ResponseEntity<?> getEmpInfo(@RequestParam String empId) {
        try {
            HrUniformEmpInfoDto emp = hrUniformService.getEmpInfo(empId);
            if (emp == null) {
                return ResponseEntity.ok(Map.of("error",
                        I18nUtil.getMessage("hrm.uniform.msg.empNotFound", new Object[]{empId})));
            }
            return ResponseEntity.ok(emp);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.loadFail")));
        }
    }

    @PostMapping("/api/change/insert")
    @ResponseBody
    public ResponseEntity<?> insertChange(@RequestBody HrUniformImportRowDto row) {
        row.setChangeNo(null);
        return saveChange(row);
    }

    @PutMapping("/api/change/update")
    @ResponseBody
    public ResponseEntity<?> updateChange(@RequestBody HrUniformImportRowDto row) {
        if (row.getChangeNo() == null) {
            return ResponseEntity.badRequest().body(Map.of("error", I18nUtil.getMessage("common.saveFail")));
        }
        return saveChange(row);
    }

    private ResponseEntity<?> saveChange(HrUniformImportRowDto row) {
        try {
            List<String> errors = hrUniformService.saveChange(row);
            if (!errors.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", String.join("\n", errors)));
            }
            return ResponseEntity.ok(Map.of("success", true, "message", I18nUtil.getMessage("common.saveSuccess")));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.saveFail")));
        }
    }

    @DeleteMapping("/api/change/delete/{changeNo}")
    @ResponseBody
    public ResponseEntity<?> deleteChange(@PathVariable Long changeNo) {
        try {
            hrUniformService.deleteChange(changeNo);
            return ResponseEntity.ok(Map.of("success", true, "message", I18nUtil.getMessage("common.deleteSuccess")));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.deleteFail")));
        }
    }

    // ==================== Upload Excel (2 bước: xem trước -> lưu) ====================

    @PostMapping("/api/change/import/preview")
    @ResponseBody
    public ResponseEntity<?> previewImport(@RequestParam("file") MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", I18nUtil.getMessage("hrm.uniform.msg.selectFile")));
        }
        try {
            HrUniformImportResultDto result = hrUniformService.previewImport(file);
            return ResponseEntity.ok(result);
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getUserMessage()));
        } catch (Exception e) {
            log.error("Lỗi khi xem trước file upload đổi đồng phục: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("hrm.uniform.msg.readFileFail")));
        }
    }

    @PostMapping("/api/change/import/save")
    @ResponseBody
    public ResponseEntity<?> saveImport(@RequestBody List<HrUniformImportRowDto> rows) {
        if (rows == null || rows.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", I18nUtil.getMessage("hrm.uniform.msg.noValidRow")));
        }
        try {
            return ResponseEntity.ok(hrUniformService.saveImport(rows));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.saveFail")));
        }
    }
}
