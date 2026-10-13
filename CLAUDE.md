# CLAUDE.md — HR-11 (HVV-VHR)

## 1. Quy tắc giao tiếp
- BẮT BUỘC trả lời, giải thích, bình luận code bằng **TIẾNG VIỆT**. Giữ nguyên thuật ngữ tiếng Anh chuyên ngành (function, class, variable...).
- Trả lời ngắn gọn, tập trung vào giải pháp kỹ thuật.
- Khi sửa code: giải thích ngắn gọn trước nếu sửa nhiều file; sau khi sửa phải **tóm tắt thay đổi** và **giải thích lý do**.
- Ưu tiên tái sử dụng code đã có (service, mapper, API, component, message key). Nếu buộc phải viết lại code đã tồn tại thì giải thích rõ lý do.

## 2. Tổng quan dự án
Hệ thống quản trị nhân sự (HR) cho Hanwha Vision Vietnam: nhân sự, chấm công, OT, nghỉ phép, lương, đánh giá, đào tạo, hợp đồng, tuyển dụng, phê duyệt (tích hợp Cleverse).

| Thành phần | Công nghệ |
|---|---|
| Backend | Spring Boot 3.5.5, Java 21, đóng gói **WAR** (artifact `HR-11`) |
| Persistence | MyBatis 3 (mapper XML), **Oracle** (ojdbc11), HikariCP |
| Frontend | **Angular 22** (standalone component, signals) + **NG-ZORRO 22** + Bootstrap 5 (grid/utility) + Boxicons (`bx bx-...`) |
| Excel | Backend: Apache POI 5.2.5 (`poi-ooxml`); Frontend: SheetJS (`xlsx`) |
| Khác | Spring Security (CSRF, BCrypt), Caffeine cache, Actuator, Axis 1.4 (SOAP Cleverse), Lombok |
| Server deploy | Tomcat 10.x hoặc JEUS 8.5 (exploded WAR) |

Tài khoản đăng nhập mặc định: **admin / Thuyhm6^** (quyền cao nhất, tạo user khác và phân quyền).

> Thymeleaf đã bị loại bỏ — toàn bộ UI là Angular SPA. Các comment "bản Thymeleaf gốc" trong code chỉ để tham chiếu lịch sử migrate.

## 3. Cấu trúc thư mục
```
src/main/java/com/ait/
  Hr11Application.java
  config/        SecurityConfig, MyBatisConfig, AngularSpaConfig, MultilingualConfig, GlobalApiExceptionHandler, SqlOnlyInterceptor...
  interceptor/   LanguageParameterInterceptor (MyBatis plugin tự inject tham số), MonitoringInterceptor
  exception/     BaseException, BusinessException, ValidationException, TechnicalException, GlobalExceptionHandler
  util/          I18nUtil, MultilingualUtil, IpUtil, CsrfUtil, ExcelJxForEachUtil, DataTablesSearchUtil...
  annotation/    @RequireLogin      aspect/ LoggingAspect      validation/
  <module>/<chức năng>/{controller, service, service/impl, mapper, dto}
     Module: ar (chấm công), ess (tự phục vụ NV), hrm (nhân sự), org (tổ chức), pa (lương),
             evs (đánh giá), edu (đào tạo), contract, report, disc, sy (hệ thống: user, role, menu, code, i18n...),
             cleverse (SOAP phê duyệt/mail + scheduler đồng bộ)
src/main/java/hanwha/neo/...   Stub SOAP client Cleverse (Axis) — không sửa tay
src/main/resources/
  application*.properties      Cấu hình (DB qua biến môi trường DB_URL/DB_USERNAME/DB_PASSWORD, port 8082)
  com/ait/mapper/*.xml         TẤT CẢ mapper XML nằm phẳng ở đây (không theo package)
  messages*.properties         i18n: messages (mặc định), _vi_VN, _en_US, _ko_KR, _zh_CN
  templates/                   File Excel template (.xls/.xlsx) cho export theo mẫu
  static/ng-app/               Output build Angular (KHÔNG sửa tay, bị xóa mỗi lần build)
  sql/                         Script tạo bảng / dữ liệu mẫu
frontend-ng/                   Source Angular
  src/app/app.routes.ts        Khai báo route (lazy loadComponent) dưới AppShellComponent
  src/app/shell/               Layout, menu sidebar, tab đa trang (TabService, TabRouteReuseStrategy)
  src/app/i18n/                I18nService + TranslatePipe
  src/app/auth/                Login, authGuard, hrmAccessGuard
  src/app/shared/              table.constants.ts (PAGE_SIZE_OPTIONS)
  src/app/<tên-trang>/         Mỗi trang 1 thư mục (xem mục 5)
```

