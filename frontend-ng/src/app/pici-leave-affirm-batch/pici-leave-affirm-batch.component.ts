import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
import { LeaveApplyDetailComponent } from '../shared/leave-apply-detail/leave-apply-detail.component';
import { LeaveApplyDetail } from '../shared/leave-apply-detail/leave-apply-detail.model';
import { ApplyAttendanceBatchInfoService } from '../apply-attendance-batch-info/apply-attendance-batch-info.service';
import { ChangeUserService } from '../change-user/change-user.service';
import { EmployeeSearchDto } from '../change-user/change-user.model';
import { AttendanceExBatchInfoService } from '../attendance-ex-batch-info/attendance-ex-batch-info.service';
import { AuthDeptNode, CodeItem, ShiftOption } from '../attendance-ex-batch-info/attendance-ex-batch-info.model';
import { PiciLeaveAffirmBatchService } from './pici-leave-affirm-batch.service';
import { PiciLeaveApiRow, PiciLeavePayload, PiciLeaveRow } from './pici-leave-affirm-batch.model';

/** Toàn bộ là key gốc của 2 JSP (viewApplyAttenanceBatchInfoList / viewApplyAttenanceManagentInfoList_new), đã có đủ 5 file properties. */
const I18N_KEYS = [
  'hrm.empinfo.nameAndEmpid', 'hr.viewPersonalInfo.title.DEPTNAME', 'ess.infoApply.Period', 'pa.salary.title.date',
  'ar.viewArBaseEmpInfoList.BANZULEIXING.b', 'ess.infoApply.attendance_type', 'ess.infoApply.approval_status',
  'ess.affirmApply.title.quxiaoshenqing', 'ess.title.RENSHIQUERENZHUANGTAI', 'org.title.ALL', 'org.title.PLEASE_SELECT',
  'ess.title.WEIQUEREN', 'ess.infoApply.adopt', 'ess.infoApply.veto', 'ess.empInfo.zhiqun', 'ess.infoApply.attendState',
  'org.title.STARTDATE', 'public.title.startDate', 'ess.infoApply.title.startTime', 'hrm.empinfo.reason',
  'hrm.recruitManage.END_DATE1', 'public.title.endDate', 'ess.infoApply.end_time', 'ess.infoApply.title.endTime',
  'ess.message.all_reaction', 'hrm.approve.ALL_REACTION', 'org.title.SELECT', 'hrm.empinfo.QUERY', 'ess.empInfo.insert',
  'ess.empInfo.Delete', 'ar.viewempcalender.title.save', 'org.title.SAVE', 'ess.message.template_download',
  'ess.infoApply.EXCEL_IN', 'hrm.empinfo.EXPORT', 'org.title.exportLOtImportExcel', 'ess.infoApply.EMPID',
  'ess.infoApply.NAME', 'org.title.LOCAL_NAME', 'ess.infoApply.DEPT', 'hr.viewPersonalInfo.title.banzu',
  'ess.empInfo.date_application', 'ess.viewApply.title.applyDate', 'ess.infoApply.sum_year_leave_days',
  'ess.infoApply.nianjiashengyu', 'ess.infoApply.localyn', 'hrm.recruitManage.START_DATE1',
  'hr.viewTranslate.title.PUBLIC_END_DATE', 'ess.infoApply.title.evectionEndTime1', 'ess.infoApply.duration',
  'ess.infoApply.Reason', 'hrm.contractInfo.APPROVAL_PERSON', 'ess.affirmApply.title.remark.shenpizhuangtai',
  'evs.affirm.personnel_record.e', 'hrm.contract.creator', 'ar.viewApplyAttenanceManagentInfoList.CHUANGJIANREN.b',
  'pa.salary.canShu.chuanJianRiQi', 'ar.viewApplyAttenanceManagentInfoList.XIUGAIZHE.b',
  'ar.viewApplyAttenanceManagentInfoList.XIUGAIRIQI.b', 'ess.title.RENSHITONGGUO', 'ess.title.RENSHIFOUJUE',
  'ar.viewitemparameter.title.dayofunit', 'ar.viewitemparameter.title.xiaoshi', 'ar.viewsummaryparameteritem.title.day',
  'ar.viewsummaryparameteritem.title.hour', 'hr.viewCondSql.title.QINGXUANZE',
  'ar.viewarcardrecord.title.empidnotnull', 'ar.viewApplyAttenanceManagentInfoList.SHENPIZHUANGTAIWEITONGGUO.b',
  'ar.viewApplyAttenanceManagentInfoList.SHICHANGBUNENGDENGYULING.b', 'ar.viewApplyAttenanceManagentInfoList.QINGQUEDINGKAISHIRIQI.b',
  'ar.viewApplyAttenanceManagentInfoList.QINGQUEDINGJIESHURIQI.b', 'ar.viewApplyAttenanceManagentInfoList.KAOQINBUNENGWEIKONG.b',
  'ar.viewApplyAttenanceManagentInfoList.NIANJIATIANSHUBUZU.b', 'ar.viewApplyAttenanceManagentInfoList.NIANJIASHISHUBUZU.b',
  'alert.message.ess.infoApply.applyTimeCanNotLessThanMinValue', 'ar.alert.message.viewardetail.choosetoadd',
  'ar.alert.message.viewArAnnualStandard.consubmit', 'alert.message.ess.affirmApply.chooseApplyRecordFirstForBatch',
  'ar.viewApplyAttenanceManagentInfoList.QUEDINGPILIANGQUXIAOMA.b', 'ar.viewApplyAttenanceManagentInfoList.QINGXUANZEXIUGAINEIRONG.b',
  'ess.title.DAORUJIEGUO', 'alert.message.delete_fail', 'alert.message.add_fail', 'common.deleteSuccess',
  'common.saveSuccess', 'common.loadFail', 'common.totalRows', 'common.print', 'common.close',
  'ess.infoApply.attendance_application',
  // Popup tìm nhân viên (dùng chung key với trang change-user)
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'common.search', 'common.selectAll', 'common.empId', 'common.empName', 'common.deptName',
  'vdp.search.dept.placeholder',
];

