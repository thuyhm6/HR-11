package com.ait.hrm.empinfo.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * HrPersonalInfo - Model cho bảng hr_personal_info
 * Liên kết 1-1 với HrEmployee thông qua PERSON_ID
 */
public class HrPersonalInfo {

    private String personId;
    private String finalDegreeCode;
    private String sexCode;
    private LocalDate dob;
    private String nationCode;
    private String nationalityCode;
    private String maritalStatusCode;
    private LocalDate weddingDate;
    private String idcardNo;
    private String homeAddress;
    private String email;
    private String regTypeCode;
    private String regPlace;
    private String officePhone;
    private String homePhone;
    private String cellphone;
    private String photoPath;
    private String houseTp;
    private LocalDate weddDate;
    private LocalDateTime createDate;
    private String createdBy;
    private LocalDateTime updateDate;
    private String updatedBy;
    private Integer orderNo;
    private String activity;
    private String residentialDistinction;
    private String existSingle;
    private String singId;
    private String companyPhone;
    private String emailSecond;
    private String fileLocation;
    private LocalDate fileEnter;
    private LocalDate fileOut;
    private String createdIp;
    private String updatedIp;
    private String contactPhone;
    private String ext;
    private String interested;
    private String oldDepartment;
    private String marriageSupplement;
    private String characterCode;
    private String safeTypeCode;
    private String politicalStatus;
    private String childrenCode;
    private String safeAddressCode;
    private String insuranceDistinguish;
    private String idcardExpireDate;
    private String longTerm;
    private String remark;
    private String groupResidence;
    private String insuranceXz;
    private String documentType;
    private String religion;
    private String origin;
    private String idcardStartDate;
    private String becomeRegularEvaluate;
    private String politicalOutlook;
    private String issuingAuthority;
    private String cvUpdateStatus;
    private String armyOrNot;
    private String obstacleOrNot;
    private String graduationAchievement;
    private String averageScore;
    private String languageAbility;
    private String height;
    private String weight;
    private String personSupplierCompany;

    // Constructors
    public HrPersonalInfo() {
    }

    public HrPersonalInfo(String personId) {
        this.personId = personId;
    }

    // Getters and Setters
    public String getPersonId() {
        return personId;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }

    public String getFinalDegreeCode() {
        return finalDegreeCode;
    }

    public void setFinalDegreeCode(String finalDegreeCode) {
        this.finalDegreeCode = finalDegreeCode;
    }

    public String getSexCode() {
        return sexCode;
    }

