import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const LoggedUser = (props) => {
    return (
        <section className="logged-in-page">
            <div className="goto-task-container">
                <Link to={"/todo"}>Click! To see your tasks</Link>
            </div>
        </section>
    );
}

export default LoggedUser;
