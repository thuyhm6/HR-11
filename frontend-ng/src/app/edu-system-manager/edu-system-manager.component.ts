import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EduCodeItem, EduSystemManagerRow, EduSystemManagerSavePayload } from './edu-system-manager.model';
import { EduSystemManagerService } from './edu-system-manager.service';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.systemManager.*). */
const I18N_KEYS = [
  'liang.hr.viewTraining.title.TRAINING_DIFFERENTIATE', 'edu.systemManager.PEIXUNLEIXING.a',
  'edu.systemManager.LEIXINGBIANHAO.a', 'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a',
  'edu.systemManager.QUEDINGSHIFOUSHANCHU.a', 'edu.systemManager.addTitle', 'edu.systemManager.editTitle',
  'edu.systemManager.msg.required', 'edu.systemManager.typeNoAuto', 'org.title.REMARK',
  'common.search', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail',
  'common.quickFilter', 'common.all', 'common.pleaseSelect',
  'alert.message.add_fail', 'alert.message.update_fail', 'alert.message.delete_fail', 'alert.message.delete_success',
];

/** Mã cha của "Chương trình đào tạo" (bản gốc: SelectSyCodeByCpnyID parentNo="14014478"). */
const TRAIN_DIFF_PARENT_CODE = '14014478';

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];

interface SystemManagerForm {
  sysmanaNo: string | null;
  trainDiffCode: string | null;
  trainTypeCode: string | null;
  trainDiffCodeName: string;
  trainTypeCodeName: string;
  trainTypeNo: string;
  remark: string;
}

const EMPTY_FORM: SystemManagerForm = {
  sysmanaNo: null, trainDiffCode: null, trainTypeCode: null,
  trainDiffCodeName: '', trainTypeCodeName: '', trainTypeNo: '', remark: '',
};

