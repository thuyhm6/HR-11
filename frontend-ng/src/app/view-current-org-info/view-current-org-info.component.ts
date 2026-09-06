import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormatEmitEvent, NzTreeModule, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CurrentOrgEmployeeDto, HrDepartmentDto } from './view-current-org-info.model';
import { ViewCurrentOrgInfoService } from './view-current-org-info.service';

/** Các key message.properties dùng trong trang này - toàn bộ đều tái dùng key đã có sẵn (không cần tạo
 *  namespace riêng): "org.orgManage.title.orgHorizView" (Sơ đồ tổ chức - tiêu đề cây), "orgCompose.*"
 *  (ô tìm kiếm cây/mở-đóng tất cả/không có dữ liệu tổ chức - cùng khái niệm cây tổ chức với trang
 *  view-compose-org), "org.title.DEPT_INFO"/"org.title.DEPT_ID"/"org.title.EMPID"/"org.title.ORG_NAME_ENG"
 *  /"org.title.DATE_STARTED", "org.orgManage.DEPARTMENT_INFORMATION.Z", "org.orgManage.title.deptType",
 *  "orgCompose.costCenter", "evs.manage.viewEvsSchedulePanel.col.deptName" (Tên phòng ban),
 *  "sys.affirm.title.personName" (Tên nhân viên), "hrm.empinfo.workexp.position" (Vị trí) - tải trước 1
 *  lần ở ngOnInit. */
const I18N_KEYS = [
  'org.orgManage.viewCurrentOrgInfo.title', 'org.orgManage.title.orgHorizView',
  'orgCompose.searchTreePlaceholder', 'orgCompose.expandAll', 'orgCompose.collapseAll', 'orgCompose.msg.noOrgData',
  'org.title.DEPT_INFO', 'evs.manage.viewEvsSchedulePanel.col.deptName', 'org.title.DEPT_ID',
  'org.orgManage.DEPARTMENT_INFORMATION.Z', 'org.orgManage.title.deptType', 'orgCompose.costCenter',
  'common.stt', 'org.title.EMPID', 'sys.affirm.title.personName', 'org.title.ORG_NAME_ENG',
  'hrm.empinfo.workexp.position', 'org.title.DATE_STARTED', 'common.status', 'common.active', 'common.inactive',
  'common.noData', 'common.exportExcel', 'common.loadFail', 'common.totalRows',
];

/** Node cây tổ chức - gắn thêm bản ghi HrDepartmentDto gốc vào field "data" để đọc lại khi click chọn
 *  node, giống hệt cách jsTree bản gốc gắn "data: item" cho mỗi node. */
interface OrgTreeNodeOptions extends NzTreeNodeOptions {
  data: HrDepartmentDto;
  children?: OrgTreeNodeOptions[];
}

/** Dựng cây thật (parent/child theo deptNo/parentDeptNo) từ danh sách phẳng HrDepartmentDto - đúng logic
 *  currOrg_buildTree() bản gốc: phòng ban có parentDeptNo rỗng, "ROOT" hoặc trỏ tới 1 deptNo không tồn
 *  tại trong danh sách (orphan) đều được coi là node gốc để tránh mất dữ liệu. */
