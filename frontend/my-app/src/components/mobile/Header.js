
import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="headerWrap">
            <div className="left-location">
                上海
            </div>
            <div className="center-name">
                center name
            </div>
            <div className="login-entry">
                <Link to="/login">
                    登陆
                </Link>
            </div>
        </div>
    )
}