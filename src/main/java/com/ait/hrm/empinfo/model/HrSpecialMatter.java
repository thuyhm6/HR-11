package com.ait.hrm.empinfo.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class HrSpecialMatter {
    private String specialNo;
    private String personId;
    private LocalDateTime createDate;
    private String createdBy;
    private String createdIp;
    private LocalDateTime updateDate;
    private String updatedBy;
    private String updatedIp;
    private Integer activity;
    private LocalDateTime registrationDate;
    private String inforDisCode;
    private String generationTitle;
    private String specialContent;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer otFlag;

    // Employee info from hr_employee table
    private String empId;
    private String localName;
    private String deptNo;
    private String position;

    // Constructors
    public HrSpecialMatter() {
    }

    public HrSpecialMatter(String specialNo, String personId, LocalDateTime createDate,
            String createdBy, String createdIp, LocalDateTime updateDate,
            String updatedBy, String updatedIp, Integer activity,
            LocalDateTime registrationDate, String inforDisCode,
            String generationTitle, String specialContent,
                           LocalDate startDate, LocalDate endDate, Integer otFlag) {
        this.specialNo = specialNo;
        this.personId = personId;
        this.createDate = createDate;
        this.createdBy = createdBy;
        this.createdIp = createdIp;
        this.updateDate = updateDate;
        this.updatedBy = updatedBy;
        this.updatedIp = updatedIp;
        this.activity = activity;
        this.registrationDate = registrationDate;
        this.inforDisCode = inforDisCode;
        this.generationTitle = generationTitle;
        this.specialContent = specialContent;
        this.startDate = startDate;
        this.endDate = endDate;
        this.otFlag = otFlag;
    }

    // Getters and Setters
    public String getSpecialNo() {
        return specialNo;
    }

    public void setSpecialNo(String specialNo) {
        this.specialNo = specialNo;
    }

    public String getPersonId() {
        return personId;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
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

    public String getCreatedIp() {
        return createdIp;
    }

    public void setCreatedIp(String createdIp) {
        this.createdIp = createdIp;
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

    public String getUpdatedIp() {
        return updatedIp;
    }

    public void setUpdatedIp(String updatedIp) {
        this.updatedIp = updatedIp;
    }

    public Integer getActivity() {
        return activity;
    }

    public void setActivity(Integer activity) {
        this.activity = activity;
    }

    public LocalDateTime getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDateTime registrationDate) {
        this.registrationDate = registrationDate;
    }

    public String getInforDisCode() {
        return inforDisCode;
    }

    public void setInforDisCode(String inforDisCode) {
        this.inforDisCode = inforDisCode;
    }

    public String getGenerationTitle() {
        return generationTitle;
    }

    public void setGenerationTitle(String generationTitle) {
        this.generationTitle = generationTitle;
    }

    public String getSpecialContent() {
        return specialContent;
    }

    public void setSpecialContent(String specialContent) {
        this.specialContent = specialContent;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Integer getOtFlag() {
        return otFlag;
    }

    public void setOtFlag(Integer otFlag) {
        this.otFlag = otFlag;
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    public String getLocalName() {
        return localName;
    }

    public void setLocalName(String localName) {
        this.localName = localName;
    }

    public String getDeptNo() {
        return deptNo;
    }

    public void setDeptNo(String deptNo) {
        this.deptNo = deptNo;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Override
    public String toString() {
        return "HrSpecialMatter{" +
                "specialNo='" + specialNo + '\'' +
                ", personId='" + personId + '\'' +
                ", createDate=" + createDate +
                ", createdBy='" + createdBy + '\'' +
                ", createdIp='" + createdIp + '\'' +
                ", updateDate=" + updateDate +
                ", updatedBy='" + updatedBy + '\'' +
                ", updatedIp='" + updatedIp + '\'' +
                ", activity='" + activity + '\'' +
                ", registrationDate=" + registrationDate +
                ", inforDisCode='" + inforDisCode + '\'' +
                ", generationTitle='" + generationTitle + '\'' +
                ", specialContent='" + specialContent + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", otFlag='" + otFlag + '\'' +
                ", empId='" + empId + '\'' +
                ", localName='" + localName + '\'' +
                ", deptNo='" + deptNo + '\'' +
                ", position='" + position + '\'' +
                '}';
    }
}
