package com.ait.mobile.leave.service.impl;

import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
import com.ait.ar.attendanceMintenance.service.EssLeaveApplyService;
import com.ait.ess.empinfo.dto.EssFileDto;
import com.ait.ess.infoApplyAttendance.service.EssSstApplyAttendanceService;
import com.ait.mobile.common.MobileApplyStatus;
import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.common.MobileUploadValidator;
import com.ait.mobile.common.dto.MobileApproverDto;
import com.ait.mobile.common.dto.MobileCodeDto;
import com.ait.mobile.leave.dto.MobileLeaveApplyRequest;
import com.ait.mobile.leave.dto.MobileLeaveDetailDto;
import com.ait.mobile.leave.dto.MobileLeaveFormDto;
import com.ait.mobile.leave.dto.MobileLeaveItemDto;
import com.ait.mobile.leave.dto.MobileLeaveLengthDto;
import com.ait.mobile.leave.dto.MobileVacationDto;
import com.ait.mobile.leave.service.MobileLeaveService;
import com.ait.sy.basicMaintenance.service.SyCodeService;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.service.SyAffirmEmailService;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class MobileLeaveServiceImpl implements MobileLeaveService {

    private static final Logger log = LoggerFactory.getLogger(MobileLeaveServiceImpl.class);

    /** Nhóm mã loại nghỉ (SY_CODE parent) và loại đơn nghỉ trong tuyến duyệt - giống web. */
    private static final String LEAVE_TYPE_PARENT_CODE = "21";
    private static final String LEAVE_APPLY_TYPE_NO = "21";
    private static final String LEAVE_ANNUAL = "26";
    private static final String LEAVE_MARRIAGE = "22";
    private static final String LEAVE_FUNERAL = "23";
    private static final String LEAVE_MATERNITY = "27";
    /** Các loại nghỉ chỉ được xin tròn ngày (sst-apply-attendance.component.ts). */
    private static final Set<String> FULL_DAY_LEAVE_TYPES =
            Set.of("27", "482", "15821", "14013816", "25", "14015956", "14015957");
    /** Ca 7.67 giờ/ngày không áp dụng kiểm tra tròn ngày / nửa ngày (giữ đúng logic web). */
    private static final BigDecimal SPECIAL_DAY_HOUR = new BigDecimal("7.67");
    private static final int MAX_CANCEL = 50;

    private static final DateTimeFormatter DATE_TIME = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

    @Autowired
    private EssLeaveApplyService essLeaveApplyService;

    @Autowired
    private EssSstApplyAttendanceService sstApplyService;

    @Autowired
    private SyAffirmEmailService affirmEmailService;

    @Autowired
    private SyCodeService syCodeService;

    @Override
    public MobileLeaveFormDto getFormInfo(String personId) {
        try {
            MobileLeaveFormDto dto = new MobileLeaveFormDto();
            dto.setLeaveTypes(syCodeService.getUseCodeList(LEAVE_TYPE_PARENT_CODE).stream()
                    .map(c -> new MobileCodeDto(c.getCodeNo(), c.getCodeName()))
                    .toList());
            dto.setVacation(getVacation(personId));
            dto.setAnnualLeaveCode(LEAVE_ANNUAL);
            return dto;
        } catch (Exception e) {
            log.error("Lỗi lấy dữ liệu form xin nghỉ personId={}: {}", personId, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public MobileVacationDto getVacation(String personId) {
        try {
            return MobileVacationDto.from(essLeaveApplyService.getMyVacationInfo(personId));
        } catch (Exception e) {
            log.error("Lỗi lấy phép năm personId={}: {}", personId, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public MobileLeaveLengthDto calcLength(String fromTime, String toTime, String leaveTypeCode) {
        LocalDateTime from = parse(fromTime);
        LocalDateTime to = parse(toTime);
        if (!to.isAfter(from)) {
            throw MobileException.rule("ess.infoApplyAttendance.ATTENDANCE_SDATE_THAN_EDATE.Z",
                    "Thời gian kết thúc không được sớm hơn thời gian bắt đầu");
        }
        try {
            return MobileLeaveLengthDto.from(essLeaveApplyService.calculateLeaveLength(fromTime, toTime,
                    leaveTypeCode == null ? "" : leaveTypeCode));
        } catch (Exception e) {
            log.error("Lỗi tính thời lượng nghỉ from={} to={} type={}: {}", fromTime, toTime, leaveTypeCode,
                    e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public void checkLeaveType(String personId, String leaveTypeCode) {
        String message = sstApplyService.checkLeaveType(personId, leaveTypeCode);
        if (message != null) {
            throw new MobileException(MobileErrorCode.BUSINESS_RULE, message);
        }
    }

    @Override
    public List<MobileApproverDto> getApprovers(String personId, String leaveTypeCode, String applyLength) {
        try {
            List<SyAffirmEmailDto> list = affirmEmailService.findAffirmorList(LEAVE_APPLY_TYPE_NO, personId,
                    leaveTypeCode == null ? "" : leaveTypeCode, applyLength == null ? "0" : applyLength);
            return toPreview(list);
        } catch (Exception e) {
            log.error("Lỗi lấy tuyến duyệt đơn nghỉ personId={}: {}", personId, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public String apply(String personId, MobileLeaveApplyRequest req, List<MultipartFile> files) {
        MobileUploadValidator.validate(files);
        // Thời lượng tính lại ở server (không tin số liệu client gửi lên)
        MobileLeaveLengthDto length = calcLength(req.getLeaveFromTime(), req.getLeaveToTime(), req.getLeaveTypeCode());
        validateRules(req.getLeaveTypeCode(), length);

        Map<String, Object> params = new HashMap<>();
        params.put("applyNo", "");
        params.put("personId", personId);
        params.put("leaveTypeCode", req.getLeaveTypeCode());
        params.put("leaveFromTime", req.getLeaveFromTime());
        params.put("leaveToTime", req.getLeaveToTime());
        params.put("applyLength", length.getLeaveLength().toPlainString());
        params.put("leaveReason", req.getLeaveReason() == null ? "" : req.getLeaveReason().trim());
        try {
            // Kiểm tra giới tính, tuyến duyệt, trùng lịch / chốt công / đủ phép năm nằm trong service dùng chung
            String applyNo = sstApplyService.save(params, files);
            log.info("Mobile tạo đơn nghỉ applyNo={} personId={} type={} length={}", applyNo, personId,
                    req.getLeaveTypeCode(), length.getLeaveLength());
            return applyNo;
        } catch (IllegalArgumentException | IllegalStateException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi lưu đơn nghỉ mobile personId={}: {}", personId, e.getMessage(), e);
            throw new MobileException(MobileErrorCode.SYSTEM_ERROR);
        }
    }

    @Override
    public List<MobileLeaveItemDto> getMyList(String fromDate, String toDate, String affirmFlag) {
        try {
            EssLeaveApplyDto params = new EssLeaveApplyDto();
            params.setFromDate(fromDate);
            params.setToDate(toDate);
            params.setAffirmFlag(affirmFlag);
            // selectMyLeaveApplyList lọc theo #{adminID} (= personId trong token)
            return essLeaveApplyService.getMyLeaveApplyList(params).stream().map(MobileLeaveItemDto::from).toList();
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách đơn nghỉ mobile: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public MobileLeaveDetailDto getDetail(String personId, String applyNo) {
        Map<String, Object> detail;
        try {
            detail = essLeaveApplyService.getLeaveApplyDetail(applyNo, null);
        } catch (Exception e) {
            log.error("Lỗi lấy chi tiết đơn nghỉ applyNo={}: {}", applyNo, e.getMessage(), e);
            throw e;
        }
        EssLeaveApplyDto info = (EssLeaveApplyDto) detail.get("leaveInfo");
        // API dùng chung không kiểm tra chủ đơn => chặn ở đây (trả NOT_FOUND để không lộ sự tồn tại của đơn)
        if (info == null || !Objects.equals(personId, info.getPersonId())) {
            throw new MobileException(MobileErrorCode.NOT_FOUND);
        }

        MobileLeaveDetailDto dto = new MobileLeaveDetailDto();
        dto.setApplyNo(applyNo);
        dto.setLeaveTypeCode(info.getLeaveTypeCode());
        dto.setLeaveTypeName(info.getLeaveTypeName());
        dto.setLeaveFromTime(info.getLeaveFromTime());
        dto.setLeaveToTime(info.getLeaveToTime());
        dto.setApplyLength(info.getApplyLength());
        dto.setDayHours(info.getDayHours());
        dto.setLeaveReason(info.getLeaveReason());
        dto.setAffirmFlag(info.getAffirmFlag());
        dto.setAffirmFlagName(info.getAffirmFlagName());
        dto.setHrComment(info.getHrComment());
        dto.setCreateDate(toDmyHm(info.getCreateDate()));
        dto.setCancelable(MobileApplyStatus.isCancelable(info.getAffirmFlag()));

        @SuppressWarnings("unchecked")
        List<SyAffirmEmailDto> approvals = (List<SyAffirmEmailDto>) detail.getOrDefault("approvalList",
                Collections.emptyList());
        dto.setApprovals(approvals.stream().filter(Objects::nonNull)
                .filter(a -> !"0".equals(a.getAffirmLevel()))
                .map(MobileApproverDto::fromHistory).toList());

        @SuppressWarnings("unchecked")
        List<EssFileDto> files = (List<EssFileDto>) detail.getOrDefault("fileList", Collections.emptyList());
        dto.setFiles(files.stream().filter(Objects::nonNull).map(f -> {
            MobileLeaveDetailDto.FileItem item = new MobileLeaveDetailDto.FileItem();
            item.setFileNo(f.getFileNo());
            item.setFileName(f.getFileName());
            return item;
        }).toList());
        return dto;
    }

    @Override
    public int cancel(List<String> applyNos) {
        List<String> nos = applyNos == null ? List.of()
                : applyNos.stream().filter(s -> s != null && !s.isBlank()).map(String::trim).distinct().toList();
        if (nos.isEmpty() || nos.size() > MAX_CANCEL) {
            throw new MobileException(MobileErrorCode.INVALID_REQUEST);
        }
        try {
            // cancelMyLeaveApplyList chỉ hủy đơn của #{adminID} đang ở trạng thái chờ duyệt
            int count = essLeaveApplyService.cancelMyLeaveApplyList(nos);
            if (count == 0) {
                throw MobileException.rule("mobile.request.cancelNone",
                        "Không có đơn nào được hủy. Chỉ hủy được đơn đang chờ duyệt");
            }
            log.info("Mobile hủy {} đơn nghỉ applyNos={}", count, nos);
            return count;
        } catch (MobileException | IllegalArgumentException | IllegalStateException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi hủy đơn nghỉ mobile applyNos={}: {}", nos, e.getMessage(), e);
            throw e;
        }
    }

    /** Các kiểm tra của nút "Xin phép" ở web (sst-apply-attendance.component.ts#validate). */
    private void validateRules(String type, MobileLeaveLengthDto len) {
        BigDecimal length = len.getLeaveLength();
        BigDecimal dayHour = len.getDayHour();
        if (length.signum() <= 0) {
            throw MobileException.rule("ess.infoApplyAttendance.ATTENDANCE_LONGER_THAN_0.Z",
                    "Thời gian nghỉ phép phải lớn hơn 0");
        }
        BigDecimal days = dayHour.signum() > 0 ? length.divide(dayHour, 4, RoundingMode.HALF_UP) : BigDecimal.ZERO;
        boolean checkRound = dayHour.signum() > 0 && dayHour.compareTo(SPECIAL_DAY_HOUR) != 0;

        if (LEAVE_MARRIAGE.equals(type) && days.compareTo(BigDecimal.valueOf(3)) > 0) {
            throw MobileException.rule("alert.message.GERENHUNJIAZUIDUOSANTIAN.b", "Nghỉ kết hôn tối đa 3 ngày!");
        }
        if (LEAVE_MATERNITY.equals(type) && days.compareTo(BigDecimal.valueOf(180)) > 0) {
            throw MobileException.rule("alert.message.CHANJIAZUIDUOYIBAIBASHITIAN.b", "Nghỉ thai sản tối đa 180 ngày!");
        }
        if (FULL_DAY_LEAVE_TYPES.contains(type) && checkRound && length.remainder(dayHour).signum() != 0) {
            throw minLengthError();
        }
        if (LEAVE_FUNERAL.equals(type) && days.compareTo(BigDecimal.valueOf(3)) > 0) {
            throw MobileException.rule("alert.message.YOUXINSANGJIAZUIDUOSANTIAN.b", "Nghỉ hiếu có lương tối đa 3 ngày!");
        }
        if (LEAVE_ANNUAL.equals(type) && checkRound
                && length.remainder(dayHour.divide(BigDecimal.valueOf(2), 4, RoundingMode.HALF_UP)).signum() != 0) {
            throw minLengthError();
        }
    }

    private static MobileException minLengthError() {
        return MobileException.rule("alert.message.ess.infoApply.applyTimeCanNotLessThanMinValue",
                "Thời lượng xin phép không được nhỏ hơn giá trị nhỏ nhất.!");
    }

    /** selectLeaveApplyInfo trả CREATE_DATE dạng YYYY/MM/DD HH24:MI:SS -> DD/MM/YYYY HH:mm. */
    private static String toDmyHm(String value) {
        if (value == null || !value.matches("\\d{4}/\\d{2}/\\d{2} \\d{2}:\\d{2}.*")) {
            return value;
        }
        return value.substring(8, 10) + "/" + value.substring(5, 7) + "/" + value.substring(0, 4) + " "
                + value.substring(11, 16);
    }

    private static LocalDateTime parse(String value) {
        try {
            return LocalDateTime.parse(value == null ? "" : value.trim(), DATE_TIME);
        } catch (DateTimeParseException e) {
            throw new MobileException(MobileErrorCode.INVALID_REQUEST);
        }
    }

    static List<MobileApproverDto> toPreview(List<SyAffirmEmailDto> list) {
        if (list == null) {
            return List.of();
        }
        return list.stream().filter(Objects::nonNull)
                .filter(a -> !"0".equals(String.valueOf(a.getAffirmLevel())))
                .map(MobileApproverDto::fromPreview).toList();
    }
}
