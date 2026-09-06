import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeModule, NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ArItemOption } from '../view-ar-item-param-list/view-ar-item-param-list.model';
import {
  ArShift010Dto,
  ArShift010SavePayload,
  ArShift020Dto,
  ArShift020SavePayload,
} from './view-shift.model';
import { ViewShiftService } from './view-shift.service';

/** Các key message.properties dùng trong trang này - dùng lại nguyên namespace shift.* đã chuẩn bị sẵn
 *  cho đúng trang này (trước đó chỉ có ở bản tiếng Việt và bản mặc định, đã bổ sung đủ en/ko/zh - xem
 *  messages_vi_VN.properties), kết hợp common.* và ar.viewshift.title.start/end đã có sẵn cho "Giờ bắt
 *  đầu/kết thúc". Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess',
  'common.deleteFail', 'common.loadFail', 'common.noData', 'common.totalRows', 'common.status', 'common.active',
  'common.inactive', 'common.sortOrder', 'common.nameVi', 'common.nameEn', 'common.nameZh', 'common.nameKo',
  'common.placeholder.select',
  'shift.treeTitle', 'shift.addShift', 'shift.editShift', 'shift.deleteShift', 'shift.searchPlaceholder',
  'shift.paramLabel', 'shift.addDetail', 'shift.colPkNo', 'shift.colItem', 'shift.colBeginDayOffset',
  'shift.colEndDayOffset', 'shift.modal.setupTitle', 'shift.field.shiftId', 'shift.field.shortname',
  'shift.field.datatype', 'shift.field.deptDistinguish', 'shift.field.deductTime', 'shift.field.otTimeStart',
  'shift.field.otAllowance', 'shift.field.shiftLength', 'shift.detail.colItem', 'shift.js.selectToEdit',
  'shift.js.titleEditPrefix', 'shift.js.warnFillNames', 'shift.js.selectToDelete', 'shift.js.confirmDeleteShift',
  'shift.js.selectFirst', 'shift.detail.addTitle', 'shift.detail.editTitle', 'shift.detail.msg.selectItem',
  'shift.detail.confirmDelete', 'ar.viewshift.title.start', 'ar.viewshift.title.end',
  'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface ShiftForm {
  shiftNo: string | null;
  shiftId: string;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  shiftShortname: string;
  datatype: number | null;
  deptDistinguishNo: string;
  deductTime: number | null;
  otTimeStart: string;
  otAllowance: number | null;
  shiftLength: number | null;
  orderno: number | null;
  activity: number;
}

const EMPTY_SHIFT_FORM: ShiftForm = {
  shiftNo: null, shiftId: '', nameVi: '', nameEn: '', nameZh: '', nameKo: '', shiftShortname: '',
  datatype: null, deptDistinguishNo: '', deductTime: null, otTimeStart: '', otAllowance: null,
  shiftLength: null, orderno: 0, activity: 1,
};

interface ShiftDetailForm {
  pkNo: number | null;
  shiftNo: string;
  itemNo: string | null;
  beginDayOffset: number | null;
  fromTime: Date | null;
  endDayOffset: number | null;
  toTime: Date | null;
  orderno: number | null;
  activity: number;
}

const EMPTY_DETAIL_FORM: Omit<ShiftDetailForm, 'shiftNo'> = {
  pkNo: null, itemNo: null, beginDayOffset: 0, fromTime: null, endDayOffset: 0, toTime: null,
  orderno: 0, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewShift.html (Thymeleaf + jQuery DataTables + jsTree) - quản
 * lý Ca làm việc (AR_SHIFT010) dạng cây bên trái, mỗi ca có nhiều dòng tham số chi tiết (AR_SHIFT020)
 * hiển thị dạng bảng bên phải khi chọn ca đó trên cây. Gọi lại nguyên API JSON đã có sẵn ở
 * ArShiftController (xem ViewShiftService) - không đổi endpoint. Dùng nz-table (phân trang client-side,
 * tham khảo ManageEmpPositionInfoComponent) thay DataTables, nz-tree (tham khảo ViewItemParameterComponent
 * - trang chị em cùng kiểu cây+bảng) thay jsTree, nz-modal thay modal Bootstrap.
 *
 * Có sửa 1 lỗi nhỏ ở backend (ArShiftServiceImpl, không phải Angular) để tính năng "Giờ bắt đầu/kết
 * thúc" thực sự hoạt động: cột FROM_TIME/TO_TIME là TIMESTAMP nhưng field Java lại là LocalDateTime;
 * bản gốc lấy chi tiết bằng entity.getFromTime().toString() (ra chuỗi ISO đầy đủ, input type="time"
 * không hiểu) và khi lưu dùng LocalDateTime.parse("HH:mm") (luôn ném lỗi vì thiếu phần ngày, bị nuốt bởi
 * catch nên FROM_TIME/TO_TIME không bao giờ lưu được) - đã sửa sang LocalTime + 1 ngày cố định, không
 * đổi cột DB/mapper.
 *
 * Khác biệt có chủ đích so với bản gốc (nhất quán với các trang chị em cùng module attendanceSettings):
 * bỏ ô chọn "Pháp nhân (Công ty)" (bản gốc còn không có ô này trong modal Ca làm việc, chỉ có cpnyId
 * ngầm) vì cpnyId luôn bị LanguageParameterInterceptor ghi đè theo session, không cần xử lý gì thêm.
 */
