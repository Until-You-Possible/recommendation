package com.dianping.core;


import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    @ResponseBody
    public UnifyResponseSuccess doError(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Exception e) {
        if (e instanceof BusinessException) {
            return UnifyResponseSuccess.create(((BusinessException) e).getUnifyResponseError(), "fail");
        } else {
            UnifyResponseError unifyResponseError = new UnifyResponseError(EmBusinessError.UNKNOWN_ERROR);
            return UnifyResponseSuccess.create(unifyResponseError);
        }
    }

}
