import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { OrgCostCenterDto } from './view-org-cost-center.model';
import { ViewOrgCostCenterService } from './view-org-cost-center.service';

/** Các key message.properties dùng trong trang này - namespace "orgCostCenter" riêng cho trang này,
 *  "common"/"orgCompose"/"org.title"/"alert.message" dùng chung với các trang org khác đã chuyển đổi -
 *  tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'org.orgManage.viewOrgCostCenter.title', 'orgCompose.costCenter',
  'orgCostCenter.codeNoPlaceholder', 'orgCostCenter.searchName', 'orgCostCenter.searchNamePlaceholder',
  'orgCostCenter.codeName', 'orgCostCenter.codeEngName', 'orgCostCenter.codeKoreanName',
  'orgCostCenter.codeVietnameseName', 'orgCostCenter.businessScope', 'orgCostCenter.profitCenter',
  'orgCostCenter.modalAddTitle', 'orgCostCenter.modalEditTitle', 'orgCostCenter.confirmDelete',
  'orgCostCenter.msg.pleaseEnterCodeNo', 'orgBusiness.orderNo',
  'org.title.COUNTRY', 'org.title.ADDRESS',
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.noData', 'common.totalRows',
  'common.status', 'common.remark', 'common.startDate', 'common.endDate', 'common.loadFail', 'common.saveFail',
  'common.deleteFail',
  'alert.message.add_success', 'alert.message.update_success', 'alert.message.delete_success',
];

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

interface CostCenterForm {
  seq: string | null;
  codeNo: string;
  codeName: string;
  codeEngName: string;
  codeKoreanName: string;
  codeVietnameseName: string;
  orderNo: number | null;
  startDate: string;
  endDate: string;
  country: string;
  address: string;
  activity: string;
  remark: string;
  businessScope: string;
  profitCenter: string;
}

const EMPTY_FORM: CostCenterForm = {
  seq: null, codeNo: '', codeName: '', codeEngName: '', codeKoreanName: '', codeVietnameseName: '',
  orderNo: 0, startDate: '', endDate: '', country: '', address: '', activity: '', remark: '',
  businessScope: '', profitCenter: '',
};

/**
 * Bản Angular của org/orgManage/viewOrgCostCenter.html (Thymeleaf + jQuery DataTables) - quản lý trung
 * tâm chi phí (bảng ORG_COST_CENTER). Gọi lại nguyên API JSON đã có sẵn ở OrgCostCenterController (xem
 * ViewOrgCostCenterService) - không đổi backend. Kiến trúc bám theo ViewResumeListComponent (search form
 * dạng nz-card, nz-table, nz-modal thêm/sửa) nhưng /org/api/costCenter/list trả về nguyên danh sách đã
 * lọc (không phải DataTables server-side phân trang thật) nên dùng nzFrontPagination mặc định (phân
 * trang phía client) thay vì server-side như ViewResumeListComponent.
 */
@Component({
  selector: 'app-view-org-cost-center',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzTableModule,
    TranslatePipe,
  ],
  templateUrl: './view-org-cost-center.component.html',
  styleUrl: './view-org-cost-center.component.css',
})
export class ViewOrgCostCenterComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<OrgCostCenterDto[]>([]);
  readonly loading = signal(false);

  searchCodeNo = '';
  searchCodeName = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('orgCostCenter.modalAddTitle', 'Thêm mới Trung tâm chi phí')
      : this.i18n.t('orgCostCenter.modalEditTitle', 'Cập nhật Trung tâm chi phí'),
  );
  form: CostCenterForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: OrgCostCenterDto | null = null;

  constructor(
    private readonly api: ViewOrgCostCenterService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.api.getList({ codeNo: this.searchCodeNo, codeName: this.searchCodeName }).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.rows.set([]);
        this.loading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  clearSearch(): void {
    this.searchCodeNo = '';
    this.searchCodeName = '';
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: OrgCostCenterDto): void {
    this.isNew.set(false);
    this.form = {
      seq: row.seq,
      codeNo: row.codeNo,
      codeName: row.codeName || '',
      codeEngName: row.codeEngName || '',
      codeKoreanName: row.codeKoreanName || '',
      codeVietnameseName: row.codeVietnameseName || '',
      orderNo: row.orderNo ?? 0,
      startDate: row.startDate || '',
      endDate: row.endDate || '',
      country: row.country || '',
      address: row.address || '',
      activity: row.activity || '',
      remark: row.remark || '',
      businessScope: row.businessScope || '',
      profitCenter: row.profitCenter || '',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.codeNo?.trim()) {
      this.message.warning(this.i18n.t('orgCostCenter.msg.pleaseEnterCodeNo', 'Vui lòng nhập Mã chi phí'));
      return;
    }

    const payload: OrgCostCenterDto = {
      seq: this.form.seq,
      codeNo: this.form.codeNo.trim(),
      codeName: this.form.codeName,
      codeEngName: this.form.codeEngName,
      codeKoreanName: this.form.codeKoreanName,
      codeVietnameseName: this.form.codeVietnameseName,
      orderNo: this.form.orderNo,
      startDate: this.form.startDate,
      endDate: this.form.endDate,
      country: this.form.country,
      address: this.form.address,
      activity: this.form.activity,
      remark: this.form.remark,
      businessScope: this.form.businessScope,
      profitCenter: this.form.profitCenter,
      createdBy: null,
      createDate: null,
      updatedBy: null,
      updateDate: null,
    };

    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(
          this.isNew()
            ? this.i18n.t('alert.message.add_success', 'Thêm thành công!')
            : this.i18n.t('alert.message.update_success', 'Sửa thành công!'),
        );
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: OrgCostCenterDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.codeNo} - ${this.deleteTarget.codeName ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.seq) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.seq).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('alert.message.delete_success', 'Xóa thành công!'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }
}
