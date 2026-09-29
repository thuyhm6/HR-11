import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { classHourText } from '../edu-common/edu-basic-header.component';
import { EduFile } from '../edu-common/edu-common.model';
import { EduCommonService } from '../edu-common/edu-common.service';
import { formatDmy } from '../edu-common/edu-date.util';
import { writeExcel } from '../edu-common/edu-excel.util';
import { courseWithPeriod } from '../edu-common/edu-train.model';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import { EduTrainArchive } from './edu-train-archives.model';
import { EduTrainArchivesService } from './edu-train-archives.service';

/** Key message.properties dùng trong trang - dùng lại key sẵn có của bản JSP gốc (trainArchives.jsp). */
const I18N_KEYS = [
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'hr.viewPersonalInfo.title.DEPTNAME', 'empsubject.subjectNm',
  'edu.trainArchives.SHISHIKAISHIRIQI.a', 'edu.trainArchives.SHISHIJIESHURIQI.a', 'edu.trainArchives.PEIXUNNEIRONG.a',
  'inct.salesman.empNo', 'pa.title.message.empHrmName', 'empsubject.sexName', 'hrm.empinfo.ORG_NAME_LOCAL',
  'hrm.contract.Rank', 'ess.empInfo.date_of_agency', 'edu.trainArchives.KECHENGMINGCHENGQICI.a',
  'edu.planManager.PEIXUNNEIRONG.a', 'edu.trainArchives.SHISHIQIJIAN.a', 'edu.planManager.PEIXUNKESHI.a',
  'edu.planManager.ZHUGUANBUMEN.a', 'empsubject.eduRm', 'edu.trainArchives.ZONGHECHENGJI.a',
  'edu.trainArchives.PEIXUNFEI.a', 'edu.trainArchives.BAOGAOSHU.a', 'edu.planManager.QI.a',
  'ar.alert.message.excelimport.title.di', 'ar.viewsummaryparameteritem.title.hour', 'display.mutual.month',
  'ar.viewsummaryparameteritem.title.day', 'edu.trainArchives.history',
  'common.search', 'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.quickFilter',
  'common.exportExcel', 'common.all',
];

const PAGE_SIZE_OPTIONS = [50, 100, 200, 500, 1000];

/**
 * Bản Angular của /edu/traineducation/trainArchives (JSP + DWZ, dự án Hanwha_HTSV) - hồ sơ đào tạo theo học viên: tìm theo
 * mã / tên nhân viên, phòng ban (gồm phòng ban con), tên khóa học, thời gian thực hiện (mặc định tháng hiện tại), nội dung;
 * hiển thị điểm tổng hợp, chi phí, báo cáo đào tạo (file); xuất Excel .xlsx (bản gốc autoExcel SQL 164).
 */
@Component({
  selector: 'app-edu-train-archives',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzInputModule, NzButtonModule, NzAlertModule,
    NzDatePickerModule, NzTreeSelectModule, NzTagModule, TranslatePipe],
  templateUrl: './edu-train-archives.component.html',
  styleUrl: './edu-train-archives.component.css',
})
export class EduTrainArchivesComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly rows = signal<EduTrainArchive[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly quickFilter = signal('');
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) => [r.empId, r.localName, r.deptName, r.postGradeName, r.courseNameCode, r.trainContent,
      r.trainAddress, r.departManaCodeName].some((v) => (v ?? '').toLowerCase().includes(kw)));
  });

  pageIndex = 1;
  pageSize = PAGE_SIZE_OPTIONS[0];
  searchKeyword = '';
  searchDeptNo: string | null = null;
  searchCourseName = '';
  searchStart: Date | null;
  searchEnd: Date | null;
  searchTrainContent = '';

  constructor(
    private readonly api: EduTrainArchivesService,
    private readonly commonApi: EduCommonService,
    readonly i18n: I18nService,
  ) {
    // Bản gốc: không nhập thời gian thì lấy từ ngày đầu đến ngày cuối tháng hiện tại
    const now = new Date();
    this.searchStart = new Date(now.getFullYear(), now.getMonth(), 1);
    this.searchEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.commonApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptNodes.set([]),
    });
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      keyword: this.searchKeyword.trim(),
      deptNo: this.searchDeptNo,
      courseName: this.searchCourseName.trim(),
      startDate: formatDmy(this.searchStart),
      endDate: formatDmy(this.searchEnd),
      trainContent: this.searchTrainContent.trim(),
    }).subscribe({
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

  courseTitle(r: EduTrainArchive): string {
    return courseWithPeriod((k, f) => this.i18n.t(k, f), r.courseNameCode, r.periodTime);
  }

  classHour(r: EduTrainArchive): string {
    return classHourText(this.i18n, r.impleClassHour, r.impleClassUnit);
  }

  period(r: EduTrainArchive): string {
    return `${r.impleStartDate ?? ''} ~ ${r.impleEndDate ?? ''}`;
  }

  downloadUrl(f: EduFile): string {
    return this.commonApi.downloadUrl(f.fileNo);
  }

  /** Bản gốc: autoExcel SQL 164 - danh sách hồ sơ theo điều kiện tìm kiếm. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('inct.salesman.empNo', 'Mã nhân viên'),
      this.i18n.t('pa.title.message.empHrmName', 'Họ tên'),
      this.i18n.t('empsubject.sexName', 'Giới tính'),
      this.i18n.t('hrm.empinfo.ORG_NAME_LOCAL', 'Phòng ban'),
      this.i18n.t('hrm.contract.Rank', 'Chức vụ'),
      this.i18n.t('ess.empInfo.date_of_agency', 'Ngày vào công ty'),
      this.i18n.t('edu.trainArchives.KECHENGMINGCHENGQICI.a', 'Tên khóa học (Kỳ)'),
      this.i18n.t('edu.planManager.PEIXUNNEIRONG.a', 'Nội dung'),
      this.i18n.t('edu.trainArchives.SHISHIQIJIAN.a', 'Thời gian'),
      this.i18n.t('edu.planManager.PEIXUNKESHI.a', 'Thời lượng'),
      this.i18n.t('edu.planManager.ZHUGUANBUMEN.a', 'Bộ phận quản lý'),
      this.i18n.t('empsubject.eduRm', 'Địa điểm đào tạo'),
      this.i18n.t('edu.trainArchives.ZONGHECHENGJI.a', 'Điểm tổng hợp'),
      this.i18n.t('edu.trainArchives.PEIXUNFEI.a', 'Phí đào tạo'),
      this.i18n.t('edu.trainArchives.BAOGAOSHU.a', 'Báo cáo'),
    ];
    const data = this.filteredRows().map((r, i) => [i + 1, r.empId, r.localName ?? '', r.sexName ?? '', r.deptName ?? '',
      r.postGradeName ?? '', r.dateStarted ?? '', this.courseTitle(r), r.trainContent ?? '', this.period(r), this.classHour(r),
      r.departManaCodeName ?? '', r.trainAddress ?? '', r.evaResult ?? '', r.allCost ?? '',
      (r.files ?? []).map((f) => f.fileName).join(', ')]);
    writeExcel('trainArchives', headers, data);
  }
}
