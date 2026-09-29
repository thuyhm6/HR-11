package com.ait.hrm.recruitManage.service.impl;

import com.ait.hrm.recruitManage.dto.HrExperienceListDto;
import com.ait.hrm.recruitManage.dto.HrRecruitResumeDto;
import com.ait.hrm.recruitManage.mapper.HrRecruitResumeMapper;
import com.ait.hrm.recruitManage.service.HrRecruitResumeService;
import com.ait.sy.sys.dto.ApiResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;

/**
 * Chuyển từ RecruitManageSerImpl.viewResumeList/addResumeInfo/deleteResumeInfo/viewExperienceList
 * (Hanwha_HTSV). Bỏ phần ghép SQL động lưu vào SQL master (tiquziliao_new) vì trang Angular
 * xuất Excel .xlsx trực tiếp ở client từ dữ liệu đang hiển thị.
 */
@Service
public class HrRecruitResumeServiceImpl implements HrRecruitResumeService {

    private static final Logger log = LoggerFactory.getLogger(HrRecruitResumeServiceImpl.class);

    /** Mã lỗi trả về cho frontend (frontend tự dịch qua message.properties). */
    static final String ERR_NOT_FOUND = "NOT_FOUND";
    static final String ERR_COMPLETED = "ORDER_COMPLETED";
    static final String ERR_SYSTEM = "SYSTEM_ERROR";

    @Autowired
    private HrRecruitResumeMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public ApiResponse<List<HrRecruitResumeDto>> getResumeList(HrRecruitResumeDto criteria) {
        log.info("getResumeList - type={}, activity={}, from={}, to={}", criteria.getSearchRegisterType(),
                criteria.getSearchActivity(), criteria.getSearchStartDate(), criteria.getSearchEndDate());
        try {
            List<HrRecruitResumeDto> list = mapper.selectResumeList(criteria);
            log.info("getResumeList - {} dòng", list.size());
            return ApiResponse.success(list);
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách khái quát phát lệnh", e);
            return ApiResponse.error(ERR_SYSTEM, e.getMessage());
        }
    }

    @Override
    @Transactional(readOnly = true)
    public ApiResponse<HrRecruitResumeDto> getResumeDetail(String seq) {
        log.info("getResumeDetail - seq={}", seq);
        try {
            HrRecruitResumeDto dto = mapper.selectResumeBySeq(seq);
            if (dto == null) {
                return ApiResponse.error(ERR_NOT_FOUND, "Không tìm thấy dữ liệu seq=" + seq);
            }
            return ApiResponse.success(dto);
        } catch (Exception e) {
            log.error("Lỗi lấy chi tiết khái quát phát lệnh seq={}", seq, e);
            return ApiResponse.error(ERR_SYSTEM, e.getMessage());
        }
    }

    @Override
    @Transactional
    public ApiResponse<Void> saveResume(HrRecruitResumeDto dto) {
        log.info("saveResume - seq={}, type={}, date={}", dto.getSeq(), dto.getRegisterType(), dto.getRegisterDate());
        try {
            if (dto.getSeq() == null || dto.getSeq().isBlank()) {
                mapper.insertResume(dto);
                return ApiResponse.success("ADDED");
            }
            // Phát lệnh đã hoàn tất (ACTIVITY = 1) không được sửa - giống kiểm tra ở viewAddResumeInfo.jsp
            HrRecruitResumeDto current = mapper.selectResumeBySeq(dto.getSeq());
            if (current == null) {
                return ApiResponse.error(ERR_NOT_FOUND, "Không tìm thấy dữ liệu seq=" + dto.getSeq());
            }
            if (HrRecruitResumeDto.ACTIVITY_COMPLETED.equals(current.getActivity())) {
                return ApiResponse.error(ERR_COMPLETED, "Phát lệnh đã hoàn tất, không thể sửa");
            }
            mapper.updateResume(dto);
            return ApiResponse.success("UPDATED");
        } catch (Exception e) {
            log.error("Lỗi lưu khái quát phát lệnh seq={}", dto.getSeq(), e);
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return ApiResponse.error(ERR_SYSTEM, e.getMessage());
        }
    }

    @Override
    @Transactional
    public ApiResponse<Void> deleteResume(String seq) {
        log.info("deleteResume - seq={}", seq);
        try {
            HrRecruitResumeDto current = mapper.selectResumeBySeq(seq);
            if (current == null) {
                return ApiResponse.error(ERR_NOT_FOUND, "Không tìm thấy dữ liệu seq=" + seq);
            }
            if (HrRecruitResumeDto.ACTIVITY_COMPLETED.equals(current.getActivity())) {
                return ApiResponse.error(ERR_COMPLETED, "Phát lệnh đã hoàn tất, không thể xóa");
            }
            mapper.deleteResume(seq);
            return ApiResponse.success("DELETED");
        } catch (Exception e) {
            log.error("Lỗi xóa khái quát phát lệnh seq={}", seq, e);
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return ApiResponse.error(ERR_SYSTEM, e.getMessage());
        }
    }

    @Override
    @Transactional(readOnly = true)
    public ApiResponse<List<HrExperienceListDto>> getExperienceList(HrExperienceListDto criteria) {
        log.info("getExperienceList - keyword={}, from={}, to={}, dept={}", criteria.getKeyword(),
                criteria.getStartDate(), criteria.getEndDate(), criteria.getDeptNo());
        try {
            List<HrExperienceListDto> list = mapper.selectExperienceList(criteria);
            log.info("getExperienceList - {} dòng", list.size());
            return ApiResponse.success(list);
        } catch (Exception e) {
            log.error("Lỗi tra cứu phát lệnh", e);
            return ApiResponse.error(ERR_SYSTEM, e.getMessage());
        }
    }
}
