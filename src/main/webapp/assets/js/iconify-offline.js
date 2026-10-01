/**
 * Chạy <iconify-icon> hoàn toàn offline: mặc định custom element này gọi ra Internet
 * (api.iconify.design/api.simplesvg.com/api.unisvg.com) để lấy dữ liệu SVG, nên khi server/máy client
 * không có mạng thì icon menu/sidebar/topbar bị trống.
 *
 * Ở đây ghi đè API provider mặc định ("") trỏ về API nội bộ của chính server
 * (IconifyController: GET /assets/iconify/{prefix}.json?icons=...), dữ liệu lấy từ bộ icon đầy đủ
 * đóng gói sẵn trong src/main/resources/iconify/ - nên MỌI icon "solar:xxx" (kể cả icon mới nhập ở
 * màn "Quản lý Menu") đều hiển thị được mà không cần Internet.
 *
 * Phải nạp SAU vendor.js (để customElements.get('iconify-icon') tồn tại) và TRƯỚC khi Angular render
 * icon lên DOM - script chạy đồng bộ nên thứ tự này được đảm bảo (không dùng XHR bất đồng bộ như
 * trước, tránh trường hợp icon đã render và gọi API online trước khi dữ liệu offline kịp nạp xong).
 */
(function () {
  try {
    // vendor.js (gói iconify-icon) không lộ global window.Iconify - API (addAPIProvider...) được gắn
    // thẳng vào class của custom element, lấy qua customElements.get('iconify-icon').
    var IconifyIcon = window.customElements && window.customElements.get('iconify-icon');
    if (IconifyIcon && typeof IconifyIcon.addAPIProvider === 'function') {
      // Lấy base từ <base href> để vẫn đúng nếu app được deploy dưới context-path
      var base = document.baseURI.replace(/\/+$/, '');
      IconifyIcon.addAPIProvider('', {
        resources: [base],
        path: '/assets/iconify/'
      });
    }
  } catch (e) {
    // Bỏ qua - iconify-icon sẽ dùng API online như hành vi mặc định.
  }
})();
