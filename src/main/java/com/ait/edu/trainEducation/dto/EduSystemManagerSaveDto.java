package com.ait.edu.trainEducation.dto;

import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Payload thêm mới / cập nhật hệ thống đào tạo.
 * sysmanaNo rỗng = thêm mới (bắt buộc trainDiffCode + trainTypeCode, kiểm tra ở service);
 * sysmanaNo có giá trị = cập nhật (bản gốc chỉ cho sửa ghi chú).
 */
@Data
@NoArgsConstructor
public class EduSystemManagerSaveDto {
    private String sysmanaNo;
    private String trainDiffCode;
    private String trainTypeCode;
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String remark;

    /** Mã loại hình tự sinh ở service khi thêm mới (SVP000001...). */
    private String trainTypeNo;
}
