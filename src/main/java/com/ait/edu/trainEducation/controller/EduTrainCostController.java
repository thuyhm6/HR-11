package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import com.ait.edu.trainEducation.dto.EduTrainCostDto;
import com.ait.edu.trainEducation.service.EduTrainCostService;
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

import java.util.Map;

/**
 * Chi phí đào tạo - API JSON cho trang Angular /edu-train-cost (thay cho các trang JSP /edu/traineducation/
 * trainCostManager, trainCostManagerInfo của dự án Hanwha_HTSV). File đính kèm: EduCommonController (eduCostManager).
 * Xuất Excel tạo ở frontend (SheetJS) từ dữ liệu API list.
 */
@RestController
@RequestMapping("/edu/traineducation/api/trainCost")
public class EduTrainCostController extends EduBaseController {

    @Autowired
    private EduTrainCostService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(EduTrainBasicSearchDto search) {
        try {
            return ResponseEntity.ok(service.getList(search));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/{costNo}")
    public ResponseEntity<?> getOne(@PathVariable String costNo) {
        try {
            return ResponseEntity.ok(service.getOne(costNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody EduTrainCostDto dto) {
        try {
            service.save(dto);
            Map<String, Object> map = result(true, "alert.message.update_success");
            map.put("id", dto.getCostNo());
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
