package com.dianping.dal;

import com.dianping.model.UserModel;
import org.apache.ibatis.annotations.Param;

public interface UserModelMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Sat Nov 20 23:09:34 CST 2021
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Sat Nov 20 23:09:34 CST 2021
     */
    int insert(UserModel record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Sat Nov 20 23:09:34 CST 2021
     */
    int insertSelective(UserModel record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Sat Nov 20 23:09:34 CST 2021
     */
    UserModel selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Sat Nov 20 23:09:34 CST 2021
     */
    int updateByPrimaryKeySelective(UserModel record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Sat Nov 20 23:09:34 CST 2021
     */
    int updateByPrimaryKey(UserModel record);

    UserModel selectByPasswordAndTelePhone(@Param("telephone") String telephone, @Param("password")String password);
}