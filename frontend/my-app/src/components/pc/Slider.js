import React, { useState, useEffect} from "react";
import {Image, Layout, Menu} from "antd";
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import "../../style/pc.css"
import logoURL from "../../asset/images/selfLogo.jpeg"
const { Sider: Slider } = Layout;
const { SubMenu } = Menu;

export default function SiderComponent() {

    const [collapsed] = useState(false);

    useEffect(() => {
        // getSiderMenu({}).then(res => {
        //     console.log("res", res);
        // });
    })

    return (
        <div className="SliderComponent">
                <Slider style={{height: "100%"}} collapsed={collapsed}>
                    <div className="logo">
                        <Image className="innerImage" src={logoURL} />
                    </div>
                    <Menu theme="dark" style={{height: "100%"}} defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                             首页
                        </Menu.Item>
                    </Menu>
                </Slider>
        </div>
    )
}


