package com.dianping.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
public class UserLoginDTO {
    @NotBlank(message = "require telephone")
    private String telephone;
    @NotBlank(message = "require password")
    private String password;
}