const AFFIRM_APPROVED = '14014308';
/** Đã từ chối / đã hủy: checkbox chọn dòng bị khóa (BATCH_LEAVE disabled bản gốc). */
const LOCKED_FLAGS = ['14014309', '14014310'];
const LEAVE_TYPE_PARENT_CODE = '21';
const AFFIRM_FLAG_PARENT_CODE = '14014304';
const POST_FAMILY_PARENT_CODE = '14015812';
/** Mã cha trạng thái làm việc (EMP_OFFICE) - bộ lọc của popup tìm nhân viên, giống trang change-user. */
const EMP_OFFICE_PARENT_CODE = '15118';
/** Phép năm. */
const LEAVE_ANNUAL = '26';
/** Các loại nghỉ chỉ được xin tròn ngày (trang quản lý). */
const FULL_DAY_LEAVE_TYPES = ['27', '482', '15821', '14013816', '25', '14015956', '14015957'];

type ColKey =
  | 'no' | 'check' | 'empId' | 'name' | 'dept' | 'shift' | 'applyTime' | 'totVac' | 'remainVac' | 'leaveType'
  | 'fromDate' | 'fromTime' | 'toDate' | 'toTime' | 'duration' | 'reason' | 'approver' | 'status' | 'hrComment'
  | 'creator' | 'createDate' | 'updater' | 'updateDate';
interface ColDef { key: ColKey; label: [string, string]; width: string; edit?: boolean; center?: boolean }

