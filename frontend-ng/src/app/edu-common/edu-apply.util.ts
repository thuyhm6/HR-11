import { I18nService } from '../i18n/i18n.service';
import { APPLY_FLAGS, CONFIRM_FLAGS, EduApplyRow } from './edu-apply.model';
import { classHourText } from './edu-basic-header.component';
import { formatDmy } from './edu-date.util';
import { courseWithPeriod } from './edu-train.model';

/** Hàm hiển thị dùng chung cho các bảng đơn đăng ký khóa đào tạo (Phê duyệt, Xác nhận, Tình hình). */
export function applyCourseTitle(i18n: I18nService, r: EduApplyRow): string {
  return courseWithPeriod((k, f) => i18n.t(k, f), r.courseNameCode, r.periodTime);
}

export function applyClassHour(i18n: I18nService, r: EduApplyRow): string {
  return classHourText(i18n, r.impleClassHour, r.impleClassUnit);
}

export function applyFlagLabel(i18n: I18nService, flag: string | null | undefined): string {
  const f = APPLY_FLAGS.find((x) => x.value === flag);
  return f ? i18n.t(f.key, f.fallback) : '';
}

export function applyFlagColor(flag: string | null | undefined): string {
  return APPLY_FLAGS.find((x) => x.value === flag)?.color ?? 'default';
}

export function confirmFlagLabel(i18n: I18nService, flag: string | null | undefined): string {
  const f = CONFIRM_FLAGS.find((x) => x.value === flag);
  return f ? i18n.t(f.key, f.fallback) : '';
}

export function confirmFlagColor(flag: string | null | undefined): string {
  return CONFIRM_FLAGS.find((x) => x.value === flag)?.color ?? 'default';
}

/** Điều kiện mặc định "tháng hiện tại" (bản gốc courseConfirm, makerSituation) - giống EduApplyFilterComponent defaultMonth. */
export function currentMonthSearch(): { startDate: string; endDate: string } {
  const now = new Date();
  return {
    startDate: formatDmy(new Date(now.getFullYear(), now.getMonth(), 1)),
    endDate: formatDmy(new Date(now.getFullYear(), now.getMonth() + 1, 0)),
  };
}

/** Lọc nhanh trên các cột chữ của đơn đăng ký. */
export function matchApplyRow(r: EduApplyRow, keyword: string): boolean {
  const kw = keyword.trim().toLowerCase();
  if (!kw) return true;
  return [r.empId, r.stuLocalName, r.deptName, r.postGradeName, r.trainTypeCodeName, r.courseNameCode, r.applyTask,
    r.makerLocalName].some((v) => (v ?? '').toLowerCase().includes(kw));
}

/** Key message.properties của các hàm trên + cột chung của bảng đơn đăng ký. */
export const APPLY_TABLE_I18N_KEYS = [
  ...APPLY_FLAGS.map((f) => f.key), ...CONFIRM_FLAGS.map((f) => f.key),
  'ess.infoApply.EMPID', 'ess.viewApply.title.applyName', 'hr.viewPersonalInfo.title.DEPTNAME',
  'hr.viewPersonalInfo.title.POST_GRADE_NAME', 'edu.systemManager.PEIXUNLEIXING.a', 'edu.trainArchives.KECHENGMINGCHENGQICI.a',
  'edu.planManager.SHISHIRIQI.a', 'edu.planManager.PEIXUNKESHI.a', 'edu.planManager.KECHENGBIAO.a',
  'edu.planManager.CHAKANKECHENGBIAO.a', 'ess.empInfo.date_application', 'pa.salarycode.affirm.reason',
  'ess.viewApply.title.affirmCondition', 'edu.courseConfirm.QUERENQINGKUANG.a', 'edu.planManager.QI.a',
  'ar.alert.message.excelimport.title.di', 'ar.viewsummaryparameteritem.title.hour', 'display.mutual.month',
  'ar.viewsummaryparameteritem.title.day', 'edu.courseApply.applyDate',
  'common.stt', 'common.noData', 'common.totalRows', 'common.loadFail', 'common.quickFilter', 'common.confirm', 'common.cancel',
];
