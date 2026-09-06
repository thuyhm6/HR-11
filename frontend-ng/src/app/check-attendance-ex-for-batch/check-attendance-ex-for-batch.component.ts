import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CheckAttendanceExForBatchService } from './check-attendance-ex-for-batch.service';
import {
  AuthDeptNode,
  CardApprovalRow,
  CardLeaveInfo,
  CheckAttendanceExRow,
  CodeItem,
  ShiftOption,
} from './check-attendance-ex-for-batch.model';

/** Toàn bộ key bên dưới đã có sẵn trong message.properties (namespace "ck" dùng riêng cho trang này,
 *  "common"/"mep" dùng chung với các trang khác) - không cần thêm key mới. */
const I18N_KEYS = [
  'ck.label.keyword', 'ck.placeholder.keyword', 'ck.label.deptNo', 'ck.placeholder.deptNo',
  'ck.label.fromDate', 'ck.label.toDate', 'ck.label.postFamily', 'ck.label.shiftNo', 'ck.label.itemNo',
  'ck.select.allOption', 'ck.select.choose',
  'ck.itemNo.unauthorized', 'ck.itemNo.leaveEarly', 'ck.itemNo.lateComing', 'ck.itemNo.forgotSwipe',
  'ck.btn.search', 'ck.btn.clearFilter', 'ck.btn.exportExcel',
  'ck.col.no', 'ck.col.empId', 'ck.col.localName', 'ck.col.deptName', 'ck.col.postGradeName',
  'ck.col.postFamilyName', 'ck.col.shiftName', 'ck.col.itemNoName', 'ck.col.arDate', 'ck.col.fromDateTime',
  'ck.col.toDateTime', 'ck.col.remark', 'ck.col.createdName', 'ck.col.createDate',
  'ck.modal.title', 'ck.modal.requester', 'ck.modal.applyInfo', 'ck.modal.applyTitle', 'ck.modal.stt',
  'ck.modal.approvalSeq', 'ck.modal.approvalStatus', 'ck.modal.opinion', 'ck.modal.actionTime',
  'ck.modal.empInfoTitle', 'ck.modal.empName', 'ck.modal.empId', 'ck.modal.empDept', 'ck.modal.empPost',
  'ck.modal.leaveType', 'ck.modal.leaveFrom', 'ck.modal.leaveTo', 'ck.modal.duration', 'ck.modal.remark',
  'ck.msg.loading', 'ck.msg.noApprovalData', 'ck.msg.noApplyNo', 'ck.msg.loadDetailFailed',
  'ck.msg.loadApprovalFailed',
  'common.empName', 'common.deptName', 'common.loadFail', 'common.totalRows', 'mep.msg.loadDeptFailed',
];

/** Mã cha nhóm nhân viên (POST_FAMILY) dùng cho bộ lọc "Nhóm nhân viên" - đúng data-parent-code="14015812" bản gốc. */
const POST_FAMILY_PARENT_CODE = '14015812';

/** 4 loại bất thường hiển thị ở trang này - hardcode y hệt option cứng trong bản gốc (cũng đúng danh
 *  sách ITEM_NO IN (...) mà EssAttendanceExForBatchMapper.xml lọc sẵn ở phía backend). */
const ITEM_NO_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '141443', labelKey: 'ck.itemNo.unauthorized', fallback: 'Nghỉ không phép' },
  { value: '141442', labelKey: 'ck.itemNo.leaveEarly', fallback: 'Về sớm' },
  { value: '141441', labelKey: 'ck.itemNo.lateComing', fallback: 'Đến muộn' },
  { value: '14015448', labelKey: 'ck.itemNo.forgotSwipe', fallback: 'Quên quẹt thẻ' },
];

/**
 * Bản Angular của ess/infoApplyAttendance/viewCheckAttencetanceExForBatchList.html (Thymeleaf +
 * DataTables + jQuery) - Danh sách chấm công bất thường (đi muộn/về sớm/quên quẹt thẻ/nghỉ không phép)
 * ĐÃ xin phép của nhân viên cấp dưới, cho quản lý tra cứu/kiểm tra và xem chi tiết trình tự phê duyệt.
 * Trang này chỉ đọc dữ liệu (không có thao tác tick chọn/xin phép hàng loạt như
 * AttendanceExBatchInfoComponent - đúng bản gốc chỉ có 1 hành động duy nhất là click tên nhân viên để
 * mở modal chi tiết qua atexOpenApplyDetail()). Gọi lại nguyên các API JSON đã có sẵn ở
 * EssInfoApplyAttendanceController (xem CheckAttendanceExForBatchService) - không đổi backend.
 * Kiến trúc bám theo AttendanceExBatchInfoComponent (nz-table + nz-tree-select + expandDeptSelection
 * cho phần lọc/bảng) và ManageEmpPositionInfoComponent (nz-modal + nz-descriptions cho phần modal
 * chi tiết click-row).
 *
 * Khác biệt cố ý so với bản gốc: bản gốc truyền thêm 1 tham số "ctx" (không dùng ở trang này - luôn
 * undefined) cho atexOpenApplyDetail() để hiển thị nút Duyệt/Từ chối khi mở từ email phê duyệt; vì
 * trang danh sách này không bao giờ truyền ctx nên 2 nút đó thực chất không bao giờ hiển thị - modal
 * ở đây chỉ giữ lại phần xem chi tiết (đúng hành vi thực tế của bản gốc, không phải cắt bớt tính năng).
 */
@Component({
  selector: 'app-check-attendance-ex-for-batch',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzAlertModule,
    NzModalModule,
    NzDescriptionsModule,
    TranslatePipe,
  ],
  templateUrl: './check-attendance-ex-for-batch.component.html',
  styleUrl: './check-attendance-ex-for-batch.component.css',
})
export class CheckAttendanceExForBatchComponent implements OnInit {
  readonly itemNoOptions = ITEM_NO_OPTIONS;
  readonly pageSizeOptions = [25, 50, 100, 200, 500];

