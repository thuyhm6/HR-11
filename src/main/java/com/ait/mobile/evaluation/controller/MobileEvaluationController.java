package com.ait.mobile.evaluation.controller;

import com.ait.evs.manage.dto.EvsResultEmpDto;
import com.ait.evs.manage.service.EvsResultEmpService;
import com.ait.mobile.common.MobileResponse;
import java.util.List;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Kết quả đánh giá các năm của người đăng nhập - dùng lại EvsResultEmpService (màn "Kết quả đánh giá" web,
 * mapper lọc theo #{adminID}).
 */
@RestController
@RequestMapping("/mobile/api/evaluation")
public class MobileEvaluationController {

    private static final Logger log = LoggerFactory.getLogger(MobileEvaluationController.class);

    @Autowired
    private EvsResultEmpService evsResultEmpService;

    /** Mỗi dòng: { evsYear, evsPerformance (xếp loại thành tích), evsAbility (xếp loại năng lực) } */
    @GetMapping("/results")
    public MobileResponse<List<EvsResultEmpDto>> results() {
        try {
            return MobileResponse.ok(evsResultEmpService.getList(new EvsResultEmpDto()).stream()
                    .filter(Objects::nonNull).toList());
        } catch (Exception e) {
            log.error("Lỗi lấy kết quả đánh giá mobile: {}", e.getMessage(), e);
            throw e;
        }
    }
}
