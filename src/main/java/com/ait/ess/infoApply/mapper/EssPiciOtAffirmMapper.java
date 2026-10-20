package com.ait.ess.infoApply.mapper;

import com.ait.ess.infoApply.dto.EssPiciOtAffirmDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Xin phép tăng ca hàng loạt (viewPiciOtAffirmLBatchList) - xem EssPiciOtAffirmMapper.xml. */
@Mapper
public interface EssPiciOtAffirmMapper {

    /** Danh sách đơn tăng ca của cấp dưới + dòng trống do chính người đăng nhập tạo (getNullBatchOTTSTOAffirmInfoList). */
    List<EssPiciOtAffirmDto> selectList(EssPiciOtAffirmDto dto);

    /** 1 dòng theo APPLY_NO - dùng sau khi Thêm dòng trống. */
    EssPiciOtAffirmDto selectByApplyNo(@Param("applyNo") String applyNo);

    /** Xóa các dòng trống (PERSON_ID rỗng) do chính người đăng nhập tạo - khi mở menu có deleteYN=Y. */
    int deleteEmptyApplyByCreator();

    Long getNextApplySeq();

    /** Tạo dòng trống (PERSON_ID rỗng) - đúng ess.infoApply.addOtApplyAffirm bản gốc. */
    int insertEmptyApply(@Param("applyNo") String applyNo);

    /** Tính loại tăng ca / số giờ / giờ ca theo NV + ngày + giờ - đúng ess.infoApply.getValidateInfo. */
    EssPiciOtAffirmDto selectValidateInfo(EssPiciOtAffirmDto dto);

    /** Ca làm, nhóm NV, giới hạn OT và lũy kế tăng ca của NV tại ngày tăng ca - đúng getOt_Totail() bản gốc. */
    EssPiciOtAffirmDto selectEmpOtInfo(@Param("personId") String personId, @Param("applyOtDate") String applyOtDate);

    /** Loại ngày + giờ ca của chính người đăng nhập - đúng getDefaultOtTimeSST() bản gốc. */
    EssPiciOtAffirmDto selectDefaultTime(@Param("applyOtDate") String applyOtDate);

    /** AR_GET_OT_CLASH: >0 trùng, -1 đã chốt công, -2 đã khóa, -3 vượt giới hạn, -4 thai sản/nuôi con nhỏ. */
    int checkOtClash(EssPiciOtAffirmDto dto);

    /** Cập nhật đơn và chuyển trạng thái "Gửi" - đúng ess.infoApply.updateOtApplyAffirmForSpc. */
    int updateOtApply(EssPiciOtAffirmDto dto);

    /** Khóa tài liệu Cleverse (MISDOCID) mới cho đơn được gửi duyệt. */
    String selectNextMisDocId();
}
