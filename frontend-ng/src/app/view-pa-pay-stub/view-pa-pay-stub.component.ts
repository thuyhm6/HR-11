import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ChangeUserService } from '../change-user/change-user.service';
import { AuthDeptNode, CodeItem, PaPayScheduleDto, PaPayStubDto } from './view-pa-pay-stub.model';
import { ViewPaPayStubService } from './view-pa-pay-stub.service';

/** Các key message.properties dùng trong trang này - namespace pa.payStub.* đã có sẵn đầy đủ (dùng
 *  chung với bản Thymeleaf gốc payStub.html), chỉ bổ sung thêm 3 key cảnh báo/xác nhận còn thiếu
 *  (msgNoDataToPrint, msgRecalcNoEmp, msgRecalcSuccess). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'pa.payStub.paySchedule', 'pa.payStub.dept', 'pa.payStub.deptPlaceholder', 'pa.payStub.empSearch',
  'pa.payStub.empSearchPlaceholder', 'pa.payStub.empOffice', 'pa.payStub.search', 'pa.payStub.print',
  'pa.payStub.recalculate', 'pa.payStub.loading', 'pa.payStub.noData', 'pa.payStub.slipTitle',
  'pa.payStub.basicInfo', 'pa.payStub.empName', 'pa.payStub.empId', 'pa.payStub.empType', 'pa.payStub.empGroup',
  'pa.payStub.position', 'pa.payStub.grade', 'pa.payStub.workStatus', 'pa.payStub.dependent', 'pa.payStub.account',
  'pa.payStub.bankName', 'pa.payStub.accountNo', 'pa.payStub.socialInsuranceNo', 'pa.payStub.standardItems',
  'pa.payStub.itemName', 'pa.payStub.amount', 'pa.payStub.attendanceItems', 'pa.payStub.salaryItems',
  'pa.payStub.deductionItems', 'pa.payStub.attendanceItem', 'pa.payStub.value', 'pa.payStub.salaryItem',
  'pa.payStub.deductionItem', 'pa.payStub.total', 'pa.payStub.netSalary', 'pa.payStub.otherItems',
  'pa.payStub.note', 'pa.payStub.msgSelectSchedule', 'pa.payStub.msgNoDataToPrint', 'pa.payStub.msgRecalcNoEmp',
  'pa.payStub.msgRecalcSuccess', 'common.loadFail', 'common.selectAll', 'mep.msg.loadDeptFailed',
];

const EMP_OFFICE_PARENT_CODE = '15118';

/**
 * Bản Angular của pa/workManagement/payStub.html (Thymeleaf) - Phiếu lương tháng (bản quản trị/HR,
 * tra cứu phiếu lương của NHIỀU nhân viên theo phòng ban/họ tên/trạng thái làm việc, có nút "Tính
 * lại lương"). Phần render phiếu lương dạng "hoá đơn" và kỹ thuật in giữ nguyên như
 * PaMonthPersonInfoComponent (bản ESS chỉ xem phiếu của chính mình) - đổi bảng hạng mục tiêu chuẩn
 * và bảng 3 cột chấm công/lương/khoản trừ sang nz-table (không phân trang). Phần bộ lọc phòng ban
 * (nz-tree-select) + trạng thái làm việc (nz-select mã 15118) theo đúng pattern của
 * ViewPaEmpAccountComponent - nz-tree-select chỉ trả về key được tick trực tiếp nên cần
 * expandDeptSelection() mở rộng xuống phòng ban con trước khi gửi API, khớp hành vi cascade của
 * widget DeptTree.js gốc.
 */
@Component({
  selector: 'app-view-pa-pay-stub',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzSpinModule,
    NzEmptyModule,
    NzTreeSelectModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-pay-stub.component.html',
  styleUrl: './view-pa-pay-stub.component.css',
})
export class ViewPaPayStubComponent implements OnInit {
  @ViewChild('printArea') printAreaEl?: ElementRef<HTMLDivElement>;

  readonly schedules = signal<PaPayScheduleDto[]>([]);
  readonly stubs = signal<PaPayStubDto[]>([]);
  readonly loading = signal(false);
  readonly searched = signal(false);
  readonly recalculating = signal(false);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  private deptChildrenMap = new Map<string, string[]>();

  payScheduleNo: string | null = null;
  deptNos: string[] = [];
  empSearch = '';
  empOfficeSearch: string | null = null;

  private currentPersonIds: string[] = [];

  constructor(
    private readonly api: ViewPaPayStubService,
    private readonly empApi: ChangeUserService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
    this.loadDeptTree();
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }

  /** Ghi chú của công ty (empOpinion) gắn theo kế hoạch trả lương đang chọn - thay cho ghi chú mặc
   *  định khi có, giống vps_currentEmpOpinion ở bản gốc. */
  get selectedScheduleOpinion(): string {
    return this.schedules().find((s) => s.payScheduleNo === this.payScheduleNo)?.empOpinion || '';
  }

