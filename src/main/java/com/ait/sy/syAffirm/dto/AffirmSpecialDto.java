package com.ait.sy.syAffirm.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/** 1 dòng trên màn hình Phê duyệt đặc biệt: 1 đối tượng được duyệt (nhân viên hoặc phòng ban) kèm toàn bộ người duyệt. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AffirmSpecialDto {
    /** PERSON_ID (nhân viên) hoặc DEPTNO (phòng ban). */
    private String affirmObject;
    /** EMPID (nhân viên) hoặc DEPTID (phòng ban). */
    private String objectCode;
    private String objectName;
    /** E = nhân viên, D = phòng ban. */
    private String objectType;
    private List<AffirmSpecialDetailDto> details = new ArrayList<>();
}
