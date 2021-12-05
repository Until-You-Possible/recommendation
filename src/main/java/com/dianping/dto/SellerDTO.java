package com.dianping.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
public class SellerDTO {

    @NotBlank(message = "name 不能为空")
    private String name;
    private Integer disabledFlag = 0;
    private Integer remark_score = 0;

}