    public void setSexCode(String sexCode) {
        this.sexCode = sexCode;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getNationCode() {
        return nationCode;
    }

    public void setNationCode(String nationCode) {
        this.nationCode = nationCode;
    }

    public String getNationalityCode() {
        return nationalityCode;
    }

    public void setNationalityCode(String nationalityCode) {
        this.nationalityCode = nationalityCode;
    }

    public String getMaritalStatusCode() {
        return maritalStatusCode;
    }

    public void setMaritalStatusCode(String maritalStatusCode) {
        this.maritalStatusCode = maritalStatusCode;
    }

    public LocalDate getWeddingDate() {
        return weddingDate;
    }

    public void setWeddingDate(LocalDate weddingDate) {
        this.weddingDate = weddingDate;
    }

    public String getIdcardNo() {
        return idcardNo;
    }

    public void setIdcardNo(String idcardNo) {
        this.idcardNo = idcardNo;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRegTypeCode() {
        return regTypeCode;
    }

    public void setRegTypeCode(String regTypeCode) {
        this.regTypeCode = regTypeCode;
    }

    public String getRegPlace() {
        return regPlace;
    }

    public void setRegPlace(String regPlace) {
        this.regPlace = regPlace;
    }

    public String getOfficePhone() {
        return officePhone;
    }

    public void setOfficePhone(String officePhone) {
        this.officePhone = officePhone;
    }

    public String getHomePhone() {
        return homePhone;
    }

    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    public String getCellphone() {
        return cellphone;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public String getHouseTp() {
        return houseTp;
    }

    public void setHouseTp(String houseTp) {
        this.houseTp = houseTp;
    }

    public LocalDate getWeddDate() {
        return weddDate;
    }

    public void setWeddDate(LocalDate weddDate) {
        this.weddDate = weddDate;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Integer getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public String getResidentialDistinction() {
        return residentialDistinction;
    }

    public void setResidentialDistinction(String residentialDistinction) {
        this.residentialDistinction = residentialDistinction;
    }

    public String getExistSingle() {
        return existSingle;
    }

    public void setExistSingle(String existSingle) {
        this.existSingle = existSingle;
    }

    public String getSingId() {
        return singId;
    }

    public void setSingId(String singId) {
        this.singId = singId;
    }

    public String getCompanyPhone() {
        return companyPhone;
    }

    public void setCompanyPhone(String companyPhone) {
        this.companyPhone = companyPhone;
    }

    public String getEmailSecond() {
        return emailSecond;
    }

    public void setEmailSecond(String emailSecond) {
        this.emailSecond = emailSecond;
    }

    public String getFileLocation() {
        return fileLocation;
    }

    public void setFileLocation(String fileLocation) {
        this.fileLocation = fileLocation;
    }

    public LocalDate getFileEnter() {
        return fileEnter;
    }

    public void setFileEnter(LocalDate fileEnter) {
        this.fileEnter = fileEnter;
    }

    public LocalDate getFileOut() {
        return fileOut;
    }

    public void setFileOut(LocalDate fileOut) {
        this.fileOut = fileOut;
    }

    public String getCreatedIp() {
        return createdIp;
    }

    public void setCreatedIp(String createdIp) {
        this.createdIp = createdIp;
    }

    public String getUpdatedIp() {
        return updatedIp;
    }

    public void setUpdatedIp(String updatedIp) {
        this.updatedIp = updatedIp;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getExt() {
        return ext;
    }

    public void setExt(String ext) {
        this.ext = ext;
    }

    public String getInterested() {
        return interested;
    }

    public void setInterested(String interested) {
        this.interested = interested;
    }

    public String getOldDepartment() {
        return oldDepartment;
    }

    public void setOldDepartment(String oldDepartment) {
        this.oldDepartment = oldDepartment;
    }

    public String getMarriageSupplement() {
        return marriageSupplement;
    }

    public void setMarriageSupplement(String marriageSupplement) {
        this.marriageSupplement = marriageSupplement;
    }

    public String getCharacterCode() {
        return characterCode;
    }

    public void setCharacterCode(String characterCode) {
        this.characterCode = characterCode;
    }

    public String getSafeTypeCode() {
        return safeTypeCode;
    }

    public void setSafeTypeCode(String safeTypeCode) {
        this.safeTypeCode = safeTypeCode;
    }

    public String getPoliticalStatus() {
        return politicalStatus;
    }

    public void setPoliticalStatus(String politicalStatus) {
        this.politicalStatus = politicalStatus;
    }

    public String getChildrenCode() {
        return childrenCode;
    }

    public void setChildrenCode(String childrenCode) {
        this.childrenCode = childrenCode;
    }

    public String getSafeAddressCode() {
        return safeAddressCode;
    }

    public void setSafeAddressCode(String safeAddressCode) {
        this.safeAddressCode = safeAddressCode;
    }

    public String getInsuranceDistinguish() {
        return insuranceDistinguish;
    }

    public void setInsuranceDistinguish(String insuranceDistinguish) {
        this.insuranceDistinguish = insuranceDistinguish;
    }

    public String getIdcardExpireDate() {
        return idcardExpireDate;
    }

    public void setIdcardExpireDate(String idcardExpireDate) {
        this.idcardExpireDate = idcardExpireDate;
    }

    public String getLongTerm() {
        return longTerm;
    }

    public void setLongTerm(String longTerm) {
        this.longTerm = longTerm;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getGroupResidence() {
        return groupResidence;
    }

    public void setGroupResidence(String groupResidence) {
        this.groupResidence = groupResidence;
    }

    public String getInsuranceXz() {
        return insuranceXz;
    }

    public void setInsuranceXz(String insuranceXz) {
        this.insuranceXz = insuranceXz;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getIdcardStartDate() {
        return idcardStartDate;
    }

    public void setIdcardStartDate(String idcardStartDate) {
        this.idcardStartDate = idcardStartDate;
    }

    public String getBecomeRegularEvaluate() {
        return becomeRegularEvaluate;
    }

    public void setBecomeRegularEvaluate(String becomeRegularEvaluate) {
        this.becomeRegularEvaluate = becomeRegularEvaluate;
    }

    public String getPoliticalOutlook() {
        return politicalOutlook;
    }

    public void setPoliticalOutlook(String politicalOutlook) {
        this.politicalOutlook = politicalOutlook;
    }

    public String getIssuingAuthority() {
        return issuingAuthority;
    }

    public void setIssuingAuthority(String issuingAuthority) {
        this.issuingAuthority = issuingAuthority;
    }

    public String getCvUpdateStatus() {
        return cvUpdateStatus;
    }

    public void setCvUpdateStatus(String cvUpdateStatus) {
        this.cvUpdateStatus = cvUpdateStatus;
    }

    public String getArmyOrNot() {
        return armyOrNot;
    }

    public void setArmyOrNot(String armyOrNot) {
        this.armyOrNot = armyOrNot;
    }

    public String getObstacleOrNot() {
        return obstacleOrNot;
    }

    public void setObstacleOrNot(String obstacleOrNot) {
        this.obstacleOrNot = obstacleOrNot;
    }

    public String getGraduationAchievement() {
        return graduationAchievement;
    }

    public void setGraduationAchievement(String graduationAchievement) {
        this.graduationAchievement = graduationAchievement;
    }

    public String getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(String averageScore) {
        this.averageScore = averageScore;
    }

    public String getLanguageAbility() {
        return languageAbility;
    }

    public void setLanguageAbility(String languageAbility) {
        this.languageAbility = languageAbility;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getPersonSupplierCompany() {
        return personSupplierCompany;
    }

    public void setPersonSupplierCompany(String personSupplierCompany) {
        this.personSupplierCompany = personSupplierCompany;
    }

    @Override
    public String toString() {
        return "HrPersonalInfo{" +
                "personId='" + personId + '\'' +
                ", finalDegreeCode='" + finalDegreeCode + '\'' +
                ", sexCode='" + sexCode + '\'' +
                ", dob=" + dob +
                ", idcardNo='" + idcardNo + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
