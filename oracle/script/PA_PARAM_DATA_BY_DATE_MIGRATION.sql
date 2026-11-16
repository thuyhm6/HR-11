/******************************************************************************
   Chuyển tham số lương (PA_PARAM_DATA / PA_PARAM_DATA_OTHER) từ START_MONTH/END_MONTH (MMYYYY)
   sang START_DATE/END_DATE để tính lương theo ngày (thay đổi giữa tháng).

   DÙNG CHUNG DATABASE VỚI DỰ ÁN CŨ Hanwha_HTSV:
     - Dự án cũ vẫn tính lương THEO THÁNG bằng các object gốc - KHÔNG sửa các object này:
         PKG_PA_WORK_FLOW, PA_MONTH_CAL_P, PA_MONTH_CAL_FOR_EMP_P,
         PA_WORKER_SALARY_TABLE_HTSV_P, PA_WORKER_SALARY_TABLE_EMP_P, PKG_WAGEBASE_EXCEL_TEMP
     - Dự án mới HVV-VHR tính lương THEO NGÀY bằng các object riêng (hậu tố _DATE):
         PKG_PA_WORK_FLOW_DATE, PA_MONTH_CAL_DATE_P, PA_MONTH_CAL_FOR_EMP_DATE_P,
         PA_WORKER_SAL_HTSV_DATE_P, PA_WORKER_SAL_EMP_DATE_P, PKG_WAGEBASE_EXCEL_TEMP_DATE
     - Thay đổi chung trên bảng chỉ là THÊM cột (START_DATE, END_DATE, PRORATE_TYPE) + index + trigger
       điền cột ngày; cột START_MONTH/END_MONTH và dữ liệu tháng của dự án cũ giữ nguyên.
     - LƯU Ý NGHIỆP VỤ: với cùng một kế hoạch trả lương (PAY_SCHEDULE_NO), chỉ tính lương bằng MỘT dự án.
       Dữ liệu nhập theo ngày ở dự án mới (vd. lương thay đổi ngày 15) vẫn có START_MONTH = tháng đó,
       nếu tính bằng dự án cũ (theo tháng) sẽ bị cộng cả 2 bản ghi.

   THỨ TỰ CHẠY:
     0. Script này - BƯỚC 0 (kiểm tra trước, đảm bảo thêm cột không ảnh hưởng object cũ trong DB)
     1. Script này - BƯỚC 1 (thêm cột)
     2. oracle/function/PA_GET_PERIOD_DATE_F.fnc
     3. Script này - BƯỚC 2 (kiểm tra kỳ lương) + BƯỚC 3 (migrate dữ liệu) + BƯỚC 4 (index)
     4. oracle/trigger/TRG_PA_PARAM_DATA_DATE.trg
     5. oracle/function/PA_BUILD_PARAM_UPDATE_F.fnc
        oracle/function/PA_CHECK_PARAM_OVERLAP_F.fnc
     6. oracle/procedure/PA_WORKER_SAL_HTSV_DATE_P.prc, PA_WORKER_SAL_EMP_DATE_P.prc
        oracle/procedure/PA_MONTH_CAL_DATE_P.prc, PA_MONTH_CAL_FOR_EMP_DATE_P.prc
        oracle/package/PKG_PA_WORK_FLOW_DATE.pck
        oracle/package/PKG_WAGEBASE_EXCEL_TEMP_DATE.pck
     7. Script này - BƯỚC 5 (cấu hình PRORATE_TYPE cho từng tham số) - hoặc cấu hình trên màn hình
        "Thiết lập hạng mục nhập liệu".
     8. Script này - BƯỚC 6 (biên dịch lại object bị INVALID do thêm cột).
     9. [2026/11/17] Script này - BƯỚC 7 (PA_WORKER_SALARY_TABLE thêm START_DATE/END_DATE)
        -> oracle/trigger/TRG_PA_WORKER_SALARY_TABLE_DATE.trg
        -> chạy lại PA_WORKER_SAL_HTSV_DATE_P.prc, PA_WORKER_SAL_EMP_DATE_P.prc
   Nếu trước đó đã lỡ chạy bản sửa của PA_MONTH_CAL_P / PA_MONTH_CAL_FOR_EMP_P / PA_WORKER_SALARY_TABLE_* /
   PKG_WAGEBASE_EXCEL_TEMP lên DB: chạy lại các file gốc trong oracle/procedure, oracle/package để trả về như cũ.
   2026/10/14
******************************************************************************/

