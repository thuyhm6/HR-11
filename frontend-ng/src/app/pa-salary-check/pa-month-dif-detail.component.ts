import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, signal } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { writeExcel } from '../edu-common/edu-excel.util';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { PaSalaryCheckQuery, PaSalaryCheckRow, apiError, compareBy, diff } from './pa-salary-check.model';
import { PaSalaryCheckService } from './pa-salary-check.service';

type DifField = keyof PaSalaryCheckRow | 'diff';

interface DifColumn {
  field: DifField;
  key: string;
  fallback: string;
  number?: boolean;
  width: string;
}

const COL: Record<string, DifColumn> = {
  empId: { field: 'empId', key: 'ess.infoApply.EMP_ID', fallback: 'Mã nhân viên', width: '110px' },
  localName: { field: 'localName', key: 'ess.infoApply.NAME', fallback: 'Họ tên', width: '160px' },
  deptName: { field: 'deptName', key: 'ess.infoApply.DEPT', fallback: 'Phòng ban', width: '160px' },
  postFamilyName: { field: 'postFamilyName', key: 'ess.empInfo.zhiqun', fallback: 'Nhóm nhân viên', width: '120px' },
  postGradeName: { field: 'postGradeName', key: 'ess.infoApply.Rank', fallback: 'Chức vụ', width: '110px' },
  positionName: { field: 'positionName', key: 'pa.salary.canShu.zhiZe', fallback: 'Chức danh', width: '120px' },
  empTypeName: { field: 'empTypeName', key: 'org.title.EMP_TYPE', fallback: 'Loại nhân viên', width: '120px' },
  itemName: { field: 'itemName', key: 'ess.empInfo.project', fallback: 'Hạng mục', width: '150px' },
  monthPro: { field: 'monthPro', key: 'pa.detailItemDifCountInfo.YIQIANJINE.b', fallback: 'Tháng trước', number: true, width: '120px' },
  monthNow: { field: 'monthNow', key: 'pa.detailItemDifCountInfo.DANGYUJINE.b', fallback: 'Tháng này', number: true, width: '120px' },
  diff: { field: 'diff', key: 'ess.infoApply.difference', fallback: 'Chênh lệch', number: true, width: '120px' },
  formularValue: { field: 'formularValue', key: 'pa.detailPersonCountInfoRight.SHIYONGSHI.b', fallback: 'Hình thức chuẩn', width: '200px' },
  dateStarted: { field: 'dateStarted', key: 'ess.empInfo.entry_date', fallback: 'Ngày vào làm', width: '110px' },
  endProbationDate: { field: 'endProbationDate', key: 'hrm.empinfo.START_PROBATION_DATE', fallback: 'Ngày kết thúc thử việc', width: '120px' },
  dateLeft: { field: 'dateLeft', key: 'ess.empInfo.leaveDate', fallback: 'Ngày thôi việc', width: '110px' },
};

/**
 * Bố cục cột theo từng nơi dùng:
 * - full: bản gốc viewResultConfirmList3Right (Xác nhận kết quả tab 2/4, currentIndex != 2).
 * - chain: bản gốc viewResultConfirmList3Right currentIndex = 2 (popup của So sánh lương theo tháng, có xuất Excel).
 * - item: bản gốc detailItemDifCountInfo.jsp (Chênh lệch hạng mục, có xuất Excel).
 */
const LAYOUTS: Record<'full' | 'chain' | 'item', DifColumn[]> = {
  full: [COL['empId'], COL['localName'], COL['deptName'], COL['postGradeName'], COL['positionName'], COL['itemName'],
    COL['monthPro'], COL['monthNow'], COL['diff'], COL['formularValue'], COL['dateStarted'], COL['endProbationDate'],
    COL['dateLeft']],
  chain: [COL['empId'], COL['localName'], COL['deptName'], COL['postFamilyName'], COL['postGradeName'], COL['positionName'],
    COL['empTypeName'], COL['monthPro'], COL['monthNow'], COL['diff']],
  item: [COL['empId'], COL['localName'], COL['deptName'], COL['postFamilyName'], COL['postGradeName'], COL['positionName'],
    COL['dateStarted'], COL['dateLeft'], COL['itemName'], COL['monthPro'], COL['monthNow']],
};

