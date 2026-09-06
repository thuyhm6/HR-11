import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EvsResumeOption, EvsScoreDto, EvsScoreSavePayload } from './evs-distribution-rate-panel.model';
import { EvsDistributionRatePanelService } from './evs-distribution-rate-panel.service';

/** Các key message.properties dùng trong trang này - toàn bộ key evs.manage.viewEvsDistributionRatePanel.*
 *  đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới - xem CLAUDE.md mục 3). Tải trước 1 lần ở
 *  ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'evs.manage.viewEvsDistributionRatePanel.search.evaluationName', 'evs.manage.viewEvsDistributionRatePanel.search.type',
  'evs.manage.viewEvsDistributionRatePanel.search.allOption', 'evs.manage.viewEvsDistributionRatePanel.search.status',
  'evs.manage.viewEvsDistributionRatePanel.search.active', 'evs.manage.viewEvsDistributionRatePanel.search.inactive',
  'evs.manage.viewEvsDistributionRatePanel.btn.search', 'evs.manage.viewEvsDistributionRatePanel.btn.clearFilter',
  'evs.manage.viewEvsDistributionRatePanel.btn.addNew', 'evs.manage.viewEvsDistributionRatePanel.col.no',
  'evs.manage.viewEvsDistributionRatePanel.col.type', 'evs.manage.viewEvsDistributionRatePanel.col.orderNo',
  'evs.manage.viewEvsDistributionRatePanel.col.name', 'evs.manage.viewEvsDistributionRatePanel.col.status',
  'evs.manage.viewEvsDistributionRatePanel.col.action', 'evs.manage.viewEvsDistributionRatePanel.modal.addTitle',
  'evs.manage.viewEvsDistributionRatePanel.modal.editTitle', 'evs.manage.viewEvsDistributionRatePanel.modal.type',
  'evs.manage.viewEvsDistributionRatePanel.modal.selectOption', 'evs.manage.viewEvsDistributionRatePanel.modal.status',
  'evs.manage.viewEvsDistributionRatePanel.modal.activeLabel', 'evs.manage.viewEvsDistributionRatePanel.modal.orderNo',
  'evs.manage.viewEvsDistributionRatePanel.modal.name', 'evs.manage.viewEvsDistributionRatePanel.modal.deptCode',
  'evs.manage.viewEvsDistributionRatePanel.modal.deptName', 'evs.manage.viewEvsDistributionRatePanel.modal.gradeCode',
  'evs.manage.viewEvsDistributionRatePanel.modal.gradeName', 'evs.manage.viewEvsDistributionRatePanel.modal.ratioLabel',
  'evs.manage.viewEvsDistributionRatePanel.modal.auditInfo', 'evs.manage.viewEvsDistributionRatePanel.modal.deleteTitle',
  'evs.manage.viewEvsDistributionRatePanel.modal.deleteConfirm', 'evs.manage.viewEvsDistributionRatePanel.msg.sumWarning',
  'evs.manage.viewEvsDistributionRatePanel.msg.loadError', 'evs.manage.viewEvsDistributionRatePanel.msg.selectType',
  'evs.manage.viewEvsDistributionRatePanel.msg.enterName', 'evs.manage.viewEvsDistributionRatePanel.msg.sumError',
  'evs.manage.viewEvsDistributionRatePanel.msg.saveError', 'evs.manage.viewEvsDistributionRatePanel.msg.deleteError',
  'evs.manage.viewEvsDistributionRatePanel.badge.active', 'evs.manage.viewEvsDistributionRatePanel.badge.inactive',
  'evs.manage.viewEvsDistributionRatePanel.btn.edit', 'evs.manage.viewEvsDistributionRatePanel.btn.delete',
  'common.close', 'common.save', 'common.cancel', 'common.stt', 'common.action', 'common.noData', 'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
const SCORE_TYPES = ['CPNY', 'DEPT', 'EMP'];

interface ScoreForm {
  seq: string | null;
  scoreType: string | null;
  no: string;
  name: string;
  deptNo: string;
  deptName: string;
  postGradeNo: string;
  postGradeName: string;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  activity: boolean;
  updatedBy: string | null;
  updateDate: string | null;
}

const EMPTY_FORM: ScoreForm = {
  seq: null, scoreType: null, no: '', name: '', deptNo: '', deptName: '', postGradeNo: '', postGradeName: '',
  a: 0, b: 0, c: 0, d: 0, e: 0, activity: true, updatedBy: null, updateDate: null,
};

/**
 * Bản Angular của evs/manage/viewEvsDistributionRatePanel.html (Thymeleaf + jQuery DataTables) - Tỷ lệ
 * phân bổ đánh giá theo cấp (bảng EVS_SCORE, 5 mức EX/VG/GD/NI/UN ứng cột A-E, tổng phải bằng 100). Gọi
 * lại nguyên API JSON đã có sẵn ở EvsManageController (xem EvsDistributionRatePanelService) - không đổi
 * backend. Dùng nz-table phân trang client-side (đúng hành vi DataTables gốc: BE trả toàn bộ danh sách
 * theo bộ lọc resumeSeq/scoreType/activity, không phân trang server - tham khảo EvsResumeListComponent)
 * thay cho jQuery DataTables; nz-modal thay modal Bootstrap; click cả dòng để mở sửa (đúng createdRow
 * onclick ở bản gốc) - nút Sửa/Xóa trong dòng phải stopPropagation để không mở nhầm modal sửa khi bấm Xóa.
 *
 * SUM hiển thị ở bảng lấy trực tiếp từ field `sum` do BE tính sẵn (A+B+C+D+E, xem EvsScoreMapper.xml);
 * SUM hiển thị trong modal (badge xanh/đỏ + dòng cảnh báo) tính lại real-time phía client từ 5 ô đang
 * nhập (formSum getter) vì BE chưa lưu giá trị đang gõ dở - đúng vedrCalcSum() ở bản gốc. Khi chọn Loại
 * = CPNY tự điền NO/Tên = "CPNY" (đúng quirk của bản gốc, giữ nguyên hành vi).
 */
