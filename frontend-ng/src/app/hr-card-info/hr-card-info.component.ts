import { CommonModule, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, HrCardDetailDto, HrCardListRowDto } from './hr-card-info.model';
import { HrCardInfoService } from './hr-card-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essDept.keyword', 'vdp.search.empKeyword.placeholder', 'essDept.dept', 'vdp.search.dept.placeholder',
  'essDept.fromDate', 'essDept.toDate', 'common.empGroup', 'common.empType', 'common.status',
  'essDept.search', 'essDept.clearFilter', 'common.selectAll',
  'common.stt', 'common.empId', 'common.empName', 'common.deptName', 'common.dateJoined',
  'hcv.action.printCard', 'hcv.modal.previewTitle', 'hcv.msg.selectAtLeastOne', 'hcv.msg.loadCardFailed',
  'common.close', 'common.print',
  'hcv.card.department', 'hcv.card.contractStart', 'hcv.card.regPlace', 'hcv.card.rank', 'hcv.card.contractEnd',
  'hcv.card.political', 'hcv.card.mainBusiness', 'hcv.card.finalEdu', 'hcv.card.birthday', 'hcv.card.costCenter',
  'hcv.card.gradSchool', 'hcv.card.gender', 'hcv.card.stateService', 'hcv.card.major', 'hcv.card.homePhone',
  'hcv.card.divisionEntry', 'hcv.card.gradDate', 'hcv.card.tel', 'hcv.card.dateEntry', 'hcv.card.national',
  'hcv.card.married', 'hcv.card.personEmail', 'hcv.card.cEmail', 'hcv.card.marryDate', 'hcv.card.presentAdd',
  'hcv.card.eagleMId',
  'hcv.section.education', 'hcv.section.family', 'hcv.section.experience', 'hcv.section.mainBusiness',
  'hcv.section.qualification', 'hcv.section.training', 'hcv.section.evaluation', 'hcv.section.order',
  'hcv.col.admissions', 'hcv.col.graduation', 'hcv.col.education', 'hcv.col.institutionName', 'hcv.col.relation',
  'hcv.col.name', 'hcv.col.startDate', 'hcv.col.endDate', 'hcv.col.companyName', 'hcv.col.remarks',
  'hcv.col.qualification', 'hcv.col.grade', 'hcv.col.issuing', 'hcv.col.evidence', 'hcv.col.effective',
  'hcv.col.trainingCourse', 'hcv.col.fraction', 'hcv.col.ability', 'hcv.col.orderDate', 'hcv.col.orderDistinguish',
  'essDept.year', 'common.position', 'mep.msg.loadDeptFailed', 'common.loadFail', 'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];

const DEFAULT_EMP_OFFICE = '15119';

/**
 * Bản Angular của hrm/empinfo/viewHTSVCardInfoList.html (Thymeleaf + DataTables) - Thẻ nhân sự. Gọi
 * lại nguyên API JSON đã có sẵn (xem HrCardInfoService) - không đổi backend. Dùng nz-table (phân
 * trang client-side) thay DataTables, nz-tree-select thay cây phòng ban DeptTree.js, nz-modal +
 * nz-checkbox thay modal/checkbox Bootstrap, giống cách làm ở ManageEmpPositionInfoComponent.
 *
 * Sửa lỗi field-mapping của bản gốc khi lấp dữ liệu vào thẻ: file Thymeleaf cũ tham chiếu nhiều field
 * không tồn tại trên HrEmployee/HrPersonalInfo/HrEducation/HrFamily/HrWorkExperience/HrQualification
 * (vd p.birthday, p.gender, p.married, p.national, p.personEmail, p.marryDate, p.presentAdd,
 * educations[].admissions/graduation/education/major, families[].relation/education/tel,
 * experiences[].companyName/remarks, qualifications[].grade/issuing/evidence/effective...) nên luôn
 * hiển thị rỗng. Đã đổi sang đúng tên field thật của các model (dob, sexName, maritalStatusName,
 * nationalityName, email, weddingDate, homeAddress, startDate/endDate/degreeName/subject,
 * famTypeName/famEducation/famPhone, cpnyName/remark, qualGrade/qualInstitute/qualCardNo/validityDate).
 * Các field hoàn toàn không có trong response (contract start/end, cost center, division entry, grad
 * school/date, major cấp cá nhân, tel, c.email, EagleM ID) vẫn để trống như bản gốc vì backend
 * /api/hrCard/detail không trả dữ liệu này - cần bổ sung field ở backend nếu muốn hiển thị đầy đủ.
 */
@Component({
  selector: 'app-hr-card-info',
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
    NzAlertModule,
    NzCheckboxModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './hr-card-info.component.html',
  styleUrl: './hr-card-info.component.css',
})
export class HrCardInfoComponent implements OnInit {
  @ViewChild('printArea') printAreaEl?: ElementRef<HTMLDivElement>;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrCardListRowDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  readonly checkedEmpIds = signal<Set<string>>(new Set());
  readonly cardVisible = signal(false);
  readonly cardLoading = signal(false);
  readonly cardRows = signal<HrCardDetailDto[]>([]);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  postFamily: string | null = null;
  empTypeCode: string | null = null;
  empOffice: string | null = DEFAULT_EMP_OFFICE;

