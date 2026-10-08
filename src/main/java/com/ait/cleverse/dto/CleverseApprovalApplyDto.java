package com.ait.cleverse.dto;

/**
 * Đơn chờ gửi sang hộp phê duyệt Cleverse (SEND_EMAIL_FLAG = 0).
 * Port từ kết quả sys.endEmail.getWaitSendApplyInfoList (Hanwha_HAE).
 */
public class CleverseApprovalApplyDto {

    private String applyNo;
    private String personId;
    private String localName;
    private String englishName;
    private String empId;
    private String deptName;
    private String positionName;
    private String applyTypeNo;
    private String applyTypeCode;
    private String applyTypeName;
    private String applyTypeNameKo;
    private String applyTypeNameVi;
    private String applyTime;
    private String fromTime;
    private String toTime;
    private String applyLength;
    private String attLength;
    private String otLength;
    private String otTotalMonth;
    private String remark;
    private String misDocId;

    public String getApplyNo() { return applyNo; }
    public void setApplyNo(String applyNo) { this.applyNo = applyNo; }

    public String getPersonId() { return personId; }
    public void setPersonId(String personId) { this.personId = personId; }

    public String getLocalName() { return localName; }
    public void setLocalName(String localName) { this.localName = localName; }

    public String getEnglishName() { return englishName; }
    public void setEnglishName(String englishName) { this.englishName = englishName; }

    public String getEmpId() { return empId; }
    public void setEmpId(String empId) { this.empId = empId; }

    public String getDeptName() { return deptName; }
    public void setDeptName(String deptName) { this.deptName = deptName; }

    public String getPositionName() { return positionName; }
    public void setPositionName(String positionName) { this.positionName = positionName; }

    public String getApplyTypeNo() { return applyTypeNo; }
    public void setApplyTypeNo(String applyTypeNo) { this.applyTypeNo = applyTypeNo; }

    public String getApplyTypeCode() { return applyTypeCode; }
    public void setApplyTypeCode(String applyTypeCode) { this.applyTypeCode = applyTypeCode; }

    public String getApplyTypeName() { return applyTypeName; }
    public void setApplyTypeName(String applyTypeName) { this.applyTypeName = applyTypeName; }

    public String getApplyTypeNameKo() { return applyTypeNameKo; }
    public void setApplyTypeNameKo(String applyTypeNameKo) { this.applyTypeNameKo = applyTypeNameKo; }

    public String getApplyTypeNameVi() { return applyTypeNameVi; }
    public void setApplyTypeNameVi(String applyTypeNameVi) { this.applyTypeNameVi = applyTypeNameVi; }

    public String getApplyTime() { return applyTime; }
    public void setApplyTime(String applyTime) { this.applyTime = applyTime; }

    public String getFromTime() { return fromTime; }
    public void setFromTime(String fromTime) { this.fromTime = fromTime; }

    public String getToTime() { return toTime; }
    public void setToTime(String toTime) { this.toTime = toTime; }

    public String getApplyLength() { return applyLength; }
    public void setApplyLength(String applyLength) { this.applyLength = applyLength; }

    public String getAttLength() { return attLength; }
    public void setAttLength(String attLength) { this.attLength = attLength; }

    public String getOtLength() { return otLength; }
    public void setOtLength(String otLength) { this.otLength = otLength; }

    public String getOtTotalMonth() { return otTotalMonth; }
    public void setOtTotalMonth(String otTotalMonth) { this.otTotalMonth = otTotalMonth; }

    public String getRemark() { return remark; }
    public void setRemark(String remark) { this.remark = remark; }

    public String getMisDocId() { return misDocId; }
    public void setMisDocId(String misDocId) { this.misDocId = misDocId; }
}
