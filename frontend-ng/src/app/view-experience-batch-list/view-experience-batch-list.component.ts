import { CommonModule, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  CodeItem,
  ExpBatchItem,
  ExpBatchListParams,
  ExpBatchRegister,
} from './view-experience-batch-list.model';
import { ViewExperienceBatchListService } from './view-experience-batch-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'ebl.title', 'ebl.label.registerDate', 'ebl.btn.register', 'ebl.btn.insertFile',
  'ebl.col.processed', 'ebl.col.startDate', 'ebl.col.decision', 'ebl.col.reason', 'ebl.col.group',
  'ebl.col.level', 'ebl.col.jobTitle', 'ebl.col.empType', 'ebl.col.job', 'ebl.col.costCenter',
  'ebl.modal.register.title', 'ebl.modal.edit.title', 'ebl.modal.register.date', 'ebl.modal.register.remark',
  'ebl.js.selectRegister', 'ebl.js.confirmExecute', 'ebl.js.confirmDelete', 'ebl.js.selectRow',
  'ebl.js.importSuccess', 'ebl.js.importFailed',
  'recruit.list.placeholder.selectDept',
  'common.add', 'common.delete', 'common.save', 'common.cancel', 'common.search', 'common.confirm',
  'common.success', 'common.error', 'common.noData', 'common.empId', 'common.empName', 'common.deptName',
  'common.action', 'common.totalRows', 'common.loadFail', 'common.exportExcel', 'common.downloadTemplate',
  'common.importExcel', 'common.remark', 'common.stt', 'mep.msg.loadDeptFailed',
];

const PAGE_SIZE = 50;

interface EditForm {
  seq: string;
  empId: string;
  localName: string;
  startDatePicker: Date | null;
  transCode: string | null;
  transReason: string | null;
  deptno: string | null;
  postFamily: string | null;
  newPostGradeNo: string | null;
  positionNo: string | null;
  empTypeCode: string | null;
  mainBusiness: string | null;
  costCenter: string;
  remarks: string;
}

function emptyEditForm(): EditForm {
  return {
    seq: '', empId: '', localName: '', startDatePicker: null,
    transCode: null, transReason: null, deptno: null, postFamily: null, newPostGradeNo: null,
    positionNo: null, empTypeCode: null, mainBusiness: null, costCenter: '', remarks: '',
  };
}

/**
 * Bản Angular của hrm/recruitManage/viewExperienceBatchList.html (Thymeleaf + DataTables server-side)
 * - Quyết định hàng loạt (chuyển đổi/thăng chức/điều chuyển... hàng loạt cho nhân viên nội bộ): chọn 1
 * "Ngày đăng ký", xem/sửa/xóa danh sách quyết định import từ Excel cho đợt đó, rồi Xác nhận thực hiện
 * hàng loạt. Gọi lại nguyên API JSON đã có sẵn ở HrRecruitManageController (xem
 * ViewExperienceBatchListService) - không đổi backend. Nút "Xuất Excel" ở bản gốc trỏ tới endpoint
 * /api/expBatch/export KHÔNG tồn tại ở backend (kiểm tra lại HrRecruitManageController - chỉ có
 * registerList/register/list/update/delete/import) nên đã hỏng sẵn từ trước; ở đây thay bằng xuất
 * client-side (SheetJS/xlsx) từ dữ liệu đang tải, giống pattern manage-emp-position-info và trang
 * view-recruit-batch-list (cùng lỗi này), để có bản xuất .xlsx thực sự hoạt động (xem CLAUDE.md -
 * export phải ra .xlsx). Trường startDate ở modal sửa dòng là dữ liệu thô từ Excel import (placeholder
 * gốc "YYYY/MM/DD"), giữ nguyên định dạng trao đổi với backend nhưng hiển thị dd/MM/yyyy qua
 * nz-date-picker theo CLAUDE.md.
 */
