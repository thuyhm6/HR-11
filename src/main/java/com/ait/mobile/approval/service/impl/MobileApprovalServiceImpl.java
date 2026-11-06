package com.ait.mobile.approval.service.impl;

import com.ait.ar.attendanceMintenance.dto.ArOvertimeManagentDto;
import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
import com.ait.ar.attendanceMintenance.service.ArOvertimeManagentService;
import com.ait.ar.attendanceMintenance.service.EssLeaveApplyService;
import com.ait.ess.infoApplyAttendance.service.EssAttendanceExForBatchService;
import com.ait.mobile.approval.dto.MobileAffirmRowDto;
import com.ait.mobile.approval.dto.MobileApprovalCategory;
import com.ait.mobile.approval.dto.MobileApprovalDetailDto;
import com.ait.mobile.approval.dto.MobileApprovalExecuteRequest;
import com.ait.mobile.approval.dto.MobileApprovalExecuteResult;
import com.ait.mobile.approval.dto.MobileApprovalItemDto;
import com.ait.mobile.approval.mapper.MobileApprovalMapper;
import com.ait.mobile.approval.service.MobileApprovalService;
import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.common.MobileMessages;
import com.ait.mobile.common.dto.MobileApproverDto;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.service.SyAffirmEmailService;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

@Service
public class MobileApprovalServiceImpl implements MobileApprovalService {

    private static final Logger log = LoggerFactory.getLogger(MobileApprovalServiceImpl.class);

    /** PR_AFFIRM_EXECUTE: 1 = duyệt, 2 = từ chối (view-approval-email.component.ts). */
    private static final int FLAG_APPROVE = 1;
    private static final int FLAG_REJECT = 2;

    @Autowired
    private SyAffirmEmailService syAffirmEmailService;

    @Autowired
    private MobileApprovalMapper mobileApprovalMapper;

    @Autowired
    private EssLeaveApplyService essLeaveApplyService;

    @Autowired
    private ArOvertimeManagentService overtimeService;

    @Autowired
    private EssAttendanceExForBatchService attendanceExService;

