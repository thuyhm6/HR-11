import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { forkJoin } from 'rxjs';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import {
  PaInputItemDataDto,
  PaInputItemDataSavePayload,
  PaInputItemListItem,
} from './view-pa-input-item-data.model';
import { ViewPaInputItemDataService } from './view-pa-input-item-data.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.inputItemData.*
 *  (dùng chung cho cả bản Thymeleaf gốc) cộng thêm common.*, arOtf.importResult (nhãn tab kết quả import,
 *  tái dùng đúng chuỗi "Kết quả nhập" sẵn có) và các key empSearch.x / arSupervisor.x / epi.field.position /
 *  vdp.search.dept.placeholder / mep.msg.loadDeptFailed dùng chung cho popup tìm nhân viên (tái dùng đúng
 *  pattern ChangeUserComponent, xem giải thích ở constructor). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'pa.inputItemData.itemList', 'pa.inputItemData.dataList', 'pa.inputItemData.payMonth',
  'pa.inputItemData.empOffice', 'pa.inputItemData.dept', 'pa.inputItemData.deptPlaceholder',
  'pa.inputItemData.empSearch', 'pa.inputItemData.empSearchPlaceholder', 'pa.inputItemData.addNew',
  'pa.inputItemData.delete', 'pa.inputItemData.no', 'pa.inputItemData.empId', 'pa.inputItemData.localName',
  'pa.inputItemData.deptName', 'pa.inputItemData.postGrade', 'pa.inputItemData.empOfficeName',
  'pa.inputItemData.returnValue', 'pa.inputItemData.startMonth', 'pa.inputItemData.endMonth',
  'pa.inputItemData.remark', 'pa.inputItemData.addTitle', 'pa.inputItemData.editTitle',
  'pa.inputItemData.configItem', 'pa.inputItemData.personId', 'pa.inputItemData.selectItemFirst',
  'pa.inputItemData.personIdRequired', 'pa.inputItemData.valueRequired', 'pa.inputItemData.startRequired',
  'pa.inputItemData.confirmDelete', 'pa.inputItemData.selectRequired', 'pa.inputItemData.startGreaterThanEnd',
  'common.search', 'common.clearFilter', 'common.close', 'common.save', 'common.confirm', 'common.cancel',
  'common.action', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.downloadTemplate',
  'common.importExcel', 'common.selectAll', 'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess',
  'common.deleteFail',
  'arOtf.importResult',
  'arSupervisor.field.emp', 'arSupervisor.placeholder.selectEmp', 'arSupervisor.btn.select',
  'arSupervisor.js.empSelected',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const EMP_OFFICE_PARENT_CODE = '15118';
const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

interface DataForm {
  paramDataNo: number | null;
  personId: string | null;
  empDisplay: string;
  returnValue: number | null;
  startMonth: Date | null;
  endMonth: Date | null;
  remark: string;
}

const EMPTY_FORM: DataForm = {
  paramDataNo: null, personId: null, empDisplay: '', returnValue: null, startMonth: null, endMonth: null, remark: '',
};

