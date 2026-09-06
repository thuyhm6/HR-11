import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { DeptOtApplyInfoService } from './dept-ot-apply-info.service';
import { EssDeptOtApplyInfoDto } from './dept-ot-apply-info.model';

interface MonthColumn {
  key: string;
  labelKey: string;
  approvedField: keyof EssDeptOtApplyInfoDto;
  applyField: keyof EssDeptOtApplyInfoDto;
}

const MONTH_COLUMNS: MonthColumn[] = Array.from({ length: 12 }, (_, i) => {
  const mm = String(i + 1).padStart(2, '0');
  return {
    key: mm,
    labelKey: `common.month.${mm}`,
    approvedField: `m${mm}Approved` as keyof EssDeptOtApplyInfoDto,
    applyField: `m${mm}Apply` as keyof EssDeptOtApplyInfoDto,
  };
});

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.year', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'common.deptName', 'essDept.deptNos.placeholder',
  'essDept.search', 'ess.viewMonthDetailList.btnExport',
  'common.stt', 'common.empId', 'common.empName',
  'common.approved', 'ess.viewDeptOtApplyInfo.apply.b',
  'common.noData', 'common.loadFail',
  ...MONTH_COLUMNS.map((m) => m.labelKey),
];

/**
 * Bản Angular của ess/infoApply/viewDeptOtApplyInfo.html (Thymeleaf + DataTables), gọi cùng REST API
 * JSON đã có sẵn ở backend (không đổi backend). Dùng nz-table (phân trang server-side qua
 * nzFrontPagination=false) thay cho DataTables + phân trang tự viết trước đây; nz-select/nz-input
 * cho bộ lọc. Bộ chọn phòng ban vẫn dùng input mã phòng ban (CSV) thay cho widget cây jsTree gốc để
 * giữ PoC gọn.
 */
@Component({
  selector: 'app-dept-ot-apply-info',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NzTableModule, NzSelectModule, NzInputModule,
    NzButtonModule, NzCardModule, NzAlertModule, TranslatePipe,
  ],
  templateUrl: './dept-ot-apply-info.component.html',
  styleUrl: './dept-ot-apply-info.component.css',
})
export class DeptOtApplyInfoComponent implements OnInit {
  readonly monthColumns = MONTH_COLUMNS;
  readonly years = this.buildYearOptions();
  readonly pageSizeOptions = [10, 25, 50, 100];

  readonly rows = signal<EssDeptOtApplyInfoDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);

  year = new Date().getFullYear().toString();
  keyword = '';
  deptNos = '';
  pageIndex = 1;
  pageSize = 25;

  constructor(
    private readonly api: DeptOtApplyInfoService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }

  exportReport(): void {
    const url = this.api.buildExportUrl({ year: this.year, keyword: this.keyword, deptNos: this.deptNos });
    window.location.href = url;
  }

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getPageList({
        year: this.year,
        keyword: this.keyword,
        deptNos: this.deptNos,
        draw: this.pageIndex,
        start: (this.pageIndex - 1) * this.pageSize,
        length: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          if (res.error) {
            this.errorMessage.set(res.error);
            this.rows.set([]);
            this.recordsTotal.set(0);
          } else {
            this.rows.set(res.data ?? []);
            this.recordsTotal.set(res.recordsTotal ?? 0);
          }
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.loading.set(false);
        },
      });
  }

  private buildYearOptions(): string[] {
    const currentYear = new Date().getFullYear();
    const years: string[] = [];
    for (let y = currentYear + 1; y >= currentYear - 5; y--) years.push(String(y));
    return years;
  }
}