    @Override
    public List<MobileApprovalItemDto> getPending(String applyTypeCode) {
        try {
            SyAffirmEmailDto params = new SyAffirmEmailDto();
            params.setApplyTypeCodeSearch(applyTypeCode);
            // selectApprovalEmailList lọc AFFIRM_PERSON_ID = #{adminID}
            return syAffirmEmailService.getApprovalEmailList(params).stream()
                    .filter(Objects::nonNull).map(MobileApprovalItemDto::from).toList();
        } catch (Exception e) {
            log.error("Lỗi lấy hộp duyệt mobile: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public List<MobileApprovalItemDto> getHistory(String applyTypeCode) {
        try {
            SyAffirmEmailDto params = new SyAffirmEmailDto();
            params.setApplyTypeCodeSearch(applyTypeCode);
            return syAffirmEmailService.getApprovaledEmailList(params).stream()
                    .filter(Objects::nonNull).map(MobileApprovalItemDto::from).toList();
        } catch (Exception e) {
            log.error("Lỗi lấy lịch sử duyệt mobile: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public Map<String, Integer> getCounts() {
        return syAffirmEmailService.getPendingApprovalCounts();
    }

    @Override
    public MobileApprovalDetailDto getDetail(String approverId, String applyNo, String applyType) {
        // Chỉ người nằm trong tuyến duyệt của đơn mới được xem
        if (mobileApprovalMapper.countAffirmRows(applyNo, approverId) == 0) {
            throw new MobileException(MobileErrorCode.NOT_FOUND);
        }
        MobileAffirmRowDto pending = mobileApprovalMapper.selectPendingRow(applyNo, applyType, approverId);
        MobileAffirmRowDto row = pending != null ? pending : mobileApprovalMapper.selectLatestRow(applyNo, approverId);

        MobileApprovalDetailDto dto = new MobileApprovalDetailDto();
        dto.setApplyNo(applyNo);
        dto.setApplyType(applyType);
        dto.setCanApprove(pending != null);
        MobileApprovalCategory category = MobileApprovalCategory.of(row == null ? null : row.getApplyTypeCode());
        dto.setCategory(category);
        if (row != null) {
            dto.setTitle(row.getTitle());
            dto.setApplyPersonInfo(row.getApplyPersonInfo());
            dto.setStatusName(row.getStatusName());
        }
        try {
            switch (category) {
                case LEAVE -> fillLeave(dto, essLeaveApplyService.getLeaveApplyDetail(applyNo, applyType), false);
                case ANOMALY -> fillLeave(dto, attendanceExService.getCardApplyDetail(applyNo, applyType), true);
                case OT -> fillOt(dto, overtimeService.getDetail(applyNo, applyType));
                default -> {
                    // Loại đơn chưa hỗ trợ hiển thị chi tiết - app vẫn xem được tiêu đề và duyệt
                }
            }
        } catch (Exception e) {
            log.error("Lỗi lấy chi tiết đơn cần duyệt applyNo={} type={}: {}", applyNo, applyType, e.getMessage(), e);
            throw e;
        }
        return dto;
    }

    @Override
    public MobileApprovalExecuteResult execute(String approverId, MobileApprovalExecuteRequest req) {
        MobileApprovalExecuteResult result = new MobileApprovalExecuteResult();
        String content = req.getContent() == null || req.getContent().isBlank()
                ? (req.isApprove() ? "Ok" : "Reject") : req.getContent().trim();
        Locale locale = LocaleContextHolder.getLocale();

        for (MobileApprovalExecuteRequest.Item item : req.getItems()) {
            String applyNo = item.getApplyNo().trim();
            MobileAffirmRowDto row = mobileApprovalMapper.selectPendingRow(applyNo, item.getApplyType().trim(),
                    approverId);
            if (row == null) {
                result.getFailures().add(new MobileApprovalExecuteResult.Failure(applyNo,
                        MobileMessages.get("mobile.approval.notPending",
                                "Đơn không còn chờ bạn duyệt (đã được xử lý hoặc đã hủy)", locale)));
                continue;
            }
            // Tham số lấy từ dòng duyệt trong DB, không lấy từ client
            Map<String, Object> params = new HashMap<>();
            params.put("applyNo", row.getApplyNo());
            params.put("applyType", row.getApplyType());
            params.put("applyFlag", row.getApplyFlag());
            params.put("affirmLevel", row.getAffirmLevel());
            params.put("flag", req.isApprove() ? FLAG_APPROVE : FLAG_REJECT);
            params.put("affirmContent", content);
            try {
                String errors = syAffirmEmailService.executeAffirm(List.of(params));
                if (errors == null || errors.isBlank()) {
                    result.setSuccessCount(result.getSuccessCount() + 1);
                    log.info("Mobile {} đơn applyNo={} level={} by={}", req.isApprove() ? "duyệt" : "từ chối",
                            applyNo, row.getAffirmLevel(), approverId);
                } else {
                    result.getFailures().add(new MobileApprovalExecuteResult.Failure(applyNo, cleanError(errors, applyNo)));
                }
            } catch (Exception e) {
                log.error("Lỗi duyệt đơn mobile applyNo={}: {}", applyNo, e.getMessage(), e);
                result.getFailures().add(new MobileApprovalExecuteResult.Failure(applyNo,
                        MobileMessages.get(MobileErrorCode.SYSTEM_ERROR.getMessageKey(),
                                MobileErrorCode.SYSTEM_ERROR.getDefaultMessage(), locale)));
            }
        }
        return result;
    }

    /** executeAffirm trả "applyNo: message\n" - bỏ tiền tố số đơn. */
    private static String cleanError(String errors, String applyNo) {
        String msg = errors.trim();
        String prefix = applyNo + ": ";
        return msg.startsWith(prefix) ? msg.substring(prefix.length()) : msg;
    }

    private void fillLeave(MobileApprovalDetailDto dto, Map<String, Object> detail, boolean anomaly) {
        EssLeaveApplyDto info = (EssLeaveApplyDto) detail.get("leaveInfo");
        Locale l = LocaleContextHolder.getLocale();
        if (info != null) {
            dto.addField(label(anomaly ? "mobile.approval.anomalyType" : "mobile.leave.type",
                    anomaly ? "Loại" : "Loại nghỉ", l), info.getLeaveTypeName());
            dto.addField(label("mobile.leave.from", "Từ", l), info.getLeaveFromTime());
            dto.addField(label("mobile.leave.to", "Đến", l), info.getLeaveToTime());
            dto.addField(label("mobile.leave.duration", "Thời lượng", l),
                    anomaly ? hours(info.getApplyLength(), l) : leaveLength(info.getApplyLength(), info.getDayHours(), l));
            dto.addField(label("mobile.leave.reason", "Lý do", l), info.getLeaveReason());
            dto.addField(label("mobile.leave.createDate", "Ngày gửi", l), info.getCreateDate());
        }
        setApprovals(dto, detail);
    }

    private void fillOt(MobileApprovalDetailDto dto, Map<String, Object> detail) {
        ArOvertimeManagentDto info = (ArOvertimeManagentDto) detail.get("otInfo");
        Locale l = LocaleContextHolder.getLocale();
        if (info != null) {
            dto.addField(label("mobile.overtime.type", "Loại tăng ca", l), info.getOtTypeName());
            dto.addField(label("mobile.overtime.date", "Ngày tăng ca", l), info.getApplyOtDate());
            dto.addField(label("mobile.overtime.from", "Bắt đầu", l), info.getOtFromTime());
            dto.addField(label("mobile.overtime.to", "Kết thúc", l), info.getOtToTime());
            dto.addField(label("mobile.overtime.hours", "Số giờ tăng ca", l), hours(info.getOtApplyHour(), l));
            if ("1".equals(info.getDeductYn())) {
                dto.addField(label("mobile.overtime.deductMeal", "Trừ giờ ăn ca", l), "✓");
            }
            dto.addField(label("mobile.overtime.remark", "Nội dung công việc", l), info.getApplyOtRemark());
            dto.addField(label("mobile.leave.createDate", "Ngày gửi", l), info.getCreateDate());
        }
        setApprovals(dto, detail);
    }

    private static void setApprovals(MobileApprovalDetailDto dto, Map<String, Object> detail) {
        @SuppressWarnings("unchecked")
        List<SyAffirmEmailDto> approvals = (List<SyAffirmEmailDto>) detail.getOrDefault("approvalList",
                Collections.emptyList());
        dto.setApprovals(approvals.stream().filter(Objects::nonNull)
                .filter(a -> !"0".equals(a.getAffirmLevel()))
                .map(MobileApproverDto::fromHistory).toList());
    }

    private static String label(String key, String fallback, Locale locale) {
        return MobileMessages.get(key, fallback, locale);
    }

    private static String hours(String value, Locale l) {
        return value == null || value.isBlank() ? null : value + " " + label("mobile.unit.hour", "giờ", l);
    }

    /** Giờ nghỉ -> "x ngày y giờ" theo số giờ / ngày công. */
    private static String leaveLength(String hoursValue, String dayHoursValue, Locale l) {
        try {
            BigDecimal hours = new BigDecimal(hoursValue.trim());
            BigDecimal perDay = dayHoursValue == null || dayHoursValue.isBlank() ? BigDecimal.ZERO
                    : new BigDecimal(dayHoursValue.trim());
            if (perDay.signum() <= 0) {
                return hours(hoursValue, l);
            }
            BigDecimal days = hours.divide(perDay, 0, RoundingMode.DOWN);
            BigDecimal rest = hours.subtract(days.multiply(perDay)).stripTrailingZeros();
            StringBuilder sb = new StringBuilder();
            if (days.signum() > 0) {
                sb.append(days.toPlainString()).append(' ').append(label("mobile.unit.day", "ngày", l));
            }
            if (rest.signum() > 0) {
                sb.append(sb.length() > 0 ? " " : "").append(rest.toPlainString()).append(' ')
                        .append(label("mobile.unit.hour", "giờ", l));
            }
            return sb.length() > 0 ? sb.toString() : hours(hoursValue, l);
        } catch (RuntimeException e) {
            return hoursValue;
        }
    }
}
