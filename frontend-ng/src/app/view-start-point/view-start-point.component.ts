import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../auth/auth.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  CodeItem,
  StartPointDecision,
  StartPointListParams,
} from './view-start-point.model';
import { ViewStartPointService } from './view-start-point.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'vsp.title', 'vsp.search.placeholder', 'vsp.label.noEmployee', 'vsp.label.decisions',
  'vsp.label.selectDecision', 'vsp.label.newDecision', 'vsp.field.transCode', 'vsp.field.startDate',
  'vsp.field.deptNo', 'vsp.field.empTypeCode', 'vsp.field.postFamily', 'vsp.field.postGradeNo',
  'vsp.field.positionNo', 'vsp.field.mainBusiness', 'vsp.field.transResource', 'vsp.field.costCenter',
  'vsp.field.position', 'vsp.field.remark', 'vsp.js.selectFirst', 'vsp.js.confirmDelete',
  'vsp.js.selectRow', 'vsp.js.notFound', 'vsp.js.required',
  'recruit.list.placeholder.selectDept',
  'common.add', 'common.delete', 'common.save', 'common.search', 'common.success', 'common.error',
  'common.noData', 'common.exportExcel', 'mep.msg.loadDeptFailed', 'common.loadFail',
];

const PAGE_SIZE = 20;

interface DecisionForm {
  seq: number | null;
  personId: string;
  transCode: string | null;
  startDatePicker: Date | null;
  deptno: string | null;
  empTypeCode: string | null;
  postFamily: string | null;
  postGradeNo: string | null;
  positionNo: string | null;
  costCenter: string;
  position: string | null;
  mainBusiness: string | null;
  transResource: string | null;
  remark: string;
}

function emptyForm(personId: string): DecisionForm {
  return {
    seq: null, personId, transCode: null, startDatePicker: new Date(),
    deptno: null, empTypeCode: null, postFamily: null, postGradeNo: null, positionNo: null,
    costCenter: '', position: null, mainBusiness: null, transResource: null, remark: '',
  };
}

