package com.ait.evs.manage.controller;

import com.ait.evs.manage.dto.EvsAffirmRuleDto;
import com.ait.evs.manage.dto.EvsAffirmorSetupDto;
import com.ait.evs.manage.dto.EvsFormulaDto;
import com.ait.evs.manage.dto.EvsGradeDto;
import com.ait.evs.manage.dto.EvsItemDto;
import com.ait.evs.manage.dto.EvsItemParamDto;
import com.ait.evs.manage.dto.EvsItemSstDto;
import com.ait.evs.manage.dto.EvsParamDto;
import com.ait.evs.manage.dto.EvsParamObjectDto;
import com.ait.evs.manage.dto.EvsPersonalTargetDto;
import com.ait.evs.manage.dto.EvsResumeDto;
import com.ait.evs.manage.dto.EvsResultDto;
import com.ait.evs.manage.dto.EvsScheduleDto;
import com.ait.evs.manage.dto.EvsScoreDto;
import com.ait.evs.manage.service.EvsAffirmRuleService;
import com.ait.evs.manage.service.EvsAffirmorSetupService;
import com.ait.evs.manage.service.EvsFormulaService;
import com.ait.evs.manage.service.EvsItemParamService;
import com.ait.evs.manage.service.EvsItemService;
import com.ait.evs.manage.service.EvsGradeService;
import com.ait.evs.manage.service.EvsParamObjectService;
import com.ait.evs.manage.service.EvsParamService;
import com.ait.evs.manage.service.EvsPersonalTargetService;
import com.ait.evs.manage.service.EvsResumeService;
import com.ait.evs.manage.service.EvsResultService;
import com.ait.evs.manage.service.EvsScheduleService;
import com.ait.evs.manage.service.EvsScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/evs/manage")
public class EvsManageController {

    @Autowired
    private EvsResumeService evsResumeService;

    @Autowired
    private EvsScheduleService evsScheduleService;

    @Autowired
    private EvsGradeService evsGradeService;

    @Autowired
    private EvsParamService evsParamService;

    @Autowired
    private EvsParamObjectService evsParamObjectService;

    @Autowired
    private EvsAffirmRuleService evsAffirmRuleService;

    @Autowired
    private EvsFormulaService evsFormulaService;

    @Autowired
    private EvsScoreService evsScoreService;

    @Autowired
    private EvsAffirmorSetupService evsAffirmorSetupService;

    @Autowired
    private EvsResultService evsResultService;

    @Autowired
    private EvsItemService evsItemService;

    @Autowired
    private EvsItemParamService evsItemParamService;

    @Autowired
    private EvsPersonalTargetService evsPersonalTargetService;

    @GetMapping("/viewResumeList")
    public String viewResumeList() {
        return "evs/manage/viewResumeList";
    }

