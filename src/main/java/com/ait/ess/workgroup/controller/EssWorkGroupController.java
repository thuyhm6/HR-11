package com.ait.ess.workgroup.controller;

import com.ait.ess.deptEmpAtt.dto.ArShiftGroupManagementDto;
import com.ait.ess.deptEmpAtt.service.ArShiftGroupManagementService;
import com.ait.ess.workgroup.dto.PersonShiftDto;
import com.ait.ess.workgroup.service.PersonShiftService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.HttpSession;
import java.util.Collections;
import java.util.List;

@Controller
@RequestMapping("/ess/workgroup")
public class EssWorkGroupController {

    private static final Logger log = LoggerFactory.getLogger(EssWorkGroupController.class);

    @Autowired
    private ArShiftGroupManagementService shiftGroupService;

    @Autowired
    private PersonShiftService personShiftService;

    // Trang Thymeleaf ess/workgroup/viewWorkGroupExperList.html đã được thay bằng Angular route
    // /workgroup-exper-list (xem frontend-ng/src/app/workgroup-exper-list/ và MIGRATED_ROUTES trong
    // app-shell.component.ts) - API /api/workGroup/myList bên dưới vẫn giữ nguyên.

    // Trang Thymeleaf ess/workgroup/viewPersonShiftList.html đã được thay bằng Angular route
    // /person-shift-list (xem frontend-ng/src/app/person-shift-list/ và MIGRATED_ROUTES trong
    // app-shell.component.ts) - API /api/personShift/myList bên dưới vẫn giữ nguyên.

    @GetMapping("/api/personShift/myList")
    @ResponseBody
    public ResponseEntity<List<PersonShiftDto>> getMyPersonShift(
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate,
            HttpSession session) {
        String personId = (String) session.getAttribute("adminID");
        if (personId == null || personId.trim().isEmpty()) {
            return ResponseEntity.ok(Collections.emptyList());
        }
        PersonShiftDto dto = new PersonShiftDto();
        dto.setStartDate(startDate);
        dto.setEndDate(endDate);
        try {
            return ResponseEntity.ok(personShiftService.getPersonShift(dto));
        } catch (Exception e) {
            log.error("Failed to load person shift for personId={}", personId, e);
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/api/workGroup/myList")
    @ResponseBody
    public ResponseEntity<List<ArShiftGroupManagementDto>> getMyList(
            @RequestParam(required = false) String shiftNo,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate,
            HttpSession session) {
        String personId = (String) session.getAttribute("adminID");
        if (personId == null || personId.trim().isEmpty()) {
            return ResponseEntity.ok(Collections.emptyList());
        }
        ArShiftGroupManagementDto dto = new ArShiftGroupManagementDto();
        dto.setPersonId(personId.trim());
        dto.setShiftNo(shiftNo);
        dto.setFromDate(fromDate);
        dto.setToDate(toDate);
        try {
            return ResponseEntity.ok(shiftGroupService.getListByPersonId(dto));
        } catch (Exception e) {
            log.error("Failed to load workgroup list for personId={}", personId, e);
            return ResponseEntity.ok(Collections.emptyList());
        }
    }
}