/** Cột bảng theo đúng thứ tự từng JSP gốc. */
const COLS_MANAGER: ColDef[] = [
  { key: 'no', label: ['', 'NO'], width: '50px', center: true },
  { key: 'check', label: ['', ''], width: '40px', center: true },
  { key: 'empId', label: ['ess.infoApply.EMPID', 'Mã nhân viên'], width: '150px', edit: true },
  { key: 'name', label: ['ess.infoApply.NAME', 'Họ tên'], width: '150px' },
  { key: 'dept', label: ['ess.infoApply.DEPT', 'Phòng ban'], width: '200px' },
  { key: 'shift', label: ['hr.viewPersonalInfo.title.banzu', 'Ca'], width: '110px' },
  { key: 'applyTime', label: ['ess.empInfo.date_application', 'Thời gian'], width: '100px', center: true },
  { key: 'totVac', label: ['ess.infoApply.sum_year_leave_days', 'Tổng phép năm'], width: '110px', center: true },
  { key: 'remainVac', label: ['ess.infoApply.nianjiashengyu', 'Còn lại'], width: '110px', center: true },
  { key: 'leaveType', label: ['ess.infoApply.attendState', 'Phân loại'], width: '170px', edit: true },
  { key: 'fromDate', label: ['org.title.STARTDATE', 'Ngày bắt đầu'], width: '140px', edit: true },
  { key: 'fromTime', label: ['ess.infoApply.title.startTime', 'Thời gian bắt đầu'], width: '110px', edit: true },
  { key: 'toDate', label: ['hr.viewTranslate.title.PUBLIC_END_DATE', 'Ngày kết thúc'], width: '140px', edit: true },
  { key: 'toTime', label: ['ess.infoApply.end_time', 'Thời gian kết thúc'], width: '110px', edit: true },
  { key: 'duration', label: ['ess.infoApply.duration', 'Thời lượng'], width: '130px', center: true },
  { key: 'reason', label: ['ess.infoApply.Reason', 'Lý do'], width: '220px', edit: true },
  { key: 'approver', label: ['hrm.contractInfo.APPROVAL_PERSON', 'Người duyệt'], width: '200px' },
  { key: 'status', label: ['ess.infoApply.approval_status', 'Trạng thái duyệt'], width: '220px', center: true },
  { key: 'hrComment', label: ['evs.affirm.personnel_record.e', 'Ý kiến của nhân sự'], width: '200px' },
  { key: 'creator', label: ['hrm.contract.creator', 'Người tạo'], width: '240px' },
];
const COLS_HR: ColDef[] = [
  { key: 'no', label: ['', 'NO.'], width: '50px', center: true },
  { key: 'check', label: ['', ''], width: '40px', center: true },
  { key: 'empId', label: ['ess.infoApply.EMPID', 'Mã nhân viên'], width: '150px', edit: true },
  { key: 'name', label: ['org.title.LOCAL_NAME', 'Họ tên'], width: '160px' },
  { key: 'dept', label: ['ess.infoApply.DEPT', 'Phòng ban'], width: '200px' },
  { key: 'applyTime', label: ['ess.viewApply.title.applyDate', 'Ngày xin phép'], width: '110px', center: true },
  { key: 'totVac', label: ['ess.infoApply.sum_year_leave_days', 'Tổng phép năm'], width: '110px', center: true },
  { key: 'remainVac', label: ['ess.infoApply.nianjiashengyu', 'Còn lại'], width: '110px', center: true },
  { key: 'shift', label: ['hr.viewPersonalInfo.title.banzu', 'Ca'], width: '130px' },
  { key: 'leaveType', label: ['ess.infoApply.localyn', 'Loại nghỉ phép'], width: '170px', edit: true },
  { key: 'fromDate', label: ['hrm.recruitManage.START_DATE1', 'Ngày bắt đầu'], width: '140px', edit: true },
  { key: 'fromTime', label: ['ess.infoApply.title.startTime', 'Thời gian bắt đầu'], width: '110px', edit: true },
  { key: 'toDate', label: ['ess.infoApply.title.evectionEndTime1', 'Ngày kết thúc'], width: '140px', edit: true },
  { key: 'toTime', label: ['ess.infoApply.title.endTime', 'Thời gian kết thúc'], width: '110px', edit: true },
  { key: 'duration', label: ['ess.infoApply.duration', 'Thời lượng'], width: '130px', center: true },
  { key: 'reason', label: ['ess.infoApply.Reason', 'Lý do'], width: '220px', edit: true },
  { key: 'approver', label: ['hrm.contractInfo.APPROVAL_PERSON', 'Người duyệt'], width: '200px' },
  { key: 'status', label: ['ess.affirmApply.title.remark.shenpizhuangtai', 'Trạng thái duyệt'], width: '200px', center: true },
  { key: 'creator', label: ['ar.viewApplyAttenanceManagentInfoList.CHUANGJIANREN.b', 'Người tạo'], width: '220px' },
  { key: 'createDate', label: ['pa.salary.canShu.chuanJianRiQi', 'Ngày tạo'], width: '130px', center: true },
  { key: 'updater', label: ['ar.viewApplyAttenanceManagentInfoList.XIUGAIZHE.b', 'Người sửa'], width: '220px' },
  { key: 'updateDate', label: ['ar.viewApplyAttenanceManagentInfoList.XIUGAIRIQI.b', 'Thời gian sửa'], width: '130px', center: true },
];

/** Nhãn khác nhau giữa 2 trang gốc. */
type LabelKey = 'search' | 'save' | 'delete' | 'export' | 'fillAll' | 'period' | 'bulkType' | 'bulkFrom' | 'bulkTo' | 'bulkToTime' | 'day' | 'hour';
const LABELS_MANAGER: Record<LabelKey, [string, string]> = {
  search: ['org.title.SELECT', 'Tra cứu'],
  save: ['ar.viewempcalender.title.save', 'Lưu'],
  delete: ['ess.affirmApply.title.quxiaoshenqing', 'Hủy bỏ'],
  export: ['hrm.empinfo.EXPORT', 'Xuất Excel'],
  fillAll: ['ess.message.all_reaction', 'Thực hiện tất cả'],
  period: ['ess.infoApply.Period', 'Thời gian'],
  bulkType: ['ess.infoApply.attendance_type', 'Loại nghỉ phép'],
  bulkFrom: ['org.title.STARTDATE', 'Ngày bắt đầu'],
  bulkTo: ['hrm.recruitManage.END_DATE1', 'Ngày kết thúc'],
  bulkToTime: ['ess.infoApply.end_time', 'Thời gian kết thúc'],
  day: ['ar.viewitemparameter.title.dayofunit', 'Ngày'],
  hour: ['ar.viewitemparameter.title.xiaoshi', 'Tiếng'],
};
const LABELS_HR: Record<LabelKey, [string, string]> = {
  search: ['hrm.empinfo.QUERY', 'Tra cứu'],
  save: ['org.title.SAVE', 'Lưu'],
  delete: ['ess.empInfo.Delete', 'Xóa'],
  export: ['org.title.exportLOtImportExcel', 'Xuất Excel'],
  fillAll: ['hrm.approve.ALL_REACTION', 'Thực hiện tất cả'],
  period: ['pa.salary.title.date', 'Thời gian'],
  bulkType: ['ess.infoApply.attendState', 'Phân loại'],
  bulkFrom: ['public.title.startDate', 'Ngày bắt đầu'],
  bulkTo: ['public.title.endDate', 'Ngày kết thúc'],
  bulkToTime: ['ess.infoApply.title.endTime', 'Thời gian kết thúc'],
  day: ['ar.viewsummaryparameteritem.title.day', 'Ngày'],
  hour: ['ar.viewsummaryparameteritem.title.hour', 'Tiếng'],
};

