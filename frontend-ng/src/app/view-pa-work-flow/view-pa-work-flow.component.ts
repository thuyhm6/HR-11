import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { PaWorkFlowDto, PaWorkFlowPayScheduleDto, PaWorkFlowRecordDto, PaWorkFlowTaskType } from './view-pa-work-flow.model';
import { ViewPaWorkFlowService } from './view-pa-work-flow.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.workFlow.*
 *  (dùng chung cho cả bản Thymeleaf gốc). Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'pa.workFlow.paySchedule', 'pa.workFlow.selectSchedule', 'pa.workFlow.search', 'pa.workFlow.execute',
  'pa.workFlow.hrPeriod', 'pa.workFlow.arPeriod', 'pa.workFlow.empCount',
  'pa.workFlow.step.objCreate', 'pa.workFlow.step.objCreate.label',
  'pa.workFlow.step.arMonthCal', 'pa.workFlow.step.arMonthCal.label',
  'pa.workFlow.step.paCal', 'pa.workFlow.step.paCal.label',
  'pa.workFlow.step.adjust', 'pa.workFlow.step.adjust.pay', 'pa.workFlow.step.adjust.deduct', 'pa.workFlow.step.adjust.account',
  'pa.workFlow.step.reconcile', 'pa.workFlow.step.reconcile.emp', 'pa.workFlow.step.reconcile.pay',
  'pa.workFlow.step.reconcile.decision', 'pa.workFlow.step.reconcile.detail', 'pa.workFlow.step.reconcile.personal',
  'pa.workFlow.step.reconcile.item', 'pa.workFlow.step.reconcile.change', 'pa.workFlow.step.reconcile.result',
  'pa.workFlow.step.confirm', 'pa.workFlow.step.confirm.label',
  'pa.workFlow.step.report', 'pa.workFlow.step.report.monthly', 'pa.workFlow.step.report.yearly',
  'pa.workFlow.step.report.slip', 'pa.workFlow.step.report.totalEmp', 'pa.workFlow.step.report.totalDept',
  'pa.workFlow.step.report.table', 'pa.workFlow.step.open', 'pa.workFlow.step.open.label',
  'pa.workFlow.msgSelectSchedule', 'pa.workFlow.msgNoData', 'pa.workFlow.msgSelectStep',
  'pa.workFlow.records.title', 'pa.workFlow.records.no', 'pa.workFlow.records.step', 'pa.workFlow.records.datetime',
  'pa.workFlow.records.operator', 'pa.workFlow.records.step.1', 'pa.workFlow.records.step.2', 'pa.workFlow.records.step.3',
  'pa.workFlow.records.step.4', 'pa.workFlow.records.step.5', 'pa.workFlow.records.step.6', 'pa.workFlow.records.step.7',
  'pa.workFlow.records.noData', 'pa.workFlow.msgExecuting', 'pa.workFlow.msgExecuteSuccess',
  'pa.workFlow.msgObjCreateAlreadyExist', 'pa.workFlow.msgPayrollConfirmed',
  'common.close', 'common.loadFail',
];

/** stepKey (nút "sổ" bên cạnh checkbox) -> FLOW_STEP tương ứng trong PA_WORK_FLOW_RECORDS - đúng
 *  vpwf_stepKeyMap ở bản gốc. Các stepKey còn lại (đối chiếu lương / tra cứu bảng lương) không lọc
 *  theo bước - hiển thị toàn bộ lịch sử thao tác của kế hoạch trả lương đang chọn. */
const STEP_KEY_MAP: Record<string, number> = {
  objCreate: 1,
  arMonthCal: 2,
  paCal: 3,
  confirm: 4,
  open: 5,
};

/** task gửi khi Thực hiện -> FLOW_STEP tương ứng - dùng để lấy tên bước hiển thị trên overlay loading. */
const TASK_STEP_MAP: Record<PaWorkFlowTaskType, number> = {
  createPaObj: 1,
  arMonthCal: 2,
  paMonthCal: 3,
  paConfirm: 4,
  paOpen: 5,
};

