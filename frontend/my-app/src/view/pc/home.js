import * as React from "react";
import SliderComponent from "../../components/pc/Slider";
import SectionComponent from "../../components/pc/Section";
import { Layout } from "antd";
import "./index.css";
// import { Route, Routes } from "react-router-dom";
export default function PcHomeComponent() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SliderComponent />
            <SectionComponent />
            {/*<Routes>*/}
            {/*    <Route path= "/home/info" element={<SectionComponent />} />*/}
            {/*</Routes>*/}
        </Layout>
    )
}

