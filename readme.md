build dụ án để đưa vào JEUS 8
deploy-jeus.bat

destroy: true,

bạn là người hiểu rất rõ về dự án này. căn cứ vào file viewNOContractInfo.html - ký kết hợp đồng,  hãy tạo cho tôi một file viewContractInfoForSearch.html - Tra cứu hợp đồng, dữ liệu lấy ra là tất cả các hợp đồng trong bảng HR_CONTRACT

Tạo cho tôi 1 file viewResumeList.html - Tổng hợp thay đổi nằm trong module org, dữ liệu lấy ra là tất cả các lần có thay đổi liên quan đến bộ phận. Dữ liệu này được lưu trong bảng org_resume_info với các trường tham khảo từ hình ảnh. Có đầy đủ chức năng tìm kiếm, thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ khi tạo mới là tự động tăng với giá trị ORG_RESUME_INFO_SEQ.NEXTVAL, trường NO là duy nhất trong bảng org_resume_info, được tạo nên dựa trên ngày hiện tại với định dạng YYYYMMDDXXXX (XXXX là số thứ tự tăng dần)

Tạo cho tôi một file viewResumeProcess.html - Quy trình thay đổi nằm trong module org, với giao diện tham khảo từ hình ảnh. ở mục "Tên phiên bản" là tên của phiên bản thay đổi, chính là dữ liệu từ cột RESUME_NAME trong bảng org_resume_info

@viewResumeProcess.html#L21-23, khi người dùng tick vào Sao chép tổ chức cũ, Tự động tạo ra quyết định, Tạo ra nội dung thay đổi ,Hình thành tổ chức mới và bấm nút "Thực hiện" thì sẽ gọi đến một procedure PKG_RESUME_PROCESS.PR_PROCESS_EXECUTE(
						#RESUME_NO:VARCHAR#,
						#adminID:VARCHAR#,
						#adminIP:VARCHAR#,
						#interCpnyID:VARCHAR#,
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

căn cứ vào cấu trúc của viewComposeOrg.html hãy Tạo cho tôi một file viewCodeManage.html - Quản lý code nằm trong module sys. phần bên trái lấy dữ liệu từ 2 bảng sy_code và sy_global_name, bảng sy_global_name là dạng bảng đa ngôn ngữ, tôi có thiết lập 4 loại ngôn nữa đó là tiếng việt - vi, tiếng anh - en, tiếng trung - zh, tiếng hàn - ko, thể hiện theo kiểu phân cấp, trường NO của bảng sy_global_name tương ứng với trường CODE_NO của bảng sy_code, và tương ứng với CODE_NO sẽ có PARENT_CODE_NO để phân cấp cha con, chi tiết các trường của 2 bảng sy_global_name và sy_code tham khảo ở hình ảnh. phần bên phải là danh sách các code là con của những code được chọn ở bên trái, Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường SEQ của bảng sy_global_name khi tạo mới là tự động tăng với giá trị SY_GLOBAL_SEQ.NEXTVAL

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file viewCompany.html - Quản lý công ty nằm trong module sys/basicMaintenance. dữ liệu lấy từ bảng HR_COMPANY với các trường tham khảo từ hình ảnh, có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường CPNY_NO khi tạo mới là tự động tăng với giá trị trường SEQ của bảng sy_global_name. Tức là khi nhập tên của công ty sẽ 4 tên tiếng việt, tiếng anh, tiếng trung, tiếng hàn. và sinh ra tương ứng trong bảng sy_global_name.

căn cứ vào cấu trúc của viewCodeManage.html hãy Tạo cho tôi một bản sao là file viewCodePamers.html - Quản lý tham số nằm trong module sys/basicMaintenance, lưu ý vấn đề ID. chỉ khác là mục đích của giao diện này để cấu hình code cho mã công ty là trường CPNY_ID của bảng HR_COMPANY. khi click vào tên ở bên trái, thì sẽ xuất hiện dánh sách các node con ở bên phải, ở đấy tôi có thể tick chọn các node con để lưu cho mã công ty đó, giá trị sẽ được lưu vào trong bảng SY_CODE_PARAM, chi tiết các trường của bảng SY_CODE_PARAM tham khảo ở hình ảnh. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường PARAM_NO của bảng SY_CODE_PARAM khi tạo mới là tự động tăng với giá trị SY_CODE_PARAM_SEQ.NEXTVAL

