package com.ait.hrm.empinfo.service.impl;

import com.ait.hrm.empinfo.mapper.HrSpecialMatterMapper;
import com.ait.hrm.empinfo.model.HrSpecialMatter;
import com.ait.hrm.empinfo.service.HrSpecialMatterService;
import com.ait.sy.sys.dto.DataTablesRequest;
import com.ait.sy.sys.dto.DataTablesResponse;
import com.ait.util.DataTablesSearchUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HrSpecialMatterServiceImpl implements HrSpecialMatterService {

    @Autowired
    private HrSpecialMatterMapper hrSpecialMatterMapper;

    /**
     * Lấy danh sách tất cả nhân viên nữ
     */
    @Override
    public List<HrSpecialMatter> getAllFemaleEmployees() {
        return hrSpecialMatterMapper.getFemaleEmployeesList();
    }

    /**
     * Lấy danh sách nhân viên nữ với phân trang
     */
    @Override
    public List<HrSpecialMatter> getFemaleEmployeesWithPagination(int page, int size) {
        int offset = (page - 1) * size;
        return hrSpecialMatterMapper.getFemaleEmployeesListWithPagination(offset, size);
    }

    /**
     * Đếm tổng số nhân viên nữ
     */
    @Override
    public int countFemaleEmployees() {
        return hrSpecialMatterMapper.countFemaleEmployees();
    }

    /**
     * Tìm kiếm nhân viên nữ theo từ khóa
     */
    @Override
    public List<HrSpecialMatter> searchFemaleEmployees(String keyword) {
        if (keyword == null || keyword.trim().isEmpty()) {
            return getAllFemaleEmployees();
        }
        return hrSpecialMatterMapper.searchFemaleEmployees(keyword.trim());
    }

    /**
     * Lấy thông tin chi tiết của một nhân viên nữ
     */
    @Override
    public HrSpecialMatter getSpecialMatterById(String specialNo) {
        return hrSpecialMatterMapper.getSpecialMatterById(specialNo);
    }

    /**
     * Lấy danh sách nhân viên nữ với phân trang và tìm kiếm
     */
    @Override
    public List<HrSpecialMatter> getFemaleEmployeesWithSearchAndPagination(String keyword, int page, int size) {
        if (keyword == null || keyword.trim().isEmpty()) {
            return getFemaleEmployeesWithPagination(page, size);
        }
        return hrSpecialMatterMapper.searchFemaleEmployees(keyword.trim());
    }

    /**
     * Tìm kiếm nhân viên nữ với nhiều điều kiện (cho export)
     */
    @Override
    public List<HrSpecialMatter> searchFemaleEmployeesWithConditions(
            String localName, String empId, String deptNo, String position,
            String createDateFrom, String createDateTo, String activity, String otFlag) {
        return hrSpecialMatterMapper.searchFemaleEmployeesWithConditions(
                localName, empId, deptNo, position, createDateFrom, createDateTo, activity, otFlag);
    }

    /**
     * Tìm kiếm nhân viên nữ với DataTablesRequest (generic search)
     */
    @Override
    public List<HrSpecialMatter> searchFemaleEmployeesWithDataTablesRequest(DataTablesRequest request) {
        Map<String, Object> searchParams = request.getSearchParams();
        if (searchParams == null) {
            searchParams = new HashMap<>();
        }

        String searchValue = request.getSearch() != null ? request.getSearch().getValue() : "";
        String orderColumn = "createDate";
        String orderDir = "desc";

        String localName = (String) searchParams.get("localName");
        String empId = (String) searchParams.get("empId");
        String deptNo = (String) searchParams.get("deptNo");
        String position = (String) searchParams.get("position");
        String createDateFrom = (String) searchParams.get("createDateFrom");
        String createDateTo = (String) searchParams.get("createDateTo");
        String activity = (String) searchParams.get("activity");
        String otFlag = (String) searchParams.get("otFlag");

        return hrSpecialMatterMapper.getFemaleEmployeesForDataTablesWithSearchParams(
                searchValue, orderColumn, orderDir, request.getStart(), request.getLength(),
                localName, empId, deptNo, position, createDateFrom, createDateTo, activity, otFlag);
    }

    /**
     * Cập nhật thông tin nhân viên nữ
     */
    @Override
    public boolean updateSpecialMatter(HrSpecialMatter employee) {
        try {
            // Cập nhật thời gian cập nhật
            employee.setUpdateDate(java.time.LocalDateTime.now());

            // Gọi mapper để cập nhật
            int result = hrSpecialMatterMapper.updateSpecialMatter(employee);
            return result > 0;
        } catch (Exception e) {
            System.err.println("Error updating female employee: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Thêm mới nhân viên nữ
     */
    @Override
    public boolean addSpecialMatter(HrSpecialMatter employee) {
        try {

            // Tạo PERSON_ID từ EMP_CODE nếu chưa có
            if (employee.getPersonId() == null || employee.getPersonId().trim().isEmpty()) {
                employee.setPersonId(employee.getEmpId());
            }

            // Set thời gian tạo và cập nhật
            java.time.LocalDateTime now = java.time.LocalDateTime.now();
            employee.setCreateDate(now);
            employee.setUpdateDate(now);

            // Gọi mapper để thêm mới
            int result = hrSpecialMatterMapper.addSpecialMatter(employee);
            return result > 0;
        } catch (Exception e) {
            System.err.println("Error adding female employee: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Xóa nhân viên nữ
     */
    @Override
    public boolean deleteSpecialMatter(String specialNo) {
        try {
            // Gọi mapper để xóa
            int result = hrSpecialMatterMapper.deleteSpecialMatter(specialNo);
            return result > 0;
        } catch (Exception e) {
            System.err.println("Error deleting female employee: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    /**
     * DataTables server-side processing - Lấy dữ liệu cho DataTables (optimized
     * with generic search)
     */
    @Override
    public DataTablesResponse<HrSpecialMatter> getFemaleEmployeesForDataTables(DataTablesRequest request) {
        try {
            System.out.println("=== Service: Processing DataTables request (optimized) ===");
            System.out.println("Request: " + request);

            // Lấy giá trị tìm kiếm
            String searchValue = request.getSearch() != null ? request.getSearch().getValue() : "";
            System.out.println("Service: Search value = '" + searchValue + "'");

            // Lấy thông tin sắp xếp
            String orderColumn = "createDate";
            String orderDir = "desc";

            // Map column names to database fields
            String[] columnMapping = { "", "empId", "localName", "deptNo", "position", "specialNo",
                    "activity", "createDate", "startDate", "endDate", "otFlag", "actions" };

            if (request.getOrder() != null && request.getOrder().length > 0) {
                int columnIndex = request.getOrder()[0].getColumn();
                if (columnIndex < columnMapping.length) {
                    orderColumn = columnMapping[columnIndex];
                }
                orderDir = request.getOrder()[0].getDir();
            }

            System.out.println("Service: Order column = " + orderColumn + ", Order dir = " + orderDir);
            System.out.println("Service: Start = " + request.getStart() + ", Length = " + request.getLength());

            // Set search parameters using utility class
            DataTablesSearchUtil.addSearchParam(request, "searchValue", searchValue);
            DataTablesSearchUtil.addSearchParam(request, "orderColumn", orderColumn);
            DataTablesSearchUtil.addSearchParam(request, "orderDir", orderDir);
            DataTablesSearchUtil.addSearchParam(request, "offset", request.getStart());
            DataTablesSearchUtil.addSearchParam(request, "limit", request.getLength());

            // Add form search parameters if they exist
            if (request.getSearchParams() != null) {
                System.out.println("Service: Adding form search parameters");
                // The search parameters from form are already in request.getSearchParams()
                // We just need to ensure they are properly set
                System.out.println("Service: Form search params: " + request.getSearchParams());
            }

            // Lấy dữ liệu với generic search parameters
            System.out.println("Service: Calling mapper with generic search parameters");
            Map<String, Object> searchParams = request.getSearchParams();

            // Đảm bảo searchParams không null
            if (searchParams == null) {
                searchParams = new HashMap<>();
                request.setSearchParams(searchParams);
            }

            // Lấy các tham số từ searchParams
            String localName = (String) searchParams.get("localName");
            String empId = (String) searchParams.get("empId");
            String deptNo = (String) searchParams.get("deptNo");
            String position = (String) searchParams.get("position");
            String createDateFrom = (String) searchParams.get("createDateFrom");
            String createDateTo = (String) searchParams.get("createDateTo");
            String activity = (String) searchParams.get("activity");
            String otFlag = (String) searchParams.get("otFlag");

            System.out.println("Service: Search params: " + searchParams);
            System.out.println("Service: LocalName: " + localName);
            System.out.println("Service: EmpId: " + empId);
            System.out.println("Service: DeptNo: " + deptNo);
            System.out.println("Service: Position: " + position);
            System.out.println("Service: CreateDateFrom: " + createDateFrom);
            System.out.println("Service: CreateDateTo: " + createDateTo);
            System.out.println("Service: Activity: " + activity);
            System.out.println("Service: OtFlag: " + otFlag);

            List<HrSpecialMatter> data = hrSpecialMatterMapper
                    .getFemaleEmployeesForDataTablesWithSearchParams(
                            searchValue, orderColumn, orderDir, request.getStart(), request.getLength(),
                            localName, empId, deptNo, position, createDateFrom, createDateTo, activity, otFlag);
            System.out.println("Service: Data size = " + (data != null ? data.size() : "null"));

            // Đếm tổng số bản ghi
            long totalRecords = hrSpecialMatterMapper.countFemaleEmployees();
            System.out.println("Service: Total records = " + totalRecords);

            // Đếm số bản ghi sau khi lọc với generic search parameters
            System.out.println("Service: Calling count mapper with generic search parameters");
            long filteredRecords = hrSpecialMatterMapper
                    .countFemaleEmployeesForDataTablesWithSearchParams(
                            searchValue, localName, empId, deptNo, position, createDateFrom, createDateTo, activity,
                            otFlag);
            System.out.println("Service: Filtered records = " + filteredRecords);

            DataTablesResponse<HrSpecialMatter> response = new DataTablesResponse<>(
                    request.getDraw(),
                    totalRecords,
                    filteredRecords,
                    data);

            System.out.println("Service: Response created = " + response);
            return response;

        } catch (Exception e) {
            System.err.println("Service: Error processing request: " + e.getMessage());
            e.printStackTrace();
            return new DataTablesResponse<>(request.getDraw(), "Lỗi khi tải dữ liệu: " + e.getMessage());
        }
    }
}
