import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
import { EvsPersonalTargetInfo, EvsPersonalTargetItem, EvsResumeOption } from './evs-by-self-htsv.model';
import { EvsBySelfHtsvService } from './evs-by-self-htsv.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key evs.viewEvsBySelfHTSV.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới). */
const I18N_KEYS = [
  'evs.viewEvsBySelfHTSV.evalName', 'evs.viewEvsBySelfHTSV.btnSearch', 'evs.viewEvsBySelfHTSV.personalInfo',
  'evs.viewEvsBySelfHTSV.basicInfo', 'evs.viewEvsBySelfHTSV.evalCategory', 'evs.viewEvsBySelfHTSV.fullName',
  'evs.viewEvsBySelfHTSV.position', 'evs.viewEvsBySelfHTSV.dept', 'evs.viewEvsBySelfHTSV.hireDate',
  'evs.viewEvsBySelfHTSV.evalYear', 'evs.viewEvsBySelfHTSV.period', 'evs.viewEvsBySelfHTSV.appraiser1',
  'evs.viewEvsBySelfHTSV.appraiser2', 'evs.viewEvsBySelfHTSV.objectiveTitle', 'evs.viewEvsBySelfHTSV.col.no',
  'evs.viewEvsBySelfHTSV.col.evalItem', 'evs.viewEvsBySelfHTSV.col.target', 'evs.viewEvsBySelfHTSV.col.ratio',
  'evs.viewEvsBySelfHTSV.col.selfScore', 'evs.viewEvsBySelfHTSV.col.total', 'evs.viewEvsBySelfHTSV.part2',
  'evs.viewEvsBySelfHTSV.col.achievement', 'evs.viewEvsBySelfHTSV.col.limitation', 'evs.result.col.self',
  'evs.viewEvsBySelfHTSV.selfAppraisal', 'evs.viewEvsBySelfHTSV.appraiser1Comment',
  'evs.viewEvsBySelfHTSV.appraiser2Comment', 'evs.viewEvsBySelfHTSV.btnSaveDraft', 'evs.viewEvsBySelfHTSV.btnExecute',
  'evs.viewEvsBySelfHTSV.msg.selectEvalFirst', 'evs.viewEvsBySelfHTSV.msg.noData',
  'evs.viewEvsBySelfHTSV.msg.confirmSaveDraft', 'evs.viewEvsBySelfHTSV.msg.confirmExecute',
  'evs.viewEvsBySelfHTSV.msg.saveDraftSuccess', 'evs.viewEvsBySelfHTSV.msg.executeSuccess',
  'evs.viewEvsBySelfHTSV.msg.actionFail', 'evs.viewConfirmTarget1.msg.notInEvalPeriod',
  'common.confirm', 'common.cancel', 'common.loadFail',
];

/** Cấp độ đăng ký đánh giá (evsLevel) khi lấy danh sách "Tên đánh giá" - đúng giá trị hardcode ở bản
 *  Thymeleaf gốc (14015069 = Đánh giá bản thân). */
const EVS_LEVEL_SELF = '14015069';

/** ACTIVITY duy nhất cho phép nhập điểm đánh giá bản thân - đúng giá trị hardcode
 *  VEBSH_EDITABLE_ACTIVITIES ở bản Thymeleaf gốc, các activity khác đều readonly. */
const EDITABLE_ACTIVITY = '14015356';

interface ItemRowVm {
  seq: string;
  itemName: string;
  itemContent: string;
  ratio: number;
  evsScore: string;
  rowTotal: number;
}

/**
 * Bản Angular của evs/manage/viewEvsBySelfHTSV.html (Thymeleaf + jQuery) - Đánh giá bản thân (HTSV).
 * Gọi lại nguyên API JSON đã có sẵn ở EvsManageController (xem EvsBySelfHtsvService) - không đổi
 * backend. Cấu trúc tra cứu + thông tin cá nhân giống RegPersonalTargetComponent, nhưng bảng mục tiêu
 * ở đây KHÔNG có thêm/sửa/xóa dòng - chỉ nhập điểm "Điểm đánh giá bản thân (%)" cho từng dòng có sẵn
 * (readonly khi activity khác EDITABLE_ACTIVITY), nên không cần state editing/isNew như
 * RegPersonalTargetComponent. Tổng theo dòng = evsScore * ratio / 100 (giống hệt công thức
 * vebshUpdateTotal() bản gốc) - tính lại thủ công mỗi khi input điểm thay đổi (xem giải thích tương tự
 * ở RegPersonalTargetComponent.recalcTotal về lý do không dùng computed()).
 *
 * Bản gốc giới hạn giá trị nhập luôn về tối đa 100 (vebshOnScoreInput dùng hằng số max=100 cố định,
 * KHÔNG đọc data-max=ratio dù input có set thuộc tính max=ratio) - giữ nguyên đúng hành vi này (không
 * tự sửa lại thành clamp theo ratio vì đó là thay đổi nghiệp vụ ngoài phạm vi chuyển giao diện).
 */
