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
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ApplyDetail, CompareRow, EssFileDto, HrmApproveApplyDto } from './hrm-approve-apply-info.model';
import { HrmApproveApplyInfoService } from './hrm-approve-apply-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.time', 'common.status', 'common.search', 'common.reset', 'common.loading', 'common.noData',
  'common.loadFail', 'common.totalRows', 'common.confirm',
  'hmai.filter.keyword', 'hmai.filter.all',
  'hmai.col.empCode', 'hmai.col.empName', 'hmai.col.dept', 'hmai.col.type', 'hmai.col.applyDate',
  'hmai.col.status', 'hmai.col.distinction', 'hmai.col.action',
  'hmai.type.personal', 'hmai.type.address', 'hmai.type.family', 'hmai.type.emergency',
  'hmai.type.workExp', 'hmai.type.education', 'hmai.type.qualification',
  'hmai.distinction.new', 'hmai.distinction.update',
  'hmai.status.submitted', 'hmai.status.approved', 'hmai.status.rejected',
  'hmai.detail.title', 'hmai.detail.newData', 'hmai.detail.originalData', 'hmai.detail.noOriginal',
  'hmai.detail.placeholder',
  'hmai.btn.approve', 'hmai.btn.reject',
  'hmai.msg.approveConfirm', 'hmai.msg.rejectConfirm', 'hmai.msg.approveSuccess', 'hmai.msg.rejectSuccess',
  'hmai.msg.actionFailed', 'hmai.msg.loadFailed', 'hmai.msg.onlyPending',
  'veai.msg.noFile', 'veai.field.mobile', 'veai.field.workPhone',
  'epi.field.fullName', 'epi.field.gender', 'epi.field.dob', 'epi.field.ethnicity', 'epi.field.nationality',
  'epi.field.maritalStatus', 'epi.field.weddingDate', 'epi.field.idcardNo', 'epi.field.idcardDate',
  'epi.field.issuingAuthority', 'epi.field.email', 'epi.field.emailSecond', 'epi.field.phone',
  'epi.field.companyPhone', 'epi.field.address', 'epi.field.houseTp', 'epi.field.religion',
  'epi.field.politicalStatus', 'epi.field.education', 'epi.field.militaryService', 'epi.field.disability',
  'epi.field.addressType', 'epi.field.effectiveDate', 'epi.field.relationship', 'epi.field.familyPhone',
  'epi.field.cpnyName', 'epi.field.department', 'epi.field.position', 'epi.field.startDate', 'epi.field.endDate',
  'epi.field.resignReason', 'epi.field.remark', 'epi.field.attachFiles',
  'qi.field.subject', 'qi.field.educLevel', 'qi.field.institution', 'qi.field.qualName', 'qi.field.dateObtained',
  'qi.field.qualCardNo', 'qi.field.qualInstitute', 'qi.field.validityDate', 'qi.field.qualLevel',
  'wi.field.companyName', 'hrm.empinfo.educ.siteCountry',
];

const PAGE_SIZE_OPTIONS = [20, 50, 100, 200];

const TYPE_LABEL_KEYS: Record<string, [string, string]> = {
  PERSONAL: ['hmai.type.personal', 'Thông tin cá nhân'],
  ADDRESS: ['hmai.type.address', 'Địa chỉ'],
  FAMILY: ['hmai.type.family', 'Thông tin gia đình'],
  EMERGENCY: ['hmai.type.emergency', 'Liên hệ khẩn cấp'],
  WORK_EXP: ['hmai.type.workExp', 'Kinh nghiệm làm việc'],
  EDUCATION: ['hmai.type.education', 'Học vấn'],
  QUALIFICATION: ['hmai.type.qualification', 'Chứng chỉ'],
};

const ACTIVITY_LABEL_KEYS: Record<number, [string, string]> = {
  1: ['hmai.status.submitted', 'Chờ duyệt'],
  2: ['hmai.status.approved', 'Đã duyệt'],
  3: ['hmai.status.rejected', 'Đã từ chối'],
};

const ACTIVITY_TAG_COLOR: Record<number, string> = { 1: 'warning', 2: 'success', 3: 'error' };

const DISTINCTION_LABEL_KEYS: Record<number, [string, string]> = {
  1: ['hmai.distinction.new', 'Thêm mới'],
  2: ['hmai.distinction.update', 'Cập nhật'],
};

