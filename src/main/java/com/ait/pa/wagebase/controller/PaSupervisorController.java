package com.ait.pa.wagebase.controller;

import com.ait.pa.wagebase.dto.PaSupervisorDto;
import com.ait.pa.wagebase.service.PaSupervisorService;
import com.ait.sy.sys.dto.DataTablesResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/pa/wagebase")
public class PaSupervisorController {

    private static final Logger log = LoggerFactory.getLogger(PaSupervisorController.class);

    @Autowired
    private PaSupervisorService paSupervisorService;

    @GetMapping("/viewPaSupervisor")
    public String viewPaSupervisor() {
        return "pa/wagebase/viewPaSupervisor";
    }

    @GetMapping("/api/supervisor/list")
    @ResponseBody
    public ResponseEntity<?> getList(
            @RequestParam(required = false) String empSearch,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String empOfficeSearch,
            @RequestParam(defaultValue = "1") int draw,
            @RequestParam(defaultValue = "0") int start,
            @RequestParam(defaultValue = "20") int length) {
        try {
            PaSupervisorDto params = new PaSupervisorDto();
            params.setEmpSearch(empSearch);
            params.setDeptNos(deptNos);
            params.setEmpOfficeSearch(empOfficeSearch);
            params.setDraw(draw);
            params.setStart(start);
            params.setLength(length > 0 ? length : 20);
            DataTablesResponse<PaSupervisorDto> result = paSupervisorService.getPagedList(params);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách người phụ trách lương: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError()
                    .body(new DataTablesResponse<>(draw, e.getMessage()));
        }
    }

    @GetMapping("/api/supervisor/{personId}")
    @ResponseBody
    public ResponseEntity<?> getOne(@PathVariable String personId) {
        try {
            PaSupervisorDto dto = paSupervisorService.getOne(personId);
            if (dto == null) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(dto);
        } catch (Exception e) {
            log.error("Lỗi khi lấy chi tiết người phụ trách lương personId={}: {}", personId, e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/api/supervisor/save")
    @ResponseBody
    public ResponseEntity<?> save(@RequestBody PaSupervisorDto dto) {
        try {
            if (dto.getPersonId() == null || dto.getPersonId().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Vui lòng chọn người phụ trách!"));
            }
            paSupervisorService.save(dto);
            return ResponseEntity.ok(Map.of("success", true, "message", "Lưu thành công"));
        } catch (Exception e) {
            log.error("Lỗi khi lưu người phụ trách lương: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    @DeleteMapping("/api/supervisor/deleteList")
    @ResponseBody
    public ResponseEntity<?> deleteList(@RequestBody List<String> personIds) {
        try {
            if (personIds == null || personIds.isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Vui lòng chọn ít nhất một bản ghi!"));
            }
            paSupervisorService.deleteList(personIds);
            return ResponseEntity.ok(Map.of("success", true, "message", "Xóa thành công " + personIds.size() + " bản ghi"));
        } catch (Exception e) {
            log.error("Lỗi khi xóa danh sách người phụ trách lương: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }
}
