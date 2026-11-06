import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { AuthService } from '../auth/auth.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  CodeItem,
  StartPointActionResult,
  StartPointDecision,
  StartPointEmployee,
} from './view-start-point.model';
import { ViewStartPointService } from './view-start-point.service';

/** Message key dùng lại nguyên key của JSP bản gốc (viewStartPoint.jsp / viewSingleStartPoint.jsp - dự án HTSV). */
const I18N_KEYS = [
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'button.search', 'button.add', 'button.delete',
  'button.sys.affirm.save', 'hrm.empinfo.EXPORT', 'hrm.empinfo.Command_date', 'org.title.EXPERIENCE_TYPE_NAME',
  'hrm.empinfo.ORG_NAME_LOCAL', 'hrm.empinfo.MAIN_BUSINESS_NAME', 'hrm.contract.Rank', 'hrm.empinfo.Working_status',
  'hrm.empinfo.ORDER_STATUS.Z', 'hrm.empinfo.starter_START_DATE', 'hrm.empinfo.TRANS_REASON',
  'sys.postManage.title.position', 'hrm.empinfo.POST_FAMILY', 'hrm.contract.POSITION_NO', 'hrm.empinfo.EMP_TYPE_CODE_NAME',
  'hrm.empinfo.COST_CENTER_NAME_LOCAL', 'hrm.empinfo.REMARK', 'org.title.UPDATED_IP', 'org.title.UPDATE_DATE',
  'hrm.empinfo.SAVE_CONFIRM', 'hrm.alert.empinfo.Sure.delete', 'hrm.empinfo.RUZHI_ORDER_NOT_DELETE.Z',
  'hrm.alert.empinfo.Choice_Perform_operation', 'hr.viewCondSql.title.QINGXUANZE', 'tempEmp.pickEmp',
  'alert.message.update_success', 'alert.message.add_fail', 'alert.message.delete_success', 'alert.message.delete_fail',
  'hrm.empinfo.empid', 'hrm.empinfo.name', 'vsp.js.selectFirst', 'vsp.js.notFound', 'vsp.js.required',
  'common.stt', 'common.total', 'common.noData', 'common.loadFail', 'common.cancel', 'mep.msg.loadDeptFailed',
];

/** Quyết định "Vào công ty" - không cho xóa (bản gốc joinFlag). */
const TRANS_CODE_JOIN = '14015867';
/** Quyết định tuyển dụng (Tân sinh viên / Kinh nghiệm / Chuyên gia) - bản gốc hiển thị chỉ đọc, không đổi loại. */
const LOCKED_TRANS_CODES = ['400414', '400429', '400435'];
/** Nghỉ việc chủ động / bị động / hết HĐ / chấm dứt HĐ -> trạng thái NV = Nghỉ việc (15120), ngược lại Đang làm (15119). */
const LEAVE_TRANS_CODES = ['14013966', '14013965', '400440', '400441'];
const EMP_OFFICE_LEFT = '15120';
const EMP_OFFICE_WORKING = '15119';

interface DecisionForm {
  seq: number | null;
  personId: string;
  transCode: string | null;
  transCodeName: string;
  transResource: string | null;
  startDatePicker: Date | null;
  deptno: string | null;
  position: string | null;
  postFamily: string | null;
  postGradeNo: string | null;
  positionNo: string | null;
  empTypeCode: string | null;
  mainBusiness: string | null;
  costCenter: string | null;
  empOffice: string | null;
  payStepNo: string | null;
  remark: string;
  updatedBy: string;
  updateDate: string;
}

function emptyForm(personId: string): DecisionForm {
  return {
    seq: null, personId, transCode: null, transCodeName: '', transResource: null, startDatePicker: null,
    deptno: null, position: null, postFamily: null, postGradeNo: null, positionNo: null, empTypeCode: null,
    mainBusiness: null, costCenter: null, empOffice: null, payStepNo: null, remark: '', updatedBy: '', updateDate: '',
  };
}

/**
 * Quyết định nhân sự - bản Angular của hrm/empinfo/viewStartPoint + viewSingleStartPoint (dự án HTSV):
 * chọn 1 nhân viên, bên trái là toàn bộ lịch sử quyết định (HR_EXPERIENCE_INSIDE), bên phải là chi tiết
 * quyết định đang chọn để sửa; nút Thêm lấy thông tin hiện tại của nhân viên làm giá trị mặc định,
 * Xóa áp dụng cho quyết định đang mở (không cho xóa quyết định vào công ty), Lưu/Xóa đều chạy
 * PKG_RECRUIT_MANAGE.PR_EXPERIENCE_EXECUTE_SINGLE ở backend như bản gốc.
 */
