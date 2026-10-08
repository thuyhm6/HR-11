import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { AppShellComponent } from '../shell/app-shell.component';
import { PaWorkFlowDto, PaWorkFlowPayScheduleDto, PaWorkFlowRecordDto, PaWorkFlowTaskType } from './view-pa-work-flow.model';
import { ViewPaWorkFlowService } from './view-pa-work-flow.service';

/** Link sang trang chức năng khác trên sơ đồ - url là URL gốc ở viewPaWorkFlow.jsp (navTabNum), được
 *  đổi sang route Angular qua bảng MIGRATED_ROUTES của AppShellComponent. */
interface VpwfLink {
  url: string;
  key: string;
  fallback: string;
}

/** Cột "Điều chỉnh tiền lương" - đúng thứ tự và URL ở bản gốc. */
const ADJUST_LINKS: VpwfLink[] = [
  { url: '/pa/salary/viewPaInputItemData?itemType=2', key: 'pa.workFlow.step.adjust.pay', fallback: 'Điều chỉnh trả lương' },
  { url: '/pa/salary/viewPaInputItemData?itemType=4', key: 'pa.workFlow.step.adjust.deduct', fallback: 'Điều chỉnh khoản trừ' },
  { url: '/pa/workManagement/viewPaEmpAccount', key: 'pa.workFlow.step.adjust.account', fallback: 'Thông tin tài khoản' },
];

/** Cột "Đối chiếu lương". */
const RECONCILE_LINKS: VpwfLink[] = [
  { url: '/pa/workManagement/monthPersonCountInfoList', key: 'pa.workFlow.step.reconcile.emp', fallback: 'NV tham gia tính lương' },
  { url: '/pa/paView/viewPaMonthChain', key: 'pa.workFlow.step.reconcile.pay', fallback: 'Các khoản chi trả' },
  { url: '/pa/workManagement/viewVerificationList', key: 'pa.workFlow.step.reconcile.decision', fallback: 'Quyết định thực hiện' },
  { url: '/pa/workManagement/detailPersonCountInfo', key: 'pa.workFlow.step.reconcile.detail', fallback: 'Chi tiết lương' },
  { url: '/pa/workManagement/detailPersonCountInfoLeft', key: 'pa.workFlow.step.reconcile.personal', fallback: 'Kiểm tra cá nhân' },
  { url: '/pa/workManagement/detailItemCountInfo', key: 'pa.workFlow.step.reconcile.item', fallback: 'Đối chiếu hạng mục' },
  { url: '/pa/workManagement/detailItemDifCountInfo', key: 'pa.workFlow.step.reconcile.change', fallback: 'Khoản tiền thay đổi' },
  { url: '/pa/workManagement/viewResultConfirmList', key: 'pa.workFlow.step.reconcile.result', fallback: 'Đối chiếu kết quả' },
];

