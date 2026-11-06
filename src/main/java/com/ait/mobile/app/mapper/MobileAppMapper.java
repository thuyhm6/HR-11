package com.ait.mobile.app.mapper;

import com.ait.mobile.app.dto.MobileAppVersionDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface MobileAppMapper {

    MobileAppVersionDto selectAppVersion(@Param("platform") String platform);
}
