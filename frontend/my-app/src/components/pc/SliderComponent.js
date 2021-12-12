import React, { useState, useEffect} from "react";
import {Image, Layout, Menu} from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import "../../style/pc.css"
import logoURL from "../../asset/images/selfLogo.jpeg"
import {Link} from "react-router-dom";
const { Sider: SliderComponent } = Layout;
// const { SubMenu } = Menu;

export default function SiderComponent() {

    const [collapsed] = useState(false);

    useEffect(() => {
        // getSiderMenu({}).then(res => {
        //     console.log("res", res);
        // });
    })

    return (
        <div className="SliderComponent">
                <SliderComponent style={{height: "100%"}} collapsed={collapsed}>
                    <div className="logo">
                        <Image className="innerImage" src={logoURL} />
                    </div>
                    <Menu theme="dark" style={{height: "100%"}} defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <Link to="/home/index">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />}>
                            <Link to="/home/seller">商户</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<PieChartOutlined />}>
                            <Link to="/home/category">品类</Link>
                        </Menu.Item>
                    </Menu>
                </SliderComponent>
        </div>
    )
}

