import React, { useState, useEffect} from "react";
import {Image, Layout, Menu} from "antd";
import {AppstoreOutlined, BankOutlined, PieChartOutlined} from "@ant-design/icons";
import "../../style/pc.css"
import logoURL from "../../asset/images/selfLogo.jpeg"
import {Link} from "react-router-dom";
import {routesMenu} from "../../route";
const { Sider: SliderComponent } = Layout;
// const { SubMenu } = Menu;

export default function SiderComponent() {

    const [collapsed] = useState(false);

    useEffect(() => {
        // getSiderMenu({}).then(res => {
        //     console.log("res", res);
        // });
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
                            routesMenu.map(item =>
                                (
                                    <Menu.Item key={item.id} icon={<PieChartOutlined />}>
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


