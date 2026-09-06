/** Tương ứng với PaPayScheduleDto.java (1 dòng trong dropdown kế hoạch trả lương). */
export interface PaWorkFlowPayScheduleDto {
  payScheduleNo: string;
  payDate: string;
  salaryDistinNo: string;
  salaryDistinName: string;
}

/** Tương ứng với PaWorkFlowDto.java (response của GET /api/workFlow). */
export interface PaWorkFlowDto {
  paWorkFlowNo?: string;
  payScheduleNo: string;
  hrStartDate: string;
  hrEndDate: string;
  arStartDate: string;
  arEndDate: string;
  objCreateFlag: number;
  arMonthCalFlag: number;
  paCalFlag: number;
  paConfirmFlag: number;
  paOpenFlag: number;
  arLockFlag?: number;
  empCount: number;
}

/** Tương ứng với PaWorkFlowRecordsDto.java (1 dòng lịch sử thao tác quy trình lương). */
export interface PaWorkFlowRecordDto {
  recordNo: number;
  paWorkFlowNo: number;
  flowStep: number;
  createDate: string;
  createdBy: string;
  createdIp: string;
  rowNum: number;
}

/** type gửi kèm khi gọi POST /api/workFlow/execute - đúng tên PKG_PA_WORK_FLOW.PA_WORKFLOW_EXECUTE mong đợi. */
export type PaWorkFlowTaskType = 'createPaObj' | 'arMonthCal' | 'paMonthCal' | 'paConfirm' | 'paOpen';
