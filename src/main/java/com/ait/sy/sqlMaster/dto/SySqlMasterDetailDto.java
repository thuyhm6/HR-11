package com.ait.sy.sqlMaster.dto;

import com.ait.sy.sqlMaster.model.SySqlMaster;
import com.ait.sy.sqlMaster.model.SySqlParam;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

/**
 * DTO chi tiết truy vấn SQL, gồm thông tin SY_SQL_MASTER và danh sách tham số
 * SY_SQL_PARAM - dùng cho modal Thêm/Sửa trên màn hình danh sách.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class SySqlMasterDetailDto extends SySqlMaster {
    private List<SySqlParam> params;
}
