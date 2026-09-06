import { AuthDeptNode } from '../change-user/change-user.model';
import { PaPayScheduleDto } from '../view-pa-pay-stub/view-pa-pay-stub.model';

export type { AuthDeptNode, PaPayScheduleDto };

/** Tương ứng với PaItemInputDto.java - 1 dòng hạng mục trong 1 trong 4 khối (nhân sự/chấm công/nhập/tính),
 *  trả về từ GET /pa/salary/result/api/sectionItems và /savedItems. */
export interface PaItemInputDto {
  inputNo: number | null;
  itemNo: string;
  itemName: string;
  itemId: string;
  orderNo: number | null;
  isUse: number | null;
  itemType: number | null;
}

/** Tương ứng với response Map<String, List<PaItemInputDto>> của GET /pa/salary/result/api/sectionItems. */
export interface PaSectionItemsDto {
  hrItems: PaItemInputDto[];
  attendanceItems: PaItemInputDto[];
  inputItems: PaItemInputDto[];
  computeItems: PaItemInputDto[];
}

/** 1 dòng hạng mục đã gắn thêm state chọn/thứ tự để hiển thị & chỉnh sửa trên UI (không có ở backend). */
export interface SectionItemRow {
  itemNo: string;
  itemId: string;
  itemName: string;
  checked: boolean;
  orderNo: number | null;
}

/** Item gửi lên trong body POST /pa/salary/result/api/save - tương ứng PaItemInputSaveReqDto.items. */
export interface PaItemInputSaveItem {
  itemNo: string;
  itemId: string;
  itemName: string;
  orderNo: number | null;
}

/** Tương ứng với PaItemInputSaveReqDto.java. */
export interface PaItemInputSaveReqDto {
  isUse: number;
  itemType: number;
  items: PaItemInputSaveItem[];
}

/** Tham số GET /pa/salary/result/api/exportExcel. */
export interface PaResultExportExcelParams {
  payScheduleNo: string;
  deptNos: string;
  itemIds: string;
}
