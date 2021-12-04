import React from "react";
import { Col, Dropdown, Menu, Row, Layout, Button } from "antd";
import { getLogOut } from "../../api/pc";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;




export default function HeaderComponent() {
    const navigate = useNavigate();
    const  onClickMenu = (item) => {
        if (item.key === "0") {
            // 退出
            getLogOut().then(res => {
                if (res.status === "success") {
                    navigate("/login")
                }
            });
        }
    }
    const menu = (
        <Menu onClick={onClickMenu}>
            <Menu.Item key="0">
                退出
            </Menu.Item>
        </Menu>
    );
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