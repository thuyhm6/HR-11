package com.ait.ar.attendanceSettings.controller;

import com.ait.ar.attendanceSettings.dto.ArVacEmpDto;
import com.ait.ar.attendanceSettings.service.ArVacEmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/ar/attendanceSettings")
public class ArVacEmpController {

    @Autowired
    private ArVacEmpService arVacEmpService;

    // Trang view đã migrate sang Angular (/view-vac-emp-list) - xem MIGRATED_ROUTES trong
    // app-shell.component.ts. API /api/vacEmp/list bên dưới vẫn giữ nguyên vì Angular gọi lại nguyên
    // backend.

    @GetMapping("/api/vacEmp/list")
    @ResponseBody
    public ResponseEntity<List<ArVacEmpDto>> getVacEmpList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String vacId,
            @RequestParam(required = false) String empOffice) {
        ArVacEmpDto params = new ArVacEmpDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setVacId(vacId);
        params.setEmpOffice(empOffice);
        return ResponseEntity.ok(arVacEmpService.getVacEmpList(params));
    }
}
