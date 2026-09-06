import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
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
import { EvsPersonalTargetInfo, EvsResumeOption, EvsScoreOption } from './evs-by-self-sst-ability.model';
import { EvsBySelfSSTAbilityService } from './evs-by-self-sst-ability.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key evs.viewEvsBySelfSSTAbility.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới). */
const I18N_KEYS = [
  'evs.viewEvsBySelfSSTAbility.evalName', 'evs.viewEvsBySelfSSTAbility.btnSearch',
  'evs.viewEvsBySelfSSTAbility.personalInfo', 'evs.viewEvsBySelfSSTAbility.basicInfo',
  'evs.viewEvsBySelfSSTAbility.evalCategory', 'evs.viewEvsBySelfSSTAbility.fullName',
  'evs.viewEvsBySelfSSTAbility.position', 'evs.viewEvsBySelfSSTAbility.dept', 'evs.viewEvsBySelfSSTAbility.hireDate',
  'evs.viewEvsBySelfSSTAbility.evalYear', 'evs.viewEvsBySelfSSTAbility.period', 'evs.viewEvsBySelfSSTAbility.appraiser1',
  'evs.viewEvsBySelfSSTAbility.appraiser2', 'evs.viewEvsBySelfSSTAbility.section1', 'evs.viewEvsBySelfSSTAbility.section2',
  'evs.viewEvsBySelfSSTAbility.col.no', 'evs.viewEvsBySelfSSTAbility.col.distinction',
  'evs.viewEvsBySelfSSTAbility.col.evalItem', 'evs.viewEvsBySelfSSTAbility.col.criterion',
  'evs.viewEvsBySelfSSTAbility.col.itemScore', 'evs.viewEvsBySelfSSTAbility.col.selfScore',
  'evs.viewEvsBySelfSSTAbility.col.comment', 'evs.viewEvsBySelfSSTAbility.btnSaveDraft',
  'evs.viewEvsBySelfSSTAbility.btnExecute', 'evs.viewEvsBySelfSSTAbility.msg.selectEvalFirst',
  'evs.viewEvsBySelfSSTAbility.msg.noData', 'evs.viewEvsBySelfSSTAbility.msg.confirmSaveDraft',
  'evs.viewEvsBySelfSSTAbility.msg.confirmExecute', 'evs.viewEvsBySelfSSTAbility.msg.saveDraftSuccess',
  'evs.viewEvsBySelfSSTAbility.msg.executeSuccess', 'evs.viewEvsBySelfSSTAbility.msg.actionFail',
  'evs.viewConfirmTarget1.msg.notInEvalPeriod', 'common.confirm', 'common.cancel', 'common.select', 'common.loadFail',
];

/** Cấp độ đăng ký đánh giá (evsLevel) khi lấy danh sách "Tên đánh giá" - đúng giá trị hardcode ở bản
 *  Thymeleaf gốc (14015069 = Đánh giá bản thân - dùng chung mức với EvsBySelfHtsvComponent). */
const EVS_LEVEL_SELF = '14015069';

/** ACTIVITY duy nhất cho phép tự đánh giá năng lực - đúng giá trị hardcode
 *  VEBSSA_EDITABLE_ACTIVITIES ở bản Thymeleaf gốc. */
const EDITABLE_ACTIVITY = '14015356';

interface ItemRowVm {
  itemSeq: string;
  groupName: string;
  itemName: string;
  remark: string;
  itemScore: number;
  evsScore0: string;
}

/**
 * Bản Angular của evs/manage/viewEvsBySelfSSTAbility.html (Thymeleaf + jQuery) - Đánh giá năng lực bản
 * thân (SST). Gọi lại nguyên API JSON đã có sẵn ở EvsManageController (xem
 * EvsBySelfSSTAbilityService) - không đổi backend. Cấu trúc tra cứu + thông tin cá nhân giống
 * RegPersonalTargetComponent/EvsBySelfHtsvComponent; điểm tự đánh giá chọn qua dropdown (nz-select,
 * danh sách lấy từ EVS_PARAM paramType=ITEM) thay vì nhập số như EvsBySelfHtsvComponent - đúng bản gốc
 * dùng <select> cho SECTION 1.
 *
 * Công thức Tổng tự đánh giá = Σ(evsScore0 * itemScore / maxScore) với maxScore = giá trị điểm lớn
 * nhất trong danh sách dropdown (KHÔNG phải 100 cố định như EvsBySelfHtsvComponent) - đúng
 * vebssaUpdateTotal() bản gốc. Tính lại thủ công mỗi khi dropdown đổi giá trị (không dùng computed()
 * - xem giải thích tương tự ở RegPersonalTargetComponent.recalcTotal).
 */
@Component({
  selector: 'app-evs-by-self-sst-ability',
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
  templateUrl: './evs-by-self-sst-ability.component.html',
  styleUrl: './evs-by-self-sst-ability.component.css',
})
export class EvsBySelfSSTAbilityComponent implements OnInit {
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  readonly noticeVisible = signal(false);
  readonly loading = signal(false);

