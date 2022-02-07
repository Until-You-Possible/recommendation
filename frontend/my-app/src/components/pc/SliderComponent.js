import React, { useState, useEffect} from "react";
import {Image, Layout, Menu} from "antd";
import {AppleOutlined, GithubOutlined, PieChartOutlined, WindowsOutlined} from "@ant-design/icons";
import "../../style/pc.css"
import logoURL from "../../asset/images/selfLogo.jpeg"
import {Link} from "react-router-dom";
import {routesMenu} from "../../route";
const { Sider: SliderComponent } = Layout;

export default function SiderComponent() {

    const [collapsed] = useState(false);

    const getIconFunction = (item) => {
        if (item.name === "HOME") {
            return <PieChartOutlined />
        }
        if (item.name === "CATEGORY") {
            return <WindowsOutlined />
        }
        if (item.name === "SHOP") {
            return <AppleOutlined />
        }
        if (item.name === "SELLER") {
            return <GithubOutlined />
        }

    }

    useEffect(() => {
    });

    return (
        <div className="SliderComponent">
                <SliderComponent style={{height: "100%"}} collapsed={collapsed}>
                    <div className="logo">
                        <Image className="innerImage" src={logoURL} />
                    </div>

                    <Menu theme="dark"
                          style={{height: "100%"}}
                          defaultSelectedKeys={['1']}
                          mode="inline">
                        {
                            routesMenu.length && routesMenu.map(item =>
                                (
                                    <Menu.Item key={item.id} icon={ getIconFunction(item)}>
                                        <Link to={ "/home" + item.path}>{item.name}</Link>
                                    </Menu.Item>
                                )
                            )
                        }
                    </Menu>
                </SliderComponent>
        </div>
    )
}


