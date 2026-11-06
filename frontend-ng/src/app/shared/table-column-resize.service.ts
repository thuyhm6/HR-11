import { DOCUMENT } from '@angular/common';
import { Injectable, NgZone, inject } from '@angular/core';

/** Vùng (px) tính từ mép trái/phải ô tiêu đề được coi là "tay kéo". */
const EDGE = 6;
const MIN_WIDTH = 40;
const MAX_WIDTH = 1200;
const STORAGE_PREFIX = 'tcr.colWidths:';

/** Trạng thái 1 bảng (phần tử .ant-table) đã bị đổi độ rộng cột - giữ giá trị gốc để hoàn tác. */
interface WrapperState {
  leafCount: number;
  key: string | null;
  widths: number[];
  origTables: Map<HTMLTableElement, { width: string; minWidth: string; tableLayout: string }>;
  origCols: Map<HTMLElement, { width: string; minWidth: string }>;
  origOverflow: Map<HTMLElement, string>;
  created: HTMLElement[];
}

interface HeaderGrid {
  leafCount: number;
  start: Map<HTMLTableCellElement, number>;
}

interface DragState {
  wrapper: HTMLElement;
  col: number;
  startX: number;
  widths: number[];
  guide: HTMLDivElement;
}

/**
 * Kéo mép tiêu đề cột để đổi độ rộng cột cho MỌI nz-table trong ứng dụng, không cần sửa từng trang.
 *
 * - Rê chuột tới mép trái/phải ô tiêu đề -> con trỏ ↔, kéo -> hiện đường gạch xem trước, thả -> áp dụng.
 * - Double-click mép cột -> cột đó về độ rộng mặc định.
 * - Độ rộng lưu localStorage theo (component chứa bảng + thứ tự bảng + số cột), tự khôi phục khi mở lại trang.
 *
 * Cách làm: đặt width cho các <col> trong colgroup của mọi <table> thuộc cùng 1 .ant-table (bảng header và body
 * tách riêng khi có nzScroll.y), chuyển table-layout: fixed + width = tổng độ rộng, rồi tính lại left/right của
 * các cột cố định (nzLeft/nzRight). Toàn bộ chạy ngoài Angular zone nên không kích hoạt change detection.
 *
 * Bỏ qua: bảng có th[nz-resizable] (trang tự xử lý như pici-leave-affirm-batch) hoặc nằm trong phần tử có
 * attribute data-no-col-resize.
 */
@Injectable({ providedIn: 'root' })
export class TableColumnResizeService {
  private readonly doc = inject(DOCUMENT);
  private readonly zone = inject(NgZone);

  private readonly states = new WeakMap<HTMLElement, WrapperState>();
  /** Số cột lần cuối đã quét của từng bảng - để phát hiện bảng đổi cấu trúc cột. */
  private readonly seen = new WeakMap<HTMLElement, number>();
  private readonly modified = new Set<HTMLElement>();

  private started = false;
  private drag: DragState | null = null;
  private hoverTh: HTMLElement | null = null;
  private suppressClick = false;
  private scanScheduled = false;

  init(): void {
    if (this.started || typeof window === 'undefined') return;
    this.started = true;
    this.zone.runOutsideAngular(() => {
      const d = this.doc;
      d.addEventListener('pointermove', (e) => this.onPointerMove(e), { passive: true });
      d.addEventListener('pointerdown', (e) => this.onPointerDown(e), true);
      d.addEventListener('pointerup', (e) => this.onPointerUp(e), true);
      d.addEventListener('pointercancel', () => this.cancelDrag(), true);
      d.addEventListener('keydown', (e) => e.key === 'Escape' && this.cancelDrag(), true);
      d.addEventListener('click', (e) => this.onClickCapture(e), true);
      d.addEventListener('dblclick', (e) => this.onDblClick(e), true);
      new MutationObserver(() => this.scheduleScan()).observe(d.body, { childList: true, subtree: true });
      this.scheduleScan();
    });
  }

  // ---------------------------------------------------------------- sự kiện chuột

  private onPointerMove(e: PointerEvent): void {
    if (this.drag) {
      this.drag.guide.style.left = `${this.clampGuideX(e.clientX)}px`;
      return;
    }
    const hit = this.hitTest(e);
    const th = hit ? hit.edgeTh : null;
    if (th !== this.hoverTh) {
      this.hoverTh?.classList.remove('tcr-hover');
      th?.classList.add('tcr-hover');
      this.hoverTh = th;
    }
  }

