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
  RecruitBatchItem,
  RecruitBatchListParams,
  RecruitBatchRegister,
} from './view-recruit-batch-list.model';
import { ViewRecruitBatchListService } from './view-recruit-batch-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'rbl.title', 'rbl.label.registerDate', 'rbl.btn.register', 'rbl.btn.insertFile',
  'rbl.col.processed', 'rbl.col.dateStarted', 'rbl.col.joinType', 'rbl.col.joinDetailType',
  'rbl.col.postFamily', 'rbl.col.postGrade', 'rbl.col.position', 'rbl.col.empType',
  'rbl.col.mainBusiness', 'rbl.col.costCenter', 'rbl.col.emailSecond', 'rbl.col.telephone', 'rbl.col.regPlace',
  'rbl.modal.register.title', 'rbl.modal.register.date', 'rbl.modal.register.remark',
  'rbl.modal.edit.title', 'rbl.modal.edit.dateStarted', 'rbl.modal.edit.endProbation',
  'rbl.modal.edit.joinType', 'rbl.modal.edit.joinDetailType', 'rbl.modal.edit.dept',
  'rbl.modal.edit.postFamily', 'rbl.modal.edit.postGrade', 'rbl.modal.edit.position',
  'rbl.modal.edit.empType', 'rbl.modal.edit.mainBusiness', 'rbl.modal.edit.costCenter',
  'rbl.modal.edit.englishName', 'rbl.modal.edit.dob', 'rbl.modal.edit.sexcode',
  'rbl.modal.edit.nationalityCode', 'rbl.modal.edit.nationCode', 'rbl.modal.edit.maritalStatusCode',
  'rbl.modal.edit.finalDegreeCode', 'rbl.modal.edit.endDate', 'rbl.modal.edit.institutionName',
  'rbl.modal.edit.subjectName', 'rbl.modal.edit.idcardNo', 'rbl.modal.edit.idcardSDate',
  'rbl.modal.edit.issuingAuthority', 'rbl.modal.edit.emailSecond', 'rbl.modal.edit.homePhone',
  'rbl.modal.edit.telephone', 'rbl.modal.edit.addressContent', 'rbl.modal.edit.regPlace',
  'rbl.modal.edit.section.personal', 'rbl.modal.edit.section.work', 'rbl.modal.edit.section.education',
  'rbl.modal.edit.section.contact', 'rbl.modal.edit.section.id',
  'rbl.js.selectRegister', 'rbl.js.confirmExecute', 'rbl.js.confirmDelete', 'rbl.js.selectRow',
  'rbl.js.importSuccess', 'rbl.js.importFailed',
  'recruit.list.placeholder.selectDept',
  'common.add', 'common.delete', 'common.save', 'common.cancel', 'common.search', 'common.confirm',
  'common.success', 'common.error', 'common.noData', 'common.empId', 'common.empName', 'common.deptName',
  'common.action', 'common.totalRows', 'common.loadFail', 'common.exportExcel', 'common.downloadTemplate',
  'common.importExcel', 'common.stt', 'mep.msg.loadDeptFailed',
  'recruit.list.field.englishName', 'recruit.list.field.dob', 'recruit.list.field.endProbationDate',
  'recruit.list.field.sexcode', 'recruit.list.field.nationalityCode', 'recruit.list.field.nationCode',
  'recruit.list.field.maritalStatusCode', 'recruit.list.edu.finalDegree', 'recruit.list.edu.endDate',
  'recruit.list.edu.institutionName', 'recruit.list.edu.subject', 'recruit.list.field.idcardNo',
  'recruit.list.field.idcardStartDate', 'recruit.list.field.issuingAuthority', 'recruit.list.field.homePhone',
  'recruit.list.field.addressContent',
];

const PAGE_SIZE = 50;

interface EditForm {
  seq: string;
  empId: string;
  vietnamName: string;
  englishName: string;
  dobPicker: Date | null;
  sexcode: string | null;
  nationalityCode: string | null;
  nationCode: string | null;
  maritalStatusCode: string | null;
  dateStartedPicker: Date | null;
  endProbationDatePicker: Date | null;
  joinType: string | null;
  joinDetailType: string | null;
  deptno: string | null;
  postFamily: string | null;
  postGradeNo: string | null;
  positionNo: string | null;
  empTypeCode: string | null;
  mainBusiness: string | null;
  costCenter: string;
  idcardNo: string;
  idcardSDatePicker: Date | null;
  issuingAuthority: string;
  finalDegreeCode: string | null;
  endDatePicker: Date | null;
  institutionName: string;
  subjectName: string;
  emailSecond: string;
  homePhone: string;
  telephone: string;
  addressContent: string;
  regPlace: string;
  activity: string;
}

