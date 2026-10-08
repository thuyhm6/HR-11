import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DetailPersonCountInfoComponent } from '../detail-person-count-info/detail-person-count-info.component';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  PaCheckColumn,
  PaSalaryCheckRow,
  PaScheduleOption,
  apiError,
  compareBy,
  displayDate,
} from '../pa-salary-check/pa-salary-check.model';
import { PaSalaryCheckService } from '../pa-salary-check/pa-salary-check.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Cột theo đúng thứ tự bản gốc viewVerificationList.jsp. */
const COLUMNS: PaCheckColumn<PaSalaryCheckRow>[] = [
  { field: 'localName', key: 'ess.infoApply.NAME', fallback: 'Họ tên', width: '170px' },
  { field: 'empId', key: 'ess.infoApply.EMP_ID', fallback: 'Mã nhân viên', width: '110px' },
  { field: 'deptName', key: 'ess.infoApply.DEPT', fallback: 'Phòng ban', width: '170px' },
  { field: 'postFamilyName', key: 'ess.empInfo.zhiqun', fallback: 'Nhóm nhân viên', width: '130px' },
  { field: 'postGradeName', key: 'hrm.contract.Rank', fallback: 'Chức vụ', width: '120px' },
  { field: 'positionName', key: 'pa.salary.canShu.zhiZe', fallback: 'Chức danh', width: '130px' },
  { field: 'empTypeName', key: 'org.title.EMP_TYPE', fallback: 'Loại nhân viên', width: '120px' },
  { field: 'dateStarted', key: 'ess.empInfo.entry_date', fallback: 'Ngày vào làm', width: '110px' },
  { field: 'dateLeft', key: 'ess.empInfo.leaveDate', fallback: 'Ngày thôi việc', width: '110px' },
  { field: 'transDate', key: 'hr.enpinfo.title.EMP.EXPDATE', fallback: 'Thời gian', width: '110px' },
  { field: 'transCodeName', key: 'hr.assignment.type', fallback: 'Quyết định', width: '150px' },
];

const I18N_KEYS = [
  ...COLUMNS.map((c) => c.key),
  'ess.infoApply.NAME_EMPID', 'ess.empInfo.pay_plan', 'pa.result.msgSelectPaySchedule', 'pa.viewPaMain.GONGZIXIANGXIMINGXI.C',
  'public.title.search', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/**
 * Kiểm tra quyết định nhân sự - bản Angular của /pa/workManagement/viewVerificationList (JSP + DWZ, dự án Hanwha_HTSV).
 * Liệt kê các quyết định nhân sự (HR_EXPERIENCE_INSIDE) phát sinh trong kỳ chấm công của kế hoạch trả lương.
 * Bấm 1 dòng -> popup Chi tiết lương của NV đó (bản gốc mở tab detailPersonCountInfo).
 */
@Component({
  selector: 'app-view-verification-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzInputModule, NzSelectModule, NzButtonModule, NzTableModule,
    NzModalModule, TranslatePipe, DetailPersonCountInfoComponent],
  templateUrl: './view-verification-list.component.html',
  styleUrl: './view-verification-list.component.css',
})
export class ViewVerificationListComponent implements OnInit {
  readonly columns = COLUMNS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly sortFns = new Map(COLUMNS.map((c) => [c.field, compareBy<PaSalaryCheckRow>(c.field)]));

  readonly schedules = signal<PaScheduleOption[]>([]);
  readonly rows = signal<PaSalaryCheckRow[]>([]);
  readonly loading = signal(false);
  /** NV đang xem chi tiết lương (popup). */
  readonly detail = signal<{ personId: string; payScheduleNo: string; title: string } | null>(null);

  empSearch = '';
  payScheduleNo: string | null = null;
  pageIndex = 1;
  pageSize = 50;
  private searchedScheduleNo: string | null = null;

  constructor(
    private readonly api: PaSalaryCheckService,
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
  }

  /** Bản gốc hiển thị 'Phân loại lương-Ngày phát'. */
  scheduleLabel(s: PaScheduleOption): string {
    return `${s.salaryDistinName ?? ''}-${displayDate(s.payDate)}`;
  }

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.result.msgSelectPaySchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    const payScheduleNo = this.payScheduleNo;
    this.loading.set(true);
    this.api.getVerification({ payScheduleNo, empSearch: this.empSearch }).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.searchedScheduleNo = payScheduleNo;
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

  openDetail(row: PaSalaryCheckRow): void {
    if (!this.searchedScheduleNo) return;
    const title = `${this.i18n.t('pa.viewPaMain.GONGZIXIANGXIMINGXI.C', 'Chi tiết lương')} - ${row.empId} ${row.localName}`;
    this.detail.set({ personId: row.personId, payScheduleNo: this.searchedScheduleNo, title });
  }

  closeDetail(): void {
    this.detail.set(null);
  }

  title(c: PaCheckColumn<PaSalaryCheckRow>): string {
    return this.i18n.t(c.key, c.fallback);
  }
}