@Component({
  selector: 'app-view-shift',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzTimePickerModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-shift.component.html',
  styleUrl: './view-shift.component.css',
})
export class ViewShiftComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly shifts = signal<ArShift010Dto[]>([]);
  readonly treeNodes = computed<NzTreeNodeOptions[]>(() =>
    this.shifts()
      .filter((s) => s.activity === 1)
      .map((s) => ({ title: s.nameVi || s.shiftShortname || s.shiftNo, key: s.shiftNo, isLeaf: true })),
  );
  treeSearchValue = '';
  selectedShiftNo: string | null = null;
  selectedShiftLabel = signal<string | null>(null);
  readonly panelTitle = computed(() =>
    this.selectedShiftLabel()
      ? `${this.i18n.t('shift.paramLabel', 'Tham số ca làm việc')}: ${this.selectedShiftLabel()}`
      : this.i18n.t('shift.paramLabel', 'Tham số ca làm việc'),
  );

  readonly itemOptions = signal<ArItemOption[]>([]);

  readonly rows = signal<ArShift020Dto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  // ---- Modal Ca làm việc (AR_SHIFT010) ----
  readonly shiftModalVisible = signal(false);
  readonly shiftSaving = signal(false);
  readonly isNewShift = signal(true);
  readonly shiftModalTitle = computed(() =>
    this.isNewShift()
      ? this.i18n.t('shift.modal.setupTitle', 'Thiết lập Ca làm việc (Shift)')
      : `${this.i18n.t('shift.js.titleEditPrefix', 'Sửa Ca làm việc: ')}${this.selectedShiftLabel() ?? ''}`,
  );
  shiftForm: ShiftForm = { ...EMPTY_SHIFT_FORM };

  // ---- Modal Chi tiết ca (AR_SHIFT020) ----
  readonly detailModalVisible = signal(false);
  readonly detailSaving = signal(false);
  readonly isNewDetail = signal(true);
  readonly detailModalTitle = computed(() =>
    this.isNewDetail()
      ? this.i18n.t('shift.detail.addTitle', 'Thêm mới Chi tiết')
      : this.i18n.t('shift.detail.editTitle', 'Cập nhật Chi tiết'),
  );
  detailForm: ShiftDetailForm = { ...EMPTY_DETAIL_FORM, shiftNo: '' };

  readonly deleteShiftVisible = signal(false);
  readonly deletingShift = signal(false);

  readonly deleteDetailVisible = signal(false);
  readonly deletingDetail = signal(false);
  private deleteDetailTarget: ArShift020Dto | null = null;

  constructor(
    private readonly api: ViewShiftService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadShiftTree();
    this.api.getItemOptions().subscribe({
      next: (list) => this.itemOptions.set(list ?? []),
      error: () => this.itemOptions.set([]),
    });
  }

  itemLabel(opt: ArItemOption): string {
    return opt.nameVi || opt.shortName || opt.itemNo;
  }

  private loadShiftTree(): void {
    this.api.searchShifts('').subscribe({
      next: (list) => {
        this.shifts.set(list ?? []);
        this.selectedShiftNo = null;
        this.selectedShiftLabel.set(null);
        this.rows.set([]);
      },
      error: () => this.shifts.set([]),
    });
  }

  onTreeClick(event: NzFormatEmitEvent): void {
    const node = event.node;
    if (!node) return;
    this.selectedShiftNo = node.key;
    this.selectedShiftLabel.set(node.title);
    this.searchDetails();
  }

  searchDetails(): void {
    if (!this.selectedShiftNo) {
      this.rows.set([]);
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.searchShiftDetails(this.selectedShiftNo).subscribe({
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

  // ==================== AR_SHIFT010 CRUD ====================

  openAddShiftModal(): void {
    this.isNewShift.set(true);
    this.shiftForm = { ...EMPTY_SHIFT_FORM };
    this.shiftModalVisible.set(true);
  }

  openEditShiftModal(): void {
    if (!this.selectedShiftNo) {
      this.message.warning(this.i18n.t('shift.js.selectToEdit', 'Vui lòng chọn 1 ca trên cây để sửa.'));
      return;
    }
    this.api.getShiftById(this.selectedShiftNo).subscribe({
      next: (data) => {
        this.isNewShift.set(false);
        this.shiftForm = {
          shiftNo: data.shiftNo,
          shiftId: data.shiftId || '',
          nameVi: data.nameVi || '',
          nameEn: data.nameEn || '',
          nameZh: data.nameZh || '',
          nameKo: data.nameKo || '',
          shiftShortname: data.shiftShortname || '',
          datatype: data.datatype,
          deptDistinguishNo: data.deptDistinguishNo || '',
          deductTime: data.deductTime,
          otTimeStart: data.otTimeStart || '',
          otAllowance: data.otAllowance,
          shiftLength: data.shiftLength,
          orderno: data.orderno,
          activity: data.activity ?? 1,
        };
        this.shiftModalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeShiftModal(): void {
    this.shiftModalVisible.set(false);
  }

  saveShiftForm(): void {
    if (!this.shiftForm.nameVi || !this.shiftForm.nameEn || !this.shiftForm.nameZh || !this.shiftForm.nameKo) {
      this.message.warning(this.i18n.t('shift.js.warnFillNames', 'Vui lòng nhập đầy đủ các thông tin bắt buộc (4 Tên)'));
      return;
    }
    const payload: ArShift010SavePayload = {
      shiftNo: this.shiftForm.shiftNo,
      shiftId: this.shiftForm.shiftId,
      nameVi: this.shiftForm.nameVi,
      nameEn: this.shiftForm.nameEn,
      nameZh: this.shiftForm.nameZh,
      nameKo: this.shiftForm.nameKo,
      shiftShortname: this.shiftForm.shiftShortname,
      datatype: this.shiftForm.datatype,
      deptDistinguishNo: this.shiftForm.deptDistinguishNo,
      deductTime: this.shiftForm.deductTime,
      otTimeStart: this.shiftForm.otTimeStart,
      otAllowance: this.shiftForm.otAllowance,
      shiftLength: this.shiftForm.shiftLength,
      orderno: this.shiftForm.orderno,
      activity: this.shiftForm.activity,
    };
    this.shiftSaving.set(true);
    this.api.saveShift(payload).subscribe({
      next: () => {
        this.shiftSaving.set(false);
        this.shiftModalVisible.set(false);
        this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.loadShiftTree();
      },
      error: () => {
        this.shiftSaving.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  openDeleteShiftConfirm(): void {
    if (!this.selectedShiftNo) {
      this.message.warning(this.i18n.t('shift.js.selectToDelete', 'Vui lòng chọn 1 ca trên cây để xóa.'));
      return;
    }
    this.deleteShiftVisible.set(true);
  }

  closeDeleteShiftConfirm(): void {
    this.deleteShiftVisible.set(false);
  }

  confirmDeleteShift(): void {
    if (!this.selectedShiftNo) return;
    this.deletingShift.set(true);
    this.api.deleteShift(this.selectedShiftNo).subscribe({
      next: () => {
        this.deletingShift.set(false);
        this.deleteShiftVisible.set(false);
        this.message.success(this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        this.loadShiftTree();
      },
      error: () => {
        this.deletingShift.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== AR_SHIFT020 CRUD ====================

  openAddDetailModal(): void {
    if (!this.selectedShiftNo) {
      this.message.warning(this.i18n.t('shift.js.selectFirst', 'Vui lòng chọn 1 ca trên danh sách bên trái trước.'));
      return;
    }
    this.isNewDetail.set(true);
    this.detailForm = { ...EMPTY_DETAIL_FORM, shiftNo: this.selectedShiftNo };
    this.detailModalVisible.set(true);
  }

  openEditDetailModal(row: ArShift020Dto): void {
    this.isNewDetail.set(false);
    this.detailForm = {
      pkNo: row.pkNo,
      shiftNo: row.shiftNo,
      itemNo: row.itemNo,
      beginDayOffset: row.beginDayOffset,
      fromTime: this.parseHm(row.fromTimeStr),
      endDayOffset: row.endDayOffset,
      toTime: this.parseHm(row.toTimeStr),
      orderno: row.orderno,
      activity: row.activity ?? 1,
    };
    this.detailModalVisible.set(true);
  }

  closeDetailModal(): void {
    this.detailModalVisible.set(false);
  }

  saveDetailForm(): void {
    if (!this.detailForm.itemNo) {
      this.message.warning(this.i18n.t('shift.detail.msg.selectItem', 'Vui lòng chọn Hạng mục (Item).'));
      return;
    }
    const payload: ArShift020SavePayload = {
      pkNo: this.detailForm.pkNo,
      shiftNo: this.detailForm.shiftNo,
      itemNo: this.detailForm.itemNo,
      beginDayOffset: this.detailForm.beginDayOffset,
      fromTimeStr: this.formatHm(this.detailForm.fromTime),
      endDayOffset: this.detailForm.endDayOffset,
      toTimeStr: this.formatHm(this.detailForm.toTime),
      orderno: this.detailForm.orderno,
      activity: this.detailForm.activity,
    };
    this.detailSaving.set(true);
    this.api.saveShiftDetail(payload).subscribe({
      next: () => {
        this.detailSaving.set(false);
        this.detailModalVisible.set(false);
        this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.searchDetails();
      },
      error: () => {
        this.detailSaving.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  openDeleteDetailConfirm(row: ArShift020Dto): void {
    this.deleteDetailTarget = row;
    this.deleteDetailVisible.set(true);
  }

  closeDeleteDetailConfirm(): void {
    this.deleteDetailVisible.set(false);
  }

  get deleteDetailTargetName(): string {
    return this.deleteDetailTarget ? `${this.deleteDetailTarget.itemName ?? this.deleteDetailTarget.itemNo}` : '';
  }

  confirmDeleteDetail(): void {
    if (!this.deleteDetailTarget?.pkNo) return;
    this.deletingDetail.set(true);
    this.api.deleteShiftDetail(this.deleteDetailTarget.pkNo).subscribe({
      next: () => {
        this.deletingDetail.set(false);
        this.deleteDetailVisible.set(false);
        this.message.success(this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        this.searchDetails();
      },
      error: () => {
        this.deletingDetail.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('shift.colPkNo', 'PK No'),
      this.i18n.t('shift.colItem', 'Hạng mục'),
      this.i18n.t('shift.colBeginDayOffset', 'Độ lệch ngày bắt đầu'),
      this.i18n.t('ar.viewshift.title.start', 'Giờ bắt đầu'),
      this.i18n.t('shift.colEndDayOffset', 'Độ lệch ngày kết thúc'),
      this.i18n.t('ar.viewshift.title.end', 'Giờ kết thúc'),
      this.i18n.t('common.sortOrder', 'Sắp xếp'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.pkNo, r.itemName, r.beginDayOffset, r.fromTimeStr, r.endDayOffset, r.toTimeStr, r.orderno,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, `shift_detail_${this.selectedShiftNo ?? 'list'}.xlsx`);
  }

  private parseHm(hm: string | null): Date | null {
    if (!hm) return null;
    const [h, m] = hm.split(':').map((v) => parseInt(v, 10));
    if (Number.isNaN(h) || Number.isNaN(m)) return null;
    const d = new Date();
    d.setHours(h, m, 0, 0);
    return d;
  }

  private formatHm(d: Date | null): string | null {
    return d ? formatDate(d, 'HH:mm', 'vi') : null;
  }
}
