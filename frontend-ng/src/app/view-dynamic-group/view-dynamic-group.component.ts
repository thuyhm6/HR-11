import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { ArEmpGroupDto, ArEmpGroupSavePayload } from './view-dynamic-group.model';
import { ViewDynamicGroupService } from './view-dynamic-group.service';

/** Các key message.properties dùng trong trang này - phần lớn tái dùng namespace dynGroup.x đã có sẵn
 *  từ bản Thymeleaf gốc, cộng thêm 2 key cột còn thiếu (dynGroup.colUpdatedBy/colUpdateDate) và các key
 *  dùng chung common.x, empSearch.x, arSupervisor.x cho modal chọn nhân viên (xem giải thích ở
 *  constructor, cùng pattern ViewAttendanceKeeperComponent). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'dynGroup.pageTitle', 'dynGroup.colNo', 'dynGroup.colEmpId', 'dynGroup.colEmpName', 'dynGroup.colUpdatedBy',
  'dynGroup.colUpdateDate', 'dynGroup.colAction', 'dynGroup.modalAddTitle', 'dynGroup.confirmDelete',
  'dynGroup.saveSuccess', 'dynGroup.saveFail', 'dynGroup.deleteSuccess', 'dynGroup.deleteFail',
  'dynGroup.loadFail',
  'common.employee', 'common.deptName', 'common.search', 'common.clearFilter', 'common.addNew', 'common.save',
  'common.close', 'common.confirm', 'common.cancel', 'common.delete', 'common.noData', 'common.totalRows',
  'common.stt', 'common.empId', 'common.empName', 'common.selectAll',
  'addShift.placeholder.empIdOrName', 'essDept.exportExcel',
  'arSupervisor.field.emp', 'arSupervisor.placeholder.selectEmp', 'arSupervisor.btn.select',
  'arSupervisor.js.empSelected', 'arSupervisor.js.pleaseSearch', 'arSupervisor.js.serverError',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const EMP_OFFICE_PARENT_CODE = '15118';
const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/**
 * Bản Angular của ar/attendanceSettings/viewDynamicGroup.html (Thymeleaf + jQuery DataTables) - quản
 * lý danh sách nhân viên đặc biệt (bảng AR_EMP_GROUP, GROUP_NO cố định '80000084'). Gọi lại nguyên API
 * JSON đã có sẵn ở ArEmpGroupController (xem ViewDynamicGroupService) - không đổi backend. Dùng
 * nz-table (phân trang client-side, đúng hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc,
 * tham khảo ManageEmpPositionInfoComponent/ViewCycleComponent) thay cho jQuery DataTables. Modal
 * thêm mới chỉ có 1 trường chọn nhân viên (đúng UI thực tế của bản gốc - #dgActivity/#dgOrderno tồn
 * tại trong JS nhưng không có input tương ứng trong HTML gốc, là code chết, nên không đưa vào form;
 * bản gốc cũng không có nút Sửa trên bảng, chỉ có Xóa). Popup tìm kiếm nhân viên dùng lại đúng pattern
 * + service của ChangeUserComponent (searchEmployees/getAuthorizedDepartments/getCodeList, tham khảo
 * ViewAttendanceKeeperComponent) thay cho EmployeeSearchModal (jQuery + DataTables) - bảng kết quả tìm
 * kiếm dùng nz-table. Bản gốc chỉ có export qua nút Buttons của DataTables (client-side) - nay làm
 * bằng xlsx (SheetJS) theo đúng quy ước xuất .xlsx của các trang khác (xem CLAUDE.md).
 */
@Component({
  selector: 'app-view-dynamic-group',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzSelectModule,
    NzTreeSelectModule,
    TranslatePipe,
  ],
  templateUrl: './view-dynamic-group.component.html',
  styleUrl: './view-dynamic-group.component.css',
})
export class ViewDynamicGroupComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ArEmpGroupDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchEmpId = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  formPersonId: string | null = null;
  formEmpDisplay = '';

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArEmpGroupDto | null = null;

  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewDynamicGroupService,
    private readonly empApi: ChangeUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildPickerDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchEmpId.trim()).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('dynGroup.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.searchEmpId = '';
    this.search();
  }

  empLabel(row: ArEmpGroupDto): string {
    return row.empId ? `${row.empId} - ${row.localName ?? ''}` : row.personId;
  }

  // ==================== Modal Thêm mới ====================

  openAddModal(): void {
    this.formPersonId = null;
    this.formEmpDisplay = '';
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.formPersonId) {
      this.message.warning(this.i18n.t('arSupervisor.js.pleaseSearch', 'Vui lòng Tra cứu để đảm bảo mã NV hợp lệ.'));
      return;
    }
    const payload: ArEmpGroupSavePayload = {
      personId: this.formPersonId,
      groupNo: '80000084',
      orderno: null,
      activity: 1,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t('dynGroup.saveFail', 'Lưu thất bại!'));
          return;
        }
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('dynGroup.saveSuccess', 'Lưu thành công!'));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('arSupervisor.js.serverError', 'Lỗi xử lý server');
        this.message.error(msg);
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArEmpGroupDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? this.empLabel(this.deleteTarget) : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.personId) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.personId).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t('dynGroup.deleteFail', 'Xóa thất bại!'));
          return;
        }
        this.message.success(res.message || this.i18n.t('dynGroup.deleteSuccess', 'Xóa thành công!'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('dynGroup.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('dynGroup.colNo', 'STT'),
      this.i18n.t('dynGroup.colEmpId', 'Mã nhân viên'),
      this.i18n.t('dynGroup.colEmpName', 'Tên nhân viên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('dynGroup.colUpdatedBy', 'Người cập nhật'),
      this.i18n.t('dynGroup.colUpdateDate', 'Ngày cập nhật'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.updatedBy, this.toDmyHm(r.updateDate),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'dynamic_group_list.xlsx');
  }

  /** Hiển thị datetime BE trả về (ISO) dạng dd/MM/yyyy HH:mm theo CLAUDE.md. */
  toDmyHm(iso: string | null): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerVisible.set(true);
    this.pickerSearch();
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi
      .searchEmployees({
        keyword: this.pickerKeyword.trim(),
        deptCodes: this.expandDeptSelection(this.pickerDeptNos),
        empOffice: this.pickerEmpOffice ?? '',
      })
      .subscribe({
        next: (rows) => {
          this.pickerRows.set(rows ?? []);
          this.pickerLoading.set(false);
        },
        error: () => {
          this.pickerErrorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.pickerRows.set([]);
          this.pickerLoading.set(false);
        },
      });
  }

  pickerClear(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }

  selectEmployee(row: EmployeeSearchDto): void {
    this.formPersonId = row.personId;
    this.formEmpDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
  }

  private buildPickerDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
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
