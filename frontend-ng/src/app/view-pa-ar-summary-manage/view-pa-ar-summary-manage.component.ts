import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule, NzTableFilterList } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { ViewPaWorkFlowService } from '../view-pa-work-flow/view-pa-work-flow.service';
import { ViewRetrieveSqlMasterListService } from '../view-retrieve-sql-master-list/view-retrieve-sql-master-list.service';
import {
  PaArSummaryManageDto,
  PaArSummaryManageRow,
  PaArSummaryOption,
} from './view-pa-ar-summary-manage.model';
import { ViewPaArSummaryManageService } from './view-pa-ar-summary-manage.service';

/** Các key message.properties dùng trong trang này - đều đã có sẵn (dùng chung với JSP gốc
 *  viewPaArSummaryForManageList.jsp: ar.viewPaArSummaryForManageList.*, ess.*, org.title.*, hr.*), chỉ thêm
 *  mới pa.arSummaryManage.msgConfirmedCannotEdit (bản gốc hardcode tiếng Trung). Các key empSearch.x /
 *  epi.field.position / vdp.search.dept.placeholder / mep.msg.loadDeptFailed dùng cho popup tìm nhân viên
 *  (tái dùng đúng pattern ViewPaInputItemDataComponent). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'ess.empInfo.pay_plan', 'ess.infoApply.DEPT',
  'org.title.ALL', 'ess.message.save', 'ess.infoApply.export_to_Excel', 'ess.infoApply.EMP_ID',
  'ess.infoApply.NAME', 'ess.infoApply.Rank', 'ess.empInfo.date_of_agency', 'ar.viewcycleparameter.title.kaishiriqi',
  'ess.empInfo.remarks', 'org.title.UPDATED_IP', 'org.title.UPDATE_DATE', 'hr.viewPersonalInfo.title.chakanquanbu',
  'ess.message.confirm_sava', 'org.title.IS_SELECT_EXECUTE',
  'ar.viewPaArSummaryForManageList.CHAKANXUANZHONG.b', 'ar.viewPaArSummaryForManageList.QINGXUANZERENYUANXIANGMUBUMEN.b',
  'ar.viewPaArSummaryForManageList.QINGXUANZEBAOCUNSHUJU.b', 'ar.viewPaArSummaryForManageList.GONGZIYIQUERENBUNENGJISUAN.b',
  'ar.viewPaArSummaryForManageList.KAOQINHUIZONGXIANGMU.b', 'ar.viewPaArSummaryForManageList.SHIFOULIWAI.b',
  'ar.viewPaArSummaryForManageList.LIWAI.b', 'ar.viewPaArSummaryForManageList.JIANSUO.b',
  'ar.viewPaArSummaryForManageList.KAOQINHUIZONGJISUAN.b', 'ar.viewPaArSummaryForManageList.DAOCHULIWAISHUJU.b',
  'ar.viewPaArSummaryForManageList.XITONGZHI.b', 'ar.viewPaArSummaryForManageList.LIWAIZHI.b',
  'pa.arSummaryManage.msgConfirmedCannotEdit', 'pa.workFlow.msgSelectSchedule',
  'autoExcel.msg.noData', 'autoExcel.msg.executeFail',
  'common.confirm', 'common.cancel', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.saveSuccess',
  'common.saveFail', 'common.selectAll', 'common.search',
  'arSupervisor.btn.select',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const EMP_OFFICE_PARENT_CODE = '15118';
const PAGE_SIZE_OPTIONS = [20, 50, 100, 500];
/** Báo cáo AutoExcel "Xuất dữ liệu ngoại lệ" - đúng /disc/autoExcel/exportLOtImportExcel?SQL_SEQMEAN=292 bản gốc. */
const EXCEPTION_REPORT_SQL_SEQ = '292';

