package com.ait.ar.attendanceSettings.controller;

import com.ait.ar.attendanceSettings.dto.ArStaItemParamDto;
import com.ait.ar.attendanceSettings.service.ArStaItemParamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ar/attendanceSettings")
public class ArStaItemParamController {

    @Autowired
    private ArStaItemParamService service;

    @GetMapping("/viewSummaryParamItem")
    public String viewSummaryParamItem() {
        return "ar/attendanceSettings/viewSummaryParamItem";
    }

    @GetMapping("/api/arStaItemParam")
    @ResponseBody
    public ResponseEntity<List<ArStaItemParamDto>> getItems(
            @RequestParam(required = false) String searchText) {
        return ResponseEntity.ok(service.getItemList(searchText));
    }

    @GetMapping("/api/arStaItemParam/availableItems")
    @ResponseBody
    public ResponseEntity<List<Map<String, Object>>> getAvailableItems() {
        return ResponseEntity.ok(service.getAvailableItems());
    }

    @GetMapping("/api/arStaItemParam/{paramNo}")
    @ResponseBody
    public ResponseEntity<ArStaItemParamDto> getItemById(@PathVariable String paramNo) {
        ArStaItemParamDto dto = service.getItemById(paramNo);
        if (dto != null)
            return ResponseEntity.ok(dto);
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/api/arStaItemParam/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveItem(@RequestBody ArStaItemParamDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            service.saveItem(dto);
            response.put("success", true);
            response.put("message", "Lưu thành công!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Lỗi: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    @DeleteMapping("/api/arStaItemParam/delete/{paramNo}")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteItem(@PathVariable String paramNo) {
        Map<String, Object> response = new HashMap<>();
        try {
            service.deleteItem(paramNo);
            response.put("success", true);
            response.put("message", "Xóa thành công!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Lỗi: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }
}
