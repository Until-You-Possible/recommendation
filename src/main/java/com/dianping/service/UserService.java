package com.dianping.service;

import com.dianping.core.BusinessException;
import com.dianping.model.UserModel;

import java.security.NoSuchAlgorithmException;

public interface UserService {

    UserModel getUser(Integer id);
    UserModel register(UserModel userModel) throws BusinessException, NoSuchAlgorithmException;

}
