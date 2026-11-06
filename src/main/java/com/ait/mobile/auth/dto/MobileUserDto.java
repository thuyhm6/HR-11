package com.ait.mobile.auth.dto;

import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Thông tin user hiển thị trên app (không chứa dữ liệu nhạy cảm). */
@Data
@NoArgsConstructor
public class MobileUserDto {

    private String username;
    private String personId;
    private String empId;
    private String employeeName;
    private String deptNo;
    private String deptName;
    private String cpnyId;
    private String userType;
    private String photoUrl;

    public static MobileUserDto from(HrUserInfo user) {
        MobileUserDto dto = new MobileUserDto();
        dto.setUsername(user.getUsername());
        dto.setPersonId(user.getPersonId());
        dto.setEmpId(user.getHrEmployee() != null ? user.getHrEmployee().getEmpId() : null);
        dto.setEmployeeName(user.getEmployeeName());
        dto.setDeptNo(user.getDeptNo());
        dto.setDeptName(user.getDepartmentName());
        dto.setCpnyId(user.getCpnyId());
        dto.setUserType(user.getSyUser() != null ? user.getSyUser().getUserType() : null);
        dto.setPhotoUrl(user.getPhotoUrl());
        return dto;
    }
}