  readonly rows = signal<CheckAttendanceExRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  postFamily: string | null = null;
  shiftNo: string | null = null;
  itemNo: string | null = null;

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailLeaveInfo = signal<CardLeaveInfo | null>(null);
  readonly detailEmployeeInfo = signal<CardLeaveInfo | null>(null);
  readonly detailApprovalList = signal<CardApprovalRow[]>([]);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: CheckAttendanceExForBatchService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.api.getCodeList(POST_FAMILY_PARENT_CODE).subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getShiftOptions().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }

  /** Mặc định Từ ngày = ngày 25 tháng trước, Đến ngày = ngày 24 tháng này (chu kỳ chấm công) - đúng
   *  ckInitDefaultDateRange() bản gốc. */
  private initDefaultDateRange(): void {
    const now = new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth() - 1, 25);
    this.toDate = new Date(now.getFullYear(), now.getMonth(), 24);
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        fromDate: this.formatYmdSlash(this.fromDate),
        toDate: this.formatYmdSlash(this.toDate),
        postFamily: this.postFamily ?? '',
        shiftNo: this.shiftNo ?? '',
        itemNo: this.itemNo ?? '',
      })
      .subscribe({
        next: (list) => {
          this.rows.set(list ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  clearSearch(): void {
    this.keyword = '';
    this.deptNos = [];
    this.postFamily = null;
    this.shiftNo = null;
    this.itemNo = null;
    this.initDefaultDateRange();
    this.search();
  }

  trackByRow = (_: number, row: CheckAttendanceExRow): string => this.rowKey(row);

  private rowKey(row: CheckAttendanceExRow): string {
    if (row.applyNo) return String(row.applyNo);
    return [row.personId, row.arDateStr, row.empId, row.itemNo, row.shiftNo].join('|');
  }

  // ==================== Modal chi tiết phê duyệt (click tên nhân viên) ====================

  openDetail(row: CheckAttendanceExRow): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (!row.applyNo) {
      this.message.warning(t('ck.msg.noApplyNo', 'Không tìm thấy số đơn để xem chi tiết'));
      return;
    }
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailLeaveInfo.set(null);
    this.detailEmployeeInfo.set(null);
    this.detailApprovalList.set([]);

    this.api.getDetail(row.applyNo, row.itemNo).subscribe({
      next: (res) => {
        this.detailLeaveInfo.set(res?.leaveInfo ?? null);
        this.detailEmployeeInfo.set(res?.employeeInfo ?? null);
        this.detailApprovalList.set(res?.approvalList ?? []);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(t('ck.msg.loadDetailFailed', 'Tải dữ liệu thất bại'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  /** Đúng atexBuildApplyTitle() bản gốc. */
  buildApplyTitle(info: CardLeaveInfo | null): string {
    if (!info) return '';
    const { leaveTypeName = '', localName = '', leaveFromTime = '', leaveToTime = '' } = info;
    if (!leaveTypeName && !localName && !leaveFromTime && !leaveToTime) return '';
    return `${leaveTypeName}/Apply(${localName})[Date: ${leaveFromTime} ~ ${leaveToTime}]`;
  }

  /** Đúng dòng "Người xin phép" trong atexRenderData() bản gốc. */
  buildRequesterInfo(info: CardLeaveInfo | null): string {
    if (!info) return '';
    return `${info.localName || ''}/${info.postGradeName || ''}/${info.deptName || ''}`;
  }

  /** Đúng cách hiển thị STT trong atexRenderApprovalRows() bản gốc: mức duyệt 100 = HR. */
  approvalStt(row: CardApprovalRow, index: number): string {
    const stt = row.affirmLevel || String(index + 1);
    return String(stt) === '100' ? 'HR' : stt;
  }

  // ==================== Xuất excel (client-side, không có endpoint export riêng ở backend) ====================

  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('ck.col.no', 'No.'), t('ck.col.empId', 'Mã nhân viên'), t('ck.col.localName', 'Họ tên'),
      t('ck.col.deptName', 'Phòng ban'), t('ck.col.postGradeName', 'Chức vụ'),
      t('ck.col.postFamilyName', 'Nhóm nhân viên'), t('ck.col.shiftName', 'Ca làm việc'),
      t('ck.col.itemNoName', 'Loại nghỉ phép'), t('ck.col.arDate', 'Ngày công'),
      t('ck.col.fromDateTime', 'Từ thời gian'), t('ck.col.toDateTime', 'Đến thời gian'),
      t('ck.col.remark', 'Lý do'), t('ck.col.createdName', 'Người tạo'), t('ck.col.createDate', 'Ngày tạo'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postGradeName, r.postFamilyName, r.shiftName,
      r.itemNoName, r.arDateStr, r.fromDateTime, r.toDateTime, r.remark || '', r.createdName || '', r.createDate,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'check_attendance_ex_for_batch_export.xlsx');
  }

  // ==================== Cây phòng ban ====================

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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban con
   *  như widget DeptTree.js gốc. Backend lọc theo INSTR(...) đúng từng mã, nên phải tự mở rộng xuống
   *  các phòng ban con trước khi gửi deptNos lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
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

  // ==================== Helpers ngày giờ ====================

  /** Gửi lên BE giữ nguyên dạng có dấu "/" (yyyy/MM/dd) đúng như bản gốc - BẮT BUỘC vì
   *  EssAttendanceExForBatchMapper.xml so sánh AR_DATE_STR bằng chuỗi thô (không qua TO_DATE). */
  private formatYmdSlash(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : '';
  }
}
