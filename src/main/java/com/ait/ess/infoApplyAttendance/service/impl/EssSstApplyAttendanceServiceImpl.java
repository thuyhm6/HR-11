package com.ait.ess.infoApplyAttendance.service.impl;

import com.ait.ar.attendanceMintenance.mapper.EssLeaveApplyMapper;
import com.ait.ar.attendanceMintenance.service.EssLeaveApplyService;
import com.ait.ess.empinfo.service.EssPersonalInfoService;
import com.ait.ess.infoApplyAttendance.mapper.EssAttendancePersonalInfoMapper;
import com.ait.ess.infoApplyAttendance.service.EssSstApplyAttendanceService;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.mapper.SyAffirmEmailMapper;
import com.ait.util.I18nUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Port các kiểm tra của viewSSTApplyAttendance.jsp / InfoApplyLeaveCtroller.addLeaveApplySST bản gốc,
 * phần ghi đơn + tuyến duyệt dùng lại EssLeaveApplyService.saveLeaveApply đã có của dự án mới.
 */
@Service
public class EssSstApplyAttendanceServiceImpl implements EssSstApplyAttendanceService {

    private static final Logger log = LoggerFactory.getLogger(EssSstApplyAttendanceServiceImpl.class);
    private static final String LEAVE_TYPE_NO = "21";
    private static final String FILE_APPLY_TYPE = "LEAVE_APPLY";
    /** SEXCODE nữ / nam (2 bộ mã cũ - mới) - đúng giá trị so sánh bản gốc. */
    private static final Set<String> FEMALE_CODES = Set.of("1325", "14013823");
    private static final Set<String> MALE_CODES = Set.of("1326", "14013822");

    @Autowired
    private EssAttendancePersonalInfoMapper personalInfoMapper;

    @Autowired
    private EssLeaveApplyService leaveApplyService;

    @Autowired
    private EssLeaveApplyMapper leaveApplyMapper;

    @Autowired
    private SyAffirmEmailMapper affirmEmailMapper;

    @Autowired
    private EssPersonalInfoService personalInfoService;

    @Override
    public String checkLeaveType(String personId, String applyType) {
        String type = safe(applyType);
        if (type.isEmpty() || safe(personId).isEmpty()) {
            return null;
        }
        try {
            String sexCode = safe(personalInfoMapper.selectSexCode(personId));
            boolean female = FEMALE_CODES.contains(sexCode);
            boolean male = MALE_CODES.contains(sexCode);
            switch (type) {
                case "16415": // nghỉ cho con bú
                    return female ? null : I18nUtil.getMessage("alert.message.BURUJIAJINXIANNVSHISHENQING.b");
                case "482": // khám thai
                    return female ? null : I18nUtil.getMessage("alert.message.CHANQIANJIANCHAJIAJINXIANNVSHISHENQING.b");
                case "27": // thai sản
                    return female ? null : I18nUtil.getMessage("alert.message.CHANJIAJINXIANNVSHISHENQING.b");
                case "28": // nam nghỉ khi vợ sinh
                    return male ? null : I18nUtil.getMessage("alert.message.PEICHANJIAJINXIANNANSHISHENQING.b");
                default:
                    return null;
            }
        } catch (Exception e) {
            log.error("checkLeaveType error personId={}, type={}: {}", personId, type, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(Map<String, Object> params, List<MultipartFile> files) throws Exception {
        String personId = safe(params.get("personId"));
        String leaveTypeCode = safe(params.get("leaveTypeCode"));
        try {
            String typeMsg = checkLeaveType(personId, leaveTypeCode);
            if (typeMsg != null) {
                throw new IllegalArgumentException(typeMsg);
            }
            // Bản gốc: chưa thiết lập người duyệt thì không cho xin phép
            Map<String, Object> affirmorParams = new HashMap<>();
            affirmorParams.put("applyTypeNo", LEAVE_TYPE_NO);
            affirmorParams.put("personId", personId);
            affirmorParams.put("applyTypeCode", leaveTypeCode);
            affirmorParams.put("applyLength", safe(params.get("applyLength")));
            affirmEmailMapper.getAffirmorList(affirmorParams);
            @SuppressWarnings("unchecked")
            List<SyAffirmEmailDto> affirmors = (List<SyAffirmEmailDto>) affirmorParams.get("resultList");
            if (affirmors == null || affirmors.stream().noneMatch(a -> a != null)) {
                throw new IllegalArgumentException(I18nUtil.getMessage("alert.message.pleaseFirstSetRuler.b"));
            }
            // -3: không đủ phép năm (saveLeaveApply chỉ chặn >0 / -1 / -2)
            Integer clash = leaveApplyMapper.selectLeaveClash(personId, safe(params.get("leaveFromTime")), safe(params.get("leaveToTime")));
            if (clash != null && clash == -3) {
                throw new IllegalArgumentException(I18nUtil.getMessage("alert.message.ess.infoApply.noEnoughAnnualCannotApplyAnnualLeave"));
            }

            params.put("applyNo", "");
            leaveApplyService.saveLeaveApply(params);
            String applyNo = safe(params.get("applyNo"));

            if (files != null) {
                for (MultipartFile file : files) {
                    if (file != null && !file.isEmpty()) {
                        personalInfoService.saveApplyFile(file, applyNo, FILE_APPLY_TYPE);
                    }
                }
            }
            return applyNo;
        } catch (IllegalArgumentException | IllegalStateException e) {
            log.warn("save SST leave apply validation personId={}: {}", personId, e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("save SST leave apply error personId={}: {}", personId, e.getMessage(), e);
            throw e;
        }
    }

    private String safe(Object value) {
        return value == null ? "" : value.toString().trim();
    }
}
