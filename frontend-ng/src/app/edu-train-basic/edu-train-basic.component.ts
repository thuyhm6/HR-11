import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { EduBasicHeaderComponent } from '../edu-common/edu-basic-header.component';
import { EduEmployee, EduPerson } from '../edu-common/edu-common.model';
import { EduCommonService } from '../edu-common/edu-common.service';
import { EduCourseListComponent } from '../edu-common/edu-course-list.component';
import { formatDmy, parseDmy } from '../edu-common/edu-date.util';
import { EduEmployeePickerComponent } from '../edu-common/edu-employee-picker.component';
import { EduPersonPickerComponent } from '../edu-common/edu-person-picker.component';
import { EduTrainBasic, EduTrainBasicSearch, courseWithPeriod } from '../edu-common/edu-train.model';
import { EduTrainService } from '../edu-common/edu-train.service';
import { CLASS_UNITS, EduPlan } from '../edu-plan-manager/edu-plan-manager.model';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.trainBasicInformation.*). */
const I18N_KEYS = [
  'edu.trainBasicInformation.SHANCHUJIBENXINXI.a', 'edu.trainBasicInformation.PEIXUNFANGSHI.a',
  'edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a', 'edu.trainBasicInformation.XINGWEIBUTIANXIANG.a',
  'edu.trainBasicInformation.MEIYOUYIBANJIANGSHI.a', 'edu.trainBasicInformation.MEIYOUJIHUAZHIDINGRENYUAN.a',
  'edu.trainBasicInformation.SUOYOUKECHENG.a', 'edu.trainBasicInformation.SHISHIKESHI.a',
  'edu.trainBasicInformation.BAOMINGJIEZHIRIQII.a', 'edu.trainBasicInformation.YIBANJIANGSHI.a',
  'edu.trainBasicInformation.PINGJIAJIANGSHI.a', 'edu.trainBasicInformation.JIHUAPEIXUNDUIXIANG.a',
  'edu.trainBasicInformation.SHIJIPEIXUNDUIXIANG.a', 'edu.trainBasicInformation.ZIXUANRENYUANBUMENZHIDING.a',
  'edu.trainBasicInformation.ZIXUANRENYUAN.a', 'edu.trainBasicInformation.SHIJIRENYUAN.a',
  'edu.trainBasicInformation.CAIJUETONGGUORENYUAN.a', 'edu.trainArchives.SHISHIKAISHIRIQI.a',
  'edu.trainArchives.SHISHIJIESHURIQI.a', 'edu.trainArchives.KECHENGMINGCHENGQICI.a', 'edu.trainArchives.PEIXUNNEIRONG.a',
  'edu.planManager.PEIXUNNEIRONG.a', 'edu.planManager.ZHIDINGRENYUAN.a', 'edu.planManager.PEIXUNKESHI.a',
  'edu.planManager.QI.a', 'ar.alert.message.excelimport.title.di', 'edu.systemManager.PEIXUNLEIXING.a',
  'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'edu.trainBasic.addTitle', 'edu.trainBasic.editTitle',
  'edu.trainBasic.detailTitle', 'edu.common.searchEmployee', 'empsubject.subjectNm', 'empsubject.eduRm',
  'hrm.recruitManage.START_DATE1', 'hrm.recruitManage.END_DATE1', 'pa.salary.title.fullInfo',
  ...CLASS_UNITS.map((u) => u.key), 'edu.teacherManager.QINGXIANXUANZEYIGEREN.a', 'hrm.empinfo.nameAndEmpid',
  'common.search', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close', 'common.confirm',
  'common.cancel', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.quickFilter',
  'common.pleaseSelect', 'common.empId', 'common.empName', 'common.deptName', 'ess.trans.title.postGradeName',
  'alert.message.add_fail', 'alert.message.update_fail', 'alert.message.delete_fail', 'alert.message.delete_success',
];

type PickerKind = 'eva' | 'act' | 'final';

