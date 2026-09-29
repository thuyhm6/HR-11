package com.ait.disc.autoExcel.service;

import com.ait.disc.autoExcel.dto.AutoExcelMasterDto;
import com.ait.disc.autoExcel.dto.AutoExcelParamUpdateDto;
import com.ait.exception.BusinessException;

import java.util.List;

/** Quản lý báo cáo SQL tự xuất Excel (SYS_SQL_MASTER / SYS_PARAM_BY_SQL). */
public interface AutoExcelService {

    List<AutoExcelMasterDto> getList(String pgmNm, String sqlSeq, String sqlNm) throws BusinessException;

    /**
     * Chi tiết báo cáo + tham số đang dùng.
     *
     * @param includeSql false = ẩn câu SQL (người chỉ có quyền chạy báo cáo)
     */
    AutoExcelMasterDto getDetail(String sqlSeq, boolean includeSql) throws BusinessException;

    /**
     * Thêm/Sửa báo cáo rồi đồng bộ lại danh sách tham số từ câu SQL (giống upMasterToParam bản gốc).
     *
     * @return SQL_SEQ của báo cáo
     */
    String save(AutoExcelMasterDto dto, String cpnyId) throws BusinessException;

    void delete(String sqlSeq) throws BusinessException;

    void updateParams(AutoExcelParamUpdateDto dto) throws BusinessException;
}
