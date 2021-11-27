package com.dianping.core;

import com.dianping.controller.admin.AdminController;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Method;

@Configuration
@Aspect
public class controllerAspect {

    @Autowired
    private HttpServletRequest httpServletRequest;

    @Around("execution(* com.dianping.controller.admin.*.*(..)) && @annotation(org.springframework.web.bind.annotation.RequestMapping)")
    public Object AdminControllerBeforeValidation (ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        // get method
        Method method  = ((MethodSignature) proceedingJoinPoint.getSignature()).getMethod();
        // 获取打标签的class
        AdminPermission adminPermission = method.getAnnotation(AdminPermission.class);
        if (adminPermission == null) {
            // 进入就是公共方法.直接放行
            return proceedingJoinPoint.proceed();
        }
        // 判断当前是否是管理员登陆
        String email = (String) httpServletRequest.getSession().getAttribute(AdminController.CURRENT_USER_INFO);
        if (!StringUtils.hasLength(email)) {
            // 直接返回让去登陆
            throw new BusinessException(EmBusinessError.ADMIN_SHOULD_LOGIN);
        } else {
            return proceedingJoinPoint.proceed();
        }

    }


}
