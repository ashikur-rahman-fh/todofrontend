import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import { Divider } from "@mui/material";

import { MENU_OPTION } from "./constants";
import "./style.scss";

const Navbar = (props) => {
    const { user, setUser } = useContext(UserContext);

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

    const handleLogout = () => {
        setUser(null);
        window.localStorage.removeItem('auth-token');
    };

    const renderUserInfo = () => {
        return (
            <div className="user-info-container">
                <span>{user?.name}</span>
                {user?.name && <Divider orientation="vertical" flexItem />}
                <span><Link className="log-out-link" href="/" onClick={handleLogout}>sign out</Link></span>
            </div>
        )
    };

    return (
        <header className="header-container outmost-container">
            <div className="option-user-menu-container">
                <nav className="nav-bar-container">
                    <ul className="menu-container">
                        {renderMenuOptions()}
                    </ul>
                </nav>
                {user && renderUserInfo()}
            </div>
        </header>
    )
};

export default Navbar;