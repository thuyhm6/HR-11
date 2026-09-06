import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { ArScheduleHtsvDto, ArScheduleHtsvSavePayload, ShiftOption } from './add-emp-shift.model';
import { AddEmpShiftService } from './add-emp-shift.service';

/** Toàn bộ key bên dưới đã có sẵn trong message.properties (namespace "addShift.x" dùng riêng cho
 *  trang này, "common.x" dùng chung) - không cần bổ sung key mới. Các key cho popup tìm nhân viên
 *  (empSearch.x, arSupervisor.x) tái dùng đúng namespace của ViewAttendanceKeeperComponent. */
const I18N_KEYS = [
  'addShift.title', 'addShift.month', 'addShift.employee', 'addShift.placeholder.empIdOrName',
  'addShift.shiftDate', 'addShift.shift', 'addShift.dayType', 'addShift.selectShift',
  'addShift.modal.title.add', 'addShift.modal.title.edit', 'addShift.selectEmployee',
  'addShift.msg.selectEmployee', 'addShift.msg.selectDate', 'addShift.msg.selectShift',
  'addShift.msg.confirmDelete', 'addShift.msg.errorLoad', 'addShift.msg.errorConnect',
  'common.stt', 'common.date', 'common.empId', 'common.empName', 'common.remark', 'common.action',
  'common.search', 'common.clearFilter', 'common.addNew', 'common.downloadTemplate', 'common.importExcel',
  'common.close', 'common.save', 'common.confirm', 'common.cancel', 'common.delete', 'common.noData',
  'common.totalRows', 'common.loadFail', 'common.selectAll', 'essDept.exportExcel',
  'arSupervisor.field.emp', 'arSupervisor.placeholder.selectEmp', 'arSupervisor.btn.select',
  'arSupervisor.js.empSelected',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const EMP_OFFICE_PARENT_CODE = '15118';
const DAY_TYPE_PARENT_CODE = '1439';
const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface ShiftForm {
  pkNo: number | null;
  personId: string | null;
  empDisplay: string;
  arDateStr: Date | null;
  shiftNo: string | null;
  typeid: number | null;
  remark: string;
}

const EMPTY_FORM: ShiftForm = {
  pkNo: null, personId: null, empDisplay: '', arDateStr: null, shiftNo: null, typeid: null, remark: '',
};

/**
 * Bản Angular của ar/attendanceMintenance/addEmpShiftView.html (Thymeleaf + jQuery DataTables) - xếp ca
 * làm việc (AR_SCHEDULE_HTSV) cho 1 nhân viên vào 1 ngày công cụ thể. Gọi lại nguyên API JSON đã có sẵn
 * ở ArScheduleHtsvController (xem AddEmpShiftService) - không đổi backend. Dùng nz-table (phân trang
 * client-side, đúng hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc tháng/nhân viên, tham
 * khảo ManageEmpPositionInfoComponent/ViewCycleComponent) thay cho jQuery DataTables; nz-modal thay
 * modal Bootstrap. Popup tìm kiếm nhân viên dùng lại đúng pattern + service của ChangeUserComponent
 * (searchEmployees/getAuthorizedDepartments/getCodeList, tham khảo ViewAttendanceKeeperComponent) thay
 * cho EmployeeSearchModal (jQuery + DataTables). Combo Loại ngày (data-parent-code="1439" ở bản gốc)
 * tái dùng ChangeUserService.getCodeList - giống combo Trạng thái làm việc trong popup tìm nhân viên.
 * Download file mẫu + Import Excel dùng lại API dùng chung /sy/excel/api/* (ExcelController) qua input
 * file ẩn + upload trực tiếp (tham khảo ViewArCardRecordComponent.onExcelFileSelected) thay cho modal
 * ExcelImport.js riêng. Bản gốc chỉ có export qua nút Buttons của DataTables (client-side) - nay làm
 * bằng xlsx (SheetJS) theo đúng quy ước xuất .xlsx của các trang khác (xem CLAUDE.md).
 */
@Component({
  selector: 'app-add-emp-shift',
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
    NzDatePickerModule,
    NzTreeSelectModule,
    TranslatePipe,
  ],
  templateUrl: './add-emp-shift.component.html',
  styleUrl: './add-emp-shift.component.css',
})
export class AddEmpShiftComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ArScheduleHtsvDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly shiftOptions = signal<ShiftOption[]>([]);
  readonly dayTypeOptions = signal<CodeItem[]>([]);

  searchMonth: Date | null = new Date();
  searchEmpId = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  form: ShiftForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArScheduleHtsvDto | null = null;

  readonly importingExcel = signal(false);

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
    private readonly api: AddEmpShiftService,
    private readonly empApi: ChangeUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.empApi.getCodeList(DAY_TYPE_PARENT_CODE).subscribe((list) => this.dayTypeOptions.set(list ?? []));
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildPickerDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }

  shiftLabel(s: ShiftOption): string {
    return s.nameVi || s.shiftShortname || s.shiftNo;
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchEmpId.trim(), this.formatYm(this.searchMonth)).subscribe({
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
    this.searchEmpId = '';
    this.searchMonth = new Date();
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: ArScheduleHtsvDto): void {
    this.api.getByPkNo(row.pkNo).subscribe({
      next: (d) => {
        this.isNew.set(false);
        this.form = {
          pkNo: d.pkNo,
          personId: d.personId,
          empDisplay: `${d.empId || ''} - ${d.localName || ''}`,
          arDateStr: this.parseArDateStr(d.arDateStr),
          shiftNo: d.shiftNo,
          typeid: d.typeid,
          remark: d.remark || '',
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('addShift.msg.errorLoad', 'Lỗi khi lấy thông tin')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t('addShift.msg.selectEmployee', 'Vui lòng chọn nhân viên'));
      return;
    }
    if (!this.form.arDateStr) {
      this.message.warning(this.i18n.t('addShift.msg.selectDate', 'Vui lòng chọn Ngày công'));
      return;
    }
    if (!this.form.shiftNo) {
      this.message.warning(this.i18n.t('addShift.msg.selectShift', 'Vui lòng chọn Ca làm việc'));
      return;
    }
    const payload: ArScheduleHtsvSavePayload = {
      pkNo: this.form.pkNo,
      personId: this.form.personId,
      arDateStr: formatDate(this.form.arDateStr, 'yyyy/MM/dd', 'vi'),
      shiftNo: this.form.shiftNo,
      typeid: this.form.typeid,
      remark: this.form.remark,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t('addShift.msg.errorConnect', 'Lỗi kết nối'));
          return;
        }
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.save', 'Lưu'));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('addShift.msg.errorConnect', 'Lỗi kết nối'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArScheduleHtsvDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    if (!this.deleteTarget) return '';
    return `${this.deleteTarget.empId} - ${this.deleteTarget.localName ?? ''} (${this.deleteTarget.arDateStr})`;
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.pkNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.pkNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t('addShift.msg.errorConnect', 'Lỗi kết nối'));
          return;
        }
        this.message.success(res.message || this.i18n.t('common.save', 'Lưu'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('addShift.msg.errorConnect', 'Lỗi kết nối'));
      },
    });
  }

  // ==================== Xuất Excel / Tải file mẫu / Import Excel ====================

  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.date', 'Ngày'),
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Tên nhân viên'),
      this.i18n.t('addShift.shift', 'Ca quy định'),
      this.i18n.t('addShift.dayType', 'Loại ngày'),
      this.i18n.t('common.remark', 'Ghi chú'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, this.toDmy(r.arDateStr), r.empId, r.localName, r.shiftName, r.typeName, r.remark,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'XepCa');
    XLSX.writeFile(workbook, 'add_emp_shift_list.xlsx');
  }

  downloadTemplate(): void {
    window.location.href = this.api.downloadTemplateUrl();
  }

  onExcelFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.importingExcel.set(true);
    this.api.uploadExcel(file).subscribe({
      next: (res) => {
        this.importingExcel.set(false);
        if (res.success) this.message.success(res.message || this.i18n.t('common.save', 'Lưu'));
        else this.message.warning(res.message || this.i18n.t('addShift.msg.errorConnect', 'Lỗi kết nối'));
        this.search();
      },
      error: () => {
        this.importingExcel.set(false);
        this.message.error(this.i18n.t('addShift.msg.errorConnect', 'Lỗi kết nối'));
      },
    });
  }

  /** Chuyển 'yyyy/MM/dd' (BE) sang 'dd/MM/yyyy' để hiển thị trong bảng (theo CLAUDE.md). */
  toDmy(ymd: string | null): string {
    if (!ymd) return '';
    const [y, m, d] = ymd.split('/');
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }

  private parseArDateStr(arDateStr: string | null | undefined): Date | null {
    if (!arDateStr) return null;
    const parts = arDateStr.split('/').map(Number);
    if (parts.length !== 3 || parts.some((p) => Number.isNaN(p))) return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  private formatYm(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM', 'vi') : '';
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
    this.form.personId = row.personId;
    this.form.empDisplay = `${row.empId} - ${row.localName}`;
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
