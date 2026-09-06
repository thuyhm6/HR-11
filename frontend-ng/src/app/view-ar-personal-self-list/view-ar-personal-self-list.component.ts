import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ArPersonalSelfDetailDto,
  ArPersonalSelfDto,
  ArPersonalSelfItem,
  ArPersonalSelfPivotRow,
} from './view-ar-personal-self-list.model';
import { ViewArPersonalSelfListService } from './view-ar-personal-self-list.service';

/** Các key message.properties dùng trong trang này (toàn bộ tái sử dụng namespace apsl, common đã có
 *  sẵn - không thêm key mới) - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'apsl.label.startDate', 'apsl.label.endDate', 'apsl.modal.title',
  'apsl.detail.col.shift', 'apsl.detail.col.date', 'apsl.detail.col.leaveType',
  'apsl.detail.col.startTime', 'apsl.detail.col.endTime', 'apsl.detail.col.duration', 'apsl.detail.hint',
  'apsl.msg.stt', 'apsl.msg.empId', 'apsl.msg.empName', 'apsl.msg.deptName', 'apsl.msg.total',
  'apsl.msg.noData', 'apsl.msg.loadFailed', 'apsl.msg.noDataExport',
  'apsl.msg.noDataDetail', 'apsl.msg.loadDetailFailed',
  'common.search', 'common.exportExcel', 'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

/**
 * Bản Angular của ess/viewDept/viewArPersonalSelfList.html (Thymeleaf + jQuery, tự build bảng pivot +
 * phân trang bằng tay) - Bảng tổng hợp chấm công (trừ tăng ca) của chính nhân viên đang đăng nhập
 * trong khoảng thời gian tra cứu, mỗi cột là 1 loại hạng mục (AR_ITEM), click vào số liệu để xem chi
 * tiết. Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - xem
 * ViewArPersonalSelfListService. Backend luôn lọc PERSON_ID = adminID nên summary() thực tế chỉ trả
 * đúng 1 nhân viên (chính mình) - khác trang view-ar-personal-list (phạm vi phòng ban, có bộ lọc
 * dept/keyword/loại NV). Dùng nz-table (phân trang client-side) + sticky-column CSS thủ công (xem
 * .component.css) - giống hệt cách view-ar-personal-list xử lý số cột động không xác định trước. Xuất
 * excel client-side bằng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân, thay cho trick
 * HTML-table .xls của bản gốc - giống manage-emp-position-info/view-ar-personal-list.
 */
@Component({
  selector: 'app-view-ar-personal-self-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzButtonModule,
    NzDatePickerModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-ar-personal-self-list.component.html',
  styleUrl: './view-ar-personal-self-list.component.css',
})
export class ViewArPersonalSelfListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly items = signal<ArPersonalSelfItem[]>([]);
  readonly rows = signal<ArPersonalSelfPivotRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly detailVisible = signal(false);
  readonly detailTitle = signal('');
  readonly detailRows = signal<ArPersonalSelfDetailDto[]>([]);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);

  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(
    private readonly api: ViewArPersonalSelfListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.setDefaultDateRange();
    this.loadItemsThenSearch();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getSummary({ startDate: this.formatDmy(this.startDate), endDate: this.formatDmy(this.endDate) })
      .subscribe({
        next: (rows) => {
          this.rows.set(this.buildPivot(rows ?? []));
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('apsl.msg.loadFailed', 'Không tải được dữ liệu tình hình chấm công.'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Định dạng số lượng: bỏ số 0 vô nghĩa, giữ tối đa 2 chữ số thập phân - giống apslFmtQty() bản gốc. */
  fmtQty(v: unknown): string {
    const n = parseFloat(String(v));
    if (isNaN(n) || n === 0) return '0';
    return n % 1 === 0 ? String(n) : n.toFixed(2).replace(/\.?0+$/, '');
  }

  /** arDateStr trả về từ backend theo định dạng YYYY/MM/DD - chuyển sang DD/MM/YYYY để hiển thị theo
   *  quy định định dạng ngày của dự án - đúng apslFmtDate() bản gốc. */
  formatDetailDate(s: string | null | undefined): string {
    if (!s) return '';
    const p = s.split('/');
    return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : s;
  }

  openDetail(row: ArPersonalSelfPivotRow, item: ArPersonalSelfItem): void {
    this.detailTitle.set(item.itemName);
    this.detailRows.set([]);
    this.detailErrorMessage.set(null);
    this.detailVisible.set(true);
    if (!row.personId) return;
    this.detailLoading.set(true);
    this.api
      .getDetail(row.personId, item.itemNo, this.formatDmy(this.startDate), this.formatDmy(this.endDate))
      .subscribe({
        next: (rows) => {
          this.detailRows.set(rows ?? []);
          this.detailLoading.set(false);
        },
        error: () => {
          this.detailErrorMessage.set(this.i18n.t('apsl.msg.loadDetailFailed', 'Tải dữ liệu thất bại.'));
          this.detailLoading.set(false);
        },
      });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  /** Xuất excel client-side (bản gốc dùng trick HTML-table .xls, không phải .xlsx thật) - dùng thư
   *  viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    const rows = this.rows();
    if (!rows.length) {
      this.errorMessage.set(this.i18n.t('apsl.msg.noDataExport', 'Không có dữ liệu để xuất.'));
      return;
    }
    const items = this.items();
    const headers = [
      this.i18n.t('apsl.msg.stt', 'STT'),
      this.i18n.t('apsl.msg.empId', 'Mã NV'),
      this.i18n.t('apsl.msg.empName', 'Họ tên'),
      this.i18n.t('apsl.msg.deptName', 'Phòng ban'),
      this.i18n.t('apsl.msg.total', 'Tổng'),
      ...items.map((it) => it.itemName),
    ];
    const dataRows = rows.map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      this.fmtQty(r.total),
      ...items.map((it) => this.fmtQty(r.items[it.itemNo] || 0)),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'ChamCong');
    XLSX.writeFile(workbook, 'tinh_hinh_cham_cong_ca_nhan.xlsx');
  }

  /** Pivot dữ liệu thô (mỗi dòng 1 cặp personId/itemNo) theo personId - đúng apslPivot() bản gốc. */
  private buildPivot(rows: ArPersonalSelfDto[]): ArPersonalSelfPivotRow[] {
    const map = new Map<string, ArPersonalSelfPivotRow>();
    const order: string[] = [];
    for (const row of rows) {
      let entry = map.get(row.personId);
      if (!entry) {
        entry = { personId: row.personId, empId: row.empId, localName: row.localName, deptName: row.deptName, total: 0, items: {} };
        map.set(row.personId, entry);
        order.push(row.personId);
      }
      const qty = parseFloat(String(row.totalQuantity)) || 0;
      entry.items[row.itemNo] = qty;
      entry.total += qty;
    }
    return order.map((pid) => map.get(pid)!);
  }

  private loadItemsThenSearch(): void {
    this.api.getItems().subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        this.search();
      },
      error: () => {
        this.items.set([]);
        this.search();
      },
    });
  }

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - đúng apslDefaultCurrentMonth() bản gốc. */
  private setDefaultDateRange(): void {
    const now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }
}
