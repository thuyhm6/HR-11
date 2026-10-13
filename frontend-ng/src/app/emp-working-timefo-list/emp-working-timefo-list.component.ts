import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { EmpWorkingTimefoListService } from './emp-working-timefo-list.service';
import { AuthDeptNode, EmpWorkingTimefoDayDto, EmpWorkingTimefoDto } from './emp-working-timefo-list.model';

const I18N_KEYS = [
  'common.search.empIdOrName', 'common.placeholder.enterEmpId', 'common.fromDate', 'common.toDate',
  'common.deptName', 'common.search', 'common.clearFilter', 'common.exportExcel', 'common.select',
  'common.stt', 'common.empId', 'common.empName', 'common.position', 'common.detail', 'common.close',
  'common.loadFail', 'common.totalRows', 'common.noData', 'attSearch.workDate', 'attSearch.shiftType',
  'mep.msg.loadDeptFailed',
  'ewtl.minDays', 'ewtl.hint', 'ewtl.col.dayCount', 'ewtl.col.detailDayCount', 'ewtl.col.inTime',
  'ewtl.col.outTime', 'ewtl.col.swipeCount', 'ewtl.col.hasDetail', 'ewtl.detail.title', 'ewtl.msg.selectDate',
  'ewtl.days',
];

/** Yêu cầu nghiệp vụ: chỉ lấy chuỗi OUT liên tiếp từ 13 ngày trở lên (backend cũng ép tối thiểu 13). */
const MIN_CONSECUTIVE_DAYS = 13;

/**
 * Theo dõi tình trạng quẹt thẻ (URL menu cũ /ar/countAttendance/empWorkingTimefoList).
 * Liệt kê các chuỗi ngày nhân viên có dữ liệu quẹt thẻ OUT (AR_MAC_RECORDS_HTSV) liên tiếp từ 13 ngày trở lên
 * và có dữ liệu chấm công chi tiết (AR_DETAIL_HTSV) trong chuỗi đó. Click 1 dòng để xem chi tiết từng ngày.
 * Bộ lọc phòng ban / phân trang server-side bám theo ViewArCardRecordComponent.
 */
@Component({
  selector: 'app-emp-working-timefo-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './emp-working-timefo-list.component.html',
  styleUrl: './emp-working-timefo-list.component.css',
})
export class EmpWorkingTimefoListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly minConsecutiveDays = MIN_CONSECUTIVE_DAYS;

  readonly rows = signal<EmpWorkingTimefoDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailRow = signal<EmpWorkingTimefoDto | null>(null);
  readonly detailDays = signal<EmpWorkingTimefoDayDto[]>([]);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  minDays = MIN_CONSECUTIVE_DAYS;

  pageIndex = 1;
  pageSize = 25;

  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: EmpWorkingTimefoListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.search();
  }

  /** Mặc định 2 tháng gần nhất - đủ rộng để bắt chuỗi 13+ ngày vắt qua đầu tháng. */
  private initDefaultDateRange(): void {
    const today = new Date();
    const from = new Date(today);
    from.setMonth(from.getMonth() - 2);
    this.fromDate = from;
    this.toDate = today;
  }

  // ==================== Tìm kiếm + phân trang server-side ====================

  search(): void {
    if (!this.fromDate || !this.toDate) {
      this.message.warning(this.i18n.t('ewtl.msg.selectDate', 'Vui lòng chọn khoảng thời gian tra cứu'));
      return;
    }
    this.pageIndex = 1;
    this.loadPage();
  }

  clearSearch(): void {
    this.keyword = '';
    this.deptNos = [];
    this.minDays = MIN_CONSECUTIVE_DAYS;
    this.initDefaultDateRange();
    this.search();
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

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getPageList({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
        minDays: Math.max(this.minDays || MIN_CONSECUTIVE_DAYS, MIN_CONSECUTIVE_DAYS),
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
          this.rows.set([]);
          this.recordsTotal.set(0);
          this.loading.set(false);
        },
      });
  }

  // ==================== Chi tiết theo ngày ====================

  openDetail(row: EmpWorkingTimefoDto): void {
    this.detailRow.set(row);
    this.detailDays.set([]);
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.api.getStreakDays(row.personId, row.streakFrom, row.streakTo).subscribe({
      next: (list) => {
        this.detailDays.set(list ?? []);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailLoading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  // ==================== Xuất Excel (client-side, trang dữ liệu đang tải) ====================

  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('common.stt', 'STT'), t('common.empId', 'Mã nhân viên'), t('common.empName', 'Họ tên'),
      t('common.deptName', 'Phòng ban'), t('common.position', 'Chức vụ'), t('common.fromDate', 'Từ ngày'),
      t('common.toDate', 'Đến ngày'), t('ewtl.col.dayCount', 'Số ngày OUT liên tiếp'),
      t('ewtl.col.detailDayCount', 'Số ngày có chấm công'),
    ];
    const offset = (this.pageIndex - 1) * this.pageSize;
    const dataRows = this.rows().map((r, i) => [
      offset + i + 1, r.empId, r.localName, r.deptName, r.postGradeName,
      r.streakFrom, r.streakTo, r.dayCount, r.detailDayCount,
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TheoDoiQuetThe');
    XLSX.writeFile(workbook, 'theo_doi_quet_the.xlsx');
  }

  // ==================== Cây phòng ban (giống ViewArCardRecordComponent) ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    this.deptChildrenMap = new Map<string, string[]>();
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });

    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select không tự cascade xuống phòng ban con - backend lọc đúng từng mã nên phải tự mở rộng. */
  private expandDeptSelection(selected: string[]): string[] {
    const result = new Set<string>();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop()!;
      if (result.has(id)) continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children) stack.push(...children);
    }
    return Array.from(result);
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
