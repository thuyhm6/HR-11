/******************************************************************************
   Đồng bộ START_MONTH/END_MONTH (cũ, MM/YYYY) <-> START_DATE/END_DATE (mới) cho PA_WORKER_SALARY_TABLE.
     - Dự án cũ Hanwha_HTSV chỉ ghi tháng -> tự quy đổi sang ngày theo kỳ lương (PA_GET_PERIOD_DATE_F).
     - Ghi ngày mà không ghi tháng -> tự điền tháng (MM/YYYY) tương ứng.
   Khi UPDATE: chỉ quy đổi lại nếu tháng thay đổi còn ngày giữ nguyên.
   KHÔNG bao giờ raise lỗi làm hỏng INSERT/UPDATE của dự án cũ.
   Bảng không phân công ty -> dùng kỳ lương của 'HTSV' (giống PA_WORKER_SAL_*_DATE_P).
   1.0  2026/11/17  Created
******************************************************************************/
CREATE OR REPLACE TRIGGER TRG_PA_WORKER_SALARY_TABLE_DATE
  BEFORE INSERT OR UPDATE ON PA_WORKER_SALARY_TABLE
  FOR EACH ROW
BEGIN
  IF (INSERTING AND :NEW.START_DATE IS NULL)
     OR (UPDATING AND NVL(:NEW.START_MONTH, '#') <> NVL(:OLD.START_MONTH, '#')
                  AND NVL(:NEW.START_DATE, DATE '0001-01-01') = NVL(:OLD.START_DATE, DATE '0001-01-01')) THEN
    BEGIN
      :NEW.START_DATE := PA_GET_PERIOD_DATE_F(:NEW.START_MONTH, 'HTSV', 'S');
    EXCEPTION
      WHEN OTHERS THEN
        :NEW.START_DATE := NULL; -- Tháng sai định dạng: không chặn thao tác của dự án cũ
    END;
  END IF;

  IF (INSERTING AND :NEW.END_DATE IS NULL)
     OR (UPDATING AND NVL(:NEW.END_MONTH, '#') <> NVL(:OLD.END_MONTH, '#')
                  AND NVL(:NEW.END_DATE, DATE '0001-01-01') = NVL(:OLD.END_DATE, DATE '0001-01-01')) THEN
    BEGIN
      :NEW.END_DATE := PA_GET_PERIOD_DATE_F(:NEW.END_MONTH, 'HTSV', 'E');
    EXCEPTION
      WHEN OTHERS THEN
        :NEW.END_DATE := NULL; -- Tháng sai định dạng: không chặn thao tác của dự án cũ
    END;
  END IF;

  IF :NEW.START_MONTH IS NULL AND :NEW.START_DATE IS NOT NULL THEN
    :NEW.START_MONTH := TO_CHAR(:NEW.START_DATE, 'MM/YYYY');
  END IF;
  IF :NEW.END_MONTH IS NULL AND :NEW.END_DATE IS NOT NULL THEN
    :NEW.END_MONTH := TO_CHAR(:NEW.END_DATE, 'MM/YYYY');
  END IF;
END;
/