/**
 * Bản Angular của hrm/approve/viewEssApplyInfo.html (Thymeleaf + jQuery DataTables) - Phê duyệt (quản
 * lý) các yêu cầu thay đổi thông tin cá nhân của nhân viên, dạng split-panel: danh sách bên trái + chi
 * tiết so sánh (mới/gốc) bên phải + nút Phê duyệt/Từ chối. Gọi lại nguyên API JSON đã có sẵn ở
 * HrmApproveController (xem HrmApproveApplyInfoService) - không đổi backend. Bản gốc dùng DataTables
 * serverSide=true (draw/start/length) nên giữ nguyên cơ chế phân trang server-side qua
 * nzFrontPagination=false (giống ContractInfoListComponent) thay vì tải hết rồi phân trang client như
 * ApplyInfoComponent (trang chị em phía ESS, backend không phân trang thật cho trang đó).
 *
 * Bảng so sánh chi tiết (buildCompareRows) tái sử dụng đúng các key epi.field.x/qi.field.x đã dùng ở
 * ApplyInfoComponent cho các field trùng tên; chỉ thêm 1 key mới epi.field.emailSecond (chưa có key phù
 * hợp). Nhãn "Địa chỉ thường trú"/"Nơi đăng ký HK" ở bản gốc dùng lại epi.field.address/epi.field.houseTp
 * (rút gọn, đủ rõ nghĩa trong ngữ cảnh phần "Thông tin cá nhân") thay vì tạo thêm key riêng.
 */
