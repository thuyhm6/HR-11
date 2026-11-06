/**
 * Sinh file tĩnh src/main/webapp/assets/js/iconify-icons.js chứa sẵn dữ liệu SVG của các icon Iconify
 * mà hệ thống dùng -> <iconify-icon> render ngay, KHÔNG cần gọi API (kể cả API nội bộ /api/iconify/),
 * nên icon menu/sidebar/topbar luôn hiển thị khi server/máy client không có Internet.
 *
 * Nguồn icon: bộ đầy đủ src/main/resources/iconify/{prefix}.json (cũng là dữ liệu của IconifyController).
 * Danh sách icon cần gói lấy từ:
 *   - code Angular (frontend-ng/src), JS tĩnh (src/main/webapp/assets/js/components)
 *   - script SQL (src/main/resources/sql) - icon menu (cột MENU_IMG)
 *   - frontend-ng/scripts/iconify-extra-icons.txt - icon menu chỉ có trong DB (nhập ở màn "Quản lý Menu")
 *
 * Chạy: cd frontend-ng && npm run icons (tự chạy trước mỗi lần npm run build - hook "prebuild").
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const FE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = resolve(FE_DIR, '..');
const ICON_SET_DIR = join(ROOT, 'src/main/resources/iconify');
const OUTPUT = join(ROOT, 'src/main/webapp/assets/js/iconify-icons.js');
const EXTRA_FILE = join(FE_DIR, 'scripts/iconify-extra-icons.txt');

const SCAN = [
  { dir: join(FE_DIR, 'src'), ext: /\.(ts|html)$/ },
  { dir: join(ROOT, 'src/main/webapp/assets/js/components'), ext: /\.js$/ },
  { dir: join(ROOT, 'src/main/resources/sql'), ext: /\.sql$/i },
];

/** Bộ icon có trên server (solar, ...) -> chỉ bắt "prefix:ten-icon" với prefix có file json */
const prefixes = readdirSync(ICON_SET_DIR).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5));
const ICON_RE = new RegExp(`\\b(${prefixes.join('|')}):([a-z0-9]+(?:-[a-z0-9]+)*)`, 'g');

function walk(dir, ext, out) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, ext, out);
    else if (ext.test(name)) out.push(p);
  }
  return out;
}

/** prefix -> Set tên icon */
const wanted = new Map(prefixes.map(p => [p, new Set()]));
const collect = text => {
  for (const m of text.matchAll(ICON_RE)) wanted.get(m[1]).add(m[2]);
};
for (const { dir, ext } of SCAN) walk(dir, ext, []).forEach(f => collect(readFileSync(f, 'utf8')));
if (existsSync(EXTRA_FILE)) {
  collect(readFileSync(EXTRA_FILE, 'utf8').split('\n').filter(l => !l.trim().startsWith('#')).join('\n'));
}

const collections = [];
const missing = [];
for (const [prefix, names] of wanted) {
  if (!names.size) continue;
  const set = JSON.parse(readFileSync(join(ICON_SET_DIR, `${prefix}.json`), 'utf8'));
  const icons = {};
  const aliases = {};
  // Copy icon (nếu là alias thì copy cả alias + icon gốc)
  const add = (name, depth = 0) => {
    if (depth > 8) return false;
    if (icons[name] || aliases[name]) return true;
    if (set.icons[name]) return (icons[name] = set.icons[name]), true;
    const alias = set.aliases?.[name];
    if (alias && add(alias.parent, depth + 1)) return (aliases[name] = alias), true;
    return false;
  };
  for (const name of [...names].sort()) if (!add(name)) missing.push(`${prefix}:${name}`);

  const collection = { prefix, icons };
  if (Object.keys(aliases).length) collection.aliases = aliases;
  for (const k of ['width', 'height', 'left', 'top']) if (set[k] !== undefined) collection[k] = set[k];
  collections.push(collection);
}

const total = collections.reduce((n, c) => n + Object.keys(c.icons).length + Object.keys(c.aliases || {}).length, 0);
const js = `/**
 * FILE SINH TỰ ĐỘNG bởi frontend-ng/scripts/build-iconify-icons.mjs - KHÔNG sửa tay.
 * Dữ liệu SVG của ${total} icon Iconify dùng trong hệ thống (license bộ Solar: CC BY 4.0), đăng ký sẵn
 * vào <iconify-icon> để icon hiển thị không cần Internet/API. Phải nạp SAU vendor.js.
 */
(function () {
  var IconifyIcon = window.customElements && window.customElements.get('iconify-icon');
  if (!IconifyIcon || typeof IconifyIcon.addCollection !== 'function') return;
  var collections = ${JSON.stringify(collections)};
  for (var i = 0; i < collections.length; i++) {
    IconifyIcon.addCollection(collections[i]);
  }
})();
`;
writeFileSync(OUTPUT, js, 'utf8');
console.log(`[iconify] Đã gói ${total} icon -> ${OUTPUT}`);
if (missing.length) console.warn(`[iconify] Không tìm thấy trong bộ icon: ${missing.join(', ')}`);