/** Giờ chọn mỗi 10 phút (TIME_STR spacing = 10 bản gốc). */
function buildTimes(): string[] {
  const list: string[] = [];
  for (let m = 0; m < 24 * 60; m += 10) {
    list.push(`${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`);
  }
  return list;
}

/**
 * Xin nghỉ phép hàng loạt cho cấp dưới - bản Angular của 2 JSP Hanwha_HTSV (DWZ + DataTables + jQuery editable):
 * - mode 'manager': ess/infoApplyAttendance/viewApplyAttenanceBatchInfoList (route /pici-leave-affirm-batch)
 * - mode 'hr': ar/attendanceMintenance/viewApplyAttenanceManagentInfoList_new (route /leave-apply-manage)
 * API ở EssPiciLeaveAffirmController.
 *
 * Giữ nghiệp vụ bản gốc: "Thêm mới" tạo ngay 1 đơn trống trong DB (mở lại trang sẽ xóa các dòng trống chưa
 * lưu); "Lưu" cập nhật các dòng được tick và gửi duyệt; "Hủy bỏ/Xóa" = hủy đơn; sửa ô nào tự tick dòng đó và
 * tính lại thời lượng / tuyến duyệt / phép năm.
 *
 * Khác biệt cố ý: "Thêm mới" chèn dòng lên đầu bảng thay vì tải lại trang; các kiểm tra bản gốc gọi ajax bất
 * đồng bộ (trùng lịch, chốt công, phép năm còn lại) nay chặn được thật sự; cột "File" đính kèm của trang HR bỏ
 * vì bản gốc đã comment phần nạp file (luôn trống).
 */
@Component({
  selector: 'app-pici-leave-affirm-batch',
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
    LeaveApplyDetailComponent,
    TranslatePipe,
  ],
  templateUrl: './pici-leave-affirm-batch.component.html',
  styleUrl: './pici-leave-affirm-batch.component.css',
})
export class PiciLeaveAffirmBatchComponent implements OnInit {
  readonly mode: 'manager' | 'hr' = inject(ActivatedRoute).snapshot.data['mode'] === 'hr' ? 'hr' : 'manager';
  readonly isHr = this.mode === 'hr';
  readonly L = this.isHr ? LABELS_HR : LABELS_MANAGER;
  readonly columns = this.isHr ? COLS_HR : COLS_MANAGER;
  readonly widthConfig = this.columns.map((c) => c.width);
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly timeOptions = buildTimes();
  readonly confirmFlagOptions: { value: string; label: [string, string] }[] = [
    { value: '0', label: ['ess.title.WEIQUEREN', 'Chưa xác nhận'] },
    { value: '1', label: ['ess.infoApply.adopt', 'Duyệt'] },
    { value: '2', label: ['ess.infoApply.veto', 'Từ chối'] },
  ];

