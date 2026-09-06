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
import { EvsConfirmTarget1Row, EvsPersonalTargetInfo, EvsPersonalTargetItem, EvsResumeOption } from './confirm-target1.model';
import { ConfirmTarget1Service } from './confirm-target1.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key evs.viewConfirmTarget1.* đã có sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới). */
const I18N_KEYS = [
  'evs.viewConfirmTarget1.evalName', 'evs.viewConfirmTarget1.btnSearch',
  'evs.viewConfirmTarget1.currentEmp', 'evs.viewConfirmTarget1.totalEmp',
  'evs.viewConfirmTarget1.col.no', 'evs.viewConfirmTarget1.col.fullName', 'evs.viewConfirmTarget1.col.empid',
  'evs.viewConfirmTarget1.col.dept', 'evs.viewConfirmTarget1.col.position', 'evs.viewConfirmTarget1.col.objectType',
  'evs.viewConfirmTarget1.col.status', 'evs.viewConfirmTarget1.personalInfo', 'evs.viewConfirmTarget1.basicInfo',
  'evs.viewConfirmTarget1.evalCategory', 'evs.viewConfirmTarget1.fullName', 'evs.viewConfirmTarget1.position',
  'evs.viewConfirmTarget1.dept', 'evs.viewConfirmTarget1.hireDate', 'evs.viewConfirmTarget1.evalYear',
  'evs.viewConfirmTarget1.period', 'evs.viewConfirmTarget1.appraiser1', 'evs.viewConfirmTarget1.appraiser2',
  'evs.viewConfirmTarget1.objectiveConfirm', 'evs.viewConfirmTarget1.col.evalItem', 'evs.viewConfirmTarget1.col.target',
  'evs.viewConfirmTarget1.col.ratio', 'evs.viewConfirmTarget1.part2', 'evs.viewConfirmTarget1.col.opinion',
  'evs.viewConfirmTarget1.appraiser1Comment', 'evs.viewConfirmTarget1.appraiser2Comment',
  'evs.viewConfirmTarget1.modalTitle', 'evs.viewConfirmTarget1.btnConfirm', 'evs.viewConfirmTarget1.btnReject',
  'evs.viewConfirmTarget1.btnClose', 'evs.viewConfirmTarget1.msg.selectEvalFirst', 'evs.viewConfirmTarget1.msg.noData',
  'evs.viewConfirmTarget1.msg.notInEvalPeriod', 'evs.viewConfirmTarget1.msg.selectEmployee',
  'evs.viewConfirmTarget1.msg.confirmSuccess', 'evs.viewConfirmTarget1.msg.rejectSuccess',
  'evs.viewConfirmTarget1.msg.actionFail', 'evs.viewConfirmTarget1.msg.confirmAction',
  'evs.viewConfirmTarget1.msg.rejectAction', 'common.confirm', 'common.cancel', 'common.loadFail',
];

/** Cấp độ đăng ký đánh giá (evsLevel) khi lấy danh sách "Tên đánh giá" - đúng giá trị hardcode ở bản
 *  Thymeleaf gốc (14015084 = Xác nhận mục tiêu). */
const EVS_LEVEL_CONFIRM = '14015084';

/** ACTIVITY cho biết đối tượng đang chờ xác nhận lần 1 (chỉ dòng này mới bấm được để mở chi tiết) -
 *  đúng giá trị hardcode CONFIRM_ACTIVITY ở bản Thymeleaf gốc. */
const CONFIRM_ACTIVITY = '14015364';

const PAGE_SIZE_OPTIONS = [50, 100, 200];

/**
 * Bản Angular của evs/manage/viewConfirmTarget1.html (Thymeleaf + jQuery + DataTables serverSide) -
 * Xác nhận mục tiêu lần 1. Gọi lại nguyên API JSON đã có sẵn ở EvsManageController (xem
 * ConfirmTarget1Service) - không đổi backend. Danh sách nhân viên dùng nz-table phân trang
 * server-side (nzFrontPagination=false + DataTablesResponse<T>, đúng kiến trúc ViewEntryInfoListComponent/
 * CoordApplyAttendanceInfoComponent) vì /api/confirmTarget1/objectList vốn đã phân trang ở backend
 * (draw/start/length) - không tải hết về client như ManageEmpPositionInfoComponent. Modal chi tiết dùng
 * lại đúng bố cục 2 khối nz-descriptions + bảng mục tiêu (readonly) như RegPersonalTargetComponent.
 *
 * Bỏ cột checkbox "vct1-chk" ở bảng gốc - đối chiếu lại script gốc thì checkbox này không gắn với bất
 * kỳ nút hành động hàng loạt nào (không có code nào đọc giá trị đã tick), là control chết trong giao
 * diện cũ nên không chuyển sang.
 *
 * evsType/affirmLevel lấy từ query param trên URL menu - đăng ký lắng nghe queryParamMap thay vì chỉ
 * đọc snapshot 1 lần (xem giải thích đầy đủ ở RegPersonalTargetComponent và AppShellComponent.angularRouteFor).
 */
@Component({
  selector: 'app-confirm-target1',
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
  templateUrl: './confirm-target1.component.html',
  styleUrl: './confirm-target1.component.css',
})
export class ConfirmTarget1Component implements OnInit {
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
  private affirmLevel = '1';

  constructor(
    private readonly api: ConfirmTarget1Service,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get('evsType') ?? '';
      this.affirmLevel = params.get('AFFIRM_LEVEL') || '1';
      this.loadResumeList();
    });
  }

  get comment1Readonly(): boolean {
    return this.affirmLevel === '2';
  }

  get comment2Readonly(): boolean {
    return this.affirmLevel !== '2';
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
      this.message.warning(this.i18n.t('evs.viewConfirmTarget1.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
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
        affirmLevel: this.affirmLevel,
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
      this.message.warning(this.i18n.t('evs.viewConfirmTarget1.msg.selectEmployee', 'Vui lòng chọn nhân viên trước.'));
      return;
    }
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const content = flag === '1'
      ? t('evs.viewConfirmTarget1.msg.confirmAction', 'Bạn có chắc muốn xác nhận mục tiêu của nhân viên này?')
      : t('evs.viewConfirmTarget1.msg.rejectAction', 'Bạn có chắc muốn từ chối mục tiêu của nhân viên này?');
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: content,
      nzOnOk: () => this.doConfirm(objectSeq, flag),
    });
  }

  private doConfirm(objectSeq: string, flag: '1' | '0'): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const affirmComment = this.affirmLevel === '2' ? this.affirmComment2 : this.affirmComment1;
    this.api.confirm({ evsObjectSeq: objectSeq, affirmComment, affirmLevel: this.affirmLevel, flag }).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(
            flag === '1'
              ? t('evs.viewConfirmTarget1.msg.confirmSuccess', 'Xác nhận thành công!')
              : t('evs.viewConfirmTarget1.msg.rejectSuccess', 'Từ chối thành công!'),
          );
          this.closeModal();
          this.loadPage();
        } else {
          this.message.error(res.message || t('evs.viewConfirmTarget1.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.'));
        }
      },
      error: () => this.message.error(t('evs.viewConfirmTarget1.msg.actionFail', 'Lỗi khi thực hiện. Vui lòng thử lại.')),
    });
  }
}
