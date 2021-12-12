import React from "react";
import Layout, {Content} from "antd/es/layout/layout";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import {Route, Routes } from "react-router-dom";
import SellerComponent from "./SellerComponent";
import CategoryComponent from "./CategoryComponent";
import IndexComponent from "./IndexComponent";
export default function SectionComponent() {
    return (
        <Layout className="site-layout">
            <HeaderComponent />
            <Content style={{height: "400px", backgroundColor: "#fff", margin: "16px"}}>
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