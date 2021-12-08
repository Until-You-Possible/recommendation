package com.dianping.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CategoryDTO {

    @NotBlank(message = "name不能为空")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public String getIconUrl() {
        return iconUrl;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
    }

    @NotNull(message = "sort不能为空")
    private Integer sort;
    private String iconUrl;
}
