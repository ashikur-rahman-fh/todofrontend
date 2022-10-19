import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer";
import Navbar from "./../Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TOAST_MESSAGE_DURATION } from "./constants";

const AppLayout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer
                position="bottom-left"
                autoClose={TOAST_MESSAGE_DURATION}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </React.Fragment>
    )
};

export default AppLayout;