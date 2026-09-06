import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EvsConfirmTarget1Row, EvsPersonalTargetInfo, EvsPersonalTargetItem, EvsResumeOption } from './confirm-target2.model';
import { ConfirmTarget2Service } from './confirm-target2.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key evs.viewConfirmTarget2.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới).
 *  Riêng thông báo "không có quyền đánh giá" dùng lại key evs.viewConfirmTarget1.msg.notInEvalPeriod -
 *  đúng như bản Thymeleaf gốc (viewConfirmTarget2.html cũng th:text trực tiếp key của target1, không
 *  có key notInEvalPeriod riêng cho target2 trong message.properties). */
const I18N_KEYS = [
  'evs.viewConfirmTarget2.evalName', 'evs.viewConfirmTarget2.btnSearch',
  'evs.viewConfirmTarget2.currentEmp', 'evs.viewConfirmTarget2.totalEmp',
  'evs.viewConfirmTarget2.col.no', 'evs.viewConfirmTarget2.col.fullName', 'evs.viewConfirmTarget2.col.empid',
  'evs.viewConfirmTarget2.col.dept', 'evs.viewConfirmTarget2.col.position', 'evs.viewConfirmTarget2.col.objectType',
  'evs.viewConfirmTarget2.col.status', 'evs.viewConfirmTarget2.personalInfo', 'evs.viewConfirmTarget2.basicInfo',
  'evs.viewConfirmTarget2.evalCategory', 'evs.viewConfirmTarget2.fullName', 'evs.viewConfirmTarget2.position',
  'evs.viewConfirmTarget2.dept', 'evs.viewConfirmTarget2.hireDate', 'evs.viewConfirmTarget2.evalYear',
  'evs.viewConfirmTarget2.period', 'evs.viewConfirmTarget2.appraiser1', 'evs.viewConfirmTarget2.appraiser2',
  'evs.viewConfirmTarget2.objectiveConfirm', 'evs.viewConfirmTarget2.col.evalItem', 'evs.viewConfirmTarget2.col.target',
  'evs.viewConfirmTarget2.col.ratio', 'evs.viewConfirmTarget2.part2', 'evs.viewConfirmTarget2.col.opinion',
  'evs.viewConfirmTarget2.appraiser1Comment', 'evs.viewConfirmTarget2.appraiser2Comment',
  'evs.viewConfirmTarget2.modalTitle', 'evs.viewConfirmTarget2.btnConfirm', 'evs.viewConfirmTarget2.btnReject',
  'evs.viewConfirmTarget2.btnClose', 'evs.viewConfirmTarget2.msg.selectEvalFirst', 'evs.viewConfirmTarget2.msg.noData',
  'evs.viewConfirmTarget1.msg.notInEvalPeriod', 'evs.viewConfirmTarget2.msg.selectEmployee',
  'evs.viewConfirmTarget2.msg.confirmSuccess', 'evs.viewConfirmTarget2.msg.rejectSuccess',
  'evs.viewConfirmTarget2.msg.actionFail', 'evs.viewConfirmTarget2.msg.confirmAction',
  'evs.viewConfirmTarget2.msg.rejectAction', 'common.confirm', 'common.cancel', 'common.loadFail',
];

/** Cấp độ đăng ký đánh giá (evsLevel) khi lấy danh sách "Tên đánh giá" - đúng giá trị hardcode ở bản
 *  Thymeleaf gốc (14015085 = Xác nhận mục tiêu lần 2). */
const EVS_LEVEL_CONFIRM = '14015085';

/** ACTIVITY cho biết đối tượng đang chờ xác nhận lần 2 (chỉ dòng này mới bấm được để mở chi tiết) -
 *  đúng giá trị hardcode CONFIRM_ACTIVITY ở bản Thymeleaf gốc. */
const CONFIRM_ACTIVITY = '14015365';

const PAGE_SIZE_OPTIONS = [50, 100, 200];

/**
 * Bản Angular của evs/manage/viewConfirmTarget2.html (Thymeleaf + jQuery + DataTables serverSide) -
 * Xác nhận mục tiêu lần 2. Kiến trúc giống hệt ConfirmTarget1Component (cùng gọi chung
 * EvsConfirmTarget1Service ở backend, chỉ khác evsLevel/CONFIRM_ACTIVITY và affirmLevel cố định '2'
 * ở server nên FE không cần gửi/đọc affirmLevel) - xem docblock ConfirmTarget1Component để biết đầy đủ
 * lý do kiến trúc (phân trang server-side, bỏ cột checkbox chết, lắng nghe queryParamMap cho evsType).
 * Khác 1 điểm so với target1: ý kiến cấp 1 luôn readonly, ý kiến cấp 2 luôn được sửa (không có nhánh
 * theo affirmLevel như bản gốc target1).
 */
