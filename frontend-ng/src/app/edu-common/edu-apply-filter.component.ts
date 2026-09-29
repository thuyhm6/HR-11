import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import { EduApplySearch } from './edu-apply.model';
import { EduCommonService } from './edu-common.service';
import { formatDmy } from './edu-date.util';

export interface EduApplyFlagOption {
  value: string;
  key: string;
  fallback: string;
}

/**
 * Bộ lọc dùng chung của các trang Phê duyệt / Xác nhận / Tình hình đăng ký khóa đào tạo (bản gốc courseMaker.jsp,
 * courseConfirm.jsp, makerSituation.jsp): phòng ban, mã / tên nhân viên, tên khóa học, thời gian thực hiện, trạng thái.
 * id phần tử = idPrefix + tên để không trùng giữa các trang. Nút thao tác riêng của từng trang đặt qua ng-content.
 */
@Component({
  selector: 'app-edu-apply-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzInputModule, NzButtonModule, NzDatePickerModule, NzSelectModule,
    NzTreeSelectModule, TranslatePipe],
  template: `
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="emit()">
        <ng-container *ngIf="showPerson">
          <div class="col-md-3">
            <label class="form-label" [attr.for]="idPrefix + 'Dept'">{{ 'hrm.empinfo.ORG_NAME_LOCAL' | translate:'Phòng ban' }}</label>
            <nz-tree-select [id]="idPrefix + 'Dept'" class="w-100" [name]="idPrefix + 'Dept'" [nzNodes]="deptNodes()" nzShowSearch
                            nzAllowClear [(ngModel)]="deptNo" [nzPlaceHolder]="'common.all' | translate:'Tất cả'"
                            [nzDropdownStyle]="{ 'max-height': '360px' }"></nz-tree-select>
          </div>
          <div class="col-md-3">
            <label class="form-label" [attr.for]="idPrefix + 'Keyword'">{{ 'hr.viewContractByInsert.title.EMPIDANDLOCALNAME' | translate:'Mã NV/Họ tên' }}</label>
            <input nz-input [id]="idPrefix + 'Keyword'" [name]="idPrefix + 'Keyword'" [(ngModel)]="keyword">
          </div>
        </ng-container>
        <div class="col-md-3">
          <label class="form-label" [attr.for]="idPrefix + 'Course'">{{ 'empsubject.subjectNm' | translate:'Tên đào tạo' }}</label>
          <input nz-input [id]="idPrefix + 'Course'" [name]="idPrefix + 'Course'" [(ngModel)]="courseName">
        </div>
        <div class="col-md-3">
          <label class="form-label" [attr.for]="idPrefix + 'Flag'">{{ flagLabelKey | translate:flagLabelFallback }}</label>
          <nz-select [id]="idPrefix + 'Flag'" class="w-100" [name]="idPrefix + 'Flag'" nzAllowClear [(ngModel)]="flag"
                     [nzPlaceHolder]="'common.all' | translate:'Tất cả'">
            <nz-option *ngFor="let f of flagOptions" [nzValue]="f.value" [nzLabel]="f.key | translate:f.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label" [attr.for]="idPrefix + 'Start'">{{ 'hrm.recruitManage.START_DATE1' | translate:'Ngày bắt đầu' }}</label>
          <nz-date-picker [id]="idPrefix + 'Start'" class="w-100" [name]="idPrefix + 'Start'" nzFormat="dd/MM/yyyy" [(ngModel)]="startDate"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label" [attr.for]="idPrefix + 'End'">{{ 'hrm.recruitManage.END_DATE1' | translate:'Ngày kết thúc' }}</label>
          <nz-date-picker [id]="idPrefix + 'End'" class="w-100" [name]="idPrefix + 'End'" nzFormat="dd/MM/yyyy" [(ngModel)]="endDate"></nz-date-picker>
        </div>
        <div class="col d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit" [id]="idPrefix + 'BtnSearch'">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tìm kiếm' }}
          </button>
          <ng-content></ng-content>
        </div>
      </form>
    </nz-card>
  `,
})
export class EduApplyFilterComponent implements OnInit {
  /** Tiền tố id phần tử (viết tắt tên trang). */
  @Input() idPrefix = 'eaf';
  /** Hiện điều kiện phòng ban + nhân viên. */
  @Input() showPerson = true;
  /** Mặc định thời gian = tháng hiện tại (bản gốc courseConfirm, makerSituation). */
  @Input() defaultMonth = false;
  @Input() flagOptions: EduApplyFlagOption[] = [];
  @Input() flagLabelKey = 'ess.trans.title.affirmStatus';
  @Input() flagLabelFallback = 'Trạng thái';
  @Output() search = new EventEmitter<EduApplySearch>();

  static readonly I18N_KEYS = ['hrm.empinfo.ORG_NAME_LOCAL', 'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'empsubject.subjectNm',
    'hrm.recruitManage.START_DATE1', 'hrm.recruitManage.END_DATE1', 'common.search', 'common.all'];

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  deptNo: string | null = null;
  keyword = '';
  courseName = '';
  flag: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(private readonly commonApi: EduCommonService, private readonly i18n: I18nService) {}

  ngOnInit(): void {
    this.i18n.loadKeys(EduApplyFilterComponent.I18N_KEYS);
    if (this.defaultMonth) {
      const now = new Date();
      this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    }
    if (this.showPerson) {
      this.commonApi.getAuthorizedDepartments().subscribe({
        next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
        error: () => this.deptNodes.set([]),
      });
    }
  }

  /** Điều kiện hiện tại (trang gọi khi tải lần đầu / sau khi cập nhật). */
  value(): EduApplySearch {
    return {
      deptNo: this.showPerson ? this.deptNo : null,
      keyword: this.showPerson ? this.keyword.trim() : '',
      courseName: this.courseName.trim(),
      flag: this.flag,
      startDate: formatDmy(this.startDate),
      endDate: formatDmy(this.endDate),
    };
  }

  emit(): void {
    this.search.emit(this.value());
  }
}
