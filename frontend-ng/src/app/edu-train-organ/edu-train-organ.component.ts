import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { EduFile } from '../edu-common/edu-common.model';
import { EduCommonService } from '../edu-common/edu-common.service';
import { EduFileAttachComponent } from '../edu-common/edu-file-attach.component';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EduTrainOrgan } from './edu-train-organ.model';
import { EduTrainOrganService } from './edu-train-organ.service';

/** Key message.properties dùng trong trang - hầu hết dùng lại key sẵn có của bản JSP gốc (edu.trainOrgan.*). */
const I18N_KEYS = [
  'edu.trainOrgan.PEIXUNJIGOUMINGCHENG.a', 'edu.trainOrgan.LIANXIREN.a', 'edu.trainOrgan.ZHUYINGLINGYU.a',
  'edu.trainOrgan.HEZUOXIEYI.a', 'edu.trainOrgan.HEZUOQINGKUANGJIPINGJIA.a', 'edu.trainOrgan.JIGOUJIANJIE.a',
  'edu.trainOrgan.addTitle', 'edu.trainOrgan.editTitle', 'edu.trainOrgan.detailTitle', 'edu.trainOrgan.msg.required',
  'hr.viewRelation.title.FAM_ADDRESS', 'hr.viewHire.title.OFFICE_PHONE', 'hrm.empinfo.MOBILE_TELEPHONE',
  'pa.ins.alert.message.exportdata.netAddress', 'hrm.empinfo.upload',
  'edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'edu.systemManager.QUEDINGSHIFOUSHANCHU.a',
  'common.search', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close', 'common.confirm',
  'common.cancel', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.quickFilter',
  'alert.message.add_fail', 'alert.message.update_fail', 'alert.message.delete_fail', 'alert.message.delete_success',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];

const EMPTY_FORM: EduTrainOrgan = {
  organNo: null, organName: '', linkman: '', address: '', officePhone: '', cellphone: '', urlNet: '',
  mainField: '', workTogether: '', organAbstract: '',
};

type ModalMode = 'add' | 'edit' | 'view';

/**
 * Bản Angular của /edu/traineducation/trainOrgan (JSP + DWZ, dự án Hanwha_HTSV) - quản lý đơn vị đào tạo
 * (EDU_TRAIN_ORGAN) + file hợp đồng hợp tác (ESS_FILE, APPLY_TYPE = eduTrainOrgan). Giữ hành vi gốc:
 * - Tìm theo tên đơn vị / địa chỉ; click chọn 1 dòng rồi Sửa/Xóa (double-click = Sửa).
 * - Click tên đơn vị mở modal xem chi tiết (bản gốc singleTrainOrganInfo).
 * - Bảng phân trang + lọc nhanh + sắp xếp phía client (thay jQuery DataTables). Modal đóng khi bấm ra ngoài.
 */
