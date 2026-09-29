package com.ait.ess.viewDept.mapper;

import com.ait.ess.viewDept.dto.UseOfAnnualLeaveDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UseOfAnnualLeaveMapper {
    List<UseOfAnnualLeaveDto> selectList(UseOfAnnualLeaveDto params);
}
