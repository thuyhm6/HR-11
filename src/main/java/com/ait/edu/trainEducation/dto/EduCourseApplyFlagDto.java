package com.ait.edu.trainEducation.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/** Cập nhật trạng thái phê duyệt / xác nhận của nhiều đơn đăng ký: flag 1 = chờ, 2 = đồng ý, 0 = từ chối. */
@Data
@NoArgsConstructor
public class EduCourseApplyFlagDto {

    @NotEmpty(message = "edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a")
    private List<String> applyNos = new ArrayList<>();

    @NotNull(message = "alert.message.update_fail")
    @Pattern(regexp = "^[012]$", message = "alert.message.update_fail")
    private String flag;
}
