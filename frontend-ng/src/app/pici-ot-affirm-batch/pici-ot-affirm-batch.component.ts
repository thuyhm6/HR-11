import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { OtApplyDetailComponent } from '../shared/ot-apply-detail/ot-apply-detail.component';
import { OtApplyBatchInfoService } from '../ot-apply-batch-info/ot-apply-batch-info.service';
import { OtDetailResponse } from '../ot-apply-batch-info/ot-apply-batch-info.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { EmployeeSearchDto } from '../change-user/change-user.model';
import { AttendanceExBatchInfoService } from '../attendance-ex-batch-info/attendance-ex-batch-info.service';
import { AuthDeptNode, CodeItem, ShiftOption } from '../attendance-ex-batch-info/attendance-ex-batch-info.model';
import { PiciOtAffirmBatchService } from './pici-ot-affirm-batch.service';
import { PiciOtApiRow, PiciOtPayload, PiciOtRow, PiciOtValidateInfo } from './pici-ot-affirm-batch.model';

/** Toàn bộ key bên dưới là key gốc của viewPiciOtAffirmLBatchList.jsp, đã có sẵn đủ 5 file messages*.properties. */
const I18N_KEYS = [
  'hrm.empinfo.nameAndEmpid', 'hr.viewPersonalInfo.title.DEPTNAME', 'org.title.DATE',
  'ar.viewArBaseEmpInfoList.BANZULEIXING.b', 'ess.infoApply.overtime_type', 'ess.infoApply.approval_status',
  'ess.affirmApply.title.quxiaoshenqing', 'ess.title.JIABANZHUANGTAI', 'ess.infoApply.title.overtimeTime',
  'ess.infoApply.title.startTime', 'ess.infoApply.end_time', 'hrm.empinfo.reason', 'ess.message.all_reaction',
  'org.title.SELECT', 'ess.empInfo.insert', 'ess.empInfo.Delete', 'ar.viewempcalender.title.save',
  'ess.message.template_download', 'ess.infoApply.EXCEL_IN', 'hrm.empinfo.EXPORT',
  'ess.infoApply.EMPID', 'ess.infoApply.NAME', 'ess.infoApply.DEPT', 'hr.viewPersonalInfo.title.banzu',
  'ess.infoApply.title.apply', 'ess.infoApply.Reason', 'ess.title.JIABANLEIJI',
  'ar.viewAdjustLeaveTSTOBatchList.JIABANSHANGXIAN.b', 'hrm.contractInfo.APPROVAL_PERSON', 'hrm.contract.creator',
  'ess.infoApply.work_time', 'ess.infoApply.out_work_time', 'ess.infoApply.in_door_time',
  'ess.infoApply.out_door_time', 'ess.infoApply.overtime_hours', 'ess.viewPiciOtAffirmLBatchList.DEDUCT_MEAL_TIME.b',
  'heran.ess.viewLikeLeaveApplyInfo.yuanxiuxiri', 'ess.title.KUATIAN', 'ess.viewPiciOtAffirmBatchList.BENNIAN.b',
  'ess.viewPiciOtAffirmBatchList.BENYUE.b', 'ar.viewitemparameter.title.pingshi', 'ar.viewitemparameter.title.zhoumo',
  'ar.viewitemparameter.title.jiejiari', 'ess.viewPiciOtAffirmBatchList.NIANSHANGXIAN.b',
  'ess.viewPiciOtAffirmBatchList.YUESHANGXIAN.b', 'ar.viewitemparameter.title.xiaoshi',
  'ar.viewarcardrecord.title.empidnotnull', 'alert.message.add_fail_repart',
  'ar.viewArOvertimeManagentFast.QINGXUANZEZHENGQUERIQI.b', 'ess.infoApply.ApplyReasonNotull',
  'ar.viewArOvertimeManagentFast.JIABANSHIJIANBUNENGLING.b', 'alert.message.GUANLIZHI_MIX_ONE_OTHOUR.b',
  'ess.viewSSTOtApplyInfo.JIABANCHAOGUOYUESHANGXIAN.b', 'ar.alert.message.viewardetail.choosetoadd',
  'ar.alert.message.viewArAnnualStandard.consubmit', 'alert.message.ess.affirmApply.chooseApplyRecordFirstForBatch',
  'ar.viewApplyAttenanceManagentInfoList.QUEDINGPILIANGQUXIAOMA.b',
  'ar.viewApplyAttenanceManagentInfoList.QINGXUANZEXIUGAINEIRONG.b', 'hr.viewCondSql.title.QINGXUANZE',
  'ess.title.DAORUJIEGUO', 'alert.message.delete_fail', 'alert.message.add_fail',
  'common.deleteSuccess', 'common.saveSuccess', 'common.loadFail', 'common.totalRows', 'common.print',
  'common.close', 'ess.infoApply.title.overtimeApply',
  // Chế độ HR (viewArOvertimeManagent_fast)
  'hrm.empinfo.QUERY', 'org.title.SAVE', 'org.title.exportLOtImportExcel', 'hrm.approve.ALL_REACTION',
  'pa.salary.title.date', 'org.title.LOCAL_NAME', 'ess.infoApply.title.endTime', 'ar.viewsummaryparameteritem.title.hour',
  'inct.salesman.year', 'display.mutual.month', 'ess.affirmApply.title.remark.shenpizhuangtai',
  'ar.viewApplyAttenanceManagentInfoList.CHUANGJIANREN.b', 'pa.salary.canShu.chuanJianRiQi',
  'ar.viewApplyAttenanceManagentInfoList.XIUGAIZHE.b', 'ar.viewApplyAttenanceManagentInfoList.XIUGAIRIQI.b',
  'ar.viewArOvertimeManagentFast.QINGXUANZEZHENGQUEXUANXIANG.b',
  // Popup tìm nhân viên (dùng chung key với trang change-user)
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'common.search', 'common.selectAll', 'common.empId', 'common.empName', 'common.deptName',
  'vdp.search.dept.placeholder',
];

