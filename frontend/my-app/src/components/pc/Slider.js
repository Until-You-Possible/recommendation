import React, { useState, useEffect} from "react";
import {Layout, Menu} from "antd";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {getSiderMenu} from "../../api/sider";
const { Sider: Slider } = Layout;
const { SubMenu } = Menu;


export default function SiderComponent() {

    const [collapsed] = useState(false);

    useEffect(() => {
        getSiderMenu({}).then(res => {
            console.log("res", res);
        });
    })

    return (
        <div className="SliderComponent">
                <Slider style={{height: "100%"}} collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" style={{height: "100%"}} defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <SubMenu key="sub6" icon={<TeamOutlined />} title="Inner">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="88">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Slider>
        </div>
    )
}