-------------------------------------------------------------------------------
-- BƯỚC 0: Kiểm tra trước - object trong DB ghi/đọc các bảng sẽ thêm cột
--   Thêm cột chỉ làm hỏng câu INSERT KHÔNG liệt kê cột (INSERT INTO X VALUES / INSERT INTO X SELECT *)
--   hoặc %ROWTYPE + SELECT * cố định số cột. Source Java/XML của dự án cũ đã kiểm tra: đều liệt kê cột.
--   Kết quả dưới đây cần xem lại từng dòng (chỉ các dòng không có danh sách cột mới có rủi ro).
-------------------------------------------------------------------------------
SELECT S.NAME, S.TYPE, S.LINE, TRIM(S.TEXT) TEXT
  FROM USER_SOURCE S
 WHERE REGEXP_LIKE(UPPER(S.TEXT),
                   '(INSERT\s+INTO\s+(PA_PARAM_DATA|PA_PARAM_DATA_OTHER|PA_PARAM_DATA_TEMP|PA_PARAM_ITEM_PARAM)\s*(VALUES|SELECT|\(SELECT|$))'
                || '|((PA_PARAM_DATA|PA_PARAM_DATA_OTHER|PA_PARAM_DATA_TEMP|PA_PARAM_ITEM_PARAM)%ROWTYPE)'
                || '|(SELECT\s+\*\s+FROM\s+(PA_PARAM_DATA|PA_PARAM_DATA_OTHER|PA_PARAM_DATA_TEMP|PA_PARAM_ITEM_PARAM))')
 ORDER BY S.NAME, S.LINE;

-------------------------------------------------------------------------------
-- BƯỚC 1: Thêm cột
-------------------------------------------------------------------------------
ALTER TABLE PA_PARAM_DATA       ADD (START_DATE DATE, END_DATE DATE);
ALTER TABLE PA_PARAM_DATA_OTHER ADD (START_DATE DATE, END_DATE DATE);
ALTER TABLE PA_PARAM_ITEM_PARAM ADD (PRORATE_TYPE NUMBER(1) DEFAULT 0);
-- Import Excel theo ngày (PKG_WAGEBASE_EXCEL_TEMP_DATE.PR_IMPORT_PAPARAM_DATA - chỉ dự án mới)
ALTER TABLE PA_PARAM_DATA_TEMP  ADD (START_DATE DATE, END_DATE DATE);

COMMENT ON COLUMN PA_PARAM_DATA.START_DATE       IS 'Ngày bắt đầu hiệu lực';
COMMENT ON COLUMN PA_PARAM_DATA.END_DATE         IS 'Ngày kết thúc hiệu lực (NULL = không thời hạn)';
COMMENT ON COLUMN PA_PARAM_DATA_OTHER.START_DATE IS 'Ngày bắt đầu hiệu lực';
COMMENT ON COLUMN PA_PARAM_DATA_OTHER.END_DATE   IS 'Ngày kết thúc hiệu lực (NULL = không thời hạn)';
COMMENT ON COLUMN PA_PARAM_ITEM_PARAM.PRORATE_TYPE IS
  'Cách gộp dữ liệu trong kỳ: 0=Cộng dồn, 1=Lấy giá trị sau cùng, 2=Chia theo ngày lịch, 3=Chia theo ngày công';

UPDATE PA_PARAM_ITEM_PARAM SET PRORATE_TYPE = 0 WHERE PRORATE_TYPE IS NULL;
COMMIT;

