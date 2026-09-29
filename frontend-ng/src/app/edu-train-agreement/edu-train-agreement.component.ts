import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EduEmployee, EduFile } from '../edu-common/edu-common.model';
import { EduCommonService } from '../edu-common/edu-common.service';
import { daysInclusive, formatDmy, normalizeExcelDate, parseDmy } from '../edu-common/edu-date.util';
import { EduEmployeePickerComponent } from '../edu-common/edu-employee-picker.component';
import { readExcelRows, takeFile, writeExcel } from '../edu-common/edu-excel.util';
import { EduFileAttachComponent } from '../edu-common/edu-file-attach.component';
import { EduImportErrorsComponent } from '../edu-common/edu-import-errors.component';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import {
  AGREEMENT_EXCEL_COLUMNS,
  AGREEMENT_FEE_FIELDS,
  AgreementFeeField,
  EduTrainAgreement,
} from './edu-train-agreement.model';
import { EduTrainAgreementService } from './edu-train-agreement.service';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.trainAgreement.*). */
const I18N_KEYS = [
  'edu.trainAgreement.XIEYIQIANDINGSHIJIANDUAN.a', 'edu.trainAgreement.XIEYIBIANHAO.a', 'edu.trainAgreement.XIEYIMINGCHENG.a',
  'edu.trainAgreement.XIEYIRENSHEHAO.a', 'edu.trainAgreement.XIEYIRENXINGMING.a', 'edu.trainAgreement.XIEYIRENBUMEN.a',
  'edu.trainAgreement.SHIJIZHIFU.a', 'edu.trainAgreement.XIEYIQIANDINGRIQI.a', 'edu.trainAgreement.XIEYIJIECHURIQI.a',
  'edu.trainAgreement.YANXIUJIESHUSHIJIANDAYUKAISHISHIJIAN.a', 'edu.trainAgreement.QINGSHURUXINGMINGGONGHAO.a',
  'edu.trainAgreement.YANXIUKAISHIRI.a', 'edu.trainAgreement.YANXIUJIESHURI.a', 'edu.trainAgreement.YANXIUTIANSHU.a',
  'edu.trainAgreement.YUAN.a', 'edu.trainAgreement.addTitle', 'edu.trainAgreement.editTitle',
  'edu.trainAgreement.msg.nameRequired', 'edu.trainAgreement.importErrorTitle',
  ...AGREEMENT_FEE_FIELDS.map((f) => f.key),
  'edu.teacherManager.CHAZHAO.a', 'edu.teacherManager.QINGXIANXUANZEYIGEREN.a', 'edu.common.searchEmployee',
  'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'edu.systemManager.QUEDINGSHIFOUSHANCHU.a',
  'ar.attendanceView.viewNoSwipingCard.deptName', 'hrm.empinfo.nameAndEmpid', 'hrm.empinfo.CONTRACT_START_STOP_DATE.Z',
  'liang.hr.viewTraining.title.TRAINING_TIME', 'org.title.enclosure', 'hr.viewPersonalInfo.title.TRADEUNION_ADDDATE',
  'zxc.hr.contract.CONTRACT_END_DATE', 'ar.viewitemparameter.title.dayofunit', 'ar.viewarcardrecord.title.beizhu',
  'hrm.empinfo.upload', 'common.search', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail',
  'common.quickFilter', 'common.all', 'common.exportExcel', 'common.importExcel', 'common.downloadTemplate',
  'common.empId', 'common.empName', 'common.deptName', 'ess.trans.title.postGradeName',
  'alert.message.add_fail', 'alert.message.update_fail', 'alert.message.delete_fail', 'alert.message.delete_success',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];

interface AgreementForm {
  agreeNo: string | null;
  agreeName: string;
  searchKeyword: string;
  empId: string | null;
  localName: string;
  conStartDate: Date | null;
  conEndDate: Date | null;
  studyStartDate: Date | null;
  studyEndDate: Date | null;
  studyDay: string;
  fees: Record<AgreementFeeField, string>;
  factPay: string;
  agreeStartDate: Date | null;
  agreeEndDate: Date | null;
  remark: string;
}

function emptyFees(): Record<AgreementFeeField, string> {
  return AGREEMENT_FEE_FIELDS.reduce((acc, f) => ({ ...acc, [f.field]: '' }), {} as Record<AgreementFeeField, string>);
}