/** Cột "Tra cứu bảng lương". */
const REPORT_LINKS: VpwfLink[] = [
  { url: '/pa/workManagement/detailmonthCountInfoLeft', key: 'pa.workFlow.step.report.monthly', fallback: 'Lương tháng chi tiết' },
  { url: '/pa/workManagement/detailYearCountInfoLeft', key: 'pa.workFlow.step.report.yearly', fallback: 'Lương năm chi tiết' },
  { url: '/pa/workManagement/payStub', key: 'pa.workFlow.step.report.slip', fallback: 'Phiếu lương' },
  { url: '/pa/workManagement/viewPaResultList', key: 'pa.workFlow.step.report.totalEmp', fallback: 'Tổng lương (cá nhân)' },
  { url: '/pa/workManagement/viewDeptPaResultList', key: 'pa.workFlow.step.report.totalDept', fallback: 'Tổng lương (phòng ban)' },
  { url: '/report/ar/viewArReportsList', key: 'pa.workFlow.step.report.table', fallback: 'Bảng lương' },
];

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'pa.workFlow.paySchedule', 'pa.workFlow.selectSchedule', 'pa.workFlow.search', 'pa.workFlow.execute',
  'pa.workFlow.hrPeriod', 'pa.workFlow.arPeriod', 'pa.workFlow.empCount',
  'pa.workFlow.step.objCreate', 'pa.workFlow.step.objCreate.label',
  'pa.workFlow.step.arMonthCal', 'pa.workFlow.step.arMonthCal.label',
  'pa.workFlow.step.paCal', 'pa.workFlow.step.paCal.label', 'pa.workFlow.step.adjust',
  'pa.workFlow.step.reconcile', 'pa.workFlow.step.confirm', 'pa.workFlow.step.confirm.label',
  'pa.workFlow.step.report', 'pa.workFlow.step.open', 'pa.workFlow.step.open.label',
  ...ADJUST_LINKS.map((l) => l.key), ...RECONCILE_LINKS.map((l) => l.key), ...REPORT_LINKS.map((l) => l.key),
  'pa.workFlow.msgSelectSchedule', 'pa.workFlow.msgNoData', 'pa.workFlow.msgExecuting', 'pa.workFlow.msgExecuteSuccess',
  'pa.workFlow.msgPageNotMigrated',
  'pa.workFlow.records.no', 'pa.workFlow.records.step', 'pa.workFlow.records.datetime', 'pa.workFlow.records.operator',
  'pa.workFlow.records.step.1', 'pa.workFlow.records.step.2', 'pa.workFlow.records.step.3', 'pa.workFlow.records.step.4',
  'pa.workFlow.records.step.5', 'pa.workFlow.records.step.6', 'pa.workFlow.records.step.7', 'pa.workFlow.records.noData',
  'pa.viewPaWorkFlow.KAOQINSUODING.C', 'pa.viewPaWorkFlow.KAOQINJIESUO.C',
  'pa.viewPaWorkFlow.QUXIAOSUODING.C', 'pa.viewPaWorkFlow.QUXIAOKAIFANG.C',
  'pa.viewPaWorkFlow.GONGZILIUCHENGCAOZUOJILU.C', 'pa.viewPaWorkFlow.CHAKANCAOZUOJILU.C',
  'pa.viewPaWorkFlow.TISHIDANGYUEKAOQINHAIWEISUODING.C',
  'pa.viewPaWorkFlow.QUEDINGYAOGUANBIKAOQINSHENQINGMA.C', 'pa.viewPaWorkFlow.QUEDINGYAOJIECHUKAOQINSHENQINGDEGUANBIMA.C',
  'org.title.SELECT_EXECUTE', 'org.title.IS_SELECT_EXECUTE',
  'common.confirm', 'common.loadFail',
];

/** FLOW_STEP ghi vào PA_WORK_FLOW_RECORDS ứng với từng task - dùng hiển thị tên bước trên overlay loading. */
const TASK_STEP_MAP: Partial<Record<PaWorkFlowTaskType, number>> = {
  createPaObj: 1,
  arMonthCal: 2,
  paMonthCal: 3,
  paConfirm: 4,
  paOpen: 5,
  paUnConfirm: 6,
  paUnOpen: 7,
};

