package com.ait.hrm.uniform.service;

import com.ait.exception.BusinessException;
import com.ait.hrm.uniform.dto.HrUniformChangeDto;
import com.ait.hrm.uniform.dto.HrUniformChangeSearchDto;
import com.ait.hrm.uniform.dto.HrUniformEmpInfoDto;
import com.ait.hrm.uniform.dto.HrUniformImportResultDto;
import com.ait.hrm.uniform.dto.HrUniformImportRowDto;
import com.ait.hrm.uniform.dto.HrUniformItemDto;
import com.ait.sy.sys.dto.DataTablesResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface HrUniformService {

    List<HrUniformItemDto> getItemList(boolean activeOnly);

    void saveItem(HrUniformItemDto dto) throws BusinessException;

    void deleteItem(Long itemNo);

    DataTablesResponse<HrUniformChangeDto> getChangePageList(HrUniformChangeSearchDto params);

    HrUniformEmpInfoDto getEmpInfo(String empId);

    /** Các lần đổi (kèm chi tiết) của 1 nhân viên trong tháng month (YYYY-MM). */
    List<HrUniformChangeDto> getPersonMonthChanges(String personId, String month);

    /** Thêm / sửa 1 lần đổi đồng phục. Trả về danh sách lỗi (rỗng = thành công). */
    List<String> saveChange(HrUniformImportRowDto row);

    void deleteChange(Long changeNo);

    /** Đọc + kiểm tra file Excel, chưa lưu DB. */
    HrUniformImportResultDto previewImport(MultipartFile file) throws BusinessException;

    /** Kiểm tra lại và lưu các dòng đã xem trước. Có lỗi thì không lưu dòng nào. */
    HrUniformImportResultDto saveImport(List<HrUniformImportRowDto> rows);

    int getChangeIntervalMonths();
}
