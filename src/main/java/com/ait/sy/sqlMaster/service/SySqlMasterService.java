package com.ait.sy.sqlMaster.service;

import com.ait.sy.sqlMaster.dto.SySqlMasterDetailDto;
import com.ait.sy.sqlMaster.model.SySqlMaster;

import java.util.List;
import java.util.Map;

/**
 * Service quản lý truy vấn SQL tự động xuất Excel (SY_SQL_MASTER / SY_SQL_PARAM).
 */
public interface SySqlMasterService {

    List<SySqlMaster> findAll(String keyword, String pgmNm);

    SySqlMasterDetailDto getDetail(String sqlSeq);

    /** Lưu (thêm mới/cập nhật) truy vấn SQL và toàn bộ danh sách tham số. Trả về SQL_SEQ. */
    String save(SySqlMasterDetailDto dto);

    void delete(String sqlSeq);

    /** Thực thi câu lệnh SQL đã lưu với các giá trị tham số người dùng nhập, trả về file Excel (.xlsx). */
    byte[] exportExcel(String sqlSeq, Map<String, String> paramValues);
}
