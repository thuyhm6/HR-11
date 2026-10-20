build dụ án để đưa vào JEUS 8
deploy-jeus.bat
mã màu: #dc6428

Dự án dùng Maven (có sẵn mvnw.cmd). Để build lại toàn bộ file .class, chạy lệnh sau ở thư mục gốc HVV-VHR:
.\mvnw.cmd clean compile

destroy: true,
columnDefs: [
	{ "width": "2%", "targets": 0 },
],

CONVERTTOUNSIGN(UPPER(t2.LOCAL_NAME)) LIKE '%' || CONVERTTOUNSIGN(UPPER(#{localName})) || '%'

<select class="form-select" id="arItemItemGroupCode" name="itemGroupCode"
	data-parent-code="1429" data-default-text="-- Chọn mã nhóm --">
</select>
Nhóm nhân viên - POST_FAMILY (dữ liệu lấy lấy thông qua data-parent-code="14015812")
Trạng thái làm việc - EMP_OFFICE (dữ liệu lấy lấy thông qua data-parent-code="15118" không có data-default-text)
Học vị - vrl_edu_deg_ (dữ liệu lấy lấy thông qua data-parent-code="13769")
Quan hệ - vrl_f_type_ (dữ liệu lấy lấy thông qua data-parent-code="950")
Giới tính - vrl_f_gen_ (dữ liệu lấy lấy thông qua data-parent-code="13768")

vrl_postFamily là Nhóm nhân viên -POST_FAMILY (dữ liệu lấy lấy thông qua data-parent-code="14015812" không có data-default-text). khi chọn value của Nhóm nhân viên thì đồng thời load lại cấp bậc - vrl_postGradeNo với data-parent-code chính là value vừa chọn của Nhóm nhân viên

<input type="text" class="form-control js-daterangepicker" data-drp-format="YYYY-MM-DD">

sử dụng processingModal.html để hiển thị khi đang xử lý, tham khảo cách sử dụng ở viewPiciOtAffirmLBatchList.html


url: '/ar/attendanceSettings/api/shift',
url: '/sys/api/code/list?parentCodeNo=400223',

Khi tôi bấm vào "HR Management System" để điều hướng sang hrm, thì lấy lại cho tôi danh sách menu với điều kiện SYS_TYPE trong bảng sy_role_group tương ứng có giá trị == '0'. Ngoài ra check giúp tôi điều kiện khi thực hiện câu lệnh SELECT COUNT(SU.USER_NO)     FROM SY_USER SU,SY_USER_RELATION SUR,SY_ROLE_GROUP SRG     WHERE SU.USER_NO = SUR.USER_NO     AND SUR.ROLE_GROUP_NO = SRG.ROLE_GROUP_NO     AND SRG.SYS_TYPE = 0     AND SU.USER_NAME = #{userName}, nếu kết quả trả về là 0 thì không cho phép điều hướng sang hrm, hiển thị thông báo "Bạn không có quyền truy cập vào HR Management System"

sử dụng onclick="openEmployeeSearchPopup()"> như của educationSearch.html để tìm nhân viên. $('#esm_empOffice').val('15119'); để truyền giá trị tìm kiếm mặc định

sử dụng cách tìm kiếm Họ tên / Mã NV như của viewPaInputItemData.html để tìm nhân viên.

sử dụng vppoOpenEmpSearch như của viewPaPayObj.html để tìm 1 nhân viên.

sử dụng veas_deptSearch như của viewEvsAffirmorSetup.html để lấy ra cây phòng ban để làm điều kiện tìm kiếm phòng ban.

sử dụng vpid_deptSearch như của viewPaInputItemData.html để lấy ra cây phòng ban để làm điều kiện tìm kiếm phòng ban.

phần vrl_deptNo lựa chọn phòng ban, tham khảo veas_deptSearch của viewEvsAffirmorSetup.html để lấy ra cây phòng ban để làm điều kiện tìm kiếm phòng ban (chỉ được phép chọn 1 phòng ban). khi hiện ra thì hiện Tên phòng ban, khi chọn xong thì lưu giá trị vào trường DEPTNO. vrl_costCenter cũng làm tương tự nhưng lưu giá trị vào trường COST_CENTER. khi chọn được phòng ban thì vrl_costCenter cũng được tuwej động chọn đúng mã đó.

bạn là người hiểu rất rõ về dự án này. căn cứ vào file viewNOContractInfo.html - ký kết hợp đồng,  hãy tạo cho tôi một file viewContractInfoForSearch.html - Tra cứu hợp đồng, dữ liệu lấy ra là tất cả các hợp đồng trong bảng HR_CONTRACT

Tạo cho tôi 1 file viewResumeList.html - Tổng hợp thay đổi nằm trong module org, dữ liệu lấy ra là tất cả các lần có thay đổi liên quan đến bộ phận. Dữ liệu này được lưu trong bảng org_resume_info với các trường tham khảo từ hình ảnh. Có đầy đủ chức năng tìm kiếm, thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị ORG_RESUME_INFO_SEQ.NEXTVAL, trường NO là duy nhất trong bảng org_resume_info, được tạo nên dựa trên ngày hiện tại với định dạng YYYYMMDDXXXX (XXXX là số thứ tự tăng dần)

Tạo cho tôi một file viewResumeProcess.html - Quy trình thay đổi nằm trong module org, với giao diện tham khảo từ hình ảnh. ở mục "Tên phiên bản" là tên của phiên bản thay đổi, chính là dữ liệu từ cột RESUME_NAME trong bảng org_resume_info

@viewResumeProcess.html#L21-23, khi người dùng tick vào Sao chép tổ chức cũ, Tự động tạo ra quyết định, Tạo ra nội dung thay đổi ,Hình thành tổ chức mới và bấm nút "Thực hiện" thì sẽ gọi đến một procedure PKG_RESUME_PROCESS.PR_PROCESS_EXECUTE(
						#RESUME_NO:VARCHAR#,
						#adminID:VARCHAR#,
						#adminIP:VARCHAR#,
						#cpnyId:VARCHAR#,
						#type:VARCHAR#,
						#message,jdbcType=VARCHAR,mode=OUT#). việc tick vào và bấm nút "Thực hiện" thì sẽ gọi đến procedure trên phải thực hiện theo thứ tự: Sao chép tổ chức cũ -> Tự động tạo ra quyết định -> Tạo ra nội dung thay đổi -> Hình thành tổ chức mới. giá trị tham số type tương ứng như sau: Sao chép tổ chức cũ - copyOrg, Tự động tạo ra quyết định - scfl, Tạo ra nội dung thay đổi - sczz, Hình thành tổ chức mới - qdzz


Tạo cho tôi một file viewComposeOrg.html - Thiết lập tổ chức nằm trong module org, với giao diện tham khảo từ hình ảnh. phần danh sách các tổ chức bên trái là dữ liệu lấy từ bảng ORG_INFO, phần bên phải là dữ liệu lấy từ bảng ORG_EMPLOYEE. với các trường của bảng ORG_INFO và ORG_EMPLOYEE tham khảo từ hình ảnh


Tạo cho tôi một file viewDeptManagerCheck.html - Kiểm tra trưởng bộ phận nằm trong module org, với giao diện tham khảo từ hình ảnh. dữ liệu lấy từ 2 bảng ORG_INFO và ORG_EMPLOYEE. trường IS_PART_TIME là thể hiện của việc kiêm nhiệm, nếu là 1 thì là kiêm nhiệm, nếu là 0 thì là không kiêm nhiệm, trường VACANCY thể hiện phòng ban có chức danh trưởng bộ phận hay không, nếu là 1 thì là có, nếu là 0 thì là không

căn cứ vào cấu trúc của viewComposeOrg.html hãy Tạo cho tôi một file viewOrgBusiness.html - Quản lý nghiệp vụ phòng ban nằm trong module org, với giao diện tham khảo từ hình ảnh. phần danh sách các tổ chức bên trái là dữ liệu lấy từ bảng ORG_INFO, phần bên phải là dữ liệu lấy từ bảng ORG_BUSINESS_RELATION. Mối quan hệ của 2 bảng là 1 ORG_INFO với nhiều ORG_BUSINESS_RELATION. với các trường của bảng ORG_BUSINESS_RELATION tham khảo từ hình ảnh. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel.

căn cứ vào cấu trúc của viewResumeList.html hãy Tạo cho tôi một file viewOrgCostCenter.html - Quản lý mã chi phí nằm trong module org, dữ liệu lấy từ bảng ORG_COST_CENTER. với các trường của bảng ORG_COST_CENTER tham khảo từ hình ảnh. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị ORG_COST_CENTER_SEQ.NEXTVAL

căn cứ vào cấu trúc của viewComposeOrg.html hãy Tạo cho tôi một file viewCurrentOrgInfo.html - Cây sơ đồ tổ chức nằm trong module org. phần danh sách các tổ chức bên trái là dữ liệu lấy từ bảng HR_DEPARTMENT, phần bên phải là dữ liệu lấy từ bảng HR_EMPLOYEE. với các trường của bảng HR_DEPARTMENT và HR_EMPLOYEE tham khảo từ hình ảnh.

Tạo cho tôi một file viewOrgInfo.html - Cấu trúc tổ chức nằm trong module org, với giao diện tham khảo từ hình ảnh. dữ liệu lấy từ 2 bảng HR_DEPARTMENT và HR_EMPLOYEE

tạo một bản sao từ viewComposeOrg.html với tên là viewHistoryOrgInfo.html - Lịch sử thay đổi tổ chức nằm trong module org. Lược bỏ đi chức năng thêm, sửa, xóa

Tạo cho tôi một file viewWorkInformation.html - Thông tin công việc nằm trong module hrm/empinfo. dữ liệu lấy từ 2 bảng hr_work_experience với các trường tham khảo từ hình ảnh. trường PERSON_ID của bảng hr_work_experience tham chiếu đến trường PERSON_ID của bảng HR_EMPLOYEE. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị HR_W_EXP_SEQ.NEXTVAL

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file educationSearch.html - Quá trình học tập nằm trong module hrm/empinfo. dữ liệu lấy từ bảng hr_education với các trường tham khảo từ hình ảnh, trường PERSON_ID của bảng hr_education tham chiếu đến trường PERSON_ID của bảng HR_EMPLOYEE. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị hr_edu_seq.nextval

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file addressSearch.html - Tra cứu địa chỉ nằm trong module hrm/empinfo. dữ liệu lấy từ bảng hr_address_matters với các trường tham khảo từ hình ảnh, trường PERSON_ID của bảng hr_address_matters tham chiếu đến trường PERSON_ID của bảng HR_EMPLOYEE. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị HR_ADDRESS_MATTERS_SEQ.NEXTVAL

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file familySearch.html - Tra cứu gia đình nằm trong module hrm/empinfo. dữ liệu lấy từ bảng hr_family với các trường tham khảo từ hình ảnh, trường PERSON_ID của bảng hr_family tham chiếu đến trường PERSON_ID của bảng HR_EMPLOYEE. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị HR_FAMILY_SEQ.NEXTVAL

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file emergencyAddressSearch.html - Tra cứu địa chỉ khẩn cấp nằm trong module hrm/empinfo. dữ liệu lấy từ bảng hr_emergency_address với các trường tham khảo từ hình ảnh, trường PERSON_ID của bảng hr_emergency_address tham chiếu đến trường PERSON_ID của bảng HR_EMPLOYEE. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị HR_EMERGENCY_ADDRESS_SEQ.NEXTVAL

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file recognitionSearch.html - Tra cứu khen thưởng nằm trong module hrm/empinfo. dữ liệu lấy từ bảng hr_reward với các trường tham khảo từ hình ảnh, trường PERSON_ID của bảng hr_reward tham chiếu đến trường PERSON_ID của bảng HR_EMPLOYEE. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị hr_reward_seq.NEXTVAL

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file punishmentSearch.html - Tra cứu kỷ luật nằm trong module hrm/empinfo. dữ liệu lấy từ bảng hr_punishment với các trường tham khảo từ hình ảnh, trường PERSON_ID của bảng hr_punishment tham chiếu đến trường PERSON_ID của bảng HR_EMPLOYEE. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị hr_punishment_seq.NEXTVAL

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file viewQualification.html - Tra cứu Chứng chỉ nằm trong module hrm/empinfo. dữ liệu lấy từ bảng hr_qualification với các trường tham khảo từ hình ảnh, trường PERSON_ID của bảng hr_qualification tham chiếu đến trường PERSON_ID của bảng HR_EMPLOYEE. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị hr_qualification_apply_seq.NEXTVAL

hãy chuyển giao diện /sys/rightsManagement/viewLoginUser.html này về dạng Angular + NG-ZORRO  (Frontend) dữ liệu hiển thị ra không dùng dataTables nữa mà dùng nz-table (tham khảo view-attendance-keeper). sau khi hoàn thành thì có thể xóa file /sys/rightsManagement/viewLoginUser.html cũ đi.
hãy chuyển giao diện /sys/rightsManagement/viewLoginUser.html này về dạng Angular + NG-ZORRO  (Frontend) dữ liệu hiển thị ra không dùng dataTables nữa mà dùng nz-table (tham khảo pa-month-person-info). sau khi hoàn thành thì có thể xóa file /sys/rightsManagement/viewLoginUser.html cũ đi.
hãy chuyển giao diện /sys/rightsManagement/viewLoginInfo.html này về dạng Angular + NG-ZORRO  (Frontend) dữ liệu hiển thị ra không dùng dataTables nữa mà dùng nz-table (tham khảo pa-month-person-info). sau khi hoàn thành thì có thể xóa file /sys/rightsManagement/viewLoginInfo.html cũ đi.
hãy chuyển giao diện /hrm/approve/viewEssApplyInfo.html này về dạng Angular + NG-ZORRO  (Frontend) dữ liệu hiển thị ra không dùng dataTables nữa mà dùng nz-table (tham khảo pa-month-person-info). sau khi hoàn thành thì có thể xóa file /hrm/approve/viewEssApplyInfo.html cũ đi.
hãy chuyển giao diện /sys/rightsManagement/viewLoginUserIPList.html này về dạng Angular + NG-ZORRO  (Frontend) dữ liệu hiển thị ra không dùng dataTables nữa mà dùng nz-table (tham khảo pa-month-person-info). sau khi hoàn thành thì có thể xóa file /sys/rightsManagement/viewLoginUserIPList.html cũ đi.
Căn cứ vào manage-emp-position-info.

tương tụ view-roles-group như hãy tạo cho tôi giao diện /sys/rightsManagement/viewSyRolesGroupList - Phân quyền người dùng. mục đích là phân quyền cho người dùng theo từng nhóm quyền trong view-roles-group

bạn đã loại bỏ mất những thành phần trong topbar.html (gồm Đổi mật khẩu, và link HR Management System).hãy đưa 2 phần này vào. và sau đó có thể xóa topbar.html đi nếu nó không cần thiết nữa. khi bấm vào link HR Management System vẫn điều hướng bình thường sang hrm.html. nhưng bây giờ hãy chuyển sang dạng Angular + NG-ZORRO  (Frontend) cho hrm.html, và khi bấm vào link HR Management System thì vẫn điều hướng sang hrm.html nhưng không hiển thị tên của tab đó lên ô địa chỉ chỉ trình duyệt nữa. sau khi chuyển sang Angular + NG-ZORRO  (Frontend) cho hrm.html thì có thể xóa hrm.html cũ đi.
cập nhật lại thông báo ở bên hrm giúp tôi, khi chuyển sang hrm thì thông báo phỉa chuyển sang attendance-ex-confirm và leave-confirm, và đếm lại số lương thông báo

tạo mới giao diện /ess/tempEmp/viewMonthDetailList - Thông tin nghỉ phép năm của nhân viên với dạng Angular + NG-ZORRO  (Frontend). giao diện tham khảo hình ảnh. với dữ liệu tham khảo từ selectVacationRowsByYear ở YearUseInfoMapper, 

tạo mới giao diện /ess/infoApply/viewOverTimeLimtShenPiList - Theo dõi tăng ca tháng với dạng Angular + NG-ZORRO  (Frontend). giao diện tham khảo hình ảnh. Dữ liệu lấy từ câu lệnh SQL: SELECT
				HR.EMPID                                                                                                           AS EMPID,
				HR.LOCAL_NAME                                                                                                      AS LOCAL_NAME,
.

Tạo mới lại cho tôi giao diện /ar/countAttendance/empWorkingTimefoList - Theo dõi tình trạng quẹt thẻ với dạng Angular + NG-ZORRO  (Frontend). chỉ lấy những nhân viên có dữ liệu OUT ở bảng AR_MAC_RECORDS_HTSV liên tiếp 13 ngày trở lên, đồng thời có dữ liệu trong bảng AR_DETAIL_HTSV.

Tôi đang thực hiện việc chuyển đổi dự án HR ở dự án D:\Java\WorkSpace\Hanwha_HTSV sang dự án này. Tạo mới cho tôi giao diện /sys/affirmSpecial/viewAffirmSpecialList - Phê duyệt đặc biệt với dạng Angular + NG-ZORRO  (Frontend). chức năng giống như /sys/affirmSpecial/viewAffirmSpecialList ở dự án D:\Java\WorkSpace\Hanwha_HTSV. chỉ là giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này.

Tương tự Tạo mới cho tôi giao diện /disc/autoExcel/viewRetrieveSqlMasterList - Tra cứu line phê duyệt với dạng Angular + NG-ZORRO  (Frontend). chức năng giống như /disc/autoExcel/viewRetrieveSqlMasterList ở dự án D:\Java\WorkSpace\Hanwha_HTSV. chỉ là giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này. với modal, khi bấm chuột ra ngoài phạm vi modal thì sẽ đóng modal


Tôi đang thực hiện việc chuyển đổi dự án HR ở dự án D:\Java\WorkSpace\Hanwha_HTSV sang dự án này. Tạo mới cho tôi giao diện /pa/workManagement/detailmonthCountInfoLeft, /pa/workManagement/detailYearCountInfoLeft, /pa/workManagement/viewPaResultList, /pa/workManagement/viewDeptPaResultList và /report/ar/viewArReportsList  với dạng Angular + NG-ZORRO  (Frontend). chức năng giống như ở dự án D:\Java\WorkSpace\Hanwha_HTSV. chỉ là giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này.

Tôi đang thực hiện việc chuyển đổi dự án HR ở dự án D:\Java\WorkSpace\Hanwha_HTSV sang dự án này. Tạo mới cho tôi giao diện /pa/workManagement/monthPersonCountInfoList, /pa/paView/viewPaMonthChain, /pa/workManagement/viewVerificationList, /pa/workManagement/detailPersonCountInfo, /pa/workManagement/detailPersonCountInfoLeft, /pa/workManagement/detailItemCountInfo, /pa/workManagement/detailItemDifCountInfo và /pa/workManagement/viewResultConfirmList  với dạng Angular + NG-ZORRO  (Frontend). chức năng giống như ở dự án D:\Java\WorkSpace\Hanwha_HTSV. chỉ là giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này.


Tôi đang thực hiện việc chuyển đổi dự án HR ở dự án D:\Java\WorkSpace\Hanwha_HTSV sang dự án này. Chỉnh sửa lại cho tôi chức năng Tình hình tăng ca ở giao diện /ess/viewDept/viewOtApplyPersonalList. Áp dụng chức năng giống như ở dự án D:\Java\WorkSpace\Hanwha_HTSV để tương thích với dự án mới này. chỉ là giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này

tương tự hãy thực hiện tiếp với những giao diện /ess/infoApplyAttendance/viewApplyAttenanceBatchInfoList, /ess/infoApplyAttendance/viewAttendanceExForBatchInfoList, /ess/infoApplyAttendance/viewSSTApplyAttendance, /ess/infoApply/viewShowCwaAbnormalApply, /ar/attendanceMintenance/viewApplyAttenanceManagentInfoList_new và /ar/attendanceMintenance/viewArOvertimeManagent_fast. Áp dụng chức năng giống như ở dự án D:\Java\WorkSpace\Hanwha_HTSV để tương thích với dự án mới này. chỉ là giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này



Tương tự Tạo mới cho tôi giao diện /edu/trainfile/trainCalendar, /report/ar/viewTrainReport và /edu/traineducation/trainArchives với dạng Angular + NG-ZORRO  (Frontend). chức năng giống như các giao diện tương ứng ở dự án D:\Java\WorkSpace\Hanwha_HTSV. chỉ là giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này.


viết tiếp cho tôi chức năng đồng bộ giống như SynchronizationApprovalStatus của SendEmailTask.java trong dự án D:\Java\WorkSpace\Hanwha_HTSV sang dự án này.


Ở giao diện view-pa-work-flow - Quy trình tính lương này, khi tick vào Tính lương và bấm thực hiện thì hệ thống sẽ gọi đến package PKG_PA_WORK_FLOW và sau đó gọi đến parocedure PA_MONTH_CAL_P để thực hiện tính lương. nội dung 2 package và procedure tôi đang để trong đường dẫn D:\Java\WorkSpace\New_HR\HVV-VHR\oracle. hiện tại hệ thống đang tính lương theo tháng, tức là lấy dữ liệu từ bảng PA_PARAM_DATA và Pa_Param_Data_Other dựa theo START_MONTH và END_MONTH với định dạng là MMYYYY, giờ tôi muốn chuyển đổi thành START_DATE và END_DATE thì làm thế nào. vì lương nhân viên có nhiều trường hợp giữa tháng thay đổi, nên phải tính theo ngày, không thể tính theo tháng được.



Phần hiển thị thông tin phê duyệt của giao diện apply-attendance-batch-info này , hãy tham khảo giao diện /ess/infoApply/viewApprovaledLeaveInfo ở dự án D:\Java\WorkSpace\Hanwha_HTSV để hiển thị dữ liệu cũng như thông tin, giao diện, giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này. tương tự, ở các giao diện liên quan đến request nghỉ phép cũng thay đổi giúp tôi

Phần hiển thị thông tin phê duyệt của giao diện ot-apply-batch-info này , hãy tham khảo giao diện /ess/infoApply/viewApprovaledOtInfo  ở dự án D:\Java\WorkSpace\Hanwha_HTSV để hiển thị dữ liệu cũng như thông tin, giao diện, giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này. tương tự, ở các giao diện liên quan đến request tăng ca cũng thay đổi giúp tôi

Phần hiển thị thông tin phê duyệt của giao diện check-attendance-ex-for-batch này , hãy tham khảo giao diện /ess/infoApply/viewAttendanceEx  ở dự án D:\Java\WorkSpace\Hanwha_HTSV để hiển thị dữ liệu cũng như thông tin, giao diện, giao diện được chuyển sang Angular + NG-ZORRO  (Frontend) và tương thích với dự án mới này. tương tự, ở các giao diện liên quan đến request Xác nhận chấm công cũng thay đổi giúp tôi

hãy kiểm tra lại giúp tôi giao diện sst-ot-apply-info, khi gọi PKG_AFFIRM_EMAIL.GET_AFFIRMOR_LIST_IMPROVE để lấy thông tin người duyệt, thì không truyền được giá trị applyTypeCode. có thể tham khảo /ess/infoApply/viewSSTOtApplyInfo ở dự án D:\Java\WorkSpace\Hanwha_HTSV để biết giá trị applyTypeCode là gì, tương tự ở các giao diện liên quan đến request tăng ca cũng xem lại giúp tôi


/ess/infoApply/viewApprovaledLeaveInfo


Thêm cho tôi chức năng đồng bộ dữ liệu của hệ thống Cleverser tương tự như ở synchronizationApprovalStatus ở D:\Java\WorkSpace\Hanwha_HAE\src\com\ait\web\task\SendEmailTask. Áp dụng đugs các bước chức năng và  tương thích với dự án mới này