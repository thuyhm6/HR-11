import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { classHourText } from './edu-basic-header.component';
import { formatDmy } from './edu-date.util';
import { EduTrainBasic, EduTrainBasicSearch, courseWithPeriod } from './edu-train.model';

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];

/**
 * Tìm kiếm + bảng danh sách thông tin cơ bản đào tạo - dùng chung cho các trang Thông tin cơ bản, Đánh giá học viên, Đánh giá
 * giảng viên, Kết quả đào tạo (bản gốc 4 trang JSP có cùng điều kiện ngày bắt đầu/kết thúc và cùng các cột khóa học).
 * Nút thao tác của từng trang truyền vào qua nội dung (ng-content); cột cuối riêng của từng trang qua extraColumnTpl.
 * Phân trang + lọc nhanh + sắp xếp phía client (thay jQuery DataTables). Dòng tô xanh = highlight(row) (bản gốc tô màu
 * khóa đã được đánh giá).
 */
@Component({
  selector: 'app-edu-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzInputModule, NzButtonModule, NzDatePickerModule,
    NzAlertModule, TranslatePipe],
  template: `
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="emitSearch()">
        <div class="col-md-3" *ngIf="showCourseName">
          <label class="form-label" [attr.for]="idPrefix + 'SearchCourse'">{{ 'empsubject.subjectNm' | translate:'Tên đào tạo' }}</label>
          <input nz-input [id]="idPrefix + 'SearchCourse'" [name]="idPrefix + 'SearchCourse'" [(ngModel)]="courseName">
        </div>
        <div class="col-md-2">
          <label class="form-label" [attr.for]="idPrefix + 'SearchStart'">{{ 'hrm.recruitManage.START_DATE1' | translate:'Ngày bắt đầu' }}</label>
          <nz-date-picker [id]="idPrefix + 'SearchStart'" class="w-100" [name]="idPrefix + 'SearchStart'" nzFormat="dd/MM/yyyy" [(ngModel)]="startDate"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label" [attr.for]="idPrefix + 'SearchEnd'">{{ 'hrm.recruitManage.END_DATE1' | translate:'Ngày kết thúc' }}</label>
          <nz-date-picker [id]="idPrefix + 'SearchEnd'" class="w-100" [name]="idPrefix + 'SearchEnd'" nzFormat="dd/MM/yyyy" [(ngModel)]="endDate"></nz-date-picker>
        </div>
        <div class="col d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit" [id]="idPrefix + 'BtnSearch'">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tìm kiếm' }}
          </button>
          <ng-content></ng-content>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage" nzType="error" [nzMessage]="errorMessage" class="mb-3"></nz-alert>
      <div class="d-flex justify-content-end mb-2">
        <input nz-input class="ecl-quick-filter" [id]="idPrefix + 'QuickFilter'" [name]="idPrefix + 'QuickFilter'"
               [ngModel]="quickFilter()" (ngModelChange)="onQuickFilter($event)"
               [placeholder]="'common.quickFilter' | translate:'Lọc nhanh'">
      </div>
      <nz-table #eclTable [nzData]="filteredRows()" [nzLoading]="loading" nzSize="small"
                [(nzPageIndex)]="pageIndex" [(nzPageSize)]="pageSize" [nzPageSizeOptions]="pageSizeOptions"
                [nzShowSizeChanger]="true" [nzShowTotal]="eclTotalTpl"
                [nzScroll]="{ x: '1000px', y: 'calc(100vh - 420px)' }">
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="170px" [nzSortFn]="sortType">{{ 'edu.systemManager.PEIXUNLEIXING.a' | translate:'Loại hình' }}</th>
            <th [nzSortFn]="sortCourse">{{ 'edu.trainArchives.KECHENGMINGCHENGQICI.a' | translate:'Tên khóa đào tạo' }}</th>
            <th *ngIf="showTrainForm" nzWidth="150px">{{ 'edu.trainBasicInformation.PEIXUNFANGSHI.a' | translate:'Hình thức đào tạo' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'edu.planManager.PEIXUNKESHI.a' | translate:'Thời lượng' }}</th>
            <th class="text-center" nzWidth="200px" [nzSortFn]="sortStart">{{ 'edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a' | translate:'Thời gian' }}</th>
            <th *ngIf="extraColumnTpl" class="text-center" nzWidth="170px">{{ extraColumnTitle }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading && filteredRows().length === 0">
            <td [attr.colspan]="colspan" class="text-center text-muted">{{ 'common.noData' | translate:'Không có dữ liệu' }}</td>
          </tr>
          <tr *ngFor="let row of eclTable.data; let i = index" class="ecl-row"
              [class.ecl-row-selected]="selected?.basicNo === row.basicNo"
              (click)="rowSelect.emit(row)" (dblclick)="rowDblClick.emit(row)">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td>{{ row.trainTypeCodeName }}</td>
            <td [class.ecl-highlight]="highlight ? highlight(row) : false">
              <a *ngIf="courseClickable; else eclCourseText" class="ecl-link" (click)="$event.stopPropagation(); courseClick.emit(row)">{{ courseTitle(row) }}</a>
              <ng-template #eclCourseText>{{ courseTitle(row) }}</ng-template>
            </td>
            <td *ngIf="showTrainForm">{{ row.trainFormCodeName }}</td>
            <td class="text-center">{{ hourText(row) }}</td>
            <td class="text-center">{{ row.impleStartDate }} ~ {{ row.impleEndDate }}</td>
            <td *ngIf="extraColumnTpl" class="text-center" (click)="$event.stopPropagation()">
              <ng-container *ngTemplateOutlet="extraColumnTpl; context: { $implicit: row }"></ng-container>
            </td>
          </tr>
        </tbody>
        <ng-template #eclTotalTpl let-total>{{ 'common.totalRows' | translate:'Tổng số dòng:' }} {{ total }}</ng-template>
      </nz-table>
    </nz-card>
  `,
  styles: [`
    .ecl-row { cursor: pointer; }
    .ecl-row.ecl-row-selected > td, .ecl-row.ecl-row-selected:hover > td { background: #e6f4ff; }
    .ecl-link { color: #1677ff; cursor: pointer; }
    .ecl-highlight, .ecl-highlight .ecl-link { color: #1d39c4; font-weight: 600; }
    .ecl-quick-filter { max-width: 260px; }
  `],
})
export class EduCourseListComponent implements OnChanges {
  /** Tiền tố id phần tử - mỗi trang truyền tiền tố riêng để không trùng id. */
  @Input({ required: true }) idPrefix!: string;
  @Input() rows: EduTrainBasic[] = [];
  @Input() loading = false;
  @Input() errorMessage: string | null = null;
  @Input() selected: EduTrainBasic | null = null;
  @Input() showCourseName = false;
  @Input() showTrainForm = false;
  @Input() courseClickable = false;
  @Input() highlight: ((row: EduTrainBasic) => boolean) | null = null;
  @Input() extraColumnTitle = '';
  @Input() extraColumnTpl: TemplateRef<{ $implicit: EduTrainBasic }> | null = null;
  @Output() search = new EventEmitter<EduTrainBasicSearch>();
  @Output() rowSelect = new EventEmitter<EduTrainBasic>();
  @Output() rowDblClick = new EventEmitter<EduTrainBasic>();
  @Output() courseClick = new EventEmitter<EduTrainBasic>();

  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  courseName = '';
  startDate: Date | null = null;
  endDate: Date | null = null;

