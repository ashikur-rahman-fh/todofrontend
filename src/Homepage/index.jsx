import React from "react";
import LoginForm from "../LoginForm";

import { WHAT_TODO_TEXT, WELCOME_TEXT } from "./constants";
import "./style.scss";
const Homepage = (props) => {
    return (
        <section className="homepage outmost-container">
            <div className="welcome-message">
                <div className="welcome-text">{WELCOME_TEXT}</div>
                <div className="what-todo-text">{WHAT_TODO_TEXT}</div>
            </div>
            <div className="login-container">
                <LoginForm />
            </div>
        </section>
    );
};

export default Homepage;