package com.ait.sy.sys.dto;

import lombok.Data;

/** Body JSON cho POST /auth/api/login (dùng bởi Angular SPA thay cho form POST /login). */
@Data
public class LoginApiRequest {
    private String username;
    private String password;
    private String lang;
}
