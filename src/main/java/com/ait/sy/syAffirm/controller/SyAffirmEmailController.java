package com.ait.sy.syAffirm.controller;

import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.service.SyAffirmEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/sy/syAffirm/api")
public class SyAffirmEmailController {

    @Autowired
    private SyAffirmEmailService service;

    @GetMapping("/list")
    public ResponseEntity<List<SyAffirmEmailDto>> getList(SyAffirmEmailDto dto) {
        return ResponseEntity.ok(service.getList(dto));
    }

    @GetMapping("/{seq}")
    public ResponseEntity<SyAffirmEmailDto> getById(@PathVariable String seq) {
        return ResponseEntity.ok(service.getById(seq));
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@RequestBody SyAffirmEmailDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            service.save(dto);
            response.put("success", true);
            response.put("message", "Lưu thành công");
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("error", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/delete/{seq}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable String seq) {
        Map<String, Object> response = new HashMap<>();
        try {
            service.delete(seq);
            response.put("success", true);
            response.put("message", "Xóa thành công");
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("error", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }
}
