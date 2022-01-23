package com.dianping.controller.admin;

import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.core.UnifyResponseSuccess;
import com.dianping.model.ShopModel;
import com.dianping.service.ShopService;
import com.dianping.until.util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController("/admin/shop")
@RequestMapping("/admin/shop")
@Validated
public class ShopController {

    @Autowired
    private ShopService shopService;

    @PostMapping("/creat")
    public UnifyResponseSuccess creat(@Valid @RequestBody ShopModel shopDTO, BindingResult bindingResult) throws BusinessException {
        if (bindingResult.hasErrors()) {
            throw  new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR,  util.processErrorString(bindingResult));
        }
        ShopModel shopModel = new ShopModel();
        shopModel.setIconUrl(shopDTO.getIconUrl());
        shopModel.setAddress(shopDTO.getAddress());
        shopModel.setCategoryId(shopDTO.getCategoryId());
        shopModel.setEndTime(shopDTO.getEndTime());
        shopModel.setStartTime(shopDTO.getStartTime());
        shopModel.setLongtitude(shopDTO.getLongtitude());
        shopModel.setLatitude(shopDTO.getLatitude());
        shopModel.setName(shopDTO.getName());
        shopModel.setPricePerMan(shopDTO.getPricePerMan());
        shopModel.setSellerId(shopDTO.getSellerId());
        shopService.create(shopModel);
        return getItem(shopModel.getId());
    }

    public UnifyResponseSuccess getItem(Integer id) throws BusinessException {
        ShopModel shopModel = shopService.get(id);
        if (shopModel == null) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, "查询不存在");
        }
        return UnifyResponseSuccess.create(shopModel);
    }

    @GetMapping("/get_current")
    public UnifyResponseSuccess get(@RequestParam(value = "id") Integer id) throws BusinessException {
        ShopModel shopModel = shopService.get(id);
        if (shopModel == null) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, "查询不存在");
        }
        return UnifyResponseSuccess.create(shopModel);
    }

    @GetMapping("/get_all_shop")
    public UnifyResponseSuccess getAll() {
        List<ShopModel> shopModels = shopService.selectAll();
        return UnifyResponseSuccess.create(shopModels);
    }
}
