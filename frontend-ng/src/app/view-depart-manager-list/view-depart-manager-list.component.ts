import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode } from '../manage-emp-position-info/manage-emp-position-info.model';
import { ManageEmpPositionInfoService } from '../manage-emp-position-info/manage-emp-position-info.service';
import {
  ArDepartmentManageDto,
  ArDepartmentManageSaveItem,
  DeptManageRow,
  LockColumnKey,
} from './view-depart-manager-list.model';
import { ViewDepartManagerListService } from './view-depart-manager-list.service';

/** Các key message.properties dùng trong trang này - tái dùng nguyên namespace deptManage.* (đã có
 *  sẵn đủ cho đúng trang này từ bản Thymeleaf gốc, kể cả các chuỗi từng nằm trong biến JS) cộng thêm
 *  các key deptMgr.saveSuccess/saveFail, vdp.search.dept.placeholder và common.* dùng chung. Tải
 *  trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'deptManage.field.date', 'deptManage.field.dept', 'deptManage.placeholder.dept', 'deptManage.btn.search',
  'deptManage.btn.export', 'deptManage.group.annualLeave', 'deptManage.group.leave', 'deptManage.group.ot',
  'deptManage.group.exception', 'deptManage.col.dayShift', 'deptManage.col.nightShift',
  'deptManage.col.updatedBy', 'deptManage.col.updateTime', 'deptManage.btn.openRequest',
  'deptManage.btn.closeRequest', 'deptManage.js.selectDate', 'deptManage.js.loading', 'deptManage.js.noData',
  'deptManage.js.loadError', 'deptManage.js.pleaseSelectGroup', 'deptManage.js.close', 'deptManage.js.open',
  'deptManage.js.massSuccess', 'deptManage.js.invalidDate', 'deptManage.js.noChanges', 'deptManage.js.saving',
  'deptManage.js.connError',
  'deptMgr.saveSuccess', 'deptMgr.saveFail',
  'common.save', 'common.stt', 'common.deptName', 'common.status', 'common.date',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

/** Cấu hình 4 nhóm cột khóa xin phép (mỗi nhóm 2 cột ca ngày/ca đêm) - dùng chung cho header bảng,
 *  toolbar mass-toggle và export excel, tránh lặp lại 8 lần thủ công. */
const LOCK_COLUMN_GROUPS: Array<{ labelKey: string; labelFallback: string; day: LockColumnKey; night: LockColumnKey }> = [
  { labelKey: 'deptManage.group.annualLeave', labelFallback: 'Nghỉ phép năm', day: 'lockAttenAnnualFlag', night: 'lockAttenAnnualNightFlag' },
  { labelKey: 'deptManage.group.leave', labelFallback: 'Nghỉ phép', day: 'lockAttenFlag', night: 'lockAttenNightFlag' },
  { labelKey: 'deptManage.group.ot', labelFallback: 'Tăng ca', day: 'lockOtFlag', night: 'lockOtNightFlag' },
  { labelKey: 'deptManage.group.exception', labelFallback: 'Bất thường', day: 'lockAttenExFlag', night: 'lockAttenExNightFlag' },
];

const ALL_LOCK_COLUMNS: LockColumnKey[] = LOCK_COLUMN_GROUPS.flatMap((g) => [g.day, g.night]);

function emptyColumnState(): Record<LockColumnKey, boolean> {
  const state = {} as Record<LockColumnKey, boolean>;
  ALL_LOCK_COLUMNS.forEach((col) => (state[col] = false));
  return state;
}

/**
 * Bản Angular của ar/attendanceSettings/viewDepartManagerList.html (Thymeleaf + jQuery) - quản lý
 * khóa/mở xin phép (nghỉ phép năm, nghỉ phép, tăng ca, bất thường - mỗi loại 2 ca ngày/đêm) theo từng
 * phòng ban cho 1 ngày cụ thể (bảng AR_DEPARTMENT_MANAGE). Trang gốc không dùng DataTables (bảng
 * HTML thường, cây phòng ban hiển thị bằng thụt lề + nút +/- ẩn/hiện dòng con tự viết bằng jQuery đệ
 * quy) nên đổi sang nz-table với state "collapsed" (Set các deptNo đang thu gọn) để lọc dòng hiển thị
 * - nz-table không phân trang (nzShowPagination=false) vì đây là 1 cây đầy đủ, phân trang sẽ phá vỡ
 * quan hệ cha/con giữa các trang. Bộ lọc phòng ban dùng nz-tree-select + authorized-departments, cùng
 * pattern cascade với ManageEmpPositionInfoComponent (trang được tham chiếu làm mẫu). Nút "Xuất Excel"
 * có sẵn trong HTML gốc nhưng KHÔNG có handler JS nào gắn vào (dead UI) - ở đây nối lại thành export
 * thật bằng xlsx (SheetJS) theo đúng CLAUDE.md (không phải thêm tính năng mới, mà là hoàn thiện nút đã
 * tồn tại sẵn trên giao diện).
 */
