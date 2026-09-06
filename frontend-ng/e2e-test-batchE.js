const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = 'http://localhost:8080';
const OUT_DIR = 'C:\\Users\\ADMIN\\AppData\\Local\\Temp\\claude\\d--Java-WorkSpace-New-HR-HAE-VHR\\b0e0cce3-d476-49af-b9bf-5f157df10393\\scratchpad\\shotsE';
fs.mkdirSync(OUT_DIR, { recursive: true });

const consoleErrors = [];
function logConsole(page) {
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => consoleErrors.push('PAGEERROR: ' + err.message));
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1700, height: 1200 } });
  const page = await context.newPage();
  logConsole(page);
  const netErrors = [];
  page.on('response', (res) => {
    const u = res.url();
    if ((u.includes('/infoApplyAttendance/') || u.includes('/leaveApply/') || u.includes('/empinfo/') || u.includes('/employee/')) && res.status() >= 400) {
      netErrors.push(`${res.status()} ${u}`);
    }
  });

  console.log('--- LOGIN ---');
  await page.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
  await page.fill('#hae-login-username input, #hae-login-username', 'admin');
  await page.fill('#hae-login-password input, #hae-login-password', 'Thuyhm6^');
  await page.click('#hae-login-submit');
  await page.waitForURL('**/dashboard', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);

  // --- al: viewApplyAttendanceInfoList ---
  console.log('\n--- PAGE: viewApplyAttendanceInfoList ---');
  try {
    await page.goto(`${BASE}/ess/infoApplyAttendance/viewApplyAttendanceInfoList`, { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForSelector('#al-search-btn', { timeout: 15000 });
    await page.waitForTimeout(1200);
    const rowCount = await page.locator('#al-data-table tbody tr').count().catch(() => -1);
    console.log('  loaded OK, row count:', rowCount);
    await page.screenshot({ path: path.join(OUT_DIR, 'al-01.png'), fullPage: true });

    const link = page.locator('.al-name-link').first();
    if (await link.count()) {
      await link.click();
      await page.waitForTimeout(1200);
      await page.screenshot({ path: path.join(OUT_DIR, 'al-02-detail.png'), fullPage: true });
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
    } else {
      console.log('  no name link found (maybe no data)');
    }

    // Test nút Xin nghỉ phép điều hướng
    await page.click('#al-apply-btn');
    await page.waitForURL('**/viewSSTApplyAttendance', { timeout: 10000 }).catch(() => {});
    console.log('  after clicking apply btn, url:', page.url());
  } catch (e) {
    console.log('  ERROR:', e.message);
  }

  // --- sa: viewSSTApplyAttendance ---
  console.log('\n--- PAGE: viewSSTApplyAttendance ---');
  try {
    await page.goto(`${BASE}/ess/infoApplyAttendance/viewSSTApplyAttendance`, { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForSelector('#sa-submit-btn', { timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(OUT_DIR, 'sa-01-initial.png'), fullPage: true });

    // Chọn loại nghỉ phép
    await page.click('#sa-leave-type');
    await page.waitForTimeout(500);
    const firstOption = page.locator('nz-option-item').first();
    if (await firstOption.count()) {
      await firstOption.click();
      await page.waitForTimeout(1500); // chờ tính duration + load vacation info
    }
    await page.screenshot({ path: path.join(OUT_DIR, 'sa-02-leavetype-selected.png'), fullPage: true });

    // Nhập lý do
    await page.fill('#sa-reason', 'Playwright test reason');

    // Thêm người phê duyệt
    await page.click('#sa-add-approver-btn');
    await page.waitForTimeout(500);
    await page.click('#sa-approver-search');
    await page.waitForTimeout(300);
    await page.keyboard.type('a');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(OUT_DIR, 'sa-03-approver-search.png'), fullPage: true });
    const approverOption = page.locator('nz-option-item').first();
    if (await approverOption.count()) {
      await approverOption.click();
      await page.waitForTimeout(300);
      await page.click('#sa-approver-table button.ant-btn-primary');
      await page.waitForTimeout(500);
    }
    await page.screenshot({ path: path.join(OUT_DIR, 'sa-04-approver-added.png'), fullPage: true });

    // Thử submit (không quan tâm thành công/thất bại nghiệp vụ, chỉ xem UI phản hồi)
    await page.click('#sa-submit-btn');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(OUT_DIR, 'sa-05-after-submit.png'), fullPage: true });
  } catch (e) {
    console.log('  ERROR:', e.message);
  }

  console.log('\n=== HTTP errors ===', netErrors);
  console.log('\n=== CONSOLE ERRORS (excluding known icon issues) ===');
  consoleErrors.filter((e) => !e.includes('icons-angular')).forEach((e) => console.log(e));

  await browser.close();
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
