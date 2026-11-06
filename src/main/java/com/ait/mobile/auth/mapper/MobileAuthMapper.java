package com.ait.mobile.auth.mapper;

import com.ait.mobile.auth.dto.MobileDeviceDto;
import com.ait.mobile.auth.dto.MobileRefreshTokenDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/** MB_REFRESH_TOKEN / MB_DEVICE - xem resources/sql/create_mobile_tables.sql */
@Mapper
public interface MobileAuthMapper {

    Long selectNextRefreshTokenNo();

    int insertRefreshToken(MobileRefreshTokenDto dto);

    MobileRefreshTokenDto selectRefreshTokenByHash(@Param("tokenHash") String tokenHash);

    /** Thu hồi 1 token; {@code replacedBy} = token mới khi xoay vòng (null khi đăng xuất). */
    int revokeRefreshToken(@Param("tokenNo") Long tokenNo, @Param("replacedBy") Long replacedBy);

    /** Ghi nhận token mới đã thay thế token cũ (truy vết xoay vòng). */
    int updateReplacedBy(@Param("tokenNo") Long tokenNo, @Param("replacedBy") Long replacedBy);

    /** Thu hồi mọi token còn hiệu lực của 1 người trên 1 thiết bị. */
    int revokeTokensOfDevice(@Param("personId") String personId, @Param("deviceId") String deviceId);

    /** Thu hồi mọi token của 1 người, trừ thiết bị {@code exceptDeviceId} (có thể null). */
    int revokeTokensOfPerson(@Param("personId") String personId, @Param("exceptDeviceId") String exceptDeviceId);

    int mergeDevice(MobileDeviceDto dto);

    int updateDeviceFcmToken(@Param("personId") String personId, @Param("deviceId") String deviceId,
            @Param("fcmToken") String fcmToken);

    /** Cập nhật ngôn ngữ app của thiết bị (mỗi lần refresh token). */
    int updateDeviceLang(@Param("personId") String personId, @Param("deviceId") String deviceId,
            @Param("deviceLang") String deviceLang);

    /** Đăng xuất: ngừng gửi push tới thiết bị. */
    int deactivateDevice(@Param("personId") String personId, @Param("deviceId") String deviceId);
}