/** Nhãn khác nhau giữa 2 trang gốc (key message giữ nguyên từng JSP). */
type LabelKey = 'search' | 'save' | 'export' | 'fillAll' | 'date' | 'name' | 'endTime' | 'hour' | 'status' | 'creator' | 'yearLimit' | 'monthLimit';
type LabelSet = Record<LabelKey, [string, string]>;
const LABELS_MANAGER: LabelSet = {
  search: ['org.title.SELECT', 'Tra cứu'],
  save: ['ar.viewempcalender.title.save', 'Lưu'],
  export: ['hrm.empinfo.EXPORT', 'Xuất Excel'],
  fillAll: ['ess.message.all_reaction', 'Thực hiện tất cả'],
  date: ['org.title.DATE', 'Thời gian'],
  name: ['ess.infoApply.NAME', 'Họ tên'],
  endTime: ['ess.infoApply.end_time', 'Thời gian kết thúc'],
  hour: ['ar.viewitemparameter.title.xiaoshi', 'Tiếng'],
  status: ['ess.infoApply.approval_status', 'Trạng thái duyệt'],
  creator: ['hrm.contract.creator', 'Người tạo'],
  yearLimit: ['ess.viewPiciOtAffirmBatchList.NIANSHANGXIAN.b', 'Tối đa năm'],
  monthLimit: ['ess.viewPiciOtAffirmBatchList.YUESHANGXIAN.b', 'Tối đa tháng'],
};
const LABELS_HR: LabelSet = {
  search: ['hrm.empinfo.QUERY', 'Tra cứu'],
  save: ['org.title.SAVE', 'Lưu'],
  export: ['org.title.exportLOtImportExcel', 'Xuất Excel'],
  fillAll: ['hrm.approve.ALL_REACTION', 'Thực hiện tất cả'],
  date: ['pa.salary.title.date', 'Thời gian'],
  name: ['org.title.LOCAL_NAME', 'Họ tên'],
  endTime: ['ess.infoApply.title.endTime', 'Thời gian kết thúc'],
  hour: ['ar.viewsummaryparameteritem.title.hour', 'Tiếng'],
  status: ['ess.affirmApply.title.remark.shenpizhuangtai', 'Trạng thái duyệt'],
  creator: ['ar.viewApplyAttenanceManagentInfoList.CHUANGJIANREN.b', 'Người tạo'],
  yearLimit: ['inct.salesman.year', 'Năm'],
  monthLimit: ['display.mutual.month', 'Tháng'],
};

/** Độ rộng cột body (đồng bộ header nhiều tầng khi dùng nzScroll) theo từng chế độ. */
const WIDTHS_MANAGER = ['50px', '40px', '150px', '160px', '200px', '120px', '140px', '90px', '90px', '90px', '90px', '110px', '110px', '90px', '150px', '80px', '140px', '220px', '80px', '80px', '80px', '80px', '90px', '90px', '90px', '220px', '120px', '180px'];
const WIDTHS_HR = ['50px', '40px', '150px', '160px', '200px', '200px', '140px', '90px', '90px', '110px', '110px', '90px', '150px', '80px', '140px', '220px', '80px', '80px', '80px', '80px', '90px', '70px', '70px', '220px', '120px', '180px', '130px', '180px', '130px'];

/** AFFIRM_FLAG đã hủy - checkbox chọn dòng bị khóa (đúng c1 disabled bản gốc). */
const AFFIRM_CANCELLED = '14014310';
/** Đã duyệt - vẫn cho xem trước tuyến duyệt mới khi sửa (getAffirmor_ess3403 bản gốc). */
const AFFIRM_APPROVED = '14014308';
/** POST_FAMILY khối gián tiếp - tăng ca tối thiểu 1 tiếng. */
const POST_FAMILY_INDIRECT = '14015813';
/** Mã cha: loại tăng ca / trạng thái duyệt (ait:SelectSyCodeByCpnyID parentNo bản gốc). */
const OT_TYPE_PARENT_CODE = '31';
/** Mã cha trạng thái làm việc (EMP_OFFICE) - bộ lọc của popup tìm nhân viên, giống trang change-user. */
const EMP_OFFICE_PARENT_CODE = '15118';
/** Mặc định popup tìm nhân viên chỉ lấy NV có trạng thái "Đang làm" (giống hr-card-info, manage-count-info...). */
const DEFAULT_EMP_OFFICE = '15119';
const AFFIRM_FLAG_PARENT_CODE = '14014304';
/** Giới hạn hiển thị cố định ở bản gốc: trang quản lý 300/40, trang HR 200/30. */
const OT_LIMITS = { manager: { year: 300, month: 40 }, hr: { year: 200, month: 30 } };
/** Trang HR: chỉ được lưu dòng chưa gửi / đã duyệt / từ chối (kiểm tra AFFIRM_FLAG bản gốc fast). */
const HR_SAVABLE_FLAGS = ['', AFFIRM_APPROVED, '14014309'];
/** Loại ngày (GET_AR_DATETYPE) -> loại tăng ca mặc định ở ô "Trạng thái" phần áp dụng hàng loạt. */
const DATE_TYPE_WEEKDAY = '1440';
const DATE_TYPE_WEEKEND = '1441';

/** Danh sách giờ chọn - trang quản lý: mỗi 15 phút + 12:10, 20:05 (<ait:time spacing="15" extra="12:10,20:05">);
 *  trang HR: mỗi 10 phút (TIME_STR spacing = 10) - đúng bản gốc. */
function buildBaseTimes(spacing: number, extras: string[]): string[] {
  const set = new Set<string>();
  for (let m = 0; m < 24 * 60; m += spacing) {
    set.add(`${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`);
  }
  extras.forEach((t) => set.add(t));
  return Array.from(set).sort();
}

