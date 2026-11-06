package com.ait.hrm.recruitManage.service.impl;

import com.ait.exception.BusinessException;
import com.ait.hrm.recruitManage.dto.HrEmployeeRecruitDto;
import com.ait.hrm.recruitManage.dto.HrEducationRecruitDto;
import com.ait.hrm.recruitManage.dto.HrWorkExperienceRecruitDto;
import com.ait.hrm.recruitManage.dto.HrFamilyRecruitDto;
import com.ait.hrm.recruitManage.dto.HrExpInsideBatchDto;
import com.ait.hrm.recruitManage.dto.HrRecruitBatchDto;
import com.ait.hrm.recruitManage.mapper.HrRecruitManageMapper;
import com.ait.hrm.recruitManage.service.HrRecruitManageService;
import com.ait.sy.sys.dto.DataTablesResponse;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.text.SimpleDateFormat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Quản lý nhận việc - chuyển từ RecruitManageSerImpl / RecruitManageCtroller (dự án HTSV). errorCode của
 * BusinessException là message key để frontend tự dịch thông báo.
 */
@Service
public class HrRecruitManageServiceImpl implements HrRecruitManageService {

    private static final Logger log = LoggerFactory.getLogger(HrRecruitManageServiceImpl.class);

    /** Loại đăng ký đợt (HR_RECRUIT_REGISTER_INFO.REGISTER_TYPE) - bản gốc viewAddRegisterInfo FLAG=1/2. */
    private static final String REGISTER_TYPE_RECRUIT_BATCH = "14014410";
    private static final String REGISTER_TYPE_EXPERIENCE_BATCH = "80000057";
    private static final String MSG_EMPID_EXISTS = "hrm.recruitManage.EMPID_EXISTENCE.Z";
    private static final String MSG_SAVE_FAIL = "alert.message.add_fail";
    private static final String MSG_DELETE_FAIL = "alert.message.delete_fail";
    private static final Set<String> PHOTO_EXTENSIONS = Set.of("jpg", "jpeg", "png", "gif", "bmp");
    private static final long MAX_PHOTO_SIZE = 20L * 1024 * 1024;

    @Autowired
    private HrRecruitManageMapper mapper;

    /** Thư mục ảnh của công ty hiện tại (vd. .../resources/photo/HTSV) - thư mục cha được map URL /resources/photo/**. */
    @Value("${app.photo.upload.path:./assets/images/users}")
    private String photoUploadPath;

    // ── Danh sách nhận việc ──────────────────────────────────────────────────

    @Override
    public List<HrEmployeeRecruitDto> getEmployeeList(HrEmployeeRecruitDto search) {
        try {
            return mapper.selectEmployeeList(search);
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách nhận việc: {}", e.getMessage(), e);
            return new ArrayList<>();
        }
    }

