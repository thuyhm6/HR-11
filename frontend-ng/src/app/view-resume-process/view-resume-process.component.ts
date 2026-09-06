import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { OrgResumeInfoDto } from '../view-resume-list/view-resume-list.model';
import { ViewResumeProcessService } from './view-resume-process.service';

/** Các key message.properties dùng trong trang này - namespace "orgResumeProcess" dành riêng cho trang
 *  này, "common" dùng chung với các trang khác - tải trước 1 lần ở ngOnInit. 4 tên nhóm bước xử lý
 *  (groupEditOrgTree/groupMakeActions/groupOrgHistory/groupConfirmation) giữ nguyên tiếng Anh giống hệt
 *  bản Thymeleaf gốc (vốn không có cơ chế đa ngôn ngữ cho 4 nhãn này - hiển thị y hệt ở mọi locale). */
const I18N_KEYS = [
  'orgResumeProcess.versionName', 'orgResumeProcess.selectPlaceholder', 'orgResumeProcess.execute',
  'orgResumeProcess.groupEditOrgTree', 'orgResumeProcess.groupMakeActions',
  'orgResumeProcess.groupOrgHistory', 'orgResumeProcess.groupConfirmation',
  'orgResumeProcess.step.copyOrg', 'orgResumeProcess.step.setupOrg', 'orgResumeProcess.step.checkDeptManager',
  'orgResumeProcess.step.scfl', 'orgResumeProcess.step.checkDecision', 'orgResumeProcess.step.checkDraftDecision',
  'orgResumeProcess.step.sczz', 'orgResumeProcess.step.deptChangeHistory', 'orgResumeProcess.step.checkChange',
  'orgResumeProcess.step.qdzz',
  'orgResumeProcess.msg.pleaseSelectResume', 'orgResumeProcess.msg.pleaseSelectStep',
  'common.status', 'common.active', 'common.inactive', 'common.processing', 'common.error', 'common.loadFail',
];

/** Đúng logic xác định "Hoạt động" ở bản gốc (viewResumeProcess.html): chấp nhận cả code SY_CODE
 *  "14013948" lẫn chuỗi literal "ACTIVE" - 2 giá trị khác nhau giữa các trang org module (xem thêm ghi
 *  chú ACTIVE_CODE/INACTIVE_CODE ở ViewResumeListComponent) - giữ nguyên để không đổi hành vi hiển thị. */
function isActiveValue(activity: string | null | undefined): boolean {
  return activity === '14013948' || activity === 'ACTIVE';
}

/**
 * Bản Angular của org/orgManage/viewResumeProcess.html (Thymeleaf + jQuery + Select2) - sơ đồ quy trình
 * xử lý thay đổi tổ chức theo phiên bản (chọn phiên bản ORG_RESUME_INFO, tick các bước cần thực hiện,
 * bấm Thực hiện). Gọi lại nguyên API JSON đã có sẵn ở OrgResumeInfoController (xem
 * ViewResumeProcessService) - không đổi backend. Dùng nz-select (nzShowSearch) thay Select2, giữ nguyên
 * layout sơ đồ 4 nhóm bước bằng CSS tự viết trong view-resume-process.component.css (chuyển nguyên từ
 * .process-container/.process-group/... trong assets/css/style.css - file CSS đó chỉ được nạp cho các
 * trang Thymeleaf, không có trong bundle Angular, xem angular.json).
 */
@Component({
  selector: 'app-view-resume-process',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzSelectModule, NzButtonModule, TranslatePipe],
  templateUrl: './view-resume-process.component.html',
  styleUrl: './view-resume-process.component.css',
})
export class ViewResumeProcessComponent implements OnInit {
  readonly resumeOptions = signal<OrgResumeInfoDto[]>([]);
  readonly loading = signal(false);
  readonly executing = signal(false);

  selectedNo: string | null = null;

  readonly selectedResume = computed(() => this.resumeOptions().find((r) => r.no === this.selectedNo) ?? null);
  readonly statusActive = computed(() => isActiveValue(this.selectedResume()?.activity));

  chkCopyOrg = false;
  chkScfl = false;
  chkSczz = false;
  chkQdzz = false;

  constructor(
    private readonly api: ViewResumeProcessService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDropdown();
  }

  private loadDropdown(): void {
    this.loading.set(true);
    this.api.getResumeDropdown().subscribe({
      next: (list) => {
        this.resumeOptions.set(list ?? []);
        this.selectedNo = list?.length ? list[0].no : null;
        this.loading.set(false);
      },
      error: () => {
        this.resumeOptions.set([]);
        this.loading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  resumeLabel(r: OrgResumeInfoDto): string {
    return r.no ? `${r.no} ${r.resumeName ?? ''}` : r.resumeName ?? '';
  }

  execute(): void {
    if (!this.selectedNo) {
      this.message.warning(this.i18n.t('orgResumeProcess.msg.pleaseSelectResume', 'Vui lòng chọn phiên bản thay đổi!'));
      return;
    }

    const types: string[] = [];
    if (this.chkCopyOrg) types.push('copyOrg');
    if (this.chkScfl) types.push('scfl');
    if (this.chkSczz) types.push('sczz');
    if (this.chkQdzz) types.push('qdzz');

    if (types.length === 0) {
      this.message.warning(this.i18n.t('orgResumeProcess.msg.pleaseSelectStep', 'Vui lòng chọn ít nhất một bước thực hiện!'));
      return;
    }

    this.executing.set(true);
    this.api.executeProcess({ resumeNo: this.selectedNo, types }).subscribe({
      next: (res) => {
        this.executing.set(false);
        this.message.success(res.message || 'Thực hiện thành công!');
      },
      error: (err) => {
        this.executing.set(false);
        const detail = err?.error?.error ? `: ${err.error.error}` : '';
        this.message.error(`${this.i18n.t('common.error', 'Lỗi')}${detail}`);
      },
    });
  }
}