@Component({
  selector: 'app-confirm-target2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzSelectModule,
    NzButtonModule,
    NzInputModule,
    NzModalModule,
    NzAlertModule,
    NzDescriptionsModule,
    TranslatePipe,
  ],
  templateUrl: './confirm-target2.component.html',
  styleUrl: './confirm-target2.component.css',
})
export class ConfirmTarget2Component implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly CONFIRM_ACTIVITY = CONFIRM_ACTIVITY;

  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  readonly noticeVisible = signal(false);

  readonly rows = signal<EvsConfirmTarget1Row[]>([]);
  readonly loading = signal(false);
  readonly recordsTotal = signal(0);
  pageIndex = 1;
  pageSize = 50;

  readonly currentObjectSeq = signal<string | null>(null);
  readonly modalVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly personalInfo = signal<EvsPersonalTargetInfo | null>(null);
  readonly items = signal<EvsPersonalTargetItem[]>([]);
  readonly totalScore = signal(0);

  resumeSeq: string | null = null;
  affirmComment1 = '';
  affirmComment2 = '';
  private evsType = '';

  constructor(
    private readonly api: ConfirmTarget2Service,
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

  private loadResumeList(): void {
    this.api.getResumeList(this.evsType, EVS_LEVEL_CONFIRM).subscribe({
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
      this.message.warning(this.i18n.t('evs.viewConfirmTarget2.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.pageIndex = 1;
    this.closeModal();
    this.loadPage();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }

  private loadPage(): void {
    if (!this.resumeSeq) return;
    this.loading.set(true);
    this.api
      .getObjectList({
        resumeSeq: this.resumeSeq,
        evsType: this.evsType,
        draw: this.pageIndex,
        start: (this.pageIndex - 1) * this.pageSize,
        length: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          this.rows.set(res.data ?? []);
          this.recordsTotal.set(res.recordsTotal ?? 0);
          this.loading.set(false);
        },
        error: () => {
          this.rows.set([]);
          this.recordsTotal.set(0);
          this.loading.set(false);
        },
      });
  }

  rowClick(row: EvsConfirmTarget1Row): void {
    if (row.activity !== CONFIRM_ACTIVITY) return;
    this.currentObjectSeq.set(row.seq);
    this.loadDetail(row.seq);
  }

  private loadDetail(evsObjectSeq: string): void {
    this.detailLoading.set(true);
    this.api.getObjectInfo(evsObjectSeq).subscribe({
      next: (data) => {
        this.detailLoading.set(false);
        if (!data || !data.seq) {
          this.currentObjectSeq.set(null);
          return;
        }
        this.personalInfo.set(data);
        this.affirmComment1 = data.affirmComment1 || '';
        this.affirmComment2 = data.affirmComment2 || '';
        this.loadItems(evsObjectSeq);
        this.modalVisible.set(true);
      },
      error: () => {
        this.detailLoading.set(false);
        this.currentObjectSeq.set(null);
      },
    });
  }

  private loadItems(evsObjectSeq: string): void {
    this.api.getItemList(evsObjectSeq).subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        const total = (list ?? []).reduce((sum, r) => sum + (Number(r.itemScore) || 0), 0);
        this.totalScore.set(Math.round(total * 100) / 100);
      },
      error: () => {
        this.items.set([]);
        this.totalScore.set(0);
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
    this.currentObjectSeq.set(null);
  }

  confirmAction(flag: '1' | '0'): void {
    const objectSeq = this.currentObjectSeq();
    if (!objectSeq) {
      this.message.warning(this.i18n.t('evs.viewConfirmTarget2.msg.selectEmployee', 'Vui lòng chọn nhân viên trước.'));
      return;
    }
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const content = flag === '1'
      ? t('evs.viewConfirmTarget2.msg.confirmAction', 'Bạn có chắc muốn xác nhận mục tiêu của nhân viên này?')
      : t('evs.viewConfirmTarget2.msg.rejectAction', 'Bạn có chắc muốn từ chối mục tiêu của nhân viên này?');
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: content,
      nzOnOk: () => this.doConfirm(objectSeq, flag),
    });
  }

  private doConfirm(objectSeq: string, flag: '1' | '0'): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api.confirm({ evsObjectSeq: objectSeq, affirmComment: this.affirmComment2, flag }).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(
            flag === '1'
              ? t('evs.viewConfirmTarget2.msg.confirmSuccess', 'Xác nhận thành công!')
              : t('evs.viewConfirmTarget2.msg.rejectSuccess', 'Từ chối thành công!'),
          );
          this.closeModal();
          this.loadPage();
        } else {
          this.message.error(res.message || t('evs.viewConfirmTarget2.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.'));
        }
      },
      error: () => this.message.error(t('evs.viewConfirmTarget2.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
    });
  }
}
