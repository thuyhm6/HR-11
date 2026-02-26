package com.ait.hrm.empinfo.service.impl;

import com.ait.hrm.empinfo.dto.EmployeeSearchResponse;
import com.ait.hrm.empinfo.mapper.HrEmployeeMapper;
import com.ait.hrm.empinfo.model.HrEmployee;
import com.ait.hrm.empinfo.service.HrEmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.ArrayList;

/**
 * Implementation của HrEmployeeService
 */
@Service
@Transactional(readOnly = true)
public class HrEmployeeServiceImpl implements HrEmployeeService {

    @Autowired
    private HrEmployeeMapper hrEmployeeMapper;

    /**
     * Tìm nhân viên theo personId
     */
    @Override
    public HrEmployee findByPersonId(String personId) {
        try {
            if (personId == null || personId.trim().isEmpty()) {
                return null;
            }
            return hrEmployeeMapper.findByPersonId(personId.trim());
        } catch (Exception e) {
            System.err.println("Error finding employee by personId: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Tìm nhân viên theo empId
     */
    @Override
    public HrEmployee findByEmpId(String empId) {
        try {
            if (empId == null || empId.trim().isEmpty()) {
                return null;
            }
            return hrEmployeeMapper.findByEmpId(empId.trim());
        } catch (Exception e) {
            System.err.println("Error finding employee by empId: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Tìm nhân viên theo deptNo
     */
    @Override
    public List<HrEmployee> findByDeptNo(String deptNo) {
        try {
            if (deptNo == null || deptNo.trim().isEmpty()) {
                return List.of();
            }
            return hrEmployeeMapper.findByDeptNo(deptNo.trim());
        } catch (Exception e) {
            System.err.println("Error finding employees by deptNo: " + e.getMessage());
            e.printStackTrace();
            return List.of();
        }
    }

    /**
     * Tìm nhân viên theo cpnyId
     */
    @Override
    public List<HrEmployee> findByCpnyId(String cpnyId) {
        try {
            if (cpnyId == null || cpnyId.trim().isEmpty()) {
                return List.of();
            }
            return hrEmployeeMapper.findByCpnyId(cpnyId.trim());
        } catch (Exception e) {
            System.err.println("Error finding employees by cpnyId: " + e.getMessage());
            e.printStackTrace();
            return List.of();
        }
    }

    /**
     * Kiểm tra nhân viên có tồn tại và hoạt động không
     */
    @Override
    public boolean existsAndActiveByPersonId(String personId) {
        try {
            if (personId == null || personId.trim().isEmpty()) {
                return false;
            }
            return hrEmployeeMapper.existsAndActiveByPersonId(personId.trim());
        } catch (Exception e) {
            System.err.println("Error checking employee existence and activity: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Kiểm tra deptNo có tồn tại trong bảng hr_employee không
     */
    @Override
    public boolean existsDeptNo(String deptNo) {
        try {
            if (deptNo == null || deptNo.trim().isEmpty()) {
                return false;
            }
            return hrEmployeeMapper.existsDeptNo(deptNo.trim());
        } catch (Exception e) {
            System.err.println("Error checking deptNo existence: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Lấy tất cả nhân viên
     */
    @Override
    public List<HrEmployee> findAll() {
        try {
            return hrEmployeeMapper.findAll();
        } catch (Exception e) {
            System.err.println("Error finding all employees: " + e.getMessage());
            e.printStackTrace();
            return List.of();
        }
    }

    /**
     * Lấy danh sách nhân viên với phân trang
     */
    @Override
    public List<HrEmployee> findAllWithPagination(int page, int size) {
        try {
            if (page < 1)
                page = 1;
            if (size < 1)
                size = 10;

            int offset = (page - 1) * size;
            return hrEmployeeMapper.getEmployeesWithPagination(offset, size);
        } catch (Exception e) {
            System.err.println("Error finding employees with pagination: " + e.getMessage());
            e.printStackTrace();
            return List.of();
        }
    }

    /**
     * Đếm tổng số nhân viên
     */
    @Override
    public int countAll() {
        try {
            return findAll().size();
        } catch (Exception e) {
            System.err.println("Error counting employees: " + e.getMessage());
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * Tìm kiếm nhân viên theo từ khóa
     */
    @Override
    public List<HrEmployee> searchByKeyword(String keyword) {
        try {
            if (keyword == null || keyword.trim().isEmpty()) {
                return findAll();
            }
            return hrEmployeeMapper.searchByKeyword(keyword.trim());
        } catch (Exception e) {
            System.err.println("Error searching employees by keyword: " + e.getMessage());
            e.printStackTrace();
            return List.of();
        }
    }

    /**
     * Lấy thông tin nhân viên theo personId với validation
     */
    @Override
    public HrEmployee getEmployeeByPersonId(String personId) {
        HrEmployee employee = findByPersonId(personId);
        if (employee == null) {
            System.out.println("Employee not found with personId: " + personId);
        }
        return employee;
    }

    /**
     * Lấy thông tin nhân viên theo empId với validation
     */
    @Override
    public HrEmployee getEmployeeByEmpId(String empId) {
        HrEmployee employee = findByEmpId(empId);
        if (employee == null) {
            System.out.println("Employee not found with empId: " + empId);
        }
        return employee;
    }

    /**
     * Kiểm tra nhân viên có tồn tại không (không quan tâm trạng thái)
     */
    @Override
    public boolean existsByPersonId(String personId) {
        return getEmployeeByPersonId(personId) != null;
    }

    /**
     * Kiểm tra mã nhân viên có tồn tại không
     */
    @Override
    public boolean existsByEmpId(String empId) {
        return getEmployeeByEmpId(empId) != null;
    }

    /**
     * Tìm kiếm nhân viên từ HR_Employee
     */
    @Override
    public List<EmployeeSearchResponse> searchEmployees(String empId, String localName, String deptNo) {
        try {
            return hrEmployeeMapper.searchEmployees(empId, localName, deptNo);
        } catch (Exception e) {
            System.err.println("Error searching employees: " + e.getMessage());
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

}
