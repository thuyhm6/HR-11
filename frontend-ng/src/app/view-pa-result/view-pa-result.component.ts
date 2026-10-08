import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  PaItemInputDto,
  PaPayScheduleDto,
  PaSectionItemsDto,
  SectionItemRow,
} from './view-pa-result.model';
import { ViewPaResultService } from './view-pa-result.service';

/** Các key message.properties dùng trong trang này - namespace pa.result.* đã có sẵn đầy đủ (dùng
 *  chung với bản Thymeleaf gốc viewPaResult.html), không cần thêm key mới. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'pa.result.paySchedule', 'pa.result.dept', 'pa.result.deptPlaceholder', 'pa.result.isUse',
  'pa.result.itemType', 'pa.result.search', 'pa.result.save', 'pa.result.exportExcel',
  'pa.result.selectAll', 'pa.result.selectInverse', 'pa.result.hrItems', 'pa.result.attendanceItems',
  'pa.result.inputItems', 'pa.result.computeItems', 'pa.result.confirmSave', 'pa.result.saveSuccess',
  'pa.result.msgSelectIsUse', 'pa.result.msgSelectType', 'pa.result.msgSelectPaySchedule',
  'pa.result.msgNoItemSelected', 'pa.insurance.title.pleaseChooseExportItem',
  'pa.result.isUse.1', 'pa.result.isUse.2', 'pa.result.isUse.3', 'pa.result.isUse.4',
  'pa.result.isUse.5', 'pa.result.isUse.6',
  'pa.result.itemType.1', 'pa.result.itemType.2', 'pa.result.itemType.3', 'pa.result.itemType.4',
  'common.select', 'common.loading', 'common.noData', 'common.loadFail', 'common.action',
  'ess.empInfo.pay_plan', 'autoExcel.msg.enterOrder', 'pa.insurance.title.exportFaild',
];

interface CodeOption {
  value: number;
  key: string;
  fallback: string;
}

/** Bản JSP gốc chỉ hiển thị 1/4/5/6 (2, 3 đã bị comment) - giữ nguyên. */
const IS_USE_OPTIONS: CodeOption[] = [
  { value: 1, key: 'pa.result.isUse.1', fallback: 'Đối chiếu chi tiết' },
  { value: 4, key: 'pa.result.isUse.4', fallback: 'Đối chiếu hạng mục - kết quả - chi trả - bảo hiểm' },
  { value: 5, key: 'pa.result.isUse.5', fallback: 'Lương tháng/năm chi tiết' },
  { value: 6, key: 'pa.result.isUse.6', fallback: 'Phiếu lương' },
];

const ITEM_TYPE_OPTIONS: CodeOption[] = [
  { value: 1, key: 'pa.result.itemType.1', fallback: 'Khoản trả' },
  { value: 2, key: 'pa.result.itemType.2', fallback: 'Khoản trừ' },
  { value: 3, key: 'pa.result.itemType.3', fallback: 'BH' },
  { value: 4, key: 'pa.result.itemType.4', fallback: 'Các mục tiêu chuẩn' },
];

/**
 * Bản Angular của pa/salary/viewPaResult.html (Thymeleaf + jQuery) - màn hình cấu hình hạng mục hiển
 * thị cho các báo cáo kết quả tính lương (bảng PA_ITEM_INPUT), KHÔNG phải bảng dữ liệu tra cứu. Gọi
 * lại nguyên API JSON đã có sẵn ở PaItemInputController (xem ViewPaResultService) - không đổi backend.
 * 4 khối hạng mục (nhân sự/chấm công/nhập/tính) đổi từ 4 <div id="..."> render bằng jQuery sang 4
 * mảng SectionItemRow[] thường (không phải signal) vì mỗi item cần 2-way binding checked/orderNo qua
 * ngModel tại chỗ - giống pattern "row.selected" ở nhiều bảng khác trong dự án (xem
 * ViewPaEmpAccountComponent), dùng [ngModelOptions]="{standalone:true}" vì các checkbox/input nằm
 * ngoài <form>. Cây phòng ban tái dùng buildDeptTree()/expandDeptSelection() nguyên bản từ
 * ViewPaPayStubComponent - nz-tree-select chỉ trả key được tick trực tiếp nên cần mở rộng xuống phòng
 * ban con trước khi gửi lên exportExcel, khớp hành vi cascade của widget DeptTree.js gốc.
 */