@Component({
  selector: 'app-evs-distribution-rate-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzSwitchModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './evs-distribution-rate-panel.component.html',
  styleUrl: './evs-distribution-rate-panel.component.css',
})
export class EvsDistributionRatePanelComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly scoreTypes = SCORE_TYPES;

  private evsType = '';
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  resumeSeq: string | null = null;
  searchScoreType: string | null = null;
  searchActivity: string | null = null;

  readonly rows = signal<EvsScoreDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('evs.manage.viewEvsDistributionRatePanel.modal.addTitle', 'Thêm mới tỷ lệ phân bổ')
      : this.i18n.t('evs.manage.viewEvsDistributionRatePanel.modal.editTitle', 'Chỉnh sửa tỷ lệ phân bổ'),
  );
  form: ScoreForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: EvsScoreDto | null = null;

  constructor(
    private readonly api: EvsDistributionRatePanelService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get('evsType') ?? '';
      this.loadResumeOptions();
    });
  }

  private loadResumeOptions(): void {
    this.api.getResumeList(this.evsType).subscribe({
      next: (rows) => {
        this.resumeOptions.set(rows ?? []);
        if (rows && rows.length) {
          this.resumeSeq = rows[0].seq;
          this.search();
        }
      },
      error: () => this.resumeOptions.set([]),
    });
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList(this.resumeSeq ?? '', this.searchScoreType ?? '', this.searchActivity ?? '', this.evsType).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('evs.manage.viewEvsDistributionRatePanel.msg.loadError', 'Lỗi khi tải thông tin tỷ lệ phân bổ.'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.resumeSeq = this.resumeOptions()[0]?.seq ?? null;
    this.searchScoreType = null;
    this.searchActivity = null;
    this.search();
  }

  activityTagColor(activity: string | null): string {
    return activity === '1' ? 'success' : 'default';
  }

  rowSumOk(row: EvsScoreDto): boolean {
    return Math.abs((Number(row.sum) || 0) - 100) < 0.001;
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: EvsScoreDto): void {
    this.api.getOne(row.seq).subscribe({
      next: (r) => {
        if (!r) return;
        this.isNew.set(false);
        this.form = {
          seq: r.seq,
          scoreType: r.scoreType || null,
          no: r.no || '',
          name: r.name || '',
          deptNo: r.deptNo || '',
          deptName: r.deptName || '',
          postGradeNo: r.postGradeNo || '',
          postGradeName: r.postGradeName || '',
          a: Number(r.a) || 0,
          b: Number(r.b) || 0,
          c: Number(r.c) || 0,
          d: Number(r.d) || 0,
          e: Number(r.e) || 0,
          activity: r.activity === '1',
          updatedBy: r.updatedBy || null,
          updateDate: r.updateDate || null,
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('evs.manage.viewEvsDistributionRatePanel.msg.loadError', 'Lỗi khi tải thông tin tỷ lệ phân bổ.')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  onScoreTypeChange(value: string | null): void {
    this.form.scoreType = value;
    if (value === 'CPNY') {
      this.form.no = 'CPNY';
      this.form.name = 'CPNY';
    }
  }

  get formSum(): number {
    const sum = (Number(this.form.a) || 0) + (Number(this.form.b) || 0) + (Number(this.form.c) || 0)
      + (Number(this.form.d) || 0) + (Number(this.form.e) || 0);
    return Math.round(sum * 100) / 100;
  }

  get formSumOk(): boolean {
    return Math.abs(this.formSum - 100) < 0.001;
  }

  saveForm(): void {
    if (!this.form.scoreType) {
      this.message.warning(this.i18n.t('evs.manage.viewEvsDistributionRatePanel.msg.selectType', 'Vui lòng chọn Loại.'));
      return;
    }
    const name = this.form.name.trim();
    if (!name) {
      this.message.warning(this.i18n.t('evs.manage.viewEvsDistributionRatePanel.msg.enterName', 'Vui lòng nhập Tên.'));
      return;
    }
    const sum = this.formSum;
    if (!this.formSumOk) {
      this.message.warning(
        this.i18n.t('evs.manage.viewEvsDistributionRatePanel.msg.sumError', 'Tổng tỷ lệ phân bổ (EX+VG+GD+NI+UN) phải bằng 100. Giá trị hiện tại:') + ' ' + sum,
      );
      return;
    }
    if (!this.resumeSeq) return;

    const payload: EvsScoreSavePayload = {
      seq: this.form.seq,
      resumeSeq: this.resumeSeq,
      scoreType: this.form.scoreType,
      no: this.form.no,
      name,
      deptNo: this.form.deptNo,
      deptName: this.form.deptName,
      postGradeNo: this.form.postGradeNo,
      postGradeName: this.form.postGradeName,
      a: Number(this.form.a) || 0,
      b: Number(this.form.b) || 0,
      c: Number(this.form.c) || 0,
      d: Number(this.form.d) || 0,
      e: Number(this.form.e) || 0,
      activity: this.form.activity ? '1' : '0',
    };

    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('evs.manage.viewEvsDistributionRatePanel.msg.saveError', 'Lỗi khi lưu dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: EvsScoreDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteConfirmMessage(): string {
    const template = this.i18n.t('evs.manage.viewEvsDistributionRatePanel.modal.deleteConfirm', 'Bạn có chắc muốn xóa tỷ lệ "{0}"?');
    return template.replace('{0}', this.deleteTarget?.name ?? '');
  }

  confirmDelete(): void {
    if (!this.deleteTarget) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.seq).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('evs.manage.viewEvsDistributionRatePanel.msg.deleteError', 'Lỗi khi xóa dữ liệu. Vui lòng thử lại.'));
      },
    });
  }
}
