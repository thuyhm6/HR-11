import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  SQL_MASTER_PGM_OPTIONS,
  SQL_PARAM_TYPE_OPTIONS,
  SqlMasterRow,
  SqlParamRow,
} from './view-sql-master-list.model';
import { ViewSqlMasterListService } from './view-sql-master-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.status', 'common.active', 'common.inactive',
  'common.search', 'common.clearFilter', 'common.addNew', 'common.exportExcel',
  'common.save', 'common.close', 'common.delete', 'common.edit', 'common.confirm', 'common.cancel',
  'common.noData', 'common.totalRows', 'common.loadFail', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail',
  'sys.basic.viewSqlMasterList.title',
  'sys.basic.viewSqlMasterList.search.keyword', 'sys.basic.viewSqlMasterList.search.keyword.placeholder',
  'sys.basic.viewSqlMasterList.search.pgmNm', 'sys.basic.viewSqlMasterList.search.pgmNm.placeholder',
  'sys.basic.viewSqlMasterList.col.sqlNm', 'sys.basic.viewSqlMasterList.col.sqlDesc',
  'sys.basic.viewSqlMasterList.col.pgmNm', 'sys.basic.viewSqlMasterList.col.createDate',
  'sys.basic.viewSqlMasterList.col.createdBy',
  'sys.basic.viewSqlMasterList.label.pgmNm', 'sys.basic.viewSqlMasterList.label.sqlNm',
  'sys.basic.viewSqlMasterList.label.sqlDesc', 'sys.basic.viewSqlMasterList.label.sqlStmt',
  'sys.basic.viewSqlMasterList.label.sqlStmt.placeholder', 'sys.basic.viewSqlMasterList.label.useYn',
  'sys.basic.viewSqlMasterList.msg.addTitle', 'sys.basic.viewSqlMasterList.msg.editTitle',
  'sys.basic.viewSqlMasterList.msg.confirmDelete', 'sys.basic.viewSqlMasterList.msg.validateSqlNmRequired',
  'sys.basic.viewSqlMasterList.msg.validateSqlStmtRequired', 'sys.basic.viewSqlMasterList.msg.selectRowForExport',
  'sys.basic.viewSqlMasterList.param.title', 'sys.basic.viewSqlMasterList.param.btn.add',
  'sys.basic.viewSqlMasterList.param.col.param', 'sys.basic.viewSqlMasterList.param.col.type',
  'sys.basic.viewSqlMasterList.param.col.desc', 'sys.basic.viewSqlMasterList.param.col.defaultVal',
  'sys.basic.viewSqlMasterList.param.col.useYn',
  'sys.basic.viewSqlMasterList.export.title', 'sys.basic.viewSqlMasterList.export.noParams',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

interface SqlMasterForm {
  sqlSeq: string | null;
  pgmNm: string | null;
  sqlNm: string;
  sqlDesc: string;
  sqlStmt: string;
  useYn: boolean;
  params: SqlParamRow[];
}

const EMPTY_FORM: SqlMasterForm = {
  sqlSeq: null, pgmNm: null, sqlNm: '', sqlDesc: '', sqlStmt: '', useYn: true, params: [],
};

/**
 * Quản lý truy vấn SQL tự động xuất Excel (SY_SQL_MASTER / SY_SQL_PARAM) - bản Angular tương tự
 * disc-sql-master-list (HAE-VHR), theo cấu trúc màn hình sy.basicMaintenance hiện có của HVV-VHR
 * (xem ViewMenuListComponent). "Thêm mới" hoặc bấm vào Tên truy vấn mở modal Thêm/Sửa (nhập câu
 * lệnh SQL + danh sách tham số). Chọn 1 dòng (radio) rồi bấm "Xuất Excel" mở modal nhập giá trị
 * tham số, server thực thi trực tiếp SQL_STMT đã lưu và trả về file .xlsx (xem SySqlMasterService -
 * không thể xuất client-side như ViewMenuListComponent vì câu lệnh SQL và dữ liệu chỉ server biết).
 */