@Component({
  selector: 'app-view-pa-result',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzSpinModule,
    NzTreeSelectModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-result.component.html',
  styleUrl: './view-pa-result.component.css',
})
export class ViewPaResultComponent implements OnInit {
  readonly isUseOptions = IS_USE_OPTIONS;
  readonly itemTypeOptions = ITEM_TYPE_OPTIONS;

  readonly schedules = signal<PaPayScheduleDto[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  private deptChildrenMap = new Map<string, string[]>();

  readonly loadingSections = signal(false);
  readonly searching = signal(false);
  readonly saving = signal(false);
  readonly exporting = signal(false);
  /** Chỉ adminID 11111111-11111116 thấy nút Lưu - backend tính và chặn lại ở API save. */
  readonly canSave = signal(false);

  hrItems: SectionItemRow[] = [];
  attendanceItems: SectionItemRow[] = [];
  inputItems: SectionItemRow[] = [];
  computeItems: SectionItemRow[] = [];

  payScheduleNo: string | null = null;
  deptNos: string[] = [];
  /** JSP gốc dùng <select> không có option rỗng nên luôn mặc định là option đầu tiên (= 1). */
  isUse: number | null = 1;
  itemType: number | null = 1;

  selectAllFlag = false;
  selectInverseFlag = false;

  constructor(
    private readonly api: ViewPaResultService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
    this.loadDeptTree();
    this.loadSections();
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
   *  khớp hành vi cascade của widget DeptTree.js gốc. */
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

  /** Tick/thứ tự mặc định lấy từ ITEM_FLAG / ITEM_NUMBER (GET_ITEM_GLAG / GET_ITEM_NUMBER) như JSP gốc. */
  private toRow(item: PaItemInputDto): SectionItemRow {
    const itemName = item.itemName || item.itemId || item.itemNo;
    const orderNo = item.itemNumber ? Number(item.itemNumber) : null;
    return { itemNo: item.itemNo, itemId: item.itemId, itemName, checked: item.itemFlag === '1', orderNo };
  }

  /** JSP gốc luôn chèn "Kế hoạch trả lương No" (PAY_SCHEDULE_NO) lên đầu khối hạng mục nhân sự. */
  private payScheduleNoRow(): SectionItemRow {
    const itemName = `${this.i18n.t('ess.empInfo.pay_plan', 'Kế hoạch trả lương')} No`;
    return { itemNo: 'PAY_SCHEDULE_NO', itemId: 'PAY_SCHEDULE_NO', itemName, checked: false, orderNo: null };
  }

  private loadSections(): void {
    this.loadingSections.set(true);
    this.api.getSectionItems().subscribe({
      next: (data: PaSectionItemsDto) => {
        this.hrItems = [this.payScheduleNoRow(), ...(data.hrItems ?? []).map((i) => this.toRow(i))];
        this.attendanceItems = (data.attendanceItems ?? []).map((i) => this.toRow(i));
        this.inputItems = (data.inputItems ?? []).map((i) => this.toRow(i));
        this.computeItems = (data.computeItems ?? []).map((i) => this.toRow(i));
        this.canSave.set(!!data.canSave);
        this.loadingSections.set(false);
      },
      error: () => {
        this.loadingSections.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private allRows(): SectionItemRow[] {
    return [...this.hrItems, ...this.attendanceItems, ...this.inputItems, ...this.computeItems];
  }

  /** Tra cứu / Lưu cấu hình (PA_ITEM_INPUT) chỉ áp dụng cho 3 khối chấm công/nhập/tính - đúng như JSP gốc
   *  (paArItem/paInputItem/paComputeItem), hạng mục nhân sự không được lưu. */
  private configRows(): SectionItemRow[] {
    return [...this.attendanceItems, ...this.inputItems, ...this.computeItems];
  }

  private rowKey(itemNo: string | number | null, itemId: string | null): string {
    return `${itemNo ?? ''}-${itemId ?? ''}`;
  }

  private validateIsUseAndType(): boolean {
    if (!this.isUse) {
      this.message.warning(this.i18n.t('pa.result.msgSelectIsUse', 'Vui lòng chọn Hạng mục tích chọn!'));
      return false;
    }
    if (!this.itemType) {
      this.message.warning(this.i18n.t('pa.result.msgSelectType', 'Vui lòng chọn Phân biệt hạng mục!'));
      return false;
    }
    return true;
  }

  search(): void {
    if (!this.validateIsUseAndType()) return;

    this.searching.set(true);
    this.api.getSavedItems(this.isUse as number, this.itemType as number).subscribe({
      next: (saved) => {
        this.markSaved(saved ?? []);
        this.searching.set(false);
      },
      error: () => {
        this.searching.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** Đối chiếu theo cặp ITEM_NO-ITEM_ID (thuộc tính alt của checkbox ở JSP gốc). */
  private markSaved(saved: PaItemInputDto[]): void {
    const savedMap = new Map(saved.map((s) => [this.rowKey(s.itemNo, s.itemId), s.orderNo ?? null]));
    this.configRows().forEach((row) => {
      const key = this.rowKey(row.itemNo, row.itemId);
      if (savedMap.has(key)) {
        row.checked = true;
        row.orderNo = savedMap.get(key) ?? null;
      } else {
        row.checked = false;
        row.orderNo = null;
      }
    });
  }

  save(): void {
    if (!this.validateIsUseAndType()) return;
    // JSP gốc: tick hạng mục -> ô thứ tự thành required, form.valid() chặn lưu nếu bỏ trống
    if (this.configRows().some((r) => r.checked && (r.orderNo === null || r.orderNo === undefined || `${r.orderNo}` === ''))) {
      this.message.warning(this.i18n.t('autoExcel.msg.enterOrder', 'Vui lòng nhập thứ tự!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.action', 'Thao tác'),
      nzContent: this.i18n.t('pa.result.confirmSave', 'Bạn có chắc chắn muốn lưu cấu hình này?'),
      nzOnOk: () => this.doSave(),
    });
  }

  private doSave(): void {
    const items = this.configRows()
      .filter((r) => r.checked)
      .map((r) => ({ itemNo: r.itemNo, itemId: r.itemId, itemName: r.itemName, orderNo: r.orderNo }));

    this.saving.set(true);
    this.api.save({ isUse: this.isUse as number, itemType: this.itemType as number, items }).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.message.success(res.message || this.i18n.t('pa.result.saveSuccess', 'Lưu thành công!'));
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || 'Lỗi không xác định');
      },
    });
  }

  /** Cột Excel theo thứ tự khối (nhân sự -> chấm công -> nhập -> tính) như exportResult bản gốc (bản gốc
   *  xoá trắng ô thứ tự trước khi xuất nên mọi cột đều sort = 999 và giữ nguyên thứ tự hiển thị). Không chọn
   *  phòng ban -> backend tự giới hạn theo PA_SUPERVISOR_INFO. */
  exportExcel(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t('pa.result.msgSelectPaySchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    const items = this.allRows()
      .filter((r) => r.checked && r.itemId)
      .map((r) => ({ itemId: r.itemId, itemName: r.itemName }));
    if (items.length === 0) {
      this.message.warning(this.i18n.t('pa.insurance.title.pleaseChooseExportItem', 'Xin chọn hạng mục muốn kết xuất!'));
      return;
    }
    const payScheduleNo = this.payScheduleNo;
    this.exporting.set(true);
    this.api.exportExcel({ payScheduleNo, deptNos: this.expandDeptSelection(this.deptNos), items }).subscribe({
      next: (blob) => {
        this.exporting.set(false);
        this.download(blob, `PaSummary_${payScheduleNo}.xlsx`);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t('pa.insurance.title.exportFaild', 'Kết xuất thất bại!'));
      },
    });
  }

  private download(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  toggleSelectAll(checked: boolean): void {
    this.selectAllFlag = checked;
    this.allRows().forEach((r) => (r.checked = checked));
  }

  /** Chọn ngược - tự bỏ tick sau khi áp dụng, giống hành vi #vpr_chkInverse của bản gốc. */
  toggleSelectInverse(checked: boolean): void {
    this.selectInverseFlag = false;
    if (!checked) return;
    this.allRows().forEach((r) => (r.checked = !r.checked));
  }

  toggleSectionAll(rows: SectionItemRow[], checked: boolean): void {
    rows.forEach((r) => (r.checked = checked));
  }
}
