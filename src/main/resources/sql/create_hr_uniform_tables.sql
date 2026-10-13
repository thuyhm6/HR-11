-- =====================================================================
-- Quản lý đổi đồng phục nhân viên (module hrm.uniform)
--   HR_UNIFORM_ITEM          : danh mục đồng phục (Quần đen, Áo xanh, ...) = các cột nhóm trong file Excel
--   HR_UNIFORM_CHANGE        : 1 lần đổi đồng phục của 1 nhân viên (ngày đổi, lý do)
--   HR_UNIFORM_CHANGE_DETAIL : size / số lượng từng loại đồng phục trong lần đổi
-- Quy tắc: mỗi nhân viên chỉ được đổi đồng phục 6 tháng / 1 lần (kiểm tra ở HrUniformServiceImpl).
-- =====================================================================

CREATE SEQUENCE HR_UNIFORM_ITEM_SEQ START WITH 1 INCREMENT BY 1 NOCACHE;
CREATE SEQUENCE HR_UNIFORM_CHANGE_SEQ START WITH 1 INCREMENT BY 1 NOCACHE;

CREATE TABLE HR_UNIFORM_ITEM (
    ITEM_NO      NUMBER(10)      NOT NULL,
    CPNY_ID      VARCHAR2(20)    NOT NULL,
    ITEM_NAME    VARCHAR2(200)   NOT NULL,   -- trùng với tiêu đề cột nhóm trong file Excel upload
    HAS_SIZE     CHAR(1)         DEFAULT 'Y',
    HAS_QUANTITY CHAR(1)         DEFAULT 'Y',
    ORDERNO      NUMBER(5)       DEFAULT 0,
    REMARK       VARCHAR2(500),
    ACTIVITY     NUMBER(1)       DEFAULT 1,
    CREATE_DATE  DATE            DEFAULT SYSDATE,
    CREATED_BY   VARCHAR2(50),
    UPDATE_DATE  DATE            DEFAULT SYSDATE,
    UPDATED_BY   VARCHAR2(50),
    CONSTRAINT PK_HR_UNIFORM_ITEM PRIMARY KEY (ITEM_NO)
);

CREATE TABLE HR_UNIFORM_CHANGE (
    CHANGE_NO    NUMBER(12)      NOT NULL,
    CPNY_ID      VARCHAR2(20)    NOT NULL,
    PERSON_ID    VARCHAR2(50)    NOT NULL,
    CHANGE_DATE  DATE            NOT NULL,
    REASON       VARCHAR2(500),
    REMARK       VARCHAR2(1000),
    ACTIVITY     NUMBER(1)       DEFAULT 1,
    CREATE_DATE  DATE            DEFAULT SYSDATE,
    CREATED_BY   VARCHAR2(50),
    CREATE_IP    VARCHAR2(50),
    UPDATE_DATE  DATE            DEFAULT SYSDATE,
    UPDATED_BY   VARCHAR2(50),
    UPDATE_IP    VARCHAR2(50),
    CONSTRAINT PK_HR_UNIFORM_CHANGE PRIMARY KEY (CHANGE_NO)
);
CREATE INDEX IDX_HR_UNIFORM_CHANGE_P ON HR_UNIFORM_CHANGE (CPNY_ID, PERSON_ID, CHANGE_DATE);
CREATE INDEX IDX_HR_UNIFORM_CHANGE_D ON HR_UNIFORM_CHANGE (CPNY_ID, CHANGE_DATE);

CREATE TABLE HR_UNIFORM_CHANGE_DETAIL (
    CHANGE_NO    NUMBER(12)      NOT NULL,
    ITEM_NO      NUMBER(10)      NOT NULL,
    ITEM_SIZE    VARCHAR2(30),
    QUANTITY     NUMBER(5),
    CONSTRAINT PK_HR_UNIFORM_CHANGE_DETAIL PRIMARY KEY (CHANGE_NO, ITEM_NO),
    CONSTRAINT FK_HR_UNIFORM_CD_CHANGE FOREIGN KEY (CHANGE_NO) REFERENCES HR_UNIFORM_CHANGE (CHANGE_NO),
    CONSTRAINT FK_HR_UNIFORM_CD_ITEM   FOREIGN KEY (ITEM_NO)   REFERENCES HR_UNIFORM_ITEM (ITEM_NO)
);

