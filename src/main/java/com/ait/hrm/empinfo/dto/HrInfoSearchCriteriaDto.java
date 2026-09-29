package com.ait.hrm.empinfo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Điều kiện tìm kiếm dùng chung cho 4 trang tra cứu thông tin nhân sự (chuyển từ Hanwha_HTSV):
 * /hrm/empinfo/experienceSearch, /retireSearch, /bidSearch, /gradeSearch.
 * Mỗi trang chỉ dùng một phần các trường (xem HrInfoSearchMapper.xml).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrInfoSearchCriteriaDto {

    /** Mã nhân viên / họ tên (thay cho ô chọn nhân viên dạng popup ở bản gốc). */
    private String keyword;

    private String deptNo;
    private Boolean includeSubDept;

    /** Ngày vào công ty (HR_EMPLOYEE.DATE_STARTED) - dd/MM/yyyy. */
    private String joinDateFrom;
    private String joinDateTo;

    private List<String> postFamilies;
    private List<String> gradeNos;
    private List<String> mainBusinesses;
    private List<String> empTypeCodes;
    private List<String> empOffices;

    /** Khoảng thời gian riêng của từng trang (dd/MM/yyyy):
     *  experience = thời gian làm việc ở công ty cũ, retire = ngày nghỉ việc, bid = ngày cấp chứng chỉ. */
    private String periodFrom;
    private String periodTo;

    /** experienceSearch: tên công ty cũ. */
    private String companyName;

    /** bidSearch: tên chứng chỉ / cấp độ chứng chỉ. */
    private String qualName;
    private String qualLevel;
}
