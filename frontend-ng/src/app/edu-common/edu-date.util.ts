/** Chuyển giữa chuỗi ngày DD/MM/YYYY (định dạng API module Đào tạo) và Date (nz-date-picker). */

export function parseDmy(value: string | null | undefined): Date | null {
  if (!value) return null;
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value.trim());
  if (!m) return null;
  const d = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  return isNaN(d.getTime()) ? null : d;
}

export function formatDmy(value: Date | null | undefined): string {
  if (!value) return '';
  const dd = String(value.getDate()).padStart(2, '0');
  const mm = String(value.getMonth() + 1).padStart(2, '0');
  return `${dd}/${mm}/${value.getFullYear()}`;
}

/** Số ngày tính cả 2 đầu (bản gốc DateDiff() + 1) - null nếu thiếu ngày hoặc ngày kết thúc trước ngày bắt đầu. */
export function daysInclusive(start: Date | null, end: Date | null): number | null {
  if (!start || !end) return null;
  const s = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const e = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  if (e < s) return null;
  return Math.round((e - s) / 86400000) + 1;
}

/**
 * Chuẩn hóa ô ngày đọc từ Excel (SheetJS, raw: false) về DD/MM/YYYY: nhận "d/m/yyyy", "yyyy-mm-dd" hoặc số serial Excel.
 * Trả về chuỗi gốc nếu không nhận dạng được để BE báo lỗi đúng dòng.
 */
export function normalizeExcelDate(value: unknown): string {
  if (value === null || value === undefined || value === '') return '';
  if (typeof value === 'number') {
    const d = new Date(Math.round((value - 25569) * 86400000));
    return formatDmy(new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  }
  const text = String(value).trim();
  const dmy = parseDmy(text);
  if (dmy) return formatDmy(dmy);
  const iso = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(text);
  if (iso) return formatDmy(new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])));
  return text;
}