@Component({
  selector: 'app-evs-by-self-htsv',
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
  templateUrl: './evs-by-self-htsv.component.html',
  styleUrl: './evs-by-self-htsv.component.css',
})
export class EvsBySelfHtsvComponent implements OnInit {
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  readonly noticeVisible = signal(false);
  readonly loading = signal(false);

  readonly personalInfo = signal<EvsPersonalTargetInfo | null>(null);
  readonly rows = signal<ItemRowVm[]>([]);
  readonly totalScore = signal(0);

  resumeSeq: string | null = null;
  achiev0 = '';
  limit0 = '';
  private evsType = '';

  constructor(
    private readonly api: EvsBySelfHtsvService,
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
      this.message.warning(this.i18n.t('evs.viewEvsBySelfHTSV.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.loading.set(true);
    this.api.getObjectInfo(this.resumeSeq).subscribe({
      next: (data) => {
        this.loading.set(false);
        if (!data || !data.seq) {
          this.hideAll();
          this.message.warning(this.i18n.t('evs.viewEvsBySelfHTSV.msg.noData', 'Không tìm thấy thông tin đánh giá.'));
          return;
        }
        this.personalInfo.set(data);
        this.achiev0 = data.affirmC1L0 || '';
        this.limit0 = data.affirmC2L0 || '';
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
          (list ?? []).map((r) => {
            const ratio = Number(r.itemScore) || 0;
            const evsScore = r.evsScore != null ? String(r.evsScore) : '';
            return { seq: r.seq, itemName: r.itemName, itemContent: r.itemContent || '', ratio, evsScore, rowTotal: this.calcRowTotal(evsScore, ratio) };
          }),
        );
        this.recalcTotal();
      },
      error: () => {
        this.rows.set([]);
        this.recalcTotal();
      },
    });
  }

  private calcRowTotal(evsScore: string, ratio: number): number {
    if (evsScore === '') return 0;
    const score = parseFloat(evsScore);
    if (isNaN(score)) return 0;
    return Math.round(((score * ratio) / 100) * 100) / 100;
  }

  /** Giới hạn giá trị nhập tối đa = 100 (hằng số cố định, đúng bản gốc - xem docblock class). */
  onScoreInput(row: ItemRowVm): void {
    const val = parseFloat(row.evsScore);
    if (!isNaN(val) && val > 100) {
      row.evsScore = '100';
    }
    row.rowTotal = this.calcRowTotal(row.evsScore, row.ratio);
    this.recalcTotal();
  }

  private recalcTotal(): void {
    const total = this.rows().reduce((sum, r) => sum + r.rowTotal, 0);
    this.totalScore.set(Math.round(total * 100) / 100);
  }

  save(flag: '0' | '1'): void {
    const objectSeq = this.personalInfo()?.seq;
    if (!objectSeq) return;
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const content = flag === '1'
      ? t('evs.viewEvsBySelfHTSV.msg.confirmExecute', 'Bạn có chắc muốn thực hiện đánh giá bản thân?')
      : t('evs.viewEvsBySelfHTSV.msg.confirmSaveDraft', 'Bạn có chắc muốn lưu tạm thời?');
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
        flag,
        affirmContent1: this.achiev0,
        affirmContent2: this.limit0,
        items: this.rows().map((r) => ({ seq: r.seq, evsScore: r.evsScore })),
      })
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.message.success(
              flag === '1'
                ? t('evs.viewEvsBySelfHTSV.msg.executeSuccess', 'Thực hiện thành công!')
                : t('evs.viewEvsBySelfHTSV.msg.saveDraftSuccess', 'Lưu tạm thời thành công!'),
            );
            this.search();
          } else {
            this.message.error(res.message || t('evs.viewEvsBySelfHTSV.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.'));
          }
        },
        error: () => this.message.error(t('evs.viewEvsBySelfHTSV.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
      });
  }
}
