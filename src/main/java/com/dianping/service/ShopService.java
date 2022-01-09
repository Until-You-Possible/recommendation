package com.dianping.service;

import com.dianping.core.BusinessException;
import com.dianping.model.ShopModel;

import java.util.List;

public interface ShopService {

    ShopModel create(ShopModel shopModel) throws BusinessException;
    ShopModel get(Integer id) throws BusinessException;
    List<ShopModel> selectAll();

}
