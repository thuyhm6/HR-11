import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ApplyDetail, DetailRow, EssApplyInfoDto, EssFileDto } from './apply-info.model';
import { ApplyInfoService } from './apply-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.time', 'common.status', 'common.search', 'common.reset', 'common.loading', 'common.noData',
  'veai.filter.all', 'veai.filter.quickFilter', 'veai.perPage', 'veai.dataUnit',
  'veai.col.content', 'veai.col.distinction', 'veai.col.manager', 'veai.col.feedback', 'veai.col.error',
  'veai.type.personal', 'veai.type.address', 'veai.type.family', 'veai.type.emergency',
  'veai.type.workExp', 'veai.type.education', 'veai.type.qualification',
  'veai.distinction.new', 'veai.distinction.update',
  'veai.status.submitted', 'veai.status.approved', 'veai.status.rejected',
  'veai.detail.title', 'veai.detail.placeholder', 'veai.msg.loadFailed', 'veai.msg.noFile',
  'veai.field.mobile', 'veai.field.workPhone',
  'epi.field.fullName', 'epi.field.gender', 'epi.field.dob', 'epi.field.ethnicity', 'epi.field.nationality',
  'epi.field.maritalStatus', 'epi.field.weddingDate', 'epi.field.idcardNo', 'epi.field.idcardDate',
  'epi.field.issuingAuthority', 'epi.field.email', 'epi.field.phone', 'epi.field.religion', 'epi.field.education',
  'epi.field.addressType', 'epi.field.effectiveDate', 'epi.field.address', 'epi.field.relationship',
  'epi.field.familyPhone', 'epi.field.cpnyName', 'epi.field.department', 'epi.field.position',
  'epi.field.startDate', 'epi.field.endDate', 'epi.field.resignReason', 'epi.field.remark', 'epi.field.attachFiles',
  'qi.field.subject', 'qi.field.educLevel', 'qi.field.institution', 'qi.field.startDate', 'qi.field.endDate',
  'qi.field.qualName', 'qi.field.dateObtained', 'qi.field.qualCardNo', 'qi.field.qualInstitute',
  'qi.field.validityDate', 'qi.field.qualLevel',
  'wi.field.companyName',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

const TYPE_LABEL_KEYS: Record<string, [string, string]> = {
  PERSONAL: ['veai.type.personal', 'Thông tin cá nhân'],
  ADDRESS: ['veai.type.address', 'Loại địa chỉ'],
  FAMILY: ['veai.type.family', 'Thông tin gia đình'],
  EMERGENCY: ['veai.type.emergency', 'Người liên hệ khẩn cấp'],
  WORK_EXP: ['veai.type.workExp', 'Kinh nghiệm làm việc'],
  EDUCATION: ['veai.type.education', 'Trình độ học vấn'],
  QUALIFICATION: ['veai.type.qualification', 'Chứng chỉ'],
};

const ACTIVITY_LABEL_KEYS: Record<number, [string, string]> = {
  1: ['veai.status.submitted', 'Gửi'],
  2: ['veai.status.approved', 'Duyệt'],
  3: ['veai.status.rejected', 'Từ chối'],
};

const ACTIVITY_TAG_COLOR: Record<number, string> = { 1: 'default', 2: 'success', 3: 'error' };

const DISTINCTION_LABEL_KEYS: Record<number, [string, string]> = {
  1: ['veai.distinction.new', 'Thêm mới'],
  2: ['veai.distinction.update', 'Sửa'],
};

/**
 * Bản Angular của ess/empinfo/viewEssApplyInfo.html (Thymeleaf + jQuery) - Tra cứu chi tiết thay đổi
 * thông tin cá nhân (ESS) của chính nhân viên đang đăng nhập, dạng split-panel: danh sách bên trái +
 * chi tiết bên phải. Gọi lại nguyên API JSON đã có sẵn ở EssEmpInfoController (xem ApplyInfoService)
 * - không đổi backend. Backend không phân trang server-side cho trang này (bản gốc gọi length=9999
 * rồi tự phân trang/lọc nhanh ở client) nên giữ nguyên cách gọi, dùng nz-table (phân trang + lọc nhanh
 * client-side) thay cho bảng + phân trang tự viết bằng jQuery. Bộ lọc ngày dùng nz-range-picker thay 2
 * input daterangepicker riêng lẻ nối bằng "~" ở bản gốc - cùng là 1 date-range picker, chỉ đổi widget.
 * Nhãn các dòng chi tiết bên phải (veaiBuildRows bản gốc) đổi từ hardcode tiếng Việt sang tái sử dụng
 * đúng các key epi.field.x / qi.field.x đã dùng ở personal-info/work-info/qualification-info (cùng field
 * tên tương ứng) - chỉ thêm 2 key mới veai.field.mobile/workPhone cho 2 field chưa có key phù hợp.
 */
