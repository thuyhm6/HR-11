package com.ait.mobile.training.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Đăng ký khóa đào tạo: các khóa + người phê duyệt (chọn trong danh sách mặc định). */
@Data
@NoArgsConstructor
public class MobileCourseApplyRequest {

    @NotEmpty
    @Size(max = 20)
    @Valid
    private List<Course> courses;

    @NotEmpty
    @Size(max = 5)
    private List<String> makerPersonIds;

    @Data
    @NoArgsConstructor
    public static class Course {
        @NotBlank
        private String basicNo;
        @Size(max = 1000)
        private String applyTask;
    }
}
