import React from "react";
import {Form, Input, Checkbox, Button} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import HeaderImageURL from "../../asset/images/headerGood.jpeg"
import {getLogin} from "../../api/pc";
import { useNavigate } from "react-router-dom";
export default function PcLogin() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        getLogin(values).then(res => {
            console.log("res", res);
            if (res.status === "success") {
                // 跳转主页
                navigate("/home")
            }
        });
    };

    return (
        <div className="PcLoginContainer">
              <div className="centerWrapper">
                  <div className="headerImage">
                      <img src={HeaderImageURL} alt="avatar"/>
                  </div>
                  <Form
                      name="normal_login"
                      size="large"
                      className="login-form"
                      autoComplete="off"
                      initialValues={{
                          remember: true,
                      }}
                      onFinish={onFinish}
                  >
                      <Form.Item
                          name="email"
                          rules={[
                              {
                                  required: true,
                                  message: 'Please input your Email!',
                              },
                          ]}
                      >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                      </Form.Item>
                      <Form.Item
                          name="password"
                          rules={[
                              {
                                  required: true,
                                  message: 'Please input your Password!',
                              },
                          ]}
                      >
                          <Input
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="Password"
                          />
                      </Form.Item>
                      <Form.Item>
                          <Form.Item name="remember" valuePropName="checked" noStyle>
                              <Checkbox>Remember me</Checkbox>
                          </Form.Item>
                      </Form.Item>

                      <Form.Item>
                          <Button type="primary" htmlType="submit" className="login-form-button">
                              Log in
                          </Button>
                      </Form.Item>
                  </Form>
              </div>
        </div>
    )
}