@Component({
  selector: 'app-hrm-approve-apply-info',
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
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './hrm-approve-apply-info.component.html',
  styleUrl: './hrm-approve-apply-info.component.css',
})
export class HrmApproveApplyInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrmApproveApplyDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);

  dateRange: Date[] | null = null;
  activityFilter = '1';
  keyword = '';

  pageIndex = 1;
  pageSize = 50;

  readonly selectedRow = signal<HrmApproveApplyDto | null>(null);
  readonly detailLoading = signal(false);
  readonly detailError = signal<string | null>(null);
  readonly detailApplyData = signal<ApplyDetail | null>(null);
  readonly detailOriginalData = signal<ApplyDetail | null>(null);
  readonly detailFiles = signal<EssFileDto[]>([]);
  readonly actionLoading = signal(false);

  readonly compareRows = computed<CompareRow[]>(() => {
    const row = this.selectedRow();
    const d = this.detailApplyData();
    if (!row || !d) return [];
    return this.buildCompareRows(row.applyTableType, d, this.detailOriginalData());
  });

  constructor(
    private readonly api: HrmApproveApplyInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  reset(): void {
    this.dateRange = null;
    this.activityFilter = '1';
    this.keyword = '';
    this.search();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
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

  // ==================== Danh sách (server-side) ====================

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.resetDetail();
    this.api
      .getApplyList({
        fromDate: this.formatYmd(this.dateRange?.[0] ?? null),
        toDate: this.formatYmd(this.dateRange?.[1] ?? null),
        activitySearch: this.activityFilter,
        keyword: this.keyword.trim(),
        draw: this.pageIndex,
        start: (this.pageIndex - 1) * this.pageSize,
        length: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          if (res.error) {
            this.errorMessage.set(res.error);
            this.rows.set([]);
            this.recordsTotal.set(0);
          } else {
            this.rows.set(res.data ?? []);
            this.recordsTotal.set(res.recordsFiltered ?? 0);
          }
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('hmai.msg.loadFailed', 'Không thể tải dữ liệu'));
          this.rows.set([]);
          this.recordsTotal.set(0);
          this.loading.set(false);
        },
      });
  }

  // ==================== Chi tiết (so sánh dữ liệu mới / gốc) ====================

  openDetail(row: HrmApproveApplyDto): void {
    this.selectedRow.set(row);
    this.detailError.set(null);
    this.detailApplyData.set(null);
    this.detailOriginalData.set(null);
    this.detailFiles.set([]);
    this.detailLoading.set(true);
    this.api.getApplyDetail(row.applyNo, row.applyTableType).subscribe({
      next: (res) => {
        if (res.success) {
          this.detailApplyData.set(res.applyData ?? {});
          this.detailOriginalData.set(res.originalData ?? null);
          this.detailFiles.set(res.files ?? []);
        } else {
          this.detailError.set(this.i18n.t('hmai.msg.loadFailed', 'Không thể tải dữ liệu'));
        }
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailError.set(this.i18n.t('hmai.msg.loadFailed', 'Không thể tải dữ liệu'));
        this.detailLoading.set(false);
      },
    });
  }

  resetDetail(): void {
    this.selectedRow.set(null);
    this.detailError.set(null);
    this.detailApplyData.set(null);
    this.detailOriginalData.set(null);
    this.detailFiles.set([]);
  }

  // ==================== Phê duyệt / Từ chối ====================

  confirmApprove(): void {
    const row = this.selectedRow();
    if (!row) return;
    if (row.activity !== 1) {
      this.message.warning(this.i18n.t('hmai.msg.onlyPending', 'Chỉ có thể phê duyệt/từ chối yêu cầu đang chờ duyệt'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: this.i18n.t('hmai.msg.approveConfirm', 'Bạn có chắc chắn muốn phê duyệt yêu cầu này không?'),
      nzOnOk: () => this.runAction('approve', row),
    });
  }

  confirmReject(): void {
    const row = this.selectedRow();
    if (!row) return;
    if (row.activity !== 1) {
      this.message.warning(this.i18n.t('hmai.msg.onlyPending', 'Chỉ có thể phê duyệt/từ chối yêu cầu đang chờ duyệt'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: this.i18n.t('hmai.msg.rejectConfirm', 'Bạn có chắc chắn muốn từ chối yêu cầu này không?'),
      nzOnOk: () => this.runAction('reject', row),
    });
  }

  private runAction(action: 'approve' | 'reject', row: HrmApproveApplyDto): void {
    this.actionLoading.set(true);
    const request$ = action === 'approve' ? this.api.approve(row.applyNo, row.applyTableType) : this.api.reject(row.applyNo, row.applyTableType);
    request$.subscribe({
      next: (res) => {
        this.actionLoading.set(false);
        if (res.success) {
          this.message.success(
            action === 'approve'
              ? this.i18n.t('hmai.msg.approveSuccess', 'Phê duyệt thành công')
              : this.i18n.t('hmai.msg.rejectSuccess', 'Từ chối thành công'),
          );
          this.resetDetail();
          this.loadPage();
        } else {
          this.message.error(res.message || this.i18n.t('hmai.msg.actionFailed', 'Thao tác thất bại'));
        }
      },
      error: () => {
        this.actionLoading.set(false);
        this.message.error(this.i18n.t('hmai.msg.actionFailed', 'Thao tác thất bại'));
      },
    });
  }

  // ==================== Xây bảng so sánh - tương ứng hmaiBuildRows/hmaiOrigBuildRows bản gốc ====================

  private buildCompareRows(type: string, d: ApplyDetail, o: ApplyDetail | null): CompareRow[] {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const ov = o || {};
    const row = (labelKey: string, fallback: string, newVal: unknown, origVal: unknown): CompareRow => {
      const nv = newVal == null ? '' : String(newVal);
      const ovv = origVal == null ? '' : String(origVal);
      return { label: t(labelKey, fallback), newVal: nv, origVal: ovv, changed: nv.trim() !== ovv.trim() };
    };

    switch (type) {
      case 'PERSONAL':
        return [
          row('epi.field.gender', 'Giới tính', d['sexName'], ov['sexCode']),
          row('epi.field.dob', 'Ngày sinh', d['dob'], ov['dob']),
          row('epi.field.ethnicity', 'Dân tộc', d['nationName'], ov['nationCode']),
          row('epi.field.nationality', 'Quốc tịch', d['nationalityName'], ov['nationalityCode']),
          row('epi.field.maritalStatus', 'Tình trạng hôn nhân', d['maritalStatusName'], ov['maritalStatusCode']),
          row('epi.field.weddingDate', 'Ngày kết hôn', d['weddingDate'], ov['weddingDate']),
          row('epi.field.idcardNo', 'CMND/CCCD', d['idcardNo'], ov['idcardNo']),
          row('epi.field.idcardDate', 'Ngày cấp CMND', d['idcardStartDate'], ov['idcardStartDate']),
          row('epi.field.issuingAuthority', 'Nơi cấp', d['issuingAuthority'], ov['issuingAuthority']),
          row('epi.field.email', 'Email cá nhân', d['email'], ov['email']),
          row('epi.field.emailSecond', 'Email thứ 2', d['emailSecond'], ov['emailSecond']),
          row('epi.field.phone', 'ĐT di động', d['cellphone'], ov['cellphone']),
          row('epi.field.companyPhone', 'ĐT công ty', d['companyPhone'], ov['companyPhone']),
          row('epi.field.address', 'Địa chỉ thường trú', d['homeAddress'], ov['homeAddress']),
          row('epi.field.houseTp', 'Nơi đăng ký hộ khẩu', d['regPlace'], ov['regPlace']),
          row('epi.field.religion', 'Tôn giáo', d['religion'], ov['religion']),
          row('epi.field.politicalStatus', 'Quan điểm chính trị', d['politicalOutlook'], ov['politicalOutlook']),
          row('epi.field.education', 'Trình độ học vấn', d['finalDegreeName'], ov['finalDegreeCode']),
          row('epi.field.militaryService', 'Nghĩa vụ quân sự', d['armyOrNot'], ov['armyOrNot']),
          row('epi.field.disability', 'Người khuyết tật', d['obstacleOrNot'], ov['obstacleOrNot']),
        ];
      case 'ADDRESS':
        return [
          row('epi.field.addressType', 'Loại địa chỉ', d['addressTypeName'], ov['addressType']),
          row('epi.field.effectiveDate', 'Ngày hiệu lực', d['effectiveStartDate'], ov['effectiveStartDate']),
          row('epi.field.address', 'Nội dung địa chỉ', d['addressContent'], ov['addressContent']),
          row('epi.field.nationality', 'Quốc tịch', d['nationalityName'], ov['nationality']),
        ];
      case 'FAMILY':
        return [
          row('epi.field.relationship', 'Quan hệ', d['famTypeName'], ov['famTypeCode']),
          row('epi.field.fullName', 'Họ tên', d['famName'], ov['famName']),
          row('epi.field.dob', 'Ngày sinh', d['famBorndate'], ov['famBorndate']),
          row('epi.field.idcardNo', 'CMND/CCCD', d['famIdcard'], ov['famIdcard']),
          row('epi.field.familyPhone', 'Điện thoại', d['famFamilyPhone'], ov['famFamilyPhone']),
          row('epi.field.gender', 'Giới tính', d['gender'], ov['gender']),
          row('wi.field.companyName', 'Công ty', d['famCompanyName'], ov['famCompanyName']),
          row('epi.field.address', 'Địa chỉ', d['famAddress'], ov['famAddress']),
          row('epi.field.email', 'Email', d['famEmail'], ov['famEmail']),
          row('epi.field.remark', 'Ghi chú', d['note'], ov['note']),
        ];
      case 'EMERGENCY':
        return [
          row('epi.field.fullName', 'Họ tên', d['emerName'], ov['emerName']),
          row('epi.field.relationship', 'Loại liên hệ', d['emerTypeName'], ov['emerTypeCode']),
          row('epi.field.phone', 'Điện thoại', d['emerPhone'], ov['emerPhone']),
          row('veai.field.mobile', 'Di động', d['emerCellphone'], ov['emerCellphone']),
          row('veai.field.workPhone', 'Điện thoại cơ quan', d['emerWorkPhone'], ov['emerWorkPhone']),
          row('epi.field.email', 'Email', d['emerEmail'], ov['emerEmail']),
          row('epi.field.address', 'Địa chỉ', d['emerAddress'], ov['emerAddress']),
        ];
      case 'WORK_EXP':
        return [
          row('epi.field.cpnyName', 'Tên công ty', d['cpnyName'], ov['cpnyName']),
          row('epi.field.department', 'Phòng ban', d['deptName'], ov['deptName']),
          row('epi.field.position', 'Vị trí', d['position'], ov['position']),
          row('epi.field.startDate', 'Ngày bắt đầu', d['startDate'] || d['startMonth'], ov['startDate']),
          row('epi.field.endDate', 'Ngày kết thúc', d['endDate'] || d['endMonth'], ov['endDate']),
          row('epi.field.phone', 'ĐT liên hệ', d['tel'], ov['tel']),
          row('epi.field.resignReason', 'Lý do nghỉ', d['resignReason'], ov['resignReason']),
          row('epi.field.remark', 'Ghi chú', d['remark'], ov['remark']),
        ];
      case 'EDUCATION':
        return [
          row('qi.field.subject', 'Chuyên ngành', d['subject'], ov['subject']),
          row('qi.field.educLevel', 'Trình độ', d['degreeName'], ov['degreeCode']),
          row('qi.field.institution', 'Tên trường', d['institutionName'], ov['institutionName']),
          row('epi.field.startDate', 'Ngày bắt đầu', d['startDate'], ov['startDate']),
          row('epi.field.endDate', 'Ngày kết thúc', d['endDate'], ov['endDate']),
          row('hrm.empinfo.educ.siteCountry', 'Quốc gia', d['siteCountry'], ov['siteCountry']),
          { label: 'GPA', newVal: d['gpa'] ?? '', origVal: '', changed: false },
          row('epi.field.remark', 'Ghi chú', d['remarks'] || d['remark'], ov['remarks']),
        ];
      case 'QUALIFICATION':
        return [
          row('qi.field.qualName', 'Tên chứng chỉ', d['qualName'], ov['qualName']),
          row('qi.field.dateObtained', 'Ngày cấp', d['dateObtained'], ov['dateObtained']),
          row('qi.field.qualCardNo', 'Số chứng chỉ', d['qualCardNo'], ov['qualCardNo']),
          row('qi.field.qualInstitute', 'Nơi cấp', d['qualInstitute'], ov['qualInstitute']),
          row('qi.field.validityDate', 'Ngày hết hạn', d['validityDate'], ov['validityDate']),
          row('qi.field.qualLevel', 'Cấp độ', d['qualLevel'], ov['qualLevel']),
          row('epi.field.remark', 'Ghi chú', d['qualRemark'], ov['qualRemark']),
        ];
      default:
        return [];
    }
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