căn cứ vào cấu trúc của viewCodePamers.html hãy Tạo cho tôi một file viewMenuPamers.html - Quản lý tham số màn hình nằm trong module sys/basicMaintenance, lưu ý vấn đề ID. mục đích của giao diện này để cấu hình code cho mã công ty là trường CPNY_ID của bảng HR_COMPANY. khi click vào tên ở bên trái, thì sẽ xuất hiện dánh sách các node con ở bên phải, ở đấy tôi có thể tick chọn các node con để lưu cho mã công ty đó, giá trị sẽ được lưu vào trong bảng sy_menu_param, chi tiết các trường của bảng sy_menu_param tham khảo ở hình ảnh. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường PARAM_NO của bảng sy_menu_param khi tạo mới là tự động tăng với giá trị SY_MENU_PARAM_SEQ.NEXTVAL


căn cứ vào cấu trúc của viewCompany.html hãy Tạo cho tôi một file viewMenuList.html - Quản lý menu nằm trong module sys/basicMaintenance, lưu ý các ID để tránh xung đột với các ID ở các file html khác. dữ liệu lấy từ bảng sy_menu với các trường tham khảo từ hình ảnh, có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường MENU_NO khi tạo mới là tự động tăng với giá trị trường SEQ của bảng sy_global_name. Tức là khi nhập tên của menu sẽ 4 tên tiếng việt, tiếng anh, tiếng trung, tiếng hàn. và sinh ra tương ứng trong bảng sy_global_name.

căn cứ vào cấu trúc của viewCompany.html hãy Tạo cho tôi một file viewSyRolesGroupList.html - Quản lý nhóm quyền nằm trong module sys/syRole, lưu ý các ID để tránh xung đột với các ID ở các file html khác. dữ liệu lấy từ bảng SY_ROLES_GROUP với các trường tham khảo từ hình ảnh, có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường ROLE_GROUP_NO và ROLE_GROUP_ID khi tạo mới là tự động tăng với giá trị trường SEQ của bảng sy_global_name. Tức là khi nhập tên của nhóm quyền sẽ 4 tên tiếng việt, tiếng anh, tiếng trung, tiếng hàn. và sinh ra tương ứng trong bảng sy_global_name.

căn cứ vào cấu trúc của viewSyRolesGroupList.html hãy Tạo cho tôi một file viewRolesGroup.html - Quản lý quyền hạn nằm trong module sys/syRole, lưu ý các ID để tránh xung đột với các ID ở các file html khác. dữ liệu lấy từ bảng SY_ROLES với các trường tham khảo từ hình ảnh, có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường ROLE_NO và ROLE_ID khi tạo mới là tự động tăng với giá trị trường SEQ của bảng sy_global_name. Tức là khi nhập tên của nhóm quyền sẽ 4 tên tiếng việt, tiếng anh, tiếng trung, tiếng hàn. và sinh ra tương ứng trong bảng sy_global_name. mục đích của giao diện này để kết nối đến bảng sy_role_relation thông qua trường ROLE_NO. chức năng của giao diện này là để phân menu vào quyền hạn. khi thêm mới quyền hạn thì sẽ hiển thị tất cả menu theo dạng phân cấp để có thể tick chọn. bảng sy_role_relation có các trường như hình ảnh tham khảo.

hãy sửa lại cách thức lưu menu cho mỗi quyền hạn, khi click vào từng quyền hạn ở bên trái thì sẽ hiển thị tất cả menu theo dạng phân cấp ở bên phải để có thể tick chọn. thêm nút lưu để lưu lại vào bảng sy_role_relation. khi xóa quyền hạn thì sẽ xóa luôn trong bảng sy_role_relation.

chỉnh sửa lại chức năng của giao diện viewSyRolesGroupList.html. chức năng của giao diện này là để phân quyền vào nhóm quyền. khi thêm mới nhóm quyền thì sẽ hiển thị tất cả quyền hạn (quyền hạn chính là các giá trị trong bảng SY_ROLES) để có thể tick chọn, và khi xóa quyền hạn thì sẽ xóa luôn trong bảng trung gian. 2 bảng SY_ROLES và SY_ROLES_GROUP có quan hệ thông qua bảng trung gian là sy_role_group_relation có các trường như hình ảnh tham khảo. 