function emptyEditForm(): EditForm {
  return {
    seq: '', empId: '', vietnamName: '', englishName: '', dobPicker: null,
    sexcode: null, nationalityCode: null, nationCode: null, maritalStatusCode: null,
    dateStartedPicker: null, endProbationDatePicker: null,
    joinType: null, joinDetailType: null, deptno: null, postFamily: null, postGradeNo: null,
    positionNo: null, empTypeCode: null, mainBusiness: null, costCenter: '',
    idcardNo: '', idcardSDatePicker: null, issuingAuthority: '',
    finalDegreeCode: null, endDatePicker: null, institutionName: '', subjectName: '',
    emailSecond: '', homePhone: '', telephone: '', addressContent: '', regPlace: '', activity: '0',
  };
}

/**
 * Bản Angular của hrm/recruitManage/viewRecruitBatchList.html (Thymeleaf + DataTables server-side) -
 * Nhận việc hàng loạt: chọn 1 "Ngày đăng ký", xem/sửa/xóa danh sách nhân viên import từ Excel cho đợt
 * đó, rồi Xác nhận nhận việc hàng loạt. Gọi lại nguyên API JSON đã có sẵn ở HrRecruitManageController
 * (xem ViewRecruitBatchListService) - không đổi backend. Nút "Xuất Excel" ở bản gốc trỏ tới endpoint
 * /api/rblBatch/export KHÔNG tồn tại ở backend (kiểm tra lại HrRecruitManageController - chỉ có
 * registerList/register/list/update/delete/import) nên đã hỏng sẵn từ trước; ở đây thay bằng xuất
 * client-side (SheetJS/xlsx) từ dữ liệu đang tải, giống pattern manage-emp-position-info, để có bản
 * xuất .xlsx thực sự hoạt động (xem CLAUDE.md - export phải ra .xlsx). Các trường ngày YYYY/MM/DD ở
 * modal sửa dòng (dob/dateStarted/...) là dữ liệu thô từ Excel import, giữ nguyên định dạng trao đổi
 * với backend nhưng hiển thị dd/MM/yyyy qua nz-date-picker theo CLAUDE.md; riêng registerDate ở modal
 * đăng ký vốn đã lưu dạng DD/MM/YYYY (data-drp-format của bản gốc) nên không cần quy đổi thêm.
 */
@Component({
  selector: 'app-view-recruit-batch-list',
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
  templateUrl: './view-recruit-batch-list.component.html',
  styleUrl: './view-recruit-batch-list.component.css',
})
export class ViewRecruitBatchListComponent implements OnInit {
  @ViewChild('excelFileInput') excelFileInputRef?: ElementRef<HTMLInputElement>;

  readonly pageSize = PAGE_SIZE;

  readonly registers = signal<RecruitBatchRegister[]>([]);
  selectedRegisterSeq: string | null = null;

  readonly rows = signal<RecruitBatchItem[]>([]);
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
  readonly sexOptions = signal<CodeItem[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);
  readonly nationOptions = signal<CodeItem[]>([]);
  readonly maritalStatusOptions = signal<CodeItem[]>([]);
  readonly joinTypeOptions = signal<CodeItem[]>([]);
  readonly joinDetailTypeOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly postGradeOptions = signal<CodeItem[]>([]);
  readonly positionOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly mainBusinessOptions = signal<CodeItem[]>([]);
  readonly degreeOptions = signal<CodeItem[]>([]);