@Component({
  selector: 'app-view-depart-manager-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzCheckboxModule,
    NzTableModule,
    TranslatePipe,
  ],
  templateUrl: './view-depart-manager-list.component.html',
  styleUrl: './view-depart-manager-list.component.css',
})
export class ViewDepartManagerListComponent implements OnInit {
  readonly lockColumnGroups = LOCK_COLUMN_GROUPS;
  readonly allLockColumns = ALL_LOCK_COLUMNS;

  lockDate: Date | null = new Date();
  deptNos: string[] = [];
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  private deptChildrenMap = new Map<string, string[]>();

  readonly rows = signal<DeptManageRow[]>([]);
  readonly collapsed = signal<Set<string>>(new Set());
  readonly loading = signal(false);
  readonly saving = signal(false);
  private rowIndex = new Map<string, DeptManageRow>();

  readonly visibleRows = computed(() => {
    const collapsedSet = this.collapsed();
    return this.rows().filter((r) => !this.isHiddenByCollapsedAncestor(r, collapsedSet));
  });

  readonly headerSelectAll = emptyColumnState();
  readonly massToggle = emptyColumnState();

  constructor(
    private readonly api: ViewDepartManagerListService,
    private readonly deptApi: ManageEmpPositionInfoService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.deptApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
    this.search();
  }