  readonly rows = signal<PiciLeaveRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly saving = signal(false);
  readonly cancelling = signal(false);
  readonly adding = signal(false);
  readonly importing = signal(false);
  readonly filling = signal(false);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);
  readonly leaveTypeOptions = signal<CodeItem[]>([]);
  readonly affirmFlagOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<LeaveApplyDetail | null>(null);
  @ViewChild(LeaveApplyDetailComponent) private plabDetail?: LeaveApplyDetailComponent;

  // Điều kiện tìm kiếm
  keyword = '';
  deptNos: string[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  shiftNo: string | null = null;
  leaveTypeCode: string | null = null;
  affirmFlag: string | null = null;
  confirmFlag: string | null = null;
  postFamily: string | null = null;
  cancelFlag = false;

  // Áp dụng hàng loạt (fillItem bản gốc)
  bulkLeaveTypeCode: string | null = null;
  bulkFromDate: Date | null = null;
  bulkFromTime: string | null = null;
  bulkToDate: Date | null = null;
  bulkToTime: string | null = null;
  bulkReason = '';

  /** Lần tải đầu (mở trang) - backend xóa các dòng trống còn sót (delAttendanceExForBatchInfoList bản gốc). */
  private firstLoad = true;
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
  private pickerRow: PiciLeaveRow | null = null;

  constructor(
    private readonly api: PiciLeaveAffirmBatchService,
    private readonly leaveApi: ApplyAttendanceBatchInfoService,
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
    this.lookupApi.getCodeList(LEAVE_TYPE_PARENT_CODE).subscribe({ next: (list) => this.leaveTypeOptions.set(list ?? []), error: () => undefined });
    this.lookupApi.getCodeList(AFFIRM_FLAG_PARENT_CODE).subscribe({ next: (list) => this.affirmFlagOptions.set(list ?? []), error: () => undefined });
    this.lookupApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe({ next: (list) => this.empOfficeOptions.set(list ?? []), error: () => undefined });
    if (this.isHr) {
      this.lookupApi.getCodeList(POST_FAMILY_PARENT_CODE).subscribe({ next: (list) => this.postFamilyOptions.set(list ?? []), error: () => undefined });
    }
    this.search();
  }

  private t(key: string, fallback: string): string {
    return key ? this.i18n.t(key, fallback) : fallback;
  }

  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

  // ==================== Tra cứu ====================

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    const firstLoad = this.firstLoad;
    this.firstLoad = false;
    this.api
      .getList({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        startDate: this.formatDmy(this.startDate),
        endDate: this.formatDmy(this.endDate),
        shiftNo: this.shiftNo ?? '',
        searchLeaveTypeCode: this.leaveTypeCode ?? '',
        searchAffirmFlag: this.affirmFlag ?? '',
        searchConfirmFlag: this.confirmFlag ?? '',
        searchPostFamily: this.isHr ? this.postFamily ?? '' : '',
        cancelFlag: this.cancelFlag ? '1' : '',
        firstLoad: firstLoad ? '1' : '',
      })
      .subscribe({
        next: (list) => {
          this.rows.set((list ?? []).map((r) => this.toRow(r)));
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  private toRow(r: PiciLeaveApiRow): PiciLeaveRow {
    return {
      ...r,
      selected: false,
      empEditable: !r.personId,
      canViewDetail: !!r.personId,
      fromDateObj: this.parseDmy(r.fromDate),
      toDateObj: this.parseDmy(r.toDate),
      empKeyword: r.empId ?? '',
    };
  }

  trackByRow = (_: number, row: PiciLeaveRow): string => row.applyNo;

  isLocked(row: PiciLeaveRow): boolean {
    return LOCKED_FLAGS.includes(row.affirmFlag ?? '');
  }

  private selectableRows(): PiciLeaveRow[] {
    return this.rows().filter((r) => !this.isLocked(r));
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

  private markEdited(row: PiciLeaveRow): void {
    if (!this.isLocked(row)) row.selected = true;
  }

  // ==================== Hiển thị ====================

  /** "x Ngày y Tiếng" từ số giờ nghỉ / số giờ 1 ngày công - đúng callength() bản gốc. */
  durationText(row: PiciLeaveRow): string {
    const length = parseFloat(row.applyLength ?? '');
    const dayHours = parseFloat(row.dayHours ?? '');
    const hourLabel = this.t(this.L.hour[0], this.L.hour[1]);
    if (!length) return `0${hourLabel}`;
    if (!dayHours) return `${row.applyLength}${hourLabel}`;
    let text = '';
    const days = Math.floor(length / dayHours);
    if (days > 0) text += `${days}${this.t(this.L.day[0], this.L.day[1])}`;
    const rest = length % dayHours;
    if (rest > 0) text += `${this.isHr ? rest : rest.toFixed(1)}${hourLabel}`;
    return text || `0${hourLabel}`;
  }

  /** "Trạng thái duyệt / Trạng thái xác nhận nhân sự" - đúng cột trạng thái bản gốc. */
  statusText(row: PiciLeaveRow): string {
    const confirm =
      row.confirmFlag === '1'
        ? this.t('ess.title.RENSHITONGGUO', 'Nhân sự phê duyệt')
        : row.confirmFlag === '2'
          ? this.t('ess.title.RENSHIFOUJUE', 'Nhân sự từ chối')
          : this.t('ess.title.WEIQUEREN', 'Chưa xác nhận');
    return `${row.affirmFlagName ?? ''}${this.isHr ? ' ' : ' / '}${confirm}`;
  }

  creatorText(row: PiciLeaveRow): string {
    return this.isHr ? row.createdBy ?? '' : `${row.createdBy ?? ''} : ${row.createDate ?? ''}`;
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
  onEmpKeywordChange(row: PiciLeaveRow, value: string): void {
    row.empKeyword = value;
    if (row.personId && value === row.empId) return;
    if (row.personId) {
      row.personId = null;
      row.empId = '';
      row.localName = '';
      row.deptName = '';
    }
  }

  /**
   * Enter ở ô Mã NV -> mở popup tìm kiếm với từ khóa vừa nhập; chỉ có đúng 1 kết quả thì tự đóng popup và
   * chọn luôn nhân viên đó - đúng submitKeyClick_applyAttenance() bản gốc (perCnt == 1), cách làm như trang change-user.
   */
  openEmpPicker(row: PiciLeaveRow): void {
    this.pickerRow = row;
    this.pickerKeyword = (row.empKeyword ?? '').trim();
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
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
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }

  /** Chọn 1 nhân viên trong popup -> gán vào dòng đang sửa rồi đóng popup. */
  pickEmployee(emp: EmployeeSearchDto): void {
    const row = this.pickerRow;
    this.closeEmpPicker();
    if (row) this.onEmpSelected(row, emp);
  }

  private onEmpSelected(row: PiciLeaveRow, option: EmployeeSearchDto): void {
    row.personId = option.personId;
    row.empId = option.empId;
    row.localName = option.localName;
    row.deptName = option.deptName;
    row.empKeyword = option.empId;
    this.markEdited(row);
    this.api.getEmpLeaveInfo(option.personId, row.fromDate || this.formatDmy(new Date())).subscribe({
      next: (info) => {
        row.shiftName = info?.shiftName ?? '';
        row.postFamily = info?.postFamily ?? '';
        row.dutyNo = info?.dutyNo ?? '';
      },
      error: () => undefined,
    });
    this.calcLength(row);
  }

  // ==================== Sửa ô ====================

  onLeaveTypeChange(row: PiciLeaveRow, value: string | null): void {
    row.leaveTypeCode = value ?? '';
    row.leaveTypeName = this.leaveTypeOptions().find((c) => c.codeNo === value)?.codeName ?? '';
    this.markEdited(row);
    this.calcLength(row);
  }

  onDateChange(row: PiciLeaveRow, which: 'from' | 'to', value: Date | null): void {
    if (which === 'from') {
      row.fromDateObj = value;
      row.fromDate = value ? this.formatDmy(value) : '';
    } else {
      row.toDateObj = value;
      row.toDate = value ? this.formatDmy(value) : '';
    }
    this.markEdited(row);
    this.calcLength(row);
  }

  onTimeChange(row: PiciLeaveRow, which: 'from' | 'to', value: string | null): void {
    if (which === 'from') row.fromTime = value ?? '';
    else row.toTime = value ?? '';
    this.markEdited(row);
    this.calcLength(row);
  }

  onReasonChange(row: PiciLeaveRow, value: string): void {
    row.leaveReason = value;
    this.markEdited(row);
  }

  /**
   * Tính lại thời lượng + tuyến duyệt + phép năm - đúng callength() bản gốc
   * (GET_AR_LEAVE_LENGTH, getAffirmor_ess3401, getAttendanceInformation).
   */
  private calcLength(row: PiciLeaveRow): void {
    if (!row.personId || !row.fromDate || !row.toDate) return;
    this.api
      .getLeaveLength(row.personId, row.fromDate, row.fromTime || '00:00', row.toDate, row.toTime || '00:00', row.leaveTypeCode ?? '')
      .subscribe({
        next: (res) => {
          row.applyLength = res?.applyLength ?? '';
          row.dayHours = res?.dayHours ?? row.dayHours;
          this.loadAffirmorPreview(row);
        },
        error: () => undefined,
      });
    this.api.getEmpLeaveInfo(row.personId, row.fromDate).subscribe({
      next: (info) => {
        row.totVacCnt = info?.totVacCnt ?? '';
        row.remainVacCnt = info?.remainVacCnt ?? '';
      },
      error: () => undefined,
    });
  }

  /** Xem trước tuyến duyệt - chỉ dòng chưa gửi hoặc đã duyệt (getAffirmor_ess3401 bản gốc). */
  private loadAffirmorPreview(row: PiciLeaveRow): void {
    if (row.affirmFlag && row.affirmFlag !== AFFIRM_APPROVED) return;
    if (!row.personId) return;
    this.api.getAffirmorPreview(row.personId, row.leaveTypeCode ?? '', row.applyLength ?? '').subscribe({
      next: (res) => (row.affirmStr = res?.affirmStr ?? ''),
      error: () => undefined,
    });
  }

  // ==================== Áp dụng hàng loạt (Thực hiện tất cả) ====================

  /** Áp loại nghỉ / lý do / ngày giờ cho các dòng đã tick rồi tính lại - đúng fillItem() bản gốc. */
  fillSelected(): void {
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.showError(this.t('ar.viewApplyAttenanceManagentInfoList.QINGXUANZEXIUGAINEIRONG.b', 'Xin chọn nội dung sửa'));
      return;
    }
    const typeName = this.leaveTypeOptions().find((c) => c.codeNo === this.bulkLeaveTypeCode)?.codeName ?? '';
    const reason = this.bulkReason.trim();
    const hasDates = !!this.bulkFromDate && !!this.bulkToDate;
    selected.forEach((row) => {
      row.leaveTypeCode = this.bulkLeaveTypeCode ?? '';
      row.leaveTypeName = typeName;
      if (reason) row.leaveReason = reason;
      if (hasDates) {
        row.fromDateObj = this.bulkFromDate;
        row.fromDate = this.formatDmy(this.bulkFromDate);
        row.toDateObj = this.bulkToDate;
        row.toDate = this.formatDmy(this.bulkToDate);
        row.fromTime = this.bulkFromTime ?? '';
        row.toTime = this.bulkToTime ?? '';
      }
      this.calcLength(row);
    });
  }

  // ==================== Lưu ====================

  save(): void {
    const selected = this.rows().filter((r) => r.selected && !this.isLocked(r));
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

  /** Các kiểm tra phía client của saveApplyAttenanceBatchInfo() bản gốc (theo từng trang). */
  private validateForSave(selected: PiciLeaveRow[]): string | null {
    for (const row of selected) {
      const label = row.localName ? `${row.localName}: ` : '';
      if (!row.personId) {
        return this.t('ar.viewarcardrecord.title.empidnotnull', 'Mã nhân viên không được trống!');
      }
      if (row.affirmFlag && row.affirmFlag !== AFFIRM_APPROVED) {
        return label + this.t('ar.viewApplyAttenanceManagentInfoList.SHENPIZHUANGTAIWEITONGGUO.b', 'Chỉ có thể lưu khi trạng thái phê duyệt là duyệt');
      }
      const length = parseFloat(row.applyLength ?? '');
      if (!row.applyLength || !length) {
        return label + this.t('ar.viewApplyAttenanceManagentInfoList.SHICHANGBUNENGDENGYULING.b', 'Thời lượng không được bằng 0');
      }
      if (!row.fromDate) {
        return label + this.t('ar.viewApplyAttenanceManagentInfoList.QINGQUEDINGKAISHIRIQI.b', 'Xin xác nhận ngày bắt đầu');
      }
      if (!row.toDate) {
        return label + this.t('ar.viewApplyAttenanceManagentInfoList.QINGQUEDINGJIESHURIQI.b', 'Xin xác nhận ngày kết thúc');
      }
      if (!row.leaveTypeCode) {
        return label + this.t('ar.viewApplyAttenanceManagentInfoList.KAOQINBUNENGWEIKONG.b', 'Trạng thái chấm công không được trống');
      }
      const dayHours = parseFloat(row.dayHours ?? '');
      if (row.leaveTypeCode === LEAVE_ANNUAL) {
        // Bản gốc cố định 8 giờ/ngày khi so với số ngày phép còn lại
        const remain = parseFloat(row.remainVacCnt ?? '') || 0;
        if (length > remain * 8) {
          return this.isHr
            ? label + this.t('ar.viewApplyAttenanceManagentInfoList.NIANJIASHISHUBUZU.b', 'Thời lượng phép năm không đủ')
            : label + this.t('ar.viewApplyAttenanceManagentInfoList.NIANJIATIANSHUBUZU.b', 'Số ngày phép năm không đủ');
        }
        if (!this.isHr && dayHours && dayHours !== 7.67 && length % (dayHours / 2) !== 0) {
          return label + this.t('alert.message.ess.infoApply.applyTimeCanNotLessThanMinValue', 'Thời lượng xin phép không được nhỏ hơn giá trị nhỏ nhất.!');
        }
      }
      if (!this.isHr && FULL_DAY_LEAVE_TYPES.includes(row.leaveTypeCode) && dayHours && dayHours !== 7.67 && length % dayHours !== 0) {
        return label + this.t('alert.message.ess.infoApply.applyTimeCanNotLessThanMinValue', 'Thời lượng xin phép không được nhỏ hơn giá trị nhỏ nhất.!');
      }
    }
    return null;
  }

  private toPayload(row: PiciLeaveRow): PiciLeavePayload {
    return {
      applyNo: row.applyNo,
      personId: row.personId ?? '',
      localName: row.localName ?? '',
      leaveTypeCode: row.leaveTypeCode ?? '',
      fromDate: row.fromDate ?? '',
      fromTime: row.fromTime || '00:00',
      toDate: row.toDate ?? '',
      toTime: row.toTime || '00:00',
      applyLength: row.applyLength ?? '',
      leaveReason: (row.leaveReason ?? '').trim(),
    };
  }

  private runSave(selected: PiciLeaveRow[]): void {
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

  // ==================== Hủy đơn ====================

  cancelSelected(): void {
    const selected = this.rows().filter((r) => r.selected && !this.isLocked(r));
    if (!selected.length) {
      this.showError(this.t('alert.message.ess.affirmApply.chooseApplyRecordFirstForBatch', 'Lựa chọn danh sách đăng ký sau đó thực hiện hàng loạt!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t(this.L.delete[0], this.L.delete[1]),
      nzContent: this.t('ar.viewApplyAttenanceManagentInfoList.QUEDINGPILIANGQUXIAOMA.b', 'Đồng ý hủy bỏ không?'),
      nzOkDanger: true,
      nzOnOk: () => this.runCancel(selected),
    });
  }

  private runCancel(selected: PiciLeaveRow[]): void {
    this.cancelling.set(true);
    this.api.cancel(selected.map((r) => this.toPayload(r)), this.mode).subscribe({
      next: (res) => {
        this.cancelling.set(false);
        if (res?.success) {
          this.message.success(res.message || this.t('common.deleteSuccess', 'Xóa thành công!'));
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

  openDetail(row: PiciLeaveRow): void {
    if (!row.canViewDetail || !row.applyNo) return;
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.leaveApi.getDetail(row.applyNo, row.leaveTypeCode ?? '').subscribe({
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
    this.plabDetail?.print();
  }

  // ==================== Excel ====================

  downloadTemplate(): void {
    window.location.href = this.leaveApi.downloadTemplateUrl();
  }

  onImportFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.importing.set(true);
    this.leaveApi.importExcel(file).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res?.success) this.message.success(res.message || this.t('common.saveSuccess', 'Lưu thành công!'));
        else this.message.warning(res?.message || res?.error || this.t('alert.message.add_fail', 'Thêm thất bại!'));
        this.search();
        this.tabs.openTab('/ar/attendanceMintenance/viewImportAttendanceTempList', this.t('ess.title.DAORUJIEGUO', 'Kết quả nhập'), 'external');
      },
      error: () => {
        this.importing.set(false);
        this.showError(this.t('alert.message.add_fail', 'Thêm thất bại!'));
      },
    });
  }

  /** Xuất Excel danh sách đang hiển thị (client-side) - thay /disc/autoExcel/exportLOtImportExcel bản gốc. */
  exportExcel(): void {
    const cols = this.columns.filter((c) => c.key !== 'check');
    const headers = cols.map((c) => this.t(c.label[0], c.label[1]));
    const data = this.rows().map((r, i) => cols.map((c) => this.cellText(c.key, r, i)));
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Leave');
    const prefix = this.isHr ? 'leave_apply_manage' : 'pici_leave_affirm';
    XLSX.writeFile(workbook, `${prefix}_${formatDate(new Date(), 'yyyyMMddHHmm', 'vi')}.xlsx`);
  }

  private cellText(key: ColKey, r: PiciLeaveRow, i: number): string | number {
    const dayLabel = this.t(this.L.day[0], this.L.day[1]);
    switch (key) {
      case 'no': return i + 1;
      case 'empId': return r.empId ?? '';
      case 'name': return r.localName ?? '';
      case 'dept': return r.deptName ?? '';
      case 'shift': return r.shiftName ?? '';
      case 'applyTime': return r.applyTime ?? '';
      case 'totVac': return `${r.totVacCnt ?? ''}${dayLabel}`;
      case 'remainVac': return `${r.remainVacCnt ?? ''}${dayLabel}`;
      case 'leaveType': return r.leaveTypeName ?? '';
      case 'fromDate': return r.fromDate ?? '';
      case 'fromTime': return r.fromTime ?? '';
      case 'toDate': return r.toDate ?? '';
      case 'toTime': return r.toTime ?? '';
      case 'duration': return this.durationText(r);
      case 'reason': return r.leaveReason ?? '';
      case 'approver': return (r.affirmStr ?? '').replace(/<br\s*\/?>/gi, '\n').trim();
      case 'status': return this.statusText(r);
      case 'hrComment': return r.hrComment ?? '';
      case 'creator': return this.creatorText(r);
      case 'createDate': return r.createDate ?? '';
      case 'updater': return r.updatedBy ?? '';
      case 'updateDate': return r.updateDate ?? '';
      default: return '';
    }
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

  formatDmy(d: Date | null): string {
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
