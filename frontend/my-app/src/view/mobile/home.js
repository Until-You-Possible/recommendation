import React from "react";
import "./style.scss"
import Header from "../../components/mobile/Header";
import Section from "../../components/mobile/Section";
import Footer from "../../components/mobile/Footer";
import {Route, Routes} from "react-router-dom";
import Login from "./login";

export default function MobileHome() {
    return (
            <div className="mobileHomeContainer" data-component="mobile-home-component">
                <Header />
                <Routes>
                    <Route path= "/home" exact element={<Section />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </div>

    )
}