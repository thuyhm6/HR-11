import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AutoExcelSavePayload } from './view-retrieve-sql-master-list.model';
import { ViewRetrieveSqlMasterListService } from './view-retrieve-sql-master-list.service';

interface EditForm {
  pgmNm: string | null;
  sqlNm: string;
  sqlFromStmt: string;
  sqlOrderById: string;
  sqlDesc: string;
  sqlStat: boolean;
  isSpecial: boolean;
  sqlStmt: string;
}

/**
 * Modal Thêm (createSqlMaster.jsp) / Sửa (updateSqlMaster.jsp) báo cáo SQL. Khi lưu, backend tự tách #PARAM# trong câu
 * SQL để cập nhật danh sách tham số (giống upMasterToParam bản gốc).
 */
@Component({
  selector: 'app-auto-excel-edit-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzModalModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzButtonModule,
    NzSpinModule,
    TranslatePipe,
  ],
  templateUrl: './auto-excel-edit-modal.component.html',
})
export class AutoExcelEditModalComponent implements OnChanges {
  @Input() visible = false;
  /** null = thêm mới. */
  @Input() sqlSeq: string | null = null;
  /** Module được chọn (theo query PGM_NMurl của menu, giống createSqlMaster.jsp). */
  @Input() moduleOptions: string[] = [];
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly saved = new EventEmitter<void>();

  readonly loading = signal(false);
  readonly saving = signal(false);

  form: EditForm = this.emptyForm();

  constructor(
    private readonly api: ViewRetrieveSqlMasterListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  get isEdit(): boolean {
    return !!this.sqlSeq;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['visible'] || !this.visible) return;
    this.form = this.emptyForm();
    if (this.isEdit) this.load();
  }

  moduleLabel(code: string): string {
    return this.i18n.t(`autoExcel.module.${code}`, code);
  }

  close(): void {
    this.closed.emit();
  }

  submit(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const f = this.form;
    if (!f.pgmNm) {
      this.message.warning(t('autoExcel.msg.chooseModule', 'Vui lòng chọn module!'));
      return;
    }
    if (!f.sqlNm.trim()) {
      this.message.warning(t('autoExcel.msg.enterName', 'Vui lòng nhập tên báo cáo!'));
      return;
    }
    if (!/^\d{1,10}$/.test(f.sqlOrderById.trim())) {
      this.message.warning(t('autoExcel.msg.invalidOrder', 'Thứ tự phải là số (tối đa 10 chữ số)!'));
      return;
    }
    if (!f.sqlStmt.trim()) {
      this.message.warning(t('autoExcel.msg.enterSql', 'Vui lòng nhập câu SQL!'));
      return;
    }

    const payload: AutoExcelSavePayload = {
      sqlSeq: this.sqlSeq,
      pgmNm: f.pgmNm,
      sqlNm: f.sqlNm.trim(),
      sqlFromStmt: f.sqlFromStmt.trim() || null,
      sqlOrderById: f.sqlOrderById.trim(),
      sqlDesc: f.sqlDesc.trim() || null,
      sqlStat: f.sqlStat ? 'Y' : 'N',
      isSpecial: f.isSpecial ? 'Y' : 'N',
      sqlStmt: f.sqlStmt,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
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
    this.api.getDetail(this.sqlSeq!).subscribe({
      next: (m) => {
        this.form = {
          pgmNm: m.pgmNm,
          sqlNm: m.sqlNm ?? '',
          sqlFromStmt: m.sqlFromStmt ?? '',
          sqlOrderById: m.sqlOrderById ?? '',
          sqlDesc: m.sqlDesc ?? '',
          sqlStat: m.sqlStat === 'Y',
          isSpecial: m.isSpecial === 'Y',
          sqlStmt: m.sqlStmt ?? '',
        };
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private emptyForm(): EditForm {
    return {
      pgmNm: this.moduleOptions.length === 1 ? this.moduleOptions[0] : null,
      sqlNm: '',
      // Giá trị mặc định giống createSqlMaster.jsp bản gốc
      sqlFromStmt: '',
      sqlOrderById: '',
      sqlDesc: '',
      sqlStat: true,
      isSpecial: false,
      sqlStmt: '',
    };
  }
}
