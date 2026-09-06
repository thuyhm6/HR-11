import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { EvsResultDto, EvsResultSavePayload, EvsResumeOption } from './evs-result.model';
import { EvsResultService } from './evs-result.service';

/** parentCodeNo dùng trong trang - đúng giá trị hardcode ở bản Thymeleaf gốc. */
const GRADE_PARENT_CODE = '14015161'; // Cấp đánh giá (A-E, hiển thị theo description)
const STATUS_PARENT_CODE = '14015351'; // Trạng thái (dùng chung cho lọc VÀ combo "Thay đổi trạng thái")
const EMP_OFFICE_PARENT_CODE = '15118'; // Trạng thái làm việc (combo phụ trong popup tìm nhân viên)

/** FINAL_GRADE lưu ở BE dạng chữ cái gốc (A-E, khớp value combo 14015161); hiển thị badge dùng dạng rút
 *  gọn (EX/VG/GD/NI/UN) - đúng bảng DECODE trong EvsResultMapper.xml (selectList). */
const GRADE_LETTER_TO_SHORT: Record<string, string> = { A: 'EX', B: 'VG', C: 'GD', D: 'NI', E: 'UN' };
const GRADES = ['EX', 'VG', 'GD', 'NI', 'UN'] as const;
type GradeCode = (typeof GRADES)[number];

interface EvsResultRow extends EvsResultDto {
  /** State FE-only: chữ cái gốc (A-E) đang chọn trong combo sửa - khởi tạo từ finalGradeOr. */
  finalGradeLetter: string | null;
}

interface GradeStat {
  total: number;
  EX: number;
  VG: number;
  GD: number;
  NI: number;
  UN: number;
}

const EMPTY_STAT: GradeStat = { total: 0, EX: 0, VG: 0, GD: 0, NI: 0, UN: 0 };

/** Các key message.properties dùng trong trang này - phần lớn key evs.result.* đã có sẵn (dùng chung
 *  với bản Thymeleaf cũ); các message xử lý (confirm/success/error) ở bản gốc lại hardcode thẳng chuỗi
 *  trong JS thay vì dùng #{...} như các trang evs-* khác đã migrate trước đó, nên đã bổ sung thêm nhóm
 *  key evs.result.msg.* (xem messages_vi_VN.properties/messages.properties) - không hardcode text hiển
 *  thị trong component theo đúng CLAUDE.md mục 3. */
const I18N_KEYS = [
  'evs.result.label.evaluationName', 'evs.result.label.empSearch', 'evs.result.placeholder.selectEmployee',
  'evs.result.label.dept', 'evs.result.label.status', 'evs.result.panel.standard', 'evs.result.panel.progress',
  'evs.result.panel.statusProgress', 'evs.result.col.total', 'evs.result.col.no', 'evs.result.col.name',
  'evs.result.col.empId', 'evs.result.col.dept', 'evs.result.col.position', 'evs.result.col.dateStarted',
  'evs.result.col.statusActivity', 'evs.result.col.self', 'evs.result.col.appraiser1', 'evs.result.col.appraiser2',
  'evs.result.col.statusEval', 'evs.result.col.point', 'evs.result.col.grade', 'evs.result.col.hrGrade',
  'evs.result.col.opinion', 'evs.result.col.updatedBy', 'evs.result.col.std', 'evs.result.col.hr',
  'evs.result.col.count', 'evs.result.col.rate', 'evs.result.col.prog_self', 'evs.result.col.prog_l1',
  'evs.result.col.prog_l2', 'evs.result.col.prog_done', 'evs.result.col.prog_end',
  'evs.result.btn.search', 'evs.result.btn.template', 'evs.result.btn.insertFile', 'evs.result.btn.copyGrade',
  'evs.result.btn.save', 'evs.result.btn.exportExcel', 'evs.result.btn.email', 'evs.result.btn.evaluateEnd',
  'evs.result.btn.changeStatus', 'evs.result.quickFilter', 'evs.result.placeholder.selectDept',
  'evs.result.placeholder.keyword', 'evs.result.label.total', 'evs.result.label.selectAll',
  'evs.result.msg.confirmEvaluateEnd', 'evs.result.msg.evaluateEndSuccess', 'evs.result.msg.evaluateEndError',
  'evs.result.msg.noRowSelected', 'evs.result.msg.selectStatusFirst', 'evs.result.msg.changeStatusSuccess',
  'evs.result.msg.changeStatusError', 'evs.result.msg.confirmCopyGrade', 'evs.result.msg.copyGradeSuccess',
  'evs.result.msg.copyGradeError', 'evs.result.msg.noRowSelectedToSave', 'evs.result.msg.templateDeveloping',
  'evs.result.msg.insertFileDeveloping', 'evs.result.msg.emailDeveloping',
  'evs.viewEvsAffirmorSetup.msg.selectEvalFirst',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'vdp.search.dept.placeholder',
  'mep.msg.loadDeptFailed',
  'common.select', 'common.confirm', 'common.cancel', 'common.close', 'common.save', 'common.search',
  'common.clearFilter', 'common.selectAll', 'common.stt', 'common.empId', 'common.empName', 'common.deptName',
  'common.position', 'common.noData', 'common.saveSuccess', 'common.saveFail', 'common.loadFail',
];