function emptyForm(): AgreementForm {
  return {
    agreeNo: null, agreeName: '', searchKeyword: '', empId: null, localName: '', conStartDate: null, conEndDate: null,
    studyStartDate: null, studyEndDate: null, studyDay: '', fees: emptyFees(), factPay: '', agreeStartDate: null,
    agreeEndDate: null, remark: '',
  };
}

/**
 * Bản Angular của /edu/traineducation/trainAgreement (JSP + DWZ, dự án Hanwha_HTSV) - quản lý hợp đồng đào tạo
 * (EDU_TRAIN_AGREEMENT) + file đính kèm (ESS_FILE, APPLY_TYPE = eduTrainAgreement). Giữ hành vi gốc:
 * - Tìm theo phòng ban (kể cả phòng ban con), mã/tên nhân viên, khoảng thời gian hợp đồng.
 * - Thêm/Sửa: tự tính số ngày đào tạo (ngày kết thúc - ngày bắt đầu + 1) và tiền thanh toán = tổng 10 khoản phí (làm tròn).
 * - Import Excel theo file mẫu cũ (đọc bằng SheetJS ở trình duyệt, BE kiểm tra từng dòng), tải file mẫu, xuất Excel (.xlsx).
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-train-agreement',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NzTableModule, NzCardModule, NzInputModule, NzButtonModule, NzModalModule, NzAlertModule,
    NzDatePickerModule, NzTreeSelectModule, TranslatePipe, EduEmployeePickerComponent, EduFileAttachComponent, EduImportErrorsComponent,
  ],
  templateUrl: './edu-train-agreement.component.html',
  styleUrl: './edu-train-agreement.component.css',
})
export class EduTrainAgreementComponent implements OnInit {
  @ViewChild('etaPicker') private picker?: EduEmployeePickerComponent;
  @ViewChild('etaFiles') private fileAttach?: EduFileAttachComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly feeFields = AGREEMENT_FEE_FIELDS;
  readonly rows = signal<EduTrainAgreement[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly selected = signal<EduTrainAgreement | null>(null);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);

  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) =>
      [r.agreeId, r.agreeName, r.empId, r.localName, r.deptName, r.remark]
        .some((v) => (v ?? '').toLowerCase().includes(kw)),
    );
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  searchDeptNo: string | null = null;
  searchKeyword = '';
  searchConStart: Date | null = null;
  searchConEnd: Date | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('edu.trainAgreement.addTitle', 'Thêm mới hợp đồng đào tạo')
      : this.i18n.t('edu.trainAgreement.editTitle', 'Sửa hợp đồng đào tạo'),
  );
  form: AgreementForm = emptyForm();
  formFiles: EduFile[] = [];
  pickerVisible = false;

  readonly importing = signal(false);
  readonly importErrors = signal<string[]>([]);
  readonly importErrorVisible = signal(false);

  readonly sortId = (a: EduTrainAgreement, b: EduTrainAgreement) => compareText(a.agreeId, b.agreeId);
  readonly sortName = (a: EduTrainAgreement, b: EduTrainAgreement) => compareText(a.agreeName, b.agreeName);
  readonly sortEmpId = (a: EduTrainAgreement, b: EduTrainAgreement) => compareText(a.empId, b.empId);
  readonly sortEmpName = (a: EduTrainAgreement, b: EduTrainAgreement) => compareText(a.localName, b.localName);
  readonly sortDept = (a: EduTrainAgreement, b: EduTrainAgreement) => compareText(a.deptName, b.deptName);

  constructor(
    private readonly api: EduTrainAgreementService,
    private readonly commonApi: EduCommonService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.commonApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptNodes.set([]),
    });
    this.search();
  }

  // ==================== Tìm kiếm ====================

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getList({
      deptNo: this.searchDeptNo,
      keyword: this.searchKeyword.trim(),
      conStartDate: formatDmy(this.searchConStart),
      conEndDate: formatDmy(this.searchConEnd),
    }).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.pageIndex = 1;
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  onQuickFilterChange(value: string): void {
    this.quickFilter.set(value);
    this.pageIndex = 1;
  }

  selectRow(row: EduTrainAgreement): void {
    this.selected.set(row);
  }

  isSelected(row: EduTrainAgreement): boolean {
    return this.selected()?.agreeNo === row.agreeNo;
  }

  downloadUrl(f: EduFile): string {
    return this.commonApi.downloadUrl(f.fileNo);
  }

  period(start: string | null, end: string | null): string {
    return start || end ? `${start ?? ''} ~ ${end ?? ''}` : '';
  }

  // ==================== Modal Thêm / Sửa ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = emptyForm();
    this.formFiles = [];
    this.modalVisible.set(true);
  }

  openEditModal(row?: EduTrainAgreement): void {
    const target = row ?? this.selected();
    if (!target?.agreeNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(target);
    this.api.getOne(target.agreeNo).subscribe({
      next: (dto) => {
        this.isNew.set(false);
        const fees = emptyFees();
        AGREEMENT_FEE_FIELDS.forEach((f) => (fees[f.field] = dto[f.field] ?? ''));
        this.form = {
          agreeNo: dto.agreeNo,
          agreeName: dto.agreeName ?? '',
          searchKeyword: '',
          empId: dto.empId,
          localName: dto.localName ?? '',
          conStartDate: parseDmy(dto.conStartDate),
          conEndDate: parseDmy(dto.conEndDate),
          studyStartDate: parseDmy(dto.studyStartDate),
          studyEndDate: parseDmy(dto.studyEndDate),
          studyDay: dto.studyDay ?? '',
          fees,
          factPay: dto.factPay ?? '',
          agreeStartDate: parseDmy(dto.agreeStartDate),
          agreeEndDate: parseDmy(dto.agreeEndDate),
          remark: dto.remark ?? '',
        };
        this.formFiles = dto.files ?? [];
        this.modalVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  openPicker(): void {
    this.picker?.open(this.form.searchKeyword.trim());
  }

  onPicked(list: EduEmployee[]): void {
    const e = list[0];
    if (!e) return;
    this.form.empId = e.empId;
    this.form.localName = e.localName;
  }

  /** Bản gốc yanxiuTime(): số ngày đào tạo = ngày kết thúc - ngày bắt đầu + 1; kết thúc trước bắt đầu thì báo lỗi. */
  onStudyDateChange(): void {
    const { studyStartDate, studyEndDate } = this.form;
    if (!studyStartDate || !studyEndDate) return;
    const days = daysInclusive(studyStartDate, studyEndDate);
    if (days === null) {
      this.message.warning(this.i18n.t('edu.trainAgreement.YANXIUJIESHUSHIJIANDAYUKAISHISHIJIAN.a',
        'Ngày kết thúc đào tạo không được sớm hơn ngày băt đầu!'));
      this.form.studyEndDate = null;
      this.form.studyDay = '';
      return;
    }
    this.form.studyDay = String(days);
  }

  /** Bản gốc weiyuejinMethod(): tiền thanh toán = tổng 10 khoản phí, làm tròn. */
  onFeeChange(): void {
    const total = AGREEMENT_FEE_FIELDS.reduce((sum, f) => {
      const n = parseFloat(this.form.fees[f.field]);
      return sum + (isNaN(n) ? 0 : n);
    }, 0);
    this.form.factPay = String(Math.round(total));
  }

  saveForm(): void {
    const isNew = this.isNew();
    if (!this.form.agreeName.trim()) {
      this.message.warning(this.i18n.t('edu.trainAgreement.msg.nameRequired', 'Vui lòng nhập tên hợp đồng!'));
      return;
    }
    if (!this.form.empId) {
      this.message.warning(this.i18n.t('edu.teacherManager.QINGXIANXUANZEYIGEREN.a', 'Xin chọn 1 người!'));
      return;
    }
    const payload = {
      agreeNo: this.form.agreeNo,
      agreeName: this.form.agreeName.trim(),
      empId: this.form.empId,
      conStartDate: formatDmy(this.form.conStartDate),
      conEndDate: formatDmy(this.form.conEndDate),
      studyStartDate: formatDmy(this.form.studyStartDate),
      studyEndDate: formatDmy(this.form.studyEndDate),
      studyDay: String(this.form.studyDay ?? '').trim(),
      ...trimFees(this.form.fees),
      factPay: String(this.form.factPay ?? '').trim(),
      agreeStartDate: formatDmy(this.form.agreeStartDate),
      agreeEndDate: formatDmy(this.form.agreeEndDate),
      remark: this.form.remark.trim(),
    } as EduTrainAgreement;
    const failText = this.i18n.t(isNew ? 'alert.message.add_fail' : 'alert.message.update_fail', isNew ? 'Lưu thất bại!' : 'Sửa thất bại!');
    this.saving.set(true);
    let okMessage = '';
    this.api.save(payload).pipe(
      switchMap((res) => {
        if (!res.success || !res.id) return throwError(() => ({ error: res }));
        okMessage = res.message;
        return this.fileAttach ? this.fileAttach.commit(res.id) : of(res);
      }),
    ).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(okMessage);
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || failText);
        if (okMessage) this.search();
      },
    });
  }

  // ==================== Xóa ====================

  confirmDelete(): void {
    const row = this.selected();
    if (!row?.agreeNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.systemManager.QUEDINGSHIFOUSHANCHU.a', 'Đồng ý xóa không?')} [${row.agreeId ?? ''}] ${row.agreeName ?? ''}`,
      nzOkText: this.i18n.t('common.delete', 'Xóa'),
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row.agreeNo!),
    });
  }

  private doDelete(agreeNo: string): void {
    const failText = this.i18n.t('alert.message.delete_fail', 'Xóa thất bại!');
    this.api.delete(agreeNo).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(res.message || this.i18n.t('alert.message.delete_success', 'Xóa thành công!'));
          this.search();
        } else {
          this.message.error(res.message || failText);
        }
      },
      error: (err) => this.message.error(err?.error?.message || failText),
    });
  }

  // ==================== Excel ====================

  /** Bản gốc trainAgreeImportDemoLoad?flag=load: 1 dòng tiêu đề + 1 dòng mẫu. */
  downloadTemplate(): void {
    writeExcel('trainAgreement_demo', AGREEMENT_EXCEL_COLUMNS.map((c) => c.header), [AGREEMENT_EXCEL_COLUMNS.map((c) => c.sample)]);
  }

  /** Bản gốc trainAgreeImportDemoLoad?flag=export: xuất theo điều kiện đang lọc, cùng cột với file mẫu. */
  exportExcel(): void {
    const data = this.filteredRows().map((r) => AGREEMENT_EXCEL_COLUMNS.map((c) => (c.field ? (r[c.field] as string | null) ?? '' : '')));
    writeExcel('trainAgreement', AGREEMENT_EXCEL_COLUMNS.map((c) => c.header), data);
  }

  async onImportFile(event: Event): Promise<void> {
    const file = takeFile(event);
    if (!file) return;
    try {
      this.submitImport(this.toImportRows(await readExcelRows(file)));
    } catch {
      this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
    }
  }

  /** Chuyển các dòng Excel (đã bỏ dòng tiêu đề và dòng trống cuối file) thành payload. */
  private toImportRows(aoa: unknown[][]): Partial<EduTrainAgreement>[] {
    return aoa.map((cells) => {
      const row: Record<string, string> = {};
      AGREEMENT_EXCEL_COLUMNS.forEach((c, i) => {
        if (!c.field || c.field === 'deptName') return;
        const value = cells[i];
        row[c.field] = c.date ? normalizeExcelDate(value) : String(value ?? '').trim();
      });
      return row as Partial<EduTrainAgreement>;
    });
  }

  private submitImport(rows: Partial<EduTrainAgreement>[]): void {
    if (rows.length === 0) {
      this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
      return;
    }
    this.importing.set(true);
    this.api.importRows(rows).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res.success) {
          this.message.success(res.message);
          this.search();
        } else if (res.errors?.length) {
          this.importErrors.set(res.errors);
          this.importErrorVisible.set(true);
        } else {
          this.message.error(res.message);
        }
      },
      error: (err) => {
        this.importing.set(false);
        this.message.error(err?.error?.message || this.i18n.t('alert.message.add_fail', 'Lưu thất bại!'));
      },
    });
  }
}

function trimFees(fees: Record<AgreementFeeField, string>): Record<AgreementFeeField, string> {
  const result = { ...fees };
  (Object.keys(result) as AgreementFeeField[]).forEach((k) => (result[k] = String(result[k] ?? '').trim()));
  return result;
}

function compareText(a: string | null, b: string | null): number {
  return (a ?? '').localeCompare(b ?? '');
}