/**
 * Bản Angular của pa/workManagement/viewPaWorkFlow.html (Thymeleaf + jQuery) - sơ đồ quy trình tính
 * lương theo kế hoạch trả lương. Gọi lại nguyên API JSON đã có sẵn ở PaWorkManagementController (xem
 * ViewPaWorkFlowService) - không đổi backend. Layout sơ đồ (process-container/process-group/step-btn/
 * ...) giữ nguyên các class CSS toàn cục sẵn có trong assets/css/style.css (đã nạp chung ở
 * index.html Angular, dùng chung với org/orgManage/viewResumeProcess.html) thay vì viết lại.
 * 2 link "Điều chỉnh trả lương/khoản trừ" trỏ tới trang đã migrate sang Angular route
 * /view-pa-input-item-data (ViewPaInputItemDataComponent) nên mở qua TabService kiểu 'route', kèm
 * itemType=2/4 trên query string (xem openInputItemDataTab()). Link "Thông tin tài khoản" đã migrate
 * sang Angular route /view-pa-emp-account (ViewPaEmpAccountComponent) nên mở qua TabService kiểu 'route'
 * (xem openAccountTab()).
 * Các nút còn lại (đối chiếu lương / tra cứu bảng lương / nút "sổ" cạnh checkbox) ở bản gốc đều chỉ
 * mở modal "Lịch sử thao tác" (vpwfOpenMenu) - KHÔNG điều hướng sang trang khác - giữ nguyên hành vi
 * này, không tự ý gắn thêm link vì bản gốc chưa có URL đích cho các báo cáo đó.
 */
@Component({
  selector: 'app-view-pa-work-flow',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzModalModule,
    NzSpinModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-work-flow.component.html',
  styleUrl: './view-pa-work-flow.component.css',
})
export class ViewPaWorkFlowComponent implements OnInit {
  readonly schedules = signal<PaWorkFlowPayScheduleDto[]>([]);
  readonly currentData = signal<PaWorkFlowDto | null>(null);
  readonly searching = signal(false);
  readonly searched = signal(false);

  payScheduleNo: string | null = null;

  chkObjCreate = false;
  chkArMonthCal = false;
  chkPaCal = false;
  chkPaConfirm = false;
  chkPaOpen = false;

  readonly executing = signal(false);
  readonly executingStepText = signal('');

  readonly recordsModalVisible = signal(false);
  readonly recordsLoading = signal(false);
  readonly records = signal<PaWorkFlowRecordDto[]>([]);

  constructor(
    private readonly api: ViewPaWorkFlowService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly tabs: TabService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
  }

