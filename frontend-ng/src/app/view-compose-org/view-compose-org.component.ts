import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
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
import { OrgTreeNodeOptions, buildOrgTree, collectAllKeys } from './org-info-tree.util';
import { OrgCostCenterOption, OrgEmployeeDto, OrgInfoDto } from './view-compose-org.model';
import { ViewComposeOrgService } from './view-compose-org.service';

/** Các key message.properties dùng trong trang này - namespace "orgCompose" dành riêng cho trang này,
 *  còn lại tái sử dụng nguyên các key đã có ở "common", "orgResumeProcess" (dropdown phiên bản - cùng
 *  khái niệm ORG_RESUME_INFO với trang view-resume-process), "org.orgManage.*"/"org.title.*"/
 *  "hrm.empinfo.hrcard.empGroup" (đúng nhãn field tổ chức/nhân viên đã có sẵn ở các trang org khác) -
 *  tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'org.orgManage.viewComposeOrg.title', 'orgResumeProcess.versionName', 'orgResumeProcess.selectPlaceholder',
  'orgCompose.searchTreePlaceholder', 'orgCompose.expandAll', 'orgCompose.collapseAll',
  'orgCompose.orgInfoTitle', 'orgCompose.orgNameLocal', 'orgCompose.isPartTime', 'orgCompose.costCenter',
  'orgCompose.employeeListTitle', 'orgCompose.btnTransfer', 'orgCompose.selectParentTitle',
  'orgCompose.selectTargetTitle', 'orgCompose.searchPlaceholder', 'orgCompose.confirmTransfer',
  'orgCompose.msg.pleaseSelectResume', 'orgCompose.msg.pleaseEnterDeptNo', 'orgCompose.msg.confirmDelete',
  'orgCompose.msg.pleaseSelectEmployee', 'orgCompose.msg.pleaseSelectParent', 'orgCompose.msg.pleaseSelectTarget',
  'orgCompose.msg.noOrgData',
  'org.orgManage.title.deptNo', 'org.orgManage.title.parentDept', 'org.orgManage.title.deptEnglishName',
  'org.orgManage.title.deptType', 'org.orgManage.ORGANIZATIONAL_LEVEL.Z', 'org.orgManage.DEPARTMENT_INFORMATION.Z',
  'org.title.LOCAL_NAME', 'org.title.EMPID', 'org.title.BUSINESS_NAME', 'org.title.POSITION_NO',
  'hrm.empinfo.hrcard.empGroup',
  'common.stt', 'common.addNew', 'common.edit', 'common.save', 'common.delete', 'common.cancel', 'common.close',
  'common.confirm', 'common.status', 'common.noData', 'common.totalRows', 'common.createDate', 'common.loadFail',
  'common.saveFail', 'common.deleteFail',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

type ComposeMode = 'VIEW' | 'NEW' | 'EDIT';

interface OrgInfoForm {
  deptNo: string;
  parentDeptNo: string | null;
  orgNameEng: string | null;
  orgNameLocal: string | null;
  deptType: string | null;
  deptLevel: number | null;
  managerEmpId: string | null;
  dateCreated: Date | null;
  isPartTime: boolean;
  costCenter: string | null;
}

const EMPTY_FORM: OrgInfoForm = {
  deptNo: '',
  parentDeptNo: null,
  orgNameEng: null,
  orgNameLocal: null,
  deptType: 'TEAM',
  deptLevel: null,
  managerEmpId: null,
  dateCreated: null,
  isPartTime: false,
  costCenter: null,
};

/**
 * Bản Angular của org/orgManage/viewComposeOrg.html (Thymeleaf + jQuery + jsTree + DataTables) - màn
 * hình chính quản lý cơ cấu tổ chức theo phiên bản thay đổi: duyệt cây tổ chức bên trái, xem/thêm/sửa/
 * xóa thông tin 1 phòng ban + danh sách nhân viên của phòng ban đó bên phải, điều chuyển nhân viên sang
 * phòng ban khác. Gọi lại nguyên API JSON đã có sẵn ở OrgComposeController + OrgCostCenterController
 * (xem ViewComposeOrgService) - không đổi backend. jsTree được thay bằng nz-tree (dựng cây thật theo
 * parent/child thay vì gọi lại thư viện ngoài), DataTables thay bằng nz-table, 2 modal Bootstrap (chọn
 * phòng ban trên / chọn phòng ban điều chuyển đến) thay bằng nz-modal, dùng lại đúng 1 cây dữ liệu
 * treeNodes() cho cả 3 nơi hiển thị (cây chính + 2 modal) vì cùng nguồn dữ liệu orgList().
 *
 * 2 khác biệt có chủ đích so với bản gốc (không đổi API, chỉ đổi tương tác UI cho khớp idiom NG-ZORRO):
 * - Ô tìm kiếm cây lọc trực tiếp khi gõ (nzSearchValue) thay vì phải bấm nút "Tra cứu" riêng.
 * - Bỏ ô "Tên trưởng phòng" (managerName) và nút tìm nhân viên cạnh Trưởng phòng: bản gốc không có API
 *   nào đổ dữ liệu cho managerName lẫn nút tìm (luôn disabled, không hoạt động) nên không có gì để
 *   chuyển đổi ngoài giữ nguyên 1 ô readonly rỗng.
 */
