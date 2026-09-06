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
  OtApplyPersonalSelfDetailDto,
  OtApplyPersonalSelfDto,
  OtApplyPersonalSelfItem,
  OtApplyPersonalSelfPivotRow,
} from './view-ot-apply-personal-self-list.model';
import { ViewOtApplyPersonalSelfListService } from './view-ot-apply-personal-self-list.service';

/** Các key message.properties dùng trong trang này (toàn bộ tái sử dụng namespace otsl, common đã có
 *  sẵn - không thêm key mới) - tải trước 1 lần ở ngOnInit (xem I18nService). Lưu ý: bảng pivot dùng
 *  otsl.msg.stt/empId/empName/deptName (JS-render bản gốc, VD "Mã NV"), còn modal chi tiết dùng
 *  common.stt/empId/empName (Thymeleaf static, VD "Mã nhân viên") - giữ đúng khác biệt của bản gốc. */
const I18N_KEYS = [
  'otsl.label.startDate', 'otsl.label.endDate', 'otsl.modal.detailTitle',
  'otsl.col.shift', 'otsl.col.workTime', 'otsl.col.date', 'otsl.col.otType',
  'otsl.col.startTime', 'otsl.col.endTime', 'otsl.col.duration',
  'otsl.msg.stt', 'otsl.msg.empId', 'otsl.msg.empName', 'otsl.msg.deptName', 'otsl.msg.total',
  'otsl.msg.noData', 'otsl.msg.loadOtFailed', 'otsl.msg.noDataToExport',
  'otsl.msg.noDataDetail', 'otsl.msg.loadDetailFailed', 'otsl.msg.selectHint',
  'common.search', 'common.exportExcel', 'common.stt', 'common.empId', 'common.empName', 'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

/**
 * Bản Angular của ess/viewDept/viewOtApplyPersonalSelfList.html (Thymeleaf + jQuery, tự build bảng
 * pivot + phân trang bằng tay) - Bảng tổng hợp tăng ca của chính nhân viên đang đăng nhập trong khoảng
 * thời gian tra cứu, mỗi cột là 1 loại hạng mục tăng ca (AR_ITEM), click vào số liệu để xem chi tiết.
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - xem
 * ViewOtApplyPersonalSelfListService. Cấu trúc/pattern giống hệt view-ar-personal-self-list.component
 * (cùng là trang "Self" - backend luôn lọc PERSON_ID = adminID, chỉ khác domain dữ liệu tăng ca thay
 * vì chấm công, và detail có thêm cột "Thời gian làm việc"). Dùng nz-table (phân trang client-side) +
 * sticky-column CSS thủ công (xem .component.css) vì số cột động không xác định trước. Xuất excel
 * client-side bằng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân, thay cho trick HTML-table
 * .xls của bản gốc.
 */
@Component({
  selector: 'app-view-ot-apply-personal-self-list',
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
  templateUrl: './view-ot-apply-personal-self-list.component.html',
  styleUrl: './view-ot-apply-personal-self-list.component.css',
})
export class ViewOtApplyPersonalSelfListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly items = signal<OtApplyPersonalSelfItem[]>([]);
  readonly rows = signal<OtApplyPersonalSelfPivotRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly detailVisible = signal(false);
  readonly detailTitle = signal('');
  readonly detailRows = signal<OtApplyPersonalSelfDetailDto[]>([]);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);

  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(
    private readonly api: ViewOtApplyPersonalSelfListService,
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
          this.errorMessage.set(this.i18n.t('otsl.msg.loadOtFailed', 'Không tải được dữ liệu tình hình tăng ca.'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Định dạng số lượng: bỏ số 0 vô nghĩa, giữ tối đa 2 chữ số thập phân - giống otslFmtQty() bản gốc. */
  fmtQty(v: unknown): string {
    const n = parseFloat(String(v));
    if (isNaN(n) || n === 0) return '0';
    return n % 1 === 0 ? String(n) : n.toFixed(2).replace(/\.?0+$/, '');
  }

  /** arDateStr trả về từ backend theo định dạng YYYY/MM/DD - chuyển sang DD/MM/YYYY để hiển thị theo
   *  quy định định dạng ngày của dự án - đúng otslFmtDate() bản gốc. */
  formatDetailDate(s: string | null | undefined): string {
    if (!s) return '';
    const p = s.split('/');
    return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : s;
  }

  openDetail(row: OtApplyPersonalSelfPivotRow, item: OtApplyPersonalSelfItem): void {
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
          this.detailErrorMessage.set(this.i18n.t('otsl.msg.loadDetailFailed', 'Tải dữ liệu thất bại.'));
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
      this.errorMessage.set(this.i18n.t('otsl.msg.noDataToExport', 'Không có dữ liệu để xuất.'));
      return;
    }
    const items = this.items();
    const headers = [
      this.i18n.t('otsl.msg.stt', 'STT'),
      this.i18n.t('otsl.msg.empId', 'Mã NV'),
      this.i18n.t('otsl.msg.empName', 'Họ tên'),
      this.i18n.t('otsl.msg.deptName', 'Phòng ban'),
      this.i18n.t('otsl.msg.total', 'Tổng'),
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
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TangCa');
    XLSX.writeFile(workbook, 'tinh_hinh_tang_ca_ca_nhan.xlsx');
  }

  /** Pivot dữ liệu thô (mỗi dòng 1 cặp personId/itemNo) theo personId - đúng otslPivot() bản gốc. */
  private buildPivot(rows: OtApplyPersonalSelfDto[]): OtApplyPersonalSelfPivotRow[] {
    const map = new Map<string, OtApplyPersonalSelfPivotRow>();
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

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - đúng otslDefaultCurrentMonth() bản gốc. */
  private setDefaultDateRange(): void {
    const now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }
}
