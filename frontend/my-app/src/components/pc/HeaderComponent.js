import React from "react";
import { Col, Dropdown, Menu, Row, Layout, Button } from "antd";
const { Header } = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="https://www.antgroup.com">退出</a>
        </Menu.Item>
    </Menu>
);
export default function HeaderComponent() {
    return (
        <div>
            <Header className="site-layout-background" style={{ padding: 0 }} >
                <Row>
                    <Col span={2} push={22}>
                        <Dropdown overlay={menu} trigger={['click']} arrow>
                            <Button type="primary" shape="circle" size="large">
                                WG
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={22} pull={2}>
                    </Col>
                </Row>
            </Header>
        </div>
    )
}