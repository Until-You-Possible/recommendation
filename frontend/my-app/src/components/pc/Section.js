import React from "react";
import Layout, {Content} from "antd/es/layout/layout";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import {Route, Router, Routes, useRouteMatch} from "react-router-dom";
import SellerComponent from "./Seller";
import CategoryComponent from "./Category";
import IndexComponent from "./IndexComponent";
export default function SectionComponent() {
    return (
        <Layout className="site-layout">
            <HeaderComponent />
            <Content>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Routes>
                        <Route path="/index/*" element={<IndexComponent/>} />
                        <Route path="/seller/*" element={<SellerComponent/>} />
                        <Route path="/category/*" element={<CategoryComponent/>} />
                    </Routes>
                </div>
            </Content>
            <FooterComponent />
        </Layout>
    )
}