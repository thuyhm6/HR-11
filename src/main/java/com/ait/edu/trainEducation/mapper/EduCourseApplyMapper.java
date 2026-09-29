package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduCourseApplyCourseDto;
import com.ait.edu.trainEducation.dto.EduCourseApplyRowDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySearchDto;
import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Đăng ký khóa đào tạo - EDU_STUDENT_APPLY (đơn đăng ký) + EDU_TRAIN_MAKER (phê duyệt / xác nhận).
 * cpnyId / lang / adminID (= PERSON_ID người đăng nhập) / adminIP do LanguageParameterInterceptor inject.
 */
@Mapper
public interface EduCourseApplyMapper {

    // ==================== Đăng ký ====================

    /** Khóa người đăng nhập được đăng ký; basicNos != null -> chỉ lấy các khóa này (kiểm tra khi gửi đơn). */
    List<EduCourseApplyCourseDto> selectApplyCourses(@Param("search") EduCourseApplySearchDto search,
                                                     @Param("basicNos") List<String> basicNos);

    /** Người phê duyệt mặc định = trưởng phòng ban của người đăng nhập (bản gốc queryDefaultMaker). */
    List<EduEmployeeDto> selectDefaultMakers();

    String selectNextApplyNo();

    int insertApply(@Param("applyNo") String applyNo, @Param("basicNo") String basicNo, @Param("applyTask") String applyTask);

    /** Thêm 1 người phê duyệt (tên lấy từ HR_EMPLOYEE); trả 0 nếu PERSON_ID không tồn tại. */
    int insertMaker(@Param("applyNo") String applyNo, @Param("personId") String personId, @Param("makerLevel") int makerLevel);

    // ==================== Danh sách đơn ====================

    /** Trang Phê duyệt: đơn mà người đăng nhập là người phê duyệt. */
    List<EduCourseApplyRowDto> selectMakerRows(EduCourseApplySearchDto search);

    /** Trang Xác nhận: đơn (dòng người phê duyệt cuối) của cả công ty. */
    List<EduCourseApplyRowDto> selectConfirmRows(EduCourseApplySearchDto search);

    /** Trang Tình hình: đơn của người đăng nhập, hoặc của mọi người nếu allApplicants. */
    List<EduCourseApplyRowDto> selectSituationRows(EduCourseApplySearchDto search);

    // ==================== Phê duyệt / xác nhận / hủy ====================

    /** Đặt trạng thái phê duyệt cho mọi dòng phê duyệt của đơn (bản gốc) - chỉ khi người đăng nhập là người phê duyệt của
     *  đơn và đơn chưa được xác nhận. */
    int updateApplyFlag(@Param("applyNo") String applyNo, @Param("flag") String flag);

    /** Đơn đã được phê duyệt đồng ý (dòng người phê duyệt cuối) - null nếu chưa. */
    EduCourseApplyRowDto selectApprovedApply(@Param("applyNo") String applyNo);

    int updateConfirmFlag(@Param("applyNo") String applyNo, @Param("flag") String flag);

    /** Số dòng học viên của nhân viên trong khóa (mọi FLAG / chỉ FLAG chỉ định). */
    int countFreeEmployee(@Param("basicNo") String basicNo, @Param("empId") String empId, @Param("flag") String flag);

    int deleteFreeEmployeeByFlag(@Param("basicNo") String basicNo, @Param("empId") String empId, @Param("flag") String flag);

    int deleteTrainResultOfStudent(@Param("basicNo") String basicNo, @Param("empId") String empId);

    int deleteTeacherCheckOfStudent(@Param("basicNo") String basicNo, @Param("empId") String empId);

    /** Đơn được hủy: của người đăng nhập (hoặc manager = true) và chưa có người phê duyệt / xác nhận nào xử lý. */
    int countCancelable(@Param("applyNo") String applyNo, @Param("manager") boolean manager);

    int deleteMakersOfApply(@Param("applyNo") String applyNo);

    int deleteApply(@Param("applyNo") String applyNo);
}
