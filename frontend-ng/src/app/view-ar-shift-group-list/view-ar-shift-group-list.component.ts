import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ArShiftGroupSavePayload, CodeItem, ShiftGroupEditRow } from './view-ar-shift-group-list.model';
import { ViewArShiftGroupListService } from './view-ar-shift-group-list.service';

/** Các key message.properties dùng trong trang này - toàn bộ đã có sẵn (namespace ess.shiftGroup.x
 *  dùng riêng cho đúng trang này, common.x/addShift.x/empCal.x dùng chung với các trang đã migrate
 *  trước - xem giải thích tái dùng ở saveRow()), không cần bổ sung key mới. */
const I18N_KEYS = [
  'common.empId', 'common.empName', 'common.placeholder.empId', 'common.placeholder.empName',
  'common.search', 'common.clearFilter', 'common.stt', 'ess.shiftGroup.col.beforeShift',
  'ess.shiftGroup.col.afterShift', 'common.startDate', 'common.note', 'common.action', 'common.noData',
  'common.totalRows', 'common.loadFail', 'common.save', 'common.saveSuccess', 'common.saveFail',
  'addShift.selectShift', 'addShift.msg.selectShift', 'addShift.msg.selectDate', 'empCal.msg.invalidData',
];

/** parentCode của danh sách "Ca làm" (400223) - giữ nguyên như data-parent-code trong bản Thymeleaf gốc. */
const SHIFT_PARENT_CODE = '400223';
const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/**
 * Bản Angular của ess/deptEmpAtt/viewArShiftGroupList.html (Thymeleaf + jQuery DataTables) - danh sách
 * lịch sử đổi ca của toàn bộ nhân viên trong công ty (BE lọc theo CPNY_ID, không giới hạn theo người
 * đăng nhập - khác trang ESS "của tôi" viewWorkGroupExperList đã migrate ở WorkgroupExperListComponent
 * dùng chung DTO/mapper nhưng lọc theo personId session). Gọi lại nguyên API JSON đã có sẵn ở
 * EssDeptEmpAttController (xem ViewArShiftGroupListService) - không đổi backend, kể cả procedure
 * AR_SHIFTGROUP_CHANGE_P được gọi qua API save. Dùng nz-table (phân trang client-side, BE trả toàn bộ
 * danh sách theo bộ lọc, tham khảo ManageEmpPositionInfoComponent) thay cho DataTables. Bản gốc không
 * có modal - sửa/lưu trực tiếp trên từng dòng bằng &lt;select&gt;/&lt;input&gt; render bởi jQuery; bản Angular
 * giữ đúng UX đó bằng ShiftGroupEditRow (state chỉnh sửa nhúng thẳng vào từng dòng), lưu từng dòng độc
 * lập và KHÔNG reload lại toàn bảng sau khi lưu (giữ nguyên hành vi/comment gốc: tránh mất chỉnh sửa dở
 * của các dòng khác - xem shgSaveLine() cũ).
 */
@Component({
  selector: 'app-view-ar-shift-group-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-ar-shift-group-list.component.html',
  styleUrl: './view-ar-shift-group-list.component.css',
})
export class ViewArShiftGroupListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ShiftGroupEditRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly shiftOptions = signal<CodeItem[]>([]);

  searchEmpId = '';
  searchEmpName = '';

  constructor(
    private readonly api: ViewArShiftGroupListService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(SHIFT_PARENT_CODE).subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchEmpId.trim(), this.searchEmpName.trim()).subscribe({
      next: (rows) => {
        this.rows.set((rows ?? []).map((r) => ({
          ...r,
          editShiftNo: r.shiftNo || null,
          editStartDate: this.parseYmd(r.startDate),
          editRemark: r.remark || '',
          saving: false,
        })));
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
    this.searchEmpId = '';
    this.searchEmpName = '';
    this.search();
  }

  saveRow(row: ShiftGroupEditRow): void {
    if (!row.personId) {
      this.message.warning(this.i18n.t('empCal.msg.invalidData', 'Dữ liệu không hợp lệ!'));
      return;
    }
    if (!row.editShiftNo) {
      this.message.warning(this.i18n.t('addShift.msg.selectShift', 'Vui lòng chọn Ca làm việc'));
      return;
    }
    if (!row.editStartDate) {
      this.message.warning(this.i18n.t('addShift.msg.selectDate', 'Vui lòng chọn Ngày công'));
      return;
    }
    const payload: ArShiftGroupSavePayload = {
      PERSON_ID: row.personId,
      BEFOR_SHIFT_NO: row.beforShiftNo || '',
      SHIFT_NO: row.editShiftNo,
      START_DATE: formatDate(row.editStartDate, 'yyyy-MM-dd', 'vi'),
      REMARK: row.editRemark || '',
    };
    row.saving = true;
    this.api.save(payload).subscribe({
      next: (res) => {
        row.saving = false;
        if (!res.success) {
          this.message.error(res.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
          return;
        }
        this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
      },
      error: (err) => {
        row.saving = false;
        this.message.error(err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  private parseYmd(ymd: string | null): Date | null {
    if (!ymd) return null;
    const [y, m, d] = ymd.split('-').map(Number);
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
  }
}
