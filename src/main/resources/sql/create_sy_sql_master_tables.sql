-- ============================================================================
-- Man hinh "Quan ly truy van SQL tu dong xuat Excel" (Angular route
-- /view-sql-master-list, xem ViewSqlMasterListComponent + SySqlMasterController).
-- Chay script nay 1 lan tren Oracle truoc khi su dung man hinh.
-- ============================================================================

CREATE TABLE SY_SQL_MASTER (
    SQL_SEQ      VARCHAR2(20)  NOT NULL,
    CPNY_ID      VARCHAR2(20)  NOT NULL,
    PGM_NM       VARCHAR2(50),
    SQL_NM       VARCHAR2(200) NOT NULL,
    SQL_DESC     VARCHAR2(500),
    SQL_STMT     CLOB          NOT NULL,
    USE_YN       VARCHAR2(1)   DEFAULT 'Y' NOT NULL,
    CREATE_DATE  DATE,
    CREATED_BY   VARCHAR2(50),
    UPDATE_DATE  DATE,
    UPDATED_BY   VARCHAR2(50),
    CONSTRAINT PK_SY_SQL_MASTER PRIMARY KEY (SQL_SEQ)
);

CREATE TABLE SY_SQL_PARAM (
    SQL_SEQ      VARCHAR2(20)  NOT NULL,
    SQL_PARAM_NO VARCHAR2(20)  NOT NULL,
    PARAM        VARCHAR2(50)  NOT NULL,
    PARAM_DESC   VARCHAR2(200),
    SQL_PARAM_TP VARCHAR2(20)  DEFAULT 'VARCHAR2',
    DEFAULT_VAL  VARCHAR2(200),
    SORT_CD      NUMBER(5),
    USE_YN       VARCHAR2(1)   DEFAULT 'Y' NOT NULL,
    CREATE_DATE  DATE,
    CREATED_BY   VARCHAR2(50),
    UPDATE_DATE  DATE,
    UPDATED_BY   VARCHAR2(50),
    CONSTRAINT PK_SY_SQL_PARAM PRIMARY KEY (SQL_SEQ, SQL_PARAM_NO),
    CONSTRAINT FK_SY_SQL_PARAM_MASTER FOREIGN KEY (SQL_SEQ)
        REFERENCES SY_SQL_MASTER (SQL_SEQ) ON DELETE CASCADE
);

CREATE SEQUENCE SY_SQL_MASTER_SEQ START WITH 1 INCREMENT BY 1 NOCACHE;

-- Ghi chu: sau khi chay xong script nay, vao man hinh "Quan ly Menu"
-- (view-menu-list) de them 1 menu moi tro toi route Angular
-- /view-sql-master-list neu muon hien thi tren sidebar.
