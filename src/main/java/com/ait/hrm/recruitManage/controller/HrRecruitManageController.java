package com.ait.hrm.recruitManage.controller;

import com.ait.exception.BusinessException;
import com.ait.hrm.recruitManage.dto.HrEmployeeRecruitDto;
import com.ait.hrm.recruitManage.dto.HrEducationRecruitDto;
import com.ait.hrm.recruitManage.dto.HrWorkExperienceRecruitDto;
import com.ait.hrm.recruitManage.dto.HrFamilyRecruitDto;
import com.ait.hrm.recruitManage.dto.HrExpInsideBatchDto;
import com.ait.hrm.recruitManage.dto.HrRecruitBatchDto;
import com.ait.hrm.recruitManage.service.HrRecruitManageService;
import com.ait.sy.sys.dto.DataTablesResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Quản lý nhận việc - bản gốc RecruitManageCtroller (dự án HTSV):
 * /view-recruit-list (viewRecruitList), /view-recruit-batch-list (viewRecruitBatchList),
 * /view-experience-batch-list (viewExperienceBatchList).
 */
@Controller
@RequestMapping("/hrm/recruitManage")
public class HrRecruitManageController {

    @Autowired
    private HrRecruitManageService service;

    // ── Danh sách nhận việc (HR_EMPLOYEE_RECRUIT) ────────────────────────────

    @PostMapping("/api/employee/list")
    @ResponseBody
    public List<HrEmployeeRecruitDto> getEmployeeList(@RequestBody HrEmployeeRecruitDto search) {
        return service.getEmployeeList(search);
    }

    @GetMapping("/api/employee/detail")
    @ResponseBody
    public ResponseEntity<?> getEmployeeDetail(@RequestParam("personId") String personId) {
        HrEmployeeRecruitDto dto = service.getEmployeeById(personId);
        return dto == null ? ResponseEntity.status(404).body(Map.of("error", "Not found")) : ResponseEntity.ok(dto);
    }

