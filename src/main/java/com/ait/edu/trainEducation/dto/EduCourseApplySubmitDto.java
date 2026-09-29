package com.ait.edu.trainEducation.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * Đăng ký khóa đào tạo (bản gốc addCourseApply): các khóa chọn + lý do đăng ký từng khóa, và danh sách người phê duyệt
 * theo thứ tự cấp (người cuối cùng là người phê duyệt cuối - MAKER_LEVEL = số cấp).
 */
@Data
@NoArgsConstructor
public class EduCourseApplySubmitDto {

    @NotEmpty(message = "edu.courseApply.msg.selectCourse")
    @Valid
    private List<Item> courses = new ArrayList<>();

    @NotEmpty(message = "edu.courseApply.msg.selectMaker")
    private List<String> makerPersonIds = new ArrayList<>();

    @Data
    @NoArgsConstructor
    public static class Item {
        @NotBlank(message = "edu.courseApply.msg.selectCourse")
        private String basicNo;
        @Size(max = 1000, message = "edu.courseApply.msg.taskTooLong")
        private String applyTask;
    }
}
