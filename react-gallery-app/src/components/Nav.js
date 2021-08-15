/*
 * Nav.js
 */

// Import modules
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/大阪">大阪</NavLink></li>
            <li><NavLink to="/リンゴ">リンゴ</NavLink></li>
            <li><NavLink to="/バナナ">バナナ</NavLink></li>
        </ul>
    </nav>
);

export default Nav;