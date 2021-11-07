package com.dianping.core;

public class BusinessException extends Exception{

    private UnifyResponseError unifyResponseError;

    public UnifyResponseError getUnifyResponseError() {
        return unifyResponseError;
    }

    public void setUnifyResponseError(UnifyResponseError unifyResponseError) {
        this.unifyResponseError = unifyResponseError;
    }

    public BusinessException(EmBusinessError emBusinessError) {
        super();
        this.unifyResponseError = new UnifyResponseError(emBusinessError);

    }

    public BusinessException(EmBusinessError emBusinessError, String errMsg) {
        super();
        this.unifyResponseError = new UnifyResponseError(emBusinessError);
        this.unifyResponseError.setErrMsg(errMsg);
    }




}