/**
 * Bản Angular của evs/manage/viewEvsResult.html (Thymeleaf + jQuery DataTables không phân trang) - Kết
 * quả đánh giá theo đợt (EVS_OBJECT + EVS_AFFIRM). Gọi lại nguyên API JSON đã có sẵn ở EvsManageController
 * (xem EvsResultService) - không đổi backend. Combo phòng ban/mã hệ thống và tìm kiếm nhân viên (lọc
 * theo đối tượng đánh giá) dùng chung ChangeUserService (tham khảo ViewPaInputItemDataComponent) thay vì
 * viết lại - dự án chưa có API tìm nhân viên riêng cho trang evsResult.
 *
 * Bảng không phân trang (đúng paging:false ở bản gốc - toàn bộ dữ liệu tải 1 lần, cuộn trong khung có
 * max-height) nên dùng [nzShowPagination]="false"; "chọn tất cả" áp dụng cho toàn bộ dòng đang hiển thị
 * sau lọc nhanh (không chỉ 1 trang, vì không có khái niệm trang ở bảng này).
 *
 * Sửa lỗi hiển thị so với bản gốc: cột "Cấp đánh giá (nhân sự)" (FINAL_GRADE) ở BE lưu chữ cái gốc A-E,
 * đúng bằng value của option trong combo mã hệ thống 14015161 (dùng description làm nhãn hiển thị, xem
 * EvsParamPanelComponent); bản gốc lại so khớp currentValue bằng field đã DECODE sẵn dạng rút gọn
 * (EX/VG/...) nên select sửa luôn không tự chọn đúng giá trị đã lưu (badge lúc đầu hiển thị đúng nhờ
 * trùng khớp tình cờ giữa mã ngắn và class CSS, nhưng sau khi sửa 1 lần thì mất màu vì tra theo A-E
 * không khớp danh sách gradeOptions). Ở bản Angular, current value của combo sửa lấy đúng từ
 * `finalGradeOr` (chữ cái gốc, khớp value option) - còn hiển thị badge dùng bảng DECODE cố định
 * GRADE_LETTER_TO_SHORT (y hệt DECODE trong EvsResultMapper.xml) để luôn ra đúng màu/nhãn rút gọn dù
 * trước hay sau khi sửa.
 *
 * Đơn giản hoá: bỏ kiểu "click để lộ ô sửa" (di sản từ việc muốn ô gọn khi không sửa) - ô combo Cấp đánh
 * giá và input Ý kiến luôn hiển thị trực tiếp (đúng phong cách các trang evs-* Angular khác đã làm, ô
 * NG-ZORRO đã đủ gọn). Cột "Họ tên" bỏ link click (bản gốc chỉ console.log, không có trang chi tiết thật
 * sự). Ô tìm kiếm "Nhóm đánh giá" (`ver_groupSearch`) ở bản gốc không được gắn xử lý gì trong JS (input
 * chết, không lọc được gì) nên bỏ hẳn khỏi bản Angular. Nút Bản mẫu/Chèn file/Email chỉ là placeholder
 * ở bản gốc (alert "đang được phát triển") - giữ nguyên hành vi placeholder, đổi alert() thành
 * NzMessageService.info() với text lấy từ key mới evs.result.msg.*Developing.
 *
 * "Xuất Excel" ở bản gốc trỏ tới GET .../api/evsResult/exportExcel - endpoint này KHÔNG tồn tại ở
 * backend (không có trong EvsManageController, bấm vào sẽ ra lỗi 404) nên đổi sang xuất client-side
 * bằng thư viện xlsx (SheetJS) từ dữ liệu đang hiển thị (đã lọc nhanh) - đúng quy ước xuất .xlsx của các
 * trang khác trong dự án khi backend chưa có endpoint export.
 */
