package com.ait.sy.sqlMaster.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

/**
 * Model cho bảng SY_SQL_MASTER (quản lý truy vấn SQL tự động xuất Excel).
 * Không khai báo field cpnyId vì CPNY_ID được LanguageParameterInterceptor tự
 * động inject vào tham số MyBatis (#{cpnyId}) - xem CLAUDE.md.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SySqlMaster {

    /** SQL_SEQ - khóa chính, sinh từ SY_SQL_MASTER_SEQ.NEXTVAL */
    private String sqlSeq;

    /** PGM_NM - Mã chương trình/module (ESS, AR, HR, ORG, PA, EDU, EVS, RPT, SY) */
    private String pgmNm;

    /** SQL_NM - Tên truy vấn */
    private String sqlNm;

    /** SQL_DESC - Mô tả truy vấn */
    private String sqlDesc;

    /** SQL_STMT - Câu lệnh SQL đầy đủ (CLOB), chỉ chấp nhận SELECT/WITH */
    private String sqlStmt;

    /** USE_YN - Có đang sử dụng hay không (Y/N), mặc định Y */
    private String useYn;

    /** CREATE_DATE - Ngày tạo */
    private LocalDateTime createDate;

    /** CREATED_BY - Người tạo */
    private String createdBy;

    /** UPDATE_DATE - Ngày cập nhật */
    private LocalDateTime updateDate;

    /** UPDATED_BY - Người cập nhật gần nhất */
    private String updatedBy;
}
