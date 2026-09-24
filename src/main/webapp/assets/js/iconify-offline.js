/**
 * Nạp sẵn (offline) bộ icon "solar" đang dùng cho menu/sidebar/topbar vào Iconify - tránh việc
 * <iconify-icon> phải gọi ra Internet (api.iconify.design/api.simplesvg.com/api.unisvg.com) để lấy
 * dữ liệu SVG mỗi khi tải trang, giúp icon hiển thị đúng cả khi máy không có mạng.
 *
 * File iconify-offline-icons.json chỉ chứa các icon "solar:xxx" đang được dùng trong code (menu
 * sidebar, topbar, thông báo, khoá màn hình...) - nếu sau này thêm icon "solar:" mới (vd khi tạo menu
 * mới ở màn "Quản lý Menu") mà icon đó chưa có trong file này, <iconify-icon> vẫn tự động gọi API
 * online như cũ (không bị lỗi), chỉ là sẽ cần Internet cho riêng icon mới đó. Muốn icon mới cũng chạy
 * offline thì tải bổ sung icon đó từ https://api.iconify.design/solar.json?icons=ten-icon-moi và gộp
 * vào key "icons" trong iconify-offline-icons.json.
 *
 * Phải nạp SAU khi vendor.js đã chạy (để customElements.get('iconify-icon') tồn tại) và TRƯỚC khi
 * Angular render icon lên DOM.
 */
(function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/assets/js/iconify-offline-icons.json', true);
  xhr.onload = function () {
    if (xhr.status !== 200) return;
    try {
      var data = JSON.parse(xhr.responseText);
      // vendor.js (gói iconify-icon) không lộ global window.Iconify - API (addCollection, addIcon...)
      // được gắn thẳng vào class của custom element, lấy qua customElements.get('iconify-icon').
      var IconifyIcon = window.customElements && window.customElements.get('iconify-icon');
      if (IconifyIcon && typeof IconifyIcon.addCollection === 'function') {
        IconifyIcon.addCollection(data);
      }
    } catch (e) {
      // Bỏ qua - iconify-icon sẽ tự fallback gọi API online như hành vi mặc định trước đây.
    }
  };
  xhr.send();
})();