@Component({
  selector: 'app-view-start-point',
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
    NzTreeSelectModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-start-point.component.html',
  styleUrl: './view-start-point.component.css',
})
export class ViewStartPointComponent implements OnInit {
  // ==================== Nhân viên ====================
  searchKeyword = '';
  readonly searching = signal(false);
  readonly employee = signal<StartPointEmployee | null>(null);
  readonly empPickerVisible = signal(false);
  readonly empCandidates = signal<StartPointEmployee[]>([]);

  // ==================== Danh sách quyết định ====================
  readonly decisions = signal<StartPointDecision[]>([]);
  readonly loading = signal(false);
  readonly selectedSeq = signal<number | null>(null);

  // ==================== Chi tiết ====================
  readonly detailLoading = signal(false);
  readonly saving = signal(false);
  form: DecisionForm = emptyForm('');
  /** Quyết định tuyển dụng đã lưu: chỉ hiển thị tên, không đổi loại quyết định (bản gốc). */
  readonly transCodeLocked = signal(false);

  // ==================== Danh mục ====================
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly transCodeOptions = signal<CodeItem[]>([]);
  readonly transResourceOptions = signal<CodeItem[]>([]);
  readonly positionOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly postGradeOptions = signal<CodeItem[]>([]);
  readonly positionNoOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly mainBusinessOptions = signal<CodeItem[]>([]);

  readonly employeeTitle = computed(() => {
    const e = this.employee();
    if (!e) return '';
    return [e.localName, e.empId, e.postGradeName, e.empOfficeName].filter((v) => !!v).join(' / ');
  });

