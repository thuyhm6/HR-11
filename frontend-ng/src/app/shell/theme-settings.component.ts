import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MenuSize, ThemeService } from './theme.service';

/** Bản Angular của fragments/rightSidebar.html (offcanvas → nz-drawer) - chỉ port "Sidebar Size",
 * phần còn lại (Color Scheme/Topbar Color/Menu Color) bị comment out ở bản gốc nên không port. */
@Component({
  selector: 'app-theme-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, NzDrawerModule, NzRadioModule, NzButtonModule],
  templateUrl: './theme-settings.component.html',
  styleUrl: './theme-settings.component.css',
})
export class ThemeSettingsComponent {
  readonly visible = signal(false);

  readonly sizeOptions: { value: MenuSize; label: string }[] = [
    { value: 'default', label: 'Mặc định' },
    { value: 'condensed', label: 'Thu gọn' },
  ];

  constructor(readonly theme: ThemeService) {}

  open(): void {
    this.visible.set(true);
  }

  close(): void {
    this.visible.set(false);
  }

  select(size: MenuSize): void {
    this.theme.setMenuSize(size);
  }

  reset(): void {
    this.theme.reset();
  }
}