/**
 * Bản Angular của pa/workManagement/viewPaWorkFlow.jsp - sơ đồ quy trình tính lương theo kế hoạch trả lương.
 * - Đổi kế hoạch trả lương -> tự tra cứu lại (giống onchange submit form ở bản gốc).
 * - Thực hiện: chạy lần lượt các bước được tick (thứ tự như bản gốc). Bước Chốt lương / Mở lương tự đổi
 *   thành Hủy chốt / Hủy mở (paUnConfirm/paUnOpen) khi kế hoạch đã chốt / đã mở.
 * - Chốt công / Mở công (arLockYes/arLockNo) theo AR_LOCK_FLAG của kế hoạch.
 * - Icon lịch sử cạnh mỗi bước mở modal lịch sử thao tác lọc theo FLOW_STEP (Chốt lương = 4,6; Mở lương = 5,7).
 * - Các ô điều chỉnh / đối chiếu / tra cứu mở trang tương ứng thành tab mới; trang chưa migrate sang
 *   Angular thì báo chưa chuyển đổi.
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
    NzCheckboxModule,
    NzTooltipModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-work-flow.component.html',
  styleUrl: './view-pa-work-flow.component.css',
})
export class ViewPaWorkFlowComponent implements OnInit {
  readonly adjustLinks = ADJUST_LINKS;
  readonly reconcileLinks = RECONCILE_LINKS;
  readonly reportLinks = REPORT_LINKS;

  readonly schedules = signal<PaWorkFlowPayScheduleDto[]>([]);
  readonly currentData = signal<PaWorkFlowDto | null>(null);
  readonly searching = signal(false);

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
    private readonly modal: NzModalService,
    private readonly tabs: TabService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
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
      error: () => this.message.warning(this.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  /** Đổi kế hoạch trả lương -> tra cứu lại ngay (bản gốc: onchange submit form). */
  onScheduleChange(): void {
    this.resetChecks();
    if (this.payScheduleNo) {
      this.search();
    } else {
      this.currentData.set(null);
    }
  }

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    this.searching.set(true);
    this.api.getWorkFlow(this.payScheduleNo).subscribe({
      next: (data) => {
        this.searching.set(false);
        this.currentData.set(data ?? null);
        if (!data) {
          this.message.warning(this.t('pa.workFlow.msgNoData', 'Không có dữ liệu quy trình cho kế hoạch này!'));
        }
      },
      error: (err) => {
        this.searching.set(false);
        this.message.error(err?.error?.error || this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** 'DD-MM-YYYY' (BE trả về) -> 'DD/MM/YYYY' theo CLAUDE.md. */
  toDmy(dmy: string | null | undefined): string {
    return dmy ? dmy.replace(/-/g, '/') : '';
  }

  /** Nút "Thực hiện" - giống executeProcess() ở bản gốc. */
  execute(): void {
    const data = this.currentData();
    if (!this.payScheduleNo || !data) {
      this.message.warning(this.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    const tasks: PaWorkFlowTaskType[] = [];
    if (this.chkObjCreate) tasks.push('createPaObj');
    if (this.chkArMonthCal) tasks.push('arMonthCal');
    if (this.chkPaCal) tasks.push('paMonthCal');
    if (this.chkPaConfirm) tasks.push(data.paConfirmFlag === 1 ? 'paUnConfirm' : 'paConfirm');
    if (this.chkPaOpen) tasks.push(data.paOpenFlag === 1 ? 'paUnOpen' : 'paOpen');

    // Bản gốc chỉ nhắc (alert), không chặn khi tổng hợp công lúc chấm công tháng chưa chốt.
    if (this.chkArMonthCal && data.arLockFlag === 0) {
      this.message.warning(this.t('pa.viewPaWorkFlow.TISHIDANGYUEKAOQINHAIWEISUODING.C', 'Lưu ý: chấm công tháng này chưa chốt'));
    }
    if (tasks.length === 0) {
      this.message.error(this.t('org.title.SELECT_EXECUTE', 'Xin chọn quy trình muốn thực hiện'));
      return;
    }
    const payScheduleNo = this.payScheduleNo;
    this.modal.confirm({
      nzTitle: this.t('common.confirm', 'Xác nhận'),
      nzContent: this.t('org.title.IS_SELECT_EXECUTE', 'Đồng ý thực hiện không?'),
      nzOnOk: () => this.runTasks(payScheduleNo, tasks),
    });
  }

  /** Nút "Chốt công" / "Mở công" - giống exeArLock(flag) ở bản gốc. */
  arLock(lock: boolean): void {
    if (!this.payScheduleNo) return;
    this.resetChecks();
    const content = lock
      ? this.t('pa.viewPaWorkFlow.QUEDINGYAOGUANBIKAOQINSHENQINGMA.C', 'Đồng ý đóng xin tăng ca, nghỉ phép không') + '?'
      : this.t('pa.viewPaWorkFlow.QUEDINGYAOJIECHUKAOQINSHENQINGDEGUANBIMA.C', 'Đồng ý mở xin phép chấm công không?');
    const payScheduleNo = this.payScheduleNo;
    this.modal.confirm({
      nzTitle: this.t('common.confirm', 'Xác nhận'),
      nzContent: content,
      nzOnOk: () => this.runTasks(payScheduleNo, [lock ? 'arLockYes' : 'arLockNo']),
    });
  }

  private runTasks(payScheduleNo: string, tasks: PaWorkFlowTaskType[]): void {
    this.executing.set(true);
    this.executingStepText.set('');
    this.runNextTask(payScheduleNo, tasks, 0, []);
  }

  /** Chạy tuần tự từng bước (procedure PA_WORKFLOW_EXECUTE xử lý 1 type/lần như bản gốc), gom thông
   *  báo trả về của procedure để hiển thị khi xong. Dừng ở bước đầu tiên bị lỗi. */
  private runNextTask(payScheduleNo: string, tasks: PaWorkFlowTaskType[], index: number, messages: string[]): void {
    if (index >= tasks.length) {
      this.executing.set(false);
      const msg = messages.filter((m) => !!m).join('\n');
      this.message.success(msg || this.t('pa.workFlow.msgExecuteSuccess', 'Tất cả các bước đã hoàn thành thành công!'));
      this.resetChecks();
      this.search();
      return;
    }
    const step = TASK_STEP_MAP[tasks[index]];
    const stepName = step ? this.stepName(step) : '';
    this.executingStepText.set(stepName ? `(${index + 1}/${tasks.length}) ${stepName}` : '');
    this.api.executeTask(payScheduleNo, tasks[index]).subscribe({
      next: (res) => this.runNextTask(payScheduleNo, tasks, index + 1, [...messages, res?.message ?? '']),
      error: (err) => {
        this.executing.set(false);
        // Bản gốc dùng alert() để hiện nguyên văn thông báo lỗi của procedure (có thể nhiều dòng).
        this.modal.error({ nzTitle: err?.error?.error || this.t('common.loadFail', 'Tải dữ liệu thất bại!') });
        // Các bước trước đó có thể đã chạy xong - tải lại trạng thái quy trình.
        this.search();
      },
    });
  }

  private resetChecks(): void {
    this.chkObjCreate = false;
    this.chkArMonthCal = false;
    this.chkPaCal = false;
    this.chkPaConfirm = false;
    this.chkPaOpen = false;
  }

  /** Mở modal lịch sử thao tác lọc theo FLOW_STEP - giống link viewPaWorkFlowOperationRecordList ở bản gốc. */
  openRecordsModal(flowSteps: number[]): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    this.recordsModalVisible.set(true);
    this.recordsLoading.set(true);
    this.records.set([]);
    this.api.getRecords(this.payScheduleNo, flowSteps).subscribe({
      next: (list) => {
        this.records.set(list ?? []);
        this.recordsLoading.set(false);
      },
      error: (err) => {
        this.recordsLoading.set(false);
        this.message.error(err?.error?.error || this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeRecordsModal(): void {
    this.recordsModalVisible.set(false);
  }

  stepName(flowStep: number): string {
    return this.t(`pa.workFlow.records.step.${flowStep}`, String(flowStep));
  }

  /** Mở trang chức năng tương ứng thành tab mới (bản gốc: navTabNum). */
  openLink(link: VpwfLink): void {
    const route = AppShellComponent.migratedRouteFor(link.url);
    if (!route) {
      this.message.warning(this.t('pa.workFlow.msgPageNotMigrated', 'Trang này chưa được chuyển đổi sang hệ thống mới!'));
      return;
    }
    this.tabs.openTab(route, this.t(link.key, link.fallback), 'route');
  }
}
