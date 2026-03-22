package com.ait.ar.attendanceMintenance.service.impl;

import com.ait.ar.attendanceMintenance.dto.ArOvertimeImportTempDto;
import com.ait.ar.attendanceMintenance.dto.ArOvertimeManagentDto;
import com.ait.ar.attendanceMintenance.mapper.ArOvertimeManagentMapper;
import com.ait.ar.attendanceMintenance.service.ArOvertimeManagentService;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.mapper.SyAffirmEmailMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
public class ArOvertimeManagentServiceImpl implements ArOvertimeManagentService {

    private static final String OT_TYPE_NO = "31";
    private static final String APPLY_AFFIRM_FLAG = "14014306";
    private static final DateTimeFormatter DATE_TIME_FORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

    @Autowired
    private ArOvertimeManagentMapper mapper;

    @Autowired
    private SyAffirmEmailMapper affirmEmailMapper;

    @Override
    public List<ArOvertimeManagentDto> getList(ArOvertimeManagentDto dto) {
        ArOvertimeManagentDto safeDto = dto == null ? new ArOvertimeManagentDto() : dto;
        return mapper.selectList(safeDto);
    }

    @Override
    public Map<String, Object> getDetail(String applyNo, String applyType) {
        String resolvedApplyNo = safeString(applyNo);
        if (resolvedApplyNo.isEmpty()) {
            Map<String, Object> empty = new HashMap<>();
            empty.put("otInfo", null);
            empty.put("employeeInfo", null);
            empty.put("approvalList", Collections.emptyList());
            return empty;
        }

        ArOvertimeManagentDto otInfo = mapper.selectDetail(resolvedApplyNo);
        String resolvedApplyType = safeString(applyType);
        if (resolvedApplyType.isEmpty() && otInfo != null) {
            resolvedApplyType = safeString(otInfo.getOtTypeCode());
        }

        List<SyAffirmEmailDto> approvalList = mapper.selectApprovalInfo(resolvedApplyNo, resolvedApplyType);

        Map<String, Object> result = new HashMap<>();
        result.put("otInfo", otInfo);
        result.put("employeeInfo", otInfo);
        result.put("approvalList", approvalList == null ? Collections.emptyList() : approvalList);
        return result;
    }

    @Override
    public ArOvertimeManagentDto getDefaultOtInfo(ArOvertimeManagentDto dto) {
        ArOvertimeManagentDto safeDto = dto == null ? new ArOvertimeManagentDto() : dto;
        normalizeDefaultOtRequest(safeDto);
        if (!canResolveDefaultOtInfo(safeDto)) {
            return new ArOvertimeManagentDto();
        }

        ArOvertimeManagentDto resolvedDto = mapper.selectDefaultOtInfo(safeDto);
        if (resolvedDto == null) {
            resolvedDto = new ArOvertimeManagentDto();
        }
        resolvedDto.setPersonId(safeDto.getPersonId());
        resolvedDto.setApplyOtDate(safeDto.getApplyOtDate());
        resolvedDto.setOtFromTime(safeDto.getOtFromTime());
        resolvedDto.setOtToTime(safeDto.getOtToTime());
        resolvedDto.setDeductYn(safeDto.getDeductYn());
        return resolvedDto;
    }

    @Override
    public List<ArOvertimeImportTempDto> getImportTempList(String errorOnly) {
        return mapper.selectImportTempList(safeString(errorOnly));
    }

    @Override
    @Transactional
    public String importTempToOfficial() {
        Map<String, Object> params = new HashMap<>();
        params.put("message", "");
        mapper.callImportOtTemp(params);

        String message = safeString(params.get("message"));
        if (isProcedureErrorMessage(message)) {
            throw new IllegalStateException(message);
        }
        return message;
    }

