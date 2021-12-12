package com.dianping.controller;


import com.dianping.until.util;
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

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Controller
@ResponseBody
@RequestMapping("/user")
@Validated
public class UserController {

    private static final String CURRENT_USER_SESSION = "";
    private final HttpServletRequest httpServletRequest;
    private final UserService userService;
    public UserController(HttpServletRequest httpServletRequest, UserService userService) {
        this.httpServletRequest = httpServletRequest;
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
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, util.processErrorString(bindingResult));
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
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, util.processErrorString(bindingResult));
        }
        UserModel userModel =  userService.login(userLoginDTO.getTelephone(), userLoginDTO.getPassword());
        // if user login successfully
        // set current user info
        httpServletRequest.getSession().setAttribute(CURRENT_USER_SESSION, userModel);
        return UnifyResponseSuccess.create(userModel);
    }
    // user logout
    @RequestMapping("/logout")
    public UnifyResponseSuccess login() throws BusinessException, UnsupportedEncodingException, NoSuchAlgorithmException {
        httpServletRequest.getSession().invalidate();
        return UnifyResponseSuccess.create(null);
    }

    // get current user info
    @RequestMapping("getUserInfo")
    public UserModel getUserInfo() {
        return (UserModel) httpServletRequest.getSession().getAttribute(CURRENT_USER_SESSION);
    }



}
