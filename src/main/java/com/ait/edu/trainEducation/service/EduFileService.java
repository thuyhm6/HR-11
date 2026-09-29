package com.ait.edu.trainEducation.service;

import com.ait.ess.empinfo.dto.EssFileDto;
import com.ait.exception.BusinessException;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * File đính kèm của module Đào tạo (Đơn vị đào tạo, Hợp đồng đào tạo, Kế hoạch đào tạo, Kết quả đào tạo, Chi phí đào tạo) - lưu vào ESS_FILE giống bản gốc
 * (APPLY_TYPE = eduTrainOrgan / eduTrainAgreement / eduPlanManager / eduTrainResult / eduCostManager). Tải file dùng lại API /ess/empinfo/api/files/download/{fileNo}.
 */
public interface EduFileService {

    String TYPE_TRAIN_ORGAN = "eduTrainOrgan";
    String TYPE_TRAIN_AGREEMENT = "eduTrainAgreement";
    String TYPE_PLAN_MANAGER = "eduPlanManager";
    /** Báo cáo kết quả đào tạo - APPLY_NO = BASIC_NO (bản gốc trainResultTSTOInfo). */
    String TYPE_TRAIN_RESULT = "eduTrainResult";
    /** File chi phí đào tạo - APPLY_NO = COST_NO. */
    String TYPE_COST_MANAGER = "eduCostManager";

    List<EssFileDto> getFiles(String applyType, String applyNo) throws BusinessException;

    /** File của toàn bộ bản ghi thuộc applyType, gom theo APPLY_NO - dùng cho cột "file" trên danh sách. */
    Map<String, List<EssFileDto>> getFilesGroupByApplyNo(String applyType) throws BusinessException;

    int upload(String applyType, String applyNo, List<MultipartFile> files) throws BusinessException;

    int delete(String applyType, String applyNo, List<String> fileNos) throws BusinessException;
}
