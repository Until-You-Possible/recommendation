package com.dianping.controller.admin;

import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.core.UnifyResponseSuccess;
import com.dianping.dto.CategoryDTO;
import com.dianping.model.CategoryModel;
import com.dianping.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController("/admin/category")
@RequestMapping("/admin/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/creat")
    public UnifyResponseSuccess creat(@RequestBody CategoryDTO categoryDTO, BindingResult bindingResult) throws BusinessException {
        if (bindingResult.hasErrors()) {
            throw  new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR);
        }
        CategoryModel categoryModel = new CategoryModel();
        categoryModel.setName(categoryDTO.getName());
        categoryModel.setIconUrl(categoryDTO.getIconUrl());
        categoryModel.setSort(categoryDTO.getSort());
        categoryService.create(categoryModel);
        return get(categoryModel.getId());
    }

    @GetMapping("/get_current")
    public UnifyResponseSuccess get(@RequestParam(value = "id") Integer id) {
        CategoryModel categoryModel = categoryService.get(id);
        return UnifyResponseSuccess.create(categoryModel);
    }

    @GetMapping("/get_all_category")
    public UnifyResponseSuccess getAll() {
        List<CategoryModel> categoryModel = categoryService.selectAll();
        return UnifyResponseSuccess.create(categoryModel);
    }
}
