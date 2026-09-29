import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TranslatePipe } from '../i18n/translate.pipe';

/** Modal danh sách lỗi theo dòng khi import Excel (module Đào tạo). Bấm ra ngoài modal sẽ đóng (nzMaskClosable). */
@Component({
  selector: 'app-edu-import-errors',
  standalone: true,
  imports: [CommonModule, NzModalModule, TranslatePipe],
  template: `
    <nz-modal [nzVisible]="visible" [nzTitle]="'edu.trainAgreement.importErrorTitle' | translate:'Lỗi import Excel'"
              nzWidth="640px" [nzMaskClosable]="true" (nzOnCancel)="visibleChange.emit(false)" [nzFooter]="null">
      <ng-container *nzModalContent>
        <ul class="eie-errors mb-0">
          <li *ngFor="let e of errors">{{ e }}</li>
        </ul>
      </ng-container>
    </nz-modal>
  `,
  styles: [`.eie-errors { max-height: 360px; overflow-y: auto; color: #cf1322; }`],
})
export class EduImportErrorsComponent {
  @Input() visible = false;
  @Input() errors: string[] = [];
  @Output() visibleChange = new EventEmitter<boolean>();
}
