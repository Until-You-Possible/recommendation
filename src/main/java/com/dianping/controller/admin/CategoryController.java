package com.dianping.controller.admin;

import com.dianping.until.util;
import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.core.UnifyResponseSuccess;
import com.dianping.dto.CategoryDTO;
import com.dianping.model.CategoryModel;
import com.dianping.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController("/admin/category")
@RequestMapping("/admin/category")
@Validated
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/creat")
    public UnifyResponseSuccess creat(@Valid @RequestBody CategoryDTO categoryDTO, BindingResult bindingResult) throws BusinessException {
        if (bindingResult.hasErrors()) {
            throw  new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR,  util.processErrorString(bindingResult));
        }
        CategoryModel categoryModel = new CategoryModel();
        categoryModel.setName(categoryDTO.getName());
        categoryModel.setIconUrl(categoryDTO.getIconUrl());
        categoryModel.setSort(categoryDTO.getSort());
        categoryService.create(categoryModel);
        return get(categoryModel.getId());
    }

    @GetMapping("/get_current")
    public UnifyResponseSuccess get(@RequestParam(value = "id") Integer id) throws BusinessException {
        CategoryModel categoryModel = categoryService.get(id);
        if (categoryModel == null) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR);
        }
        return UnifyResponseSuccess.create(categoryModel);
    }

    @GetMapping("/get_all_category")
    public UnifyResponseSuccess getAll() {
        List<CategoryModel> categoryModel = categoryService.selectAll();
        return UnifyResponseSuccess.create(categoryModel);
    }
}
