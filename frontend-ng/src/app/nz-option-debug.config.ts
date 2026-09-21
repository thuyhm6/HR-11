import { SimpleChanges } from '@angular/core';
import { NzOptionItemComponent } from 'ng-zorro-antd/select';

const PATCHED_FLAG = '__nzOptionDebugValuePatched';

/**
 * NG-ZORRO không content-project lại các thẻ <nz-option> gốc vào dropdown khi mở nz-select - nó tự
 * sinh <nz-option-item> mới từ dữ liệu nzValue/nzLabel (kể cả khi dùng cdk-virtual-scroll tái sử dụng
 * phần tử lúc cuộn). Vì vậy đây là điểm duy nhất còn lại để gắn nzValue vào DOM: monkey-patch
 * ngOnChanges của NzOptionItemComponent (ng-zorro-antd/select) để mỗi lần input `value` được set/cập
 * nhật, tự gắn thêm attribute data-nz-value lên chính phần tử đó - xem được qua F12, không tạo
 * tooltip, không cần sửa bất kỳ file .html nào trong dự án. Gọi 1 lần duy nhất ở main.ts trước khi
 * bootstrap app.
 */
export function patchNzOptionDebugValueAttribute(): void {
  const proto = NzOptionItemComponent.prototype as unknown as Record<string, unknown>;
  if (proto[PATCHED_FLAG]) {
    return;
  }
  proto[PATCHED_FLAG] = true;

  const originalNgOnChanges = NzOptionItemComponent.prototype.ngOnChanges;

  NzOptionItemComponent.prototype.ngOnChanges = function (this: NzOptionItemComponent, changes: SimpleChanges): void {
    originalNgOnChanges.call(this, changes);
    applyDebugValueAttribute(this);
  };
}

function applyDebugValueAttribute(instance: NzOptionItemComponent): void {
  const el = (instance as unknown as { el?: HTMLElement }).el;
  if (!el) {
    return;
  }
  el.setAttribute('data-nz-value', stringifyNzValue(instance.value));
}

function stringifyNzValue(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  return String(value);
}