    /** Tab Thông tin cơ bản (thêm mới khi chưa có personId). */
    @PostMapping("/api/employee/saveBasic")
    @ResponseBody
    public Map<String, Object> saveEmployeeBasic(@RequestBody HrEmployeeRecruitDto dto) {
        try {
            String personId = service.saveEmployeeBasic(dto);
            return Map.of("success", true, "personId", personId);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    /** Tab Thông tin bổ sung. */
    @PostMapping("/api/employee/savePersonal")
    @ResponseBody
    public Map<String, Object> saveEmployeePersonal(@RequestBody HrEmployeeRecruitDto dto) {
        try {
            service.saveEmployeePersonal(dto);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    @PostMapping("/api/employee/delete")
    @ResponseBody
    public Map<String, Object> deleteEmployee(@RequestParam("personId") String personId) {
        try {
            service.deleteEmployee(personId);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    /** Danh sách công ty cung ứng lao động (combobox ở tab Thông tin cơ bản). */
    @GetMapping("/api/personSupplier/list")
    @ResponseBody
    public List<String> getPersonSupplierNames() {
        return service.getPersonSupplierNames();
    }

    /** Tab Hình ảnh (bản gốc /hrm/recruitManage/upload). */
    @PostMapping("/api/employee/photo")
    @ResponseBody
    public Map<String, Object> uploadPhoto(@RequestParam("personId") String personId,
                                           @RequestParam("file") MultipartFile file) {
        try {
            String photoPath = service.uploadPhoto(personId, file);
            return Map.of("success", true, "photoPath", photoPath);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    // ── Education ─────────────────────────────────────────────────────────────

    @GetMapping("/api/education/list")
    @ResponseBody
    public List<HrEducationRecruitDto> getEducationList(@RequestParam("personId") String personId) {
        return service.getEducationList(personId);
    }

    @PostMapping("/api/education/save")
    @ResponseBody
    public Map<String, Object> saveEducation(@RequestBody HrEducationRecruitDto dto) {
        try {
            service.saveEducation(dto);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    @PostMapping("/api/education/delete")
    @ResponseBody
    public Map<String, Object> deleteEducation(@RequestParam("seq") Long seq) {
        try {
            service.deleteEducation(seq);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    // ── Work Experience ───────────────────────────────────────────────────────

    @GetMapping("/api/workexp/list")
    @ResponseBody
    public List<HrWorkExperienceRecruitDto> getWorkExpList(@RequestParam("personId") String personId) {
        return service.getWorkExpList(personId);
    }

    @PostMapping("/api/workexp/save")
    @ResponseBody
    public Map<String, Object> saveWorkExp(@RequestBody HrWorkExperienceRecruitDto dto) {
        try {
            service.saveWorkExp(dto);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    @PostMapping("/api/workexp/delete")
    @ResponseBody
    public Map<String, Object> deleteWorkExp(@RequestParam("seq") Long seq) {
        try {
            service.deleteWorkExp(seq);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    // ── Family ────────────────────────────────────────────────────────────────

    @GetMapping("/api/family/list")
    @ResponseBody
    public List<HrFamilyRecruitDto> getFamilyList(@RequestParam("personId") String personId) {
        return service.getFamilyList(personId);
    }

    @PostMapping("/api/family/save")
    @ResponseBody
    public Map<String, Object> saveFamily(@RequestBody HrFamilyRecruitDto dto) {
        try {
            service.saveFamily(dto);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    @PostMapping("/api/family/delete")
    @ResponseBody
    public Map<String, Object> deleteFamily(@RequestParam("seq") Long seq) {
        try {
            service.deleteFamily(seq);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    // ── Execute (bản gốc /hrm/recruitManage/executeRecruit) ─────────────────────

    @PostMapping("/api/execute")
    @ResponseBody
    public Map<String, Object> execute(
            @RequestParam("personIds") String personIds,
            @RequestParam("type") String type) {
        return service.executeRecruit(personIds, type);
    }

    // ── Quyết định hàng loạt (Experience Batch) ───────────────────────────────

    @GetMapping("/api/expBatch/registerList")
    @ResponseBody
    public List<HrExpInsideBatchDto> getRegisterList() {
        return service.getRegisterList();
    }

    @PostMapping("/api/expBatch/register")
    @ResponseBody
    public Map<String, Object> saveRegister(@RequestBody HrExpInsideBatchDto dto) {
        return service.saveRegister(dto);
    }

    @PostMapping("/api/expBatch/list")
    @ResponseBody
    public DataTablesResponse<HrExpInsideBatchDto> getBatchList(@RequestBody HrExpInsideBatchDto dto) {
        return service.getBatchList(dto);
    }

    @PostMapping("/api/expBatch/delete")
    @ResponseBody
    public Map<String, Object> deleteBatchItem(@RequestParam("seq") String seq) {
        return service.deleteBatchItem(seq);
    }

    @PostMapping("/api/expBatch/import")
    @ResponseBody
    public Map<String, Object> importBatchExcel(
            @RequestParam("file") MultipartFile file,
            @RequestParam("registerSeq") String registerSeq) {
        return service.importBatchExcel(file, registerSeq);
    }

    // ── Nhận việc hàng loạt (Recruit Batch) ──────────────────────────────────

    @GetMapping("/api/rblBatch/registerList")
    @ResponseBody
    public List<HrRecruitBatchDto> getRblRegisterList() {
        return service.getRblRegisterList();
    }

    @PostMapping("/api/rblBatch/register")
    @ResponseBody
    public Map<String, Object> saveRblRegister(@RequestBody HrRecruitBatchDto dto) {
        return service.saveRblRegister(dto);
    }

    @PostMapping("/api/rblBatch/list")
    @ResponseBody
    public DataTablesResponse<HrRecruitBatchDto> getRblBatchList(@RequestBody HrRecruitBatchDto dto) {
        return service.getRblBatchList(dto);
    }

    /** Nút "Thêm" bản gốc (viewRecruitBatchList?FLAG=ADD): thêm 1 dòng trống. */
    @PostMapping("/api/rblBatch/add")
    @ResponseBody
    public Map<String, Object> addRblBatchItem(@RequestParam("registerSeq") String registerSeq) {
        try {
            String seq = service.addEmptyRblBatchItem(registerSeq);
            return Map.of("success", true, "seq", seq);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    @PostMapping("/api/rblBatch/update")
    @ResponseBody
    public Map<String, Object> updateRblBatchItem(@RequestBody HrRecruitBatchDto dto) {
        try {
            service.updateRblBatchItem(dto);
            return Map.of("success", true);
        } catch (BusinessException e) {
            return fail(e);
        }
    }

    @PostMapping("/api/rblBatch/delete")
    @ResponseBody
    public Map<String, Object> deleteRblBatchItem(@RequestParam("seq") String seq) {
        return service.deleteRblBatchItem(seq);
    }

    @PostMapping("/api/rblBatch/import")
    @ResponseBody
    public Map<String, Object> importRblBatchExcel(
            @RequestParam("file") MultipartFile file,
            @RequestParam("registerSeq") String registerSeq) {
        return service.importRblBatchExcel(file, registerSeq);
    }

    private Map<String, Object> fail(BusinessException e) {
        Map<String, Object> result = new HashMap<>();
        result.put("success", false);
        result.put("messageKey", e.getErrorCode());
        result.put("message", e.getUserMessage());
        return result;
    }
}
