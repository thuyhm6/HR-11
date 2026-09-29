import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CLASS_UNITS } from '../edu-plan-manager/edu-plan-manager.model';
import { EduTrainBasic, courseWithPeriod } from './edu-train.model';

/** Khối thông tin khóa học ở đầu các modal Đánh giá học viên / giảng viên / Kết quả đào tạo (bản gốc: bảng tiêu đề mỗi trang). */
@Component({
  selector: 'app-edu-basic-header',
  standalone: true,
  imports: [CommonModule, NzDescriptionsModule, TranslatePipe],
  template: `
    <nz-descriptions *ngIf="basic" nzBordered nzSize="small" [nzColumn]="2" class="mb-3">
      <nz-descriptions-item [nzTitle]="'edu.systemManager.PEIXUNLEIXING.a' | translate:'Loại hình'">
        {{ basic.trainTypeCodeName }}
      </nz-descriptions-item>
      <nz-descriptions-item [nzTitle]="'empsubject.subjectNm' | translate:'Tên đào tạo'">
        {{ courseTitle() }}
      </nz-descriptions-item>
      <nz-descriptions-item [nzTitle]="'edu.planManager.PEIXUNKESHI.a' | translate:'Thời lượng'">
        {{ classHourText() }}
      </nz-descriptions-item>
      <nz-descriptions-item [nzTitle]="'edu.trainBasicInformation.PEIXUNSHISHIQIJIAN.a' | translate:'Thời gian'">
        {{ basic.impleStartDate }} ~ {{ basic.impleEndDate }}
      </nz-descriptions-item>
      <nz-descriptions-item [nzTitle]="'edu.trainArchives.PEIXUNNEIRONG.a' | translate:'Nội dung'" [nzSpan]="2">
        {{ basic.trainContent }}
      </nz-descriptions-item>
    </nz-descriptions>
  `,
})
export class EduBasicHeaderComponent {
  @Input() basic: EduTrainBasic | null = null;

  constructor(private readonly i18n: I18nService) {}

  courseTitle(): string {
    return courseWithPeriod((k, f) => this.i18n.t(k, f), this.basic?.courseNameCode, this.basic?.periodTime);
  }

  classHourText(): string {
    return classHourText(this.i18n, this.basic?.impleClassHour, this.basic?.impleClassUnit);
  }
}

/** "8 Tiếng" / "2 Ngày" / "1 Tháng" - bản gốc hiển thị IMPLE_CLASS_HOUR + đơn vị. */
export function classHourText(i18n: I18nService, hour: string | null | undefined, unit: string | null | undefined): string {
  if (!hour) return '';
  const u = CLASS_UNITS.find((c) => c.value === unit);
  return `${hour} ${u ? i18n.t(u.key, u.fallback) : ''}`.trim();
}
