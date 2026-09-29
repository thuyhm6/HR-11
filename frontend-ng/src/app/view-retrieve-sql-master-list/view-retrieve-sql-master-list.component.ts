import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AUTO_EXCEL_EDITABLE_MODULES,
  AUTO_EXCEL_MODULES,
  AutoExcelMaster,
} from './view-retrieve-sql-master-list.model';
import { ViewRetrieveSqlMasterListService } from './view-retrieve-sql-master-list.service';
import { AutoExcelEditModalComponent } from './auto-excel-edit-modal.component';
import { AutoExcelParamModalComponent } from './auto-excel-param-modal.component';
import { AutoExcelRunModalComponent } from './auto-excel-run-modal.component';

/** Key message.properties của trang này + 3 modal con - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.search', 'common.clearFilter', 'common.addNew', 'common.edit', 'common.delete', 'common.save',
  'common.cancel', 'common.close', 'common.confirm', 'common.action', 'common.status', 'common.exportExcel',
  'common.loadFail', 'common.totalRows', 'common.saveSuccess', 'common.deleteSuccess', 'common.placeholder.select',
  'pa.salary.canShu.faRen', 'hrm.empinfo.REPORT_NAME.Z', 'sys.basic.title.createDate', 'inct.salesman.updateTime',
  'sys.arAffirmPost.title.able', 'sys.arAffirmPost.title.enable',
  'disc.autoExcel.SQL_NO.Z', 'disc.autoExcel.SQL_MODULE.Z', 'disc.autoExcel.SQL_NAME.Z', 'disc.autoExcel.SQL_CONTENT.Z',
  'disc.autoExcel.PARAMETER.Z', 'disc.autoExcel.PARAMETER_TYPE.Z', 'disc.autoExcel.ENGLISH_DESCRIPTION.Z',
  'disc.autoExcel.VIETNAMESE_DESCRIPTION.Z',
  'ar.viewRetrieveSqlMasterList.XINJIANBAOBIAO.b', 'ar.viewRetrieveSqlMasterList.BAOBIAOXIUGAI.b',
  'ar.viewRetrieveSqlMasterList.BAOBIAOCANSHUXIUGAI.b', 'ar.viewRetrieveSqlMasterList.SHUJUDAOCHU.b',
  'ar.viewRetrieveSqlMasterList.MIAOSHU.b', 'ar.viewRetrieveSqlMasterList.PAIXUHAO.b',
  'ar.viewRetrieveSqlMasterList.QUEDINGYAOSHANCHUMA.b',
  ...AUTO_EXCEL_MODULES.map((m) => `autoExcel.module.${m}`),
  'autoExcel.col.special', 'autoExcel.col.sqlFrom', 'autoExcel.tag.system', 'autoExcel.search.namePlaceholder',
  'autoExcel.hint.params', 'autoExcel.hint.special', 'autoExcel.hint.noParams',
  'autoExcel.msg.chooseModule', 'autoExcel.msg.enterName', 'autoExcel.msg.invalidOrder', 'autoExcel.msg.enterSql',
  'autoExcel.msg.saveFail', 'autoExcel.msg.deleteFail', 'autoExcel.msg.noData', 'autoExcel.msg.executeFail',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/**
 * Bản Angular của /disc/autoExcel/viewRetrieveSqlMasterList (JSP + DWZ, dự án Hanwha_HTSV) - Báo cáo SQL tự xuất Excel
 * (SYS_SQL_MASTER / SYS_PARAM_BY_SQL). Đọc query string của menu như bản gốc:
 * - PGM_NM: lọc danh sách theo module (menu Lương/Chấm công/Nhân viên...).
 * - PGM_NMurl: module được chọn khi thêm mới (ALL = mọi module).
 * - POWER_FOR: có giá trị = menu chỉ cho chạy báo cáo (ẩn Thêm/Sửa/Xóa/Tham số).
 * Thêm/Sửa/Tham số/Xóa còn yêu cầu quyền ADMIN/SYS (API /disc/autoExcel/api/permission).
 */
