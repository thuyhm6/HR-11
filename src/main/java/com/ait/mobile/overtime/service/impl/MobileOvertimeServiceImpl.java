package com.ait.mobile.overtime.service.impl;

import com.ait.ar.attendanceMintenance.dto.ArOvertimeManagentDto;
import com.ait.ar.attendanceMintenance.service.ArOvertimeManagentService;
import com.ait.ess.infoApply.dto.EssOtApplyListDto;
import com.ait.ess.infoApply.service.EssOtApplyService;
import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.common.dto.MobileApproverDto;
import com.ait.mobile.overtime.dto.MobileOtApplyRequest;
import com.ait.mobile.overtime.dto.MobileOtDateInfoDto;
import com.ait.mobile.overtime.dto.MobileOtItemDto;
import com.ait.mobile.overtime.service.MobileOvertimeService;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.service.SyAffirmEmailService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MobileOvertimeServiceImpl implements MobileOvertimeService {

    private static final Logger log = LoggerFactory.getLogger(MobileOvertimeServiceImpl.class);

    /** Loại đơn tăng ca trong tuyến duyệt / ESS_APPLY_OT.OT_TYPE_NO - giống web. */
    private static final String OT_APPLY_TYPE_NO = "31";
    private static final int MAX_CANCEL = 50;
    private static final DateTimeFormatter DATE_TIME = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

    @Autowired
    private EssOtApplyService essOtApplyService;

    @Autowired
    private ArOvertimeManagentService overtimeService;

    @Autowired
    private SyAffirmEmailService affirmEmailService;

    @Override
    public MobileOtDateInfoDto getDateInfo(String applyDate) {
        try {
            // selectOtDateInfo dùng #{adminID}/#{cpnyId} của người đăng nhập
            return MobileOtDateInfoDto.from(essOtApplyService.getOtDateInfo(applyDate));
        } catch (Exception e) {
            log.error("Lỗi lấy thông tin ngày tăng ca applyDate={}: {}", applyDate, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public BigDecimal calcDuration(String applyOtDate, String otFromTime, String otToTime, boolean deductMeal) {
        if (!parse(otToTime).isAfter(parse(otFromTime))) {
            throw MobileException.rule("mobile.overtime.endAfterStart", "Thời gian kết thúc phải sau thời gian bắt đầu");
        }
        try {
            Map<String, Object> result = essOtApplyService.getOtDuration(applyOtDate, otFromTime, otToTime,
                    deductMeal ? "1" : "0");
            Object len = result == null ? null : result.get("OT_LENGTH");
            return len == null || len.toString().isBlank() ? BigDecimal.ZERO
                    : new BigDecimal(len.toString().trim()).stripTrailingZeros();
        } catch (NumberFormatException e) {
            return BigDecimal.ZERO;
        } catch (Exception e) {
            log.error("Lỗi tính số giờ tăng ca date={} from={} to={}: {}", applyOtDate, otFromTime, otToTime,
                    e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public List<MobileApproverDto> getApprovers(String personId, String otTypeCode, String applyLength) {
        if (otTypeCode == null || otTypeCode.isBlank()) {
            // Chưa có loại OT thì PKG_AFFIRM_EMAIL trả sai tuyến duyệt (ghi chú ở web)
            return List.of();
        }
        try {
            List<SyAffirmEmailDto> list = affirmEmailService.findAffirmorList(OT_APPLY_TYPE_NO, personId, otTypeCode,
                    applyLength == null ? "0" : applyLength);
            return list == null ? List.of() : list.stream().filter(Objects::nonNull)
                    .filter(a -> !"0".equals(String.valueOf(a.getAffirmLevel())))
                    .map(MobileApproverDto::fromPreview).toList();
        } catch (Exception e) {
            log.error("Lỗi lấy tuyến duyệt OT personId={}: {}", personId, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public String apply(HrUserInfo user, MobileOtApplyRequest req) {
        // Loại OT và số giờ luôn do server xác định lại
        MobileOtDateInfoDto info = getDateInfo(req.getApplyOtDate());
        if (info.getOtTypeCode() == null || info.getOtTypeCode().isBlank()) {
            throw MobileException.rule("mobile.overtime.typeMissing",
                    "Chưa xác định được loại tăng ca của ngày này. Vui lòng liên hệ phòng nhân sự");
        }
        BigDecimal hours = calcDuration(req.getApplyOtDate(), req.getOtFromTime(), req.getOtToTime(),
                req.isDeductMeal());
        if (hours.signum() <= 0) {
            throw MobileException.rule("mobile.overtime.hoursPositive", "Số giờ tăng ca phải lớn hơn 0");
        }
        validateLimits(info, hours);

        ArOvertimeManagentDto dto = new ArOvertimeManagentDto();
        dto.setApplyNo("");                 // chỉ tạo mới - service sẽ UPDATE nếu có applyNo
        dto.setPersonId(user.getPersonId());
        dto.setLocalName(user.getEmployeeName());
        dto.setEmpId(user.getHrEmployee() != null ? user.getHrEmployee().getEmpId() : null);
        dto.setOtTypeNo(OT_APPLY_TYPE_NO);
        dto.setOtTypeCode(info.getOtTypeCode());
        dto.setApplyOtDate(req.getApplyOtDate());
        dto.setOtFromTime(req.getOtFromTime());
        dto.setOtToTime(req.getOtToTime());
        dto.setOtApplyHour(hours.toPlainString());
        dto.setApplyOtRemark(req.getApplyOtRemark() == null ? "" : req.getApplyOtRemark().trim());
        dto.setDeductYn(req.isDeductMeal() ? "1" : "0");
        try {
            // Kiểm tra trùng đơn / chốt công / hạn mức / thai sản + tạo tuyến duyệt nằm trong service dùng chung
            overtimeService.save(dto);
            log.info("Mobile tạo đơn OT applyNo={} personId={} date={} hours={}", dto.getApplyNo(),
                    user.getPersonId(), req.getApplyOtDate(), hours);
            return dto.getApplyNo();
        } catch (IllegalArgumentException | IllegalStateException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi lưu đơn OT mobile personId={}: {}", user.getPersonId(), e.getMessage(), e);
            throw new MobileException(MobileErrorCode.SYSTEM_ERROR);
        }
    }

    @Override
    public List<MobileOtItemDto> getMyList(String fromDate, String toDate, String affirmFlag) {
        try {
            EssOtApplyListDto params = new EssOtApplyListDto();
            params.setFromDate(fromDate);
            params.setToDate(toDate);
            params.setAffirmFlagSearch(affirmFlag);
            // selectMyOtApplyList lọc theo #{adminID}
            return essOtApplyService.getMyOtApplyList(params).stream().map(MobileOtItemDto::from).toList();
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách đơn OT mobile: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public int cancel(List<String> applyNos) {
        List<String> nos = applyNos == null ? List.of()
                : applyNos.stream().filter(s -> s != null && !s.isBlank()).map(String::trim).distinct().toList();
        if (nos.isEmpty() || nos.size() > MAX_CANCEL) {
            throw new MobileException(MobileErrorCode.INVALID_REQUEST);
        }
        try {
            // cancelMyOtApplyList chỉ hủy đơn của #{adminID} đang chờ duyệt
            int count = essOtApplyService.cancelMyOtApplyList(nos);
            if (count == 0) {
                throw MobileException.rule("mobile.request.cancelNone",
                        "Không có đơn nào được hủy. Chỉ hủy được đơn đang chờ duyệt");
            }
            log.info("Mobile hủy {} đơn OT applyNos={}", count, nos);
            return count;
        } catch (MobileException | IllegalArgumentException | IllegalStateException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi hủy đơn OT mobile applyNos={}: {}", nos, e.getMessage(), e);
            throw e;
        }
    }

    /** Hạn mức giờ OT tháng / năm - giống nút "Đăng ký" ở web (service dùng chung cũng kiểm tra lại). */
    private void validateLimits(MobileOtDateInfoDto info, BigDecimal hours) {
        BigDecimal month = info.getOtTotalMonth().add(hours);
        if (info.isMonthLimitEnabled() && month.compareTo(info.getMonthLimitHours()) > 0) {
            throw MobileException.rule("essOt.msg.monthLimitExceeded",
                    "Tổng tăng ca tháng này sẽ là {0}h, vượt quá giới hạn {1}h!",
                    month.toPlainString(), info.getMonthLimitHours().toPlainString());
        }
        BigDecimal year = info.getOtTotalYear().add(hours);
        if (info.isYearLimitEnabled() && year.compareTo(info.getYearLimitHours()) > 0) {
            throw MobileException.rule("essOt.msg.yearLimitExceeded",
                    "Tổng tăng ca năm nay sẽ là {0}h, vượt quá giới hạn {1}h!",
                    year.toPlainString(), info.getYearLimitHours().toPlainString());
        }
    }

    private static LocalDateTime parse(String value) {
        try {
            return LocalDateTime.parse(value == null ? "" : value.trim(), DATE_TIME);
        } catch (DateTimeParseException e) {
            throw new MobileException(MobileErrorCode.INVALID_REQUEST);
        }
    }
}