@Component({
  selector: 'app-edu-train-organ',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NzTableModule, NzCardModule, NzInputModule, NzButtonModule, NzModalModule, NzAlertModule,
    TranslatePipe, EduFileAttachComponent,
  ],
  templateUrl: './edu-train-organ.component.html',
  styleUrl: './edu-train-organ.component.css',
})
export class EduTrainOrganComponent implements OnInit {
  @ViewChild('etoFiles') private fileAttach?: EduFileAttachComponent;

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly rows = signal<EduTrainOrgan[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly selected = signal<EduTrainOrgan | null>(null);

  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) =>
      [r.organName, r.linkman, r.address, r.officePhone, r.cellphone, r.urlNet, r.mainField]
        .some((v) => (v ?? '').toLowerCase().includes(kw)),
    );
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  searchOrganName = '';
  searchAddress = '';

  readonly modalVisible = signal(false);
  readonly modalMode = signal<ModalMode>('add');
  readonly saving = signal(false);
  readonly modalTitle = computed(() => {
    switch (this.modalMode()) {
      case 'add': return this.i18n.t('edu.trainOrgan.addTitle', 'Thêm mới đơn vị đào tạo');
      case 'edit': return this.i18n.t('edu.trainOrgan.editTitle', 'Sửa đơn vị đào tạo');
      default: return this.i18n.t('edu.trainOrgan.detailTitle', 'Chi tiết đơn vị đào tạo');
    }
  });
  form: EduTrainOrgan = { ...EMPTY_FORM };
  formFiles: EduFile[] = [];

  readonly sortName = (a: EduTrainOrgan, b: EduTrainOrgan) => compareText(a.organName, b.organName);
  readonly sortLinkman = (a: EduTrainOrgan, b: EduTrainOrgan) => compareText(a.linkman, b.linkman);
  readonly sortAddress = (a: EduTrainOrgan, b: EduTrainOrgan) => compareText(a.address, b.address);
  readonly sortField = (a: EduTrainOrgan, b: EduTrainOrgan) => compareText(a.mainField, b.mainField);

  constructor(
    private readonly api: EduTrainOrganService,
    private readonly commonApi: EduCommonService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  // ==================== Tìm kiếm ====================

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getList(this.searchOrganName.trim(), this.searchAddress.trim()).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.pageIndex = 1;
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  onQuickFilterChange(value: string): void {
    this.quickFilter.set(value);
    this.pageIndex = 1;
  }

  selectRow(row: EduTrainOrgan): void {
    this.selected.set(row);
  }

  isSelected(row: EduTrainOrgan): boolean {
    return this.selected()?.organNo === row.organNo;
  }

  downloadUrl(f: EduFile): string {
    return this.commonApi.downloadUrl(f.fileNo);
  }

  // ==================== Modal Thêm / Sửa / Xem ====================

  get readonly(): boolean {
    return this.modalMode() === 'view';
  }

  openAddModal(): void {
    this.modalMode.set('add');
    this.form = { ...EMPTY_FORM };
    this.formFiles = [];
    this.modalVisible.set(true);
  }

  openEditModal(row?: EduTrainOrgan): void {
    this.openDetail(row ?? this.selected(), 'edit');
  }

  openViewModal(row: EduTrainOrgan): void {
    this.openDetail(row, 'view');
  }

  private openDetail(row: EduTrainOrgan | null, mode: ModalMode): void {
    if (!row?.organNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.selected.set(row);
    this.api.getOne(row.organNo).subscribe({
      next: (dto) => {
        this.modalMode.set(mode);
        this.form = { ...EMPTY_FORM, ...dto };
        this.formFiles = dto.files ?? [];
        this.modalVisible.set(true);
      },
      error: (err) => this.message.error(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (this.readonly) {
      this.closeModal();
      return;
    }
    if (!this.form.organName?.trim()) {
      this.message.warning(this.i18n.t('edu.trainOrgan.msg.required', 'Vui lòng nhập tên đơn vị đào tạo!'));
      return;
    }
    const isNew = this.modalMode() === 'add';
    const failText = this.i18n.t(isNew ? 'alert.message.add_fail' : 'alert.message.update_fail', isNew ? 'Lưu thất bại!' : 'Sửa thất bại!');
    const payload: EduTrainOrgan = { ...this.form, organName: this.form.organName.trim() };
    delete payload.files;
    this.saving.set(true);
    let okMessage = '';
    this.api.save(payload).pipe(
      switchMap((res) => {
        if (!res.success || !res.id) return throwError(() => ({ error: res }));
        okMessage = res.message;
        return this.fileAttach ? this.fileAttach.commit(res.id) : of(res);
      }),
    ).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(okMessage);
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.message || failText);
        // Bản ghi đã lưu nhưng file lỗi -> vẫn tải lại danh sách để thấy dữ liệu mới
        if (okMessage) this.search();
      },
    });
  }

  // ==================== Xóa ====================

  confirmDelete(): void {
    const row = this.selected();
    if (!row?.organNo) {
      this.message.warning(this.i18n.t('edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a', 'Xin chọn 1 hạng mục!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: `${this.i18n.t('edu.systemManager.QUEDINGSHIFOUSHANCHU.a', 'Đồng ý xóa không?')} ${row.organName}`,
      nzOkText: this.i18n.t('common.delete', 'Xóa'),
      nzCancelText: this.i18n.t('common.cancel', 'Hủy'),
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(row.organNo!),
    });
  }

  private doDelete(organNo: string): void {
    const failText = this.i18n.t('alert.message.delete_fail', 'Xóa thất bại!');
    this.api.delete(organNo).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(res.message || this.i18n.t('alert.message.delete_success', 'Xóa thành công!'));
          this.search();
        } else {
          this.message.error(res.message || failText);
        }
      },
      error: (err) => this.message.error(err?.error?.message || failText),
    });
  }
}

function compareText(a: string | null, b: string | null): number {
  return (a ?? '').localeCompare(b ?? '');
}
