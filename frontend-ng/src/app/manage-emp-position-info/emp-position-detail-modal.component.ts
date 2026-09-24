import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, signal } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTableModule } from 'ng-zorro-antd/table';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ManageEmpPositionInfoDto, ManageEmpPositionInsideDto } from './manage-emp-position-info.model';
import { ManageEmpPositionInfoService } from './manage-emp-position-info.service';

/** Các key message.properties dùng trong modal - tải trước khi khởi tạo component (xem I18nService). */
export const EMP_POSITION_DETAIL_I18N_KEYS = [
  'mep.modal.detailTitle', 'common.empId', 'common.empName', 'common.deptName', 'common.stt',
  'mep.detail.orgNameLocal', 'mep.col.duty', 'mep.col.jobTitle', 'mep.col.positionTitle',
  'essDept.empGroup', 'essDept.empType', 'essDept.status', 'essDept.nationality', 'mep.col.dateJoined',
  'mep.detail.mainBusiness', 'mep.detail.employeeOwned', 'mep.detail.manager', 'mep.detail.managerEmp',
  'mep.section.insideProcess', 'essDept.attStartDate', 'mep.col.mainBusiness', 'mep.col.transType',
  'mep.msg.noInsideExp', 'mep.msg.loadInsideEmpFailed', 'mep.detail.noImage',
];

/** Chuẩn hóa PHOTO_PATH (HR_PERSONAL_INFO) thành URL hiển thị được - dùng chung cho modal chi tiết và
 *  ảnh trên thẻ nhân viên ở ViewDeptPersonalInfoComponent. */
export function resolveEmpPhotoUrl(photoPath: string | null | undefined): string | null {
  if (!photoPath) return null;
  const normalized = photoPath.trim();
  if (!normalized) return null;
  if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith('data:')) return normalized;
  return normalized.startsWith('/') ? normalized : '/' + normalized.replace(/^\/+/, '');
}

/**
 * Modal chi tiết nhân viên + quá trình nội bộ - tách ra từ ManageEmpPositionInfoComponent để dùng
 * chung với ViewDeptPersonalInfoComponent (cùng 1 API, cùng nội dung chi tiết, chỉ khác cách hiển thị
 * danh sách) thay vì copy nguyên khối template/logic sang 2 nơi.
 */
@Component({
  selector: 'app-emp-position-detail-modal',
  standalone: true,
  imports: [CommonModule, NzModalModule, NzDescriptionsModule, NzAlertModule, NzTableModule, TranslatePipe],
  templateUrl: './emp-position-detail-modal.component.html',
  styleUrl: './manage-emp-position-info.component.css',
})
export class EmpPositionDetailModalComponent implements OnChanges {
  @Input() visible = false;
  @Input() row: ManageEmpPositionInfoDto | null = null;
  @Output() closed = new EventEmitter<void>();

  readonly insideRows = signal<ManageEmpPositionInsideDto[]>([]);
  readonly insideLoading = signal(false);
  readonly insideErrorMessage = signal<string | null>(null);
  readonly photoBroken = signal(false);

  readonly resolvePhotoUrl = resolveEmpPhotoUrl;

  constructor(
    private readonly api: ManageEmpPositionInfoService,
    private readonly i18n: I18nService,
  ) {
    this.i18n.loadKeys(EMP_POSITION_DETAIL_I18N_KEYS);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['row'] || changes['visible']) && this.visible && this.row) {
      this.loadInside(this.row);
    }
  }

  close(): void {
    this.closed.emit();
  }

  onPhotoError(): void {
    this.photoBroken.set(true);
  }

  private loadInside(row: ManageEmpPositionInfoDto): void {
    this.insideRows.set([]);
    this.insideErrorMessage.set(null);
    this.photoBroken.set(false);
    if (!row.personId) return;
    this.insideLoading.set(true);
    this.api.getInsideExperience(row.personId).subscribe({
      next: (rows) => {
        this.insideRows.set(rows ?? []);
        this.insideLoading.set(false);
      },
      error: () => {
        this.insideErrorMessage.set(
          this.i18n.t('mep.msg.loadInsideEmpFailed', 'Không tải được quá trình nội bộ của nhân viên.'),
        );
        this.insideLoading.set(false);
      },
    });
  }
}
