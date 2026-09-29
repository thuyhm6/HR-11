import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CodeItem } from '../manage-emp-position-info/manage-emp-position-info.model';
import { EmployeeOption } from '../view-affirm-special-list/view-affirm-special-list.model';
import { ViewAffirmSpecialListService } from '../view-affirm-special-list/view-affirm-special-list.service';
import { AffirmLineItem } from './view-affirm-search-list.model';
import { ViewAffirmSearchListService } from './view-affirm-search-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.empId', 'common.empName', 'common.deptName', 'common.search', 'common.clearFilter', 'common.noData',
  'common.loadFail', 'common.selectAll', 'common.placeholder.select',
  'sys.viewAffirmSearchList.XINXISHENQINGLEIXING.b', 'sys.viewAffirmSearchList.SHENQINGCHANGDU.b',
  'sys.viewAffirmSearchList.JUECAIZHEDENGJI.b', 'sys.affirm.title.applyType', 'sys.affirm.title.duty',
  'vasl.placeholder.searchEmp', 'vasr.msg.chooseEmp', 'vasr.msg.chooseApplyTypeNo', 'vasr.hint.search',
];

/** Giá trị mặc định khi không chọn loại đơn - giống InfoApplySerImpl.getAffirmorListByString bản gốc. */
const DEFAULT_APPLY_TYPE_CODE = '18135';
const DEFAULT_APPLY_LENGTH = '0';

/**
 * Bản Angular của /sys/arAffirm/viewAffirmSearchList (JSP + DWZ, dự án Hanwha_HTSV) - Tra cứu line phê duyệt: với
 * 1 nhân viên + loại thông tin đăng ký (+ loại đơn, độ dài đơn), hiển thị tuyến người duyệt theo cấp mà hệ thống sẽ
 * sinh ra khi nhân viên đó nộp đơn. Không có backend riêng - xem ViewAffirmSearchListService.
 */
@Component({
  selector: 'app-view-affirm-search-list',
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
    NzAutocompleteModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-affirm-search-list.component.html',
})
export class ViewAffirmSearchListComponent implements OnInit, OnDestroy {
  readonly rows = signal<AffirmLineItem[]>([]);
  readonly loading = signal(false);
  readonly searched = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly applyTypeNoOptions = signal<CodeItem[]>([]);
  readonly applyTypeCodeOptions = signal<CodeItem[]>([]);
  readonly empOptions = signal<EmployeeOption[]>([]);
  readonly selectedEmp = signal<EmployeeOption | null>(null);

  empKeyword = '';
  applyTypeNo: string | null = null;
  applyTypeCode: string | null = null;
  applyLength: number | null = null;

  private empTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private readonly api: ViewAffirmSearchListService,
    private readonly empApi: ViewAffirmSpecialListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getApplyTypeNoList().subscribe({
      next: (list) => this.applyTypeNoOptions.set(list ?? []),
      error: () => this.applyTypeNoOptions.set([]),
    });
  }

  ngOnDestroy(): void {
    if (this.empTimer) clearTimeout(this.empTimer);
  }

  // ==================== Chọn nhân viên ====================

  onEmpKeywordChange(value: string): void {
    this.empKeyword = value;
    this.selectedEmp.set(null);
    if (this.empTimer) clearTimeout(this.empTimer);
    const keyword = (value ?? '').trim();
    if (!keyword) {
      this.empOptions.set([]);
      return;
    }
    this.empTimer = setTimeout(() => {
      this.empApi.searchEmployees(keyword).subscribe({
        next: (list) => this.empOptions.set(list ?? []),
        error: () => this.empOptions.set([]),
      });
    }, 300);
  }

  selectEmp(opt: EmployeeOption): void {
    this.selectedEmp.set(opt);
    this.empOptions.set([]);
    // nz-autocomplete ghi nzValue vào ô nhập sau sự kiện chọn - đặt lại nhãn đầy đủ ở tick kế tiếp
    setTimeout(() => (this.empKeyword = `${opt.empId} - ${opt.localName}`));
  }

  // ==================== Loại thông tin -> loại đơn ====================

  onApplyTypeNoChange(value: string | null): void {
    this.applyTypeNo = value;
    this.applyTypeCode = null;
    this.applyTypeCodeOptions.set([]);
    if (!value) return;
    this.api.getCodeList(value).subscribe({
      next: (list) => this.applyTypeCodeOptions.set(list ?? []),
      error: () => this.applyTypeCodeOptions.set([]),
    });
  }

  // ==================== Tra cứu ====================

  search(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const emp = this.selectedEmp();
    if (!emp) {
      this.message.warning(t('vasr.msg.chooseEmp', 'Vui lòng chọn nhân viên!'));
      return;
    }
    if (!this.applyTypeNo) {
      this.message.warning(t('vasr.msg.chooseApplyTypeNo', 'Vui lòng chọn loại thông tin!'));
      return;
    }
    // Không chọn loại đơn -> dùng loại mặc định và độ dài 0 như bản gốc
    const hasTypeCode = !!this.applyTypeCode;
    const query = {
      applyTypeNo: this.applyTypeNo,
      personId: emp.personId,
      applyTypeCode: hasTypeCode ? this.applyTypeCode! : DEFAULT_APPLY_TYPE_CODE,
      applyLength: hasTypeCode && this.applyLength !== null ? String(this.applyLength) : DEFAULT_APPLY_LENGTH,
    };

    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getAffirmLine(query).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.searched.set(true);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.searched.set(true);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.empKeyword = '';
    this.selectedEmp.set(null);
    this.empOptions.set([]);
    this.applyTypeNo = null;
    this.applyTypeCode = null;
    this.applyTypeCodeOptions.set([]);
    this.applyLength = null;
    this.rows.set([]);
    this.searched.set(false);
    this.errorMessage.set(null);
  }

  positionLabel(item: AffirmLineItem): string {
    return item.positionName || item.postionName || item.positionNo || '';
  }
}
