package com.ait.sy.syAffirm.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * Payload thiết lập/cập nhật phê duyệt đặc biệt: với mỗi (đối tượng x loại phê duyệt), toàn bộ người duyệt
 * cũ bị thay bằng danh sách affirmorIds (thứ tự trong list = cấp duyệt 1, 2, 3...).
 */
@Data
@NoArgsConstructor
public class AffirmSpecialSaveDto {
    @NotEmpty(message = "alert.message.sys.affirm.pleaseChooseAffirmType")
    private List<String> affirmTypeNos = new ArrayList<>();
    /** PERSON_ID người duyệt theo đúng thứ tự cấp duyệt - rỗng nghĩa là xóa thiết lập của các ô đã chọn. */
    private List<String> affirmorIds = new ArrayList<>();
    /** DEPTNO phòng ban được duyệt (đã mở rộng xuống phòng ban con ở frontend). */
    private List<String> deptNos = new ArrayList<>();
    /** PERSON_ID nhân viên được duyệt. */
    private List<String> personIds = new ArrayList<>();
}
