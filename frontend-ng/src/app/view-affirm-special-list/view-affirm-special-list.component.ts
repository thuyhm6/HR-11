import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AffirmSpecialCell,
  AffirmSpecialDetail,
  AffirmSpecialRow,
  AffirmSpecialType,
} from './view-affirm-special-list.model';
import { ViewAffirmSpecialListService } from './view-affirm-special-list.service';
import { AffirmSpecialEditModalComponent, AffirmSpecialModalMode } from './affirm-special-edit-modal.component';

/** Các key message.properties dùng trong trang này + modal - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'sys.viewAffirmSpecialList.BEICAIJUEDUIXIANG.b', 'sys.viewAffirmSpecialView.JUECAIDUIXIANG.b',
  'sys.affirm.title.affirmTypeNames', 'sys.affirm.title.affirmPerson', 'sys.affirm.title.affirmLevel',
  'sys.affirm.title.personName', 'alert.message.sys.affirm.pleaseChooseAffirmType',
  'ar.viewArNavigationPage.SHEZHI.b', 'pa.salary.title.allChecked', 'mep.msg.loadDeptFailed',
  'common.search', 'common.clearFilter', 'common.exportExcel', 'common.edit', 'common.delete', 'common.save',
  'common.cancel', 'common.confirm', 'common.stt', 'common.empId', 'common.empName', 'common.deptName',
  'common.action', 'common.noData', 'common.loadFail', 'common.totalRows', 'common.saveSuccess', 'common.deleteSuccess',
  'vasl.search.placeholder', 'vasl.objectType.E', 'vasl.objectType.D', 'vasl.hint.cellClick',
  'vasl.modal.addTitle', 'vasl.modal.editTitle', 'vasl.field.objectPerson', 'vasl.field.objectDept',
  'vasl.placeholder.searchEmp', 'vasl.placeholder.chooseDept', 'vasl.hint.deptCascade',
  'vasl.moveUp', 'vasl.moveDown', 'vasl.excel.affirmorEmpId', 'vasl.excel.affirmorName',
  'vasl.msg.selectCell', 'vasl.msg.chooseObject', 'vasl.msg.chooseAffirmor', 'vasl.msg.duplicatePerson',
  'vasl.msg.noAffirmor', 'vasl.msg.emptyAffirmorWarn', 'vasl.msg.confirmDelete', 'vasl.msg.saveFail', 'vasl.msg.deleteFail',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** Độ rộng cột cố định (STT + Đối tượng) và mỗi cột loại phê duyệt - dùng tính nzScroll.x. */
const FIXED_COLUMNS_WIDTH = 60 + 240;
const TYPE_COLUMN_WIDTH = 170;

/**
 * Bản Angular của /sys/affirmSpecial/viewAffirmSpecialList (JSP + DWZ, dự án Hanwha_HTSV) - Phê duyệt đặc biệt.
 * Mỗi dòng là 1 đối tượng được duyệt (nhân viên hoặc phòng ban), mỗi cột động là 1 loại phê duyệt, trong ô là
 * danh sách "cấp. người duyệt". Bấm 1 ô để chọn (thay band() của bản gốc) rồi Sửa/Xóa; nhấp đúp để sửa nhanh.
 * Thiết lập/Cập nhật dùng chung AffirmSpecialEditModalComponent. Xuất excel client-side (.xlsx qua SheetJS, cùng
 * cách ManageEmpPositionInfoComponent) với đúng các cột của exportBatchLAffirmSpecial bản gốc.
 */