-------------------------------------------------------------------------------
-- BƯỚC 2: Kiểm tra kỳ lương (chạy sau khi tạo PA_GET_PERIOD_DATE_F)
--   Dữ liệu cũ "tháng MM/YYYY" sẽ được quy đổi thành HR_START_DATE..HR_END_DATE của
--   kế hoạch lương thường có PAY_DATE trong tháng đó. Xem kết quả để chắc chắn đúng ý.
-------------------------------------------------------------------------------
SELECT PPS.CPNY_ID,
       TO_CHAR(PPS.PAY_DATE, 'MM/YYYY')        PAY_MONTH,
       TO_CHAR(PPS.PAY_DATE, 'DD/MM/YYYY')     PAY_DATE,
       TO_CHAR(PPS.HR_START_DATE, 'DD/MM/YYYY') HR_START_DATE,
       TO_CHAR(PPS.HR_END_DATE, 'DD/MM/YYYY')   HR_END_DATE,
       TO_CHAR(PPS.AR_START_DATE, 'DD/MM/YYYY') AR_START_DATE,
       TO_CHAR(PPS.AR_END_DATE, 'DD/MM/YYYY')   AR_END_DATE
  FROM PA_PAY_SCHEDULE PPS
 WHERE PPS.ACTIVITY = 1
   AND PPS.SALARY_DISTIN_NO = '14015882'
 ORDER BY PPS.CPNY_ID, PPS.PAY_DATE DESC;

-------------------------------------------------------------------------------
-- BƯỚC 3: Migrate dữ liệu cũ
-------------------------------------------------------------------------------
-- Sao lưu trước khi migrate
CREATE TABLE PA_PARAM_DATA_BK20261014       AS SELECT * FROM PA_PARAM_DATA;
CREATE TABLE PA_PARAM_DATA_OTHER_BK20261014 AS SELECT * FROM PA_PARAM_DATA_OTHER;

UPDATE PA_PARAM_DATA
   SET START_DATE = PA_GET_PERIOD_DATE_F(START_MONTH, CPNY_ID, 'S'),
       END_DATE   = PA_GET_PERIOD_DATE_F(END_MONTH,   CPNY_ID, 'E')
 WHERE START_DATE IS NULL;

UPDATE PA_PARAM_DATA_OTHER
   SET START_DATE = PA_GET_PERIOD_DATE_F(START_MONTH, CPNY_ID, 'S'),
       END_DATE   = PA_GET_PERIOD_DATE_F(END_MONTH,   CPNY_ID, 'E')
 WHERE START_DATE IS NULL;

COMMIT;

-- Kiểm tra: bản ghi chưa quy đổi được (START_MONTH rỗng/sai định dạng)
SELECT 'PA_PARAM_DATA' TBL, COUNT(*) CNT FROM PA_PARAM_DATA WHERE ACTIVITY = 1 AND START_DATE IS NULL
UNION ALL
SELECT 'PA_PARAM_DATA_OTHER', COUNT(*) FROM PA_PARAM_DATA_OTHER WHERE ACTIVITY = 1 AND START_DATE IS NULL;

-------------------------------------------------------------------------------
-- BƯỚC 4: Index
-------------------------------------------------------------------------------
CREATE INDEX IDX_PA_PARAM_DATA_DATE ON PA_PARAM_DATA (CPNY_ID, PARAM_NO, PERSON_ID, START_DATE, END_DATE);
CREATE INDEX IDX_PA_PARAM_DATA_OTHER_DATE ON PA_PARAM_DATA_OTHER (CPNY_ID, PARAM_NO, START_DATE, END_DATE);

-------------------------------------------------------------------------------
-- BƯỚC 5: Cấu hình cách gộp dữ liệu cho các tham số thay đổi giữa tháng (VÍ DỤ - sửa theo thực tế)
--   0 = Cộng dồn (mặc định, giữ nguyên cách tính cũ)
--   1 = Lấy giá trị sau cùng trong kỳ
--   2 = Chia theo ngày lịch
--   3 = Chia theo ngày công thực tế (khuyến nghị cho lương cơ bản / phụ cấp tính theo công)
-------------------------------------------------------------------------------
-- Danh sách tham số để chọn
SELECT T.PARAM_NO, PI.PARAM_ITEM_ID, GET_GLOBAL_NAME(T.PARAM_ITEM_NO, 'vi') PARAM_NAME, T.PRORATE_TYPE
  FROM PA_PARAM_ITEM_PARAM T, PA_PARAM_ITEM PI
 WHERE T.PARAM_ITEM_NO = PI.PARAM_ITEM_NO
   AND T.ACTIVITY = 1
 ORDER BY T.CPNY_ID, PI.ORDER_NO;

