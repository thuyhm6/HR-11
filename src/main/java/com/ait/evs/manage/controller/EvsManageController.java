package com.ait.evs.manage.controller;

import com.ait.evs.manage.dto.EvsAffirmRuleDto;
import com.ait.evs.manage.dto.EvsFormulaDto;
import com.ait.evs.manage.dto.EvsGradeDto;
import com.ait.evs.manage.dto.EvsParamDto;
import com.ait.evs.manage.dto.EvsParamObjectDto;
import com.ait.evs.manage.dto.EvsResumeDto;
import com.ait.evs.manage.dto.EvsScheduleDto;
import com.ait.evs.manage.dto.EvsScoreDto;
import com.ait.evs.manage.service.EvsAffirmRuleService;
import com.ait.evs.manage.service.EvsFormulaService;
import com.ait.evs.manage.service.EvsGradeService;
import com.ait.evs.manage.service.EvsParamObjectService;
import com.ait.evs.manage.service.EvsParamService;
import com.ait.evs.manage.service.EvsResumeService;
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
}