@Component({
  selector: 'app-view-retrieve-sql-master-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzTagModule,
    NzAlertModule,
    NzModalModule,
    TranslatePipe,
    AutoExcelEditModalComponent,
    AutoExcelParamModalComponent,
    AutoExcelRunModalComponent,
  ],
  templateUrl: './view-retrieve-sql-master-list.component.html',
})
export class ViewRetrieveSqlMasterListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<AutoExcelMaster[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly hasEditRole = signal(false);
  readonly runOnly = signal(false);
  /** Module lọc cố định theo menu (query PGM_NM). */
  readonly pgmNm = signal<string | null>(null);
  readonly pgmNmUrl = signal<string | null>(null);

  readonly canEdit = computed(() => this.hasEditRole() && !this.runOnly());
  readonly moduleOptions = computed(() => {
    const url = this.pgmNmUrl();
    if (url === 'ALL' || (!url && !this.pgmNm())) return AUTO_EXCEL_EDITABLE_MODULES;
    return [url || this.pgmNm()!];
  });

  readonly editVisible = signal(false);
  readonly editSqlSeq = signal<string | null>(null);
  readonly paramVisible = signal(false);
  readonly runVisible = signal(false);
  readonly targetSqlSeq = signal<string | null>(null);

  searchSqlSeq = '';
  searchSqlNm = '';

  constructor(
    private readonly api: ViewRetrieveSqlMasterListService,
    private readonly i18n: I18nService,
    private readonly modal: NzModalService,
    private readonly message: NzMessageService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getPermission().subscribe({
      next: (p) => this.hasEditRole.set(!!p?.canEdit),
      error: () => this.hasEditRole.set(false),
    });
    // Nhiều menu cùng trỏ vào route này với query khác nhau và TabRouteReuseStrategy giữ lại instance theo path -
    // phải lắng nghe queryParamMap (như RegPersonalTargetComponent) thay vì chỉ đọc 1 lần.
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((q) => {
      this.pgmNm.set(q.get('PGM_NM') || null);
      this.pgmNmUrl.set(q.get('PGM_NMurl') || null);
      this.runOnly.set(!!q.get('POWER_FOR'));
      this.search();
    });
  }

  moduleLabel(code: string | null): string {
    return code ? this.i18n.t(`autoExcel.module.${code}`, code) : '';
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({ pgmNm: this.pgmNm(), sqlSeq: this.searchSqlSeq.trim() || null, sqlNm: this.searchSqlNm.trim() || null })
      .subscribe({
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
    this.searchSqlSeq = '';
    this.searchSqlNm = '';
    this.search();
  }

  // ==================== Modal ====================

  openAdd(): void {
    this.editSqlSeq.set(null);
    this.editVisible.set(true);
  }

  openEdit(row: AutoExcelMaster): void {
    this.editSqlSeq.set(row.sqlSeq);
    this.editVisible.set(true);
  }

  openParams(row: AutoExcelMaster): void {
    this.targetSqlSeq.set(row.sqlSeq);
    this.paramVisible.set(true);
  }

  openRun(row: AutoExcelMaster): void {
    this.targetSqlSeq.set(row.sqlSeq);
    this.runVisible.set(true);
  }

  onEditSaved(): void {
    this.editVisible.set(false);
    this.search();
  }

  onParamSaved(): void {
    this.paramVisible.set(false);
  }

  // ==================== Xóa ====================

  confirmDelete(row: AutoExcelMaster): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: `${t('ar.viewRetrieveSqlMasterList.QUEDINGYAOSHANCHUMA.b', 'Đồng ý xóa không?')} [${row.sqlSeq}] ${row.sqlNm}`,
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row),
    });
  }

  private doDelete(row: AutoExcelMaster): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api.delete(row.sqlSeq).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(res.message || t('common.deleteSuccess', 'Xóa thành công!'));
          this.search();
        } else {
          this.message.error(res.message || t('autoExcel.msg.deleteFail', 'Xóa thất bại!'));
        }
      },
      error: (err) => this.message.error(err?.error?.message || t('autoExcel.msg.deleteFail', 'Xóa thất bại!')),
    });
  }
}
