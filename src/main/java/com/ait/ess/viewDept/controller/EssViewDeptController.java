package com.ait.ess.viewDept.controller;

import com.ait.ess.viewDept.dto.ArPersonalSelfDetailDto;
import com.ait.ess.viewDept.dto.ArPersonalSelfDto;
import com.ait.ess.viewDept.dto.ManageEvsResultEmpDto;
import com.ait.ess.viewDept.dto.ManageEmpPositionInfoDto;
import com.ait.ess.viewDept.dto.ManageEmpPositionInsideDto;
import com.ait.ess.viewDept.dto.OtApplyPersonalSelfDetailDto;
import com.ait.ess.viewDept.dto.OtApplyPersonalSelfDto;
import com.ait.ess.viewDept.dto.YearUseLeaveUsageDto;
import com.ait.ess.viewDept.dto.YearUseVacationDto;
import com.ait.ess.viewDept.service.ArPersonalSelfService;
import com.ait.ess.viewDept.service.ManageEvsResultEmpService;
import com.ait.ess.viewDept.service.ManageEmpPositionInfoService;
import com.ait.ess.viewDept.service.OtApplyPersonalSelfService;
import com.ait.ess.viewDept.service.YearUseInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/ess/viewDept")
public class EssViewDeptController {

    @Autowired
    private ManageEmpPositionInfoService service;

    @Autowired
    private ManageEvsResultEmpService manageEvsResultEmpService;

    @Autowired
    private ArPersonalSelfService arPersonalSelfService;

    @Autowired
    private OtApplyPersonalSelfService otApplyPersonalSelfService;

    @Autowired
    private YearUseInfoService yearUseInfoService;

    @GetMapping("/viewEmpCalendar")
    public String viewEmpCalendar() {
        return "ess/viewDept/viewEmpCalendar";
    }

    @GetMapping("/ManageEmpPositionInfoList")
    public String viewManageEmpPositionInfoList() {
        return "ess/viewDept/ManageEmpPositionInfoList";
    }

    @GetMapping("/viewDeptPersonalInfoManageList")
    public String viewDeptPersonalInfoManageList() {
        return "ess/viewDept/viewDeptPersonalInfoManageList";
    }

    @GetMapping("/viewManageEvsResultEmpList")
    public String viewManageEvsResultEmpList() {
        return "ess/viewDept/viewManageEvsResultEmpList";
    }

