package com.ait.mobile.auth.dto;

import java.time.LocalDateTime;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Bản ghi MB_REFRESH_TOKEN. Dùng tên companyId/clientIp (không dùng cpnyId/adminIP) để
 *  LanguageParameterInterceptor không ghi đè - lúc login/refresh chưa có user trong session. */
@Data
@NoArgsConstructor
public class MobileRefreshTokenDto {

    private Long tokenNo;
    private String tokenHash;
    private String userName;
    private String personId;
    private String companyId;
    private String deviceId;
    private LocalDateTime expireDate;
    private String revokedYn;
    private Long replacedBy;
    private String clientIp;
}
