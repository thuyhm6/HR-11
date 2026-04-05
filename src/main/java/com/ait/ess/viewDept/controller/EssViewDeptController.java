package com.ait.ess.viewDept.controller;

import com.ait.ess.viewDept.dto.ManageEvsResultEmpDto;
import com.ait.ess.viewDept.dto.ManageEmpPositionInfoDto;
import com.ait.ess.viewDept.dto.ManageEmpPositionInsideDto;
import com.ait.ess.viewDept.service.ManageEvsResultEmpService;
import com.ait.ess.viewDept.service.ManageEmpPositionInfoService;
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
            @RequestParam(required = false) String nationalityCode) {
        ManageEmpPositionInfoDto params = new ManageEmpPositionInfoDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setFromDate(fromDate);
        params.setToDate(toDate);
        params.setPostFamily(postFamily);
        params.setEmpTypeCode(empTypeCode);
        params.setEmpOffice(empOffice);
        params.setNationalityCode(nationalityCode);
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
}
