import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AppShellComponent } from '../shell/app-shell.component';
import { TabService } from '../shell/tab.service';
import { ArReportGroup, ArReportItemDto } from './view-ar-reports-list.model';
import { ViewArReportsListService } from './view-ar-reports-list.service';

const I18N_KEYS = [
  'rp.report.title.reporttype', 'edu.trainReport.selectReport', 'pa.workFlow.msgPageNotMigrated',
  'common.noData', 'common.loadFail',
];

/**
 * Trung tâm báo cáo - bản Angular của /report/ar/viewArReportsList?menuNo=... (JSP + DWZ, dự án Hanwha_HTSV).
 * Bên trái là các báo cáo trong REPORT_CENTER thuộc loại báo cáo của menu (menuNo 14013782 = báo cáo lương - mặc định,
 * 14013665 = nhân sự, 14013758 = chấm công, 14014477 = đào tạo). Bản gốc nạp trang báo cáo (URL_JSP) vào khung bên phải;
 * bản mới mở trang báo cáo thành tab mới qua bảng MIGRATED_ROUTES (giống link của trang Quy trình lương), trang chưa
 * chuyển đổi sẽ báo chưa hỗ trợ.
 */
@Component({
  selector: 'app-view-ar-reports-list',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzMenuModule, NzSpinModule, NzAlertModule, TranslatePipe],
  templateUrl: './view-ar-reports-list.component.html',
  styleUrl: './view-ar-reports-list.component.css',
})
export class ViewArReportsListComponent implements OnInit {
  readonly groups = signal<ArReportGroup[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  constructor(
    private readonly api: ViewArReportsListService,
    private readonly route: ActivatedRoute,
    private readonly tabs: TabService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    // Menu trong DB có thể kèm ?menuNo=... (giữ nguyên qua AppShellComponent.migratedRouteFor) - không có thì backend
    // mặc định báo cáo lương như link "Bảng lương" của trang Quy trình lương.
    this.route.queryParamMap.subscribe((params) => this.load(params.get('menuNo')));
  }

  private load(menuNo: string | null): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getReportList(menuNo).subscribe({
      next: (list) => {
        this.groups.set(this.group(list ?? []));
        this.loading.set(false);
      },
      error: (err) => {
        this.groups.set([]);
        this.loading.set(false);
        this.errorMessage.set(err?.error?.message || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  /** Gom theo loại báo cáo, giữ nguyên thứ tự backend trả về (thứ tự cây mã + ORDERNO). */
  private group(list: ArReportItemDto[]): ArReportGroup[] {
    const map = new Map<string, ArReportGroup>();
    list.forEach((r) => {
      let g = map.get(r.reportTypeNo);
      if (!g) {
        g = { reportTypeNo: r.reportTypeNo, typeName: (r.typeName ?? '').trim(), reports: [] };
        map.set(r.reportTypeNo, g);
      }
      g.reports.push(r);
    });
    return Array.from(map.values());
  }

  /** Bản gốc hiển thị tên loại báo cáo cho link - dùng tên báo cáo nếu có, không thì tên loại. */
  reportLabel(group: ArReportGroup, report: ArReportItemDto): string {
    return (report.reportName ?? '').trim() || group.typeName || report.urlJsp || '';
  }

  open(group: ArReportGroup, report: ArReportItemDto): void {
    const route = AppShellComponent.migratedRouteFor(report.urlJsp);
    if (!route) {
      this.message.warning(this.i18n.t('pa.workFlow.msgPageNotMigrated', 'Trang này chưa được chuyển đổi sang hệ thống mới!'));
      return;
    }
    this.tabs.openTab(route, this.reportLabel(group, report), 'route');
  }
}
