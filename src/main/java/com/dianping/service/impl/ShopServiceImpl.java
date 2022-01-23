package com.dianping.service.impl;

import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.dal.ShopModelMapper;
import com.dianping.model.CategoryModel;
import com.dianping.model.SellerModel;
import com.dianping.model.ShopModel;
import com.dianping.service.CategoryService;
import com.dianping.service.SellerService;
import com.dianping.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ShopServiceImpl implements ShopService {

    @Autowired
    private  ShopModelMapper shopModelMapper;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private SellerService sellerService;

    @Override
    public ShopModel create(ShopModel shopModel) throws BusinessException {
        shopModel.setCreatedAt(new Date());
        shopModel.setUpdatedAt(new Date());
        // 检查商家商户正确
        SellerModel sellerModel = sellerService.get(shopModel.getSellerId());
        if (sellerModel == null) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, "商户不存在");

        }
        // 检查商家是否被禁用
        int isFlag = sellerModel.getDisableFlag();
        if (isFlag == 1) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, "商户已经禁用");
        }
        // 对类目的校验
        CategoryModel categoryModel = categoryService.get(shopModel.getCategoryId());
        if (categoryModel == null) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, "category 不存在");
        }
        shopModelMapper.insertSelective(shopModel);
        return get(shopModel.getId());
    }

    @Override
    public ShopModel get(Integer id) throws BusinessException {
        ShopModel shopModel = shopModelMapper.selectByPrimaryKey(id);
        if (shopModel == null) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR, "查询不存在");
        }
        shopModel.setCategoryModel(categoryService.get(shopModel.getCategoryId()));
        shopModel.setSellerModel(sellerService.get(shopModel.getSellerId()));
        return  shopModel;
    }

    @Override
    public List<ShopModel> selectAll() {
        List<ShopModel> shopModelList = shopModelMapper.selectAll();
        shopModelList.forEach(shopModel -> {
            shopModel.setCategoryModel(categoryService.get(shopModel.getCategoryId()));
            shopModel.setSellerModel(sellerService.get(shopModel.getSellerId()));
        });
        return shopModelList;
    }
}