@Component({
  selector: 'app-evs-result',
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
    NzTreeSelectModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './evs-result.component.html',
  styleUrl: './evs-result.component.css',
})
export class EvsResultComponent implements OnInit {
  readonly grades = GRADES;

  private evsType = '';
  readonly resumeOptions = signal<EvsResumeOption[]>([]);
  resumeSeq: string | null = null;

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  private deptChildrenMap = new Map<string, string[]>();
  deptNos: string[] = [];

  personId: string | null = null;
  empDisplay = '';

  statusFilter: string | null = null;
  readonly statusOptions = signal<CodeItem[]>([]);
  readonly gradeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  quickFilter = '';

  readonly rows = signal<EvsResultRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly ticked = signal<Set<string>>(new Set());

  readonly filteredRows = computed(() => {
    const kw = this.quickFilter.trim().toLowerCase();
    const list = this.rows();
    if (!kw) return list;
    return list.filter(
      (r) =>
        (r.localName || '').toLowerCase().includes(kw) ||
        (r.empid || '').toLowerCase().includes(kw) ||
        (r.deptname || '').toLowerCase().includes(kw) ||
        (r.postGradeName || '').toLowerCase().includes(kw) ||
        (r.localName1 || '').toLowerCase().includes(kw) ||
        (r.localName2 || '').toLowerCase().includes(kw) ||
        (r.updatedBy || '').toLowerCase().includes(kw),
    );
  });

  readonly stdPct = signal<Record<GradeCode, number>>({ EX: 0, VG: 0, GD: 0, NI: 0, UN: 0 });
  readonly hrStat = computed(() => this.buildStat(this.rows(), (r) => r.finalGrade));
  readonly l1Stat = computed(() => this.buildStat(this.rows(), (r) => r.evsGrade1));
  readonly l2Stat = computed(() => this.buildStat(this.rows(), (r) => r.evsGrade2));
  readonly stdStat = computed(() => {
    const total = this.rows().length;
    const pct = this.stdPct();
    const cnt: Record<GradeCode, number> = { EX: 0, VG: 0, GD: 0, NI: 0, UN: 0 };
    GRADES.forEach((g) => (cnt[g] = total > 0 ? Math.round((pct[g] / 100) * total) : 0));
    return { total, pct, cnt };
  });

  readonly progressStat = computed(() => {
    const list = this.rows();
    let self = 0, l1 = 0, l2 = 0, done = 0, end = 0;
    list.forEach((r) => {
      if (r.affirmFlagName0 === 'Evaluated') self++;
      const hasL1 = !!r.evsPoint1 && !!r.evsGrade1;
      const hasL2 = !!r.evsPoint2 && !!r.evsGrade2;
      if (hasL1) l1++;
      if (hasL2) l2++;
      if (hasL1 && hasL2) done++;
      if (r.finalGrade) end++;
    });
    return { total: list.length, self, l1, l2, done, end };
  });

