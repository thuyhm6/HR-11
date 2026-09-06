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
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AttendanceSearchRow,
  AuthDeptNode,
  CodeItem,
  ItemOption,
  ShiftOption,
  SyncCleversePayload,
} from './attendance-search.model';
import { AttendanceSearchService } from './attendance-search.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.search.empIdOrName', 'common.placeholder.enterEmpId', 'common.deptName', 'common.select',
  'common.fromDate', 'common.toDate', 'attSearch.empGroup', 'attSearch.selectAttCode',
  'attSearch.shiftType', 'attSearch.leaveType', 'attSearch.all', 'common.search', 'common.clearFilter',
  'common.exportExcel', 'attSearch.syncCleverseDev', 'common.stt', 'attSearch.workDate', 'common.empId',
  'common.empName', 'attSearch.position', 'attSearch.fromTime', 'attSearch.toTime', 'attSearch.quantity',
  'attSearch.unit', 'common.totalRows', 'common.loadFail', 'mep.msg.loadDeptFailed',
  'attSearch.syncModal.title', 'attSearch.syncModal.enterCd', 'attSearch.syncModal.sabun',
  'attSearch.syncModal.gntCd', 'attSearch.syncModal.sYmd', 'attSearch.syncModal.eYmd',
  'attSearch.syncModal.instanceId', 'attSearch.syncModal.cancelYn', 'attSearch.syncModal.ifId',
  'attSearch.syncModal.status', 'attSearch.syncModal.reason', 'attSearch.syncModal.send',
  'attSearch.syncModal.result', 'common.cancel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];

/**
 * Bản Angular của ar/attendanceMintenance/viewAttendanceManagentForSerchInfoList.html (Thymeleaf +
 * DataTables), gọi lại nguyên các API JSON đã có sẵn (xem AttendanceSearchService) - không đổi
 * backend. Dùng nz-table (phân trang client-side, giống hệt hành vi DataTables gốc: BE trả toàn bộ
 * danh sách theo bộ lọc, không phân trang server) thay cho DataTables; nz-tree-select thay widget
 * cây phòng ban tự viết (DeptTree.js). Xuất excel làm client-side (không có endpoint export riêng ở
 * backend - bản gốc cũng xuất client-side qua DataTables Buttons). Modal test đồng bộ Cleverse (DEV)
 * được giữ lại nguyên vẹn vì là công cụ dùng chung của trang, chỉ đổi UI sang nz-modal.
 */
@Component({
  selector: 'app-attendance-search',
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
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './attendance-search.component.html',
  styleUrl: './attendance-search.component.css',
})
export class AttendanceSearchComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<AttendanceSearchRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);
  readonly itemOptions = signal<ItemOption[]>([]);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  postFamily: string | null = null;
  shiftNo: string | null = null;
  itemNo: string | null = null;

  readonly syncModalVisible = signal(false);
  readonly syncSending = signal(false);
  readonly syncResult = signal<{ success: boolean; text: string } | null>(null);
  syncForm: SyncCleversePayload = this.defaultSyncForm();

  constructor(
    private readonly api: AttendanceSearchService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        keyword: this.keyword,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
        postFamily: this.postFamily ?? '',
        shiftNo: this.shiftNo ?? '',
        itemNo: this.itemNo ?? '',
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
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

  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('attSearch.workDate', 'Ngày công'),
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Tên nhân viên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('attSearch.position', 'Chức vụ'),
      this.i18n.t('attSearch.shiftType', 'Ca làm việc'),
      this.i18n.t('attSearch.leaveType', 'Loại nghỉ phép'),
      this.i18n.t('attSearch.fromTime', 'Từ thời gian'),
      this.i18n.t('attSearch.toTime', 'Đến thời gian'),
      this.i18n.t('attSearch.quantity', 'Số lượng'),
      this.i18n.t('attSearch.unit', 'Đơn vị'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.arDateStr, r.empId, r.localName, r.deptName, r.postGradeName,
      r.shiftName, r.itemName, r.fromTime, r.toTime, r.quantity, r.unit,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TraCuuChamCong');
    XLSX.writeFile(workbook, 'attendance_search_export.xlsx');
  }

  openSyncModal(): void {
    this.syncForm = this.defaultSyncForm();
    this.syncResult.set(null);
    this.syncModalVisible.set(true);
  }

  closeSyncModal(): void {
    this.syncModalVisible.set(false);
  }

  sendSyncCleverse(): void {
    const f = this.syncForm;
    if (!f.enterCd?.trim() || !f.sabun?.trim() || !f.gntCd?.trim() || !f.sYmd?.trim() || !f.eYmd?.trim() || !f.instanceId?.trim()) {
      this.syncResult.set({
        success: false,
        text: 'Vui lòng nhập đầy đủ các trường bắt buộc: Mã công ty, Mã nhân viên, Mã chấm công, Ngày bắt đầu, Ngày kết thúc, Instance ID.',
      });
      return;
    }
    this.syncSending.set(true);
    this.syncResult.set(null);
    this.api.syncCleverseTest(f).subscribe({
      next: (res) => {
        this.syncSending.set(false);
        this.syncResult.set(
          res.success
            ? { success: true, text: 'Kết quả: ' + (res.result ?? '') }
            : { success: false, text: 'Lỗi: ' + (res.message ?? '') },
        );
      },
      error: (err) => {
        this.syncSending.set(false);
        this.syncResult.set({ success: false, text: 'Lỗi kết nối: ' + (err?.status ?? '') + ' ' + (err?.statusText ?? '') });
      },
    });
  }

  private defaultSyncForm(): SyncCleversePayload {
    return {
      enterCd: 'HAPM',
      sabun: '19945437',
      gntCd: '517_EH',
      sYmd: '20260612',
      eYmd: '20260612',
      orgCd: '',
      instanceId: 'HAPM19910157Q28242988',
      cancelYn: 'N',
      ifId: 'HHR',
      status: '0',
      reason: 'Refresh',
    };
  }

  private initDefaultDateRange(): void {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    this.fromDate = yesterday;
    this.toDate = today;
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban
   *  con như widget DeptTree.js gốc. Backend lọc theo deptNos IN (...) đúng từng mã, nên nếu không
   *  mở rộng thủ công ở đây, chọn 1 phòng ban cha sẽ bỏ sót toàn bộ nhân viên ở các phòng ban con. */
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

  private loadCodeOptions(): void {
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getShiftOptions().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.api.getItemOptions().subscribe((list) => this.itemOptions.set(list ?? []));
  }
}
