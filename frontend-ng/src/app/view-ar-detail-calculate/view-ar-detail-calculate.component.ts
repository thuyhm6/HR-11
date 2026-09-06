import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { ViewArDetailCalculateService } from './view-ar-detail-calculate.service';

/** Toàn bộ key bên dưới đã có sẵn trong message.properties (namespace "arCalc.x" dùng riêng cho trang
 *  này, "common.x" dùng chung) - không cần bổ sung key mới. Key cho popup tìm nhân viên (empSearch.x)
 *  tái dùng đúng namespace của ChangeUserComponent/AddEmpShiftComponent. */
const I18N_KEYS = [
  'arCalc.title', 'arCalc.calType', 'arCalc.byEmployee', 'arCalc.byDept', 'common.fromDate', 'common.toDate',
  'arCalc.selectEmployee', 'arCalc.selectDept', 'arCalc.includeSubDept', 'arCalc.btnCalculate',
  'arCalc.calculating', 'arCalc.msg.selectDateRange', 'arCalc.msg.selectEmployee', 'arCalc.msg.selectDept',
  'arCalc.msg.calcFail', 'arCalc.msg.calcError',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed', 'common.search', 'common.selectAll',
  'common.empId', 'common.empName', 'common.deptName', 'common.loadFail',
];

const EMP_OFFICE_PARENT_CODE = '15118';

/**
 * Bản Angular của ar/attendanceMintenance/viewArDetailCalculate.html (Thymeleaf) - chạy thủ tục tính
 * toán chi tiết chấm công (AR_DETAIL_CAL_P) cho 1 nhân viên hoặc 1 phòng ban trong khoảng ngày. Gọi
 * lại nguyên API JSON đã có sẵn ở ArDetailCalculateController (xem ViewArDetailCalculateService) -
 * không đổi backend. Trang gốc không có bảng dữ liệu/DataTables (chỉ là 1 form chạy hành động), nên
 * không có nz-table ở màn hình chính - nz-table chỉ dùng trong popup tìm nhân viên (tái dùng đúng
 * pattern + service của ChangeUserComponent/AddEmpShiftComponent: searchEmployees/
 * getAuthorizedDepartments/getCodeList) thay cho EmployeeSearchModal (jQuery + DataTables) gốc.
 *
 * 2 checkbox loại trừ lẫn nhau ("Nhân viên"/"Phòng ban", tự viết JS toggle) đổi thành nz-radio-group
 * (đúng ngữ nghĩa chọn 1 trong 2). Phòng ban mục tiêu chỉ cho chọn 1 (bản gốc validate bằng JS "Chỉ
 * được chọn một phòng ban") nên dùng nz-tree-select KHÔNG nzCheckable (single-select) thay vì
 * multi-select như các trang danh sách khác - không cần validate lại vì UI đã chặn cấu trúc.
 * sonDeptFlag (bao gồm phòng ban con) được xử lý ở server (AR_DETAIL_CAL_P), không cascade phía FE.
 */
@Component({
  selector: 'app-view-ar-detail-calculate',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzRadioModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzModalModule,
    NzTableModule,
    NzSelectModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-ar-detail-calculate.component.html',
  styleUrl: './view-ar-detail-calculate.component.css',
})
export class ViewArDetailCalculateComponent implements OnInit {
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly calculating = signal(false);

  caltype: 'EMP' | 'DEPT' = 'EMP';
  fromDate: Date | null = null;
  toDate: Date | null = null;

  personId: string | null = null;
  personDisplay = '';

  deptId: string | null = null;
  sonDeptFlag = false;

  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewArDetailCalculateService,
    private readonly empApi: ChangeUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }

  onCaltypeChange(): void {
    if (this.caltype === 'EMP') {
      this.deptId = null;
      this.sonDeptFlag = false;
    } else {
      this.personId = null;
      this.personDisplay = '';
    }
  }

  runCalculate(): void {
    if (!this.fromDate || !this.toDate) {
      this.message.warning(this.i18n.t('arCalc.msg.selectDateRange', 'Vui lòng chọn khoảng thời gian tính toán'));
      return;
    }
    if (this.caltype === 'EMP') {
      if (!this.personId) {
        this.message.warning(this.i18n.t('arCalc.msg.selectEmployee', 'Vui lòng chọn nhân viên'));
        return;
      }
    } else if (!this.deptId) {
      this.message.warning(this.i18n.t('arCalc.msg.selectDept', 'Vui lòng chọn phòng ban'));
      return;
    }

    this.calculating.set(true);
    this.api
      .runCalculate({
        caltype: this.caltype,
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
        deptId: this.caltype === 'DEPT' ? (this.deptId ?? '') : '',
        sonDeptFlag: this.sonDeptFlag ? 'YES' : 'NO',
        personId: this.caltype === 'EMP' ? (this.personId ?? '') : '',
      })
      .subscribe({
        next: (res) => {
          this.calculating.set(false);
          if (res.success) {
            this.message.success(res.message || this.i18n.t('arCalc.btnCalculate', 'Tính toán'));
          } else {
            this.message.error(res.error || this.i18n.t('arCalc.msg.calcFail', 'Tính toán thất bại'));
          }
        },
        error: () => {
          this.calculating.set(false);
          this.message.error(this.i18n.t('arCalc.msg.calcError', 'Không thể thực hiện tính toán'));
        },
      });
  }

  private initDefaultDateRange(): void {
    const now = new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  openPicker(): void {
    this.pickerKeyword = this.personDisplay;
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
    this.personId = row.personId;
    this.personDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
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

  /** Dùng cho cây phòng ban trong popup tìm nhân viên (checkable, multi) - phòng ban mục tiêu của
   *  phép tính (deptId, single-select) không cascade phía FE vì server tự xử lý qua sonDeptFlag. */
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