@Component({
  selector: 'app-view-affirm-special-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzAlertModule,
    NzTagModule,
    NzModalModule,
    TranslatePipe,
    AffirmSpecialEditModalComponent,
  ],
  templateUrl: './view-affirm-special-list.component.html',
  styleUrl: './view-affirm-special-list.component.css',
})
export class ViewAffirmSpecialListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly types = signal<AffirmSpecialType[]>([]);
  readonly rows = signal<AffirmSpecialRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly selected = signal<AffirmSpecialCell | null>(null);

  readonly modalVisible = signal(false);
  readonly modalMode = signal<AffirmSpecialModalMode>('add');
  readonly modalCell = signal<AffirmSpecialCell | null>(null);

  readonly scrollX = computed(() => `${FIXED_COLUMNS_WIDTH + this.types().length * TYPE_COLUMN_WIDTH}px`);

  /** "affirmObject|typeCodeNo" -> người duyệt theo cấp - tránh lọc lại details mỗi lần render ô. */
  private cellIndex = new Map<string, AffirmSpecialDetail[]>();

  keyword = '';

  constructor(
    private readonly api: ViewAffirmSpecialListService,
    private readonly i18n: I18nService,
    private readonly modal: NzModalService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getTypes().subscribe({
      next: (list) => this.types.set(list ?? []),
      error: () => this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selected.set(null);
    this.api.getList(this.keyword.trim()).subscribe({
      next: (rows) => {
        this.buildCellIndex(rows ?? []);
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.buildCellIndex([]);
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.keyword = '';
    this.search();
  }

  cellDetails(row: AffirmSpecialRow, type: AffirmSpecialType): AffirmSpecialDetail[] {
    return this.cellIndex.get(this.cellKey(row.affirmObject, type.codeNo)) ?? [];
  }

  isSelected(row: AffirmSpecialRow, type: AffirmSpecialType): boolean {
    const cell = this.selected();
    return !!cell && cell.row.affirmObject === row.affirmObject && cell.type.codeNo === type.codeNo;
  }

  selectCell(row: AffirmSpecialRow, type: AffirmSpecialType): void {
    this.selected.set({ row, type });
  }

  /** Bấm vào cột STT/tên đối tượng = bỏ chọn (giống bandBlank() bản gốc). */
  clearSelection(): void {
    this.selected.set(null);
  }

  // ==================== Thiết lập / Sửa / Xóa ====================

  openAdd(): void {
    this.modalMode.set('add');
    this.modalCell.set(null);
    this.modalVisible.set(true);
  }

  openEdit(cell: AffirmSpecialCell | null = this.selected()): void {
    if (!cell) {
      this.message.warning(this.i18n.t('vasl.msg.selectCell', 'Vui lòng chọn 1 ô loại phê duyệt trên bảng!'));
      return;
    }
    this.selected.set(cell);
    this.modalMode.set('edit');
    this.modalCell.set(cell);
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  onSaved(): void {
    this.modalVisible.set(false);
    this.search();
  }

  confirmDelete(): void {
    const cell = this.selected();
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (!cell) {
      this.message.warning(t('vasl.msg.selectCell', 'Vui lòng chọn 1 ô loại phê duyệt trên bảng!'));
      return;
    }
    this.modal.confirm({
      nzTitle: t('common.confirm', 'Xác nhận'),
      nzContent: `${t('vasl.msg.confirmDelete', 'Bạn có chắc muốn xóa thiết lập người duyệt của ô đã chọn?')}
        [${cell.row.objectCode}] ${cell.row.objectName} - ${cell.type.content}`,
      nzOkDanger: true,
      nzMaskClosable: true,
      nzOnOk: () => this.doDelete(cell),
    });
  }

  private doDelete(cell: AffirmSpecialCell): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.api.delete(cell.row.affirmObject, cell.type.codeNo).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(res.message || t('common.deleteSuccess', 'Xóa thành công!'));
          this.search();
        } else {
          this.message.error(res.message || t('vasl.msg.deleteFail', 'Xóa thất bại!'));
        }
      },
      error: (err) => this.message.error(err?.error?.message || t('vasl.msg.deleteFail', 'Xóa thất bại!')),
    });
  }

  // ==================== Xuất excel ====================

  /** Cùng các cột với exportBatchLAffirmSpecial bản gốc: đối tượng, loại phê duyệt, cấp, mã + tên người duyệt. */
  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const typeNames = new Map(this.types().map((ty) => [ty.codeNo, ty.content]));
    const headers = [
      t('sys.viewAffirmSpecialView.JUECAIDUIXIANG.b', 'Người được duyệt'),
      t('sys.affirm.title.affirmTypeNames', 'Loại phê duyệt'),
      t('sys.affirm.title.affirmLevel', 'Cấp'),
      t('vasl.excel.affirmorEmpId', 'Mã người duyệt'),
      t('vasl.excel.affirmorName', 'Tên người duyệt'),
    ];
    const dataRows: (string | number)[][] = [];
    for (const row of this.rows()) {
      for (const d of row.details) {
        dataRows.push([
          `[${row.objectCode}] ${row.objectName}`,
          typeNames.get(d.affirmTypeId) ?? d.affirmTypeId,
          d.affirmLevel,
          d.empId ?? '',
          d.localName ?? '',
        ]);
      }
    }
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'AffirmSpecial');
    XLSX.writeFile(workbook, 'affirm_special_list.xlsx');
  }

  private buildCellIndex(rows: AffirmSpecialRow[]): void {
    const index = new Map<string, AffirmSpecialDetail[]>();
    for (const row of rows) {
      for (const d of row.details ?? []) {
        const key = this.cellKey(row.affirmObject, d.affirmTypeId);
        const list = index.get(key) ?? [];
        list.push(d);
        index.set(key, list);
      }
    }
    index.forEach((list) => list.sort((a, b) => a.affirmLevel - b.affirmLevel));
    this.cellIndex = index;
  }

  private cellKey(affirmObject: string, typeNo: string): string {
    return `${affirmObject}|${typeNo}`;
  }
}
