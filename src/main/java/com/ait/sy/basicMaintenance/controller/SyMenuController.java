package com.ait.sy.basicMaintenance.controller;

import com.ait.sy.basicMaintenance.dto.SyMenuDto;
import com.ait.sy.basicMaintenance.service.SyMenuService;

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
public class SyMenuController {

    @Autowired
    private SyMenuService syMenuService;

    @GetMapping("/basicMaintenance/viewMenuList")
    public String viewMenuList() {
        return "sys/basicMaintenance/viewMenuList";
    }

    @GetMapping("/api/menu/list")
    @ResponseBody
    public List<SyMenuDto> getList(@RequestParam(required = false) String keyword) {
        return syMenuService.findAll(keyword);
    }

    @PostMapping("/api/menu/save")
    @ResponseBody
    public Map<String, Object> save(@RequestBody SyMenuDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            syMenuService.save(dto);
            response.put("success", true);
            response.put("message", "Lưu thành công!");
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Lỗi: " + e.getMessage());
        }
        return response;
    }

    @PostMapping("/api/menu/delete")
    @ResponseBody
    public Map<String, Object> delete(@RequestParam String menuNo) {
        Map<String, Object> response = new HashMap<>();
        try {
            syMenuService.delete(menuNo);
            response.put("success", true);
            response.put("message", "Xóa thành công!");
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Lỗi: " + e.getMessage());
        }
        return response;
    }

    @GetMapping("/api/menu/export")
    @SuppressWarnings("null")
    public ResponseEntity<byte[]> exportExcel() {
        byte[] bytes = syMenuService.exportExcel();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=MenuList.csv")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(bytes);
    }
}
