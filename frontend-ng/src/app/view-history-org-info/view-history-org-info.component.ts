import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormatEmitEvent, NzTreeModule } from 'ng-zorro-antd/tree';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { OrgTreeNodeOptions, buildOrgTree, collectAllKeys } from '../view-compose-org/org-info-tree.util';
import { OrgEmployeeDto, OrgInfoDto } from '../view-compose-org/view-compose-org.model';
import { ViewComposeOrgService } from '../view-compose-org/view-compose-org.service';
import { OrgResumeInfoDto } from '../view-resume-list/view-resume-list.model';

/** Các key message.properties dùng trong trang này - toàn bộ tái dùng key đã có sẵn (không cần tạo
 *  namespace riêng): "org.orgManage.viewHistoryOrgInfo.title" (tiêu đề trang), "orgResumeProcess.*"
 *  (dropdown phiên bản), "orgCompose.*" (cây tổ chức/form thông tin tổ chức/danh sách nhân viên - cùng
 *  khái niệm và cùng API OrgComposeController#getOrgStructure/getEmployeesByDept với trang
 *  view-compose-org, chỉ khác ở chỗ trang này chỉ xem, không có CRUD), "org.title.*"/"org.orgManage.*"/
 *  "hrm.empinfo.hrcard.empGroup", "common.*" - tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'org.orgManage.viewHistoryOrgInfo.title', 'orgResumeProcess.versionName', 'orgResumeProcess.selectPlaceholder',
  'orgCompose.searchTreePlaceholder', 'orgCompose.expandAll', 'orgCompose.collapseAll', 'orgCompose.msg.noOrgData',
  'orgCompose.orgInfoTitle', 'orgCompose.orgNameLocal', 'orgCompose.isPartTime', 'orgCompose.costCenter',
  'orgCompose.employeeListTitle',
  'org.orgManage.title.deptNo', 'org.orgManage.title.parentDept', 'org.orgManage.title.deptEnglishName',
  'org.orgManage.title.deptType', 'org.orgManage.ORGANIZATIONAL_LEVEL.Z', 'org.orgManage.DEPARTMENT_INFORMATION.Z',
  'org.title.LOCAL_NAME', 'org.title.EMPID', 'org.title.BUSINESS_NAME', 'org.title.POSITION_NO',
  'hrm.empinfo.hrcard.empGroup',
  'common.stt', 'common.status', 'common.noData', 'common.totalRows', 'common.createDate', 'common.loadFail',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

/**
 * Bản Angular của org/orgManage/viewHistoryOrgInfo.html (Thymeleaf + jQuery + jsTree + DataTables) -
 * phiên bản CHỈ XEM của view-compose-org: duyệt cây tổ chức của 1 phiên bản thay đổi, xem thông tin 1
 * phòng ban + danh sách nhân viên, không có thao tác thêm/sửa/xóa/điều chuyển. Dùng lại nguyên
 * ViewComposeOrgService + OrgInfoDto/OrgEmployeeDto + org-info-tree.util (buildOrgTree/collectAllKeys)
 * đã viết cho view-compose-org, vì cùng gọi đúng 1 API OrgComposeController#getOrgStructure/
 * getEmployeesByDept, tránh viết lại logic dựng cây/gọi API đã có sẵn. Ô "Mã chi phí" hiển thị thẳng mã
 * đã lưu (không tải danh sách trung tâm chi phí để đối chiếu tên) vì trang chỉ xem, không cho chọn lại.
 * Bỏ cột checkbox chọn nhân viên (bản gốc disabled toàn bộ, không có thao tác điều chuyển ở trang này)
 * và nút "Chọn phòng ban trên" (bản gốc không có script gắn cho nút này, cũng không cho sửa)
 * - đúng tinh thần loại bỏ UI chết đã áp dụng khi chuyển view-compose-org.
 */
@Component({
  selector: 'app-view-history-org-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzSpinModule,
    NzTableModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-history-org-info.component.html',
  styleUrl: './view-history-org-info.component.css',
})
export class ViewHistoryOrgInfoComponent implements OnInit {
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

  readonly selectedOrgInfo = signal<OrgInfoDto | null>(null);

  readonly employees = signal<OrgEmployeeDto[]>([]);
  readonly loadingEmployees = signal(false);

  constructor(
    private readonly api: ViewComposeOrgService,
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
    this.selectedDeptKey = null;
    this.selectedOrgInfo.set(null);
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
    this.selectedOrgInfo.set(data);
    this.loadEmployees(data.deptNo);
  }

  private loadEmployees(deptNo: string): void {
    if (!this.selectedResumeNo) {
      this.employees.set([]);
      return;
    }
    this.loadingEmployees.set(true);
    this.api.getEmployees(this.selectedResumeNo, deptNo).subscribe({
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

  dateCreatedDisplay(item: OrgInfoDto): string {
    if (!item.dateCreated) return '';
    const d = new Date(item.dateCreated);
    return isNaN(d.getTime()) ? '' : formatDate(d, 'dd/MM/yyyy', 'vi');
  }
}
