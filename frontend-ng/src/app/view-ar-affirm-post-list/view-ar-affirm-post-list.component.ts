import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CodeItem } from '../manage-emp-position-info/manage-emp-position-info.model';
import { ArAffirmPostRow } from './view-ar-affirm-post-list.model';
import { ViewArAffirmPostListService } from './view-ar-affirm-post-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.refresh', 'common.edit', 'common.delete', 'common.save',
  'common.cancel', 'common.confirm', 'common.updater', 'common.placeholder.select', 'common.loadFail',
  'common.totalRows', 'common.saveSuccess', 'common.deleteSuccess', 'sys.affirm.title.affirmGradeLevel',
  'vaap.col.duty', 'vaap.col.updateDate', 'vaap.modal.addTitle', 'vaap.modal.editTitle',
  'vaap.msg.chooseDuty', 'vaap.msg.enterLevel', 'vaap.msg.invalidLevel', 'vaap.msg.dutyExists',
  'vaap.msg.notFound', 'vaap.msg.confirmDelete', 'vaap.msg.saveFail', 'vaap.msg.deleteFail',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

/**
 * Bản Angular của /sys/arAffirmPost/viewArAffirmPostList (JSP + DWZ, dự án Hanwha_HTSV) - Cấu hình vai trò người
 * duyệt (bảng SY_AFFIRM_LEVEL_SETUP): mỗi vai trò (mã con của 14014036) gắn với 1 cấp duyệt.
 * Thêm/Sửa dùng chung 1 nz-modal (thay 2 dialog addArAffirmPostView/updateArAffirmPostView); khi sửa chỉ đổi được
 * cấp duyệt, vai trò giữ nguyên như bản gốc. Nút Sửa/Xóa đặt trên từng dòng thay cho chọn dòng + toolbar.
 */
@Component({
  selector: 'app-view-ar-affirm-post-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzButtonModule,
    NzSelectModule,
    NzInputNumberModule,
    NzAlertModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-ar-affirm-post-list.component.html',
})
export class ViewArAffirmPostListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ArAffirmPostRow[]>([]);
  readonly dutyOptions = signal<CodeItem[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly modalVisible = signal(false);
  readonly editing = signal<ArAffirmPostRow | null>(null);
  readonly saving = signal(false);

  /** Khi thêm mới chỉ cho chọn vai trò chưa được cấu hình (bảng có khóa CPNY_ID + DUTY). */
  readonly availableDutyOptions = computed(() => {
    const used = new Set(this.rows().map((r) => r.duty));
    return this.dutyOptions().filter((c) => !used.has(c.codeNo));
  });

  formDuty: string | null = null;
  formLevel: number | null = null;

  constructor(
    private readonly api: ViewArAffirmPostListService,
    private readonly i18n: I18nService,
    private readonly modal: NzModalService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getDutyOptions().subscribe({
      next: (list) => this.dutyOptions.set(list ?? []),
      error: () => this.dutyOptions.set([]),
    });
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList().subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  // ==================== Thêm / Sửa ====================

  openAdd(): void {
    this.editing.set(null);
    this.formDuty = null;
    this.formLevel = null;
    this.modalVisible.set(true);
  }

  openEdit(row: ArAffirmPostRow): void {
    this.editing.set(row);
    this.formDuty = row.duty;
    this.formLevel = row.affirmLevel;
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  save(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (!this.formDuty) {
      this.message.warning(t('vaap.msg.chooseDuty', 'Vui lòng chọn vai trò!'));
      return;
    }
    if (this.formLevel === null || this.formLevel === undefined) {
      this.message.warning(t('vaap.msg.enterLevel', 'Vui lòng nhập cấp duyệt!'));
      return;
    }
    const payload = { duty: this.formDuty, affirmLevel: this.formLevel };
    const request$ = this.editing() ? this.api.update(payload) : this.api.add(payload);

    this.saving.set(true);
    request$.subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message || t('common.saveSuccess', 'Lưu thành công!'));
          this.modalVisible.set(false);
          this.load();
        } else {
          this.message.error(res.message || t('vaap.msg.saveFail', 'Lưu thất bại!'));
        }
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || t('vaap.msg.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa ====================

  confirmDelete(row: ArAffirmPostRow): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: `${t('vaap.msg.confirmDelete', 'Bạn có chắc muốn xóa cấu hình vai trò này?')} ${row.dutyName || row.duty}`,
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row),
    });
  }

  private doDelete(row: ArAffirmPostRow): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api.delete(row.duty).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(res.message || t('common.deleteSuccess', 'Xóa thành công!'));
          this.load();
        } else {
          this.message.error(res.message || t('vaap.msg.deleteFail', 'Xóa thất bại!'));
        }
      },
      error: (err) => this.message.error(err?.error?.message || t('vaap.msg.deleteFail', 'Xóa thất bại!')),
    });
  }
}
