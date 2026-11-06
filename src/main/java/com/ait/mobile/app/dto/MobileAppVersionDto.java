package com.ait.mobile.app.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Bản ghi MB_APP_VERSION. */
@Data
@NoArgsConstructor
public class MobileAppVersionDto {

    private String platform;
    private String minVersion;
    private String latestVersion;
    private String downloadUrl;
    private String releaseNote;
}
