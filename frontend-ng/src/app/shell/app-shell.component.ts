import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit, ViewChild, computed, effect, signal } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzContextMenuService, NzDropdownMenuComponent, NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../auth/auth.service';
import { CurrentUser, MenuItem } from '../auth/auth.model';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ChangePasswordModalComponent } from './change-password-modal.component';
import { ExternalTabComponent } from './external-tab.component';
import { ForcePasswordChangeModalComponent } from './force-password-change-modal.component';
import { LockScreenOverlayComponent } from './lock-screen-overlay.component';
import { LockScreenService } from './lock-screen.service';
import { NotificationsDropdownComponent } from './notifications-dropdown.component';
import { TabItem, TabService } from './tab.service';
import { ThemeSettingsComponent } from './theme-settings.component';
import { ThemeService } from './theme.service';

/** Các key message.properties dùng cho menu chuột phải trên tab-strip + menu user dropdown - tải trước ở ngOnInit. */
const I18N_KEYS = [
  'shell.tab.close',
  'shell.tab.closeAll',
  'shell.tab.closeLeft',
  'shell.tab.closeRight',
  'topbar.changePassword',
  'topbar.hrmAccessDenied',
];

/**
 * Khung chung (topbar + sidebar) cho mọi trang sau đăng nhập - tương đương layout/master.html +
 * fragments/topbar.html + fragments/menuStart.html (bản Thymeleaf). Dùng NG-ZORRO (nz-layout/
 * nz-sider/nz-menu/nz-dropdown) cho phần khung nhìn thay vì Bootstrap. nz-submenu được điều khiển
 * qua [nzOpen]/(nzOpenChange) (openTopMenuNo/openChildMenuNo) để chỉ 1 menu cha (và 1 menu con
 * trong menu cha đó) mở submenu tại 1 thời điểm - kiểu accordion. Menu nào đã
 * migrate sang Angular thì mở tab 'route' (qua Router, giữ state nhờ TabRouteReuseStrategy); menu
 * CHƯA migrate mở tab 'external' (ExternalTabComponent AJAX-fetch trang Thymeleaf, giống innerTab.js).
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    NzLayoutModule,
    NzMenuModule,
    NzDropdownModule,
    NzBadgeModule,
    NotificationsDropdownComponent,
    ThemeSettingsComponent,
    ForcePasswordChangeModalComponent,
    LockScreenOverlayComponent,
    ExternalTabComponent,
    ChangePasswordModalComponent,
    TranslatePipe,
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // cho phép dùng thẻ <iconify-icon> (custom element từ vendor.js)
})
export class AppShellComponent implements OnInit, OnDestroy {
  @ViewChild(ThemeSettingsComponent) themeSettings!: ThemeSettingsComponent;
  @ViewChild(ChangePasswordModalComponent) changePasswordModal!: ChangePasswordModalComponent;

  readonly user = signal<CurrentUser | null>(null);
  readonly menu = signal<MenuItem[]>([]);
  /** Nguồn dữ liệu duy nhất là ThemeService.menuSize - để nút hamburger (toggleSidebar) và drawer
   * "Cài đặt giao diện" (ThemeSettingsComponent) luôn đồng bộ với nhau, thay vì 2 state tách rời. */
  readonly sidebarCollapsed = computed(() => this.theme.menuSize() === 'condensed');

  /** menuNo của submenu cấp 1 (menu cha) đang mở - dùng để đảm bảo chỉ 1 menu cha mở submenu tại 1 thời điểm. */
  readonly openTopMenuNo = signal<string | null>(null);
  /** menuNo của submenu cấp 2 (menu con) đang mở - reset khi đổi menu cha. */
  readonly openChildMenuNo = signal<string | null>(null);

  /** Tab đang được click chuột phải - dùng làm mốc cho các lựa chọn Đóng tab / Đóng bên trái / Đóng bên phải. */
  readonly contextMenuTab = signal<TabItem | null>(null);

  /** Menu ngang hiển thị trên topbar - tương đương #topbar-menu-live trong fragments/topbar.html
   *  (bản Thymeleaf cũ): rỗng ban đầu, chỉ đổ dữ liệu khi người dùng bấm 1 menu ở sidebar (hoặc chính
   *  topbar) - xem showMenuContext(). */
  readonly topbarMenuItems = signal<MenuItem[]>([]);

  /** Trang Thymeleaf cũ đã được migrate sang Angular - map URL cũ (lưu trong DB menu) sang route Angular. */
  private static readonly MIGRATED_ROUTES: Record<string, string> = {
    '/ess/infoApply/viewDeptOtApplyInfo': '/dept-ot-apply-info',
    '/ess/viewDept/ManageEmpPositionInfoList': '/manage-emp-position-info',
    '/ess/viewDept/ManageCountInfoList': '/manage-count-info',
    '/evs/manage/viewEvsResultEmp': '/evs-result-emp',
    '/ess/viewDept/viewManageEvsResultEmpList': '/manage-evs-result-emp',
    '/hrm/empinfo/viewHTSVCardInfoList': '/hr-card-info',
    '/hrm/empinfo/viewTempEmpInfoList': '/view-temp-emp-info-list',
    '/hrm/empinfo/viewWorkInformation': '/work-experience-info',
    '/hrm/empinfo/emergencyAddressSearch': '/emergency-address-info',
    '/hrm/empinfo/addressSearch': '/address-info',
    '/hrm/empinfo/familySearch': '/family-info',
    '/hrm/empinfo/educationSearch': '/education-info',
    '/hrm/empinfo/recognitionSearch': '/recognition-info',
    '/hrm/empinfo/punishmentSearch': '/punishment-info',
    '/hrm/empinfo/viewQualification': '/manage-qualification-info',
    '/pa/salary/viewPaMonthPersonInfoEssList': '/pa-month-person-info',
    '/pa/salary/viewPaFormula': '/view-pa-formula',
    '/pa/salary/viewPaInputItemParam': '/view-pa-input-item-param',
    '/pa/salary/viewPaInputItemData': '/view-pa-input-item-data',
    '/pa/salary/viewPaComputeItemParamList': '/view-pa-compute-item-param-list',
    '/pa/salary/viewPaResult': '/view-pa-result',
    '/ess/change/changeUser': '/change-user',
    '/ess/empinfo/viewPersonalInfoForEss': '/personal-info',
    '/ess/empinfo/viewEssPersonalInfo': '/work-info',
    '/ess/empinfo/viewQualificationInfo': '/qualification-info',
    '/ess/empinfo/viewEssApplyInfo': '/apply-info',
    '/hrm/approve/viewEssApplyInfo': '/hrm-approve-apply-info',
    '/ess/infoApply/viewPiciOtAffirmLBatchList': '/ot-apply-batch-info',
    '/ar/attendanceMintenance/viewArOvertimeManagent_fast': '/ot-apply-batch-info',
    '/ess/infoApplyAttendance/viewApplyAttenanceBatchInfoList': '/apply-attendance-batch-info',
    '/ar/attendanceMintenance/viewApplyAttenanceManagentInfoList_new': '/apply-attendance-batch-info',
    '/ess/infoApplyAttendance/viewAttendanceExForBatchInfoList': '/attendance-ex-batch-info',
    '/ess/infoApplyAttendance/viewCheckAttencetanceExForBatchList': '/check-attendance-ex-for-batch',
    '/ess/infoApplyAttendance/viewCoordApplyAttendanceInfoList': '/coord-apply-attendance-info',
    '/ess/infoApply/viewCoordApplyOtInfoList': '/coord-apply-ot-info-list',
    '/ess/viewDept/viewEmpCalendar': '/ess-view-emp-calendar',
    '/ess/infoApply/viewOtReport': '/view-ot-report',
    '/ess/viewDept/viewArPersonalList': '/view-ar-personal-list',
    '/ess/viewDept/viewOtApplyPersonalList': '/view-ot-apply-personal-list',
    '/ar/attendanceSettings/viewClassCalendar': '/view-class-calendar',
    '/ar/attendanceSettings/viewCycleParameter': '/view-cycle-parameter',
    '/ar/attendanceSettings/viewCycle': '/view-cycle',
    '/pa/workManagement/viewPaPaySchedule': '/view-pa-pay-schedule',
    '/pa/salarycode/viewSalaryCodeList': '/view-salary-code',
    '/pa/workManagement/viewPaWorkFlow': '/view-pa-work-flow',
    '/pa/workManagement/viewPaPayObj': '/view-pa-pay-obj',
    '/pa/workManagement/viewPaEmpAccount': '/view-pa-emp-account',
    '/pa/workManagement/payStub': '/view-pa-pay-stub',
    '/pa/wagebase/viewPaSupervisor': '/view-pa-supervisor',
    '/ar/attendanceSettings/viewDynamicGroup': '/view-dynamic-group',
    '/ar/attendanceSettings/viewArItem': '/view-ar-item',
    '/ar/attendanceSettings/viewArItemParamList': '/view-ar-item-param-list',
    '/ar/attendanceSettings/viewItemParameter': '/view-item-parameter',
    '/ar/attendanceSettings/viewShift': '/view-shift',
    '/ar/attendanceSettings/viewStatutoryHolidays': '/view-statutory-holidays',
    '/ar/attendanceSettings/viewCompanyCalendar': '/view-company-calendar',
    '/ar/attendanceSettings/viewEmpCalendar': '/view-emp-calendar',
    '/ar/attendanceSettings/viewSummaryParamItem': '/view-summary-param-item',
    '/ar/attendanceSettings/viewSummaryItem': '/view-summary-item',
    '/ar/attendanceSettings/viewSummaryFormula': '/view-summary-formula',
    '/ar/attendanceSettings/viewAttendanceKeeper': '/view-attendance-keeper',
    '/ar/attendanceSettings/viewDepartManagerList': '/view-depart-manager-list',
    '/ar/attendanceMintenance/viewArCardRecord': '/view-ar-card-record',
    '/ar/attendanceMintenance/viewArCardRecordDay': '/view-ar-card-record-day',
    '/ar/attendanceMintenance/viewArCardRecordMeal': '/view-ar-card-record-meal',
    '/ar/attendanceMintenance/viewArCardRecordForSelf': '/view-ar-card-record-for-self',
    '/ar/attendanceMintenance/viewAttendanceManagentForSerchInfoList': '/attendance-search',
    '/ar/attendanceMintenance/viewSearchApplyOtInfoList': '/search-apply-ot-info-list',
    '/ar/attendanceSettings/viewVacEmpList': '/view-vac-emp-list',
    '/ar/attendanceMintenance/viewArDetailCalculate': '/view-ar-detail-calculate',
    '/ar/attendanceMintenance/addEmpShiftView': '/add-emp-shift',
    '/ess/viewDept/viewEntryInfoList': '/view-entry-info-list',
    '/ess/tempEmp/viewMonthDetailList': '/view-month-detail-list',
    '/ess/workgroup/viewWorkGroupExperList': '/workgroup-exper-list',
    '/ess/deptEmpAtt/viewArShiftGroupList': '/view-ar-shift-group-list',
    '/ess/workgroup/viewPersonShiftList': '/person-shift-list',
    '/ess/infoApplyAttendance/viewSSTApplyAttendance': '/sst-apply-attendance',
    '/ess/infoApplyAttendance/viewApplyAttendanceInfoList': '/apply-attendance-info-list',
    '/ess/infoApply/viewSSTOtApplyInfo': '/sst-ot-apply-info',
    '/ess/infoApply/viewPOtApplyInfoList': '/ot-apply-info-list',
    '/ess/infoApply/viewShowCwaAbnormalApply': '/cwa-abnormal-apply',
    '/ess/infoApplyLeave/viewApplyLeaveInfoList': '/apply-leave-info-list',
    '/ess/infoApplyAttendance/viewAttendancePersonalInfoList': '/attendance-personal-info-list',
    '/ess/infoApply/viewPersonOtApplyInfoList': '/person-ot-apply-info-list',
    '/ess/viewDept/viewArPersonalSelfList': '/view-ar-personal-self-list',
    '/ess/viewDept/viewOtApplyPersonalSelfList': '/view-ot-apply-personal-self-list',
    '/ess/viewDept/yearUseInfo': '/year-use-info',
    '/evs/manage/viewRegPersonalTarget': '/reg-personal-target',
    '/evs/manage/viewResumeList': '/evs-resume-list',
    '/evs/manage/viewEvsSchedulePanel': '/evs-schedule-panel',
    '/evs/manage/viewEvsParamPanel': '/evs-param-panel',
    '/evs/manage/viewEvsDistributionRatePanel': '/evs-distribution-rate-panel',
    '/evs/manage/viewEvsAffirmorSetup': '/evs-affirmor-setup',
    '/evs/manage/viewEvsResult': '/evs-result',
    '/evs/manage/viewEvsItemPanel': '/evs-item-panel',
    '/evs/manage/viewEvsFormulaList': '/evs-formula-list',
    '/evs/manage/viewConfirmTarget1': '/confirm-target1',
    '/evs/manage/viewConfirmTarget2': '/confirm-target2',
    '/evs/manage/viewEvsBySelfHTSV': '/evs-by-self-htsv',
    '/evs/manage/viewAffirmTarget1': '/affirm-target1',
    '/evs/manage/viewAffirmTarget2': '/affirm-target2',
    '/evs/manage/viewEvsBySelfSSTAbility': '/evs-by-self-sst-ability',
    '/evs/manage/viewAffirmTarget1Ability': '/affirm-target1-ability',
    '/evs/manage/viewAffirmTarget2Ability': '/affirm-target2-ability',
    '/ess/infoApply/viewApprovalEmail': '/view-approval-email',
    '/ess/infoApply/viewApprovaledEmail': '/view-approvaled-email',
    '/ess/infoApply/viewNoticeedEmail': '/view-noticeed-email',
    '/hrm/contractInfo/viewNOContractInfo': '/contract-info-list',
    '/hrm/contractInfo/viewExpiredContract': '/expired-contract-list',
    '/hrm/contractInfo/viewContractInfoForSearch': '/contract-info-search',
    '/hrm/contractInfo/viewContractChangeList': '/contract-change-list',
    '/hrm/recruitManage/viewRecruitList': '/view-recruit-list',
    '/hrm/recruitManage/viewRecruitBatchList': '/view-recruit-batch-list',
    '/hrm/empinfo/viewStartPoint': '/view-start-point',
    '/hrm/recruitManage/viewExperienceBatchList': '/view-experience-batch-list',
    '/hrm/empinfo/photoImport': '/photo-import',
    '/ess/arConfirm/viewAttendanceExConfirm': '/attendance-ex-confirm',
    '/ess/arConfirm/viewLeaveConfirmList': '/leave-confirm',
    '/org/orgManage/viewResumeList': '/view-resume-list',
    '/org/orgManage/viewResumeProcess': '/view-resume-process',
    '/org/orgManage/viewComposeOrg': '/view-compose-org',
    '/org/orgManage/viewOrgBusiness': '/view-org-business',
    '/org/orgManage/viewOrgCostCenter': '/view-org-cost-center',
    '/org/orgManage/viewDeptManagerCheck': '/view-dept-manager-check',
    '/org/orgManage/viewCurrentOrgInfo': '/view-current-org-info',
    '/org/orgManage/viewOrgInfo': '/view-org-info',
    '/org/orgManage/viewHistoryOrgInfo': '/view-history-org-info',
    '/sys/basicMaintenance/viewMenuList': '/view-menu-list',
    '/sys/basicMaintenance/viewMenuParamList': '/view-menu-param-list',
    '/sys/basicMaintenance/viewCodeManage': '/view-code-manage',
    '/sys/basicMaintenance/viewCodePamers': '/view-code-param-list',
    '/sys/basicMaintenance/viewCompany': '/view-company',
    '/sys/syRole/viewRolesGroup': '/view-roles-group',
  };

  constructor(
    private readonly auth: AuthService,
    private readonly i18n: I18nService,
    private readonly nzContextMenuService: NzContextMenuService,
    readonly tabs: TabService,
    readonly lockScreen: LockScreenService,
    private readonly theme: ThemeService,
    private readonly message: NzMessageService,
    private readonly router: Router
  ) {
    // Đồng bộ menu ngữ cảnh trên topbar mỗi khi tab active đổi menuNo - không chỉ lúc vừa bấm menu
    // (openMenuTab) mà cả khi người dùng chuyển qua lại giữa các tab đã mở sẵn ở tab-strip, đúng hành
    // vi window.updateTopbarMenuContext() trong fragments/topbar.html bản Thymeleaf cũ.
    effect(() => this.showMenuContext(this.tabs.activeMenuNo()));
  }

  angularRouteFor(menuUrl: string | null): string | null {
    if (!menuUrl) return null;
    // Menu trong DB có thể kèm query string (vd: "?seach_EMP_OFFICE=15119") - đa số trang gốc không
    // dùng tới nên so khớp theo path thuần để tránh bỏ sót menu đã migrate, nhưng vẫn phải giữ lại
    // nguyên query string khi trả về route Angular vì có trang (vd viewRegPersonalTarget) đọc tham số
    // evsType từ URL để lọc dữ liệu bắt buộc - mất tham số này trang sẽ không tải được dữ liệu gì.
    const [path, query] = menuUrl.split('?');
    const route = AppShellComponent.MIGRATED_ROUTES[path];
    if (!route) return null;
    return query ? `${route}?${query}` : route;
  }

  /** Mở menu dưới dạng tab - route Angular nếu đã migrate, ngược lại tab 'external' (Thymeleaf). */
  openMenuTab(menuUrl: string | null, menuName: string, menuNo?: string): void {
    if (!menuUrl) return;
    const ngRoute = this.angularRouteFor(menuUrl);
    this.tabs.openTab(ngRoute ?? menuUrl, menuName, ngRoute ? 'route' : 'external', menuNo);
  }

  /** Tìm đường dẫn (menu gốc -> ... -> chính nó) của 1 menuNo trong cây menu 3 cấp - dùng để xác định
   *  "menu cha trực tiếp + các menu cùng cấp với menu cha" cần hiển thị ở topbar (xem showMenuContext). */
  private findMenuPath(items: MenuItem[], menuNo: string): MenuItem[] | null {
    for (const item of items) {
      if (item.menuNo === menuNo) return [item];
      if (item.children?.length) {
        const childPath = this.findMenuPath(item.children, menuNo);
        if (childPath) return [item, ...childPath];
      }
    }
    return null;
  }

  /** Cập nhật menu ngang trên topbar (topbarMenuItems) theo đúng cơ chế "menu theo ngữ cảnh" của
   *  fragments/topbar.html bản Thymeleaf cũ (initContextualTopbarMenu/showMenuContext): hiển thị menu
   *  cha trực tiếp của menu vừa chọn cùng các menu cùng cấp với menu cha đó (chung MENU_PARENT_NO) -
   *  KHÔNG phải toàn bộ cây và KHÔNG phải con của menu vừa chọn. menuNo rỗng/không tìm thấy -> ẩn topbar. */
  private showMenuContext(menuNo: string | null): void {
    if (!menuNo) {
      this.topbarMenuItems.set([]);
      return;
    }
    const path = this.findMenuPath(this.menu(), menuNo);
    if (!path) {
      this.topbarMenuItems.set([]);
      return;
    }
    const ancestors = path.slice(0, -1);
    if (ancestors.length === 0) {
      // Menu vừa chọn đã ở cấp gốc (không có cha) - "cùng cấp với menu cha" = cùng cấp với chính nó.
      this.topbarMenuItems.set(this.menu());
      return;
    }
    const grandAncestors = ancestors.slice(0, -1);
    const siblings = grandAncestors.length > 0 ? grandAncestors[grandAncestors.length - 1].children ?? [] : this.menu();
    this.topbarMenuItems.set(siblings);
  }

  /** Chặn điều hướng sang HR Management System (/sys/hrm) nếu user không thuộc role group nào có
   *  SYS_TYPE = 0 - cờ hasSysTypeZeroMenus đã được BE tính đúng theo SY_ROLE_GROUP.SYS_TYPE (xem
   *  PermissionServiceImpl.hasRoleGroupWithSysType). *ngIf trên li cha đã ẩn link này khi không có
   *  quyền, hàm này chỉ là lớp phòng vệ bổ sung (vd: quyền vừa bị thu hồi nhưng trang chưa reload). */
  openHrmManagementSystem(event: MouseEvent): void {
    if (this.user()?.hasSysTypeZeroMenus) {
      return;
    }
    event.preventDefault();
    this.message.error(this.i18n.t('topbar.hrmAccessDenied', 'Bạn không có quyền truy cập vào HR Management System'));
  }

  /** Tab hiện đang active của 1 menu item - dùng để tô sáng đúng item trong nz-menu. */
  isMenuActive(menuUrl: string | null): boolean {
    if (!menuUrl) return false;
    const key = this.angularRouteFor(menuUrl) ?? menuUrl;
    return this.tabs.activePath() === key;
  }

  closeTab(event: MouseEvent, tab: TabItem): void {
    event.preventDefault();
    event.stopPropagation();
    this.tabs.closeTab(tab.path);
  }

  trackByPath(_index: number, tab: TabItem): string {
    return tab.path;
  }

  /** Mở menu chuột phải trên 1 tab của tab-strip. */
  onTabContextMenu(event: MouseEvent, tab: TabItem, menu: NzDropdownMenuComponent): void {
    this.contextMenuTab.set(tab);
    this.nzContextMenuService.create(event, menu);
  }

  closeTabFromContextMenu(): void {
    const tab = this.contextMenuTab();
    if (tab) this.tabs.closeTab(tab.path);
  }

  closeAllTabsFromContextMenu(): void {
    this.tabs.closeAllTabs();
  }

  closeTabsToLeftFromContextMenu(): void {
    const tab = this.contextMenuTab();
    if (tab) this.tabs.closeTabsToLeft(tab.path);
  }

  closeTabsToRightFromContextMenu(): void {
    const tab = this.contextMenuTab();
    if (tab) this.tabs.closeTabsToRight(tab.path);
  }

  /** Còn tab (đóng được) nào bên trái tab đang bấm chuột phải không - dùng để disable menu item. */
  canCloseTabsToLeft(): boolean {
    const tab = this.contextMenuTab();
    if (!tab) return false;
    const idx = this.tabs.tabs().findIndex((t) => t.path === tab.path);
    return idx > 0 && this.tabs.tabs().slice(0, idx).some((t) => t.closable);
  }

  /** Còn tab (đóng được) nào bên phải tab đang bấm chuột phải không - dùng để disable menu item. */
  canCloseTabsToRight(): boolean {
    const tab = this.contextMenuTab();
    if (!tab) return false;
    const idx = this.tabs.tabs().findIndex((t) => t.path === tab.path);
    return idx !== -1 && this.tabs.tabs().slice(idx + 1).some((t) => t.closable);
  }

  /** sysType đang dùng để tải menu() hiện tại - tránh gọi lại API khi điều hướng loanh quanh trong
   *  cùng 1 "chế độ" (vd giữa các trang ESS với nhau). Cũng dùng để truyền chế độ ess/hrm cho
   *  NotificationsDropdownComponent (xem menuSysType/notificationMode bên dưới). */
  private currentMenuSysType: string | null = null;
  private readonly menuSysType = signal<string>('1');

  /** '0' = HR Management System -> đổi dropdown thông báo sang chế độ 'hrm' (Chi tiết thay đổi thông
   *  tin/Nghỉ phép/Nghỉ bất thường chờ xác nhận); còn lại ('1' = ESS) -> chế độ 'ess'. */
  readonly notificationMode = computed<'ess' | 'hrm'>(() => (this.menuSysType() === '0' ? 'hrm' : 'ess'));

  async ngOnInit(): Promise<void> {
    await this.auth.checkSession();
    this.user.set(this.auth.currentUser());
    await this.syncMenuForActiveRoute();
    // Sidebar dùng chung cho cả ESS lẫn HR Management System (HrmDashboardComponent render cùng
    // AppShellComponent) - phải theo dõi mỗi lần điều hướng để đổi đúng bộ menu theo SYS_TYPE khai
    // báo ở route data (xem app.routes.ts - route 'hrm-dashboard' có data: { sysType: '0' }).
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => {
      this.syncMenuForActiveRoute();
    });
    this.lockScreen.start();
    this.i18n.loadKeys(I18N_KEYS);
  }

  /** Duyệt từ root xuống route con đang active để lấy data.sysType sâu nhất được khai báo - đến lúc
   *  AppShellComponent được khởi tạo, Router đã resolve xong toàn bộ cây route (guards/data) cho lần
   *  điều hướng hiện tại nên đọc snapshot ở đây là an toàn.
   *  Nếu route đích KHÔNG khai báo sysType (đa số route, kể cả các route nằm trong menu SYS_TYPE=0
   *  như hr-card-info, contract-info-list... vì cùng 1 component có thể được cả 2 bộ menu trỏ tới) thì
   *  GIỮ NGUYÊN chế độ hiện tại (sticky) thay vì mặc định về '1' (ESS) - tránh sidebar tự nhảy về menu
   *  ESS chỉ vì bấm sang 1 trang bất kỳ trong lúc đang ở HR Management System. sysType chỉ thực sự đổi
   *  khi route đích khai báo tường minh (vd 'hrm-dashboard' -> '0', 'dashboard' -> '1'). */
  private resolveMenuSysType(): string {
    let route: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root;
    let sysType: string | null = null;
    while (route) {
      const routeSysType = route.data['sysType'];
      if (routeSysType) sysType = routeSysType;
      route = route.firstChild;
    }
    return sysType ?? this.currentMenuSysType ?? '1';
  }

  private async syncMenuForActiveRoute(): Promise<void> {
    const sysType = this.resolveMenuSysType();
    if (sysType === this.currentMenuSysType) return;
    this.currentMenuSysType = sysType;
    this.menuSysType.set(sysType);
    this.menu.set(await this.auth.getMenu(sysType));
  }

  ngOnDestroy(): void {
    this.lockScreen.stop();
  }

  toggleSidebar(): void {
    this.theme.setMenuSize(this.sidebarCollapsed() ? 'default' : 'condensed');
  }

  /** Đóng submenu cấp 1 khác khi 1 menu cha được mở - chỉ hiển thị menu con của 1 menu cha duy nhất. */
  onTopSubmenuOpenChange(menuNo: string | null, open: boolean): void {
    if (open) {
      this.openTopMenuNo.set(menuNo);
      this.openChildMenuNo.set(null);
    } else if (this.openTopMenuNo() === menuNo) {
      this.openTopMenuNo.set(null);
    }
  }

  /** Đóng submenu cấp 2 khác trong cùng menu cha khi 1 menu con được mở. */
  onChildSubmenuOpenChange(menuNo: string | null, open: boolean): void {
    if (open) {
      this.openChildMenuNo.set(menuNo);
    } else if (this.openChildMenuNo() === menuNo) {
      this.openChildMenuNo.set(null);
    }
  }

  openThemeSettings(): void {
    this.themeSettings.open();
  }

  openChangePasswordModal(): void {
    this.changePasswordModal.open();
  }

  logout(): void {
    this.auth.logout();
  }
}