## 4. Backend — quy ước

### 4.1 Layer & đặt tên
- `XxxController` → `XxxService` (interface) → `XxxServiceImpl` (`@Service`) → `XxxMapper` (interface `@Mapper`) → `src/main/resources/com/ait/mapper/XxxMapper.xml`.
- Controller: `@Controller` + `@RequestMapping("/<module>/<chức năng>")`, method trả JSON dùng `@ResponseBody` + `ResponseEntity<?>`; endpoint dạng `/.../api/list`, `/api/insert` (POST), `/api/update` (PUT), `/api/delete`...
- Lỗi trả về dạng `Map.of("error", msg)`; thành công `Map.of("success", true, "message", ...)`.
- Danh sách phân trang: DTO có `draw/start/length`, trả `com.ait.sy.sys.dto.DataTablesResponse<T>` (`draw, recordsTotal, recordsFiltered, data, error`). Mapper có cặp `countXxx` + `selectXxxPage` (phân trang Oracle bằng `ROWNUM`).
- CamelCase, dùng `@Service`, `@Repository`/`@Mapper`, `@Autowired`. Mẫu tham khảo: `com.ait.pa.salary` (PaFormulaController / PaFormulaServiceImpl / PaFormulaMapper.xml).

### 4.2 Tham số tự inject — KHÔNG truyền từ Java
`LanguageParameterInterceptor` (MyBatis plugin) lấy từ session và tự đưa vào parameter của mọi câu SQL:
`#{cpnyId}`, `#{adminID}`, `#{adminIP}`, `#{lang}`.
→ Ở Java **không** truyền/set cpnyId, createBy, updateBy, createIp, updateIp, language. Mapper XML dùng trực tiếp các biến trên.
(Ngoại lệ: chạy từ scheduler không có session — xem `cleverse.approval.cpny-id` trong application.properties.)

### 4.3 Service layer
- Mọi method có logging (`slf4j Logger`) và `try-catch` ghi log chi tiết (`log.error("...", e.getMessage(), e)`) rồi throw lại / trả lỗi rõ ràng.
- Method thay đổi dữ liệu phải có `@Transactional` (rollbackFor Exception khi cần).
- Trả về DTO hoặc thông báo lỗi chi tiết; dùng `@Valid` cho DTO đầu vào khi phù hợp. Xử lý ngoại lệ tập trung qua `GlobalApiExceptionHandler` / `@ExceptionHandler`, dùng `BusinessException`/`ValidationException` có sẵn.

### 4.4 Mapper XML
- Luôn dùng **`resultMap`** để map kết quả vào DTO (không dùng `resultType` cho DTO).
- Luôn khai báo **`jdbcType`** cho MỌI tham số: `#{empId, jdbcType=VARCHAR}`, `#{start, jdbcType=NUMERIC}`, `#{date, jdbcType=DATE}`...
- Tìm kiếm theo `LOCAL_NAME` (và tên có dấu nói chung): `CONVERTTOUNSIGN(UPPER(X.LOCAL_NAME)) LIKE '%' || CONVERTTOUNSIGN(UPPER(#{keyword, jdbcType=VARCHAR})) || '%'`.
- Escape `<`/`>` bằng `&lt;`/`&gt;`; SQL phức tạp viết trong XML (dùng `<sql>` + `<include>`), không ghép SQL trong Java.
- Tên đa ngôn ngữ trong DB lấy theo `#{lang}` (vd. bảng `SY_GLOBAL_NAME`).

## 5. Frontend Angular — quy ước

### 5.1 Cấu trúc 1 trang mới (`frontend-ng/src/app/<ten-trang>/`)
```
<ten-trang>.component.ts / .html / .css
<ten-trang>.service.ts      // @Injectable({providedIn:'root'}), HttpClient, const API_BASE = '/module/...', withCredentials: true
<ten-trang>.model.ts        // interface DTO
```
- Component **standalone**, import riêng từng module NG-ZORRO cần dùng (`NzTableModule`, `NzSelectModule`...) + `TranslatePipe`. State dùng `signal()`.
- Thông báo dùng `NzMessageService` / `NzModalService`.

