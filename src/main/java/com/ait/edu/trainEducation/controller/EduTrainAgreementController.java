package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduTrainAgreementDto;
import com.ait.edu.trainEducation.dto.EduTrainAgreementSearchDto;
import com.ait.edu.trainEducation.service.EduTrainAgreementService;
import com.ait.exception.BusinessException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Hợp đồng đào tạo - API JSON cho trang Angular /edu-train-agreement (thay cho các trang JSP /edu/traineducation/
 * trainAgreement, addTrainAgreement, trainAgreementInfo, queryPeixun và import /importTrainAgreement của dự án Hanwha_HTSV).
 * Xuất Excel / file mẫu tạo ở frontend (SheetJS) từ dữ liệu API list, giữ nguyên thứ tự cột của bản gốc.
 */
@RestController
@RequestMapping("/edu/traineducation/api/trainAgreement")
public class EduTrainAgreementController extends EduBaseController {

    @Autowired
    private EduTrainAgreementService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(EduTrainAgreementSearchDto search) {
        try {
            return ResponseEntity.ok(service.getList(search));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/{agreeNo}")
    public ResponseEntity<?> getOne(@PathVariable String agreeNo) {
        try {
            return ResponseEntity.ok(service.getOne(agreeNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody EduTrainAgreementDto dto) {
        boolean isNew = dto.getAgreeNo() == null || dto.getAgreeNo().isBlank();
        try {
            String agreeNo = service.save(dto);
            Map<String, Object> map = result(true, isNew ? "alert.message.add_success" : "alert.message.update_success");
            map.put("id", agreeNo);
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Map<String, Object>> delete(@RequestBody Map<String, String> body) {
        try {
            service.delete(body.get("agreeNo"));
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    /** Các dòng đọc từ file Excel mẫu - kiểm tra từng dòng ở service (không dùng @Valid để trả lỗi theo số dòng). */
    @PostMapping("/import")
    public ResponseEntity<Map<String, Object>> importRows(@RequestBody List<EduTrainAgreementDto> rows) {
        try {
            List<String> errors = service.importRows(rows);
            Map<String, Object> map = result(errors.isEmpty(), errors.isEmpty() ? "edu.common.msg.importSuccess"
                    : "edu.common.msg.importHasError");
            map.put("errors", errors);
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
