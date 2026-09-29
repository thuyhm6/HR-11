package com.ait.edu.trainEducation.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Xóa (ACTIVITY = 0) 1 hệ thống đào tạo. */
@Data
@NoArgsConstructor
public class EduSystemManagerDeleteDto {
    @NotBlank(message = "edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a")
    private String sysmanaNo;
}
