package com.ait.ar.attendanceSettings.controller;

import com.ait.ar.attendanceSettings.dto.ArCalenderDto;
import com.ait.ar.attendanceSettings.dto.ArEmpCalenderDto;
import com.ait.ar.attendanceSettings.dto.ArCalenderGroupDto;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.ar.attendanceSettings.service.ArCalenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ar/attendanceSettings")
public class ArCalenderController {

    @Autowired
    private ArCalenderService arCalenderService;

    @GetMapping("/viewStatutoryHolidays")
    public String viewStatutoryHolidays() {
        return "ar/attendanceSettings/viewStatutoryHolidays";
    }

    @GetMapping("/viewCompanyCalendar")
    public String viewCompanyCalendar() {
        return "ar/attendanceSettings/viewCompanyCalendar";
    }

    // API: lấy danh sách ngày lễ (dùng cho viewStatutoryHolidays)
    @GetMapping("/api/calender/holidays")
    @ResponseBody
    public ResponseEntity<List<ArCalenderDto>> getHolidays(
            @RequestParam(required = false) String iyear,
            @RequestParam(required = false) String imonth,
            @RequestParam(required = false) String keyword) {
        return ResponseEntity.ok(arCalenderService.getHolidayList(iyear, imonth, keyword));
    }

    // API: lấy tất cả ngày trong tháng (dùng cho viewCompanyCalendar)
    @GetMapping("/api/calender/month")
    @ResponseBody
    public ResponseEntity<List<ArCalenderDto>> getCalendarMonth(
            @RequestParam(required = false, defaultValue = "0") int year,
            @RequestParam(required = false, defaultValue = "0") int month) {
        if (year == 0)
            year = LocalDate.now().getYear();
        if (month == 0)
            month = LocalDate.now().getMonthValue();
        return ResponseEntity.ok(arCalenderService.getCalendarMonth(year, month));
    }

    // API: lấy chi tiết 1 ngày để edit
    @GetMapping("/api/calender/holidays/detail")
    @ResponseBody
    public ResponseEntity<ArCalenderDto> getHolidayByPk(
            @RequestParam String ddateStr) {
        ArCalenderDto dto = arCalenderService.getHolidayByPk(ddateStr);
        if (dto != null)
            return ResponseEntity.ok(dto);
        return ResponseEntity.notFound().build();
    }

    // API: lưu (insert/update)
    @PostMapping("/api/calender/holidays/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveHoliday(
            @RequestBody ArCalenderDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            arCalenderService.saveHoliday(dto);
            response.put("success", true);
            response.put("message", "Lưu ngày lễ thành công!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Lỗi: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    // API: xóa
    @DeleteMapping("/api/calender/holidays/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteHoliday(
            @RequestParam String ddateStr) {
        Map<String, Object> response = new HashMap<>();
        try {
            arCalenderService.deleteHoliday(ddateStr);
            response.put("success", true);
            response.put("message", "Xóa ngày lễ thành công!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Lỗi: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    // ================= CLASS CALENDAR API =================

    @GetMapping("/viewClassCalendar")
    public String viewClassCalendar() {
        return "ar/attendanceSettings/viewClassCalendar";
    }

    @GetMapping("/api/calender/group/month")
    @ResponseBody
    public ResponseEntity<List<ArCalenderGroupDto>> getGroupCalendarMonth(
            @RequestParam(required = false, defaultValue = "0") int year,
            @RequestParam(required = false, defaultValue = "0") int month,
            @RequestParam(required = false) String groupId) {
        if (year == 0) year = LocalDate.now().getYear();
        if (month == 0) month = LocalDate.now().getMonthValue();
        return ResponseEntity.ok(arCalenderService.getGroupCalendarMonth(year, month, groupId));
    }

    @GetMapping("/api/calender/group/detail")
    @ResponseBody
    public ResponseEntity<ArCalenderGroupDto> getGroupCalendarDetail(
            @RequestParam String arDateStr,
            @RequestParam String groupId) {
        ArCalenderGroupDto dto = arCalenderService.getGroupCalendarDetail(arDateStr, groupId);
        if (dto != null) return ResponseEntity.ok(dto);
        return ResponseEntity.notFound().build();
    }

    /**
     * Thêm mới Lịch Nhóm Ca (Gọi qua thủ tục AR_ADD_CALENDER_DATE_BANCI_P)
     */
    @PostMapping("/api/calender/group/batch_save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveGroupCalendarBatch(
            @RequestParam String startDate,
            @RequestParam String endDate,
            @RequestParam String groupId,
            @RequestParam String workShift,
            @RequestParam String restShift) {
        Map<String, Object> response = new HashMap<>();
        try {
            arCalenderService.saveGroupCalendarBatch(startDate, endDate, groupId, workShift, restShift);
            response.put("success", true);
            response.put("message", "Thêm lịch nhóm ca thành công!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Lỗi: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * Cập nhật 1 ngày cấu hình Lịch Nhóm Ca
     */
    @PostMapping("/api/calender/group/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveGroupCalendarSingle(
            @RequestBody ArCalenderGroupDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            arCalenderService.updateGroupCalendarSingle(dto);
            response.put("success", true);
            response.put("message", "Cập nhật ngày làm việc thành công!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Lỗi: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    // ================= EMP CALENDAR API =================

    @GetMapping("/viewEmpCalendar")
    public String viewEmpCalendar(Model model, jakarta.servlet.http.HttpSession session) {
        HrUserInfo currentHrUser = 
            (HrUserInfo) session.getAttribute("currentHrUser");
        
        if (currentHrUser != null) {
            model.addAttribute("defaultPersonId", currentHrUser.getPersonId());
            if (currentHrUser.getHrEmployee() != null) {
                model.addAttribute("defaultEmpId", currentHrUser.getHrEmployee().getEmpId());
                model.addAttribute("defaultLocalName", currentHrUser.getHrEmployee().getLocalName());
            }
        }
        return "ar/attendanceSettings/viewEmpCalendar";
    }

    @GetMapping("/api/calender/emp/month")
    @ResponseBody
    public ResponseEntity<List<ArEmpCalenderDto>> getEmpCalendarMonth(
            @RequestParam(required = false, defaultValue = "0") int year,
            @RequestParam(required = false, defaultValue = "0") int month,
            @RequestParam(required = false) String personId) {
        if (year == 0) year = LocalDate.now().getYear();
        if (month == 0) month = LocalDate.now().getMonthValue();
        return ResponseEntity.ok(arCalenderService.getEmpCalendarMonth(year, month, personId));
    }

    @GetMapping("/api/calender/emp/detail")
    @ResponseBody
    public ResponseEntity<ArEmpCalenderDto> getEmpCalendarDetail(
            @RequestParam String arDateStr,
            @RequestParam(required = false) String personId) {
        ArEmpCalenderDto dto = arCalenderService.getEmpScheduleDetail(personId, arDateStr);
        if (dto != null) return ResponseEntity.ok(dto);
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/api/calender/emp/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEmpCalendarDay(
            @RequestBody ArEmpCalenderDto dto) {
        Map<String, Object> response = new HashMap<>();
        try {
            dto.setPersonId(dto.getPersonId());
            arCalenderService.saveEmpCalendarDay(dto);
            response.put("success", true);
            response.put("message", "Cập nhật lịch cá nhân thành công!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Lỗi: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }
}

