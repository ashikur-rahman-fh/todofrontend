import React, { useContext } from "react";
import { UserContext } from "../context";
import LoginForm from "../LoginForm";
import LoggedUser from "./LoggedUser";

import { WHAT_TODO_TEXT, WELCOME_TEXT } from "./constants";
import "./style.scss";
const Homepage = (props) => {
    const { user } = useContext(UserContext);

    const renderPageContent = () => {
        if (user) {
            return <LoggedUser />;
        }

        return (
            <div className="login-container">
                <LoginForm />
            </div>
        );
    }
    return (
        <section className="homepage outmost-container">
            <div className="welcome-message">
                <div className="welcome-text">{WELCOME_TEXT} {user?.name}{'!'}</div>
                <div className="what-todo-text">{WHAT_TODO_TEXT}</div>
            </div>
            
            {renderPageContent()}
            
        </section>
    );
};

export default Homepage;