  // ==================== Popup tìm kiếm nhân viên (lọc theo đối tượng đánh giá) ====================
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;

  readonly saving = signal(false);
  readonly endingEvaluation = signal(false);
  readonly changingStatus = signal(false);
  readonly copyingGrade = signal(false);

  constructor(
    private readonly api: EvsResultService,
    private readonly empApi: ChangeUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.empApi.getCodeList(GRADE_PARENT_CODE).subscribe((list) => this.gradeOptions.set(list ?? []));
    this.empApi.getCodeList(STATUS_PARENT_CODE).subscribe((list) => this.statusOptions.set(list ?? []));
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get('evsType') ?? '';
      this.loadResumeOptions();
    });
  }

  private loadResumeOptions(): void {
    this.api.getResumeList(this.evsType).subscribe({
      next: (rows) => {
        this.resumeOptions.set(rows ?? []);
        if (rows && rows.length) {
          this.resumeSeq = rows[0].seq;
          this.search();
        }
      },
      error: () => this.resumeOptions.set([]),
    });
  }

  private loadDeptTree(): void {
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
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

    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

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

  private buildStat(rows: EvsResultRow[], pick: (r: EvsResultRow) => string | null): GradeStat {
    const stat: GradeStat = { ...EMPTY_STAT };
    rows.forEach((r) => {
      const g = pick(r);
      if (!g || !(GRADES as readonly string[]).includes(g)) return;
      stat.total++;
      stat[g as GradeCode]++;
    });
    return stat;
  }

  pct(cnt: number, denom: number): number {
    return denom > 0 ? Math.round((cnt / denom) * 1000) / 10 : 0;
  }

  // ==================== Search ====================

  search(): void {
    if (!this.resumeSeq) return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.ticked.set(new Set());
    const resumeSeq = this.resumeSeq;
    const deptNos = this.expandDeptSelection(this.deptNos).join(',');
    this.api.getList(resumeSeq, deptNos, this.personId ?? '', this.statusFilter ?? '', this.evsType).subscribe({
      next: (rows) => {
        this.rows.set((rows ?? []).map((r) => this.toRow(r)));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
    this.api.getStdRate(resumeSeq).subscribe({
      next: (std) =>
        this.stdPct.set({
          EX: Number(std.EX_PCT) || 0,
          VG: Number(std.VG_PCT) || 0,
          GD: Number(std.GD_PCT) || 0,
          NI: Number(std.NI_PCT) || 0,
          UN: Number(std.UN_PCT) || 0,
        }),
      error: () => this.stdPct.set({ EX: 0, VG: 0, GD: 0, NI: 0, UN: 0 }),
    });
  }

  private toRow(dto: EvsResultDto): EvsResultRow {
    return { ...dto, finalGradeLetter: dto.finalGradeOr || null };
  }

  onResumeChange(): void {
    this.search();
  }

  clearEmpSearch(): void {
    this.personId = null;
    this.empDisplay = '';
    this.search();
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  openEmployeePicker(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.empApi
      .searchEmployees({
        keyword: this.pickerKeyword.trim(),
        deptCodes: this.expandDeptSelection(this.pickerDeptNos),
        empOffice: this.pickerEmpOffice ?? '',
      })
      .subscribe({
        next: (rows) => {
          this.pickerRows.set(rows ?? []);
          this.pickerLoading.set(false);
        },
        error: () => {
          this.pickerRows.set([]);
          this.pickerLoading.set(false);
        },
      });
  }

  selectEmployee(emp: EmployeeSearchDto): void {
    this.personId = emp.personId;
    this.empDisplay = `${emp.empId} - ${emp.localName}`;
    this.pickerVisible.set(false);
    this.search();
  }

  // ==================== Cấp đánh giá (nhân sự) / Ý kiến - sửa trực tiếp trong bảng ====================

  gradeLabel(letter: string | null): string {
    if (!letter) return '';
    const opt = this.gradeOptions().find((o) => o.codeNo === letter);
    return opt ? opt.description || opt.codeName : letter;
  }

  gradeShort(letter: string | null): string {
    return letter ? GRADE_LETTER_TO_SHORT[letter] || '' : '';
  }

  onFinalGradeChange(row: EvsResultRow, letter: string | null): void {
    row.finalGradeLetter = letter;
    row.finalGrade = this.gradeShort(letter);
    this.toggleTicked(row, true);
  }

  onContentChange(row: EvsResultRow): void {
    this.toggleTicked(row, true);
  }

  // ==================== Chọn nhiều dòng (checkbox) - toàn bộ dòng đang hiển thị (không phân trang) ====================

  isTicked(row: EvsResultRow): boolean {
    return this.ticked().has(row.seq);
  }

  toggleTicked(row: EvsResultRow, checked: boolean): void {
    const next = new Set(this.ticked());
    if (checked) next.add(row.seq);
    else next.delete(row.seq);
    this.ticked.set(next);
  }

  get allTicked(): boolean {
    const list = this.filteredRows();
    return list.length > 0 && list.every((r) => this.isTicked(r));
  }

  get someTicked(): boolean {
    return this.filteredRows().some((r) => this.isTicked(r)) && !this.allTicked;
  }

  toggleAllTicked(checked: boolean): void {
    const next = new Set(this.ticked());
    this.filteredRows().forEach((r) => (checked ? next.add(r.seq) : next.delete(r.seq)));
    this.ticked.set(next);
  }

  // ==================== Đánh giá kết thúc ====================

  evaluateEnd(): void {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t('evs.viewEvsAffirmorSetup.msg.selectEvalFirst', 'Vui lòng chọn tên đánh giá trước.'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: this.i18n.t('evs.result.msg.confirmEvaluateEnd', 'Bạn có chắc muốn kết thúc đánh giá cho đợt này không?'),
      nzOnOk: () => this.doEvaluateEnd(),
    });
  }

  private doEvaluateEnd(): void {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq) return;
    this.endingEvaluation.set(true);
    this.api.evaluateEnd(resumeSeq).subscribe({
      next: (res) => {
        this.endingEvaluation.set(false);
        if (res.success) {
          this.message.success(this.i18n.t('evs.result.msg.evaluateEndSuccess', 'Kết thúc đánh giá thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('evs.result.msg.evaluateEndError', 'Không thể kết thúc đánh giá. Vui lòng thử lại.'));
        }
      },
      error: () => {
        this.endingEvaluation.set(false);
        this.message.error(this.i18n.t('evs.result.msg.evaluateEndError', 'Không thể kết thúc đánh giá. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Thay đổi trạng thái ====================

  changeStatus(): void {
    if (this.ticked().size === 0) {
      this.message.warning(this.i18n.t('evs.result.msg.noRowSelected', 'Chưa chọn dòng nào.'));
      return;
    }
    if (!this.statusFilter) {
      this.message.warning(this.i18n.t('evs.result.msg.selectStatusFirst', 'Vui lòng chọn trạng thái.'));
      return;
    }
    this.changingStatus.set(true);
    this.api.changeStatus(Array.from(this.ticked()), this.statusFilter).subscribe({
      next: (res) => {
        this.changingStatus.set(false);
        if (res.success) {
          this.message.success(this.i18n.t('evs.result.msg.changeStatusSuccess', 'Thay đổi trạng thái thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('evs.result.msg.changeStatusError', 'Không thể thay đổi trạng thái. Vui lòng thử lại.'));
        }
      },
      error: () => {
        this.changingStatus.set(false);
        this.message.error(this.i18n.t('evs.result.msg.changeStatusError', 'Không thể thay đổi trạng thái. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Sao chép cấp đánh giá ====================

  copyGrade(): void {
    if (this.ticked().size === 0) {
      this.message.warning(this.i18n.t('evs.result.msg.noRowSelected', 'Chưa chọn dòng nào.'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: this.i18n.t('evs.result.msg.confirmCopyGrade', 'Sao chép cấp đánh giá cho các dòng đã chọn?'),
      nzOnOk: () => this.doCopyGrade(),
    });
  }

  private doCopyGrade(): void {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq) return;
    this.copyingGrade.set(true);
    this.api.copyGrade(resumeSeq, Array.from(this.ticked())).subscribe({
      next: (res) => {
        this.copyingGrade.set(false);
        if (res.success) {
          this.message.success(this.i18n.t('evs.result.msg.copyGradeSuccess', 'Sao chép thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('evs.result.msg.copyGradeError', 'Không thể sao chép. Vui lòng thử lại.'));
        }
      },
      error: () => {
        this.copyingGrade.set(false);
        this.message.error(this.i18n.t('evs.result.msg.copyGradeError', 'Không thể sao chép. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Lưu ====================

  saveAll(): void {
    const tickedSeqs = this.ticked();
    if (tickedSeqs.size === 0) {
      this.message.warning(this.i18n.t('evs.result.msg.noRowSelectedToSave', 'Chưa chọn dòng nào để lưu.'));
      return;
    }
    const payload: EvsResultSavePayload[] = this.rows()
      .filter((r) => tickedSeqs.has(r.seq))
      .map((r) => ({ seq: r.seq, finalGrade: r.finalGradeLetter || '', finalAffirmContent: r.finalAffirmContent || '' }));

    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.ticked.set(new Set());
          this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Chức năng đang phát triển (giữ nguyên hành vi placeholder ở bản gốc) ====================

  openTemplate(): void {
    this.message.info(this.i18n.t('evs.result.msg.templateDeveloping', 'Chức năng Bản mẫu đang được phát triển.'));
  }

  insertFile(): void {
    this.message.info(this.i18n.t('evs.result.msg.insertFileDeveloping', 'Chức năng Chèn file đang được phát triển.'));
  }

  sendEmail(): void {
    this.message.info(this.i18n.t('evs.result.msg.emailDeveloping', 'Chức năng Email đang được phát triển.'));
  }

  // ==================== Xuất Excel (client-side - BE chưa có endpoint export) ====================

  exportExcel(): void {
    const headers = [
      this.i18n.t('evs.result.col.no', 'No.'),
      this.i18n.t('evs.result.col.name', 'Họ tên'),
      this.i18n.t('evs.result.col.empId', 'Mã nhân viên'),
      this.i18n.t('evs.result.col.dept', 'Phòng ban'),
      this.i18n.t('evs.result.col.position', 'Chức vụ'),
      this.i18n.t('evs.result.col.dateStarted', 'Ngày vào làm'),
      this.i18n.t('evs.result.col.statusActivity', 'Trạng thái'),
      this.i18n.t('evs.result.col.point', 'Điểm số (bản thân)'),
      this.i18n.t('evs.result.col.grade', 'Cấp (bản thân)'),
      this.i18n.t('evs.result.col.name', 'Họ tên ĐG1'),
      this.i18n.t('evs.result.col.point', 'Điểm số ĐG1'),
      this.i18n.t('evs.result.col.grade', 'Cấp ĐG1'),
      this.i18n.t('evs.result.col.name', 'Họ tên ĐG2'),
      this.i18n.t('evs.result.col.point', 'Điểm số ĐG2'),
      this.i18n.t('evs.result.col.grade', 'Cấp ĐG2'),
      this.i18n.t('evs.result.col.hrGrade', 'Cấp đánh giá (nhân sự)'),
      this.i18n.t('evs.result.col.opinion', 'Ý kiến'),
    ];
    const dataRows = this.filteredRows().map((r, i) => [
      i + 1, r.localName, r.empid, r.deptname, r.postGradeName, r.dateStarted, r.activityName,
      r.evsPoint0, r.evsGrade0, r.localName1, r.evsPoint1, r.evsGrade1, r.localName2, r.evsPoint2, r.evsGrade2,
      this.gradeLabel(r.finalGradeLetter), r.finalAffirmContent,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'KetQuaDanhGia');
    XLSX.writeFile(workbook, 'evs_result_list.xlsx');
  }
}
