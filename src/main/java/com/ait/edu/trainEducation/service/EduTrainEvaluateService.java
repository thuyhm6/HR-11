package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduEvaluateImportRowDto;
import com.ait.edu.trainEducation.dto.EduFreeEmployeeDto;
import com.ait.edu.trainEducation.dto.EduScoreDistributionDto;
import com.ait.edu.trainEducation.dto.EduStudentScoreDto;
import com.ait.edu.trainEducation.dto.EduTeacherCheckDto;
import com.ait.edu.trainEducation.dto.EduTrainResultDto;
import com.ait.exception.BusinessException;

import java.util.List;

/**
 * Đánh giá học viên / đánh giá giảng viên / kết quả đào tạo. manager = người quản lý đào tạo (xem & sửa mọi khóa);
 * người khác: đánh giá học viên chỉ khi là giảng viên đánh giá, đánh giá giảng viên / kết quả chỉ xem khi là học viên.
 * Các hàm import trả về danh sách lỗi theo dòng (rỗng = thành công).
 */
public interface EduTrainEvaluateService {

    // ---------- Đánh giá học viên ----------

    List<EduFreeEmployeeDto> getStudents(String basicNo, boolean manager) throws BusinessException;

    void saveStudentScores(String basicNo, List<EduStudentScoreDto> rows, boolean manager) throws BusinessException;

    List<String> importStudentScores(String basicNo, List<EduEvaluateImportRowDto> rows, boolean manager) throws BusinessException;

    // ---------- Đánh giá giảng viên ----------

    List<EduScoreDistributionDto> getTeacherSummary(String basicNo, boolean manager) throws BusinessException;

    List<EduTeacherCheckDto> getTeacherScores(String basicNo, String teaEmpId, boolean manager) throws BusinessException;

    List<String> importTeacherScores(String basicNo, String teaEmpId, List<EduEvaluateImportRowDto> rows, boolean manager)
            throws BusinessException;

    // ---------- Kết quả đào tạo ----------

    List<EduScoreDistributionDto> getResultSummary(String basicNo, boolean manager) throws BusinessException;

    List<EduTrainResultDto> getResultDetails(String basicNo, boolean manager) throws BusinessException;

    List<String> importResults(String basicNo, List<EduEvaluateImportRowDto> rows, boolean manager) throws BusinessException;
}
