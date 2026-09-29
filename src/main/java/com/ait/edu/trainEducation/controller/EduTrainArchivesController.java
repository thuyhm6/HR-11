package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduTrainArchiveSearchDto;
import com.ait.edu.trainEducation.service.EduTrainArchivesService;
import com.ait.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Hồ sơ đào tạo - API JSON cho trang Angular /edu-train-archives (thay cho JSP /edu/traineducation/trainArchives của dự
 * án Hanwha_HTSV). Xuất Excel (bản gốc autoExcel SQL 164) tạo ở frontend (SheetJS) từ dữ liệu API list.
 */
@RestController
@RequestMapping("/edu/traineducation/api/trainArchives")
public class EduTrainArchivesController extends EduBaseController {

    @Autowired
    private EduTrainArchivesService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(EduTrainArchiveSearchDto search) {
        try {
            return ResponseEntity.ok(service.getList(search));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }
}
