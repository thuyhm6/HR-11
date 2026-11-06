package com.ait.mobile.auth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MobileLoginRequest {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    /** Mã thiết bị do app tự sinh (UUID) và lưu cố định trên máy. */
    @NotBlank
    @Size(max = 100)
    private String deviceId;

    private String platform;     // android / ios
    private String appVersion;
    private String osVersion;
    private String deviceModel;
}