/**
 * Bản Angular của hrm/empinfo/viewStartPoint.html (Thymeleaf + jQuery tự build DOM) - Quyết định nhân
 * sự: tìm 1 nhân viên, xem/thêm/sửa/xóa lịch sử quyết định (HR_EXPERIENCE_INSIDE) của nhân viên đó.
 * Gọi lại nguyên API JSON đã có sẵn ở HrEmpinfoController (xem ViewStartPointService) - không đổi
 * backend, trừ 1 field mới `personId` được thêm vào GET /auth/api/me (AuthController) để trang Angular
 * có thể tự tải quyết định của chính user đang đăng nhập khi mở trang - đúng hành vi SSR cũ (bản
 * Thymeleaf nhúng currentHrUser.personId trực tiếp vào HTML qua session, Angular không có tương đương
 * nên cần endpoint JSON lộ ra field này; xem AuthService.currentUser()).
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
    NzCheckboxModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    TranslatePipe,
  ],
  templateUrl: './view-start-point.component.html',
  styleUrl: './view-start-point.component.css',
})
export class ViewStartPointComponent implements OnInit {
  readonly pageSize = PAGE_SIZE;

  searchKeyword = '';
  readonly searching = signal(false);
  currentPersonId: string | null = null;
  currentEmpId: string | null = null;
  currentLocalName: string | null = null;
  currentDeptName: string | null = null;

  readonly decisions = signal<StartPointDecision[]>([]);
  readonly totalRecords = signal(0);
  readonly loading = signal(false);
  pageIndex = 1;
  readonly checkedSeqs = signal<Set<number>>(new Set());
  private latestSeq: number | null = null;

  readonly selectedSeq = signal<number | null>(null);
  readonly isNewMode = signal(false);
  readonly detailLoading = signal(false);
  readonly saving = signal(false);
  form: DecisionForm = emptyForm('');

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly transCodeOptions = signal<CodeItem[]>([]);
  readonly transResourceOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly postGradeOptions = signal<CodeItem[]>([]);
  readonly positionNoOptions = signal<CodeItem[]>([]);
  readonly positionOptions = signal<CodeItem[]>([]);
  readonly mainBusinessOptions = signal<CodeItem[]>([]);

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
    this.loadStaticCodeOptions();

    const me = this.auth.currentUser();
    if (me?.personId) {
      this.currentPersonId = me.personId;
      this.currentLocalName = me.employeeName ?? null;
      this.currentDeptName = me.deptName ?? null;
      this.loadDecisionList();
    }
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  // ==================== Tìm kiếm nhân viên ====================

  searchEmployee(): void {
    const keyword = this.searchKeyword.trim();
    this.searching.set(true);
    this.api.searchEmployee(keyword).subscribe({
      next: (emp) => {
        this.searching.set(false);
        this.currentPersonId = emp.personId;
        this.currentEmpId = emp.empId ?? null;
        this.currentLocalName = emp.localName ?? null;
        this.currentDeptName = emp.deptName ?? null;
        this.pageIndex = 1;
        this.selectedSeq.set(null);
        this.isNewMode.set(false);
        this.checkedSeqs.set(new Set());
        this.form = emptyForm(this.currentPersonId);
        this.loadDecisionList();
      },
      error: (err) => {
        this.searching.set(false);
        if (err?.status === 404) this.message.warning(this.t('vsp.js.notFound', 'Không tìm thấy nhân viên'));
        else this.message.error(this.t('common.error', 'Lỗi'));
      },
    });
  }

  // ==================== Danh sách quyết định ====================

  private loadDecisionList(): void {
    if (!this.currentPersonId) return;
    this.loading.set(true);
    const params: StartPointListParams = {
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      personId: this.currentPersonId,
    };
    this.api.getDecisionList(params).subscribe({
      next: (res) => {
        const rows = res.data ?? [];
        this.decisions.set(rows);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.latestSeq = rows.length > 0 ? rows[0].seq : null;
        this.loading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.loading.set(false);
      },
    });
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.loadDecisionList();
  }

  isChecked(seq: number): boolean {
    return this.checkedSeqs().has(seq);
  }

  toggleChecked(seq: number, checked: boolean): void {
    const next = new Set(this.checkedSeqs());
    if (checked) next.add(seq);
    else next.delete(seq);
    this.checkedSeqs.set(next);
  }

  // ==================== Chọn quyết định để xem chi tiết ====================

  get selectedTitle(): string {
    if (this.isNewMode()) return this.t('vsp.label.newDecision', 'Quyết định mới');
    const row = this.decisions().find((d) => d.seq === this.selectedSeq());
    if (row) return row.transCodeName || row.transCode || '';
    return this.t('vsp.label.selectDecision', '-- Chọn quyết định --');
  }

  selectDecision(row: StartPointDecision): void {
    this.selectedSeq.set(row.seq);
    this.isNewMode.set(false);
    this.detailLoading.set(true);
    this.api.getDecisionDetail(row.seq).subscribe({
      next: (d) => {
        this.form = {
          seq: d.seq,
          personId: d.personId ?? this.currentPersonId ?? '',
          transCode: d.transCode ?? null,
          startDatePicker: this.toDate(d.startDate),
          deptno: d.deptno ?? null,
          empTypeCode: d.empTypeCode ?? null,
          postFamily: d.postFamily ?? null,
          postGradeNo: d.postGradeNo ?? null,
          positionNo: d.positionNo ?? null,
          costCenter: d.costCenter ?? '',
          position: d.position ?? null,
          mainBusiness: d.mainBusiness ?? null,
          transResource: d.transResource ?? null,
          remark: d.remark ?? '',
        };
        this.loadPostGradeOptions(d.postFamily);
        this.loadTransResourceOptions(d.transCode);
        this.detailLoading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.error', 'Lỗi'));
        this.detailLoading.set(false);
      },
    });
  }

  // ==================== Thêm mới quyết định ====================

  newDecision(): void {
    if (!this.currentPersonId) {
      this.message.warning(this.t('vsp.js.selectFirst', 'Vui lòng tìm kiếm nhân viên trước'));
      return;
    }
    this.selectedSeq.set(null);
    this.isNewMode.set(true);
    if (!this.latestSeq) {
      this.form = emptyForm(this.currentPersonId);
      this.postGradeOptions.set([]);
      this.transResourceOptions.set([]);
      return;
    }
    this.detailLoading.set(true);
    this.api.getDecisionDetail(this.latestSeq).subscribe({
      next: (d) => {
        this.form = {
          seq: null,
          personId: this.currentPersonId!,
          transCode: null,
          startDatePicker: new Date(),
          deptno: d.deptno ?? null,
          empTypeCode: d.empTypeCode ?? null,
          postFamily: d.postFamily ?? null,
          postGradeNo: d.postGradeNo ?? null,
          positionNo: d.positionNo ?? null,
          costCenter: d.costCenter ?? '',
          position: d.position ?? null,
          mainBusiness: d.mainBusiness ?? null,
          transResource: null,
          remark: d.remark ?? '',
        };
        this.loadPostGradeOptions(d.postFamily);
        this.transResourceOptions.set([]);
        this.detailLoading.set(false);
      },
      error: () => {
        this.form = emptyForm(this.currentPersonId!);
        this.postGradeOptions.set([]);
        this.transResourceOptions.set([]);
        this.detailLoading.set(false);
      },
    });
  }

  // ==================== Lưu / Xóa ====================

  onTransCodeChange(value: string | null): void {
    this.form.transCode = value ?? '';
    this.form.transResource = '';
    this.loadTransResourceOptions(value);
  }

  onPostFamilyChange(value: string | null): void {
    this.form.postFamily = value ?? '';
    this.form.postGradeNo = '';
    this.loadPostGradeOptions(value);
  }

  onDeptnoChange(value: string | null): void {
    this.form.deptno = value ?? '';
    this.form.costCenter = value ?? '';
  }

  saveDecision(): void {
    if (!this.form.transCode || !this.form.startDatePicker) {
      this.message.warning(this.t('vsp.js.required', 'Vui lòng nhập đầy đủ thông tin bắt buộc'));
      return;
    }
    if (!this.form.personId) {
      this.message.warning(this.t('vsp.js.selectFirst', 'Vui lòng tìm kiếm nhân viên trước'));
      return;
    }
    const f = this.form;
    const dto: Partial<StartPointDecision> = {
      seq: f.seq ?? undefined,
      personId: f.personId,
      transCode: f.transCode,
      startDate: this.toDateStr(f.startDatePicker),
      deptno: f.deptno,
      empTypeCode: f.empTypeCode,
      postFamily: f.postFamily,
      postGradeNo: f.postGradeNo,
      positionNo: f.positionNo,
      costCenter: f.costCenter,
      position: f.position,
      mainBusiness: f.mainBusiness,
      transResource: f.transResource,
      remark: f.remark,
    };
    this.saving.set(true);
    this.api.saveDecision(dto).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          if (!f.seq && res.seq) {
            this.form.seq = res.seq;
            this.selectedSeq.set(res.seq);
            this.isNewMode.set(false);
          }
          this.message.success(res.message || this.t('common.success', 'Thành công'));
          this.loadDecisionList();
        } else {
          this.message.error(res.message || this.t('common.error', 'Lỗi'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.t('common.error', 'Lỗi'));
      },
    });
  }

  deleteSelected(): void {
    const seqs = Array.from(this.checkedSeqs());
    if (!seqs.length) {
      this.message.warning(this.t('vsp.js.selectRow', 'Vui lòng chọn ít nhất một quyết định'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('common.delete', 'Xóa'),
      nzContent: this.t('vsp.js.confirmDelete', 'Xác nhận xóa quyết định đã chọn?'),
      nzOnOk: () => {
        let remaining = seqs.length;
        seqs.forEach((seq) => {
          this.api.deleteDecision(seq).subscribe({
            next: () => {
              remaining -= 1;
              if (remaining === 0) {
                if (this.selectedSeq() && seqs.includes(this.selectedSeq()!)) {
                  this.selectedSeq.set(null);
                  this.isNewMode.set(false);
                  this.form = emptyForm(this.currentPersonId ?? '');
                }
                this.checkedSeqs.set(new Set());
                this.loadDecisionList();
              }
            },
            error: () => {
              remaining -= 1;
              if (remaining === 0) this.loadDecisionList();
            },
          });
        });
      },
    });
  }

  exportExcel(): void {
    if (!this.currentPersonId) {
      this.message.warning(this.t('vsp.js.selectFirst', 'Vui lòng tìm kiếm nhân viên trước'));
      return;
    }
    window.location.href = this.api.exportUrl(this.currentPersonId, this.currentLocalName ?? '');
  }

  // ==================== Danh mục (code list) + cây phòng ban ====================

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
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
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

  private loadStaticCodeOptions(): void {
    this.api.getCodeList('14013956').subscribe((list) => this.transCodeOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('14014036').subscribe((list) => this.positionNoOptions.set(list ?? []));
    this.api.getCodeList('14014049').subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList('400098').subscribe((list) => this.mainBusinessOptions.set(list ?? []));
  }

  private loadPostGradeOptions(postFamily: string | null | undefined): void {
    this.api.getCodeList(postFamily || '400001').subscribe((list) => this.postGradeOptions.set(list ?? []));
  }

  private loadTransResourceOptions(transCode: string | null | undefined): void {
    if (!transCode) {
      this.transResourceOptions.set([]);
      return;
    }
    this.api.getCodeList(transCode).subscribe((list) => this.transResourceOptions.set(list ?? []));
  }

  // ==================== Helpers ngày tháng + hiển thị ====================

  private toDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr) return null;
    const [d, m, y] = dateStr.split('/');
    if (d && m && y) {
      const parsed = new Date(Number(y), Number(m) - 1, Number(d));
      return isNaN(parsed.getTime()) ? null : parsed;
    }
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? null : parsed;
  }

  private toDateStr(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }
}