/**
 * Bản Angular của /edu/traineducation/systemManager (JSP + DWZ, dự án Hanwha_HTSV) - quản lý hệ thống đào tạo
 * (bảng EDU_SYSTEM_MANAGER). Giữ nguyên hành vi gốc:
 * - Tìm theo Chương trình đào tạo -> Loại hình (dropdown phụ thuộc, bản gốc codeRelation()).
 * - Click chọn 1 dòng rồi bấm Sửa/Xóa (double-click dòng = Sửa cho nhanh).
 * - Thêm mới: chọn chương trình + loại hình, mã loại hình do BE tự sinh (SVP000001...). Sửa: chỉ đổi ghi chú.
 * - Bảng phân trang + lọc nhanh + sắp xếp phía client (thay jQuery DataTables).
 * Modal đóng khi bấm ra ngoài (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-system-manager',
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
  templateUrl: './edu-system-manager.component.html',
  styleUrl: './edu-system-manager.component.css',
})
export class EduSystemManagerComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<EduSystemManagerRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly selected = signal<EduSystemManagerRow | null>(null);

  readonly filteredRows = computed(() => {
    const keyword = this.quickFilter().trim().toLowerCase();
    if (!keyword) return this.rows();
    return this.rows().filter((r) =>
      [r.trainDiffCodeName, r.trainTypeCodeName, r.trainTypeNo, r.remark]
        .some((v) => (v ?? '').toLowerCase().includes(keyword)),
    );
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];

  readonly trainDiffOptions = signal<EduCodeItem[]>([]);
  readonly searchTypeOptions = signal<EduCodeItem[]>([]);
  readonly formTypeOptions = signal<EduCodeItem[]>([]);
  searchTrainDiffCode: string | null = null;
  searchTrainTypeCode: string | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('edu.systemManager.addTitle', 'Thêm mới hệ thống đào tạo')
      : this.i18n.t('edu.systemManager.editTitle', 'Sửa hệ thống đào tạo'),
  );
  form: SystemManagerForm = { ...EMPTY_FORM };

  readonly sortDiff = (a: EduSystemManagerRow, b: EduSystemManagerRow) => compareText(a.trainDiffCodeName, b.trainDiffCodeName);
  readonly sortType = (a: EduSystemManagerRow, b: EduSystemManagerRow) => compareText(a.trainTypeCodeName, b.trainTypeCodeName);
  readonly sortTypeNo = (a: EduSystemManagerRow, b: EduSystemManagerRow) => compareText(a.trainTypeNo, b.trainTypeNo);
  readonly sortRemark = (a: EduSystemManagerRow, b: EduSystemManagerRow) => compareText(a.remark, b.remark);

  constructor(
    private readonly api: EduSystemManagerService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(TRAIN_DIFF_PARENT_CODE).subscribe({
      next: (list) => this.trainDiffOptions.set(list ?? []),
      error: () => this.trainDiffOptions.set([]),
    });
    this.search();
  }

  // ==================== Tìm kiếm ====================

  onSearchDiffChange(code: string | null): void {
    this.searchTrainTypeCode = null;
    this.loadTypeOptions(code, (list) => this.searchTypeOptions.set(list));
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getList(this.searchTrainDiffCode, this.searchTrainTypeCode).subscribe({
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

  selectRow(row: EduSystemManagerRow): void {
    this.selected.set(row);
  }

  isSelected(row: EduSystemManagerRow): boolean {
    return this.selected()?.sysmanaNo === row.sysmanaNo;
  }

  // ==================== Modal Thêm mới / Sửa ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.formTypeOptions.set([]);
    this.modalVisible.set(true);
  }

  openEditModal(row?: EduSystemManagerRow): void {
    const target = row ?? this.selected();
    if (!target) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(target);
    this.api.getOne(target.sysmanaNo).subscribe({
      next: (dto) => {
        this.isNew.set(false);
        this.form = {
          sysmanaNo: dto.sysmanaNo,
          trainDiffCode: dto.trainDiffCode,
          trainTypeCode: dto.trainTypeCode,
          trainDiffCodeName: dto.trainDiffCodeName ?? '',
          trainTypeCodeName: dto.trainTypeCodeName ?? '',
          trainTypeNo: dto.trainTypeNo ?? '',
          remark: dto.remark ?? '',
        };
        this.modalVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  onFormDiffChange(code: string | null): void {
    this.form.trainTypeCode = null;
    this.loadTypeOptions(code, (list) => this.formTypeOptions.set(list));
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    const isNew = this.isNew();
    if (isNew && (!this.form.trainDiffCode || !this.form.trainTypeCode)) {
      this.message.warning(this.i18n.t('edu.systemManager.msg.required', 'Vui lòng chọn chương trình đào tạo và loại hình!'));
      return;
    }
    const payload: EduSystemManagerSavePayload = {
      sysmanaNo: this.form.sysmanaNo,
      trainDiffCode: this.form.trainDiffCode,
      trainTypeCode: this.form.trainTypeCode,
      remark: this.form.remark.trim(),
    };
    const failKey = isNew ? 'alert.message.add_fail' : 'alert.message.update_fail';
    const failText = this.i18n.t(failKey, isNew ? 'Lưu thất bại!' : 'Sửa thất bại!');
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
    if (!row) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.systemManager.QUEDINGSHIFOUSHANCHU.a', 'Đồng ý xóa không?')}
        [${row.trainTypeNo ?? ''}] ${row.trainTypeCodeName ?? ''}`,
      nzOkText: this.i18n.t('common.delete', 'Xóa'),
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row),
    });
  }

  private doDelete(row: EduSystemManagerRow): void {
    const failText = this.i18n.t('alert.message.delete_fail', 'Xóa thất bại!');
    this.api.delete(row.sysmanaNo).subscribe({
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

  // ==================== Helper ====================

  /** Loại hình = mã con của chương trình đào tạo đã chọn (bản gốc: /sys/basicMaintenance/getCodeRelation). */
  private loadTypeOptions(parentCode: string | null, apply: (list: EduCodeItem[]) => void): void {
    if (!parentCode) {
      apply([]);
      return;
    }
    this.api.getCodeList(parentCode).subscribe({
      next: (list) => apply(list ?? []),
      error: () => apply([]),
    });
  }
}

function compareText(a: string | null, b: string | null): number {
  return (a ?? '').localeCompare(b ?? '');
}