@Component({
  selector: 'app-view-experience-batch-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-experience-batch-list.component.html',
  styleUrl: './view-experience-batch-list.component.css',
})
export class ViewExperienceBatchListComponent implements OnInit {
  @ViewChild('excelFileInput') excelFileInputRef?: ElementRef<HTMLInputElement>;

  readonly pageSize = PAGE_SIZE;

  readonly registers = signal<ExpBatchRegister[]>([]);
  selectedRegisterSeq: string | null = null;

  readonly rows = signal<ExpBatchItem[]>([]);
  readonly totalRecords = signal(0);
  readonly allProcessed = signal(false);
  readonly loading = signal(false);
  pageIndex = 1;
  readonly checkedSeqs = signal<Set<string>>(new Set());

  readonly importing = signal(false);

  // ==================== Modal Đăng ký ngày ====================
  readonly registerModalVisible = signal(false);
  readonly registerSaving = signal(false);
  regDatePicker: Date | null = null;
  regRemark = '';

  // ==================== Modal Chỉnh sửa dòng ====================
  readonly editModalVisible = signal(false);
  readonly editSaving = signal(false);
  editForm: EditForm = emptyEditForm();

  // ==================== Danh mục (code list) + cây phòng ban ====================
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly transCodeOptions = signal<CodeItem[]>([]);
  readonly transReasonOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly postGradeOptions = signal<CodeItem[]>([]);
  readonly positionOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly mainBusinessOptions = signal<CodeItem[]>([]);

