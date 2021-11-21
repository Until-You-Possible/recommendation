import React from "react";
import "./style.scss"
import Header from "../../components/mobile/Header";
import Section from "../../components/mobile/Section";
import Footer from "../../components/mobile/Footer";
import {Router, Route, Switch} from "react-router-dom";
import { Routes } from "react-router"
import Login from "./login";
import NoMatch from "../../components/cmmmon/notMatch";
const Main = () => <h1>Hello world</h1>;
export default function MobileHome() {
    return (
            <div className="mobileHomeContainer" data-component="mobile-home-component">
                <Header />
                <Switch>
                    <Route path= "/" exact>
                        <Main />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
                <Footer />
            </div>
    )
}