  readonly quickFilter = signal('');
  private readonly rowList = signal<EduTrainBasic[]>([]);
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rowList();
    return this.rowList().filter((r) =>
      [r.trainTypeCodeName, r.courseNameCode, r.trainFormCodeName, r.impleStartDate, r.impleEndDate]
        .some((v) => (v ?? '').toLowerCase().includes(kw)));
  });

  readonly sortType = (a: EduTrainBasic, b: EduTrainBasic) => (a.trainTypeCodeName ?? '').localeCompare(b.trainTypeCodeName ?? '');
  readonly sortCourse = (a: EduTrainBasic, b: EduTrainBasic) => (a.courseNameCode ?? '').localeCompare(b.courseNameCode ?? '');
  readonly sortStart = (a: EduTrainBasic, b: EduTrainBasic) => dmyKey(a.impleStartDate).localeCompare(dmyKey(b.impleStartDate));

  constructor(private readonly i18n: I18nService) {}

  get colspan(): number {
    return 5 + (this.showTrainForm ? 1 : 0) + (this.extraColumnTpl ? 1 : 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rows']) {
      this.rowList.set(this.rows ?? []);
      this.pageIndex = 1;
    }
  }

  emitSearch(): void {
    this.search.emit({ courseName: this.courseName.trim(), startDate: formatDmy(this.startDate), endDate: formatDmy(this.endDate) });
  }

  onQuickFilter(value: string): void {
    this.quickFilter.set(value);
    this.pageIndex = 1;
  }

  courseTitle(row: EduTrainBasic): string {
    return courseWithPeriod((k, f) => this.i18n.t(k, f), row.courseNameCode, row.periodTime);
  }

  hourText(row: EduTrainBasic): string {
    return classHourText(this.i18n, row.impleClassHour, row.impleClassUnit);
  }
}

/** DD/MM/YYYY -> YYYYMMDD để sắp xếp đúng thứ tự ngày. */
function dmyKey(value: string | null | undefined): string {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value ?? '');
  return m ? `${m[3]}${m[2]}${m[1]}` : '';
}