@Component({
  selector: 'app-view-compose-org',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzDatePickerModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzSelectModule,
    NzSpinModule,
    NzTableModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-compose-org.component.html',
  styleUrl: './view-compose-org.component.css',
})
export class ViewComposeOrgComponent implements OnInit {
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

  readonly mode = signal<ComposeMode>('VIEW');
  form: OrgInfoForm = { ...EMPTY_FORM };
  readonly saving = signal(false);
  readonly deleting = signal(false);
  readonly deleteConfirmVisible = signal(false);

  readonly employees = signal<OrgEmployeeDto[]>([]);
  readonly loadingEmployees = signal(false);
  readonly selectedEmpIds = signal<Set<string>>(new Set());
  readonly allEmpChecked = computed(
    () => this.employees().length > 0 && this.employees().every((e) => this.selectedEmpIds().has(e.empId)),
  );

  readonly costCenterOptions = signal<OrgCostCenterOption[]>([]);

  readonly parentModalVisible = signal(false);
  pendingParentKey: string | null = null;
  parentSearchValue = '';

  readonly targetModalVisible = signal(false);
  readonly transferring = signal(false);
  pendingTargetKey: string | null = null;
  targetSearchValue = '';

  constructor(
    private readonly api: ViewComposeOrgService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadResumeDropdown();
    this.api.getCostCenters().subscribe({
      next: (res) => this.costCenterOptions.set(res.data ?? []),
      error: () => this.costCenterOptions.set([]),
    });
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
    this.selectedDeptKey = null;
    this.mode.set('VIEW');
    this.form = { ...EMPTY_FORM };
    this.employees.set([]);
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
    this.loadOrgDetails(data);
  }

  private loadOrgDetails(item: OrgInfoDto): void {
    this.mode.set('VIEW');
    this.form = {
      deptNo: item.deptNo,
      parentDeptNo: item.parentDeptNo,
      orgNameEng: item.orgNameEng,
      orgNameLocal: item.orgNameLocal,
      deptType: item.deptType,
      deptLevel: item.deptLevel,
      managerEmpId: item.managerEmpId,
      dateCreated: this.toDate(item.dateCreated),
      isPartTime: item.isPartTime === 'Y',
      costCenter: item.costCenter,
    };
    this.loadEmployees();
  }

  private loadEmployees(): void {
    if (!this.selectedResumeNo || !this.form.deptNo) {
      this.employees.set([]);
      return;
    }
    this.loadingEmployees.set(true);
    this.selectedEmpIds.set(new Set());
    this.api.getEmployees(this.selectedResumeNo, this.form.deptNo).subscribe({
      next: (list) => {
        this.employees.set(list ?? []);
        this.loadingEmployees.set(false);
      },
      error: () => {
        this.employees.set([]);
        this.loadingEmployees.set(false);
      },
    });
  }

  // ==================== Thêm mới / Sửa / Hủy ====================

  startNew(): void {
    if (!this.selectedResumeNo) {
      this.message.warning(this.i18n.t('orgCompose.msg.pleaseSelectResume', 'Vui lòng chọn phiên bản thay đổi tổ chức!'));
      return;
    }
    this.mode.set('NEW');
    this.form = { ...EMPTY_FORM, parentDeptNo: this.selectedDeptKey, dateCreated: new Date() };
    this.employees.set([]);
  }

  startEdit(): void {
    if (!this.form.deptNo) return;
    this.mode.set('EDIT');
  }

  cancelEdit(): void {
    const current = this.selectedDeptKey ? this.orgList().find((o) => o.deptNo === this.selectedDeptKey) : undefined;
    if (current) {
      this.loadOrgDetails(current);
    } else {
      this.mode.set('VIEW');
      this.form = { ...EMPTY_FORM };
    }
  }

