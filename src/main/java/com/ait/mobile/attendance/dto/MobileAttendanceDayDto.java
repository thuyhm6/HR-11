package com.ait.mobile.attendance.dto;

import java.util.ArrayList;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Kết quả công của 1 ngày (AR_DETAIL_HTSV), gom theo ngày để app hiển thị dạng lịch / danh sách. */
@Data
@NoArgsConstructor
public class MobileAttendanceDayDto {

    /** yyyy-MM-dd */
    private String date;
    private String shiftName;
    private List<Item> items = new ArrayList<>();

    @Data
    @NoArgsConstructor
    public static class Item {
        private String itemNo;
        /** Loại công: đi làm, nghỉ phép, đi muộn, về sớm... */
        private String itemName;
        /** DD/MM/YYYY HH:mm */
        private String fromTime;
        private String toTime;
        /** Số lượng (giờ / ngày tùy loại công). */
        private String quantity;
    }
}
