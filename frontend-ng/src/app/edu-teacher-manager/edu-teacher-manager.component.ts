import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EduEmployee } from '../edu-common/edu-common.model';
import { formatDmy, parseDmy } from '../edu-common/edu-date.util';
import { EduEmployeePickerComponent } from '../edu-common/edu-employee-picker.component';
import { EduCodeItem } from '../edu-system-manager/edu-system-manager.model';
import { EduSystemManagerService } from '../edu-system-manager/edu-system-manager.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EduTeacher } from './edu-teacher-manager.model';
import { EduTeacherManagerService } from './edu-teacher-manager.service';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.teacherManager.*). */
const I18N_KEYS = [
  'edu.teacherManager.JIANGKELINGYU.a', 'edu.teacherManager.JIANGSHIJIBIE.a', 'edu.teacherManager.JIANGSHISHEHAO.a',
  'edu.teacherManager.PINYONGSHIJIAN.a', 'edu.teacherManager.JIEPINSHIJIAN.a', 'edu.teacherManager.QINGSHURUXINGMING.a',
  'edu.teacherManager.CHAZHAO.a', 'edu.teacherManager.SHENEIRENYUAN.a', 'edu.teacherManager.SHEWAIRENYUAN.a',
  'edu.teacherManager.YEWUDANDANGSHIJIAN.a', 'edu.teacherManager.QINGXIANXUANZEYIGEREN.a',
  'edu.teacherManager.addTitle', 'edu.teacherManager.editTitle',
  'empsubject.tcrNm', 'ess.infoApply.NAME_EMPID', 'hrm.empinfo.ORG_NAME_LOCAL', 'ar.attendanceView.viewNoSwipingCard.status',
  'alert.pa.pasalarycanshu.shehao', 'ess.trans.title.postGradeName', 'inct.salesman.position', 'inct.salesman.year',
  'hr.viewPersonalInfo.title.WORKINFO_MONTH', 'pa.salary.canShu.beiZhu', 'edu.common.searchEmployee',
  'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'edu.systemManager.QUEDINGSHIFOUSHANCHU.a',
  'common.search', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close', 'common.confirm',
  'common.cancel', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.quickFilter',
  'common.all', 'common.pleaseSelect', 'common.empId', 'common.empName', 'common.deptName', 'hrm.empinfo.nameAndEmpid',
  'alert.message.add_fail', 'alert.message.update_fail', 'alert.message.delete_fail', 'alert.message.delete_success',
];

/** Mã cha SY_CODE (bản gốc SelectSyCodeByCpnyID parentNo). */
const FIELD_PARENT_CODE = '14015148';
const LEVEL_PARENT_CODE = '14015140';
const STATUS_PARENT_CODE = '14015155';

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];

interface TeacherForm {
  teacherNo: string | null;
  external: boolean;
  searchKeyword: string;
  empId: string | null;
  teacherName: string;
  deptName: string;
  postGradeName: string;
  positionName: string;
  teachLevelCode: string | null;
  teachFieldCode: string | null;
  teachStatusCode: string | null;
  expYear: number | null;
  expMonth: number | null;
  allTime: number | null;
  hireTime: Date | null;
  firingTime: Date | null;
  remark: string;
}

const EMPTY_FORM: TeacherForm = {
  teacherNo: null, external: false, searchKeyword: '', empId: null, teacherName: '', deptName: '', postGradeName: '',
  positionName: '', teachLevelCode: null, teachFieldCode: null, teachStatusCode: null, expYear: null, expMonth: null,
  allTime: null, hireTime: null, firingTime: null, remark: '',
};

