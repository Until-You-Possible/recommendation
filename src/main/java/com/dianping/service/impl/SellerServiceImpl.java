package com.dianping.service.impl;

import com.dianping.model.SellerModel;
import com.dianping.service.SellerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SellerServiceImpl implements SellerService {
    @Override
    public SellerModel create(SellerModel sellerModel) {
        return null;
    }

    @Override
    public SellerModel get(Integer id) {
        return null;
    }

    @Override
    public List<SellerModel> selectAll() {
        return null;
    }

    @Override
    public SellerModel changeStatus(Integer id, Integer disableFlag) {
        return null;
    }
}