const I18N_KEYS = [
  ...Object.values(COL).map((c) => c.key),
  'ess.infoApply.export_to_Excel', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/**
 * Bảng danh sách NV chênh lệch hạng mục giữa 2 kỳ (PA_MONTH_DIF_ITEM_TEMP) - bản Angular của
 * pa/workManagement/viewResultConfirmList3Right.jsp + detailItemDifCountInfo.jsp (dự án Hanwha_HTSV).
 * Mỗi lần query đổi sẽ gọi lại API /monthDif/details (refresh = gọi lại procedure trước khi đọc).
 */
@Component({
  selector: 'app-pa-month-dif-detail',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzAlertModule, NzButtonModule, NzTooltipModule, TranslatePipe],
  template: `
    <div class="d-flex justify-content-end mb-2" *ngIf="exportName">
      <button nz-button type="button" [attr.id]="idPrefix + 'BtnExport'" (click)="exportExcel()" [disabled]="loading()">
        <i class="bx bx-download"></i> {{ 'ess.infoApply.export_to_Excel' | translate:'Xuất Excel' }}
      </button>
    </div>
    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-2"></nz-alert>
    <nz-table #pmddTable [attr.id]="idPrefix + 'Table'" [nzData]="rows()" [nzLoading]="loading()" nzSize="small" nzBordered
              [(nzPageIndex)]="pageIndex" [(nzPageSize)]="pageSize" [nzPageSizeOptions]="pageSizeOptions"
              [nzShowSizeChanger]="true" [nzShowTotal]="pmddTotalTpl" [nzScroll]="{ x: scrollX, y: scrollY }">
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px" nzLeft>{{ 'common.stt' | translate:'STT' }}</th>
          <th *ngFor="let c of columns" [nzWidth]="c.width" [class.text-end]="c.number" [nzSortFn]="sortFns.get(c.field) ?? null">{{ title(c) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of pmddTable.data; let i = index">
          <td class="text-center" nzLeft>{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
          <td *ngFor="let c of columns" [class.text-end]="c.number">
            <ng-container *ngIf="c.number; else pmddText">{{ $any(value(row, c)) | number:'1.0-0' }}</ng-container>
            <ng-template #pmddText>
              <span *ngIf="c.field === 'formularValue'; else pmddPlain" class="pmdd-formula" nz-tooltip
                    [nzTooltipTitle]="row.formularValue">{{ row.formularValue }}</span>
              <ng-template #pmddPlain>{{ value(row, c) }}</ng-template>
            </ng-template>
          </td>
        </tr>
      </tbody>
      <ng-template #pmddTotalTpl let-total>{{ 'common.totalRows' | translate:'Tổng số dòng:' }} {{ total }}</ng-template>
    </nz-table>
  `,
  styles: [`.pmdd-formula { display: inline-block; max-width: 190px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: bottom; }`],
})
export class PaMonthDifDetailComponent implements OnChanges {
  /** null = chưa chọn -> bảng rỗng. */
  @Input() query: PaSalaryCheckQuery | null = null;
  /** true = gọi lại procedure PA_MONTH_DIF_ITEM_VIEW trước khi đọc. */
  @Input() refresh = false;
  @Input() layout: 'full' | 'chain' | 'item' = 'full';
  /** Có giá trị -> hiện nút Xuất Excel, dùng làm tên file. */
  @Input() exportName: string | null = null;
  @Input({ required: true }) idPrefix = '';
  @Input() scrollY = 'calc(100vh - 420px)';

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly rows = signal<PaSalaryCheckRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  columns: DifColumn[] = LAYOUTS.full;
  sortFns = new Map<DifField, (a: PaSalaryCheckRow, b: PaSalaryCheckRow) => number>();
  scrollX = '1500px';
  pageIndex = 1;
  pageSize = 50;

  constructor(
    private readonly api: PaSalaryCheckService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {
    this.i18n.loadKeys(I18N_KEYS);
  }

  ngOnChanges(): void {
    this.columns = LAYOUTS[this.layout];
    this.sortFns = new Map(this.columns.map((c) => [c.field, this.sortFn(c)]));
    this.scrollX = `${this.columns.reduce((s, c) => s + parseInt(c.width, 10), 60)}px`;
    this.load();
  }

  title(c: DifColumn): string {
    return this.i18n.t(c.key, c.fallback);
  }

  value(row: PaSalaryCheckRow, c: DifColumn): unknown {
    return c.field === 'diff' ? diff(row.monthNow, row.monthPro) : row[c.field];
  }

  private sortFn(c: DifColumn): (a: PaSalaryCheckRow, b: PaSalaryCheckRow) => number {
    if (c.field === 'diff') return (a, b) => diff(a.monthNow, a.monthPro) - diff(b.monthNow, b.monthPro);
    return compareBy<PaSalaryCheckRow>(c.field);
  }

  exportExcel(): void {
    const rows = this.rows();
    if (rows.length === 0) {
      this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
      return;
    }
    const headers = [this.i18n.t('common.stt', 'STT'), ...this.columns.map((c) => this.title(c))];
    const data = rows.map((r, i) => [i + 1, ...this.columns.map((c) => this.value(r, c) ?? '')]);
    writeExcel(`${this.exportName}.xlsx`, headers, data);
  }

  private load(): void {
    this.rows.set([]);
    this.errorMessage.set(null);
    if (!this.query) return;
    this.loading.set(true);
    this.api.getMonthDifDetails(this.query, this.refresh).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.pageIndex = 1;
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(apiError(err) || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }
}
