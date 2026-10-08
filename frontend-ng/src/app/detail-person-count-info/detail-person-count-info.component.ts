import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { Subscription } from 'rxjs';
import { EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaPersonSalaryItemsComponent } from '../pa-salary-check/pa-person-salary-items.component';
import { PaSalaryCheckRow, PaScheduleOption, apiError, scheduleLabel } from '../pa-salary-check/pa-salary-check.model';
import { PaSalaryCheckService } from '../pa-salary-check/pa-salary-check.service';

const I18N_KEYS = [
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'hrm.empinfo.workexp.selectEmp', 'hrm.empinfo.pleaseSelectEmp',
  'ess.empInfo.pay_plan', 'pa.result.msgSelectPaySchedule', 'ess.infoApply.DEPT', 'ess.empInfo.zhiqun', 'hrm.contract.Rank',
  'org.title.POSITION_NO', 'ess.empInfo.entry_date', 'hr.viewPersonalInfo.title.END_PROBATION_DATE', 'ess.empInfo.leaveDate',
  'ess.viewpersonalpainfo.shifagongzi', 'public.title.search', 'common.loadFail',
];

/**
 * Chi tiết lương - bản Angular của /pa/workManagement/detailPersonCountInfo (JSP + DWZ, dự án Hanwha_HTSV).
 * Chọn nhân viên + kế hoạch trả lương -> thông tin NV của kỳ lương + 3 bảng hạng mục Chi trả / Khấu trừ / BH công ty
 * kèm công thức (procedure PA_FOR_SALARY_DETAIL_PAGE_P).
 * Mở từ menu hoặc nhận sẵn personId / payScheduleNo qua query param hay @Input (popup từ trang Kiểm tra quyết định nhân sự,
 * thay cho navTabNum('/pa/workManagement/detailPersonCountInfo?PERSON_ID=...&PAY_SCHEDULE_NO=...') của bản gốc).
 * Popup chọn nhân viên (viewEmpForPopList) thay bằng nz-autocomplete dùng lại API tìm nhân viên của ChangeUserService.
 */
@Component({
  selector: 'app-detail-person-count-info',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzInputModule, NzAutocompleteModule, NzSelectModule, NzButtonModule,
    NzDescriptionsModule, TranslatePipe, PaPersonSalaryItemsComponent],
  templateUrl: './detail-person-count-info.component.html',
})
export class DetailPersonCountInfoComponent implements OnInit, OnChanges, OnDestroy {
  /** Truyền khi nhúng trong popup - ưu tiên hơn query param. */
  @Input() initPersonId: string | null = null;
  @Input() initPayScheduleNo: string | null = null;
  /** Tiền tố id - đổi khi nhúng để không trùng id với trang Chi tiết lương đang mở ở tab khác. */
  @Input() idPrefix = 'dpci';

  readonly schedules = signal<PaScheduleOption[]>([]);
  readonly empOptions = signal<EmployeeSearchDto[]>([]);
  readonly info = signal<PaSalaryCheckRow | null>(null);
  readonly loading = signal(false);
  /** Điều kiện của lần tra cứu gần nhất -> panel hạng mục. */
  readonly itemsQuery = signal<{ personId: string; payScheduleNo: string } | null>(null);

  empKeyword = '';
  personId: string | null = null;
  payScheduleNo: string | null = null;

  private selectedEmpLabel = '';
  private empSearchTimer?: ReturnType<typeof setTimeout>;
  private routeSub?: Subscription;

  constructor(
    private readonly api: PaSalaryCheckService,
    private readonly empApi: ChangeUserService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    @Optional() private readonly route: ActivatedRoute | null,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getSchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (!this.payScheduleNo && list?.length) this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
    if (!this.initPersonId && this.route) {
      this.routeSub = this.route.queryParamMap.subscribe((p) => {
        const personId = p.get('personId');
        const payScheduleNo = p.get('payScheduleNo');
        if (personId && payScheduleNo) this.openFor(personId, payScheduleNo);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['initPersonId'] || changes['initPayScheduleNo']) && this.initPersonId && this.initPayScheduleNo) {
      this.openFor(this.initPersonId, this.initPayScheduleNo);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.empSearchTimer);
    this.routeSub?.unsubscribe();
  }

  scheduleLabel = scheduleLabel;

  onEmpKeywordChange(keyword: string): void {
    this.empKeyword = keyword;
    if (this.personId && keyword === this.selectedEmpLabel) return;
    this.personId = null;
    clearTimeout(this.empSearchTimer);
    if (!keyword.trim()) {
      this.empOptions.set([]);
      return;
    }
    this.empSearchTimer = setTimeout(() => {
      this.empApi.searchEmployees({ keyword: keyword.trim(), deptCodes: [], empOffice: '' }).subscribe({
        next: (list) => this.empOptions.set(list ?? []),
        error: () => this.empOptions.set([]),
      });
    }, 300);
  }

  onEmpSelected(emp: EmployeeSearchDto): void {
    this.personId = emp.personId;
    this.selectedEmpLabel = this.empLabel(emp);
    this.empKeyword = this.selectedEmpLabel;
  }

  empLabel(emp: { empId: string; localName: string }): string {
    return `${emp.empId} - ${emp.localName}`;
  }

  search(): void {
    if (!this.personId) {
      this.message.warning(this.i18n.t('hrm.empinfo.pleaseSelectEmp', 'Vui lòng chọn nhân viên'));
      return;
    }
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.result.msgSelectPaySchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    const personId = this.personId;
    const payScheduleNo = this.payScheduleNo;
    this.loading.set(true);
    this.api.getPersonInfo({ personId, payScheduleNo }).subscribe({
      next: (info) => {
        const emp = info?.personId ? info : null;
        this.info.set(emp);
        if (emp && !this.empKeyword) {
          this.selectedEmpLabel = this.empLabel(emp);
          this.empKeyword = this.selectedEmpLabel;
        }
        this.itemsQuery.set({ personId, payScheduleNo });
        this.loading.set(false);
      },
      error: (err) => {
        this.info.set(null);
        this.itemsQuery.set(null);
        this.loading.set(false);
        this.message.error(apiError(err) || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private openFor(personId: string, payScheduleNo: string): void {
    this.personId = personId;
    this.payScheduleNo = payScheduleNo;
    this.empKeyword = '';
    this.selectedEmpLabel = '';
    this.search();
  }
}
