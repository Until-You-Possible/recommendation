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
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import javax.annotation.Resource;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Date;


@Service
public class UserServiceImpl implements UserService {

    @Resource
    private  UserModelMapper userModelMapper;

    @Override
    public UserModel getUser(Integer id) {
        return userModelMapper.selectByPrimaryKey(id);
    }

    @Override
    @Transactional
    public UserModel register(UserModel registerUser) throws BusinessException, NoSuchAlgorithmException {
        registerUser.setCreateAt(new Date());
        registerUser.setUpdateAt(new Date());
        registerUser.setPassword(makeMD5(registerUser.getPassword()));
        try {
            userModelMapper.insertSelective(registerUser);
        } catch (DuplicateKeyException duplicateKeyException) {
            throw new BusinessException(EmBusinessError.REGISTER_DUP_FAIL);
        }
        return getUser(registerUser.getId());
    }

    // 对密码进行md5加密
    public String makeMD5(String str) throws NoSuchAlgorithmException {
        // 确认md5加密方法
        MessageDigest messageDigest = MessageDigest.getInstance("MD5");
        BASE64Encoder base64Encoder = new BASE64Encoder();
        return base64Encoder.encode(messageDigest.digest(str.getBytes(StandardCharsets.UTF_8)));
    }
}
