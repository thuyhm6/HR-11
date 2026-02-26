package com.ait.hrm.empinfo.service;

import java.util.List;

import com.ait.hrm.empinfo.model.HrReward;

public interface HrRewardService {
    List<HrReward> searchReward(String empId, String localName, String rewardType);

    HrReward getById(Long rewardNo);

    boolean saveReward(HrReward info, boolean isNew);

    boolean deleteReward(Long rewardNo);
}