/**
 * Xin phép tăng ca hàng loạt cho nhân viên cấp dưới - bản Angular của ess/infoApply/viewPiciOtAffirmLBatchList.jsp
 * (Hanwha_HTSV, DWZ + DataTables + jQuery editable). API ở EssPiciOtAffirmController.
 *
 * Giữ nghiệp vụ bản gốc:
 * - "Thêm mới" tạo ngay 1 đơn trống trong DB (PERSON_ID rỗng) rồi sửa trực tiếp trên bảng; "Lưu" chỉ
 *   cập nhật các dòng được tick và gửi duyệt (AFFIRM_FLAG = Gửi); "Xóa" = hủy đơn (AFFIRM_FLAG = Đã hủy).
 * - Sửa bất kỳ ô nào sẽ tự tick dòng; đổi NV/ngày/giờ/trừ giờ ăn sẽ tính lại loại tăng ca + số giờ.
 *
 * Khác biệt cố ý: "Thêm mới" chèn dòng lên đầu bảng thay vì tải lại cả trang (không mất các dòng đang
 * sửa dở); kiểm tra trùng/chốt công (AR_GET_OT_CLASH) chuyển về server để chặn được thật sự (bản gốc gọi
 * ajax bất đồng bộ nên thông báo hiện ra nhưng vẫn lưu).
 */