/**
 * Bản Angular của pa/salary/viewPaInputItemData.html (Thymeleaf + jQuery DataTables server-side) - nhập
 * dữ liệu tiêu chuẩn (PA_PARAM_DATA) theo từng hạng mục (PA_PARAM_ITEM_PARAM) ở panel trái, lọc theo
 * itemType đọc từ query string (đúng bản gốc, xem ViewPaWorkFlowComponent mở tab kèm ?itemType=2/4).
 * Gọi lại nguyên API JSON đã có sẵn ở PaInputItemDataController (xem ViewPaInputItemDataService) -
 * không đổi backend. Giữ nguyên phân trang server-side (draw/start/length -> recordsFiltered) đúng hành
 * vi DataTables gốc (tham khảo pattern ViewPaInputItemParamComponent) thay vì đổi sang client-side -
 * dùng nz-table thay cho jQuery DataTables.
 * Tháng lương/Tháng bắt đầu/Tháng kết thúc đổi từ input text "MMYYYY" tự validate bằng regex sang
 * nz-date-picker nzMode="month" (tham khảo AddEmpShiftComponent.searchMonth) - tự đảm bảo giá trị hợp
 * lệ, không cần validate định dạng thủ công như bản gốc; vẫn gửi lên BE đúng chuỗi 'MMYYYY'.
 * Giá trị (RETURN_VALUE) đổi từ input text tự format dấu chấm nghìn bằng JS sang nz-input-number với
 * nzFormatter/nzParser (cách làm chuẩn của NG-ZORRO) - không cần vpidFormatNumber/vpidUnformatNumber thủ công.
 * Popup tìm kiếm nhân viên trong modal Thêm/Sửa dùng lại đúng pattern + service của ChangeUserComponent
 * (searchEmployees/getCodeList, tham khảo AddEmpShiftComponent) thay cho EmployeeSearchModal (jQuery);
 * khi sửa ẩn nút chọn nhân viên vì PERSON_ID không đổi - giống bản gốc, hiển thị lại đúng "empId - localName"
 * lấy từ dòng đang sửa (API getOne không join HR_EMPLOYEE nên không trả về 2 trường này).
 * Cây phòng ban lọc theo phòng ban được phân quyền PA (getAuthorizedDepartments - endpoint riêng
 * /pa/wagebase/api/supervisor/authorized-departments, KHÁC endpoint AR dùng chung ở các trang khác) -
 * đúng DeptTree.init({ api: ... }) ở bản gốc.
 * Import Excel giữ nguyên luồng 2 bước của bản gốc: upload trực tiếp (multipart, tham khảo
 * AddEmpShiftComponent.onExcelFileSelected) rồi mở tab kết quả /pa/salary/viewImportExcelTempPaParamList
 * (Thymeleaf, CHƯA migrate - nằm ngoài phạm vi trang này) qua TabService kiểu 'external', đúng hành vi
 * tabSystem.openTab ở bản gốc - không tự ý viết lại trang review kết quả import.
 * Không có API xóa hàng loạt ở backend (chỉ có DELETE .../delete/{paramDataNo} từng bản ghi) nên xóa
 * nhiều dòng đã chọn bằng forkJoin nhiều lời gọi xóa đơn - đúng hành vi deleteNext đệ quy tuần tự ở bản
 * gốc, chỉ đổi cách gọi cho gọn.
 */
