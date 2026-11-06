import { CommonModule, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ExpBatchActionResult, ExpBatchItem, ExpBatchListParams, ExpBatchRegister } from './view-experience-batch-list.model';
import { ViewExperienceBatchListService } from './view-experience-batch-list.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Message key dùng lại nguyên key của viewExperienceBatchList.jsp / viewAddRegisterInfo.jsp bản gốc (dự án HTSV). */
const I18N_KEYS = [
  'hrm.empinfo.REGISTRATION_DATE', 'hrm.empinfo.REGISTRATION', 'ar.addempshift.title.downloadmodule',
  'hrm.recruitManage.Confirm', 'button.search', 'button.delete', 'hrm.empinfo.EXPORT', 'ar.addempshift.title.excelimport',
  'hrm.empinfo.Already_processed', 'hrm.empinfo.name', 'hrm.empinfo.empid', 'hrm.empinfo.starter_START_DATE',
  'org.title.EXPERIENCE_TYPE_NAME', 'org.title.TRANS_REASON_NAME', 'hrm.empinfo.ORG_NAME_LOCAL', 'hrm.empinfo.POST_FAMILY',
  'hrm.contract.Rank', 'hrm.contract.POSITION_NO', 'hrm.empinfo.EMP_TYPE_CODE_NAME', 'hrm.empinfo.MAIN_BUSINESS_NAME',
  'hrm.empinfo.COST_CENTER_NAME_LOCAL', 'ar.viewarcardrecord.title.beizhu', 'button.sys.affirm.save', 'hrm.empinfo.close',
  'hrm.alert.empinfo.Perform_operation', 'hrm.alert.empinfo.Sure.delete', 'hrm.empinfo.SAVE_CONFIRM',
  'hrm.alert.empinfo.Choice_Perform_operation', 'liang.alert.message.org.execute_success',
  'alert.message.add_success', 'alert.message.add_fail', 'alert.message.delete_success', 'alert.message.delete_fail',
  'ebl.js.selectRegister', 'ebl.js.importSuccess', 'ebl.js.importFailed',
  'common.total', 'common.noData', 'common.loadFail', 'common.error',
];

const PAGE_SIZE = 100;

/**
 * Quyết định hàng loạt - bản Angular của hrm/recruitManage/viewExperienceBatchList (dự án HTSV): chọn
 * "Ngày đăng ký" (đợt), import Excel danh sách quyết định cho đợt đó, xem/xóa/xuất Excel, rồi Xác nhận
 * (PR_RECRUIT_EXECUTE type=EXP_BATCH). Đợt đã xử lý (ACTIVITY=1) chỉ còn nút Tra cứu như bản gốc.
 */
