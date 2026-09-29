package com.ait.disc.autoExcel.service.impl;

import com.ait.disc.autoExcel.dto.AutoExcelMasterDto;
import com.ait.disc.autoExcel.dto.AutoExcelParamDto;
import com.ait.disc.autoExcel.dto.AutoExcelParamUpdateDto;
import com.ait.disc.autoExcel.mapper.AutoExcelMapper;
import com.ait.disc.autoExcel.service.AutoExcelService;
import com.ait.disc.autoExcel.util.AutoExcelSqlParser;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Map;

/**
 * Chuyển từ RetrieveSqlMasterSerImpl + SqlParamSerImpl (dự án Hanwha_HTSV).
 * Khác bản gốc:
 * - Không sinh file JSP cho từng báo cáo (ParamToJsp) - form nhập tham số được Angular dựng động từ SYS_PARAM_BY_SQL.
 * - Chỉ nhận câu SELECT/WITH; tìm theo tên bind tham số thay vì chèn chuỗi.
 * - Giữ nguyên CPNY_ID khi sửa và chỉ thao tác trên báo cáo công ty đăng nhập được xem.
 */
@Service
public class AutoExcelServiceImpl implements AutoExcelService {
    private static final Logger log = LoggerFactory.getLogger(AutoExcelServiceImpl.class);

    /** Mô tả/loại/thứ tự ghi sẵn cho tham số cố định - giống typecode.properties (X.ENDESC/CNDESC/SQLTP/SOCTCD). */
    private static final Map<String, String[]> FIXED_PARAM_DEFS = Map.of(
            "CPNY_ID", new String[] {"CPNY_ID", "法人", "text", "0"},
            "PERSON_ID", new String[] {"PERSON_ID", "人员ID", "text", "0"},
            "CPNY", new String[] {"CPNY", "法人", "text", "0"});