    @GetMapping("/api/manageEmpPositionInfo/list")
    @ResponseBody
    public ResponseEntity<List<ManageEmpPositionInfoDto>> getManageEmpPositionInfoList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate,
            @RequestParam(required = false) String postFamily,
            @RequestParam(required = false) String empTypeCode,
            @RequestParam(required = false) String empOffice,
            @RequestParam(required = false) String nationalityCode,
            @RequestParam(required = false) String asOfDate) {
        ManageEmpPositionInfoDto params = new ManageEmpPositionInfoDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setFromDate(fromDate);
        params.setToDate(toDate);
        params.setPostFamily(postFamily);
        params.setEmpTypeCode(empTypeCode);
        params.setEmpOffice(empOffice);
        params.setNationalityCode(nationalityCode);
        params.setAsOfDate(asOfDate);
        return ResponseEntity.ok(service.getList(params));
    }

    @GetMapping("/api/manageEvsResultEmp/list")
    @ResponseBody
    public ResponseEntity<List<ManageEvsResultEmpDto>> getManageEvsResultEmpList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate,
            @RequestParam(required = false) String year,
            @RequestParam(required = false) String postFamily,
            @RequestParam(required = false) String empTypeCode,
            @RequestParam(required = false) String empOffice) {
        ManageEvsResultEmpDto params = new ManageEvsResultEmpDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setFromDate(fromDate);
        params.setToDate(toDate);
        params.setYear(year);
        params.setPostFamily(postFamily);
        params.setEmpTypeCode(empTypeCode);
        params.setEmpOffice(empOffice);
        return ResponseEntity.ok(manageEvsResultEmpService.getList(params));
    }

    @GetMapping("/api/manageEmpPositionInfo/insideExperience")
    @ResponseBody
    public ResponseEntity<List<ManageEmpPositionInsideDto>> getInsideExperienceList(
            @RequestParam String personId) {
        return ResponseEntity.ok(service.getInsideExperienceList(personId));
    }

    @GetMapping("/viewArPersonalSelfList")
    public String viewArPersonalSelfList() {
        return "ess/viewDept/viewArPersonalSelfList";
    }

    @GetMapping("/api/arPersonalSelf/items")
    @ResponseBody
    public ResponseEntity<List<ArPersonalSelfDto>> getArPersonalSelfItems() {
        return ResponseEntity.ok(arPersonalSelfService.getItemList());
    }

    @GetMapping("/api/arPersonalSelf/summary")
    @ResponseBody
    public ResponseEntity<List<ArPersonalSelfDto>> getArPersonalSelfSummary(
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate) {
        ArPersonalSelfDto params = new ArPersonalSelfDto();
        params.setStartDate(startDate);
        params.setEndDate(endDate);
        return ResponseEntity.ok(arPersonalSelfService.getSummaryList(params));
    }

    @GetMapping("/api/arPersonalSelf/detail")
    @ResponseBody
    public ResponseEntity<List<ArPersonalSelfDetailDto>> getArPersonalSelfDetail(
            @RequestParam String personId,
            @RequestParam String itemNo,
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate) {
        ArPersonalSelfDetailDto params = new ArPersonalSelfDetailDto();
        params.setPersonId(personId);
        params.setItemNo(itemNo);
        params.setStartDate(startDate);
        params.setEndDate(endDate);
        return ResponseEntity.ok(arPersonalSelfService.getDetailList(params));
    }

    @GetMapping("/viewOtApplyPersonalSelfList")
    public String viewOtApplyPersonalSelfList() {
        return "ess/viewDept/viewOtApplyPersonalSelfList";
    }

    @GetMapping("/api/otApplyPersonalSelf/items")
    @ResponseBody
    public ResponseEntity<List<OtApplyPersonalSelfDto>> getOtApplyPersonalSelfItems() {
        return ResponseEntity.ok(otApplyPersonalSelfService.getItemList());
    }

    @GetMapping("/api/otApplyPersonalSelf/summary")
    @ResponseBody
    public ResponseEntity<List<OtApplyPersonalSelfDto>> getOtApplyPersonalSelfSummary(
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate) {
        OtApplyPersonalSelfDto params = new OtApplyPersonalSelfDto();
        params.setStartDate(startDate);
        params.setEndDate(endDate);
        return ResponseEntity.ok(otApplyPersonalSelfService.getSummaryList(params));
    }

    @GetMapping("/api/otApplyPersonalSelf/detail")
    @ResponseBody
    public ResponseEntity<List<OtApplyPersonalSelfDetailDto>> getOtApplyPersonalSelfDetail(
            @RequestParam String personId,
            @RequestParam String itemNo,
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate) {
        OtApplyPersonalSelfDetailDto params = new OtApplyPersonalSelfDetailDto();
        params.setPersonId(personId);
        params.setItemNo(itemNo);
        params.setStartDate(startDate);
        params.setEndDate(endDate);
        return ResponseEntity.ok(otApplyPersonalSelfService.getDetailList(params));
    }

    @GetMapping("/yearUseInfo")
    public String viewYearUseInfo() {
        return "ess/viewDept/yearUseInfo";
    }

    @GetMapping("/api/yearUseInfo/vacationRows")
    @ResponseBody
    public ResponseEntity<List<YearUseVacationDto>> getYearUseVacationRows(
            @RequestParam(required = false) String year) {
        return ResponseEntity.ok(yearUseInfoService.getVacationRows(year));
    }

    @GetMapping("/api/yearUseInfo/leaveUsage")
    @ResponseBody
    public ResponseEntity<List<YearUseLeaveUsageDto>> getYearUseLeaveUsage(
            @RequestParam(required = false) String year) {
        return ResponseEntity.ok(yearUseInfoService.getLeaveUsageList(year));
    }
}