@Component({
  selector: 'app-view-experience-batch-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-experience-batch-list.component.html',
  styleUrl: './view-experience-batch-list.component.css',
})
export class ViewExperienceBatchListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  @ViewChild('veblExcelFileInput') excelFileInputRef?: ElementRef<HTMLInputElement>;

  pageSize = PAGE_SIZE;

  readonly registers = signal<ExpBatchRegister[]>([]);
  readonly selectedRegisterSeq = signal<string | null>(null);

  readonly rows = signal<ExpBatchItem[]>([]);
  readonly totalRecords = signal(0);
  readonly allProcessed = signal(false);
  readonly loading = signal(false);
  pageIndex = 1;
  readonly checkedSeqs = signal<Set<string>>(new Set());
  readonly importing = signal(false);

  /** Đợt đã xác nhận (bản gốc ACTIVITY eq '1') -> chỉ xem. */
  readonly readOnly = computed(() => {
    const reg = this.registers().find((r) => r.registerSeq === this.selectedRegisterSeq());
    return reg?.registerActivity === '1' || this.allProcessed();
  });

  // ==================== Modal Đăng ký ====================
  readonly registerModalVisible = signal(false);
  readonly registerSaving = signal(false);
  regDatePicker: Date | null = null;

  constructor(
    private readonly api: ViewExperienceBatchListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadRegisterList();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  private resultMessage(res: ExpBatchActionResult, fallbackKey: string, fallbackText: string): string {
    if (res.messageKey) return this.t(res.messageKey, res.message || fallbackText);
    return res.message || this.t(fallbackKey, fallbackText);
  }

  // ==================== Ngày đăng ký ====================

  /** Bản gốc: mặc định chọn đợt mới nhất. */
  private loadRegisterList(selectSeq?: string): void {
    this.api.getRegisterList().subscribe({
      next: (list) => {
        const regs = list ?? [];
        this.registers.set(regs);
        const want = selectSeq ?? this.selectedRegisterSeq();
        const seq = regs.some((r) => r.registerSeq === want) ? want : (regs[0]?.registerSeq ?? null);
        this.selectedRegisterSeq.set(seq);
        this.pageIndex = 1;
        this.search();
      },
      error: () => this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  onRegisterChange(seq: string | null): void {
    this.selectedRegisterSeq.set(seq);
    this.pageIndex = 1;
    this.search();
  }

  search(): void {
    const registerSeq = this.selectedRegisterSeq();
    this.checkedSeqs.set(new Set());
    if (!registerSeq) {
      this.rows.set([]);
      this.totalRecords.set(0);
      this.allProcessed.set(false);
      return;
    }
    this.loading.set(true);
    const params: ExpBatchListParams = {
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      registerSeq,
    };
    this.api.getBatchList(params).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.allProcessed.set(!!res.allProcessed);
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

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.pageIndex = 1;
    this.search();
  }

  openRegisterModal(): void {
    this.regDatePicker = new Date();
    this.registerModalVisible.set(true);
  }

  closeRegisterModal(): void {
    this.registerModalVisible.set(false);
  }

  saveRegister(): void {
    if (!this.regDatePicker) {
      this.message.warning(this.t('hrm.empinfo.REGISTRATION_DATE', 'Ngày đăng ký'));
      return;
    }
    const registerDate = formatDate(this.regDatePicker, 'dd/MM/yyyy', 'en-US');
    this.modal.confirm({
      nzTitle: this.t('hrm.empinfo.SAVE_CONFIRM', 'Đồng ý lưu không?'),
      nzOnOk: () => {
        this.registerSaving.set(true);
        this.api.register(registerDate).subscribe({
          next: (res) => {
            this.registerSaving.set(false);
            if (res.success) {
              this.message.success(this.t('alert.message.add_success', 'Thêm thành công!'));
              this.registerModalVisible.set(false);
              this.loadRegisterList(res.registerSeq);
            } else {
              this.message.error(this.resultMessage(res, 'alert.message.add_fail', 'Lưu thất bại!'));
            }
          },
          error: () => {
            this.registerSaving.set(false);
            this.message.error(this.t('alert.message.add_fail', 'Lưu thất bại!'));
          },
        });
      },
    });
  }

  // ==================== Chọn dòng ====================

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
    const rows = this.rows();
    return rows.length > 0 && rows.every((r) => this.isChecked(r.seq));
  }

  toggleAllChecked(checked: boolean): void {
    this.checkedSeqs.set(checked ? new Set(this.rows().map((r) => r.seq)) : new Set());
  }

  // ==================== Xác nhận / Xóa ====================

  /** Bản gốc executeExperienceBatch('EXP_BATCH'): empIds = SEQ đợt đăng ký. */
  confirmExecute(): void {
    const registerSeq = this.selectedRegisterSeq();
    if (!registerSeq) {
      this.message.warning(this.t('ebl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.alert.empinfo.Perform_operation', 'Đồng ý thực hiện không?'),
      nzOnOk: () => {
        this.api.executeExpBatch(registerSeq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(this.t('liang.alert.message.org.execute_success', 'Thực hiện thành công'));
              this.loadRegisterList(registerSeq);
            } else {
              this.message.error(this.resultMessage(res, 'common.error', 'Lỗi'));
            }
          },
          error: () => this.message.error(this.t('common.error', 'Lỗi')),
        });
      },
    });
  }

  deleteSelected(): void {
    const seqs = Array.from(this.checkedSeqs());
    if (!seqs.length) {
      this.message.warning(this.t('hrm.alert.empinfo.Choice_Perform_operation', 'Xin chọn thao tác cần thực hiện'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.alert.empinfo.Sure.delete', 'Đồng ý Xóa không?'),
      nzOkDanger: true,
      nzOnOk: () => {
        let remaining = seqs.length;
        let failed = false;
        const done = () => {
          remaining -= 1;
          if (remaining > 0) return;
          if (failed) this.message.error(this.t('alert.message.delete_fail', 'Xóa thất bại!'));
          else this.message.success(this.t('alert.message.delete_success', 'Xóa thành công!'));
          this.search();
        };
        seqs.forEach((seq) =>
          this.api.deleteBatchItem(seq).subscribe({
            next: (res) => {
              if (!res.success) failed = true;
              done();
            },
            error: () => {
              failed = true;
              done();
            },
          }),
        );
      },
    });
  }

  // ==================== Mẫu / Import / Xuất Excel ====================

  downloadTemplate(): void {
    window.location.href = this.api.downloadTemplateUrl();
  }

  openImportPicker(): void {
    if (!this.selectedRegisterSeq()) {
      this.message.warning(this.t('ebl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    this.excelFileInputRef?.nativeElement.click();
  }

  onExcelFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    const registerSeq = this.selectedRegisterSeq();
    if (!file || !registerSeq) return;
    this.importing.set(true);
    this.api.importExcel(file, registerSeq).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res.success) {
          const msg = `${this.t('ebl.js.importSuccess', 'Nhập file thành công')} (${res.successCount ?? 0})`;
          if (res.errorCount) this.message.warning(`${msg} - ${res.errors ?? ''}`, { nzDuration: 8000 });
          else this.message.success(msg);
        } else {
          this.message.error(res.message || this.t('ebl.js.importFailed', 'Nhập file thất bại'));
        }
        this.search();
      },
      error: () => {
        this.importing.set(false);
        this.message.error(this.t('ebl.js.importFailed', 'Nhập file thất bại'));
      },
    });
  }

  exportExcel(): void {
    if (!this.selectedRegisterSeq()) {
      this.message.warning(this.t('ebl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    const headers = [
      'No.', this.t('hrm.empinfo.Already_processed', 'Đã xử lý'), this.t('hrm.empinfo.name', 'Họ tên'),
      this.t('hrm.empinfo.empid', 'Mã nhân viên'), this.t('hrm.empinfo.starter_START_DATE', 'Thời gian'),
      this.t('org.title.EXPERIENCE_TYPE_NAME', 'Quyết định'), this.t('org.title.TRANS_REASON_NAME', 'Lý do'),
      this.t('hrm.empinfo.ORG_NAME_LOCAL', 'Phòng ban'), this.t('hrm.empinfo.POST_FAMILY', 'Nhóm nhân viên'),
      this.t('hrm.contract.Rank', 'Chức vụ'), this.t('hrm.contract.POSITION_NO', 'Chức danh'),
      this.t('hrm.empinfo.EMP_TYPE_CODE_NAME', 'Loại nhân viên'), this.t('hrm.empinfo.MAIN_BUSINESS_NAME', 'Công việc'),
      this.t('hrm.empinfo.COST_CENTER_NAME_LOCAL', 'Mã chi phí'), this.t('ar.viewarcardrecord.title.beizhu', 'Ghi chú'),
    ];
    const offset = (this.pageIndex - 1) * this.pageSize;
    const data = this.rows().map((r, i) => [
      offset + i + 1, r.activity === '1' ? 'Y' : '', r.localName, r.empId, r.startDate, r.transCodeName,
      r.transReasonName, r.deptName, r.postFamilyName, r.postGradeName, r.positionNoName, r.empTypeName,
      r.mainBusinessName, r.costCenterName || r.costCenter, r.remarks,
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'ExperienceBatch');
    XLSX.writeFile(workbook, `ExperienceBatch_${this.selectedRegisterSeq()}.xlsx`);
  }
}
