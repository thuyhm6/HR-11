package com.ait.sy.syAffirm.service.impl;

import com.ait.hrm.approve.mapper.HrmApproveMapper;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.mapper.SyAffirmEmailMapper;
import com.ait.sy.syAffirm.service.SyAffirmEmailService;
import com.ait.util.I18nUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SyAffirmEmailServiceImpl implements SyAffirmEmailService {

    private static final Logger log = LoggerFactory.getLogger(SyAffirmEmailServiceImpl.class);

    @Autowired
    private SyAffirmEmailMapper mapper;

    @Autowired
    private HrmApproveMapper hrmApproveMapper;

    @Override
    public List<SyAffirmEmailDto> getList(SyAffirmEmailDto dto) {
        return mapper.selectList(dto);
    }

    @Override
    public SyAffirmEmailDto getById(String seq) {
        return mapper.selectById(seq);
    }

    @Override
    @Transactional
    public void save(SyAffirmEmailDto dto) {
        if (dto.getSeq() == null || dto.getSeq().isEmpty() || "0".equals(dto.getSeq())) {
            mapper.insert(dto);
        } else {
            mapper.update(dto);
        }
    }

    @Override
    @Transactional
    public void delete(String seq) {
        mapper.delete(seq);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<SyAffirmEmailDto> findAffirmorList(String applyTypeNo, String personId, String applyTypeCode,
            String applyLength) {

        // 1. Chuẩn bị tham số truyền vào Mapper
        Map<String, Object> params = new HashMap<>();
        params.put("applyTypeNo", applyTypeNo);
        params.put("personId", personId);
        params.put("applyTypeCode", applyTypeCode);
        params.put("applyLength", applyLength);
        params.put("lang", "vi");

        // 2. Thực thi gọi hàm Oracle qua MyBatis.
        // Sau khi chạy xong, MyBatis tự động đẩy kết quả vào key "resultList" trong
        // params.
        mapper.getAffirmorList(params);

        // 3. Ép kiểu an toàn và lấy danh sách kết quả từ tham số OUT
        // các trường lấy ra lần lượt là empId, localName, positionNo, positionName, deptName, postionname, affirmorId, affirmLevel
        return (List<SyAffirmEmailDto>) params.get("resultList");
    }

    @Override
    public List<SyAffirmEmailDto> getApprovalEmailList(SyAffirmEmailDto dto) {
        try {
            List<SyAffirmEmailDto> result = mapper.selectApprovalEmailList(dto);
            return result != null ? result : Collections.emptyList();
        } catch (Exception e) {
            log.error("Failed to load approval email list", e);
            return Collections.emptyList();
        }
    }

    @Override
    public List<SyAffirmEmailDto> getApprovaledEmailList(SyAffirmEmailDto dto) {
        try {
            List<SyAffirmEmailDto> result = mapper.selectApprovaledEmailList(dto);
            return result != null ? result : Collections.emptyList();
        } catch (Exception e) {
            log.error("Failed to load approved email list", e);
            return Collections.emptyList();
        }
    }

    @Override
    public Map<String, Integer> getPendingApprovalCounts() {
        Map<String, Integer> counts = new HashMap<>();
        try {
            SyAffirmEmailDto dto = new SyAffirmEmailDto();
            counts.put("total", mapper.countPendingApprovals(dto));

            dto.setApplyTypeCodeSearch("21");
            counts.put("leave", mapper.countPendingApprovals(dto));

            dto.setApplyTypeCodeSearch("31");
            counts.put("ot", mapper.countPendingApprovals(dto));

            dto.setApplyTypeCodeSearch("218197");
            counts.put("anomaly", mapper.countPendingApprovals(dto));
        } catch (Exception e) {
            log.error("Failed to get pending approval counts", e);
            counts.put("total", 0);
            counts.put("leave", 0);
            counts.put("ot", 0);
            counts.put("anomaly", 0);
        }
        return counts;
    }

    @Override
    public Map<String, Integer> getHrmPendingCounts() {
        Map<String, Integer> counts = new HashMap<>();
        try {
            int leave = mapper.countHrmPendingLeave();
            int anomalous = mapper.countHrmPendingAnomalous();
            int personalChange = hrmApproveMapper.countPendingPersonalChanges();
            counts.put("leave", leave);
            counts.put("anomalous", anomalous);
            counts.put("personalChange", personalChange);
            counts.put("total", leave + anomalous + personalChange);
        } catch (Exception e) {
            log.error("Failed to get HRM pending counts", e);
            counts.put("leave", 0);
            counts.put("anomalous", 0);
            counts.put("personalChange", 0);
            counts.put("total", 0);
        }
        return counts;
    }

    @Override
    public List<SyAffirmEmailDto> getNoticeedEmailList(SyAffirmEmailDto dto) {
        try {
            List<SyAffirmEmailDto> result = mapper.selectNoticeedEmailList(dto);
            return result != null ? result : Collections.emptyList();
        } catch (Exception e) {
            log.error("Failed to load noticeed email list", e);
            return Collections.emptyList();
        }
    }

    @Override
    @Transactional
    public String executeAffirm(List<Map<String, Object>> items) {
        StringBuilder errors = new StringBuilder();
        for (Map<String, Object> item : items) {
            try {
                item.put("message", "");
                mapper.callAffirmExecute(item);
                String msg = (String) item.get("message");
                if (msg != null && !msg.isEmpty() && !"OK".equalsIgnoreCase(msg)) {
                    errors.append(item.get("applyNo")).append(": ").append(msg).append("\n");
                }
            } catch (Exception e) {
                log.error("Failed to execute affirm for applyNo={}", item.get("applyNo"), e);
                errors.append(item.get("applyNo")).append(": ").append(e.getMessage()).append("\n");
            }
        }
        return errors.toString();
    }

    @Override
    @Transactional
    public String executeAffirmForCurrentUser(List<Map<String, Object>> items) {
        StringBuilder errors = new StringBuilder();
        List<Map<String, Object>> trusted = new java.util.ArrayList<>();
        for (Map<String, Object> item : items) {
            String applyNo = item.get("applyNo") == null ? "" : String.valueOf(item.get("applyNo")).trim();
            String applyType = item.get("applyType") == null ? "" : String.valueOf(item.get("applyType")).trim();
            String flag = item.get("flag") == null ? "" : String.valueOf(item.get("flag")).trim();
            if (applyNo.isEmpty() || applyType.isEmpty() || !("1".equals(flag) || "2".equals(flag))) {
                errors.append(applyNo).append(": ").append(I18nUtil.getMessage("mobile.error.invalidRequest")).append("\n");
                continue;
            }
            List<SyAffirmEmailDto> rows;
            try {
                rows = mapper.selectMyPendingAffirmRows(applyNo, applyType);
            } catch (Exception e) {
                log.error("Failed to load pending affirm row applyNo={}", applyNo, e);
                errors.append(applyNo).append(": ").append(e.getMessage()).append("\n");
                continue;
            }
            if (rows == null || rows.isEmpty()) {
                log.warn("Từ chối duyệt: đơn không chờ người đăng nhập duyệt applyNo={} applyType={}", applyNo, applyType);
                errors.append(applyNo).append(": ").append(I18nUtil.getMessage("mobile.approval.notPending")).append("\n");
                continue;
            }
            // Ưu tiên đúng cấp client đang xem (nếu chính người này có nhiều cấp trong tuyến), mặc định cấp thấp nhất
            String clientLevel = item.get("affirmLevel") == null ? null : String.valueOf(item.get("affirmLevel"));
            SyAffirmEmailDto row = rows.stream().filter(r -> java.util.Objects.equals(r.getAffirmLevel(), clientLevel))
                    .findFirst().orElse(rows.get(0));
            Map<String, Object> params = new java.util.HashMap<>();
            params.put("applyNo", row.getApplyNo());
            params.put("applyType", row.getApplyType());
            params.put("applyFlag", row.getApplyFlag());
            params.put("affirmLevel", row.getAffirmLevel());
            params.put("flag", Integer.valueOf(flag));
            params.put("affirmContent", item.get("affirmContent") == null ? "" : String.valueOf(item.get("affirmContent")));
            trusted.add(params);
        }
        if (!trusted.isEmpty()) {
            errors.append(executeAffirm(trusted));
        }
        return errors.toString();
    }
}
