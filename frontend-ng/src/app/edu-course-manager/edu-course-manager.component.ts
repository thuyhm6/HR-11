import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EduCodeItem, EduSystemManagerRow } from '../edu-system-manager/edu-system-manager.model';
import { EduSystemManagerService } from '../edu-system-manager/edu-system-manager.service';
import { EduCourseManagerRow, EduCourseManagerSavePayload } from './edu-course-manager.model';
import { EduCourseManagerService } from './edu-course-manager.service';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc. */
const I18N_KEYS = [
  'liang.hr.viewTraining.title.TRAINING_DIFFERENTIATE', 'edu.systemManager.PEIXUNLEIXING.a',
  'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'edu.systemManager.typeNoAuto', 'empsubject.subjectNm',
  'edu.courseManager.KECHENGBIANHAO.a', 'edu.courseManager.addTitle', 'edu.courseManager.editTitle',
  'edu.courseManager.msg.required', 'ar.viewarcardrecord.title.beizhu',
  'common.search', 'common.addNew', 'common.edit', 'common.save', 'common.close', 'common.stt', 'common.noData',
  'common.totalRows', 'common.loadFail', 'common.quickFilter', 'common.all', 'common.pleaseSelect',
  'alert.message.add_fail', 'alert.message.update_fail',
];

/** Mã cha của "Chương trình đào tạo" (bản gốc: SelectSyCodeByCpnyID parentNo="14014478"). */
const TRAIN_DIFF_PARENT_CODE = '14014478';

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];

interface CourseForm {
  courseNo: string | null;
  sysmanaNo: string | null;
  trainTypeCodeName: string;
  courseNameCode: string;
  courseNumber: string;
  remark: string;
}

const EMPTY_FORM: CourseForm = {
  courseNo: null, sysmanaNo: null, trainTypeCodeName: '', courseNameCode: '', courseNumber: '', remark: '',
};

/**
 * Bản Angular của /edu/traineducation/courseManager (JSP + DWZ, dự án Hanwha_HTSV) - quản lý khóa học
 * (bảng EDU_COURSE_MANAGER). Giữ nguyên hành vi gốc:
 * - Tìm theo Chương trình đào tạo -> Loại hình (dropdown phụ thuộc) + tên khóa học.
 * - Click chọn 1 dòng rồi bấm Sửa (double-click dòng = Sửa). Bản gốc không có chức năng xóa.
 * - Thêm mới: chọn loại hình từ danh sách Hệ thống đào tạo ("mã loại hình  tên loại hình"), nhập tên khóa học;
 *   mã khóa học do BE tự sinh (SVP000001-0001...). Sửa: đổi tên khóa học + ghi chú.
 * - Bảng phân trang + lọc nhanh + sắp xếp phía client (thay jQuery DataTables).
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-course-manager',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './edu-course-manager.component.html',
  styleUrl: './edu-course-manager.component.css',
})
export class EduCourseManagerComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<EduCourseManagerRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly selected = signal<EduCourseManagerRow | null>(null);

  readonly filteredRows = computed(() => {
    const keyword = this.quickFilter().trim().toLowerCase();
    if (!keyword) return this.rows();
    return this.rows().filter((r) =>
      [r.trainTypeCodeName, r.courseNameCode, r.courseNumber, r.remark]
        .some((v) => (v ?? '').toLowerCase().includes(keyword)),
    );
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];

  readonly trainDiffOptions = signal<EduCodeItem[]>([]);
  readonly searchTypeOptions = signal<EduCodeItem[]>([]);
  /** Danh sách hệ thống đào tạo (bản gốc addCourseManager: systemManagerList). */
  readonly systemOptions = signal<EduSystemManagerRow[]>([]);
  searchTrainDiffCode: string | null = null;
  searchTrainTypeCode: string | null = null;
  searchCourseName = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('edu.courseManager.addTitle', 'Thêm mới khóa học')
      : this.i18n.t('edu.courseManager.editTitle', 'Sửa khóa học'),
  );
  form: CourseForm = { ...EMPTY_FORM };

  readonly sortType = (a: EduCourseManagerRow, b: EduCourseManagerRow) => compareText(a.trainTypeCodeName, b.trainTypeCodeName);
  readonly sortName = (a: EduCourseManagerRow, b: EduCourseManagerRow) => compareText(a.courseNameCode, b.courseNameCode);
  readonly sortNumber = (a: EduCourseManagerRow, b: EduCourseManagerRow) => compareText(a.courseNumber, b.courseNumber);
  readonly sortRemark = (a: EduCourseManagerRow, b: EduCourseManagerRow) => compareText(a.remark, b.remark);

  constructor(
    private readonly api: EduCourseManagerService,
    private readonly systemApi: EduSystemManagerService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.systemApi.getCodeList(TRAIN_DIFF_PARENT_CODE).subscribe({
      next: (list) => this.trainDiffOptions.set(list ?? []),
      error: () => this.trainDiffOptions.set([]),
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
    this.systemApi.getCodeList(code).subscribe({
      next: (list) => this.searchTypeOptions.set(list ?? []),
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

  // ==================== Chọn dòng ====================

  selectRow(row: EduCourseManagerRow): void {
    this.selected.set(row);
  }

  isSelected(row: EduCourseManagerRow): boolean {
    return this.selected()?.courseNo === row.courseNo;
  }

  // ==================== Modal Thêm mới / Sửa ====================

  systemLabel(s: EduSystemManagerRow): string {
    return `${s.trainTypeNo ?? ''}    ${s.trainTypeCodeName ?? ''}`;
  }

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
    // Tải lại mỗi lần mở để thấy ngay hệ thống đào tạo vừa thêm ở trang Hệ thống đào tạo
    this.systemApi.getList(null, null).subscribe({
      next: (list) => this.systemOptions.set(list ?? []),
      error: () => this.systemOptions.set([]),
    });
  }

  openEditModal(row?: EduCourseManagerRow): void {
    const target = row ?? this.selected();
    if (!target) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(target);
    this.api.getOne(target.courseNo).subscribe({
      next: (dto) => {
        this.isNew.set(false);
        this.form = {
          courseNo: dto.courseNo,
          sysmanaNo: dto.sysmanaNo,
          trainTypeCodeName: dto.trainTypeCodeName ?? '',
          courseNameCode: dto.courseNameCode ?? '',
          courseNumber: dto.courseNumber ?? '',
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

  saveForm(): void {
    const isNew = this.isNew();
    const courseNameCode = this.form.courseNameCode.trim();
    if (!courseNameCode || (isNew && !this.form.sysmanaNo)) {
      this.message.warning(this.i18n.t('edu.courseManager.msg.required', 'Vui lòng chọn loại hình và nhập tên khóa học!'));
      return;
    }
    const payload: EduCourseManagerSavePayload = {
      courseNo: this.form.courseNo,
      sysmanaNo: this.form.sysmanaNo,
      courseNameCode,
      remark: this.form.remark.trim(),
    };
    const failText = isNew
      ? this.i18n.t('alert.message.add_fail', 'Lưu thất bại!')
      : this.i18n.t('alert.message.update_fail', 'Sửa thất bại!');
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
}

function compareText(a: string | null, b: string | null): number {
  return (a ?? '').localeCompare(b ?? '');
}
