import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { PaSalaryDetailDto } from '../detail-month-count-info/detail-month-count-info.model';
import { PaSalaryDetailService } from '../detail-month-count-info/detail-month-count-info.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import { PaPersonSalaryItemsComponent } from '../pa-salary-check/pa-person-salary-items.component';
import { PaScheduleOption, apiError, compareBy, scheduleLabel } from '../pa-salary-check/pa-salary-check.model';
import { PaSalaryCheckService } from '../pa-salary-check/pa-salary-check.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { ViewPaPayStubService } from '../view-pa-pay-stub/view-pa-pay-stub.service';

const I18N_KEYS = [
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'ess.empInfo.pay_plan', 'ess.infoApply.DEPT', 'pa.result.deptPlaceholder',
  'pa.result.msgSelectPaySchedule', 'mep.msg.loadDeptFailed', 'ess.infoApply.EMP_ID', 'ess.infoApply.NAME',
  'ess.viewpersonalpainfo.shifagongzi', 'public.title.search', 'common.stt', 'common.noData', 'common.loadFail',
  'common.totalRows',
];

/**
 * Kiểm tra cá nhân - bản Angular của /pa/workManagement/detailPersonCountInfoLeft (JSP + DWZ, dự án Hanwha_HTSV).
 * Bên trái: NV của 1 kỳ lương (lọc mã NV/họ tên, phòng ban gồm phòng ban con) - SQL detailPersonCountInfoLeft bản gốc
 * đã được port thành API GET /pa/workManagement/api/salaryResult/month nên dùng lại PaSalaryDetailService.getMonthList.
 * Bấm 1 dòng -> bên phải toàn bộ hạng mục lương + hình thức chuẩn (bản gốc detailPersonCountInfoRight).
 * Bản gốc ô Mã NV/Họ tên mở popup chọn NV nhưng chỉ dùng text để lọc LIKE nên bản mới dùng ô nhập thường.
 */
@Component({
  selector: 'app-detail-person-count-info-left',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzInputModule, NzSelectModule, NzTreeSelectModule, NzButtonModule,
    NzTableModule, TranslatePipe, PaPersonSalaryItemsComponent],
  templateUrl: './detail-person-count-info-left.component.html',
  styleUrl: './detail-person-count-info-left.component.css',
})
export class DetailPersonCountInfoLeftComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly sortEmpId = compareBy<PaSalaryDetailDto>('empId');
  readonly sortName = compareBy<PaSalaryDetailDto>('localName');
  readonly sortWages = compareBy<PaSalaryDetailDto>('realWages');

  readonly schedules = signal<PaScheduleOption[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptErrorMessage = signal<string | null>(null);
  readonly rows = signal<PaSalaryDetailDto[]>([]);
  readonly loading = signal(false);
  readonly selected = signal<PaSalaryDetailDto | null>(null);

  empSearch = '';
  payScheduleNo: string | null = null;
  deptNo: string | null = null;
  pageIndex = 1;
  pageSize = 50;
  scheduleLabel = scheduleLabel;

  constructor(
    private readonly api: PaSalaryCheckService,
    private readonly monthApi: PaSalaryDetailService,
    private readonly payStubApi: ViewPaPayStubService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getSchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list?.length) this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
    this.payStubApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.result.msgSelectPaySchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    this.loading.set(true);
    this.selected.set(null);
    this.monthApi.getMonthList(this.payScheduleNo, this.empSearch, this.deptNo).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.pageIndex = 1;
        this.loading.set(false);
      },
      error: (err) => {
        this.rows.set([]);
        this.loading.set(false);
        this.message.error(apiError(err) || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** Bản gốc changeUrlDetail(PAY_SCHEDULE_NO, PERSON_ID) -> detailPersonCountInfoRight. */
  selectRow(row: PaSalaryDetailDto): void {
    this.selected.set(row);
  }

  isSelected(row: PaSalaryDetailDto): boolean {
    const cur = this.selected();
    return !!cur && cur.personId === row.personId && cur.payScheduleNo === row.payScheduleNo;
  }
}
