import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, VacEmpRow } from './view-vac-emp-list.model';
import { ViewVacEmpListService } from './view-vac-emp-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.search.empIdOrName', 'common.placeholder.enterEmpId', 'common.deptName', 'common.select',
  'common.workStatus', 'common.selectAll', 'vacEmp.year', 'common.search', 'common.clearFilter',
  'common.exportExcel', 'common.stt', 'common.empId', 'common.empName', 'attSearch.position',
  'vacEmp.colTotal', 'vacEmp.lastYearVac', 'vacEmp.colUsed', 'vacEmp.colPending',
  'vacEmp.colJan', 'vacEmp.colFeb', 'vacEmp.colMar', 'vacEmp.colApr', 'vacEmp.colMay', 'vacEmp.colJun',
  'vacEmp.colJul', 'vacEmp.colAug', 'vacEmp.colSep', 'vacEmp.colOct', 'vacEmp.colNov', 'vacEmp.colDec',
  'vacEmp.convert', 'vacEmp.workMonth', 'vacEmp.locked', 'common.remark', 'common.totalRows',
  'common.loadFail', 'mep.msg.loadDeptFailed',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];

const DEFAULT_EMP_OFFICE = '15119';

/**
 * Bản Angular của ar/attendanceSettings/viewVacEmpList.html (Thymeleaf + DataTables), gọi lại nguyên
 * các API JSON đã có sẵn (xem ViewVacEmpListService) - không đổi backend, chỉ bổ sung truyền tham số
 * empOffice ở controller (bản gốc đã đọc empOffice ở JS và mapper.xml đã lọc theo nó nhưng controller
 * cũ quên set vào DTO trước khi gọi service - xem ArVacEmpController.getVacEmpList).
 *
 * Cột "Đã dùng"/"Chờ duyệt" bản gốc DataTables khai 27 cột dữ liệu nhưng chỉ có 25 header (lệch cột),
 * map nhầm "Đã dùng" -> addVac và "Chờ duyệt" -> useVacCnt. Bản Angular này sửa đúng theo ngữ nghĩa:
 * "Đã dùng" -> useVac (CONFIRM+AFFIRM cả năm), "Chờ duyệt" -> affirmUseVac (AFFIRM - chờ duyệt), bỏ
 * addVac/useVacCnt (không có ý nghĩa hiển thị rõ ràng, không được xác nhận cần giữ lại).
 *
 * Dùng nz-table (phân trang client-side, giống hệt hành vi DataTables gốc) thay cho DataTables;
 * nz-tree-select thay widget cây phòng ban tự viết (DeptTree.js). Xuất excel làm client-side (không
 * có endpoint export riêng ở backend - bản gốc cũng xuất client-side qua DataTables Buttons).
 */
@Component({
  selector: 'app-view-vac-emp-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTreeSelectModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-vac-emp-list.component.html',
  styleUrl: './view-vac-emp-list.component.css',
})
export class ViewVacEmpListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly currentYear = String(new Date().getFullYear());

  readonly rows = signal<VacEmpRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  empOffice: string | null = DEFAULT_EMP_OFFICE;

  constructor(
    private readonly api: ViewVacEmpListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
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
        vacId: this.currentYear,
        empOffice: this.empOffice ?? '',
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
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.search();
  }

  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('attSearch.position', 'Chức vụ'),
      this.i18n.t('vacEmp.colTotal', 'Tổng phép'),
      this.i18n.t('vacEmp.lastYearVac', 'Phép năm trước'),
      this.i18n.t('vacEmp.colUsed', 'Đã dùng'),
      this.i18n.t('vacEmp.colPending', 'Chờ duyệt'),
      this.i18n.t('vacEmp.colJan', 'Tháng 1'),
      this.i18n.t('vacEmp.colFeb', 'Tháng 2'),
      this.i18n.t('vacEmp.colMar', 'Tháng 3'),
      this.i18n.t('vacEmp.colApr', 'Tháng 4'),
      this.i18n.t('vacEmp.colMay', 'Tháng 5'),
      this.i18n.t('vacEmp.colJun', 'Tháng 6'),
      this.i18n.t('vacEmp.colJul', 'Tháng 7'),
      this.i18n.t('vacEmp.colAug', 'Tháng 8'),
      this.i18n.t('vacEmp.colSep', 'Tháng 9'),
      this.i18n.t('vacEmp.colOct', 'Tháng 10'),
      this.i18n.t('vacEmp.colNov', 'Tháng 11'),
      this.i18n.t('vacEmp.colDec', 'Tháng 12'),
      this.i18n.t('vacEmp.convert', 'Quy đổi'),
      this.i18n.t('vacEmp.workMonth', 'Tháng công tác'),
      this.i18n.t('vacEmp.locked', 'Khóa'),
      this.i18n.t('common.remark', 'Ghi chú'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postGradeName, r.totVacCnt, r.lastYearVac,
      r.useVac, r.affirmUseVac, r.useVac1, r.useVac2, r.useVac3, r.useVac4, r.useVac5, r.useVac6,
      r.useVac7, r.useVac8, r.useVac9, r.useVac10, r.useVac11, r.useVac12, r.mentVac, r.workMonth,
      r.isLocked, r.remark,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSachPhep');
    XLSX.writeFile(workbook, `vac_emp_export_${this.currentYear}.xlsx`);
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
    this.api.getCodeList('15118').subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
}