    @Override
    public HrEmployeeRecruitDto getEmployeeById(String personId) {
        try {
            return mapper.selectEmployeeById(personId);
        } catch (Exception e) {
            log.error("Lỗi lấy thông tin nhận việc personId={}: {}", personId, e.getMessage(), e);
            return null;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String saveEmployeeBasic(HrEmployeeRecruitDto dto) throws BusinessException {
        String empId = trimToNull(dto.getEmpId());
        dto.setEmpId(empId);
        if (empId != null && mapper.countExistingEmpId(empId, trimToNull(dto.getPersonId())) > 0) {
            throw new BusinessException(MSG_EMPID_EXISTS, "Mã nhân viên đã tồn tại: " + empId);
        }
        try {
            if (trimToNull(dto.getPersonId()) == null) {
                dto.setPersonId(mapper.selectNextPersonId());
                dto.setCpnyId(currentCpnyId());
                mapper.insertEmployee(dto);
            } else {
                mapper.updateEmployee(dto);
            }
            log.info("Lưu thông tin cơ bản nhận việc personId={}", dto.getPersonId());
            return dto.getPersonId();
        } catch (Exception e) {
            log.error("Lỗi lưu thông tin cơ bản nhận việc personId={}: {}", dto.getPersonId(), e.getMessage(), e);
            throw new BusinessException(MSG_SAVE_FAIL, "Lưu thất bại", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveEmployeePersonal(HrEmployeeRecruitDto dto) throws BusinessException {
        try {
            mapper.updatePersonalInfo(dto);
            log.info("Lưu thông tin bổ sung nhận việc personId={}", dto.getPersonId());
        } catch (Exception e) {
            log.error("Lỗi lưu thông tin bổ sung nhận việc personId={}: {}", dto.getPersonId(), e.getMessage(), e);
            throw new BusinessException(MSG_SAVE_FAIL, "Lưu thất bại", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteEmployee(String personId) throws BusinessException {
        try {
            mapper.deleteEmployee(personId);
            log.info("Xóa nhận việc personId={}", personId);
        } catch (Exception e) {
            log.error("Lỗi xóa nhận việc personId={}: {}", personId, e.getMessage(), e);
            throw new BusinessException(MSG_DELETE_FAIL, "Xóa thất bại", e);
        }
    }

    @Override
    public List<String> getPersonSupplierNames() {
        try {
            return mapper.selectPersonSupplierNames();
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách công ty cung ứng lao động: {}", e.getMessage(), e);
            return new ArrayList<>();
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String uploadPhoto(String personId, MultipartFile file) throws BusinessException {
        HrEmployeeRecruitDto emp = mapper.selectEmployeeById(personId);
        if (emp == null || file == null || file.isEmpty() || file.getSize() > MAX_PHOTO_SIZE) {
            throw new BusinessException("hr.alert.message.upload_failure", "Tải ảnh thất bại");
        }
        String original = file.getOriginalFilename() == null ? "" : file.getOriginalFilename();
        String ext = original.contains(".") ? original.substring(original.lastIndexOf('.') + 1).toLowerCase(Locale.ROOT) : "";
        if (!PHOTO_EXTENSIONS.contains(ext)) {
            throw new BusinessException("hr.alert.message.upload_failure", "Định dạng ảnh không hợp lệ");
        }
        // Bản gốc: /resources/photo/<cpnyId>/<EMPID>.<ext>
        String cpnyId = emp.getCpnyId() != null ? emp.getCpnyId() : currentCpnyId();
        String fileName = (trimToNull(emp.getEmpId()) != null ? emp.getEmpId().trim() : personId) + "." + ext;
        try {
            Path photoRoot = Paths.get(photoUploadPath).toAbsolutePath().getParent();
            Path dir = photoRoot.resolve(cpnyId).normalize();
            if (!dir.startsWith(photoRoot)) {
                throw new BusinessException("hr.alert.message.upload_failure", "Đường dẫn không hợp lệ");
            }
            Files.createDirectories(dir);
            try (InputStream in = file.getInputStream()) {
                Files.copy(in, dir.resolve(fileName), StandardCopyOption.REPLACE_EXISTING);
            }
            String photoPath = "/resources/photo/" + cpnyId + "/" + fileName;
            mapper.updatePhotoPath(personId, photoPath);
            log.info("Cập nhật ảnh nhận việc personId={}, path={}", personId, photoPath);
            return photoPath;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi tải ảnh nhận việc personId={}: {}", personId, e.getMessage(), e);
            throw new BusinessException("hr.alert.message.upload_failure", "Tải ảnh thất bại", e);
        }
    }

    // ── Education ────────────────────────────────────────────────────────────

    @Override
    public List<HrEducationRecruitDto> getEducationList(String personId) {
        try {
            return mapper.selectEducationList(personId);
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách giáo dục personId={}: {}", personId, e.getMessage(), e);
            return new ArrayList<>();
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveEducation(HrEducationRecruitDto dto) throws BusinessException {
        try {
            if (dto.getSeq() == null) mapper.insertEducation(dto);
            else mapper.updateEducation(dto);
        } catch (Exception e) {
            log.error("Lỗi lưu thông tin giáo dục seq={}: {}", dto.getSeq(), e.getMessage(), e);
            throw new BusinessException(MSG_SAVE_FAIL, "Lưu thất bại", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteEducation(Long seq) throws BusinessException {
        try {
            mapper.deleteEducation(seq);
        } catch (Exception e) {
            log.error("Lỗi xóa giáo dục seq={}: {}", seq, e.getMessage(), e);
            throw new BusinessException(MSG_DELETE_FAIL, "Xóa thất bại", e);
        }
    }

    // ── Work Experience ──────────────────────────────────────────────────────

    @Override
    public List<HrWorkExperienceRecruitDto> getWorkExpList(String personId) {
        try {
            return mapper.selectWorkExpList(personId);
        } catch (Exception e) {
            log.error("Lỗi lấy quá trình làm việc personId={}: {}", personId, e.getMessage(), e);
            return new ArrayList<>();
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveWorkExp(HrWorkExperienceRecruitDto dto) throws BusinessException {
        try {
            if (dto.getSeq() == null) mapper.insertWorkExp(dto);
            else mapper.updateWorkExp(dto);
        } catch (Exception e) {
            log.error("Lỗi lưu quá trình làm việc seq={}: {}", dto.getSeq(), e.getMessage(), e);
            throw new BusinessException(MSG_SAVE_FAIL, "Lưu thất bại", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteWorkExp(Long seq) throws BusinessException {
        try {
            mapper.deleteWorkExp(seq);
        } catch (Exception e) {
            log.error("Lỗi xóa quá trình làm việc seq={}: {}", seq, e.getMessage(), e);
            throw new BusinessException(MSG_DELETE_FAIL, "Xóa thất bại", e);
        }
    }

    // ── Family ───────────────────────────────────────────────────────────────

    @Override
    public List<HrFamilyRecruitDto> getFamilyList(String personId) {
        try {
            return mapper.selectFamilyList(personId);
        } catch (Exception e) {
            log.error("Lỗi lấy thông tin gia đình personId={}: {}", personId, e.getMessage(), e);
            return new ArrayList<>();
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveFamily(HrFamilyRecruitDto dto) throws BusinessException {
        try {
            if (dto.getSeq() == null) mapper.insertFamily(dto);
            else mapper.updateFamily(dto);
        } catch (Exception e) {
            log.error("Lỗi lưu thông tin gia đình seq={}: {}", dto.getSeq(), e.getMessage(), e);
            throw new BusinessException(MSG_SAVE_FAIL, "Lưu thất bại", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteFamily(Long seq) throws BusinessException {
        try {
            mapper.deleteFamily(seq);
        } catch (Exception e) {
            log.error("Lỗi xóa thông tin gia đình seq={}: {}", seq, e.getMessage(), e);
            throw new BusinessException(MSG_DELETE_FAIL, "Xóa thất bại", e);
        }
    }

    // ── Execute ──────────────────────────────────────────────────────────────

    @Override
    @Transactional
    public Map<String, Object> executeRecruit(String ids, String type) {
        Map<String, Object> result = new HashMap<>();
        try {
            String procIds = ids;
            if ("CONFIRM".equals(type) || "CANCEL".equals(type)) {
                List<String> personIds = Arrays.stream(ids.split(","))
                        .map(String::trim).filter(s -> !s.isEmpty()).collect(Collectors.toList());
                if (personIds.isEmpty()) {
                    result.put("success", false);
                    result.put("messageKey", "hrm.alert.empinfo.Choice_Perform_operation");
                    return result;
                }
                if ("CONFIRM".equals(type) && hasExistingEmpIds(mapper.selectEmpIdsByPersonIds(personIds), result)) {
                    return result;
                }
                // Bản gốc truyền danh sách dạng 'id1','id2','empty' cho PR_RECRUIT_EXECUTE
                procIds = personIds.stream().map(id -> "'" + id.replace("'", "") + "'")
                        .collect(Collectors.joining(",")) + ",'empty'";
            } else if ("CONFIRM_BATCH".equals(type)) {
                if (hasExistingEmpIds(mapper.selectEmpIdsByRegisterSeq(ids), result)) {
                    return result;
                }
            }
            Map<String, Object> params = new HashMap<>();
            params.put("personIds", procIds);
            params.put("type", type);
            mapper.callRecruitExecute(params);
            Object msg = params.get("message");
            String message = msg == null ? null : msg.toString();
            if (message == null || "OK".equalsIgnoreCase(message)) {
                result.put("success", true);
                result.put("messageKey", "liang.alert.message.org.execute_success");
            } else {
                // Bản gốc: procedure trả về khác "OK" = thông báo lỗi
                result.put("success", false);
                result.put("message", message);
            }
            log.info("PR_RECRUIT_EXECUTE type={}, ids={}, message={}", type, ids, message);
        } catch (Exception e) {
            log.error("Lỗi thực hiện recruit execute type={}: {}", type, e.getMessage(), e);
            result.put("success", false);
            result.put("message", "Lỗi: " + e.getMessage());
        }
        return result;
    }

    /** Có EMPID đã tồn tại ở HR_EMPLOYEE -> ghi lỗi vào result. */
    private boolean hasExistingEmpIds(List<String> empIds, Map<String, Object> result) {
        if (empIds == null || empIds.isEmpty()) return false;
        List<String> existing = mapper.selectExistingEmpIds(empIds);
        if (existing == null || existing.isEmpty()) return false;
        result.put("success", false);
        result.put("messageKey", MSG_EMPID_EXISTS);
        result.put("message", "Mã nhân viên đã tồn tại: " + String.join(", ", existing));
        return true;
    }

    // ── Quyết định hàng loạt ─────────────────────────────────────────────────

    @Override
    @Transactional
    public List<HrExpInsideBatchDto> getRegisterList() {
        try {
            // Bản gốc viewExperienceBatchList: mỗi lần mở trang dọn các dòng rỗng
            mapper.deleteEmptyBatchItems();
            return mapper.selectRegisterList(new HrExpInsideBatchDto());
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách đăng ký quyết định hàng loạt: {}", e.getMessage(), e);
            return new ArrayList<>();
        }
    }

    @Override
    @Transactional
    public Map<String, Object> saveRegister(HrExpInsideBatchDto dto) {
        return insertRegister(REGISTER_TYPE_EXPERIENCE_BATCH, dto.getRegisterDate());
    }

    @Override
    public DataTablesResponse<HrExpInsideBatchDto> getBatchList(HrExpInsideBatchDto dto) {
        try {
            int total = mapper.countBatchList(dto);
            List<HrExpInsideBatchDto> list = mapper.selectBatchListPage(dto);
            DataTablesResponse<HrExpInsideBatchDto> response = new DataTablesResponse<>(dto.getDraw(), total, total, list);
            int unprocessed = mapper.countUnprocessedBatch(dto);
            response.setAllProcessed(total > 0 && unprocessed == 0);
            return response;
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách quyết định hàng loạt registerSeq={}: {}", dto.getRegisterSeq(), e.getMessage(), e);
            return new DataTablesResponse<>(dto.getDraw(), "Lỗi truy vấn dữ liệu");
        }
    }

    @Override
    @Transactional
    public Map<String, Object> deleteBatchItem(String seq) {
        Map<String, Object> result = new HashMap<>();
        try {
            mapper.deleteBatchItem(seq);
            result.put("success", true);
        } catch (Exception e) {
            log.error("Lỗi xóa quyết định hàng loạt seq={}: {}", seq, e.getMessage(), e);
            result.put("success", false);
            result.put("messageKey", MSG_DELETE_FAIL);
        }
        return result;
    }

    @Override
    @Transactional
    public Map<String, Object> importBatchExcel(MultipartFile file, String registerSeq) {
        Map<String, Object> result = new HashMap<>();
        int successCount = 0;
        int errorCount = 0;
        StringBuilder errors = new StringBuilder();
        try (Workbook wb = new XSSFWorkbook(file.getInputStream())) {
            Sheet sheet = wb.getSheetAt(0);
            // Bỏ qua 1 dòng đầu (header)
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;
                String empId = getCellStr(row, 0); // Col A
                if (empId == null || empId.isEmpty()) continue;
                try {
                    HrExpInsideBatchDto dto = new HrExpInsideBatchDto();
                    dto.setRegisterSeq(registerSeq);
                    dto.setEmpId(empId);
                    dto.setLocalName(getCellStr(row, 1));          // Col B
                    dto.setStartDate(getCellStr(row, 2));          // Col C
                    dto.setTransCode(getCellStr(row, 4));          // Col E
                    dto.setDeptno(getCellStr(row, 6));             // Col G
                    dto.setPostFamily(getCellStr(row, 8));         // Col I
                    dto.setNewPostGradeNo(getCellStr(row, 10));    // Col K
                    dto.setPositionNo(getCellStr(row, 12));        // Col M
                    dto.setEmpTypeCode(getCellStr(row, 14));       // Col O
                    dto.setMainBusiness(getCellStr(row, 16));      // Col Q
                    dto.setCostCenter(getCellStr(row, 18));        // Col S
                    dto.setRemarks(getCellStr(row, 19));           // Col T
                    dto.setLineId(String.valueOf(i - 1));
                    // Nếu có ô trống, lấy giá trị hiện tại từ HR_EMPLOYEE để bổ sung
                    fillBlankFromEmployee(dto, empId);
                    mapper.insertBatchItem(dto);
                    successCount++;
                } catch (Exception ex) {
                    errorCount++;
                    errors.append("Dòng ").append(i + 1).append(": ").append(ex.getMessage()).append("; ");
                    log.warn("Lỗi import dòng {} empId={}", i + 1, empId, ex);
                }
            }
            result.put("success", true);
            result.put("successCount", successCount);
            result.put("errorCount", errorCount);
            if (errors.length() > 0) result.put("errors", errors.toString());
        } catch (Exception e) {
            log.error("Lỗi đọc file Excel import batch: {}", e.getMessage(), e);
            result.put("success", false);
            result.put("message", "Lỗi đọc file: " + e.getMessage());
        }
        return result;
    }

    private String getCellStr(Row row, int col) {
        Cell cell = row.getCell(col, Row.MissingCellPolicy.RETURN_BLANK_AS_NULL);
        if (cell == null) return null;

        CellType type = cell.getCellType();
        // Nếu cell là công thức, lấy kiểu kết quả đã được cache (giá trị hiển thị)
        if (type == CellType.FORMULA) {
            type = cell.getCachedFormulaResultType();
        }

        if (type == CellType.NUMERIC) {
            if (DateUtil.isCellDateFormatted(cell)) {
                return new SimpleDateFormat("yyyy/MM/dd").format(cell.getDateCellValue());
            }
            // Fallback: DataFormatter xử lý các định dạng date tùy chỉnh mà DateUtil không nhận ra (vd: YYYY-MM-DD)
            DataFormatter df = new DataFormatter();
            String formatted = df.formatCellValue(cell).trim();
            if (formatted.matches("\\d{4}[/-]\\d{1,2}[/-]\\d{1,2}")) {
                return formatted.replace("-", "/");
            }
            if (formatted.matches("\\d{1,2}[/-]\\d{1,2}[/-]\\d{4}")) {
                String[] parts = formatted.replace("/", "-").split("-");
                return parts[2] + "/" + parts[1] + "/" + parts[0];
            }
            double d = cell.getNumericCellValue();
            return (d == Math.floor(d)) ? String.valueOf((long) d) : String.valueOf(d);
        } else if (type == CellType.STRING) {
            String val = cell.getStringCellValue().trim();
            return val.isEmpty() ? null : val;
        } else if (type == CellType.BOOLEAN) {
            return String.valueOf(cell.getBooleanCellValue());
        }
        return null;
    }

    private void fillBlankFromEmployee(HrExpInsideBatchDto dto, String empId) {
        boolean hasBlank = dto.getLocalName() == null || dto.getDeptno() == null
                || dto.getPostFamily() == null || dto.getNewPostGradeNo() == null
                || dto.getPositionNo() == null || dto.getEmpTypeCode() == null
                || dto.getMainBusiness() == null || dto.getCostCenter() == null;
        if (!hasBlank) return;

        HrExpInsideBatchDto emp = mapper.selectCurrentEmpByEmpId(empId);
        if (emp == null) return;

        if (dto.getLocalName()      == null) dto.setLocalName(emp.getLocalName());
        if (dto.getDeptno()         == null) dto.setDeptno(emp.getDeptno());
        if (dto.getPostFamily()     == null) dto.setPostFamily(emp.getPostFamily());
        if (dto.getNewPostGradeNo() == null) dto.setNewPostGradeNo(emp.getNewPostGradeNo());
        if (dto.getPositionNo()     == null) dto.setPositionNo(emp.getPositionNo());
        if (dto.getEmpTypeCode()    == null) dto.setEmpTypeCode(emp.getEmpTypeCode());
        if (dto.getMainBusiness()   == null) dto.setMainBusiness(emp.getMainBusiness());
        if (dto.getCostCenter()     == null) dto.setCostCenter(emp.getCostCenter());
    }

    // ── Nhận việc hàng loạt (Recruit Batch) ──────────────────────────────────

    @Override
    @Transactional
    public List<HrRecruitBatchDto> getRblRegisterList() {
        try {
            // Bản gốc viewRecruitBatchList (không có FLAG): mỗi lần mở trang dọn các dòng rỗng
            mapper.deleteEmptyRblBatchItems();
            return mapper.selectRblRegisterList(new HrRecruitBatchDto());
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách đăng ký nhận việc hàng loạt: {}", e.getMessage(), e);
            return new ArrayList<>();
        }
    }

    @Override
    @Transactional
    public Map<String, Object> saveRblRegister(HrRecruitBatchDto dto) {
        return insertRegister(REGISTER_TYPE_RECRUIT_BATCH, dto.getRegisterDate());
    }

    /** Bản gốc addRegisterInfo: REGISTER_DATE dạng DD/MM/YYYY, REMARK = REGISTER_DATE. */
    private Map<String, Object> insertRegister(String registerType, String registerDate) {
        Map<String, Object> result = new HashMap<>();
        if (trimToNull(registerDate) == null) {
            result.put("success", false);
            result.put("messageKey", MSG_SAVE_FAIL);
            return result;
        }
        try {
            String seq = mapper.selectNextRegisterSeq();
            mapper.insertRegister(seq, registerType, registerDate.trim());
            result.put("success", true);
            result.put("registerSeq", seq);
            result.put("registerDate", registerDate.trim());
            log.info("Đăng ký đợt type={}, seq={}, date={}", registerType, seq, registerDate);
        } catch (Exception e) {
            log.error("Lỗi đăng ký đợt type={}: {}", registerType, e.getMessage(), e);
            result.put("success", false);
            result.put("messageKey", MSG_SAVE_FAIL);
        }
        return result;
    }

    @Override
    public DataTablesResponse<HrRecruitBatchDto> getRblBatchList(HrRecruitBatchDto dto) {
        try {
            int total = mapper.countRblBatchList(dto);
            List<HrRecruitBatchDto> list = mapper.selectRblBatchListPage(dto);
            DataTablesResponse<HrRecruitBatchDto> response = new DataTablesResponse<>(dto.getDraw(), total, total, list);
            int unprocessed = mapper.countUnprocessedRblBatch(dto);
            response.setAllProcessed(total > 0 && unprocessed == 0);
            return response;
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách nhận việc hàng loạt registerSeq={}: {}", dto.getRegisterSeq(), e.getMessage(), e);
            return new DataTablesResponse<>(dto.getDraw(), "Lỗi truy vấn dữ liệu");
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String addEmptyRblBatchItem(String registerSeq) throws BusinessException {
        try {
            String seq = mapper.selectNextRblBatchSeq();
            mapper.insertEmptyRblBatchItem(seq, registerSeq);
            log.info("Thêm dòng trống nhận việc hàng loạt seq={}, registerSeq={}", seq, registerSeq);
            return seq;
        } catch (Exception e) {
            log.error("Lỗi thêm dòng nhận việc hàng loạt registerSeq={}: {}", registerSeq, e.getMessage(), e);
            throw new BusinessException(MSG_SAVE_FAIL, "Lưu thất bại", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateRblBatchItem(HrRecruitBatchDto dto) throws BusinessException {
        String empId = trimToNull(dto.getEmpId());
        dto.setEmpId(empId);
        // Bản gốc IS_EXISTS_EMPID1: mã NV không được trùng HR_EMPLOYEE / HR_EMPLOYEE_RECRUIT / dòng chưa xử lý khác
        if (empId != null && mapper.countExistingRblEmpId(empId, dto.getSeq()) > 0) {
            throw new BusinessException(MSG_EMPID_EXISTS, "Mã nhân viên đã tồn tại: " + empId);
        }
        try {
            mapper.updateRblBatchItem(dto);
        } catch (Exception e) {
            log.error("Lỗi cập nhật nhận việc hàng loạt seq={}: {}", dto.getSeq(), e.getMessage(), e);
            throw new BusinessException(MSG_SAVE_FAIL, "Lưu thất bại", e);
        }
    }

    @Override
    @Transactional
    public Map<String, Object> deleteRblBatchItem(String seq) {
        Map<String, Object> result = new HashMap<>();
        try {
            mapper.deleteRblBatchItem(seq);
            result.put("success", true);
        } catch (Exception e) {
            log.error("Lỗi xóa nhận việc hàng loạt seq={}: {}", seq, e.getMessage(), e);
            result.put("success", false);
            result.put("messageKey", MSG_DELETE_FAIL);
        }
        return result;
    }

    @Override
    @Transactional
    public Map<String, Object> importRblBatchExcel(MultipartFile file, String registerSeq) {
        Map<String, Object> result = new HashMap<>();
        int successCount = 0;
        int errorCount = 0;
        StringBuilder errors = new StringBuilder();
        try (Workbook wb = new XSSFWorkbook(file.getInputStream())) {
            Sheet sheet = wb.getSheetAt(0);
            // Bỏ qua dòng đầu (header)
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;
                String empId = getCellStr(row, 0); // Col A
                if (empId == null || empId.isEmpty()) continue;
                try {
                    HrRecruitBatchDto dto = new HrRecruitBatchDto();
                    dto.setRegisterSeq(registerSeq);
                    dto.setEmpId(empId);
                    dto.setVietnamName(getCellStr(row, 1));       // Col B
                    dto.setEnglishName(getCellStr(row, 2));       // Col C
                    dto.setDob(getCellStr(row, 3));               // Col D
                    dto.setDateStarted(getCellStr(row, 4));       // Col E
                    dto.setEndProbationDate(getCellStr(row, 5));  // Col F
                    // Col G (6) = tên JOIN_TYPE, bỏ qua
                    dto.setJoinType(getCellStr(row, 7));          // Col H
                    // Col I (8) = tên JOIN_DETAIL_TYPE, bỏ qua
                    dto.setJoinDetailType(getCellStr(row, 9));    // Col J
                    // Col K (10) = tên DEPTNO, bỏ qua
                    dto.setDeptno(getCellStr(row, 11));           // Col L
                    // Col M (12) = tên POST_GRADE_NO, bỏ qua
                    dto.setPostGradeNo(getCellStr(row, 13));      // Col N
                    // Col O (14) = tên MAIN_BUSINESS, bỏ qua
                    dto.setMainBusiness(getCellStr(row, 15));     // Col P
                    // Col Q (16) = tên POST_FAMILY, bỏ qua
                    dto.setPostFamily(getCellStr(row, 17));       // Col R
                    // Col S (18) = tên EMP_TYPE_CODE, bỏ qua
                    dto.setEmpTypeCode(getCellStr(row, 19));      // Col T
                    // Col U (20) = tên POSITION_NO, bỏ qua
                    dto.setPositionNo(getCellStr(row, 21));       // Col V
                    // Col W (22) = tên COST_CENTER, bỏ qua
                    dto.setCostCenter(getCellStr(row, 23));       // Col X
                    // Col Y (24) = tên FINAL_DEGREE_CODE, bỏ qua
                    dto.setFinalDegreeCode(getCellStr(row, 25)); // Col Z
                    dto.setEndDate(getCellStr(row, 26));          // Col AA
                    dto.setInstitutionName(getCellStr(row, 27)); // Col AB
                    dto.setSubjectName(getCellStr(row, 28));      // Col AC
                    dto.setIdcardNo(getCellStr(row, 29));         // Col AD
                    dto.setIdcardSDate(getCellStr(row, 30));      // Col AE
                    dto.setIssuingAuthority(getCellStr(row, 31)); // Col AF
                    // Col AG (32) = tên SEXCODE, bỏ qua
                    dto.setSexcode(getCellStr(row, 33));          // Col AH
                    // Col AI (34) = tên NATIONALITY_CODE, bỏ qua
                    dto.setNationalityCode(getCellStr(row, 35)); // Col AJ
                    // Col AK (36) = tên NATION_CODE, bỏ qua
                    dto.setNationCode(getCellStr(row, 37));       // Col AL
                    // Col AM (38) = tên MARITAL_STATUS_CODE, bỏ qua
                    dto.setMaritalStatusCode(getCellStr(row, 39)); // Col AN
                    dto.setEmailSecond(getCellStr(row, 40));      // Col AO
                    dto.setHomePhone(getCellStr(row, 41));        // Col AP
                    dto.setTelephone(getCellStr(row, 42));        // Col AQ
                    dto.setAddressContent(getCellStr(row, 43));   // Col AR
                    dto.setRegPlace(getCellStr(row, 44));         // Col AS
                    dto.setLineId(String.valueOf(i - 1));
                    mapper.insertRblBatchItem(dto);
                    successCount++;
                } catch (Exception ex) {
                    errorCount++;
                    errors.append("Dòng ").append(i + 1).append(": ").append(ex.getMessage()).append("; ");
                    log.warn("Lỗi import nhận việc dòng {} empId={}", i + 1, empId, ex);
                }
            }
            result.put("success", true);
            result.put("successCount", successCount);
            result.put("errorCount", errorCount);
            if (errors.length() > 0) result.put("errors", errors.toString());
        } catch (Exception e) {
            log.error("Lỗi đọc file Excel import nhận việc hàng loạt: {}", e.getMessage(), e);
            result.put("success", false);
            result.put("message", "Lỗi đọc file: " + e.getMessage());
        }
        return result;
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    private static String trimToNull(String s) {
        if (s == null) return null;
        String t = s.trim();
        return t.isEmpty() ? null : t;
    }

    private String currentCpnyId() {
        try {
            ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            if (attrs != null) {
                HttpSession session = attrs.getRequest().getSession(false);
                if (session != null) {
                    Object cpny = session.getAttribute("cpnyId");
                    if (cpny != null) return cpny.toString();
                    HrUserInfo user = (HrUserInfo) session.getAttribute("currentHrUser");
                    if (user != null) return user.getCpnyId();
                }
            }
        } catch (Exception e) {
            log.warn("Không lấy được công ty của user hiện tại: {}", e.getMessage());
        }
        return null;
    }
}
