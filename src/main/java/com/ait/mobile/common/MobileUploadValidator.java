package com.ait.mobile.common;

import java.util.List;
import java.util.Locale;
import java.util.Set;
import org.springframework.web.multipart.MultipartFile;

/** Giới hạn file đính kèm gửi từ app: tối đa 5 file, mỗi file <= 10MB, chỉ ảnh / PDF. */
public final class MobileUploadValidator {

    public static final int MAX_FILES = 5;
    public static final long MAX_FILE_SIZE = 10L * 1024 * 1024;
    private static final Set<String> ALLOWED_EXT = Set.of("jpg", "jpeg", "png", "heic", "webp", "pdf");

    private MobileUploadValidator() {
    }

    public static void validate(List<MultipartFile> files) {
        if (files == null || files.isEmpty()) {
            return;
        }
        List<MultipartFile> nonEmpty = files.stream().filter(f -> f != null && !f.isEmpty()).toList();
        if (nonEmpty.size() > MAX_FILES) {
            throw MobileException.rule("mobile.upload.tooMany", "Chỉ được đính kèm tối đa {0} file", MAX_FILES);
        }
        for (MultipartFile f : nonEmpty) {
            if (f.getSize() > MAX_FILE_SIZE) {
                throw MobileException.rule("mobile.upload.tooLarge", "Mỗi file không được vượt quá {0}MB", 10);
            }
            String name = f.getOriginalFilename() == null ? "" : f.getOriginalFilename();
            int dot = name.lastIndexOf('.');
            String ext = dot < 0 ? "" : name.substring(dot + 1).toLowerCase(Locale.ROOT);
            if (!ALLOWED_EXT.contains(ext)) {
                throw MobileException.rule("mobile.upload.invalidType", "Chỉ chấp nhận file ảnh hoặc PDF");
            }
        }
    }
}
