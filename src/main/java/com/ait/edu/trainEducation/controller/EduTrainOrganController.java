package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduTrainOrganDto;
import com.ait.edu.trainEducation.service.EduTrainOrganService;
import com.ait.exception.BusinessException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Đơn vị đào tạo - API JSON cho trang Angular /edu-train-organ (thay cho các trang JSP /edu/traineducation/trainOrgan,
 * addTrainOrgan, trainOrganInfo, singleTrainOrganInfo của dự án Hanwha_HTSV). File đính kèm: EduCommonController.
 */
@RestController
@RequestMapping("/edu/traineducation/api/trainOrgan")
public class EduTrainOrganController extends EduBaseController {

    @Autowired
    private EduTrainOrganService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(@RequestParam(required = false) String organName,
                                     @RequestParam(required = false) String address) {
        try {
            return ResponseEntity.ok(service.getList(organName, address));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/{organNo}")
    public ResponseEntity<?> getOne(@PathVariable String organNo) {
        try {
            return ResponseEntity.ok(service.getOne(organNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody EduTrainOrganDto dto) {
        boolean isNew = dto.getOrganNo() == null || dto.getOrganNo().isBlank();
        try {
            String organNo = service.save(dto);
            Map<String, Object> map = result(true, isNew ? "alert.message.add_success" : "alert.message.update_success");
            map.put("id", organNo);
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Map<String, Object>> delete(@RequestBody Map<String, String> body) {
        try {
            service.delete(body.get("organNo"));
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
