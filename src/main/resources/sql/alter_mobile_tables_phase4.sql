-- =====================================================================
-- Mobile App (APP-HR) - Phase 4: phê duyệt trên app + thông báo / push
-- Chạy SAU create_mobile_tables.sql.
--   MB_DEVICE.LANG            : ngôn ngữ app của thiết bị (vi/en/ko/zh) - để soạn nội dung thông báo
--   MB_NOTIFICATION.REF_EXTRA : thông tin phụ để app mở đúng màn hình (vd. APPLY_TYPE của đơn cần duyệt)
--   MB_NOTIFICATION.DEDUP_KEY : khóa chống gửi trùng (loại + số đơn + cấp duyệt) - unique theo người nhận
-- =====================================================================

ALTER TABLE MB_DEVICE ADD (LANG VARCHAR2(5) DEFAULT 'vi');

ALTER TABLE MB_NOTIFICATION ADD (
    REF_EXTRA  VARCHAR2(100),
    DEDUP_KEY  VARCHAR2(200)
);

CREATE UNIQUE INDEX UK_MB_NOTIFICATION_DEDUP ON MB_NOTIFICATION (PERSON_ID, DEDUP_KEY);

-- Quét thông báo: tìm nhanh dòng duyệt đang hoạt động / đơn theo người
CREATE INDEX IDX_MB_DEVICE_TOKEN ON MB_DEVICE (PERSON_ID, ACTIVITY, FCM_TOKEN);
