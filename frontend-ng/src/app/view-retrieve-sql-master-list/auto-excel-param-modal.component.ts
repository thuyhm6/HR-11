import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CodeItem } from '../manage-emp-position-info/manage-emp-position-info.model';
import { AutoExcelMaster, AutoExcelParam } from './view-retrieve-sql-master-list.model';
import { ViewRetrieveSqlMasterListService } from './view-retrieve-sql-master-list.service';

/** Tham số cố định: bản gốc khóa không cho sửa (textarea readonly với CPNY_ID) - backend cũng bỏ qua khi lưu. */
const FIXED_PARAMS = new Set(['CPNY_ID', 'PERSON_ID', 'CPNY']);

/**
 * Modal sửa mô tả / loại / thứ tự tham số của 1 báo cáo (updateSqlParamList.jsp). Danh sách tham số do backend tự
 * tách từ câu SQL khi lưu báo cáo nên ở đây không thêm/xóa tham số.
 */
@Component({
  selector: 'app-auto-excel-param-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzModalModule,
    NzTableModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './auto-excel-param-modal.component.html',
})
export class AutoExcelParamModalComponent implements OnInit, OnChanges {
  @Input() visible = false;
  @Input() sqlSeq: string | null = null;
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly saved = new EventEmitter<void>();

  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly master = signal<AutoExcelMaster | null>(null);
  readonly params = signal<AutoExcelParam[]>([]);
  readonly paramTypes = signal<CodeItem[]>([]);

  constructor(
    private readonly api: ViewRetrieveSqlMasterListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.api.getParamTypes().subscribe({
      next: (list) => this.paramTypes.set(list ?? []),
      error: () => this.paramTypes.set([]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && this.visible && this.sqlSeq) this.load();
  }

  isFixed(p: AutoExcelParam): boolean {
    return FIXED_PARAMS.has(p.param);
  }

  /** Loại cũ không còn trong danh mục 211026 vẫn phải hiển thị được. */
  hasTypeOption(value: string | null): boolean {
    return !value || this.paramTypes().some((c) => c.description === value);
  }

  close(): void {
    this.closed.emit();
  }

  submit(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const invalid = this.params().find((p) => p.sortCd && !/^\d{1,10}$/.test(p.sortCd));
    if (invalid) {
      this.message.warning(t('autoExcel.msg.invalidOrder', 'Thứ tự phải là số (tối đa 10 chữ số)!'));
      return;
    }
    this.saving.set(true);
    this.api.updateParams(this.sqlSeq!, this.params()).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message || t('common.saveSuccess', 'Lưu thành công!'));
          this.saved.emit();
        } else {
          this.message.error(res.message || t('autoExcel.msg.saveFail', 'Lưu thất bại!'));
        }
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || t('autoExcel.msg.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  private load(): void {
    this.loading.set(true);
    this.master.set(null);
    this.params.set([]);
    this.api.getDetail(this.sqlSeq!).subscribe({
      next: (m) => {
        this.master.set(m);
        // Bản sao để sửa trên form mà không ảnh hưởng dữ liệu gốc khi bấm Hủy
        this.params.set((m.params ?? []).map((p) => ({ ...p })));
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }
}
