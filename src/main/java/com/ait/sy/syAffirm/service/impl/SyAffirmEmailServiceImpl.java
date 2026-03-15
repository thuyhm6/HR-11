package com.ait.sy.syAffirm.service.impl;

import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.mapper.SyAffirmEmailMapper;
import com.ait.sy.syAffirm.service.SyAffirmEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SyAffirmEmailServiceImpl implements SyAffirmEmailService {

    @Autowired
    private SyAffirmEmailMapper mapper;

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
}
