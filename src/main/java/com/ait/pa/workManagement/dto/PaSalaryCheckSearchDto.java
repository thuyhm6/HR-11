package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Điều kiện tra cứu dùng chung cho nhóm màn hình kiểm tra/đối chiếu lương (PaSalaryCheckController) - port từ các tham số
 * seach_* của viewPaParamCtroller / PaMonthChainCtroller (dự án Hanwha_HTSV). Mỗi API chỉ dùng 1 phần các trường,
 * service kiểm tra trường bắt buộc.
 */
@Data
@NoArgsConstructor
public class PaSalaryCheckSearchDto {

    /** Phân loại lương (SY_CODE parent 14013797). */
    private String salaryDistinNo;

    /** Ngày phát tháng này - DD-MM-YYYY (đúng định dạng PAY_DATE của API kế hoạch trả lương). */
    private String payDate;

    /** Ngày phát tháng trước - DD-MM-YYYY. */
    private String payDatePro;

    private String payScheduleNo;
    private String personId;

    /** Mã nhân viên / họ tên. */
    private String empSearch;

    /** Phòng ban - lọc cả phòng ban con (CONNECT BY). */
    private String deptNo;

    /** Loại hạng mục: 1 = chi trả, 2 = khấu trừ, 3 = bảo hiểm. */
    private Integer itemType;

    /** Mã hạng mục PA_ITEM_INPUT.ITEM_ID (= tên cột của PA_SUMMARY_HTSV) - service kiểm tra whitelist trước khi dùng. */
    private String itemId;

    /** PAGE_TYPE của PA_MONTH_DIF_ITEM_TEMP: 1 = đối chiếu chênh lệch hạng mục, 2 = xác nhận kết quả, 3 = so sánh tháng. */
    private String pageType;

    /** MONTH_DIF: 0 = đối tượng mới, 1 = thêm hạng mục, 2 = hạng mục ngoại lệ, 3 = không đổi, 4 = đổi số tiền. */
    private String monthDif;

    /** PERSON_NUM | PERSON_NUM_PRO | COUNT_UP | COUNT_LOW | PERSON_UP | PERSON_LOW (bản gốc SELECT_TYPE). */
    private String selectType;

    /** Ngày bắt đầu / kết thúc chấm công YYYY/MM/DD - chi tiết tăng ca của 1 nhân viên. */
    private String arStartDate;
    private String arEndDate;
}
