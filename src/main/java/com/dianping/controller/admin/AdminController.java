package com.dianping.controller.admin;


import com.dianping.core.UnifyResponseSuccess;
import com.dianping.dto.AdminInfoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController("/admin/admin")
@ResponseBody
@RequestMapping("/admin/admin")
public class AdminController {

    @Value("${admin.email}")
    private String email;
    @Value("${admin.password}")
    private String password;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody AdminInfoDTO adminInfo) {
        String email = adminInfo.getEmail();
        String password = adminInfo.getPassword();
        Map<String, String> stringMap = new HashMap<>();
        if (!StringUtils.hasLength(email) || !email.equals(this.email)) {
            stringMap.put("email", "email不合法或者不正确");
            return stringMap;
        }
        if (!StringUtils.hasLength(password) || !password.equals(this.password)) {
            stringMap.put("email", "password不合法或者不正确");
            return stringMap;
        }
        return stringMap;
    }

}
