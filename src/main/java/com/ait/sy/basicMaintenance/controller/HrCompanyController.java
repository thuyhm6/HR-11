package com.ait.sy.basicMaintenance.controller;

import com.ait.sy.basicMaintenance.dto.HrCompanyDto;
import com.ait.sy.basicMaintenance.service.HrCompanyService;

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
public class HrCompanyController {

    @Autowired
    private HrCompanyService hrCompanyService;

    @GetMapping("/basicMaintenance/viewCompany")
    public String viewCompany() {
        return "sys/basicMaintenance/viewCompany";
    }

    @GetMapping("/api/company/list")
    @ResponseBody
    public List<HrCompanyDto> getCompanyList(@RequestParam(required = false) String keyword) {
        return hrCompanyService.searchCompany(keyword);
    }

    @PostMapping("/api/company/save")
    @ResponseBody
    public Map<String, Object> saveCompany(@RequestBody HrCompanyDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            hrCompanyService.saveCompany(dto);
            response.put("success", true);
            response.put("message", "Lưu thành công");
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Lỗi: " + e.getMessage());
            e.printStackTrace();
        }
        return response;
    }

    @PostMapping("/api/company/delete")
    @ResponseBody
    public Map<String, Object> deleteCompany(@RequestParam String cpnyNo) {
        Map<String, Object> response = new HashMap<>();
        try {
            hrCompanyService.deleteCompany(cpnyNo);
            response.put("success", true);
            response.put("message", "Xóa thành công");
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Lỗi: " + e.getMessage());
        }
        return response;
    }

    @GetMapping("/api/company/export")
    public ResponseEntity<byte[]> exportExcel() {
        byte[] data = hrCompanyService.exportExcel();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"company_list.csv\"")
                .contentType(MediaType.parseMediaType("text/csv; charset=UTF-8"))
                .body(data);
    }
}