/**
 * Bản Angular của pa/workManagement/viewPaArSummaryForManageList.jsp (DWZ + jQuery DataTables, dự án
 * Hanwha_HTSV) - quản lý tổng hợp chấm công theo kế hoạch trả lương: xem giá trị hệ thống, nhập giá trị
 * ngoại lệ / ghi chú cho các dòng đã chọn, chạy lại tổng hợp chấm công, xuất Excel.
 * - Bảng dùng nz-table phân trang client-side (bản gốc DataTables cũng tải toàn bộ rồi phân trang ở client),
 *   lọc cột Phòng ban / Chức vụ / Hạng mục bằng nzFilters thay cho dropdown lọc tự dựng ở header.
 * - "Xem đã chọn" / "Xem tất cả" giữ nguyên hành vi lọc các dòng đã tick (đánh dấu @willBeCommit@ ở bản gốc);
 *   sửa giá trị ngoại lệ / ghi chú tự tick dòng đó (onchange -> checked như bản gốc).
 * - "Tổng hợp chấm công" tái dùng API quy trình lương /api/workFlow/execute (type = arMonthCal, xem
 *   ViewPaWorkFlowService) - đúng /pa/workManagement/execPaWorkFlow?processType=arMonthCal bản gốc.
 * - "Xuất dữ liệu ngoại lệ" tái dùng AutoExcel (ViewRetrieveSqlMasterListService.export, báo cáo 292).
 * - Popup chọn nhân viên + cây phòng ban tái dùng ChangeUserService (phòng ban phân quyền AR - limit="ar" bản gốc).
 */
