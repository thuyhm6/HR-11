package com.ait.mobile.auth.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MobileRefreshRequest {

    @NotBlank
    private String refreshToken;

    @NotBlank
    private String deviceId;
}
