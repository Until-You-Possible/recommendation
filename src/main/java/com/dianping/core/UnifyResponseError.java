package com.dianping.core;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
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
        this.errCode = emBusinessError.getErrCode();
        this.errMsg = emBusinessError.getErrMsg();
    }


    public void setErrCode(Integer errCode) {
        this.errCode = errCode;
    }


    public void setErrMsg(String errMsg) {
        this.errMsg = errMsg;
    }
}
