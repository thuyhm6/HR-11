import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
import { ArAffirmPostRow } from '../view-ar-affirm-post-list/view-ar-affirm-post-list.model';
import { ViewArAffirmPostListService } from '../view-ar-affirm-post-list/view-ar-affirm-post-list.service';
import {
  AffirmKind,
  HrmAffirmEmpType,
  HrmAffirmLevelOption,
  HrmAffirmPayload,
  HrmAffirmRow,
} from './view-hrm-affirm-list.model';
import { ViewHrmAffirmListService } from './view-hrm-affirm-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'sys.affirm.title.applyType', 'alert.message.sys.arAffirm.pleaseChooseApplyType', 'vaap.col.duty',
  'common.search', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.cancel', 'common.confirm',
  'common.action', 'common.selectAll', 'common.placeholder.select', 'common.loadFail', 'common.totalRows',
  'common.saveSuccess', 'common.deleteSuccess',
  'vhal.col.empType', 'vhal.col.affirmLength', 'vhal.col.lowLevel', 'vhal.col.highLevel',
  'vhal.all', 'vhal.empType.G', 'vhal.empType.O', 'vhal.modal.addTitle', 'vhal.modal.editTitle',
  'vhal.msg.chooseEmpType', 'vhal.msg.chooseDuty', 'vhal.msg.enterAffirmLength', 'vhal.msg.invalidAffirmLength',
  'vhal.msg.chooseLowLevel', 'vhal.msg.chooseHighLevel', 'vhal.msg.levelRange', 'vhal.msg.exists',
  'vhal.msg.notFound', 'vhal.msg.confirmDelete', 'vhal.msg.saveFail', 'vhal.msg.deleteFail',
  'sys.affirm.title.startLength', 'sys.affirm.title.endLength', 'vaal.hint.lengthRange',
  'vaal.msg.enterStartLength', 'vaal.msg.enterEndLength', 'vaal.msg.invalidLength', 'vaal.msg.lengthRange',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

/** Giá trị "Tất cả" dùng chung cho EMP_TYPE và DUTY_NO (giữ nguyên quy ước 'Q' của bản gốc). */
const ALL_VALUE = 'Q';

interface HrmAffirmForm {
  applyParamNo: number | null;
  applyType: string | null;
  empType: HrmAffirmEmpType;
  dutyNo: string;
  affirmLevel: number | null;
  lowLevel: number | null;
  highLevel: number | null;
  fromOffset: number | null;
  toOffset: number | null;
}

/**
 * Bản Angular dùng chung cho 2 trang JSP + DWZ (dự án Hanwha_HTSV) cùng thao tác bảng ESS_LEAVE_APPLY_PARAM, phân biệt
 * bằng route data `affirmKind` (xem app.routes.ts):
 * - 'pa': /sys/hrmAffirm/viewHrmAffirmList - Quy trình phê duyệt khác.
 * - 'ar': /sys/arAffirm/viewArAffirmList - Quy trình phê duyệt chấm công, có thêm Độ dài bắt đầu/kết thúc
 *   (khoảng độ dài đơn áp dụng tuyến duyệt).
 * Theo loại đơn + loại nhân viên + vai trò người đăng ký, cấu hình độ dài tuyến duyệt và khoảng cấp duyệt thấp
 * nhất..cao nhất (cấp lấy từ màn hình Cấu hình vai trò người duyệt). Thêm/Sửa dùng chung 1 nz-modal.
 */
