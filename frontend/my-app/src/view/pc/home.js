import * as React from "react";
import SliderComponent from "../../components/pc/SliderComponent";
import SectionComponent from "../../components/pc/SectionComponent";
import { Layout } from "antd";
import "./index.css";
export default function PcHomeComponent() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SliderComponent />
            <SectionComponent />
        </Layout>
    )
}

