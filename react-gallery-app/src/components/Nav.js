import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/大阪">Osaka</NavLink></li>
            <li><NavLink to="/リンゴ">Apple</NavLink></li>
            <li><NavLink to="/バナナ">Banana</NavLink></li>
        </ul>
    </nav>
);

export default Nav;