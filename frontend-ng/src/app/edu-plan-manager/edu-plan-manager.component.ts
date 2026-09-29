import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EduActionResult, EduEmployee, EduFile } from '../edu-common/edu-common.model';
import { EduCommonService } from '../edu-common/edu-common.service';
import { formatDmy, normalizeExcelDate, parseDmy } from '../edu-common/edu-date.util';
import { EduEmployeePickerComponent } from '../edu-common/edu-employee-picker.component';
import { readExcelRows, takeFile, writeExcel } from '../edu-common/edu-excel.util';
import { EduFileAttachComponent } from '../edu-common/edu-file-attach.component';
import { EduImportErrorsComponent } from '../edu-common/edu-import-errors.component';
import { EduCourseManagerRow } from '../edu-course-manager/edu-course-manager.model';
import { EduCourseManagerService } from '../edu-course-manager/edu-course-manager.service';
import { EduCodeItem } from '../edu-system-manager/edu-system-manager.model';
import { EduSystemManagerService } from '../edu-system-manager/edu-system-manager.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import {
  CLASS_UNITS,
  EVALUATE_OPTIONS,
  EduPlan,
  EduPlanTeacher,
  EduSyllabus,
  SYLLABUS_EXCEL_HEADERS,
  SYLLABUS_EXCEL_SAMPLE,
} from './edu-plan-manager.model';
import { EduPlanManagerService } from './edu-plan-manager.service';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.planManager.*). */
const I18N_KEYS = [
  'hrm.empinfo.training_distinction', 'edu.systemManager.PEIXUNLEIXING.a', 'empsubject.subjectNm',
  'edu.courseManager.KECHENGBIANHAO.a', 'edu.planManager.ZHUGUANBUMEN.a', 'ess.trans.title.typeName',
  'edu.planManager.SHISHIRIQI.a', 'edu.planManager.PEIXUNKESHI.a', 'edu.planManager.KECHENGBIAO.a',
  'edu.planManager.PEIXUNNEIRONG.a', 'edu.planManager.QI.a', 'ar.alert.message.excelimport.title.di',
  'edu.planManager.CHAKANKECHENGBIAO.a', 'pa.ins.alert.message.title.clickForDetail',
  'edu.planManager.JIHUAKAISHISHIJIAN.a', 'edu.planManager.JIHUAJIESHUSHIJIAN.a', 'hrm.empinfo.Training_form',
  'edu.planManager.SHIFOUKESHENQING.a', 'ar.viewcycle.content.yes', 'ar.viewcycle.content.no',
  'edu.planManager.ZHIDINGBUMEN.a', 'edu.planManager.ZHIDINGRENYUAN.a', 'edu.planManager.TIANJIAZHIDINGRENYUAN.a',
  'edu.planManager.YUSUANFEIYONG.a', 'edu.planManager.SHIFOUKEJIAN.a', 'edu.planManager.JIANGSHI.a', 'empsubject.eduRm',
  'edu.planManager.PEIXUNRENSHU.a', 'ar.viewarcardrecord.title.beizhu', 'edu.planManager.SHIFOUXUYAOPINGJIA.a',
  'hrm.recruitManage.ATTACHED_FILE', 'edu.planManager.DAORUKECHENGBIAO.a', 'edu.planManager.KECHENGRIQI.a',
  'edu.planManager.JIESHUSHIJIAN.a', 'edu.planManager.XIANGXIDIDIAN.a', 'edu.planManager.GONGHAO.a',
  'edu.planManager.addTitle', 'edu.planManager.editTitle', 'edu.planManager.detailTitle', 'edu.planManager.msg.required',
  'edu.planManager.msg.syllabusPending', 'edu.planManager.startTime', 'edu.planManager.teacherSearchTitle',
  'edu.trainAgreement.importErrorTitle', 'edu.common.searchEmployee',
  ...CLASS_UNITS.map((u) => u.key), ...EVALUATE_OPTIONS.map((e) => e.key),
  'edu.teacherManager.QINGXIANXUANZEYIGEREN.a', 'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a',
  'edu.systemManager.QUEDINGSHIFOUSHANCHU.a', 'hrm.empinfo.upload', 'hrm.empinfo.nameAndEmpid',
  'common.search', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close', 'common.confirm',
  'common.cancel', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.quickFilter',
  'common.all', 'common.pleaseSelect', 'common.importExcel', 'common.downloadTemplate', 'common.empId',
  'common.empName', 'common.deptName', 'ess.trans.title.postGradeName',
  'alert.message.add_fail', 'alert.message.update_fail', 'alert.message.delete_fail', 'alert.message.delete_success',
];