-- ---------------------------------------------------------------------
-- Dữ liệu danh mục đồng phục ban đầu (theo file Excel mẫu). Nhập &CPNY_ID cho đúng công ty.
-- Mũ chỉ có cột Size trong file mẫu => HAS_QUANTITY = 'N' (số lượng mặc định 1).
-- ---------------------------------------------------------------------

INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Quần đen',       'Y', 'Y', 1,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Áo xanh',        'Y', 'Y', 2,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Áo kho cộc',     'Y', 'Y', 3,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Áo kho dài',     'Y', 'Y', 4,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Mũ',             'Y', 'N', 5,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Dép',            'Y', 'Y', 6,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Ủng VCL',        'Y', 'Y', 7,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Jum VCL',        'Y', 'Y', 8,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Giày mõm sắt',   'Y', 'Y', 9,  'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Chân váy bầu',   'Y', 'Y', 10, 'admin', 'admin');
INSERT INTO HR_UNIFORM_ITEM (ITEM_NO, CPNY_ID, ITEM_NAME, HAS_SIZE, HAS_QUANTITY, ORDERNO, CREATED_BY, UPDATED_BY) VALUES (HR_UNIFORM_ITEM_SEQ.NEXTVAL, '&CPNY_ID', 'Áo khoác kho',   'Y', 'Y', 11, 'admin', 'admin');
COMMIT;

-- ---------------------------------------------------------------------
-- Menu: "Quản lý đồng phục" > "Đổi đồng phục nhân viên", "Danh mục đồng phục"
-- MENU_NO lấy từ SY_GLOBAL_NO_SEQ (giống SyMenuServiceImpl.save). Nhập &PARENT_MENU_NO thành menu cha
-- mong muốn (vd. menu "Quản lý nhân sự"), DEPTH = depth menu cha + 1.
-- Có thể tạo bằng giao diện Quản lý menu thay cho đoạn script này - URL menu xem bên dưới.
-- ---------------------------------------------------------------------
DECLARE
    v_group  VARCHAR2(20);
    v_change VARCHAR2(20);
    v_item   VARCHAR2(20);
    v_parent VARCHAR2(20) := '&PARENT_MENU_NO';
    v_depth  NUMBER;

    PROCEDURE add_name(p_no VARCHAR2, p_vi VARCHAR2, p_en VARCHAR2, p_ko VARCHAR2, p_zh VARCHAR2) IS
    BEGIN
        INSERT INTO SY_GLOBAL_NAME (SEQ, NO, LANGUAGE, CONTENT, CREATE_DATE, CREATED_BY, UPDATE_DATE, UPDATED_BY, ACTIVITY, ORDERNO)
        VALUES (SY_GLOBAL_SEQ.NEXTVAL, p_no, 'vi', p_vi, SYSDATE, 'admin', SYSDATE, 'admin', 1, 0);
        INSERT INTO SY_GLOBAL_NAME (SEQ, NO, LANGUAGE, CONTENT, CREATE_DATE, CREATED_BY, UPDATE_DATE, UPDATED_BY, ACTIVITY, ORDERNO)
        VALUES (SY_GLOBAL_SEQ.NEXTVAL, p_no, 'en', p_en, SYSDATE, 'admin', SYSDATE, 'admin', 1, 0);
        INSERT INTO SY_GLOBAL_NAME (SEQ, NO, LANGUAGE, CONTENT, CREATE_DATE, CREATED_BY, UPDATE_DATE, UPDATED_BY, ACTIVITY, ORDERNO)
        VALUES (SY_GLOBAL_SEQ.NEXTVAL, p_no, 'ko', p_ko, SYSDATE, 'admin', SYSDATE, 'admin', 1, 0);
        INSERT INTO SY_GLOBAL_NAME (SEQ, NO, LANGUAGE, CONTENT, CREATE_DATE, CREATED_BY, UPDATE_DATE, UPDATED_BY, ACTIVITY, ORDERNO)
        VALUES (SY_GLOBAL_SEQ.NEXTVAL, p_no, 'zh', p_zh, SYSDATE, 'admin', SYSDATE, 'admin', 1, 0);
    END;
