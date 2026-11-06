package com.ait.mobile.training.controller;

import com.ait.mobile.common.MobileResponse;
import com.ait.mobile.training.dto.MobileCourseApplyRequest;
import com.ait.mobile.training.dto.MobileCourseDto;
import com.ait.mobile.training.dto.MobileTrainingCalendarDto;
import com.ait.mobile.training.dto.MobileTrainingMakerDto;
import com.ait.mobile.training.service.MobileTrainingService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/** Đào tạo của người đăng nhập: khóa được đăng ký, đơn đăng ký của tôi, lịch đào tạo. */
@RestController
@Validated
@RequestMapping("/mobile/api/training")
public class MobileTrainingController {

    private static final String DMY = "\\d{2}/\\d{2}/\\d{4}";

    @Autowired
    private MobileTrainingService trainingService;

    @GetMapping("/courses")
    public MobileResponse<List<MobileCourseDto>> courses() {
        return MobileResponse.ok(trainingService.getAvailableCourses());
    }

    @GetMapping("/makers")
    public MobileResponse<List<MobileTrainingMakerDto>> makers() {
        return MobileResponse.ok(trainingService.getMakers());
    }

    @PostMapping("/apply")
    public MobileResponse<Map<String, Integer>> apply(@Valid @RequestBody MobileCourseApplyRequest req) {
        return MobileResponse.ok(Map.of("count", trainingService.apply(req)));
    }

    /** fromDate/toDate: DD/MM/YYYY (trống = tháng hiện tại, giống web). */
    @GetMapping("/my")
    public MobileResponse<List<MobileCourseDto>> my(
            @RequestParam(required = false) @Pattern(regexp = DMY) String fromDate,
            @RequestParam(required = false) @Pattern(regexp = DMY) String toDate) {
        return MobileResponse.ok(trainingService.getMyApplies(fromDate, toDate));
    }

    /** Body: { "applyNo": "..." } */
    @PostMapping("/cancel")
    public MobileResponse<Void> cancel(@RequestBody Map<String, @NotBlank String> body) {
        trainingService.cancel(body.get("applyNo"));
        return MobileResponse.ok(null);
    }

    @GetMapping("/calendar")
    public MobileResponse<List<MobileTrainingCalendarDto>> calendar(
            @RequestParam(required = false) @Min(2000) @Max(2100) Integer year,
            @RequestParam(required = false) @Min(1) @Max(12) Integer month) {
        return MobileResponse.ok(trainingService.getCalendar(year, month));
    }
}
