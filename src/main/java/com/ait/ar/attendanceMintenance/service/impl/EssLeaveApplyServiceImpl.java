package com.ait.ar.attendanceMintenance.service.impl;

import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyImportTempDto;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.mapper.SyAffirmEmailMapper;
import com.ait.ar.attendanceMintenance.mapper.EssLeaveApplyMapper;
import com.ait.ar.attendanceMintenance.service.EssLeaveApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
public class EssLeaveApplyServiceImpl implements EssLeaveApplyService {

    private static final String APPLY_TYPE_NO = "21";
    //private static final String APPLY_TYPE_NO = "31";
    private static final String APPLY_AFFIRM_FLAG = "14014306";

    @Autowired
    private EssLeaveApplyMapper essLeaveApplymapper;

    @Autowired
    private SyAffirmEmailMapper affirmorMapper;

    @Override
    public List<EssLeaveApplyDto> getList(EssLeaveApplyDto dto) {
        return essLeaveApplymapper.selectList(dto);
    }

    @Override
    public List<EssLeaveApplyImportTempDto> getImportTempList(String errorOnly) {
        return essLeaveApplymapper.selectImportTempList(toTrimmedString(errorOnly));
    }

    @Override
    @Transactional
    public String importTempToOfficial() {
        Map<String, Object> params = new HashMap<>();
        params.put("message", "");
        essLeaveApplymapper.callImportAttendanceTemp(params);

        String message = toTrimmedString(params.get("message"));
        if (isProcedureErrorMessage(message)) {
            throw new IllegalStateException(message);
        }
        return message;
    }

    @Override
    public Map<String, Object> getLeaveApplyDetail(String applyNo, String applyType) {
        String resolvedApplyNo = toTrimmedString(applyNo);
        if (resolvedApplyNo.isEmpty()) {
            Map<String, Object> empty = new HashMap<>();
            empty.put("leaveInfo", null);
            empty.put("employeeInfo", null);
            empty.put("approvalList", Collections.emptyList());
            return empty;
        }

        EssLeaveApplyDto leaveInfo = essLeaveApplymapper.selectLeaveApplyInfo(resolvedApplyNo);

        String resolvedApplyType = toTrimmedString(applyType);
        if (resolvedApplyType.isEmpty() && leaveInfo != null) {
            resolvedApplyType = toTrimmedString(leaveInfo.getLeaveTypeCode());
        }

        List<SyAffirmEmailDto> approvalList = essLeaveApplymapper.selectApprovalInfo(resolvedApplyNo,
                resolvedApplyType);

        Map<String, Object> result = new HashMap<>();
        result.put("leaveInfo", leaveInfo);
        result.put("employeeInfo", leaveInfo);
        result.put("approvalList", approvalList == null ? Collections.emptyList() : approvalList);
        return result;
    }

    @Override
    @Transactional
    public void saveLeaveApply(Map<String, Object> params) {

        Object applyNoObj = params.get("applyNo");
        boolean isNew = applyNoObj == null || applyNoObj.toString().trim().isEmpty()
                || applyNoObj.toString().equals("0");
        String personId = toTrimmedString(params.get("personId"));
        String applyNo = "";

        if (personId.isEmpty()) {
            throw new IllegalArgumentException("personId is required");
        }
        params.put("personId", personId);
        params.put("applyTypeNo", APPLY_TYPE_NO);
        // 1. Insert/Update thủ tục Leave Apply
        if (isNew) {
            applyNo = essLeaveApplymapper.getNextApplySeq().toString();
            params.put("applyNo", applyNo);
            essLeaveApplymapper.insertLeaveApply(params);
        } else {
            applyNo = applyNoObj.toString();
            essLeaveApplymapper.updateLeaveApply(params);
        }

        String lastName = "";
        if (params.get("leaveFromTime").toString().equals(params.get("leaveToTime").toString())) {
            lastName = "Apply(" + params.get("localName") + ")[Date：" + params.get("leaveFromTime") + "]";
        } else {
            lastName = "Apply(" + params.get("localName") + ")[Date：" + params.get("leaveFromTime") + " ~ "
                    + params.get("leaveToTime") + "]";
        }

        // 2. Cập nhật tiến trình phê duyệt (xóa cũ)
        params.put("message", "");
        essLeaveApplymapper.callDeleteLeaveConfirm(params); // call delete procedure
        essLeaveApplymapper.deleteArApplyResult(applyNo);

        // 3. Insert duyệt mức 0 (Người tạo)
        SyAffirmEmailDto affirmor0 = new SyAffirmEmailDto();
        affirmor0.setAffirmType("4");
        affirmor0.setAffirmLevel("0");
        affirmor0.setAffirmPersonId(personId);
        affirmor0.setApplyType(params.get("leaveTypeCode").toString());
        affirmor0.setApplyTypeCode(APPLY_TYPE_NO);
        affirmor0.setApplyAffirmFlag("14014306");
        affirmor0.setApplyFlag("0");
        affirmor0.setLastName(lastName);
        affirmor0.setApplyNo(applyNo);

        affirmorMapper.delete(applyNo);
        affirmorMapper.insert(affirmor0);

        // 4. Insert các mức duyệt tiếp theo
        // 1. Chuẩn bị tham số truyền vào Mapper
        Map<String, Object> affirmorParams = new HashMap<>();
        affirmorParams.put("applyTypeNo", params.get("applyTypeNo"));
        affirmorParams.put("personId", personId);
        affirmorParams.put("applyTypeCode", params.get("leaveTypeCode"));
        affirmorParams.put("applyLength", params.get("applyLength"));
        affirmorParams.put("lang", "vi");

        // 2. Thực thi gọi hàm Oracle qua MyBatis.
        // Sau khi chạy xong, MyBatis tự động đẩy kết quả vào key "resultList" trong params.
        affirmorMapper.getAffirmorList(affirmorParams);

        // 3. Ép kiểu an toàn và lấy danh sách kết quả từ tham số OUT
        // các trường lấy ra lần lượt là empId, localName, positionNo, positionName, deptName, postionname, affirmorId, affirmLevel
        @SuppressWarnings("unchecked")
        List<SyAffirmEmailDto> affirmorList = (List<SyAffirmEmailDto>) affirmorParams.get("resultList");
        if (affirmorList != null) {
            for (SyAffirmEmailDto affirmor : affirmorList) {
                affirmor.setAffirmType("1");
                affirmor.setApplyNo(applyNo);
                affirmor.setApplyType(params.get("leaveTypeCode").toString());
                affirmor.setApplyTypeCode("21");
                affirmor.setApplyAffirmFlag("14014306");
                affirmor.setApplyFlag("0");
                affirmor.setAffirmPersonId(affirmor.getAffirmorId());
                affirmor.setLastName(lastName);
                affirmorMapper.insert(affirmor);
            }
        }
    }

    private String toTrimmedString(Object value) {
        return value == null ? "" : value.toString().trim();
    }

    private boolean isProcedureErrorMessage(String message) {
        if (message == null || message.isBlank()) {
            return false;
        }
        String normalized = message.toLowerCase(Locale.ROOT);
        return normalized.contains("ora-")
                || normalized.contains("error")
                || normalized.contains("loi");
    }
}