interface BasicForm {
  basicNo: string | null;
  planNo: string | null;
  info: EduTrainBasic | null;
  impleStartDate: Date | null;
  impleEndDate: Date | null;
  impleClassHour: string;
  impleClassUnit: string | null;
  applyEndDate: Date | null;
  trainContent: string;
  desDepartments: string[];
  evaTeachers: EduPerson[];
  actEmployees: EduPerson[];
  freeEmployees: EduPerson[];
  finalStudents: EduPerson[];
}

function emptyForm(): BasicForm {
  return {
    basicNo: null, planNo: null, info: null, impleStartDate: null, impleEndDate: null, impleClassHour: '',
    impleClassUnit: null, applyEndDate: null, trainContent: '', desDepartments: [], evaTeachers: [], actEmployees: [],
    freeEmployees: [], finalStudents: [],
  };
}

/**
 * Bản Angular của /edu/traineducation/trainBasicInformation (JSP + DWZ, dự án Hanwha_HTSV) - thông tin cơ bản đào tạo
 * (1 lần tổ chức thực tế của kế hoạch). Giữ hành vi gốc:
 * - Thêm mới: chọn kế hoạch chưa dùng -> tự điền khóa học, hình thức, địa điểm, thời gian, giảng viên, nhân viên theo
 *   kế hoạch; chọn giảng viên đánh giá (trong giảng viên của khóa), nhân viên chỉ định (trong nhân viên theo kế hoạch),
 *   nhân viên tự chọn (tìm theo phòng ban, ngoài kế hoạch), đối tượng thực tế (trong các học viên).
 * - Sửa: đổi thời gian, thời lượng, nội dung, hạn đăng ký, giảng viên đánh giá và các danh sách học viên.
 * - Xóa: xóa cả dữ liệu đánh giá / kết quả / chi phí của khóa (xử lý ở BE, có cảnh báo trước).
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-train-basic',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NzButtonModule, NzModalModule, NzInputModule, NzSelectModule, NzDatePickerModule,
    NzTreeSelectModule, NzTagModule, NzDescriptionsModule, TranslatePipe, EduCourseListComponent, EduBasicHeaderComponent,
    EduEmployeePickerComponent, EduPersonPickerComponent,
  ],
  templateUrl: './edu-train-basic.component.html',
  styleUrl: './edu-train-basic.component.css',
})
export class EduTrainBasicComponent implements OnInit {
  @ViewChild('etbEmpPicker') private empPicker?: EduEmployeePickerComponent;

  readonly classUnits = CLASS_UNITS;
  readonly rows = signal<EduTrainBasic[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly selected = signal<EduTrainBasic | null>(null);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly plans = signal<EduPlan[]>([]);
  private lastSearch: EduTrainBasicSearch = { courseName: '', startDate: '', endDate: '' };

  readonly modalVisible = signal(false);
  readonly isNew = signal(true);
  readonly saving = signal(false);
  readonly modalTitle = computed(() =>
    this.isNew() ? this.i18n.t('edu.trainBasic.addTitle', 'Thêm mới thông tin cơ bản đào tạo')
      : this.i18n.t('edu.trainBasic.editTitle', 'Sửa thông tin cơ bản đào tạo'));
  form: BasicForm = emptyForm();

  readonly viewVisible = signal(false);
  readonly viewBasic = signal<EduTrainBasic | null>(null);

  // ---------- Chọn người ----------
  empPickerVisible = false;
  personPickerVisible = false;
  personPickerKind: PickerKind = 'eva';
  personPickerTitle = '';
  personPickerOptions: EduPerson[] = [];
  personPickerSelected: EduPerson[] = [];

  constructor(
    private readonly api: EduTrainService,
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
    this.search(this.lastSearch);
  }

  search(criteria: EduTrainBasicSearch): void {
    this.lastSearch = criteria;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getBasicList(criteria).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  planLabel(p: EduPlan): string {
    return `${p.trainTypeCodeName ?? ''}  ${p.courseNumber ?? ''}  ${courseWithPeriod((k, f) => this.i18n.t(k, f), p.courseNameCode, p.periodTime)}`;
  }

  // ==================== Xem chi tiết (bản gốc queryBasicInformation) ====================

  openView(row: EduTrainBasic): void {
    if (!row.basicNo) return;
    this.api.getBasic(row.basicNo).subscribe({
      next: (dto) => {
        this.viewBasic.set(dto);
        this.viewVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  // ==================== Thêm / Sửa ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = emptyForm();
    this.modalVisible.set(true);
    this.api.getAvailablePlans().subscribe({
      next: (list) => this.plans.set(list ?? []),
      error: () => this.plans.set([]),
    });
  }

  /** Bản gốc queryAllPlan(): chọn kế hoạch -> điền sẵn thông tin + giảng viên + nhân viên theo kế hoạch. */
  onPlanChange(planNo: string | null): void {
    this.form.planNo = planNo;
    if (!planNo) {
      this.form = emptyForm();
      return;
    }
    this.api.getPlanDefaults(planNo).subscribe({
      next: (dto) => this.fillForm(dto, planNo),
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  openEditModal(row?: EduTrainBasic): void {
    const target = row ?? this.selected();
    if (!target?.basicNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(target);
    this.api.getBasic(target.basicNo).subscribe({
      next: (dto) => {
        this.isNew.set(false);
        this.fillForm(dto, dto.planNo);
        this.modalVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  private fillForm(dto: EduTrainBasic, planNo: string | null): void {
    this.form = {
      basicNo: dto.basicNo,
      planNo,
      info: dto,
      impleStartDate: parseDmy(dto.impleStartDate),
      impleEndDate: parseDmy(dto.impleEndDate),
      impleClassHour: dto.impleClassHour ?? '',
      impleClassUnit: dto.impleClassUnit,
      applyEndDate: parseDmy(dto.applyEndDate),
      trainContent: dto.trainContent ?? '',
      desDepartments: dto.desDepartments ?? [],
      evaTeachers: dto.evaTeachers ?? [],
      actEmployees: dto.actEmployees ?? [],
      freeEmployees: dto.freeEmployees ?? [],
      finalStudents: dto.finalStudents ?? [],
    };
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  /** Đối tượng đào tạo theo kế hoạch (bản gốc actcount = chỉ định + tự chọn). */
  get plannedCount(): number {
    return this.form.actEmployees.length + this.form.freeEmployees.length;
  }

  // ---------- Chọn người ----------

  openPersonPicker(kind: PickerKind): void {
    const info = this.form.info;
    if (!info) return;
    let options: EduPerson[];
    let selected: EduPerson[];
    let titleKey: string;
    let fallback: string;
    if (kind === 'eva') {
      options = info.comTeachers ?? [];
      selected = this.form.evaTeachers;
      titleKey = 'edu.trainBasicInformation.PINGJIAJIANGSHI.a';
      fallback = 'Giáo viên đánh giá';
      if (options.length === 0) {
        this.message.warning(this.i18n.t('edu.trainBasicInformation.MEIYOUYIBANJIANGSHI.a', 'Không có giảng viên!'));
        return;
      }
    } else if (kind === 'act') {
      options = info.planEmployees ?? [];
      selected = this.form.actEmployees;
      titleKey = 'edu.planManager.ZHIDINGRENYUAN.a';
      fallback = 'NV chỉ định';
      if (options.length === 0) {
        this.message.warning(this.i18n.t('edu.trainBasicInformation.MEIYOUJIHUAZHIDINGRENYUAN.a', 'Không có nhân viên chỉ định theo kế hoạch!'));
        return;
      }
    } else {
      // Bản gốc finalstudent: chọn trong nhân viên tự chọn + chỉ định (+ theo kế hoạch / đã duyệt khi sửa)
      options = unionPersons(this.form.freeEmployees, this.form.actEmployees,
        this.isNew() ? [] : info.planEmployees ?? [], info.applyEmployees ?? []);
      selected = this.form.finalStudents;
      titleKey = 'edu.trainBasicInformation.SHIJIRENYUAN.a';
      fallback = 'Nhân viên thực tế';
    }
    this.personPickerKind = kind;
    this.personPickerOptions = options;
    this.personPickerSelected = selected;
    this.personPickerTitle = this.i18n.t(titleKey, fallback);
    this.personPickerVisible = true;
  }

  onPersonsPicked(list: EduPerson[]): void {
    if (this.personPickerKind === 'eva') this.form.evaTeachers = list;
    else if (this.personPickerKind === 'act') this.form.actEmployees = list;
    else this.form.finalStudents = list;
  }

  /** Bản gốc otherPlanEmployee: tìm nhân viên ngoài kế hoạch theo phòng ban đã chọn. */
  openFreePicker(): void {
    this.empPicker?.open('');
  }

  onFreePicked(list: EduEmployee[]): void {
    const planIds = new Set((this.form.info?.planEmployees ?? []).map((p) => p.empId));
    const added = list.filter((e) => !planIds.has(e.empId)).map((e) => ({ empId: e.empId, name: e.localName }));
    this.form.freeEmployees = unionPersons(this.form.freeEmployees, added);
  }

  removePerson(kind: 'eva' | 'act' | 'free' | 'final', empId: string): void {
    const remove = (list: EduPerson[]) => list.filter((p) => p.empId !== empId);
    if (kind === 'eva') this.form.evaTeachers = remove(this.form.evaTeachers);
    else if (kind === 'act') this.form.actEmployees = remove(this.form.actEmployees);
    else if (kind === 'free') this.form.freeEmployees = remove(this.form.freeEmployees);
    else this.form.finalStudents = remove(this.form.finalStudents);
  }

  // ---------- Lưu ----------

  saveForm(): void {
    const isNew = this.isNew();
    if (isNew && !this.form.planNo) {
      this.message.warning(this.i18n.t('edu.trainBasicInformation.XINGWEIBUTIANXIANG.a', '* không được để trống!'));
      return;
    }
    const f = this.form;
    const payload: EduTrainBasic = {
      basicNo: f.basicNo,
      planNo: f.planNo,
      impleStartDate: formatDmy(f.impleStartDate),
      impleEndDate: formatDmy(f.impleEndDate),
      impleClassHour: String(f.impleClassHour ?? '').trim(),
      impleClassUnit: f.impleClassUnit,
      applyEndDate: formatDmy(f.applyEndDate),
      trainContent: f.trainContent.trim(),
      desDepartments: f.desDepartments,
      comTeachers: [],
      evaTeachers: f.evaTeachers,
      planEmployees: [],
      actEmployees: f.actEmployees,
      freeEmployees: f.freeEmployees,
      applyEmployees: [],
      finalStudents: f.finalStudents,
    };
    const failText = this.i18n.t(isNew ? 'alert.message.add_fail' : 'alert.message.update_fail', isNew ? 'Lưu thất bại!' : 'Sửa thất bại!');
    this.saving.set(true);
    this.api.saveBasic(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message);
          this.search(this.lastSearch);
        } else {
          this.message.error(res.message || failText);
        }
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || failText);
      },
    });
  }

  // ==================== Xóa ====================

  confirmDelete(): void {
    const row = this.selected();
    if (!row?.basicNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.trainBasicInformation.SHANCHUJIBENXINXI.a',
        'Nếu xóa chương trình đào tạo, đánh giá học viên, đánh giá giảng viên, kết quả đào tạo, chi phí đều bị xóa theo!')}
        ${courseWithPeriod((k, f) => this.i18n.t(k, f), row.courseNameCode, row.periodTime)}`,
      nzOkText: this.i18n.t('common.delete', 'Xóa'),
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row.basicNo!),
    });
  }

  private doDelete(basicNo: string): void {
    const failText = this.i18n.t('alert.message.delete_fail', 'Xóa thất bại!');
    this.api.deleteBasic(basicNo).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(res.message || this.i18n.t('alert.message.delete_success', 'Xóa thành công!'));
          this.search(this.lastSearch);
        } else {
          this.message.error(res.message || failText);
        }
      },
      error: (err) => this.message.error(err?.error?.message || failText),
    });
  }
}

function unionPersons(...lists: EduPerson[][]): EduPerson[] {
  const map = new Map<string, EduPerson>();
  lists.forEach((l) => l.forEach((p) => { if (!map.has(p.empId)) map.set(p.empId, p); }));
  return Array.from(map.values());
}
