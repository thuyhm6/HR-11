package com.ait.hrm.empinfo.service;

import com.ait.exception.BusinessException;
import com.ait.hrm.empinfo.dto.HrExpInsideDto;
import java.util.List;

public interface HrExpInsideService {

    List<HrExpInsideDto> searchEmployees(String keyword);

    HrExpInsideDto getEmployeeInfo(String personId);

    List<HrExpInsideDto> getDecisionList(String personId);

    HrExpInsideDto getDecisionBySeq(Long seq);

    /** Giá trị mặc định cho quyết định mới = thông tin hiện tại của nhân viên ở HR_EMPLOYEE. */
    HrExpInsideDto getCurrentHrInfo(String personId);

    /** Thêm/sửa quyết định rồi chạy PKG_RECRUIT_MANAGE.PR_EXPERIENCE_EXECUTE_SINGLE. @return SEQ đã lưu */
    Long saveDecision(HrExpInsideDto dto) throws BusinessException;

    void deleteDecision(Long seq) throws BusinessException;
}
