package com.ait.mobile.training.dto;

import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Người phê duyệt đăng ký đào tạo (danh sách mặc định của công ty). */
@Data
@NoArgsConstructor
public class MobileTrainingMakerDto {

    private String personId;
    private String empId;
    private String name;
    private String deptName;
    private String positionName;

    public static MobileTrainingMakerDto from(EduEmployeeDto src) {
        MobileTrainingMakerDto dto = new MobileTrainingMakerDto();
        dto.setPersonId(src.getPersonId());
        dto.setEmpId(src.getEmpId());
        dto.setName(src.getLocalName());
        dto.setDeptName(src.getDeptName());
        dto.setPositionName(src.getPositionName() != null ? src.getPositionName() : src.getPostGradeName());
        return dto;
    }
}
