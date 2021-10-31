package com.dianping.core;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UnifyResponseSuccess {

    // status data
    private String status;
    private Object data;

    public static UnifyResponseSuccess create(Object result) {
        return UnifyResponseSuccess.create(result, "success");
    }

    public static UnifyResponseSuccess create(Object result, String status) {
        UnifyResponseSuccess unifyResponseSuccess = new UnifyResponseSuccess();
        unifyResponseSuccess.setStatus(status);
        unifyResponseSuccess.setData(result);
        return unifyResponseSuccess;
    }


}
