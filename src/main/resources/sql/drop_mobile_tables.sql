-- =====================================================================
-- Gỡ toàn bộ bảng Mobile App (APP-HR) - dùng khi cần làm lại từ đầu sau khi chạy thử.
-- KHÔNG ảnh hưởng bảng nghiệp vụ (đơn nghỉ / OT / duyệt tạo khi test vẫn còn - xem docs/HUONG-DAN-CHAY-THU.md).
-- =====================================================================
DROP TABLE MB_NOTIFICATION PURGE;
DROP TABLE MB_REFRESH_TOKEN PURGE;
DROP TABLE MB_DEVICE PURGE;
DROP TABLE MB_APP_VERSION PURGE;
DROP SEQUENCE MB_NOTIFICATION_SEQ;
DROP SEQUENCE MB_REFRESH_TOKEN_SEQ;
