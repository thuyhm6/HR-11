import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, computed, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { select } from 'd3-selection';
import { ZoomBehavior, zoom, zoomIdentity } from 'd3-zoom';
import 'd3-transition';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { OrgChartCardComponent } from './org-chart-card.component';
import { OrgLayoutLink, OrgLayoutNode, computeOrgChartLayout } from './org-chart-layout';
import { OrgNodeDto } from './view-org-info.model';
import { ViewOrgInfoService } from './view-org-info.service';

/** Các key message.properties dùng trong trang này - namespace "org.orgManage.viewOrgInfo.*", tải
 *  trước 1 lần ở ngOnInit. zoomIn/zoomOut/reset là 3 key mới thêm cho toolbar zoom, các key còn lại đã
 *  có sẵn từ trước. */
const I18N_KEYS = [
  'org.orgManage.viewOrgInfo.title', 'org.orgManage.viewOrgInfo.expand', 'org.orgManage.viewOrgInfo.collapse',
  'org.orgManage.viewOrgInfo.loading', 'org.orgManage.viewOrgInfo.noData', 'org.orgManage.viewOrgInfo.loadError',
  'org.orgManage.viewOrgInfo.retry', 'org.orgManage.viewOrgInfo.zoomIn', 'org.orgManage.viewOrgInfo.zoomOut',
  'org.orgManage.viewOrgInfo.reset',
];

const SCALE_EXTENT: [number, number] = [0.2, 2.5];

/** Duyệt đệ quy toàn bộ cây, gom id của các node thỏa predicate (và có con) vào `out` - dùng để tính
 *  trạng thái thu gọn mặc định lúc tải xong / khi bấm "Thu gọn". */
function collectCollapsibleIds(nodes: OrgNodeDto[], predicate: (n: OrgNodeDto) => boolean, out: Set<string>): void {
  nodes.forEach((n) => {
    if (n.children?.length) {
      if (predicate(n)) out.add(n.id);
      collectCollapsibleIds(n.children, predicate, out);
    }
  });
}

/**
 * Bản Angular của org/orgManage/viewOrgInfo.html (Thymeleaf + jQuery, không dùng jsTree/DataTables) -
 * sơ đồ tổ chức trực quan dạng biểu đồ phả hệ (organigram), zoomable/pannable bằng D3. Gọi lại nguyên
 * API JSON đã có sẵn ở CurrentOrgController#getVisualTree (xem ViewOrgInfoService) - không đổi backend.
 *
 * Khác bản CSS thuần trước đây (nested <ul>/<li> đệ quy qua OrgChartNodeComponent, chỉ cuộn ngang):
 * tọa độ từng node được tính sẵn bằng d3-hierarchy/d3-tree (xem org-chart-layout.ts), render phẳng bằng
 * *ngFor qua OrgChartCardComponent định vị tuyệt đối, đường nối vẽ bằng <svg><path> (elbow), và có
 * pan/zoom qua d3-zoom. CSS .tf-nc/.dept-node/.manager-info/... (style nội dung card) giữ nguyên, chỉ
 * bỏ phần vẽ đường nối bằng ::before/::after. ViewEncapsulation.None giữ nguyên vì OrgChartCardComponent
 * là component con dùng chung các class này.
 *
 * d3-zoom được gắn trong NgZone.runOutsideAngular vì app dùng zone.js (không zoneless) - nếu không, mỗi
 * tick wheel/drag/transition sẽ kích hoạt 1 vòng change detection của toàn bộ cây, rất tốn. Transform
 * (translate/scale) được set thẳng vào style của #world bằng DOM API trong callback 'zoom', không qua
 * signal - chỉ có layout (nodes/links, đổi khi treeData/collapsedIds đổi) mới đi qua Angular template.
 */
