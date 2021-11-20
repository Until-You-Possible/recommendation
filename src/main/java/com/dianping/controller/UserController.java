package com.dianping.controller;


import com.dianping.Until.Util;
import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.core.UnifyResponseSuccess;
import com.dianping.dto.UserLoginDTO;
import com.dianping.dto.UserModelDTO;
import com.dianping.model.UserModel;
import com.dianping.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Controller
@ResponseBody
@RequestMapping("/user")
@Validated
public class UserController {


    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/get")
    public UnifyResponseSuccess getUser(@RequestParam(name = "id") Integer id) throws BusinessException {
        UserModel userModel = userService.getUser(id);
        if (userModel == null) {
            throw new BusinessException(EmBusinessError.NO_OBJECT_FOUND);
        }
        return UnifyResponseSuccess.create(userModel);
    }

    // user register
    @RequestMapping("/register")
    public UnifyResponseSuccess register(@Valid @RequestBody UserModelDTO userModelDTO,
                                         BindingResult bindingResult)
            throws BusinessException, NoSuchAlgorithmException, UnsupportedEncodingException {
        if (bindingResult.hasErrors()) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, Util.processErrorString(bindingResult));
        }
        UserModel registerUser = new UserModel();
        registerUser.setGender(userModelDTO.getGender());
        registerUser.setNickName(userModelDTO.getNickName());
        registerUser.setPassword(userModelDTO.getPassword());
        registerUser.setTelephone(userModelDTO.getTelephone());
        UserModel resUserModel = userService.register(registerUser);
        return UnifyResponseSuccess.create(resUserModel);
    }
    // user login
    @RequestMapping("/login")
    public UnifyResponseSuccess login(@RequestBody UserLoginDTO userLoginDTO, BindingResult bindingResult) throws BusinessException, UnsupportedEncodingException, NoSuchAlgorithmException {
        if (bindingResult.hasErrors()) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, Util.processErrorString(bindingResult));
        }
        UserModel userModel =  userService.login(userLoginDTO.getTelephone(), userLoginDTO.getPassword());
        return UnifyResponseSuccess.create(userModel);
    }

}
