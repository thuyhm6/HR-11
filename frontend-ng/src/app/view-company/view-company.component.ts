import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CompanySavePayload, HrCompanyDto } from './view-company.model';
import { ViewCompanyService } from './view-company.service';

/** Các key message.properties dùng trong trang này - riêng cho trang này dùng namespace
 *  sys.basic.viewCompany.* (tạo mới, xem CLAUDE.md); các nhãn liên hệ công ty (địa chỉ, điện thoại,
 *  fax, website, giới thiệu, lịch sử, khu vực) dùng lại đúng key sys.basicMaint.title.company* đã có
 *  sẵn, và nhãn tên đa ngôn ngữ/thứ tự/hoạt động dùng lại key sys.basic.viewMenuList.* thay vì tạo
 *  trùng. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'sys.basic.viewCompany.title', 'sys.basic.viewCompany.search.placeholder',
  'sys.basic.viewCompany.modal.addTitle', 'sys.basic.viewCompany.modal.editTitle',
  'sys.basic.viewCompany.label.cpnyId', 'sys.basic.viewCompany.label.operationId',
  'sys.basic.viewCompany.label.cpnyPostalcode', 'sys.basic.viewCompany.label.ggsYn',
  'sys.basic.viewCompany.msg.confirmDelete', 'sys.basic.viewCompany.col.cpnyId',
  'sys.basicMaint.title.companyAddress', 'sys.basicMaint.title.companyArea',
  'sys.basicMaint.title.companyTelPhoneNo', 'sys.basicMaint.title.companyFaxNo',
  'sys.basicMaint.title.companyNetAddress', 'sys.basicMaint.title.companyIntroduction',
  'sys.basicMaint.title.companyHistory',
  'sys.basic.viewMenuList.label.nameVi', 'sys.basic.viewMenuList.label.nameEn',
  'sys.basic.viewMenuList.label.nameZh', 'sys.basic.viewMenuList.label.nameKo',
  'sys.basic.viewMenuList.label.orderNo', 'sys.basic.viewMenuList.label.activity',
  'sys.basic.viewMenuList.col.nameVi', 'sys.basic.viewMenuList.col.nameEn',
  'common.stt', 'common.action', 'common.addNew', 'common.exportExcel', 'common.save', 'common.close',
  'common.edit', 'common.delete', 'common.confirm', 'common.cancel', 'common.noData', 'common.totalRows',
  'common.loadFail', 'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.search', 'common.clearFilter', 'common.keyword',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

interface CompanyForm {
  cpnyId: string;
  cpnyNo: string | null;
  operationId: string;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  cpnyAddr: string;
  cpnyPostalcode: string;
  cpnyLocation: string;
  cpnyTelNo: string;
  cpnyFaxNo: string;
  cpnyWebAddr: string;
  cpnyIntro: string;
  cpnyHistory: string;
  orderNo: number;
  ggsYn: boolean;
  activity: boolean;
}

const EMPTY_FORM: CompanyForm = {
  cpnyId: '', cpnyNo: null, operationId: '', nameVi: '', nameEn: '', nameZh: '', nameKo: '',
  cpnyAddr: '', cpnyPostalcode: '', cpnyLocation: '', cpnyTelNo: '', cpnyFaxNo: '', cpnyWebAddr: '',
  cpnyIntro: '', cpnyHistory: '', orderNo: 0, ggsYn: false, activity: true,
};

/**
 * Bản Angular của sys/basicMaintenance/viewCompany.html (Thymeleaf + jQuery DataTables) - quản lý
 * danh mục công ty (HR_COMPANY + tên đa ngôn ngữ SY_GLOBAL_NAME). Gọi lại nguyên API JSON đã có sẵn
 * ở HrCompanyController (xem ViewCompanyService) - không đổi backend, chỉ thay DataTables bằng
 * nz-table (tham khảo cấu trúc ViewCodeManageComponent - cùng kiểu trang CRUD danh mục có modal
 * thêm/sửa và modal xác nhận xóa). Khác ViewCodeManageComponent ở chỗ không có cây cha/con (danh
 * sách công ty phẳng) và mã cpnyId cho phép nhập tay khi thêm mới (readonly khi sửa), đúng hành vi
 * bản gốc. Endpoint export cũ (GET /sys/api/company/export) thực chất xuất file .csv nên không dùng
 * lại - xuất excel làm client-side bằng thư viện xlsx (SheetJS) để đúng định dạng .xlsx thật (xem
 * CLAUDE.md), giống ViewCodeManageComponent.
 */
