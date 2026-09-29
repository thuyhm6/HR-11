import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Observable, concat, of, throwError } from 'rxjs';
import { last, switchMap } from 'rxjs/operators';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EduActionResult, EduFile, EduFileApplyType } from './edu-common.model';
import { EduCommonService } from './edu-common.service';

/**
 * Ô "file đính kèm" dùng chung cho Đơn vị đào tạo / Hợp đồng đào tạo / Kế hoạch đào tạo (thay uploadAttDialog_new +
 * deleteAttList* của bản JSP). File mới chọn và file cũ đánh dấu xóa chỉ được gửi lên khi form cha lưu thành công:
 * form cha gọi commit(applyNo) với mã bản ghi vừa lưu (thêm mới chưa có mã nên không upload trước được).
 */
@Component({
  selector: 'app-edu-file-attach',
  standalone: true,
  imports: [CommonModule, NzButtonModule, TranslatePipe],
  template: `
    <div class="efa-box">
      <div *ngIf="!readonly" class="mb-2">
        <!-- input file ẩn: bấm nút mới mở hộp chọn file -->
        <input #efaInput type="file" multiple class="d-none" (change)="onPick($event)">
        <button nz-button nzSize="small" type="button" (click)="efaInput.click()">
          <i class="bx bx-paperclip"></i> {{ 'hrm.empinfo.upload' | translate:'Chèn file' }}
        </button>
      </div>
      <div *ngIf="files.length === 0 && pending().length === 0" class="text-muted small">
        {{ 'common.noData' | translate:'Không có dữ liệu' }}
      </div>
      <div *ngFor="let f of files; let i = index" class="efa-item" [class.efa-deleted]="isDeleted(f)">
        <span class="efa-index">{{ i + 1 }}.</span>
        <a [href]="downloadUrl(f)" target="_blank" rel="noopener">{{ f.fileName }}</a>
        <button *ngIf="!readonly" nz-button nzType="link" nzSize="small" type="button" (click)="toggleDelete(f)">
          <i class="bx" [class.bx-x]="!isDeleted(f)" [class.bx-undo]="isDeleted(f)"></i>
        </button>
      </div>
      <div *ngFor="let p of pending(); let i = index" class="efa-item efa-pending">
        <span class="efa-index">+</span>
        <span>{{ p.name }}</span>
        <button nz-button nzType="link" nzSize="small" type="button" (click)="removePending(i)">
          <i class="bx bx-x"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .efa-item { display: flex; align-items: center; gap: 4px; line-height: 24px; }
    .efa-index { color: #1677ff; min-width: 18px; }
    .efa-deleted a { text-decoration: line-through; color: #999; }
    .efa-pending { color: #389e0d; }
  `],
})
export class EduFileAttachComponent implements OnChanges {
  @Input({ required: true }) applyType!: EduFileApplyType;
  @Input() files: EduFile[] = [];
  @Input() readonly = false;

  readonly pending = signal<File[]>([]);
  private readonly deletedNos = signal<Set<string>>(new Set());

  constructor(private readonly api: EduCommonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['files']) {
      this.pending.set([]);
      this.deletedNos.set(new Set());
    }
  }

  downloadUrl(f: EduFile): string {
    return this.api.downloadUrl(f.fileNo);
  }

  onPick(event: Event): void {
    const input = event.target as HTMLInputElement;
    const picked = Array.from(input.files ?? []);
    this.pending.set([...this.pending(), ...picked]);
    input.value = '';
  }

  removePending(index: number): void {
    this.pending.set(this.pending().filter((_, i) => i !== index));
  }

  isDeleted(f: EduFile): boolean {
    return this.deletedNos().has(f.fileNo);
  }

  toggleDelete(f: EduFile): void {
    const next = new Set(this.deletedNos());
    if (next.has(f.fileNo)) next.delete(f.fileNo);
    else next.add(f.fileNo);
    this.deletedNos.set(next);
  }

  get hasChanges(): boolean {
    return this.pending().length > 0 || this.deletedNos().size > 0;
  }

  /** Gửi các thay đổi file (xóa trước, upload sau) cho bản ghi applyNo vừa lưu. */
  commit(applyNo: string): Observable<EduActionResult> {
    if (!this.hasChanges) return of({ success: true, message: '' });
    const failIfNeeded = (res: EduActionResult) => (res.success ? of(res) : throwError(() => ({ error: res })));
    return concat(
      this.api.deleteFiles(this.applyType, applyNo, Array.from(this.deletedNos())).pipe(switchMap(failIfNeeded)),
      this.api.uploadFiles(this.applyType, applyNo, this.pending()).pipe(switchMap(failIfNeeded)),
    ).pipe(last());
  }
}