-- UPDATE PA_PARAM_ITEM_PARAM SET PRORATE_TYPE = 3 WHERE CPNY_ID = 'HTSV' AND PARAM_NO IN (1, 2);  -- Lương cơ bản (chính thức / thử việc)
-- UPDATE PA_PARAM_ITEM_PARAM SET PRORATE_TYPE = 2 WHERE CPNY_ID = 'HTSV' AND PARAM_NO IN (4, 6);  -- Phụ cấp cố định
-- COMMIT;

-------------------------------------------------------------------------------
-- BƯỚC 6: Biên dịch lại các object bị INVALID do thêm cột (Oracle cũng tự biên dịch ở lần gọi đầu)
-------------------------------------------------------------------------------
-- EXEC DBMS_UTILITY.COMPILE_SCHEMA(schema => USER, compile_all => FALSE);
SELECT OBJECT_NAME, OBJECT_TYPE FROM USER_OBJECTS WHERE STATUS = 'INVALID' ORDER BY OBJECT_TYPE, OBJECT_NAME;

-------------------------------------------------------------------------------
-- BƯỚC 7 [2026/11/17]: Bảng lương Worker PA_WORKER_SALARY_TABLE theo ngày
--   PA_WORKER_SAL_HTSV_DATE_P / PA_WORKER_SAL_EMP_DATE_P (dự án mới) lọc theo START_DATE/END_DATE
--   và ghi START_DATE/END_DATE vào PA_PARAM_DATA. Dự án cũ vẫn dùng START_MONTH/END_MONTH (MM/YYYY)
--   -> chỉ THÊM cột, dữ liệu tháng giữ nguyên; trigger TRG_PA_WORKER_SALARY_TABLE_DATE tự đồng bộ.
-------------------------------------------------------------------------------
ALTER TABLE PA_WORKER_SALARY_TABLE ADD (START_DATE DATE, END_DATE DATE);

COMMENT ON COLUMN PA_WORKER_SALARY_TABLE.START_DATE IS 'Ngày bắt đầu hiệu lực';
COMMENT ON COLUMN PA_WORKER_SALARY_TABLE.END_DATE   IS 'Ngày kết thúc hiệu lực (NULL = không thời hạn)';

-- Sao lưu + migrate dữ liệu cũ (tháng -> kỳ lương, cùng quy tắc với PA_PARAM_DATA)
CREATE TABLE PA_WORKER_SALARY_TABLE_BK20261117 AS SELECT * FROM PA_WORKER_SALARY_TABLE;

UPDATE PA_WORKER_SALARY_TABLE
   SET START_DATE = PA_GET_PERIOD_DATE_F(START_MONTH, 'HTSV', 'S'),
       END_DATE   = PA_GET_PERIOD_DATE_F(END_MONTH,   'HTSV', 'E')
 WHERE START_DATE IS NULL;
COMMIT;

-- Kiểm tra: dòng chưa quy đổi được + so sánh tháng/ngày
SELECT COUNT(*) CNT_NULL FROM PA_WORKER_SALARY_TABLE WHERE ACTIVITY = 1 AND START_DATE IS NULL;
SELECT DIVISION, START_MONTH, END_MONTH,
       TO_CHAR(START_DATE, 'DD/MM/YYYY') START_DATE, TO_CHAR(END_DATE, 'DD/MM/YYYY') END_DATE,
       BASIC, FULL_ATTEND, TRANSPORTATION, LONG_ATTENDANCE, ACTIVITY
  FROM PA_WORKER_SALARY_TABLE
 ORDER BY START_DATE DESC, DIVISION;

