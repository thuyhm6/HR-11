package com.ait.mobile.auth.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MobileTokenResponse {

    private String tokenType = "Bearer";
    private String accessToken;
    /** Số giây access token còn hiệu lực. */
    private long expiresIn;
    private String refreshToken;
    private boolean requirePasswordChange;
    private MobileUserDto user;
}
