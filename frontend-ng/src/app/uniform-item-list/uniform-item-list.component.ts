import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { UniformChangeListService } from '../uniform-change-list/uniform-change-list.service';
import { UniformItem } from '../uniform-change-list/uniform-change-list.model';

const I18N_KEYS = [
  'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.cancel', 'common.refresh',
  'common.confirmDelete', 'common.yes', 'common.no', 'common.stt', 'common.name', 'common.remark', 'common.order',
  'common.status', 'common.action', 'common.active', 'common.inactive', 'common.loadFail', 'common.saveSuccess',
  'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'hrm.uniform.size', 'hrm.uniform.quantity', 'hrm.uniform.item.hint', 'hrm.uniform.item.addTitle',
  'hrm.uniform.item.editTitle', 'hrm.uniform.item.columns', 'hrm.uniform.msg.itemNameRequired',
  'hrm.uniform.msg.itemNeedColumn',
];

/**
 * Danh mục đồng phục (menu /hrm/uniform/viewUniformItemList). Mỗi item là 1 nhóm cột trên trang Đổi đồng phục
 * và trong file Excel upload (tên item phải trùng tiêu đề cột nhóm trong file).
 */
@Component({
  selector: 'app-uniform-item-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzButtonModule,
    NzModalModule,
    NzTagModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzPopconfirmModule,
    TranslatePipe,
  ],
  templateUrl: './uniform-item-list.component.html',
  styleUrl: './uniform-item-list.component.css',
})
export class UniformItemListComponent implements OnInit {
  readonly items = signal<UniformItem[]>([]);
  readonly loading = signal(false);

  readonly formVisible = signal(false);
  readonly formSaving = signal(false);
  form: UniformItem = this.emptyItem();
  formHasSize = true;
  formHasQuantity = true;
  formActive = true;

  constructor(
    private readonly api: UniformChangeListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.api.getItemList(false).subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  openAdd(): void {
    const maxOrder = Math.max(0, ...this.items().map((i) => i.orderNo ?? 0));
    this.form = { ...this.emptyItem(), orderNo: maxOrder + 1 };
    this.formHasSize = true;
    this.formHasQuantity = true;
    this.formActive = true;
    this.formVisible.set(true);
  }

  openEdit(item: UniformItem): void {
    this.form = { ...item };
    this.formHasSize = item.hasSize === 'Y';
    this.formHasQuantity = item.hasQuantity === 'Y';
    this.formActive = item.activity === 1;
    this.formVisible.set(true);
  }

  closeForm(): void {
    this.formVisible.set(false);
  }

  save(): void {
    if (!this.form.itemName?.trim()) {
      this.message.warning(this.i18n.t('hrm.uniform.msg.itemNameRequired', 'Vui lòng nhập tên đồng phục'));
      return;
    }
    if (!this.formHasSize && !this.formHasQuantity) {
      this.message.warning(this.i18n.t('hrm.uniform.msg.itemNeedColumn', 'Phải chọn ít nhất 1 cột: Size hoặc Số lượng'));
      return;
    }
    const payload: UniformItem = {
      ...this.form,
      itemName: this.form.itemName.trim(),
      hasSize: this.formHasSize ? 'Y' : 'N',
      hasQuantity: this.formHasQuantity ? 'Y' : 'N',
      activity: this.formActive ? 1 : 0,
    };
    this.formSaving.set(true);
    const req = payload.itemNo == null ? this.api.insertItem(payload) : this.api.updateItem(payload);
    req.subscribe({
      next: (res) => {
        this.formSaving.set(false);
        this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.formVisible.set(false);
        this.load();
      },
      error: (err) => {
        this.formSaving.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  delete(item: UniformItem): void {
    if (item.itemNo == null) return;
    this.api.deleteItem(item.itemNo).subscribe({
      next: (res) => {
        this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        this.load();
      },
      error: (err) => this.message.error(err?.error?.error || this.i18n.t('common.deleteFail', 'Xóa thất bại!')),
    });
  }

  private emptyItem(): UniformItem {
    return { itemNo: null, itemName: '', hasSize: 'Y', hasQuantity: 'Y', orderNo: 0, remark: null, activity: 1 };
  }
}