@Component({
  selector: 'app-view-hrm-affirm-list',
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
  templateUrl: './view-hrm-affirm-list.component.html',
})
export class ViewHrmAffirmListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly allValue = ALL_VALUE;
  readonly kind: AffirmKind;

  readonly rows = signal<HrmAffirmRow[]>([]);
  readonly applyTypes = signal<CodeItem[]>([]);
  readonly dutyOptions = signal<CodeItem[]>([]);
  readonly levelRows = signal<ArAffirmPostRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);

  /** Gộp các vai trò cùng cấp thành 1 lựa chọn, sắp theo cấp tăng dần. */
  readonly levelOptions = computed<HrmAffirmLevelOption[]>(() => {
    const byLevel = new Map<number, string[]>();
    for (const r of this.levelRows()) {
      const names = byLevel.get(r.affirmLevel) ?? [];
      names.push(r.dutyName || r.duty);
      byLevel.set(r.affirmLevel, names);
    }
    return Array.from(byLevel.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([level, names]) => ({ level, label: `${level} - ${names.join(', ')}` }));
  });

  searchApplyType: string | null = null;
  form: HrmAffirmForm = this.emptyForm();

  constructor(
    private readonly api: ViewHrmAffirmListService,
    private readonly affirmPostApi: ViewArAffirmPostListService,
    private readonly i18n: I18nService,
    private readonly modal: NzModalService,
    private readonly message: NzMessageService,
    route: ActivatedRoute,
  ) {
    this.kind = route.snapshot.data['affirmKind'] === 'ar' ? 'ar' : 'pa';
  }

  get isEdit(): boolean {
    return this.form.applyParamNo !== null;
  }

  /** Quy trình chấm công ('ar') có thêm khoảng độ dài đơn. */
  get hasLengthRange(): boolean {
    return this.kind === 'ar';
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getApplyTypes(this.kind).subscribe({ next: (l) => this.applyTypes.set(l), error: () => this.applyTypes.set([]) });
    this.affirmPostApi.getDutyOptions().subscribe({ next: (l) => this.dutyOptions.set(l ?? []), error: () => this.dutyOptions.set([]) });
    this.affirmPostApi.getList().subscribe({ next: (l) => this.levelRows.set(l ?? []), error: () => this.levelRows.set([]) });
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList(this.kind, this.searchApplyType).subscribe({
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

  empTypeLabel(empType: HrmAffirmEmpType): string {
    if (empType === 'G') return this.i18n.t('vhal.empType.G', 'Quản lý');
    if (empType === 'O') return this.i18n.t('vhal.empType.O', 'Khác');
    return this.i18n.t('vhal.all', 'Tất cả');
  }

  dutyLabel(row: HrmAffirmRow): string {
    return row.dutyNo === ALL_VALUE ? this.i18n.t('vhal.all', 'Tất cả') : row.dutyName || row.dutyNo;
  }

  // ==================== Thêm / Sửa ====================

  openAdd(): void {
    this.form = this.emptyForm();
    // Mặc định giống addHrmAffirmView.jsp: cấp thấp nhất = cấp đầu tiên, cấp cao nhất = cấp cuối cùng
    const levels = this.levelOptions();
    this.form.lowLevel = levels.length ? levels[0].level : null;
    this.form.highLevel = levels.length ? levels[levels.length - 1].level : null;
    this.form.applyType = this.searchApplyType;
    this.modalVisible.set(true);
  }

  openEdit(row: HrmAffirmRow): void {
    this.form = {
      applyParamNo: row.applyParamNo,
      applyType: row.applyType,
      empType: row.empType || ALL_VALUE,
      dutyNo: row.dutyNo || ALL_VALUE,
      affirmLevel: row.affirmLevel,
      lowLevel: row.lowLevel,
      highLevel: row.highLevel,
      fromOffset: row.fromOffset ?? 0,
      toOffset: row.toOffset ?? 0,
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  save(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const f = this.form;
    const warn = (key: string, fallback: string) => {
      this.message.warning(t(key, fallback));
      return false;
    };
    const valid =
      (!!f.applyType || warn('alert.message.sys.arAffirm.pleaseChooseApplyType', 'Vui lòng chọn loại đơn!')) &&
      (!this.hasLengthRange || f.fromOffset !== null || warn('vaal.msg.enterStartLength', 'Vui lòng nhập độ dài bắt đầu!')) &&
      (!this.hasLengthRange || f.toOffset !== null || warn('vaal.msg.enterEndLength', 'Vui lòng nhập độ dài kết thúc!')) &&
      (!this.hasLengthRange || f.fromOffset! <= f.toOffset! ||
        warn('vaal.msg.lengthRange', 'Độ dài bắt đầu không được lớn hơn độ dài kết thúc!')) &&
      (f.affirmLevel !== null || warn('vhal.msg.enterAffirmLength', 'Vui lòng nhập độ dài tuyến duyệt!')) &&
      (f.lowLevel !== null || warn('vhal.msg.chooseLowLevel', 'Vui lòng chọn cấp duyệt thấp nhất!')) &&
      (f.highLevel !== null || warn('vhal.msg.chooseHighLevel', 'Vui lòng chọn cấp duyệt cao nhất!')) &&
      (f.lowLevel! <= f.highLevel! || warn('vhal.msg.levelRange', 'Cấp duyệt thấp nhất không được lớn hơn cấp duyệt cao nhất!'));
    if (!valid) return;

    const payload: HrmAffirmPayload = {
      applyParamNo: f.applyParamNo,
      applyType: f.applyType!,
      empType: f.empType,
      dutyNo: f.dutyNo,
      affirmLevel: f.affirmLevel!,
      lowLevel: f.lowLevel!,
      highLevel: f.highLevel!,
      ...(this.hasLengthRange ? { fromOffset: f.fromOffset!, toOffset: f.toOffset! } : {}),
    };
    const request$ = this.isEdit ? this.api.update(this.kind, payload) : this.api.add(this.kind, payload);

    this.saving.set(true);
    request$.subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message || t('common.saveSuccess', 'Lưu thành công!'));
          this.modalVisible.set(false);
          this.search();
        } else {
          this.message.error(res.message || t('vhal.msg.saveFail', 'Lưu thất bại!'));
        }
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || t('vhal.msg.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa ====================

  confirmDelete(row: HrmAffirmRow): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: `${t('vhal.msg.confirmDelete', 'Bạn có chắc muốn xóa quy trình phê duyệt này?')} ${row.applyName} - ${this.empTypeLabel(row.empType)} - ${this.dutyLabel(row)}`,
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row),
    });
  }

  private doDelete(row: HrmAffirmRow): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api.delete(this.kind, row.applyParamNo).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(res.message || t('common.deleteSuccess', 'Xóa thành công!'));
          this.search();
        } else {
          this.message.error(res.message || t('vhal.msg.deleteFail', 'Xóa thất bại!'));
        }
      },
      error: (err) => this.message.error(err?.error?.message || t('vhal.msg.deleteFail', 'Xóa thất bại!')),
    });
  }

  private emptyForm(): HrmAffirmForm {
    return {
      applyParamNo: null,
      applyType: null,
      empType: ALL_VALUE,
      dutyNo: ALL_VALUE,
      affirmLevel: 0,
      lowLevel: null,
      highLevel: null,
      // Mặc định giống addArAffirmView.jsp
      fromOffset: 0,
      toOffset: 0,
    };
  }
}
