import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PhotoImportResult } from './photo-import.model';
import { PhotoImportService } from './photo-import.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'hrm.photoImport.title', 'hrm.photoImport.instruction', 'hrm.photoImport.filename.rule',
  'hrm.photoImport.accept.formats', 'hrm.photoImport.max.size', 'hrm.photoImport.overwrite.note',
  'hrm.photoImport.selectFiles', 'hrm.photoImport.btnPreview', 'hrm.photoImport.btnConfirm',
  'hrm.photoImport.btnReset', 'hrm.photoImport.result.title', 'hrm.photoImport.result.valid',
  'hrm.photoImport.result.invalid', 'hrm.photoImport.col.no', 'hrm.photoImport.col.fileName',
  'hrm.photoImport.col.empId', 'hrm.photoImport.col.empName', 'hrm.photoImport.col.status',
  'hrm.photoImport.col.errorReason', 'hrm.photoImport.status.success', 'hrm.photoImport.status.failed',
  'hrm.photoImport.noFilesSelected', 'hrm.photoImport.noValidFiles', 'hrm.photoImport.confirm.message',
  'hrm.photoImport.saveResult.title', 'hrm.photoImport.saved.success', 'hrm.photoImport.selected.count',
  'hrm.photoImport.checking', 'hrm.photoImport.saving', 'hrm.photoImport.error.check', 'hrm.photoImport.error.save',
];

/**
 * Bản Angular của hrm/empinfo/photoImport.html (Thymeleaf) - Import ảnh đại diện nhân viên hàng loạt
 * từ tên file (chứa mã nhân viên): chọn nhiều file ảnh, "Kiểm tra" để xem trước kết quả đối chiếu mã
 * nhân viên (không lưu), rồi "Xác nhận lưu" các file hợp lệ. Gọi lại nguyên API JSON đã có sẵn ở
 * HrEmpinfoController (xem PhotoImportService) - không đổi backend.
 */
@Component({
  selector: 'app-photo-import',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule, NzTableModule, NzTagModule, TranslatePipe],
  templateUrl: './photo-import.component.html',
  styleUrl: './photo-import.component.css',
})
export class PhotoImportComponent {
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  readonly selectedFiles = signal<File[]>([]);
  readonly results = signal<PhotoImportResult[]>([]);
  readonly resultVisible = signal(false);
  /** true = đang hiển thị kết quả sau khi lưu (ẩn nút "Xác nhận lưu"); false = kết quả kiểm tra. */
  readonly isSaveResult = signal(false);
  readonly checking = signal(false);
  readonly saving = signal(false);

  constructor(
    private readonly api: PhotoImportService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {
    this.i18n.loadKeys(I18N_KEYS);
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  get successCount(): number {
    return this.results().filter((r) => r.success).length;
  }

  get failCount(): number {
    return this.results().filter((r) => !r.success).length;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFiles.set(Array.from(input.files ?? []));
    this.resultVisible.set(false);
    this.results.set([]);
  }

  preview(): void {
    const files = this.selectedFiles();
    if (files.length === 0) {
      this.message.warning(this.t('hrm.photoImport.noFilesSelected', 'Chưa chọn file nào'));
      return;
    }
    this.checking.set(true);
    this.api.previewPhotos(files).subscribe({
      next: (res) => {
        this.checking.set(false);
        this.results.set(res ?? []);
        this.isSaveResult.set(false);
        this.resultVisible.set(true);
      },
      error: (err) => {
        this.checking.set(false);
        this.message.error(`${this.t('hrm.photoImport.error.check', 'Lỗi khi kiểm tra file')}: ${err.message}`);
      },
    });
  }

  confirmSave(): void {
    const validFiles = this.selectedFiles().filter((f) =>
      this.results().some((r) => r.success && r.fileName === f.name),
    );
    if (validFiles.length === 0) {
      this.message.warning(this.t('hrm.photoImport.noValidFiles', 'Không có file hợp lệ để lưu'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.photoImport.confirm.message', 'Xác nhận lưu ảnh hợp lệ vào hệ thống?'),
      nzOnOk: () => this.doSave(validFiles),
    });
  }

  private doSave(validFiles: File[]): void {
    this.saving.set(true);
    this.api.savePhotos(validFiles).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.results.set(res ?? []);
        this.isSaveResult.set(true);
        this.resultVisible.set(true);
        const saved = (res ?? []).filter((r) => r.success).length;
        this.message.success(`${saved} ${this.t('hrm.photoImport.saved.success', 'ảnh đã lưu thành công')}`);
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(`${this.t('hrm.photoImport.error.save', 'Lỗi khi lưu file')}: ${err.message}`);
      },
    });
  }

  reset(): void {
    if (this.fileInputRef) this.fileInputRef.nativeElement.value = '';
    this.selectedFiles.set([]);
    this.results.set([]);
    this.resultVisible.set(false);
    this.isSaveResult.set(false);
  }
}