    @Override
    @Transactional
    public void save(ArOvertimeManagentDto dto) {
        if (dto == null) {
            throw new IllegalArgumentException("Dữ liệu tăng ca không hợp lệ.");
        }

        String personId = safeString(dto.getPersonId());
        String applyOtDate = normalizeDate(dto.getApplyOtDate());
        String otFromTime = safeString(dto.getOtFromTime());
        String otToTime = safeString(dto.getOtToTime());
        dto.setDeductYn(defaultString(dto.getDeductYn(), "0"));
        ArOvertimeManagentDto defaultOtInfo = getDefaultOtInfo(dto);
        String otTypeCode = safeString(dto.getOtTypeCode());
        if (otTypeCode.isEmpty()) {
            otTypeCode = safeString(defaultOtInfo.getOtTypeCode());
        }

        if (personId.isEmpty()) {
            throw new IllegalArgumentException("Chưa chọn nhân viên.");
        }
        if (applyOtDate.isEmpty()) {
            throw new IllegalArgumentException("Chưa chọn ngày tăng ca.");
        }
        if (otFromTime.isEmpty() || otToTime.isEmpty()) {
            throw new IllegalArgumentException("Chưa nhập giờ tăng ca.");
        }
        if (otTypeCode.isEmpty()) {
            throw new IllegalArgumentException("Chưa chọn loại tăng ca.");
        }

        dto.setPersonId(personId);
        dto.setApplyOtDate(applyOtDate);
        dto.setOtFromTime(otFromTime);
        dto.setOtToTime(otToTime);
        dto.setOtTypeCode(otTypeCode);
        if (safeString(dto.getOtApplyHour()).isEmpty() && !safeString(defaultOtInfo.getOtApplyHour()).isEmpty()) {
            dto.setOtApplyHour(defaultOtInfo.getOtApplyHour());
        }
        dto.setOtTypeNo(OT_TYPE_NO);
        dto.setAffirmFlag(APPLY_AFFIRM_FLAG);
        dto.setOtApplyHour(resolveApplyHour(dto));

        // 1. Insert/Update thủ tục Leave Apply
        boolean isNew = safeString(dto.getApplyNo()).isEmpty() || "0".equals(safeString(dto.getApplyNo()));
        String applyNo;
        if (isNew) {
            applyNo = String.valueOf(mapper.getNextApplySeq());
            dto.setApplyNo(applyNo);
            mapper.insertOvertimeApply(dto);
        } else {
            applyNo = safeString(dto.getApplyNo());
            mapper.updateOvertimeApply(dto);
        }

        // 2. Cập nhật tiến trình phê duyệt (xóa cũ)
        Map<String, Object> deleteParams = new HashMap<>();
        deleteParams.put("applyNo", applyNo);
        deleteParams.put("message", "");
        mapper.callDeleteOtConfirm(deleteParams);

        String lastName = buildLastName(dto);

        // 3. Insert duyệt mức 0 (Người tạo)
        SyAffirmEmailDto affirmor0 = new SyAffirmEmailDto();
        affirmor0.setAffirmType("4");
        affirmor0.setAffirmLevel("0");
        affirmor0.setAffirmPersonId(personId);
        affirmor0.setApplyNo(applyNo);
        affirmor0.setApplyType(otTypeCode);
        affirmor0.setApplyTypeCode(OT_TYPE_NO);
        affirmor0.setApplyAffirmFlag(APPLY_AFFIRM_FLAG);
        affirmor0.setApplyFlag("0");
        affirmor0.setLastName(lastName);

        affirmEmailMapper.delete(applyNo);
        affirmEmailMapper.insert(affirmor0);

        // Insert các mức duyệt tiếp theo
        // 1. Chuẩn bị tham số truyền vào Mapper
        Map<String, Object> affirmorParams = new HashMap<>();
        affirmorParams.put("applyTypeNo", OT_TYPE_NO);
        affirmorParams.put("personId", personId);
        affirmorParams.put("applyTypeCode", otTypeCode);
        affirmorParams.put("applyLength", dto.getOtApplyHour());
        affirmorParams.put("lang", "vi");
        // 2. Thực thi gọi hàm Oracle qua MyBatis.
        // Sau khi chạy xong, MyBatis tự động đẩy kết quả vào key "resultList" trong
        // params.
        affirmEmailMapper.getAffirmorList(affirmorParams);

        // 3. Ép kiểu an toàn và lấy danh sách kết quả từ tham số OUT
        // các trường lấy ra lần lượt là empId, localName, positionNo, positionName,
        // deptName, postionname, affirmorId, affirmLevel
        @SuppressWarnings("unchecked")
        List<SyAffirmEmailDto> affirmorList = (List<SyAffirmEmailDto>) affirmorParams.get("resultList");
        if (affirmorList == null || affirmorList.isEmpty()) {
            return;
        }
        for (SyAffirmEmailDto affirmor : affirmorList) {
            if (affirmor == null) {
                continue;
            }
            affirmor.setAffirmType("1");
            affirmor.setApplyNo(applyNo);
            affirmor.setApplyType(otTypeCode);
            affirmor.setApplyTypeCode(OT_TYPE_NO);
            affirmor.setApplyAffirmFlag(APPLY_AFFIRM_FLAG);
            affirmor.setApplyFlag("0");
            affirmor.setAffirmPersonId(affirmor.getAffirmorId());
            affirmor.setLastName(lastName);
            affirmEmailMapper.insert(affirmor);
        }
    }

