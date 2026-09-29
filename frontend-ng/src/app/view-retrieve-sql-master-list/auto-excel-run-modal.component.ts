import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AutoExcelMaster, AutoExcelParam } from './view-retrieve-sql-master-list.model';
import { ViewRetrieveSqlMasterListService } from './view-retrieve-sql-master-list.service';

/**
 * Modal chạy báo cáo + xuất Excel - thay trang /disc/autoExcel/runSql (bản gốc hiển thị file JSP sinh sẵn cho từng báo
 * cáo: /disc/sqlparam/{SQL_SEQ}.jsp). Form tham số dựng động từ SYS_PARAM_BY_SQL: loại "date" dùng date picker (gửi
 * yyyy-MM-dd như ô ngày bản gốc), các loại khác nhập văn bản. Tham số hệ thống (công ty, ngôn ngữ, người dùng) ẩn đi -
 * backend tự điền từ phiên đăng nhập.
 */
@Component({
  selector: 'app-auto-excel-run-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzModalModule,
    NzInputModule,
    NzDatePickerModule,
    NzButtonModule,
    NzSpinModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './auto-excel-run-modal.component.html',
})
export class AutoExcelRunModalComponent implements OnChanges {
  @Input() visible = false;
  @Input() sqlSeq: string | null = null;
  @Output() readonly closed = new EventEmitter<void>();

  readonly loading = signal(false);
  readonly running = signal(false);
  readonly master = signal<AutoExcelMaster | null>(null);
  readonly inputParams = computed(() => (this.master()?.params ?? []).filter((p) => !p.system));

  /** Giá trị nhập theo tên tham số: string cho ô văn bản, Date cho ô ngày. */
  values: Record<string, string | Date | null> = {};

  constructor(
    private readonly api: ViewRetrieveSqlMasterListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && this.visible && this.sqlSeq) this.load();
  }

  isDate(p: AutoExcelParam): boolean {
    return (p.sqlParamTp ?? '').toLowerCase() === 'date';
  }

  label(p: AutoExcelParam): string {
    return p.cnSqlParamDesc || p.enSqlParamDesc || p.param;
  }

  close(): void {
    this.closed.emit();
  }

  run(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const params: Record<string, string> = {};
    for (const p of this.inputParams()) {
      const v = this.values[p.param];
      if (v instanceof Date) params[p.param] = formatDate(v, 'yyyy-MM-dd', 'vi');
      else if (v) params[p.param] = String(v);
    }

    this.running.set(true);
    this.api.export(this.sqlSeq!, params).subscribe((outcome) => {
      this.running.set(false);
      if (outcome.kind === 'file') {
        this.download(outcome.blob, outcome.fileName);
      } else if (outcome.kind === 'empty') {
        this.message.warning(t('autoExcel.msg.noData', 'Không có dữ liệu hoặc tham số nhập chưa đúng, vui lòng nhập lại!'));
      } else {
        this.message.error(outcome.message || t('autoExcel.msg.executeFail', 'Chạy báo cáo thất bại!'));
      }
    });
  }

  private load(): void {
    this.loading.set(true);
    this.master.set(null);
    this.values = {};
    this.api.getDetail(this.sqlSeq!).subscribe({
      next: (m) => {
        const values: Record<string, string | Date | null> = {};
        for (const p of (m.params ?? []).filter((x) => !x.system)) {
          values[p.param] = p.defaultVal ?? null;
        }
        this.values = values;
        this.master.set(m);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private download(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