  constructor(
    private readonly api: HrCardInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.checkedEmpIds.set(new Set());
    this.api
      .getList({
        keyword: this.keyword,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
        postFamily: this.postFamily ?? '',
        empTypeCode: this.empTypeCode ?? '',
        empOffice: this.empOffice ?? '',
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  clearSearch(): void {
    this.keyword = '';
    this.deptNos = [];
    this.fromDate = null;
    this.toDate = null;
    this.postFamily = null;
    this.empTypeCode = null;
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.search();
  }

  isChecked(empId: string): boolean {
    return this.checkedEmpIds().has(empId);
  }

  toggleChecked(empId: string, checked: boolean): void {
    const next = new Set(this.checkedEmpIds());
    if (checked) next.add(empId);
    else next.delete(empId);
    this.checkedEmpIds.set(next);
  }

  /** "Chọn tất cả" áp dụng cho các dòng đang hiển thị trên trang hiện tại (giống hành vi checkbox
   *  theo trang của DataTables bản gốc). */
  isAllCheckedOnPage(pageRows: readonly HrCardListRowDto[]): boolean {
    return pageRows.length > 0 && pageRows.every((r) => this.isChecked(r.empId));
  }

  toggleAllOnPage(pageRows: readonly HrCardListRowDto[], checked: boolean): void {
    const next = new Set(this.checkedEmpIds());
    pageRows.forEach((r) => (checked ? next.add(r.empId) : next.delete(r.empId)));
    this.checkedEmpIds.set(next);
  }

  openCardForEmp(empId: string): void {
    this.openCardModal([empId]);
  }

  printCard(): void {
    const empIds = Array.from(this.checkedEmpIds());
    if (empIds.length === 0) {
      this.message.warning(this.i18n.t('hcv.msg.selectAtLeastOne', 'Vui lòng chọn ít nhất một nhân viên để in thẻ.'));
      return;
    }
    this.openCardModal(empIds);
  }

  closeCardModal(): void {
    this.cardVisible.set(false);
  }

  /** In - lấy nguyên HTML đã render của vùng xem trước (giống bản gốc lấy innerHTML #hcv_printArea)
   *  rồi ghi vào iframe ẩn để gọi window.print(), giữ nguyên layout ngắt trang theo từng thẻ. */
  executePrint(): void {
    const html = this.printAreaEl?.nativeElement.innerHTML;
    if (!html) return;
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;width:0;height:0;border:none;visibility:hidden;';
    document.body.appendChild(iframe);
    const doc = iframe.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${HCV_PRINT_CSS}</style></head><body>${html}</body></html>`);
    doc.close();
    iframe.contentWindow!.onafterprint = () => document.body.removeChild(iframe);
    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }, 600);
  }

  /** ISO date/datetime ("yyyy-MM-dd..." từ LocalDate/LocalDateTime khi Jackson serialize) -> dd/MM/yyyy. */
  fmtDate(iso: string | null | undefined): string {
    if (!iso || iso.length < 10) return '';
    const [y, m, d] = iso.substring(0, 10).split('-');
    return `${d}/${m}/${y}`;
  }

  private openCardModal(empIds: string[]): void {
    this.cardRows.set([]);
    this.cardLoading.set(true);
    this.cardVisible.set(true);
    forkJoin(empIds.map((id) => this.api.getCardDetail(id))).subscribe({
      next: (results) => {
        this.cardRows.set(results);
        this.cardLoading.set(false);
      },
      error: () => {
        this.cardLoading.set(false);
        this.cardVisible.set(false);
        this.message.error(this.i18n.t('hcv.msg.loadCardFailed', 'Lỗi tải dữ liệu thẻ nhân sự'));
      },
    });
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban
   *  con (xem giải thích chi tiết ở ManageEmpPositionInfoComponent.expandDeptSelection). */
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

  private loadCodeOptions(): void {
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('15118').subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
}

/** Giữ nguyên CSS in ấn từ bản gốc (HCV_PRINT_CSS trong viewHTSVCardInfoList.html). */
const HCV_PRINT_CSS = [
  '* { box-sizing: border-box; margin: 0; padding: 0; }',
  'body { font-family: Arial, sans-serif; font-size: 11px; color: #333; background: #fff; }',
  '.hrcard-container { width: 100%; padding: 10px; page-break-after: always; break-after: page; }',
  '.hrcard-container:last-child { page-break-after: auto; break-after: auto; }',
  '.hrcard-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed #ccc; padding-bottom: 10px; margin-bottom: 10px; }',
  '.hrcard-title { font-size: 18px; font-weight: bold; text-align: center; flex-grow: 1; }',
  '.hrcard-table { width: 100%; border-collapse: collapse; font-size: 10px; margin-bottom: 10px; }',
  '.hrcard-table th, .hrcard-table td { border: 1px solid #000; padding: 3px 4px; text-align: center; vertical-align: middle; word-break: break-word; }',
  '.hrcard-table th { background: #f0f0f0; font-weight: bold; }',
  '.hrcard-photo-cell { width: 100px; text-align: center; vertical-align: middle; border: 1px solid #000; }',
  '.hrcard-photo { width: 80px; height: 100px; margin: 5px auto; background: #0066cc; display: flex; align-items: center; justify-content: center; }',
  '.hrcard-emp-name { font-weight: bold; font-size: 11px; margin-top: 4px; text-align: center; }',
  '.hrcard-emp-id { font-size: 10px; margin-bottom: 4px; text-align: center; }',
  '.hrcard-label { text-align: left; padding-left: 6px; font-weight: bold; }',
  '.hrcard-value { text-align: left; padding-left: 4px; }',
  '.hrcard-info-section { margin-bottom: 10px; }',
  '.hrcard-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }',
  '.hrcard-grid-2 > div { min-width: 0; overflow: hidden; }',
  '.hrcard-section-title { font-weight: bold; font-size: 11px; margin-bottom: 4px; }',
  '@page { size: A4 portrait; margin: 8mm; }',
].join('\n');