@Component({
  selector: 'app-pici-ot-affirm-batch',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzTreeSelectModule,
    NzModalModule,
    NzAlertModule,
    NzSpinModule,
    OtApplyDetailComponent,
    TranslatePipe,
  ],
  templateUrl: './pici-ot-affirm-batch.component.html',
  styleUrl: './pici-ot-affirm-batch.component.css',
})
export class PiciOtAffirmBatchComponent implements OnInit {
  /** 'manager' = viewPiciOtAffirmLBatchList (route /pici-ot-affirm-batch), 'hr' = viewArOvertimeManagent_fast (route /ot-apply-fast). */
  private readonly route = inject(ActivatedRoute);
  readonly mode: 'manager' | 'hr' = this.route.snapshot.data['mode'] === 'hr' ? 'hr' : 'manager';
  readonly isHr = this.mode === 'hr';
  readonly L: LabelSet = this.isHr ? LABELS_HR : LABELS_MANAGER;
  readonly widthConfig = this.isHr ? WIDTHS_HR : WIDTHS_MANAGER;
  readonly yearLimit = OT_LIMITS[this.mode].year;
  readonly monthLimit = OT_LIMITS[this.mode].month;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<PiciOtRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly saving = signal(false);
  readonly cancelling = signal(false);
  readonly adding = signal(false);
  readonly importing = signal(false);
  readonly filling = signal(false);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);
  readonly otTypeOptions = signal<CodeItem[]>([]);
  readonly affirmFlagOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  /** Danh sách giờ dùng chung cho mọi ô chọn giờ - bổ sung thêm các giờ lẻ có trong dữ liệu để vẫn hiển thị được. */
  readonly timeOptions = signal<string[]>(this.isHr ? buildBaseTimes(10, []) : buildBaseTimes(15, ['12:10', '20:05']));

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<OtDetailResponse | null>(null);
  @ViewChild(OtApplyDetailComponent) private poabDetail?: OtApplyDetailComponent;

  // Điều kiện tìm kiếm
  keyword = '';
  deptNos: string[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  shiftNo: string | null = null;
  otTypeCode: string | null = null;
  affirmFlag: string | null = null;
  cancelFlag = false;

  // Áp dụng hàng loạt (otAffirm_fillItem bản gốc)
  bulkOtTypeCode: string | null = null;
  bulkDate: Date | null = null;
  bulkFromTime: string | null = null;
  bulkToTime: string | null = null;
  bulkRemark = '';

  private deptChildrenMap = new Map<string, string[]>();
  // Popup tìm nhân viên (cùng cách làm trang change-user)
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;
  /** Dòng đang chọn nhân viên qua popup. */
  private pickerRow: PiciOtRow | null = null;

  constructor(
    private readonly api: PiciOtAffirmBatchService,
    private readonly otApi: OtApplyBatchInfoService,
    private readonly empSearchApi: ChangeUserService,
    private readonly lookupApi: AttendanceExBatchInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly tabs: TabService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    // Mặc định Từ ngày = Đến ngày = hôm nay - đúng START_DATE/END_DATE bản gốc.
    this.startDate = new Date();
    this.endDate = new Date();
    this.loadDeptTree();
    this.lookupApi.getShiftOptions().subscribe({ next: (list) => this.shiftOptions.set(list ?? []), error: () => undefined });
    this.lookupApi.getCodeList(OT_TYPE_PARENT_CODE).subscribe({ next: (list) => this.otTypeOptions.set(list ?? []), error: () => undefined });
    this.lookupApi.getCodeList(AFFIRM_FLAG_PARENT_CODE).subscribe({ next: (list) => this.affirmFlagOptions.set(list ?? []), error: () => undefined });
    this.lookupApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe({ next: (list) => this.empOfficeOptions.set(list ?? []), error: () => undefined });
    // Menu có tham số deleteYN=Y (vd ?deleteYN=Y&CONFIRM_FLAG=1101): xóa các dòng trống do người đăng nhập
    // tạo trước khi tải danh sách - chỉ áp dụng lần tải đầu khi mở menu, bấm Tìm kiếm sau đó không xóa.
    this.search(this.route.snapshot.queryParamMap.get('deleteYN')?.toUpperCase() === 'Y');
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  /** Thông báo lỗi nghiệp vụ hiển thị lâu hơn mặc định 3s để kịp đọc. */
  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

  // ==================== Tra cứu ====================

  search(deleteEmptyRows = false): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        startDate: this.formatDmy(this.startDate),
        endDate: this.formatDmy(this.endDate),
        shiftNo: this.shiftNo ?? '',
        searchOtTypeCode: this.otTypeCode ?? '',
        searchAffirmFlag: this.affirmFlag ?? '',
        cancelFlag: this.cancelFlag ? '1' : '',
        deleteYN: deleteEmptyRows ? 'Y' : '',
      })
      .subscribe({
        next: (list) => {
          const rows = (list ?? []).map((r) => this.toRow(r));
          this.registerTimes(rows);
          this.rows.set(rows);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  private toRow(r: PiciOtApiRow): PiciOtRow {
    return {
      ...r,
      selected: false,
      empEditable: !r.personId,
      canViewDetail: !!r.personId,
      applyOtDateObj: this.parseDmy(r.applyOtDate),
      empKeyword: r.empId ?? '',
    };
  }

  /** Thêm các giờ lẻ (vd 07:32) có trong dữ liệu vào danh sách chọn giờ để nz-select hiển thị được. */
  private registerTimes(rows: { otFromTime?: string | null; otToTime?: string | null }[]): void {
    const set = new Set(this.timeOptions());
    let changed = false;
    rows.forEach((r) => {
      [r.otFromTime, r.otToTime].forEach((v) => {
        if (v && !set.has(v)) {
          set.add(v);
          changed = true;
        }
      });
    });
    if (changed) this.timeOptions.set(Array.from(set).sort());
  }

  trackByRow = (_: number, row: PiciOtRow): string => row.applyNo;

  isCancelled(row: PiciOtRow): boolean {
    return row.affirmFlag === AFFIRM_CANCELLED;
  }

  private selectableRows(): PiciOtRow[] {
    return this.rows().filter((r) => !this.isCancelled(r));
  }

  get allSelected(): boolean {
    const rows = this.selectableRows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }

  get someSelected(): boolean {
    return this.selectableRows().some((r) => r.selected) && !this.allSelected;
  }

  toggleSelectAll(checked: boolean): void {
    this.selectableRows().forEach((r) => (r.selected = checked));
  }

  /** Sửa ô nào thì tự tick dòng đó (trừ dòng đã hủy) - đúng updateChecked() bản gốc. */
  private markEdited(row: PiciOtRow): void {
    if (!this.isCancelled(row)) row.selected = true;
  }

  // ==================== Thêm mới ====================

  addRow(): void {
    this.adding.set(true);
    this.api.addEmptyRow().subscribe({
      next: (res) => {
        this.adding.set(false);
        if (res?.success && res.row) {
          this.rows.update((rows) => [this.toRow(res.row!), ...rows]);
        } else {
          this.showError(res?.error || this.t('alert.message.add_fail', 'Thêm thất bại!'));
        }
      },
      error: () => {
        this.adding.set(false);
        this.showError(this.t('alert.message.add_fail', 'Thêm thất bại!'));
      },
    });
  }

  // ==================== Nhân viên (ô Mã NV của dòng trống) ====================

  /** Gõ lại ô Mã NV -> bỏ nhân viên đã chọn trước đó (chỉ được gán lại khi chọn qua popup). */
  onEmpKeywordChange(row: PiciOtRow, value: string): void {
    row.empKeyword = value;
    if (row.personId && value === row.empId) return;
    if (row.personId) this.clearEmp(row);
  }

  private clearEmp(row: PiciOtRow): void {
    row.personId = null;
    row.empId = '';
    row.localName = '';
    row.deptName = '';
  }

  /**
   * Enter ở ô Mã NV -> mở popup tìm kiếm với từ khóa vừa nhập; chỉ có đúng 1 kết quả thì tự đóng popup và
   * chọn luôn nhân viên đó - đúng submitKeyClick_OtAffirm() bản gốc (perCnt == 1), cách làm như trang change-user.
   */
  openEmpPicker(row: PiciOtRow): void {
    this.pickerRow = row;
    this.pickerKeyword = (row.empKeyword ?? '').trim();
    this.pickerDeptNos = [];
    this.pickerEmpOffice = DEFAULT_EMP_OFFICE;
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
    this.pickerSearch();
  }

  closeEmpPicker(): void {
    this.pickerVisible.set(false);
    this.pickerRow = null;
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empSearchApi
      .searchEmployees({
        keyword: this.pickerKeyword.trim(),
        deptCodes: this.expandDeptSelection(this.pickerDeptNos),
        empOffice: this.pickerEmpOffice ?? '',
      })
      .subscribe({
        next: (rows) => {
          this.pickerLoading.set(false);
          if (rows && rows.length === 1) {
            this.pickEmployee(rows[0]);
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
    this.pickerEmpOffice = DEFAULT_EMP_OFFICE;
    this.pickerSearch();
  }

  /** Chọn 1 nhân viên trong popup -> gán vào dòng đang sửa rồi đóng popup. */
  pickEmployee(emp: EmployeeSearchDto): void {
    const row = this.pickerRow;
    this.closeEmpPicker();
    if (row) this.onEmpSelected(row, emp);
  }

  private onEmpSelected(row: PiciOtRow, emp: EmployeeSearchDto): void {
    row.personId = emp.personId;
    row.empId = emp.empId;
    row.localName = emp.localName;
    row.deptName = emp.deptName;
    row.empKeyword = emp.empId;
    this.markEdited(row);
    this.loadEmpOtInfo(row);
    this.calcLength(row, 1);
  }

  /** Ca làm + lũy kế tăng ca + giới hạn OT của NV tại ngày tăng ca - đúng getOt_Totail() bản gốc. */
  private loadEmpOtInfo(row: PiciOtRow): void {
    if (!row.personId || !row.applyOtDate) return;
    this.api.getEmpOtInfo(row.personId, row.applyOtDate).subscribe({
      next: (info) => {
        row.shiftName = info?.shiftName ?? '';
        row.postFamily = info?.postFamily ?? '';
        row.dutyNo = info?.dutyNo ?? '';
        row.otLimit = info?.otLimit ?? '';
        row.weekdayOtTotal = info?.weekdayOtTotal ?? '';
        row.weekendOtTotal = info?.weekendOtTotal ?? '';
        row.holidayOtTotal = info?.holidayOtTotal ?? '';
        row.otTotal = info?.otTotal ?? '';
        row.otTotalMonth = info?.otTotalMonth ?? '';
      },
      error: () => undefined,
    });
  }

  // ==================== Sửa ngày / giờ / trừ giờ ăn / qua đêm / lý do ====================

  onDateChange(row: PiciOtRow, value: Date | null): void {
    row.applyOtDateObj = value;
    row.applyOtDate = value ? this.formatDmy(value) : '';
    row.offsetYn = '0';
    this.markEdited(row);
    this.loadEmpOtInfo(row);
    this.calcLength(row, 2);
  }

  onTimeChange(row: PiciOtRow, which: 'from' | 'to', value: string | null): void {
    if (which === 'from') row.otFromTime = value ?? '';
    else row.otToTime = value ?? '';
    this.markEdited(row);
    this.calcLength(row, 2);
  }

  onDeductChange(row: PiciOtRow, checked: boolean): void {
    row.deductYn = checked ? '1' : '0';
    this.markEdited(row);
    this.calcLength(row, 2);
  }

  /** Checkbox tiêu đề cột "Báo cơm/Nghỉ ngơi" - đổi toàn bộ dòng rồi tính lại giờ (batchCheckedAndCallength bản gốc). */
  get allDeduct(): boolean {
    const rows = this.rows();
    return rows.length > 0 && rows.every((r) => r.deductYn === '1');
  }

  toggleAllDeduct(checked: boolean): void {
    this.rows().forEach((row) => this.onDeductChange(row, checked));
  }

  onOffsetChange(row: PiciOtRow, checked: boolean): void {
    row.offsetYn = checked ? '1' : '0';
    this.markEdited(row);
  }

  onRemarkChange(row: PiciOtRow, value: string): void {
    row.applyOtRemark = value;
    this.markEdited(row);
  }

  /**
   * Tính lại loại tăng ca / số giờ - đúng otAffirm_callength(index, FLAG) bản gốc.
   * flag = 1 (vừa chọn NV): nạp giờ mặc định theo ca - ngày thường: hết ca -> hết ca + 2 tiếng (2 giờ);
   * ngày nghỉ/lễ: trọn ca. flag = 2 (sửa ngày/giờ): chỉ cập nhật số giờ theo giờ đang nhập.
   */
  private calcLength(row: PiciOtRow, flag: 1 | 2): void {
    this.updateOffsetByTime(row);
    if (!row.personId || !row.applyOtDate) return;
    this.api
      .getValidateInfo(row.personId, row.applyOtDate, row.otFromTime ?? '', row.otToTime ?? '', row.deductYn === '1' ? '1' : '0')
      .subscribe({
        next: (info) => {
          if (!info) return;
          row.otTypeCode = info.otTypeCode ?? '';
          row.otTypeName = info.otTypeName ?? '';
          if (flag === 1) {
            if (info.dateType === DATE_TYPE_WEEKDAY) {
              row.otFromTime = info.shiftEndTime ?? '';
              row.otToTime = info.shiftEndTime2 ?? '';
              row.otApplyHour = '2';
            } else {
              row.otFromTime = info.shiftStartTime ?? '';
              row.otToTime = info.shiftEndTime ?? '';
              row.otApplyHour = info.otShiftLength ?? '';
            }
            row.shiftStartTime = info.shiftStartTime ?? '';
            row.shiftEndTime = info.shiftEndTime ?? '';
            row.indoorTime = info.indoorTime ?? '';
            row.outdoorTime = info.outdoorTime ?? '';
            this.registerTimes([row]);
            this.updateOffsetByTime(row);
          } else {
            row.otApplyHour = info.otApplyHour ?? '';
          }
          this.loadAffirmorPreview(row);
        },
        error: () => undefined,
      });
  }

  /** Giờ kết thúc nhỏ hơn giờ bắt đầu => qua đêm (OFFSET_YN = 1). */
  private updateOffsetByTime(row: PiciOtRow): void {
    if (!row.otFromTime || !row.otToTime || row.otFromTime === row.otToTime) return;
    row.offsetYn = row.otToTime < row.otFromTime ? '1' : '0';
  }

  /** Xem trước tuyến duyệt - chỉ với dòng chưa gửi hoặc đã duyệt (getAffirmor_ess3403 bản gốc). */
  private loadAffirmorPreview(row: PiciOtRow): void {
    if (row.affirmFlag && row.affirmFlag !== AFFIRM_APPROVED) return;
    if (!row.personId) return;
    this.api.getAffirmorPreview(row.personId, row.otTypeCode ?? '', row.otApplyHour ?? '').subscribe({
      next: (res) => (row.affirmStr = res?.affirmStr ?? ''),
      error: () => undefined,
    });
  }

  // ==================== Áp dụng hàng loạt (Thực hiện tất cả) ====================

  /** Chọn ngày -> gợi ý loại tăng ca + giờ theo ca của người đăng nhập (getDefaultOtTimeSST bản gốc). */
  onBulkDateChange(value: Date | null): void {
    this.bulkDate = value;
    if (!value) return;
    this.api.getDefaultTime(this.formatDmy(value)).subscribe({
      next: (info) => {
        if (!info) return;
        if (info.dateType === DATE_TYPE_WEEKDAY) {
          this.bulkOtTypeCode = '32';
          this.bulkFromTime = info.shiftEndTime || null;
          this.bulkToTime = info.shiftEndTime2 || null;
        } else {
          this.bulkOtTypeCode = info.dateType === DATE_TYPE_WEEKEND ? '33' : '34';
          this.bulkFromTime = info.shiftStartTime || null;
          this.bulkToTime = info.shiftEndTime || null;
        }
        this.registerTimes([{ otFromTime: this.bulkFromTime, otToTime: this.bulkToTime }]);
      },
      error: () => undefined,
    });
  }

  /** Áp ngày/giờ/lý do cho các dòng đã tick và tính lại giờ từng dòng - đúng otAffirm_fillItem() bản gốc. */
  fillSelected(): void {
    if (!this.bulkDate) {
      this.showError(this.t('ar.viewArOvertimeManagentFast.QINGXUANZEZHENGQUERIQI.b', 'Xin chọn ngày chính xác'));
      return;
    }
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.showError(this.t('ar.viewApplyAttenanceManagentInfoList.QINGXUANZEXIUGAINEIRONG.b', 'Xin chọn nội dung sửa'));
      return;
    }
    const date = this.formatDmy(this.bulkDate);
    const from = this.bulkFromTime ?? '';
    const to = this.bulkToTime ?? '';
    const remark = this.bulkRemark.trim();

    const requests = selected.map((row) =>
      row.personId
        ? this.api.getValidateInfo(row.personId, date, from, to, '0').pipe(catchError(() => of(null)))
        : of(null),
    );
    this.filling.set(true);
    forkJoin(requests).subscribe({
      next: (infos) => {
        selected.forEach((row, i) => this.applyFill(row, infos[i], date, from, to, remark));
        this.registerTimes([{ otFromTime: from, otToTime: to }]);
        this.filling.set(false);
      },
      error: () => this.filling.set(false),
    });
  }

  private applyFill(row: PiciOtRow, info: PiciOtValidateInfo | null, date: string, from: string, to: string, remark: string): void {
    const dateChanged = row.applyOtDate !== date;
    row.applyOtDate = date;
    row.applyOtDateObj = this.parseDmy(date);
    row.otFromTime = from;
    row.otToTime = to;
    if (remark) row.applyOtRemark = remark;
    row.otApplyHour = info?.otApplyHour ?? '';
    row.otTypeCode = info?.otTypeCode ?? '';
    row.otTypeName = info?.otTypeName ?? '';
    row.shiftStartTime = info?.shiftStartTime ?? '';
    row.shiftEndTime = info?.shiftEndTime ?? '';
    row.deductYn = '0';
    row.offsetYn = from > to ? '1' : '0';
    if (dateChanged) this.loadEmpOtInfo(row);
  }

  // ==================== Lưu ====================

  save(): void {
    const selected = this.rows().filter((r) => r.selected && !this.isCancelled(r));
    if (!selected.length) {
      this.showError(this.t('ar.alert.message.viewardetail.choosetoadd', 'Xin chọn dữ liệu cần thêm'));
      return;
    }
    const error = this.validateForSave(selected);
    if (error) {
      this.showError(error);
      return;
    }
    this.modal.confirm({
      nzTitle: this.t(this.L.save[0], this.L.save[1]),
      nzContent: this.t('ar.alert.message.viewArAnnualStandard.consubmit', 'Đồng ý lưu không?'),
      nzOnOk: () => this.runSave(selected),
    });
  }

  /** Các kiểm tra phía client của saveOtApplyAffirm() bản gốc - trả về thông báo lỗi đầu tiên (nếu có). */
  private validateForSave(selected: PiciOtRow[]): string | null {
    return this.isHr ? this.validateForSaveHr(selected) : this.validateForSaveManager(selected);
  }

  /** Kiểm tra của saveOtApplyAffirm() bản HR viewArOvertimeManagent_fast. */
  private validateForSaveHr(selected: PiciOtRow[]): string | null {
    for (const row of selected) {
      const label = row.localName ? `${row.localName}: ` : '';
      if (!row.personId) {
        return this.t('ar.viewarcardrecord.title.empidnotnull', 'Mã nhân viên không được trống!');
      }
      if (!row.applyOtDate || !this.parseDmy(row.applyOtDate)) {
        return label + this.t('ar.viewArOvertimeManagentFast.QINGXUANZEZHENGQUERIQI.b', 'Xin chọn ngày chính xác');
      }
      if (!HR_SAVABLE_FLAGS.includes(row.affirmFlag ?? '')) {
        return label + this.t('ar.viewArOvertimeManagentFast.QINGXUANZEZHENGQUEXUANXIANG.b', 'Xin chọn dữ liệu duyệt để thực hiện sửa!');
      }
      const hours = parseFloat(row.otApplyHour ?? '');
      if (!row.otApplyHour || !hours) {
        return label + this.t('ar.viewArOvertimeManagentFast.JIABANSHIJIANBUNENGLING.b', 'Thời lượng tăng ca không thể bằng 0');
      }
      const fromHour = parseInt((row.otFromTime ?? '').split(':')[0], 10);
      if (hours < 1 && row.postFamily === POST_FAMILY_INDIRECT && fromHour !== 12 && fromHour !== 7) {
        return label + this.t('alert.message.GUANLIZHI_MIX_ONE_OTHOUR.b', 'Nhân viên hỗ trợ SX và kỹ thuật xin tăng ca tối thiểu là 1 tiếng!');
      }
    }
    return null;
  }

  /** Kiểm tra của saveOtApplyAffirm() bản quản lý viewPiciOtAffirmLBatchList. */
  private validateForSaveManager(selected: PiciOtRow[]): string | null {
    const allRows = this.rows();
    for (const row of selected) {
      const label = row.localName ? `${row.localName}: ` : '';
      if (!row.personId) {
        return this.t('ar.viewarcardrecord.title.empidnotnull', 'Mã nhân viên không được trống!');
      }
      if (!row.applyOtDate || !this.parseDmy(row.applyOtDate)) {
        return label + this.t('ar.viewArOvertimeManagentFast.QINGXUANZEZHENGQUERIQI.b', 'Xin chọn ngày chính xác');
      }
      // Trùng NV + ngày + giờ bắt đầu với dòng khác trên bảng (bỏ qua đơn đã hủy)
      const duplicated = allRows.some(
        (other) =>
          other !== row &&
          !this.isCancelled(other) &&
          other.personId === row.personId &&
          other.applyOtDate === row.applyOtDate &&
          other.otFromTime === row.otFromTime,
      );
      if (duplicated) {
        return label + this.t('alert.message.add_fail_repart', 'Đã tồn tại, không được thêm trùng lặp!');
      }
      if (!row.applyOtRemark || !row.applyOtRemark.trim()) {
        return label + this.t('ess.infoApply.ApplyReasonNotull', 'Không được để trống lý do đăng ký!');
      }
      const hours = parseFloat(row.otApplyHour ?? '');
      if (!row.otApplyHour || !hours) {
        return label + this.t('ar.viewArOvertimeManagentFast.JIABANSHIJIANBUNENGLING.b', 'Thời lượng tăng ca không thể bằng 0');
      }
      const [fromHour, fromMinute] = (row.otFromTime ?? '').split(':').map((v) => parseInt(v, 10));
      if (hours < 1 && row.postFamily === POST_FAMILY_INDIRECT && fromHour !== 12 && fromHour !== 7 && fromMinute !== 32) {
        return label + this.t('alert.message.GUANLIZHI_MIX_ONE_OTHOUR.b', 'Nhân viên hỗ trợ SX và kỹ thuật xin tăng ca tối thiểu là 1 tiếng!');
      }
      const monthTotal = parseFloat(row.otTotalMonth ?? '') || 0;
      if (monthTotal + hours > this.monthLimit && String(row.otLimit) === '1') {
        return label + this.t('ess.viewSSTOtApplyInfo.JIABANCHAOGUOYUESHANGXIAN.b', 'Tăng ca vượt quá thời gian tối đa trong tháng, không thể xin tăng ca!');
      }
    }
    return null;
  }

  private toPayload(row: PiciOtRow): PiciOtPayload {
    return {
      applyNo: row.applyNo,
      personId: row.personId ?? '',
      localName: row.localName ?? '',
      applyOtDate: row.applyOtDate ?? '',
      otFromTime: row.otFromTime ?? '',
      otToTime: row.otToTime ?? '',
      otApplyHour: row.otApplyHour ?? '',
      otTypeCode: row.otTypeCode ?? '',
      applyOtRemark: (row.applyOtRemark ?? '').trim(),
      deductYn: row.deductYn === '1' ? '1' : '0',
      offsetYn: row.offsetYn === '1' ? '1' : '0',
    };
  }

  private runSave(selected: PiciOtRow[]): void {
    this.saving.set(true);
    this.api.save(selected.map((r) => this.toPayload(r)), this.mode).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res?.success) {
          this.message.success(res.message || this.t('common.saveSuccess', 'Lưu thành công!'));
          this.search();
        } else {
          this.showError(res?.error || this.t('alert.message.add_fail', 'Thêm thất bại!'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.showError(this.t('alert.message.add_fail', 'Thêm thất bại!'));
      },
    });
  }

  // ==================== Xóa (hủy đơn) ====================

  cancelSelected(): void {
    const selected = this.rows().filter((r) => r.selected && !this.isCancelled(r));
    if (!selected.length) {
      this.showError(this.t('alert.message.ess.affirmApply.chooseApplyRecordFirstForBatch', 'Lựa chọn danh sách đăng ký sau đó thực hiện hàng loạt!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('ess.empInfo.Delete', 'Xóa'),
      nzContent: this.t('ar.viewApplyAttenanceManagentInfoList.QUEDINGPILIANGQUXIAOMA.b', 'Đồng ý hủy bỏ không?'),
      nzOkDanger: true,
      nzOnOk: () => this.runCancel(selected),
    });
  }

  private runCancel(selected: PiciOtRow[]): void {
    this.cancelling.set(true);
    this.api.cancel(selected.map((r) => this.toPayload(r)), this.mode).subscribe({
      next: (res) => {
        this.cancelling.set(false);
        if (res?.success) {
          this.message.success(this.t('common.deleteSuccess', 'Xóa thành công!'));
          this.search();
        } else {
          this.showError(res?.error || this.t('alert.message.delete_fail', 'Xóa thất bại!'));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.showError(this.t('alert.message.delete_fail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Chi tiết đơn (click tên NV) ====================

  openDetail(row: PiciOtRow): void {
    if (!row.canViewDetail || !row.applyNo) return;
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.otApi.getDetail(row.applyNo, row.otTypeCode ?? '').subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  printDetail(): void {
    this.poabDetail?.print();
  }

  // ==================== Excel ====================

  downloadTemplate(): void {
    window.location.href = this.otApi.downloadTemplateUrl();
  }

  onImportFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.importing.set(true);
    this.otApi.importExcel(file).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res?.success) this.message.success(res.message || this.t('common.saveSuccess', 'Lưu thành công!'));
        else this.message.warning(res?.message || res?.error || this.t('alert.message.add_fail', 'Thêm thất bại!'));
        this.search();
        this.tabs.openTab('/ar/attendanceMintenance/viewImportOtTempList', this.t('ess.title.DAORUJIEGUO', 'Kết quả nhập'), 'external');
      },
      error: () => {
        this.importing.set(false);
        this.showError(this.t('alert.message.add_fail', 'Thêm thất bại!'));
      },
    });
  }

  /** Xuất Excel danh sách đang hiển thị (client-side) - thay /disc/autoExcel/exportLOtImportExcel bản gốc. */
  exportExcel(): void {
    const tl = (l: [string, string]) => this.t(l[0], l[1]);
    const hourUnit = tl(this.L.hour);
    // [tiêu đề, giá trị] - bộ cột theo đúng bảng của từng trang gốc
    const cols: [string, (r: PiciOtRow, i: number) => string | number][] = [
      ['NO', (_, i) => i + 1],
      [this.t('ess.infoApply.EMPID', 'Mã nhân viên'), (r) => r.empId ?? ''],
      [tl(this.L.name), (r) => r.localName ?? ''],
      [this.t('ess.infoApply.DEPT', 'Phòng ban'), (r) => r.deptName ?? ''],
      [this.t('hr.viewPersonalInfo.title.banzu', 'Ca'), (r) => this.shiftLabel(r)],
      [this.t('ess.infoApply.title.overtimeTime', 'Ngày tăng ca'), (r) => r.applyOtDate ?? ''],
      ...(this.isHr ? [] : ([
        [this.t('ess.infoApply.work_time', 'Thời gian vào làm'), (r: PiciOtRow) => r.shiftStartTime ?? ''],
        [this.t('ess.infoApply.out_work_time', 'Thời gian tan làm'), (r: PiciOtRow) => r.shiftEndTime ?? ''],
      ] as [string, (r: PiciOtRow, i: number) => string][])),
      [this.t('ess.infoApply.in_door_time', 'Thời gian vào'), (r) => r.indoorTime ?? ''],
      [this.t('ess.infoApply.out_door_time', 'Thời gian ra'), (r) => r.outdoorTime ?? ''],
      [this.t('ess.infoApply.title.startTime', 'Thời gian bắt đầu'), (r) => r.otFromTime ?? ''],
      [tl(this.L.endTime), (r) => r.otToTime ?? ''],
      [this.t('ess.infoApply.overtime_hours', 'Thời lượng'), (r) => (r.otApplyHour ? `${r.otApplyHour} ${hourUnit}` : '')],
      [this.t('ess.viewPiciOtAffirmLBatchList.DEDUCT_MEAL_TIME.b', 'Báo cơm'), (r) => (r.deductYn === '1' ? 'Y' : 'N')],
      [this.t('ess.title.KUATIAN', 'Qua đêm'), (r) => (r.offsetYn === '1' ? 'Y' : 'N')],
      [this.t('ess.title.JIABANZHUANGTAI', 'Trạng thái'), (r) => r.otTypeName ?? ''],
      [this.t('ess.infoApply.Reason', 'Lý do'), (r) => r.applyOtRemark ?? ''],
      [this.t('ess.viewPiciOtAffirmBatchList.BENNIAN.b', 'Năm nay'), (r) => r.otTotal ?? ''],
      [this.t('ess.viewPiciOtAffirmBatchList.BENYUE.b', 'Tháng này'), (r) => r.otTotalMonth ?? ''],
      [this.t('ar.viewitemparameter.title.pingshi', 'Ngày thường'), (r) => r.weekdayOtTotal ?? ''],
      [this.t('ar.viewitemparameter.title.zhoumo', 'Cuối tuần'), (r) => r.weekendOtTotal ?? ''],
      [this.t('ar.viewitemparameter.title.jiejiari', 'Ngày nghỉ lễ'), (r) => r.holidayOtTotal ?? ''],
      [tl(this.L.yearLimit), () => this.yearLimit],
      [tl(this.L.monthLimit), () => this.monthLimit],
      [this.t('hrm.contractInfo.APPROVAL_PERSON', 'Người duyệt'), (r) => (r.affirmStr ?? '').replace(/<br\s*\/?>/gi, '\n').trim()],
      [tl(this.L.status), (r) => r.affirmFlagName ?? ''],
      [tl(this.L.creator), (r) => r.createdBy ?? ''],
      ...(this.isHr ? ([
        [this.t('pa.salary.canShu.chuanJianRiQi', 'Ngày tạo'), (r: PiciOtRow) => r.createDate ?? ''],
        [this.t('ar.viewApplyAttenanceManagentInfoList.XIUGAIZHE.b', 'Người sửa'), (r: PiciOtRow) => r.updatedBy ?? ''],
        [this.t('ar.viewApplyAttenanceManagentInfoList.XIUGAIRIQI.b', 'Thời gian sửa'), (r: PiciOtRow) => r.updateDate ?? ''],
      ] as [string, (r: PiciOtRow, i: number) => string][]) : []),
    ];
    const headers = cols.map((c) => c[0]);
    const data = this.rows().map((r, i) => cols.map((c) => c[1](r, i)));
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'OT');
    const prefix = this.isHr ? 'ot_apply_fast' : 'pici_ot_affirm';
    XLSX.writeFile(workbook, `${prefix}_${formatDate(new Date(), 'yyyyMMddHHmm', 'vi')}.xlsx`);
  }

  /** Cột Ca: trang HR hiển thị kèm giờ ca "Tên ca (bắt đầu - kết thúc)" - đúng bản gốc fast. */
  shiftLabel(row: PiciOtRow): string {
    if (!this.isHr || !row.shiftName) return row.shiftName ?? '';
    return `${row.shiftName} (${row.shiftStartTime ?? ''} - ${row.shiftEndTime ?? ''})`;
  }

  // ==================== Cây phòng ban (cùng cách làm AttendanceExBatchInfoComponent) ====================

  private loadDeptTree(): void {
    this.lookupApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => undefined,
    });
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
    const markLeaf = (nodes: NzTreeNodeOptions[]) =>
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select không tự cascade xuống phòng ban con -> tự mở rộng trước khi gửi (backend lọc INSTR từng mã). */
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

  // ==================== Helpers ngày ====================

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }

  private parseDmy(value: string | null | undefined): Date | null {
    if (!value) return null;
    const match = value.trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return null;
    const [, d, mo, y] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d));
  }
}
