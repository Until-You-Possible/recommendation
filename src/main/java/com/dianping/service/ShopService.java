package com.dianping.service;

import com.dianping.model.ShopModel;

import java.util.List;

public interface ShopService {

    ShopModel create(ShopModel shopModel);
    ShopModel get(Integer id);
    List<ShopModel> selectAll();

}
