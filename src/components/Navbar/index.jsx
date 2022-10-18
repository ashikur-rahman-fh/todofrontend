import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";

import { MENU_OPTION } from "./constants";
import "./style.scss";

const Navbar = (props) => {
    const { user } = useContext(UserContext);
    const renderMenuOptions = () => {
        return Object.keys(MENU_OPTION).map((menuKey) => {
            if (MENU_OPTION[menuKey]?.checkUser && !user) {
                return null;
            }
            return (
                <li key={menuKey} className="menu-option">
                    <Link to={MENU_OPTION[menuKey]?.link}>{MENU_OPTION[menuKey]?.text}</Link>
                </li>
            );
        })
    };

    return (
        <header className="header-container outmost-container">
            <nav className="nav-bar-container">
                <ul className="menu-container">
                    {renderMenuOptions()}
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;