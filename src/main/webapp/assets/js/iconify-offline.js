/**
 * Chạy <iconify-icon> hoàn toàn offline: mặc định custom element này gọi ra Internet
 * (api.iconify.design/api.simplesvg.com/api.unisvg.com) để lấy dữ liệu SVG, nên khi server/máy client
 * không có mạng thì icon menu/sidebar/topbar bị trống.
 *
 * Ở đây ghi đè API provider mặc định ("") trỏ về API nội bộ của chính server
 * (IconifyController: GET /api/iconify/{prefix}?icons=...), dữ liệu lấy từ bộ icon đầy đủ
 * đóng gói sẵn trong src/main/resources/iconify/ - nên MỌI icon "solar:xxx" (kể cả icon mới nhập ở
 * màn "Quản lý Menu") đều hiển thị được mà không cần Internet.
 *
 * Không dùng URL dạng /assets/iconify/{prefix}.json như trước: trên server thật, web server/reverse
 * proxy đứng trước WAS (WebtoB, Apache, IIS, Nginx...) thường tự phục vụ /assets/** hoặc *.json như file
 * tĩnh -> file này không tồn tại trên đĩa nên trả 404, request không tới được Spring -> icon bị trống
 * (máy dev chạy thẳng Spring Boot nên không gặp).
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
      // Lấy base theo đúng nơi trình duyệt đã tải chính file script này (.../assets/js/iconify-offline.js)
      // -> vẫn đúng khi app deploy dưới context-path (vd JEUS /HR-11); fallback về <base href>.
      var script = document.currentScript;
      var base = script && script.src
        ? script.src.replace(/\/assets\/js\/iconify-offline\.js(\?.*)?$/, '')
        : document.baseURI;
      base = base.replace(/\/+$/, '');

      IconifyIcon.addAPIProvider('', {
        resources: [base],
        path: '/api/iconify/'
      });

      // iconify-icon luôn ghép URL dạng "{path}{prefix}.json?icons=..." -> bỏ đuôi ".json" để request
      // thành /api/iconify/{prefix}?icons=... (cùng kiểu URL với các API JSON khác của hệ thống).
      var api = IconifyIcon._api;
      if (api && typeof api.setFetch === 'function' && typeof window.fetch === 'function') {
        var apiPrefix = base + '/api/iconify/';
        api.setFetch(function (url, init) {
          if (typeof url === 'string' && url.indexOf(apiPrefix) === 0) {
            url = url.replace(/\.json\?/, '?');
          }
          return window.fetch(url, init);
        });
      }
    }
  } catch (e) {
    // Bỏ qua - iconify-icon sẽ dùng API online như hành vi mặc định.
  }
})();
