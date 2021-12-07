package com.dianping.service.impl;

import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.dal.SellerModelMapper;
import com.dianping.model.SellerModel;
import com.dianping.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Service
public class SellerServiceImpl implements SellerService {

    @Autowired
    private  SellerModelMapper sellerModelMapper;


    @Override
    @Transactional
    public SellerModel create(SellerModel sellerModel) {
        sellerModel.setCreatedAt(new Date());
        sellerModel.setUpdatedAt(new Date());
        sellerModel.setRemarkScore(0);
        sellerModel.setDisableFlag(0);
        sellerModelMapper.insertSelective(sellerModel);
        return get(sellerModel.getId());
    }

    @Override
    public SellerModel get(Integer id) {
        return sellerModelMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<SellerModel> selectAll() {
        return sellerModelMapper.selectAll();
    }

    @Override
    public SellerModel changeStatus(Integer id, Integer disableFlag) throws BusinessException {
        SellerModel sellerModel = get(id);
        if (id == null) {
            throw new BusinessException(EmBusinessError.PARAMETER_VALIDATION_ERROR);
        }
        sellerModel.setDisableFlag(disableFlag);
        sellerModelMapper.updateByPrimaryKey(sellerModel);
        return sellerModel;
    }
}
