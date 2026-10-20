package com.ait.ess.infoApplyAttendance.service.impl;

import com.ait.ar.attendanceMintenance.mapper.EssLeaveApplyMapper;
import com.ait.ar.attendanceMintenance.service.EssLeaveApplyService;
import com.ait.ess.empinfo.dto.EssPersonalInfoDto;
import com.ait.ess.empinfo.mapper.EssPersonalInfoMapper;
import com.ait.ess.infoApplyAttendance.dto.EssPiciLeaveAffirmDto;
import com.ait.ess.infoApplyAttendance.mapper.EssPiciLeaveAffirmMapper;
import com.ait.ess.infoApplyAttendance.service.EssPiciLeaveAffirmService;
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
 * Port từ Hanwha_HTSV: ApplyAttendanceCtroller.viewApplyAttenanceBatchInfoList / saveAttendanceApplyInfoForBatch /
 * addAttendanceApplyInfoForBatch / delAttendanceApplyInfoForBatch / getAttendanceInformation
 * (InfoApplyLeaveSerImpl + InfoApplyLeaveDaoImpl). Ghi tuyến duyệt dùng SyAffirmEmailMapper, hủy đơn dùng
 * EssLeaveApplyService.cancelLeaveApplyByApplyNo đã có của dự án mới.
 */
@Service
public class EssPiciLeaveAffirmServiceImpl implements EssPiciLeaveAffirmService {

    private static final Logger log = LoggerFactory.getLogger(EssPiciLeaveAffirmServiceImpl.class);
    private static final String LEAVE_TYPE_NO = "21";
    private static final String AFFIRM_SENT = "14014306";

    @Autowired
    private EssPiciLeaveAffirmMapper mapper;

    @Autowired
    private EssLeaveApplyMapper leaveMapper;

    @Autowired
    private EssLeaveApplyService leaveService;

    @Autowired
    private SyAffirmEmailMapper affirmEmailMapper;

