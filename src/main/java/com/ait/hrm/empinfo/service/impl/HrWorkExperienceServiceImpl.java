package com.ait.hrm.empinfo.service.impl;

import com.ait.hrm.empinfo.mapper.HrWorkExperienceMapper;
import com.ait.hrm.empinfo.model.HrWorkExperience;
import com.ait.hrm.empinfo.service.HrWorkExperienceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class HrWorkExperienceServiceImpl implements HrWorkExperienceService {

    @Autowired
    private HrWorkExperienceMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<HrWorkExperience> getByPersonId(String personId) {
        return mapper.getByPersonId(personId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<HrWorkExperience> searchWorkExperience(String empId, String localName, String companyName) {
        return mapper.searchWorkExperience(empId, localName, companyName);
    }

    @Override
    public boolean saveWorkExperience(HrWorkExperience info, boolean isNew) {
        try {
            if (isNew || info.getWorkExpNo() == null) {
                // Assuming database sequence handles ID generation
                return mapper.insert(info) > 0;
                //
                //
                //
                //
            } else {
                return mapper.update(info) > 0;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteWorkExperience(Long workExpNo) {
        return mapper.delete(workExpNo) > 0;
    }

    @Override
    @Transactional(readOnly = true)
    public HrWorkExperience getById(Long workExpNo) {
        return mapper.getById(workExpNo);
    }
}
