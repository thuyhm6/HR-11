import * as XLSX from 'xlsx';

/**
 * Đọc/ghi file Excel (.xlsx) cho module Đào tạo bằng SheetJS - dùng chung cho các nút Import / Tải file mẫu / Xuất Excel
 * (Hợp đồng đào tạo, Lịch đào tạo, Đánh giá học viên/giảng viên, Kết quả đào tạo, Chi phí).
 */

/** Đọc sheet đầu tiên, bỏ dòng tiêu đề và các dòng trống ở cuối. Ô ngày/giờ giữ giá trị thô (số serial) để tự chuẩn hóa. */
export function readExcelRows(file: File): Promise<unknown[][]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const book = XLSX.read(reader.result as ArrayBuffer, { type: 'array' });
        const aoa = XLSX.utils.sheet_to_json<unknown[]>(book.Sheets[book.SheetNames[0]], { header: 1, raw: true, defval: '' });
        const rows = aoa.slice(1);
        let last = rows.length - 1;
        while (last >= 0 && rows[last].every((c) => String(c ?? '').trim() === '')) last--;
        resolve(rows.slice(0, last + 1));
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(file);
  });
}

/** Ghi 1 sheet (dòng tiêu đề + dữ liệu) ra file .xlsx. */
export function writeExcel(fileName: string, headers: string[], rows: unknown[][]): void {
  const sheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  const book = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, sheet, 'Sheet1');
  XLSX.writeFile(book, fileName.endsWith('.xlsx') ? fileName : `${fileName}.xlsx`);
}

/** Lấy file đầu tiên từ sự kiện chọn file và reset input để chọn lại cùng file được. */
export function takeFile(event: Event): File | null {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0] ?? null;
  input.value = '';
  return file;
}

export function cellText(value: unknown): string {
  return String(value ?? '').trim();
}
