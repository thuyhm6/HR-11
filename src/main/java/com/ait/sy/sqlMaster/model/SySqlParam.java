package com.ait.sy.sqlMaster.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

/**
 * Model cho bảng SY_SQL_PARAM (tham số truyền vào câu lệnh SQL của SY_SQL_MASTER).
 * PARAM là tên tham số dùng trực tiếp trong SQL_STMT dưới dạng named parameter
 * (ví dụ PARAM="tuNgay" thì SQL_STMT viết ":tuNgay").
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SySqlParam {

    /** SQL_SEQ - FK tới SY_SQL_MASTER */
    private String sqlSeq;

    /** SQL_PARAM_NO - số thứ tự tham số trong truy vấn, gán tự động theo vị trí khi lưu */
    private String sqlParamNo;

    /** PARAM - tên tham số (named parameter) dùng trong SQL_STMT, ví dụ :tuNgay */
    private String param;

    /** PARAM_DESC - mô tả tham số, dùng làm gợi ý hiển thị cho người nhập giá trị */
    private String paramDesc;

    /** SQL_PARAM_TP - kiểu dữ liệu tham số: VARCHAR2 / NUMBER / DATE */
    private String sqlParamTp;

    /** DEFAULT_VAL - giá trị mặc định */
    private String defaultVal;

    /** SORT_CD - thứ tự hiển thị, gán tự động theo vị trí khi lưu */
    private Integer sortCd;

    /** USE_YN - Có sử dụng tham số này khi xuất Excel hay không (Y/N) */
    private String useYn;

    /** CREATE_DATE - Ngày tạo */
    private LocalDateTime createDate;

    /** CREATED_BY - Người tạo */
    private String createdBy;

    /** UPDATE_DATE - Ngày cập nhật */
    private LocalDateTime updateDate;

    /** UPDATED_BY - Người cập nhật */
    private String updatedBy;
}
