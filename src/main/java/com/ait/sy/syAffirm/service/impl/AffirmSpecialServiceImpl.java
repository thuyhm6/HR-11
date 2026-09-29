package com.ait.sy.syAffirm.service.impl;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.AffirmSpecialDetailDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialSaveDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialTypeDto;
import com.ait.sy.syAffirm.mapper.AffirmSpecialMapper;
import com.ait.sy.syAffirm.service.AffirmSpecialService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Phê duyệt đặc biệt - chuyển từ AffirmSpecialSerImpl (dự án Hanwha_HTSV).
 * Khác bản gốc:
 * - Bản gốc gọi getItemDetail_special cho TỪNG (đối tượng x loại) -> N*M câu SQL; ở đây lấy toàn bộ người duyệt
 *   bằng 1 câu rồi gom nhóm theo đối tượng trong Java.
 * - Bản gốc xóa theo AFFIRM_OBJECT = chuỗi "'A','B'" (không khớp dòng nào khi thêm mới -> sinh trùng dữ liệu) và khi
 *   cập nhật 1 loại lại xóa mất toàn bộ loại khác của đối tượng; ở đây luôn xóa đúng từng cặp (đối tượng, loại) rồi mới thêm.
 */
@Service
public class AffirmSpecialServiceImpl implements AffirmSpecialService {
    private static final Logger log = LoggerFactory.getLogger(AffirmSpecialServiceImpl.class);

    /** Mã cha của các loại phê duyệt đặc biệt (bản gốc: PARENT_CODE_NO = 16413). */
    private static final String AFFIRM_TYPE_PARENT_CODE = "16413";

    @Autowired
    private AffirmSpecialMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<AffirmSpecialTypeDto> getTypeList() throws BusinessException {
        log.info("getTypeList - parentCodeNo={}", AFFIRM_TYPE_PARENT_CODE);
        try {
            return mapper.selectTypeList(AFFIRM_TYPE_PARENT_CODE);
        } catch (Exception e) {
            log.error("getTypeList failed", e);
            throw new BusinessException("AFFIRM_SPECIAL_LOAD_TYPE", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<AffirmSpecialDto> getList(String keyword) throws BusinessException {
        log.info("getList - keyword={}", keyword);
        try {
            List<AffirmSpecialDto> objects = mapper.selectObjectList(keyword == null ? null : keyword.trim());
            if (objects.isEmpty()) {
                return objects;
            }
            Map<String, List<AffirmSpecialDetailDto>> detailMap = mapper.selectDetailList(null, null).stream()
                    .filter(d -> d.getAffirmObject() != null)
                    .collect(Collectors.groupingBy(AffirmSpecialDetailDto::getAffirmObject));
            objects.forEach(o -> o.setDetails(detailMap.getOrDefault(o.getAffirmObject(), new ArrayList<>())));
            log.info("getList - found {} objects", objects.size());
            return objects;
        } catch (Exception e) {
            log.error("getList failed - keyword={}", keyword, e);
            throw new BusinessException("AFFIRM_SPECIAL_LOAD_LIST", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<AffirmSpecialDetailDto> getAffirmors(String affirmObject, String affirmTypeNo) throws BusinessException {
        log.info("getAffirmors - affirmObject={}, affirmTypeNo={}", affirmObject, affirmTypeNo);
        if (!StringUtils.hasText(affirmObject) || !StringUtils.hasText(affirmTypeNo)) {
            throw new BusinessException("AFFIRM_SPECIAL_INVALID", "vasl.msg.selectCell");
        }
        try {
            return mapper.selectDetailList(affirmObject, affirmTypeNo);
        } catch (Exception e) {
            log.error("getAffirmors failed - affirmObject={}, affirmTypeNo={}", affirmObject, affirmTypeNo, e);
            throw new BusinessException("AFFIRM_SPECIAL_LOAD_DETAIL", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int save(AffirmSpecialSaveDto dto) throws BusinessException {
        Set<String> types = distinctNonBlank(dto.getAffirmTypeNos());
        Set<String> objects = distinctNonBlank(dto.getDeptNos());
        objects.addAll(distinctNonBlank(dto.getPersonIds()));
        List<String> affirmors = new ArrayList<>(distinctNonBlank(dto.getAffirmorIds()));
        log.info("save - types={}, objects={}, affirmors={}", types, objects.size(), affirmors);

        if (types.isEmpty()) {
            throw new BusinessException("AFFIRM_SPECIAL_INVALID", "alert.message.sys.affirm.pleaseChooseAffirmType");
        }
        if (objects.isEmpty()) {
            throw new BusinessException("AFFIRM_SPECIAL_INVALID", "vasl.msg.chooseObject");
        }
        try {
            int cells = 0;
            for (String object : objects) {
                for (String type : types) {
                    mapper.deleteByObjectAndType(object, type);
                    for (int i = 0; i < affirmors.size(); i++) {
                        mapper.insertAffirmor(object, type, affirmors.get(i), i + 1);
                    }
                    cells++;
                }
            }
            log.info("save - updated {} cells", cells);
            return cells;
        } catch (Exception e) {
            log.error("save failed - types={}, objects={}", types, objects, e);
            throw new BusinessException("AFFIRM_SPECIAL_SAVE", "vasl.msg.saveFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int delete(String affirmObject, String affirmTypeNo) throws BusinessException {
        log.info("delete - affirmObject={}, affirmTypeNo={}", affirmObject, affirmTypeNo);
        try {
            int deleted = mapper.deleteByObjectAndType(affirmObject, affirmTypeNo);
            log.info("delete - deleted {} rows", deleted);
            return deleted;
        } catch (Exception e) {
            log.error("delete failed - affirmObject={}, affirmTypeNo={}", affirmObject, affirmTypeNo, e);
            throw new BusinessException("AFFIRM_SPECIAL_DELETE", "vasl.msg.deleteFail", e);
        }
    }

    /** Bỏ phần tử rỗng/trùng nhưng giữ nguyên thứ tự (thứ tự người duyệt = cấp duyệt). */
    private Set<String> distinctNonBlank(List<String> values) {
        Set<String> result = new LinkedHashSet<>();
        if (values != null) {
            values.stream().filter(StringUtils::hasText).map(String::trim).forEach(result::add);
        }
        return result;
    }
}