@Component({
  selector: 'app-apply-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzRadioModule,
    NzTagModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './apply-info.component.html',
  styleUrl: './apply-info.component.css',
})
export class ApplyInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly allData = signal<EssApplyInfoDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly filteredData = computed(() => {
    const kw = this.quickFilter.trim().toLowerCase();
    const rows = this.allData();
    if (!kw) return rows;
    return rows.filter((r) => {
      const label = this.typeLabel(r.applyTableType).toLowerCase();
      return (
        label.includes(kw) ||
        (r.managerInfo || '').toLowerCase().includes(kw) ||
        (r.callback || '').toLowerCase().includes(kw) ||
        (r.earror || '').toLowerCase().includes(kw)
      );
    });
  });

  readonly selectedRow = signal<EssApplyInfoDto | null>(null);
  readonly detailLoading = signal(false);
  readonly detailError = signal<string | null>(null);
  readonly detailRows = signal<DetailRow[]>([]);
  readonly detailFiles = signal<EssFileDto[]>([]);

  dateRange: Date[] | null = null;
  activityFilter = '1';
  quickFilter = '';
  pageSize = 50;

  constructor(
    private readonly api: ApplyInfoService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadData();
  }

  search(): void {
    this.loadData();
  }

  reset(): void {
    this.dateRange = null;
    this.activityFilter = '1';
    this.quickFilter = '';
    this.loadData();
  }

  typeLabel(type: string): string {
    const entry = TYPE_LABEL_KEYS[type];
    return entry ? this.i18n.t(entry[0], entry[1]) : type;
  }

  activityLabel(activity: number): string {
    const entry = ACTIVITY_LABEL_KEYS[activity];
    return entry ? this.i18n.t(entry[0], entry[1]) : String(activity);
  }

  activityColor(activity: number): string {
    return ACTIVITY_TAG_COLOR[activity] || 'default';
  }

  distinctionLabel(applyType: number): string {
    const entry = DISTINCTION_LABEL_KEYS[applyType];
    return entry ? this.i18n.t(entry[0], entry[1]) : '';
  }

  openDetail(row: EssApplyInfoDto): void {
    this.selectedRow.set(row);
    this.detailError.set(null);
    this.detailRows.set([]);
    this.detailFiles.set([]);
    this.detailLoading.set(true);
    this.api.getApplyDetail(row.applyNo, row.applyTableType).subscribe({
      next: (res) => {
        this.detailRows.set(this.buildDetailRows(row.applyTableType, res.detail ?? {}));
        this.detailFiles.set(res.files ?? []);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailError.set(this.i18n.t('veai.msg.loadFailed', 'Tải dữ liệu thất bại'));
        this.detailLoading.set(false);
      },
    });
  }

  private loadData(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selectedRow.set(null);
    this.detailRows.set([]);
    this.detailFiles.set([]);
    this.api
      .getMyApplyList({
        fromDate: this.formatYmd(this.dateRange?.[0] ?? null),
        toDate: this.formatYmd(this.dateRange?.[1] ?? null),
        activitySearch: this.activityFilter,
        draw: 1,
        start: 0,
        length: 9999,
      })
      .subscribe({
        next: (res) => {
          this.allData.set(res.data ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('veai.msg.loadFailed', 'Tải dữ liệu thất bại'));
          this.allData.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Xây danh sách dòng nhãn/giá trị cho panel chi tiết - tương ứng veaiBuildRows() bản gốc, giá trị
   *  giữ nguyên chuỗi thô từ backend (không format lại ngày) - đúng hành vi bản gốc. */
  private buildDetailRows(type: string, d: ApplyDetail): DetailRow[] {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    switch (type) {
      case 'PERSONAL':
        return [
          { label: t('epi.field.fullName', 'Họ tên'), value: d['name'] || d['lastname'] },
          { label: t('epi.field.gender', 'Giới tính'), value: d['sexName'] },
          { label: t('epi.field.dob', 'Ngày sinh'), value: d['dob'] },
          { label: t('epi.field.ethnicity', 'Dân tộc'), value: d['nationName'] },
          { label: t('epi.field.nationality', 'Quốc tịch'), value: d['nationalityName'] },
          { label: t('epi.field.maritalStatus', 'Tình trạng hôn nhân'), value: d['maritalStatusName'] },
          { label: t('epi.field.weddingDate', 'Ngày kết hôn'), value: d['weddingDate'] },
          { label: t('epi.field.idcardNo', 'CMND/CCCD'), value: d['idcardNo'] },
          { label: t('epi.field.idcardDate', 'Ngày cấp'), value: d['idcardStartDate'] },
          { label: t('epi.field.issuingAuthority', 'Nơi cấp'), value: d['issuingAuthority'] },
          { label: t('epi.field.email', 'Email'), value: d['email'] },
          { label: t('epi.field.phone', 'Điện thoại'), value: d['cellphone'] },
          { label: t('epi.field.religion', 'Tôn giáo'), value: d['religion'] },
          { label: t('epi.field.education', 'Trình độ học vấn'), value: d['finalDegreeName'] },
        ];
      case 'ADDRESS':
        return [
          { label: t('epi.field.addressType', 'Loại địa chỉ'), value: d['addressTypeName'] },
          { label: t('epi.field.effectiveDate', 'Ngày hiệu lực'), value: d['effectiveStartDate'] },
          { label: t('epi.field.address', 'Nội dung địa chỉ'), value: d['addressContent'] },
          { label: t('epi.field.nationality', 'Quốc tịch'), value: d['nationalityName'] },
        ];
      case 'FAMILY':
        return [
          { label: t('epi.field.fullName', 'Họ tên'), value: d['famName'] },
          { label: t('epi.field.relationship', 'Quan hệ'), value: d['famTypeName'] },
          { label: t('epi.field.dob', 'Ngày sinh'), value: d['famBorndate'] },
          { label: t('epi.field.idcardNo', 'CMND'), value: d['famIdcard'] },
          { label: t('epi.field.familyPhone', 'Điện thoại'), value: d['famFamilyPhone'] },
          { label: t('veai.field.mobile', 'Di động'), value: d['mobilePhone'] },
          { label: t('wi.field.companyName', 'Công ty'), value: d['famCompanyName'] },
          { label: t('epi.field.address', 'Địa chỉ'), value: d['famAddress'] },
          { label: t('epi.field.email', 'Email'), value: d['famEmail'] },
          { label: t('epi.field.gender', 'Giới tính'), value: d['gender'] },
        ];
      case 'EMERGENCY':
        return [
          { label: t('epi.field.fullName', 'Họ tên'), value: d['emerName'] },
          { label: t('epi.field.relationship', 'Loại liên hệ'), value: d['emerTypeName'] },
          { label: t('epi.field.phone', 'Điện thoại'), value: d['emerPhone'] },
          { label: t('veai.field.mobile', 'Di động'), value: d['emerCellphone'] },
          { label: t('veai.field.workPhone', 'Điện thoại cơ quan'), value: d['emerWorkPhone'] },
          { label: t('epi.field.email', 'Email'), value: d['emerEmail'] },
          { label: t('epi.field.address', 'Địa chỉ'), value: d['emerAddress'] },
        ];
      case 'WORK_EXP':
        return [
          { label: t('epi.field.cpnyName', 'Tên công ty'), value: d['cpnyName'] },
          { label: t('epi.field.department', 'Phòng ban'), value: d['deptName'] },
          { label: t('epi.field.position', 'Vị trí'), value: d['position'] },
          { label: t('epi.field.startDate', 'Ngày bắt đầu'), value: d['startDate'] || d['startMonth'] },
          { label: t('epi.field.endDate', 'Ngày kết thúc'), value: d['endDate'] || d['endMonth'] },
          { label: t('epi.field.resignReason', 'Lý do nghỉ'), value: d['resignReason'] },
          { label: t('epi.field.remark', 'Ghi chú'), value: d['remark'] },
        ];
      case 'EDUCATION':
        return [
          { label: t('qi.field.subject', 'Chuyên ngành'), value: d['subject'] },
          { label: t('qi.field.educLevel', 'Trình độ'), value: d['degreeName'] },
          { label: t('qi.field.institution', 'Trường'), value: d['institutionName'] },
          { label: t('qi.field.startDate', 'Ngày bắt đầu'), value: d['startDate'] || d['startDatess'] },
          { label: t('qi.field.endDate', 'Ngày kết thúc'), value: d['endDate'] || d['endDatess'] },
          { label: 'GPA', value: d['gpa'] },
          { label: t('epi.field.remark', 'Ghi chú'), value: d['remark'] || d['remarks'] },
        ];
      case 'QUALIFICATION':
        return [
          { label: t('qi.field.qualName', 'Tên chứng chỉ'), value: d['qualName'] },
          { label: t('qi.field.dateObtained', 'Ngày cấp'), value: d['dateObtained'] },
          { label: t('qi.field.qualCardNo', 'Số chứng chỉ'), value: d['qualCardNo'] },
          { label: t('qi.field.qualInstitute', 'Nơi cấp'), value: d['qualInstitute'] },
          { label: t('qi.field.validityDate', 'Ngày hết hạn'), value: d['validityDate'] },
          { label: t('qi.field.qualLevel', 'Cấp độ'), value: d['qualLevel'] },
          { label: t('epi.field.remark', 'Ghi chú'), value: d['qualRemark'] },
        ];
      default:
        return [];
    }
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
