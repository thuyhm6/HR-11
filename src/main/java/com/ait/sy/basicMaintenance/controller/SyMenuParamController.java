package com.ait.sy.basicMaintenance.controller;

import com.ait.sy.basicMaintenance.dto.SyMenuParamDto;
import com.ait.sy.basicMaintenance.service.SyMenuParamService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/sys")
public class SyMenuParamController {

    @Autowired
    private SyMenuParamService syMenuParamService;

    @GetMapping("/basicMaintenance/viewMenuParamList")
    public String viewMenuParamList() {
        return "sys/basicMaintenance/viewMenuParamList";
    }

    @GetMapping("/api/menu_param/list")
    @ResponseBody
    public List<SyMenuParamDto> getList(
            @RequestParam(required = false) String parentMenuNo,
            @RequestParam String cpnyId) {
        return syMenuParamService.findByParentMenuAndCpny(parentMenuNo, cpnyId);
    }

    @PostMapping("/api/menu_param/save")
    @ResponseBody
    public Map<String, Object> save(@RequestBody SyMenuParamDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            syMenuParamService.save(dto);
            response.put("success", true);
            response.put("message", "Lưu thành công!");
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Lỗi: " + e.getMessage());
        }
        return response;
    }

    @PostMapping("/api/menu_param/delete")
    @ResponseBody
    public Map<String, Object> delete(@RequestBody SyMenuParamDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            syMenuParamService.delete(dto.getCpnyId(), dto.getMenuNo());
            response.put("success", true);
            response.put("message", "Xóa thành công!");
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Lỗi: " + e.getMessage());
        }
        return response;
    }

    @GetMapping("/api/menu_param/export")
    @SuppressWarnings("null")
    public ResponseEntity<byte[]> exportExcel(
            @RequestParam(required = false) String parentMenuNo,
            @RequestParam String cpnyId) {
        byte[] bytes = syMenuParamService.exportExcel(parentMenuNo, cpnyId);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=MenuParams.csv")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(bytes);
    }
}