@Component({
  selector: 'app-view-company',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-company.component.html',
  styleUrl: './view-company.component.css',
})
export class ViewCompanyComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  keyword = '';
  readonly rows = signal<HrCompanyDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('sys.basic.viewCompany.modal.addTitle', 'Thêm mới Công ty')
      : this.i18n.t('sys.basic.viewCompany.modal.editTitle', 'Cập nhật Công ty'),
  );
  form: CompanyForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrCompanyDto | null = null;

  constructor(
    private readonly api: ViewCompanyService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadTable();
  }

  search(): void {
    this.loadTable();
  }

  clearSearch(): void {
    this.keyword = '';
    this.loadTable();
  }

  private loadTable(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.keyword).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: HrCompanyDto): void {
    this.isNew.set(false);
    this.form = {
      cpnyId: row.cpnyId,
      cpnyNo: row.cpnyNo,
      operationId: row.operationId || '',
      nameVi: row.nameVi || '',
      nameEn: row.nameEn || '',
      nameZh: row.nameZh || '',
      nameKo: row.nameKo || '',
      cpnyAddr: row.cpnyAddr || '',
      cpnyPostalcode: row.cpnyPostalcode || '',
      cpnyLocation: row.cpnyLocation || '',
      cpnyTelNo: row.cpnyTelNo || '',
      cpnyFaxNo: row.cpnyFaxNo || '',
      cpnyWebAddr: row.cpnyWebAddr || '',
      cpnyIntro: row.cpnyIntro || '',
      cpnyHistory: row.cpnyHistory || '',
      orderNo: row.orderNo ?? 0,
      ggsYn: row.ggsYn === 'Y',
      activity: row.activity !== '0',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.cpnyId || !this.form.nameVi) {
      this.message.warning(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      return;
    }
    const payload: CompanySavePayload = {
      cpnyId: this.form.cpnyId,
      cpnyNo: this.form.cpnyNo,
      operationId: this.form.operationId || null,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
      cpnyAddr: this.form.cpnyAddr || null,
      cpnyPostalcode: this.form.cpnyPostalcode || null,
      cpnyLocation: this.form.cpnyLocation || null,
      cpnyTelNo: this.form.cpnyTelNo || null,
      cpnyFaxNo: this.form.cpnyFaxNo || null,
      cpnyWebAddr: this.form.cpnyWebAddr || null,
      cpnyIntro: this.form.cpnyIntro || null,
      cpnyHistory: this.form.cpnyHistory || null,
      orderNo: this.form.orderNo,
      ggsYn: this.form.ggsYn ? 'Y' : 'N',
      activity: this.form.activity ? '1' : '0',
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
          this.loadTable();
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

  // ==================== Xóa ====================

  openDeleteConfirm(row: HrCompanyDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.cpnyId} - ${this.deleteTarget.nameVi ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.cpnyNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.cpnyNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
          this.loadTable();
        } else {
          this.message.error(res.message || this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (endpoint /sys/api/company/export cũ thực chất trả .csv nên không dùng lại -
   *  xem giải thích ở đầu file) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('sys.basic.viewCompany.col.cpnyId', 'Mã ID'),
      this.i18n.t('sys.basic.viewMenuList.col.nameVi', 'Tên TV'),
      this.i18n.t('sys.basic.viewMenuList.col.nameEn', 'Tên TA'),
      this.i18n.t('sys.basicMaint.title.companyAddress', 'Địa chỉ'),
      this.i18n.t('sys.basicMaint.title.companyTelPhoneNo', 'Điện thoại công ty'),
      this.i18n.t('sys.basicMaint.title.companyNetAddress', 'Website'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.cpnyId, r.nameVi, r.nameEn, r.cpnyAddr, r.cpnyTelNo, r.cpnyWebAddr,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'company_list.xlsx');
  }
}
