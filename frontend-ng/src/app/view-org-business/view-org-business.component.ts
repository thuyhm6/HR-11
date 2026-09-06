import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormatEmitEvent, NzTreeModule } from 'ng-zorro-antd/tree';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { OrgResumeInfoDto } from '../view-resume-list/view-resume-list.model';
import { OrgInfoDto } from '../view-compose-org/view-compose-org.model';
import { OrgTreeNodeOptions, buildOrgTree, collectAllKeys } from '../view-compose-org/org-info-tree.util';
import { OrgBusinessRelationDto } from './view-org-business.model';
import { ViewOrgBusinessService } from './view-org-business.service';

/** Các key message.properties dùng trong trang này - namespace "orgBusiness" riêng cho trang này, còn
 *  lại tái sử dụng nguyên các key đã có ở "common", "orgResumeProcess" (dropdown phiên bản), "orgCompose"
 *  (ô/nút tìm kiếm cây, thông báo chưa có dữ liệu tổ chức) và "org.orgManage.title.deptName" - tải trước
 *  1 lần ở ngOnInit. */
const I18N_KEYS = [
  'org.orgManage.viewOrgBusiness.title', 'orgResumeProcess.versionName', 'orgResumeProcess.selectPlaceholder',
  'orgCompose.searchTreePlaceholder', 'orgCompose.expandAll', 'orgCompose.collapseAll', 'orgCompose.msg.noOrgData',
  'orgCompose.msg.pleaseSelectResume',
  'org.orgManage.title.deptName',
  'orgBusiness.listTitle', 'orgBusiness.codeNo', 'orgBusiness.codeNoHint', 'orgBusiness.orderNo',
  'orgBusiness.isDefault', 'orgBusiness.updatedBy', 'orgBusiness.updateDate', 'orgBusiness.modalAddTitle',
  'orgBusiness.modalEditTitle', 'orgBusiness.msg.pleaseSelectDept', 'orgBusiness.msg.pleaseEnterCodeNo',
  'orgBusiness.msg.confirmDelete',
  'common.stt', 'common.addNew', 'common.edit', 'common.save', 'common.delete', 'common.cancel', 'common.close',
  'common.confirm', 'common.noData', 'common.loadFail', 'common.saveFail', 'common.deleteFail',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

type BusinessMode = 'NEW' | 'EDIT';

interface BusinessForm {
  seq: string | null;
  codeNo: string;
  orderNo: number | null;
  isDefault: boolean;
}

const EMPTY_FORM: BusinessForm = { seq: null, codeNo: '', orderNo: 0, isDefault: false };

/**
 * Bản Angular của org/orgManage/viewOrgBusiness.html (Thymeleaf + jQuery + jsTree + DataTables) - quản
 * lý nghiệp vụ (công việc) gắn theo từng phòng ban của 1 phiên bản thay đổi tổ chức: duyệt cây tổ chức
 * bên trái (dùng lại đúng buildOrgTree/collectAllKeys/OrgTreeNodeOptions của view-compose-org vì cùng
 * nguồn dữ liệu OrgInfoDto từ OrgComposeController#getOrgStructure), danh sách nghiệp vụ của phòng ban
 * đang chọn bên phải. Gọi lại nguyên API JSON đã có sẵn ở OrgBusinessController + OrgComposeController +
 * OrgResumeInfoController (xem ViewOrgBusinessService) - không đổi backend. jsTree -> nz-tree, DataTables
 * -> nz-table, modal Bootstrap thêm/sửa -> nz-modal, chọn 1 dòng để Sửa/Xóa bằng click chọn dòng (thay
 * cho DataTables select) giống idiom NG-ZORRO ở các trang đã chuyển đổi khác.
 */
@Component({
  selector: 'app-view-org-business',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzSelectModule,
    NzSpinModule,
    NzTableModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-org-business.component.html',
  styleUrl: './view-org-business.component.css',
})
export class ViewOrgBusinessComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly resumeOptions = signal<OrgResumeInfoDto[]>([]);
  readonly loadingResume = signal(false);
  selectedResumeNo: string | null = null;

  readonly orgList = signal<OrgInfoDto[]>([]);
  readonly loadingTree = signal(false);
  readonly treeNodes = computed<OrgTreeNodeOptions[]>(() => buildOrgTree(this.orgList()));
  readonly expandedKeys = signal<string[]>([]);
  treeSearchValue = '';
  selectedDeptKey: string | null = null;
  selectedDeptName = '';

  readonly businessList = signal<OrgBusinessRelationDto[]>([]);
  readonly loadingList = signal(false);
  readonly selectedSeq = signal<string | null>(null);
  readonly selectedRow = computed<OrgBusinessRelationDto | undefined>(() =>
    this.businessList().find((b) => b.seq === this.selectedSeq()),
  );

  readonly modalVisible = signal(false);
  readonly modalMode = signal<BusinessMode>('NEW');
  form: BusinessForm = { ...EMPTY_FORM };
  readonly saving = signal(false);

  readonly deleteConfirmVisible = signal(false);
  readonly deleting = signal(false);

  constructor(
    private readonly api: ViewOrgBusinessService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadResumeDropdown();
  }

  resumeLabel(r: OrgResumeInfoDto): string {
    return r.no ? `${r.no} ${r.resumeName ?? ''}` : (r.resumeName ?? '');
  }

  private loadResumeDropdown(): void {
    this.loadingResume.set(true);
    this.api.getResumeDropdown().subscribe({
      next: (list) => {
        this.resumeOptions.set(list ?? []);
        this.loadingResume.set(false);
        if (list?.length) {
          this.selectedResumeNo = list[0].no;
          this.onResumeChange(list[0].no);
        }
      },
      error: () => {
        this.resumeOptions.set([]);
        this.loadingResume.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  onResumeChange(resumeNo: string | null): void {
    this.selectedResumeNo = resumeNo;
    this.resetDeptSelection();
    if (resumeNo) this.loadOrgTree(resumeNo);
    else this.orgList.set([]);
  }

  private loadOrgTree(resumeNo: string): void {
    this.loadingTree.set(true);
    this.api.getOrgStructure(resumeNo).subscribe({
      next: (list) => {
        this.orgList.set(list ?? []);
        this.expandedKeys.set(collectAllKeys(buildOrgTree(list ?? [])));
        this.loadingTree.set(false);
      },
      error: () => {
        this.orgList.set([]);
        this.loadingTree.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  expandAllNodes(): void {
    this.expandedKeys.set(collectAllKeys(this.treeNodes()));
  }

  collapseAllNodes(): void {
    this.expandedKeys.set([]);
  }

  onTreeClick(event: NzFormatEmitEvent): void {
    const data = (event.node?.origin as OrgTreeNodeOptions | undefined)?.data;
    if (!data) return;
    this.selectedDeptKey = data.deptNo;
    this.selectedDeptName = data.orgNameLocal || data.orgNameEng || data.deptNo;
    this.selectedSeq.set(null);
    this.loadBusinessList();
  }

  private resetDeptSelection(): void {
    this.selectedDeptKey = null;
    this.selectedDeptName = '';
    this.selectedSeq.set(null);
    this.businessList.set([]);
  }

  private loadBusinessList(): void {
    if (!this.selectedResumeNo || !this.selectedDeptKey) return;
    this.loadingList.set(true);
    this.api.getBusinessList(this.selectedResumeNo, this.selectedDeptKey).subscribe({
      next: (list) => {
        this.businessList.set(list ?? []);
        this.loadingList.set(false);
      },
      error: () => {
        this.businessList.set([]);
        this.loadingList.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  selectRow(row: OrgBusinessRelationDto): void {
    this.selectedSeq.set(this.selectedSeq() === row.seq ? null : row.seq);
  }

  // ==================== Thêm mới / Sửa ====================

  openAddModal(): void {
    if (!this.selectedDeptKey) {
      this.message.warning(this.i18n.t('orgBusiness.msg.pleaseSelectDept', 'Vui lòng chọn phòng ban để xem danh sách nghiệp vụ!'));
      return;
    }
    this.modalMode.set('NEW');
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(): void {
    const row = this.selectedRow();
    if (!row) return;
    this.modalMode.set('EDIT');
    this.form = {
      seq: row.seq,
      codeNo: row.codeNo,
      orderNo: row.orderNo ?? 0,
      isDefault: row.isDefault === '1',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  save(): void {
    if (!this.form.codeNo?.trim()) {
      this.message.warning(this.i18n.t('orgBusiness.msg.pleaseEnterCodeNo', 'Vui lòng nhập mã công việc!'));
      return;
    }
    if (!this.selectedResumeNo || !this.selectedDeptKey) return;

    const payload: OrgBusinessRelationDto = {
      seq: this.form.seq,
      resumeNo: this.selectedResumeNo,
      deptNo: this.selectedDeptKey,
      codeNo: this.form.codeNo.trim(),
      orderNo: this.form.orderNo,
      isDefault: this.form.isDefault ? '1' : '0',
      updatedBy: null,
      updateDate: null,
      businessName: null,
      deptName: null,
    };

    this.saving.set(true);
    this.api.saveBusiness(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message);
        this.loadBusinessList();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(): void {
    if (!this.selectedRow()) return;
    this.deleteConfirmVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteConfirmVisible.set(false);
  }

  confirmDelete(): void {
    const row = this.selectedRow();
    if (!row?.seq) return;
    this.deleting.set(true);
    this.api.deleteBusiness(row.seq).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteConfirmVisible.set(false);
        this.message.success(res.message);
        this.selectedSeq.set(null);
        this.loadBusinessList();
      },
      error: (err) => {
        this.deleting.set(false);
        const msg = err?.error?.error || this.i18n.t('common.deleteFail', 'Xóa thất bại!');
        this.message.error(msg);
      },
    });
  }
}
