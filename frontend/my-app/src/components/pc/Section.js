import React from "react";
import Layout, {Content} from "antd/es/layout/layout";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
export default function SectionComponent() {
    return (
        <Layout className="site-layout">
            <HeaderComponent />
            <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    content
                </div>
            </Content>
            <FooterComponent />
        </Layout>
    )
}