  save(): void {
    if (!this.form.deptNo) {
      this.message.warning(this.i18n.t('orgCompose.msg.pleaseEnterDeptNo', 'Vui lòng nhập Mã phòng ban!'));
      return;
    }
    const isNew = this.mode() === 'NEW';
    const payload: OrgInfoDto = {
      resumeNo: this.selectedResumeNo,
      deptNo: this.form.deptNo,
      parentDeptNo: this.form.parentDeptNo,
      orgNameEng: this.form.orgNameEng,
      orgNameLocal: this.form.orgNameLocal,
      deptType: this.form.deptType,
      deptLevel: this.form.deptLevel,
      managerEmpId: this.form.managerEmpId,
      dateCreated: this.formatYmd(this.form.dateCreated),
      isPartTime: this.form.isPartTime ? 'Y' : 'N',
      costCenter: this.form.costCenter,
      activity: null,
    };

    this.saving.set(true);
    this.api.saveOrgInfo(payload, isNew).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.message.success(res.message);
        this.selectedDeptKey = this.form.deptNo;
        this.mode.set('VIEW');
        if (this.selectedResumeNo) this.loadOrgTree(this.selectedResumeNo);
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
    if (!this.form.deptNo) return;
    this.deleteConfirmVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteConfirmVisible.set(false);
  }

  confirmDelete(): void {
    if (!this.selectedResumeNo || !this.form.deptNo) return;
    this.deleting.set(true);
    this.api.deleteOrgInfo(this.selectedResumeNo, this.form.deptNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteConfirmVisible.set(false);
        this.message.success(res.message);
        this.selectedDeptKey = null;
        this.mode.set('VIEW');
        this.form = { ...EMPTY_FORM };
        this.employees.set([]);
        if (this.selectedResumeNo) this.loadOrgTree(this.selectedResumeNo);
      },
      error: (err) => {
        this.deleting.set(false);
        const msg = err?.error?.error || this.i18n.t('common.deleteFail', 'Xóa thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Modal chọn phòng ban trên ====================

  openParentModal(): void {
    this.pendingParentKey = this.form.parentDeptNo;
    this.parentSearchValue = '';
    this.parentModalVisible.set(true);
  }

  closeParentModal(): void {
    this.parentModalVisible.set(false);
  }

  onParentTreeClick(event: NzFormatEmitEvent): void {
    const data = (event.node?.origin as OrgTreeNodeOptions | undefined)?.data;
    this.pendingParentKey = data?.deptNo ?? null;
  }

  confirmParent(): void {
    if (!this.pendingParentKey) {
      this.message.warning(this.i18n.t('orgCompose.msg.pleaseSelectParent', 'Vui lòng chọn phòng ban!'));
      return;
    }
    this.form.parentDeptNo = this.pendingParentKey;
    this.parentModalVisible.set(false);
  }

  // ==================== Danh sách nhân viên / điều chuyển ====================

  isEmpChecked(empId: string): boolean {
    return this.selectedEmpIds().has(empId);
  }

  toggleEmpCheck(empId: string, checked: boolean): void {
    const next = new Set(this.selectedEmpIds());
    if (checked) next.add(empId);
    else next.delete(empId);
    this.selectedEmpIds.set(next);
  }

  toggleAllEmp(checked: boolean): void {
    this.selectedEmpIds.set(checked ? new Set(this.employees().map((e) => e.empId)) : new Set());
  }

  openTransferModal(): void {
    if (this.selectedEmpIds().size === 0) {
      this.message.warning(this.i18n.t('orgCompose.msg.pleaseSelectEmployee', 'Vui lòng chọn nhân viên cần điều chuyển!'));
      return;
    }
    this.pendingTargetKey = null;
    this.targetSearchValue = '';
    this.targetModalVisible.set(true);
  }

  closeTransferModal(): void {
    this.targetModalVisible.set(false);
  }

  onTargetTreeClick(event: NzFormatEmitEvent): void {
    const data = (event.node?.origin as OrgTreeNodeOptions | undefined)?.data;
    this.pendingTargetKey = data?.deptNo ?? null;
  }

  confirmTransfer(): void {
    if (!this.pendingTargetKey) {
      this.message.warning(this.i18n.t('orgCompose.msg.pleaseSelectTarget', 'Vui lòng chọn phòng ban đến!'));
      return;
    }
    if (!this.selectedResumeNo) return;

    this.transferring.set(true);
    this.api
      .transferEmployees({
        resumeNo: this.selectedResumeNo,
        targetDeptNo: this.pendingTargetKey,
        empIds: Array.from(this.selectedEmpIds()),
      })
      .subscribe({
        next: (res) => {
          this.transferring.set(false);
          this.targetModalVisible.set(false);
          this.message.success(res.message);
          this.loadEmployees();
        },
        error: (err) => {
          this.transferring.set(false);
          const msg = err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!');
          this.message.error(msg);
        },
      });
  }

  private toDate(dateStr: string | null): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
