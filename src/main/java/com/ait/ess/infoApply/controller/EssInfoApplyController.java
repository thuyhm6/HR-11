package com.ait.ess.infoApply.controller;

import com.ait.ess.infoApply.dto.EssCwaAbnormalDto;
import com.ait.ess.infoApply.dto.EssOtApplyListDto;
import com.ait.ess.infoApply.dto.EssPersonOtInfoDto;
import com.ait.ess.infoApply.service.EssCwaAbnormalService;
import com.ait.ess.infoApply.service.EssOtApplyService;
import com.ait.ess.infoApply.service.EssPersonOtInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ess/infoApply")
public class EssInfoApplyController {

    private static final Logger log = LoggerFactory.getLogger(EssInfoApplyController.class);

    @Autowired
    private EssOtApplyService essOtApplyService;

    @Autowired
    private EssCwaAbnormalService essCwaAbnormalService;

    @Autowired
    private EssPersonOtInfoService essPersonOtInfoService;

    @GetMapping("/viewSSTOtApplyInfo")
    public String viewSSTOtApplyInfo() {
        return "ess/infoApply/viewSSTOtApplyInfo";
    }

    @GetMapping("/viewPOtApplyInfoList")
    public String viewPOtApplyInfoList() {
        return "ess/infoApply/viewPOtApplyInfoList";
    }

    @GetMapping("/api/otDateInfo")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getOtDateInfo(
            @RequestParam String applyDate) {
        return ResponseEntity.ok(essOtApplyService.getOtDateInfo(applyDate));
    }

    @GetMapping("/api/myOtApply/list")
    @ResponseBody
    public ResponseEntity<List<EssOtApplyListDto>> getMyOtApplyList(
            @RequestParam(required = false) String otTypeCode,
            @RequestParam(required = false) String affirmFlag,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate) {
        EssOtApplyListDto dto = new EssOtApplyListDto();
        dto.setOtTypeCodeSearch(otTypeCode);
        dto.setAffirmFlagSearch(affirmFlag);
        dto.setFromDate(fromDate);
        dto.setToDate(toDate);
        return ResponseEntity.ok(essOtApplyService.getMyOtApplyList(dto));
    }

    @PostMapping("/api/myOtApply/cancel")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> cancelMyOtApplyList(
            @RequestBody List<String> applyNos) {
        Map<String, Object> response = new HashMap<>();
        try {
            int count = essOtApplyService.cancelMyOtApplyList(applyNos);
            response.put("success", true);
            response.put("count", count);
            response.put("message", "Hủy bỏ thành công " + count + " dòng.");
        } catch (Exception e) {
            log.error("Failed to cancel OT applications", e);
            response.put("success", false);
            response.put("error", e.getMessage() == null || e.getMessage().isBlank()
                    ? "Hủy bỏ thất bại." : e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/viewPersonOtApplyInfoList")
    public String viewPersonOtApplyInfoList() {
        return "ess/infoApply/viewPersonOtApplyInfoList";
    }

    @GetMapping("/api/personOt/list")
    @ResponseBody
    public ResponseEntity<List<EssPersonOtInfoDto>> getPersonOtList(
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate,
            @RequestParam(required = false) String itemNoSearch,
            @RequestParam(required = false) String minQuantity) {
        EssPersonOtInfoDto params = new EssPersonOtInfoDto();
        params.setStartDate(startDate);
        params.setEndDate(endDate);
        params.setItemNoSearch(itemNoSearch);
        params.setMinQuantity(minQuantity);
        return ResponseEntity.ok(essPersonOtInfoService.getPersonOtList(params));
    }

    @GetMapping("/api/personOt/items")
    @ResponseBody
    public ResponseEntity<List<EssPersonOtInfoDto>> getOtItemList() {
        return ResponseEntity.ok(essPersonOtInfoService.getOtItemList());
    }

    @GetMapping("/viewShowCwaAbnormalApply")
    public String viewShowCwaAbnormalApply() {
        return "ess/infoApply/viewShowCwaAbnormalApply";
    }

    @GetMapping("/api/myCwaAbnormal/list")
    @ResponseBody
    public ResponseEntity<List<EssCwaAbnormalDto>> getMyCwaAbnormalList(
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate) {
        EssCwaAbnormalDto dto = new EssCwaAbnormalDto();
        dto.setStartDate(startDate);
        dto.setEndDate(endDate);
        return ResponseEntity.ok(essCwaAbnormalService.getMyList(dto));
    }
}
