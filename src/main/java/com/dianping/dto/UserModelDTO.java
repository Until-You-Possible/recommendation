package com.dianping.dto;

import javax.validation.constraints.NotBlank;



public class UserModelDTO {

    @NotBlank(message = "手机号不能为空")
    private String telephone;
    @NotBlank(message = "昵称不能为空")
    private String nickName;
    @NotBlank(message = "密码不能为空")
    private String password;
    private Integer gender;

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }
}