@Component({
  selector: 'app-view-pa-ar-summary-manage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzTreeSelectModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-ar-summary-manage.component.html',
  styleUrl: './view-pa-ar-summary-manage.component.css',
})
export class ViewPaArSummaryManageComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly schedules = signal<PaArSummaryOption[]>([]);
  readonly summaryItems = signal<PaArSummaryOption[]>([]);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  // ==================== Điều kiện tìm kiếm ====================
  searchKey = '';
  empInfo = '';
  payScheduleNo: string | null = null;
  searchItemNos: string[] = [];
  searchDeptNo: string | null = null;
  isSpecialFlag = '';

  // ==================== Kết quả ====================
  readonly rows = signal<PaArSummaryManageRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly searched = signal(false);
  readonly checkedNos = signal<Set<number>>(new Set());
  readonly onlyChecked = signal(false);
  readonly saving = signal(false);
  readonly calculating = signal(false);
  readonly exportingException = signal(false);
  pageIndex = 1;
  pageSize = 20;

  /** Dữ liệu đang hiển thị: toàn bộ, hoặc chỉ các dòng đã chọn (Xem đã chọn). */
  readonly displayRows = computed(() => {
    const list = this.rows();
    if (!this.onlyChecked()) return list;
    const checked = this.checkedNos();
    return list.filter((r) => checked.has(r.arSummaryManageNo));
  });

  readonly deptFilters = computed(() => this.buildFilters((r) => r.deptName));
  readonly postGradeFilters = computed(() => this.buildFilters((r) => r.postGrade));
  readonly itemFilters = computed(() => this.buildFilters((r) => r.itemName));

  readonly filterDept = (values: string[], r: PaArSummaryManageRow) => values.includes(r.deptName ?? '');
  readonly filterPostGrade = (values: string[], r: PaArSummaryManageRow) => values.includes(r.postGrade ?? '');
  readonly filterItem = (values: string[], r: PaArSummaryManageRow) => values.includes(r.itemName ?? '');

  readonly sortNo = (a: PaArSummaryManageRow, b: PaArSummaryManageRow) => a.no - b.no;
  readonly sortEmpId = this.textSort((r) => r.empId);
  readonly sortName = this.textSort((r) => r.localName);
  readonly sortDept = this.textSort((r) => r.deptName);
  readonly sortPostGrade = this.textSort((r) => r.postGrade);
  readonly sortDateStarted = this.textSort((r) => this.dmyKey(r.dateStarted));
  readonly sortItem = this.textSort((r) => r.itemName);
  readonly sortArStart = this.textSort((r) => this.dmyKey(r.arStartDate));
  readonly sortCalValue = (a: PaArSummaryManageRow, b: PaArSummaryManageRow) => (a.calValue ?? 0) - (b.calValue ?? 0);
  readonly sortFinalValue = (a: PaArSummaryManageRow, b: PaArSummaryManageRow) =>
    (a.editFinalValue ?? Number.NEGATIVE_INFINITY) - (b.editFinalValue ?? Number.NEGATIVE_INFINITY);
  readonly sortRemark = this.textSort((r) => r.editRemark);
  readonly sortUpdatedBy = this.textSort((r) => r.updatedBy);
  readonly sortUpdateDate = this.textSort((r) => this.dmyKey(r.updateDate));

  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewPaArSummaryManageService,
    private readonly workFlowApi: ViewPaWorkFlowService,
    private readonly autoExcelApi: ViewRetrieveSqlMasterListService,
    private readonly empApi: ChangeUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        // Giống <select> bản gốc: mặc định chọn kế hoạch đầu tiên (PAY_DATE mới nhất).
        if (list?.length && !this.payScheduleNo) this.payScheduleNo = list[0].code;
      },
      error: () => this.message.warning(this.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
    this.api.getSummaryItems().subscribe({
      next: (list) => this.summaryItems.set(list ?? []),
      error: () => this.summaryItems.set([]),
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  // ==================== Tìm kiếm ====================

  search(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    // Tránh truy vấn quá nhiều dữ liệu - bắt buộc chọn nhân viên / hạng mục / phòng ban / ngoại lệ (đúng bản gốc).
    if (!this.searchKey.trim() && !this.searchDeptNo && this.searchItemNos.length === 0 && !this.isSpecialFlag) {
      this.message.warning(this.t('ar.viewPaArSummaryForManageList.QINGXUANZERENYUANXIANGMUBUMEN.b',
        'Xin chọn nhân viên, hạng mục hoặc phòng ban'));
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      payScheduleNo: this.payScheduleNo,
      key: this.searchKey.trim(),
      deptNo: this.searchDeptNo ?? '',
      itemNos: this.searchItemNos,
      isSpecialFlag: this.isSpecialFlag,
    }).subscribe({
      next: (list) => {
        this.rows.set((list ?? []).map((d, i) => this.toRow(d, i)));
        this.checkedNos.set(new Set());
        this.onlyChecked.set(false);
        this.pageIndex = 1;
        this.searched.set(true);
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.error || this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.checkedNos.set(new Set());
        this.loading.set(false);
      },
    });
  }

  /** Người dùng gõ lại ô Mã NV/Họ tên -> bỏ thông tin nhân viên đã chọn từ popup. */
  onKeyChange(): void {
    this.empInfo = '';
  }

  clearItems(): void {
    this.searchItemNos = [];
  }

  // ==================== Chọn dòng ====================

  isChecked(row: PaArSummaryManageRow): boolean {
    return this.checkedNos().has(row.arSummaryManageNo);
  }

  toggleChecked(row: PaArSummaryManageRow, checked: boolean): void {
    const next = new Set(this.checkedNos());
    if (checked) next.add(row.arSummaryManageNo);
    else next.delete(row.arSummaryManageNo);
    this.checkedNos.set(next);
  }

  /** Tick "chọn tất cả" chọn toàn bộ dữ liệu (mọi trang) - đúng hành vi viewCheckGroup bản gốc. */
  get allChecked(): boolean {
    const list = this.rows();
    return list.length > 0 && this.checkedNos().size === list.length;
  }

  get someChecked(): boolean {
    return this.checkedNos().size > 0 && !this.allChecked;
  }

  toggleAllChecked(checked: boolean): void {
    this.checkedNos.set(checked ? new Set(this.rows().map((r) => r.arSummaryManageNo)) : new Set());
  }

  /** Sửa giá trị ngoại lệ / ghi chú -> tự tick dòng đó (onchange bản gốc). */
  onRowEdited(row: PaArSummaryManageRow): void {
    if (!this.isChecked(row)) this.toggleChecked(row, true);
  }

  showOnlyChecked(): void {
    this.onlyChecked.set(true);
    this.pageIndex = 1;
  }

  showAll(): void {
    this.onlyChecked.set(false);
    this.pageIndex = 1;
  }

  get selectedCount(): number {
    return this.checkedNos().size;
  }

  // ==================== Lưu ngoại lệ ====================

  save(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    // Bản gốc chuyển sang "Xem đã chọn" trước khi lưu để người dùng thấy các dòng sẽ được lưu.
    this.showOnlyChecked();
    const checked = this.checkedNos();
    const selected = this.rows().filter((r) => checked.has(r.arSummaryManageNo));
    if (selected.length === 0) {
      this.message.error(this.t('ar.viewPaArSummaryForManageList.QINGXUANZEBAOCUNSHUJU.b', 'Xin chọn dữ liệu cần lưu'));
      return;
    }
    if (this.isScheduleConfirmed()) {
      this.message.warning(`${this.scheduleName()} ${this.t('pa.arSummaryManage.msgConfirmedCannotEdit', 'Lương đã xác nhận, không thể sửa!')}`);
      return;
    }
    const payScheduleNo = this.payScheduleNo;
    this.modal.confirm({
      nzTitle: this.t('common.confirm', 'Xác nhận'),
      nzContent: this.t('ess.message.confirm_sava', 'Đồng ý lưu không?'),
      nzOkText: this.t('common.confirm', 'Xác nhận'),
      nzCancelText: this.t('common.cancel', 'Hủy'),
      nzOnOk: () => {
        this.saving.set(true);
        this.api.save({
          payScheduleNo,
          items: selected.map((r) => ({
            arSummaryManageNo: r.arSummaryManageNo,
            finalValue: r.editFinalValue,
            remark: r.editRemark?.trim() ? r.editRemark.trim() : null,
          })),
        }).subscribe({
          next: (res) => {
            this.saving.set(false);
            this.message.success(res.message || this.t('common.saveSuccess', 'Lưu thành công!'));
            this.search();
          },
          error: (err) => {
            this.saving.set(false);
            this.message.error(err?.error?.error || this.t('common.saveFail', 'Lưu thất bại!'));
          },
        });
      },
    });
  }

  // ==================== Tổng hợp chấm công ====================

  calculate(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    if (this.isScheduleConfirmed()) {
      this.message.warning(`${this.scheduleName()} ${this.t('ar.viewPaArSummaryForManageList.GONGZIYIQUERENBUNENGJISUAN.b', 'Lương đã xác nhận, không thể tính!')}`);
      return;
    }
    const payScheduleNo = this.payScheduleNo;
    this.modal.confirm({
      nzTitle: this.t('common.confirm', 'Xác nhận'),
      nzContent: this.t('org.title.IS_SELECT_EXECUTE', 'Đồng ý thực hiện không?'),
      nzOkText: this.t('common.confirm', 'Xác nhận'),
      nzCancelText: this.t('common.cancel', 'Hủy'),
      nzOnOk: () => {
        this.calculating.set(true);
        this.workFlowApi.executeTask(payScheduleNo, 'arMonthCal').subscribe({
          next: (res) => {
            this.calculating.set(false);
            const msg = res?.message ?? '';
            // Bản gốc: kết quả thủ tục chứa "ERROR" -> báo lỗi (statusCode 300).
            if (msg.toUpperCase().includes('ERROR')) this.message.error(msg);
            else this.message.success(msg || this.t('ar.viewPaArSummaryForManageList.KAOQINHUIZONGJISUAN.b', 'Tổng hợp chấm công'));
          },
          error: (err) => {
            this.calculating.set(false);
            this.message.error(err?.error?.error || this.t('autoExcel.msg.executeFail', 'Thực hiện thất bại!'));
          },
        });
      },
    });
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    window.location.href = this.api.exportExcelUrl({
      payScheduleNo: this.payScheduleNo,
      key: this.searchKey.trim(),
      deptNo: this.searchDeptNo ?? '',
    });
  }

  /** Báo cáo AutoExcel 292 - gửi các tham số của form tìm kiếm theo đúng tên field bản gốc (seach_KEY,
   *  PAY_SCHEDULE_NO, ...) kèm tên không tiền tố; AutoExcel chỉ nhận các tham số có trong câu SQL. */
  exportException(): void {
    if (!this.payScheduleNo) {
      this.message.warning(this.t('pa.workFlow.msgSelectSchedule', 'Vui lòng chọn kế hoạch trả lương!'));
      return;
    }
    const key = this.searchKey.trim();
    const deptNo = this.searchDeptNo ?? '';
    const itemNos = this.searchItemNos.join(',');
    const params: Record<string, string> = {
      PAY_SCHEDULE_NO: this.payScheduleNo,
      seach_KEY: key, KEY: key,
      seach_DEPTNO: deptNo, DEPTNO: deptNo,
      seach_AR_SUMMARY_ITEM: itemNos, AR_SUMMARY_ITEM: itemNos,
      isSpecialFlag: this.isSpecialFlag,
    };
    this.exportingException.set(true);
    this.autoExcelApi.export(EXCEPTION_REPORT_SQL_SEQ, params).subscribe((outcome) => {
      this.exportingException.set(false);
      if (outcome.kind === 'file') {
        this.download(outcome.blob, outcome.fileName);
      } else if (outcome.kind === 'empty') {
        this.message.warning(this.t('autoExcel.msg.noData', 'Không có dữ liệu hoặc tham số nhập chưa đúng, vui lòng nhập lại!'));
      } else {
        this.message.error(outcome.message || this.t('autoExcel.msg.executeFail', 'Chạy báo cáo thất bại!'));
      }
    });
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  /** Enter ở ô Mã NV/Họ tên hoặc bấm nút tìm -> mở popup, tra cứu ngay theo nội dung đang gõ (đúng
   *  pa1301_searchPop bản gốc); ra đúng 1 kết quả thì tự chọn. */
  openPicker(): void {
    this.pickerKeyword = this.searchKey.trim();
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerErrorMessage.set(null);
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
    this.pickerSearch();
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? '',
    }).subscribe({
      next: (rows) => {
        this.pickerLoading.set(false);
        if (rows && rows.length === 1) {
          this.selectEmployee(rows[0]);
          return;
        }
        this.pickerRows.set(rows ?? []);
      },
      error: () => {
        this.pickerErrorMessage.set(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      },
    });
  }

  pickerClear(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }

  /** Chọn nhân viên -> điền mã NV vào điều kiện tìm kiếm + hiển thị "Họ tên/Mã NV/Chức vụ/Phòng ban"
   *  (empInfo bản gốc) rồi tra cứu lại luôn (changeUrlToNavTabNum bản gốc tải lại trang). */
  selectEmployee(row: EmployeeSearchDto): void {
    this.searchKey = row.empId;
    this.empInfo = [row.localName, row.empId, row.position, row.deptName].filter((s) => !!s).join('/');
    this.pickerVisible.set(false);
    if (this.payScheduleNo) this.search();
  }

  // ==================== Helpers ====================

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  private toRow(d: PaArSummaryManageDto, i: number): PaArSummaryManageRow {
    return {
      ...d,
      no: i + 1,
      editFinalValue: d.finalValue,
      editRemark: d.remark ?? '',
    };
  }

  private selectedSchedule(): PaArSummaryOption | undefined {
    return this.schedules().find((s) => s.code === this.payScheduleNo);
  }

  private isScheduleConfirmed(): boolean {
    return this.selectedSchedule()?.paConfirmFlag === 1;
  }

  private scheduleName(): string {
    return this.selectedSchedule()?.name ?? '';
  }

  private buildFilters(pick: (r: PaArSummaryManageRow) => string | null): NzTableFilterList {
    const values = Array.from(new Set(this.rows().map((r) => pick(r) ?? ''))).sort((a, b) => a.localeCompare(b));
    return values.map((v) => ({ text: v || '(-)', value: v }));
  }

  private textSort(pick: (r: PaArSummaryManageRow) => string | null) {
    return (a: PaArSummaryManageRow, b: PaArSummaryManageRow) => (pick(a) ?? '').localeCompare(pick(b) ?? '');
  }

  /** 'DD/MM/YYYY[ HH24:MI]' -> 'YYYYMMDD[ HH24:MI]' để sắp xếp đúng thứ tự thời gian. */
  private dmyKey(s: string | null): string {
    if (!s) return '';
    const [date, time] = s.split(' ');
    const [dd, mm, yyyy] = date.split('/');
    return `${yyyy}${mm}${dd}${time ? ' ' + time : ''}`;
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    this.deptChildrenMap = new Map<string, string[]>();
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });

    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select (checkable) chỉ trả về key được tick trực tiếp - mở rộng xuống phòng ban con cho popup
   *  tìm nhân viên (ô Phòng ban của form chính là chọn đơn, backend tự lấy phòng ban con bằng CONNECT BY). */
  private expandDeptSelection(selected: string[]): string[] {
    const result = new Set<string>();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop()!;
      if (result.has(id)) continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children) stack.push(...children);
    }
    return Array.from(result);
  }

  private download(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
