package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduTrainAgreementDto;
import com.ait.edu.trainEducation.dto.EduTrainAgreementSearchDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduTrainAgreementService {

    List<EduTrainAgreementDto> getList(EduTrainAgreementSearchDto search) throws BusinessException;

    EduTrainAgreementDto getOne(String agreeNo) throws BusinessException;

    /** Trả về AGREE_NO đã lưu (để frontend upload file đính kèm theo đúng mã). */
    String save(EduTrainAgreementDto dto) throws BusinessException;

    void delete(String agreeNo) throws BusinessException;

    /**
     * Import nhiều hợp đồng (các dòng đọc từ file Excel mẫu). Kiểm tra toàn bộ trước; có lỗi thì không lưu dòng nào và
     * trả về danh sách lỗi theo dòng, không lỗi thì lưu tất cả trong 1 transaction và trả về danh sách rỗng.
     */
    List<String> importRows(List<EduTrainAgreementDto> rows) throws BusinessException;
}