hãy sửa lại cách thức lưu quyền hạn cho mỗi nhóm quyền ở giao diện viewSyRolesGroupList.html, khi click vào từng nhóm quyền ở bên trái thì sẽ hiển thị tất cả quyền hạn (quyền hạn chính là các giá trị trong bảng SY_ROLES) ở bên phải để có thể tick chọn. thêm nút lưu để lưu lại vào bảng sy_role_group_relation. khi xóa quyền hạn thì sẽ xóa luôn trong bảng sy_role_group_relation.

căn cứ vào cấu trúc của viewSyRolesGroupList.html hãy Tạo cho tôi một file viewLoginUser.html - Quản lý người dùng nằm trong module sys/syRole, lưu ý các ID để tránh xung đột với các ID ở các file html khác. dữ liệu lấy từ bảng SY_USER với các trường tham khảo từ hình ảnh, có chức năng reset mật khẩu về mặc định là 123456A@ hoặc một mật khẩu mà tự nhập vào ô reset mật khẩu, xuất excel. khi click vào từng người dùng ở bên trái thì sẽ hiển thị tất cả nhóm quyền (nhóm quyền chính là các giá trị trong bảng SY_ROLES_GROUP) ở bên phải để có thể tick chọn. thêm nút lưu để lưu lại vào bảng sy_USER_relation. khi xóa nhóm quyền thì sẽ xóa luôn trong bảng sy_USER_relation. mục đích của giao diện này để kết nối đến bảng SY_ROLE_GROUP thông qua bảng trung gian là sy_USER_relation thông qua trường USER_NO và ROLE_GROUP_NO. chức năng của giao diện này là để phân quyền vào user. bảng sy_USER_relation có các trường như hình ảnh tham khảo.

căn cứ vào cấu trúc của viewWorkInformation.html hãy Tạo cho tôi một file viewCycleParameter.html - Tra cứu thông số nằm trong module ar/attendanceSettings. dữ liệu lấy từ bảng AR_STATISTIC_DATE_PARAM với các trường tham khảo từ hình ảnh, trường CPNY_ID của bảng AR_STATISTIC_DATE_PARAM tham chiếu đến trường CPNY_ID của bảng HR_COMPANY. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường PARAM_NO khi tạo mới là tự động tăng với giá trị AR_STATISTIC_DATE_PARAM_SEQ.NEXTVAL

căn cứ vào cấu trúc của viewCycleParameter.html hãy Tạo cho tôi một file viewCycle.html - Chi nhánh nằm trong module ar/attendanceSettings. dữ liệu lấy từ bảng AR_STATISTIC_DATE với các trường tham khảo từ hình ảnh. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường STAT_NO khi tạo mới là tự động tăng với giá trị trường SEQ của bảng sy_global_name. Tức là khi nhập tên của nhóm quyền sẽ 4 tên tiếng việt, tiếng anh, tiếng trung, tiếng hàn. và sinh ra tương ứng trong bảng sy_global_name.

căn cứ vào cấu trúc của viewCycle.html hãy Tạo cho tôi một file viewArItem.html - Danh sách hạng mục nằm trong module ar/attendanceSettings. dữ liệu lấy từ bảng AR_ITEM với các trường tham khảo từ hình ảnh. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường ITEM_NO khi tạo mới là tự động tăng với giá trị trường SEQ của bảng sy_global_name. Tức là khi nhập tên của nhóm quyền sẽ 4 tên tiếng việt, tiếng anh, tiếng trung, tiếng hàn. và sinh ra tương ứng trong bảng sy_global_name.

căn cứ vào cấu trúc của viewArItem.html hãy Tạo cho tôi một file viewArItemParamList.html - Danh sách tham số nằm trong module ar/attendanceSettings. dữ liệu lấy từ bảng AR_ITEM_PARAM với các trường tham khảo từ hình ảnh. dữ liệu kết hợp cùng với bảng AR_ITEM thông qua trường ITEM_NO, kết hợp với bảng HR_COMPANY thông qua trường CPNY_ID. Có đầy đủ chức năng thêm mới, sửa, xóa, phân trang, xuất excel. lưu ý trường AR_PARAM_NO khi tạo mới là tự động tăng với giá trị AR_ITEM_PARAM_SEQ.NEXTVAL.


hãy rà soát lại toàn bộ dự án, kiểm tra xem  code dự án đã tối ưu chưa, cần thay đổi ở đâu không, hãy kiểm tra vấn đề bảo mật đã tốt chưa

@MapperScan(value = {"com.ait.mapper", "com.ait.ar"}, annotationClass = Mapper.class)