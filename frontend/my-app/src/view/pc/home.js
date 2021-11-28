import * as React from "react";
import SliderComponent from "../../components/pc/Slider";
import SectionComponent from "../../components/pc/Section";
import {Layout} from "antd";
import "./index.css";
export default function PcHomeComponent() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SliderComponent />
            <SectionComponent />
        </Layout>
    )
}

