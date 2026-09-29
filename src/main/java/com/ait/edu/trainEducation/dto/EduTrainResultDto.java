package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Phiếu học viên đánh giá khóa học - bảng EDU_TRAIN_RESULT. Điểm 1-5 theo 4 tiêu chí (tên cột giữ theo bản gốc):
 * difficulty = mức độ hài lòng tổng thể, contentRich = mức độ dễ nắm bắt, timeModerate = thời lượng hợp lý,
 * practicability = tính thực dụng. allscore = (20*d + 20*c + 40*p + 20*t) * 0.2.
 */
@Data
@NoArgsConstructor
public class EduTrainResultDto {
    private String resultNo;
    private String basicNo;
    private String stuEmpId;
    private String stuLocalName;
    private Integer difficulty;
    private Integer contentRich;
    private Integer practicability;
    private Integer timeModerate;
    private String allscore;
    private String otherAdvise;
}