  private loadSchedules(): void {
    this.api.getPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list && list.length > 0) this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con để
   *  khớp hành vi cascade của widget DeptTree.js gốc (xem giải thích ở ViewPaEmpAccountComponent). */
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

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.payStub.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }

    this.loading.set(true);
    this.searched.set(true);
    this.stubs.set([]);
    this.currentPersonIds = [];
    const lang = document.documentElement.lang || 'vi';
    this.api.loadPayStubs({
      payScheduleNo: this.payScheduleNo,
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      empSearch: this.empSearch.trim(),
      empOffice: this.empOfficeSearch,
      lang,
    }).subscribe({
      next: (list) => {
        this.stubs.set(list ?? []);
        this.currentPersonIds = (list ?? []).map((s) => s.personId);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        const msg = err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!');
        this.message.error(msg);
      },
    });
  }

  recalculate(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.payStub.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    if (this.currentPersonIds.length === 0) {
      this.message.warning(this.i18n.t('pa.payStub.msgRecalcNoEmp', 'Không có nhân viên để tính lại lương!'));
      return;
    }

    this.recalculating.set(true);
    this.api.recalculate(this.payScheduleNo, this.currentPersonIds).subscribe({
      next: (res) => {
        this.recalculating.set(false);
        this.message.success(res.message || this.i18n.t('pa.payStub.msgRecalcSuccess', 'Tính lại lương thành công!'));
        this.search();
      },
      error: (err) => {
        this.recalculating.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
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

  /** In - lấy nguyên HTML đã render của vùng phiếu lương (giống bản gốc lấy innerHTML #vps_printArea)
   *  mở cửa sổ mới rồi gọi window.print(), giữ nguyên CSS in riêng (khổ A4, ngắt trang theo từng phiếu). */
  print(): void {
    const html = this.printAreaEl?.nativeElement.innerHTML;
    if (!html || !html.trim()) {
      this.message.warning(this.i18n.t('pa.payStub.msgNoDataToPrint', 'Không có phiếu lương để in!'));
      return;
    }
    const printWin = window.open('', '_blank');
    if (!printWin) return;
    printWin.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${VPPS_PRINT_CSS}</style></head><body>${html}</body></html>`);
    printWin.document.close();
    printWin.onload = () => {
      printWin.focus();
      printWin.print();
      printWin.close();
    };
  }
}

/** Giữ nguyên CSS in ấn từ bản gốc (VPS_PRINT_CSS trong payStub.html), đổi tiền tố class vps- -> vpps-. */
const VPPS_PRINT_CSS = [
  '@page { size:A4 portrait; margin:8mm; }',
  '*, *::before, *::after { box-sizing:border-box; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }',
  'html, body { width:194mm; margin:0 auto; padding:0; background:#fff; font-family:Arial,sans-serif; font-size:10px; color:#111; }',
  'table { max-width:100% !important; word-break:break-word; }',
  '.vpps-pay-stub { width:100%; max-width:194mm; margin:0 auto; padding:4mm 0; background:#fff; page-break-after:always; break-after:page; overflow:hidden; }',
  '.vpps-pay-stub:last-child { page-break-after:avoid; break-after:avoid; }',
  '.vpps-stub-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; border-bottom:2.5px solid #922b21; padding-bottom:6px; }',
  '.vpps-logo { font-size:12px; font-weight:bold; color:#922b21; line-height:1.4; min-width:100px; }',
  '.vpps-logo img { height:32px; margin-right:6px; vertical-align:middle; }',
  '.vpps-title { font-size:15px; font-weight:bold; text-align:center; flex:1; color:#1a1a2e; letter-spacing:1px; }',
  '.vpps-section-title { background:#922b21; color:#fff; font-weight:bold; padding:2px 6px; margin:6px 0 0 0; font-size:10px; }',
  '.vpps-section-title::before { content:"\\25A0 "; }',
  '.vpps-info-table { width:100%; border-collapse:collapse; table-layout:fixed; }',
  '.vpps-info-table th { background:#f2e0e0; color:#333; font-weight:bold; padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; text-align:center; overflow:hidden; white-space:nowrap; }',
  '.vpps-info-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#fff; overflow:hidden; word-break:break-word; }',
  '.vpps-detail-table { width:100%; border-collapse:collapse; }',
  '.vpps-detail-table th { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#f2e0e0; color:#333; font-weight:bold; text-align:center; }',
  '.vpps-detail-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#fff; }',
  '.vpps-detail-table tbody tr:nth-child(even) td { background:#fafafa; }',
  '.vpps-triple-table { width:100%; border-collapse:collapse; margin-top:6px; table-layout:fixed; }',
  '.vpps-triple-table th, .vpps-triple-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; overflow:hidden; word-break:break-word; }',
  '.vpps-att-header { background:#1a5276; color:#fff; font-weight:bold; width:18%; }',
  '.vpps-sal-header { background:#922b21; color:#fff; font-weight:bold; width:18%; }',
  '.vpps-ded-header { background:#1a5276; color:#fff; font-weight:bold; width:18%; }',
  '.vpps-triple-table thead tr:nth-child(2) th { background:#f2e0e0; color:#333; font-weight:bold; text-align:center; }',
  '.vpps-triple-table tbody td { background:#fff; }',
  '.vpps-triple-table tbody tr:nth-child(even) td { background:#fafafa; }',
  '.vpps-triple-table tfoot td { background:#ececec; font-weight:bold; border:1px solid #c8c8c8; }',
  '.vpps-net-table { width:100%; border-collapse:collapse; margin-bottom:6px; }',
  '.vpps-net-table td { padding:5px 8px; border:1.5px solid #999; background:#fef9e7; font-size:12px; font-weight:bold; color:#111; }',
  '.vpps-note { font-size:9px; color:#555; margin-top:8px; font-style:italic; border-top:1px dashed #ccc; padding-top:4px; }',
  '.text-end { text-align:right !important; }',
  '.text-center { text-align:center !important; }',
  '.fw-bold { font-weight:bold !important; }',
].join('\n');