@Component({
  selector: 'app-view-pa-input-item-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-input-item-data.component.html',
  styleUrl: './view-pa-input-item-data.component.css',
})
export class ViewPaInputItemDataComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  private itemType = '';

  readonly items = signal<PaInputItemListItem[]>([]);
  readonly itemsLoading = signal(false);
  readonly itemsErrorMessage = signal<string | null>(null);
  readonly currentParamNo = signal<string | null>(null);
  readonly currentParamName = signal<string | null>(null);

  readonly rows = signal<PaInputItemDataDto[]>([]);
  readonly totalRecords = signal(0);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  pageIndex = 1;
  pageSize = 20;
  private draw = 1;

  searchPayMonth: Date | null = new Date();
  searchEmpOffice: string | null = null;
  searchDeptNos: string[] = [];
  searchEmpSearch = '';

  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  private deptChildrenMap = new Map<string, string[]>();

  readonly checkedParamDataNos = signal<Set<number>>(new Set());

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  form: DataForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);

  readonly importingExcel = signal(false);

  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;

  constructor(
    private readonly api: ViewPaInputItemDataService,
    private readonly empApi: ChangeUserService,
    private readonly route: ActivatedRoute,
    private readonly tabs: TabService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.loadDeptTree();
    this.route.queryParamMap.subscribe((params) => {
      this.itemType = params.get('itemType') ?? '';
      this.loadItemList();
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
   *  khớp hành vi cascade của widget DeptTree.js gốc (xem giải thích ở ManageEmpPositionInfoComponent). */
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

  // ==================== Panel trái - danh sách hạng mục tiêu chuẩn ====================

  private loadItemList(): void {
    this.itemsLoading.set(true);
    this.itemsErrorMessage.set(null);
    this.currentParamNo.set(null);
    this.currentParamName.set(null);
    this.rows.set([]);
    this.totalRecords.set(0);
    this.api.getItemList(this.itemType).subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        this.itemsLoading.set(false);
      },
      error: () => {
        this.itemsErrorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.items.set([]);
        this.itemsLoading.set(false);
      },
    });
  }

  selectItem(item: PaInputItemListItem): void {
    this.currentParamNo.set(item.paramNo);
    this.currentParamName.set(item.paramName);
    this.search();
  }

  // ==================== Tìm kiếm + phân trang server-side ====================

  search(): void {
    this.pageIndex = 1;
    this.load();
  }

  clearSearch(): void {
    this.searchPayMonth = new Date();
    this.searchEmpOffice = null;
    this.searchDeptNos = [];
    this.searchEmpSearch = '';
    this.search();
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.load();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.pageIndex = 1;
    this.load();
  }

  private load(): void {
    const paramNo = this.currentParamNo();
    if (!paramNo) return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.checkedParamDataNos.set(new Set());
    this.draw += 1;
    this.api.getList({
      paramNo,
      payMonth: this.formatMmyyyy(this.searchPayMonth),
      empOfficeSearch: this.searchEmpOffice ?? '',
      deptNos: this.expandDeptSelection(this.searchDeptNos).join(','),
      empSearch: this.searchEmpSearch.trim(),
      draw: this.draw,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
    }).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.totalRecords.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.totalRecords.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.totalRecords.set(0);
        this.loading.set(false);
      },
    });
  }

  // ==================== Chọn nhiều dòng (checkbox) ====================

  isChecked(row: PaInputItemDataDto): boolean {
    return this.checkedParamDataNos().has(row.paramDataNo);
  }

  toggleChecked(row: PaInputItemDataDto, checked: boolean): void {
    const next = new Set(this.checkedParamDataNos());
    if (checked) next.add(row.paramDataNo);
    else next.delete(row.paramDataNo);
    this.checkedParamDataNos.set(next);
  }

  get allChecked(): boolean {
    const list = this.rows();
    return list.length > 0 && list.every((r) => this.isChecked(r));
  }

  get someChecked(): boolean {
    return this.checkedParamDataNos().size > 0 && !this.allChecked;
  }

  toggleAllChecked(checked: boolean): void {
    const next = new Set(this.checkedParamDataNos());
    this.rows().forEach((r) => (checked ? next.add(r.paramDataNo) : next.delete(r.paramDataNo)));
    this.checkedParamDataNos.set(next);
  }

  // ==================== Modal Thêm mới / Sửa ====================

  openAddModal(): void {
    if (!this.currentParamNo()) {
      this.message.warning(this.i18n.t('pa.inputItemData.selectItemFirst', 'Vui lòng chọn hạng mục ở bên trái trước!'));
      return;
    }
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: PaInputItemDataDto): void {
    this.api.getOne(row.paramDataNo).subscribe({
      next: (dto) => {
        this.isNew.set(false);
        this.form = {
          paramDataNo: dto.paramDataNo,
          personId: dto.personId,
          empDisplay: `${row.empId || ''} - ${row.localName || ''}`,
          returnValue: dto.returnValue != null ? Number(dto.returnValue) : null,
          startMonth: this.parseMmyyyy(dto.startMonth),
          endMonth: this.parseMmyyyy(dto.endMonth),
          remark: dto.remark || '',
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t('pa.inputItemData.personIdRequired', 'Vui lòng nhập mã nhân viên!'));
      return;
    }
    if (this.form.returnValue == null) {
      this.message.warning(this.i18n.t('pa.inputItemData.valueRequired', 'Vui lòng nhập giá trị!'));
      return;
    }
    if (!this.form.startMonth) {
      this.message.warning(this.i18n.t('pa.inputItemData.startRequired', 'Vui lòng nhập tháng bắt đầu!'));
      return;
    }
    if (this.form.endMonth && this.form.startMonth > this.form.endMonth) {
      this.message.warning(this.i18n.t('pa.inputItemData.startGreaterThanEnd', 'Tháng bắt đầu không được lớn hơn tháng kết thúc!'));
      return;
    }
    const paramNo = this.currentParamNo();
    if (!paramNo) return;

    const payload: PaInputItemDataSavePayload = {
      paramDataNo: this.form.paramDataNo,
      paramNo,
      personId: this.form.personId,
      returnValue: String(this.form.returnValue),
      startMonth: this.formatMmyyyy(this.form.startMonth),
      endMonth: this.formatMmyyyy(this.form.endMonth),
      remark: this.form.remark,
    };
    this.saving.set(true);
    const req = this.isNew() ? this.api.insert(payload) : this.api.update(payload);
    req.subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa nhiều dòng ====================

  openDeleteConfirm(): void {
    if (this.checkedParamDataNos().size === 0) {
      this.message.warning(this.i18n.t('pa.inputItemData.selectRequired', 'Vui lòng chọn ít nhất một bản ghi!'));
      return;
    }
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get selectedCount(): number {
    return this.checkedParamDataNos().size;
  }

  confirmDelete(): void {
    const paramDataNos = Array.from(this.checkedParamDataNos());
    if (paramDataNos.length === 0) {
      this.deleteVisible.set(false);
      return;
    }
    this.deleting.set(true);
    forkJoin(paramDataNos.map((no) => this.api.delete(no))).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        this.load();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Tải file mẫu / Import Excel ====================

  downloadTemplate(): void {
    window.location.href = this.api.downloadTemplateUrl();
  }

  onExcelFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    const paramNo = this.currentParamNo();
    if (!paramNo) {
      this.message.warning(this.i18n.t('pa.inputItemData.selectItemFirst', 'Vui lòng chọn hạng mục ở bên trái trước!'));
      return;
    }
    this.importingExcel.set(true);
    this.api.importExcel(paramNo, file).subscribe({
      next: (res) => {
        this.importingExcel.set(false);
        if (res.success) this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        else this.message.warning(res.message || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
        this.tabs.openTab(this.api.importResultTabUrl(paramNo), this.i18n.t('arOtf.importResult', 'Kết quả nhập'), 'external');
        this.load();
      },
      error: (err) => {
        this.importingExcel.set(false);
        this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerRows.set([]);
    this.pickerErrorMessage.set(null);
    this.pickerVisible.set(true);
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? '',
    }).subscribe({
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

  // ==================== Helpers ====================

  private formatMmyyyy(d: Date | null): string {
    return d ? formatDate(d, 'MM', 'vi') + formatDate(d, 'yyyy', 'vi') : '';
  }

  private parseMmyyyy(s: string | null | undefined): Date | null {
    if (!s || s.length !== 6) return null;
    const mm = parseInt(s.substring(0, 2), 10) - 1;
    const yyyy = parseInt(s.substring(2), 10);
    if (Number.isNaN(mm) || Number.isNaN(yyyy)) return null;
    return new Date(yyyy, mm, 1);
  }

  /** Chuyển 'MMYYYY' (BE) sang 'MM/yyyy' để hiển thị trong bảng (theo CLAUDE.md). */
  toMmSlashYyyy(mmyyyy: string | null): string {
    const d = this.parseMmyyyy(mmyyyy);
    return d ? formatDate(d, 'MM/yyyy', 'vi') : '';
  }

  readonly numberFormatter = (value: number): string =>
    value != null ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '';
  readonly numberParser = (value: string): number => Number(value.replace(/\./g, ''));
}