  private loadSchedules(): void {
    this.api.getPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list && list.length > 0) {
          this.payScheduleNo = list[0].payScheduleNo;
          this.search();
        }
      },
      error: () => this.message.warning(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    this.searching.set(true);
    this.searched.set(true);
    this.api.getWorkFlow(this.payScheduleNo).subscribe({
      next: (data) => {
        this.searching.set(false);
        if (!data) {
          this.message.warning(this.i18n.t('pa.workFlow.msgNoData', 'Không có dữ liệu quy trình cho kế hoạch này!'));
          this.currentData.set(null);
          return;
        }
        this.currentData.set(data);
      },
      error: (err) => {
        this.searching.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  iconClass(flag: number | undefined): string {
    return flag === 1 ? 'bx bxs-book-open' : 'bx bxs-book';
  }

  /** 'DD-MM-YYYY' (BE trả về) -> 'dd/MM/yyyy' theo CLAUDE.md. */
  toDmy(dmy: string | null | undefined): string {
    return dmy ? dmy.replace(/-/g, '/') : '--';
  }

  execute(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    const tasks: PaWorkFlowTaskType[] = [];
    if (this.chkObjCreate) tasks.push('createPaObj');
    if (this.chkArMonthCal) tasks.push('arMonthCal');
    if (this.chkPaCal) tasks.push('paMonthCal');
    if (this.chkPaConfirm) tasks.push('paConfirm');
    if (this.chkPaOpen) tasks.push('paOpen');
    if (tasks.length === 0) {
      this.message.warning(this.i18n.t('pa.workFlow.msgSelectStep', 'Vui lòng chọn ít nhất một bước cần thực hiện!'));
      return;
    }
    const data = this.currentData();
    if (this.chkObjCreate && data?.objCreateFlag === 1) {
      this.message.warning(this.i18n.t('pa.workFlow.msgObjCreateAlreadyExist', 'Đã tạo đối tượng nhận lương, không thể tạo lại!'));
      return;
    }
    if ((this.chkArMonthCal || this.chkPaCal) && data?.paConfirmFlag === 1) {
      this.message.warning(this.i18n.t('pa.workFlow.msgPayrollConfirmed', 'Lương tháng này đã chốt, không thể tính công!'));
      return;
    }

    this.executing.set(true);
    this.executingStepText.set('');
    this.runNextTask(this.payScheduleNo, tasks, 0);
  }

  private runNextTask(payScheduleNo: string, tasks: PaWorkFlowTaskType[], index: number): void {
    if (index >= tasks.length) {
      this.executing.set(false);
      this.message.success(this.i18n.t('pa.workFlow.msgExecuteSuccess', 'Tất cả các bước đã hoàn thành thành công!'));
      this.search();
      return;
    }
    const stepName = this.i18n.t(`pa.workFlow.records.step.${TASK_STEP_MAP[tasks[index]]}`, tasks[index]);
    this.executingStepText.set(`(${index + 1}/${tasks.length}) ${stepName}`);
    this.api.executeTask(payScheduleNo, tasks[index]).subscribe({
      next: () => this.runNextTask(payScheduleNo, tasks, index + 1),
      error: (err) => {
        this.executing.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** Mở modal "Lịch sử thao tác" - giống vpwfOpenMenu ở bản gốc (đúng cho cả nút "sổ" cạnh checkbox
   *  lẫn các ô đối chiếu lương/tra cứu bảng lương). */
  openRecordsModal(stepKey: string): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    this.recordsModalVisible.set(true);
    this.recordsLoading.set(true);
    this.records.set([]);
    this.api.getRecords(this.payScheduleNo, STEP_KEY_MAP[stepKey]).subscribe({
      next: (list) => {
        this.records.set(list ?? []);
        this.recordsLoading.set(false);
      },
      error: (err) => {
        this.recordsLoading.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeRecordsModal(): void {
    this.recordsModalVisible.set(false);
  }

  stepName(flowStep: number): string {
    return this.i18n.t(`pa.workFlow.records.step.${flowStep}`, String(flowStep));
  }

  /** Mở trang "Điều chỉnh trả lương/khoản trừ" (đã migrate sang Angular route /view-pa-input-item-data,
   *  ViewPaInputItemDataComponent) như 1 tab, giữ nguyên tham số itemType trên query string - trang đó
   *  đọc itemType để lọc đúng nhóm hạng mục ở panel trái (đúng hành vi ?itemType=2/4 ở bản gốc). */
  openInputItemDataTab(itemType: string, titleKey: string, fallback: string): void {
    this.tabs.openTab(`/view-pa-input-item-data?itemType=${itemType}`, this.i18n.t(titleKey, fallback), 'route');
  }

  /** Mở trang "Thông tin tài khoản" (đã migrate sang Angular route /view-pa-emp-account) như 1 tab. */
  openAccountTab(): void {
    this.tabs.openTab('/view-pa-emp-account', this.i18n.t('pa.workFlow.step.adjust.account', 'Thông tin tài khoản'), 'route');
  }
}