  constructor(
    private readonly api: ViewStartPointService,
    private readonly auth: AuthService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    // Bản gốc: mở trang mặc định hiển thị quyết định của chính user đăng nhập
    const personId = this.auth.currentUser()?.personId;
    if (personId) this.loadEmployee(personId);
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  // ==================== Tìm / chọn nhân viên ====================

  searchEmployee(): void {
    const keyword = this.searchKeyword.trim();
    this.searching.set(true);
    this.api.searchEmployees(keyword).subscribe({
      next: (list) => {
        this.searching.set(false);
        const rows = list ?? [];
        if (rows.length === 0) {
          this.message.warning(this.t('vsp.js.notFound', 'Không tìm thấy nhân viên'));
        } else if (rows.length === 1) {
          this.pickEmployee(rows[0]);
        } else {
          this.empCandidates.set(rows);
          this.empPickerVisible.set(true);
        }
      },
      error: () => {
        this.searching.set(false);
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  pickEmployee(emp: StartPointEmployee): void {
    this.empPickerVisible.set(false);
    this.searchKeyword = emp.localName ?? '';
    this.employee.set(emp);
    this.loadDecisions();
  }

  closeEmpPicker(): void {
    this.empPickerVisible.set(false);
  }

  private loadEmployee(personId: string): void {
    this.api.getEmployeeInfo(personId).subscribe({
      next: (emp) => {
        this.employee.set(emp);
        this.searchKeyword = emp.localName ?? '';
        this.loadDecisions();
      },
      error: () => this.employee.set(null),
    });
  }

  // ==================== Danh sách quyết định ====================

  /** Tải lại danh sách rồi mở quyết định `selectSeq` (mặc định: quyết định mới nhất; không có thì mở form Thêm). */
  private loadDecisions(selectSeq?: number | null): void {
    const emp = this.employee();
    if (!emp) return;
    this.loading.set(true);
    this.api.getDecisionList(emp.personId).subscribe({
      next: (list) => {
        const rows = list ?? [];
        this.decisions.set(rows);
        this.loading.set(false);
        const target = rows.find((r) => r.seq === selectSeq) ?? rows[0];
        if (target?.seq) this.selectDecision(target);
        else this.newDecision();
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.decisions.set([]);
        this.loading.set(false);
      },
    });
  }

  selectDecision(row: StartPointDecision): void {
    if (!row.seq) return;
    this.selectedSeq.set(row.seq);
    this.detailLoading.set(true);
    this.api.getDecisionDetail(row.seq).subscribe({
      next: (d) => {
        this.applyToForm(d, d.seq ?? null);
        this.transCodeLocked.set(LOCKED_TRANS_CODES.includes(d.transCode ?? ''));
        this.detailLoading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.detailLoading.set(false);
      },
    });
  }

  /** Nút Thêm: form trống, giá trị mặc định = thông tin hiện tại ở HR_EMPLOYEE (bản gốc viewCurrentHrInfo). */
  newDecision(): void {
    const emp = this.employee();
    if (!emp) {
      this.message.warning(this.t('vsp.js.selectFirst', 'Vui lòng tìm kiếm nhân viên trước'));
      return;
    }
    this.selectedSeq.set(null);
    this.transCodeLocked.set(false);
    this.detailLoading.set(true);
    this.api.getDecisionDefault(emp.personId).subscribe({
      next: (d) => {
        this.applyToForm({ ...d, startDate: null, transCode: null, transResource: null, remark: null }, null);
        this.detailLoading.set(false);
      },
      error: () => {
        this.applyToForm({}, null);
        this.detailLoading.set(false);
      },
    });
  }

  private applyToForm(d: StartPointDecision, seq: number | null): void {
    const personId = this.employee()?.personId ?? d.personId ?? '';
    this.form = {
      seq,
      personId,
      transCode: d.transCode ?? null,
      transCodeName: d.transCodeName ?? '',
      transResource: d.transResource ?? null,
      startDatePicker: this.toDate(d.startDate),
      deptno: d.deptno ?? null,
      position: d.position ?? null,
      postFamily: d.postFamily ?? null,
      postGradeNo: d.postGradeNo ?? null,
      positionNo: d.positionNo ?? null,
      empTypeCode: d.empTypeCode ?? null,
      mainBusiness: d.mainBusiness ?? null,
      costCenter: d.costCenter ?? null,
      empOffice: d.empOffice ?? null,
      payStepNo: d.payStepNo ?? null,
      remark: d.remark ?? '',
      updatedBy: d.updatedBy ?? '',
      updateDate: d.updateDate ?? '',
    };
    this.loadTransResourceOptions(this.form.transCode);
    this.loadPostGradeOptions(this.form.postFamily);
  }

  // ==================== Liên kết các trường ====================

  onTransCodeChange(value: string | null): void {
    this.form.transCode = value;
    this.form.transResource = null;
    this.loadTransResourceOptions(value);
    // Bản gốc falingpanduan(): đổi loại quyết định -> tính lại trạng thái nhân viên
    this.form.empOffice = value && LEAVE_TRANS_CODES.includes(value) ? EMP_OFFICE_LEFT : EMP_OFFICE_WORKING;
  }

  onPostFamilyChange(value: string | null): void {
    this.form.postFamily = value;
    this.form.postGradeNo = null;
    this.loadPostGradeOptions(value);
  }

  private loadTransResourceOptions(transCode: string | null): void {
    if (!transCode) {
      this.transResourceOptions.set([]);
      return;
    }
    this.api.getCodeList(transCode).subscribe((list) => this.transResourceOptions.set(list ?? []));
  }

  private loadPostGradeOptions(postFamily: string | null): void {
    if (!postFamily) {
      this.postGradeOptions.set([]);
      return;
    }
    this.api.getCodeList(postFamily).subscribe((list) => this.postGradeOptions.set(list ?? []));
  }

  // ==================== Lưu / Xóa / Xuất Excel ====================

  saveDecision(): void {
    if (!this.form.personId) {
      this.message.warning(this.t('vsp.js.selectFirst', 'Vui lòng tìm kiếm nhân viên trước'));
      return;
    }
    if (!this.form.startDatePicker || !this.form.transCode) {
      this.message.warning(this.t('vsp.js.required', 'Vui lòng nhập đầy đủ thông tin bắt buộc'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.empinfo.SAVE_CONFIRM', 'Đồng ý lưu không?'),
      nzOnOk: () => this.doSave(),
    });
  }

  private doSave(): void {
    const f = this.form;
    const dto: StartPointDecision = {
      seq: f.seq,
      personId: f.personId,
      transCode: f.transCode,
      transResource: f.transResource,
      startDate: this.toDateStr(f.startDatePicker),
      deptno: f.deptno,
      position: f.position,
      postFamily: f.postFamily,
      postGradeNo: f.postGradeNo,
      positionNo: f.positionNo,
      empTypeCode: f.empTypeCode,
      mainBusiness: f.mainBusiness,
      costCenter: f.costCenter,
      empOffice: f.empOffice,
      payStepNo: f.payStepNo,
      remark: f.remark,
    };
    this.saving.set(true);
    this.api.saveDecision(dto).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(this.t('alert.message.update_success', 'Sửa thành công!'));
          this.loadDecisions(res.seq ?? f.seq);
        } else {
          this.message.error(this.resultMessage(res, 'alert.message.add_fail', 'Lưu thất bại!'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.t('alert.message.add_fail', 'Lưu thất bại!'));
      },
    });
  }

  deleteDecision(): void {
    const seq = this.form.seq;
    if (!seq) {
      this.message.warning(this.t('hrm.alert.empinfo.Choice_Perform_operation', 'Xin chọn thao tác cần thực hiện'));
      return;
    }
    if (this.form.transCode === TRANS_CODE_JOIN) {
      this.message.warning(this.t('hrm.empinfo.RUZHI_ORDER_NOT_DELETE.Z', 'Quyết định nhận việc không được xóa'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.alert.empinfo.Sure.delete', 'Đồng ý Xóa không?'),
      nzOkDanger: true,
      nzOnOk: () => {
        this.api.deleteDecision(seq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(this.t('alert.message.delete_success', 'Xóa thành công!'));
              this.loadDecisions();
            } else {
              this.message.error(this.resultMessage(res, 'alert.message.delete_fail', 'Xóa thất bại!'));
            }
          },
          error: () => this.message.error(this.t('alert.message.delete_fail', 'Xóa thất bại!')),
        });
      },
    });
  }

  exportExcel(): void {
    const emp = this.employee();
    if (!emp) {
      this.message.warning(this.t('vsp.js.selectFirst', 'Vui lòng tìm kiếm nhân viên trước'));
      return;
    }
    const headers = [
      'No.', this.t('hrm.empinfo.Command_date', 'Thời gian'), this.t('org.title.EXPERIENCE_TYPE_NAME', 'Quyết định'),
      this.t('hrm.empinfo.TRANS_REASON', 'Lý do'), this.t('hrm.empinfo.ORG_NAME_LOCAL', 'Phòng ban'),
      this.t('hrm.empinfo.MAIN_BUSINESS_NAME', 'Công việc'), this.t('hrm.empinfo.POST_FAMILY', 'Nhóm nhân viên'),
      this.t('hrm.contract.Rank', 'Chức vụ'), this.t('hrm.contract.POSITION_NO', 'Chức danh'),
      this.t('sys.postManage.title.position', 'Vị trí'), this.t('hrm.empinfo.EMP_TYPE_CODE_NAME', 'Loại nhân viên'),
      this.t('hrm.empinfo.COST_CENTER_NAME_LOCAL', 'Mã chi phí'), this.t('hrm.empinfo.Working_status', 'Trạng thái'),
      this.t('hrm.empinfo.ORDER_STATUS.Z', 'Hiệu lực'), this.t('hrm.empinfo.REMARK', 'Ghi chú'),
    ];
    const rows = this.decisions().map((r, i) => [
      i + 1, r.startDate, r.transCodeName, r.transResourceName, r.deptName, r.mainBusinessName, r.postFamilyName,
      r.postGradeName, r.positionNoName, r.positionName, r.empTypeName, r.costCenterName, r.empOfficeName,
      r.activityName, r.remark,
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'StartPoint');
    XLSX.writeFile(workbook, `StartPoint_${emp.empId ?? emp.personId}.xlsx`);
  }

  private resultMessage(res: StartPointActionResult, fallbackKey: string, fallbackText: string): string {
    if (res.messageKey) return this.t(res.messageKey, res.message || fallbackText);
    return res.message || this.t(fallbackKey, fallbackText);
  }

  // ==================== Danh mục + cây phòng ban ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) map.get(node.parent)!.children!.push(node);
      else roots.push(node);
    });
    const markLeaf = (nodes: NzTreeNodeOptions[]) =>
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    markLeaf(roots);
    return roots;
  }

  /** Mã danh mục cha theo đúng viewSingleStartPoint.jsp bản gốc. */
  private loadCodeOptions(): void {
    this.api.getCodeList('14013956').subscribe((list) => this.transCodeOptions.set(list ?? []));
    this.api.getCodeList('14014049').subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('14014036').subscribe((list) => this.positionNoOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    // Công việc: bản gốc parentNo=14016056; nếu công ty chưa khai báo nhóm này thì dùng nhóm 400098 (dùng ở các trang khác)
    this.api.getCodeList('14016056').subscribe((list) => {
      if (list?.length) this.mainBusinessOptions.set(list);
      else this.api.getCodeList('400098').subscribe((alt) => this.mainBusinessOptions.set(alt ?? []));
    });
  }

  // ==================== Helpers ngày tháng (START_DATE lưu dạng DD/MM/YYYY) ====================

  private toDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr) return null;
    const [d, m, y] = dateStr.split(/[/.\-]/);
    if (d && m && y && y.length === 4) {
      const parsed = new Date(Number(y), Number(m) - 1, Number(d));
      return isNaN(parsed.getTime()) ? null : parsed;
    }
    return null;
  }

  private toDateStr(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'en-US') : '';
  }
}
