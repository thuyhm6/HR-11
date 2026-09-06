import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaPayScheduleDto, PaPayStubDto } from './pa-month-person-info.model';
import { PaMonthPersonInfoService } from './pa-month-person-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'pa.monthPersonInfo.paySchedule', 'pa.monthPersonInfo.search', 'pa.monthPersonInfo.print',
  'pa.monthPersonInfo.loading', 'pa.monthPersonInfo.noData', 'pa.monthPersonInfo.slipTitle',
  'pa.monthPersonInfo.basicInfo', 'pa.monthPersonInfo.empName', 'pa.monthPersonInfo.empId',
  'pa.monthPersonInfo.dept', 'pa.monthPersonInfo.empType', 'pa.monthPersonInfo.empGroup',
  'pa.monthPersonInfo.position', 'pa.monthPersonInfo.grade', 'pa.monthPersonInfo.workStatus',
  'pa.monthPersonInfo.dependent', 'pa.monthPersonInfo.account', 'pa.monthPersonInfo.bankName',
  'pa.monthPersonInfo.accountNo', 'pa.monthPersonInfo.socialInsuranceNo', 'pa.monthPersonInfo.standardItems',
  'pa.monthPersonInfo.itemName', 'pa.monthPersonInfo.amount', 'pa.monthPersonInfo.attendanceItems',
  'pa.monthPersonInfo.salaryItems', 'pa.monthPersonInfo.deductionItems', 'pa.monthPersonInfo.attendanceItem',
  'pa.monthPersonInfo.value', 'pa.monthPersonInfo.salaryItem', 'pa.monthPersonInfo.deductionItem',
  'pa.monthPersonInfo.total', 'pa.monthPersonInfo.netSalary', 'pa.monthPersonInfo.otherItems',
  'pa.monthPersonInfo.note', 'pa.monthPersonInfo.msgSelectSchedule', 'pa.monthPersonInfo.msgNoDataToPrint',
  'common.loadFail',
];

/**
 * Bản Angular của pa/salary/viewPaMonthPersonInfoEssList.html (Thymeleaf) - Phiếu lương tháng (ESS,
 * chỉ xem phiếu lương của chính nhân viên đang đăng nhập). Gọi lại nguyên API JSON đã có sẵn (xem
 * PaMonthPersonInfoService) - không đổi backend. Trang gốc không dùng DataTables (không phải danh
 * sách dạng bảng để phân trang) mà render phiếu lương dạng "hoá đơn" bằng JS string; phần thật sự có
 * dạng bảng dữ liệu (hạng mục tiêu chuẩn, bảng 3 cột chấm công/lương/khoản trừ) được đổi sang nz-table
 * (không phân trang, giống bảng "quá trình nội bộ" trong ManageEmpPositionInfoComponent) thay vì
 * dựng bảng HTML thủ công. In phiếu lương giữ nguyên kỹ thuật lấy innerHTML vùng preview mở cửa sổ
 * mới rồi gọi window.print().
 */
@Component({
  selector: 'app-pa-month-person-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzSpinModule,
    NzEmptyModule,
    TranslatePipe,
  ],
  templateUrl: './pa-month-person-info.component.html',
  styleUrl: './pa-month-person-info.component.css',
})
export class PaMonthPersonInfoComponent implements OnInit {
  @ViewChild('printArea') printAreaEl?: ElementRef<HTMLDivElement>;

  readonly schedules = signal<PaPayScheduleDto[]>([]);
  readonly stubs = signal<PaPayStubDto[]>([]);
  readonly loading = signal(false);
  readonly searched = signal(false);

  payScheduleNo: string | null = null;

  constructor(
    private readonly api: PaMonthPersonInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
  }