    private String buildLastName(ArOvertimeManagentDto dto) {
        String localName = safeString(dto.getLocalName());
        String labelName = localName.isEmpty() ? safeString(dto.getEmpId()) : localName;
        String fromDateTime = dto.getApplyOtDate() + " " + dto.getOtFromTime();
        String toDateTime = buildToDateTime(dto.getApplyOtDate(), dto.getOtFromTime(), dto.getOtToTime());
        return "OverTime Apply(" + labelName + ")[Date: " + fromDateTime + " ~ " + toDateTime + "]";
    }

    private void normalizeDefaultOtRequest(ArOvertimeManagentDto dto) {
        dto.setPersonId(safeString(dto.getPersonId()));
        dto.setApplyOtDate(normalizeDate(dto.getApplyOtDate()));
        dto.setOtFromTime(safeString(dto.getOtFromTime()));
        dto.setOtToTime(safeString(dto.getOtToTime()));
        dto.setDeductYn(defaultString(dto.getDeductYn(), "0"));
    }

    private boolean canResolveDefaultOtInfo(ArOvertimeManagentDto dto) {
        return !safeString(dto.getPersonId()).isEmpty()
                && !safeString(dto.getApplyOtDate()).isEmpty()
                && !safeString(dto.getOtFromTime()).isEmpty()
                && !safeString(dto.getOtToTime()).isEmpty();
    }

    private String resolveApplyHour(ArOvertimeManagentDto dto) {
        String currentValue = safeString(dto.getOtApplyHour());
        if (!currentValue.isEmpty()) {
            return currentValue;
        }
        try {
            LocalDateTime fromDateTime = LocalDateTime.parse(dto.getApplyOtDate() + " " + dto.getOtFromTime(),
                    DATE_TIME_FORMAT);
            LocalDateTime toDateTime = LocalDateTime.parse(
                    buildToDateTime(dto.getApplyOtDate(), dto.getOtFromTime(), dto.getOtToTime()), DATE_TIME_FORMAT);
            long minutes = Duration.between(fromDateTime, toDateTime).toMinutes();
            if (minutes < 0) {
                throw new IllegalArgumentException("Thời gian kết thúc phải lớn hơn thời gian bắt đầu.");
            }
            return BigDecimal.valueOf(minutes)
                    .divide(BigDecimal.valueOf(60), 2, RoundingMode.HALF_UP)
                    .stripTrailingZeros()
                    .toPlainString();
        } catch (RuntimeException ex) {
            if (!currentValue.isEmpty()) {
                return currentValue;
            }
            throw new IllegalArgumentException("Không tính được số giờ tăng ca.");
        }
    }

    private String buildToDateTime(String applyOtDate, String otFromTime, String otToTime) {
        LocalDateTime fromDateTime = LocalDateTime.parse(applyOtDate + " " + otFromTime, DATE_TIME_FORMAT);
        LocalDateTime toDateTime = LocalDateTime.parse(applyOtDate + " " + otToTime, DATE_TIME_FORMAT);
        if (toDateTime.isBefore(fromDateTime)) {
            toDateTime = toDateTime.plusDays(1);
        }
        return toDateTime.format(DATE_TIME_FORMAT);
    }

    private String sanitizeSql(String affirmSql) {
        String trimmed = affirmSql.trim();
        if (trimmed.endsWith(";")) {
            return trimmed.substring(0, trimmed.length() - 1);
        }
        return trimmed;
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

    private String normalizeDate(String value) {
        return safeString(value).replace('.', '-').replace('/', '-');
    }

    private String defaultString(String value, String defaultValue) {
        String safeValue = safeString(value);
        return safeValue.isEmpty() ? defaultValue : safeValue;
    }

    private String safeString(Object value) {
        return value == null ? "" : value.toString().trim();
    }
}
