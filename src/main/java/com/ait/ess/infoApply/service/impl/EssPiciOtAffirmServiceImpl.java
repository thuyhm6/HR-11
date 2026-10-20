package com.ait.ess.infoApply.service.impl;

import com.ait.ar.attendanceMintenance.mapper.ArOvertimeManagentMapper;
import com.ait.ar.attendanceMintenance.service.ArOvertimeManagentService;
import com.ait.ess.empinfo.dto.EssPersonalInfoDto;
import com.ait.ess.empinfo.mapper.EssPersonalInfoMapper;
import com.ait.ess.infoApply.dto.EssPiciOtAffirmDto;
import com.ait.ess.infoApply.mapper.EssPiciOtAffirmMapper;
import com.ait.ess.infoApply.service.EssPiciOtAffirmService;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.mapper.SyAffirmEmailMapper;
import com.ait.util.I18nUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Port từ Hanwha_HTSV: InfoApplyCtroller.viewPiciOtAffirmLBatchList / saveOtApplyAffirmForBatch /
 * delOtApplyAffirmForBatch / addOtApplyAffirm / getValidateInfo (InfoApplySerImpl + InfoApplyDaoImpl).
 * Phần ghi tuyến duyệt (SY_AFFIRM_EMAIL) và hủy đơn dùng lại SyAffirmEmailMapper/ArOvertimeManagentService
 * đã có của dự án mới để đồng nhất với luồng đồng bộ Cleverse.
 */
@Service
public class EssPiciOtAffirmServiceImpl implements EssPiciOtAffirmService {

    private static final Logger log = LoggerFactory.getLogger(EssPiciOtAffirmServiceImpl.class);
    private static final String OT_TYPE_NO = "31";
    private static final String AFFIRM_SENT = "14014306";

    @Autowired
    private EssPiciOtAffirmMapper mapper;

    @Autowired
    private ArOvertimeManagentMapper otMapper;

    @Autowired
    private ArOvertimeManagentService otService;

    @Autowired
    private SyAffirmEmailMapper affirmEmailMapper;