/**
 * Bản Angular của /edu/traineducation/teacherManager (JSP + DWZ, dự án Hanwha_HTSV) - quản lý giảng viên
 * (EDU_TEACHER_MANAGER). Giữ hành vi gốc:
 * - Tìm theo mã/tên, lĩnh vực, cấp độ, trạng thái; click chọn 1 dòng rồi Sửa/Xóa (double-click = Sửa).
 * - Thêm mới: giảng viên nội bộ (tìm nhân viên - bản gốc queryTeacher) hoặc bên ngoài (nhập tên, BE tự sinh mã);
 *   kinh nghiệm nhập năm + tháng. Sửa: hiển thị tổng kinh nghiệm "x năm y tháng", không sửa người/kinh nghiệm.
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-teacher-manager',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NzTableModule, NzCardModule, NzInputModule, NzInputNumberModule, NzSelectModule,
    NzButtonModule, NzModalModule, NzAlertModule, NzRadioModule, NzDatePickerModule, TranslatePipe, EduEmployeePickerComponent,
  ],
  templateUrl: './edu-teacher-manager.component.html',
  styleUrl: './edu-teacher-manager.component.css',
})
export class EduTeacherManagerComponent implements OnInit {
  @ViewChild('etmPicker') private picker?: EduEmployeePickerComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly rows = signal<EduTeacher[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly selected = signal<EduTeacher | null>(null);

  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) =>
      [r.empId, r.teacherName, r.deptName, r.teachFieldCodeName, r.teachLevelCodeName, r.teachStatusCodeName]
        .some((v) => (v ?? '').toLowerCase().includes(kw)),
    );
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];

  readonly fieldOptions = signal<EduCodeItem[]>([]);
  readonly levelOptions = signal<EduCodeItem[]>([]);
  readonly statusOptions = signal<EduCodeItem[]>([]);
  searchKeyword = '';
  searchField: string | null = null;
  searchLevel: string | null = null;
  searchStatus: string | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('edu.teacherManager.addTitle', 'Thêm mới giảng viên')
      : this.i18n.t('edu.teacherManager.editTitle', 'Sửa giảng viên'),
  );
  form: TeacherForm = { ...EMPTY_FORM };
  pickerVisible = false;

  readonly sortEmpId = (a: EduTeacher, b: EduTeacher) => compareText(a.empId, b.empId);
  readonly sortName = (a: EduTeacher, b: EduTeacher) => compareText(a.teacherName, b.teacherName);
  readonly sortDept = (a: EduTeacher, b: EduTeacher) => compareText(a.deptName, b.deptName);
  readonly sortField = (a: EduTeacher, b: EduTeacher) => compareText(a.teachFieldCodeName, b.teachFieldCodeName);
  readonly sortLevel = (a: EduTeacher, b: EduTeacher) => compareText(a.teachLevelCodeName, b.teachLevelCodeName);
  readonly sortStatus = (a: EduTeacher, b: EduTeacher) => compareText(a.teachStatusCodeName, b.teachStatusCodeName);

  constructor(
    private readonly api: EduTeacherManagerService,
    private readonly codeApi: EduSystemManagerService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadCodes(FIELD_PARENT_CODE, (l) => this.fieldOptions.set(l));
    this.loadCodes(LEVEL_PARENT_CODE, (l) => this.levelOptions.set(l));
    this.loadCodes(STATUS_PARENT_CODE, (l) => this.statusOptions.set(l));
    this.search();
  }

  private loadCodes(parent: string, apply: (list: EduCodeItem[]) => void): void {
    this.codeApi.getCodeList(parent).subscribe({ next: (l) => apply(l ?? []), error: () => apply([]) });
  }

  // ==================== Tìm kiếm ====================

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getList({
      keyword: this.searchKeyword.trim(),
      teachFieldCode: this.searchField,
      teachLevelCode: this.searchLevel,
      teachStatusCode: this.searchStatus,
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

  selectRow(row: EduTeacher): void {
    this.selected.set(row);
  }

  isSelected(row: EduTeacher): boolean {
    return this.selected()?.teacherNo === row.teacherNo;
  }

  // ==================== Modal ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row?: EduTeacher): void {
    const target = row ?? this.selected();
    if (!target?.teacherNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(target);
    this.api.getOne(target.teacherNo).subscribe({
      next: (dto) => {
        this.isNew.set(false);
        this.form = {
          ...EMPTY_FORM,
          teacherNo: dto.teacherNo,
          empId: dto.empId,
          teacherName: dto.teacherName ?? '',
          deptName: dto.deptName ?? '',
          postGradeName: dto.postGradeName ?? '',
          positionName: dto.positionName ?? '',
          teachLevelCode: dto.teachLevelCode,
          teachFieldCode: dto.teachFieldCode,
          teachStatusCode: dto.teachStatusCode,
          allTime: dto.allTime,
          hireTime: parseDmy(dto.hireTime),
          firingTime: parseDmy(dto.firingTime),
          remark: dto.remark ?? '',
        };
        this.modalVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  onExternalChange(external: boolean): void {
    this.form.external = external;
    this.form.empId = null;
    this.form.teacherName = '';
    this.form.deptName = '';
    this.form.postGradeName = '';
    this.form.positionName = '';
  }

  openPicker(): void {
    this.picker?.open(this.form.searchKeyword.trim());
  }

  onPicked(list: EduEmployee[]): void {
    const e = list[0];
    if (!e) return;
    this.form.empId = e.empId;
    this.form.teacherName = e.localName;
    this.form.deptName = e.deptName ?? '';
    this.form.postGradeName = e.postGradeName ?? '';
    this.form.positionName = e.positionName ?? '';
  }

  /** Bản gốc: "x năm y tháng" (hoặc chỉ "y tháng" khi dưới 1 năm) từ tổng số tháng. */
  experienceText(months: number | null): string {
    if (months === null || months === undefined) return '';
    const year = Math.floor(months / 12);
    const month = months % 12;
    const monthText = `${month} ${this.i18n.t('hr.viewPersonalInfo.title.WORKINFO_MONTH', 'Tháng')}`;
    return year > 0 ? `${year} ${this.i18n.t('inct.salesman.year', 'Năm')} ${monthText}` : monthText;
  }

  saveForm(): void {
    const isNew = this.isNew();
    if (isNew && !this.form.teacherName.trim()) {
      this.message.warning(this.i18n.t('edu.teacherManager.QINGXIANXUANZEYIGEREN.a', 'Xin chọn 1 người!'));
      return;
    }
    const payload: EduTeacher = {
      teacherNo: this.form.teacherNo,
      personId: null,
      empId: this.form.empId,
      teacherName: this.form.teacherName.trim(),
      deptName: null,
      postGradeName: null,
      positionName: null,
      teachFieldCode: this.form.teachFieldCode,
      teachFieldCodeName: null,
      teachLevelCode: this.form.teachLevelCode,
      teachLevelCodeName: null,
      teachStatusCode: this.form.teachStatusCode,
      teachStatusCodeName: null,
      hireTime: formatDmy(this.form.hireTime),
      firingTime: formatDmy(this.form.firingTime),
      businessActTime: isNew ? (this.form.expYear ?? 0) * 12 + (this.form.expMonth ?? 0) : null,
      allTime: null,
      remark: this.form.remark.trim(),
      external: this.form.external,
    };
    const failText = this.i18n.t(isNew ? 'alert.message.add_fail' : 'alert.message.update_fail', isNew ? 'Lưu thất bại!' : 'Sửa thất bại!');
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message);
          this.search();
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
    if (!row?.teacherNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.systemManager.QUEDINGSHIFOUSHANCHU.a', 'Đồng ý xóa không?')} [${row.empId ?? ''}] ${row.teacherName ?? ''}`,
      nzOkText: this.i18n.t('common.delete', 'Xóa'),
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row.teacherNo!),
    });
  }

  private doDelete(teacherNo: string): void {
    const failText = this.i18n.t('alert.message.delete_fail', 'Xóa thất bại!');
    this.api.delete(teacherNo).subscribe({
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
}

function compareText(a: string | null, b: string | null): number {
  return (a ?? '').localeCompare(b ?? '');
}