@Component({
  selector: 'app-view-org-info',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule, OrgChartCardComponent, TranslatePipe],
  templateUrl: './view-org-info.component.html',
  styleUrl: './view-org-info.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ViewOrgInfoComponent implements OnInit, OnDestroy {
  readonly treeData = signal<OrgNodeDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly collapsedIds = signal<Set<string>>(new Set());

  readonly layout = computed(() => computeOrgChartLayout(this.treeData(), this.collapsedIds()));

  /** Truyền thẳng làm callback xuống OrgChartCardComponent (mọi card dùng chung 1 hàm) thay vì
   *  bắn Output bong bóng lên qua từng cấp. */
  readonly toggleNode = (id: string): void => {
    const next = new Set(this.collapsedIds());
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.collapsedIds.set(next);
  };

  private viewportEl?: HTMLDivElement;
  private worldEl?: HTMLDivElement;
  private zoomBehavior?: ZoomBehavior<HTMLDivElement, unknown>;

  @ViewChild('viewport') set viewportRef(ref: ElementRef<HTMLDivElement> | undefined) {
    this.viewportEl = ref?.nativeElement;
    this.trySetupZoom();
  }

  @ViewChild('world') set worldRef(ref: ElementRef<HTMLDivElement> | undefined) {
    this.worldEl = ref?.nativeElement;
    this.trySetupZoom();
  }

  constructor(
    private readonly api: ViewOrgInfoService,
    private readonly zone: NgZone,
    readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadTree();
  }

  ngOnDestroy(): void {
    if (this.viewportEl) select(this.viewportEl).on('.zoom', null);
  }

  loadTree(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getVisualTree().subscribe({
      next: (list) => {
        const data = list ?? [];
        this.treeData.set(data);
        const initial = new Set<string>();
        collectCollapsibleIds(data, (n) => n.level >= 2, initial);
        this.collapsedIds.set(initial);
        this.loading.set(false);
      },
      error: () => {
        this.treeData.set([]);
        this.errorMessage.set(this.i18n.t('org.orgManage.viewOrgInfo.loadError', 'Lỗi tải dữ liệu'));
        this.loading.set(false);
      },
    });
  }

  expandAll(): void {
    this.collapsedIds.set(new Set());
  }

  collapseAll(): void {
    const next = new Set<string>();
    collectCollapsibleIds(this.treeData(), (n) => n.level >= 1, next);
    this.collapsedIds.set(next);
  }

  trackNode(_index: number, n: OrgLayoutNode): string {
    return n.data.id;
  }

  trackLink(_index: number, l: OrgLayoutLink): string {
    return l.id;
  }

  zoomIn(): void {
    if (!this.viewportEl || !this.zoomBehavior) return;
    this.zone.runOutsideAngular(() => {
      select(this.viewportEl!).transition().duration(300).call(this.zoomBehavior!.scaleBy, 1.2);
    });
  }

  zoomOut(): void {
    if (!this.viewportEl || !this.zoomBehavior) return;
    this.zone.runOutsideAngular(() => {
      select(this.viewportEl!).transition().duration(300).call(this.zoomBehavior!.scaleBy, 1 / 1.2);
    });
  }

  resetZoom(): void {
    this.zone.runOutsideAngular(() => this.fitToViewport(true));
  }

  /** Gắn d3-zoom vào #viewport khi cả 2 element (viewport + world) đã tồn tại trong DOM - chỉ xảy ra
   *  đúng 1 lần cho mỗi lần *ngIf chuyển từ ẩn sang hiện (load xong lần đầu, hoặc bấm "Thử lại" sau
   *  lỗi), KHÔNG chạy lại mỗi khi treeData/collapsedIds đổi trong lúc chart đã hiển thị - nếu không
   *  mỗi lần expand/collapse 1 node sẽ tự nhảy về fit view, phá pan/zoom hiện tại của user. */
  private trySetupZoom(): void {
    if (!this.viewportEl || !this.worldEl || this.zoomBehavior) return;
    const worldEl = this.worldEl;
    this.zone.runOutsideAngular(() => {
      this.zoomBehavior = zoom<HTMLDivElement, unknown>()
        .scaleExtent(SCALE_EXTENT)
        .clickDistance(10)
        .on('zoom', (event) => {
          worldEl.style.transform = `translate(${event.transform.x}px, ${event.transform.y}px) scale(${event.transform.k})`;
        });
      select(this.viewportEl!).call(this.zoomBehavior).on('dblclick.zoom', null);
      this.fitToViewport(false);
    });
  }

  private fitToViewport(animate: boolean): void {
    if (!this.viewportEl || !this.zoomBehavior) return;
    const { width, height } = this.layout();
    if (width === 0 || height === 0) return;

    const vpWidth = this.viewportEl.clientWidth;
    const vpHeight = this.viewportEl.clientHeight;
    const rawScale = Math.min(vpWidth / width, vpHeight / height);
    const scale = Math.max(SCALE_EXTENT[0], Math.min(SCALE_EXTENT[1], rawScale));
    const tx = (vpWidth - width * scale) / 2;
    const ty = (vpHeight - height * scale) / 2;
    const transform = zoomIdentity.translate(tx, ty).scale(scale);

    const selection = select(this.viewportEl);
    if (animate) selection.transition().duration(300).call(this.zoomBehavior.transform, transform);
    else selection.call(this.zoomBehavior.transform, transform);
  }
}
