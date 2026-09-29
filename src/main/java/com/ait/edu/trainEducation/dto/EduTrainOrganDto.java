package com.ait.edu.trainEducation.dto;

import com.ait.ess.empinfo.dto.EssFileDto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/** Đơn vị đào tạo - bảng EDU_TRAIN_ORGAN. Dùng cho cả danh sách và payload lưu (organNo rỗng = thêm mới). */
@Data
@NoArgsConstructor
public class EduTrainOrganDto {
    private String organNo;
    @NotBlank(message = "edu.trainOrgan.msg.required")
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String organName;
    @Size(max = 100, message = "autoExcel.msg.tooLong")
    private String linkman;
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String address;
    @Size(max = 50, message = "autoExcel.msg.tooLong")
    private String officePhone;
    @Size(max = 50, message = "autoExcel.msg.tooLong")
    private String cellphone;
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String urlNet;
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String mainField;
    @Size(max = 500, message = "autoExcel.msg.tooLong")
    private String workTogether;
    @Size(max = 1000, message = "autoExcel.msg.tooLong")
    private String organAbstract;

    /** File "Hợp đồng hợp tác" (ESS_FILE, APPLY_TYPE = eduTrainOrgan) - chỉ dùng khi trả về. */
    private List<EssFileDto> files;
}