  readonly personalInfo = signal<EvsPersonalTargetInfo | null>(null);
  readonly scoreOptions = signal<EvsScoreOption[]>([]);
  readonly rows = signal<ItemRowVm[]>([]);
  readonly totalItemScore = signal(0);
  readonly totalSelfScore = signal(0);

  resumeSeq: string | null = null;
  affirmContent = '';
  private evsType = '';

  constructor(
    private readonly api: EvsBySelfSSTAbilityService,
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
    return String(this.personalInfo()?.activity ?? '') === EDITABLE_ACTIVITY;
  }

  private loadResumeList(): void {
    this.api.getResumeList(this.evsType, EVS_LEVEL_SELF).subscribe({
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
      error: () => {
        this.noticeVisible.set(true);
        this.resumeOptions.set([]);
      },
    });
  }

  search(): void {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evs.viewEvsBySelfSSTAbility.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.loading.set(true);
    this.api.getObjectInfo(this.resumeSeq).subscribe({
      next: (data) => {
        if (!data || !data.seq) {
          this.loading.set(false);
          this.hideAll();
          this.message.warning(this.i18n.t('evs.viewEvsBySelfSSTAbility.msg.noData', 'Không tìm thấy thông tin đánh giá.'));
          return;
        }
        this.personalInfo.set(data);
        this.affirmContent = data.affirmContent0 || '';
        this.loadItemsAndOptions(this.resumeSeq!);
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
    this.scoreOptions.set([]);
    this.totalItemScore.set(0);
    this.totalSelfScore.set(0);
  }

  private loadItemsAndOptions(resumeSeq: string): void {
    forkJoin({
      options: this.api.getScoreOptions(resumeSeq),
      items: this.api.getItemList(resumeSeq),
    }).subscribe({
      next: ({ options, items }) => {
        this.scoreOptions.set(options ?? []);
        this.rows.set(
          (items ?? []).map((r) => ({
            itemSeq: r.itemSeq,
            groupName: r.groupName,
            itemName: r.itemName,
            remark: r.remark,
            itemScore: Number(r.itemScore) || 0,
            evsScore0: r.evsScore0 != null ? String(r.evsScore0) : '',
          })),
        );
        this.loading.set(false);
        this.recalcTotal();
      },
      error: () => {
        this.scoreOptions.set([]);
        this.rows.set([]);
        this.loading.set(false);
        this.recalcTotal();
      },
    });
  }

  private get maxScore(): number {
    return this.scoreOptions().reduce((max, opt) => {
      const v = parseFloat(opt.evsScore);
      return !isNaN(v) && v > max ? v : max;
    }, 0);
  }

  onScoreChange(): void {
    this.recalcTotal();
  }

  private recalcTotal(): void {
    const maxScore = this.maxScore;
    let totalItem = 0;
    let totalSelf = 0;
    for (const row of this.rows()) {
      totalItem += row.itemScore;
      if (row.evsScore0 !== '' && maxScore > 0) {
        const score = parseFloat(row.evsScore0);
        if (!isNaN(score)) totalSelf += Math.round(((score * row.itemScore) / maxScore) * 100) / 100;
      }
    }
    this.totalItemScore.set(Math.round(totalItem * 100) / 100);
    this.totalSelfScore.set(Math.round(totalSelf * 100) / 100);
  }

  save(flag: '0' | '1'): void {
    const objectSeq = this.personalInfo()?.seq;
    if (!objectSeq || !this.resumeSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const content = flag === '1'
      ? t('evs.viewEvsBySelfSSTAbility.msg.confirmExecute', 'Bạn có chắc muốn thực hiện đánh giá năng lực bản thân?')
      : t('evs.viewEvsBySelfSSTAbility.msg.confirmSaveDraft', 'Bạn có chắc muốn lưu tạm thời?');
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: content,
      nzOnOk: () => this.doSave(objectSeq, flag),
    });
  }

  private doSave(objectSeq: string, flag: '0' | '1'): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api
      .save({
        evsObjectSeq: objectSeq,
        resumeSeq: this.resumeSeq!,
        flag,
        affirmContent: this.affirmContent,
        items: this.rows().map((r) => ({ itemSeq: r.itemSeq, evsScore0: r.evsScore0 || null })),
      })
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.message.success(
              flag === '1'
                ? t('evs.viewEvsBySelfSSTAbility.msg.executeSuccess', 'Thực hiện thành công!')
                : t('evs.viewEvsBySelfSSTAbility.msg.saveDraftSuccess', 'Lưu tạm thời thành công!'),
            );
            this.search();
          } else {
            this.message.error(res.message || t('evs.viewEvsBySelfSSTAbility.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.'));
          }
        },
        error: () => this.message.error(t('evs.viewEvsBySelfSSTAbility.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
      });
  }
}
