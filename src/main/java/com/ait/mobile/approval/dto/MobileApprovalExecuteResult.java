package com.ait.mobile.approval.dto;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MobileApprovalExecuteResult {

    private int successCount;
    private List<Failure> failures = new ArrayList<>();

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Failure {
        private String applyNo;
        private String message;
    }
}
