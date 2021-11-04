package com.dianping.core;

public class UnifyResponseError {

    //错误码
    private Integer errCode;


    //错误描述
    private String errMsg;

    public UnifyResponseError(Integer errCode, String errMsg) {
        this.errCode = errCode;
        this.errMsg = errMsg;
    }

    public UnifyResponseError(EmBusinessError emBusinessError){
        this.errCode = EmBusinessError.getErrCode();
        this.errMsg = EmBusinessError.getErrMsg();
    }

    public Integer getErrCode() {
        return errCode;
    }

    public void setErrCode(Integer errCode) {
        this.errCode = errCode;
    }

    public String getErrMsg() {
        return errMsg;
    }

    public void setErrMsg(String errMsg) {
        this.errMsg = errMsg;
    }
}