@Component({
  selector: 'app-view-sql-master-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzSwitchModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './view-sql-master-list.component.html',
  styleUrl: './view-sql-master-list.component.css',
})
export class ViewSqlMasterListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly pgmOptions = SQL_MASTER_PGM_OPTIONS;
  readonly paramTypeOptions = SQL_PARAM_TYPE_OPTIONS;

  readonly rows = signal<SqlMasterRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly selectedSqlSeq = signal<string | null>(null);

  searchKeyword = '';
  searchPgmNm: string | null = null;

  // ── Modal Thêm mới / Cập nhật ──
  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('sys.basic.viewSqlMasterList.msg.addTitle', 'Thêm mới truy vấn SQL')
      : this.i18n.t('sys.basic.viewSqlMasterList.msg.editTitle', 'Cập nhật truy vấn SQL'),
  );
  form: SqlMasterForm = { ...EMPTY_FORM };

  // ── Modal xác nhận xóa ──
  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: SqlMasterRow | null = null;

  // ── Modal nhập tham số trước khi xuất Excel ──
  readonly exportVisible = signal(false);
  readonly exportParams = signal<SqlParamRow[]>([]);
  readonly exportValues: Record<string, string> = {};
  private exportSqlSeq = '';

  constructor(
    private readonly api: ViewSqlMasterListService,
    protected readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchKeyword, this.searchPgmNm).subscribe({
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

  clearSearch(): void {
    this.searchKeyword = '';
    this.searchPgmNm = null;
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM, params: [] };
    this.modalVisible.set(true);
  }

  openEditModal(row: SqlMasterRow): void {
    if (!row.sqlSeq) return;
    this.loading.set(true);
    this.api.detail(row.sqlSeq).subscribe({
      next: (detail) => {
        this.loading.set(false);
        this.isNew.set(false);
        this.form = {
          sqlSeq: detail.sqlSeq ?? null,
          pgmNm: detail.pgmNm,
          sqlNm: detail.sqlNm,
          sqlDesc: detail.sqlDesc ?? '',
          sqlStmt: detail.sqlStmt ?? '',
          useYn: detail.useYn !== 'N',
          params: detail.params ?? [],
        };
        this.modalVisible.set(true);
      },
      error: () => {
        this.loading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  addParamRow(): void {
    this.form.params = [
      ...this.form.params,
      { param: '', paramDesc: '', sqlParamTp: 'VARCHAR2', defaultVal: '', useYn: 'Y' },
    ];
  }

  removeParamRow(index: number): void {
    this.form.params = this.form.params.filter((_, i) => i !== index);
  }

  saveForm(): void {
    if (!this.form.sqlNm.trim()) {
      this.message.warning(
        this.i18n.t('sys.basic.viewSqlMasterList.msg.validateSqlNmRequired', 'Vui lòng nhập Tên truy vấn!'),
      );
      return;
    }
    if (!this.form.sqlStmt.trim()) {
      this.message.warning(
        this.i18n.t('sys.basic.viewSqlMasterList.msg.validateSqlStmtRequired', 'Vui lòng nhập câu lệnh SQL!'),
      );
      return;
    }
    this.saving.set(true);
    this.api
      .save({
        sqlSeq: this.form.sqlSeq ?? undefined,
        pgmNm: this.form.pgmNm,
        sqlNm: this.form.sqlNm.trim(),
        sqlDesc: this.form.sqlDesc,
        sqlStmt: this.form.sqlStmt.trim(),
        useYn: this.form.useYn ? 'Y' : 'N',
        params: this.form.params,
      })
      .subscribe({
        next: (res) => {
          this.saving.set(false);
          if (res.success) {
            this.modalVisible.set(false);
            this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
            this.search();
          } else {
            this.message.error(res.message || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
          }
        },
        error: () => {
          this.saving.set(false);
          this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
        },
      });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: SqlMasterRow): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget?.sqlNm ?? '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.sqlSeq) return;
    const sqlSeq = this.deleteTarget.sqlSeq;
    this.deleting.set(true);
    this.api.delete(sqlSeq).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
          if (this.selectedSqlSeq() === sqlSeq) {
            this.selectedSqlSeq.set(null);
          }
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  openExportModal(): void {
    const sqlSeq = this.selectedSqlSeq();
    if (!sqlSeq) {
      this.message.warning(
        this.i18n.t('sys.basic.viewSqlMasterList.msg.selectRowForExport', 'Vui lòng chọn một truy vấn để xuất Excel'),
      );
      return;
    }
    this.api.detail(sqlSeq).subscribe({
      next: (detail) => {
        this.exportSqlSeq = sqlSeq;
        const activeParams = (detail.params || []).filter((p) => p.useYn !== 'N');
        this.exportParams.set(activeParams);
        Object.keys(this.exportValues).forEach((k) => delete this.exportValues[k]);
        activeParams.forEach((p) => (this.exportValues[p.param] = p.defaultVal ?? ''));
        this.exportVisible.set(true);
      },
      error: () => {
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeExportModal(): void {
    this.exportVisible.set(false);
  }

  confirmExport(): void {
    const url = this.api.buildExportUrl(this.exportSqlSeq, this.exportValues);
    window.location.href = url;
    this.exportVisible.set(false);
  }
}
