package com.ait.hrm.empinfo.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * HrAddressMatters Model - Tra cứu địa chỉ (bảng HR_ADDRESS_MATTERS)
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrAddressMatters {

    /**
     * Mã số địa chỉ (ADDRESS_NO)
     */
    private Long addressNo;

    /**
     * ID cá nhân (PERSON_ID)
     */
    private String personId;

    /**
     * Loại địa chỉ (ADDRESS_TYPE)
     */
    private String addressType;

    /**
     * Ngày bắt đầu hiệu lực (EFFECTIVE_START_DATE)
     */
    private Date effectiveStartDate;

    /**
     * Nội dung địa chỉ (ADDRESS_CONTENT)
     */
    private String addressContent;

    /**
     * Trạng thái hoạt động (ACTIVITY)
     */
    private Integer activity;

    /**
     * Quốc gia (NATIONALITY)
     */
    private String nationality;

    // Audit fields
    private LocalDateTime createDate;
    private String createdBy;
    private String createdIp;
    private LocalDateTime updateDate;
    private String updatedBy;
    private String updatedIp;

    // --- Joined Fields from HR_EMPLOYEE ---
    private String empId;
    private String localName;
    private String deptName;
}