    @GetMapping("/api/resume/list")
    @ResponseBody
    public ResponseEntity<List<EvsResumeDto>> getResumeList(
            @RequestParam(required = false) String yearSearch,
            @RequestParam(required = false) String cycleSearch,
            @RequestParam(required = false) String evsType) {
        EvsResumeDto params = new EvsResumeDto();
        params.setYearSearch(yearSearch);
        params.setCycleSearch(cycleSearch);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsResumeService.getList(params));
    }

    @GetMapping("/api/resume/{seq}")
    @ResponseBody
    public ResponseEntity<EvsResumeDto> getResumeOne(@PathVariable String seq) {
        return ResponseEntity.ok(evsResumeService.getOne(seq));
    }

    @GetMapping("/api/resume/evsResumeList")
    @ResponseBody
    public ResponseEntity<List<EvsResumeDto>> getEvsResumeList(
            @RequestParam(required = false) String evsType) {
        EvsResumeDto params = new EvsResumeDto();
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsResumeService.getEvsResumeList(params));
    }

    @PostMapping("/api/resume/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveResume(@RequestBody EvsResumeDto dto) {
        evsResumeService.save(dto);
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping("/api/resume/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteResume(@RequestBody Map<String, String> body) {
        evsResumeService.delete(body.get("seq"));
        return ResponseEntity.ok(Map.of("success", true));
    }

    // ── Quy trình đánh giá (EVS_SCHEDULE) ────────────────────────────────────

    @GetMapping("/viewEvsSchedulePanel")
    public String viewEvsSchedulePanel() {
        return "evs/manage/viewEvsSchedulePanel";
    }

    @GetMapping("/api/schedule/list")
    @ResponseBody
    public ResponseEntity<List<EvsScheduleDto>> getScheduleList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String scheduleType,
            @RequestParam(required = false) String evsType) {
        EvsScheduleDto params = new EvsScheduleDto();
        params.setResumeSeq(resumeSeq);
        params.setScheduleType(scheduleType);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsScheduleService.getList(params));
    }

    @PostMapping("/api/schedule/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveScheduleBatch(@RequestBody List<EvsScheduleDto> list) {
        evsScheduleService.saveBatch(list);
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping("/api/schedule/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteScheduleBatch(@RequestBody EvsScheduleDto body) {
        evsScheduleService.deleteBatch(body.getSeqs());
        return ResponseEntity.ok(Map.of("success", true));
    }

    // ── Tiêu chuẩn đánh giá (EVS_PARAM panel) ────────────────────────────────

    @GetMapping("/viewEvsParamPanel")
    public String viewEvsParamPanel() {
        return "evs/manage/viewEvsParamPanel";
    }

    // -- Cấp đánh giá (EVS_GRADE) --

    @GetMapping("/api/evsGrade/list")
    @ResponseBody
    public ResponseEntity<List<EvsGradeDto>> getEvsGradeList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String evsType) {
        EvsGradeDto params = new EvsGradeDto();
        params.setResumeSeq(resumeSeq);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsGradeService.getList(params));
    }

    @PostMapping("/api/evsGrade/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsGradeBatch(@RequestBody List<EvsGradeDto> list) {
        evsGradeService.saveBatch(list);
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping("/api/evsGrade/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteEvsGradeBatch(@RequestBody EvsGradeDto body) {
        evsGradeService.deleteBatch(body.getSeqs());
        return ResponseEntity.ok(Map.of("success", true));
    }

    // -- Hạng mục / Bảng / Nhóm / Chức vụ đánh giá (EVS_PARAM) --

    @GetMapping("/api/evsParam/list")
    @ResponseBody
    public ResponseEntity<List<EvsParamDto>> getEvsParamList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String paramType,
            @RequestParam(required = false) String evsType) {
        EvsParamDto params = new EvsParamDto();
        params.setResumeSeq(resumeSeq);
        params.setParamType(paramType);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsParamService.getList(params));
    }

    @GetMapping("/api/evsParam/groupOptions")
    @ResponseBody
    public ResponseEntity<List<EvsParamDto>> getEvsParamGroupOptions(
            @RequestParam(required = false) String resumeSeq) {
        return ResponseEntity.ok(evsParamService.getGroupOptions(resumeSeq));
    }

    @PostMapping("/api/evsParam/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsParamBatch(@RequestBody List<EvsParamDto> list) {
        evsParamService.saveBatch(list);
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping("/api/evsParam/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteEvsParamBatch(@RequestBody EvsParamDto body) {
        evsParamService.deleteBatch(body.getSeqs());
        return ResponseEntity.ok(Map.of("success", true));
    }

    // -- Đối tượng đánh giá (EVS_PARAM_OBJECT) --

    @GetMapping("/api/evsParamObject/list")
    @ResponseBody
    public ResponseEntity<List<EvsParamObjectDto>> getEvsParamObjectList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String evsType) {
        EvsParamObjectDto params = new EvsParamObjectDto();
        params.setResumeSeq(resumeSeq);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsParamObjectService.getList(params));
    }

    @PostMapping("/api/evsParamObject/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsParamObjectBatch(@RequestBody List<EvsParamObjectDto> list) {
        evsParamObjectService.saveBatch(list);
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping("/api/evsParamObject/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteEvsParamObjectBatch(@RequestBody EvsParamObjectDto body) {
        evsParamObjectService.deleteBatch(body.getSeqs());
        return ResponseEntity.ok(Map.of("success", true));
    }

    // -- Người đánh giá (EVS_AFFIRM_RULE) --

    @GetMapping("/api/evsAffirmRule/list")
    @ResponseBody
    public ResponseEntity<List<EvsAffirmRuleDto>> getEvsAffirmRuleList(
            @RequestParam(required = false) String resumeSeq) {
        EvsAffirmRuleDto params = new EvsAffirmRuleDto();
        params.setResumeSeq(resumeSeq);
        return ResponseEntity.ok(evsAffirmRuleService.getList(params));
    }

    @PostMapping("/api/evsAffirmRule/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsAffirmRuleBatch(@RequestBody List<EvsAffirmRuleDto> list) {
        evsAffirmRuleService.saveBatch(list);
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping("/api/evsAffirmRule/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteEvsAffirmRuleBatch(@RequestBody EvsAffirmRuleDto body) {
        evsAffirmRuleService.deleteBatch(body.getSeqs());
        return ResponseEntity.ok(Map.of("success", true));
    }

    // ── Công thức đánh giá (EVS_FORMULA) ─────────────────────────────────────

    @GetMapping("/viewEvsFormulaList")
    public String viewEvsFormulaList() {
        return "evs/manage/viewEvsFormulaList";
    }

    @GetMapping("/api/evsFormula/formulaOptions")
    @ResponseBody
    public ResponseEntity<List<EvsFormulaDto>> getEvsFormulaOptions() {
        return ResponseEntity.ok(evsFormulaService.getFormulaOptions());
    }

    @GetMapping("/api/evsFormula/list")
    @ResponseBody
    public ResponseEntity<List<EvsFormulaDto>> getEvsFormulaList(
            @RequestParam(required = false) String codeNo,
            @RequestParam(required = false) String codeName,
            @RequestParam(required = false) String activity) {
        EvsFormulaDto params = new EvsFormulaDto();
        params.setCodeNoSearch(codeNo);
        params.setCodeNameSearch(codeName);
        params.setActivitySearch(activity);
        return ResponseEntity.ok(evsFormulaService.getList(params));
    }

    @GetMapping("/api/evsFormula/{seq}")
    @ResponseBody
    public ResponseEntity<EvsFormulaDto> getEvsFormulaOne(@PathVariable String seq) {
        return ResponseEntity.ok(evsFormulaService.getOne(seq));
    }

    @PostMapping("/api/evsFormula/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsFormula(@RequestBody EvsFormulaDto dto) {
        evsFormulaService.save(dto);
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping("/api/evsFormula/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteEvsFormula(@RequestBody Map<String, String> body) {
        evsFormulaService.delete(body.get("seq"));
        return ResponseEntity.ok(Map.of("success", true));
    }

    // ── Tỷ lệ phân bổ (EVS_SCORE) ────────────────────────────────────────────

    @GetMapping("/viewEvsDistributionRatePanel")
    public String viewEvsDistributionRatePanel() {
        return "evs/manage/viewEvsDistributionRatePanel";
    }

    @GetMapping("/api/evsScore/list")
    @ResponseBody
    public ResponseEntity<List<EvsScoreDto>> getEvsScoreList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String scoreType,
            @RequestParam(required = false) String activity,
            @RequestParam(required = false) String evsType) {
        EvsScoreDto params = new EvsScoreDto();
        params.setResumeSeq(resumeSeq);
        params.setScoreTypeSearch(scoreType);
        params.setActivitySearch(activity);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsScoreService.getList(params));
    }

    @GetMapping("/api/evsScore/{seq}")
    @ResponseBody
    public ResponseEntity<EvsScoreDto> getEvsScoreOne(@PathVariable String seq) {
        return ResponseEntity.ok(evsScoreService.getOne(seq));
    }

    @PostMapping("/api/evsScore/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsScore(@RequestBody EvsScoreDto dto) {
        evsScoreService.save(dto);
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping("/api/evsScore/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteEvsScore(@RequestBody Map<String, String> body) {
        evsScoreService.delete(body.get("seq"));
        return ResponseEntity.ok(Map.of("success", true));
    }

    // ── Đối tượng đánh giá và người đánh giá (EVS_OBJECT + EVS_AFFIRM) ────────

    @GetMapping("/viewEvsAffirmorSetup")
    public String viewEvsAffirmorSetup() {
        return "evs/manage/viewEvsAffirmorSetup";
    }

    @GetMapping("/api/affirmorSetup/list")
    @ResponseBody
    public ResponseEntity<List<EvsAffirmorSetupDto>> getAffirmorSetupList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String affirmorKeyword,
            @RequestParam(required = false) String evsType) {
        EvsAffirmorSetupDto params = new EvsAffirmorSetupDto();
        params.setResumeSeq(resumeSeq);
        params.setDeptNos(deptNos);
        params.setAffirmorKeyword(affirmorKeyword);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsAffirmorSetupService.getList(params));
    }

    @GetMapping("/api/affirmorSetup/searchEmployee")
    @ResponseBody
    public ResponseEntity<List<EvsAffirmorSetupDto>> searchEmployee(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String resumeSeq) {
        EvsAffirmorSetupDto params = new EvsAffirmorSetupDto();
        params.setAffirmorKeyword(keyword);
        params.setResumeSeq(resumeSeq);
        return ResponseEntity.ok(evsAffirmorSetupService.searchEmployee(params));
    }

    @PostMapping("/api/affirmorSetup/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveAffirmorSetup(
            @RequestBody List<EvsAffirmorSetupDto> list) {
        try {
            evsAffirmorSetupService.saveBatch(list);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/api/affirmorSetup/addObject")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> addEvsObject(@RequestBody EvsAffirmorSetupDto dto) {
        try {
            evsAffirmorSetupService.addObject(dto);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/api/affirmorSetup/createTarget")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> createEvsTarget(@RequestBody EvsAffirmorSetupDto dto) {
        try {
            evsAffirmorSetupService.createTarget(dto);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/api/affirmorSetup/evsStart")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> evsStart(@RequestBody EvsAffirmorSetupDto dto) {
        try {
            evsAffirmorSetupService.evsStart(dto);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    // ── Kết quả đánh giá (EVS_OBJECT - viewEvsResult) ────────────────────────

    @GetMapping("/viewEvsResult")
    public String viewEvsResult() {
        return "evs/manage/viewEvsResult";
    }

    @GetMapping("/api/evsResult/list")
    @ResponseBody
    public ResponseEntity<List<EvsResultDto>> getEvsResultList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String personId,
            @RequestParam(required = false) String statusFilter,
            @RequestParam(required = false) String evsType) {
        EvsResultDto params = new EvsResultDto();
        params.setResumeSeq(resumeSeq);
        params.setDeptNos(deptNos);
        params.setPersonId(personId);
        params.setStatusFilter(statusFilter);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsResultService.getList(params));
    }

    @GetMapping("/api/evsResult/summary")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getEvsResultSummary(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String evsType) {
        EvsResultDto params = new EvsResultDto();
        params.setResumeSeq(resumeSeq);
        params.setEvsType(evsType);
        return ResponseEntity.ok(evsResultService.getSummary(params));
    }

    @PostMapping("/api/evsResult/evaluateEnd")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> evaluateEnd(@RequestBody EvsResultDto dto) {
        try {
            evsResultService.evaluateEnd(dto);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/api/evsResult/changeStatus")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> changeEvsResultStatus(@RequestBody EvsResultDto dto) {
        try {
            evsResultService.changeStatus(dto);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/api/evsResult/copyGrade")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> copyEvsGrade(@RequestBody EvsResultDto dto) {
        try {
            evsResultService.copyGrade(dto);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @GetMapping("/api/evsResult/stdRate")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getEvsStdRate(
            @RequestParam("resumeSeq") String resumeSeq) {
        EvsResultDto params = new EvsResultDto();
        params.setResumeSeq(resumeSeq);
        return ResponseEntity.ok(evsResultService.getStandardRate(params));
    }

    @PostMapping("/api/evsResult/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsResult(@RequestBody List<EvsResultDto> list) {
        try {
            evsResultService.saveFinalResult(list);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    // ── Chỉ tiêu đánh giá (EVS_ITEM) ─────────────────────────────────────────

    @GetMapping("/viewEvsItemPanel")
    public String viewEvsItemPanel() {
        return "evs/manage/viewEvsItemPanel";
    }

    @GetMapping("/api/evsItem/list")
    @ResponseBody
    public ResponseEntity<List<EvsItemDto>> getEvsItemList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String groupNo) {
        EvsItemDto params = new EvsItemDto();
        params.setResumeSeq(resumeSeq);
        params.setGroupNo(groupNo);
        return ResponseEntity.ok(evsItemService.getList(params));
    }

    @PostMapping("/api/evsItem/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsItem(@RequestBody List<EvsItemDto> list) {
        try {
            evsItemService.saveBatch(list);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/api/evsItem/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteEvsItem(@RequestBody Map<String, List<String>> body) {
        try {
            evsItemService.deleteBatch(body.get("seqs"));
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    // ── Hạng mục chỉ tiêu chỉ định (EVS_ITEM_PARAM) ──────────────────────────

    @GetMapping("/api/evsItemParam/list")
    @ResponseBody
    public ResponseEntity<List<EvsItemParamDto>> getEvsItemParamList(
            @RequestParam(required = false) String resumeSeq,
            @RequestParam(required = false) String groupNo,
            @RequestParam(required = false) String evsGroup,
            @RequestParam(required = false) String evsOccGroup) {
        EvsItemParamDto params = new EvsItemParamDto();
        params.setResumeSeq(resumeSeq);
        params.setGroupNo(groupNo);
        params.setEvsGroup(evsGroup);
        params.setEvsOccGroup(evsOccGroup);
        return ResponseEntity.ok(evsItemParamService.getList(params));
    }

    @PostMapping("/api/evsItemParam/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> saveEvsItemParam(@RequestBody List<EvsItemParamDto> list) {
        try {
            evsItemParamService.saveBatch(list);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/api/evsItemParam/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteEvsItemParam(@RequestBody Map<String, List<String>> body) {
        try {
            evsItemParamService.deleteBatch(body.get("seqs"));
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    // ── Đăng ký mục tiêu cá nhân (EVS_ITEM_SST) ──────────────────────────────

    @GetMapping("/viewRegPersonalTarget")
    public String viewRegPersonalTarget() {
        return "evs/manage/viewRegPersonalTarget";
    }

    @GetMapping("/api/personalTarget/objectInfo")
    @ResponseBody
    public ResponseEntity<EvsPersonalTargetDto> getPersonalTargetObjectInfo(
            @RequestParam(required = false) String resumeSeq) {
        EvsPersonalTargetDto params = new EvsPersonalTargetDto();
        params.setResumeSeq(resumeSeq);
        return ResponseEntity.ok(evsPersonalTargetService.getObjectInfo(params));
    }

    @GetMapping("/api/personalTarget/itemList")
    @ResponseBody
    public ResponseEntity<List<EvsItemSstDto>> getPersonalTargetItemList(
            @RequestParam(required = false) String evsObjectSeq) {
        EvsItemSstDto params = new EvsItemSstDto();
        params.setEvsObjectSeq(evsObjectSeq);
        return ResponseEntity.ok(evsPersonalTargetService.getItemList(params));
    }

    @PostMapping("/api/personalTarget/saveItem")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> savePersonalTargetItem(@RequestBody EvsItemSstDto dto) {
        try {
            evsPersonalTargetService.saveItem(dto);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/api/personalTarget/deleteItem")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deletePersonalTargetItem(@RequestBody EvsItemSstDto dto) {
        try {
            evsPersonalTargetService.deleteItem(dto);
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("success", false, "message", e.getMessage()));
        }
    }
}