    @Autowired
    private EssPersonalInfoMapper essPersonalInfoMapper;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<EssPiciLeaveAffirmDto> getList(EssPiciLeaveAffirmDto search, boolean firstLoad) {
        try {
            if (firstLoad) {
                mapper.deleteEmptyApply();
            }
            List<EssPiciLeaveAffirmDto> list = mapper.selectList(search == null ? new EssPiciLeaveAffirmDto() : search);
            return list == null ? Collections.emptyList() : list;
        } catch (Exception e) {
            log.error("getList piciLeave error: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EssPiciLeaveAffirmDto addEmptyRow() {
        try {
            String applyNo = String.valueOf(mapper.getNextApplySeq());
            mapper.insertEmptyApply(applyNo);
            return mapper.selectByApplyNo(applyNo);
        } catch (Exception e) {
            log.error("addEmptyRow piciLeave error: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public EssPiciLeaveAffirmDto getLeaveLength(EssPiciLeaveAffirmDto dto) {
        if (dto == null || isBlank(dto.getPersonId()) || isBlank(dto.getFromDate()) || isBlank(dto.getToDate())) {
            return new EssPiciLeaveAffirmDto();
        }
        dto.setFromTime(defaultString(dto.getFromTime(), "00:00"));
        dto.setToTime(defaultString(dto.getToTime(), "00:00"));
        try {
            EssPiciLeaveAffirmDto result = mapper.selectLeaveLength(dto);
            return result == null ? new EssPiciLeaveAffirmDto() : result;
        } catch (Exception e) {
            log.error("getLeaveLength error personId={}: {}", dto.getPersonId(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public EssPiciLeaveAffirmDto getEmpLeaveInfo(String personId, String applyDate) {
        if (isBlank(personId) || isBlank(applyDate)) {
            return new EssPiciLeaveAffirmDto();
        }
        try {
            EssPiciLeaveAffirmDto result = mapper.selectEmpLeaveInfo(personId, applyDate);
            return result == null ? new EssPiciLeaveAffirmDto() : result;
        } catch (Exception e) {
            log.error("getEmpLeaveInfo error personId={}, date={}: {}", personId, applyDate, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public String getAffirmorPreview(String personId, String leaveTypeCode, String applyLength) {
        if (isBlank(personId)) {
            return "";
        }
        try {
            List<SyAffirmEmailDto> list = findAffirmors(personId, leaveTypeCode, applyLength);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < list.size(); i++) {
                SyAffirmEmailDto a = list.get(i);
                sb.append(i + 1).append(" [").append(safe(a.getEmpId())).append(']').append(safe(a.getLocalName())).append("<br>");
            }
            return sb.toString();
        } catch (Exception e) {
            log.error("getAffirmorPreview leave error personId={}: {}", personId, e.getMessage(), e);
            return "";
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveBatch(List<EssPiciLeaveAffirmDto> rows, String adminPersonId, boolean hrMode) {
        if (rows == null || rows.isEmpty()) {
            throw new IllegalArgumentException(I18nUtil.getMessage("ar.alert.message.viewardetail.choosetoadd"));
        }
        try {
            for (EssPiciLeaveAffirmDto row : rows) {
                saveOne(row, adminPersonId, hrMode);
            }
        } catch (IllegalArgumentException e) {
            log.warn("saveBatch piciLeave validation: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("saveBatch piciLeave error: {}", e.getMessage(), e);
            throw e;
        }
    }

    /** 1 dòng - đúng thứ tự xử lý InfoApplyLeaveDaoImpl.saveAttendanceApplyInfoForBatch bản gốc. */
    private void saveOne(EssPiciLeaveAffirmDto row, String adminPersonId, boolean hrMode) {
        String applyNo = safe(row.getApplyNo());
        String personId = safe(row.getPersonId());
        if (applyNo.isEmpty()) {
            throw new IllegalArgumentException(I18nUtil.getMessage("ar.alert.message.viewardetail.choosetoadd"));
        }
        if (personId.isEmpty()) {
            throw new IllegalArgumentException(I18nUtil.getMessage("ar.viewarcardrecord.title.empidnotnull"));
        }
        EssPersonalInfoDto empInfo = essPersonalInfoMapper.findMyInfo(personId);
        String localName = empInfo != null ? safe(empInfo.getLocalName()) : safe(row.getLocalName());

        if (isBlank(row.getLeaveTypeCode())) {
            throw new IllegalArgumentException(localName + ": " + I18nUtil.getMessage("ar.viewApplyAttenanceManagentInfoList.KAOQINBUNENGWEIKONG.b"));
        }
        if (isBlank(row.getFromDate())) {
            throw new IllegalArgumentException(localName + ": " + I18nUtil.getMessage("ar.viewApplyAttenanceManagentInfoList.QINGQUEDINGKAISHIRIQI.b"));
        }
        if (isBlank(row.getToDate())) {
            throw new IllegalArgumentException(localName + ": " + I18nUtil.getMessage("ar.viewApplyAttenanceManagentInfoList.QINGQUEDINGJIESHURIQI.b"));
        }
        row.setFromTime(defaultString(row.getFromTime(), "00:00"));
        row.setToTime(defaultString(row.getToTime(), "00:00"));

        // Xóa kết quả xác nhận/duyệt cũ của đơn
        leaveMapper.deleteArApplyResult(applyNo);
        Map<String, Object> deleteParams = new HashMap<>();
        deleteParams.put("applyNo", applyNo);
        deleteParams.put("message", "");
        leaveMapper.callDeleteLeaveConfirm(deleteParams);

        List<SyAffirmEmailDto> affirmors = findAffirmors(personId, row.getLeaveTypeCode(), row.getApplyLength());
        if (affirmors.isEmpty()) {
            throw new IllegalArgumentException(localName + ": "
                    + I18nUtil.getMessage("ar.alert.message.viewApplyAttenanceManagentInfoList.noAffirmNoApply"));
        }

        // Bản gốc gọi AR_GET_LEAVE_CLASH bằng ajax bất đồng bộ ở client (không chặn được việc lưu) -> chuyển về server
        String clashMsg = clashMessage(mapper.checkLeaveClash(row), true, hrMode);
        if (clashMsg != null) {
            throw new IllegalArgumentException(localName + ": " + clashMsg);
        }

        row.setMisDocId(mapper.selectNextMisDocId());
        mapper.updateLeaveApply(row);

        String fromDate = safe(row.getFromDate());
        String toDate = safe(row.getToDate());
        String lastName = fromDate.equals(toDate) && safe(row.getFromTime()).equals(safe(row.getToTime()))
                ? "Apply(" + localName + ")[Date: " + fromDate + "]"
                : "Apply(" + localName + ")[Date: " + fromDate + " ~ " + toDate + "]";
        String applyPersonInfo = empInfo != null
                ? localName + "/" + safe(empInfo.getPostGradeName()) + "/" + safe(empInfo.getDeptName())
                : localName;

        affirmEmailMapper.delete(applyNo);

        // Mức 0: người lập đơn (người đăng nhập) - đúng AFFIRMOR_ID = adminID bản gốc
        SyAffirmEmailDto drafter = new SyAffirmEmailDto();
        drafter.setAffirmType("4");
        drafter.setAffirmLevel("0");
        drafter.setAffirmPersonId(isBlank(adminPersonId) ? personId : adminPersonId);
        fillAffirmCommon(drafter, applyNo, row.getLeaveTypeCode(), lastName, applyPersonInfo);
        affirmEmailMapper.insert(drafter);

        for (SyAffirmEmailDto affirmor : affirmors) {
            affirmor.setAffirmType("1");
            affirmor.setAffirmPersonId(affirmor.getAffirmorId());
            fillAffirmCommon(affirmor, applyNo, row.getLeaveTypeCode(), lastName, applyPersonInfo);
            affirmEmailMapper.insert(affirmor);
        }
    }

    private void fillAffirmCommon(SyAffirmEmailDto dto, String applyNo, String leaveTypeCode, String lastName, String applyPersonInfo) {
        dto.setApplyNo(applyNo);
        dto.setApplyType(leaveTypeCode);
        dto.setApplyTypeCode(LEAVE_TYPE_NO);
        dto.setApplyAffirmFlag(AFFIRM_SENT);
        dto.setApplyFlag("0");
        dto.setLastName(lastName);
        dto.setApplyPersonInfo(applyPersonInfo);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int cancelBatch(List<EssPiciLeaveAffirmDto> rows, boolean hrMode) {
        if (rows == null || rows.isEmpty()) {
            throw new IllegalArgumentException(I18nUtil.getMessage("alert.message.ess.affirmApply.chooseApplyRecordFirstForBatch"));
        }
        try {
            int count = 0;
            for (EssPiciLeaveAffirmDto row : rows) {
                String applyNo = safe(row.getApplyNo());
                if (applyNo.isEmpty()) {
                    continue;
                }
                // Trang quản lý: không cho hủy đơn nằm trong kỳ đã chốt công / đã khóa (delLeaveApplyCallbackBatch bản gốc)
                if (!hrMode && !isBlank(row.getPersonId()) && !isBlank(row.getFromDate()) && !isBlank(row.getToDate())) {
                    row.setFromTime(defaultString(row.getFromTime(), "00:00"));
                    row.setToTime(defaultString(row.getToTime(), "00:00"));
                    String clashMsg = clashMessage(mapper.checkLeaveClash(row), false, false);
                    if (clashMsg != null) {
                        throw new IllegalArgumentException(safe(row.getLocalName()) + ": " + clashMsg);
                    }
                }
                mapper.insertArShiftChange(applyNo);
                leaveService.cancelLeaveApplyByApplyNo(applyNo);
                count++;
            }
            if (count == 0) {
                throw new IllegalArgumentException(I18nUtil.getMessage("alert.message.ess.affirmApply.chooseApplyRecordFirstForBatch"));
            }
            return count;
        } catch (IllegalArgumentException e) {
            log.warn("cancelBatch piciLeave validation: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("cancelBatch piciLeave error: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Thông báo theo AR_GET_LEAVE_CLASH (message key giữ nguyên bản gốc).
     * Khi hủy (forSave = false) chỉ chặn -1 / -2. Trang HR khi lưu: chỉ báo >0 và -2 (-1, -3 bị comment ở bản gốc).
     */
    private String clashMessage(int flag, boolean forSave, boolean hrMode) {
        if (flag == -2) {
            return I18nUtil.getMessage("ar.viewArOvertimeManaget_fast.Include_apply_closed.b");
        }
        if (flag == -1 && !hrMode) {
            return I18nUtil.getMessage("ar.viewApplyAttenanceManagentInfoList.BAOHANKAOQINGUANBIDESHIJIAN.b");
        }
        if (!forSave) {
            return null;
        }
        if (flag > 0) {
            return I18nUtil.getMessage("ar.viewApplyAttenanceManagentInfoList.KAOQINCHONGTUJIANCHASHIJIAN.b");
        }
        if (flag == -3 && !hrMode) {
            return I18nUtil.getMessage("alert.message.ess.infoApply.noEnoughAnnualCannotApplyAnnualLeave");
        }
        return null;
    }

    /** Tuyến duyệt theo PKG_AFFIRM_EMAIL.GET_AFFIRMOR_LIST_IMPROVE (thay getAffirmorListByString bản gốc). */
    private List<SyAffirmEmailDto> findAffirmors(String personId, String leaveTypeCode, String applyLength) {
        Map<String, Object> params = new HashMap<>();
        params.put("applyTypeNo", LEAVE_TYPE_NO);
        params.put("personId", personId);
        params.put("applyTypeCode", safe(leaveTypeCode));
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
