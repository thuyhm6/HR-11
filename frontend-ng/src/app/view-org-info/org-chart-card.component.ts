import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OrgNodeDto } from './view-org-info.model';

const DEFAULT_AVATAR = '/assets/images/users/dummy-avatar.jpg';

/**
 * 1 card trong sơ đồ tổ chức zoomable/pannable (view-org-info) - thay cho OrgChartNodeComponent đệ quy
 * cũ (dựng <li>/<ul> lồng nhau bằng CSS). Component này KHÔNG còn đệ quy: tọa độ x/y của từng node đã
 * được tính sẵn ở org-chart-layout.ts (d3.hierarchy/d3.tree), ViewOrgInfoComponent chỉ *ngFor phẳng qua
 * danh sách node và định vị từng card bằng [style.transform] - xem view-org-info.component.html.
 *
 * Không có file .css riêng: style .tf-nc/.dept-node/.emp-node/.manager-info/... vẫn nằm ở
 * ViewOrgInfoComponent (ViewEncapsulation.None), y hệt bản cũ.
 */
@Component({
  selector: 'app-org-chart-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './org-chart-card.component.html',
})
export class OrgChartCardComponent {
  @Input({ required: true }) node!: OrgNodeDto;
  @Input({ required: true }) hasChildren!: boolean;
  @Input({ required: true }) collapsed!: boolean;
  @Input({ required: true }) toggleFn!: (id: string) => void;

  readonly defaultAvatar = DEFAULT_AVATAR;

  onToggle(): void {
    if (this.hasChildren) this.toggleFn(this.node.id);
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultAvatar;
  }
}