  private onPointerDown(e: PointerEvent): void {
    if (e.button !== 0) return;
    const hit = this.hitTest(e);
    if (!hit) return;
    e.preventDefault();
    e.stopPropagation();
    this.suppressClick = true;

    const widths = this.measureWidths(hit.wrapper, hit.grid);
    if (!widths) return;
    const rect = hit.wrapper.getBoundingClientRect();
    const top = Math.max(rect.top, 0);
    const bottom = Math.min(rect.bottom, window.innerHeight);
    const guide = this.doc.createElement('div');
    guide.className = 'tcr-guide';
    guide.style.top = `${top}px`;
    guide.style.height = `${Math.max(bottom - top, 0)}px`;
    guide.style.left = `${e.clientX}px`;
    this.doc.body.appendChild(guide);
    this.doc.body.classList.add('tcr-dragging');
    this.drag = { wrapper: hit.wrapper, col: hit.col, startX: e.clientX, widths, guide };
  }

  private onPointerUp(e: PointerEvent): void {
    const drag = this.drag;
    if (!drag) return;
    this.endDrag();
    const old = drag.widths[drag.col];
    const next = this.clampWidth(old + e.clientX - drag.startX);
    if (Math.abs(next - old) >= 1) {
      const widths = drag.widths.slice();
      widths[drag.col] = next;
      this.applyAndSave(drag.wrapper, widths);
    }
    // click phát ngay sau pointerup - chặn để không kích hoạt sort/filter của ô tiêu đề
    setTimeout(() => (this.suppressClick = false), 0);
  }

  private onClickCapture(e: MouseEvent): void {
    if (this.suppressClick) {
      e.preventDefault();
      e.stopPropagation();
      this.suppressClick = false;
    }
  }

  private onDblClick(e: MouseEvent): void {
    const hit = this.hitTest(e);
    if (!hit) return;
    e.preventDefault();
    e.stopPropagation();
    const st = this.states.get(hit.wrapper);
    if (!st) return;
    // Hoàn tác tạm để đo độ rộng tự nhiên của cột rồi áp lại các cột khác như cũ
    const current = st.widths.slice();
    this.revert(hit.wrapper);
    const natural = this.measureWidths(hit.wrapper, this.headerGrid(hit.wrapper));
    if (!natural || natural.length !== current.length) {
      this.applyAndSave(hit.wrapper, current);
      return;
    }
    current[hit.col] = natural[hit.col];
    if (current.every((w, i) => Math.abs(w - natural[i]) < 1)) {
      this.removeSaved(hit.wrapper, natural.length);
    } else {
      this.applyAndSave(hit.wrapper, current);
    }
  }

  private cancelDrag(): void {
    if (!this.drag) return;
    this.endDrag();
    setTimeout(() => (this.suppressClick = false), 0);
  }

  private endDrag(): void {
    this.drag?.guide.remove();
    this.doc.body.classList.remove('tcr-dragging');
    this.drag = null;
  }

  private clampGuideX(x: number): number {
    const drag = this.drag!;
    const old = drag.widths[drag.col];
    return drag.startX + this.clampWidth(old + x - drag.startX) - old;
  }

