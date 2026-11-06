package com.ait.mobile.security;

/** Tên attribute riêng của mobile đặt trong {@link MobileHttpSession}. */
public final class MobileSessionKeys {

    /** Mã thiết bị (claim "did" của JWT). */
    public static final String DEVICE_ID = "mobileDeviceId";

    private MobileSessionKeys() {
    }
}
