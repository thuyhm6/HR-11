package com.ait.pa.workManagement.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/** Body POST danh sách NV tăng/giảm (bản gốc monthPersonCountInfoSonList?PERSON_ID_ID=...). */
@Data
@NoArgsConstructor
public class PaPersonIdsReqDto {

    @NotEmpty(message = "hrm.empinfo.pleaseSelectEmp")
    @Size(max = 20000, message = "common.loadFail")
    private List<String> personIds;
}
