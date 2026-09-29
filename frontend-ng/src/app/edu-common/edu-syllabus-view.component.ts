import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EduSyllabus } from '../edu-plan-manager/edu-plan-manager.model';
import { EduPlanManagerService } from '../edu-plan-manager/edu-plan-manager.service';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

/**
 * Modal xem lịch học của kế hoạch (bản gốc queryCourseSyllabus / queryCourseSyllabus2 - "Xem thời khóa biểu") - dùng chung
 * cho các trang Đăng ký, Phê duyệt, Xác nhận, Tình hình đăng ký. Dùng lại API lịch học của Kế hoạch đào tạo.
 * Bấm ra ngoài modal sẽ đóng (nzMaskClosable).
 */
@Component({
  selector: 'app-edu-syllabus-view',
  standalone: true,
  imports: [CommonModule, NzModalModule, NzTableModule, NzButtonModule, TranslatePipe],
  template: `
    <nz-modal [nzVisible]="visible()" nzWidth="760px" [nzMaskClosable]="true" (nzOnCancel)="close()"
              [nzTitle]="'edu.planManager.KECHENGBIAO.a' | translate:'Lịch học'" [nzFooter]="esvFooter">
      <ng-container *nzModalContent>
        <nz-table #esvTable [nzData]="rows()" [nzLoading]="loading()" nzSize="small" [nzShowPagination]="false"
                  [nzScroll]="{ y: '360px' }">
          <thead>
            <tr>
              <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
              <th>{{ 'empsubject.subjectNm' | translate:'Tên đào tạo' }}</th>
              <th class="text-center" nzWidth="115px">{{ 'edu.planManager.KECHENGRIQI.a' | translate:'Ngày học' }}</th>
              <th class="text-center" nzWidth="95px">{{ 'ess.infoApply.title.startTime' | translate:'Giờ bắt đầu' }}</th>
              <th class="text-center" nzWidth="95px">{{ 'ess.infoApply.title.endTime' | translate:'Giờ kết thúc' }}</th>
              <th>{{ 'edu.planManager.XIANGXIDIDIAN.a' | translate:'Địa điểm' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && rows().length === 0">
              <td colspan="6" class="text-center text-muted">{{ 'common.noData' | translate:'Không có dữ liệu' }}</td>
            </tr>
            <tr *ngFor="let s of esvTable.data; let i = index">
              <td class="text-center">{{ i + 1 }}</td>
              <td>{{ s.courseNameCode }}</td>
              <td class="text-center">{{ s.courseDate }}</td>
              <td class="text-center">{{ s.courseStartTime }}</td>
              <td class="text-center">{{ s.courseEndTime }}</td>
              <td>{{ s.detailAddress }}</td>
            </tr>
          </tbody>
        </nz-table>
      </ng-container>
      <ng-template #esvFooter>
        <button nz-button type="button" id="esvBtnClose" (click)="close()">{{ 'common.close' | translate:'Đóng' }}</button>
      </ng-template>
    </nz-modal>
  `,
})
export class EduSyllabusViewComponent {
  static readonly I18N_KEYS = ['edu.planManager.KECHENGBIAO.a', 'edu.planManager.KECHENGRIQI.a', 'ess.infoApply.title.startTime',
    'ess.infoApply.title.endTime', 'edu.planManager.XIANGXIDIDIAN.a', 'empsubject.subjectNm', 'common.stt', 'common.noData',
    'common.close', 'common.loadFail'];

  readonly visible = signal(false);
  readonly loading = signal(false);
  readonly rows = signal<EduSyllabus[]>([]);

  constructor(private readonly planApi: EduPlanManagerService, private readonly i18n: I18nService) {
    this.i18n.loadKeys(EduSyllabusViewComponent.I18N_KEYS);
  }

  open(planNo: string | null | undefined): void {
    if (!planNo) return;
    this.rows.set([]);
    this.loading.set(true);
    this.visible.set(true);
    this.planApi.getSyllabus(planNo).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  close(): void {
    this.visible.set(false);
  }
}
