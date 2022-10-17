import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer";
import Navbar from "./../Navbar";

const AppLayout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
};

export default AppLayout;