  private clampWidth(w: number): number {
    return Math.round(Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, w)));
  }

  /** Con trỏ đang ở mép ô tiêu đề nào -> cột lá cần đổi độ rộng. */
  private hitTest(e: MouseEvent):
    | { wrapper: HTMLElement; grid: HeaderGrid; col: number; edgeTh: HTMLElement }
    | null {
    const target = e.target as Element | null;
    const th = target?.closest?.('th') as HTMLTableCellElement | null;
    if (!th || !th.closest('thead.ant-table-thead')) return null;
    const wrapper = th.closest('.ant-table') as HTMLElement | null;
    if (!wrapper || !this.isSupported(wrapper)) return null;

    const rect = th.getBoundingClientRect();
    const nearRight = rect.right - e.clientX <= EDGE;
    const nearLeft = e.clientX - rect.left <= EDGE;
    if (!nearRight && !nearLeft) return null;

    const grid = this.headerGrid(wrapper);
    const start = grid.start.get(th);
    if (start === undefined || grid.leafCount === 0) return null;
    if (nearRight) {
      return { wrapper, grid, col: start + (th.colSpan || 1) - 1, edgeTh: th };
    }
    if (start === 0) return null;
    const prev = (th.previousElementSibling as HTMLElement | null) ?? th;
    return { wrapper, grid, col: start - 1, edgeTh: prev };
  }

  // ---------------------------------------------------------------- đo / áp độ rộng

  private isSupported(wrapper: HTMLElement): boolean {
    return !wrapper.closest('[data-no-col-resize]') && !wrapper.querySelector('th.nz-resizable');
  }

  /** <table> thuộc trực tiếp .ant-table này (không lấy bảng lồng trong ô). */
  private tablesOf(wrapper: HTMLElement): HTMLTableElement[] {
    return Array.from(wrapper.querySelectorAll('table')).filter((t) => t.closest('.ant-table') === wrapper);
  }

  private theadOf(wrapper: HTMLElement): HTMLTableSectionElement | null {
    for (const t of this.tablesOf(wrapper)) {
      const thead = t.querySelector(':scope > thead.ant-table-thead') as HTMLTableSectionElement | null;
      if (thead && thead.rows.length) return thead;
    }
    return null;
  }

  /** Lưới tiêu đề (xử lý colspan/rowspan): vị trí cột lá bắt đầu của từng ô + tổng số cột lá. */
  private headerGrid(wrapper: HTMLElement): HeaderGrid {
    const start = new Map<HTMLTableCellElement, number>();
    const thead = this.theadOf(wrapper);
    if (!thead) return { leafCount: 0, start };
    const occupied: boolean[][] = [];
    let leafCount = 0;
    Array.from(thead.rows).forEach((tr, r) => {
      occupied[r] ??= [];
      let c = 0;
      for (const cell of Array.from(tr.cells)) {
        while (occupied[r][c]) c++;
        const cs = Math.max(cell.colSpan || 1, 1);
        const rs = Math.max(cell.rowSpan || 1, 1);
        start.set(cell, c);
        for (let rr = r; rr < r + rs; rr++) {
          occupied[rr] ??= [];
          for (let cc = c; cc < c + cs; cc++) occupied[rr][cc] = true;
        }
        c += cs;
        leafCount = Math.max(leafCount, c);
      }
    });
    return { leafCount, start };
  }

  /** Độ rộng hiện tại (px) của từng cột lá; null nếu bảng đang ẩn / không đo được. */
  private measureWidths(wrapper: HTMLElement, grid: HeaderGrid): number[] | null {
    const n = grid.leafCount;
    if (!n) return null;
    const st = this.states.get(wrapper);
    if (st && st.leafCount === n) return st.widths.slice();

    const widths: (number | undefined)[] = new Array(n);
    const set = (i: number, w: number) => {
      if (w > 0 && widths[i] === undefined) widths[i] = Math.round(w);
    };
    // 1. Hàng đo của nz-table (có khi nzScroll.y) - chính xác nhất
    const measureRow = wrapper.querySelector('tr.ant-table-measure-now') as HTMLTableRowElement | null;
    if (measureRow && measureRow.cells.length === n) {
      Array.from(measureRow.cells).forEach((td, i) => set(i, td.getBoundingClientRect().width));
    }
    // 2. Ô tiêu đề không gộp cột
    grid.start.forEach((c, th) => {
      if ((th.colSpan || 1) === 1) set(c, th.getBoundingClientRect().width);
    });
    // 3. Dòng dữ liệu đầu tiên không gộp ô
    if (widths.includes(undefined)) {
      const row = Array.from(wrapper.querySelectorAll('tbody > tr')).find(
        (tr) => (tr as HTMLTableRowElement).cells.length === n && !tr.classList.contains('ant-table-measure-now'),
      ) as HTMLTableRowElement | undefined;
      row && Array.from(row.cells).forEach((td, i) => set(i, td.getBoundingClientRect().width));
    }
    // 4. Còn thiếu -> chia đều độ rộng ô gộp
    grid.start.forEach((c, th) => {
      const cs = th.colSpan || 1;
      if (cs > 1) {
        const w = th.getBoundingClientRect().width / cs;
        for (let i = c; i < c + cs; i++) set(i, w);
      }
    });
    if (widths.some((w) => w === undefined)) return null;
    return widths as number[];
  }

  private applyAndSave(wrapper: HTMLElement, widths: number[]): void {
    if (this.apply(wrapper, widths)) {
      const st = this.states.get(wrapper)!;
      if (st.key) {
        try {
          localStorage.setItem(st.key, JSON.stringify(widths));
        } catch {
          // localStorage bị chặn -> chỉ áp dụng trong phiên hiện tại
        }
      }
    }
  }

  private apply(wrapper: HTMLElement, widths: number[]): boolean {
    const n = widths.length;
    let st = this.states.get(wrapper);
    if (st && st.leafCount !== n) {
      this.revert(wrapper);
      st = undefined;
    }
    if (!st) {
      st = {
        leafCount: n,
        key: this.keyOf(wrapper, n),
        widths: [],
        origTables: new Map(),
        origCols: new Map(),
        origOverflow: new Map(),
        created: [],
      };
    }
    const tables = this.tablesOf(wrapper);
    const colsPerTable: HTMLElement[][] = [];
    for (const table of tables) {
      const cols = this.ensureCols(table, n, st);
      if (!cols) {
        // Cấu trúc colgroup lạ (số <col> khác số cột) -> không can thiệp bảng này
        this.states.set(wrapper, st);
        this.revert(wrapper);
        return false;
      }
      colsPerTable.push(cols);
    }

    const total = widths.reduce((s, w) => s + w, 0);
    tables.forEach((table, ti) => {
      if (!st!.origTables.has(table)) {
        st!.origTables.set(table, {
          width: table.style.width,
          minWidth: table.style.minWidth,
          tableLayout: table.style.tableLayout,
        });
      }
      table.style.tableLayout = 'fixed';
      table.style.width = `${total}px`;
      table.style.minWidth = `${total}px`;
      colsPerTable[ti].forEach((col, i) => {
        col.style.width = `${widths[i]}px`;
        col.style.minWidth = `${widths[i]}px`;
      });
    });

    // Cho phép cuộn ngang khi tổng độ rộng vượt khung (bảng không khai báo nzScroll.x)
    wrapper.querySelectorAll<HTMLElement>('.ant-table-body, .ant-table-content, cdk-virtual-scroll-viewport').forEach((el) => {
      if (el.closest('.ant-table') !== wrapper) return;
      if (!st!.origOverflow.has(el)) st!.origOverflow.set(el, el.style.overflowX);
      el.style.overflowX = 'auto';
    });

    st.widths = widths.slice();
    this.states.set(wrapper, st);
    this.modified.add(wrapper);
    this.seen.set(wrapper, n);
    this.fixStickyOffsets(wrapper, widths);
    return true;
  }

  /** <col> của bảng: dùng colgroup của nz-table nếu khớp số cột, chưa có thì tự tạo. */
  private ensureCols(table: HTMLTableElement, n: number, st: WrapperState): HTMLElement[] | null {
    let cg = table.querySelector(':scope > colgroup') as HTMLElement | null;
    if (!cg) {
      cg = this.doc.createElement('colgroup');
      table.insertBefore(cg, table.firstChild);
      st.created.push(cg);
    }
    let cols = Array.from(cg.children).filter((c) => c.tagName === 'COL') as HTMLElement[];
    if (cols.length === 0) {
      for (let i = 0; i < n; i++) {
        const col = this.doc.createElement('col');
        cg.appendChild(col);
        st.created.push(col);
      }
      cols = Array.from(cg.children) as HTMLElement[];
    }
    if (cols.length !== n) return null;
    for (const col of cols) {
      if (!st.created.includes(col) && !st.origCols.has(col)) {
        st.origCols.set(col, { width: col.style.width, minWidth: col.style.minWidth });
      }
    }
    return cols;
  }

  /** Trả bảng về trạng thái nz-table tự render (bỏ mọi style đã gắn). */
  private revert(wrapper: HTMLElement): void {
    const st = this.states.get(wrapper);
    if (!st) return;
    st.origTables.forEach((o, t) => {
      t.style.width = o.width;
      t.style.minWidth = o.minWidth;
      t.style.tableLayout = o.tableLayout;
    });
    st.origCols.forEach((o, c) => {
      c.style.width = o.width;
      c.style.minWidth = o.minWidth;
    });
    st.origOverflow.forEach((v, el) => (el.style.overflowX = v));
    st.created.forEach((el) => el.remove());
    this.states.delete(wrapper);
    this.modified.delete(wrapper);
    // left/right của cột cố định: nz-table tự tính lại khi đo lại độ rộng; ép đo lại bằng chính độ rộng gốc
    const grid = this.headerGrid(wrapper);
    const natural = this.measureWidths(wrapper, grid);
    natural && this.fixStickyOffsets(wrapper, natural);
  }

  /** Tính lại left/right cho các ô cố định (nzLeft/nzRight) theo độ rộng cột mới. */
  private fixStickyOffsets(wrapper: HTMLElement, widths: number[]): void {
    const cells = wrapper.querySelectorAll<HTMLTableCellElement>('.ant-table-cell-fix-left, .ant-table-cell-fix-right');
    if (!cells.length) return;
    const prefix = [0];
    widths.forEach((w, i) => prefix.push(prefix[i] + w));
    const total = prefix[widths.length];
    const grid = this.headerGrid(wrapper);
    cells.forEach((cell) => {
      if (cell.closest('.ant-table') !== wrapper) return;
      let start = grid.start.get(cell);
      if (start === undefined) {
        start = 0;
        let prev = cell.previousElementSibling as HTMLTableCellElement | null;
        while (prev) {
          start += prev.colSpan || 1;
          prev = prev.previousElementSibling as HTMLTableCellElement | null;
        }
      }
      const end = Math.min(start + (cell.colSpan || 1), widths.length);
      if (start >= widths.length) return;
      if (cell.classList.contains('ant-table-cell-fix-left')) {
        cell.style.left = `${prefix[start]}px`;
      } else {
        cell.style.right = `${total - prefix[end]}px`;
      }
    });
  }

  // ---------------------------------------------------------------- lưu / khôi phục

  /** Khóa lưu: thẻ component chứa bảng (app-xxx) + thứ tự bảng trong component + số cột. */
  private keyOf(wrapper: HTMLElement, leafCount: number): string | null {
    let host: HTMLElement | null = wrapper.parentElement;
    while (host && !host.tagName.startsWith('APP-')) host = host.parentElement;
    if (!host || host.tagName === 'APP-ROOT') return null;
    const all = Array.from(host.querySelectorAll('.ant-table'));
    const idx = all.indexOf(wrapper);
    if (idx < 0) return null;
    return `${STORAGE_PREFIX}${host.tagName.toLowerCase()}#${idx}:${leafCount}`;
  }

  private removeSaved(wrapper: HTMLElement, leafCount: number): void {
    const key = this.keyOf(wrapper, leafCount);
    if (!key) return;
    try {
      localStorage.removeItem(key);
    } catch {
      // bỏ qua
    }
  }

  private loadSaved(key: string, n: number): number[] | null {
    try {
      const v = JSON.parse(localStorage.getItem(key) || 'null');
      if (Array.isArray(v) && v.length === n && v.every((w) => Number.isFinite(w) && w > 0)) {
        return v.map((w) => this.clampWidth(w));
      }
    } catch {
      // dữ liệu hỏng -> bỏ qua
    }
    return null;
  }

  private scheduleScan(): void {
    if (this.scanScheduled) return;
    this.scanScheduled = true;
    requestAnimationFrame(() => {
      this.scanScheduled = false;
      if (!this.drag) this.scan();
    });
  }

  /**
   * Chạy sau mỗi đợt thay đổi DOM: khôi phục độ rộng đã lưu cho bảng mới xuất hiện; với bảng đã chỉnh thì
   * hoàn tác nếu số cột đổi (cột động), gỡ colgroup tự tạo nếu nz-table render thêm colgroup riêng, và tính
   * lại left/right cho các dòng cố định mới render.
   */
  private scan(): void {
    this.modified.forEach((wrapper) => {
      if (!wrapper.isConnected) {
        this.modified.delete(wrapper);
        return;
      }
      const st = this.states.get(wrapper)!;
      const n = this.headerGrid(wrapper).leafCount;
      const dupColgroup = this.tablesOf(wrapper).some((t) => t.querySelectorAll(':scope > colgroup').length > 1);
      if (n !== st.leafCount) {
        this.revert(wrapper);
        this.seen.delete(wrapper);
      } else if (dupColgroup) {
        const widths = st.widths;
        this.revert(wrapper);
        this.apply(wrapper, widths);
      } else {
        this.fixStickyOffsets(wrapper, st.widths);
      }
    });

    this.doc.querySelectorAll<HTMLElement>('.ant-table').forEach((wrapper) => {
      if (this.modified.has(wrapper) || !this.isSupported(wrapper)) return;
      const n = this.headerGrid(wrapper).leafCount;
      if (!n || this.seen.get(wrapper) === n) return;
      this.seen.set(wrapper, n);
      const key = this.keyOf(wrapper, n);
      const saved = key ? this.loadSaved(key, n) : null;
      if (saved) this.apply(wrapper, saved);
    });
  }
}
