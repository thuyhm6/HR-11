package com.ait.sy.syAffirm.service;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.AffirmSpecialDetailDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialSaveDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialTypeDto;

import java.util.List;

public interface AffirmSpecialService {

    /** Danh sách loại phê duyệt (cột động của màn hình). */
    List<AffirmSpecialTypeDto> getTypeList() throws BusinessException;

    /** Đối tượng được duyệt (lọc theo mã/tên) kèm toàn bộ người duyệt theo cấp. */
    List<AffirmSpecialDto> getList(String keyword) throws BusinessException;

    /** Người duyệt theo cấp của 1 ô (đối tượng x loại phê duyệt) - dùng cho màn hình cập nhật. */
    List<AffirmSpecialDetailDto> getAffirmors(String affirmObject, String affirmTypeNo) throws BusinessException;

    /** Thay toàn bộ người duyệt của mọi ô (đối tượng x loại) trong payload - trả về số ô đã cập nhật. */
    int save(AffirmSpecialSaveDto dto) throws BusinessException;

    /** Xóa thiết lập người duyệt của 1 ô - trả về số dòng đã xóa. */
    int delete(String affirmObject, String affirmTypeNo) throws BusinessException;
}