### 5.2 Đăng ký trang
1. Thêm route lazy vào `app.routes.ts` (children của AppShellComponent): `{ path: 'ten-trang', loadComponent: () => import(...).then(m => m.XxxComponent) }`.
2. Nếu menu trong DB (bảng menu, URL cũ dạng `/module/xxx/viewXxx`) trỏ tới trang này → thêm cặp `'<menuUrl>': '/ten-trang'` vào `MIGRATED_ROUTES` trong `shell/app-shell.component.ts`. Menu chưa có trong map sẽ mở dạng tab external.

### 5.3 Đa ngôn ngữ (bắt buộc)
- KHÔNG hardcode text hiển thị. Text lấy từ `messages*.properties` ở backend qua `GET /api/i18n/messages?keys=...` (I18nService).
- Trong component khai báo `const I18N_KEYS = [...]` và gọi `this.i18n.loadKeys(I18N_KEYS)` trong `ngOnInit`.
- Template: `{{ 'module.page.key' | translate:'Text mặc định tiếng Việt' }}`; trong TS: `this.i18n.t('key', 'Fallback tiếng Việt')`. Fallback mặc định là **tiếng Việt**.
- Key mới phải thêm vào **đủ 5 file**: `messages.properties`, `messages_vi_VN`, `messages_en_US`, `messages_ko_KR`, `messages_zh_CN`. Nếu key/text đã có (vd. `common.search`, `common.save`, `common.loadFail`...) thì dùng lại, không tạo mới. Đặt key theo dạng `<module>.<trang>.<tên>`.

### 5.4 Id / class CSS
- Tránh trùng id giữa các file: dùng **tên viết tắt của file làm tiền tố** cho id và class riêng (vd. `pa-month-person-info` → `vpmpi-...`). Nếu buộc phải trùng id thì giải thích rõ lý do.

### 5.5 Bảng & dữ liệu
- Dữ liệu dạng bảng dùng **`nz-table`**; số dòng/trang dùng `PAGE_SIZE_OPTIONS` từ `shared/table.constants.ts`.
- Định dạng ngày: `DD/MM/YYYY` hoặc `DD/MM/YYYY HH24:MI` (HH:mm) tùy ngữ cảnh.
- Export Excel luôn ra **.xlsx**: phía client dùng `XLSX` (SheetJS) như `contract-info-list`; export theo mẫu/khối lượng lớn dùng POI ở backend (template trong `resources/templates/`, tiện ích `ExcelJxForEachUtil`, `ExcelServiceImpl`).
- CSRF: Angular tự gắn header `X-XSRF-TOKEN` từ cookie `XSRF-TOKEN` (cấu hình ở `app.config.ts`) — không cần code thủ công.

## 6. Quy trình khi tạo chức năng mới
Khi tạo file giao diện mới thì tạo luôn backend liên quan: **Controller, Service + ServiceImpl, Mapper (Java) + Mapper XML, DTO**, các message key (5 file properties), route Angular và (nếu có) entry `MIGRATED_ROUTES`.

## 7. Build & chạy
- Backend dev: chạy `Hr11Application` (port **8082**, cần biến môi trường DB nếu khác mặc định).
- Frontend dev: `cd frontend-ng && npm start` (ng serve, proxy `/api`, `/ess`, `/auth`, `/assets` → `localhost:8082`, xem `proxy.conf.json`). API của module khác (vd. `/pa/...`, `/hrm/...`) cần thêm vào proxy nếu chạy qua ng serve.
- Build frontend: `cd frontend-ng && npm run build` → output vào `src/main/resources/static/ng-app/` (Spring phục vụ SPA qua `AngularSpaConfig`, fallback `index.html`).
- Build/deploy toàn bộ: `deploy-jeus.bat` (không tham số = chỉ build; `tomcat` / `jeus` = build + deploy) → `target/exploded-war`.
- Maven: `mvnw.cmd package` (Maven KHÔNG tự build Angular — phải `npm run build` trước).

## 8. Lưu ý
- Không sửa: `static/ng-app/` (output build), `hanwha/neo/**` (stub SOAP), file trong `logs/`, `target/`.
- Tích hợp Cleverse (phê duyệt, mail, đồng bộ trạng thái theo cron) cấu hình ở `application.properties` mục `cleverse.*`; code trong `com.ait.cleverse`.
- `AGENTS.md` là bản cũ rút gọn của file này — CLAUDE.md là nguồn chuẩn.
