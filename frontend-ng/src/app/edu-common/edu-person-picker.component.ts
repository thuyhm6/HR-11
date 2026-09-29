import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EduPerson } from './edu-common.model';

/**
 * Modal chọn nhiều người trong 1 danh sách cho sẵn - thay các dialog commonTeacher / planEmployee / finalstudent của bản
 * JSP (chọn giảng viên đánh giá trong giảng viên của khóa, nhân viên chỉ định trong nhân viên theo kế hoạch, đối tượng thực
 * tế trong học viên). Các người đã chọn được tick sẵn. Bấm ra ngoài modal sẽ đóng (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-person-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, NzModalModule, NzTableModule, NzCheckboxModule, NzInputModule, TranslatePipe],
  template: `
    <nz-modal [nzVisible]="visible" [nzTitle]="title" nzWidth="620px" [nzMaskClosable]="true"
              (nzOnCancel)="close()" (nzOnOk)="confirm()"
              [nzOkText]="'common.confirm' | translate:'Xác nhận'" [nzCancelText]="'common.close' | translate:'Đóng'">
      <ng-container *nzModalContent>
        <input nz-input id="eppFilter" name="eppFilter" class="mb-2" [ngModel]="filter()" (ngModelChange)="filter.set($event)"
               [placeholder]="'common.quickFilter' | translate:'Lọc nhanh'">
        <nz-table #eppTable [nzData]="filtered()" nzSize="small" [nzPageSize]="10" [nzScroll]="{ y: '320px' }">
          <thead>
            <tr>
              <th nzWidth="50px" class="text-center">
                <label nz-checkbox name="eppAll" [ngModel]="allChecked()" (ngModelChange)="toggleAll($event)"></label>
              </th>
              <th nzWidth="140px">{{ 'common.empId' | translate:'Mã nhân viên' }}</th>
              <th>{{ 'common.empName' | translate:'Họ tên' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of eppTable.data" class="epp-row" (click)="toggle(p.empId)">
              <td class="text-center" (click)="$event.stopPropagation()">
                <label nz-checkbox [name]="'eppChk_' + p.empId" [ngModel]="checked().has(p.empId)" (ngModelChange)="toggle(p.empId)"></label>
              </td>
              <td>{{ p.empId }}</td>
              <td>{{ p.name }}</td>
            </tr>
          </tbody>
        </nz-table>
        <div class="small text-muted">{{ 'common.totalRows' | translate:'Tổng số dòng:' }} {{ options.length }}</div>
      </ng-container>
    </nz-modal>
  `,
  styles: [`.epp-row { cursor: pointer; }`],
})
export class EduPersonPickerComponent implements OnChanges {
  @Input() visible = false;
  @Input() title = '';
  /** Danh sách được phép chọn. */
  @Input() options: EduPerson[] = [];
  /** Danh sách đang chọn (tick sẵn khi mở). */
  @Input() selected: EduPerson[] = [];
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() picked = new EventEmitter<EduPerson[]>();

  readonly filter = signal('');
  readonly checked = signal<Set<string>>(new Set());
  private readonly optionList = signal<EduPerson[]>([]);
  readonly filtered = computed(() => {
    const kw = this.filter().trim().toLowerCase();
    return kw
      ? this.optionList().filter((p) => p.empId.toLowerCase().includes(kw) || (p.name ?? '').toLowerCase().includes(kw))
      : this.optionList();
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) this.optionList.set(this.options ?? []);
    if (changes['visible'] && this.visible) {
      this.filter.set('');
      this.checked.set(new Set((this.selected ?? []).map((p) => p.empId)));
    }
  }

  toggle(empId: string): void {
    const next = new Set(this.checked());
    if (next.has(empId)) next.delete(empId);
    else next.add(empId);
    this.checked.set(next);
  }

  allChecked(): boolean {
    const list = this.filtered();
    return list.length > 0 && list.every((p) => this.checked().has(p.empId));
  }

  toggleAll(value: boolean): void {
    const next = new Set(this.checked());
    this.filtered().forEach((p) => (value ? next.add(p.empId) : next.delete(p.empId)));
    this.checked.set(next);
  }

  confirm(): void {
    this.picked.emit(this.optionList().filter((p) => this.checked().has(p.empId)));
    this.close();
  }

  close(): void {
    this.visibleChange.emit(false);
  }
}