    @Autowired
    private EssPersonalInfoMapper essPersonalInfoMapper;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<EssPiciOtAffirmDto> getList(EssPiciOtAffirmDto search) {
        try {
            if (search != null && "Y".equalsIgnoreCase(search.getDeleteYN())) {
                int deleted = mapper.deleteEmptyApplyByCreator();
                log.info("piciOtAffirm getList: deleted {} empty rows of current user", deleted);
            }
            List<EssPiciOtAffirmDto> list = mapper.selectList(search == null ? new EssPiciOtAffirmDto() : search);
            return list == null ? Collections.emptyList() : list;
        } catch (Exception e) {
            log.error("getList piciOtAffirm error: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EssPiciOtAffirmDto addEmptyRow() {
        try {
            String applyNo = String.valueOf(mapper.getNextApplySeq());
            mapper.insertEmptyApply(applyNo);
            return mapper.selectByApplyNo(applyNo);
        } catch (Exception e) {
            log.error("addEmptyRow piciOtAffirm error: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public EssPiciOtAffirmDto getValidateInfo(EssPiciOtAffirmDto dto) {
        if (dto == null || isBlank(dto.getPersonId()) || isBlank(dto.getApplyOtDate())) {
            return new EssPiciOtAffirmDto();
        }
        dto.setDeductYn(defaultString(dto.getDeductYn(), "0"));
        try {
            EssPiciOtAffirmDto result = mapper.selectValidateInfo(dto);
            return result == null ? new EssPiciOtAffirmDto() : result;
        } catch (Exception e) {
            log.error("getValidateInfo error personId={}, date={}: {}", dto.getPersonId(), dto.getApplyOtDate(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public EssPiciOtAffirmDto getEmpOtInfo(String personId, String applyOtDate) {
        if (isBlank(personId) || isBlank(applyOtDate)) {
            return new EssPiciOtAffirmDto();
        }
        try {
            EssPiciOtAffirmDto result = mapper.selectEmpOtInfo(personId, applyOtDate);
            return result == null ? new EssPiciOtAffirmDto() : result;
        } catch (Exception e) {
            log.error("getEmpOtInfo error personId={}, date={}: {}", personId, applyOtDate, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public EssPiciOtAffirmDto getDefaultTime(String applyOtDate) {
        if (isBlank(applyOtDate)) {
            return new EssPiciOtAffirmDto();
        }
        try {
            EssPiciOtAffirmDto result = mapper.selectDefaultTime(applyOtDate);
            return result == null ? new EssPiciOtAffirmDto() : result;
        } catch (Exception e) {
            log.error("getDefaultTime error date={}: {}", applyOtDate, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public String getAffirmorPreview(String personId, String otTypeCode, String applyLength) {
        if (isBlank(personId)) {
            return "";
        }
        try {
            List<SyAffirmEmailDto> list = findAffirmors(personId, otTypeCode, applyLength);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < list.size(); i++) {
                SyAffirmEmailDto a = list.get(i);
                sb.append(i + 1).append(" [").append(safe(a.getEmpId())).append(']').append(safe(a.getLocalName())).append("<br>");
            }
            return sb.toString();
        } catch (Exception e) {
            log.error("getAffirmorPreview error personId={}: {}", personId, e.getMessage(), e);
            return "";
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveBatch(List<EssPiciOtAffirmDto> rows, String adminPersonId, boolean hrMode) {
        if (rows == null || rows.isEmpty()) {
            throw new IllegalArgumentException(I18nUtil.getMessage("ar.alert.message.viewardetail.choosetoadd"));
        }
        try {
            for (EssPiciOtAffirmDto row : rows) {
                saveOne(row, adminPersonId, hrMode);
            }
        } catch (IllegalArgumentException e) {
            log.warn("saveBatch piciOtAffirm validation: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("saveBatch piciOtAffirm error: {}", e.getMessage(), e);
            throw e;
        }
    }

    /** 1 dòng - đúng thứ tự xử lý InfoApplyDaoImpl.saveOtApplyAffirmForBatch bản gốc. */
    private void saveOne(EssPiciOtAffirmDto row, String adminPersonId, boolean hrMode) {
        String applyNo = safe(row.getApplyNo());
        String personId = safe(row.getPersonId());
        if (applyNo.isEmpty()) {
            throw new IllegalArgumentException(I18nUtil.getMessage("ar.alert.message.viewardetail.choosetoadd"));
        }
        if (personId.isEmpty()) {
            throw new IllegalArgumentException(I18nUtil.getMessage("ar.viewarcardrecord.title.empidnotnull"));
        }
        row.setDeductYn(defaultString(row.getDeductYn(), "0"));
        row.setOffsetYn(defaultString(row.getOffsetYn(), "0"));

        EssPersonalInfoDto empInfo = essPersonalInfoMapper.findMyInfo(personId);
        String localName = empInfo != null ? safe(empInfo.getLocalName()) : safe(row.getLocalName());

        if (parseHours(row.getOtApplyHour()) <= 0) {
            throw new IllegalArgumentException(localName + ": " + I18nUtil.getMessage("ar.viewArOvertimeManagentFast.JIABANSHIJIANBUNENGLING.b"));
        }

        // Xóa kết quả xác nhận/duyệt cũ của đơn
        Map<String, Object> deleteParams = new HashMap<>();
        deleteParams.put("applyNo", applyNo);
        deleteParams.put("message", "");
        otMapper.callDeleteOtConfirm(deleteParams);
        otMapper.deleteApplyResultByApplyNo(applyNo);

        List<SyAffirmEmailDto> affirmors = findAffirmors(personId, row.getOtTypeCode(), row.getOtApplyHour());
        if (affirmors.isEmpty()) {
            throw new IllegalArgumentException(localName + ": "
                    + I18nUtil.getMessage("ar.alert.message.viewApplyAttenanceManagentInfoList.noAffirmNoApply"));
        }

        // Bản gốc kiểm tra AR_GET_OT_CLASH ở client (ajax bất đồng bộ nên không chặn được việc lưu) và
        // chỉ chặn -3 ở server -> chuyển toàn bộ về server để chặn đúng.
        String clashMsg = hrMode ? clashMessageHr(mapper.checkOtClash(row)) : clashMessage(mapper.checkOtClash(row), true);
        if (clashMsg != null) {
            throw new IllegalArgumentException(localName + ": " + clashMsg);
        }

        row.setMisDocId(mapper.selectNextMisDocId());
        mapper.updateOtApply(row);

        String lastName = "OverTime Application(" + localName + ")[Date: " + safe(row.getApplyOtDate()) + "]";
        String applyPersonInfo = empInfo != null
                ? localName + "/" + safe(empInfo.getPostGradeName()) + "/" + safe(empInfo.getDeptName())
                : localName;

        affirmEmailMapper.delete(applyNo);

        // Mức 0: người lập đơn (người đăng nhập) - đúng AFFIRMOR_ID = adminID bản gốc
        SyAffirmEmailDto drafter = new SyAffirmEmailDto();
        drafter.setAffirmType("4");
        drafter.setAffirmLevel("0");
        drafter.setAffirmPersonId(isBlank(adminPersonId) ? personId : adminPersonId);
        fillAffirmCommon(drafter, applyNo, row.getOtTypeCode(), lastName, applyPersonInfo);
        affirmEmailMapper.insert(drafter);

        for (SyAffirmEmailDto affirmor : affirmors) {
            affirmor.setAffirmType("1");
            affirmor.setAffirmPersonId(affirmor.getAffirmorId());
            fillAffirmCommon(affirmor, applyNo, row.getOtTypeCode(), lastName, applyPersonInfo);
            affirmEmailMapper.insert(affirmor);
        }
    }

    private void fillAffirmCommon(SyAffirmEmailDto dto, String applyNo, String otTypeCode, String lastName, String applyPersonInfo) {
        dto.setApplyNo(applyNo);
        dto.setApplyType(otTypeCode);
        dto.setApplyTypeCode(OT_TYPE_NO);
        dto.setApplyAffirmFlag(AFFIRM_SENT);
        dto.setApplyFlag("0");
        dto.setLastName(lastName);
        dto.setApplyPersonInfo(applyPersonInfo);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int cancelBatch(List<EssPiciOtAffirmDto> rows, boolean hrMode) {
        if (rows == null || rows.isEmpty()) {
            throw new IllegalArgumentException(I18nUtil.getMessage("alert.message.ess.affirmApply.chooseApplyRecordFirstForBatch"));
        }
        try {
            List<String> applyNos = new ArrayList<>();
            for (EssPiciOtAffirmDto row : rows) {
                if (isBlank(row.getApplyNo())) {
                    continue;
                }
                // Không cho hủy đơn nằm trong kỳ đã chốt công / đã khóa - đúng delOtApplyCallback() bản gốc
                if (!hrMode && !isBlank(row.getPersonId()) && !isBlank(row.getApplyOtDate())
                        && !isBlank(row.getOtFromTime()) && !isBlank(row.getOtToTime())) {
                    row.setOffsetYn(defaultString(row.getOffsetYn(), "0"));
                    String clashMsg = clashMessage(mapper.checkOtClash(row), false);
                    if (clashMsg != null) {
                        throw new IllegalArgumentException(safe(row.getLocalName()) + ": " + clashMsg);
                    }
                }
                applyNos.add(row.getApplyNo().trim());
            }
            if (applyNos.isEmpty()) {
                throw new IllegalArgumentException(I18nUtil.getMessage("alert.message.ess.affirmApply.chooseApplyRecordFirstForBatch"));
            }
            otService.cancelBatchOvertimeApply(applyNos);
            return applyNos.size();
        } catch (IllegalArgumentException e) {
            log.warn("cancelBatch piciOtAffirm validation: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("cancelBatch piciOtAffirm error: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Thông báo theo kết quả AR_GET_OT_CLASH (message key giữ nguyên bản gốc).
     * forSave = false (khi hủy): chỉ chặn -1 (đã chốt công) / -2 (đã khóa) như bản gốc.
     */
    private String clashMessage(int flag, boolean forSave) {
        if (flag == -1) {
            return I18nUtil.getMessage("ar.viewApplyAttenanceManagentInfoList.BAOHANKAOQINGUANBIDESHIJIAN.b");
        }
        if (flag == -2) {
            return I18nUtil.getMessage("ar.viewArOvertimeManaget_fast.Include_apply_closed.b");
        }
        if (!forSave) {
            return null;
        }
        if (flag > 0) {
            return I18nUtil.getMessage("ar.viewArOvertimeManagentFast.JIABANSHIJIANCHONGTUQINGJIANCHA.b");
        }
        if (flag == -3) {
            return I18nUtil.getMessage("ar.viewAdjustLeaveTSTOBatchList.OvertimeLimit.b");
        }
        if (flag == -4) {
            return I18nUtil.getMessage("ar.viewAdjustLeaveTSTOBatchList.WomenOvertime.b");
        }
        return null;
    }

    /**
     * Trang HR (viewArOvertimeManagent_fast): bản gốc chỉ báo trùng giờ (>0) và đã khóa (-2) ở client
     * (-1 bị comment), server luôn chặn -3 (vượt giới hạn) - không kiểm tra -4.
     */
    private String clashMessageHr(int flag) {
        if (flag > 0) {
            return I18nUtil.getMessage("ar.viewArOvertimeManagentFast.JIABANSHIJIANCHONGTUQINGJIANCHA.b");
        }
        if (flag == -2) {
            return I18nUtil.getMessage("ar.viewArOvertimeManaget_fast.Include_apply_closed.b");
        }
        if (flag == -3) {
            return I18nUtil.getMessage("ar.viewAdjustLeaveTSTOBatchList.OvertimeLimit.b");
        }
        return null;
    }

    /** Tuyến duyệt theo PKG_AFFIRM_EMAIL.GET_AFFIRMOR_LIST_IMPROVE (thay getAffirmorListByString bản gốc). */
    private List<SyAffirmEmailDto> findAffirmors(String personId, String otTypeCode, String applyLength) {
        Map<String, Object> params = new HashMap<>();
        params.put("applyTypeNo", OT_TYPE_NO);
        params.put("personId", personId);
        params.put("applyTypeCode", safe(otTypeCode));
        params.put("applyLength", safe(applyLength));
        affirmEmailMapper.getAffirmorList(params);
        @SuppressWarnings("unchecked")
        List<SyAffirmEmailDto> list = (List<SyAffirmEmailDto>) params.get("resultList");
        if (list == null) {
            return Collections.emptyList();
        }
        List<SyAffirmEmailDto> result = new ArrayList<>();
        for (SyAffirmEmailDto a : list) {
            if (a != null) {
                result.add(a);
            }
        }
        return result;
    }

    private double parseHours(String value) {
        try {
            return Double.parseDouble(safe(value));
        } catch (NumberFormatException e) {
            return 0;
        }
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }

    private String defaultString(String value, String defaultValue) {
        return isBlank(value) ? defaultValue : value.trim();
    }

    private String safe(Object value) {
        return value == null ? "" : value.toString().trim();
    }
}
