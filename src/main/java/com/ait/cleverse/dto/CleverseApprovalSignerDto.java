package com.ait.cleverse.dto;

/**
 * Người duyệt / người nhận thông báo của 1 đơn (SY_AFFIRM_EMAIL) gửi sang Cleverse.
 * Port từ sys.endEmail.getAffirmListByApplyNo / getReceiverListByApplyNo (Hanwha_HAE).
 */
public class CleverseApprovalSignerDto {

    private String seq;
    private String affirmType;
    /** 0: 기안(người lập), 1: 결재(người duyệt) - dùng cho SignerInfo.assignType */
    private String assignType;
    /** referer: tham chiếu, receiver: người nhận - dùng cho ReceiverInfo.roleType */
    private String receiverType;
    private String affirmEmpId;
    private String affirmPersonId;
    private String affirmLevel;
    /** Email người duyệt - dùng để khớp với SignerInfo.emailAddr khi đồng bộ trạng thái */
    private String email;
    private String applyType;
    private String applyFlag;
    /** userKey trên Cleverse, lấy qua NeoOrgWs.searchUserByEmpolyeeNo (không lấy từ DB) */
    private String userKey;

    public String getSeq() { return seq; }
    public void setSeq(String seq) { this.seq = seq; }

    public String getAffirmType() { return affirmType; }
    public void setAffirmType(String affirmType) { this.affirmType = affirmType; }

    public String getAssignType() { return assignType; }
    public void setAssignType(String assignType) { this.assignType = assignType; }

    public String getReceiverType() { return receiverType; }
    public void setReceiverType(String receiverType) { this.receiverType = receiverType; }

    public String getAffirmEmpId() { return affirmEmpId; }
    public void setAffirmEmpId(String affirmEmpId) { this.affirmEmpId = affirmEmpId; }

    public String getAffirmPersonId() { return affirmPersonId; }
    public void setAffirmPersonId(String affirmPersonId) { this.affirmPersonId = affirmPersonId; }

    public String getAffirmLevel() { return affirmLevel; }
    public void setAffirmLevel(String affirmLevel) { this.affirmLevel = affirmLevel; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getApplyType() { return applyType; }
    public void setApplyType(String applyType) { this.applyType = applyType; }

    public String getApplyFlag() { return applyFlag; }
    public void setApplyFlag(String applyFlag) { this.applyFlag = applyFlag; }

    public String getUserKey() { return userKey; }
    public void setUserKey(String userKey) { this.userKey = userKey; }
}
