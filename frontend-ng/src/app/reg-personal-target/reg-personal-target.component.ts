import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EvsPersonalTargetInfo, EvsResumeOption, ItemRowVm } from './reg-personal-target.model';
import { RegPersonalTargetService } from './reg-personal-target.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key evs.viewRegPersonalTarget.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới). */
const I18N_KEYS = [
  'evs.viewRegPersonalTarget.evalName', 'evs.viewRegPersonalTarget.btnSearch',
  'evs.viewRegPersonalTarget.personalInfo', 'evs.viewRegPersonalTarget.basicInfo',
  'evs.viewRegPersonalTarget.evalCategory', 'evs.viewRegPersonalTarget.fullName',
  'evs.viewRegPersonalTarget.position', 'evs.viewRegPersonalTarget.dept',
  'evs.viewRegPersonalTarget.hireDate', 'evs.viewRegPersonalTarget.evalYear',
  'evs.viewRegPersonalTarget.period', 'evs.viewRegPersonalTarget.appraiser1',
  'evs.viewRegPersonalTarget.appraiser2', 'evs.viewRegPersonalTarget.objectiveConfirm',
  'evs.viewRegPersonalTarget.btnSaveDraft', 'evs.viewRegPersonalTarget.btnExecute',
  'evs.viewRegPersonalTarget.btnAddNew', 'evs.viewRegPersonalTarget.col.no',
  'evs.viewRegPersonalTarget.col.evalCategory', 'evs.viewRegPersonalTarget.col.target',
  'evs.viewRegPersonalTarget.col.ratio', 'evs.viewRegPersonalTarget.col.action',
  'evs.viewRegPersonalTarget.part2', 'evs.viewRegPersonalTarget.col.opinion',
  'evs.viewRegPersonalTarget.appraiser1Comment', 'evs.viewRegPersonalTarget.appraiser2Comment',
  'evs.viewRegPersonalTarget.msg.selectEvalFirst', 'evs.viewRegPersonalTarget.msg.noData',
  'evs.viewRegPersonalTarget.msg.saveDraftSuccess', 'evs.viewRegPersonalTarget.msg.executeSuccess',
  'evs.viewRegPersonalTarget.msg.saveFail', 'evs.viewRegPersonalTarget.msg.deleteFail',
  'evs.viewRegPersonalTarget.msg.confirmDelete', 'evs.viewRegPersonalTarget.msg.confirmExecute',
  'evs.viewRegPersonalTarget.msg.itemNameRequired', 'evs.viewRegPersonalTarget.msg.itemContentRequired',
  'evs.viewRegPersonalTarget.msg.totalNot100', 'evs.viewRegPersonalTarget.msg.unsavedRows',
  'evs.viewRegPersonalTarget.msg.itemScoreZero', 'evs.viewConfirmTarget1.msg.notInEvalPeriod',
  'common.select', 'common.confirm', 'common.cancel', 'common.stt', 'common.action', 'common.loadFail',
];

/** Cấp độ đăng ký đánh giá (evsLevel) khi lấy danh sách "Tên đánh giá" - đúng giá trị hardcode ở bản
 *  Thymeleaf gốc (14015066 = Đăng ký đánh giá). */
const EVS_LEVEL_REG = '14015066';

/** ACTIVITY cho phép chỉnh sửa mục tiêu - đúng giá trị hardcode ở bản Thymeleaf gốc
 *  (VRPT_EDITABLE_ACTIVITIES). */
const EDITABLE_ACTIVITIES = ['14015362', '14015354'];

/**
 * Bản Angular của evs/manage/viewRegPersonalTarget.html (Thymeleaf + jQuery + Quill) - Đăng ký mục
 * tiêu cá nhân. Gọi lại nguyên API JSON đã có sẵn ở EvsManageController (xem RegPersonalTargetService)
 * - không đổi backend. Dùng nz-table thay cho bảng HTML tự vẽ; dòng "Objective Confirm" hỗ trợ
 * thêm/sửa/xóa inline ngay trong bảng, theo đúng mẫu newRows/rows mutable object ở
 * ApplyAttendanceBatchInfoComponent (không dùng computed() cho tổng tỷ lệ vì mutate trực tiếp field
 * trên object không kích hoạt lại computed signal - tính lại thủ công qua recalcTotal() mỗi khi rows
 * đổi, giống hệt cách vrptUpdateTotal() được gọi thủ công ở bản gốc).
 *
 * Quill KHÔNG được nạp global trong bundle Angular (chỉ nạp cho các trang Thymeleaf cũ qua
 * layout/master.html - xem giới hạn đã ghi ở ExternalTabComponent), nên ô "Mục tiêu" dùng textarea
 * thường thay vì rich-text editor khi nhập; nội dung đã lưu trước đó (có thể chứa HTML từ Quill cũ)
 * vẫn hiển thị đúng định dạng qua [innerHTML] (được Angular tự sanitize).
 *
 * evsType lấy từ query param trên URL menu (bắt buộc phải có - EvsResumeMapper.selectEvsResumeList so
 * khớp EVS_TYPE tuyệt đối, không có nhánh rỗng) - đăng ký lắng nghe queryParamMap thay vì chỉ đọc
 * snapshot 1 lần, vì TabRouteReuseStrategy giữ nguyên instance component giữa các tab cùng route nên
 * ngOnInit không chạy lại nếu có tab khác cùng path nhưng khác evsType.
 */