BEGIN
    SELECT NVL(MAX(DEPTH), 0) INTO v_depth FROM SY_MENU WHERE MENU_NO = v_parent;
    SELECT SY_GLOBAL_NO_SEQ.NEXTVAL INTO v_group  FROM DUAL;
    SELECT SY_GLOBAL_NO_SEQ.NEXTVAL INTO v_change FROM DUAL;
    SELECT SY_GLOBAL_NO_SEQ.NEXTVAL INTO v_item   FROM DUAL;

    INSERT INTO SY_MENU (MENU_NO, MENU_PARENT_NO, MENU_CODE, MENU_IMG, DEPTH, MENU_URL, CREATE_DATE, CREATED_BY, UPDATE_DATE, UPDATED_BY, ORDERNO, ACTIVITY)
    VALUES (v_group, v_parent, 'HR_UNIFORM', 'bx bx-closet', v_depth + 1, NULL, SYSDATE, 'admin', SYSDATE, 'admin', 90, 1);
    INSERT INTO SY_MENU (MENU_NO, MENU_PARENT_NO, MENU_CODE, MENU_IMG, DEPTH, MENU_URL, CREATE_DATE, CREATED_BY, UPDATE_DATE, UPDATED_BY, ORDERNO, ACTIVITY)
    VALUES (v_change, v_group, 'HR_UNIFORM_CHANGE', 'bx bx-transfer', v_depth + 2, '/hrm/uniform/viewUniformChangeList', SYSDATE, 'admin', SYSDATE, 'admin', 1, 1);
    INSERT INTO SY_MENU (MENU_NO, MENU_PARENT_NO, MENU_CODE, MENU_IMG, DEPTH, MENU_URL, CREATE_DATE, CREATED_BY, UPDATE_DATE, UPDATED_BY, ORDERNO, ACTIVITY)
    VALUES (v_item, v_group, 'HR_UNIFORM_ITEM', 'bx bx-list-ul', v_depth + 2, '/hrm/uniform/viewUniformItemList', SYSDATE, 'admin', SYSDATE, 'admin', 2, 1);

    add_name(v_group,  'Quản lý đồng phục',       'Uniform Management',     '유니폼 관리',      '制服管理');
    add_name(v_change, 'Đổi đồng phục nhân viên', 'Employee Uniform Change', '직원 유니폼 교체', '员工制服更换');
    add_name(v_item,   'Danh mục đồng phục',      'Uniform Items',           '유니폼 항목',      '制服项目');

    -- Cấp quyền cho các role đang có quyền vào menu cha (sau đó chỉnh lại ở màn hình Phân quyền nếu cần)
    INSERT INTO SY_ROLE_RELATION (ROLE_NO, MENU_NO, SELECTR, INSERTR, UPDATER, DELETER, CREATE_DATE, CREATED_BY, UPDATE_DATE, UPDATED_BY, ORDERNO, ACTIVITY)
    SELECT RR.ROLE_NO, M.MENU_NO, 'Y', 'Y', 'Y', 'Y', SYSDATE, 'admin', SYSDATE, 'admin', 0, 1
      FROM SY_ROLE_RELATION RR
     CROSS JOIN (SELECT v_group AS MENU_NO FROM DUAL UNION ALL
                 SELECT v_change FROM DUAL UNION ALL
                 SELECT v_item FROM DUAL) M
     WHERE RR.MENU_NO = v_parent
       AND RR.ACTIVITY = 1;

    COMMIT;
END;
/
