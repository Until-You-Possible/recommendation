import React from "react";
import {Breadcrumb, Col, Image, Row, Avatar, Dropdown, Menu} from "antd";
import Layout, {Content} from "antd/es/layout/layout";
import {Footer, Header} from "antd/lib/layout/layout";
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);
export default function SectionComponent() {
    return (
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} >
                <Row>
                    <Col span={2} push={22}>
                        <Dropdown overlay={menu} trigger={['click']} arrow>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Avatar style={{ verticalAlign: 'middle' }} size="large" >
                                    USER
                                </Avatar>
                            </a>
                        </Dropdown>,

                    </Col>
                    <Col span={22} pull={2}>
                    </Col>
                </Row>
                {/*<Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />*/}
            </Header>
            <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Bill is a cat.
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>arhturwanggang@outlook.com</Footer>
        </Layout>
    )
}