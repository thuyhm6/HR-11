import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { writeExcel } from '../edu-common/edu-excel.util';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ITEM_TYPE_OPTIONS,
  PaCheckColumn,
  PaSalaryCheckItem,
  PaSalaryCheckRow,
  PaScheduleOption,
  apiError,
  compareBy,
  scheduleLabel,
} from '../pa-salary-check/pa-salary-check.model';
import { PaSalaryCheckService } from '../pa-salary-check/pa-salary-check.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Cột theo đúng thứ tự bản gốc detailItemCountInfo.jsp. */
const COLUMNS: PaCheckColumn<PaSalaryCheckRow>[] = [
  { field: 'localName', key: 'ess.infoApply.NAME', fallback: 'Họ tên', width: '170px' },
  { field: 'empId', key: 'ess.infoApply.EMP_ID', fallback: 'Mã nhân viên', width: '110px' },
  { field: 'deptName', key: 'ess.infoApply.DEPT_NAME', fallback: 'Phòng ban', width: '170px' },
  { field: 'postFamilyName', key: 'ess.empInfo.zhiqun', fallback: 'Nhóm nhân viên', width: '130px' },
  { field: 'postGradeName', key: 'hrm.contract.Rank', fallback: 'Chức vụ', width: '120px' },
  { field: 'positionName', key: 'ess.infoApply.title.dutyName', fallback: 'Chức danh', width: '130px' },
  { field: 'payNumber', key: 'pa.detailItemCountInfo.SHIJIQUFEN.b', fallback: 'Số tiền', number: true, width: '130px' },
  { field: 'formularValue', key: 'pa.detailPersonCountInfoRight.SHIYONGSHI.b', fallback: 'Hình thức chuẩn', width: '260px' },
  { field: 'remark', key: 'ess.empInfo.remarks', fallback: 'Ghi chú', width: '160px' },
];

const I18N_KEYS = [
  ...COLUMNS.map((c) => c.key), ...ITEM_TYPE_OPTIONS.map((o) => o.key),
  'ess.empInfo.pay_plan', 'liang.public.title.ItemDistinguish', 'pa.detailItemCountInfo.XIANGXIQUFEN.b',
  'pa.result.msgSelectPaySchedule', 'pa.salaryCheck.msgSelectItem', 'ess.infoApply.export_to_Excel',
  'public.title.search', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/**
 * Lương theo hạng mục - bản Angular của /pa/workManagement/detailItemCountInfo (JSP + DWZ, dự án Hanwha_HTSV).
 * Chọn kế hoạch trả lương + loại hạng mục + hạng mục chi tiết -> số tiền thực tế, công thức, ghi chú của từng NV
 * (chỉ NV có số tiền > 0 như bản gốc). Thêm nút xuất .xlsx theo các cột đang hiển thị.
 */
@Component({
  selector: 'app-detail-item-count-info',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzSelectModule, NzButtonModule, NzTableModule, NzTooltipModule,
    TranslatePipe],
  templateUrl: './detail-item-count-info.component.html',
  styleUrl: './detail-item-count-info.component.css',
})
export class DetailItemCountInfoComponent implements OnInit {
  readonly columns = COLUMNS;
  readonly itemTypeOptions = ITEM_TYPE_OPTIONS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly sortFns = new Map(COLUMNS.map((c) => [c.field, compareBy<PaSalaryCheckRow>(c.field)]));

  readonly schedules = signal<PaScheduleOption[]>([]);
  readonly items = signal<PaSalaryCheckItem[]>([]);
  readonly itemType = signal<number>(1);
  /** Bản gốc changeSelect(): hạng mục chi tiết lọc theo loại hạng mục. */
  readonly itemsOfType = computed(() => this.items().filter((i) => String(i.itemType) === String(this.itemType())));
  readonly rows = signal<PaSalaryCheckRow[]>([]);
  readonly loading = signal(false);

  payScheduleNo: string | null = null;
  itemId: string | null = null;
  pageIndex = 1;
  pageSize = 50;
  scheduleLabel = scheduleLabel;
  private searchedTitle = '';

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
    this.api.getItemOptions().subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        this.resetItem();
      },
      error: () => this.items.set([]),
    });
  }

  onItemTypeChange(value: number): void {
    this.itemType.set(value);
    this.resetItem();
  }

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.result.msgSelectPaySchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    if (!this.itemId) {
      this.message.warning(this.i18n.t('pa.salaryCheck.msgSelectItem', 'Vui lòng chọn hạng mục chi tiết!'));
      return;
    }
    const itemName = this.items().find((i) => i.itemId === this.itemId)?.itemName ?? this.itemId;
    this.loading.set(true);
    this.api.getItemCount({ payScheduleNo: this.payScheduleNo, itemId: this.itemId }).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.searchedTitle = itemName;
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

  title(c: PaCheckColumn<PaSalaryCheckRow>): string {
    return this.i18n.t(c.key, c.fallback);
  }

  exportExcel(): void {
    const rows = this.rows();
    if (rows.length === 0) {
      this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
      return;
    }
    const headers = [this.i18n.t('common.stt', 'STT'), ...COLUMNS.map((c) => this.title(c))];
    const data = rows.map((r, i) => [i + 1, ...COLUMNS.map((c) => r[c.field] ?? '')]);
    writeExcel(`${this.searchedTitle}.xlsx`, headers, data);
  }

  private resetItem(): void {
    this.itemId = this.itemsOfType()[0]?.itemId ?? null;
  }
}
