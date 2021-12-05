package com.dianping.service.impl;

import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.dal.UserModelMapper;
import com.dianping.model.UserModel;
import com.dianping.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sun.misc.BASE64Encoder;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private  UserModelMapper userModelMapper;

    @Override
    public UserModel getUser(Integer id) {
        return userModelMapper.selectByPrimaryKey(id);
    }

    @Override
    @Transactional
    public UserModel register(UserModel registerUser) throws BusinessException, UnsupportedEncodingException, NoSuchAlgorithmException {
        registerUser.setPassword(encodeByMd5(registerUser.getPassword()));
        registerUser.setCreateAt(new Date());
        registerUser.setUpdateAt(new Date());

        try{
            userModelMapper.insertSelective(registerUser);
        }catch (DuplicateKeyException ex){
            throw new BusinessException(EmBusinessError.REGISTER_DUP_FAIL);
        }

        return getUser(registerUser.getId());
    }

    @Override
    public UserModel login(String telephone, String password) throws UnsupportedEncodingException, NoSuchAlgorithmException, BusinessException {
        UserModel userModel = userModelMapper.selectByPasswordAndTelePhone(telephone, encodeByMd5(password));
        if (userModel == null) {
            throw  new BusinessException(EmBusinessError.LOGIN_FAIL);
        }
        return userModel;
    }

    @Override
    public Integer countAllUser() {
        return userModelMapper.countAllUser();
    }

    private String encodeByMd5(String str) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        //确认计算方法MD5
        MessageDigest messageDigest = MessageDigest.getInstance("MD5");
        BASE64Encoder base64Encoder = new BASE64Encoder();
        return base64Encoder.encode(messageDigest.digest(str.getBytes(StandardCharsets.UTF_8)));

    }
}