/** Mã cha SY_CODE (bản gốc SelectSyCodeByCpnyID parentNo). */
const TRAIN_DIFF_PARENT_CODE = '14014478';
const TRAIN_FORM_PARENT_CODE = '14014493';

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];

type ModalMode = 'add' | 'edit' | 'view';

interface PlanForm {
  planNo: string | null;
  courseNo: string | null;
  courseLabel: string;
  planStartdate: Date | null;
  planEnddate: Date | null;
  classHour: string;
  classUnit: string;
  trainFormCode: string | null;
  isnotApply: string;
  desDepartments: string[];
  desEmployees: { empId: string; name: string }[];
  budget: string;
  budgetShow: boolean;
  departManaCode: string | null;
  teacherEmpId: string | null;
  teacherName: string;
  trainAddress: string;
  trainPersonCount: string;
  trainPersonRemark: string;
  evaluate: string[];
}

function emptyForm(): PlanForm {
  return {
    planNo: null, courseNo: null, courseLabel: '', planStartdate: null, planEnddate: null, classHour: '', classUnit: '2',
    trainFormCode: null, isnotApply: 'Y', desDepartments: [], desEmployees: [], budget: '', budgetShow: false,
    departManaCode: null, teacherEmpId: null, teacherName: '', trainAddress: '', trainPersonCount: '',
    trainPersonRemark: '', evaluate: [],
  };
}

