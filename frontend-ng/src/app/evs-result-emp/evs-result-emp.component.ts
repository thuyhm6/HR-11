import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EvsResultEmpDto } from './evs-result-emp.model';
import { EvsResultEmpService } from './evs-result-emp.service';

const I18N_KEYS = [
  'evs.viewEvsResultEmp.PINGJIAJIEGUOLVLI.a',
  'evs.viewEvsResultEmp.evalYear',
  'evs.viewEvsResultEmp.performance',
  'evs.viewEvsResultEmp.ability',
  'evs.viewEvsResultEmp.noData',
  'common.stt',
  'common.loadFail',
];

/**
 * Bản Angular của evs/manage/viewEvsResultEmp.html (Thymeleaf) - lịch sử kết quả đánh giá của
 * chính nhân viên đang đăng nhập. Gọi lại nguyên API JSON đã có sẵn (xem EvsResultEmpService) -
 * không đổi backend, không có tham số tìm kiếm (bản gốc cũng không có). Dùng nz-table thay bảng
 * HTML tự build chuỗi qua jQuery trước đây.
 */
@Component({
  selector: 'app-evs-result-emp',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzCardModule, NzAlertModule, TranslatePipe],
  templateUrl: './evs-result-emp.component.html',
  styleUrl: './evs-result-emp.component.css',
})
export class EvsResultEmpComponent implements OnInit {
  readonly rows = signal<EvsResultEmpDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  constructor(
    private readonly api: EvsResultEmpService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadData();
  }

  private loadData(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList().subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }
}
