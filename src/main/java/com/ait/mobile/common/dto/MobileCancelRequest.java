package com.ait.mobile.common.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MobileCancelRequest {

    @NotEmpty
    @Size(max = 50)
    private List<String> applyNos;
}