  constructor(
    private readonly api: ViewExperienceBatchListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.loadRegisterList();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  // ==================== Đăng ký ngày (danh sách + chọn) ====================

  private loadRegisterList(selectSeq?: string): void {
    this.api.getRegisterList().subscribe({
      next: (list) => {
        this.registers.set(list ?? []);
        const seq = selectSeq || this.selectedRegisterSeq;
        this.selectedRegisterSeq = seq && list?.some((r) => r.registerSeq === seq) ? seq : null;
        if (this.selectedRegisterSeq) this.search();
      },
      error: () => this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  onRegisterChange(): void {
    this.pageIndex = 1;
    this.checkedSeqs.set(new Set());
    this.search();
  }

  search(): void {
    if (!this.selectedRegisterSeq) {
      this.rows.set([]);
      this.totalRecords.set(0);
      return;
    }
    this.loading.set(true);
    const params: ExpBatchListParams = {
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      registerSeq: this.selectedRegisterSeq,
    };
    this.api.getBatchList(params).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.allProcessed.set(!!res.allProcessed);
        this.checkedSeqs.set(new Set());
        this.loading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.loading.set(false);
      },
    });
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.search();
  }

  openRegisterModal(): void {
    this.regDatePicker = null;
    this.regRemark = '';
    this.registerModalVisible.set(true);
  }

  closeRegisterModal(): void {
    this.registerModalVisible.set(false);
  }

  saveRegister(): void {
    if (!this.regDatePicker) {
      this.message.warning(this.t('ebl.modal.register.date', 'Ngày đăng ký *'));
      return;
    }
    this.registerSaving.set(true);
    this.api
      .register({ registerDate: formatDate(this.regDatePicker, 'dd/MM/yyyy', 'vi'), registerRemark: this.regRemark })
      .subscribe({
        next: (res) => {
          this.registerSaving.set(false);
          if (res.success) {
            this.registerModalVisible.set(false);
            this.loadRegisterList(res.registerSeq);
          } else {
            this.message.error(res.message || this.t('common.error', 'Lỗi'));
          }
        },
        error: () => {
          this.registerSaving.set(false);
          this.message.error(this.t('common.error', 'Lỗi'));
        },
      });
  }

  // ==================== Chọn dòng (checkbox) ====================

  isRowSelectable(row: ExpBatchItem): boolean {
    return String(row.activity) !== '1';
  }

  isChecked(seq: string): boolean {
    return this.checkedSeqs().has(seq);
  }

  toggleChecked(seq: string, checked: boolean): void {
    const next = new Set(this.checkedSeqs());
    if (checked) next.add(seq);
    else next.delete(seq);
    this.checkedSeqs.set(next);
  }

  get allChecked(): boolean {
    const selectable = this.rows().filter((r) => this.isRowSelectable(r));
    return selectable.length > 0 && selectable.every((r) => this.isChecked(r.seq));
  }

  toggleAllChecked(checked: boolean): void {
    const next = new Set(this.checkedSeqs());
    this.rows()
      .filter((r) => this.isRowSelectable(r))
      .forEach((r) => (checked ? next.add(r.seq) : next.delete(r.seq)));
    this.checkedSeqs.set(next);
  }

  deleteSelected(): void {
    const seqs = Array.from(this.checkedSeqs());
    if (!seqs.length) {
      this.message.warning(this.t('ebl.js.selectRow', 'Vui lòng chọn ít nhất một dòng'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('common.delete', 'Xóa'),
      nzContent: this.t('ebl.js.confirmDelete', 'Bạn có chắc muốn xóa không?'),
      nzOnOk: () => {
        let remaining = seqs.length;
        let hasError = false;
        seqs.forEach((seq) => {
          this.api.deleteBatchItem(seq).subscribe({
            next: () => {
              remaining -= 1;
              if (remaining === 0) {
                if (hasError) this.message.error(this.t('common.error', 'Lỗi'));
                else this.message.success(this.t('common.success', 'Thành công'));
                this.search();
              }
            },
            error: () => {
              hasError = true;
              remaining -= 1;
              if (remaining === 0) {
                this.message.error(this.t('common.error', 'Lỗi'));
                this.search();
              }
            },
          });
        });
      },
    });
  }

  // ==================== Xác nhận thực hiện hàng loạt ====================

  confirmExecute(): void {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t('ebl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('common.confirm', 'Xác nhận'),
      nzContent: this.t('ebl.js.confirmExecute', 'Xác nhận thực hiện quyết định hàng loạt?'),
      nzOnOk: () => {
        this.api.executeExpBatch(this.selectedRegisterSeq!).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t('common.success', 'Thành công'));
              this.search();
            } else {
              this.message.error(res.message || this.t('common.error', 'Lỗi'));
            }
          },
          error: () => this.message.error(this.t('common.error', 'Lỗi')),
        });
      },
    });
  }

  // ==================== Import / Template / Export ====================

  downloadTemplate(): void {
    window.location.href = this.api.downloadTemplateUrl();
  }

  openImportPicker(): void {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t('ebl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    this.excelFileInputRef?.nativeElement.click();
  }

  onExcelFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file || !this.selectedRegisterSeq) return;
    this.importing.set(true);
    this.api.importExcel(file, this.selectedRegisterSeq).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res.success) {
          this.message.success(
            `${this.t('ebl.js.importSuccess', 'Nhập file thành công')} (${res.successCount ?? 0} dòng)`,
          );
        } else {
          this.message.warning(res.message || this.t('ebl.js.importFailed', 'Nhập file thất bại'));
        }
        this.search();
      },
      error: () => {
        this.importing.set(false);
        this.message.error(this.t('ebl.js.importFailed', 'Nhập file thất bại'));
      },
    });
  }

  /** Xuất excel client-side (xem docblock class - endpoint export ở backend không tồn tại). */
  exportExcel(): void {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t('ebl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('common.stt', 'STT'), t('ebl.col.processed', 'Đã xử lý'), t('common.empName', 'Họ tên'),
      t('common.empId', 'Mã nhân viên'), t('ebl.col.startDate', 'Thời gian'), t('ebl.col.decision', 'Quyết định'),
      t('ebl.col.reason', 'Lý do'), t('common.deptName', 'Phòng ban'), t('ebl.col.group', 'Nhóm nhân viên'),
      t('ebl.col.level', 'Chức vụ'), t('ebl.col.jobTitle', 'Chức danh'), t('ebl.col.empType', 'Loại nhân viên'),
      t('ebl.col.job', 'Công việc'), t('ebl.col.costCenter', 'Mã chi phí'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.activity === '1' ? 'X' : '', r.localName, r.empId, r.startDate, r.transCodeName,
      r.transReasonName, r.deptName, r.postFamilyName, r.postGradeName, r.positionNoName, r.empTypeName,
      r.mainBusinessName, r.costCenter,
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'QuyetDinhHangLoat');
    XLSX.writeFile(workbook, 'quyet_dinh_hang_loat.xlsx');
  }

  // ==================== Modal chỉnh sửa dòng ====================

  openEditModal(row: ExpBatchItem): void {
    this.editForm = {
      seq: row.seq,
      empId: row.empId ?? '',
      localName: row.localName ?? '',
      startDatePicker: this.toDate(row.startDate),
      transCode: row.transCode ?? null,
      transReason: row.transReason ?? null,
      deptno: row.deptno ?? null,
      postFamily: row.postFamily ?? null,
      newPostGradeNo: row.newPostGradeNo ?? null,
      positionNo: row.positionNo ?? null,
      empTypeCode: row.empTypeCode ?? null,
      mainBusiness: row.mainBusiness ?? null,
      costCenter: row.costCenter ?? '',
      remarks: row.remarks ?? '',
    };
    this.loadTransReasonOptions(row.transCode);
    this.loadPostGradeOptions(row.postFamily);
    this.editModalVisible.set(true);
  }

  closeEditModal(): void {
    this.editModalVisible.set(false);
  }

  onEditTransCodeChange(value: string | null): void {
    this.editForm.transCode = value ?? '';
    this.editForm.transReason = '';
    this.loadTransReasonOptions(value);
  }

  onEditPostFamilyChange(value: string | null): void {
    this.editForm.postFamily = value ?? '';
    this.editForm.newPostGradeNo = '';
    this.loadPostGradeOptions(value);
  }

  private loadTransReasonOptions(transCode: string | null | undefined): void {
    if (!transCode) {
      this.transReasonOptions.set([]);
      return;
    }
    this.api.getCodeList(transCode).subscribe((list) => this.transReasonOptions.set(list ?? []));
  }

  private loadPostGradeOptions(postFamily: string | null | undefined): void {
    this.api.getCodeList(postFamily || '400001').subscribe((list) => this.postGradeOptions.set(list ?? []));
  }

  saveEdit(): void {
    if (!this.editForm.seq) return;
    const f = this.editForm;
    const dto: ExpBatchItem = {
      seq: f.seq,
      startDate: this.toDateStr(f.startDatePicker),
      transCode: f.transCode,
      transReason: f.transReason,
      deptno: f.deptno,
      postFamily: f.postFamily,
      newPostGradeNo: f.newPostGradeNo,
      positionNo: f.positionNo,
      empTypeCode: f.empTypeCode,
      mainBusiness: f.mainBusiness,
      costCenter: f.costCenter,
      remarks: f.remarks,
    };
    this.editSaving.set(true);
    this.api.updateBatchItem(dto).subscribe({
      next: (res) => {
        this.editSaving.set(false);
        if (res.success) {
          this.editModalVisible.set(false);
          this.search();
        } else {
          this.message.error(res.message || this.t('common.error', 'Lỗi'));
        }
      },
      error: () => {
        this.editSaving.set(false);
        this.message.error(this.t('common.error', 'Lỗi'));
      },
    });
  }

  // ==================== Cây phòng ban + danh mục dùng chung ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
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

  private loadCodeOptions(): void {
    this.api.getCodeList('14013956').subscribe((list) => this.transCodeOptions.set(list ?? []));
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('14014036').subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('400098').subscribe((list) => this.mainBusinessOptions.set(list ?? []));
  }

  // ==================== Helpers ngày tháng ====================

  private toDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  private toDateStr(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : '';
  }
}