  constructor(
    private readonly api: ViewRecruitBatchListService,
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
    const params: RecruitBatchListParams = {
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
      this.message.warning(this.t('rbl.modal.register.date', 'Ngày đăng ký *'));
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

  isRowSelectable(row: RecruitBatchItem): boolean {
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
      this.message.warning(this.t('rbl.js.selectRow', 'Vui lòng chọn ít nhất một dòng'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('common.delete', 'Xóa'),
      nzContent: this.t('rbl.js.confirmDelete', 'Bạn có chắc muốn xóa không?'),
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

  // ==================== Xác nhận nhận việc hàng loạt ====================

  confirmExecute(): void {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t('rbl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('common.confirm', 'Xác nhận'),
      nzContent: this.t('rbl.js.confirmExecute', 'Xác nhận nhận việc hàng loạt?'),
      nzOnOk: () => {
        this.api.executeConfirmBatch(this.selectedRegisterSeq!).subscribe({
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
      this.message.warning(this.t('rbl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
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
            `${this.t('rbl.js.importSuccess', 'Nhập file thành công')} (${res.successCount ?? 0} dòng)`,
          );
        } else {
          this.message.warning(res.message || this.t('rbl.js.importFailed', 'Nhập file thất bại'));
        }
        this.search();
      },
      error: () => {
        this.importing.set(false);
        this.message.error(this.t('rbl.js.importFailed', 'Nhập file thất bại'));
      },
    });
  }

  /** Xuất excel client-side (xem docblock class - endpoint export ở backend không tồn tại). */
  exportExcel(): void {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t('rbl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('common.stt', 'STT'), t('rbl.col.processed', 'Đã xử lý'), t('common.empName', 'Họ tên'),
      t('common.empId', 'Mã nhân viên'), t('recruit.list.field.englishName', 'Tên tiếng Anh'),
      t('recruit.list.field.dob', 'Ngày sinh'), t('rbl.col.dateStarted', 'Ngày vào làm'),
      t('recruit.list.field.endProbationDate', 'Ngày hết thử việc'), t('rbl.col.joinType', 'Loại nhập'),
      t('rbl.col.joinDetailType', 'Chi tiết'), t('common.deptName', 'Phòng ban'), t('rbl.col.postGrade', 'Chức vụ'),
      t('rbl.col.postFamily', 'Nhóm nhân viên'), t('rbl.col.mainBusiness', 'Công việc'),
      t('rbl.col.empType', 'Loại nhân viên'), t('rbl.col.position', 'Chức danh'), t('rbl.col.costCenter', 'Mã chi phí'),
      t('recruit.list.field.sexcode', 'Giới tính'), t('recruit.list.field.nationalityCode', 'Quốc tịch'),
      t('recruit.list.field.nationCode', 'Dân tộc'), t('recruit.list.field.maritalStatusCode', 'Tình trạng hôn nhân'),
      t('recruit.list.edu.finalDegree', 'Học vị cuối'), t('recruit.list.edu.endDate', 'Đến ngày TN'),
      t('recruit.list.edu.institutionName', 'Tên trường'), t('recruit.list.edu.subject', 'Chuyên ngành'),
      t('recruit.list.field.idcardNo', 'Số CMND/CCCD'), t('recruit.list.field.idcardStartDate', 'Ngày cấp'),
      t('recruit.list.field.issuingAuthority', 'Nơi cấp'), t('rbl.col.emailSecond', 'Email cá nhân'),
      t('recruit.list.field.homePhone', 'ĐT nhà'), t('rbl.col.telephone', 'Điện thoại'),
      t('recruit.list.field.addressContent', 'Địa chỉ'), t('rbl.col.regPlace', 'Hộ khẩu'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.activity === '1' ? 'X' : '', r.vietnamName, r.empId, r.englishName, r.dob, r.dateStarted,
      r.endProbationDate, r.joinTypeName, r.joinDetailTypeName, r.deptName, r.postGradeName, r.postFamilyName,
      r.mainBusinessName, r.empTypeName, r.positionNoName, r.costCenter, r.sexName, r.nationalityName, r.nationName,
      r.maritalStatusName, r.finalDegreeName, r.endDate, r.institutionName, r.subjectName, r.idcardNo, r.idcardSDate,
      r.issuingAuthority, r.emailSecond, r.homePhone, r.telephone, r.addressContent, r.regPlace,
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'NhanViecHangLoat');
    XLSX.writeFile(workbook, 'nhan_viec_hang_loat.xlsx');
  }

  // ==================== Modal chỉnh sửa dòng ====================

  openEditModal(row: RecruitBatchItem): void {
    this.editForm = {
      seq: row.seq,
      empId: row.empId ?? '',
      vietnamName: row.vietnamName ?? '',
      englishName: row.englishName ?? '',
      dobPicker: this.toDate(row.dob),
      sexcode: row.sexcode ?? null,
      nationalityCode: row.nationalityCode ?? null,
      nationCode: row.nationCode ?? null,
      maritalStatusCode: row.maritalStatusCode ?? null,
      dateStartedPicker: this.toDate(row.dateStarted),
      endProbationDatePicker: this.toDate(row.endProbationDate),
      joinType: row.joinType ?? null,
      joinDetailType: row.joinDetailType ?? null,
      deptno: row.deptno ?? null,
      postFamily: row.postFamily ?? null,
      postGradeNo: row.postGradeNo ?? null,
      positionNo: row.positionNo ?? null,
      empTypeCode: row.empTypeCode ?? null,
      mainBusiness: row.mainBusiness ?? null,
      costCenter: row.costCenter ?? '',
      idcardNo: row.idcardNo ?? '',
      idcardSDatePicker: this.toDate(row.idcardSDate),
      issuingAuthority: row.issuingAuthority ?? '',
      finalDegreeCode: row.finalDegreeCode ?? null,
      endDatePicker: this.toDate(row.endDate),
      institutionName: row.institutionName ?? '',
      subjectName: row.subjectName ?? '',
      emailSecond: row.emailSecond ?? '',
      homePhone: row.homePhone ?? '',
      telephone: row.telephone ?? '',
      addressContent: row.addressContent ?? '',
      regPlace: row.regPlace ?? '',
      activity: row.activity ?? '0',
    };
    this.loadJoinDetailOptions(row.joinType);
    this.loadPostGradeOptions(row.postFamily);
    this.editModalVisible.set(true);
  }

  closeEditModal(): void {
    this.editModalVisible.set(false);
  }

  get canEditRow(): boolean {
    return this.editForm.activity !== '1';
  }

  onEditDeptnoChange(value: string | null): void {
    this.editForm.deptno = value ?? '';
    this.editForm.costCenter = value ?? '';
  }

  onEditJoinTypeChange(value: string | null): void {
    this.editForm.joinType = value ?? '';
    this.editForm.joinDetailType = '';
    this.loadJoinDetailOptions(value);
  }

  onEditPostFamilyChange(value: string | null): void {
    this.editForm.postFamily = value ?? '';
    this.editForm.postGradeNo = '';
    this.loadPostGradeOptions(value);
  }

  private loadJoinDetailOptions(joinType: string | null | undefined): void {
    this.api.getCodeList(joinType || '14014036').subscribe((list) => this.joinDetailTypeOptions.set(list ?? []));
  }

  private loadPostGradeOptions(postFamily: string | null | undefined): void {
    this.api.getCodeList(postFamily || '400001').subscribe((list) => this.postGradeOptions.set(list ?? []));
  }

  saveEdit(): void {
    if (!this.editForm.seq || !this.canEditRow) return;
    const f = this.editForm;
    const dto: RecruitBatchItem = {
      seq: f.seq,
      vietnamName: f.vietnamName,
      englishName: f.englishName,
      dob: this.toYmd(f.dobPicker),
      dateStarted: this.toYmd(f.dateStartedPicker),
      endProbationDate: this.toYmd(f.endProbationDatePicker),
      joinType: f.joinType,
      joinDetailType: f.joinDetailType,
      deptno: f.deptno,
      postFamily: f.postFamily,
      postGradeNo: f.postGradeNo,
      positionNo: f.positionNo,
      empTypeCode: f.empTypeCode,
      mainBusiness: f.mainBusiness,
      costCenter: f.costCenter,
      sexcode: f.sexcode,
      nationalityCode: f.nationalityCode,
      nationCode: f.nationCode,
      maritalStatusCode: f.maritalStatusCode,
      finalDegreeCode: f.finalDegreeCode,
      endDate: this.toYmd(f.endDatePicker),
      institutionName: f.institutionName,
      subjectName: f.subjectName,
      idcardNo: f.idcardNo,
      idcardSDate: this.toYmd(f.idcardSDatePicker),
      issuingAuthority: f.issuingAuthority,
      emailSecond: f.emailSecond,
      homePhone: f.homePhone,
      telephone: f.telephone,
      addressContent: f.addressContent,
      regPlace: f.regPlace,
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
    this.api.getCodeList('1324').subscribe((list) => this.sexOptions.set(list ?? []));
    this.api.getCodeList('870').subscribe((list) => this.nationalityOptions.set(list ?? []));
    this.api.getCodeList('210942').subscribe((list) => this.nationOptions.set(list ?? []));
    this.api.getCodeList('1709').subscribe((list) => this.maritalStatusOptions.set(list ?? []));
    this.api.getCodeList('400001').subscribe((list) => this.joinTypeOptions.set(list ?? []));
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('14014036').subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('400098').subscribe((list) => this.mainBusinessOptions.set(list ?? []));
    this.api.getCodeList('13769').subscribe((list) => this.degreeOptions.set(list ?? []));
  }

  // ==================== Helpers ngày tháng + hiển thị ====================

  private toDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  private toYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : '';
  }

  formatDisplayDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, 'dd/MM/yyyy', 'vi');
  }
}
