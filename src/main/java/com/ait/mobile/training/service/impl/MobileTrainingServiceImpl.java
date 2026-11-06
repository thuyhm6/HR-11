package com.ait.mobile.training.service.impl;

import com.ait.edu.trainEducation.dto.EduCourseApplyCourseDto;
import com.ait.edu.trainEducation.dto.EduCourseApplyRowDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySearchDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySubmitDto;
import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.edu.trainEducation.service.EduCourseApplyService;
import com.ait.edu.trainEducation.service.EduTrainCalendarService;
import com.ait.exception.BusinessException;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.common.MobileMessages;
import com.ait.mobile.training.dto.MobileCourseApplyRequest;
import com.ait.mobile.training.dto.MobileCourseDto;
import com.ait.mobile.training.dto.MobileTrainingCalendarDto;
import com.ait.mobile.training.dto.MobileTrainingMakerDto;
import com.ait.mobile.training.service.MobileTrainingService;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

@Service
public class MobileTrainingServiceImpl implements MobileTrainingService {

    private static final Logger log = LoggerFactory.getLogger(MobileTrainingServiceImpl.class);

    @Autowired
    private EduCourseApplyService courseApplyService;

    @Autowired
    private EduTrainCalendarService calendarService;

    @Override
    public List<MobileCourseDto> getAvailableCourses() {
        Locale l = LocaleContextHolder.getLocale();
        try {
            return courseApplyService.getApplyCourses(new EduCourseApplySearchDto()).stream().filter(Objects::nonNull)
                    .map(c -> fromCourse(c, l)).toList();
        } catch (BusinessException e) {
            throw sneaky(e);
        }
    }

    @Override
    public List<MobileTrainingMakerDto> getMakers() {
        try {
            return courseApplyService.getDefaultMakers().stream().filter(Objects::nonNull)
                    .map(MobileTrainingMakerDto::from).toList();
        } catch (BusinessException e) {
            throw sneaky(e);
        }
    }

    @Override
    public int apply(MobileCourseApplyRequest req) {
        // Service dùng chung chỉ kiểm tra danh sách người duyệt không rỗng => chỉ cho chọn người duyệt mặc định
        Set<String> allowedMakers = getMakers().stream().map(MobileTrainingMakerDto::getPersonId)
                .collect(Collectors.toSet());
        if (!allowedMakers.containsAll(req.getMakerPersonIds())) {
            throw MobileException.rule("mobile.training.invalidMaker", "Người phê duyệt không hợp lệ");
        }
        EduCourseApplySubmitDto dto = new EduCourseApplySubmitDto();
        dto.setMakerPersonIds(req.getMakerPersonIds());
        dto.setCourses(req.getCourses().stream().map(c -> {
            EduCourseApplySubmitDto.Item item = new EduCourseApplySubmitDto.Item();
            item.setBasicNo(c.getBasicNo());
            item.setApplyTask(c.getApplyTask());
            return item;
        }).toList());
        try {
            // submit kiểm tra lại khóa còn hạn / được chỉ định / chưa đăng ký (không tin client)
            int count = courseApplyService.submit(dto);
            log.info("Mobile đăng ký {} khóa đào tạo basicNos={}", count,
                    req.getCourses().stream().map(MobileCourseApplyRequest.Course::getBasicNo).toList());
            return count;
        } catch (BusinessException e) {
            throw sneaky(e);
        }
    }

    @Override
    public List<MobileCourseDto> getMyApplies(String fromDate, String toDate) {
        Locale l = LocaleContextHolder.getLocale();
        EduCourseApplySearchDto search = new EduCourseApplySearchDto();
        search.setStartDate(fromDate);
        search.setEndDate(toDate);
        search.setAllApplicants(false); // chỉ đơn của người đăng nhập (#{adminID})
        try {
            return courseApplyService.getSituationRows(search).stream().filter(Objects::nonNull)
                    .map(r -> fromRow(r, l)).toList();
        } catch (BusinessException e) {
            throw sneaky(e);
        }
    }

    @Override
    public void cancel(String applyNo) {
        try {
            // manager = false: chỉ hủy được đơn của chính mình, chưa duyệt
            courseApplyService.cancel(applyNo, false);
            log.info("Mobile hủy đăng ký đào tạo applyNo={}", applyNo);
        } catch (BusinessException e) {
            throw sneaky(e);
        }
    }

    @Override
    public List<MobileTrainingCalendarDto> getCalendar(Integer year, Integer month) {
        Locale l = LocaleContextHolder.getLocale();
        try {
            return calendarService.getMonth(year, month).stream().filter(Objects::nonNull)
                    .map(i -> MobileTrainingCalendarDto.from(i, courseName(i.getCourseNameCode(), i.getPeriodTime(), l)))
                    .toList();
        } catch (BusinessException e) {
            throw sneaky(e);
        }
    }

