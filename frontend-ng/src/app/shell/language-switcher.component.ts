import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

interface LanguageOption {
  code: string;
  nativeName: string;
}

/** 3 ngôn ngữ theo yêu cầu (Việt/Anh/Hàn) - Backend (I18nUtil) còn hỗ trợ sẵn 'zh' nhưng topbar chỉ
 *  lộ đúng 3 lựa chọn được yêu cầu. Tên hiển thị là tên riêng của từng ngôn ngữ (Tiếng Việt/English/
 *  한국어) - viết cố định, KHÔNG lấy qua key message.properties vì tên 1 ngôn ngữ không đổi theo ngôn
 *  ngữ đang chọn (quy ước UI chuẩn của các bộ chuyển đổi ngôn ngữ). */
const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'vi', nativeName: 'Tiếng Việt' },
  { code: 'en', nativeName: 'English' },
  { code: 'ko', nativeName: '한국어' },
];

/** Dropdown đổi ngôn ngữ trên topbar - gọi I18nService.setLanguage() (dùng lại API
 *  /api/current-language đã có sẵn ở backend, xem giải thích chi tiết tại đó) rồi reload trang. */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, NzDropdownModule, TranslatePipe],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LanguageSwitcherComponent implements OnInit {
  readonly languages = LANGUAGE_OPTIONS;

  constructor(readonly i18n: I18nService) {}

  ngOnInit(): void {
    this.i18n.loadCurrentLanguage();
  }

  select(code: string): void {
    if (code === this.i18n.currentLang()) return;
    this.i18n.setLanguage(code);
  }
}