  search(): void {
    const dateStr = this.formatYmd(this.lockDate);
    if (!dateStr) {
      this.message.warning(this.i18n.t('deptManage.js.selectDate', 'Vui lòng chọn ngày'));
      return;
    }
    this.loading.set(true);
    this.api.getList(dateStr, this.expandDeptSelection(this.deptNos).join(',')).subscribe({
      next: (list) => {
        const rows = this.buildRows(list ?? []);
        this.rowIndex = new Map(rows.map((r) => [r.deptNo, r]));
        this.rows.set(rows);
        this.collapsed.set(new Set());
        this.loading.set(false);
      },
      error: () => {
        this.message.error(this.i18n.t('deptManage.js.loadError', 'Lỗi khi tải dữ liệu'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  isCollapsed(deptNo: string): boolean {
    return this.collapsed().has(deptNo);
  }

  toggleRow(deptNo: string): void {
    const next = new Set(this.collapsed());
    if (next.has(deptNo)) next.delete(deptNo);
    else next.add(deptNo);
    this.collapsed.set(next);
  }

  markModified(row: DeptManageRow): void {
    row.modified = true;
  }

  onSelectAllColumn(col: LockColumnKey): void {
    const checked = this.headerSelectAll[col];
    this.rows().forEach((r) => {
      r[col] = checked;
      r.modified = true;
    });
  }

  applyMassToggle(locked: boolean): void {
    const checkedCols = ALL_LOCK_COLUMNS.filter((col) => this.massToggle[col]);
    if (checkedCols.length === 0) {
      this.message.warning(
        this.i18n.t('deptManage.js.pleaseSelectGroup', 'Vui lòng tích chọn nhóm ngày/đêm ở phía trên trước khi Đóng/Mở xin phép!'),
      );
      return;
    }
    this.rows().forEach((r) => {
      checkedCols.forEach((col) => {
        r[col] = locked;
      });
      r.modified = true;
    });
    const action = locked
      ? this.i18n.t('deptManage.js.close', 'Đóng')
      : this.i18n.t('deptManage.js.open', 'Mở');
    this.message.success(`${action}${this.i18n.t('deptManage.js.massSuccess', ' đồng loạt thành công. Vui lòng bấm Lưu để cập nhật!')}`);
  }

  save(): void {
    const dateStr = this.formatYmd(this.lockDate);
    if (!dateStr) {
      this.message.error(this.i18n.t('deptManage.js.invalidDate', 'Ngày không hợp lệ để lưu.'));
      return;
    }
    const toSave: ArDepartmentManageSaveItem[] = this.rows()
      .filter((r) => r.modified)
      .map((r) => ({
        deptNo: r.deptNo,
        lockDate: dateStr,
        lockAttenAnnualFlag: r.lockAttenAnnualFlag ? '1' : '0',
        lockAttenAnnualNightFlag: r.lockAttenAnnualNightFlag ? '1' : '0',
        lockAttenFlag: r.lockAttenFlag ? '1' : '0',
        lockAttenNightFlag: r.lockAttenNightFlag ? '1' : '0',
        lockOtFlag: r.lockOtFlag ? '1' : '0',
        lockOtNightFlag: r.lockOtNightFlag ? '1' : '0',
        lockAttenExFlag: r.lockAttenExFlag ? '1' : '0',
        lockAttenExNightFlag: r.lockAttenExNightFlag ? '1' : '0',
      }));

    if (toSave.length === 0) {
      this.message.info(this.i18n.t('deptManage.js.noChanges', 'Không có thay đổi nào để lưu.'));
      return;
    }

    this.saving.set(true);
    this.api.save(toSave).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('deptMgr.saveSuccess', 'Lưu thành công!'));
          this.search();
        } else {
          this.message.error(res.error || this.i18n.t('deptMgr.saveFail', 'Lưu thất bại!'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('deptManage.js.connError', 'Lỗi kết nối'));
      },
    });
  }

  /** Xuất excel client-side bằng xlsx (SheetJS) - nút đã có sẵn trên giao diện gốc nhưng chưa từng
   *  được nối JS (xem giải thích ở đầu file), giữ nguyên thứ tự + thụt lề cây bằng dấu gạch ngang cho
   *  dễ đọc trong Excel. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      ...LOCK_COLUMN_GROUPS.flatMap((g) => [
        `${this.i18n.t(g.labelKey, g.labelFallback)} - ${this.i18n.t('deptManage.col.dayShift', 'Ca ngày')}`,
        `${this.i18n.t(g.labelKey, g.labelFallback)} - ${this.i18n.t('deptManage.col.nightShift', 'Ca đêm')}`,
      ]),
      this.i18n.t('deptManage.col.updatedBy', 'Người thay đổi'),
      this.i18n.t('deptManage.col.updateTime', 'Thời gian thay đổi'),
    ];
    const closeLabel = this.i18n.t('deptManage.js.close', 'Đóng');
    const openLabel = this.i18n.t('deptManage.js.open', 'Mở');
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      `${'--'.repeat(r.level)}${r.dispDeptName}`,
      ...ALL_LOCK_COLUMNS.map((col) => (r[col] ? closeLabel : openLabel)),
      r.updatedBy,
      r.updateDate,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'depart_manager_list.xlsx');
  }

  private isHiddenByCollapsedAncestor(row: DeptManageRow, collapsedSet: Set<string>): boolean {
    let parentNo = row.parentDeptNo;
    while (parentNo && parentNo !== '0') {
      if (collapsedSet.has(parentNo)) return true;
      const parent = this.rowIndex.get(parentNo);
      if (!parent) break;
      parentNo = parent.parentDeptNo;
    }
    return false;
  }

  /** Dựng lại cây cha/con từ danh sách phẳng rồi duyệt DFS (root -> lần lượt từng con) để có đúng thứ
   *  tự + độ sâu (level) dùng thụt lề - giống hệt thuật toán buildTreeHTML() đệ quy ở bản gốc, thay vì
   *  dùng trực tiếp thứ tự "ORDER BY DEPT_LEVEL, DEPTNO" phẳng từ backend (không đảm bảo cha luôn
   *  đứng ngay trước các con của nó). */
  private buildRows(list: ArDepartmentManageDto[]): DeptManageRow[] {
    const map = new Map<string, ArDepartmentManageDto>();
    list.forEach((d) => map.set(d.deptNo, d));

    const childrenMap = new Map<string, string[]>();
    const roots: string[] = [];
    list.forEach((d) => {
      if (d.parentDeptNo && d.parentDeptNo !== '0' && map.has(d.parentDeptNo)) {
        const siblings = childrenMap.get(d.parentDeptNo) ?? [];
        siblings.push(d.deptNo);
        childrenMap.set(d.parentDeptNo, siblings);
      } else {
        roots.push(d.deptNo);
      }
    });

    const rows: DeptManageRow[] = [];
    const visit = (deptNo: string, level: number): void => {
      const dto = map.get(deptNo);
      if (!dto) return;
      const children = childrenMap.get(deptNo) ?? [];
      rows.push({
        deptNo: dto.deptNo,
        parentDeptNo: dto.parentDeptNo,
        dispDeptName: dto.dispDeptName,
        level,
        hasChildren: children.length > 0,
        lockAttenAnnualFlag: dto.lockAttenAnnualFlag === '1',
        lockAttenAnnualNightFlag: dto.lockAttenAnnualNightFlag === '1',
        lockAttenFlag: dto.lockAttenFlag === '1',
        lockAttenNightFlag: dto.lockAttenNightFlag === '1',
        lockOtFlag: dto.lockOtFlag === '1',
        lockOtNightFlag: dto.lockOtNightFlag === '1',
        lockAttenExFlag: dto.lockAttenExFlag === '1',
        lockAttenExNightFlag: dto.lockAttenExNightFlag === '1',
        updatedBy: dto.updatedBy,
        updateDate: dto.updateDate,
        modified: false,
      });
      children.forEach((c) => visit(c, level + 1));
    };
    roots.forEach((r) => visit(r, 0));
    return rows;
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
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
}