/**
 * Bản Angular của /edu/traineducation/planManager (JSP + DWZ, dự án Hanwha_HTSV) - quản lý kế hoạch đào tạo
 * (EDU_PLAN_MANAGER) + lịch đào tạo (EDU_TRAIN_SYLLABUS) + file đính kèm (ESS_FILE, APPLY_TYPE = eduPlanManager).
 * Giữ hành vi gốc:
 * - Tìm theo chương trình -> loại hình (dropdown phụ thuộc) + tên khóa học; click chọn 1 dòng rồi Sửa/Xóa.
 * - Cột "Lịch đào tạo" / "Nội dung" mở modal xem lịch học / xem chi tiết (bản gốc queryCourseSyllabus2 / singlePlanManagerInfo).
 * - Thêm/Sửa: phòng ban chỉ định (cây, chọn nhiều), nhân viên chỉ định (tìm theo phòng ban chỉ định), giảng viên (chọn từ
 *   danh sách giảng viên hoặc nhập tên), đánh giá, file đính kèm, import lịch đào tạo từ Excel theo file mẫu cũ.
 * - Xóa: xóa cả lịch đào tạo và dữ liệu phát sinh từ kế hoạch (xử lý ở BE).
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-plan-manager',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NzTableModule, NzCardModule, NzInputModule, NzSelectModule, NzButtonModule, NzModalModule,
    NzAlertModule, NzDatePickerModule, NzTreeSelectModule, NzCheckboxModule, NzTagModule, TranslatePipe,
    EduEmployeePickerComponent, EduFileAttachComponent, EduImportErrorsComponent,
  ],
  templateUrl: './edu-plan-manager.component.html',
  styleUrl: './edu-plan-manager.component.css',
})
export class EduPlanManagerComponent implements OnInit {
  @ViewChild('epmPicker') private picker?: EduEmployeePickerComponent;
  @ViewChild('epmFiles') private fileAttach?: EduFileAttachComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly classUnits = CLASS_UNITS;
  readonly evaluateOptions = EVALUATE_OPTIONS;
  readonly rows = signal<EduPlan[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly selected = signal<EduPlan | null>(null);

  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) =>
      [r.trainDiffName, r.courseNumber, r.courseNameCode, r.trainTypeCodeName, r.departManaCodeName, r.trainFormCodeName]
        .some((v) => (v ?? '').toLowerCase().includes(kw)),
    );
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];

  readonly trainDiffOptions = signal<EduCodeItem[]>([]);
  readonly searchTypeOptions = signal<EduCodeItem[]>([]);
  readonly trainFormOptions = signal<EduCodeItem[]>([]);
  readonly courseOptions = signal<EduCourseManagerRow[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  searchTrainDiffCode: string | null = null;
  searchTrainTypeCode: string | null = null;
  searchCourseName = '';

  // ---------- Modal Thêm / Sửa / Xem ----------
  readonly modalVisible = signal(false);
  readonly modalMode = signal<ModalMode>('add');
  readonly saving = signal(false);
  readonly modalTitle = computed(() => {
    switch (this.modalMode()) {
      case 'add': return this.i18n.t('edu.planManager.addTitle', 'Thêm mới kế hoạch đào tạo');
      case 'edit': return this.i18n.t('edu.planManager.editTitle', 'Sửa kế hoạch đào tạo');
      default: return this.i18n.t('edu.planManager.detailTitle', 'Chi tiết kế hoạch đào tạo');
    }
  });
  form: PlanForm = emptyForm();
  formFiles: EduFile[] = [];
  pickerVisible = false;

  // ---------- Lịch đào tạo ----------
  readonly syllabus = signal<EduSyllabus[]>([]);
  /** Lịch đọc từ Excel khi thêm mới - import sau khi kế hoạch được lưu (có PLAN_NO). */
  readonly pendingSyllabus = signal<EduSyllabus[] | null>(null);
  readonly importErrors = signal<string[]>([]);
  readonly importErrorVisible = signal(false);
  readonly syllabusViewVisible = signal(false);
  readonly syllabusViewRows = signal<EduSyllabus[]>([]);

  // ---------- Chọn giảng viên (bản gốc teacherSearch) ----------
  readonly teacherPickerVisible = signal(false);
  readonly teacherRows = signal<EduPlanTeacher[]>([]);
  readonly teacherLoading = signal(false);
  teacherKeyword = '';
  teacherChecked: EduPlanTeacher | null = null;

  constructor(
    private readonly api: EduPlanManagerService,
    private readonly codeApi: EduSystemManagerService,
    private readonly courseApi: EduCourseManagerService,
    private readonly commonApi: EduCommonService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.codeApi.getCodeList(TRAIN_DIFF_PARENT_CODE).subscribe({
      next: (l) => this.trainDiffOptions.set(l ?? []),
      error: () => this.trainDiffOptions.set([]),
    });
    this.codeApi.getCodeList(TRAIN_FORM_PARENT_CODE).subscribe({
      next: (l) => this.trainFormOptions.set(l ?? []),
      error: () => this.trainFormOptions.set([]),
    });
    this.commonApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptNodes.set([]),
    });
    this.search();
  }

  // ==================== Tìm kiếm ====================

  onSearchDiffChange(code: string | null): void {
    this.searchTrainTypeCode = null;
    if (!code) {
      this.searchTypeOptions.set([]);
      return;
    }
    this.codeApi.getCodeList(code).subscribe({
      next: (l) => this.searchTypeOptions.set(l ?? []),
      error: () => this.searchTypeOptions.set([]),
    });
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getList(this.searchTrainDiffCode, this.searchTrainTypeCode, this.searchCourseName.trim()).subscribe({
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

  selectRow(row: EduPlan): void {
    this.selected.set(row);
  }

  isSelected(row: EduPlan): boolean {
    return this.selected()?.planNo === row.planNo;
  }

  /** Bản gốc: "Tên khóa học (Kỳ Thứ N)". */
  courseTitle(row: EduPlan): string {
    return `${row.courseNameCode ?? ''} (${this.i18n.t('edu.planManager.QI.a', 'Kỳ')} ${this.i18n.t('ar.alert.message.excelimport.title.di', 'Thứ')} ${row.periodTime ?? ''})`;
  }

  classHourText(row: { classHour?: string | null; classUnit?: string | null }): string {
    const unit = CLASS_UNITS.find((u) => u.value === row.classUnit);
    return row.classHour ? `${row.classHour} ${unit ? this.i18n.t(unit.key, unit.fallback) : ''}` : '';
  }

  courseLabel(c: EduCourseManagerRow): string {
    return `${c.trainTypeCodeName ?? ''}  ${c.courseNumber ?? ''}  ${c.courseNameCode ?? ''}`;
  }

  // ==================== Modal Thêm / Sửa / Xem ====================

  get readonly(): boolean {
    return this.modalMode() === 'view';
  }

  openAddModal(): void {
    this.modalMode.set('add');
    this.form = emptyForm();
    this.formFiles = [];
    this.syllabus.set([]);
    this.pendingSyllabus.set(null);
    this.modalVisible.set(true);
    // Tải lại mỗi lần mở để thấy khóa học vừa thêm ở trang Quản lý khóa học (bản gốc addPlanManager: courseManagerList)
    this.courseApi.getList(null, null, '').subscribe({
      next: (list) => this.courseOptions.set(list ?? []),
      error: () => this.courseOptions.set([]),
    });
  }

  openEditModal(row?: EduPlan): void {
    this.openDetail(row ?? this.selected(), 'edit');
  }

  openViewModal(row: EduPlan): void {
    this.openDetail(row, 'view');
  }

  private openDetail(row: EduPlan | null, mode: ModalMode): void {
    if (!row?.planNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(row);
    const planNo = row.planNo;
    this.api.getOne(planNo).subscribe({
      next: (dto) => {
        this.modalMode.set(mode);
        this.form = {
          planNo: dto.planNo,
          courseNo: dto.courseNo,
          courseLabel: `${dto.trainTypeCodeName ?? ''}  ${dto.courseNumber ?? ''}  ${dto.courseNameCode ?? ''}`,
          planStartdate: parseDmy(dto.planStartdate),
          planEnddate: parseDmy(dto.planEnddate),
          classHour: dto.classHour ?? '',
          classUnit: dto.classUnit ?? '2',
          trainFormCode: dto.trainFormCode,
          isnotApply: dto.isnotApply ?? 'Y',
          desDepartments: dto.desDepartments ?? [],
          desEmployees: (dto.desEmployees ?? []).map((empId, i) => ({ empId, name: dto.desEmployeeNames?.[i] ?? '' })),
          budget: dto.budget ?? '',
          budgetShow: dto.budgetShow === 'Y',
          departManaCode: dto.departManaCode,
          teacherEmpId: dto.teacherEmpId,
          teacherName: dto.teacherName ?? '',
          trainAddress: dto.trainAddress ?? '',
          trainPersonCount: dto.trainPersonCount ?? '',
          trainPersonRemark: dto.trainPersonRemark ?? '',
          evaluate: (dto.isnotEvaluate ?? '').split(',').filter((v) => v && v !== '0'),
        };
        this.formFiles = dto.files ?? [];
        this.pendingSyllabus.set(null);
        this.loadSyllabus(planNo, (list) => this.syllabus.set(list));
        this.modalVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  isEvaluateChecked(value: string): boolean {
    return this.form.evaluate.includes(value);
  }

  toggleEvaluate(value: string, checked: boolean): void {
    this.form.evaluate = checked
      ? [...this.form.evaluate, value].sort()
      : this.form.evaluate.filter((v) => v !== value);
  }

  // ---------- Nhân viên chỉ định (bản gốc desEmployee) ----------

  openEmployeePicker(): void {
    this.picker?.open('');
  }

  onEmployeesPicked(list: EduEmployee[]): void {
    const existing = new Set(this.form.desEmployees.map((e) => e.empId));
    const added = list.filter((e) => !existing.has(e.empId)).map((e) => ({ empId: e.empId, name: e.localName }));
    this.form.desEmployees = [...this.form.desEmployees, ...added];
  }

  removeEmployee(empId: string): void {
    this.form.desEmployees = this.form.desEmployees.filter((e) => e.empId !== empId);
  }

  // ---------- Giảng viên ----------

  onTeacherNameChange(value: string): void {
    this.form.teacherName = value;
    // Sửa tay tên giảng viên -> bỏ liên kết mã nhân viên (lưu như tên nhập tự do, giống bản gốc)
    this.form.teacherEmpId = null;
  }

  openTeacherPicker(): void {
    this.teacherKeyword = this.form.teacherName.trim();
    this.teacherChecked = null;
    this.teacherPickerVisible.set(true);
    this.searchTeachers();
  }

  searchTeachers(): void {
    this.teacherLoading.set(true);
    this.api.getTeachers(this.teacherKeyword.trim()).subscribe({
      next: (list) => {
        this.teacherRows.set(list ?? []);
        this.teacherLoading.set(false);
      },
      error: () => {
        this.teacherRows.set([]);
        this.teacherLoading.set(false);
      },
    });
  }

  confirmTeacher(teacher?: EduPlanTeacher): void {
    const t = teacher ?? this.teacherChecked;
    if (!t) {
      this.message.warning(this.i18n.t('edu.teacherManager.QINGXIANXUANZEYIGEREN.a', 'Xin chọn 1 người!'));
      return;
    }
    this.form.teacherEmpId = t.empId;
    this.form.teacherName = t.teacherName;
    this.teacherPickerVisible.set(false);
  }

  // ---------- Lưu ----------

  saveForm(): void {
    if (this.readonly) {
      this.closeModal();
      return;
    }
    const isNew = this.modalMode() === 'add';
    const f = this.form;
    if ((isNew && !f.courseNo) || !f.planStartdate || !f.planEnddate || !String(f.classHour).trim() || !String(f.trainPersonCount).trim()) {
      this.message.warning(this.i18n.t('edu.planManager.msg.required', 'Vui lòng nhập đầy đủ các thông tin bắt buộc!'));
      return;
    }
    const payload: EduPlan = {
      planNo: f.planNo,
      courseNo: f.courseNo,
      planStartdate: formatDmy(f.planStartdate),
      planEnddate: formatDmy(f.planEnddate),
      classHour: String(f.classHour).trim(),
      classUnit: f.classUnit,
      trainFormCode: f.trainFormCode,
      isnotApply: f.isnotApply,
      desDepartments: f.desDepartments,
      desEmployees: f.desEmployees.map((e) => e.empId),
      desEmployeeNames: f.desEmployees.map((e) => e.name),
      budget: String(f.budget ?? '').trim(),
      budgetShow: f.budgetShow ? 'Y' : 'N',
      departManaCode: f.departManaCode,
      teacherEmpId: f.teacherEmpId,
      teacherName: f.teacherName.trim(),
      trainAddress: f.trainAddress.trim(),
      trainPersonCount: String(f.trainPersonCount).trim(),
      trainPersonRemark: f.trainPersonRemark.trim(),
      isnotEvaluate: f.evaluate.length ? f.evaluate.join(',') : '0',
    };
    const failText = this.i18n.t(isNew ? 'alert.message.add_fail' : 'alert.message.update_fail', isNew ? 'Lưu thất bại!' : 'Sửa thất bại!');
    this.saving.set(true);
    let okMessage = '';
    let planNo = '';
    this.api.save(payload).pipe(
      switchMap((res) => {
        if (!res.success || !res.id) return throwError(() => ({ error: res }));
        okMessage = res.message;
        planNo = res.id;
        return this.fileAttach ? this.fileAttach.commit(planNo) : of(res);
      }),
      switchMap(() => this.importPendingSyllabus(planNo)),
    ).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.errors?.length) {
          // Kế hoạch đã lưu, lịch đào tạo có lỗi -> hiển thị lỗi, mở lại ở chế độ sửa để import lại
          this.showImportErrors(res.errors);
        } else {
          this.modalVisible.set(false);
          this.message.success(okMessage);
        }
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || failText);
        if (okMessage) this.search();
      },
    });
  }

  private importPendingSyllabus(planNo: string): Observable<EduActionResult> {
    const pending = this.pendingSyllabus();
    if (!pending?.length) return of({ success: true, message: '' });
    return this.api.importSyllabus(planNo, pending);
  }

  // ==================== Xóa ====================

  confirmDelete(): void {
    const row = this.selected();
    if (!row?.planNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.systemManager.QUEDINGSHIFOUSHANCHU.a', 'Đồng ý xóa không?')} [${row.courseNumber ?? ''}] ${this.courseTitle(row)}`,
      nzOkText: this.i18n.t('common.delete', 'Xóa'),
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row.planNo!),
    });
  }

  private doDelete(planNo: string): void {
    const failText = this.i18n.t('alert.message.delete_fail', 'Xóa thất bại!');
    this.api.delete(planNo).subscribe({
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

  // ==================== Lịch đào tạo ====================

  private loadSyllabus(planNo: string, apply: (list: EduSyllabus[]) => void): void {
    this.api.getSyllabus(planNo).subscribe({ next: (l) => apply(l ?? []), error: () => apply([]) });
  }

  /** Cột "Lịch đào tạo" trên danh sách (bản gốc queryCourseSyllabus2). */
  openSyllabusView(row: EduPlan): void {
    if (!row.planNo) return;
    this.syllabusViewRows.set([]);
    this.syllabusViewVisible.set(true);
    this.loadSyllabus(row.planNo, (list) => this.syllabusViewRows.set(list));
  }

  /** Bản gốc planImportDemoLoad?flag=load. */
  downloadSyllabusTemplate(): void {
    writeExcel('planCourse_demo', SYLLABUS_EXCEL_HEADERS, [SYLLABUS_EXCEL_SAMPLE]);
  }

  async onSyllabusFile(event: Event): Promise<void> {
    const file = takeFile(event);
    if (!file) return;
    try {
      this.applySyllabusRows(this.toSyllabusRows(await readExcelRows(file)));
    } catch {
      this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
    }
  }

  private toSyllabusRows(aoa: unknown[][]): EduSyllabus[] {
    return aoa.map((c) => ({
      courseNameCode: String(c[0] ?? '').trim(),
      courseDate: normalizeExcelDate(c[1]),
      courseStartTime: normalizeExcelTime(c[2]),
      courseEndTime: normalizeExcelTime(c[3]),
      detailAddress: String(c[4] ?? '').trim(),
    }));
  }

  /** Thêm mới: giữ lại để import sau khi lưu. Sửa: import ngay (thay toàn bộ lịch cũ - giống bản gốc). */
  private applySyllabusRows(rows: EduSyllabus[]): void {
    if (rows.length === 0) {
      this.message.warning(this.i18n.t('common.noData', 'Không có dữ liệu'));
      return;
    }
    const planNo = this.form.planNo;
    if (!planNo) {
      this.pendingSyllabus.set(rows);
      this.syllabus.set(rows);
      return;
    }
    this.api.importSyllabus(planNo, rows).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(res.message);
          this.loadSyllabus(planNo, (list) => this.syllabus.set(list));
          this.search();
        } else if (res.errors?.length) {
          this.showImportErrors(res.errors);
        } else {
          this.message.error(res.message);
        }
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('alert.message.add_fail', 'Lưu thất bại!')),
    });
  }

  deleteSyllabusRow(row: EduSyllabus): void {
    const planNo = this.form.planNo;
    if (!planNo || !row.syllNo) {
      // Dòng chưa lưu (thêm mới) - chỉ bỏ khỏi danh sách chờ import
      const next = this.syllabus().filter((r) => r !== row);
      this.syllabus.set(next);
      this.pendingSyllabus.set(next.length ? next : null);
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.systemManager.QUEDINGSHIFOUSHANCHU.a', 'Đồng ý xóa không?')} ${row.courseDate} ${row.courseNameCode}`,
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () =>
        this.api.deleteSyllabus(planNo, row.syllNo!).subscribe({
          next: (res) => {
            if (res.success) {
              this.syllabus.set(this.syllabus().filter((r) => r.syllNo !== row.syllNo));
              this.search();
            } else {
              this.message.error(res.message);
            }
          },
          error: (err) => this.message.error(err?.error?.message || this.i18n.t('alert.message.delete_fail', 'Xóa thất bại!')),
        }),
    });
  }

  private showImportErrors(errors: string[]): void {
    this.importErrors.set(errors);
    this.importErrorVisible.set(true);
  }
}

/** Ô giờ đọc từ Excel: số thập phân (phần của ngày) -> HH:MM; chuỗi giữ nguyên để BE kiểm tra. */
function normalizeExcelTime(value: unknown): string {
  if (value === null || value === undefined || value === '') return '';
  if (typeof value === 'number') {
    const totalMinutes = Math.round((value % 1) * 24 * 60);
    const hh = String(Math.floor(totalMinutes / 60) % 24).padStart(2, '0');
    const mm = String(totalMinutes % 60).padStart(2, '0');
    return `${hh}:${mm}`;
  }
  return String(value).trim();
}
