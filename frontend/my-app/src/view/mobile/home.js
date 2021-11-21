import React from "react";
import "./style.scss"
import Header from "../../components/mobile/Header";
import Section from "../../components/mobile/Section";
import Footer from "../../components/mobile/Footer";
import {Router, Route} from "react-router-dom";
import { Routes } from "react-router"
import Login from "./login";
import NoMatch from "../../components/cmmmon/notMatch";

function Main() {
    return null;
}

export default function MobileHome() {
    return (
        <Router>
            <div className="mobileHomeContainer" data-component="mobile-home-component">
                <Header />
                <Routes>
                    <Route path= "/" exact>
                        <Section />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Routes>
                <Footer />
            </div>
        </Router>

    )
}