    private static MobileCourseDto fromCourse(EduCourseApplyCourseDto c, Locale l) {
        MobileCourseDto dto = new MobileCourseDto();
        dto.setBasicNo(c.getBasicNo());
        dto.setPlanNo(c.getPlanNo());
        dto.setTrainTypeName(c.getTrainTypeCodeName());
        dto.setCourseName(courseName(c.getCourseNameCode(), c.getPeriodTime(), l));
        dto.setStartDate(c.getImpleStartDate());
        dto.setEndDate(c.getImpleEndDate());
        dto.setClassHour(classHour(c.getImpleClassHour(), c.getImpleClassUnit(), l));
        dto.setApplyEndDate(c.getApplyEndDate());
        dto.setApplyCount(c.getApplyCount());
        dto.setPlanCount(c.getPlanCount());
        return dto;
    }

    private static MobileCourseDto fromRow(EduCourseApplyRowDto r, Locale l) {
        MobileCourseDto dto = new MobileCourseDto();
        dto.setBasicNo(r.getBasicNo());
        dto.setPlanNo(r.getPlanNo());
        dto.setApplyNo(r.getApplyNo());
        dto.setTrainTypeName(r.getTrainTypeCodeName());
        dto.setCourseName(courseName(r.getCourseNameCode(), r.getPeriodTime(), l));
        dto.setStartDate(r.getImpleStartDate());
        dto.setEndDate(r.getImpleEndDate());
        dto.setClassHour(classHour(r.getImpleClassHour(), r.getImpleClassUnit(), l));
        dto.setApplyDate(r.getApplyDate());
        dto.setApplyTask(r.getApplyTask());
        dto.setApplyFlag(r.getApplyFlag());
        dto.setApplyFlagName(applyFlagName(r.getApplyFlag(), l));
        dto.setConfirmFlag(r.getConfirmFlag());
        dto.setConfirmFlagName(confirmFlagName(r.getConfirmFlag(), l));
        dto.setMakerName(r.getMakerLocalName());
        // Giống web (edu-maker-situation): hủy được khi chưa duyệt và phòng đào tạo chưa xác nhận
        dto.setCancelable("1".equals(r.getApplyFlag())
                && ("1".equals(r.getConfirmFlag()) || r.getConfirmFlag() == null));
        return dto;
    }

    /** "Tên khóa (Kỳ thứ n)" - giống courseWithPeriod ở web. */
    private static String courseName(String name, String period, Locale l) {
        if (period == null || period.isBlank()) {
            return name;
        }
        return (name == null ? "" : name) + " (" + MobileMessages.get("edu.planManager.QI.a", "Kỳ", l) + " "
                + MobileMessages.get("ar.alert.message.excelimport.title.di", "thứ", l) + " " + period + ")";
    }

    /** Đơn vị giờ học: 2 = tiếng, 1 = ngày, 0 = tháng (CLASS_UNITS ở web). */
    private static String classHour(String hour, String unit, Locale l) {
        if (hour == null || hour.isBlank()) {
            return null;
        }
        String u = switch (unit == null ? "" : unit) {
            case "2" -> MobileMessages.get("ar.viewsummaryparameteritem.title.hour", "Tiếng", l);
            case "1" -> MobileMessages.get("ar.viewsummaryparameteritem.title.day", "Ngày", l);
            case "0" -> MobileMessages.get("display.mutual.month", "Tháng", l);
            default -> "";
        };
        return (hour + " " + u).trim();
    }

    private static String applyFlagName(String flag, Locale l) {
        return switch (flag == null ? "" : flag) {
            case "1" -> MobileMessages.get("ess.trans.title.notAffirmed", "Chưa duyệt", l);
            case "2" -> MobileMessages.get("hr.viewTransactionTransViewList.title.PASS", "Đã duyệt", l);
            case "0" -> MobileMessages.get("hr.viewTransactionTransViewList.title.VOTE_DOWN", "Đã từ chối", l);
            default -> null;
        };
    }

    private static String confirmFlagName(String flag, Locale l) {
        return switch (flag == null ? "" : flag) {
            case "1" -> MobileMessages.get("main.home.message.unconfirm", "Chờ xác nhận", l);
            case "2" -> MobileMessages.get("ar.viewsummaryyiqueren", "Đã xác nhận", l);
            case "0" -> MobileMessages.get("hrm.contractInfo.VETO", "Từ chối", l);
            default -> null;
        };
    }

    /** BusinessException (checked) mang key i18n trong userMessage => MobileException để handler dịch theo ngôn ngữ app. */
    private static MobileException sneaky(BusinessException e) {
        log.warn("Mobile training business error code={} msg={}", e.getErrorCode(), e.getUserMessage());
        return new MobileException(com.ait.mobile.common.MobileErrorCode.BUSINESS_RULE, e.getUserMessage(),
                MobileMessages.get(e.getUserMessage(), "Dữ liệu không hợp lệ", Locale.forLanguageTag("vi-VN")));
    }
}
