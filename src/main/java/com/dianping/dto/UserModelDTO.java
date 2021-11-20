package com.dianping.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;


@Getter
@Setter
public class UserModelDTO {

    @NotBlank(message = "手机号不能为空")
    private String telephone;
    @NotBlank(message = "昵称不能为空")
    private String nickName;
    @NotBlank(message = "密码不能为空")
    private String password;
    private Integer gender;
}
