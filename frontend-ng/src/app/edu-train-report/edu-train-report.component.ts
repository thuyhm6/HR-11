import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { EduCommonService } from '../edu-common/edu-common.service';
import { writeExcel } from '../edu-common/edu-excel.util';
import { EduCodeItem } from '../edu-system-manager/edu-system-manager.model';
import { EduSystemManagerService } from '../edu-system-manager/edu-system-manager.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import {
  EduTrainReportColumn,
  EduTrainReportRow,
  EduTrainReportSearch,
  EduTrainReportType,
  REPORT_DIM_COLUMNS,
  REPORT_FORM_COLUMN,
  REPORT_VALUE_COLUMNS,
} from './edu-train-report.model';
import { EduTrainReportService } from './edu-train-report.service';

const TRAIN_DIFF_PARENT_CODE = '14014478';
const TRAIN_FORM_PARENT_CODE = '14014493';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu/trainreport/*.jsp). */
const I18N_KEYS = [
  ...REPORT_VALUE_COLUMNS.map((c) => c.key), ...Object.values(REPORT_DIM_COLUMNS).flat().map((c) => c.key), REPORT_FORM_COLUMN.key,
  'rp.report.title.reporttype', 'hrm.empinfo.training_distinction', 'edu.trainReport.selectReport', 'edu.trainReport.hourNote',
  'ar.viewsummaryparameteritem.title.hour', 'common.search', 'common.stt', 'common.noData', 'common.totalRows',
  'common.loadFail', 'common.exportExcel', 'common.all',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500];

/**
 * Bản Angular của /report/ar/viewTrainReport?menuNo=14014477 (JSP + DWZ, dự án Hanwha_HTSV): bên trái là các loại báo cáo
 * đào tạo (REPORT_CENTER - mã con của 14015405), bên phải là điều kiện của loại báo cáo đó (bản gốc
 * edu/trainreport/*TrainReport.jsp). Bản gốc chỉ có nút xuất Excel (.xls dạng HTML); bản mới hiển thị kết quả bằng nz-table
 * và xuất .xlsx.
 */
@Component({
  selector: 'app-edu-train-report',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzMenuModule, NzTableModule, NzInputModule, NzButtonModule,
    NzSelectModule, NzDatePickerModule, NzTreeSelectModule, NzAlertModule, TranslatePipe],
  templateUrl: './edu-train-report.component.html',
  styleUrl: './edu-train-report.component.css',
})
export class EduTrainReportComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly reportTypes = signal<EduTrainReportType[]>([]);
  readonly current = signal<EduTrainReportType | null>(null);
  readonly rows = signal<EduTrainReportRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly trainDiffOptions = signal<EduCodeItem[]>([]);
  readonly trainTypeOptions = signal<EduCodeItem[]>([]);
  readonly trainFormOptions = signal<EduCodeItem[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);

  /** Cột của bảng theo loại báo cáo: cột nhóm + hình thức đào tạo (trừ báo cáo theo hình thức) + cột số liệu. */
  readonly columns = computed<EduTrainReportColumn[]>(() => {
    const type = this.current()?.reportKey;
    if (!type) return [];
    return [...REPORT_DIM_COLUMNS[type], ...(type === 'form' ? [] : [REPORT_FORM_COLUMN]), ...REPORT_VALUE_COLUMNS];
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  searchTrainDiffCode: string | null = null;
  searchTrainTypeCode: string | null = null;
  searchCourseName = '';
  searchPostGradeName = '';
  searchDeptNo: string | null = null;
  searchYear: Date | null = null;
  searchMonth: Date | null = null;
  searchTrainFormCode: string | null = null;

  constructor(
    private readonly api: EduTrainReportService,
    private readonly codeApi: EduSystemManagerService,
    private readonly commonApi: EduCommonService,
    readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getReportTypes().subscribe({
      next: (list) => {
        this.reportTypes.set(list ?? []);
        if (list?.length) this.selectReport(list[0]);
      },
      error: (err) => this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
    this.codeApi.getCodeList(TRAIN_DIFF_PARENT_CODE).subscribe({
      next: (l) => this.trainDiffOptions.set(l ?? []),
      error: () => this.trainDiffOptions.set([]),
    });
    this.codeApi.getCodeList(TRAIN_FORM_PARENT_CODE).subscribe({
      next: (l) => this.trainFormOptions.set(l ?? []),
      error: () => this.trainFormOptions.set([]),
    });
    this.commonApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptNodes.set([]),
    });
  }

  selectReport(type: EduTrainReportType): void {
    if (this.current()?.codeNo === type.codeNo) return;
    this.current.set(type);
    this.rows.set([]);
    this.errorMessage.set(null);
    this.search();
  }

  /** Bản gốc panDiffReport(): đổi chương trình đào tạo -> nạp lại loại hình. */
  onTrainDiffChange(code: string | null): void {
    this.searchTrainTypeCode = null;
    this.trainTypeOptions.set([]);
    if (!code) return;
    this.codeApi.getCodeList(code).subscribe({
      next: (l) => this.trainTypeOptions.set(l ?? []),
      error: () => this.trainTypeOptions.set([]),
    });
  }

  private buildSearch(): EduTrainReportSearch | null {
    const type = this.current()?.reportKey;
    if (!type) return null;
    const search: EduTrainReportSearch = { type };
    switch (type) {
      case 'course':
        search.trainDiffCode = this.searchTrainDiffCode;
        search.trainTypeCode = this.searchTrainTypeCode;
        search.courseName = this.searchCourseName;
        break;
      case 'postGrade':
        search.postGradeName = this.searchPostGradeName;
        break;
      case 'dept':
        search.deptNo = this.searchDeptNo;
        break;
      case 'year':
        search.year = this.searchYear ? String(this.searchYear.getFullYear()) : '';
        break;
      case 'month':
        search.month = this.searchMonth
          ? `${this.searchMonth.getFullYear()}${String(this.searchMonth.getMonth() + 1).padStart(2, '0')}` : '';
        break;
      case 'form':
        search.trainFormCode = this.searchTrainFormCode;
        break;
    }
    return search;
  }

  search(): void {
    const search = this.buildSearch();
    if (!search) return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getReport(search).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.pageIndex = 1;
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  columnTitle(c: EduTrainReportColumn): string {
    const title = this.i18n.t(c.key, c.fallback);
    return c.hours ? `${title} (${this.i18n.t('ar.viewsummaryparameteritem.title.hour', 'Tiếng')})` : title;
  }

  isNumber(c: EduTrainReportColumn): boolean {
    return REPORT_VALUE_COLUMNS.includes(c);
  }

  cell(row: EduTrainReportRow, c: EduTrainReportColumn): string | number {
    return row[c.field] ?? '';
  }

  exportExcel(): void {
    const type = this.current();
    if (!type) return;
    const cols = this.columns();
    const headers = [this.i18n.t('common.stt', 'STT'), ...cols.map((c) => this.columnTitle(c))];
    const data = this.rows().map((r, i) => [i + 1, ...cols.map((c) => r[c.field] ?? '')]);
    writeExcel(`trainReport_${type.reportKey}`, headers, data);
  }
}