function buildOrgTree(list: HrDepartmentDto[]): OrgTreeNodeOptions[] {
  const idSet = new Set(list.map((o) => o.deptNo));
  const nodeMap = new Map<string, OrgTreeNodeOptions>();
  list.forEach((item) => {
    nodeMap.set(item.deptNo, {
      key: item.deptNo,
      title: item.orgNameLocal || item.deptNo,
      icon: 'bx bxs-folder',
      isLeaf: true,
      data: item,
    });
  });

  const roots: OrgTreeNodeOptions[] = [];
  list.forEach((item) => {
    const node = nodeMap.get(item.deptNo)!;
    const parentId = item.parentDeptNo;
    const parentNode = parentId && parentId !== 'ROOT' && idSet.has(parentId) ? nodeMap.get(parentId) : undefined;
    if (parentNode) {
      parentNode.isLeaf = false;
      (parentNode.children ??= []).push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}

function collectAllKeys(nodes: OrgTreeNodeOptions[]): string[] {
  const keys: string[] = [];
  const walk = (list: OrgTreeNodeOptions[]) => {
    list.forEach((n) => {
      keys.push(n.key);
      if (n.children?.length) walk(n.children);
    });
  };
  walk(nodes);
  return keys;
}

/**
 * Bản Angular của org/orgManage/viewCurrentOrgInfo.html (Thymeleaf + jQuery + jsTree + DataTables) - xem
 * cơ cấu tổ chức hiện hành (không theo phiên bản thay đổi, khác view-compose-org) dạng cây, chọn 1 phòng
 * ban để xem thông tin + danh sách nhân viên đang thuộc phòng ban đó. Chỉ xem, không có thao tác thêm/
 * sửa/xóa. Gọi lại nguyên API JSON đã có sẵn ở CurrentOrgController (xem ViewCurrentOrgInfoService) -
 * không đổi backend. jsTree được thay bằng nz-tree (dựng cây thật theo parent/child), DataTables thay
 * bằng nz-table phân trang client-side (pageSize 20, đúng bản gốc). Mặc định chỉ mở node gốc (đúng
 * state.opened bản gốc chỉ true khi parent === '#'), khác cách "mở tất cả theo mặc định" của
 * view-compose-org. Nút Excel/PDF/Print (DataTables buttons) chỉ còn lại Excel - PDF/Print không phải
 * nghiệp vụ cốt lõi, đúng quyết định đã áp dụng khi chuyển view-dept-manager-check.
 */
@Component({
  selector: 'app-view-current-org-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzSpinModule,
    NzTableModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-current-org-info.component.html',
  styleUrl: './view-current-org-info.component.css',
})
export class ViewCurrentOrgInfoComponent implements OnInit {
  readonly treeData = signal<HrDepartmentDto[]>([]);
  readonly loadingTree = signal(false);
  readonly treeNodes = computed<OrgTreeNodeOptions[]>(() => buildOrgTree(this.treeData()));
  readonly expandedKeys = signal<string[]>([]);
  treeSearchValue = '';
  selectedDeptKey: string | null = null;

  readonly selectedDept = signal<HrDepartmentDto | null>(null);
  readonly panelTitle = computed(() => {
    const dept = this.selectedDept();
    const base = this.i18n.t('org.title.DEPT_INFO', 'Thông tin phòng ban');
    return dept ? `${base} - ${dept.orgNameLocal || dept.deptNo}` : base;
  });

  readonly employees = signal<CurrentOrgEmployeeDto[]>([]);
  readonly loadingEmployees = signal(false);
  readonly pageSizeOptions = [20, 50, 100];

  constructor(
    private readonly api: ViewCurrentOrgInfoService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadTree();
  }

  private loadTree(): void {
    this.loadingTree.set(true);
    this.api.getStructure().subscribe({
      next: (list) => {
        this.treeData.set(list ?? []);
        this.expandedKeys.set(buildOrgTree(list ?? []).map((n) => n.key));
        this.loadingTree.set(false);
      },
      error: () => {
        this.treeData.set([]);
        this.loadingTree.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  expandAllNodes(): void {
    this.expandedKeys.set(collectAllKeys(this.treeNodes()));
  }

  collapseAllNodes(): void {
    this.expandedKeys.set([]);
  }

  onTreeClick(event: NzFormatEmitEvent): void {
    const data = (event.node?.origin as OrgTreeNodeOptions | undefined)?.data;
    if (!data) return;
    this.selectedDeptKey = data.deptNo;
    this.selectedDept.set(data);
    this.loadEmployees(data.deptNo);
  }

  private loadEmployees(deptNo: string): void {
    this.loadingEmployees.set(true);
    this.api.getEmployees(deptNo).subscribe({
      next: (list) => {
        this.employees.set(list ?? []);
        this.loadingEmployees.set(false);
      },
      error: () => {
        this.employees.set([]);
        this.loadingEmployees.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  managerDisplay(dept: HrDepartmentDto): string {
    return dept.managerEmpName ? `${dept.managerEmpName} (${dept.managerEmpId ?? ''})` : (dept.managerEmpId ?? '');
  }

  costCenterDisplay(dept: HrDepartmentDto): string {
    return dept.costCenterName ? `${dept.costCenterName} (${dept.costCenter ?? ''})` : (dept.costCenter ?? '');
  }

  isActiveEmp(emp: CurrentOrgEmployeeDto): boolean {
    return emp.activity === 1 || String(emp.activity) === '1';
  }

  formatDateStarted(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? '' : formatDate(d, 'dd/MM/yyyy', 'vi');
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('org.title.EMPID', 'Mã nhân viên'),
      this.i18n.t('sys.affirm.title.personName', 'Tên nhân viên'),
      this.i18n.t('org.title.ORG_NAME_ENG', 'Tên tiếng Anh'),
      this.i18n.t('hrm.empinfo.workexp.position', 'Vị trí'),
      this.i18n.t('org.title.DATE_STARTED', 'Ngày vào làm'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.employees().map((e, i) => [
      i + 1,
      e.empId,
      e.localName,
      e.englishName,
      e.position,
      this.formatDateStarted(e.dateStarted),
      this.isActiveEmp(e) ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Không hoạt động'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSachNhanVien');
    XLSX.writeFile(workbook, 'danh_sach_nhan_vien_phong_ban.xlsx');
  }
}
