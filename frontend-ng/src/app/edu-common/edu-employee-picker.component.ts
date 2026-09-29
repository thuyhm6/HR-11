import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EduEmployee } from './edu-common.model';
import { EduCommonService } from './edu-common.service';

/**
 * Modal tìm & chọn nhân viên đang làm việc - dùng chung cho Giảng viên (chọn 1, bản gốc queryTeacher), Hợp đồng đào tạo
 * (chọn 1, bản gốc queryPeixun) và Kế hoạch đào tạo (chọn nhiều, bản gốc desEmployee lọc theo phòng ban chỉ định).
 * Bấm ra ngoài modal sẽ đóng (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-employee-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, NzModalModule, NzTableModule, NzInputModule, NzButtonModule, NzCheckboxModule, TranslatePipe],
  template: `
    <nz-modal [nzVisible]="visible" [nzTitle]="'edu.common.searchEmployee' | translate:'Tìm nhân viên'" nzWidth="760px"
              [nzMaskClosable]="true" (nzOnCancel)="close()" (nzOnOk)="confirm()"
              [nzOkText]="'common.confirm' | translate:'Xác nhận'" [nzCancelText]="'common.close' | translate:'Đóng'">
      <ng-container *nzModalContent>
        <form class="d-flex gap-2 mb-2" (ngSubmit)="search()">
          <input nz-input id="eepKeyword" name="eepKeyword" [(ngModel)]="keyword"
                 [placeholder]="'hrm.empinfo.nameAndEmpid' | translate:'Mã nhân viên/Họ tên'">
          <button nz-button nzType="primary" type="submit" id="eepBtnSearch">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tìm kiếm' }}
          </button>
        </form>
        <nz-table #eepTable [nzData]="rows()" [nzLoading]="loading()" nzSize="small" [nzPageSize]="10"
                  [nzScroll]="{ y: '320px' }">
          <thead>
            <tr>
              <th nzWidth="40px" class="text-center">
                <label *ngIf="multiple" nz-checkbox [ngModel]="allChecked()" (ngModelChange)="toggleAll($event)" name="eepAll"></label>
              </th>
              <th nzWidth="110px">{{ 'common.empId' | translate:'Mã nhân viên' }}</th>
              <th nzWidth="160px">{{ 'common.empName' | translate:'Họ tên' }}</th>
              <th>{{ 'common.deptName' | translate:'Phòng ban' }}</th>
              <th nzWidth="130px">{{ 'ess.trans.title.postGradeName' | translate:'Chức vụ' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let e of eepTable.data" class="eep-row" [class.eep-row-selected]="isChecked(e)"
                (click)="toggle(e)" (dblclick)="!multiple && pickOne(e)">
              <td class="text-center" (click)="$event.stopPropagation()">
                <label nz-checkbox [ngModel]="isChecked(e)" (ngModelChange)="toggle(e)" [name]="'eepChk_' + e.empId"></label>
              </td>
              <td>{{ e.empId }}</td>
              <td>{{ e.localName }}</td>
              <td>{{ e.deptName }}</td>
              <td>{{ e.postGradeName }}</td>
            </tr>
          </tbody>
        </nz-table>
      </ng-container>
    </nz-modal>
  `,
  styles: [`
    .eep-row { cursor: pointer; }
    .eep-row.eep-row-selected > td { background: #e6f4ff; }
  `],
})
export class EduEmployeePickerComponent {
  @Input() visible = false;
  /** true = chọn nhiều nhân viên. */
  @Input() multiple = false;
  /** Giới hạn theo phòng ban (kể cả phòng ban con) - bản gốc desEmployee lọc theo phòng ban chỉ định. */
  @Input() deptNos: string[] = [];
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() picked = new EventEmitter<EduEmployee[]>();

  keyword = '';
  readonly rows = signal<EduEmployee[]>([]);
  readonly loading = signal(false);
  private readonly checked = signal<Map<string, EduEmployee>>(new Map());

  constructor(
    private readonly api: EduCommonService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  /** Mở modal với từ khóa ban đầu (bản gốc: truyền nội dung ô tìm kiếm sang dialog). */
  open(keyword = ''): void {
    this.keyword = keyword;
    this.checked.set(new Map());
    this.rows.set([]);
    this.visibleChange.emit(true);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.api.searchEmployees(this.keyword.trim(), this.deptNos).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.rows.set([]);
        this.loading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  isChecked(e: EduEmployee): boolean {
    return this.checked().has(e.empId);
  }

  toggle(e: EduEmployee): void {
    const next = this.multiple ? new Map(this.checked()) : new Map<string, EduEmployee>();
    if (this.checked().has(e.empId)) next.delete(e.empId);
    else next.set(e.empId, e);
    this.checked.set(next);
  }

  allChecked(): boolean {
    return this.rows().length > 0 && this.rows().every((r) => this.checked().has(r.empId));
  }

  toggleAll(checked: boolean): void {
    const next = new Map(this.checked());
    this.rows().forEach((r) => (checked ? next.set(r.empId, r) : next.delete(r.empId)));
    this.checked.set(next);
  }

  pickOne(e: EduEmployee): void {
    this.checked.set(new Map([[e.empId, e]]));
    this.confirm();
  }

  confirm(): void {
    if (this.checked().size === 0) {
      this.message.warning(this.i18n.t('edu.teacherManager.QINGXIANXUANZEYIGEREN.a', 'Xin chọn 1 người!'));
      return;
    }
    this.picked.emit(Array.from(this.checked().values()));
    this.close();
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