    @Autowired
    private AutoExcelMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<AutoExcelMasterDto> getList(String pgmNm, String sqlSeq, String sqlNm) throws BusinessException {
        log.info("getList - pgmNm={}, sqlSeq={}, sqlNm={}", pgmNm, sqlSeq, sqlNm);
        try {
            List<AutoExcelMasterDto> list = mapper.selectList(trim(pgmNm), trim(sqlSeq), trim(sqlNm));
            log.info("getList - found {} rows", list.size());
            return list;
        } catch (Exception e) {
            log.error("getList failed", e);
            throw new BusinessException("AUTO_EXCEL_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public AutoExcelMasterDto getDetail(String sqlSeq, boolean includeSql) throws BusinessException {
        log.info("getDetail - sqlSeq={}, includeSql={}", sqlSeq, includeSql);
        AutoExcelMasterDto master;
        try {
            master = mapper.selectDetail(sqlSeq);
            if (master != null) {
                List<AutoExcelParamDto> params = mapper.selectParamList(sqlSeq, true);
                params.forEach(p -> p.setSystem(AutoExcelSqlParser.isSystemParam(p.getParam())));
                master.setParams(params);
                if (!includeSql) {
                    master.setSqlStmt(null);
                }
            }
        } catch (Exception e) {
            log.error("getDetail failed - sqlSeq={}", sqlSeq, e);
            throw new BusinessException("AUTO_EXCEL_LOAD", "common.loadFail", e);
        }
        if (master == null) {
            throw new BusinessException("AUTO_EXCEL_NOT_FOUND", "autoExcel.msg.notFound");
        }
        return master;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(AutoExcelMasterDto dto, String cpnyId) throws BusinessException {
        boolean isNew = !StringUtils.hasText(dto.getSqlSeq());
        log.info("save - isNew={}, sqlSeq={}, sqlNm={}", isNew, dto.getSqlSeq(), dto.getSqlNm());
        if (!AutoExcelSqlParser.isSelectStatement(dto.getSqlStmt())) {
            throw new BusinessException("AUTO_EXCEL_INVALID_SQL", "autoExcel.msg.selectOnly");
        }
        int affected;
        try {
            if (isNew) {
                dto.setSqlSeq(mapper.selectNextSqlSeq());
                dto.setCpnyId(cpnyId);
                affected = mapper.insertMaster(dto);
            } else {
                affected = mapper.updateMaster(dto);
            }
            if (affected > 0) {
                syncParams(dto.getSqlSeq(), dto.getSqlStmt());
            }
        } catch (Exception e) {
            log.error("save failed - sqlSeq={}", dto.getSqlSeq(), e);
            throw new BusinessException("AUTO_EXCEL_SAVE", "autoExcel.msg.saveFail", e);
        }
        if (affected == 0) {
            throw new BusinessException("AUTO_EXCEL_NOT_FOUND", "autoExcel.msg.notFound");
        }
        log.info("save - done, sqlSeq={}", dto.getSqlSeq());
        return dto.getSqlSeq();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(String sqlSeq) throws BusinessException {
        log.info("delete - sqlSeq={}", sqlSeq);
        int deleted;
        try {
            deleted = mapper.deleteMaster(sqlSeq);
            if (deleted > 0) {
                mapper.deleteParams(sqlSeq);
            }
        } catch (Exception e) {
            log.error("delete failed - sqlSeq={}", sqlSeq, e);
            throw new BusinessException("AUTO_EXCEL_DELETE", "autoExcel.msg.deleteFail", e);
        }
        if (deleted == 0) {
            throw new BusinessException("AUTO_EXCEL_NOT_FOUND", "autoExcel.msg.notFound");
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateParams(AutoExcelParamUpdateDto dto) throws BusinessException {
        log.info("updateParams - sqlSeq={}, count={}", dto.getSqlSeq(), dto.getParams().size());
        boolean visible;
        try {
            // Chỉ sửa tham số của báo cáo công ty đăng nhập được xem
            visible = mapper.selectDetail(dto.getSqlSeq()) != null;
            for (AutoExcelParamDto p : visible ? dto.getParams() : List.<AutoExcelParamDto>of()) {
                // Tham số cố định giữ nguyên mô tả/loại như bản gốc (textarea readonly với CPNY_ID)
                if (AutoExcelSqlParser.FIXED_PARAMS.contains(p.getParam())) {
                    continue;
                }
                p.setSqlSeq(dto.getSqlSeq());
                mapper.updateParam(p);
            }
        } catch (Exception e) {
            log.error("updateParams failed - sqlSeq={}", dto.getSqlSeq(), e);
            throw new BusinessException("AUTO_EXCEL_SAVE", "autoExcel.msg.saveFail", e);
        }
        if (!visible) {
            throw new BusinessException("AUTO_EXCEL_NOT_FOUND", "autoExcel.msg.notFound");
        }
    }

    /**
     * Tắt toàn bộ tham số cũ rồi bật lại/thêm mới đúng các #PARAM# đang có trong câu SQL: tham số đã có giữ nguyên
     * mô tả, tham số mới để trống mô tả - tham số cố định (CPNY_ID, PERSON_ID, CPNY) ghi sẵn mô tả như bản gốc.
     */
    private void syncParams(String sqlSeq, String sqlStmt) {
        mapper.disableParams(sqlSeq);
        for (String name : AutoExcelSqlParser.extractParams(sqlStmt)) {
            AutoExcelParamDto p = new AutoExcelParamDto();
            p.setSqlSeq(sqlSeq);
            p.setParam(name);
            String[] fixed = FIXED_PARAM_DEFS.get(name);
            if (fixed != null) {
                p.setSystem(true);
                p.setEnSqlParamDesc(fixed[0]);
                p.setCnSqlParamDesc(fixed[1]);
                p.setSqlParamTp(fixed[2]);
                p.setSortCd(fixed[3]);
            }
            if (mapper.enableParam(p) == 0) {
                mapper.insertParam(p);
            }
        }
    }

    private String trim(String s) {
        return StringUtils.hasText(s) ? s.trim() : null;
    }
}
