package com.ait.sy.syAffirm.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** 1 dòng SY_AFFIRM_RELATION_SPECIAL: người duyệt (affirmor) cấp affirmLevel của 1 loại phê duyệt cho 1 đối tượng. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AffirmSpecialDetailDto {
    /** PERSON_ID của nhân viên hoặc DEPTNO của phòng ban được duyệt. */
    private String affirmObject;
    private String affirmTypeId;
    private Integer affirmLevel;
    /** PERSON_ID của người duyệt. */
    private String affirmorId;
    private String empId;
    private String localName;
    private String deptName;
}
