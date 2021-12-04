import React from "react";
import {Form, Input, Checkbox, Button} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export default function PcLogin() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="PcLoginContainer">
              <div className="centerWrapper">
                  <div className="headerImage">

                  </div>
                  <Form
                      name="normal_login"
                      size="large"
                      className="login-form"
                      initialValues={{
                          remember: true,
                      }}
                      onFinish={onFinish}
                  >
                      <Form.Item
                          name="username"
                          rules={[
                              {
                                  required: true,
                                  message: 'Please input your Username!',
                              },
                          ]}
                      >
                          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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