  /** Ghi chú của công ty (empOpinion) gắn theo kế hoạch trả lương đang chọn - thay cho ghi chú mặc
   *  định khi có, giống hcv_currentEmpOpinion ở bản gốc. */
  get selectedScheduleOpinion(): string {
    return this.schedules().find((s) => s.payScheduleNo === this.payScheduleNo)?.empOpinion || '';
  }

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.monthPersonInfo.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }

    this.loading.set(true);
    this.searched.set(true);
    this.stubs.set([]);
    const lang = document.documentElement.lang || 'vi';
    this.api.loadSelfPayStub(this.payScheduleNo, lang).subscribe({
      next: (list) => {
        this.stubs.set(list ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        const msg = err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!');
        this.message.error(msg);
      },
    });
  }

  sum(items: { itemValue: number }[] | null | undefined): number {
    return (items || []).reduce((acc, item) => acc + (Number(item.itemValue) || 0), 0);
  }

  netSalary(stub: PaPayStubDto): number {
    return this.sum(stub.salaryItems) - this.sum(stub.deductionItems);
  }

  visibleOtherItems(stub: PaPayStubDto): PaPayStubDto['otherItems'] {
    return (stub.otherItems || []).filter((o) => o.returnValue || o.remark);
  }

  /** Ghép hàng 3 cột Chấm công / Lương / Khoản trừ theo chỉ số dòng (cột nào hết dữ liệu để trống). */
  tripleRows(stub: PaPayStubDto): { att?: PaPayStubDto['attendanceItems'][0]; sal?: PaPayStubDto['salaryItems'][0]; ded?: PaPayStubDto['deductionItems'][0] }[] {
    const maxRows = Math.max(stub.attendanceItems?.length || 0, stub.salaryItems?.length || 0, stub.deductionItems?.length || 0);
    const rows = [];
    for (let i = 0; i < maxRows; i++) {
      rows.push({ att: stub.attendanceItems?.[i], sal: stub.salaryItems?.[i], ded: stub.deductionItems?.[i] });
    }
    return rows;
  }

  /** yyyy-MM-dd hoặc yyyy/MM/dd -> MM-yyyy (tháng-năm hiển thị trên tiêu đề phiếu lương). */
  monthYear(hrEndDate: string | null | undefined): string {
    if (!hrEndDate) return '';
    const parts = hrEndDate.split(/[-/]/);
    return parts.length >= 2 ? `${parts[1]}-${parts[0]}` : hrEndDate;
  }

  formatNumber(val: number | null | undefined): string {
    if (val === null || val === undefined || (val as unknown as string) === '') return '';
    const num = Number(val);
    return isNaN(num) ? '' : num.toLocaleString('vi-VN');
  }

  /** In - lấy nguyên HTML đã render của vùng phiếu lương (giống bản gốc lấy innerHTML #vpmpi_printArea)
   *  mở cửa sổ mới rồi gọi window.print(), giữ nguyên CSS in riêng (khổ A4, ngắt trang theo từng phiếu). */
  print(): void {
    const html = this.printAreaEl?.nativeElement.innerHTML;
    if (!html || !html.trim()) {
      this.message.warning(this.i18n.t('pa.monthPersonInfo.msgNoDataToPrint', 'Không có phiếu lương để in!'));
      return;
    }
    const printWin = window.open('', '_blank');
    if (!printWin) return;
    printWin.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${VPMPI_PRINT_CSS}</style></head><body>${html}</body></html>`);
    printWin.document.close();
    printWin.onload = () => {
      printWin.focus();
      printWin.print();
      printWin.close();
    };
  }

  private loadSchedules(): void {
    this.api.getOpenPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list && list.length > 0) this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }
}

/** Giữ nguyên CSS in ấn từ bản gốc (VPMPI_PRINT_CSS trong viewPaMonthPersonInfoEssList.html). */
const VPMPI_PRINT_CSS = [
  '@page { size:A4 portrait; margin:8mm; }',
  '*, *::before, *::after { box-sizing:border-box; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }',
  'html, body { width:194mm; margin:0 auto; padding:0; background:#fff; font-family:Arial,sans-serif; font-size:10px; color:#111; }',
  'table { max-width:100% !important; word-break:break-word; }',
  '.vpmpi-pay-stub { width:100%; max-width:194mm; margin:0 auto; padding:4mm 0; background:#fff; page-break-after:always; break-after:page; overflow:hidden; }',
  '.vpmpi-pay-stub:last-child { page-break-after:avoid; break-after:avoid; }',
  '.vpmpi-stub-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; border-bottom:2.5px solid #922b21; padding-bottom:6px; }',
  '.vpmpi-logo { font-size:12px; font-weight:bold; color:#922b21; line-height:1.4; min-width:100px; }',
  '.vpmpi-logo img { height:32px; margin-right:6px; vertical-align:middle; }',
  '.vpmpi-title { font-size:15px; font-weight:bold; text-align:center; flex:1; color:#1a1a2e; letter-spacing:1px; }',
  '.vpmpi-section-title { background:#922b21; color:#fff; font-weight:bold; padding:2px 6px; margin:6px 0 0 0; font-size:10px; }',
  '.vpmpi-section-title::before { content:"\\25A0 "; }',
  '.vpmpi-info-table { width:100%; border-collapse:collapse; table-layout:fixed; }',
  '.vpmpi-info-table th { background:#f2e0e0; color:#333; font-weight:bold; padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; text-align:center; overflow:hidden; white-space:nowrap; }',
  '.vpmpi-info-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#fff; overflow:hidden; word-break:break-word; }',
  '.vpmpi-detail-table { width:100%; border-collapse:collapse; }',
  '.vpmpi-detail-table th { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#f2e0e0; color:#333; font-weight:bold; text-align:center; }',
  '.vpmpi-detail-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#fff; }',
  '.vpmpi-detail-table tbody tr:nth-child(even) td { background:#fafafa; }',
  '.vpmpi-triple-table { width:100%; border-collapse:collapse; margin-top:6px; table-layout:fixed; }',
  '.vpmpi-triple-table th, .vpmpi-triple-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; overflow:hidden; word-break:break-word; }',
  '.vpmpi-att-header { background:#1a5276; color:#fff; font-weight:bold; width:18%; }',
  '.vpmpi-sal-header { background:#922b21; color:#fff; font-weight:bold; width:18%; }',
  '.vpmpi-ded-header { background:#1a5276; color:#fff; font-weight:bold; width:18%; }',
  '.vpmpi-triple-table thead tr:nth-child(2) th { background:#f2e0e0; color:#333; font-weight:bold; text-align:center; }',
  '.vpmpi-triple-table tbody td { background:#fff; }',
  '.vpmpi-triple-table tbody tr:nth-child(even) td { background:#fafafa; }',
  '.vpmpi-triple-table tfoot td { background:#ececec; font-weight:bold; border:1px solid #c8c8c8; }',
  '.vpmpi-net-table { width:100%; border-collapse:collapse; margin-bottom:6px; }',
  '.vpmpi-net-table td { padding:5px 8px; border:1.5px solid #999; background:#fef9e7; font-size:12px; font-weight:bold; color:#111; }',
  '.vpmpi-note { font-size:9px; color:#555; margin-top:8px; font-style:italic; border-top:1px dashed #ccc; padding-top:4px; }',
  '.text-end { text-align:right !important; }',
  '.text-center { text-align:center !important; }',
  '.fw-bold { font-weight:bold !important; }',
].join('\n');
