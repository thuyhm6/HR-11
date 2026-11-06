-- =====================================================================
-- Mobile App (APP-HR) - các bảng phục vụ /mobile/api/** (package com.ait.mobile)
--   MB_REFRESH_TOKEN : refresh token (chỉ lưu SHA-256 hash), xoay vòng mỗi lần refresh
--   MB_DEVICE        : thiết bị đã đăng nhập + FCM token để gửi push notification
--   MB_NOTIFICATION  : thông báo gửi tới nhân viên (hiển thị trong app, Phase 4)
--   MB_APP_VERSION   : phiên bản app tối thiểu / mới nhất theo nền tảng (buộc cập nhật)
-- =====================================================================

CREATE SEQUENCE MB_REFRESH_TOKEN_SEQ START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE MB_NOTIFICATION_SEQ START WITH 1 INCREMENT BY 1 NOCACHE;

CREATE TABLE MB_REFRESH_TOKEN (
    TOKEN_NO       NUMBER(15)     NOT NULL,
    TOKEN_HASH     VARCHAR2(64)   NOT NULL,   -- SHA-256 (hex) của refresh token, không lưu token gốc
    USER_NAME      VARCHAR2(50)   NOT NULL,
    PERSON_ID      VARCHAR2(50)   NOT NULL,
    CPNY_ID        VARCHAR2(20),
    DEVICE_ID      VARCHAR2(100)  NOT NULL,
    EXPIRE_DATE    DATE           NOT NULL,
    REVOKED_YN     CHAR(1)        DEFAULT 'N' NOT NULL,
    REPLACED_BY    NUMBER(15),                -- TOKEN_NO của token mới khi xoay vòng
    CREATE_DATE    DATE           DEFAULT SYSDATE,
    CREATE_IP      VARCHAR2(50),
    REVOKED_DATE   DATE,
    CONSTRAINT PK_MB_REFRESH_TOKEN PRIMARY KEY (TOKEN_NO),
    CONSTRAINT UK_MB_REFRESH_TOKEN_HASH UNIQUE (TOKEN_HASH)
);
CREATE INDEX IDX_MB_REFRESH_TOKEN_P ON MB_REFRESH_TOKEN (PERSON_ID, DEVICE_ID, REVOKED_YN);

CREATE TABLE MB_DEVICE (
    DEVICE_ID        VARCHAR2(100)  NOT NULL,
    PERSON_ID        VARCHAR2(50)   NOT NULL,
    CPNY_ID          VARCHAR2(20),
    PLATFORM         VARCHAR2(20),             -- android / ios
    FCM_TOKEN        VARCHAR2(500),
    APP_VERSION      VARCHAR2(20),
    OS_VERSION       VARCHAR2(50),
    DEVICE_MODEL     VARCHAR2(100),
    ACTIVITY         NUMBER(1)      DEFAULT 1,  -- 0 = đã đăng xuất (không gửi push)
    LAST_LOGIN_DATE  DATE,
    LAST_LOGIN_IP    VARCHAR2(50),
    CREATE_DATE      DATE           DEFAULT SYSDATE,
    UPDATE_DATE      DATE           DEFAULT SYSDATE,
    CONSTRAINT PK_MB_DEVICE PRIMARY KEY (DEVICE_ID, PERSON_ID)
);
CREATE INDEX IDX_MB_DEVICE_P ON MB_DEVICE (PERSON_ID, ACTIVITY);

CREATE TABLE MB_NOTIFICATION (
    NOTI_NO      NUMBER(15)      NOT NULL,
    CPNY_ID      VARCHAR2(20),
    PERSON_ID    VARCHAR2(50)    NOT NULL,     -- người nhận
    NOTI_TYPE    VARCHAR2(30)    NOT NULL,     -- LEAVE_APPLY / LEAVE_RESULT / OT_APPLY / OT_RESULT / ...
    TITLE        VARCHAR2(200)   NOT NULL,
    BODY         VARCHAR2(1000),
    REF_TYPE     VARCHAR2(30),                 -- loại đối tượng liên quan (để app mở đúng màn hình)
    REF_ID       VARCHAR2(100),
    READ_YN      CHAR(1)         DEFAULT 'N' NOT NULL,
    READ_DATE    DATE,
    PUSH_YN      CHAR(1)         DEFAULT 'N' NOT NULL,  -- đã gửi push qua FCM chưa
    CREATE_DATE  DATE            DEFAULT SYSDATE,
    CREATED_BY   VARCHAR2(50),
    CONSTRAINT PK_MB_NOTIFICATION PRIMARY KEY (NOTI_NO)
);
CREATE INDEX IDX_MB_NOTIFICATION_P ON MB_NOTIFICATION (PERSON_ID, READ_YN, CREATE_DATE);

CREATE TABLE MB_APP_VERSION (
    PLATFORM         VARCHAR2(20)    NOT NULL,
    MIN_VERSION      VARCHAR2(20)    NOT NULL,  -- thấp hơn => bắt buộc cập nhật
    LATEST_VERSION   VARCHAR2(20)    NOT NULL,
    DOWNLOAD_URL     VARCHAR2(500),
    RELEASE_NOTE     VARCHAR2(2000),
    UPDATE_DATE      DATE            DEFAULT SYSDATE,
    UPDATED_BY       VARCHAR2(50),
    CONSTRAINT PK_MB_APP_VERSION PRIMARY KEY (PLATFORM)
);

INSERT INTO MB_APP_VERSION (PLATFORM, MIN_VERSION, LATEST_VERSION, DOWNLOAD_URL, RELEASE_NOTE)
VALUES ('android', '0.1.0', '0.1.0', NULL, 'Phiên bản đầu tiên');
COMMIT;
