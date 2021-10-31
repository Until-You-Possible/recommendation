package com.dianping.controller;


import com.dianping.core.UnifyResponseSuccess;
import com.dianping.model.UserModel;
import com.dianping.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
@RequestMapping("/user")
public class UserController {


    @Autowired
    private UserService userService;

    @RequestMapping("/get")
    public UnifyResponseSuccess getUser(@RequestParam(name = "id") Integer id) {
        UserModel userModel = userService.getUser(id);
        return UnifyResponseSuccess.create(userModel);
    }

}
