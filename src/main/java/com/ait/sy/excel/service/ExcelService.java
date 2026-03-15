package com.ait.sy.excel.service;

import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface ExcelService {
    /**
     * Tạo file Excel mẫu cho chức năng xếp ca (AR_SCHEDULE_HTSV).
     *
     * @param shiftList  danh sách ca làm việc [{shiftNo, nameVi}, ...]
     * @param typeList   danh sách loại ngày [{code, name}, ...]
     */
    Workbook buildScheduleHtsvTemplate(List<Map<String, Object>> shiftList, List<Map<String, Object>> typeList);

    /**
     * Import dữ liệu từ file Excel vào AR_SCHEDULE_HTSV.
     * Trả về danh sách lỗi (nếu có). List rỗng nghĩa là tất cả thành công.
     */
    List<String> importScheduleHtsv(MultipartFile file) throws IOException;
}