@Component({
  selector: 'app-reg-personal-target',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzDescriptionsModule,
    TranslatePipe,
  ],
  templateUrl: './reg-personal-target.component.html',
  styleUrl: './reg-personal-target.component.css',
})
export class RegPersonalTargetComponent implements OnInit {
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  readonly noticeVisible = signal(false);
  readonly loading = signal(false);

  readonly personalInfo = signal<EvsPersonalTargetInfo | null>(null);
  readonly rows = signal<ItemRowVm[]>([]);
  readonly totalScore = signal(0);

  resumeSeq: string | null = null;
  private evsType = '';

  constructor(
    private readonly api: RegPersonalTargetService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get('evsType') ?? '';
      this.loadResumeList();
    });
  }

  get isEditable(): boolean {
    return EDITABLE_ACTIVITIES.includes(String(this.personalInfo()?.activity ?? ''));
  }

  get totalOk(): boolean {
    return this.totalScore() === 100;
  }

  private loadResumeList(): void {
    this.api.getResumeList(this.evsType, EVS_LEVEL_REG).subscribe({
      next: (rows) => {
        if (!rows || rows.length === 0) {
          this.noticeVisible.set(true);
          this.resumeOptions.set([]);
          return;
        }
        this.noticeVisible.set(false);
        this.resumeOptions.set(rows);
        this.resumeSeq = rows[0].seq;
        this.search();
      },
      error: () => this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  search(): void {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evs.viewRegPersonalTarget.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.loading.set(true);
    this.api.getObjectInfo(this.resumeSeq).subscribe({
      next: (data) => {
        this.loading.set(false);
        if (!data || !data.seq) {
          this.hideAll();
          this.message.warning(this.i18n.t('evs.viewRegPersonalTarget.msg.noData', 'Không tìm thấy thông tin.'));
          return;
        }
        this.personalInfo.set(data);
        this.loadItems(data.seq);
      },
      error: () => {
        this.loading.set(false);
        this.hideAll();
      },
    });
  }

  private hideAll(): void {
    this.personalInfo.set(null);
    this.rows.set([]);
    this.totalScore.set(0);
  }

  private loadItems(evsObjectSeq: string): void {
    this.api.getItemList(evsObjectSeq).subscribe({
      next: (list) => {
        this.rows.set(
          (list ?? []).map((r) => ({
            seq: r.seq,
            itemName: r.itemName,
            itemContent: r.itemContent || '',
            itemScore: Number(r.itemScore) || 0,
            isNew: false,
            editing: false,
          })),
        );
        this.recalcTotal();
      },
    });
  }

  private recalcTotal(): void {
    const total = this.rows().reduce((sum, r) => sum + (Number(r.itemScore) || 0), 0);
    this.totalScore.set(Math.round(total * 100) / 100);
  }

  onScoreInput(): void {
    this.recalcTotal();
  }

  // ==================== Thêm mới / sửa inline / xóa dòng ====================

  addRow(): void {
    this.rows.update((rows) => [...rows, { seq: null, itemName: '', itemContent: '', itemScore: 0, isNew: true, editing: true }]);
    this.recalcTotal();
  }

  rowClick(row: ItemRowVm): void {
    if (!this.isEditable || row.isNew || row.editing) return;
    this.startEdit(row);
  }

  private editSnapshots = new Map<ItemRowVm, { itemName: string; itemContent: string; itemScore: number }>();

  private startEdit(row: ItemRowVm): void {
    this.editSnapshots.set(row, { itemName: row.itemName, itemContent: row.itemContent, itemScore: row.itemScore });
    row.editing = true;
  }

  cancelEdit(row: ItemRowVm): void {
    if (row.isNew) {
      this.removeRow(row);
      return;
    }
    const snapshot = this.editSnapshots.get(row);
    if (snapshot) {
      row.itemName = snapshot.itemName;
      row.itemContent = snapshot.itemContent;
      row.itemScore = snapshot.itemScore;
      this.editSnapshots.delete(row);
    }
    row.editing = false;
    this.recalcTotal();
  }

  private removeRow(row: ItemRowVm): void {
    this.rows.update((rows) => rows.filter((r) => r !== row));
    this.recalcTotal();
  }

  private pendingDeleteRow: ItemRowVm | null = null;
  readonly deleteModalVisible = signal(false);

  requestDelete(row: ItemRowVm): void {
    if (row.isNew) {
      this.removeRow(row);
      return;
    }
    this.pendingDeleteRow = row;
    this.deleteModalVisible.set(true);
  }

  cancelDelete(): void {
    this.pendingDeleteRow = null;
    this.deleteModalVisible.set(false);
  }

  confirmDelete(): void {
    const row = this.pendingDeleteRow;
    if (!row?.seq) return;
    this.api.deleteItem(row.seq).subscribe({
      next: (res) => {
        this.deleteModalVisible.set(false);
        this.pendingDeleteRow = null;
        if (res.success) {
          this.loadItems(this.personalInfo()!.seq);
        } else {
          this.message.error(res.message || this.i18n.t('evs.viewRegPersonalTarget.msg.deleteFail', 'Lỗi khi xóa dữ liệu. Vui lòng thử lại.'));
        }
      },
      error: () => {
        this.deleteModalVisible.set(false);
        this.pendingDeleteRow = null;
        this.message.error(this.i18n.t('evs.viewRegPersonalTarget.msg.deleteFail', 'Lỗi khi xóa dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Lưu tạm thời / Thực hiện ====================

  async saveDraft(): Promise<void> {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (this.totalScore() !== 100) {
      this.message.warning(t('evs.viewRegPersonalTarget.msg.totalNot100', 'Tổng tỷ lệ (%) phải bằng 100. Hiện tại: ') + this.totalScore());
      return;
    }

    const dirtyRows = this.rows().filter((r) => r.isNew || r.editing);
    const objectSeq = this.personalInfo()?.seq;
    if (!objectSeq) return;

    if (dirtyRows.length === 0) {
      this.loadItems(objectSeq);
      this.message.success(t('evs.viewRegPersonalTarget.msg.saveDraftSuccess', 'Lưu tạm thời thành công!'));
      return;
    }

    for (const row of dirtyRows) {
      const itemName = row.itemName.trim();
      if (!itemName) {
        this.message.warning(t('evs.viewRegPersonalTarget.msg.itemNameRequired', 'Vui lòng nhập Hạng mục đánh giá.'));
        return;
      }
      const itemContent = row.itemContent.trim();
      if (!itemContent) {
        this.message.warning(t('evs.viewRegPersonalTarget.msg.itemContentRequired', 'Vui lòng nhập Nội dung mục tiêu.'));
        return;
      }
      if (!(row.itemScore > 0)) {
        this.message.warning(t('evs.viewRegPersonalTarget.msg.itemScoreZero', 'Tỷ lệ (%) phải lớn hơn 0.'));
        return;
      }
    }

    for (const row of dirtyRows) {
      try {
        const res = await firstValueFrom(
          this.api.saveItem({
            seq: row.seq ?? undefined,
            evsObjectSeq: objectSeq,
            resumeSeq: this.resumeSeq ?? undefined,
            itemName: row.itemName.trim(),
            itemContent: row.itemContent,
            itemScore: String(row.itemScore),
            flag: '0',
          }),
        );
        if (!res.success) {
          this.message.error(res.message || t('evs.viewRegPersonalTarget.msg.saveFail', 'Lỗi khi lưu dữ liệu.'));
          return;
        }
      } catch {
        this.message.error(t('evs.viewRegPersonalTarget.msg.saveFail', 'Lỗi khi lưu dữ liệu. Vui lòng thử lại.'));
        return;
      }
    }

    this.loadItems(objectSeq);
    this.message.success(t('evs.viewRegPersonalTarget.msg.saveDraftSuccess', 'Lưu tạm thời thành công!'));
  }

  execute(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const objectSeq = this.personalInfo()?.seq;
    if (!objectSeq) return;

    if (this.rows().some((r) => r.isNew || r.editing)) {
      this.message.warning(t('evs.viewRegPersonalTarget.msg.unsavedRows', 'Vui lòng lưu tạm thời trước khi thực hiện.'));
      return;
    }
    if (this.totalScore() !== 100) {
      this.message.warning(t('evs.viewRegPersonalTarget.msg.totalNot100', 'Tổng tỷ lệ (%) phải bằng 100. Hiện tại: ') + this.totalScore());
      return;
    }
    if (this.rows().some((r) => r.itemScore <= 0)) {
      this.message.warning(t('evs.viewRegPersonalTarget.msg.itemScoreZero', 'Tỷ lệ (%) phải lớn hơn 0.'));
      return;
    }

    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: t('evs.viewRegPersonalTarget.msg.confirmExecute', 'Bạn có chắc muốn thực hiện?'),
      nzOnOk: () => this.doExecute(objectSeq),
    });
  }

  private doExecute(objectSeq: string): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api.saveItem({ evsObjectSeq: objectSeq, flag: '1' }).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(t('evs.viewRegPersonalTarget.msg.executeSuccess', 'Thực hiện thành công!'));
          this.search();
        } else {
          this.message.error(res.message || t('evs.viewRegPersonalTarget.msg.saveFail', 'Lỗi khi thực hiện.'));
        }
      },
      error: () => this.message.error(t('evs.viewRegPersonalTarget.msg.saveFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
    });
  }
}
