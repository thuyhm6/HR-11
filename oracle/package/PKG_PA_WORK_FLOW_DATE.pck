CREATE OR REPLACE PACKAGE PKG_PA_WORK_FLOW_DATE AUTHID CURRENT_USER IS
  /******************************************************************************
     NAME:       PKG_PA_WORK_FLOW_DATE
     PURPOSE:    Quy trình tính lương cho dự án mới HVV-VHR - tính lương THEO NGÀY.
                 - 'paMonthCal' (Tính lương): gọi PA_MONTH_CAL_DATE_P (START_DATE/END_DATE + PRORATE_TYPE).
                 - Các bước khác (createPaObj, arLockYes/No, arMonthCal, paConfirm, paOpen, paUnConfirm,
                   paUnOpen): chuyển nguyên sang PKG_PA_WORK_FLOW.PA_WORKFLOW_EXECUTE.
                 PKG_PA_WORK_FLOW / PA_MONTH_CAL_P giữ nguyên cho dự án cũ Hanwha_HTSV (dùng chung database).

     REVISIONS:
     Ver        Date        Author           Description
     ---------  ----------  ---------------  ------------------------------------
     1.0        2026/10/14                   1. Created
  ******************************************************************************/

  procedure PA_WORKFLOW_EXECUTE(IN_PAY_SCHEDULE_NO IN NUMBER,
                                IN_ADMIN_ID        IN VARCHAR2,
                                IN_ADMIN_IP        IN VARCHAR2,
                                IN_CPNY_ID         IN VARCHAR2,
                                IN_EXEC_TYPE       IN VARCHAR2,
                                V_RETURN           IN OUT VARCHAR2);

end PKG_PA_WORK_FLOW_DATE;
/
CREATE OR REPLACE PACKAGE BODY PKG_PA_WORK_FLOW_DATE IS

  procedure PA_WORKFLOW_EXECUTE(IN_PAY_SCHEDULE_NO IN NUMBER,
                                IN_ADMIN_ID        IN VARCHAR2,
                                IN_ADMIN_IP        IN VARCHAR2,
                                IN_CPNY_ID         IN VARCHAR2,
                                IN_EXEC_TYPE       IN VARCHAR2,
                                V_RETURN           IN OUT VARCHAR2) IS
  V_RETURN_VAL1                 VARCHAR2(1000);
  V_RETURN_VAL2                 VARCHAR2(1000);
  V_TEMP_FLAG                   NUMBER;
  V_TEMP_FLAG2                  NUMBER;
  BEGIN
    IF IN_EXEC_TYPE <> 'paMonthCal' THEN
      PKG_PA_WORK_FLOW.PA_WORKFLOW_EXECUTE(IN_PAY_SCHEDULE_NO,
                                           IN_ADMIN_ID,
                                           IN_ADMIN_IP,
                                           IN_CPNY_ID,
                                           IN_EXEC_TYPE,
                                           V_RETURN);
      RETURN;
    END IF;

    -- Các bước kiểm tra giữ đúng PKG_PA_WORK_FLOW.PA_WORKFLOW_EXECUTE nhánh 'paMonthCal'
    SELECT COUNT(PPS.PAY_SCHEDULE_NO) INTO V_TEMP_FLAG2
    FROM PA_PAY_SCHEDULE PPS
    WHERE PPS.PAY_SCHEDULE_NO = IN_PAY_SCHEDULE_NO
    AND TO_CHAR(PPS.PAY_DATE,'YYYY/MM/DD')<'2015/12/31';

    IF V_TEMP_FLAG2 = 1 THEN
      V_RETURN := 'Dữ liệu trước ngày 01/01/2016 không thể tạo lần nữa!';
      RETURN;
    END IF;

    --Payment is lock?
    PKG_PA_WORK_FLOW.PA_CHECK_IS_LOCK(IN_PAY_SCHEDULE_NO, V_TEMP_FLAG);
    IF V_TEMP_FLAG = 1 THEN
      V_RETURN := 'Lương tháng này đã chốt, không thể tạo đối tượng!';
    ELSE
      --This month of attendace is exeute
      SELECT COUNT(PWF.PA_WORK_FLOW_NO) INTO V_TEMP_FLAG
      FROM PA_WORK_FLOW PWF
      WHERE PWF.PAY_SCHEDULE_NO = IN_PAY_SCHEDULE_NO
      AND PWF.AR_MONTH_CAL_FLAG = 1;

      IF V_TEMP_FLAG = 0 THEN
        V_RETURN := 'Chưa tổng hợp công tháng này, không thể tính lương!';
      ELSE
        -- Tính lương theo ngày (bản riêng của dự án mới)
        PA_MONTH_CAL_DATE_P(IN_PAY_SCHEDULE_NO, IN_ADMIN_ID, IN_CPNY_ID, 'NONE', V_RETURN_VAL1);
        --Update workflow status
        PKG_PA_WORK_FLOW.PA_UPD_WORKFLOW_STATUS(IN_PAY_SCHEDULE_NO,
                                                IN_ADMIN_ID,
                                                IN_ADMIN_IP,
                                                IN_CPNY_ID,
                                                'paMonthCal',
                                                V_RETURN_VAL2);
        V_RETURN := V_RETURN_VAL1 || '  ' || V_RETURN_VAL2;
      END IF;
    END IF;
  EXCEPTION
    WHEN OTHERS THEN
      V_RETURN := SQLCODE ||
               '--ERROR: PKG_PA_WORK_FLOW_DATE.PA_WORKFLOW_EXECUTE -- ' ||
               SQLERRM;
      ROLLBACK;
  END;

END PKG_PA_WORK_FLOW_DATE;
/
