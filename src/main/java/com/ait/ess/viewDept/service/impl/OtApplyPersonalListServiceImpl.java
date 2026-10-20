package com.ait.ess.viewDept.service.impl;

import com.ait.ess.viewDept.dto.OtApplyPersonalListDetailDto;
import com.ait.ess.viewDept.dto.OtApplyPersonalListDto;
import com.ait.ess.viewDept.mapper.OtApplyPersonalListMapper;
import com.ait.ess.viewDept.service.OtApplyPersonalListService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class OtApplyPersonalListServiceImpl implements OtApplyPersonalListService {

    private static final Logger log = LoggerFactory.getLogger(OtApplyPersonalListServiceImpl.class);

    private static final DateTimeFormatter DMY = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    /**
     * Nhóm cột được click -> danh sách AR_ITEM.ITEM_NO xem chi tiết. Giữ NGUYÊN giá trị thuộc tính
     * name="..." của từng link trong JSP cũ viewOtApplyPersonalList.jsp (Hanwha_HTSV). Đặt ở backend để
     * client không truyền ITEM_NO tùy ý (bản cũ nối thẳng chuỗi vào SQL bằng $ITEM_NO$).
     */
    private static final Map<String, List<String>> OT_TYPE_ITEMS = Map.of(
            "WEEKDAY",  List.of("90000295", "90000296", "90000297"),
            "WEEKEND",  List.of("90000298", "90000299"),
            "HOLIDAY",  List.of("90000300", "90000301"),
            "MEAL",     List.of("80000237", "14013804", "218126", "14013805", "14013803"),
            "NIGHT",    List.of("14013783", "14015953", "218253"),
            "SATURDAY", List.of("278599", "278598"));

    @Autowired
    private OtApplyPersonalListMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<OtApplyPersonalListDto> getSummaryList(OtApplyPersonalListDto params) {
        // Giống trang cũ: không chọn ngày thì mặc định từ ngày 1 tháng hiện tại đến hôm nay
        LocalDate today = LocalDate.now();
        if (isBlank(params.getStartDate())) {
            params.setStartDate(today.withDayOfMonth(1).format(DMY));
        }
        if (isBlank(params.getEndDate())) {
            params.setEndDate(today.format(DMY));
        }
        log.info("Lấy tình hình tăng ca nhân viên: startDate={}, endDate={}, keyword={}, empTypeCode={}, shiftNo={}",
                params.getStartDate(), params.getEndDate(), params.getKeyword(), params.getEmpTypeCode(), params.getShiftNo());
        try {
            return mapper.selectSummaryList(params);
        } catch (Exception e) {
            log.error("Lỗi khi lấy tình hình tăng ca nhân viên: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<OtApplyPersonalListDetailDto> getDetailList(OtApplyPersonalListDetailDto params) {
        List<String> itemNos = params.getOtType() == null ? null : OT_TYPE_ITEMS.get(params.getOtType().toUpperCase());
        if (itemNos == null || isBlank(params.getPersonId())) {
            log.warn("Tham số chi tiết tăng ca không hợp lệ: personId={}, otType={}", params.getPersonId(), params.getOtType());
            return Collections.emptyList();
        }
        params.setItemNos(itemNos);
        log.info("Lấy chi tiết tăng ca: personId={}, otType={}, startDate={}, endDate={}",
                params.getPersonId(), params.getOtType(), params.getStartDate(), params.getEndDate());
        try {
            return mapper.selectDetailList(params);
        } catch (Exception e) {
            log.error("Lỗi khi lấy chi tiết tăng ca (personId={}, otType={}): {}",
                    params.getPersonId(), params.getOtType(), e.getMessage(), e);
            throw e;
        }
    }

    private static boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }
}
